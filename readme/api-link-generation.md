# API Link Generation

This document is the authoritative reference for how API documentation links are generated during the docs build. It covers both data sources (TypeDoc and apiMap), all transformation passes, per-platform specifics, the URL construction rules, what is intentionally excluded from linking, and how to maintain the system.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Data sources and file paths](#2-data-sources-and-file-paths)
3. [Pass routing: which transformer runs](#3-pass-routing-which-transformer-runs)
4. [TypeDoc pass in detail](#4-typedoc-pass-in-detail)
5. [Legacy apiMap pass in detail](#5-legacy-apimap-pass-in-detail)
6. [Platform-specific URL rules](#6-platform-specific-url-rules)
7. [Inline-code preprocessing (platform prefix stripping)](#7-inline-code-preprocessing-platform-prefix-stripping)
8. [What is NOT transformed into a link](#8-what-is-not-transformed-into-a-link)
9. [Front-matter and context resolution](#9-front-matter-and-context-resolution)
10. [Configuration reference](#10-configuration-reference)
11. [Maintenance guide](#11-maintenance-guide)

---

## 1. Overview

Every markdown topic goes through the `MarkdownTransformer`. During transformation, every `` `inlineCode` `` node in the AST is a candidate for becoming a clickable API documentation link. The transformer decides, per node, whether that code token maps to a known type or member, and if so replaces the `inlineCode` node with a `link` node whose child is the original `inlineCode`.

The system supports four platforms: **Angular**, **React**, **WebComponents**, **Blazor**.

There are two independent resolver strategies in use, potentially both active at once:

| Strategy | Resolver class | Data source |
|---|---|---|
| TypeDoc (preferred) | `TypeDocApiResolver` | TypeDoc JSON files |
| Legacy apiMap | `MappingLoader` + `getApiLink()` | `*.apiMap.json` files |

---

## 2. Data sources and file paths

### TypeDoc JSON files

TypeDoc JSON files live in the same platform folder as apiMap files, distinguished by **not** ending in `.apiMap.json` or `.overrides.json`:

```
apiMap/<Platform>/<name>.json         ← TypeDoc input (e.g. igniteui-webcomponents.json)
```

Discovery logic at build time (`loadTypeDocResolver` in `MarkdownTransformer.ts`):

```
apiMap/<Platform>/
  ├── *.json                ← loaded as TypeDoc (one or more files)
  ├── *.apiMap.json         ← loaded as apiMap (excluded from TypeDoc)
  └── *.overrides.json      ← loaded as apiMap override (excluded from TypeDoc)
```

If no TypeDoc JSON files are found for a platform, the resolver is simply not created and the legacy apiMap pass runs alone.

### apiMap files

apiMap files are loaded by the gulp pipeline before transformation begins (`buildPlatform` in `gulpfile.js`):

```
./apiMap/<Platform>/**/*apiMap.json           ← primary mapping data
./apiMap/<Platform>/**/*apiMap.overrides.json ← manual override mappings
```

Override files follow the same JSON format as regular apiMap files. They are used to manually add or patch entries for components that are not fully covered by the automated mapping generation. See [readme/api-mapping.md](api-mapping.md) for how to update apiMap data.

---

## 3. Pass routing: which transformer runs

Routing happens in `transformCodeRefs()` in `MarkdownTransformer.ts`:

```
┌──────────────────────────────────────────────────────────────────┐
│                   transformCodeRefs(options)                      │
│                                                                   │
│  TypeDoc resolver loaded?  apiMap types present?                  │
│                                                                   │
│  No TypeDoc, No apiMap  → (nothing, skip)                        │
│  No TypeDoc, apiMap     → legacy apiMap pass only                │
│  TypeDoc, No apiMap     → TypeDoc/simple pass only               │
│  TypeDoc + apiMap       → TypeDoc/simple pass THEN legacy pass   │
│                             (unresolved inlineCode falls through) │
└──────────────────────────────────────────────────────────────────┘
```

In the combined mode, the TypeDoc pass converts resolved nodes from `inlineCode` to `link`, so the legacy pass naturally skips them — it only visits remaining `inlineCode` nodes.

---

## 4. TypeDoc pass in detail

**Transformer:** `transformCodeRefsSimple()` in `MarkdownTransformer.simple.ts`  
**Resolver:** `TypeDocApiResolver` in `TypeDocApiResolver.ts`

### 4a. What the resolver indexes

On load, `TypeDocApiResolver.load(filePath)` parses a TypeDoc JSON file and indexes every recognized declaration into three lookup maps:

| Map | Key | Example |
|---|---|---|
| `typesByPlatformName` | Exact platform name | `IgrList` |
| `typesByGenericName` | Stripped name (no prefix/suffix) | `List` |
| `typesByLowerName` | Lowercase fallback | `igrlist`, `list` |

**Supported TypeDoc JSON shapes:**

1. **Module-grouped** — declarations are children of `kind === MODULE` nodes. Each module name becomes the `module` field on the type info (e.g. `igniteui-react`, `igniteui-react-grids`).
2. **Flat root-level** — declarations are direct children of the root (e.g. `igniteui-webcomponents.json`). The `packageName` field on the root is used as the module name; if missing, `igniteui-<platform>` is used as fallback.

**Recognized declaration kinds:**

| TypeDoc `kind` | Indexed as |
|---|---|
| `CLASS` (128) | `class` |
| `INTERFACE` (256) | `interface` |
| `ENUM` (8) | `enum` |
| `TYPE_ALIAS` (2097152) | `type` |

**Recognized member kinds:**

| TypeDoc `kind` | Indexed as |
|---|---|
| `PROPERTY` (1024) | `property` |
| `METHOD` (2048) | `method` |
| `GET_SIGNATURE` (262144) | `accessor` |
| `REFERENCE` (1048576) | `event` |
| `ENUM_MEMBER` (16) | `enum-member` |

Members are indexed by original name on the type's `members` Map.

**First-winner rule:** If two modules export a type with the same generic name (e.g. `List`), whichever file is loaded first wins for the `typesByGenericName` entry. Platform-specific names (e.g. `IgrList`) are always indexed individually and do not conflict.

### 4b. Type lookup order

When a token such as `Grid` or `IgrList` is encountered, `findType()` tries in order:

1. Exact match in `typesByPlatformName` (e.g. `IgrList`)
2. Match in `typesByGenericName` (e.g. `List`)
3. Prefixed form: `config.prefix + name` (e.g. `IgrList`)
4. Prefixed + suffixed form: `config.prefix + name + config.suffix` (e.g. `IgcListComponent`)
5. Case-insensitive fallback in `typesByLowerName`

### 4c. Member lookup order

When a member name accompanies a type (e.g. `Grid.primaryKey`), `findMember()` tries:

1. Exact match by member name
2. Exact match by lowercased name
3. Case-insensitive scan of all member keys

If the member is not found in the TypeDoc data but the type is known, the link is still generated using the raw member name as the fragment — inherited members may exist at runtime even if not present in the JSON.

### 4d. Bare-member resolution (context-aware)

When a token has **no dot** (e.g. just `selection`), the pass first attempts to resolve it as a **member of one of the context types** (from front-matter `typeName` and `mentionedTypes`) before trying it as a type name. This prevents accidental links like `Select` → `IgrSelect` when `Select` is actually a property of the current component being documented.

See [Section 9](#9-front-matter-and-context-resolution) for how context types are populated.

### 4e. URL construction

URL built by `buildUrl()`:

```
{apiRoot|typeDocApiRoot}/{categoryPath}/{modulePrefix}{typeName.toLowerCase()}.html
```

Where:
- `typeDocApiRoot` is used if configured for the platform, otherwise `apiRoot`
- `categoryPath` comes from `typePatterns` in `api-config.json` (e.g. `classes/`, `enums/`)
- `typeName` is always lowercased
- `modulePrefix` depends on `typeDocFilenameUseModulePrefix`:

| Platform | `typeDocFilenameUseModulePrefix` | Prefix example |
|---|---|---|
| React | `true` | `igniteui-react.` or `igniteui-react-grids.` |
| WebComponents | `false` | `""` (core pkg) or `igniteui_webcomponents_grids.` (sub-pkg) |

For sub-packages when `typeDocFilenameUseModulePrefix` is false, the module name is joined with `packageJoin` (default `_`) and a trailing `.` is appended.

Member fragment:
```
{url}#{memberName}
```
The member name fragment preserves **exact casing** as resolved from the TypeDoc data — this is critical for anchor navigation on the API documentation pages.

---

## 5. Legacy apiMap pass in detail

**Transformer:** `transformCodeRefsLegacy()` in `MarkdownTransformer.ts`  
**Data:** `MappingLoader` (built from `*.apiMap.json` + `*.overrides.json`)

### 5a. Resolution order

For each `inlineCode` token, the legacy pass attempts:

1. **Member of current `typeName`** — looks up the token as a member name of the active type context
2. **Member of `mentionedTypes`** — iterates front-matter mentioned types and tries each as the owner
3. **Type name** — falls back to treating the whole token as a type name

If none succeed, the node is left unchanged as `inlineCode`.

### 5b. Legacy placeholder substitution

The legacy pass supports inline placeholders that are expanded per-platform **before** any mapping lookup:

| Placeholder | Expanded to | Example |
|---|---|---|
| `Ig$` | Pascal-case platform prefix | `Igx` / `Igr` / `Igc` / `Igb` |
| `Component` suffix in `Ig$…Component` | Platform-specific suffix | `Component` / `""` |
| `ig$-` | Spinal-case platform prefix | `igx-` / `igr-` / `igc-` / `igb-` |
| `-component` suffix in `ig$-…-component` | Spinal-case suffix | `""` |

These are replaced in the raw `node.value` before type/member resolution so docs can be written once and work across platforms.

### 5c. URL construction

URL built by `getApiLink()`:

```
Angular/React/WC:
  {apiRoot}{classes|enums|interfaces|types}/{packagePrefix}{resolvedTypeName.toLowerCase()}.html

Blazor:
  {apiRoot}{BlazorNamespace}.{resolvedTypeName}.html
```

**Package prefix** computation (`urlNameJoinSymbol` = `_` by default, or `-` if `apiDocOverrideBuildURLDashed` is set):

| Package | Prefix example |
|---|---|
| `igniteui-webgrids` | `igniteui_react_grids_grids.` |
| `igniteui-data-grids` | `igniteui_react_grids.` |
| `igniteui-webinputs` | `""` (Angular/WC) or `igniteui_react.` (React) |
| Others | `igniteui_{platform}_{packageSuffix}.` |

**Member fragment** for Blazor is structured differently:

```
#{BlazorNamespace_with_underscores}_{resolvedTypeName}_{memberName}
```

For Angular/React/WC the fragment is simply:

```
#{memberName}
```

Note: the legacy pass **does not** preserve member casing — it uses whatever the apiMap resolves (already lowercased in URL path, raw in fragment). See [Section 8](#8-what-is-not-transformed-into-a-link) for why certain names are skipped.

### 5d. Dock Manager special case

In the legacy pass, **Angular and WebComponents** platforms apply post-processing to any generated link that refers to a Dock Manager type. The link URL is rewritten to the standalone Dock Manager API site and the type prefix is normalized to `Igc`:

- `ignite-ui-angular/api/docs` → `ignite-ui/dock-manager/docs`
- `ignite-ui-web-components/api/docs` → `ignite-ui/dock-manager/docs`
- Prefix `Igr`/`Igx` → `Igc`
- Classes get `Component` suffix ensured
- Enums and interfaces have `/classes/` replaced with `/enums/` or `/interfaces/`

This is hardcoded with named lists of Dock Manager enum and interface names in `MarkdownTransformer.ts`.

### 5e. Package-based API root overrides

After URL construction, the legacy pass checks whether the resolved type belongs to a package listed in `apiDocOverridePackages` (from the platform docs config). If so, it replaces `apiDocRoot` with `apiDocOverrideRoot` in the URL. A similar per-component override using `apiDocOverrideComponents` (regex match) is also applied.

---

## 6. Platform-specific URL rules

| Platform | Prefix | Suffix | apiMap URL pattern |
|---|---|---|---|
| Angular | `Igx` | `Component` | `.../ignite-ui-angular/docs/typescript/latest/{category}/{file}.html` |
| React | `Igr` | `""` | `.../ignite-ui-react/api/docs/typescript/latest/{category}/{file}.html` |
| React (TypeDoc) | `Igr` | `""` | `.../ignite-ui-react/docs/typescript/latest/{category}/{file}.html` |
| WebComponents | `Igc` | `Component` | `.../ignite-ui-web-components/api/docs/typescript/latest/{category}/{file}.html` |
| WebComponents (TypeDoc) | `Igc` | `Component` | `.../ignite-ui-web-components/docs/typescript/latest/{category}/{file}.html` |
| Blazor | `Igb` | `""` | `.../blazor-apps/blazor-api/api/{BlazorNamespace}.{TypeName}.html` |

**Interface detection heuristic** (Angular/React/WC legacy pass): if the resolved type name starts with `I` followed by an uppercase letter, it is assumed to be an interface and the URL uses `interfaces/` instead of `classes/`.

---

## 7. Inline-code preprocessing (platform prefix stripping)

**Before** any API resolver runs, `transformDocPlaceholders()` strips known platform prefixes from `inlineCode` node values:

- `Igb` → `""`
- `Igc` → `""`
- `Igr` → `""`
- `Igx` → `""`

This means documentation authors can write generic names like `Grid` or `CategoryChart` and the transformer handles the platform-specific prefix internally. It also means writing `IgxGrid` in a doc will silently become `Grid` before resolution, which is fine but redundant.

---

## 8. What is NOT transformed into a link

### TypeDoc/simple pass exclusions

The simple pass (`MarkdownTransformer.simple.ts`) immediately returns without processing any `inlineCode` whose value contains any of the following:

| Pattern | Reason |
|---|---|
| `sample=` | Sample viewer directive |
| `height=` | Sample viewer directive |
| `=` | Generic assignment expression |
| `:` | CSS property, type annotation, or other non-API code |
| `&` | HTML entity or logical operator |
| `{` | Template/object expression |
| Starts with `--` | CSS custom property |
| Contains a space | Not a valid identifier |

**CSS part and slot suppression:** To prevent false positives in styling reference tables and prose, the pass also suppresses linking for tokens that:

- Look like a UI part/slot name: all lowercase, matches `/^[a-z][a-zA-Z0-9-]*$/`, no dot
- Appear inside a **table**, **paragraph**, **blockquote**, or **list item** where the context text (or preceding sibling text) matches slot/CSS-part keywords: `css part(s)`, `slot(s)`, `slot content`, `part name`, `slot name`
- Also applies to raw markdown pipe-table paragraphs (not yet parsed as a real `table` node) when a preceding sibling contains the slot/CSS-part keywords

### Legacy apiMap pass exclusions

| Condition | Behavior |
|---|---|
| Empty value `""` | Warns and skips |
| Contains `sample=` or `height=` | Skips (sample viewer) |
| Starts with `--` | Skips (CSS custom property) |
| Unresolved by all lookups | Left as `inlineCode`, no link created |
| Has a space (no dot, no inline code) | Warns about possible typo and skips |

---

## 9. Front-matter and context resolution

Each markdown file carries a YAML front-matter block. The transformer reads it via `getFrontMatterTypes()` and populates `options.mentionedTypes` and `options.namespace`.

### `mentionedTypes`

A comma-separated list (or YAML array) of type names that are relevant to the current topic:

```yaml
---
mentionedTypes: ['Grid', 'Column', 'GridStateOptions']
---
```

The transformer also automatically expands `mentionedTypes` by appending base-type names (walking the inheritance chain via apiMap), except for root types like `Object`, `Control`, `DependencyObject`, `EventArgs`.

### `namespace`

Used by `MappingLoader` to disambiguate types that appear in multiple namespaces. Inferred automatically from the first `mentionedType` that has a resolved namespace, or set explicitly:

```yaml
---
namespace: Infragistics.Controls
---
```

### How context is used in resolution

**TypeDoc simple pass:** `getContextTypes()` collects the current `typeName` (the topic's primary type, set by the caller) plus all `mentionedTypes`. Bare-member tokens (no dot) are first tried against this context list via `resolveMemberLink()` before falling back to `resolveApiLink()`.

**Legacy apiMap pass:** The legacy pass explicitly iterates `options.mentionedTypes` as fallback owners when a member lookup against the primary `typeName` fails.

---

## 10. Configuration reference

### `api-config.json` — TypeDoc resolver config

```jsonc
{
  "platforms": {
    "<Platform>": {
      "prefix": "Igx",              // Platform-specific type name prefix
      "suffix": "Component",        // Platform-specific type name suffix (can be "")
      "apiRoot": "https://...",     // Default API docs root URL
      "typeDocApiRoot": "https://...", // TypeDoc-specific API root (optional)
      "typeDocFilenameUseModulePrefix": true, // Prepend module name to filename
      "packageJoin": "_",           // Separator used in sub-package filename prefix
      "packageOverrides": {
        "<packageName>": {
          "apiRoot": "https://..."  // Override API root for this package
        }
      }
    }
  },
  "typePatterns": {
    "class":     "classes/",
    "interface": "interfaces/",
    "enum":      "enums/",
    "type":      "types/"
  }
}
```

### Platform docs config (`docConfig.json`) — legacy apiMap resolver config

Key fields in each platform's docs object:

| Field | Purpose |
|---|---|
| `apiDocRoot` | Base URL for apiMap-generated links |
| `apiDocOverrideRoot` | Alternative base URL for specific packages/components |
| `apiDocOverridePackages` | Package names that use `apiDocOverrideRoot` |
| `apiDocOverrideComponents` | Component name patterns (regex-matched) that use `apiDocOverrideRoot` |
| `apiDocOverrideBuildURLDashed` | Use `-` instead of `_` as package name join symbol |

---

## 11. Maintenance guide

### Adding TypeDoc coverage for a new platform

1. Generate a TypeDoc JSON file for the platform's package(s).
2. Place the file in `apiMap/<Platform>/` — any `.json` not ending in `.apiMap.json` or `.overrides.json` is picked up automatically.
3. Run `npm test` to ensure the `TypeDocApiResolver` tests still pass.
4. Build the platform (`npm run buildWebComponents` etc.) and verify link output.

### Adding a new component or package

If the component lives in a special package with a different API root, add it to `api-config.json`:

```json
"componentPackageMap": {
  "MyComponent": "igniteui-mypackage"
},
"platforms": {
  "WebComponents": {
    "packageOverrides": {
      "igniteui-mypackage": {
        "apiRoot": "https://custom-site/docs/typescript/latest/"
      }
    }
  }
}
```

For the **legacy pass**, the package name must also appear in the apiMap data (via `packageName` field in the JSON). Use an override file if it isn't generated automatically.

### Adding a manual apiMap override

Create or edit `apiMap/<Platform>/<name>.apiMap.overrides.json` using the same format as generated apiMap files. Override files are merged at load time, with the override taking precedence for any member that already exists.

### Debugging a missing or wrong link

1. Check whether TypeDoc data is loaded for the platform — look for `Loaded TypeDoc JSON` in build output.
2. If TypeDoc loaded, verify the type name is in the JSON with the expected generic name. Run a build with `LOG.info` temporarily to trace `findType()` resolution.
3. If TypeDoc didn't cover the type, check that the apiMap JSON contains the mapping. If not, add an override.
4. For wrong URL base, check `apiDocOverridePackages`, `apiDocOverrideComponents`, and `packageOverrides` in the relevant config.
5. For wrong hash fragment casing, the TypeDoc pass preserves exact casing from the JSON. The legacy pass uses the raw member name as resolved from apiMap, so check the apiMap source data.
6. For Blazor, check that the type belongs to the correct namespace in the `BlazorNamespaces` array in `MarkdownTransformer.ts` if the URL path looks wrong.


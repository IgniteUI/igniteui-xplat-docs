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
11. [Key assumptions](#11-key-assumptions)
12. [Maintenance guide](#12-maintenance-guide)

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
2. **Flat root-level** — declarations are direct children of the root (e.g. `igniteui-webcomponents.json`).

**Module name derivation (priority order):**

1. If the declaration is inside a `MODULE` node, that node's `name` is used.
2. Otherwise, the root's `packageName` field is used (e.g. `"igniteui-dockmanager"`).
3. If `packageName` is absent, the filename stem is used (e.g. `igniteui-webcomponents.json` → `igniteui-webcomponents`).
4. Final fallback: `igniteui-<platform>` (only applies to `loadFromObject` / in-memory test usage).

The module name is critical because it determines which `packageOverrides` entry applies and how the URL package prefix is constructed.

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
{baseApiRoot}/{categoryPath}/{packagePrefix}{modulePrefix}{typeName.toLowerCase()}.html
```

**Base API root** (resolved in priority order):
1. `packageOverrides[module].apiRoot` — if the type's module matches a package override entry
2. `typeDocApiRoot` — if configured for the platform
3. `apiRoot` — default fallback

**Category path** comes from `typePatterns` in `api-config.json` (e.g. `classes/`, `enums/`).

**Package prefix** — suppressed entirely when a `packageOverride` provides its own `apiRoot` (the override root already points to that package's docs). Otherwise derived from the module name using `packageJoin`.

**Module prefix** (`typeDocFilenameUseModulePrefix`):

| Platform | `typeDocFilenameUseModulePrefix` | Prefix example |
|---|---|---|
| React | `true` | `igniteui-react.` or `igniteui-react-grids.` |
| WebComponents | not set | `""` (core pkg) or `igniteui_webcomponents_grids.` (sub-pkg via packagePrefix) |

The module prefix is also suppressed when a `packageOverride` provides its own `apiRoot`.

**Member fragment:**
```
{url}#{memberName}
```

Member anchor casing is controlled by `preserveMemberCasing` (resolved in priority order):
1. `packageOverrides[module].preserveMemberCasing` — per-package override
2. Platform-level `preserveMemberCasing` — platform default
3. `false` — global default (lowercased)

| Platform | Default | Dock Manager override |
|---|---|---|
| React | `true` (preserves casing) | inherited from platform |
| WebComponents | `false` (lowercased) | `true` |
| Angular | `false` (lowercased) | `true` |

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

**CSS part and slot suppression:** To prevent false positives in styling reference sections, the pass suppresses linking for tokens that:

- Look like a UI part/slot name: starts with a lowercase letter, matches `/^[a-z][a-zA-Z0-9-]*$/`, no dot
- Appear inside a node where the context indicates a slot/CSS-part section

Context detection per AST node type:

| AST node type | How context is detected |
|---|---|
| `table` | Table text itself or the preceding sibling text contains slot/CSS-part keywords |
| `list` | Preceding sibling text contains slot/CSS-part keywords, OR the nearest preceding heading in the same parent matches a slot/part heading (e.g. `### Slots`, `### CSS Parts`, `## Parts`) |
| `paragraph` / `blockquote` / `listItem` | Block text itself contains slot/CSS-part keywords |
| Raw pipe-table `paragraph` | Preceding sibling text contains slot/CSS-part keywords |

Slot/CSS-part keyword patterns: `css part(s)`, `slot(s)`, `slot content`, `part name`, `slot name`.
Heading patterns (broader, for list context): `slot(s)`, `part(s)`, `css part(s)`.

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
      "apiRoot": "https://...",     // Default API docs root URL (used by legacy pass and as TypeDoc fallback)
      "typeDocApiRoot": "https://...", // TypeDoc-specific API root (optional, falls back to apiRoot)
      "preserveMemberCasing": true, // Keep original member casing in hash anchors (default: false = lowercased)
      "typeDocFilenameUseModulePrefix": true, // Prepend module name to filename (e.g. "igniteui-react.igrlist.html")
      "packageJoin": "_",           // Separator used in sub-package filename prefix
      "packageOverrides": {
        "<packageName>": {
          "apiRoot": "https://...",   // Override API root for this package (suppresses packagePrefix and modulePrefix)
          "preserveMemberCasing": true // Override member casing for this package (overrides platform setting)
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

**`preserveMemberCasing` resolution order:**
1. `packageOverrides[module].preserveMemberCasing` (per-package)
2. Platform-level `preserveMemberCasing`
3. `false` (global default — lowercase anchors)

**`apiRoot` resolution order (TypeDoc pass):**
1. `packageOverrides[module].apiRoot` (per-package override)
2. `typeDocApiRoot` (platform TypeDoc root)
3. `apiRoot` (platform default)

**When a `packageOverride` provides `apiRoot`:**
- Package prefix is suppressed (the override root already points to that package's docs)
- Module prefix (`typeDocFilenameUseModulePrefix`) is suppressed
- This is the mechanism used for Dock Manager, whose API docs live at a separate standalone site

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

## 11. Key assumptions

The link generation system relies on several assumptions that, if violated, will cause incorrect or missing links:

1. **TypeDoc JSON files must be kept up to date.** The TypeDoc resolver can only generate links for types and members that exist in the JSON data. When a new component, property, method, or event is added to a package, the corresponding TypeDoc JSON must be regenerated and committed. See [Section 12: Updating TypeDoc JSON files](#updating-typedoc-json-files) for the step-by-step process.

2. **TypeDoc JSON `packageName` field must match `packageOverrides` keys.** For `packageOverrides` (e.g. `igniteui-dockmanager`) to take effect, the root `packageName` in the TypeDoc JSON must match the key exactly. If the JSON lacks `packageName`, the filename stem is used instead.

3. **Module names in TypeDoc JSON determine URL structure.** The `module` field on each indexed type drives package prefix construction, `packageOverrides` lookup, and `typeDocFilenameUseModulePrefix` behavior. A misnamed module will produce wrong URLs.

4. **Only the first generic name wins.** If two TypeDoc JSON files export types whose generic name (after stripping platform prefix/suffix) collides, the first file loaded wins for generic-name lookup. Platform-specific names never conflict.

5. **`mentionedTypes` in front matter must list actual resolvable types.** If a type listed in `mentionedTypes` does not exist in either TypeDoc or apiMap data, it is silently ignored. However, it also means the type won't become a link in the API References section.

6. **Slot/part suppression relies on document structure.** The suppression heuristics look for keyword patterns in sibling text and nearby headings. If a slot/part table or list appears without the expected contextual heading or prose, its inline-code tokens may be incorrectly linked.

7. **The TypeDoc pass takes precedence.** When both TypeDoc and apiMap data are available, the TypeDoc pass runs first. Any type it resolves becomes a `link` node and will NOT be processed by the legacy apiMap pass. This means the TypeDoc data effectively "wins" for all types it covers.

8. **Inherited members may not appear in TypeDoc data.** The TypeDoc JSON only contains directly declared members. If a markdown topic references an inherited member, the TypeDoc pass still generates a link (using the raw member name as the hash fragment) as long as the owning type is known.

9. **API documentation sites must use the expected URL patterns.** The resolver constructs URLs based on the patterns in `typePatterns` and the platform config. If the target API documentation site changes its URL structure, the config must be updated to match.

---

## 12. Maintenance guide

### Updating TypeDoc JSON files

TypeDoc JSON files are the source of truth for the TypeDoc resolver. **They must be regenerated whenever the public API of a package changes** — e.g. when a new component, property, method, enum value, or interface is added or renamed.

#### Step-by-step: regenerate a TypeDoc JSON

1. **Ensure TypeDoc is installed** in the package's repository:
   ```bash
   npm install typedoc --save-dev
   ```

2. **Run TypeDoc with JSON output** against the package's entry point(s):
   ```bash
   npx typedoc --json <output-path>.json --entryPoints <entry-file.ts>
   ```
   For example, for `igniteui-webcomponents`:
   ```bash
   npx typedoc --json igniteui-webcomponents.json --entryPoints src/index.ts
   ```
   Consult the package's own docs or `tsconfig.json` for the correct entry points.

3. **Verify the JSON** contains the expected types:
   - Check `packageName` at the root — it should match the npm package name (e.g. `"igniteui-dockmanager"`)
   - Check that new types appear as children with the correct `kind` values (128 = class, 256 = interface, 8 = enum, etc.)
   - Check that members (properties, methods) are present under each type's `children`

4. **Copy the JSON** into the correct platform folder:
   ```
   apiMap/<Platform>/<package-name>.json
   ```
   The filename should match the npm package name (e.g. `igniteui-webcomponents.json`, `igniteui-dockmanager.json`). This is used as a fallback module name if `packageName` is missing.

5. **Build and verify:**
   ```bash
   npm run build
   npm run build<Platform>   # e.g. npm run buildWC, npm run buildReact
   ```
   Check the build output for the `TypeDoc resolver loaded with N types` log line — verify `N` increased if you added new types.

6. **Spot-check generated links** in a topic that references the new API. Open the output HTML and verify the URLs point to the correct API documentation pages and that hash anchors navigate to the right member.

#### When to regenerate

| Change | Action needed |
|---|---|
| New component/class added | Regenerate TypeDoc JSON for that package |
| New property/method/event on existing component | Regenerate TypeDoc JSON for that package |
| Type renamed | Regenerate TypeDoc JSON; update `mentionedTypes` in affected markdown files |
| Type moved to a different package | Regenerate both old and new package JSONs; may need new `packageOverrides` entry |
| Package itself renamed | Regenerate JSON; update `packageOverrides` keys in `api-config.json` |

### Adding TypeDoc coverage for a new platform

1. Generate a TypeDoc JSON file for the platform's package(s).
2. Place the file in `apiMap/<Platform>/` — any `.json` not ending in `.apiMap.json` or `.overrides.json` is picked up automatically.
3. Run `npm test` to ensure the `TypeDocApiResolver` tests still pass.
4. Build the platform (`npm run buildWebComponents` etc.) and verify link output.

### Adding a new component or package

If the component lives in a special package with a different API root, add the override to `api-config.json`:

```json
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

Then generate a TypeDoc JSON for the package and place it at `apiMap/<Platform>/igniteui-mypackage.json`. Make sure the JSON's root `packageName` matches the `packageOverrides` key.

For the **legacy pass**, the package name must also appear in the apiMap data (via `packageName` field in the JSON). Use an override file if it isn't generated automatically.

### Adding a manual apiMap override

Create or edit `apiMap/<Platform>/<name>.apiMap.overrides.json` using the same format as generated apiMap files. Override files are merged at load time, with the override taking precedence for any member that already exists.

### Debugging a missing or wrong link

1. **Check whether TypeDoc data is loaded** for the platform — look for `Loaded TypeDoc JSON` in build output.
2. **Type not found in TypeDoc?** Verify the type name is in the JSON with the expected name. The TypeDoc JSON may need to be regenerated (see above).
3. **Type not found in apiMap either?** Add an apiMap override file.
4. **Wrong URL base?** Check the priority chain: `packageOverrides[module].apiRoot` → `typeDocApiRoot` → `apiRoot`. Verify the type's module name matches the `packageOverrides` key.
5. **Wrong hash fragment casing?** Check `preserveMemberCasing` at the package override and platform levels.
6. **Missing package prefix or wrong prefix?** Check that the module name is correct in the TypeDoc JSON (`packageName` at root or module node name). Check `packageJoin` setting.
7. **Type linked but shouldn't be (e.g. a slot name)?** Check whether the slot/part suppression context is correctly structured — the section needs a recognizable heading or keyword-containing prose before the table/list.
8. **For Blazor**, check that the type belongs to the correct namespace in the `BlazorNamespaces` array in `MarkdownTransformer.ts` if the URL path looks wrong.


---
title: Agent Skills | AI Skills | AI-Assisted Development | {ProductName} | Infragistics
_description: Learn how to use Agent Skills to supercharge AI-assisted development with {ProductName} components, grids, data operations, and theming.
_keywords: {ProductName}, agent skills, ai assisted development, github copilot, cursor, windsurf, claude, gemini cli, junie
_license: MIT
mentionedTypes: []
last_updated: "2026-04-24"
---

<!-- schema: Article, HowTo -->

# {ProductName} Agent Skills

{ProductName} ships with **[Agent Skills](https://agentskills.io/)** - structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, Gemini CLI, JetBrains Junie, etc.) how to work with {ProductName}. These skill files provide context-aware guidance on components, grids, data operations, and theming, enabling your AI assistant to generate accurate, idiomatic code that follows best practices.

> [!NOTE]
> The AI tooling landscape is evolving rapidly. Skill discovery locations and distribution options may change as tools and IDEs are updated. Always consult the official documentation for your specific tool or agent for the latest information.

## Available Skills

The skill files live in the [`skills/`]({GithubLink}/tree/master/skills) directory of the {ProductName} repository:

<!-- WebComponents -->

| Skill | Path | Description |
|:------|:-----|:------------|
| Components & Layout | [`skills/igniteui-wc-choose-components/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-wc-choose-components/SKILL.md) | Standalone components, form controls, overlays, layout |
| Platform Integration | [`skills/igniteui-wc-integrate-with-framework/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-wc-integrate-with-framework/SKILL.md) | Helps with integrating components to the user's platform of choice |
| Theming & Styling | [`skills/igniteui-wc-customize-component-theme/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-wc-customize-component-theme/SKILL.md) | Palettes, typography, elevations, component themes, MCP server |
| Optimization | [`skills/igniteui-wc-optimize-bundle-size/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-wc-optimize-bundle-size/SKILL.md) | Ensuring best practices for tree shaking to optimize bundle size |

<!-- end: WebComponents -->

<!-- React -->

| Skill | Path | Description |
|:------|:-----|:------------|
| Components | [`skills/igniteui-react-components/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-react-components/SKILL.md) | Identify the right components, install, import, and use them - JSX patterns, event handling, refs, forms, TypeScript |
| Theming & Styling | [`skills/igniteui-react-customize-theme/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-react-customize-theme/SKILL.md) | Palettes, typography, elevations, component themes, MCP server |
| Optimization | [`skills/igniteui-react-optimize-bundle-size/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-react-optimize-bundle-size/SKILL.md) | Ensuring best practices for tree shaking to optimize bundle size |

<!-- end: React -->

<!-- Angular -->

| Skill | Path | Description |
|:------|:-----|:------------|
| Components & Layout | [`skills/igniteui-angular-components/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-angular-components/SKILL.md) | Standalone components, form controls, overlays, layout |
| Data Grids | [`skills/igniteui-angular-grids/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-angular-grids/SKILL.md) | Grid, Tree Grid, Hierarchical Grid, Pivot Grid, sorting, filtering, grouping, paging, remote data |
| Theming & Styling | [`skills/igniteui-angular-theming/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-angular-theming/SKILL.md) | Palettes, typography, elevations, component themes, MCP server |

> [!NOTE]
> Starting with {ProductName} **21.1.0**, these skills are automatically discovered when placed in your agent's skills path (e.g., `.claude/skills`, `.agents/skills`, `.cursor/rules/`). This release ships with an optional migration to add these skills to your project automatically.

<!-- end: Angular -->

<!-- Blazor -->

| Skill | Path | Description |
|:------|:-----|:------------|
| Components & Layout | [`skills/igniteui-blazor-components/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-blazor-components/SKILL.md) | Components, form controls, overlays, layout |
| Data Grids | [`skills/igniteui-blazor-grids/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-blazor-grids/SKILL.md) | Grid, Tree Grid, Hierarchical Grid, Grid Lite, sorting, filtering, grouping, paging, remote data |
| Theming & Styling | [`skills/igniteui-blazor-theming/SKILL.md`]({GithubLink}/blob/master/skills/igniteui-blazor-theming/SKILL.md) | Palettes, typography, elevations, component themes, MCP server |

<!-- end: Blazor -->

## Skill Locations

Each AI coding tool discovers skills from specific directories. Place your skill files in the appropriate location so your AI assistant can find and use them automatically. The general `.agents/skills/` convention is supported across multiple tools, while each tool also has its own specific directories.

### General (`.agents/skills/`)

The `.agents/skills/` directory is a cross-agent convention supported by multiple tools, including [VS Code with Copilot](https://code.visualstudio.com/docs/copilot/customization/agent-skills), [OpenAI Codex](https://developers.openai.com/codex/skills), [Cursor](https://cursor.com/docs/skills), [Gemini CLI](https://geminicli.com/docs/cli/skills/#skill-discovery-tiers), [Antigravity](https://antigravity.google/docs/skills), and [Windsurf](https://docs.windsurf.com/windsurf/cascade/skills#skill-scopes). Copy the skill directories into `.agents/skills/` in your project root:

<!-- WebComponents -->

```
.agents/
  skills/
    igniteui-wc-choose-components/
      SKILL.md
    igniteui-wc-integrate-with-framework/
      SKILL.md
    igniteui-wc-customize-component-theme/
      SKILL.md
    igniteui-wc-optimize-bundle-size/
      SKILL.md
```

<!-- end: WebComponents -->

<!-- React -->

```
.agents/
  skills/
    igniteui-react-components/
      SKILL.md
    igniteui-react-customize-theme/
      SKILL.md
    igniteui-react-optimize-bundle-size/
      SKILL.md
```

<!-- end: React -->

<!-- Angular -->

```
.agents/
  skills/
    igniteui-angular-components/
      SKILL.md
    igniteui-angular-grids/
      SKILL.md
    igniteui-angular-theming/
      SKILL.md
```

<!-- end: Angular -->

<!-- Blazor -->

```
.agents/
  skills/
    igniteui-blazor-components/
      SKILL.md
    igniteui-blazor-grids/
      SKILL.md
    igniteui-blazor-theming/
      SKILL.md
```

<!-- end: Blazor -->

For user-level (global) skills available across all projects, use `~/.agents/skills/` instead.

### GitHub Copilot

[GitHub Copilot](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.github/skills/`, `.claude/skills/` |
| Personal | `~/.copilot/skills/`, `~/.claude/skills/` (Copilot coding agent and GitHub Copilot CLI only) |

> **Tip:** In [VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), these locations also include the general `.agents/skills/` and `~/.agents/skills/` and you can configure additional skill locations using the `chat.agentSkillsLocations` setting.

### Claude

[Claude](https://code.claude.com/docs/en/skills#where-skills-live) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.claude/skills/` |
| Personal | `~/.claude/skills/` |

### Cursor

[Cursor](https://cursor.com/docs/skills#skill-directories) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.agents/skills/`, `.cursor/skills/` |
| User (global) | `~/.cursor/skills/` |

### Gemini CLI and Antigravity

[Gemini CLI](https://geminicli.com/docs/cli/skills/#skill-discovery-tiers) and [Antigravity](https://antigravity.google/docs/skills) discover skills from:

| Scope | Location |
|:------|:---------|
| Workspace | `.gemini/skills/`, `.agents/skills/` |
| User | `~/.gemini/skills/`, `~/.agents/skills/` |

> **Tip:** Use the `/skills` slash command in Gemini CLI to view and manage installed skills.

### Junie (JetBrains IDEs)

[Junie](https://junie.jetbrains.com/docs/agent-skills.html) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.junie/skills/` |
| User | `~/.junie/skills/` |

### Windsurf

[Windsurf](https://docs.windsurf.com/windsurf/cascade/skills#skill-scopes) discovers skills from:

| Scope | Location |
|:------|:---------|
| Workspace | `.windsurf/skills/`, `.agents/skills/` |
| Global | `~/.codeium/windsurf/skills/`, `~/.agents/skills/` |

---

## Installing Skills

Use one of the options below to download and place the skill files into the appropriate [skill location](#skill-locations) for your AI assistant.

### **Option A - Use the Ignite UI CLI**

The `ai-config` command configures MCP servers, copies framework-specific skill files into each agent's skills directory, and sets up instruction files — all in a single step. Use `--assistants` to choose which coding assistants receive MCP config and `--agents` to choose which agents receive skill files. Existing files are only updated if their content has changed. If no parameters are provided, the command enters interactive mode, prompting you to select assistants and agents. For available options, refer to the table below.

```bash
ig ai-config --assistants generic --agents claude
```

Use `--agents` with multiple values to target several agents at once:

```bash
ig ai-config --assistants generic vscode --agents claude copilot cursor
```

| Flag | Values | Default |
|------|--------|---------|
| `--assistants` | `generic`, `vscode`, `cursor`, `gemini`, `junie`, `none` | Prompted interactively |
| `--agents` | `generic`, `claude`, `copilot`, `cursor`, `codex`, `windsurf`, `gemini`, `junie`, `none` | Prompted interactively |

<!-- Angular -->

**Using Angular Schematics:**

```bash
ng generate @igniteui/angular-schematics:ai-config --assistants cursor --agents claude copilot
```

This also registers the `@angular/cli` MCP server alongside the Ignite UI servers.

<!-- end: Angular -->


### **Option B - Use the `GitHub CLI`**

The GitHub CLI can be used to download skill files directly from the {ProductName} repository. Run the following commands in your project root to start the installation process:

<!-- Angular -->

```bash
gh skill install IgniteUI/igniteui-angular
```

<!-- end: Angular -->

<!-- WebComponents -->

```bash
gh skill install IgniteUI/igniteui-webcomponents
```

<!-- end: WebComponents -->

<!-- React -->

```bash
gh skill install IgniteUI/igniteui-react
```

<!-- end: React -->

<!-- Blazor -->

```bash
gh skill install IgniteUI/igniteui-blazor
```

<!-- end: Blazor -->

You will be asked to select which skills to install (components, grids, theming) and the target Agents for the skill files in your project. The CLI will then download and place the selected skill according to the chosen Agents.

To update skills later, run the following command:

<!-- Angular -->

```bash
gh skill update IgniteUI/igniteui-angular
```

<!-- end: Angular -->

<!-- WebComponents -->

```bash
gh skill update IgniteUI/igniteui-webcomponents
```

<!-- end: WebComponents -->

<!-- React -->

```bash
gh skill update IgniteUI/igniteui-react
```

<!-- end: React -->

<!-- Blazor -->

```bash
gh skill update IgniteUI/igniteui-blazor
```

<!-- end: Blazor -->

If {ProductName} is already installed in your project, the skill files are available under `node_modules`. To copy them into your project (e.g. into `.agents/skills/`), run:

**macOS / Linux / Windows (PowerShell)**

```bash
cp -r node_modules/{PackageCommon}/skills/. .agents/skills/
```

**Windows (Command Prompt)**

```cmd
robocopy node_modules\{PackageCommon}\skills .agents\skills /E
```

Or copy individual skill directories as needed:

**macOS / Linux / Windows (PowerShell)**

<!-- WebComponents -->

```bash
cp -r node_modules/{PackageCommon}/skills/igniteui-wc-choose-components .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-wc-customize-component-theme .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-wc-optimize-bundle-size .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-wc-integrate-with-framework .agents/skills/
```

<!-- end: WebComponents -->

<!-- React -->

```bash
cp -r node_modules/{PackageCommon}/skills/igniteui-react-components .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-react-customize-theme .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-react-optimize-bundle-size .agents/skills/
```

<!-- end: React -->

<!-- Angular -->

```bash
cp -r node_modules/{PackageCommon}/skills/igniteui-angular-components .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-angular-grids .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-angular-theming .agents/skills/
```

<!-- end: Angular -->

<!-- Blazor -->

```bash
cp -r node_modules/{PackageCommon}/skills/igniteui-blazor-components .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-blazor-grids .agents/skills/
cp -r node_modules/{PackageCommon}/skills/igniteui-blazor-theming .agents/skills/
```

<!-- end: Blazor -->

**Windows (Command Prompt)**

<!-- WebComponents -->

```cmd
robocopy node_modules\{PackageCommon}\skills\igniteui-wc-choose-components .agents\skills\igniteui-wc-choose-components /E
robocopy node_modules\{PackageCommon}\skills\igniteui-wc-customize-component-theme .agents\skills\igniteui-wc-customize-component-theme /E
robocopy node_modules\{PackageCommon}\skills\igniteui-wc-optimize-bundle-size .agents\skills\igniteui-wc-optimize-bundle-size /E
robocopy node_modules\{PackageCommon}\skills\igniteui-wc-integrate-with-framework .agents\skills\igniteui-wc-integrate-with-framework /E
```

<!-- end: WebComponents -->

<!-- React -->

```cmd
robocopy node_modules\{PackageCommon}\skills\igniteui-react-components .agents\skills\igniteui-react-components /E
robocopy node_modules\{PackageCommon}\skills\igniteui-react-customize-theme .agents\skills\igniteui-react-customize-theme /E
robocopy node_modules\{PackageCommon}\skills\igniteui-react-optimize-bundle-size .agents\skills\igniteui-react-optimize-bundle-size /E
```

<!-- end: React -->

<!-- Angular -->

```cmd
robocopy node_modules\{PackageCommon}\skills\igniteui-angular-components .agents\skills\igniteui-angular-components /E
robocopy node_modules\{PackageCommon}\skills\igniteui-angular-grids .agents\skills\igniteui-angular-grids /E
robocopy node_modules\{PackageCommon}\skills\igniteui-angular-theming .agents\skills\igniteui-angular-theming /E
```

<!-- end: Angular -->

<!-- Blazor -->

```cmd
robocopy node_modules\{PackageCommon}\skills\igniteui-blazor-components .agents\skills\igniteui-blazor-components /E
robocopy node_modules\{PackageCommon}\skills\igniteui-blazor-grids .agents\skills\igniteui-blazor-grids /E
robocopy node_modules\{PackageCommon}\skills\igniteui-blazor-theming .agents\skills\igniteui-blazor-theming /E
```

<!-- end: Blazor -->

### **Option C - Use the `gemini skills` CLI**

The `gemini skills install` command installs skills directly from a Git repository. It supports two scopes:

- **User scope** (default) - installs skills globally for your user account, making them available across all projects. Skills are placed in `~/.gemini/skills/` or `~/.agents/skills/`.
- **Workspace scope** - installs skills locally into the current project directory under `.agents/skills/`, scoping them to that project only.

**Install to user scope (default):**

<!-- WebComponents -->

```bash
gemini skills install {GithubLink}.git --path skills/igniteui-wc-choose-components
gemini skills install {GithubLink}.git --path skills/igniteui-wc-customize-component-theme
gemini skills install {GithubLink}.git --path skills/igniteui-wc-optimize-bundle-size
gemini skills install {GithubLink}.git --path skills/igniteui-wc-integrate-with-framework
```

<!-- end: WebComponents -->

<!-- React -->

```bash
gemini skills install {GithubLink}.git --path skills/igniteui-react-components
gemini skills install {GithubLink}.git --path skills/igniteui-react-customize-theme
gemini skills install {GithubLink}.git --path skills/igniteui-react-optimize-bundle-size
```

<!-- end: React -->

<!-- Angular -->

```bash
gemini skills install {GithubLink}.git --path skills/igniteui-angular-components
gemini skills install {GithubLink}.git --path skills/igniteui-angular-grids
gemini skills install {GithubLink}.git --path skills/igniteui-angular-theming
```

<!-- end: Angular -->

<!-- Blazor -->

```bash
gemini skills install {GithubLink}.git --path skills/igniteui-blazor-components
gemini skills install {GithubLink}.git --path skills/igniteui-blazor-grids
gemini skills install {GithubLink}.git --path skills/igniteui-blazor-theming
```

<!-- end: Blazor -->

**Install to workspace scope:**

<!-- WebComponents -->

```bash
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-wc-choose-components
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-wc-customize-component-theme
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-wc-optimize-bundle-size
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-wc-integrate-with-framework
```

<!-- end: WebComponents -->

<!-- React -->

```bash
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-react-components
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-react-customize-theme
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-react-optimize-bundle-size
```

<!-- end: React -->

<!-- Angular -->

```bash
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-angular-components
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-angular-grids
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-angular-theming
```

<!-- end: Angular -->

<!-- Blazor -->

```bash
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-blazor-components
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-blazor-grids
gemini skills install --scope workspace {GithubLink}.git --path skills/igniteui-blazor-theming
```

<!-- end: Blazor -->

Once installed, the skill files are available in the respective location and will be automatically discovered by compatible AI assistants.

### **Option D - Use the `npx skills` CLI**

The `skills` CLI is an interactive tool that downloads and installs skills directly into your project. Run the following command in your project root:

```bash
npx skills add IgniteUI/{PackageCommon}
```

The CLI will guide you through a series of prompts to:

1. Select which skills to install (components, theming, etc.).
2. Choose the target location for the skill files in your project (e.g. `.agents/skills/`, `.github/skills/`).
3. Download and write the selected skill files automatically.

Once complete, the skills are ready to use - no manual file copying required.

> **Note:** Requires Node.js and an internet connection. The command fetches the latest skill files from the [IgniteUI/{PackageCommon}]({GithubLink}) repository.

---

## Theming MCP Server

<!-- WebComponents -->

The **Theming skill** includes setup instructions for the `igniteui-theming` MCP server, which gives AI assistants access to live theming tools such as palette generation and component theme scaffolding. See the [Theming skill file]({GithubLink}/blob/master/skills/igniteui-wc-customize-component-theme/SKILL.md) for configuration steps for VS Code, Cursor, Claude Desktop, and JetBrains IDEs.

<!-- end: WebComponents -->

<!-- React -->

The **Theming skill** includes setup instructions for the `igniteui-theming` MCP server, which gives AI assistants access to live theming tools such as palette generation and component theme scaffolding. See the [Theming skill file]({GithubLink}/blob/master/skills/igniteui-react-customize-theme/SKILL.md) for configuration steps for VS Code, Cursor, Claude Desktop, and JetBrains IDEs.

<!-- end: React -->

<!-- Angular -->

The **Theming skill** includes setup instructions for the `igniteui-theming` MCP server, which gives AI assistants access to live theming tools such as palette generation and component theme scaffolding. See the [Theming skill file]({GithubLink}/blob/master/skills/igniteui-angular-theming/SKILL.md) for configuration steps for VS Code, Cursor, Claude Desktop, and JetBrains IDEs.

<!-- end: Angular -->

<!-- Blazor -->

The **Theming skill** includes setup instructions for the `igniteui-theming` MCP server, which gives AI assistants access to live theming tools such as palette generation and component theme scaffolding. See the [Theming skill file]({GithubLink}/blob/master/skills/igniteui-blazor-theming/SKILL.md) for configuration steps for VS Code, Cursor, Claude Desktop, and JetBrains IDEs.

<!-- end: Blazor -->

For more information on the Theming MCP, refer to the [Ignite UI Theming MCP](./theming-mcp.md) documentation.

## Additional Resources

<div class="divider--half"></div>

<!-- React, WebComponents, Blazor -->
- [Getting Started with {ProductName}](../general-getting-started.md)
<!-- end: React, WebComponents, Blazor -->
<!-- React, WebComponents -->
- [Ignite UI CLI](../general-cli-overview.md)
<!-- end: React, WebComponents -->
<!-- Angular -->
- <a href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started">Getting Started with {ProductName}</a>
- <a href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli-overview">Angular Schematics & Ignite UI CLI</a>
<!-- end: Angular -->
- [AI-Assisted Development with Ignite UI](./ai-assisted-development-overview.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})

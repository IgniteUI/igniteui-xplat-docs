---
title: {Platform} CLI | Data Visualization Tools and Tables | Infragistics
_description: The {ProductName} toolset includes an Ignite UI CLI for scaffolding {Platform} projects and adding component views pre-configured for {ProductName}. It also includes a built-in MCP server for AI coding assistant integration.
_keywords: {Platform} cli, command line interface, {ProductName}, Infragistics
mentionedTypes: []
---

# Ignite UI CLI for {Platform}

The [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) is a standalone global command-line tool for creating and scaffolding applications<!-- React --> for React and other frameworks<!-- end: React --><!-- WebComponents --> for Web Components and other frameworks<!-- end: WebComponents -->. It provides project templates pre-configured for {ProductName}, a guided step-by-step wizard for first-time setup, non-interactive `new` and `add` commands for scripted workflows, a development server, and a built-in MCP server for connecting AI coding assistants to live {ProductName} documentation.

<!-- React -->
The Ignite UI CLI does not replace Vite or other React tooling — projects created with the CLI are standard Vite-based React applications and remain fully compatible with npm scripts and Vite commands after scaffolding.
<!-- end: React -->

## Install the Ignite UI CLI

Install the Ignite UI CLI globally using npm:

```cmd
npm install -g igniteui-cli
```

Or, using yarn:

```cmd
yarn global add igniteui-cli
```

Verify the installation:

```cmd
ig version
```

## Create a New Project

The Ignite UI CLI provides two modes for project creation: a guided interactive wizard and a direct command with arguments.

### Use the guided wizard

The guided wizard is the recommended starting point for new projects. It prompts you to choose a framework, project type, template, and theme, then scaffolds and commits the project automatically.

To activate the wizard, run:

```cmd
ig
```

or:

```cmd
ig new
```

For a step-by-step walkthrough of the wizard options, see [Step-by-Step Guide Using Ignite UI CLI](general-step-by-step-guide-using-cli.md).

### Create a project directly

<!-- React -->
To create a React project non-interactively, provide `react` as the framework and `igr-ts` as the project type:

```cmd
ig new <project-name> --framework=react --type=igr-ts --template=top-nav
```

The following project templates are available for React:

| Template ID | Description                                         |
| :---------- | :-------------------------------------------------- |
| empty       | Minimal project structure with no predefined views  |
| base        | Project structure with a home page                  |
| top-nav     | Project structure with a top navigation bar         |

<!-- end: React -->

<!-- WebComponents -->
To create a Web Components project non-interactively, provide `webcomponents` as the framework and `igc-ts` as the project type:

```cmd
ig new <project-name> --framework=webcomponents --type=igc-ts --template=side-nav
```

The following project templates are available for Web Components:

| Template ID | Description                                        |
| :---------- | :------------------------------------------------- |
| empty       | Minimal project structure with no predefined views |
| base        | Project structure with a home page                 |
| side-nav    | Project structure with a side navigation drawer    |

<!-- end: WebComponents -->

The following arguments are available when creating a project:

<details>
  <summary><u>name</u></summary>
  <p>
    <code>name</code> (alias: <code>-n</code>)
  </p>
  <p>
    The name of the application. The application is created inside a directory with the same name.
  </p>
</details>

<details>
  <summary><u>framework</u></summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p><!-- React -->
    Use <code>react</code> for Ignite UI for React projects.<!-- end: React --><!-- WebComponents -->
    Use <code>webcomponents</code> for Ignite UI for Web Components projects.<!-- end: WebComponents -->
    Supported values are: <code>jquery</code>, <code>angular</code>, <code>react</code>, <code>webcomponents</code>.
  </p>
</details>

<details>
  <summary><u>type</u></summary>
  <p>
    <code>--type</code> (alias: <code>-t</code>)
  </p>
  <p>
    The available project types depend on the selected framework.<!-- React --> Use <code>igr-ts</code> for React TypeScript projects.<!-- end: React --><!-- WebComponents --> Use <code>igc-ts</code> for Web Components TypeScript projects.<!-- end: WebComponents -->
  </p>
</details>

<details>
  <summary><u>template</u></summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    Specifies the project template to use. See the template tables above for the available options per framework.
  </p>
</details>

<details>
  <summary><u>skip-git</u></summary>
  <p>
    <code>--skip-git</code> (alias: <code>--sg</code>)
  </p>
  <p>
    Skips automatic Git repository initialization. If omitted, the global <code>skip-git</code> configuration property is used.
  </p>
</details>

<details>
  <summary><u>skip-install</u></summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    Skips the initial npm package installation on project creation.
  </p>
</details>

## Add a Component Template

Once you have created a project, you can add additional component views at any point. Running `ig add` without arguments launches an interactive template browser:

```cmd
ig add
```

To add a specific component template directly, provide the template ID and a name for the new component:

```cmd
ig add [component-template] [component-name]
```

For example, to add a data grid component named `MyGrid`:

```cmd
ig add grid MyGrid
```

To list all available templates in the current project:

```cmd
ig list
```

For a guided walkthrough of the component addition wizard, see [Step-by-Step Guide Using Ignite UI CLI](general-step-by-step-guide-using-cli.md#add-view).

> [!NOTE]
> Your routing file will be updated with the path to the newly generated page. For example, a component named `MyGrid` will be navigable at `/my-grid`.

<!-- WebComponents -->
The following component templates are available for Web Components:

| Name | Component Template |
| :--- | :----------------- |
| Accordion | accordion |
| Avatar | avatar |
| Badge | badge |
| Banner | banner |
| Button | button |
| Button Group | button-group |
| Calendar | calendar |
| Card | card |
| Checkbox | checkbox |
| Chip | chip |
| Circular Progress | circular-progress |
| Date Picker | date-picker |
| Date Time Input | date-time-input |
| Divider | divider |
| Dock Manager | dock-manager |
| Dropdown | dropdown |
| Expansion Panel | expansion-panel |
| Financial Chart | financial-chart |
| Form | form |
| Grid | grid |
| Icon | icon |
| Icon Button | icon-button |
| Input | input |
| Linear Gauge | linear-gauge |
| Linear Progress | linear-progress |
| List | list |
| Navbar | navbar |
| Pie Chart | pie-chart |
| Radial Gauge | radial-gauge |
| Radio Group | radio-group |
| Rating | rating |
| Ripple | ripple |
| Slider | slider |
| Switch | switch |
| Tabs | tabs |
| Text Area | text-area |
| Tree | tree |
<!-- end: WebComponents -->

## Run the Application

The `start` command builds the application, starts a local web server, and opens it in your default browser:

```cmd
ig start
```

<!-- React -->
### Using Vite

The React application generated by Ignite UI CLI uses [Vite](https://vitejs.dev/) as the build tool, which provides fast development builds and hot module replacement (HMR) during development.

<!-- end: React -->

<!-- React, WebComponents -->

## AI Assistant Integration (MCP)

The Ignite UI CLI includes a built-in **MCP (Model Context Protocol) server** that connects AI coding assistants — GitHub Copilot, Claude, Cursor, and others — directly to {ProductName} component documentation and API references. Once configured, your AI assistant can scaffold projects, add and modify components, search docs, look up API details, and generate accurate {ProductName} code without leaving your editor.

The CLI MCP server starts via `npx` without requiring a global install:

```bash
npx -y igniteui-cli mcp
```

Or, if you have Ignite UI CLI installed globally:

```bash
ig mcp
```

Configure your AI client to use the CLI MCP server. Most teams connect both the CLI MCP and the Theming MCP together — CLI MCP handles project and component workflows while Theming MCP handles palettes, themes, and design tokens.

**VS Code** — create or edit `.vscode/mcp.json` in your project root:

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

**Cursor, Claude Desktop, Claude Code, JetBrains, and other MCP clients:**

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

For per-client setup guides (VS Code, GitHub, Cursor, Claude Desktop, Claude Code, JetBrains) and a full description of available tools, see [Ignite UI CLI MCP](./ai/cli-mcp.md). For an end-to-end walkthrough using both MCP servers, see [Build an App End-to-End with CLI MCP and Theming MCP](./general-how-to-mcp-e2e.md).

<!-- end: React, WebComponents -->

## Ignite UI CLI Commands

A full list of available Ignite UI CLI commands is maintained on the [Ignite UI CLI wiki](https://github.com/IgniteUI/igniteui-cli/wiki):

| Command | Alias | Description |
| :------ | :---- | :---------- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start) | | Builds the application, starts a web server, and opens it in the default browser. |
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | Builds the application into an output directory. |
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | Generates a new custom template for supported frameworks and project types. |
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | Lists available commands with brief descriptions. |
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Reads and writes Ignite UI CLI configuration settings. |
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | Searches the Infragistics knowledge base for a given term. |
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l | Lists all templates for the specified framework and type. When run inside a project folder, lists templates for the project's framework and type even if different values are provided as arguments. |
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) | | Executes the tests for the current project. |
| ig upgrade-packages | | Upgrades Ignite UI packages in the project from Trial to Licensed. |
| ig mcp | | Starts the Ignite UI CLI MCP server, providing component documentation search, API reference, and scaffolding tools to connected AI assistants. |
| ig version | -v | Shows the Ignite UI CLI version installed locally, or globally if no local installation is found. |

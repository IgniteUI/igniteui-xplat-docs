---
title: AI-Assisted Development with Ignite UI - {ProductName}
_description: Ignite UI provides Agent Skills, the Ignite UI CLI MCP server, the Ignite UI Theming MCP server, and the MAKER Framework to ground AI coding assistants in correct component APIs, import paths, design tokens, and multi-agent task orchestration across Angular, React, and Web Components.
_keywords: {Platform}, {ProductName}, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, MAKER, multi-agent, Agent Skills, AI, agent, Copilot, Cursor
_language: en
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
namespace: Infragistics.Controls
mentionedTypes: []
---

# AI-Assisted Development with Ignite UI

Ignite UI for Angular, React, and Web Components provides a four-part AI toolchain - Agent Skills, the Ignite UI CLI MCP server, and the Ignite UI Theming MCP server - that grounds AI coding assistants in correct component APIs, import paths, and design tokens. Agent Skills are developer-owned instruction packages that define how AI agents use Ignite UI in a specific project. The CLI MCP server exposes Ignite UI CLI scaffolding, component management, and documentation tools to the active AI agent session via the Model Context Protocol. The Theming MCP server exposes the Ignite UI Theming Engine as queryable agent context. All three components work with GitHub Copilot, Cursor, Claude Desktop, Claude Code, and JetBrains AI Assistant.

The AI toolchain does not currently support Blazor in the CLI MCP and Agent Skills layers - Blazor coverage is provided by the Theming MCP only. The CLI MCP server requires STDIO transport; HTTP-based MCP clients are not supported. Agent Skills and the CLI MCP server do not modify project files autonomously - they expose tools and instructions to the active AI agent, which acts on developer prompts.

## The AI Toolchain at a Glance

Ignite UI's AI toolchain consists of four independently usable layers. Each layer can be enabled on its own; they are designed to work together.

| Layer                                   | What it provides                                                                                            | Owner        | Frameworks                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| Agent Skills                            | Developer-owned instruction packages: import paths, component patterns, decision flows, project conventions | Developer    | Angular, React, Web Components, Blazor |
| CLI MCP server (`igniteui-cli`)         | Project scaffolding, component management, documentation and API queries via MCP                            | Infragistics | Angular, React, Web Components         |
| Theming MCP server (`igniteui-theming`) | Design tokens, palette definitions, CSS variable generation, theming queries via MCP                        | Infragistics | Angular, React, Web Components, Blazor |
| MAKER Framework (`@igniteui/maker-mcp`) | Multi-agent orchestration: task decomposition, consensus voting, and error correction for complex AI tasks  | Infragistics | Framework-agnostic                     |
 
The CLI MCP server, Theming MCP server, and MAKER Framework are all started through `npx` and connect to any MCP-compatible client through STDIO transport. Agent Skills are local files placed in your project that the AI client reads from disk.

## Agent Skills

Agent Skills are structured, developer-owned packages that tell AI coding assistants exactly how to use Ignite UI for a specific framework. A Skill package can contain a `SKILL.md` instruction file with component patterns, import paths, and decision flows; references to authoritative Ignite UI documentation; and assets such as schema files or diagrams. When a Skill is active in the AI client, the agent follows the Skill instead of relying on general training data - which may reference outdated API signatures or import paths.

Ignite UI ships dedicated Skill packages for Angular, React, Web Components, and Blazor. The Skill package is developer-owned: edit the `SKILL.md` to match your team's conventions, add project-specific patterns, reference your internal design system, and version the package alongside your codebase.

For full setup instructions and IDE wiring, see [Agent Skills](skills.md).

## CLI MCP Server

The Ignite UI CLI MCP server (`igniteui-cli`) is an MCP server maintained by Infragistics that exposes Ignite UI CLI scaffolding and documentation tools to the active AI agent session. Once connected, the AI assistant can create Angular, React, or Web Components projects, add and modify Ignite UI components, and answer documentation and API questions - all through natural-language prompts in the chat session.

The CLI MCP server starts via `npx` without a global install:

```bash
npx -y igniteui-cli mcp
```

The server connects to VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains AI Assistant, and any other MCP-compatible client that supports STDIO transport. The exact configuration format differs by client - see the CLI MCP setup guides below.

The CLI MCP server does not support Blazor. It does not generate code autonomously - it exposes tools to the AI agent, which invokes them in response to developer prompts.

## Theming MCP Server

The Ignite UI Theming MCP server (`igniteui-theming`) is a separate MCP server that exposes the Ignite UI Theming Engine as queryable agent context. It covers design token access, palette definitions, CSS custom property generation, and WCAG AA contrast validation. It is architecturally separate from the CLI MCP server - it can be connected independently to give the AI agent access to theming tools without exposing project scaffolding tools.

The Theming MCP server starts via `npx`:

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

The Theming MCP server supports Angular, React, Web Components, and Blazor. It updates with every Ignite UI release so agents always work against the current token surface.

For configuration details, see [Theming MCP](theming-mcp.md).

## MAKER Framework

The MAKER Framework (`@igniteui/maker-mcp`) is a multi-agent AI orchestration MCP server from Infragistics that decomposes complex tasks into validated, executable step plans using a consensus-based voting algorithm. MAKER stands for Maximal Agentic decomposition, first-to-ahead-by-K Error correction, and Red-flagging. Once connected, the AI assistant can invoke three tools - `plan`, `execute`, and `plan_and_execute` - to run long-horizon tasks with automatic error correction across OpenAI, Anthropic, and Google AI provider backends.

The MAKER Framework is not an Ignite UI component scaffolding tool. For project creation and component generation, use the [CLI MCP server](cli-mcp.md). MAKER is framework-agnostic and does not target Angular, React, or Web Components specifically. It requires at least one AI provider API key and a one-time GitHub Packages registry setup before the first `npx` run.

For full architecture details, configuration options, and usage examples, see [MAKER Framework](maker-framework.md).

## Supported AI Clients

The CLI MCP server and Theming MCP server work with any editor or AI client that supports MCP with STDIO transport.

| Client | Configuration method |
| --- | --- |
| VS Code with GitHub Copilot | `.vscode/mcp.json` |
| Cursor | `.cursor/mcp.json` |
| Claude Desktop (macOS) | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows) | `%APPDATA%\Claude\claude_desktop_config.json` |
| Claude Code | `.mcp.json` or the Claude Code MCP CLI command |
| JetBrains AI Assistant | **Tools → AI Assistant → Model Context Protocol (MCP)** |

Agent Skills are compatible with GitHub Copilot via `.github/copilot-instructions.md`, Cursor via `.cursorrules` or `.cursor/rules/`, Windsurf via `.windsurfrules`, and JetBrains AI Assistant via project-level prompt settings.

## Set Up the AI Toolchain

Setting up the Ignite UI AI toolchain takes four steps: load Agent Skills for your framework, connect the CLI MCP server, optionally connect the Theming MCP server, and optionally connect the MAKER Framework. All four steps are independent and can be done in any order.

### Step 1 - Load Agent Skills

Copy the Ignite UI Skill package for your framework into your project's agent discovery path. The Skill package ships with the library in `node_modules/igniteui-{framework}/skills/`. Wire it to your IDE using the persistent setup for your client.

See [Agent Skills](skills.md) for the complete setup.

### Step 2 - Connect the CLI MCP Server

Add the `igniteui-cli` MCP server entry to the configuration file for your AI client. Use the JSON structure that matches your client:

**VS Code (`.vscode/mcp.json`):**

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
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
    }
  }
}
```

For the full setup guide, including VS Code, GitHub, Cursor, Claude Desktop, Claude Code, JetBrains, and other MCP-compatible clients, see [CLI MCP](cli-mcp.md).

### Step 3 - Connect the Theming MCP Server (optional)

Add the `igniteui-theming` entry to the same MCP configuration file, alongside `igniteui-cli`:

```json
{
  "servers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

For configuration details and theming workflows, see [Theming MCP](theming-mcp.md).

### Step 4 - Connect the MAKER Framework (optional)
 
MAKER is published on GitHub Packages under the `@igniteui` scope. Before the first `npx` run, configure the registry once on your machine. Run:
 
```bash
npm config set @igniteui:registry https://npm.pkg.github.com
```
 
Then open `~/.npmrc` (Windows: `%USERPROFILE%\.npmrc`) and add your GitHub Personal Access Token with `read:packages` scope:
 
```ini
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```
 
Add the `maker` entry to your MCP configuration file alongside the other servers:
 
**VS Code (`.vscode/mcp.json`):**
 
```json
{
  "servers": {
    "maker": {
      "command": "npx",
      "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
      "env": {
        "Executor__AIProviderKeys__OpenAI": "<your-openai-key>"
      }
    }
  }
}
```
 
**Cursor, Claude Desktop, Claude Code, JetBrains, and other MCP clients:**
 
```json
{
  "mcpServers": {
    "maker": {
      "command": "npx",
      "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
      "env": {
        "Executor__AIProviderKeys__OpenAI": "<your-openai-key>"
      }
    }
  }
}
```
 
For full configuration including model selection per internal client and multi-provider setups, see [MAKER Framework](maker-framework.md).
 
## Additional Resources
 
<!-- React -->
- [Build an App End-to-End with Ignite UI CLI MCP and Ignite UI Theming MCP](../general-how-to-mcp-e2e.md)
<!-- end: React -->
<!-- WebComponents -->
- [Build an App End-to-End with Ignite UI CLI MCP and Ignite UI Theming MCP](../general-how-to-mcp-e2e.md)
<!-- end: WebComponents -->
- [Agent Skills](./skills.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)
- [MAKER Framework](./maker-framework.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})

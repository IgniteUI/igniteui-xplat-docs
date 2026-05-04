---
title: AI-Assisted Development with Ignite UI - {ProductName}
_description: Configure Agent Skills, the Ignite UI MCP server, and the Theming MCP server in your Angular or React project with a single command — npx igniteui-cli ai-config. Grounds GitHub Copilot, Cursor, Claude Desktop, Claude Code, and JetBrains AI Assistant in correct Ignite UI APIs.
_keywords: {Platform}, {ProductName}, Infragistics, MCP, Model Context Protocol, Ignite UI MCP server, Ignite UI Theming MCP, Agent Skills, AI, agent, Copilot, Cursor, Claude Code, ai-config
_language: en
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
last_updated: "2026-05-03"
namespace: Infragistics.Controls
mentionedTypes: []
---

<!-- schema: Article, HowTo -->

# AI-Assisted Development with Ignite UI

Ignite UI for Angular, React, and Web Components provides a complete AI tooling integration that grounds AI coding assistants — GitHub Copilot, Cursor, Claude Desktop, Claude Code, and JetBrains AI Assistant — in correct Ignite UI component APIs, import paths, and design tokens. The integration consists of Agent Skills, the Ignite UI MCP server (`@igniteui/mcp-server`), and the Theming MCP server (`igniteui-theming`). All three are configured by a single command: `npx igniteui-cli ai-config`.

The AI toolchain does not currently support Blazor in the Ignite UI MCP server and Agent Skills layers — Blazor coverage is provided by the Theming MCP server only. The MCP servers require STDIO transport; remote/hosted transport (HTTP, SSE) is on the roadmap but not currently shipped. The toolchain grounds the AI agent — it does not generate code autonomously.

## Configure the AI Toolchain

Run this command from the root of your existing Angular or React project. It copies Agent Skills into the agent discovery path and writes the Ignite UI MCP server and Theming MCP server entries to `.vscode/mcp.json`. If the files already exist and are up-to-date, the command is a no-op.

```bash
npx igniteui-cli ai-config
```

After the command finishes, start the MCP servers in your AI client. The servers are configured but not yet running — the client needs to launch each server before its tools are available to the agent.

### Start the Servers

**VS Code with GitHub Copilot:**

Open `.vscode/mcp.json`. VS Code displays an inline **Start** button above each server entry. Click **Start** for both `igniteui` and `igniteui-theming`. Once started, VS Code shows the available tool count next to each server (for example, _"13 tools | 1 prompt"_). Alternatively, run **MCP: List Servers** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`), select each server, and choose **Start**.

**Cursor:**

Open **Settings → MCP**, locate the `igniteui` and `igniteui-theming` entries, and toggle each one on. Cursor starts each server immediately and displays its tool count.

**Claude Code:**

Run `claude mcp list` to confirm both servers are registered. Claude Code starts MCP servers automatically when their tools are first invoked — no manual start step is required.

**JetBrains AI Assistant:**

Open **Settings → Tools → AI Assistant → Model Context Protocol (MCP)**. Click the play icon next to each server entry to start it.

**Claude Desktop:**

Quit and relaunch Claude Desktop. The servers start automatically on launch.

### Use the Tools

Once the servers are running, the `igniteui` and `igniteui-theming` tools appear in your client's available tool set automatically. The agent picks them up on its next prompt — no further manual steps. Try a question like _"How do I add an Ignite UI grid with sorting and filtering?"_ to confirm the tools are reachable. The agent calls the MCP servers and returns a grounded answer using the configured Skills.

> [!NOTE]
> The command requires Ignite UI packages to be installed in your project (`npm install`). If no skill files are found, make sure your packages are up-to-date.

> [!IMPORTANT]
> Use Ignite UI CLI version `>= 16.0.0`. Earlier versions of `ai-config` write a legacy `igniteui-cli mcp` configuration that fails to start under MCP STDIO transport because the `mcp` subcommand was never published in the CLI. If you ran `ai-config` from an older version, run the command again with the latest CLI to overwrite the broken entry, or replace the entry by hand using [Manual Configuration](#manual-configuration).

<!-- VERIFY: Confirm `npx igniteui-cli ai-config` (CLI >= 16.0.0) writes the new `@igniteui/mcp-server` entry — not the legacy `igniteui-cli mcp` entry — to `.vscode/mcp.json`. -->

### Alternative Commands

The same configuration is also available through these commands. Use the one that fits your project tooling.

| Command                                              | Skills | Ignite UI MCP | Theming MCP | `@angular/cli` MCP | When to use                                                                  |
| ---------------------------------------------------- | ------ | ------------- | ----------- | ------------------ | ---------------------------------------------------------------------------- |
| `npx igniteui-cli ai-config`                         | Yes    | Yes           | Yes         | No                 | Default — works in any project                                               |
| `ng generate @igniteui/angular-schematics:ai-config` | Yes    | Yes           | Yes         | Yes                | Angular projects that also want the Angular CLI MCP server                   |
| `ig ai-config`                                       | Yes    | Yes           | Yes         | No                 | When the Ignite UI CLI is installed globally (`npm install -g igniteui-cli`) |

To scaffold a brand-new project with the AI toolchain pre-configured rather than retrofit an existing one, use `ig new my-app` (requires the global install).

## What Gets Configured

`ai-config` configures three independently usable layers. Each layer can be enabled on its own; they are designed to work together.

| Layer                                         | What it provides                                                                                            | Owner        | Frameworks                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| Agent Skills                                  | Developer-owned instruction packages: import paths, component patterns, decision flows, project conventions | Developer    | Angular, React, Web Components, Blazor |
| Ignite UI MCP server (`@igniteui/mcp-server`) | Documentation queries, API reference, GitHub API access, project scaffolding, component management via MCP  | Infragistics | Angular, React, Web Components         |
| Theming MCP server (`igniteui-theming`)       | Design tokens, palette definitions, CSS custom property generation, WCAG AA contrast validation             | Infragistics | Angular, React, Web Components, Blazor |

**Agent Skills** are structured instruction packages that tell AI coding assistants how to use Ignite UI. The Skill package is developer-owned — edit `SKILL.md` to match your team's conventions, add project-specific patterns, and version it alongside your codebase. See [Agent Skills](./skills.md).

**The Ignite UI MCP server** exposes Ignite UI documentation, the GitHub API for Ignite UI repositories, CLI scaffolding, and component management tools. Once connected, the AI assistant can answer documentation questions, query the API surface, and add or modify components through natural-language prompts. See [Ignite UI MCP](./ignite-ui-mcp.md).

**The Theming MCP server** exposes the Ignite UI Theming Engine. It covers design token access, palette definitions, CSS custom property generation, and WCAG AA contrast validation. It is architecturally separate from the Ignite UI MCP server and can be used independently. See [Theming MCP](./theming-mcp.md).

## Supported AI Clients

The Ignite UI MCP server and Theming MCP server work with any editor or AI client that supports MCP with STDIO transport. `ai-config` writes to `.vscode/mcp.json` by default. For other clients, copy the relevant entries into the client's configuration file as listed below.

| Client                      | Configuration file                                                |
| --------------------------- | ----------------------------------------------------------------- |
| VS Code with GitHub Copilot | `.vscode/mcp.json`                                                |
| Cursor                      | `.cursor/mcp.json`                                                |
| Claude Desktop (macOS)      | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows)    | `%APPDATA%\Claude\claude_desktop_config.json`                     |
| Claude Code                 | `.mcp.json` or the Claude Code MCP CLI command                    |
| JetBrains AI Assistant      | **Tools → AI Assistant → Model Context Protocol (MCP)**           |

Agent Skills are compatible with GitHub Copilot via `.github/copilot-instructions.md`, Cursor via `.cursorrules` or `.cursor/rules/`, Windsurf via `.windsurfrules`, and JetBrains AI Assistant via project-level prompt settings.

## Manual Configuration

If you cannot or prefer not to use `ai-config`, configure the MCP servers by hand. The entries below are what `ai-config` writes; they replace the legacy `igniteui-cli mcp` configuration that earlier versions of the docs referenced.

**VS Code (`.vscode/mcp.json`):**

```json
{
  "servers": {
    "igniteui": {
      "command": "npx",
      "args": ["-y", "-p", "@igniteui/mcp-server", "igniteui-mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

**Cursor, Claude Desktop, JetBrains, Windsurf, and other MCP clients:**

```json
{
  "mcpServers": {
    "igniteui": {
      "command": "npx",
      "args": ["-y", "-p", "@igniteui/mcp-server", "igniteui-mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

For Agent Skills, copy the Skill package for your framework from `node_modules/igniteui-{framework}/skills/` into your project's agent discovery path (`.claude/skills/`, `.agents/skills/`, or `.cursor/rules/` depending on the client). See [Agent Skills](./skills.md) for the complete client-by-client setup.

<!-- VERIFY: Confirm the Theming MCP invocation form `npx -y igniteui-theming igniteui-theming-mcp` matches the current package bin entry. -->

## Verify the MCP Servers (Optional)

To confirm the MCP servers are reachable and browse their tool list, launch them through the MCP Inspector — a browser-based UI maintained by the Model Context Protocol project for testing any MCP server.

**Ignite UI MCP server:**

```bash
npx -y @modelcontextprotocol/inspector npx -y -p @igniteui/mcp-server igniteui-mcp
```

**Theming MCP server:**

```bash
npx -y @modelcontextprotocol/inspector npx -y igniteui-theming igniteui-theming-mcp
```

Each command prints a `localhost` URL with a one-time session token, then opens it in your browser. The UI lists every tool the server exposes and lets you call them interactively. Press `Ctrl+C` in the terminal to stop the Inspector.

The MCP launch commands themselves (`npx -y -p @igniteui/mcp-server igniteui-mcp` and `npx -y igniteui-theming igniteui-theming-mcp`) use STDIO transport and produce no visible output until a client connects — they appear to hang in a terminal. Use the Inspector commands above for verification, and let your AI client launch the bare commands from the configuration files in production.

## Additional Resources

- [Agent Skills](./skills.md)
- [Ignite UI MCP](./ignite-ui-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
---
title: Start from an Empty Folder with Ignite UI CLI MCP for {Platform} - {ProductName}
_description: Set up Ignite UI CLI MCP and Ignite UI Theming MCP in a new empty folder and use an AI assistant to create a {Platform} project through chat. Covers VS Code, Cursor, Claude Desktop, Claude Code, and JetBrains.
_keywords: {Platform}, {ProductName}, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, AI, agent
_language: en
_license: MIT
_canonicalLink: {environment:dvUrl}/components/general-how-to-start-mcp
namespace: Infragistics.Controls
mentionedTypes: []
---

<!-- schema: HowTo, Article -->
<!-- cspell:words igniteui mcpservers npx -->

# Start from an Empty Folder with Ignite UI CLI MCP for {Platform}

The MCP-first setup for Ignite UI for {Platform} starts with an empty workspace folder, adds the MCP configuration for your AI client, and then uses chat or agent mode to create the {Platform} project from the beginning. No manual CLI steps are required before the first prompt — Ignite UI CLI MCP exposes Ignite UI CLI scaffolding tools to the AI assistant, which invokes them on your behalf.

The two servers do not create the project autonomously. The AI assistant invokes Ignite UI CLI MCP tools in response to your prompts. Ignite UI CLI MCP and Ignite UI Theming MCP do not currently support Blazor in the current setup flows — Angular, React, and Web Components are supported. If you already have a {Platform} project, see [Use Ignite UI CLI MCP in an Existing {Platform} Project](general-how-to-use-mcp-existing-project.md) instead of this guide.

## Prerequisites

- Node.js installed so `npx` is available in the terminal
- A supported AI client: VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, or another MCP-compatible client with STDIO support
- Internet access for `npx` to download the MCP server packages on first run
- An empty folder with no existing project files

## Step 1: Create the Empty Folder

Create a new empty folder for the {Platform} project.

- If you are using an editor-based client (VS Code, Cursor, JetBrains), open that folder in the editor.
- If you are using a desktop or chat-first client (Claude Desktop, Claude Code), keep the folder available as the project context for the session.

## Step 2: Create the MCP Configuration File

Create the MCP configuration file in the location that matches your AI client:

| Client | Configuration location |
| --- | --- |
| VS Code | `.vscode/mcp.json` |
| Cursor | `.cursor/mcp.json` |
| Claude Desktop (macOS) | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows) | `%APPDATA%\Claude\claude_desktop_config.json` |
| Claude Code | `.mcp.json` |
| JetBrains IDEs | **Tools → AI Assistant → Model Context Protocol (MCP)** |
| Other MCP clients | Use the same command and arguments through STDIO configuration |

For VS Code, the folder structure after this step looks like:

<!-- VS Code -->

```text
your-project/
  .vscode/
    mcp.json
```

<!-- end: VS Code -->

## Step 3: Add the MCP Server Configuration

Add both MCP servers to the configuration file. Use the JSON structure that matches your AI client.

### VS Code

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

### Cursor, Claude Desktop, Claude Code, JetBrains, and Other MCP Clients

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

The `igniteui-cli` entry starts the Ignite UI CLI MCP, which exposes project creation, component management, and documentation tools. The `igniteui-theming` entry starts the Ignite UI Theming MCP, which exposes theme and styling tools.

## Step 4: Load the MCP Servers

Save the configuration file. Your editor or AI client may detect the MCP servers automatically after saving.

If the tools do not appear immediately, reload or reopen the workspace, or restart the client.

## Step 5: Confirm the MCP Tools Are Available

Open chat, agent mode, or the MCP tools view in your AI client and check the available tools. Both MCP servers and their tools should be listed:

- `igniteui-cli`
- `igniteui-theming`

If either server fails to appear, verify that the configuration content matches the example exactly and that Node.js is installed and available in the terminal.

Client-specific verification steps:

- **VS Code with GitHub Copilot**: open Copilot Chat and switch to **Agent** mode
- **Cursor**: open a new chat session and check the available MCP tools
- **Claude Desktop**: restart the app and look for the MCP indicator in the chat input area
- **Claude Code**: use the `/mcp` command to confirm the server is connected
- **JetBrains IDEs**: review the MCP connection in **Tools → AI Assistant → Model Context Protocol (MCP)**

## Step 6: Prompt the Assistant to Create the {Platform} Project

Once both MCP servers are confirmed available, send a prompt in chat asking the assistant to create the {Platform} project in the current folder. The assistant will invoke Ignite UI CLI MCP tools to scaffold the project.

## Troubleshooting

**`npx` is not recognized**
Node.js is not installed or is not available in the current terminal environment. Install Node.js from [nodejs.org](https://nodejs.org) and verify with `node --version`.

**The MCP tools do not appear after saving the configuration**
Reload the workspace, reopen the editor, or restart the AI client. Some clients require a full restart to detect new MCP configuration files.

**One server fails to start**
Verify that the configuration content matches the examples exactly, including key names and argument order. A typo in `args` is the most common cause.

**The folder already has project files**
This guide assumes an empty workspace. If the folder contains existing project files, use [Use Ignite UI CLI MCP in an Existing {Platform} Project](general-how-to-use-mcp-existing-project.md) instead.

## Next Steps

With both MCP servers running and the {Platform} project created, continue in chat to build out the application:

- Choose the {Platform} project structure and template through prompts
- Add Ignite UI for {Platform} components to pages
- Apply and customize themes with Ignite UI Theming MCP
- Ask documentation and API questions about {Platform} components in the same chat session

## Related Topics

For an overview of all available MCP setup paths for {Platform}, see [{Platform} Ignite UI CLI MCP Overview](general-how-to-mcp-overview.md).

If you prefer to scaffold the {Platform} project with Ignite UI CLI before connecting MCP, see [Create a {Platform} Project with Ignite UI CLI, then Continue with MCP](general-how-to-start-mcp-cli-project.md).

If you already have a {Platform} project, see [Use Ignite UI CLI MCP in an Existing {Platform} Project](general-how-to-use-mcp-existing-project.md).

For more information about AI skills and theming workflows, see [{Platform} Agent Skills](ai/skills.md) and [Ignite UI Theming MCP](ai/theming-mcp.md).

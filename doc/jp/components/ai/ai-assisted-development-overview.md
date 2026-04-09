---
title: Ignite UI を使った AI 支援開発 - {ProductName}
_description: Ignite UI は、Angular、React、Web Components 全体で正しいコンポーネント API、インポート パス、デザイン トークンを AI コーディング アシスタントに提供するために、エージェント スキル、Ignite UI CLI MCP サーバー、Theming MCP サーバーを提供します。
_keywords: {Platform}, {ProductName}, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, エージェント スキル, AI, エージェント, Copilot, Cursor
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
namespace: Infragistics.Controls
mentionedTypes: []
---

# Ignite UI を使った AI 支援開発

Ignite UI for Angular、React、Web Components は、3 つのパーツで構成される AI ツールチェーン (エージェント スキル、Ignite UI CLI MCP サーバー、Ignite UI Theming MCP サーバー) を提供します。これにより、AI コーディング アシスタントに正しいコンポーネント API、インポート パス、デザイン トークンを提供します。エージェント スキルは、AI エージェントが特定のプロジェクトで Ignite UI を使用する方法を定義する開発者所有の命令パッケージです。CLI MCP サーバーは、Model Context Protocol を介してアクティブな AI エージェント セッションに Ignite UI CLI スキャフォールディング、コンポーネント管理、ドキュメント ツールを公開します。Theming MCP サーバーは、Ignite UI テーマ エンジンをクエリ可能なエージェント コンテキストとして公開します。3 つのコンポーネントはすべて、GitHub Copilot、Cursor、Claude Desktop、Claude Code、JetBrains AI Assistant と連携します。

AI ツールチェーンは、現在、CLI MCP およびエージェント スキル レイヤーで Blazor をサポートしていません。Blazor のカバレッジは Theming MCP のみで提供されます。CLI MCP サーバーには STDIO トランスポートが必要です。HTTP ベースの MCP クライアントはサポートされていません。エージェント スキルと CLI MCP サーバーは、プロジェクト ファイルを自律的に変更しません。アクティブな AI エージェントにツールと命令を公開し、開発者のプロンプトに応じてエージェントが動作します。

## AI ツールチェーンの概要

Ignite UI の AI ツールチェーンは、独立して使用可能な 3 つのレイヤーで構成されています。各レイヤーは単独で有効にすることができ、連携して動作するように設計されています。

| レイヤー | 提供するもの | 所有者 | フレームワーク |
| --- | --- | --- | --- |
| エージェント スキル | 開発者所有の命令パッケージ: インポート パス、コンポーネント パターン、デシジョン フロー、プロジェクト規約 | 開発者 | Angular、React、Web Components、Blazor |
| CLI MCP サーバー (`igniteui-cli`) | MCP を介したプロジェクト スキャフォールディング、コンポーネント管理、ドキュメントと API クエリ | Infragistics | Angular、React、Web Components |
| Theming MCP サーバー (`igniteui-theming`) | デザイン トークン、パレット定義、CSS 変数生成、MCP を介したテーマ クエリ | Infragistics | Angular、React、Web Components、Blazor |

CLI MCP サーバーと Theming MCP サーバーはどちらも `npx` を通じて起動され、STDIO トランスポートを介して任意の MCP 互換クライアントに接続します。エージェント スキルは、AI クライアントがディスクから読み取るプロジェクトに配置されたローカル ファイルです。

## エージェント スキル

エージェント スキルは、AI コーディング アシスタントに特定のフレームワークで Ignite UI を使用する方法を正確に伝える、構造化された開発者所有のパッケージです。スキル パッケージには、コンポーネント パターン、インポート パス、デシジョン フローを含む `SKILL.md` 命令ファイル、権威ある Ignite UI ドキュメントへの参照、スキーマ ファイルや図などのアセットを含めることができます。スキルが AI クライアントでアクティブになると、エージェントは古い API シグネチャやインポート パスを参照する可能性のある一般的なトレーニング データに依存する代わりに、スキルに従います。

Ignite UI は、Angular、React、Web Components、Blazor 向けの専用スキル パッケージを提供しています。スキル パッケージは開発者所有です。`SKILL.md` を編集してチームの規約に合わせ、プロジェクト固有のパターンを追加し、内部デザイン システムを参照し、コードベースとともにパッケージをバージョン管理できます。

完全なセットアップ手順と IDE の設定については、[エージェント スキル](skills.md)を参照してください。

## CLI MCP サーバー

Ignite UI CLI MCP サーバー (`igniteui-cli`) は、Infragistics が管理する MCP サーバーで、Ignite UI CLI スキャフォールディングとドキュメント ツールをアクティブな AI エージェント セッションに公開します。接続すると、AI アシスタントはチャット セッションの自然言語プロンプトを通じて、Angular、React、または Web Components プロジェクトの作成、Ignite UI コンポーネントの追加と変更、ドキュメントと API の質問への回答を行うことができます。

CLI MCP サーバーはグローバル インストールなしで `npx` 経由で起動します。

```bash
npx -y igniteui-cli mcp
```

サーバーは、GitHub Copilot を使用した VS Code、Cursor、Claude Desktop、Claude Code、JetBrains AI Assistant、および STDIO トランスポートをサポートするその他の MCP 互換クライアントに接続します。クライアントによって構成形式が異なります。以下の CLI MCP セットアップ ガイドを参照してください。

CLI MCP サーバーは Blazor をサポートしていません。コードを自律的に生成しません。AI エージェントにツールを公開し、開発者のプロンプトに応じてエージェントがツールを呼び出します。

## Theming MCP サーバー

Ignite UI Theming MCP サーバー (`igniteui-theming`) は、Ignite UI テーマ エンジンをクエリ可能なエージェント コンテキストとして公開する別の MCP サーバーです。デザイン トークン アクセス、パレット定義、CSS カスタム プロパティ生成、WCAG AA コントラスト検証をカバーします。CLI MCP サーバーとはアーキテクチャ的に分離されており、プロジェクト スキャフォールディング ツールを公開せずに AI エージェントにテーマ ツールへのアクセスを提供するために、独立して接続できます。

Theming MCP サーバーは `npx` 経由で起動します。

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

Theming MCP サーバーは Angular、React、Web Components、Blazor をサポートしています。Ignite UI のリリースごとに更新されるため、エージェントは常に最新のトークン サーフェスに対して動作します。

構成の詳細については、[Theming MCP](theming-mcp.md)を参照してください。

## サポートされている AI クライアント

CLI MCP サーバーと Theming MCP サーバーは、STDIO トランスポートで MCP をサポートする任意のエディターまたは AI クライアントと連携します。

| クライアント | 構成方法 |
| --- | --- |
| GitHub Copilot を使用した VS Code | `.vscode/mcp.json` |
| Cursor | `.cursor/mcp.json` |
| Claude Desktop (macOS) | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows) | `%APPDATA%\Claude\claude_desktop_config.json` |
| Claude Code | `.mcp.json` または Claude Code MCP CLI コマンド |
| JetBrains AI Assistant | **Tools → AI Assistant → Model Context Protocol (MCP)** |

エージェント スキルは、`.github/copilot-instructions.md` を介した GitHub Copilot、`.cursorrules` または `.cursor/rules/` を介した Cursor、`.windsurfrules` を介した Windsurf、プロジェクト レベルのプロンプト設定を介した JetBrains AI Assistant と互換性があります。

## AI ツールチェーンのセットアップ

Ignite UI AI ツールチェーンのセットアップには 3 つのステップがあります。フレームワークのエージェント スキルをロードし、CLI MCP サーバーを接続し、オプションで Theming MCP サーバーを接続します。3 つのステップはすべて独立しており、任意の順序で実行できます。

### ステップ 1 - エージェント スキルをロードする

フレームワークの Ignite UI スキル パッケージをプロジェクトのエージェント検出パスにコピーします。スキル パッケージは `node_modules/igniteui-{framework}/skills/` のライブラリに付属しています。クライアントの永続的なセットアップを使用して IDE に接続します。

完全なセットアップについては、[エージェント スキル](skills.md)を参照してください。

### ステップ 2 - CLI MCP サーバーを接続する

AI クライアントの構成ファイルに `igniteui-cli` MCP サーバー エントリを追加します。クライアントに合った JSON 構造を使用してください。

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

**Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP クライアント:**

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

VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP 互換クライアントを含む完全なセットアップ ガイドについては、[CLI MCP](cli-mcp.md)を参照してください。

### ステップ 3 - Theming MCP サーバーを接続する (オプション)

`igniteui-cli` と並んで、同じ MCP 構成ファイルに `igniteui-theming` エントリを追加します。

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

構成の詳細とテーマ ワークフローについては、[Theming MCP](theming-mcp.md)を参照してください。

## その他のリソース

<!-- React -->
- [Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)
<!-- end: React -->
<!-- WebComponents -->
- [Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)
<!-- end: WebComponents -->
- [エージェント スキル](./skills.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [{ProductName} **フォーラム** (英語)]({ForumsLink})
- [{ProductName} **GitHub** (英語)]({GithubLink})

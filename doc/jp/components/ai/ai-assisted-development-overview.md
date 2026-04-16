---
title: Ignite UI を使用した AI 支援開発 - {ProductName}
_description: Ignite UI は、エージェント スキル、Ignite UI CLI MCP サーバー、テーマ設定 MCP サーバーを提供し、Angular、React、Web Components 全体でコンポーネント API、インポート パス、デザイン トークンを AI コーディング アシスタントに正確に提供します。
_keywords: {Platform}, {ProductName}, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, Agent Skills, AI, agent, Copilot, Cursor
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
namespace: Infragistics.Controls
mentionedTypes: []
---

<!-- schema: Article -->
<!-- cspell:words igniteui mcpservers npx theming -->

<!-- feature-meta
name: AI-Assisted Development
category: toolchain
tools: [agent-skills, cli-mcp, theming-mcp, design-to-code]
frameworks: [Angular, React, WebComponents]
clients: [VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains AI Assistant]
mcp-transport: STDIO
-->

# Ignite UI を使用した AI 支援開発

Ignite UI for Angular、React、および Web Components は、3 つのパーツで構成された AI ツールチェーン (エージェント スキル、Ignite UI CLI MCP サーバー、Ignite UI テーマ設定 MCP サーバー) を提供し、コンポーネント API、インポート パス、デザイン トークンを AI コーディング アシスタントに正確に提供します。エージェント スキルは、特定のプロジェクトで AI エージェントが Ignite UI を使用する方法を定義する、開発者が所有する命令パッケージです。CLI MCP サーバーは、Model Context Protocol を介して、Ignite UI CLI のスキャフォールディング、コンポーネント管理、ドキュメント ツールをアクティブな AI エージェント セッションに公開します。テーマ設定 MCP サーバーは、Ignite UI テーマ設定エンジンをクエリ可能なエージェント コンテキストとして公開します。3 つのコンポーネントはすべて、GitHub Copilot、Cursor、Claude Desktop、Claude Code、および JetBrains AI Assistant と連携します。

AI ツールチェーンは、CLI MCP とエージェント スキル レイヤーでは現在 Blazor をサポートしていません。Blazor のカバレッジはテーマ設定 MCP のみで提供されます。CLI MCP サーバーは STDIO トランスポートを必要とします。HTTP ベースの MCP クライアントはサポートされていません。エージェント スキルと CLI MCP サーバーは、プロジェクト ファイルを自律的に変更しません。これらはツールと命令をアクティブな AI エージェントに公開し、AI エージェントが開発者のプロンプトに応じて操作を実行します。

## AI ツールチェーンの概要

Ignite UI の AI ツールチェーンは、独立して使用可能な 3 つのレイヤーで構成されています。各レイヤーは単独で有効化できます。これらは連携して動作するように設計されています。

| レイヤー | 提供内容 | オーナー | フレームワーク |
| --- | --- | --- | --- |
| エージェント スキル | 開発者が所有する命令パッケージ: インポート パス、コンポーネント パターン、デシジョン フロー、プロジェクト規則 | 開発者 | Angular、React、Web Components、Blazor |
| CLI MCP サーバー (`igniteui-cli`) | プロジェクト スキャフォールディング、コンポーネント管理、MCP 経由のドキュメントおよび API クエリ | Infragistics | Angular、React、Web Components |
| テーマ設定 MCP サーバー (`igniteui-theming`) | デザイン トークン、パレット定義、CSS 変数生成、MCP 経由のテーマ設定クエリ | Infragistics | Angular、React、Web Components、Blazor |

CLI MCP サーバーとテーマ設定 MCP サーバーはどちらも `npx` で起動し、STDIO トランスポートを介して MCP 互換クライアントに接続します。エージェント スキルは、プロジェクトに配置されたローカル ファイルで、AI クライアントがディスクから読み取ります。

## エージェント スキル

エージェント スキルは、特定のフレームワーク向けに Ignite UI の使用方法を AI コーディング アシスタントに正確に伝える、構造化された開発者所有のパッケージです。スキル パッケージには、コンポーネント パターン、インポート パス、デシジョン フローを含む `SKILL.md` 命令ファイル、公式の Ignite UI ドキュメントへの参照、スキーマ ファイルや図などのアセットを含めることができます。スキルが AI クライアントでアクティブな場合、エージェントは古い API シグネチャやインポート パスを参照する可能性がある一般的なトレーニング データに頼る代わりに、スキルに従います。

Ignite UI は、Angular、React、Web Components、および Blazor 向けの専用スキル パッケージを提供しています。スキル パッケージは開発者が所有します。`SKILL.md` を編集してチームの規則に合わせ、プロジェクト固有のパターンを追加し、内部デザイン システムを参照し、コードベースと並行してパッケージをバージョン管理してください。

完全なセットアップ手順と IDE の設定については、「[エージェント スキル](skills.md)」を参照してください。

## CLI MCP サーバー

Ignite UI CLI MCP サーバー (`igniteui-cli`) は、Infragistics が管理する MCP サーバーで、Ignite UI CLI のスキャフォールディングとドキュメント ツールをアクティブな AI エージェント セッションに公開します。接続すると、AI アシスタントは Angular、React、または Web Components プロジェクトを作成し、Ignite UI コンポーネントを追加および変更し、チャット セッション内の自然言語プロンプトでドキュメントおよび API の質問に回答できます。

CLI MCP サーバーはグローバル インストールなしで `npx` で起動します:

```bash
npx -y igniteui-cli mcp
```

サーバーは、VS Code with GitHub Copilot、Cursor、Claude Desktop、Claude Code、JetBrains AI Assistant、および STDIO トランスポートをサポートする他の MCP 互換クライアントに接続します。正確な設定形式はクライアントによって異なります。以下の CLI MCP セットアップ ガイドを参照してください。

CLI MCP サーバーは Blazor をサポートしていません。コードを自律的に生成しません。ツールを AI エージェントに公開し、開発者のプロンプトに応じて AI エージェントがツールを呼び出します。

## テーマ設定 MCP サーバー

Ignite UI テーマ設定 MCP サーバー (`igniteui-theming`) は、Ignite UI テーマ設定エンジンをクエリ可能なエージェント コンテキストとして公開する別個の MCP サーバーです。デザイン トークン アクセス、パレット定義、CSS カスタム プロパティの生成、WCAG AA コントラスト検証をカバーします。CLI MCP サーバーとはアーキテクチャ的に独立しています。プロジェクト スキャフォールディング ツールを公開せずに AI エージェントにテーマ設定ツールへのアクセスを提供するために、単独で接続できます。

テーマ設定 MCP サーバーは `npx` で起動します:

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

テーマ設定 MCP サーバーは、Angular、React、Web Components、および Blazor をサポートしています。Ignite UI のリリースごとに更新されるため、エージェントは常に現在のトークン サーフェスに対して動作します。

設定の詳細については、「[テーマ設定 MCP](theming-mcp.md)」を参照してください。

## サポートされている AI クライアント

CLI MCP サーバーとテーマ設定 MCP サーバーは、STDIO トランスポートで MCP をサポートする任意のエディターまたは AI クライアントで動作します。

| クライアント | 設定方法 |
| --- | --- |
| VS Code with GitHub Copilot | `.vscode/mcp.json` |
| Cursor | `.cursor/mcp.json` |
| Claude Desktop (macOS) | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows) | `%APPDATA%\Claude\claude_desktop_config.json` |
| Claude Code | `.mcp.json` または Claude Code MCP CLI コマンド |
| JetBrains AI Assistant | **Tools → AI Assistant → Model Context Protocol (MCP)** |

エージェント スキルは、`.github/copilot-instructions.md` を介した GitHub Copilot、`.cursorrules` または `.cursor/rules/` を介した Cursor、`.windsurfrules` を介した Windsurf、プロジェクト レベルのプロンプト設定を介した JetBrains AI Assistant と互換性があります。

## AI ツールチェーンのセットアップ

Ignite UI AI ツールチェーンのセットアップは 3 つのステップで行います: フレームワーク用のエージェント スキルの読み込み、CLI MCP サーバーの接続、オプションでテーマ設定 MCP サーバーの接続。3 つのステップはすべて独立しており、任意の順序で実行できます。

### ステップ 1 - エージェント スキルの読み込み

フレームワーク用の Ignite UI スキル パッケージをプロジェクトのエージェント検出パスにコピーします。スキル パッケージは `node_modules/igniteui-{framework}/skills/` のライブラリと一緒に提供されます。クライアントの永続的なセットアップを使用して IDE に接続します。

完全なセットアップについては、「[エージェント スキル](skills.md)」を参照してください。

### ステップ 2 - CLI MCP サーバーの接続

AI クライアントの設定ファイルに `igniteui-cli` MCP サーバー エントリを追加します。クライアントに対応する JSON 構造を使用してください:

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

VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、およびその他の MCP 互換クライアントを含む完全なセットアップ ガイドについては、「[CLI MCP](cli-mcp.md)」を参照してください。

### ステップ 3 - テーマ設定 MCP サーバーの接続 (オプション)

`igniteui-cli` と並べて、同じ MCP 設定ファイルに `igniteui-theming` エントリを追加します:

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

設定の詳細とテーマ設定ワークフローについては、「[テーマ設定 MCP](theming-mcp.md)」を参照してください。

<!-- React -->
プロジェクト作業、ドキュメントの質問、テーマ設定を 1 つの会話で組み合わせた単一のエンドツーエンドの例については、「[Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)」を参照してください。
<!-- end: React -->
<!-- WebComponents -->
プロジェクト作業、ドキュメントの質問、テーマ設定を 1 つの会話で組み合わせた単一のエンドツーエンドの例については、「[Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)」を参照してください。
<!-- end: WebComponents -->

## 関連トピック

- [エージェント スキル](skills.md) - VS Code、Cursor、Windsurf、JetBrains でスキル パッケージを読み込み、接続するための完全なセットアップ ガイド
- [CLI MCP](cli-mcp.md) - Ignite UI CLI MCP の完全なセットアップ ガイド (推奨の CLI ファースト セットアップとクライアント固有の設定を含む)
<!-- React -->
- [Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md) - プロジェクト作業からドキュメントの質問、テーマ設定まで 1 つのチャット セッションで行う具体的な組み合わせワークフロー
<!-- end: React -->
<!-- WebComponents -->
- [Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md) - プロジェクト作業からドキュメントの質問、テーマ設定まで 1 つのチャット セッションで行う具体的な組み合わせワークフロー
<!-- end: WebComponents -->
- [テーマ設定 MCP](theming-mcp.md) - テーマ設定 MCP サーバーのセットアップとテーマ設定ワークフローの例

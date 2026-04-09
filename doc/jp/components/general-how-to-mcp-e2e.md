---
title: Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド - {ProductName}
_description: Ignite UI CLI MCP と Ignite UI Theming MCP を使用した {ProductName} のエンドツーエンドのワークフローに従ってください。CLI 優先で始め、両方の MCP サーバーを接続し、チャットを通じてアプリを作成または拡張し、ドキュメントの質問をして、カスタム テーマを適用します。
_keywords: {Platform}, {ProductName}, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, ワークフロー, テーマ設定, プロンプト
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/general-how-to-mcp-e2e"
namespace: Infragistics.Controls
mentionedTypes: []
---

# Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド

<p class="highlight">Ignite UI CLI MCP と Ignite UI Theming MCP が連携して、AI アシスタントがチャット プロンプトを通じて {ProductName} アプリケーションをスキャフォールディング、拡張、テーマ設定できるようにします。CLI MCP はプロジェクト作成、コンポーネント作業、ドキュメントの質問を処理します。Theming MCP はパレット、テーマ、トークン、スタイリング ワークフローを処理します。このトピックでは、全プロセスを 1 つの明確なフローで示します。</p>

<div class="divider"></div>

## CLI MCP と Theming MCP の役割分担

CLI MCP と Theming MCP は、Ignite UI for Angular 開発ワークフローで明確に重複しない役割を持つ 2 つの別個の STDIO トランスポート MCP サーバーです。

| 関心事 | サーバー |
| ------------------------------------------------ | ----------- |
| プロジェクト構造の作成とスキャフォールディング | CLI MCP |
| コンポーネントの追加または更新 | CLI MCP |
| コンポーネント API とドキュメントのクエリ | CLI MCP |
| カラー パレットとシェード バリエーションの生成 | Theming MCP |
| グローバル テーマ構成の作成と適用 | Theming MCP |
| コンポーネント レベルのデザイン トークンの生成 | Theming MCP |
| 間隔、サイズ、ボーダー半径の調整 | Theming MCP |

どちらのサーバーも自律的にステップを実行しません — AI アシスタントはプロンプトに応じてのみ MCP ツールを呼び出します。CLI MCP はテーマや Sass ファイルを生成または変更しません。Theming MCP はコンポーネントをスキャフォールディングしたり、アプリケーション ロジックを変更したり、ドキュメントの質問に回答したりしません。両方のサーバーには STDIO トランスポートをサポートする MCP クライアントが必要です。ブラウザーのみのチャット インターフェイスからは使用できません。

## 必要なもの

開始前に、次のものがあることを確認してください。

- `npx` を利用できるように **Node.js** がインストールされていること
- MCP サポートを備えたサポートされている AI クライアント
- 初回使用時の `npx` パッケージ解決のためのインターネット アクセス
- プロジェクト用のフォルダー

このウォークスルーは、**CLI 優先**セットアップで最も効果的です。Ignite UI CLI がプロジェクトをスキャフォールディングし、VS Code の最初の MCP 構成を自動的に準備するためです。

各クライアントの詳細なセットアップ リファレンスが必要な場合は、[Ignite UI CLI MCP](ai/cli-mcp.md) と [Ignite UI Theming MCP](ai/theming-mcp.md) を参照してください。

## ステップ 1: Ignite UI CLI で始める

推奨される開始点は、最初に Ignite UI CLI でプロジェクトを作成することです。

Ignite UI CLI を次のいずれかの方法で実行できます。

### グローバル インストール

```bash
npm install -g igniteui-cli
```

これにより、任意のターミナル セッションで `ig` コマンドが使用できるようになります。

### グローバル インストールなし

```bash
npx --package igniteui-cli igniteui new
```

グローバルな `ig` コマンドの代わりに `npx` を通じて CLI を実行します。

CLI にオプションを案内させたい場合は**ガイド モード**を使用できます。

```bash
ig new
```

一致する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new
```

プロジェクト設定を既に知っている場合は直接コマンドを使用することもできます。

<!-- React -->
React の場合:

```bash
ig new my-app --framework=react
```

一致する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=react
```
<!-- end: React -->

<!-- WebComponents -->
Web Components の場合:

```bash
ig new my-app --framework=webcomponents
```

一致する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=webcomponents
```
<!-- end: WebComponents -->

次に起こること:

- Ignite UI CLI がプロジェクト構造を作成します
- 必要なプロジェクト パッケージがインストールされます
- CLI 優先パスの場合、VS Code は初期 `.vscode/mcp.json` も取得します

## ステップ 2: CLI MCP と Theming MCP を接続する

プロジェクトを作成したら、両方の MCP サーバーが AI クライアントで利用可能であることを確認します。

### VS Code

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

### Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP クライアント

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

構成を保存したら、AI クライアントを再起動または再起動して、`igniteui-cli` と `igniteui-theming` の両方が利用可能であることを確認します。

## ステップ 3: アシスタントにプロジェクトを確認させる

両方の MCP サーバーが実行されたら、新しいチャットを開き、アシスタントにプロジェクト レベルのコンテキストを提供することから始めます。

役立つプロンプト:

> _「このプロジェクトを確認し、機能の追加を開始する前に現在の構造を説明して」_

> _「作成されたもの、メイン エントリ ポイント、新しいページを追加する場所を教えて」_

次に起こること:

- CLI MCP が生成または既存のプロジェクトを検査します
- アシスタントが構造を要約します
- 次のステップのための共通の出発点ができます

## ステップ 4: チャットを通じて実際の機能を追加する

プロジェクト構造が明確になったら、具体的な機能を要求します。

プロンプトの例:

> _「{ProductName} グリッドを使用した Orders ページを追加して。Order ID、Customer Name、Order Date、Total Amount の列を含め、サンプル データにグリッドをバインドして」_

フォローアップ プロンプト:

> _「Orders グリッドでフィルタリング、ソート、ページングを有効にして、ページ レイアウトをアプリの残りの部分と一致させて」_

次に起こること:

- CLI MCP が適切なページを追加または更新します
- アシスタントがコンポーネント コードを作成または更新します
- 機能が既存のアプリ構造に統合されます

小さな改良を続けることができます。

> _「グリッドの上にシンプルなツールバーを追加し、レイアウトをコンパクトに保って」_

## ステップ 5: 同じセッションでドキュメントの質問をする

コンポーネント API を調べるために会話を離れる必要はありません。

プロンプトの例:

> _「{Platform} グリッドがサポートするフィルタリング オプションは何ですか? シンプルな注文テーブルに最も適したものはどれですか?」_

> _「コンボ コンポーネントが公開するイベントは何ですか? 選択変更にはどれを使うべきですか?」_

> _「サイド ナビゲーション レイアウトに最も適した {ProductName} コンポーネントはどれですか? その理由は?」_

次に起こること:

- CLI MCP がドキュメント対応ツールを使用して質問に回答します
- すぐに実装要求を続けることができます

例えば:

> _「推奨されるフィルタリング アプローチを現在の Orders グリッドに適用して」_

## ステップ 6: カスタム テーマを適用する

アプリ構造とメイン機能が整ったら、同じチャットで Theming MCP に切り替えます。

プロンプトの例:

> _「アプリにプロフェッショナルなテーマを適用して。深いブルーのプライマリ カラー、暖かいアンバーのセカンダリ カラーを使用し、間隔をコンパクトに保って」_

次に起こること:

- Theming MCP がパレットとテーマ構成を生成します
- アシスタントが適切なテーマまたはスタイル ファイルを更新します
- アプリのスタイリングが現在の構造と一致した状態を維持します

より具体的なプロンプトでテーマをさらに調整できます。

> _「グリッド ヘッダーにプライマリ カラーを使用し、行の高さを少し増やして、ページの残りの部分を視覚的にクリーンに保って」_

> _「グリッドのスタイリングを改良する前に、生成されたプライマリとセカンダリのパレット シェードを表示して」_

## ステップ 7: 反復を続ける

このワークフローの最も強力な部分は、1 つの会話でプロジェクト作業、ドキュメントの質問、テーマ設定を自由に行き来できることです。

プロンプトの例:

> _「現在の Orders ページ構造を維持しながら、レイアウトを簡略化してフィルタリング エリアをよりコンパクトにして」_

> _「現在のテーマを使用しながら、ダッシュボード カードとグリッドの間隔をアプリの残りの部分とより一致させて」_

> _「生成されたファイルを確認し、主なプロジェクト、コンポーネント、テーマの変更を説明して」_

次に起こること:

- CLI MCP がプロジェクトとコンポーネントの改良を処理します
- Theming MCP がテーマとトークンの改良を処理します
- アシスタントがワークフロー全体をエンドツーエンドで接続した状態を維持します

## トピックのまとめ

このワークフローは、プロジェクトのセットアップ、コンポーネント作業、ドキュメントの検索、テーマ設定を 1 つのチャット セッションで行いたい場合に有効です。

次の場合に使用します:

- 孤立したコード スニペットではなく、実際のプロジェクト スキャフォールドから始めたい場合
- 実装とドキュメントの質問を交互に行う予定がある場合
- プロジェクト構造とビジュアル スタイリングを一緒に進化させたい場合

実際には、最も効果的なパターンは、プロジェクトとコンポーネントの変更に CLI MCP を使用し、必要に応じてドキュメントの質問のために一時停止し、同じ会話を離れずに Theming MCP を使用して結果を改良することです。

## 関連トピック

- [Ignite UI を使った AI 支援開発](ai/ai-assisted-development-overview.md)
- [{ProductName} スキル](ai/skills.md)
- [Ignite UI CLI MCP](ai/cli-mcp.md)
- [Ignite UI Theming MCP](ai/theming-mcp.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [{ProductName} **フォーラム** (英語)]({ForumsLink})
- [{ProductName} **GitHub** (英語)]({GithubLink})

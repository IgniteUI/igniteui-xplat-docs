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

<p class="highlight">Ignite UI CLI MCP と Ignite UI Theming MCP は連携して動作し、チャット プロンプトを通じて AI アシスタントが {ProductName} アプリケーションのスキャフォールディング、拡張、テーマ設定を行えるようにします。CLI MCP はプロジェクト作成、コンポーネントの操作、ドキュメントの質問を処理します。Theming MCP はパレット、テーマ、トークン、スタイリング ワークフローを処理します。このトピックでは、一連のプロセスを 1 つの明確なフローで示します。</p>

<div class="divider"></div>

## CLI MCP と Theming MCP の役割分担

CLI MCP と Theming MCP は、2つの独立した STDIO トランスポート MCP サーバーであり、Ignite UI for Angularの開発ワークフローにおいて、それぞれ明確に異なる役割を担っています。

| 関心事 | サーバー |
| ------------------------------------------------ | ----------- |
| プロジェクト構造の作成とスキャフォールディング | CLI MCP |
| コンポーネントの追加または更新 | CLI MCP |
| コンポーネント API とドキュメントの問い合わせ | CLI MCP |
| カラー パレットとシェード バリエーションの生成 | Theming MCP |
| グローバル テーマ構成の作成と適用 | Theming MCP |
| コンポーネント レベルのデザイン トークンの生成 | Theming MCP |
| 間隔、サイズ、ボーダー半径の調整 | Theming MCP |

どちらのサーバーも自律的にステップを実行することはありません。AI アシスタントはプロンプトに応じてのみ MCP ツールを呼び出します。CLI MCP はテーマや Sass ファイルを生成または変更しません。Theming MCP はコンポーネントをスキャフォールディングしたり、アプリケーション ロジックを変更したり、ドキュメントの質問に回答したりしません。両サーバーとも STDIO トランスポートをサポートする MCP クライアントが必要であり、ブラウザーのみのチャット インターフェイスからは使用できません。

## 必要なもの

開始前に、以下の前提条件が揃っていることを確認してください。

- `npx` を利用できるように **Node.js** がインストールされていること
- MCP サポートを備えたサポートされている AI クライアント
- 初回使用時の `npx` パッケージ解決のためのインターネット アクセス
- プロジェクト用のフォルダー

このウォークスルーは、**CLI ファースト**のセットアップで最も効果的に機能します。Ignite UI CLI がプロジェクトをスキャフォールディングし、VS Code 用の MCP 構成を自動的に初期設定するためです。

各クライアントの詳細なセットアップ リファレンスが必要な場合は、[Ignite UI CLI MCP](ai/cli-mcp.md) と [Ignite UI Theming MCP](ai/theming-mcp.md) を参照してください。

## ステップ 1: Ignite UI CLI で始める

推奨される手順は、最初に Ignite UI CLI でプロジェクトを作成することです。

Ignite UI CLI を次のいずれかの方法で実行します。

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

`npx` で実行する場合:

```bash
npx --package igniteui-cli igniteui new
```

プロジェクト設定を既に知っている場合は直接コマンドを使用することもできます。

<!-- React -->
React の場合:

```bash
ig new my-app --framework=react
```

`npx` で実行する場合:

```bash
npx --package igniteui-cli igniteui new my-app --framework=react
```
<!-- end: React -->

<!-- WebComponents -->
Web Components の場合:

```bash
ig new my-app --framework=webcomponents
```

`npx` で実行する場合:

```bash
npx --package igniteui-cli igniteui new my-app --framework=webcomponents
```
<!-- end: WebComponents -->

続いて行われる処理:

- Ignite UI CLI がプロジェクト構造を作成します
- 必要なプロジェクト パッケージがインストールされます
- CLI を使ったセットアップ手順では、VS Code 用の `.vscode/mcp.json` も初期設定されます

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

構成を保存したら、AI クライアントを再起動して、`igniteui-cli` と `igniteui-theming` の両方の MCP サーバーが利用可能であることを確認します。

## ステップ 3: アシスタントにプロジェクトを確認させる

両方の MCP サーバーが起動したら、新しいチャットを開き、アシスタントにプロジェクト レベルのコンテキストを提供することから始めます。

プロンプトの例:

> _「このプロジェクトを確認し、機能の追加を開始する前に現在の構造を説明して」_

> _「作成されたもの、メイン エントリ ポイント、新しいページを追加する場所を教えて」_

続いて行われる処理:

- CLI MCP が、生成された、あるいは既存のプロジェクトを検査します
- アシスタントが構造を要約します
- 次のステップのための共通の理解が得られます

## ステップ 4: チャットを通じて実際の機能を追加する

プロジェクト構造が明確になったら、具体的な機能を要求します。

プロンプトの例:

> _「{ProductName} グリッドを使用した Orders ページを追加して。Order ID、Customer Name、Order Date、Total Amount の列を含め、サンプル データにグリッドをバインドして」_

追加のプロンプト:

> _「Orders グリッドでフィルタリング、ソート、ページングを有効にして、ページ レイアウトをアプリの残りの部分と一致させて」_

続いて行われる処理:

- CLI MCP が適切なページを追加または更新します
- アシスタントがコンポーネント コードを作成または更新します
- 機能が既存のアプリ構造に統合されます

さらに小さな改良の指示を続けることができます。

> _「グリッドの上にシンプルなツールバーを追加し、レイアウトをコンパクトに保って」_

## ステップ 5: 同じセッションでドキュメントの質問をする

コンポーネント API を調べるために会話を離れる必要はありません。

プロンプトの例:

> _「{Platform} グリッドがサポートするフィルタリング オプションは何ですか? シンプルな注文テーブルに最も適したものはどれですか?」_

> _「コンボ コンポーネントが公開するイベントは何ですか? 選択変更にはどれを使うべきですか?」_

> _「サイド ナビゲーション レイアウトに最も適した {ProductName} コンポーネントはどれですか? その理由は?」_

続いて行われる処理:

- CLI MCP がドキュメント対応ツールを使用して質問に回答します
- すぐに実装要求を続けることができます

例えば:

> _「推奨されるフィルタリング アプローチを現在の Orders グリッドに適用して」_

## ステップ 6: カスタム テーマを適用する

アプリ構造とメイン機能が整ったら、同じチャットで Theming MCP に切り替えます。

プロンプトの例:

> _「アプリにプロフェッショナルなテーマを適用して。深いブルーのプライマリ カラー、暖かいアンバーのセカンダリ カラーを使用し、間隔をコンパクトに保って」_

続いて行われる処理:

- Theming MCP がパレットとテーマ構成を生成します
- アシスタントが適切なテーマまたはスタイル ファイルを更新します
- アプリのスタイリングを、現在の構造と一致した状態に維持します

より具体的なプロンプトでテーマをさらに調整できます。

> _「グリッド ヘッダーにプライマリ カラーを使用し、行の高さを少し増やして、ページの残りの部分を視覚的にクリーンに保って」_

> _「グリッドのスタイリングを改良する前に、生成されたプライマリとセカンダリのパレット シェードを表示して」_

## ステップ 7: 反復を続ける

このワークフローの最も強力な部分は、1 つの会話の中で、プロジェクト作業、ドキュメントの質問、テーマ設定、を自由に行き来できることです。

プロンプトの例:

> _「現在の Orders ページ構造を維持しながら、レイアウトを簡略化してフィルタリング エリアをよりコンパクトにして」_

> _「現在のテーマを使用しながら、ダッシュボード カードとグリッドの間隔をアプリの残りの部分とより一致させて」_

> _「生成されたファイルを確認し、主なプロジェクト、コンポーネント、テーマの変更を説明して」_

続いて行われる処理:

- CLI MCP がプロジェクトとコンポーネントの改良を処理します
- Theming MCP がテーマとトークンの改良を処理します
- ワークフロー全体の流れが途切れることなく、アシスタントがサポートします

## トピックのまとめ

このワークフローは、プロジェクトのセットアップ、コンポーネント作業、ドキュメントの検索、テーマ設定を 1 つのチャット セッションで行いたい場合に有効です。

以下の場合におすすめです:

- 個々のコード スニペットではなく、実際のプロジェクト スキャフォールドから始めたい場合
- 実装とドキュメントへの質問とを交互に行いたい場合
- プロジェクト構造とビジュアル スタイリングを並行して改善していきたい場合

実際の運用では、プロジェクトとコンポーネントの変更に CLI MCP を使用し、必要に応じてドキュメントの質問のために立ち止まり、続けて Theming MCP を使用して生成結果を改良する流れが、同じ会話を離れることのない、最も効率的なパターンです。

## 関連トピック

- [Ignite UI を使った AI 支援開発](ai/ai-assisted-development-overview.md)
- [{ProductName} スキル](ai/skills.md)
- [Ignite UI CLI MCP](ai/cli-mcp.md)
- [Ignite UI Theming MCP](ai/theming-mcp.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [{ProductName} **フォーラム** (英語)]({ForumsLink})
- [{ProductName} **GitHub** (英語)]({GithubLink})

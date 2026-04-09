---
title: {Platform} Ignite UI CLI MCP | Infragistics
_description: Ignite UI CLI MCP を AI クライアントに接続して、{ProductName} のプロジェクトのスキャフォールディング、既存アプリの変更、コンポーネントの作成と更新、ドキュメントの質問に回答します。VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP クライアントのセットアップ オプションについて説明します。
_keywords: {Platform}, {ProductName}, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, エージェント, GitHub Copilot, Cursor, Claude, JetBrains
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai/cli-mcp"
namespace: Infragistics.Controls
mentionedTypes: []
---

# Ignite UI CLI MCP

<p class="highlight">Ignite UI CLI MCP は、AI アシスタントが {ProductName} アプリケーションのプロジェクトのスキャフォールディング、既存アプリの変更、コンポーネントの作成と更新、ドキュメントの質問に回答できるようにする <a href="https://modelcontextprotocol.io/" target="_blank">Model Context Protocol</a> (MCP) サーバーです。Ignite UI CLI MCP をエディター、GitHub リポジトリ、またはデスクトップ AI クライアントに接続し、必要なものを説明すると、アシスタントが CLI ツールを使用します。</p>

<div class="divider"></div>

## 概要

Ignite UI CLI MCP は、チャットまたはエージェント モードを通じて、Ignite UI CLI プロジェクトのスキャフォールディング、コンポーネント生成、プロジェクト変更、ドキュメント対応ワークフローへの直接アクセスを AI アシスタントに提供します。サーバーは Ignite UI Theming MCP と連携して動作します。CLI MCP がプロジェクトとコンポーネントのワークフローを処理し、Theming MCP がパレット、テーマ、トークン、スタイリングを処理します。ほとんどのチームは、両方のサーバーを同じ AI クライアント セッションに接続させます。

Ignite UI CLI MCP は Ignite UI Theming MCP と連携して動作します。実際には、CLI MCP がプロジェクトとコンポーネントのワークフローを処理し、Theming MCP がパレット、テーマ、トークン、スタイリング ワークフローを処理します。ほとんどのチームは両方のサーバーを接続させます。

推奨セットアップ パスは、最初に Ignite UI CLI から始めることです。このパスでは、プロジェクトを作成し、必要なパッケージをインストールし、VS Code の初期 MCP 構成を書き込みます。また、空のフォルダーから始めて、アシスタントが MCP を通じてプロジェクトを作成することも、既存のプロジェクトに MCP を接続することもできます。

<!-- React -->
セットアップ後の完全なビルド フローを確認したい場合は、[Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)を参照してください。
<!-- end: React -->
<!-- WebComponents -->
セットアップ後の完全なビルド フローを確認したい場合は、[Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)を参照してください。
<!-- end: WebComponents -->

**接続後に試すプロンプトの例:**

> _「このフォルダーに新しい Ignite UI for {Platform} プロジェクトを作成し、推奨されるデフォルトを使用して、サンプル データを含むスターター ダッシュボード ページを追加して」_

> _「このプロジェクトに新しいグリッド ページを追加し、サンプル データに接続して、現在のナビゲーション構造を維持して」_

> _「コンボ コンポーネントが公開するプロパティとイベントは何ですか? 検索可能なドロップダウンに最も役立つものはどれですか?」_

> _「既存のプロジェクトを更新してサイド ナビゲーション レイアウトを追加し、現在のページとルートを維持して」_

## 前提条件

MCP サーバーを構成する前に、次のものがあることを確認してください。

- **Node.js** (v18 以降) がインストールされていること — これにより、サーバーの起動に使用される `npx` コマンドが提供されます。
- **MCP サポートを備えた AI クライアント** — 例: VS Code と GitHub Copilot、GitHub Copilot クラウド エージェント、Cursor、Claude Desktop、Claude Code、または AI Assistant プラグインを備えた JetBrains IDE。
- 最初にサーバーが起動するときの `npx` パッケージ解決のためのインターネット アクセス。
- 以下のいずれかの開始点:
  - 新しいプロジェクト用の空のフォルダー
  - Ignite UI CLI で作成したプロジェクト
  - 引き続き作業する既存の {ProductName} プロジェクト

同じクライアント セッションでテーマ ツールを使用したい場合で、`igniteui-theming` がまだプロジェクトで利用できない場合は、次のコマンドを実行します。

```bash
npm install igniteui-theming
```

## AI クライアント用の Ignite UI CLI MCP の構成

MCP サーバーは `npx` を通じて起動されます。Node.js と `igniteui-cli` パッケージへのアクセス以外に追加のインストールは必要ありません。

正規の起動コマンドは次のとおりです。

```bash
npx -y igniteui-cli mcp
```

> [!NOTE]
> `-y` フラグは、`npx` にパッケージ ダウンロード プロンプトを自動確認するように指示するため、サーバーは手動介入なしで起動できます。

### セットアップ パスを選択する

Ignite UI CLI MCP を開始するには 3 つの方法があります。

> **推奨 - CLI 優先**
  最初に `ig new` または一致する `npx --package igniteui-cli igniteui new` コマンドを使用して Ignite UI CLI でプロジェクトを作成します。Ignite UI CLI がプロジェクトをスキャフォールディングし、必要なパッケージをインストールし、VS Code の `.vscode/mcp.json` を自動的に作成するため、これが最も簡単なセットアップです。その後、生成された MCP 構成を確認し、AI クライアントでプロジェクトを開くだけです。

> **空のフォルダー**
  完全に空のフォルダーから始め、MCP 構成を手動で追加してから、アシスタントにチャットを通じてプロジェクトを作成するよう依頼します。このパスは、最初に CLI を自分で実行する代わりに MCP でプロジェクト作成フローを最初から動かしたい場合に便利です。

> **既存プロジェクト**
  既存のプロジェクトに MCP 構成を追加し、現在のコードベースで作業を続けます。このパスは、プロジェクトが既に存在し、何も再生成せずにアシスタントにプロジェクトの変更、コンポーネント作業、ドキュメントの質問を支援させたい場合に便利です。

3 つのパスはすべて同じ MCP サーバーを使用します。違いは、プロンプトを開始する前にプロジェクトがどのように準備されるかだけです。

- **CLI 優先**パスでは、Ignite UI CLI がプロジェクトを作成し、最初の MCP 構成を準備します
- **空のフォルダー**パスでは、最初に MCP 構成を作成し、その後アシスタントにプロジェクトを作成させます
- **既存プロジェクト**パスでは、MCP を現在のコードベースにアタッチし、既存のものから続行します

いずれの場合も、MCP サーバーが接続されて AI クライアントで表示されたら、アシスタントは同じセッションで作業を続けることができます。

最初に Ignite UI CLI でプロジェクトを作成する場合は、次のいずれかの方法で CLI を実行できます。

- **グローバル インストール**

  ```bash
  npm install -g igniteui-cli
  ```

  これにより、任意のターミナル セッションで `ig` コマンドが使用できるようになります。定期的にプロジェクトを作成およびスキャフォールディングする予定がある場合は、最も明確なオプションです。

- **グローバル インストールなし**

  ```bash
  npx --package igniteui-cli igniteui new
  ```

  グローバルな `ig` コマンドの代わりに `npx` を通じて CLI を実行します。

**CLI 優先**パスの場合、ガイド モードまたは直接コマンドでプロジェクトを作成できます。

CLI に利用可能なオプションを案内させたい場合はガイド モードを使用します。

```bash
ig new
```

一致する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new
```

プロジェクト設定を既に知っている場合は直接コマンドを使用します。

<!-- Angular -->
```bash
ig new my-app --framework=angular --type=igx-ts --template=empty
```

一致する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
```
<!-- end: Angular -->

<!-- React -->
```bash
ig new my-app --framework=react
```

一致する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=react
```
<!-- end: React -->

<!-- WebComponents -->
```bash
ig new my-app --framework=webcomponents
```

一致する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=webcomponents
```
<!-- end: WebComponents -->

ガイド モードでは、Ignite UI CLI はプロジェクト名、フレームワーク、テンプレート、テーマ、コンポーネントを追加するかセットアップを完了するかを確認します。直接モードでは、フレームワークとサポートされているオプションをコマンド自体に指定します。

<!-- Angular -->
プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、Angular の Ignite UI CLI ドキュメントを参照してください。
<!-- end: Angular -->
<!-- React -->
プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、[Ignite UI CLI](../general-cli-overview.md) を参照してください。
<!-- end: React -->
<!-- WebComponents -->
プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、[Ignite UI CLI](../general-cli-overview.md) を参照してください。
<!-- end: WebComponents -->

### VS Code

VS Code の GitHub Copilot は、ワークスペース レベルの構成ファイルを介して MCP サーバーをサポートします。プロジェクト ルートに `.vscode/mcp.json` を作成または編集します。

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

最初に Ignite UI CLI でプロジェクトを作成した場合は、生成された `.vscode/mcp.json` を確認し、両方のエントリが存在することを確認してください。

保存したら、GitHub Copilot チャット パネルを開き、**Agent** モードに切り替えると、Ignite UI CLI MCP ツールが利用できるようになります。

> [!NOTE]
> VS Code での MCP サポートには、GitHub Copilot と VS Code 1.99 以降が必要です。

### Cursor

Cursor はプロジェクト スコープの MCP 構成をサポートします。プロジェクト ルートに `.cursor/mcp.json` を作成または編集します。

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

サーバーは、新しい Cursor チャット セッションを開くと自動的に選択されます。

> [!NOTE]
> Cursor の **Settings → MCP** を介してグローバルに MCP サーバーを構成することもできます。

### Claude Desktop

サーバーを Claude Desktop 構成ファイルに追加します。

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

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

保存後に Claude Desktop を再起動します。チャット入力エリアに MCP サーバー インジケーター (スライダー アイコン) が表示され、MCP ツールがアクティブであることが確認されます。

### Claude Code

Claude Code は、CLI とプロジェクト スコープの `.mcp.json` ファイルを介して MCP サーバーをサポートします。チームと構成を共有するには、プロジェクト ルートに `.mcp.json` を作成または編集します。

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

または、ローカル環境専用にコマンド ラインでサーバーを追加できます。

```bash
claude mcp add igniteui-cli -- npx -y igniteui-cli mcp
claude mcp add igniteui-theming -- npx -y igniteui-theming igniteui-theming-mcp
```

Claude Code 内で `/mcp` コマンドを使用して、サーバーが接続されていることを確認します。

### JetBrains IDE

JetBrains AI Assistant は、IDE 設定を介して MCP サーバーをサポートします。

1. **Settings** (macOS では **Preferences**) を開きます。
2. **Tools → AI Assistant → Model Context Protocol (MCP)** に移動します。
3. **+ Add** をクリックし、**As JSON** を選択するかフォーム フィールドを使用します。
4. 次の構成を入力します。

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

5. **OK** をクリックして AI Assistant を再起動します。

> [!NOTE]
> MCP サポートには、JetBrains IDE に AI Assistant プラグインがインストールされて有効になっている必要があります。

### その他の MCP クライアント

他の MCP 互換クライアントの場合は、次の起動コマンドで STDIO トランスポートを使用します。

```bash
npx -y igniteui-cli mcp
npx -y igniteui-theming igniteui-theming-mcp
```

### GitHub

GitHub Copilot クラウド エージェントはリポジトリ レベルの MCP 構成をサポートします。リポジトリで次の操作を行います。

1. メインのリポジトリ ページを開きます。
2. **Settings** をクリックします。
3. サイドバーで **Copilot** → **Cloud agent** に移動します。
4. **MCP configuration** セクションに JSON を貼り付けます。
5. **Save** をクリックします。

次のようなリポジトリ構成を使用します。

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"],
      "tools": ["*"]
    },
    "igniteui-theming": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"],
      "tools": ["*"]
    }
  }
}
```

このセットアップは、GitHub クラウド エージェントがリポジトリ コンテキストから直接同じ CLI MCP と Theming MCP ツールを使用する場合に便利です。

## 利用可能なツール

MCP サーバーは、AI がプロンプトに基づいて自動的に使用するツールのセットを公開しています。これらのツールを直接呼び出す必要はありません。チャットで必要なものを説明すれば、アシスタントが適切なツールを選択します。このテーブルは、開始前に何が利用可能かを把握するためのものです。

現在のパラメーターを含むライブ リストを取得するには、次のように質問します。

> _「Ignite UI CLI MCP が提供するツールは何ですか?」_

各ツールの概要を以下に示します。

| ツール | 説明 |
|------|-------------|
| `list_components`         | フレームワークの利用可能な Ignite UI コンポーネント ドキュメントをリストします。オプションのキーワード フィルター (名前、キーワード、概要に対する大文字と小文字を区別しない部分文字列一致) を受け入れます。 |
| `get_doc`                 | ケバブ ケース名 (例: `grid-editing`、`combo-overview`) で特定のコンポーネント ドキュメントの完全なマークダウン コンテンツを取得します。コード サンプル、テーブル、リンクを含みます。 |
| `search_docs`             | フレームワークの Ignite UI ドキュメント全体でフルテキスト検索を実行します。抜粋付きで最大 20 件のランク付けされた結果を返します。 |
| `get_project_setup_guide` | CLI 手順とインストール手順を含む、特定のフレームワークで新しいプロジェクトを作成するためのプロジェクト セットアップ ガイドを返します。 |
| `search_api`              | Angular、React、Web Components 全体でキーワードまたはコンポーネント名によって API エントリを検索します。 |
| `get_api_reference`       | プロパティ、メソッド、イベントを含む、特定のコンポーネントまたはクラスの完全な API リファレンスを返します。Angular、React、Web Components をサポートします。 |

大まかに言えば、CLI MCP ツールは以下を支援します。

- 新しいプロジェクトの作成
- 既存プロジェクトでの作業
- コンポーネントの追加と変更
- プロジェクト構造と構成の更新
- ドキュメントと API の質問への回答

> [!NOTE]
> フレームワーク検出はコンポーネント プレフィックスを使用します: Angular は `Igx`、React は `Igr`、Web Components は `Igc`、Blazor は `Igb`。アシスタントは、開いているファイルまたはプロンプト コンテキストから正しいフレームワークを自動的に選択します。

テーマ サーバーは、同じクライアント セッションにスタイリング、テーマ、パレット、トークン ワークフローを追加します。

<!-- React -->
主要なハンズオン ワークフローについては、[Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)を参照してください。
<!-- end: React -->
<!-- WebComponents -->
主要なハンズオン ワークフローについては、[Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)を参照してください。
<!-- end: WebComponents -->

## 一般的なワークフロー

以下のセットアップ シナリオは、各開始点を使用するタイミングを示します。

### CLI 優先セットアップ

最も速いガイド付きセットアップが必要で、`.vscode/mcp.json` を自動生成したい場合は、最初に Ignite UI CLI でプロジェクトを作成します。

シナリオの例:

- _「最初に Ignite UI CLI で新しいプロジェクトを作成し、生成されたプロジェクトを VS Code で開き、そこから MCP で続ける」_
- _「React プロジェクトが必要なので、CLI で作成してから MCP を使用してページとコンポーネントを追加する」_

### 空のフォルダーのセットアップ

自分で MCP 構成を追加した後、アシスタントにチャットからプロジェクトを作成させたい場合は、空のフォルダーから始めます。

シナリオの例:

- _「完全に空のフォルダーがあり、MCP が接続された後にアシスタントにチャットからプロジェクト全体を作成させる」_
- _「最初に Ignite UI CLI を手動で実行したくない。MCP で最初のプロジェクト作成ステップを動かしたい」_

### 既存プロジェクトのセットアップ

現在のコードベースを維持してアシスタントにプロジェクトの変更、コンポーネント作業、ドキュメントの質問を支援させたい場合は、MCP を既存のプロジェクトに接続します。

シナリオの例:

- _「プロジェクトは既にあり、アシスタントにページとコンポーネントの更新を支援させるためだけに MCP を追加したい」_
- _「プロジェクトは既に存在し、主に現在のコードベースで作業しながらドキュメントと API の質問をしたい」_

## トラブルシューティング

**`npx` が認識されない**

Node.js がインストールされていないか、現在のターミナル環境で利用できません。[nodejs.org](https://nodejs.org) から Node.js をインストールし、`node --version` で確認します。

**`ig` が認識されない**

グローバルな `ig` コマンドを使用したい場合は、最初に `npm install -g igniteui-cli` で Ignite UI CLI をインストールします。グローバル インストールが不要な場合は、代わりに `npx --package igniteui-cli igniteui ...` 形式を使用します。

**構成を保存した後に MCP ツールが表示されない**

ワークスペースをリロードし、エディターを再起動するか、AI クライアントを再起動します。一部のクライアントでは、新しい MCP 構成ファイルを検出するために完全な再起動が必要です。

**一方のサーバーが起動しない**

構成コンテンツがキー名と引数の順序を含めて例と正確に一致していることを確認します。

**プロジェクトは作成されたが、MCP 構成は VS Code のみで利用可能**

Ignite UI CLI は CLI 優先パス用の `.vscode/mcp.json` を書き込みます。Cursor、Claude Desktop、Claude Code、JetBrains、GitHub、または別の MCP クライアントを使用している場合は、同じサーバー エントリをそのクライアントの構成形式と場所にコピーします。

**アシスタントが間違ったフォルダーで作業しているか、プロジェクト ファイルが見つからない**

AI クライアントがプロジェクト ルートを指していることを確認します。エディター ベースのクライアントを使用している場合は、プロジェクト ルート フォルダーを開きます。デスクトップまたはチャット ファーストのクライアントを使用している場合は、正しいプロジェクト フォルダーをセッション コンテキストとして使用できるようにします。

**空のフォルダーのセットアップが期待通りに動作しない**

開始前にフォルダーが実際に空であることを確認します。フォルダーに既にプロジェクト ファイルが含まれている場合は、新しい空のワークスペースとして扱う代わりに、既存プロジェクト パスを使用します。

**GitHub MCP 構成が拒否される**

JSON が `mcpServers` 構造を使用していること、および各ローカル サーバー エントリに `type`、`command`、`args` が含まれていることを確認します。`tools` フィールドを含める場合は、有効なツール名または `["*"]` を使用します。

## その他のリソース

<!-- React -->
- [Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)
<!-- end: React -->
<!-- WebComponents -->
- [Ignite UI CLI MCP と Ignite UI Theming MCP を使用したアプリのエンドツーエンドのビルド](../general-how-to-mcp-e2e.md)
<!-- end: WebComponents -->
- [Ignite UI を使った AI 支援開発](./ai-assisted-development-overview.md)
- [{ProductName} スキル](./skills.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [{ProductName} **フォーラム** (英語)]({ForumsLink})
- [{ProductName} **GitHub** (英語)]({GithubLink})

---
title: "{Platform} Ignite UI CLI MCP | Infragistics"
_description: "Ignite UI CLI MCP を AI クライアントに接続して、{ProductName} のプロジェクトのスキャフォールディング、既存アプリの変更、コンポーネントの作成と更新、ドキュメントの質問を行う方法を説明します。VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、およびその他の MCP クライアントのセットアップ オプションを説明します。"
_keywords: "{Platform}, {ProductName}, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, agent, GitHub Copilot, Cursor, Claude, JetBrains"
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai/cli-mcp"
namespace: Infragistics.Controls
mentionedTypes: []
---

# Ignite UI CLI MCP

<p class="highlight">Ignite UI CLI MCP は、AI アシスタントが {ProductName} アプリケーションのプロジェクトのスキャフォールディング、既存アプリの変更、コンポーネントの作成と更新、ドキュメントの質問を行えるようにする <a href="https://modelcontextprotocol.io/" target="_blank">Model Context Protocol</a> (MCP) サーバーです。Ignite UI CLI MCP をエディター、GitHub リポジトリ、またはデスクトップ AI クライアントに接続し、やりたいことを説明するだけで、アシスタントが CLI ツールを使用してくれます。</p>

<div class="divider"></div>

## 概要

Ignite UI CLI MCP は、AI アシスタントがチャットまたはエージェント モードを介して、Ignite UI CLI のプロジェクト スキャフォールディング、コンポーネント生成、プロジェクト変更、ドキュメント対応ワークフローに直接アクセスできるようにします。サーバーは Ignite UI テーマ設定 MCP と連携します。CLI MCP がプロジェクトとコンポーネントのワークフローを処理し、テーマ設定 MCP がパレット、テーマ、トークン、スタイリングを処理します。ほとんどのチームは、同じ AI クライアント セッションで両方のサーバーを接続します。

Ignite UI CLI MCP は Ignite UI テーマ設定 MCP と連携します。実際には、CLI MCP がプロジェクトとコンポーネントのワークフローを処理し、テーマ設定 MCP がパレット、テーマ、トークン、スタイリング ワークフローを処理します。ほとんどのチームは両方のサーバーを接続します。

推奨されるセットアップ パスは、最初に Ignite UI CLI から始めることです。このパスはプロジェクトを作成し、必要なパッケージをインストールし、VS Code の初期 MCP 設定を書き込みます。空のフォルダーから始めて MCP を通じてアシスタントにプロジェクトを作成させることも、既に存在するプロジェクトに MCP を接続することもできます。

<!-- React -->
セットアップ後の完全なビルド フローを確認したい場合は、「[Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)」を参照してください。
<!-- end: React -->
<!-- WebComponents -->
セットアップ後の完全なビルド フローを確認したい場合は、「[Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)」を参照してください。
<!-- end: WebComponents -->

**接続後に試すプロンプトの例:**

> _"{Platform} 用 Ignite UI の新しいプロジェクトをこのフォルダーに作成し、推奨されるデフォルト設定を使用して、サンプル データを含むスターター ダッシュボード ページを追加してください。"_

> _"このプロジェクトに新しいグリッド ページを追加し、サンプル データに接続し、現在のナビゲーション構造を維持してください。"_

> _"コンボ コンポーネントが公開するプロパティとイベントは何ですか？また、検索可能なドロップダウンに最も役立つものはどれですか？"_

> _"既存のプロジェクトを更新してサイド ナビゲーション レイアウトを追加し、現在のページとルートを保持してください。"_

## 前提条件

MCP サーバーを設定する前に、次のものを用意してください:

- **Node.js** (v18 以降) がインストール済み - これによりサーバーの起動に使用する `npx` コマンドが提供されます。
- **MCP サポートのある AI クライアント** - たとえば、VS Code with GitHub Copilot、GitHub Copilot クラウド エージェント、Cursor、Claude Desktop、Claude Code、または AI Assistant プラグインを含む JetBrains IDE。
- 初回のサーバー起動時の `npx` パッケージ解決のためのインターネット アクセス。
- 次のいずれかの開始点:
  - 新しいプロジェクト用の空のフォルダー
  - Ignite UI CLI で作成したプロジェクト
  - 引き続き作業する既存の {ProductName} プロジェクト

同じクライアント セッションでテーマ設定ツールを使用したい場合、`igniteui-theming` がプロジェクトでまだ利用できない場合は次を実行してください:

```bash
npm install igniteui-theming
```

## AI クライアント向け Ignite UI CLI MCP の設定

MCP サーバーは `npx` で起動します。Node.js と `igniteui-cli` パッケージへのアクセス以外に別途インストールは不要です。

正規の起動コマンドは次のとおりです:

```bash
npx -y igniteui-cli mcp
```

> [!NOTE]
> `-y` フラグは、手動操作なしにサーバーを起動できるように、`npx` にパッケージのダウンロード プロンプトを自動確認するよう指示します。

### セットアップ パスの選択

Ignite UI CLI MCP を始めるには 3 つの方法があります:

> **推奨 - CLI ファースト**
  `ig new` または対応する `npx --package igniteui-cli igniteui new` コマンドを使用して、最初に Ignite UI CLI でプロジェクトを作成します。Ignite UI CLI がプロジェクトをスキャフォールディングし、必要なパッケージをインストールし、VS Code 用の `.vscode/mcp.json` を自動的に書き込むため、これが最も簡単なセットアップです。その後、生成された MCP 設定を確認し、AI クライアントでプロジェクトを開くだけです。

> **空のフォルダー**
  完全に空のフォルダーから始め、MCP 設定を手動で追加してから、チャットを通じてアシスタントにプロジェクトを作成させます。このパスは、最初に CLI を自分で実行するのではなく、MCP に最初のプロジェクト作成ステップを主導させたい場合に便利です。

> **既存のプロジェクト**
  既存のプロジェクトに MCP 設定を追加し、現在のコードベースで作業を続けます。このパスは、プロジェクトが既に存在していて、何かを再生成せずにプロジェクトの変更、コンポーネント作業、ドキュメントの質問をアシスタントに手伝ってもらいたい場合に便利です。

3 つのパスはすべて同じ MCP サーバーを使用します。違いは、プロンプトを開始する前にプロジェクトがどのように準備されるかだけです:

- **CLI ファースト** パスでは、Ignite UI CLI がプロジェクトを作成し、最初の MCP 設定を準備します
- **空のフォルダー** パスでは、最初に MCP 設定を作成し、その後アシスタントにプロジェクトを作成させます
- **既存プロジェクト** パスでは、MCP を現在のコードベースに接続し、既にあるものから続けます

いずれの場合も、MCP サーバーが接続されて AI クライアントに表示されると、アシスタントは同じセッションで作業を続けることができます。

最初に Ignite UI CLI でプロジェクトを作成する場合は、次のいずれかの方法で CLI を実行できます:

- **グローバル インストール**

  ```bash
  npm install -g igniteui-cli
  ```

  これにより、任意のターミナル セッションで `ig` コマンドが使用できるようになり、プロジェクトを定期的に作成およびスキャフォールディングする場合は最も明確なオプションです。

- **グローバル インストールなし**

  ```bash
  npx --package igniteui-cli igniteui new
  ```

  これは、グローバルな `ig` コマンドの代わりに `npx` を通じて CLI を実行します。

**CLI ファースト** パスの場合、ガイド モードまたは直接コマンドでプロジェクトを作成できます。

ガイド モードは、CLI が利用可能なオプションを順を追って案内する場合に使用します:

```bash
ig new
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new
```

プロジェクト設定が既にわかっている場合は、直接コマンドを使用します:

<!-- Angular -->
```bash
ig new my-app --framework=angular --type=igx-ts --template=empty
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
```
<!-- end: Angular -->

<!-- React -->
```bash
ig new my-app --framework=react
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=react
```
<!-- end: React -->

<!-- WebComponents -->
```bash
ig new my-app --framework=webcomponents
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=webcomponents
```
<!-- end: WebComponents -->

ガイド モードでは、Ignite UI CLI がプロジェクト名、フレームワーク、テンプレート、テーマ、コンポーネントを追加するかセットアップを完了するかを尋ねます。直接モードでは、コマンド自体にフレームワークとサポートされているオプションを指定します。

<!-- Angular -->
プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、Angular 向けの Ignite UI CLI ドキュメントを参照してください。
<!-- end: Angular -->
<!-- React -->
プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、「[Ignite UI CLI](../general-cli-overview.md)」を参照してください。
<!-- end: React -->
<!-- WebComponents -->
プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、「[Ignite UI CLI](../general-cli-overview.md)」を参照してください。
<!-- end: WebComponents -->

### VS Code

VS Code の GitHub Copilot は、ワークスペース レベルの設定ファイルを通じて MCP サーバーをサポートします。プロジェクト ルートに `.vscode/mcp.json` を作成または編集します:

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

Ignite UI CLI でプロジェクトを最初に作成した場合は、生成された `.vscode/mcp.json` を確認し、両方のエントリが存在することを確認してください。

保存後、GitHub Copilot チャット パネルを開き、**エージェント** モードに切り替えると、Ignite UI CLI MCP ツールが利用可能になります。

> [!NOTE]
> VS Code の MCP サポートには GitHub Copilot と VS Code 1.99 以降が必要です。

### Cursor

Cursor はプロジェクト スコープの MCP 設定をサポートします。プロジェクト ルートに `.cursor/mcp.json` を作成または編集します:

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

新しい Cursor チャット セッションを開くと、サーバーが自動的に検出されます。

> [!NOTE]
> Cursor の **Settings → MCP** からグローバルに MCP サーバーを設定することもできます。

### Claude Desktop

Claude Desktop 設定ファイルにサーバーを追加します:

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

保存後、Claude Desktop を再起動します。チャット入力エリアに MCP サーバー インジケーター (スライダー アイコン) が表示され、MCP ツールがアクティブであることを確認できます。

### Claude Code

Claude Code は、CLI とプロジェクト スコープの `.mcp.json` ファイルを通じて MCP サーバーをサポートします。チームと設定を共有するには、プロジェクト ルートに `.mcp.json` を作成または編集します:

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

あるいは、ローカル環境のみにコマンドラインでサーバーを追加することもできます:

```bash
claude mcp add igniteui-cli -- npx -y igniteui-cli mcp
claude mcp add igniteui-theming -- npx -y igniteui-theming igniteui-theming-mcp
```

Claude Code 内で `/mcp` コマンドを使用してサーバーが接続されていることを確認します。

### JetBrains IDE

JetBrains AI Assistant は IDE 設定を通じて MCP サーバーをサポートします:

1. **Settings** (macOS では **Preferences**) を開きます。
2. **Tools → AI Assistant → Model Context Protocol (MCP)** に移動します。
3. **+ Add** をクリックし、**As JSON** を選択するかフォーム フィールドを使用します。
4. 次の設定を入力します:

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
> MCP サポートには、JetBrains IDE に AI Assistant プラグインがインストールされ有効になっている必要があります。

### その他の MCP クライアント

その他の MCP 互換クライアントの場合は、次の起動コマンドで STDIO トランスポートを使用します:

```bash
npx -y igniteui-cli mcp
npx -y igniteui-theming igniteui-theming-mcp
```

### GitHub

GitHub Copilot クラウド エージェントは、リポジトリ レベルの MCP 設定をサポートします。リポジトリで:

1. メイン リポジトリ ページを開きます。
2. **Settings** をクリックします。
3. サイドバーで **Copilot** から **Cloud agent** に移動します。
4. **MCP configuration** セクションに JSON を貼り付けます。
5. **Save** をクリックします。

次のようなリポジトリ設定を使用します:

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

このセットアップは、GitHub クラウド エージェントがリポジトリ コンテキストから直接同じ CLI MCP とテーマ設定 MCP ツールを使用したい場合に便利です。

## 利用可能なツール

MCP サーバーは、AI がプロンプトに基づいて自動的に使用するツールのセットを公開します。これらのツールを直接呼び出すことはありません。チャットでやりたいことを説明すると、アシスタントが適切なものを選びます。このテーブルは、開始前に利用可能なものを確認するためのものです。

現在のパラメーターを含むライブ リストを取得するには、次のように尋ねます:

> _"Ignite UI CLI MCP が提供するツールは何ですか？"_

各ツールの概要を以下に示します:

| ツール | 説明 |
|------|-------------|
| `list_components`         | フレームワークの利用可能な Ignite UI コンポーネント ドキュメントを一覧表示します。オプションのキーワード フィルター (名前、キーワード、サマリーに対する大文字小文字を区別しない部分文字列一致) を受け付けます。 |
| `get_doc`                 | ケバブケース名 (例: `grid-editing`、`combo-overview`) で特定のコンポーネント ドキュメントの完全な Markdown コンテンツを取得します。コード サンプル、テーブル、リンクを含みます。 |
| `search_docs`             | フレームワークの Ignite UI ドキュメント全体をフルテキスト検索します。抜粋付きで上位 20 件のランク付けされた結果を返します。 |
| `get_project_setup_guide` | 特定のフレームワークで新しいプロジェクトを作成するためのプロジェクト セットアップ ガイドを返します。CLI 手順とインストール手順を含みます。 |
| `search_api`              | Angular、React、Web Components 全体でキーワードまたはコンポーネント名で API エントリを検索します。 |
| `get_api_reference`       | 特定のコンポーネントまたはクラスの完全な API リファレンスを返します。プロパティ、メソッド、イベントを含みます。Angular、React、Web Components をサポートします。 |

大まかに言えば、CLI MCP ツールは次のことを支援します:

- 新しいプロジェクトの作成
- 既存のプロジェクトでの作業
- コンポーネントの追加と変更
- プロジェクト構造と設定の更新
- ドキュメントと API の質問への回答

> [!NOTE]
> フレームワーク検出はコンポーネント プレフィックスを使用します: Angular には `Igx`、React には `Igr`、Web Components には `Igc`、Blazor には `Igb`。アシスタントは、開いているファイルまたはプロンプト コンテキストから適切なフレームワークを自動的に選択します。

テーマ設定サーバーは、スタイリング、テーマ、パレット、トークン ワークフローを同じクライアント セッションに追加します。

<!-- React -->
主要な実践的ワークフローについては、「[Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)」を参照してください。
<!-- end: React -->
<!-- WebComponents -->
主要な実践的ワークフローについては、「[Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)」を参照してください。
<!-- end: WebComponents -->

## 一般的なワークフロー

以下のセットアップ シナリオは、各開始点をいつ使用するかを示しています。

### CLI ファースト セットアップ

最速のガイド付きセットアップを希望し、`.vscode/mcp.json` を自動生成したい場合は、最初に Ignite UI CLI でプロジェクトを作成します。

シナリオ例:

- _"最初に Ignite UI CLI で新しいプロジェクトを作成し、生成されたプロジェクトを VS Code で開き、そこから MCP で続けたい。"_
- _"React プロジェクトが欲しいことは既にわかっているので、CLI でプロジェクトを作成してから、MCP を使ってページとコンポーネントを追加したい。"_

### 空のフォルダー セットアップ

MCP 設定を自分で追加した後、アシスタントにチャットからプロジェクトを作成させたい場合は、空のフォルダーから始めます。

シナリオ例:

- _"完全に空のフォルダーがあり、MCP が接続された後にアシスタントにチャットからプロジェクト全体を作成してほしい。"_
- _"最初に Ignite UI CLI を手動で実行したくない。MCP に最初のプロジェクト作成ステップを主導してほしい。"_

### 既存プロジェクト セットアップ

現在のコードベースを維持し、プロジェクトの変更、コンポーネント作業、ドキュメントの質問にアシスタントを使いたい場合は、既存のプロジェクトに MCP を接続します。

シナリオ例:

- _"既にプロジェクトがあり、アシスタントがページとコンポーネントを更新できるように MCP を追加したいだけだ。"_
- _"プロジェクトは既に存在しており、現在のコードベースで作業しながら主にドキュメントと API の質問をしたい。"_

## トラブルシューティング

**`npx` が認識されない**

Node.js がインストールされていないか、現在のターミナル環境で利用できません。[nodejs.org](https://nodejs.org) から Node.js をインストールし、`node --version` で確認してください。

**`ig` が認識されない**

グローバルな `ig` コマンドを使用したい場合は、最初に `npm install -g igniteui-cli` で Ignite UI CLI をインストールしてください。グローバル インストールが不要な場合は、代わりに `npx --package igniteui-cli igniteui ...` 形式を使用してください。

**設定を保存した後、MCP ツールが表示されない**

ワークスペースをリロードし、エディターを再度開くか、AI クライアントを再起動してください。一部のクライアントは新しい MCP 設定ファイルを検出するために完全な再起動が必要です。

**一方のサーバーが起動に失敗する**

設定の内容がキー名と引数の順序を含め、例と完全に一致することを確認してください。

**プロジェクトは作成されたが、MCP 設定が VS Code でしか利用できない**

Ignite UI CLI は CLI ファースト パスで `.vscode/mcp.json` を書き込みます。Cursor、Claude Desktop、Claude Code、JetBrains、GitHub、またはその他の MCP クライアントを使用している場合は、同じサーバー エントリをそのクライアントの設定形式と場所にコピーしてください。

**アシスタントが間違ったフォルダーで作業しているか、プロジェクト ファイルが見つからない**

AI クライアントがプロジェクト ルートを指していることを確認してください。エディター ベースのクライアントを使用している場合は、プロジェクト ルート フォルダーを開いてください。デスクトップまたはチャット ファースト クライアントを使用している場合は、正しいプロジェクト フォルダーをセッション コンテキストとして利用できるようにしてください。

**空のフォルダー セットアップが期待どおりに動作しない**

開始前にフォルダーが実際に空であることを確認してください。フォルダーに既にプロジェクト ファイルが含まれている場合は、新しい空のワークスペースとして扱う代わりに、既存プロジェクト パスを使用してください。

**GitHub MCP 設定が拒否される**

JSON が `mcpServers` 構造を使用していること、および各ローカル サーバー エントリに `type`、`command`、`args` が含まれていることを確認してください。`tools` フィールドを含める場合は、有効なツール名または `["*"]` を使用してください。

## その他のリソース

- [Ignite UI を使用した AI 支援開発](./ai-assisted-development-overview.md)
<!-- React -->
- [Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)
<!-- end: React -->
<!-- WebComponents -->
- [Ignite UI CLI MCP と Ignite UI テーマ設定 MCP を使用したアプリのエンドツーエンド構築](../general-how-to-mcp-e2e.md)
<!-- end: WebComponents -->
- [{ProductName} スキル](./skills.md)
- [Ignite UI テーマ設定 MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティは常に活発で、新しいアイデアを歓迎しています。

- [{ProductName} **フォーラム**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})

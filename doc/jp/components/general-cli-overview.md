---
title: {Platform} CLI | データ可視化ツールおよびテーブル | インフラジスティックス
_description: {ProductName} ツールセットには {Platform} CLI があり、生産性を高め、プロジェクトをすばやく開始できます。今すぐ {ProductName} アプリケーションを作成してください!
_keywords: {Platform} cli, command line interface, {ProductName}, Infragistics, コマンド ライン インターフェイス, インフラジスティックス
_language: ja
mentionedTypes: []
---

# {Platform} Ignite UI CLI

CLI ツールでは、{ProductName} の定義済みのプロジェクト テンプレートが含まれ、アプリ開発を効率的に行うことができます。<!-- React --> <a href="https://github.com/IgniteUI/igniteui-cli/blob/master/README.md#generate-ignite-ui-for-react-project" target="_blank"><!-- end: React --><!-- WebComponents --><a href="https://github.com/IgniteUI/igniteui-cli/blob/master/README.md#generate-ignite-ui-for-web-components-project" target="_blank"><!-- end: WebComponents -->Ignite UI CLI</a> は、さまざまなフレームワーク用のアプリケーションを作成およびスキャフォールディングするためのスタンドアロン コマンドラインツールです。

## 作業の開始

まずは CLI をインストールします。

```cmd
npm install -g igniteui-cli
```

上記のインストール コマンドは、Ignite UI CLI を {ProductName} アプリケーションの作成、スキャフォールディング、および実行に使用できるようにします。

## 新しいプロジェクトの作成

Ignite UI CLI を使用して、{ProductName} コントロールを使用するように構成されたアプリケーションを作成するには、コマンドラインで次のテンプレートを使用できます。

<!-- React -->
```cmd
ig new "[name_of_project]" --framework=[target_framework] --type=[project_type]
```

上記のテンプレートを使用して、TypeScript をターゲットとする「My Project」という名前の **React** アプリケーションを作成する場合は、次のコマンドを実行します。

```cmd
ig new "My Project" --framework=react --type=igr-ts
```

> [!Note]
TypeScript のサポートは、Ignite UI CLI バージョン 13 以降で利用可能になります。

<!-- end: React -->

<!-- WebComponents -->
```cmd
ig new "[name_of_project]" --framework=[target_framework]
```

上記のテンプレートを使用して、「My Project」という名前の **Web Components** アプリケーションを作成する場合は、次のコマンドを実行します。

```cmd
ig new "My Project" --framework=webcomponents
```
<!-- end: WebComponents -->

## コンポーネントの追加

プロジェクトの作成後は、いつでも **ig add** を使用してコンポーネント テンプレートを追加することができます。パラメーターを指定せずにこのコマンドを実行した場合、キーボードナビゲーション CLI を使用して、選択したコントロールを追加することにより、使用可能なテンプレートが示されます。

```cmd
ig add
```

または、単に **ig list** コマンドを実行して、現在のプロジェクトでサポートされているテンプレートの完全なリストを取得することもできます。

```cmd
ig list
```

**ig list** を実行し、追加したいコンポーネント テンプレートを見つけた後、コマンドラインでこのテンプレートを実行することにより、すばやく追加することができます。

```cmd
ig add [component_template] [component_name]
```

上記の「component_template」は通常、{ProductName} コンポーネント (grid、category-chart、linear-gauge など) と一致します。

たとえば、「MyGridComponent」という名前のデータ グリッド テンプレート コンポーネントをアプリに追加する場合は、次のコマンドを実行します。

```cmd
ig add grid MyGridComponent
```

<!-- WebComponents -->
現在、CLI は次の Web コンポーネントで使用できます。

| 名 | コンポーネント テンプレート |
| ------------------|---------------------|
| アバター | avatar  |
| カード | card |
| バッジ | badge |
| ボタン | button |
| チェックボックス | checkbox |
| フォーム | form |
| アイコン | icon |
| アイコン ボタン | icon-button |
| 入力 | input |
| ラジオ グループ | radio-group |
| スイッチ | switch |
| カレンダー | calendar |
| リスト | list |
| ナビゲーション バー | navbar |
| リップル | ripple |
| 円チャート | pie-chart |
| ドック マネージャ | dock-manager |
<!-- end: WebComponents -->

## アプリをビルドして実行する

{ProductName} アプリをビルドして実行するには、**ig build** コマンドと **ig run** コマンドを呼び出します。

```cmd
ig build
ig run
```

<!-- React -->
### Vite の使用

Ignite UI CLI によって生成された React アプリケーションは、ビルド ツールとして Vite を利用します。Vite は高速な開発および本番ビルドを提供し、開発中のホット モジュール交換 (HMR) などの機能を備えた効率的な開発エクスペリエンスを提供します。

<!-- end: React -->

## Ignite UI CLI コマンド

使用可能な Ignite UI CLI コマンドとその使用方法 (フラグを渡すなど) の完全なリストは、[Ignite UI CLI wiki ページ](https://github.com/IgniteUI/igniteui-cli/wiki)にあります。

| コマンド | エイリアス | 説明 |
| --- | --- | --- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)  | | アプリケーションをビルドしてウェブ サーバーを開始、次にアプリケーションをデフォルト ブラウザーで開きます。
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | アプリケーションをアプトプット ディレクトリへビルドします。
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | サポートされるフレームワークおよびプロジェクト タイプのための新しいカスタム テンプレートを生成します。
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | 使用可能なコマンドをリストして手順の簡単な説明を示します。
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Ignite UI CLI 構成設定の読み取り / 書き込み操作を実行します。
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | 検索した用語についてインフラジスティックスのサポート情報を検索します。
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  指定したフレームワークとタイプのすべてのテンプレートをリストします。プロジェクト フォルダー内でコマンド実行時にプロジェクトのフレームワークとタイプのテンプレートをすべてリストします。
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | 現在のプロジェクトのテストを実行します。
| ig version | -v | ローカル (ローカルがない場合はグローバル) にインストールされた Ignite UI CLI バージョンを示します。 |
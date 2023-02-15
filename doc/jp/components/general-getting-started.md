---
title: 作業の開始 | {ProductName} | インフラジスティックス
_description: インフラジスティックスの {Platform} コンポーネントを使用してアプリを作成し、世界最速の仮想化されたリアルタイムの {Platform} データ グリッドとファイナンシャル ストリーミングおよびビジネスとファイナンシャル チャートでデータの可視化を改善します。
_keywords: {ProductName}, Infragistics, Getting Started, インフラジスティックス, 作業の開始
_language: ja
mentionedTypes: ['XamBulletGraph']
---

<!-- React -->
# {ProductName} を使用した作業の開始

このトピックでは、Ignite UI for React を使用して React アプリケーションを作成するための手順を説明します。

## 新しい React プロジェクトの作成

前提条件のインストール後、新しい React アプリケーションを作成できます。

1 - **VS Code** を開き、**[ターミナル]** メニューを選択してから、**[新しいターミナル]** オプションを選択します。

2 - ターミナル ウィンドウに以下のコマンドのいずれかを入力します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npx create-react-app my-app-name --typescript
</pre>
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
yarn create react-app my-app-name --typescript
</pre>

以上のコマンドについての詳細は<a href="https://facebook.github.io/create-react-app/docs/adding-typescript" target="_blank">こちら</a>を参照してください。

<!-- end: React -->

<!-- WebComponents -->
# {ProductName} パッケージの概要

{ProductName} は、UI ウィジェット、コンポーネント、デザイン ツール用の UI キット、および Web コンポーネント用のサポート サービスの完全なセットです。開発者が、最新のデスクトップ ブラウザー、モバイル エクスペリエンス、およびブラウザーの Web コンポーネント API をターゲットとするプログレッシブ Web アプリ (PWA) 向けの最新の高性能 HTML5 および JavaScript アプリを構築できるように設計されています。

## チャートおよびグラフ
{ProductName} チャートおよびグラフは、65 種類以上のシリーズと組み合わせを通じて、あらゆる種類のデータを魅力的でインタラクティブなグラフとダッシュボードに視覚化できるライブラリです。速度と美しさを追求し、すべてのモダンブラウザーで動作するように設計されており、完全なタッチ操作とインタラクティブ機能により、あらゆるデバイスでレスポンシブなビジュアルをすばやく構築できます。

## ゲージ
{ProductName} ゲージは、簡単かつ直感的な方法でデータを示すために使用されるラジアル ゲージ コンポーネントとリニア ゲージ コンポーネントを提供します。
ラジアル ゲージには、定義済みの形状とスケールを作成するためのさまざまなカスタマイズ オプションがあります。
リニア ゲージは、スケールおよび 1 つ以上の範囲と比較した値の単純なビューを提供します。1 つのスケール、1 セットの目盛り、および 1 セットのラベルをサポートします。

{ProductName} ゲージには、ダッシュボードで使用されているメーターとゲージを単純な棒チャートに置き換えて、データの視覚化を作成できる `XamBulletGraph` コンポーネントも含まれています。

## マップ
{ProductName} マップは、アプリケーションで地理データを視覚化する機能を提供します。マーカー、線、多角形、さらにはインタラクティブなビットマップの形状で、多くの地理的位置で構成されるデータ セットを描画できます。複数のマップ レイヤーを地理データでオーバーレイし、特定の地理的位置をマークし、カスタム マーカーと色を使用して情報を表示できます。

## グリッドと入力
{ProductName} グリッドは、わずかな設定でデータをバインドおよび表示できるグリッド コンポーネントです。また、フィルタリング、ソート、グループ化、ピン固定などの機能も提供します。

## IgniteUI Web コンポーネント
{ProductName} は UI コンポーネントの完全なライブラリであり、依存関係のないアプローチでカプセル化と再利用可能なコンポーネントの概念を使用して、最新の Web アプリケーションを構築する機能を提供します。[ストーリーブックはこちら](https://igniteui.github.io/igniteui-webcomponents)をご覧ください!

すべてのコンポーネントは [Indigo.Design デザイン システム](https://jp.infragistics.com/products/appbuilder/ui-toolkit)に基づいており、[App Builder](https://appbuilder.indigo.design/) によって完全にサポートされており、Sketch、Adobe XD、および Figma 用のすぐに使用できる UI キットによって支えられています。

# {ProductName} を使用した作業の開始

このトピックでは、Ignite UI for Web Components を使用して Web コンポーネント アプリケーションを作成するための手順を説明します。

## Ignite UI Web Components の例

`sample="/maps/geo-map/display-osm-imagery", height="750", alt="{Platform} Overview Example"`



# 構成

## IgniteUI CLI をインストールする

アプリケーションを最初から作成し、Ignite UI Web Components を使用するように構成するには、Ignite UI CLI を使用できます。最初の手順には、以下のように各パッケージをグローバルにインストールします。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install -g igniteui-cli
</pre>

使用可能なオプションをガイド付きで体験したい場合は、新しいアプリケーションの作成とセットアップに役立つ手順モードを初期化できます。ガイドを開始するには、`ig` コマンドを実行するだけです。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig
</pre>

次に、フレームワークとして Web Components を選択し、`Base` プロジェクト テンプレートを選択し、特定のコンポーネント / ビューを追加するか、`Complete & Run` を選択します。
さらに、Ignite UI CLI の詳細については[こちら](general-cli-overview.md)を参照してください。

## ポリフィルをインストールする

次のコマンドを実行して、Web コンポーネントのポリフィルをインストールします。

```bash
npm install @webcomponents/custom-elements
```

次に、Web コンポーネントのポリフィルを index.js にインポートします。

```ts
import '@webcomponents/custom-elements/custom-elements.min';
import '@webcomponents/custom-elements/src/native-shim.js';
```

## Ignite UI for Web Components のインストール
アプリケーションで Ignite UI Web Components を使用するには、`igniteui-webcomponents` パッケージをインストールする必要があります。

```
npm install igniteui-webcomponents
```

次に、`index.ts` ファイルで使用するコンポーネントをインポートする必要があります。次のように `defineComponents` 関数を使用して 1 つ以上のコンポーネントをインポートできます:

```ts
import { defineComponents, IgcAvatarComponent, IgcBadgeComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent, IgcBadgeComponent);
```

`defineAllComponents` 関数を使用して、すべてのコンポーネントをインポートすることもできます。

```ts
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();
```

> [!Note]
> すべてのコンポーネントをインポートすると、アプリケーションのバンドル サイズが大きくなります。そのため、実際に使用しているコンポーネントのみをインポートすることをお勧めします。

コンポーネントをインポートしたら、html で使用できます。

```html
<igc-avatar initials="AZ"></igc-avatar>
<igc-badge></igc-badge>
```

# Charts および Map Web コンポーネント パッケージをインストールする
## 手順 1 - Web コンポーネント プロジェクトの作成

1 - コマンドラインを開き、**wc-html** という名前のディレクトリを作成します。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
mkdir wc-html
</pre>

2 - コマンドライン パスを新しく作成したディレクトリに変更します。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
cd wc-html
</pre>

3 - ディレクトリで **npm** を初期化します。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm init -y
</pre>

4 - **webpack** バンドラー および **webpack cli** を developer dependency としてインストールします。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
> npm install webpack webpack-cli --save-dev
</pre>

> [!Note]
> Webpack はモジュール バンドラーです。主な目的は、ブラウザーで使用するために JavaScript ファイルをバンドルすることですが、あらゆるリソースやアセットを変換、バンドル、またはパッケージ化することもできます。

5 - **VS Code** でプロジェクトを開きます。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
code .
</pre>

6 - 以下のコードを使用して **index.html** という名前の新しいファイルを作成します。

```
<html>
    <head>
        <title>Getting Started with Ignite UI for Web Components</title>
    </head>
    <body>

    </body>
</html>
```

7 - **src** という名前の新しいフォルダーを作成し、そのフォルダー内に **index.js** という名前の新しいファイルを作成します。プロジェクト構造は以下のようになります。

<img src="../images/wc-project.jpg"/>

8 - **package.json** ファイルを、**webpack** を使用してビルド スクリプトを含めるよう変更します。

```
  "scripts": {
    "build": "webpack ./src/index.js -o ./dist/ --output-filename index.bundle.js"
  },
```

> [!Note]
> このスクリプトは webpack を使用して **index.js** ファイルを **index.bundle.js** と呼ばれる別のファイルにバンドルし、**dist** という名前のフォルダーに配置します。
>
> ビルド中に **javaScript のメモリ不足** の問題が発生した場合、代わりに以下のビルド コマンドを使用してヒープ サイズを増やすことができます。

```
"scripts": {
    "build": "node --max_old_space_size=8192 node_modules/webpack/bin/webpack src/index.js -o dist/index.bundle.js"
},
```

## 手順 2 - ポリフィルのインストール

1 - **VS Code** でターミナルを開きます (**[表示]** -> **[ターミナル]** メニューまたは <kbd>CTRL</kbd> + <kbd>`</kbd> キーを押します)

2 - Web コンポーネントのポリフィルで以下のコマンドを入力します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install @webcomponents/custom-elements
</pre>

3 - Web コンポーネントのポリフィルを **index.js** にインポートします。
```ts
import '@webcomponents/custom-elements/custom-elements.min';
import '@webcomponents/custom-elements/src/native-shim.js';
```

## 手順 3 - Ignite UI for Web Components と lit-html をインストール

1 - **npm** を使用して Ignite UI for Web コンポーネントをインストールします。この例では、Map Web コンポーネントをインストールします。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
npm install --save {PackageMaps}
npm install lit-html
</pre>

2 - Geographic Map モジュールと**ModuleManager** を **index.js** ファイルにインポートします。

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
// module manager for registering the modules
import { ModuleManager } from 'igniteui-webcomponents-core';
```

3 - **ModuleManager** で Geographic Map モジュールを登録します。

```ts
ModuleManager.register(
    IgcGeographicMapModule,
    IgcDataChartInteractivityModule
);
```

4 - **index.html** ファイルの本文に Geographic Map Web コンポーネントを追加します。

```html
<body>
    <igc-geographic-map id="map" height="500px" width="100%">
    </igc-geographic-map>
</body>
```

## 手順 4 - Web コンポーネント プロジェクトのビルドと実行

1 - **VS Code** でターミナルを開き、**build** スクリプトを実行します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm run build
</pre>

> [!Note]
> このコマンドは、前に作成したビルド スクリプトを実行します。ビルド スクリプトは、**dist** という名前のフォルダーに **index.bundle.js** という名前のファイルを生成します。

2 - **index.html** ファイルの **body** 要素の最後に **index.bundle.js** スクリプトを追加します。

```html
<body>
    <igc-geographic-map id="map" height="500px" width="100%">
    </igc-geographic-map>

    <script src="dist/index.bundle.js"></script>
</body>
```

3 - プロジェクトを実行するには、ローカル開発サーバーを起動します。この例では、Live Server を使用しています。**index.html** のエディター内で右クリックし、**[Live Server で開く]** を選択します。

<!-- <img src="../images/wc-live-server.jpg" /> -->

> [!Note]
> Live Server は Visual Studio Code の拡張機能で、静的および動的ページの自動更新機能を備えたローカル開発サーバーを起動できます。この拡張機能は、Visual Studio Code の [拡張機能] タブから、または [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) からダウンロードしてインストールできます。

4 - ローカル サーバー上の Web ブラウザーを使用して **index.html** に移動すると、Ignite UI for Web Components のスプレッドシートがブラウザーに表示されます。

<img src="../images/general/geo-map.png" />
<!-- end: WebComponents -->

<!-- Angular, React -->
# {ProductName} を使用した作業の開始

## 既存アプリの更新

既存の {Platform} CLI プロジェクト (以前のもの) で {ProductName} を使用する場合は、以下のコマンドを実行します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCharts} {PackageCore}
npm install --save {PackageExcel} {PackageCore}
npm install --save {PackageGauges} {PackageCore}
npm install --save {PackageGrids} {PackageCore}
npm install --save {PackageMaps} {PackageCore}
npm install --save {PackageSpreadsheet} {PackageCore}
</pre>

また

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
yarn add {PackageCharts} {PackageCore}
yarn add {PackageExcel} {PackageCore}
yarn add {PackageGauges} {PackageCore}
yarn add {PackageGrids} {PackageCore}
yarn add {PackageMaps} {PackageCore}
yarn add {PackageSpreadsheet} {PackageCore}
</pre>

これにより、{ProductName} のパッケージが、それらのすべての依存関係、フォントのインポート、および既存のプロジェクトへのスタイル参照と共に自動的にインストールされます。

## モジュールのインポート

はじめに、使いたいコンポーネントの必要なモジュールをインポートします。[**GeographicMap**](geo-map.md) に対してこれを行います。


```razor
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGeographicMapModule),
    typeof(IgbDataChartInteractivityModule)
);
```

```ts
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
```

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcGeographicMapModule,
    IgcDataChartInteractivityModule
);

```

## コンポーネントの使用

マークアップに {ProductName} マップ コンポーネントを使用する準備が整いました。以下のように定義します。

```tsx
// App.txs
render() {
    return (
        <div style={{height: "100%", width: "100%" }}>
            <IgrGeographicMap
            width="800px"
            height="500px"
            zoomable="true" />
        </div>
    );
}
```

```html
<div style="height: 100%, width: 100%">
    <igc-geographic-map
      width="800px"
      height="500px"
      zoomable="true">
    </igc-geographic-map>
</div>
```

## アプリケーションの実行

以下のコマンドを使用して新しいアプリケーションを実行できます。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm run-script start
</pre>

コマンドを実行した後、プロジェクトがローカルでビルドされて提供されます。これでデフォルトのブラウザーで自動的に開き、プロジェクトで {ProductName} コンポーネントを使用できるようになります。

以下の画像は、上記を実行した結果です。

<img src="../images/general/geo-map.png" />
<!-- end: Angular, React -->

<!-- Blazor -->
# {ProductName} を使用した作業の開始

このトピックでは、Visual Studio および Ignite UI for Blazor を使用して Blazor Server アプリケーションを作成するための手順を説明します。

## 新しい Blazor Server プロジェクトを作成する
以下の手順では、新しい Blazor Server プロジェクトを作成する方法を説明します。Ignite UI for Blazor を既存のアプリケーションに追加する場合は、[**Ignite UI for Blazor パッケージをインストール**](#ignite-ui-for-blazor-のインストール) セクションに移動します。

Visual Studio 2022 を起動し、開始ページで [新しいプロジェクトの作成] をクリックし、**Blazor Server App** テンプレートを選択して、**[次へ]** をクリックします。

<img src="../images/general/new-blazor-project-server.jpg" />

プロジェクト名と場所を入力し、**[次へ]** をクリックします。

<img src="../images/general/new-blazor-project-configure-server.jpg" />

追加のプロジェクト オプションを指定し、**[作成]** をクリックします。

<img src="../images/general/new-blazor-project-info-server.jpg" />

## Ignite UI for Blazor のインストール

Ignite UI for Blazor は、NuGet パッケージで提供されます。Blazor アプリケーションで Ignite UI for Blazor コンポーネントを使用するには、最初に適切な NuGet パッケージをインストールする必要があります。

Visual Studio で、**[ツール]** → **[NuGet パッケージ マネージャー]** → **[ソリューションの NuGet パッケージの管理]** を選択して、NuGet パッケージ マネージャーを開きます。**IgniteUI.Blazor** NuGet パッケージを検索してインストールします。

NuGet を使用した Ignite UI for Blazor のインストールの詳細については、[Ignite UI for Blazor のインストール](general-installing-blazor.md) トピックを参照してください。

## Ignite UI for Blazor の登録

### .NET 6 アプリケーション

1 - **Program.cs** ファイルを開き、**builder.Services.AddIgniteUIBlazor()** を呼び出して Ignite UI for Blazor サービスを登録します。

```
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

builder.Services.AddIgniteUIBlazor();

var app = builder.Build();
```

2 - **IgniteUI.Blazor.Controls** 名前空間を **_Imports.razor** ファイルに追加します。

```razor
@using IgniteUI.Blazor.Controls
```

3 - **Pages/_Layout.cshtml** ファイルの **<head\>** 要素にスタイル シートを追加します。

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

### .NET 5 アプリケーション

1 - **Startup.cs** ファイルを開き、**services.AddIgniteUIBlazor()** を呼び出して Ignite UI for Blazor サービスを登録します。

```razor
public void ConfigureServices(IServiceCollection services)
{
    // ...
    services.AddIgniteUIBlazor();
}
```

2 - **IgniteUI.Blazor.Controls** 名前空間を **_Imports.razor** ファイルに追加します。

```razor
@using IgniteUI.Blazor.Controls
```

3 - **Pages/_Host.cshtml** ファイルの **<head\>** 要素にスタイル シートを追加します。

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

4 - スクリプト参照を **Pages/_Host.cshtml** ファイルに追加します。

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
<script src="_framework/blazor.server.js"></script>
```

## Ignite UI for Blazor コンポーネントの追加

Razor ページに Ignite UI for Blazor コンポーネントの追加:

```razor
<IgbCard style="width:350px">
    <IgbCardMedia>
        <img src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80" />
    </IgbCardMedia>
    <IgbCardHeader>
        <h4>Jane Doe</h4>
        <h6>Professional Photographer</h6>
    </IgbCardHeader>
    <IgbCardContent>Hi! I'm Jane, photographer and filmmaker.
        Photography is a way of feeling, of touching,
        of loving. What you have caught on film is captured forever...
        it remembers little things, long after you have
        forgotten everything.</IgbCardContent>
    <IgbCardActions>
        <IgbButton>More Info</IgbButton>
    </IgbCardActions>
</IgbCard>
```

Blazor アプリケーションをビルドして実行します。

<img src="../images/general/getting-started-blazor-card.jpg" />

<!-- end: Blazor -->
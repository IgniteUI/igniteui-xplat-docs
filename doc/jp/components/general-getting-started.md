---
title: $Platform$ データ可視化ツール | 作業の開始 | インフラジスティックス
_description: インフラジスティックスの $Platform$ コンポーネントを使用してアプリを作成し、世界最速の仮想化されたリアルタイムの $Platform$ データ グリッドとファイナンシャル ストリーミングおよびビジネスとファイナンシャル チャートでデータの可視化を改善します。
_keywords: $ProductName$, Infragistics, Getting Started, インフラジスティックス, 作業の開始
_language: ja
---
# $ProductName$ を使用した作業の開始

$ProductName$ は、最新のデスクトップ ブラウザー対応の高パフォーマンス HTML 5 および TypeScript アプリケーションを構築するために設計された $Platform$ コンポーネントのコンプリート セットです。

> [!NOTE]
> この [GitHub]({RepoSamples}) リポジトリから $ProductName$ を使用した $Platform$ プロジェクトの例を取得するか、新しい $Platform$ プロジェクトを作成する方法について次の手順に従うことができます。

<!-- Angular, React, WebComponents -->

## コンピューターのセットアップ

$ProductName$ を実行する前に、$ProductName$ を含むすべての $Platform$ アプリケーションを実行するためにシステムでセットアップする必要のあるステップが 2 つあります。最初にシステムに NodeJS と Visual Studio Code をインストールします。$Platform$ を使用した最新の Web 開発には NodeJS が必要で、これはブラウザーで実行されている ASP.NET アプリケーションのようなもので、サーバーに ASP.NET ランタイムを配備する必要があります。また $Platform$ アプリケーションを構築するための開発環境は、Visual Studio Code が最も適しているため、作業を開始する前に Node.js と Visual Studio Code をインストールします。

<div style="display:block;width:100%;margin:50px;">
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 25px 5px 15px;">
        DOWNLOAD NODE JS
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 25px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>

<!-- React -->

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

<!-- commented out because this section is present in the "Updating Existing App"
You need to open $Platform$ app in **VS Code** and install the following packages for $ProductName$ using these commands:

- **npm install --save {PackageCharts} {PackageCore}**
- **npm install --save {PackageExcel} {PackageCore}**
- **npm install --save {PackageGauges} {PackageCore}**
- **npm install --save {PackageGrids} {PackageCore}**
- **npm install --save {PackageMaps} {PackageCore}**
- **npm install --save {PackageSpreadsheet} {PackageCore}**

Or

- **yarn add {PackageCharts} {PackageCore}**
- **yarn add {PackageExcel} {PackageCore}**
- **yarn add {PackageGauges} {PackageCore}**
- **yarn add {PackageGrids} {PackageCore}**
- **yarn add {PackageMaps} {PackageCore}**
- **yarn add {PackageSpreadsheet} {PackageCore}**

Lastly,  -->

<!-- WebComponents -->
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
    "build": "webpack src/index.js -o dist/index.bundle.js"
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

## 手順 3 - Ignite UI for Web Components のインストール

1 - **npm** を使用して Ignite UI for Web コンポーネントをインストールします。この例では、Map Web コンポーネントをインストールします。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
npm install --save {PackageMaps}
</pre>

2 - Geographic Map モジュールと**ModuleManager** を **index.ts** ファイルにインポートします。

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

2 - **index.bundle.js** スクリプトを **index.html** の `igc-spreadsheet` の後に追加します。
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

## 既存アプリの更新

既存の $Platform$ CLI プロジェクト (以前のもの) で $ProductName$ を使用する場合は、以下のコマンドを実行します。

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

これにより、$ProductName$ のパッケージが、それらのすべての依存関係、フォントのインポート、および既存のプロジェクトへのスタイル参照と共に自動的にインストールされます。

## モジュールのインポート

はじめに、使いたいコンポーネントの必要なモジュールをインポートします。[**GeographicMap**](geo-map.md) に対してこれを行います。

```razor
IgbGeographicMapModule.Register(IgniteUIBlazor);
IgbDataChartInteractivityModule.Register(IgniteUIBlazor);
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

マークアップに $ProductName$ マップ コンポーネントを使用する準備が整いました。以下のように定義します。

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

コマンドを実行した後、プロジェクトがローカルでビルドされて提供されます。これでデフォルトのブラウザーで自動的に開き、プロジェクトで $ProductName$ コンポーネントを使用できるようになります。

以下の画像は、上記を実行した結果です。

<img src="../images/general/geo-map.png" />
<!-- end: Angular, React -->

<!-- Blazor -->

## 手順 1 - 新しい Blazor プロジェクトの作成
以下の手順では、新しい Blazor プロジェクトを作成する方法を説明します。Ignite UI for Blazor コンポーネントを既存のアプリケーションに追加する場合は、[**手順 2 - Ignite UI for Blazor パッケージのインストール**](#手順-2---ignite-ui-for-blazor-パッケージのインストール) に進みます。

1 - Visual Studio 2019 を起動し、スタート ページで **[新しいプロジェクトの作成]** をクリックします。**Blazor App** テンプレートを選択し、**[次へ]** をクリックします。

<img src="../images/general/new-blazor-project.jpg" />

2 - プロジェクト名と説明を入力し、**[作成]** をクリックします。

<img src="../images/general/new-blazor-project-name.jpg" />

3 - 使用したい Blazor テンプレート (サーバーまたは Web アセンブリ (WASM)) を選択します。

<img src="../images/general/new-blazor-project-template.jpg" />

## 手順 2 - Ignite UI for Blazor パッケージのインストール

次のコマンドを使用して、**VS Package Manage Console** に Ignite UI for Blazor パッケージをインストールできます。

```cmd
dotnet add package IgniteUI.Blazor --version {PackageVerLatest}
```

または、次の手順に従って手動でバージョンを選択することもできます:

1 - ソリューションまたはプロジェクトを右クリックし、**[ソリューションの NuGet パッケージの管理]** を選択します。

<img src="../images/general/nuget-manage-packages.jpg" />

2 - パッケージ マネージャー ダイアログで **[参照]** タブを開き、**Infragistics** パッケージ ソースを選択して **IgniteUI.Blazor** NuGet パッケージをプロジェクトにインストールします。

<img src="../images/general/nuget-package-manager-browse.jpg" />

> [!Note]
> トライアル版をお使いの場合、[NuGet.org](https://www.nuget.org/packages/IgniteUI.Blazor/20.1.15-trial) にある `IgniteUI.Blazor` トライアル版 NuGet パッケージをインストールできます。

> [!Note]
> Infragistics パッケージソースがない場合、追加するには [Infragistics NuGet フィード トピック](./general-nuget-feed.md)を参照してください。

## 手順 3 - Ignite UI for Blazor コンポーネントの登録

1 - Ignite UI for Blazor スクリプトをデフォルトの Blazor スクリプトの上に追加します。

**Blazor Web Assembly** プロジェクトで **wwwroot/index.html** ファイルを変更します。

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
<script src="_framework/blazor.webassembly.js"></script>
```

**Blazor Server** プロジェクトで **Pages/_Host.cshtml** ファイルを変更します。

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
<script src="_framework/blazor.server.js"></script>
```

入力コントロールのいずれかを使用している場合は、リンクする必要がある追加の CSS ファイルがあります。上記のスクリプトと同じファイル内の次のコードを使用して、この CSS ファイルをリンクできます:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

この追加の CSS ファイルが適用されるコントロールのリストは次のとおりです:

- [Avatar](layouts/avatar.md)
- [Badge](inputs/badge.md)
- [Button](inputs/button.md)
- [Card](layouts/card.md)
- [Calendar](scheduling/calendar.md)
- [Checkbox](inputs/checkbox.md)
- [Form](inputs/form.md)
- [Icon](layouts/icon.md)
- [Icon Button](inputs/icon-button.md)
- [Input](inputs/input.md)
- [List](grids/list.md)
- [NavBar](menus/navbar.md)
- [Navigation Drawer](menus/navigation-drawer.md)
- [Radio & Radio Group](inputs/radio.md)
- [Ripple](inputs/ripple.md)
- [Switch](inputs/switch.md)

2 - Ignite UI Blazor コンポーネントのサービス モジュールを登録します。

**Blazor Web Assembly** プロジェクトで **Program.cs** ファイルを変更します。

```razor
using IgniteUI.Blazor.Controls;
// ...

public static async Task Main(string[] args)
{
    var builder = WebAssemblyHostBuilder.CreateDefault(args);
    // ...
    builder.Services.AddScoped(typeof(IIgniteUIBlazor), typeof(IgniteUIBlazor));
}
```

In **Blazor Server** project - change the **Startup.cs** file:

```razor
using IgniteUI.Blazor.Controls;
// ...

public void ConfigureServices(IServiceCollection services)
{
    // ...
    services.AddScoped(typeof(IIgniteUIBlazor), typeof(IgniteUIBlazor));
}
```

オプションで、アプリケーション レベルでモジュールを登録できない場合は、ページの初期化時にモジュールを razor りファイルに登録できます。

```razor
@page "/pages/some-page-name"

@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor;

@code
{
    protected override void OnInitialized()
    {
        base.OnInitialized();
        IgbGeographicMapModule.Register(IgniteUIBlazor);
        IgbDataChartInteractivityModule.Register(IgniteUIBlazor);
        // ...
    }
}
```

> [!Note]
> この例では、Blazor ラジアル ゲージ コンポーネントを使用するために `IgbGeographicMapModule` を登録しました。ただし、Blazor アプリケーションで適切に動作するためには、他の Blazor コンポーネントおよびその機能用の追加モジュールを登録する必要があります。必要なモジュールの詳細については、各コンポーネントのトピックを参照してください。


3 - `_Imports.razor` ファイルの $ProductName$ コンポーネントに名前空間を追加します。

```razor
@using IgniteUI.Blazor.Controls;
```

4 - Ignite UI for Blazor コンポーネントを razor ページに追加します。

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true" />
</IgbGeographicMap>
```

5 - Blazor アプリをビルドして実行します。

<!-- end: Blazor -->
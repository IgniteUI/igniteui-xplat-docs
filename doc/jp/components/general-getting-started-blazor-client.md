---
title: 作業の開始 | {ProductName} | インフラジスティックス
_description: インフラジスティックスの {Platform} コンポーネントを使用して、アプリを作成し、世界最速の仮想化されたリアルタイムの {Platform} データ グリッドとストリーミング ファイナンシャルおよびビジネス チャートを使用して、データの視覚化を向上させます。
_keywords: {ProductName}, Infragistics, Getting Started, インフラジスティックス, 作業の開始
_language: ja
mentionedTypes: []
---
# Ignite UI for Blazor WebAssembly で作業を開始

このトピックでは、Visual Studio および Ignite UI for Blazor を使用して Blazor WebAssembly アプリケーションを作成するための手順を説明します。

## 新しい Blazor WebAssembly プロジェクトを作成する
以下の手順では、新しい Blazor WebAssembly プロジェクトを作成する方法を説明します。Ignite UI for Blazor を既存のアプリケーションに追加する場合は、[**Ignite UI for Blazor パッケージをインストール**](#ignite-ui-for-blazor-のインストール) セクションに移動します。

Visual Studio 2022 を起動し、開始ページで **[新しいプロジェクトの作成]** をクリックし、**Blazor WebAssembly アプリ** テンプレートを選択して、**[次へ]** をクリックします。

<img src="../images/general/new-blazor-project-client.jpg" />

プロジェクト名と場所を入力し、**[次へ]** をクリックします。

<img src="../images/general/new-blazor-project-configure-client.jpg" />

追加のプロジェクト オプションを指定し、**[作成]** をクリックします。

<img src="../images/general/new-blazor-project-info-client.jpg" />

## Ignite UI for Blazor のインストール

Ignite UI for Blazor は、NuGet パッケージで提供されます。Blazor アプリケーションで Ignite UI for Blazor コンポーネントを使用するには、最初に適切な NuGet パッケージをインストールする必要があります。

Visual Studio で、**[ツール]** → **[NuGet パッケージ マネージャー]** → **[ソリューションの NuGet パッケージの管理]** を選択して、NuGet パッケージ マネージャーを開きます。**IgniteUI.Blazor** NuGet パッケージを検索してインストールします。

NuGet を使用した Ignite UI for Blazor のインストールの詳細については、[Ignite UI for Blazor のインストール](general-installing-blazor.md) トピックを参照してください。

## Ignite UI for Blazor の登録

### .NET 6 アプリケーション

1 - **Program.cs** ファイルを開き、**builder.Services.AddIgniteUIBlazor()** 関数を呼び出して Ignite UI for Blazor サービスを登録します。

```razor
var builder = WebAssemblyHostBuilder.CreateDefault(args);
// ...
builder.Services.AddIgniteUIBlazor();

await builder.Build().RunAsync();
```

2 - **IgniteUI.Blazor.Controls** 名前空間を **_Imports.razor** ファイルに追加します。

```razor
@using IgniteUI.Blazor.Controls
```

3 - **wwwroot/index.html** ファイルの **<head\>** 要素にスタイル シートを追加します。

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

### .NET 5 アプリケーション

1 - **Program.cs** ファイルを開き、**builder.Services.AddIgniteUIBlazor()** 関数を呼び出して Ignite UI for Blazor サービスを登録します。

```razor
public static async Task Main(string[] args)
{
    var builder = WebAssemblyHostBuilder.CreateDefault(args);
    // ...
    builder.Services.AddIgniteUIBlazor();
}
```

2 - **IgniteUI.Blazor.Controls** 名前空間を **_Imports.razor** ファイルに追加します。

```razor
@using IgniteUI.Blazor.Controls
```

3 - **wwwroot/index.html** ファイルの **<head\>** 要素にスタイル シートを追加します。

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

4 - スクリプト参照を **wwwroot/index.html** ファイルに追加します。

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
<script src="_framework/blazor.webassembly.js"></script>
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

Blazor アプリをビルドして実行します。

<img src="../images/general/getting-started-blazor-card.jpg" />
---
title: 作業の開始 | {ProductName} オープン ソース ライブラリ | インフラジスティックス
_description: インフラジスティックスのオープン ソース {Platform} コンポーネントを使用して、Grid Lite を含む軽量な MIT ライセンス コンポーネントでアプリを作成できます。今すぐお試しください。
_keywords: {ProductName}, Infragistics, Getting Started, Open-Source, MIT License, 作業の開始, オープン ソース, MIT ライセンス, インフラジスティックス
_language: ja
mentionedTypes: []
---
# オープン ソース ライブラリの概要

このトピックでは、Visual Studio を使用して Ignite UI for Blazor オープン ソース ライブラリで Blazor アプリケーションを作成するための段階的な手順を説明します。

## 概要

{ProductName} は、MIT ライセンスの下でオープン ソース UI コンポーネントを提供します。これらの軽量パッケージは、商用ライセンスを必要とせずに最新の Web アプリケーションを構築するための基本的な機能を提供します。

オープン ソース ライブラリには以下が含まれます。

- **IgniteUI.Blazor.Lite** - オープン ソース UI コンポーネントを含む軽量パッケージ
- **IgniteUI.Blazor.GridLite** - 軽量でオープン ソースのデータ グリッド コンポーネント

## 新しい Blazor プロジェクトの作成

 - Visual Studio を起動し、スタート ページで **[新しいプロジェクトの作成]** をクリックし、**Blazor Server App**、**Blazor WebAssembly App**、**Blazor Web App** などの Blazor テンプレートを選択して **[次へ]** をクリックします。

> [!Note]
> **Blazor Server App** を使用する場合は、コンポーネントが使用されるページに `@rendermode InteractiveServer` を追加してください。

- プロジェクト名と場所を入力し、**[次へ]** をクリックします。

- **追加のプロジェクト オプションを指定し、[作成]** をクリックします。

## IgniteUI.Blazor.Lite のインストール

IgniteUI.Blazor.Lite パッケージには、NuGet 経由で配信されるオープン ソース UI コンポーネントが含まれています。

> [!WARNING]
> **IgniteUI.Blazor** パッケージと **IgniteUI.Blazor.Lite** パッケージを同じプロジェクトで組み合わせないでください。これらは同じ名前空間を使用し、重複するコンポーネントが含まれているため、いずれか 1 つのみを使用する必要があります。

Visual Studio で、**[ツール]** → **[NuGet パッケージ マネージャー]** → **[ソリューションの NuGet パッケージの管理]** を選択して、NuGet パッケージ マネージャーを開きます。**IgniteUI.Blazor.Lite** NuGet パッケージを検索してインストールします。

または、パッケージ マネージャー コンソール経由でインストールします。

```cmd
Install-Package IgniteUI.Blazor.Lite
```

または、.NET CLI 経由でインストールします。

```cmd
dotnet add package IgniteUI.Blazor.Lite
```

## IgniteUI.Blazor.Lite の登録

### .NET 6 以降のアプリケーション

1 - **Program.cs** ファイルを開き、**builder.Services.AddIgniteUIBlazor** 関数を呼び出して Ignite UI for Blazor サービスを登録します。

```razor
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

builder.Services.AddIgniteUIBlazor();

var app = builder.Build();
```

2 - **_Imports.razor** ファイルに **IgniteUI.Blazor.Controls** 名前空間を追加します。

```razor
@using IgniteUI.Blazor.Controls
```

3 - プロジェクト タイプに基づいて適切な場所にスタイル シートを追加します。

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

4 - スクリプト参照を追加します。

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
```

## OSS Blazor コンポーネントの使用

Ignite UI for Blazor コンポーネントを razor ページに追加します。たとえば、次のようになります。

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

軽量パッケージに含まれるコンポーネントの詳細については、[オープン ソースとプレミアム コンポーネント](general-open-source-vs-premium.md) トピックを参照してください。

## Grid Lite

Grid Lite コンポーネントは、表形式のデータを表示するための基本的な機能を提供する軽量でオープン ソースのデータ グリッドです。

### IgniteUI.Blazor.GridLite のインストール

Visual Studio で、**[ツール]** → **[NuGet パッケージ マネージャー]** → **[ソリューションの NuGet パッケージの管理]** を選択して、NuGet パッケージ マネージャーを開きます。**IgniteUI.Blazor.GridLite** NuGet パッケージを検索してインストールします。

または、パッケージ マネージャー コンソール経由でインストールします。

```cmd
Install-Package IgniteUI.Blazor.GridLite
```

または、.NET CLI 経由でインストールします。

```cmd
dotnet add package IgniteUI.Blazor.GridLite
```
### Grid Lite の使用

1 - **_Imports.razor** ファイルに **IgniteUI.Blazor.Controls** 名前空間を追加します。

```razor
@using IgniteUI.Blazor.Controls
```

2 - プロジェクト タイプに基づいて適切な場所にスタイル シートを追加します。

```razor
<head>
       <link href="_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

3 - Grid Lite コンポーネントを razor ページに追加します。

```razor
<IgbGridLite Data="data" AutoGenerateColumns="true">
</IgbGridLite>

@code {
    private object[] data = new object[]
    {
        new { Name = "John", Age = 30, City = "New York" },
        new { Name = "Jane", Age = 25, City = "Los Angeles" },
        new { Name = "Bob", Age = 35, City = "Chicago" }
    };
}
```

Grid Lite の機能と構成の詳細については、[Grid Lite の概要](grid-lite/overview.md)トピックを参照してください。

## その他のリソース

- [オープン ソースとプレミアム コンポーネント](general-open-source-vs-premium.md)
- [Grid Lite の概要](grid-lite/overview.md)

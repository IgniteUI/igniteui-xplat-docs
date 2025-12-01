---
title: 作業の開始 | {ProductName} オープンソース ライブラリ | インフラジスティックス
_description: インフラジスティックスのオープンソース {Platform} コンポーネントを使用して、Grid Lite などの軽量な MIT ライセンス コンポーネントでアプリを作成します。今すぐお試しください。
_keywords: {ProductName}, Infragistics, 作業の開始, オープンソース, MIT ライセンス
mentionedTypes: []
_language: ja
---
# オープンソース ライブラリを使用した作業の開始

このトピックでは、Visual Studio を使用して Ignite UI for Blazor オープンソース ライブラリで Blazor アプリケーションを作成する手順を説明します。

## 概要

{ProductName} は、MIT ライセンスの下でオープンソース UI コンポーネントを提供しています。これらの軽量パッケージは、商用ライセンスを必要とせずに、最新の Web アプリケーションを構築するための重要な機能を提供します。

オープンソース ライブラリには以下が含まれます:

- **IgniteUI.Blazor.Lite** - オープンソース UI コンポーネントを含む軽量パッケージ
- **IgniteUI.Blazor.GridLite** - 軽量のオープンソース データ グリッド コンポーネント

## 新しい Blazor プロジェクトを作成

Visual Studio 2022 を起動し、スタート ページの **新しいプロジェクトの作成** をクリックし、**Blazor Server App**、**Blazor WebAssembly App**、または **Blazor Web App** などの Blazor テンプレートを選択して、**次へ** をクリックします。

プロジェクト名と場所を入力し、**次へ** をクリックします。

追加のプロジェクト オプションを指定し、**作成** をクリックします。

## IgniteUI.Blazor.Lite をインストール

IgniteUI.Blazor.Lite パッケージには、NuGet 経由で配布されるオープンソース UI コンポーネントが含まれています。

Visual Studio で、**ツール** → **NuGet パッケージ マネージャー** → **ソリューションの NuGet パッケージの管理** を選択して NuGet パッケージ マネージャーを開きます。**IgniteUI.Blazor.Lite** NuGet パッケージを検索してインストールします。

<img src="https://img.shields.io/nuget/v/IgniteUI.Blazor.Lite?label=NuGet" alt="NuGet Version" />

[NuGet で見る](https://www.nuget.org/packages/IgniteUI.Blazor.Lite)

または、パッケージ マネージャー コンソールでインストール:

```cmd
Install-Package IgniteUI.Blazor.Lite
```

または .NET CLI でインストール:

```cmd
dotnet add package IgniteUI.Blazor.Lite
```

## IgniteUI.Blazor.Lite を登録

### .NET 6 以降のアプリケーション

1 - **Program.cs** ファイルを開き、**builder.Services.AddIgniteUIBlazor** 関数を呼び出して Ignite UI for Blazor サービスを登録します:

```razor
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

builder.Services.AddIgniteUIBlazor();

var app = builder.Build();
```

2 - **_Imports.razor** ファイルで **IgniteUI.Blazor.Controls** 名前空間を追加します:

```razor
@using IgniteUI.Blazor.Controls
```

3 - プロジェクト タイプに基づいて適切な場所にスタイル シートを追加します:

Blazor Server アプリの場合、**Pages/_Layout.cshtml** または **Pages/_Host.cshtml** に追加します:

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

Blazor WebAssembly アプリの場合、**wwwroot/index.html** に追加します:

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

4 - スクリプト参照を追加します:

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
```

## Grid Lite

Grid Lite コンポーネントは、表形式データを表示するための重要な機能を提供する軽量のオープンソース データ グリッドです。

### IgniteUI.Blazor.GridLite をインストール

Visual Studio で、**ツール** → **NuGet パッケージ マネージャー** → **ソリューションの NuGet パッケージの管理** を選択して NuGet パッケージ マネージャーを開きます。**IgniteUI.Blazor.GridLite** NuGet パッケージを検索してインストールします。

<img src="https://img.shields.io/nuget/v/IgniteUI.Blazor.GridLite?label=NuGet" alt="NuGet Version" />

[NuGet で見る](https://www.nuget.org/packages/IgniteUI.Blazor.GridLite)

または、パッケージ マネージャー コンソールでインストール:

```cmd
Install-Package IgniteUI.Blazor.GridLite
```

または .NET CLI でインストール:

```cmd
dotnet add package IgniteUI.Blazor.GridLite
```

### Grid Lite の機能

Grid Lite コンポーネントには、次の機能が含まれています:

- 列フィルタリング
- 列の非表示
- 列のサイズ変更
- 列のソート
- 行の仮想化
- アクセシビリティ サポート
- テーマとスタイリング
- 列データ タイプ

### Grid Lite の使用

Grid Lite コンポーネントを Razor ページに追加します:

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

- [オープンソース vs プレミアム コンポーネント](general-open-source-vs-premium.md)
- [Grid Lite の概要](grid-lite/overview.md)
- [GitHub リポジトリ]({GithubLinkLite})

---
title: Ignite UI for Blazor のインストール
_description: NuGet パッケージを使用して {Platform} をインストールする方法
_keywords: {Platform}, NuGet, Feed, Infragistics, Install, フィード, インフラジスティックス, インストール
mentionedTypes: []
_language: ja
---

# Ignite UI for Blazor のインストール

Ignite UI for Blazor は、NuGet パッケージで提供されます。Blazor アプリケーションで Ignite UI for Blazor コンポーネントを使用するには、最初に適切な NuGet パッケージをインストールする必要があります。

NuGet を使用して Ignite UI for Blazor をインストールするには、次の 3 つの方法があります:
* [Visual Studio を使用する場合](#visual-studio-を使用する場合)
* [Ignite NET CLI を使用する場合](#net-cli-を使用する場合)
* [パッケージ マネージャーを使用する場合](#パッケージ-マネージャーを使用する場合)

ライセンスを取得したユーザーは、[Infragistics プライベート NuGet フィード](./general-nuget-feed.md)で提供されている公式のライセンス付き Ignite UI for Blazor NuGet パッケージを使用する必要があります。

> [!Note]
> トライアル ユーザーは、[NuGet.org](https://www.nuget.org/packages/IgniteUI.Blazor) にある **IgniteUI.Blazor** トライアル NuGet パッケージをインストールできます。

## Visual Studio を使用する場合

ソリューションまたはプロジェクトを右クリックし、**[ソリューションの NuGet パッケージの管理]** を選択します。

<img src="../images/general/nuget-manage-packages.jpg" />

パッケージ マネージャー ダイアログで **[参照]** タブを開き、**Infragistics** パッケージ ソースを選択して **IgniteUI.Blazor** NuGet パッケージをプロジェクトにインストールします。

<img src="../images/general/nuget-package-manager-browse.jpg" />

> [!Note]
> Infragistics パッケージ ソースがない場合、追加するには[ Infragistics NuGet フィード トピック](./general-nuget-feed.md)を参照してください。

## .NET CLI を使用する場合

```cmd
> dotnet add package IgniteUI.Blazor --version {PackageVerLatest}
```

## パッケージ マネージャーを使用する場合

```cmd
PM> Install-Package IgniteUI.Blazor -Version {PackageVerLatest}
```
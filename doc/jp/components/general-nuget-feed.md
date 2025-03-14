---
title: Infragistics NuGet フィード
_description: インフラジスティックスの {Platform} コンポーネントの NuGet フィード。
_keywords: {Platform}, NuGet, Feed, Infragistics, NuGet, フィード, インフラジスティックス
mentionedTypes: []
_language: ja
---

# Infragistics NuGet フィード

Infragistics は製品版を使用するユーザーにプライベート NuGet フィードを提供し、製品版の Ignite UI for Blazor NuGet パッケージを NuGet パッケージ マネージャーを介して追加します。

このトピックは、以下のセクションで構成されます。

- Visual Studio で Infragistics NuGet フィードを追加
- NuGet CLI で Infragistics NuGet フィードを追加

## Visual Studio を使用した追加

1 - Visual Studio で **[ツール] → [NuGet パッケージ マネージャー] → [パッケージ マネージャー設定]** を選択します。

<img src="../images/general/nuget-package-manager-setting-menu-item.jpg" />

2 - [**パッケージ ソース**] セクションで、ダイアログの右上にある **[+]** アイコンをクリックして新しいパッケージ ソースを追加します。
   - 名前を **Infragistics** に設定します。
   - NuGet プロトコル バージョン 3 を使用する場合は、ソースを **https://packages.infragistics.com/nuget/licensed/v3/index.json** に設定します。それ以外の場合は、**https://packages.infragistics.com/nuget/licensed/** に設定する必要があります。

> [!Note]
> v3 またはそれ以前のバージョンを使用するかどうかの詳細については、次の Web サイト (英語) をご覧ください: **https://devblogs.microsoft.com/nuget/nuget-3-what-and-why/** 。プロトコル v3 は、新しいバージョンの NuGet クライアント (2015 以降) を使用する場合にのみ適用されます。古い NuGet クライアントは、v3 と互換性がない場合があります。

    **[更新]** ボタンをクリックし、[OK] をクリックしてダイアログを閉じます。

<img src="../images/general/nuget-package-manager-package-sources-ig-server.jpg" />

> [!Note]
> このソースから NuGet パッケージを初めて追加する場合、Infragistics 資格情報の入力を求められます。

## NuGet CLI を使用した追加

1 - [最新の Nuget 実行可能ファイル](https://dist.nuget.org/win-x86-commandline/latest/nuget.exe)をダウンロードします。任意のフォルダーにファイルを保存するようブラウザーに指示します。このファイルはインストーラーではありません。ブラウザーから直接実行した場合は何も表示されません。
2 - ダウンロードした `nuget.exe` ファイルのフォルダー パスでコマンド プロンプトを開きます。
3 - 以下のコマンドを実行します。

```cmd
//nuget protocol v3
nuget sources add -name "Infragistics" -source "https://packages.infragistics.com/nuget/licensed/v3/index.json" -username "your login email" -password "your password"

//nuget protocol v2
nuget sources add -name "Infragistics" -source "https://packages.infragistics.com/nuget/licensed" -username "your login email" -password "your password"
```

> [!Note]
> パスワードは暗号化されて NuGet 設定ファイルに保存され、暗号化されたのと同じユーザー コンテキストでのみ解読できます。設定ファイルのデフォルトの場所は `%AppData%\NuGet\NuGet.config` です。
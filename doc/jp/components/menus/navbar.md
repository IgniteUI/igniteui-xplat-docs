---
title: {Platform} Navbar | インフラジスティックス
_description: インフラジスティックスの {Platform} ナビゲーション バーは、シームレスな統合により最適な UI エクスペリエンスを提供し、ユーザーがアプリケーション内をスムーズに移動できるようにします。{ProductName} を使用してアプリケーションを改善します。
_keywords: {Platform} navbar, {ProductName}, Infragistics, {Platform} ナビゲーション バー, インフラジスティックス
mentionedTypes: ['Navbar']
_language: ja
---

# {Platform} Navbar の概要

{Platform} `Navbar` は、アプリ内の現在の位置をユーザーに通知します。ナビゲーション バーは、検索やお気に入りなどのクイック アクションへのリンクを提供することもでき、ユーザーが無効なルートや状態に移動しようとせずに、アプリケーション内をスムーズにナビゲートできるようにします。ナビゲーション バーは、それが配置されているコンテナの上部にあります。


## {Platform} Navbar の例

次の例は、アイコンとテキスト ヘッダーのある `Navbar` を表しています:

`sample="/menus/nav-bar/overview", height="100", alt="{Platform} Navbar 概要の例"`

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Navbar` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbNavbarModule));
```

```ts
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Navbar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Navbar` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrNavbarModule, IgrNavbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrNavbarModule.register();
```

<!-- end: React -->

次に、`Navbar` のテンプレートに次のコードを追加して、タイトルのみの基本的な `Navbar` を表示できます。

<!-- WebComponents -->

```html
<igc-navbar>Navigation Title</igc-navbar>
```

<!-- end: WebComponents -->

```razor
<IgbNavbar>Navigation Title</IgbNavbar>
```

```tsx
<IgrNavbar>
    <span>Navigation Title</span>
</IgrNavbar>
```

## コンテンツ

次のサンプルに示すように、`Start` スロットと `End` スロットを使用して `Navbar` にいくつかの `Icon` 要素を追加できます。

`sample="/menus/nav-bar/content", height="100", alt="{Platform} Navbar スタイル設定の例"`

## スタイル設定

Navigation Bar コンポーネントは、いくつかの CSS パーツ (`base`、`start`、`middle` および `end`) を公開して、スタイルを完全に制御できるようにします。

```css
igc-icon {
    color: currentColor;
}

igc-navbar {
    background-color: #232121
}

igc-navbar::part(start) {
    color: #f23269;
}

igc-navbar::part(middle) {
    font-family: Titillium Web,sans-serif;
    color: #e9e8ea
}

igc-navbar::part(end) {
    color: #e9e8ea
}
```

以下は結果です:

`sample="/menus/nav-bar/styling", height="100", alt="{Platform} Navbar スタイル設定の例"`

<div class="divider"></div>


## API リファレンス

 - `End`
 - `Icon`
 - `Navbar`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
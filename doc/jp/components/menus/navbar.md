---
title: $Platform$ Navbar | インフラジスティックス
_description: インフラジスティックスの $Platform$ ナビゲーション バーは、シームレスな統合により最適な UI エクスペリエンスを提供し、ユーザーがアプリケーション内をスムーズに移動できるようにします。Ignite UI for $Platform$ を使用してアプリケーションを改善します。
_keywords: $Platform$ navbar, $ProductName$, Infragistics, $Platform$ ナビゲーション バー, インフラジスティックス
mentionedTypes: ['Navbar']
_language: ja
---

# $Platform$ Navbar の概要

$Platform$ `Navbar` は、アプリ内の現在の位置をユーザーに通知します。ナビゲーション バーは、検索やお気に入りなどのクイック アクションへのリンクを提供することもでき、ユーザーが無効なルートや状態に移動しようとせずに、アプリケーション内をスムーズにナビゲートできるようにします。ナビゲーション バーは、それが配置されているコンテナの上部にあります。


## $Platform$ Navbar の例

次の例は、アイコンとテキスト ヘッダーのある `Navbar` を表しています:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-bar-overview"
           alt="$Platform$ Navbar 概要の例"
           github-src="menus/nav-bar/overview">
</code-view>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Navbar` を使用する前に、次のように登録する必要があります:

```razor
IgbNavbarModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Navbar` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- React -->

First, you need to the install the corresponding $ProductName$ npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Navbar`, its necessary CSS, and register its module, like so:

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

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-bar-content"
           alt="$Platform$ Navbar スタイル設定の例"
           github-src="menus/nav-bar/content">
</code-view>


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

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-bar-styling"
           alt="$Platform$ Navbar スタイル設定の例"
           github-src="menus/nav-bar/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

Navbar の API の詳細については、次のリンクを参照してください:
* `Navbar`

使用したその他のコンポーネントとディレクティブ:
* `Icon`

<!-- end: WebComponents -->

<div class="divider"></div>

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [**GitHub** の Ignite UI for Blazor の例 (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- React -->

* [Ignite UI for React **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for React **GitHub** (英語)](https://github.com/IgniteUI/igniteui-react)

<!-- end: React -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

## API メンバー

 - `End`
 - `Icon`
 - `Navbar`
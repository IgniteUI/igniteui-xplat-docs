---
title: $Platform$ Navbar | インフラジスティックス
_description: インフラジスティックスの $Platform$ ナビゲーション バーは、シームレスな統合により最適な UI エクスペリエンスを提供し、ユーザーがアプリケーション内をスムーズに移動できるようにします。Ignite UI for $Platform$ を使用してアプリケーションを改善します。
_keywords: $Platform$ navbar, $ProductName$, Infragistics, $Platform$ ナビゲーション バー, インフラジスティックス
mentionedTypes: ['Navbar']
_language: ja
---
# $Platform$ Navbar の概要

$Platform$ [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcNavbarComponent.html) は、アプリ内の現在の位置をユーザーに通知します。ナビゲーション バーは、検索やお気に入りなどのクイック アクションへのリンクを提供することもでき、ユーザーが無効なルートや状態に移動しようとせずに、アプリケーション内をスムーズにナビゲートできるようにします。ナビゲーション バーは、それが配置されているコンテナの上部にあります。

## $Platform$ Navbar の例

次の例は、タイトルのある `Navbar` を表しています:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/navbar-overview"
           alt="$Platform$ Navbar 概要の例"
           github-src="menus/navbar/overview">
</code-view>

## 依存関係

Navigation Bar コンポーネントを使用するには、以下のパッケージをインストールする必要があります:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageWebComponents}
</pre>

## 使用方法

`Navbar` コンポーネントの使用を開始するには、最初に `igniteui-webcomponents` を TypeScript ファイルにインポートする必要があります。

```typescript
import 'igniteui-webcomponents';
```

次に、コンポーネントのテンプレートに次のコードを追加して、タイトルのみの基本的な `Navbar` を表示できます。

```html
<igc-navbar>Ignite UI for Web Components</igc-navbar>
```

## コンテンツをカスタマイズ

`Navbar` のコンテンツをカスタマイズするために、`start` スロットと `end` スロットを使用していくつかの [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcIconComponent.html) アイコンを追加できます。

```html
<igc-navbar style="height:40px">
    <igc-icon name="home" slot="start" size="large"></igc-icon>
    <h2>Sample App</h2>
    <igc-icon name="search" slot="end" size="large"></igc-icon>
    <igc-icon name="favorite" slot="end" size="large"></igc-icon>
    <igc-icon name="more_vert" slot="end" size="large"></igc-icon>
</igc-navbar>
```

以下は結果です:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/navbar-content"
           alt="$Platform$ Navbar コンテンツの例"
           github-src="menus/navbar/content">
</code-view>

## スタイル設定

Navigation Bar コンポーネントは、いくつかの CSS パーツ (`base`、`start`、`middle` および `end`) を公開して、スタイルを完全に制御できるようにします。

```css
igc-icon {
    color: currentColor;
}

igc-navbar {
    background-color: gainsboro;
}

igc-navbar::part(start) {
    color: darkolivegreen;
}

igc-navbar::part(middle) {
    font-family: Titillium Web,sans-serif;
}

igc-navbar::part(end) {
    color: darkgray;
}
```

以下は結果です:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/navbar-styling"
           alt="$Platform$ Navbar スタイル設定の例"
           github-src="menus/navbar/styling">
</code-view>

## API リファレンス

Navbar の API の詳細については、次のリンクを参照してください:
* [`IgcNavbarComponent API`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcNavbarComponent.html)

使用したその他のコンポーネントとディレクティブ:
* [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcIconComponent.html)

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>

- [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)
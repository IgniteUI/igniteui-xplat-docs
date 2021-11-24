---
title: $Platform$ Icon コンポーネント
_description: 開発者は、$ProductName$ Icon コンポーネントを使用して、さまざまなアイコンをカスタム色などと交換可能に使用できます。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Icon components, $Platform$ Icon controls, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Switch コンポーネント, $Platform$ Icon コントロール
_language: ja
---

# $Platform$ Icon (アイコン) の概要

$ProductName$ アイコン コンポーネントを使用すると、開発者は登録済みの SVG をアプリケーションのアイコンとして使用できます。

## $Platform$ Icon の例

<code-view style="height: 50px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/icon-sizing" alt="$Platform$ Icon の例"
           github-src="layouts/icon/sizing">
</code-view>

<div class="divider--half"></div>

## 使用方法

Icon Web コンポーネントの使用を開始するには、最初に次のコマンドを入力して $ProductName$ をインストールする必要があります。

```cmd
npm install igniteui-webcomponents
```

次の手順は、[`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcIconComponent.html) を使用する typescript ファイルにインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録することです。

```ts
import { defineComponents, IgcIconComponent } from "igniteui-webcomponents";

defineComponents(IgcIconComponent);
```

## 使用方法

$ProductName$ アイコン コンポーネントには、それ自体にアイコンは含まれていません。これは、登録された SVG 画像を表示するためのコンジットです。

### アイコンの追加

画像をアイコンとして登録するには、アイコンをアイコン コレクションに追加できるアイコン レジストリ サービスから 2 つのユーティリティ関数のいずれかをインポートするだけです。

```ts
import {
  registerIcon,
  registerIconFromText,
} from "igniteui-webcomponents";
```

[`registerIcon`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#registerIcon) 関数を使用すると、SVG 画像を外部ファイルからアイコンとして登録できます。

```ts
registerIcon(
  "search",
  "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg",
  "material"
);
```

上記の方法では、`search` という名前のアイコンが `material` という名前のコレクションに追加されます。

次に、新しく登録されたアイコンを使用するには、名前とコレクションを `igc-icon` 要素に渡すだけです。

```html
<igc-icon name="search" collection="material"></igc-icon>
```

アイコンを登録する 2 番目の方法は、SVG 文字列を [`registerIconFromText`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#registerIconFromText) 関数に渡すことです。

```ts
const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

registerIconFromText("search", searchIcon, "material");
```

次に、上記のコンポーネント サンプルで説明したのと同じ方法で使用します。

### サイズ

アイコン コンポーネントは、`small`、`medium` (デフォルト)、`large` の 3 つのアイコン サイズをサポートしています。アイコンのサイズを変更するには、[`size`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcIconComponent.html#size) 属性を前述のサイズのいずれかに設定します。

```html
<igc-icon size="large"></igc-icon>
```

<code-view style="height: 50px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/icon-sizing" alt="$Platform$ Icon のサイズ変更"
           github-src="layouts/icon/sizing">
</code-view>

### Mirrored (ミラー化済み)

一部のアイコンは、右から左 (RTL) モードで使用する場合、少し異なって見える必要があります。そのため、設定するとアイコンを水平方向に反転させる `mirrored` 属性を提供します。

```html
<igc-icon name="search" mirrored></igc-icon>
```

## スタイル設定

アイコン コンポーネントは、`igc-icon` 要素に直接スタイルを適用することでスタイルを設定できます。

```css
igc-icon {
  --size: 48px;
  color: olive;
}
```

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/icon-styling" alt="$Platform$ Icon のサイズ変更"
           github-src="layouts/icon/styling">
</code-view>

## API リファレンス

* [IgcIconComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcIconComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

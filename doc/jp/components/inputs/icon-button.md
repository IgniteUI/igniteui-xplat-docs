<!-- --- -->
<!-- title: $Platform$ Icon Button コンポーネント -->
<!-- _description: 開発者は、$ProductName$ Icon Button コンポーネントを使用して、さまざまなアイコンをカスタム色のボタンなどと交換して使用できます。 -->
<!-- _keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Icon Button components, $Platform$ Icon Button controls, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Icon Button コンポーネント, $Platform$ Icon Button コントロール 
_language: ja
-->
<!-- --- -->

# $Platform$ Icon Button (アイコン ボタン) の概要

$ProductName$ Icon Button コンポーネントを使用すると、開発者は登録済みのアイコンをアプリケーションのボタンとして使用できます。[アイコン](../icon.md) コンポーネントのすべての機能を備えていますが、[ボタン](button.md) コンポーネントの機能も追加しています。

## 使用方法

Icon Button Web コンポーネントの使用を開始するには、[`IgcIconButtonComponent`]({ApiClass}/IgcIconButtonComponent.html) を typescript ファイルにインポートし、次のように [`defineComponents()`]({ApiIndex}#defineComponents) 関数を呼び出して登録する必要があります。

```ts
import { defineComponents, IgcIconButtonComponent } from "igniteui-webcomponents";

defineComponents(IgcIconButtonComponent);
```

アイコン ボタン コンポーネントをインポートしたら、使用を開始する準備ができたので、最初のボタンを追加しましょう。

```html
<igc-icon-button name="thumb-up" collection="material"></igc-icon-button>
```

## 例

### バリアント

通常のボタン コンポーネントと同様に、アイコン ボタンはいくつかのバリアントをサポートします - `flat` (デフォルト)、`contained`、および `outlined`。アイコン ボタンのタイプを変更するには、アイコン ボタンの [`variant`]({ApiClass}/IgcIconButtonComponent.html#variant) 属性を設定します。

<code-view style="height: 75px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-variant" alt="$Platform$ Icon Button の例"
           github-src="inputs/icon-button/variant">
</code-view>

```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

### サイズ

ボタンのサイズは、[`size`]({ApiClass}/IgcIconButtonComponent.html#size) 属性をサポートされている 3 つのサイズ (`small`、`medium`、`large` (デフォルト)) のいずれかに設定することで変更できます。

<code-view style="height: 75px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-size" alt="$Platform$ Icon Button の例"
           github-src="inputs/icon-button/size">
</code-view>

```html
<igc-icon-button name="thumb-up" size="medium"></igc-icon-button>
```

### タイプ

`href` 属性が設定されると、アイコン ボタン コンポーネントはその内部構造を `<button>` から `<a>` タイプ要素に変更します。その場合、アイコン ボタンは通常のリンクと考えることができます。`href` 属性を設定すると、アイコン ボタンの `rel`、`target`、および `download` 属性も設定できます。

```html
<igc-icon-button
  name="thumb-up"
  collection="material"
  href="https://duckduckgo.com"
  target="_blank"
>
</igc-icon-button>
```

### Mirrored (ミラー化済み)

一部のアイコンは、右から左 (RTL) モードで使用する場合、少し異なって見える必要があります。そのため、設定するとアイコン ボタンを水平方向に反転させる `mirrored` 属性を提供します。

```html
<igc-icon-button name="thumb-up" mirrored></igc-icon-button>
```

## スタイル設定

アイコン ボタン コンポーネントは、2 つの CSS パーツを公開します。ラッピング要素 (`<button>` または `<a>`) とラップされた `<igc-icon>` 要素のスタイルを設定できる `base` と `icon` です。

```css
igc-icon-button::part(base) {
  padding: 12px;
  color: olive;
}

igc-icon-button::part(icon) {
  --size: 32px;
}
```

<code-view style="height: 75px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-styling" alt="$Platform$ Icon Button Example"
           github-src="inputs/icon-button/styling">
</code-view>

## API リファレンス

* [IgcIconButtonComponent]({ApiClass}/IgcIconButtonComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

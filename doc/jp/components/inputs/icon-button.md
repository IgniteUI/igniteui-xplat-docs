---
title: $Platform$ Icon Button コンポーネント
_description: 開発者は、$ProductName$ Icon Button コンポーネントを使用して、さまざまなアイコンをカスタム色のボタンなどと交換して使用できます。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Icon Button components, $Platform$ Icon Button controls, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Icon Button コンポーネント, $Platform$ Icon Button コントロール
mentionedTypes: ['IconButton', 'ButtonBase', 'Button', 'Icon']
_language: ja
---

# $Platform$ Icon Button (アイコン ボタン) の概要

$ProductName$ Icon Button コンポーネントを使用すると、開発者は登録済みのアイコンをアプリケーションのボタンとして使用できます。[アイコン](../layouts/icon.md) コンポーネントのすべての機能を備えていますが、[ボタン](button.md) コンポーネントの機能も追加しています。

# $Platform$ Icon Button の例

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-size" alt="$Platform$ Icon Button の例"
           github-src="inputs/icon-button/size">
</code-view>

<div class="divider"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`IconButton` を使用する前に、次のように登録する必要があります:

```razor
IgbIconButtonModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `IconButton` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcIconButtonComponent } from "igniteui-webcomponents";

defineComponents(IgcIconButtonComponent);
```

`IconButton` の使用を開始する最も簡単な方法は次のとおりです。

```html
<igc-icon-button name="thumb-up" collection="material"></igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" />
```

## 例

### バリアント

通常のボタン コンポーネントと同様に、アイコン ボタンはいくつかのバリアントをサポートします - `flat` (デフォルト)、`contained`、および `outlined`。アイコン ボタンのタイプを変更するには、アイコン ボタンの `variant` 属性を設定します。

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-variant" alt="$Platform$ Icon Button の例"
           github-src="inputs/icon-button/variant">
</code-view>

```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

```razor
<IgbIconButton IconName="search" Variant="@IconButtonVariant.Contained" Collection="material" />
```

### サイズ

ボタンのサイズは、`size` 属性をサポートされている 3 つのサイズ - `small`、`medium`、`large` (デフォルト) - のいずれかに設定することで変更できます。

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-size" alt="$Platform$ Icon Button の例"
           github-src="inputs/icon-button/size">
</code-view>

```html
<igc-icon-button name="thumb-up" size="medium"></igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Size="@SizableComponentSize.Medium" />
```

### タイプ

`href` 属性が設定されると、アイコン ボタン コンポーネントはその内部構造を `<button>` から `<a>` タイプ要素に変更します。その場合、アイコン ボタンは通常のリンクと考えることができます。`href` 属性を設定すると、アイコン ボタンの `rel`、`target`、および `download` 属性も設定できます。

```html
<igc-icon-button
  name="thumb-up"
  collection="material"
  href="https://duckduckgo.com"
  target="_blank">
</igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Href="https://duckduckgo.com" Target="_blank" />
```

### Mirrored (ミラー化済み)

一部のアイコンは、右から左 (RTL) モードで使用する場合、少し異なって見える必要があります。そのため、設定するとアイコン ボタンを水平方向に反転させる `mirrored` 属性を提供します。

```html
<igc-icon-button name="thumb-up" mirrored></igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Mirrored="true" />
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

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-styling" alt="$Platform$ Icon Button の例"
           github-src="inputs/icon-button/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

* `IconButton`

<!-- end: WebComponents -->

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub** (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

## API メンバー

 - `ButtonBase`
 - `Button`
 - `IconButton`
 - `Icon`
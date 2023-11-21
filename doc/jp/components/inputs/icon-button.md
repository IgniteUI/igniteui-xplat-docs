---
title: {Platform} Icon Button コンポーネント
_description: 開発者は、{ProductName} Icon Button コンポーネントを使用して、さまざまなアイコンをカスタム色のボタンなどと交換して使用できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Icon Button components, {Platform} Icon Button controls, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Icon Button コンポーネント, {Platform} Icon Button コントロール
mentionedTypes: ['IconButton', 'ButtonBase', 'Button', 'Icon']
_language: ja
---

# {Platform} Icon Button (アイコン ボタン) の概要

{ProductName} Icon Button コンポーネントを使用すると、開発者は登録済みのアイコンをアプリケーションのボタンとして使用できます。[アイコン](../layouts/icon.md) コンポーネントのすべての機能を備えていますが、[ボタン](button.md) コンポーネントの機能も追加しています。

# {Platform} Icon Button の例

`sample="/inputs/icon-button/size", height="100", alt="{Platform} Icon Button の例"`


<div class="divider"></div>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

`IconButton` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcIconButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcIconButtonComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`IconButton` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrIconButtonModule, IgrIconButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrIconButtonModule.register();
```
<!-- end: React -->

<!-- Blazor -->
`IconButton` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbIconButtonModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `IconButton` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->
`IconButton` の使用を開始する最も簡単な方法は次のとおりです:

```tsx
<IgrIconButton name="thumb-up" collection="material"></IgrIconButton>
```

```html
<igc-icon-button name="thumb-up" collection="material"></igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" />
```

## 例

### バリアント

通常のボタン コンポーネントと同様に、アイコン ボタンはいくつかのバリアントをサポートします - `flat` (デフォルト)、`contained`、および `outlined`。アイコン ボタンのタイプを変更するには、アイコン ボタンの `variant` 属性を設定します。

`sample="/inputs/icon-button/variant", height="100", alt="{Platform} Icon Button の例"`


```tsx
<IgrIconButton name="search" collection="contained"></IgrIconButton>
```

```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

```razor
<IgbIconButton IconName="search" Variant="@IconButtonVariant.Contained" Collection="material" />
```

### サイズ

ボタンのサイズは、CSS 変数 `--ig-size` を使用して、サポートされている 3 つのサイズ - `--ig-size-small`、`--ig-size-medium`、`--ig-size-large` (デフォルト) - のいずれかに変更できます。

`sample="/inputs/icon-button/size", height="100", alt="{Platform} Icon Button の例"`


```tsx
<IgrIconButton name="thumb-up" size="medium"></IgrIconButton>
```

```css
igc-icon-button {
    --ig-size: var(--ig-size-medium);
}
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

```tsx
<IgrIconButton name="thumb-up" collection="material" href="https://duckduckgo.com" target="_blank">
</IgrIconButton>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Href="https://duckduckgo.com" Target="_blank" />
```

### Mirrored (ミラー化済み)

一部のアイコンは、右から左 (RTL) モードで使用する場合、少し異なって見える必要があります。そのため、設定するとアイコン ボタンを水平方向に反転させる `mirrored` 属性を提供します。

```tsx
<IgrIconButton name="thumb-up" mirrored="true"></IgrIconButton>
```

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

`sample="/inputs/icon-button/styling", height="100", alt="{Platform} Icon Button の例"`


## API リファレンス

 - `ButtonBase`
 - `Button`
 - `IconButton`
 - `Icon`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
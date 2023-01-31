---
title: {Platform} Ripple
_description: {ProductName} Ripple を使用すると、開発者は、視覚的に魅力的な UI 拡張のためにリップル アニメーション効果を受け取った領域を定義できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Ripple components, {Platform} Ripple controls, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Ripple コンポーネント, {Platform} Ripple コントロール
mentionedTypes: ['Ripple', 'Button']
_language: ja
---

# {Platform} Ripple (リップル) の概要

{ProductName} Ripple コンポーネントは、タッチまたはマウス クリックに応答してアニメーションを作成します。

## {Platform} Ripple の例

<code-view style="height: 80px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/ripple-button" alt="{Platform} Ripple の例"
           github-src="inputs/ripple/button">
</code-view>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

`Ripple` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcRippleComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRippleComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Ripple` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrRippleModule, IgrRipple } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrRippleModule.register();
```
<!-- end: React -->

<!-- Blazor -->

`Ripple` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRippleModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Ripple` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

`Ripple` の使用を開始する最も簡単な方法は次のとおりです:

```tsx
<IgrButton>
  <IgrRipple></IgrRipple>
  <span>Ripple Button</span>
</IgrButton>
```

```html
<igc-button>
  <igc-ripple></igc-ripple>
  Ripple Button
</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    Ripple Button
    <IgbRipple></IgbRipple>
</IgbButton>
```

CSS `position` プロパティが `static` 以外の値に設定されている限り、任意の Web 要素に `Ripple` を追加できます。

## 例

### 色

`--color` CSS プロパティを任意の有効な CSS 色に設定することで、リップルの色を変更できます。

```css
igc-ripple {
  --color: olive;
}
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/ripple-color" alt="{Platform} Ripple の例"
           github-src="inputs/ripple/color">
</code-view>



## API リファレンス

 - `Button`
 - `Ripple`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
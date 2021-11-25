---
title: $Platform$ Ripple
_description: $ProductName$ Ripple を使用すると、開発者は、視覚的に魅力的な UI 拡張のためにリップル アニメーション効果を受け取った領域を定義できます。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Ripple components, $Platform$ Ripple controls, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Ripple コンポーネント, $Platform$ Ripple コントロール
_language: ja
---

# $Platform$ Ripple (リップル) の概要

$ProductName$ Ripple コンポーネントは、タッチまたはマウス クリックに応答してアニメーションを作成します。

<div class="divider"></div>

## $Platform$ Ripple の例

<code-view style="height: 60px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/ripple-button" alt="$Platform$ Ripple の例"
           github-src="inputs/ripple/button">
</code-view>

## 使用方法

Ripple Web コンポーネントの使用を開始するには、[`IgcRippleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcripplecomponent.html) を typescript ファイルにインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録する必要があります。

```ts
import { defineComponents, IgcRippleComponent } from "igniteui-webcomponents";

defineComponents(IgcRippleComponent);
```

リップル コンポーネントをインポートしたら、使用を開始する準備ができたので、ライブラリから既存のコンポーネントにリップルを追加しましょう。

```html
<igc-button>
  <igc-ripple></igc-ripple>
  Ripple Button
</igc-button>
```

CSS `position` プロパティが `static` 以外の値に設定されている限り、任意の Web 要素にリップルを追加できます。

## 例

### 色

`--color` CSS プロパティを任意の有効な CSS 色に設定することで、リップルの色を変更できます。

```css
igc-ripple {
  --color: olive;
}
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/ripple-color" alt="$Platform$ Ripple の例"
           github-src="inputs/ripple/color">
</code-view>

## API リファレンス

* [IgcRippleComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRippleComponent.html)

使用したその他の WEB コンポーネント:

* [IgcButtonComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

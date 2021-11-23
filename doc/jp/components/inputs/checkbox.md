---
title: $Platform$ Checkbox コンポーネント
_description: $ProductName$ Checkbox コンポーネントは、ユーザーが特定の条件に対してバイナリ選択を行えるようにする選択コントロールです。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Checkbox components, $Platform$ Checkbox controls, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Checkbox コンポーネント, $Platform$ Checkbox コントロール
_language: ja
---


# $Platform$ Checkbox (チェックボックス) の概要
$ProductName$ Checkbox コンポーネントは、ユーザーが特定の条件に対してバイナリ選択を行えるようにする選択コントロールです。ネイティブ ブラウザーのチェックボックスと同様に動作します。

<div class="divider"></div>

## Checkbox の例

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/checkbox-sample-1" alt="$Platform$ Checkbox の例"
           github-src="inputs/checkbox/sample-1">
</code-view>

<div class="divider--half"></div>

## 使用方法
チェックボックス コンポーネントは、選択された状態と選択されていない状態のどちらかを選択できることです。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

チェックボックス ウェブ コンポーネントの使用を開始するには、最初に次のコマンドを入力して $ProductName$ をインストールする必要があります。

```cmd
npm install igniteui-webcomponents
```

次の手順は、[IgcCheckboxComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html) を使用する typescript ファイルにインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録することです。

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";

defineComponents(IgcCheckboxComponent);
```

チェックボックスの使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-checkbox></igc-checkbox>
```

>[!WARNING]
>チェックボックス コンポーネントは標準の `<form>` 要素では機能しません。代わりに `<igc-form>` を使用してください。

## 例

### ラベル

チェックボックスに意味のあるラベルを付けるには、開始タグと終了タグの間にテキストを配置するだけです。

```html
<igc-checkbox>Label</igc-checkbox>
```

チェックボックスの [`label-position`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#label-position) 属性を設定することにより、チェックボックスの切り替えの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。


```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

チェックボックスは、チェックボックスの外部の要素でラベル付けすることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-label"
           alt="$Platform$ Avatar の例"
           github-src="inputs/checkbox/label">
</code-view>

### チェック済み

チェックボックスをオンに切り替えるには、[`checked`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#checked) 属性を使用します。

```html
<igc-checkbox checked></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-checked"
           alt="$Platform$ Avatar の例"
           github-src="inputs/checkbox/checked">
</code-view>

### 不確定

[`indeterminate`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#indeterminate) 属性を使用して、チェックボックスの値を `true` にも `false` にも設定しません。

```html
<igc-checkbox indeterminate></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-indeterminate"
           alt="$Platform$ Avatar の例"
           github-src="inputs/checkbox/indeterminate">
</code-view>

### 必須

[`required`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#required) 属性を使用して、チェックボックスを必須としてマークします。

```html
<igc-checkbox required></igc-checkbox>
```

### 無効

[`invalid`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#invalid) 属性を使用して、チェックボックスを無効としてマークします。

```html
<igc-checkbox invalid></igc-checkbox>
```

### オフ

チェックボックスをオフにするには、[`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#disabled) 属性を使用します。

```html
<igc-checkbox disabled></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-disabled"
           alt="$Platform$ Avatar の例"
           github-src="inputs/checkbox/disabled">
</code-view>

### フォーム

`<igc-form>` でチェックボックスを使用する場合は、[`name`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#name) と [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html#value) の属性を使用します。

```html
<igc-checkbox name="wifi" value="enabled"></igc-checkbox>
```

## スタイル設定

チェックボックス コンポーネントは、いくつかの CSS パーツ (`base`、`control`、`indicator`、および `label`) を公開して、スタイルを完全に制御できるようにします。

```css
igc-checkbox::part(indicator) {
  &::after {
    padding: 12px;
    border-radius: 14px;
  }
}

igc-checkbox::part(indicator checked) {
  border-radius: 0;

  &::after {
    background: olive;
    border-color: olive;
    stroke: beige;
  }
}
```

## API リファレンス

* [IgcCheckboxComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcCheckboxComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

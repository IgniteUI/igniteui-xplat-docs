---
title: $Platform$ Checkbox コンポーネント | $ProductName$
_description: $Platform$ Checkbox コンポーネントを使用してチェックボックスを追加し、エンドユーザーのチェック状態、チェックなし状態、または不確定状態を有効にする方法を紹介します。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Checkbox components, $Platform$ Checkbox controls, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Checkbox コンポーネント, $Platform$ Checkbox コントロール
mentionedTypes: ['Checkbox', 'Form']
_language: ja
---

# $Platform$ Checkbox (チェックボックス) の概要

$Platform$ Checkbox は、$Platform$ アプリにチェックボックスを追加できるコンポーネントです。これは標準の HTML チェックボックスとして動作し、ユーザーが基本的なチェック状態とチェックなし状態、または追加の不確定状態を選択できるようにします。また、$Platform$ Checkbox コンポーネントのスタイルと、フォームで使用する機能を完全に制御できます。

## Checkbox の例

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/checkbox-overview" alt="$Platform$ Checkbox の例"
           github-src="inputs/checkbox/overview">
</code-view>

<div class="divider--half"></div>

## 使用方法

`Checkbox` は、選択された状態と選択されていない状態のどちらかを選択できることです。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Checkbox` を使用する前に、次のように登録する必要があります:

```razor
IgbCheckboxModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Checkbox` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";

defineComponents(IgcCheckboxComponent);
```

<div class="divider--half"></div>


`Checkbox` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-checkbox></igc-checkbox>
```

```razor
<IgbCheckbox />
```

>[!WARNING]
>`Checkbox` コンポーネントは標準の `<form>` 要素では機能しません。代わりに `Form` を使用してください。


## 例

### ラベル

チェックボックスに意味のあるラベルを付けるには、開始タグと終了タグの間にテキストを配置するだけです。

```html
<igc-checkbox>Label</igc-checkbox>
```

```razor
<IgbCheckbox>Label</IgbCheckbox>
```

チェックボックスの `label-position` 属性を設定することにより、チェックボックスの切り替えの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。


```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

```razor
<IgbCheckbox LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbCheckbox>
```

チェックボックスは、チェックボックスの外部の要素でラベル付けすることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```

```razor
<span id="checkbox-label">Label</span>
<IgbCheckbox AriaLabelledby="checkbox-label" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-label"
           alt="$Platform$ Checkbox の例"
           github-src="inputs/checkbox/label">
</code-view>

### チェック済み

コンポーネントの `Checked` 属性を使用して、チェックボックスをデフォルトでオンにするかオフにするかを決定できます。

```html
<igc-checkbox checked></igc-checkbox>
```

```razor
<IgbCheckbox Checked="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-checking"
           alt="$Platform$ Checkbox の例"
           github-src="inputs/checkbox/checking">
</code-view>

### 不確定

コンポーネントの `Indeterminate` プロパティを使用して、チェックボックスの値を **true** にも **false** にも設定しません。

```html
<igc-checkbox indeterminate></igc-checkbox>
```

```razor
<IgbCheckbox Indeterminate="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-indeterminate"
           alt="$Platform$ Checkbox の例"
           github-src="inputs/checkbox/indeterminate">
</code-view>

### 必須

`Required` プロパティを使用して、チェックボックスを必須としてマークできます。

```html
<igc-checkbox required></igc-checkbox>
```

```razor
<IgbCheckbox Required="true" />
```

### 無効

`Invalid` 属性を使用して、チェックボックスを無効としてマークすることができます。

```html
<igc-checkbox invalid></igc-checkbox>
```

```razor
<IgbCheckbox Invalid="true" />
```

### オフ

チェックボックスをオフにするには、`Disabled` 属性を使用します。

```html
<igc-checkbox disabled></igc-checkbox>
```

```razor
<IgbCheckbox Disabled="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-disabled"
           alt="$Platform$ Checkbox の例"
           github-src="inputs/checkbox/disabled">
</code-view>

### フォーム

`Form` でチェックボックスを使用する場合は、`name` と `value` の属性を使用できます。

```html
<igc-checkbox name="wifi" value="enabled"></igc-checkbox>
```

```razor
<IgbCheckbox Name="wifi" Value="enabled" />
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

<!-- WebComponents -->

## API リファレンス

* `Checkbox`

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

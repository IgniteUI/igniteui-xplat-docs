---
title: {Platform} Checkbox コンポーネント | {ProductName}
_description: {Platform} Checkbox コンポーネントを使用してチェックボックスを追加し、エンドユーザーのチェック状態、チェックなし状態、または不確定状態を有効にする方法を紹介します。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Checkbox components, {Platform} Checkbox controls, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Checkbox コンポーネント, {Platform} Checkbox コントロール
mentionedTypes: ["Checkbox", "Form"]
_language: ja
---

# {Platform} Checkbox (チェックボックス) の概要

{Platform} Checkbox は、{Platform} アプリにチェックボックスを追加できるコンポーネントです。これは標準の HTML チェックボックスとして動作し、ユーザーが基本的なチェック状態とチェックなし状態、または追加の不確定状態を選択できるようにします。また、{Platform} Checkbox コンポーネントのスタイルと、フォームで使用する機能を完全に制御できます。

## Checkbox の例

`sample="/inputs/checkbox/overview", height="100", alt="{Platform} Checkbox の例"`

<div class="divider--half"></div>

## 使用方法

`Checkbox` は、選択された状態と選択されていない状態のどちらかを選択できることです。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Checkbox` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCheckboxComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Checkbox` と必要な CSS をインポートする必要があります:

```tsx
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->

`Checkbox` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCheckboxModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Checkbox` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<div class="divider--half"></div>

`Checkbox` の使用を開始する最も簡単な方法は次のとおりです:

```tsx
<IgrCheckbox></IgrCheckbox>
```

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

```tsx
<IgrCheckbox><span>Label</span></IgrCheckbox>
```

```html
<igc-checkbox>Label</igc-checkbox>
```

```razor
<IgbCheckbox>Label</IgbCheckbox>
```

チェックボックスの `label-position` 属性を設定することにより、チェックボックスの切り替えの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。

```tsx
<IgrCheckbox labelPosition="before"></IgrCheckbox>
```

```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

```razor
<IgbCheckbox LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbCheckbox>
```

チェックボックスは、チェックボックスの外部の要素でラベル付けすることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。

```tsx
<span id="checkbox-label">Label</span>
<IgrCheckbox aria-labelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
```

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```

```razor
<span id="checkbox-label">Label</span>
<IgbCheckbox AriaLabelledby="checkbox-label" />
```

`sample="/inputs/checkbox/label", height="100", alt="{Platform} Checkbox の例"`



### チェック済み

コンポーネントの `Checked` 属性を使用して、チェックボックスをデフォルトでオンにするかオフにするかを決定できます。

```tsx
<IgrCheckbox checked={true}></IgrCheckbox>
```

```html
<igc-checkbox checked></igc-checkbox>
```

```razor
<IgbCheckbox Checked="true" />
```

`sample="/inputs/checkbox/checking", height="100", alt="{Platform} Checkbox の例"`



### 不確定

コンポーネントの `Indeterminate` プロパティを使用して、チェックボックスの値を **true** にも **false** にも設定しません。

```tsx
<IgrCheckbox indeterminate={true}></IgrCheckbox>
```

```html
<igc-checkbox indeterminate></igc-checkbox>
```

```razor
<IgbCheckbox Indeterminate="true" />
```

`sample="/inputs/checkbox/indeterminate", height="100", alt="{Platform} Checkbox の例"`



### 必須

`Required` プロパティを使用して、チェックボックスを必須としてマークできます。

```tsx
<IgrCheckbox required={true}></IgrCheckbox>
```

```html
<igc-checkbox required></igc-checkbox>
```

```razor
<IgbCheckbox Required="true" />
```

### 無効

`Invalid` 属性を使用して、チェックボックスを無効としてマークすることができます。

```tsx
<IgrCheckbox invalid={true}></IgrCheckbox>
```

```html
<igc-checkbox invalid></igc-checkbox>
```

```razor
<IgbCheckbox Invalid="true" />
```

### オフ

チェックボックスをオフにするには、`Disabled` 属性を使用します。

```tsx
<IgrCheckbox disabled={true}></IgrCheckbox>
```

```html
<igc-checkbox disabled></igc-checkbox>
```

```razor
<IgbCheckbox Disabled="true" />
```

`sample="/inputs/checkbox/disabled", height="100", alt="{Platform} Checkbox の例"`



### フォーム

`Form` でチェックボックスを使用する場合は、`name` と `value` の属性を使用できます。

```tsx
<IgrCheckbox name="wifi" value="enabled"></IgrCheckbox>
```

```html
<igc-checkbox name="wifi" value="enabled"></igc-checkbox>
```

```razor
<IgbCheckbox Name="wifi" Value="enabled" />
```

## スタイル設定

`Checkbox` コンポーネントは、スタイル設定に使用できる 4 つの CSS パーツを公開します。

|名前|説明|
|--|--|
| `base` | チェックボックスの基本ラッパー。 |
| `control` | チェックボックスの入力要素。 |
| `indicator` | チェックボックスのインジケーター アイコン。 |
| `label` | チェックボックスのラベル。 |

この 4 つの CSS パーツを使用すると、Checkbox のスタイルを完全に制御できます。

```css
igc-checkbox::part(indicator) {
  stroke: var(--ig-secondary-500-contrast);
}

igc-checkbox::part(control checked)::after {
  border-radius: 4px;
  background: var(--ig-secondary-500);
}
```

`sample="/inputs/checkbox/styling", height="100", alt="{Platform} Checkbox スタイル設定の例"`

## API リファレンス

 - `Checkbox`
 - `Checked`
 - `Disabled`
 - [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

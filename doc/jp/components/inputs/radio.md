---
title: Radio と Radio Group
_description: $ProductName$ Radio Button と Radio Group コントロールを使用すると、開発者はユーザーが選択できるオプションのリストをシームレスに表示して、テンプレート駆動型のリアクティブ フォームでより優れた UI を実現できます。
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Radio Button components, $Platform$ Radio Button controls, $Platform$ Radio Group component, $Platform$ Radio Group control, UI コントロール, $Platform$ ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ $Platform$ コンポーネント スイート, ネイティブ $Platform$ コントロール, ネイティブ $Platform$ コンポーネント ライブラリ, $Platform$ Radio Button コンポーネント, $Platform$ Radio Button コントロール
mentionedTypes: ['Radio', 'RadioGroup', 'Form']
_language: ja
---

# $Platform$ Radio & Radio Group (ラジオとラジオ グループ)

$ProductName$ Radio コンポーネントを使用すると、ユーザーは、並べて表示される利用可能なオプションのセットから 1 つのオプションを選択できます。

## $ProductName$ Radio の例

<code-view style="height: 205px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/radio-group" alt="$Platform$ Radio & Radio Group の例"
           github-src="inputs/radio/group">
</code-view>

<div class="divider--half"></div>

### 使用方法

<!-- Blazor -->

`Radio` コンポーネントの使用を開始するには、最初に次のようにそのモジュールをインポートする必要があります:

```razor
IgbRadioModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

`Radio` ウェブ コンポーネントの使用を開始するには、最初に次のコマンドを入力して $ProductName $をインストールする必要があります。

```cmd
npm install igniteui-webcomponents
```

次の手順は、`Radio` と `RadioGroup` を typescript ファイルにインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録することです。

```ts
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';

defineComponents(IgcRadioComponent, IgcRadioGroupComponent);
```

<!-- end: WebComponents -->

ラジオの使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio>Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

> [!WARNING]
> `Radio` コンポーネントは標準の `<form>` 要素では機能しません。代わりに `Form` を使用してください。

## 例

### ラベル

`Radio` に意味のあるラベルを付けるには、開始タグと終了タグの間にテキストを配置するだけです。

```html
<igc-radio>Apple</igc-radio>
```

```razor
<IgbRadio>Apple</IgbRadio>
```

`label-position` 属性を設定することにより、`Radio` ボタンの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。


```html
<igc-radio label-position="before">Apple</igc-radio>
```

```razor
<IgbRadio LabelPosition="@RadioLabelPosition.Before">Apple</IgbRadio>
```

`Radio` には、ラジオの外部の要素でラベルを付けることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。

```html
<span id="radio-label">Label</span>
<igc-radio aria-labelledby="radio-label"></igc-radio>
```

```razor
<span id="radio-label">Label</span>
<IgbRadio AriaLabelledBy="radio-label" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-label"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/label">
</code-view>

### チェック済み

ラジオをオンに切り替えるには、`checked` 属性を使用します。

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio checked>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio Checked="true">Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-group"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/group">
</code-view>

### 無効

`invalid` 属性を使用して、ラジオを無効としてマークします。

```html
<igc-radio invalid></igc-radio>
```

```razor
<IgbRadio Invalid="true" />
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-invalid"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/invalid">
</code-view>

### オフ

ラジオをオフにするには、`disabled` 属性を使用します。

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio disabled>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio Disabled="true">Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-disabled"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/disabled">
</code-view>

### グループの配置

`RadioGroup` を使用すると、`alignment` 属性を使用して、含まれているラジオ ボタンの配置方向を簡単に変更できます。許可される値は、`vertical` (デフォルト) と `horizontal` です。

```html
<igc-radio-group alignment="horizontal">
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup Alignment="@RadioGroupAlignment.Horizontal">
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio>Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-alignment"
           alt="$Platform$ Radio の例"
           github-src="inputs/radio/alignment">
</code-view>

### フォーム

`Form` で無線を使用する場合は、`name` 属性と `value` 属性を使用してください。

```html
<igc-radio-group>
  <igc-radio name="option1" value="apple">Apple</igc-radio>
  <igc-radio name="option2" value="banana">Banana</igc-radio>
  <igc-radio name="option4" value="mango">Mango</igc-radio>
  <igc-radio name="option3" value="banana">Orange</igc-radio>
</igc-radio-group>
```

## スタイル設定

`Radio` コンポーネントは、いくつかの CSS パーツ (`base`、`control`、および `label`) を公開して、スタイルを完全に制御できるようにします。グローバル パレットの色を変更して、ラジオ コンポーネントの色を変更することもできます。

```scss
:root {
    --igc-primary-h: 60deg;
    --igc-primary-s: 100%;
    --igc-primary-l: 25%;
}

igc-radio::part(control) {
    --size: 18px;
}
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-styling"
           alt="$Platform$ Radio スタイル設定"
           github-src="inputs/radio/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

* `Radio`
* `RadioGroup`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## その他のリソース


* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

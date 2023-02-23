---
title: Radio と Radio Group
_description: {ProductName} Radio Button と Radio Group コントロールを使用すると、開発者はユーザーが選択できるオプションのリストをシームレスに表示して、テンプレート駆動型のリアクティブ フォームでより優れた UI を実現できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Radio Button components, {Platform} Radio Button controls, {Platform} Radio Group component, {Platform} Radio Group control, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Radio Button コンポーネント, {Platform} Radio Button コントロール
mentionedTypes: ['Radio', 'RadioGroup', 'Form']
_language: ja
---

# {Platform} Radio & Radio Group (ラジオとラジオ グループ)

{ProductName} Radio コンポーネントを使用すると、ユーザーは、並べて表示される利用可能なオプションのセットから 1 つのオプションを選択できます。


## {ProductName} Radio の例

`sample="/inputs/radio/group", height="100", alt="{Platform} Radio & Radio Group の例"`


<div class="divider--half"></div>

### 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```

`Radio` および `RadioGroup` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRadioComponent, IgcRadioGroupComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Radio` および `RadioGroup` とそれぞれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrRadioModule, IgrRadio, IgrRadioGroupComponent, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrRadioModule.register();
IgrRadioGroupModule.register();
```
<!-- end: React -->

<!-- Blazor -->

`Radio` と `RadioGroup` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbRadioModule),
  typeof(IgbRadioGroupModule)
);
```

また、追加の CSS ファイルをリンクして、スタイルを `Radio` および `RadioGroup` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

`Radio` の使用を開始する最も簡単な方法は次のとおりです:

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

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

```tsx
<IgrRadio><span>Label</span></IgrRadio>
```

```html
<igc-radio>Apple</igc-radio>
```

```razor
<IgbRadio>Apple</IgbRadio>
```

`label-position` 属性を設定することにより、`Radio` ボタンの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。

```tsx
<IgrRadio labelPosition="before"><span>Apple</span></IgrRadio>
```

```html
<igc-radio label-position="before">Apple</igc-radio>
```

```razor
<IgbRadio LabelPosition="@RadioLabelPosition.Before">Apple</IgbRadio>
```

`Radio` には、ラジオの外部の要素でラベルを付けることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。


```tsx
<span id="radio-label">Label</span>
<IgrRadio ariaLabelledby="radio-label"></IgrRadio>
```

```html
<span id="radio-label">Label</span>
<igc-radio aria-labelledby="radio-label"></igc-radio>
```

```razor
<span id="radio-label">Label</span>
<IgbRadio AriaLabelledBy="radio-label" />
```

`sample="/inputs/radio/label", height="100", alt="{Platform} Radio の例"`



### チェック済み

ラジオをオンに切り替えるには、`checked` 属性を使用できます。

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" checked="true"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

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

`sample="/inputs/radio/group", height="100", alt="{Platform} Radio の例"`



### 無効

`invalid` 属性を使用して、ラジオを無効としてマークできます。

```tsx
<IgrRadio invalid="true"></IgrRadio>
```

```html
<igc-radio invalid></igc-radio>
```

```razor
<IgbRadio Invalid="true" />
```

`sample="/inputs/radio/invalid", height="205", alt="{Platform} Radio の例"`



### オフ

ラジオをオフにするには、`disabled` 属性を使用できます。

```tsx
<IgrRadioGroup>
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" disabled="true"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

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

`sample="/inputs/radio/disabled", height="100", alt="{Platform} Radio の例"`



### グループの配置

`RadioGroup` を使用すると、`alignment` 属性を使用して、含まれているラジオ ボタンの配置方向を簡単に変更できます。許可される値は、`vertical` (デフォルト) と `horizontal` です。

```tsx
<IgrRadioGroup alignment="horizontal">
  <IgrRadio value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio value="banana" disabled="true"><span>Banana</span></IgrRadio>
  <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

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

`sample="/inputs/radio/alignment", height="60", alt="{Platform} Radio の例"`



### フォーム

`Form` で無線を使用する場合は、`name` 属性と `value` 属性を使用できます。

```tsx
<IgrRadioGroup>
  <IgrRadio name="option1" value="apple"><span>Apple</span></IgrRadio>
  <IgrRadio name="option2" value="banana"><span>Banana</span></IgrRadio>
  <IgrRadio name="option3" value="Mango"><span>Mango</span></IgrRadio>
  <IgrRadio name="option4" value="orange"><span>Orange</span></IgrRadio>
</IgrRadioGroup>
```

```html
<igc-radio-group>
  <igc-radio name="option1" value="apple">Apple</igc-radio>
  <igc-radio name="option2" value="banana">Banana</igc-radio>
  <igc-radio name="option4" value="mango">Mango</igc-radio>
  <igc-radio name="option3" value="banana">Orange</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup>
    <IgbRadio Name="option1" Value="apple">Apple</IgbRadio>
    <IgbRadio Name="option2" Value="banana">Banana</IgbRadio>
    <IgbRadio Name="option3" Value="mango">Mango</IgbRadio>
    <IgbRadio Name="option4" Value="orange">Orange</IgbRadio>
</IgbRadioGroup>
```

## スタイル設定

`Radio` コンポーネントは、いくつかの CSS パーツ (`base`、`control`、および `label`) を公開して、スタイルを完全に制御できるようにします。グローバル パレットの色を変更して、ラジオ コンポーネントの色を変更することもできます。

```scss
:root {
    --ig-primary-h: 60deg;
    --ig-primary-s: 100%;
    --ig-primary-l: 25%;
}

igc-radio::part(control) {
    --size: 18px;
}
```

`sample="/inputs/radio/styling", height="205", alt="{Platform} Radio スタイル設定"`



<div class="divider--half"></div>


## API リファレンス

 - `Form`
 - `RadioGroup`
 - `Radio`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
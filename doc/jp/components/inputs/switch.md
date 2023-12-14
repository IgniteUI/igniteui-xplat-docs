---
title: {Platform} Switch コンポーネント – {ProductName}
_description: {ProductName} Switch コンポーネントを使用すると、開発者はアプリケーション内でバイナリのオン/オフまたは true/false のデータ入力関数を使用できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Switch components, {Platform} Switch controls, UI コントロール, {Platform} ウィジェット, web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Switch コンポーネント, {Platform} Switch コントロール
mentionedTypes: ['Switch']
_language: ja
---

# {Platform} Switch (スイッチ)

{ProductName} Switch コンポーネントは、iOS のスイッチ コンポーネントと同様に動作するバイナリ選択の選択コンポーネントです。

## {Platform} Switch の例

`sample="/inputs/switches/overview", height="100", alt="{Platform} Switch の例"`


<div class="divider--half"></div>

## 使用方法

`Switch` コンポーネントにより、オン/オフ状態を切り替えることができます。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`Switch` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcSwitchComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSwitchComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Switch` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrSwitchModule, IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrSwitchModule.register();
```
<!-- end: React -->

<!-- Blazor -->

まず、次のコマンドを実行して {ProductName} をインストールする必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSwitchModule));
```

また、追加の CSS ファイルをリンクして、スタイルを `Switch` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

`Switch` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-switch></igc-switch>
```

```tsx
<IgrSwitch></IgrSwitch>
```

```razor
<IgbSwitch />
```

>[!WARNING]
>`Switch` コンポーネントは標準の `<form>` 要素では機能しません。代わりに `Form` を使用してください。

## 例

### ラベル

スイッチに意味のあるラベルを付けるには、開始タグと終了タグの間にテキストを配置するだけです。

```tsx
<IgrSwitch><span>Label</span></IgrSwitch>
```

```html
<igc-switch>Label</igc-switch>
```

```razor
<IgbSwitch>Label</IgbSwitch>
```

スイッチの `LabelPosition` 属性を設定することにより、スイッチの切り替えの前または後にラベルを配置するかどうかを指定できます。許可される値は、`before` と `after` (デフォルト) です。

```tsx
<IgrSwitch ariaLabelledby="switchLabel" labelPosition="Before" ><span id="switch-label">Label</span></IgrSwitch>
```

```html
<igc-switch label-position="before">Label</igc-switch>
```

```razor
<IgbSwitch LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbSwitch>
```

スイッチには、スイッチの外部の要素でラベルを付けることもできます。この場合、ユーザーはニーズに応じてラベルの位置とスタイルを完全に制御できます。

```tsx
<span id="switch-label">Label</span>
<IgrSwitch ariaLabelledby="switchLabel"></IgrSwitch>
```

```html
<span id="switch-label">Label</span>
<igc-switch aria-labelledby="switch-label"></igc-switch>
```

```razor
<span id="switch-label>Label</span>
<IgbSwitch AriaLabelledBy="switch-label" />
```

`sample="/inputs/switches/label", height="100", alt="{Platform} Avatar の例"`



### チェック済み

スイッチをオンに切り替えるには、`checked` 属性を使用できます。

```tsx
<IgrSwitch checked="true"></IgrSwitch>
```

```html
<igc-switch checked></igc-switch>
```

```razor
<IgbSwitch Checked="true" />
```

`sample="/inputs/switches/checking", height="100", alt="{Platform} Avatar の例"`



### 必須

`required` 属性を使用して、スイッチを必須としてマークできます。

```tsx
<IgrSwitch required="true"></IgrSwitch>
```

```html
<igc-switch required></igc-switch>
```

```razor
<IgbSwitch Required="true" />
```

### 無効

`invalid` 属性を使用して、スイッチを無効としてマークできます。

```html
<igc-switch invalid></igc-switch>
```

```razor
<IgbSwitch Invalid="true" />
```

### オフ

スイッチをオフにするには、`disabled` 属性を使用できます。

```tsx
<IgrSwitch disabled="true"></IgrSwitch>
```

```html
<igc-switch disabled></igc-switch>
```

```razor
<IgbSwitch Disabled="true" />
```

`sample="/inputs/switches/disabled", height="100", alt="{Platform} Avatar の例"`



### フォーム

`Form` でスイッチを使用する場合は、`name` と `value` の属性を使用できます。

```tsx
<IgrSwitch name="wifi" value="enabled"></IgrSwitch>
```

```html
<igc-switch name="wifi" value="enabled"></igc-switch>
```

```razor
<IgbSwitch Name="wifi" Value="enabled" />
```

## スタイル設定

スイッチ コンポーネントは、いくつかの CSS パーツ (`base`、`control`、`indicator`、および `label`) を公開して、スタイルを完全に制御できるようにします。

```css
igc-switch::part(control) {
  background: beige;
  border-radius: 0;
}

igc-switch::part(thumb) {
  background: olive;
  border-radius: 2px;
  box-shadow: none;
}
```

<div class="divider--half"></div>


## API リファレンス

 - `Form`
 - `LabelPosition`
 - `Switch`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
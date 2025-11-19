---
title: {Platform} ボタン グループ コンポーネント | {ProductName}
_description: {Platform} ボタン グループ コンポーネント - {Platform} 一連のトグル ボタンを使用して、レイアウトや選択などの機能を公開します。
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Button Group Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} ボタン グループ コンポーネント, インフラジスティックス
_license: MIT
mentionedTypes: ["ToggleButton", "ButtonGroup"]
_language: ja
---

# {Platform} Button Group (ボタン グループ) の概要

{Platform} Button Group コンポーネントは、`ToggleButton` を、水平 / 垂直配置、単一 / 複数選択、切り替えを備えたスタイル付きボタン グループに編成するために使用されます。

## {Platform} ボタンの例

`sample="/inputs/button-group/overview", height="85", alt="{Platform} Button Group の例"`

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

次に、以下のように、`ButtonGroup` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```ts
import { defineComponents, IgcButtonGroupComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonGroupComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`ButtonGroup` と必要な CSS をインポートする必要があります:

```tsx
import { IgrButtonGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->
`ButtonGroup` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonGroupModule));
```

また、`ButtonGroup` コンポーネントにスタイルを適用するために、追加の CSS ファイルをリンクする必要があります。以下は、**Blazor WebAssembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

{ProductName} ボタン グループがインポートされたので、`ButtonGroup` とそのボタンの基本構成を開始できます。

`ButtonGroup` セレクターを使用して、`ToggleButton` をラップし、ボタン グループに表示します。デフォルトでボタンを選択したい場合、`Selected` 属性を使用します。

```html
 <igc-button-group>
    <igc-toggle-button value="left">
        <igc-icon name="format_align_left" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="center">
        <igc-icon name="format_align_center" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="right">
        <igc-icon name="format_align_right" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="justify" selected>
        <igc-icon name="format_align_justify" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

```tsx
<IgrButtonGroup>
    <IgrToggleButton value="left">
        <IgrIcon name="format_align_left" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
    <IgrToggleButton value="center">
        <IgrIcon name="format_align_center" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
    <IgrToggleButton value="right">
        <IgrIcon name="format_align_right" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
    <IgrToggleButton value="justify" selected={true}>
        <IgrIcon name="format_align_justify" collection="material"/>
        <IgrRipple/>
    </IgrToggleButton>
</IgrButtonGroup>
```

```razor
<IgbButtonGroup>
    <IgbToggleButton Value="left">
        <IgbIcon @ref="iconRef" IconName="format_align_left" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="center">
        <IgbIcon IconName="format_align_center" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="right">
        <IgbIcon IconName="format_align_right" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="justify" Selected="true">
        <IgbIcon IconName="format_align_justify" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
</IgbButtonGroup>
```

## コード例

### 配置
`Alignment` プロパティを使用して、ボタン グループ内のボタンの方向を設定します。

`sample="/inputs/button-group/alignment", height="220", alt="{Platform} Button Group の配置例"`

### 選択
{ProductName} `ButtonGroup` の選択を構成するには、その `Selection` プロパティを使用できます。このプロパティは、次の 3 つのモードを受け入れます: 
- **single** - ボタン グループのデフォルトの選択モードです。ユーザーは単一のボタンを選択/選択解除できます。
- **single-required** - ラジオ グループの動作を模倣します。選択できるボタンは 1 つだけであり、最初に選択すると、ユーザーの操作を通じて選択を解除することはできません。
- **multiple** - グループ内の複数のボタンを選択または選択解除できます。

以下のサンプルは、公開された `ButtonGroup` 選択モードを示しています。

`sample="/inputs/button-group/selection", height="170", alt="{Platform} Button Group の選択例"`


`ToggleButton` は、`Selected` 属性または `ButtonGroup` の `SelectedItems` 属性を通じて選択済みとしてマークできます。

```html
<igc-button-group selected-items='["bold"]'>
    <igc-toggle-button value="bold">
        <igc-icon name="bold" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="italic">
        <igc-icon name="italic" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="underlined">
        <igc-icon name="underlined" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

```tsx
<IgrButtonGroup selectedItems={['bold']}>
    <IgrToggleButton value="bold">
        <IgrIcon name="bold" collection="material" />
        <IgrRipple />
    </IgrToggleButton>
    <IgrToggleButton value="italic">
        <IgrIcon name="italic" collection="material" />
        <IgrRipple />
    </IgrToggleButton>
    <IgrToggleButton value="underlined">
        <IgrIcon name="underlined" collection="material" />
        <IgrRipple />
    </IgrToggleButton>
</IgrButtonGroup>
```

```razor
<IgbButtonGroup SelectedItems='["bold"]'>
    <IgbToggleButton Value="bold">
        <IgbIcon @ref="iconRef" IconName="bold" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="italic">
        <IgbIcon IconName="italic" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="underlined">
        <IgbIcon IconName="underlined" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
</IgbButtonGroup>
```

> [!Note]
> `ButtonGroup` の `SelectedItems` プロパティを使用するには、`ToggleButton` `Value` 属性の設定が必須です。

### サイズ
`--ig-size` CSS カスタム プロパティを使用して、ボタン グループのサイズを制御できます。

`sample="/inputs/button-group/size", height="80", alt="{Platform} Button Group サイズの例"`

## スタイル設定

`ButtonGroup` コンポーネントは、ボタン グループ コンテナーのスタイルを設定できる `group` CSS パーツを公開します。 
また、`ToggleButton` は、ボタン要素のスタイルを設定するために使用できる `toggle` CSS パーツを提供します。

```css
igc-button-group::part(group) {
  background-color: var(--ig-primary-500);
  padding: 8px;
}

igc-toggle-button::part(toggle) {
  color: var(--ig-secondary-300);
}
```

`sample="/inputs/button-group/styling", height="200", alt="{Platform} Button Group スタイル設定の例"`

## API リファレンス

- `ButtonGroup`
- `ToggleButton`
- `Ripple`
- `Icon`
- [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

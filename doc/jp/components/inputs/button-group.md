---
title: {Platform} ボタン グループ コンポーネント | {ProductName}
_description: {Platform} ボタン グループ コンポーネント - {Platform} 一連のトグル ボタンを使用して、レイアウトや選択などの機能を公開します。
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Button Group Components, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} ボタン グループ コンポーネント, インフラジスティックス
mentionedTypes: ['ToggleButton', 'ButtonGroup']
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

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

{ProductName} ボタン グループがインポートされたので、`ButtonGroup` とそのボタンの基本構成を開始できます。

`ButtonGroup` セレクターを使用して、`ToggleButton` をラップし、ボタン グループに表示します。デフォルトでボタンを選択したい場合、`selected` 属性を使用します。

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

## コード例

### 配置
`alignment` プロパティを使用して、ボタン グループ内のボタンの方向を設定します。

`sample="/inputs/button-group/alignment", height="220", alt="{Platform} Button Group の配置例"`

### 選択
{ProductName} `ButtonGroup` の選択を構成するには、その `selection` プロパティを使用できます。このプロパティは、次の 3 つのモードを受け入れます: 
- **single** - ボタン グループのデフォルトの選択モードです。ユーザーは単一のボタンを選択/選択解除できます。
- **single-required** - ラジオ グループの動作を模倣します。選択できるボタンは 1 つだけであり、最初に選択すると、ユーザーの操作を通じて選択を解除することはできません。
- **multiple** - グループ内の複数のボタンを選択または選択解除できます。

以下のサンプルは、公開された `ButtonGroup` 選択モードを示しています。

`sample="/inputs/button-group/selection", height="170", alt="{Platform} Button Group の選択例"`

`ToggleButton` は、`selected` 属性または `ButtonGroup` の `selectedItems` 属性を通じて選択済みとしてマークできます。

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

    <igc-toggle-button value="underline">
        <igc-icon name="underline" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

> [!Note]
> `ButtonGroup` の `selectedItems` プロパティを使用するには、`ToggleButton` 値属性の設定が必須です。
### サイズ
`--ig-size` CSS カスタム プロパティを使用して、ボタン グループのサイズを制御できます。

`sample="/inputs/button-group/size", height="80", alt="{Platform} Button Group サイズの例"`

## スタイル設定

`ButtonGroup` コンポーネントは、ボタン グループ コンテナーのスタイルを設定できる `group` CSS パーツを公開します。 
また、`ToggleButton` は、ボタン要素のスタイルを設定するために使用できる `toggle` CSS パーツを提供します。

`sample="/inputs/button-group/styling", height="200", alt="{Platform} Button Group スタイル設定の例"`

## API リファレンス

- `ButtonGroup`
- `ToggleButton`
- `Ripple`
- `Icon`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

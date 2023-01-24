---
title: {Platform} Dropdown List コンポーネント | {ProductName}
_description: {Platform} Dropdown List コンポーネントを使用すると、インタラクティブ機能を追加し、アプリ内の項目のスクロール可能なリストにスタイル設定オプションを表示できます。今すぐをお試しください。
_keywords: {Platform}, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} ドロップダウン コンポーネント, インフラジスティックス
mentionedTypes: ['Dropdown', 'DropdownItem', 'DropdownHeader', 'DropdownGroup']
_language: ja
---

# {Platform} Dropdown List (ドロップダウン リスト) コンポーネントの概要

Feature-rich, the {Platform} Dropdown list offers out-of-the-box filtering, accessibility, preselected values, flexible data binding, grouping, UI customization, and more. What this component practically does is to effectively and easily replace HTML select tags, enabling users to quickly choose a non-editable value from a predefined set of several options. 

The Ignite UI for {Platform} Dropdown component displays an toggle list of predefined values and allows users to easily select a single option item with a click. It can be quickly configured to act as a {Platform} dropdown menu or you can simply use it to deliver more useful visual information by grouping data. Also, with grouping you can use both flat and hierarchical data.

With our component, you get all the functions and customization options you need for your project – styling customizations, {Platform} Dropdown placement options, templates and ability to change what and how is displayed in the header, footer, body, list, etc. 

## {Platform} Dropdown の例

The following {Platform} Dropdown List example demonstrates the use of simple interactive {Platform} Dropdown menu in action with three basic options to choose from. See how it works.

<code-view style="height: 220px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-overview"
           alt="{Platform} Dropdown の例"
           github-src="inputs/dropdown/overview">
</code-view>

## {ProductName} で Dropdown List を使用する方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

```ts
import {
    defineComponents,
    IgcDropdownComponent
} from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDropdownComponent);
```
<!-- end: WebComponents -->

<!-- React -->
まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Dropdown` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrDropdownModule, IgrDropdown } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrDropdownModule.register();
```
<!-- end: React -->

<!-- Blazor -->

`Dropdown` を使用する前に、次のように登録する必要があります:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDropdownModule));
```

<!-- end: Blazor -->

`Dropdown` の使用を開始する最も簡単な方法は次のとおりです:

```html
<igc-dropdown>
    <igc-button slot="target">Options</igc-button>
    <igc-dropdown-item>Option 1</igc-dropdown-item>
    <igc-dropdown-item>Option 2</igc-dropdown-item>
    <igc-dropdown-item>Option 3</igc-dropdown-item>
</igc-dropdown>
```

### Target (ターゲット)

{Platform} ドロップダウン リストは、ターゲットに対して相対的に配置されます。`target` スロットを使用すると、クリック時に `open` プロパティを切り替える組み込みコンポーネントを提供できます。場合によっては、外部ターゲットを使用するか、別のイベントを使用してドロップダウンの開始を切り替えることができます。これは、ターゲットをパラメーターとして提供できる `Show`、`Hide`、および `Toggle` メソッドを使用して実現できます。デフォルトでは、ドロップダウン リストは CSS の `absolute` 位置を使用します。ターゲット要素が固定コンテナー内にあるが、ドロップダウンがそうではない場合、{Platform} ドロップダウンの `PositionStrategy` を `fixed` に設定する必要があります。ドロップダウン リストは、その内容に基づいて自動的にサイズ変更されます。リストの幅をターゲットと同じにする場合は、`SameWidth` プロパティを **true** に設定する必要があります。

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-target"
           alt="{Platform} Dropdown Target の例"
           github-src="inputs/dropdown/target">
</code-view>

### 位置

{Platform} ドロップダウンの優先配置は、`Placement` プロパティを使用して設定できます。ドロップダウンのデフォルトの配置は `bottom-start` です。`Flip` プロパティは、指定された配置でドロップダウンを表示するのに十分なスペースがない場合に配置を反転するかどうかを決定します。{Platform} ドロップダウン リストからそのターゲットまでの距離は、`Distance` プロパティを使用して指定できます。

<code-view style="height: 520px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-position"
           alt="{Platform} Dropdown Position の例"
           github-src="inputs/dropdown/position">
</code-view>

### 選択

ユーザーが項目を選択すると、`Dropdown` は `igcChange` イベントを発行します。ドロップダウンの `Select` メソッドを使用すると、インデックスまたは値で項目を選択できます。

### Item (項目)

`DropdownItem` は、ドロップダウン リストで選択可能な項目を表します。`Selected` プロパティを設定することにより、選択した項目を事前定義できます。`Disabled` プロパティを使用して、項目を無効にして選択できないようにすることもできます。`DropdownItem` には、項目のコンテンツを指定できるデフォルトのスロットがあります。`prefix` スロットと `suffix` スロットを使用して、コンテンツの前後に描画されるカスタム コンテンツを提供することもできます。`Value` プロパティを使用すると、項目にカスタム値を提供できます。`Value` が設定されていない場合は、項目のテキスト コンテンツに解決されます。

<code-view style="height: 220px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-item"
           alt="{Platform} Dropdown Item の例"
           github-src="inputs/dropdown/item">
</code-view>

### Header (ヘッダー)

`DropdownHeader` を使用して、項目のグループのヘッダーを提供できます。

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-header"
           alt="{Platform} Dropdown Header の例"
           github-src="inputs/dropdown/header">
</code-view>

### Group (グループ)

{Platform} ドロップダウンの項目は、`DropdownGroup` を使用してグループ化することもできるため、ユーザーは個別のカテゴリを簡単に区別できます。See it in action in this {Platform} Dropdown List example:

<code-view style="height: 420px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-group"
           alt="{Platform} Dropdown Group の例"
           github-src="inputs/dropdown/group">
</code-view>

### Scroll Strategy (スクロール方法)

`ScrollStrategy` プロパティは、ターゲット要素のコンテナーをスクロールする際のコンポーネントの動作を決定します。デフォルト値は `scroll` です。これは、ドロップダウンがターゲットとともにスクロールされることを意味します。プロパティを `block` に設定すると、ドロップダウンが開いている場合にスクロールがブロックされます。プロパティを `close` ように設定することもできます。これは、スクロール時にドロップダウンが自動的に閉じられることを意味します。

### Keep Open (開いたままにする)

デフォルトでは、ユーザーがドロップダウンの外側をクリックするか項目を選択すると、ドロップダウンは自動的に閉じられます。`KeepOpenOnOutsideClick` プロパティと `KeepOpenOnSelect` プロパティを使用して、この動作を防ぐことができます。

## スタイル設定

公開された CSS 部分を使用して、ドロップダウンとその項目の外観を変更できます。`Dropdown` は `base` 部分と `list` 部分を公開し、`DropdownItem` は `prefix`、`content`、`suffix` 部分を公開し、`DropdownGroup` は `label` 部分を公開します。

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-styling"
           alt="{Platform} Dropdown Styling の例"
           github-src="inputs/dropdown/styling">
</code-view>

## API リファレンス

* `Dropdown`
* `DropdownItem`
* `DropdownHeader`
* `DropdownGroup`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
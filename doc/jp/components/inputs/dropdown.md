---
title: {Platform} Dropdown List コンポーネント | {ProductName}
_description: {Platform} Dropdown List コンポーネントを使用すると、インタラクティブ機能を追加し、アプリ内の項目のスクロール可能なリストにスタイル設定オプションを表示できます。今すぐをお試しください。
_keywords: {Platform}, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} ドロップダウン コンポーネント, インフラジスティックス
mentionedTypes: ['Dropdown', 'DropdownItem', 'DropdownHeader', 'DropdownGroup']
_language: ja
---

# {Platform} Dropdown List (ドロップダウン リスト) コンポーネントの概要

機能豊富な {Platform} ドロップダウン リストは、すぐに使用できるフィルタリング、アクセシビリティ、事前選択された値、柔軟なデータ バインディング、グループ化、UI カスタマイズなどを提供します。このコンポーネントが実際に行うことは、HTML 選択タグを効果的かつ簡単に置き換えることであり、ユーザーは事前定義されたいくつかのオプションのセットから編集不可能な値をすばやく選択できます。 

Ignite UI for {Platform} ドロップダウン コンポーネントは、事前定義された値のトグル リストを表示し、ユーザーが 1 つのオプション項目をクリックして簡単に選択できるようにします。{Platform} ドロップダウン メニューとして機能するようにすばやく構成することも、データをグループ化してより有用な視覚情報を提供するために使用することもできます。また、グループ化を使用すると、フラット データと階層データの両方を使用できます。

当社のコンポーネントを使用すると、プロジェクトに必要なすべての機能とカスタマイズ オプション (スタイルのカスタマイズ、{Platform} ドロップダウン配置オプション、テンプレート、およびヘッダー、フッター、本文、リストなどに表示されるものと方法を変更する機能) を取得できます。 

## {Platform} Dropdown の例

次の {Platform} ドロップダウン リストの例は、3 つの基本的なオプションから選択できる単純なインタラクティブな {Platform} ドロップダウン メニューを実際に使用する方法を示しています。この {Platform} ドロップダウン リストの例で実際の動作をご覧ください。

`sample="/inputs/dropdown/overview", height="220", alt="{Platform} Dropdown の例"`

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

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

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

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。
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

```tsx
<IgrDropdown>
    <div slot="target">
        <IgrButton><span>Options</span></IgrButton>
    </div>
    <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
    <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
    <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
</IgrDropdown>
```

### Target (ターゲット)

{Platform} ドロップダウン リストは、ターゲットに対して相対的に配置されます。`target` スロットを使用すると、クリック時に `open` プロパティを切り替える組み込みコンポーネントを提供できます。場合によっては、外部ターゲットを使用するか、別のイベントを使用してドロップダウンの開始を切り替えることができます。これは、ターゲットをパラメーターとして提供できる `Show`、`Hide`、および `Toggle` メソッドを使用して実現できます。デフォルトでは、ドロップダウン リストは CSS の `absolute` 位置を使用します。ターゲット要素が固定コンテナー内にあるが、ドロップダウンがそうではない場合、{Platform} ドロップダウンの `PositionStrategy` を `fixed` に設定する必要があります。ドロップダウン リストは、その内容に基づいて自動的にサイズ変更されます。リストの幅をターゲットと同じにする場合は、`SameWidth` プロパティを **true** に設定する必要があります。

`sample="/inputs/dropdown/target", height="200", alt="{Platform} Dropdown Target の例"`



### 位置

{Platform} ドロップダウンの優先配置は、`Placement` プロパティを使用して設定できます。ドロップダウンのデフォルトの配置は `bottom-start` です。`Flip` プロパティは、指定された配置でドロップダウンを表示するのに十分なスペースがない場合に配置を反転するかどうかを決定します。{Platform} ドロップダウン リストからそのターゲットまでの距離は、`Distance` プロパティを使用して指定できます。

`sample="/inputs/dropdown/position", height="520", alt="{Platform} Dropdown Position の例"`



### 選択

ユーザーが項目を選択すると、`Dropdown` は `Change` イベントを発行します。ドロップダウンの `Select` メソッドを使用すると、インデックスまたは値で項目を選択できます。

### Item (項目)

`DropdownItem` は、ドロップダウン リストで選択可能な項目を表します。`Selected` プロパティを設定することにより、選択した項目を事前定義できます。`Disabled` プロパティを使用して、項目を無効にして選択できないようにすることもできます。`DropdownItem` には、項目のコンテンツを指定できるデフォルトのスロットがあります。`prefix` スロットと `suffix` スロットを使用して、コンテンツの前後に描画されるカスタム コンテンツを提供することもできます。`Value` プロパティを使用すると、項目にカスタム値を提供できます。`Value` が設定されていない場合は、項目のテキスト コンテンツに解決されます。

`sample="/inputs/dropdown/item", height="220", alt="{Platform} Dropdown Item の例"`



### Header (ヘッダー)

`DropdownHeader` を使用して、項目のグループのヘッダーを提供できます。

`sample="/inputs/dropdown/header", height="250", alt="{Platform} Dropdown Header の例"`



### Group (グループ)

{Platform} ドロップダウンの項目は、`DropdownGroup` を使用してグループ化することもできるため、ユーザーは個別のカテゴリを簡単に区別できます。この {Platform} ドロップダウン リストの例で実際の動作をご覧ください。

`sample="/inputs/dropdown/group", height="420", alt="{Platform} Dropdown Group の例"`



### Scroll Strategy (スクロール方法)

`ScrollStrategy` プロパティは、ターゲット要素のコンテナーをスクロールする際のコンポーネントの動作を決定します。デフォルト値は `scroll` です。これは、ドロップダウンがターゲットとともにスクロールされることを意味します。プロパティを `block` に設定すると、ドロップダウンが開いている場合にスクロールがブロックされます。プロパティを `close` ように設定することもできます。これは、スクロール時にドロップダウンが自動的に閉じられることを意味します。

### Keep Open (開いたままにする)

デフォルトでは、ユーザーがドロップダウンの外側をクリックするか項目を選択すると、ドロップダウンは自動的に閉じられます。`KeepOpenOnOutsideClick` プロパティと `KeepOpenOnSelect` プロパティを使用して、この動作を防ぐことができます。

## スタイル設定

公開された CSS 部分を使用して、ドロップダウンとその項目の外観を変更できます。`Dropdown` は `base` 部分と `list` 部分を公開し、`DropdownItem` は `prefix`、`content`、`suffix` 部分を公開し、`DropdownGroup` は `label` 部分を公開します。

`sample="/inputs/dropdown/styling", height="320", alt="{Platform} Dropdown Styling の例"`



## API リファレンス

* `Dropdown`
* `DropdownItem`
* `DropdownHeader`
* `DropdownGroup`


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
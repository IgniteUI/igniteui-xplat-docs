---
title: $Platform$ Dropdown コンポーネント | $ProductName$
_description: インタラクティブ機能を追加し、アプリ内の項目のスクロール可能なリストにスタイル設定オプションを表示します。今すぐ $ProductName$ のドロップダウン コンポーネントの使用を開始しましょう。
_keywords: $Platform$, UI コントロール, web ウィジェット, UI ウィジェット, $Platform$ ドロップダウン コンポーネント, インフラジスティックス
mentionedTypes: ['Dropdown', 'DropdownItem', 'DropdownHeader', 'DropdownGroup']
_language: ja
---

# $Platform$ Dropdown (ドロップダウン) の概要


$Platform$ ドロップダウンは、事前定義された値の切り替え可能なリストを表示し、ユーザーがクリックするだけで単一のオプション項目を簡単に選択できるようにするコンポーネントです。ドロップダウン メニューとして機能するようにすばやく構成することも、データをグループ化することでより有用な視覚情報を提供するために使用することもできます。グループ化を使用すると、フラット データと階層データの両方を使用できます。

## $Platform$ Dropdown の例

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-overview"
           alt="$Platform$ Dropdown の例"
           github-src="inputs/dropdown/overview">
</code-view>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Dropdown` を使用する前に、次のように登録する必要があります:

```razor
IgbDropdownModule.Register(IgniteUIBlazor);
```

```ts
import { 
    defineComponents,
    IgcDropdownComponent,
    IgcDropdownItemComponent,
    IgcDropdownHeaderComponent,
    IgcDropdownGroupComponent 
} from "igniteui-webcomponents";

defineComponents(IgcDropdownComponent, IgcDropdownItemComponent, IgcDropdownHeaderComponent, IgcDropdownGroupComponent);
```

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

ドロップダウン リストは、ターゲットに対して相対的に配置されます。`target` スロットを使用すると、クリック時に `open` プロパティを切り替える組み込みコンポーネントを提供できます。場合によっては、外部ターゲットを使用するか、別のイベントを使用してドロップダウンの開始を切り替えることができます。これは、ターゲットをパラメーターとして提供できる `Show`、`Hide`、および `Toggle` メソッドを使用して実現できます。デフォルトでは、ドロップダウン リストは CSS の `absolute` 位置を使用します。ターゲット要素が固定コンテナー内にあるが、ドロップダウンがそうではない場合、ドロップダウンの `PositionStrategy` を `fixed` に設定する必要があります。ドロップダウン リストは、その内容に基づいて自動的にサイズ変更されます。リストの幅をターゲットと同じにする場合は、`SameWidth` プロパティを **true** に設定する必要があります。

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-target"
           alt="$Platform$ Dropdown Target の例"
           github-src="inputs/dropdown/target">
</code-view>

### 位置

ドロップダウンの優先配置は、`Placement` プロパティを使用して設定できます。ドロップダウンのデフォルトの配置は `bottom-start` です。`Flip` プロパティは、指定された配置でドロップダウンを表示するのに十分なスペースがない場合に配置を反転するかどうかを決定します。ドロップダウン リストからそのターゲットまでの距離は、`Distance` プロパティを使用して指定できます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-position"
           alt="$Platform$ Dropdown Position の例"
           github-src="inputs/dropdown/position">
</code-view>

### 選択

ユーザーが項目を選択すると、`Dropdown` は `igcChange` イベントを発行します。ドロップダウンの `Select` メソッドを使用すると、インデックスまたは値で項目を選択できます。

### Item (項目)

`DropdownItem` は、ドロップダウン リストで選択可能な項目を表します。`Selected` プロパティを設定することにより、選択した項目を事前定義できます。`Disabled` プロパティを使用して、項目を無効にして選択できないようにすることもできます。`DropdownItem` には、項目のコンテンツを指定できるデフォルトのスロットがあります。`prefix` スロットと `suffix` スロットを使用して、コンテンツの前後に描画されるカスタム コンテンツを提供することもできます。`Value` プロパティを使用すると、項目にカスタム値を提供できます。`Value` が設定されていない場合は、項目のテキスト コンテンツに解決されます。

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-item"
           alt="$Platform$ Dropdown Item の例"
           github-src="inputs/dropdown/item">
</code-view>

### Header (ヘッダー)

`DropdownHeader` を使用して、項目のグループのヘッダーを提供できます。

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-header"
           alt="$Platform$ Dropdown Header の例"
           github-src="inputs/dropdown/header">
</code-view>

### Group (グループ)

ドロップダウン項目は、`DropdownGroup` を使用してグループ化することもできるため、ユーザーは個別のカテゴリを簡単に区別できます。

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-group"
           alt="$Platform$ Dropdown Group の例"
           github-src="inputs/dropdown/group">
</code-view>

### Scroll Strategy (スクロール方法)

`ScrollStrategy` プロパティは、ターゲット要素のコンテナーをスクロールする際のコンポーネントの動作を決定します。デフォルト値は `scroll` です。これは、ドロップダウンがターゲットとともにスクロールされることを意味します。プロパティを `block` に設定すると、ドロップダウンが開いている場合にスクロールがブロックされます。プロパティを `close` ように設定することもできます。これは、スクロール時にドロップダウンが自動的に閉じられることを意味します。

### Keep Open (開いたままにする)

デフォルトでは、ユーザーがドロップダウンの外側をクリックするか項目を選択すると、ドロップダウンは自動的に閉じられます。`KeepOpenOnOutsideClick` プロパティと `KeepOpenOnSelect` プロパティを使用して、この動作を防ぐことができます。

## スタイル設定

公開された CSS 部分を使用して、ドロップダウンとその項目の外観を変更できます。`Dropdown` は `base` 部分と `list` 部分を公開し、`DropdownItem` は `prefix`、 `content`、`suffix` 部分を公開し、`DropdownGroup` は `label` 部分を公開します。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-styling"
           alt="$Platform$ Dropdown Styling の例"
           github-src="inputs/dropdown/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

* `Dropdown`
* `DropdownItem`
* `DropdownHeader`
* `DropdownGroup`

<!-- end: WebComponents -->

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [**GitHub** の Ignite UI for Blazor の例](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->
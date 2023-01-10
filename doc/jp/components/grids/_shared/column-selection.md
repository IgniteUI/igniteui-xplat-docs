---
title: {Platform} {ComponentTitle} 列選択 - インフラジスティックス
_description: {ProductName} {ComponentTitle} で列選択を構成する方法を説明します。これにより、グリッドのインタラクションがより簡単かつ高速になります。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス, 列選択
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 列選択の概要

`{ComponentName}` の列選択機能は、シングルク リックで列全体を選択する簡単な方法を提供します。特定の列の重要性を強調するために、ヘッダー セルとその下のすべてにフォーカスします。この機能は豊富な API を備えて選択状態の操作、選択した部分からのデータ抽出、データ分析操作、可視化が可能になります。

## {Platform} {ComponentTitle} 列選択の例

以下のサンプルは、`{ComponentName}` の 3 種類の**列選択**動作を示しています。以下の列選択ドロップダウンを使用して、利用可能な各選択モードを有効にします。

<!-- ComponentStart: Grid -->

*Contact Title、City、および Address 列の列選択が無効になっています。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

*Unit Price および Discontinued の列選択が無効になっています。

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

*Photo および Debut の列選択が無効になっています。

<!-- ComponentEnd: HierarchicalGrid -->

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-selection-mode"
           github-src="{ComponentSample}/column-selection-mode"
           alt="{Platform} 列選択の例">
</code-view>

## 基本的な使用方法

列選択機能は、`GridSelectionMode` 値を受け取る `ColumnSelection` 入力によって有効にすることができます。

## インタラクション

デフォルトの選択モードは `None` です。`Single` または `Multiple` に設定されると、すべての列は `Selectable` になります。列を選択するには、列をクリックして `Selected` としてマークします。列が選択不可な場合、ホバー時に選択スタイルはヘッダーに適用されません。

> [!NOTE]
> [複数列ヘッダー](multi-column-headers.md)機能は `Selectable` 入力に反映されません。その子の 1 つ以上で選択動作が有効な場合、`ColumnGroupComponent` は `Selectable` です。さらに、すべての `Selectable` 子孫が `Selected` である場合、コンポーネントは `Selected` としてマークされます。

<!-- ComponentStart: Grid -->

*Country Information 列グループでは、City 列 および Postal code 列のみを選択できます。

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

*Personal Details 列グループでは、列 ID と Title のみを選択できます。

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

*Location 列グループでは、City 列のみを選択できます。

<!-- ComponentEnd: HierarchicalGrid -->


<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-selection-group"
           github-src="{ComponentSample}/column-selection-group">
</code-view>

## キーボードの組み合わせ

> [!NOTE]
> キーボードの組み合わせは、グリッドの `ColumnSelection` 入力が `multiple` に設定されている場合にのみ使用できます。

**列の選択**機能のキーボード ナビゲーションには 2 つのオプションがあります。
- 複数列選択 - <kbd>Ctrl</kbd> キーを押しながら、すべての**選択可能な**ヘッダー セルを <kbd>クリック</kbd>。
- 範囲列の選択 - <kbd>Shift</kbd> キーを押しながら + <kbd>クリック</kbd>、間にあるすべての**選択可能な**列を選択します。

## API 操作

**API** は、**非表示**列に関していくつかの追加機能を提供し、対応する **setter** を設定することにより、すべての**非表示**列を `Selected` としてマークできます。

> [!NOTE]
> 上記は `ColumnGroupComponent` にも適用されますが、`Selected` プロパティを変更する場合、その子孫の状態を変更します。

API 操作の詳細については、[API リファレンス](#api-リファレンス) セクションを参照してください。

<!-- Angular -->

## スタイル設定

スタイル設定オプションに移動する前に、core ジュールとすべてのコンポーネント mixin をインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

```razor
TO DO
```

>[!NOTE]
>[行選択](row-selection.md)と[列選択](column-selection.md)は個別に操作できないことに注意してください。同じ`変数`に依存します。

**選択**と**ホバー**のスタイル設定を変更します。 <br/>

最も簡単な方法は、カスタム **テーマ**を定義する方法です。

<!-- ComponentStart: TreeGrid -->

```scss
$custom-grid-theme: grid-theme(
    $row-selected-background: #011627,
    $row-selected-text-color: #ECAA53,
    $row-selected-hover-background: #011627,
    $header-selected-text-color: #ECAA53,
    $header-selected-background: #011627,
    $expand-icon-color: #ECAA53,
    $expand-icon-hover-color: #B64B80
);
```

```razor
TO DO
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid -->

```scss
$custom-grid-theme: grid-theme(
    $row-selected-background: #011627,
    $row-selected-text-color: #ECAA53,
    $row-selected-hover-background: #011627,
    $header-selected-text-color: #ECAA53,
    $header-selected-background: #011627
);
```

```razor
TO DO
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) はいくつかのパラメーターを受け入れますが、選択したすべての列の外観を変更するのは以下の 5 つです。
- **$row-selected-background** - 選択した部分の背景を設定します。
- **$row-selected-text-color** - 選択した部分のテキスト色を設定します。
- **$row-selected-hover-background** - ホバーされたセルまたは複数のセルの色を設定します。
- **$header-selected-text-color** - 選択した列ヘッダーのテキスト色を設定します。
- **$header-selected-background** - 選択した列ヘッダーの背景色を設定します。


### CSS 変数の使用
最後にカスタム `{ComponentSelector}` テーマを含めます。

```scss
@include css-vars($custom-grid-theme)
```

```razor
TO DO
```

### 基本テーマのオーバーライド
Internet Explorer 11 のコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチが必要です。

>[!NOTE]
>コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        @include grid($custom-column-selection-theme);
    }
}
```

```razor
TO DO
```

### デモ

<!-- NOTE this sample is differed -->

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-selection-styles"
           github-src="{ComponentSample}/column-selection-styles">
</code-view>

>[!NOTE]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

## API リファレンス

以下は、列選択 UI のその他の API です。

* `{ComponentName}`
* `Column`
* `ColumnGroup`

`{ComponentName}` プロパティ:
* `ColumnSelection`
* `SelectedColumns`
* `SelectColumns`
* `DeselectColumns`
* `SelectAllColumns`
* `DeselectAllColumns`

`Column` プロパティ:
* `Selectable`
* `Selected`

`ColumnGroup` プロパティ:
* `Selectable`
* `Selected`

`{ComponentName}` イベント:
* `OnColumnsSelectionChange`

## その他のリソース

* [{ComponentTitle} 概要](overview.md)
* [選択](selection.md)
* [セル選択](cell-selection.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [仮想化とパフォーマンス](virtualization.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName}  **GitHub (英語)**]({GithubLink})

---
title: {Platform} {PivotGridTitle} 機能 | ピボット テーブル | インフラジスティックス
_description: {ProductName} を使用して、高速で応答性の高い {Platform} {PivotGridTitle} ピボット グリッドとテーブルを作成します。ピボット データを介して複雑なデータ分析を実行します。
_keywords: {Platform}, {PivotGridTitle}, material pivot table, {ProductName}, grid features, pivot features, material ピボット テーブル, グリッド機能, ピボット機能
mentionedTypes: ['Infragistics.Controls.Grid']
_language: ja
---

# {Platform} {PivotGridTitle} 機能

ピボットおよびフラット グリッド コンポーネントは、共通ベースを継承しているため、いくつかの機能を共有しています。

>[!NOTE]
>一部の機能は、ピボット テーブルのコンテキストで意味のある動作をしないため `{PivotGridName}`で有効にできません。以下が含まれます。
> - CRUD 操作
> - グループ化
> - 行 / 列のピン固定
> - 集計
> - ページング

{PivotGridTitle} コンポーネントには、以下で説明するように、そのディメンションに関連する追加の機能があります。

<code-view style="height: 870px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/pivot-grid/features"
           alt="ピボット セレクターを使用した {Platform} {PivotGridTitle} の例">
</code-view>

<!-- Angular -->
## ディメンション フィルタリング

すべてのディメンション (フィルター、行、列) は、チップ UI または API を介してフィルター処理できます。この機能は埋め込まれており、デフォルトで有効になっています。

>[!NOTE]
>フィルタリング ディメンションを使用して、ピボット ビューの一部ではないデータ値を除外できます。

フィルタリング UI は、ディメンション チップ フィルターア イコンを介して開くことができ、一意のディメンション値の Excel スタイルのフィルタリングを可能にします。

>[!NOTE]
>すべてのフィルタリング チップに十分なスペースがない場合、{PivotGridTitle} には、ドロップダウンに切り取られたものが表示されます。エンドユーザーはそこでアクセスして操作できます。

ディメンションは、ディメンションの `filter` プロパティを使用して `PivotConfiguration` のディメンション構成を介して最初にフィルター処理することもできます。
これは、関連するフィルター条件を使用して新しい `FilteringExpressionsTree` に設定できます。例えば:

```typescript
public filterExpTree = new FilteringExpressionsTree(FilteringLogic.And);

constructor() {
    this.filterExpTree.filteringOperands = [
        {
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            fieldName: 'SellerName',
            searchVal: 'Stanley'
        }
    ];
}

public pivotConfigHierarchy: IPivotConfiguration = {
    filters: [
        {
            memberName: 'SellerName',
            enabled: true,
            filter: this.filterExpTree
        }
    ]
}

```
<!-- end: Angular -->

## ディメンションのソート

`rows` (行) または `columns` (列) のディメンション値は、関連するチップまたは API を介して並べ替えることができます。この機能は埋め込まれており、デフォルトで有効になっています。

関連するチップをクリックするとディメンションが並べ替えられ、その結果、ディメンション値が昇順/降順で並べ替えられます。

並べ替えは、ディメンション定義の `sortDirection` プロパティを介して最初に適用することもできます。

<!-- Angular, WebComponents  -->

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'SellerName',
            enabled: true,
            sortDirection: SortingDirection.Asc
        }
    ]
}
```
<!-- end: Angular, WebComponents -->

<!-- Blazor -->
```razor
    var pivotConfiguration = new IgbPivotConfiguration();
    var rowDimension = new IgbPivotDimension() {
        MemberName = "SellerName",
        Enabled = true,
        SortDirection = SortingDirection.Asc
    };
    pivotConfiguration.Rows.Add(rowDimension);
```

<!-- end:Blazor -->
## ディメンションのサイズ変更

行のサイズは、列のサイズ変更と同様に、セルの右端にあるサイズ変更インジケーターを介してサイズ変更できます。
サイズ変更インジケーターをダブル クリックするか、関連する API (`AutoSizeRowDimension`) を使用して、自動サイズ設定することもできます。

ディメンション定義で使用可能な `Width` プロパティを使用して、最初に別のサイズを設定することもできます。

<!-- Angular, WebComponents  -->

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'Country',
            enabled: true,
            width: '400px'
        }
    ]
}
```
<!-- end: Angular, WebComponents -->

<!-- Blazor -->
```razor
    var pivotConfiguration = new IgbPivotConfiguration();
    var rowDimension = new IgbPivotDimension() {
        MemberName = "SellerName",
        Enabled = true,
        Width = "400px"
    };
    pivotConfiguration.Rows.Add(rowDimension);
```

<!-- end:Blazor -->
## ディメンションの選択

{PivotGridTitle} は、ベース グリッドと同じように有効になる単一選択をサポートします。例:

<!-- Angular -->
```html
<{PivotGridSelector} #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</{PivotGridSelector}>
```
<!-- end: Angular -->

<!-- WebComponents  -->
```html
<{PivotGridSelector} id="grid" row-selection="single">
</{PivotGridSelector}>
```
<!-- end: WebComponents -->

```razor
<{PivotGridSelector} PivotConfiguration="PivotConfiguration"
        Data="PivotSalesData"
        Name="grid"
        RowSelection=GridSelectionMode.Single
        @ref="grid">
</{PivotGridSelector}>
```

複数の行 / 列にまたがるグループを作成する複数の行または列のディメンションがある場合、選択は、選択されたグループに属するすべてのセルに適用されます。

## スーパー コンパクト モード
`{PivotGridName}` コンポーネントは、`SuperCompactMode` 入力を提供します。一度にたくさんのセルが画面に表示させる必要がある場合に適しています。有効にすると、このオプションは {PivotGridTitle} の `DisplayDensity` オプションを無視します。`SuperCompactMode` を有効にすると、`SuperCompactMode` オプションがない子コンポーネント (`Chip` など) ごとに `DisplayDensity` 入力が `Compact` (コンパクト) に設定されます。



<!-- Angular -->
```html
<{PivotGridSelector} [superCompactMode]="true"></{PivotGridSelector}>
```
<!-- end: Angular -->

<!-- WebComponents  -->
```html
<{PivotGridSelector} super-compact-mode="true"></{PivotGridSelector}>
```
<!-- end: WebComponents -->

```razor
<{PivotGridSelector} SuperCompactMode=true></{PivotGridSelector}>
```

## 追加の集計列

`column` ディメンションが階層を定義すると、{PivotGridTitle} は追加の集計 / 合計列を描画し、グループ内のすべての列の集計を蓄積します。グループが縮小されている場合、集計列のみが残ります。また、グループを展開すると、グループの最後に追加の集計列が表示されます。

## インタラクション

### キーボード ナビゲーション

`{PivotGridSelector}` のキーボード ナビゲーションは、`{GridSelector}` キーボード ナビゲーションと同様に機能します。{PivotGridTitle} は、`rows`、`columns`、`values` の 3 つの領域に分割されます。`rows` と `columns` の領域はナビゲーションの目的でヘッダーと見なされ、`values` の領域は本文です。
キーボードの矢印を使用すると、現在の領域内でのみアクティブな要素をナビゲートできます。

### ディメンションのドラッグアンドドロップ
ディメンションはチップで表現され、ドラッグアンドドロップが可能です。
すべてのチップは、ドラッグアンドドロップでエリア内の順序を変更できます。
`rows`、`column`、`filter`  (ディメンション チップ) のチップは、これらの領域のいずれかから他の任意の場所に移動できます。
これらの領域のチップは `values` 領域に移動できず、`values` 領域のチップはどのディメンション領域にも移動できません。

>[!NOTE]
>{PivotGridTitle} のチップをピボット データ セレクターに移動したり、ピボット データ セレクターの項目を {PivotGridTitle} に移動したりすることはできません。

## API リファレンス
* `PivotGrid`
* `PivotDataSelector`


## その他のリソース
* [{Platform} {PivotGridTitle} 概要](overview.md)
* [{Platform} {PivotGridTitle} カスタム集計](remote-operations.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{Platform})

---
title: {Platform} {ComponentTitle} セル結合 - {ProductName}
_description: {ProductName} for {Platform} {ComponentTitle} の複数行レイアウト機能を使用して、列をより強力な方法で配置およびサイズ設定します。デモと例をお試しください。
_keywords: cell merging, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, セル結合, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_language: ja
---

# {Platform} {ComponentTitle} セル結合

Ignite UI for {Platform} {ComponentTitle} には、同じ値を持つ隣接セルを 1 つの大きなセルに結合するセル結合機能があります。結合は列内で縦方向に適用され、重複する値を減らして可読性を向上させます。既定ではデータ値の一致でセル結合されるほか、カスタム条件を設定して結合するように構成できます。

## {Platform} {ComponentTitle} セル結合の例

<!-- ComponentStart: Grid -->
`sample="/{ComponentSample}/cell-merge", height="600", alt="{Platform} {ComponentTitle} セル結合の例"`
<!-- ComponentEnd: Grid -->
<!-- ComponentStart: HierarchicalGrid -->
`sample="/{ComponentSample}/cell-merge", height="475", alt="{Platform} {ComponentTitle} セル結合の例"`
<!-- ComponentEnd: HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->
`sample="/{ComponentSample}/cell-merge", height="755", alt="{Platform} {ComponentTitle} セル結合の例"`
<!-- ComponentEnd: TreeGrid -->

## セル結合の有効化と使用

グリッドでのセル結合は、以下の 2 つのレベルで制御されます:
 - グリッド レベルの結合モード - 結合がいつ適用されるかを決定
 - 列レベルの結合トグル - どの列でセルを結合できるかを決定

### グリッド結合モード

グリッドは、`GridCellMergeMode` 列挙型の値を受け入れる `cellMergeMode` プロパティを公開します。
 - `always` - ソート状態に関係なく、結合条件を満たすすべての隣接セルを結合。
 - `onSort` - 列がソートされているときのみ隣接セルを結合 **(デフォルト値)**。

```tsx
<{ComponentSelector} data={data} cellMergeMode={cellMergeMode} >
    ...
</{ComponentSelector}>
```
```tsx
const cellMergeMode: GridCellMergeMode = 'always';
```

```html
<{ComponentSelector} cell-merge-mode="always">
    ...
</{ComponentSelector}>
```

### 列結合のトグル

列レベルでは、`merge` プロパティで結合の有効または無効を切り替えます。

```tsx
<IgrColumn field="OrderID" merge={true}></IgrColumn>
<IgrColumn field="ShipperName" merge={false}></IgrColumn>
```

```html
<igc-column field="OrderID" merge="true"></igc-column>
<igc-column field="ShipperName" merge="false"></igc-column>
```

上記の例では:
 - **OrderID** 列は、隣接する重複値を結合します。
 - **ShipperName** 列は、結合を行わず通常通りに描画されます。

### 組み合わせた例

```tsx
<{ComponentSelector} data={data} cellMergeMode={cellMergeMode} autoGenerate={false}>
    <IgrColumn field="OrderID" header="Order ID" merge={true}></IgrColumn>
    <IgrColumn field="ShipperName" header="Shipper Name" merge={true}></IgrColumn>
    <IgrColumn field="Salesperson" header="Salesperson"></IgrColumn>
</{ComponentSelector}>
```

```tsx
const cellMergeMode: GridCellMergeMode = 'onSort';
```

```html
<{ComponentSelector} cell-merge-mode="onSort" auto-generate="false">
    <igc-column field="OrderID" header="Order ID" merge="true"></igc-column>
    <igc-column field="ShipperName" header="Shipper Name" merge="false"></igc-column>
    <igc-column field="Salesperson" header="Salesperson"></igc-column>
</{ComponentSelector}>
```

この例では、グリッドは列がソートされている場合のみ結合を行い、Category 列と Product 列の両方で結合が有効になっています。

## カスタム結合条件

`always` と `onSort` の組み込みモードに加えて、`mergeStrategy` プロパティを使用して独自の結合条件を定義することができます。このストラテジでは、セルの比較方法と結合範囲の計算方法の両方を制御します。

### 結合ストラテジ クラス

カスタム結合ストラテジは `GridMergeStrategy` クラスを実装する必要があります:

```ts
export declare class IgrGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;    
}
```
<!-- end: React -->
<!-- WebComponents -->
```ts
export declare class IgcGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;    
}
```
<!-- end: WebComponents -->

- `merge` - 結合されたセルをどのように生成するかを定義。
- `comparer` - 隣接するレコードを結合すべきかを判定する条件を定義。

<!-- ComponentStart: Grid, HierarchicalGrid -->
### デフォルトのストラテジを拡張

一部の動作 (例: comparer ロジック) のみをカスタマイズしたい場合は、組み込みの `DefaultMergeStrategy` を拡張し、必要なメソッドのみをオーバーライドできます。

<!-- React -->
```ts
export class MyCustomStrategy extends IgrDefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: React -->
<!-- WebComponents -->
```ts
export class MyCustomStrategy extends IgcDefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: Grid, HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->
`IgxTreeGrid` には、`IGridMergeStrategy` を実装する 2 つの組み込みストラテジがあります: `DefaultTreeGridMergeStrategy` と `ByLevelTreeGridMergeStrategy`。`DefaultTreeGridMergeStrategy` は、階層レベルに関係なく同じ値を持つすべてのセルを結合します。`ByLevelTreeGridMergeStrategy` は、同じ階層レベルにあり、かつ同じ値を持つセルのみを結合します。同一階層レベルが結合の必須条件になります。

### デフォルトのストラテジを拡張

一部の動作 (例: comparer ロジック) のみをカスタマイズしたい場合は、組み込みの `DefaultTreeGridMergeStrategy` または `ByLevelTreeGridMergeStrategy` のいずれかを拡張し、必要なメソッドのみをオーバーライドできます。

<!-- React -->
```ts
export class MyCustomStrategy extends IgrDefaultTreeGridMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: React -->
<!-- WebComponents -->
```ts
export class MyCustomStrategy extends IgcDefaultTreeGridMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: TreeGrid -->

### カスタム ストラテジの適用

定義したカスタム ストラテジは、`mergeStrategy` プロパティを通じてグリッドに割り当てます。
<!-- React -->
```tsx
<{ComponentSelector} data={data} mergeStrategy={customStrategy}>
  <IgrColumn field="ActionID" merge={true}></IgrColumn>
  <IgrColumn field="ProjectName" merge={true}></IgrColumn>
</{ComponentSelector}>
```

```ts
const customStrategy = new MyCustomStrategy() as IgrGridMergeStrategy;
```
<!-- end: React -->
<!-- WebComponents -->
```ts
constructor() {
    const grid = (this.grid = document.getElementById('grid') as IgcGridComponent);

    grid.data = this.data;
    grid.mergeStrategy = new MyCustomStrategy() as IgcGridMergeStrategy;
    grid.cellMergeMode = 'always';
}
```

### デモ

<!-- end: WebComponents -->
<!-- ComponentStart: Grid -->
`sample="/{ComponentSample}/cell-merge-custom-sample", height="600", alt="{Platform} {ComponentTitle} セル結合の例"`
<!-- ComponentEnd: Grid -->
<!-- ComponentStart: HierarchicalGrid -->
`sample="/{ComponentSample}/cell-merge-custom-sample", height="425", alt="{Platform} {ComponentTitle} セル結合の例"`
<!-- ComponentEnd: HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->
`sample="/{ComponentSample}/cell-merge-custom-sample", height="755", alt="{Platform} {ComponentTitle} セル結合の例"`
<!-- ComponentEnd: TreeGrid -->

## 機能の統合

セル結合の特性上、他の機能との連携動作について以下の点に注意が必要です:
<!-- ComponentStart: Grid -->
- **展開と縮小**: マスター詳細、グループ化など、データ以外の行を生成する機能がある場合、その位置でセル結合が中断され、グループが分割されます。
<!-- ComponentEnd: Grid -->
- **Excel エクスポート**: 結合されたセルは、Excel にエクスポートしても結合状態が維持されます。
- **列のピン固定**: 列がピン固定されてもセルの結合は維持され、ピン固定領域内に表示されます。
- **行のピン固定**: セルは自身が属する領域内でのみ結合されます。つまり、ピン固定された行のセルはピン固定行のセル同士で、ピン固定されていない行のセルはその中でのみ結合されます。
- **ナビゲーション/アクティベーション**: セルがアクティブになると、その行内の結合セルはすべて単一セルに分解されます。これはキーボード ナビゲーションによるアクティベーションも含みます。

>[!NOTE]
> 結合セルをクリックすると、結合シーケンス内でもっとも近いセルがアクティブになります。

- **更新/編集**: アクティブ化によって結合シーケンスが分解されるため、編集モードになるのは単一セルのみです。
- **行の選択**: 選択された行が結合セルと交差する場合、関連するすべての結合セルが選択対象としてマークされます。

<!-- ComponentStart: Grid -->
## 制限
|既知の制限| 説明|
| --- | --- |
| セルの結合は、複数行レイアウトとの組み合わせではサポートされません。 | 両方とも複雑なレイアウトを使用するため、同時に使用することはできません。このような無効な構成が検出された場合は警告が表示されます。 |
<!-- ComponentEnd: Grid -->

## API リファレンス

* `{ComponentName}`

## その他のリソース

* [フィルタリング](filtering.md)
* [Excel スタイル フィルタリング](excel-style-filtering.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

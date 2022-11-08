---
title: での一括編集とトランザクション - インフラジスティックス
_description: {Platform} {ComponentTitle} は、{ComponentTitle} 一括編集を使用して、基になるデータに影響を与えずにデータ操作を実行します。デモと例をお試しください。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
_language: ja
---

<!-- NOTE DO NOT change this file because it is used as a template  -->

<!-- NOTE the metadata sharedComponents array defines a topic for multiple components in the  -->
<!-- NOTE the {ComponentName} variables will be mapped to an entry in docsComponents.json and resolved to a variable defined in docsConfig.json -->
<!-- NOTE {ComponentName} -> {PivotGridName} -> IgbTreeGrid -->
<!-- NOTE {ComponentTitle} -> {PivotGridTitle} -> Tree Grid -->

<!-- EXAMPLE of shared variable that will be converted to actual component: {ComponentTitle} -> {IgbTreeGridTitle} -> 'Tree Grid'-->
# {Platform} {ComponentTitle} 一括編集とトランザクション

<!-- EXAMPLE of razor code snippet that is automatically filtered for Blazor -->

```razor
<IgbGrid></IgbGrid>
```

```razor
<{ComponentSelector} data="data" >
</{ComponentSelector}>
```

<!-- EXAMPLE of build flagging content for single component: -->
<!-- ComponentStart: PivotGrid -->
`{ComponentName}` の一括編集機能は、`HierarchicalTransactionService` に基づいています。[トランザクション サービス クラス階層](transaction-classes.md)トピックに従って、`HierarchicalTransactionService` の概要と実装方法の詳細を確認してください。
<!-- ComponentEnd: PivotGrid -->

<!-- EXAMPLE of build flagging content for multiple components: -->
<!-- ComponentStart: PivotGrid, HierarchicalGrid -->
`{ComponentName}` の一括編集機能は、`TransactionService` に基づいています。[トランザクション サービス クラス階層](transaction-classes.md)トピックに従って、`TransactionService` の概要と実装方法の詳細を確認してください。
<!-- ComponentEnd: PivotGrid, HierarchicalGrid -->

<!-- EXAMPLE of build flagging content for single components: -->
<!-- ComponentStart: HierarchicalGrid -->
`HierarchicalTransactionService` を使用した場合も各アイランドに個別のトランザクション ログを累積させるには、代わりにサービス ファクトリが必要です。エクスポートされると `HierarchicalTransactionServiceFactory` として利用できます。
<!-- ComponentEnd: HierarchicalGrid -->


## {Platform} {ComponentTitle} の例

<!-- EXAMPLE of shared variable that will be converted to actual API link: {ComponentName} -> {TreeGridName} -> `IgTreeGrid`-->
以下は、`{ComponentName}` コンポーネントに対して一括編集を有効にする方法の詳細な例です。

<!-- EXAMPLE of embedding sample with ComponentSample path variable -->
<code-view style="height:510px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-advanced-filtering-options"
           github-src="{ComponentSample}/advanced-filtering-options"
           alt="{Platform} {ComponentTitle} 高度なフィルタリングの例">
</code-view>


> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## {Platform} {ComponentTitle} のモジュール

<!-- EXAMPLE of using a module variable that will be resolved to actual module, e.g. {ComponentModule} -> IgbPivotGridModule  -->
次のコード スニペットに示すように、`{ComponentModule}` を登録します:

<!-- EXAMPLE of Blazor code snippet with module variable -->
<!-- Blazor -->
```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof({ComponentModule}));
```

<!-- end: Blazor -->

<!-- EXAMPLE of React/WC code snippet with module variable that will be resolved to actual module, e.g. {ComponentModule} -> IgcPivotGridModule  -->
<!-- React, WebComponents -->
```typescript
import { {ComponentModule} } from '{ComponentPackage}';

{ComponentModule}.register();
```
<!-- end: React, WebComponents -->

<!-- EXAMPLE of Angular code snippet with module variable that will be resolved to actual module, e.g. {ComponentModule} -> IgxPivotGridModule  -->
<!-- Angular -->
```typescript
import { {ComponentModule} } from 'igniteui-angular';

@NgModule({
    imports: [
        {ComponentModule},
    ]
})
export class AppModule {}
```
<!-- end: Angular -->

## {Platform} {ComponentTitle} の使用

次に、`BatchEditing` プロパティを有効にするだけです:

<!-- EXAMPLE of shared code snippet with selector variable that will be resolved, e.g. {ComponentSelector} -> igb-pivot-grid  -->

```html
<{ComponentSelector} data="data" batchEditing="true">
</{ComponentSelector}>
```

```razor
<{ComponentSelector} data="data" batchEditing="true">
</{ComponentSelector}>
```

## {Platform} {ComponentTitle} のトランザクション

これにより、`Transaction` サービスの適切なインスタンスが `{ComponentName}` に提供されます。適切な `TransactionService` は `TransactionFactory` を通じて提供されます。この内部実装の詳細については、`TransactionFactory` クラスを参照してください。

一括編集を有効にした後、バインドされたデータ ソースと `RowEditable` を true に設定して `{ComponentName}` を定義し、バインドします:

<!-- EXAMPLE of a code snippet that applies only to Grid component  -->
<!-- ComponentStart: Grid -->
```html
<igx-grid #grid [batchEditing]="true" [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
    [rowEditable]="true">

</igx-grid>

<button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo()">Undo</button>
<button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo()">Redo</button>
<button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1"
    (click)="openCommitDialog(dialogGrid)">Commit</button>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: Grid -->
```razor
<IgbGrid batchEditing="true" data="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">

</IgbGrid>
```
<!-- ComponentEnd: Grid -->

<!-- EXAMPLE of a code snippet that applies only to TreeGrid  -->
<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid #treeGrid [batchEditing]="true" [data]="data" primaryKey="employeeID" foreignKey="PID"
    width ="100%" height ="500px" rowEditable=true>
</igx-tree-grid>

<button igxButton (click)="addRow()">Add Root Level Row</button>
<button igxButton [disabled]="!treeGrid.transactions.canUndo" (click)="undo()">Undo</button>
<button igxButton [disabled]="!treeGrid.transactions.canRedo" (click)="redo()">Redo</button>
<button igxButton [disabled]="treeGrid.transactions.getAggregatedChanges(false).length < 1"
    (click)="openCommitDialog()">Commit</button>

```
<!-- ComponentEnd: TreeGrid -->


<!-- EXAMPLE of a code snippet that applies only to HierarchicalGrid  -->
<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid #hierarchicalGrid [batchEditing]="true" [data]="data" [primaryKey]="'Artist'"
    [height]="'580px'" [width]="'100%'" [rowEditable]="true" >

    <igx-row-island #childGrid [key]="'Albums'" [primaryKey]="'Album'" [rowEditable]="true">
        <igx-grid-toolbar></igx-grid-toolbar>

        <ng-template igxToolbarCustomContent let-grid="grid">
            <button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo(grid)">Undo</button>
            <button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo(grid)">Redo</button>
        </ng-template>
    </igx-row-island>
</igx-hierarchical-grid>

<div class="buttons-row">
    <div class="buttons-wrapper">
        <button igxButton [disabled]="!undoEnabledParent" (click)="undo(hierarchicalGrid)">Undo Parent</button>
        <button igxButton [disabled]="!redoEnabledParent" (click)="redo(hierarchicalGrid)">Redo Parent</button>
    </div>
</div>
```
<!-- ComponentEnd: HierarchicalGrid -->

## {Platform} {ComponentTitle} API メンバー

以下は、このトピックで言及されている API メンバーのリストです:

- `{ComponentName}`
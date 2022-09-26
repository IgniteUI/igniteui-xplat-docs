---
title: Batch Editing and Transactions in {Platform} {ComponentTitle} - Infragistics
_description: Perform data manipulation without affecting the underlying data with {ComponentTitle} Batch Editing, using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
_language: kr
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
---

<!-- NOTE DO NOT change this file because it is used as a template  -->

<!-- NOTE the metadata sharedComponents array defines a topic for multiple components in the  -->
<!-- NOTE the {ComponentName} variables will be mapped to an entry in docsComponents.json and resolved to a variable defined in docsConfig.json -->
<!-- NOTE {ComponentName} -> {PivotGridName} -> IgbTreeGrid -->
<!-- NOTE {ComponentTitle} -> {PivotGridTitle} -> Tree Grid -->

<!-- EXAMPLE of shared variable that will be converted to actual component: {ComponentTitle} -> {IgbTreeGridTitle} -> 'Tree Grid'-->
# {Platform} {ComponentTitle} Batch Editing and Transactions

<!-- EXAMPLE of razor code snippet that is automatically filtered for Blazor -->

```razor
<{ComponentSelector} data="data" >
</{ComponentSelector}>
```

<!-- EXAMPLE of build flagging content for single components: -->
<!-- ComponentStart: PivotGrid -->
The Batch Editing feature of the {ComponentName} is {ComponentName} based on the `HierarchicalTransactionService`. Follow the [Transaction Service class hierarchy](transaction-classes.md) topic to see an overview of the `HierarchicalTransactionService` and details how it is implemented.
<!-- ComponentEnd: PivotGrid -->

<!-- EXAMPLE of build flagging content for multiple components: -->
<!-- ComponentStart: PivotGrid, HierarchicalGrid -->
The Batch Editing feature of the {ComponentName} is based on the `TransactionService`. Follow the [Transaction Service class hierarchy](transaction-classes.md) topic to see an overview of the `TransactionService` and details how it is implemented.
<!-- ComponentEnd: PivotGrid, HierarchicalGrid -->

<!-- EXAMPLE of build flagging content for single components: -->
<!-- ComponentStart: HierarchicalGrid -->
In order to use the `HierarchicalTransactionService`, but have it accumulating separate transaction logs for each island, a service factory should be provided instead. One is exported and ready for use as `HierarchicalTransactionServiceFactory`.
<!-- ComponentEnd: HierarchicalGrid -->


## {Platform} {ComponentTitle} Example

<!-- EXAMPLE of shared variable that will be converted to actual API link: {ComponentName} -> {TreeGridName} -> `IgTreeGrid`-->
Below is a detailed example of how is Batch Editing enabled for the `{ComponentName}` component.

<!-- EXAMPLE of embedding sample with ComponentSample path variable -->
<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-advanced-filtering"
           github-src="{ComponentSample}/advanced-filtering"
           alt="{Platform} {ComponentName} Advanced Filtering Example">
</code-view>


> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

## {Platform} {ComponentTitle} Module

<!-- EXAMPLE of using a module variable that will be resolved to actual module, e.g. {ComponentModule} -> IgbPivotGridModule  -->
Register the `{ComponentModule}` as demonstrated in the following code snippet:

<!-- EXAMPLE of Blazor code snippet with module variable -->
<!-- Blazor -->
```razor
{ComponentModule}.Register(IgniteUIBlazor);
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

## {Platform} {ComponentTitle} Usage

Then, all you need to do is enable `BatchEditing` property:

<!-- EXAMPLE of shared code snippet with selector variable that will be resolved, e.g. {ComponentSelector} -> igb-pivot-grid  -->

```html
<{ComponentSelector} data="data" batchEditing="true">
</{ComponentSelector}>
```

```razor
<{ComponentSelector} data="data" batchEditing="true">
</{ComponentSelector}>
```

## {Platform} {ComponentTitle} Transaction

This will ensure a proper instance of `Transaction` service is provided for the {ComponentSelector}. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the `TransactionFactory` class.

After batch editing is enabled, define a {ComponentSelector} with bound data source and `RowEditable` set to true and bind:

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

## {Platform} {ComponentTitle} API Members

The following is a list of API members mentioned in this topic:

- {ComponentName}
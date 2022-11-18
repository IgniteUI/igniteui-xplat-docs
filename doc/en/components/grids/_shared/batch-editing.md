---
title: Batch Editing and Transactions in {Platform} {ComponentTitle} - Infragistics
_description: Perform data manipulation without affecting the underlying data with {ComponentTitle} Batch Editing and {Platform} CRUD, using {Platform} {ComponentTitle}. See demos & examples!
_keywords: crud, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Batch Editing and Transactions

<!-- ComponentStart: Grid -->

The Batch Editing feature of the `{ComponentName}` is based on the `TransactionService`. Follow the [**Transaction Service class hierarchy**](../transaction-classes.md) topic to see an overview of the `TransactionService` and details how it is implemented.

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

The Batch Editing feature of the `{ComponentName}` is based on the `HierarchicalTransactionService`. Follow the [**Transaction Service class hierarchy**](../transaction-classes.md) topic to see an overview of the `HierarchicalTransactionService` and details how it is implemented.

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

In order to use the `HierarchicalTransactionService` with `{ComponentName}`, but have it accumulating separate transaction logs for each island, a service factory should be provided instead. One is exported and ready for use as `HierarchicalTransactionServiceFactory`.

<!-- ComponentEnd: HierarchicalGrid -->

Below is a detailed example of how is Batch Editing enabled for the `{ComponentName}` component.

## {Platform} {ComponentTitle} Batch Editing and Transactions Example

The following sample demonstrates a scenario, where the `{ComponentName}` has `BatchEditing` enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.

<code-view style="height:680px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-batch-editing-actions"
           github-src="{ComponentSample}/data-batch-editing-actions"
           alt="{Platform} {ComponentTitle} Batch Editing and Transactions Example" >
</code-view>

> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

## Usage

You need to enable `BatchEditing` from your {ComponentTitle}:

```html
<{ComponentSelector} [data]="data" [batchEditing]="true">
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Data=data BatchEditing="true">
</{ComponentSelector}>
```

This will ensure a proper instance of `Transaction` service is provided for the `{ComponentName}`. The proper `TransactionService` is provided through a `TransactionFactory`.

<!-- Angular -->

You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).

<!-- end: Angular -->

After batch editing is enabled, define a `{ComponentName}` with bound data source and `RowEditable` set to true and bind:

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

```razor
<IgbGrid @ref="grid" BatchEditing="true" Data=data PrimaryKey=primaryKey Width="100%" Height="500px"
    RowEditable="true">
</IgbGrid>
<button @onclick="OnCommitClick" disabled="@grid.transactions.getAggregatedChanges(false).length < 1">Commit</button>
<button @onclick="OnUndoClick" disabled="!@grid.transactions.canUndo">Undo</button>
<button @onclick="OnRedoClick" disabled="!@grid.transactions.canRedo">Redo</button>
@code {
    private string primaryKey = "ProductID";
    private IgbGrid grid;

    protected override async Task OnInitializedAsync() => forecasts = await ForecastService.GetForecastAsync(DateTime.Now);

    private void OnCommitClick(MouseEventArgs e)
    {
        this.grid.transactions.commit(this.data);
    }

    private void OnUndoClick(MouseEventArgs e)
    {
        this.grid.transactions.undo();
    }

    private void OnRedoClick(MouseEventArgs e)
    {
        this.grid.transactions.redo();
    }
}
```
```html
<igc-grid id="grid" batch-editing="true" primary-key="ProductID" width="100%" height="500px"
    row-editable="true">
</igc-grid>

<button id="undo">Undo</button>
<button id="redo">Redo</button>
<button id="commit">Commit</button>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var undo = this.undo = document.getElementById('undo') as HTMLButtonElement;
    var redo = this.redo = document.getElementById('redo') as HTMLButtonElement;
    var commit = this.commit = document.getElementById('commit') as HTMLButtonElement;
}

this._bind = () => {
    grid.data = this.data;
    undo.addEventListener('click', this.OnUndoClick);
    redo.addEventListener('click', this.OnRedoClick);
    commit.addEventListener('click', this.OnCommitClick);
}
this._bind();

private OnCommitClick() {
    if (this.grid.transactions.getAggregatedChanges(false).length > 0)
        this.grid.transactions.commit(this.data);
}

private OnUndoClick() {
    if (this.grid.transactions.canUndo)
        this.grid.transactions.undo();
}

private OnRedoClick() {
    if (this.grid.transactions.canRedo)
        this.grid.transactions.redo();
}
```
<!-- ComponentEnd: Grid -->

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

```razor
<IgbTreeGrid @ref="grid" BatchEditing="true" Data=data PrimaryKey=primaryKey ForeignKey="PID" Width="100%" Height="500px"
    RowEditable="true">
</IgbGrid>
<button @onclick="OnCommitClick" disabled="@grid.transactions.getAggregatedChanges(false).length < 1">Commit</button>
<button @onclick="OnUndoClick" disabled="!@grid.transactions.canUndo">Undo</button>
<button @onclick="OnRedoClick" disabled="!@grid.transactions.canRedo">Redo</button>
@code {
    private string primaryKey = "ProductID";
    private IgbGrid grid;

    protected override async Task OnInitializedAsync() => forecasts = await ForecastService.GetForecastAsync(DateTime.Now);

    private void OnCommitClick(MouseEventArgs e)
    {
        this.grid.transactions.commit(this.data);
    }

    private void OnUndoClick(MouseEventArgs e)
    {
        this.grid.transactions.undo();
    }

    private void OnRedoClick(MouseEventArgs e)
    {
        this.grid.transactions.redo();
    }
}
```
```html
<igc-tree-grid id="treeGrid" batch-editing="true" primary-key="ProductID" foreign-key="PID"
    width="100%" height="500px" row-editable="true">
</igc-tree-grid>

<button id="undo">Undo</button>
<button id="redo">Redo</button>
<button id="commit">Commit</button>
```
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('grid') as IgcTreeGridComponent;
    var undo = this.undo = document.getElementById('undo') as HTMLButtonElement;
    var redo = this.redo = document.getElementById('redo') as HTMLButtonElement;
    var commit = this.commit = document.getElementById('commit') as HTMLButtonElement;
}

this._bind = () => {
    treeGrid.data = this.data;
    undo.addEventListener('click', this.OnUndoClick);
    redo.addEventListener('click', this.OnRedoClick);
    commit.addEventListener('click', this.OnCommitClick);
}
this._bind();

private OnCommitClick() {
    if (this.treeGrid.transactions.getAggregatedChanges(false).length > 0)
        this.treeGrid.transactions.commit(this.data);
}

private OnUndoClick() {
    if (this.treeGrid.transactions.canUndo)
        this.treeGrid.transactions.undo();
}

private OnRedoClick() {
    if (this.treeGrid.transactions.canRedo)
        this.treeGrid.transactions.redo();
}
```
<!-- ComponentEnd: TreeGrid -->

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

<!-- ComponentStart: Grid -->

The following code demonstrates the usage of the `TransactionService` API - undo, redo, commit.

```typescript
export class GridBatchEditingSampleComponent {
    @ViewChild('grid', { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;

    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo()
    }

    public commit() {
        this.grid.transactions.commit(this.data);
        this.toggle.close();
    }
}
```
```ts
export class GridBatchEditingSampleComponent {
    constructor() {
        var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo()
    }

    public commit() {
        this.grid.transactions.commit(this.data);
        this.toggle.close();
    }
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

The following code demonstrates the usage of the `HierarchicalTransactionService` API - undo, redo, commit.

```typescript
export class TreeGridBatchEditingSampleComponent {
    @ViewChild('treeGrid', { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;

    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.dialog.close();
    }
}
```
```ts
export class GridBatchEditingSampleComponent {
    constructor() {
        var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo()
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
The following code demonstrates the usage of the `TransactionService` API - undo, redo, commit.

```typescript
export class HierarchicalGridBatchEditingSampleComponent {
    public undo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }
}
```
<!-- ComponentEnd: HierarchicalGrid -->

> [!NOTE]
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `{ComponentName}` would stay in edit mode. One way to do that is by calling `EndEdit` in the respective method.

<!-- ComponentStart: TreeGrid -->
Deleting a parent node in `{ComponentName}` has some peculiarities. If you are using a hierarchical data, the children will be deleted when deleting their parent. If you are using a flat data, you may set the desired behavior using the `CascadeOnDelete` property of `{ComponentName}`. This property indicates whether the child records should be deleted when their parent gets deleted (by default, it is set to **true**).
<!-- ComponentEnd: TreeGrid -->

> [!NOTE]
> Disabling `RowEditable` property will modify `{ComponentName}` to create transactions on cell change and will not expose row editing overlay in the UI.

<!-- Angular -->
<!-- ComponentStart: Grid -->

## Remote Paging with Batch Editing Demo

[Check out the full demo configuration](remote-data-operations.md#remote-paging-with-batch-editing)

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-batch-editing-remote"
           github-src="{ComponentSample}/data-batch-editing-remote"
           alt="{Platform} {ComponentTitle} Remote Paging and Batch Editing Example" >
</code-view>

<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

## API References

<!-- ComponentStart: Grid -->
* `Transactions`
* `TransactionService`
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
* `HierarchicalTransactionService`
* `RowEditable`
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
* `HierarchicalTransactionServiceFactory`
<!-- ComponentEnd: HierarchicalGrid -->

## Additional Resources

<!-- Angular -->

* [Build CRUD operations with Grid](../general/how-to/how-to-perform-crud.md)
* [{ComponentTitle} Overview](overview.md)
* [{ComponentTitle} Editing](editing.md)
* [{ComponentTitle} Row Editing](row-editing.md)
* [{ComponentTitle} Row Adding](row-adding.md)

<!-- end: Angular -->

<!-- Blazor -->

* [{ComponentTitle} Overview](overview.md)
* [{ComponentTitle} Editing](editing.md)
* [{ComponentTitle} Row Editing](row-editing.md)
* [{ComponentTitle} Row Adding](row-adding.md)

<!-- end: Blazor -->


Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName}  **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})

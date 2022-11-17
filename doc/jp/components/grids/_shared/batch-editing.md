---
title: {Platform} {ComponentTitle} での一括編集とトランザクション - インフラジスティックス
_description: {Platform} {ComponentTitle} は、{ComponentTitle} 一括編集と {Platform} CRUD を使用して、基になるデータに影響を与えずにデータ操作を実行します。デモと例をお試しください。
_keywords: crud, {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 一括編集とトランザクション

<!-- ComponentStart: Grid -->

`{ComponentName}` の一括編集機能は、`TransactionService` に基づいています。[**トランザクション サービス クラス階層**](../transaction-classes.md)トピックに従って、`TransactionService` の概要と実装方法の詳細を確認してください。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

`{ComponentName}` の一括編集機能は、`HierarchicalTransactionService` に基づいています。[**トランザクション サービス クラス階層**](../transaction-classes.md)トピックに従って、`HierarchicalTransactionService` の概要と実装方法の詳細を確認してください。

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

`HierarchicalTransactionService` と `{ComponentName}` を使用した場合も各アイランドに個別のトランザクション ログを累積させるには、代わりにサービス ファクトリが必要です。エクスポートされると `HierarchicalTransactionServiceFactory` として利用できます。

<!-- ComponentEnd: HierarchicalGrid -->

以下は、`{ComponentName}` コンポーネントに対して一括編集を有効にする方法の詳細な例です。

## {Platform} {ComponentTitle} 一括編集とトランザクションの例

次のサンプルは、`{ComponentName}` で `BatchEditing` が有効になっており、行編集が有効になっているシナリオを示しています。行編集全体を確定後にトランザクションが追加されるようにします。

<code-view style="height:680px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-batch-editing-actions"
           github-src="{ComponentSample}/data-batch-editing-actions"
           alt="{Platform} {ComponentTitle} 一括編集とトランザクションの例" >
</code-view>

> [!NOTE]
> トランザクション ステートは、すべての更新、追加、削除された行、そして最後のステートで構成されます。

## 使用方法

{ComponentTitle} から `BatchEditing` を有効にする必要があります。

```html
<{ComponentSelector} [data]="data" [batchEditing]="true">
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Data=data BatchEditing="true">
</{ComponentSelector}>
```

これにより、`Transaction` サービスの適切なインスタンスが `{ComponentName}` に提供されます。適切な `TransactionService` は `TransactionFactory` を通じて提供されます。

<!-- Angular -->

この内部実装の詳細については、[トランザクション トピック](../transaction-classes.md#トランザクション-ファクトリ)を参照してください。

<!-- end: Angular -->

一括編集を有効にした後、バインドされたデータ ソースと `RowEditable` を true に設定して `{ComponentName}` を定義し、バインドします:

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

以下のコード例は、`TransactionService` API (undo、redo、commit) の使用方法を示します。

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

以下のコード例は、`HierarchicalTransactionService` API (undo、redo、commit) の使用方法を示します。

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
以下のコード例は、`TransactionService` API (undo、redo、commit) の使用方法を示します。

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
> トランザクション API は編集の終了を処理しないので、自分で行う必要があります。そうしないと、`{ComponentName}` は編集モードのままになります。これを行う 1 つの方法は、それぞれのメソッドで `EndEdit` を呼び出すことです。

<!-- ComponentStart: TreeGrid -->
`{ComponentName}` 内の親ノードの削除にはいくつかの特徴があります。階層データを使用している場合、親を削除すると子も削除されます。フラットデータを使用している場合、`{ComponentName}` の `CascadeOnDelete` プロパティを使用して必要な動作を設定できます。このプロパティは、親が削除されたときに子レコードを削除するかどうかを示します (デフォルトでは **true** に設定されています)。
<!-- ComponentEnd: TreeGrid -->

> [!NOTE]
> `RowEditable` プロパティを無効にすると `{ComponentName}` を変更してセル変更でトランザクションを作成し、UI で行編集オーバーレイを公開しません。

<!-- Angular -->
<!-- ComponentStart: Grid -->

## 一括編集のリモート ページング デモ

[完全なデモ構成は、こちらです。](remote-data-operations.md#一括編集のリモート-ページング)

<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-batch-editing-remote"
           github-src="{ComponentSample}/data-batch-editing-remote"
           alt="{Platform} {ComponentTitle} 一括編集とリモート ページングの例" >
</code-view>

<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

## API リファレンス

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

## その他のリソース

<!-- Angular -->

* [Grid で CRUD 操作を構築する](../general/how-to/how-to-perform-crud.md)
* [{ComponentTitle} 概要](overview.md)
* [{ComponentTitle} 編集](editing.md)
* [{ComponentTitle} 行の編集](row-editing.md)
* [{ComponentTitle} 行の追加](row-adding.md)

<!-- end: Angular -->

<!-- Blazor -->

* [{ComponentTitle} 概要](overview.md)
* [{ComponentTitle} 編集](editing.md)
* [{ComponentTitle} 行の編集](row-editing.md)
* [{ComponentTitle} 行の追加](row-adding.md)

<!-- end: Blazor -->


コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})

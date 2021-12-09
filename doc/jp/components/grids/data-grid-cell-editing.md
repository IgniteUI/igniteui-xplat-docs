---
title: $Platform$ データ グリッド | 一括更新のセルおよび行編集 | インフラジスティックス
_description: セルおよび行の編集機能をサポートするインフラジスティックスの $Platform$ グリッド コンポーネントを使用して、任意の時点でグリッドのすべてのセルを一括更新するように設定できます。$ProductName$ を使用したデータの表示方法について説明します。
_langua22ge: ja
_keywords: $Platform$ Table, Data Grid, cell and row editing, $ProductName$, batch updating, Infragistics, $Platform$ テーブル, データ グリッド, セルおよび行の編集, 一括更新, インフラジスティックス
mentionedTypes: ['Grid', 'EditModeType', 'TransactionType']
---
# $Platform$ Grid 編集

$ProductName$ Data Table / Data Grid は、一括更新のセルおよび行編集をサポートします。注: 現在、これは非テンプレート列に制限されています。

## $Platform$ Grid 編集の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-cell-editing"
           alt="$Platform$ Grid 編集の例"
           github-src="grids/data-grid/cell-editing">
</code-view>

<div class="divider--half"></div>

## 概要

$Platform$ データ グリッドの編集は、$Platform$ グリッドの `EditMode` オプションを使用して設定します。このプロパティには、以下にリストされている 3 つの異なるオプションがあります。

- `None`: 編集は有効ではありません。
- `Cell`: セルが編集モードに入り、編集モードの終了時に値をコミットできるようにします。
- `CellBatch`: セルが編集モードに入りますが、変更はコミットされるまで後でキャッシュされます。
- `Row`: 行が編集モードに入り、編集モードの終了時に値をコミットできるようにします。

`CellBatch` に設定した場合、変更をコミットするにはグリッドから `commitEdits` メソッドを実行する必要があります。グリッドは、コミットされるまでセルを斜体で表示し、変更をデータ ソースにプッシュするタイミングを制御します。

さらに、`onCellValueChanging` イベントをフックし、コミットされる前に新しい値を調べることでエラー処理を実行できます。グリッドはエラー メッセージを出力できる `setEditError` メソッドを公開します。これにより、有効な値が入力されるまで、セルを編集モードに維持します。それ以外の場合は、グリッドの `rejectEdit` メソッドを実行して無効な値を元に戻すことができます。無効な値が見つからない場合、グリッドの `acceptEdit` メソッドを呼び出して変更をコミットすることもできます。

コミットは、`acceptCommit` または `rejectCommit` メソッドで `onDataCommitting` をフックし、`commitID` イベント引数をパラメーターとして渡すことで、グリッド レベルで承認または拒否できます。このイベントは、コミットされる前のすべての変更を保存する `changes` コレクションも公開します。たとえば、コミットが追加、更新、削除操作のいずれであるかを  `changes` コレクションで公開された `TransactionType` プロパティによって確認し、必要に応じて `acceptCommit` または `rejectCommit` を実行できます。

## Excel スタイル編集

`EditOnKeyPress` を使用すると、Excel の動作と同じように、入力時にすぐに編集を開始できます。さらに、`EditModeClickAction` プロパティを `SingleClick` に設定して、ユーザーが他のセルに移動しながらセルをすばやく編集できるようにすることができます。デフォルトでは、編集モードに入るにはダブル クリックが必要です。

## コード スニペット

以下は、データ グリッドで編集を設定し、データをコミットする方法を示します。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    activationMode="Cell"
    editMode="CellBatch" >
</IgrDataGrid>
<button onClick={this.onCommitClick}>Commit Data</button>
```

```ts
import { IgrDataGrid } from 'igniteui-react-grids';

onCommitClick = () => {
    this._grid.commitEdits();
}
```

```html
<button id="clickCommit">Commit</button>
<igc-data-grid id="grid"
    height="100%"
    width="100%"
    activation-mode="Cell"
    edit-mode="Cell">
</igc-data-grid>
```

```ts
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';

this.onCommitClick = this.onCommitClick.bind(this);

public onCommitClick(){
    this.grid.commitEdits();
}
```

```razor
<IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
    DataSource="DataSource"
    EditMode="EditModeType.CellBatch" />
<button @onclick="OnCommitClick">Commit Data</button>

@code {
    public IgbDataGrid DataGridRef;

    private void OnCommitClick(MouseEventArgs e)
    {
        this.DataGridRef.CommitEdits();
    }
}
```

## 一括変更を元に戻す/やり直し

以下は、一括更新が有効な場合に変更を元に戻す方法を示しています。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    activationMode="Cell"
    editMode="CellBatch" >
</IgrDataGrid>
<button disabled={!this.canUndo} onClick={this.onUndoClick}>Undo</button>
<button disabled={!this.canRedo} onClick={this.onRedoClick}>Redo</button>
```

```ts
import { IgrDataGrid } from 'igniteui-react-grids';

onUndoClick = () => {
    this._grid.undo();

    // request a new render so the undo/redo buttons update.
    this.setState({ });
}

onRedoClick = () => {
    this._grid.redo();

    // request a new render so the undo/redo buttons update.
    this.setState({ });
}
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      activation-mode="Cell"
      edit-mode="Cell">
</igc-data-grid>
<button id="undoClick" disabled="true">Undo</button>
<button id="redoClick" disabled="true">Redo</button>
```

```ts
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';

public onUndoClick(){
    this.grid.undo();
    if(this.grid.editMode === EditModeType.CellBatch && this.redo !== null)
    {
        this.redo.disabled = false;
    }
}

public onRedoClick(){
    this.grid.redo();
}
```

```razor
<IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
    DataSource="DataSource"
    EditMode="EditModeType.CellBatch" />
<button @onclick="OnUndoClick">Undo</button>
<button @onclick="OnRedoClick">Redo</button>

@code {
    public IgbDataGrid DataGridRef;

    private void OnUndoClick(MouseEventArgs e)
    {
        this.DataGridRef.Undo();
    }

    private void OnRedoClick(MouseEventArgs e)
    {
        this.DataGridRef.Redo();
    }
}
```

## エラー検証とコミットの整合性

以下は、編集モードを終了するときにセルが空かどうかを確認し、更新されたセルからのコミットのみを受け入れることによって、エラーを組み込む方法を示しています。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    activationMode="Cell"
    cellValueChanging={this.onCellValueChanging}
    dataCommitting={this.onDataCommitting}>
</IgrDataGrid>
```

```html
<igc-data-grid
    id="grid"
    height="calc(100% - 50px)"
    width="100%"
    activation-mode="Cell"
    selection-mode="SingleRow"
    default-column-min-width="125"
    is-column-options-enabled="true"
    auto-generate-columns="false"
    edit-mode="Cell">
```

```ts
import { IgrGridDataCommittingEventArgs } from 'igniteui-react-grids';
import { TransactionType } from 'igniteui-react-core'

onCellValueChanging = (s: IgrDataGrid, e: IgrGridCellValueChangingEventArgs) => {
    //check if value is empty upon exiting edit mode.
    if(e.newValue === "") {
        s.setEditError(e.editID, "Error, cell is empty");
        //or revert changes
        s.rejectEdit(e.editID);
    }
    else {
        s.acceptEdit(e.editID);
    }
}

onDataCommitting = (s: IgrDataGrid, e: IgrGridDataCommittingEventArgs) => {

    if(e.changes[0].transactionType === TransactionType.Update) {
        //commit was passed
        s.acceptCommit(e.commitID);
    }
    else{
        //commit was prevented
        s.rejectCommit(e.commitID);
    }
}
```

```ts
import { IgcGridDataCommittingEventArgs } from 'igniteui-webcomponents-grids';
import { TransactionType } from 'igniteui-webcomponents-core'

this.onCellValueChanging = this.onCellValueChanging.bind(this);
this.grid.cellValueChanging = this.onCellValueChanging;

this.onDataCommitting = this.onDataCommitting.bind(this);
this.grid.dataCommitting = this.onDataCommitting;


public onCellValueChanging (s: IgcDataGridComponent, e: IgcGridCellValueChangingEventArgs) {
    if(s.editMode === EditModeType.CellBatch && this.undo !== null)
    {
        this.undo.disabled = false;
    }

    //check if value is empty upon exiting edit mode.
    if(e.newValue === "") {
        s.setEditError(e.editID, "Error, cell is empty");
        //or revert changes
        s.rejectEdit(e.editID);
    }
    else {
        s.acceptEdit(e.editID);
    }
}

public onDataCommitting (s: IgcDataGridComponent, e: IgcGridDataCommittingEventArgs) {
    if(e.changes[0].transactionType === TransactionType.Update) {
        //commit was passed
        s.acceptCommit(e.commitID);
    }
    else{
        //commit was prevented
        s.rejectCommit(e.commitID);
    }
}
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    CellValueChanging="OnCellValueChanging"
    DataCommitting="OnDataCommitting">
 </IgbDataGrid>

@code {
    public IgbDataGrid DataGridRef;

    public void OnCellValueChanging(IgbGridCellValueChangingEventArgs e)
    {
        //check if value is empty upon exiting edit mode.
        if(e.NewValue == "")
        {
            this.DataGridRef.SetEditError(e.EditID, "Error, cell is empty");
            //or revert changes
            this.DataGridRef.RejectEdit(e.EditID);
        }
        else
        {
            this.DataGridRef.AcceptEdit(e.EditID);
        }
    }

    public void OnDataCommitting(IgbGridDataCommittingEventArgs e)
    {
        if(e.Changes[0].TransactionType == TransactionType.Update)
        {
            //commit was passed
            this.DataGridRef.AcceptCommit(e.CommitID);
        }
        else
        {
            //commit was prevented
            this.DataGridRef.RejectCommit(e.CommitID);
        }
    }
}
```
---
title: $PlatformShort$ Data Grid | Cell and Row Editing with Batch Updating | Infragistics
_description: Use Infragistics' $PlatformShort$ grid component which supports the cell and row editing feature that can also be configured to batch update all cells of the grid at any given moment. Learn how $ProductName$ can help you better display your data!
_keywords: $PlatformShort$ Table, Data Grid, cell and row editing, $ProductName$, batch updating, Infragistics
mentionedTypes: ['Grid', 'EditModeType', 'TransactionType']
---
# $PlatformShort$ Grid Editing

The $ProductName$ Data Table / Data Grid supports cell and row editing with batch updating. Note, this is currently limited to non-templated columns.

## $PlatformShort$ Grid Editing Example

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-editing' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Grid Editing Example"></iframe>
</div>
<sample-button src="grids/data-grid/cell-editing"></sample-button>

<div class="divider--half"></div>

## Overview

Editing in the $PlatformShort$ data grid is configured by using the `EditMode` option of the $PlatformShort$ grid. This property takes three different options, listed below:

- `None`: Editing is not enabled.
- `Cell`: Allow cells to enter edit mode and commit the value on exiting edit mode.
- `CellBatch`: Allows cells to enter edit mode but changes will be cached later until they are committed.
- `Row`: Allow rows to enter edit mode and commit the value on exit.

When set to `CellBatch`, in order to commit the changes you must perform the `commitEdits` method from the grid. The grid will italicize the cells until they are committed providing control over when to push changes back to the datasource.   

In addition, error handling can be performed by hooking the `onCellValueChanging` event and inspecting new values before they are comitted. The grid exposes a `setEditError` method that can output an error message. This keeps the cell in edit mode until a valid value is entered. Otherwise the grid's `rejectEdit` method can be performed to revert the invalid value. If no invalid value is found, you can also commit your changes by calling the grid's `acceptEdit` method.

Commits can be approved or declined at the grid level by hooking `onDataCommitting` via the `acceptCommit` or `rejectCommit` methods passing the `commitID` event argument as the paramter. This event also exposes a `changes` collection whichs stores all the modifications prior to being committed. For example, you can check if a commit was from an add, update, or delete operation via the `TransactionType` property exposed on the `changes` collection and perform an `acceptCommit` or `rejectCommit` when necessary. 

## Code Snippet

The following demonstrates how to configure editing on the data grid and committing the data.

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
<DataGrid Height="100%" Width="100%" @ref="DataGridRef"
    DataSource="DataSource"
    EditMode="EditModeType.CellBatch" />
<button @onclick="OnCommitClick">Commit Data</button>

@code {
    public DataGrid DataGridRef;

    private void OnCommitClick(MouseEventArgs e)
    {
        this.DataGridRef.CommitEdits();
    }
}
```

## Undo/Redo batch changes

The following demonstrates how to revert changes while batch updating is enabled. 

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
<DataGrid Height="100%" Width="100%" @ref="DataGridRef"
    DataSource="DataSource"
    EditMode="EditModeType.CellBatch" />
<button @onclick="OnUndoClick">Undo</button>
<button @onclick="OnRedoClick">Redo</button>

@code {
    public DataGrid DataGridRef;

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

## Error Validation and Commit Integrity

The following demonstrates how incorporate error by checking if cells are empty when leaving edit mode and accepts commits that are from updated cells only. 

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
@code {
    public void OnCellValueChanging(GridCellValueChangingEventArgs e)
    {
        if(e.NewValue == "")
        {
            this.DataGridRef.SetEditError(e.EditID, "Error, cell is empty");
            this.DataGridRef.RejectEdit(e.EditID);
        }
    }

    public void OnDataCommitting(GridDataCommittingEventArgs e)
    {
        if(e.Changes[0].TransactionType == TransactionType.Update)
        {
            this.DataGridRef.AcceptCommit(e.CommitID);
        }
        else
        {
            this.DataGridRef.RejectCommit(e.CommitID);
        }
    }
}
```
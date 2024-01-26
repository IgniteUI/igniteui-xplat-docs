---
title: {Platform} {ComponentTitle} Cell Editing - {ProductName}
_description: The {ComponentTitle} is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Cell Editing

The {ProductName} Cell Editing in {Platform} {ComponentTitle} provides a great data manipulation capability of the content of individual cells within the {Platform} {ComponentTitle} component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in {ProductName} is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## {Platform} {ComponentTitle} Cell Editing and Edit Templates Example

`sample="/{ComponentSample}/editing-columns", height="700", alt="{Platform} {ComponentTitle} Cell Editing and Edit Templates Example"`

<!-- Angular -->

> [!Note]
>By using `CellEditor` with any type of editor component, the keyboard navigation flow will be disrupted. The same applies to direct editing of the custom cell that enters edit mode. This is because the **focus** will remain on the **cell element**, not on the editor component that we've added. This is why we should take leverage of the `Focus` directive, which will move the focus directly in the in-cell component and will preserve **a fluent editing flow** of the cell/row.

<!-- end:Angular -->

## Cell Editing

### Editing through UI

You can enter edit mode for specific cell, when an editable cell is focused in one of the following ways:
 - on double click;
 - on single click - Single click will enter edit mode only if the previously selected cell was in edit mode and currently selected cell is editable. If the previously selected cell was not in edit mode, single click will select the cell without entering edit mode;
 - on key press <kbd>Enter</kbd>;
 - on key press <kbd>F2</kbd>;

You can exit edit mode **without committing** the changes in one of the following ways:
 - on key press <kbd>Escape</kbd>;
 - when you perform *sorting*, *filtering*, *searching* and *hiding* operations;

You can exit edit mode and **commit** the changes in one of the following ways:
 - on key press <kbd>Enter</kbd>;
 - on key press <kbd>F2</kbd>;
 - on key press <kbd>Tab</kbd>;
 - on single click to another cell - when you click on another cell in the `{ComponentName}`, your changes will be submitted.
 - operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the `{ComponentName}`. This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the `{ComponentName}` API but only if primary key is defined:

<!-- ComponentStart: Grid -->
<!-- Angular, WebComponents -->
```typescript
public updateCell() {
    this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
}
```
<!-- end: Angular, WebComponents -->

```razor
this.grid.UpdateCell(newValue, rowID, 'ReorderLevel')
```

<!-- React -->
```typescript
function updateCell() {
    grid1Ref.current.updateCell(newValue, rowID, 'ReorderLevel');
}
```
<!-- end: React -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public updateCell() {
    this.treeGrid.updateCell(newValue, rowID, 'Age');
}
```

```razor
this.treeGrid.UpdateCell(newValue, rowID, 'ReorderLevel')
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public updateCell() {
    this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
}
```

```razor
this.hierarchicalGrid.UpdateCell(newValue, rowID, 'ReorderLevel')
```
<!-- ComponentEnd: HierarchicalGrid -->

Another way to update cell is directly through `Update` method of `Cell`:

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->
```typescript
public updateCell() {
    const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```
<!-- end: Angular, WebComponents -->

```razor
private UpdateCell() {
    IgbCell cell = this.grid1.GetCellByColumn(rowIndex, "ReorderLevel");
    cell.Update(70);
}
```
<!-- React -->
```typescript
function updateCell() {
    const cell = grid1Ref.current.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = grid1Ref.current.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```
<!-- end: React -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public updateCell() {
    const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
    // You can also get cell by rowID if primary key is defined
    // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
    cell.update(9999);
}
```

```razor
private UpdateCell() {
    IgbCell cell = this.treeGrid.GetCellByColumn(rowIndex, "Age");
    cell.Update(9999);
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public updateCell() {
    const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```

```razor
private UpdateCell() {
    IgbCell cell = this.hierarchicalGrid.GetCellByColumn(rowIndex, "ReorderLevel");
    cell.Update(70);
}
```
<!-- ComponentEnd: HierarchicalGrid -->


### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

<!-- Angular -->

If you want to provide a custom template which will be applied when a cell is in edit mode, you can make use of the `CellTemplateDirective`. To do this, you need to pass an **ng-template** marked with the `CellEditor` directive and properly bind your custom control to the cell `EditValue`:

```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```
```html
<igc-column id="class" field="class" header="Class" editable="true">
</igc-column>
```
```ts
constructor() {
    var class = this.class = document.getElementById('class') as IgcColumnComponent;

    this._bind = () => {
        class.inlineEditorTemplateRef = this.classEditTemplate;
    }
    this._bind();
}

public classEditTemplate = (ctx: IgcCellTemplateContext) => {
    return html`
        <igc-select class="cell-select" value="${ctx.cell.value}" >
        </igc-select>
    `;
}
```

This code is used in the sample below which implements an [SelectComponent](../select.md) in the cells of the `Race`, `Class` and `Alignment` columns.

`sample="/{ComponentSample}/cell-selection-style", height="625", alt="{Platform} {ComponentTitle} Select Example"`

> [!Note]
> Any changes made to the cell's `EditValue` in edit mode, will trigger the appropriate [editing event](editing.md#event-arguments-and-sequence) on exit and apply to the transaction state if transactions are enabled.

> [!Note]
> The cell template `Cell` controls how a column's cells are shown when outside of edit mode.
> The cell editing template directive `CellEditor`, handles how a column's cells in edit mode are displayed and controls the edited cell's edit value.

> [!Note]
>By using `CellEditor` with any type of editor component, the keyboard navigation flow will be disrupted. The same applies to direct editing of the custom cell that enters edit mode. This is because the **focus** will remain on the **cell element**, not on the editor component that we've added. This is why we should take leverage of the `Focus` directive, which will move the focus directly in the in-cell component and will preserve **a fluent editing flow** of the cell/row.

<!-- end: Angular -->

<!-- Blazor, WebComponents -->

If you want to provide a custom template which will be applied to a cell, you can pass such template either to the cell itself, or to its header. First create the column as you usually would:

<!-- Blazor -->

<!-- ComponentStart: Grid -->
```razor
<IgbColumn
    Field="Race"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```razor
<IgbColumn
    Field="Category"
    DataType="GridColumnDataType.String"
    InlineEditorTemplateScript="WebTreeGridCellEditCellTemplate"
    Editable="true"
    Name="column1"
    @ref="column1">
</IgbColumn>
```
<!-- ComponentEnd: TreeGrid -->

and pass the template:

```razor
*** In JavaScript ***

igRegisterScript("WebGridCellEditCellTemplate", (ctx) => {
    let cellValues = [];
    let uniqueValues = [];
    for(const i of ctx.cell.grid.data){
        const field = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`<div>
    <igc-select position-strategy="fixed" @igcChange=${ e => ctx.cell.editValue = e.detail.value}>
          ${cellValues}
    </igc-select>
</div>`;
}, false);
```
<!-- end: Blazor -->

<!-- WebComponents -->

<!-- ComponentStart: Grid -->

```html
<igc-column
    field="Race"
    data-type="string"
    editable="true"
    name="column1"
    id="column1">
</igc-column>
```

and pass the templates to this column in the index.ts file:

```typescript
constructor() {
    var grid1 = document.getElementById('grid1') as {ComponentName}Component;
    var column1 = document.getElementById('column1') as IgcColumnComponent;
    var column2 = document.getElementById('column2') as IgcColumnComponent;
    var column3 = document.getElementById('column3') as IgcColumnComponent;

    grid1.data = this.webGridCellEditSampleRoleplay;
    column1.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column2.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column3.inlineEditorTemplate = this.webGridCellEditCellTemplate;
}


public webGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    for(const i of (this.webGridCellEditSampleRoleplay as any)){
        const field: string = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`
        <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
            ${cellValues}
        </igc-select>
    `;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igc-column
    field="Category"
    data-type="string"
    editable="true"
    name="column1"
    id="column1">
</igc-column>
```

and pass the templates to this column in the index.ts file:

```typescript
constructor() {
    var treeGrid = document.getElementById('treeGrid') as {ComponentName}Component;
    var column1 = document.getElementById('column1') as IgcColumnComponent;

    treeGrid.data = this.ordersTreeData;
    column1.inlineEditorTemplate = this.webTreeGridCellEditCellTemplate;
}

```

<!-- ComponentStart: TreeGrid -->
```ts

constructor() {
        var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
        var column1 = document.getElementById('column1') as IgcColumnComponent;
        var column2 = document.getElementById('column2') as IgcColumnComponent;
        var column3 = document.getElementById('column3') as IgcColumnComponent;

        treeGrid.data = this.webGridCellEditSampleRoleplay;
        column1.inlineEditorTemplate = this.webGridCellEditCellTemplate;
        column2.inlineEditorTemplate = this.webGridCellEditCellTemplate;
        column3.inlineEditorTemplate = this.webGridCellEditCellTemplate;
}

private _webGridCellEditSampleRoleplay: WebGridCellEditSampleRoleplay = null;
public get webGridCellEditSampleRoleplay(): WebGridCellEditSampleRoleplay {
    if (this._webGridCellEditSampleRoleplay == null) 
    {
        this._webGridCellEditSampleRoleplay = new WebGridCellEditSampleRoleplay();
    }

    return this._webGridCellEditSampleRoleplay;
}

public webGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
        let cellValues: any = [];
        let uniqueValues: any = [];
        for(const i of (this.webGridCellEditSampleRoleplay as any)){
            const field: string = ctx.cell.column.field;
            if(uniqueValues.indexOf(i[field]) === -1 )
            {
                cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
                uniqueValues.push(i[field]);
            }
        }
        return html`
        <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
              ${cellValues}
        </igc-select>
        `;
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- end: WebComponents -->

<!-- end: Blazor, WebComponents -->

<!-- React -->

If you want to provide a custom template which will be applied to a cell, you can pass such template either to the cell itself, or to its header. First create the column as you usually would:

```tsx
<IgrColumn
    field="race"
    header="Race"
    dataType="String"
    editable="true"
    name="column1"
    id="column1">
</IgrColumn>
```

and pass the templates to this column in the index.ts file:

```typescript

const webGridCellEditCellTemplate = useCallback((ctx: IgrCellTemplateContext) => {
    const cellValues: any = [];
    const uniqueValues: any = [];
    for(const i of (webGridCellEditSampleRoleplay as any)){
      const field: string = ctx.cell.column.field;
      if(uniqueValues.indexOf(i[field]) === -1 )
      {
        cellValues.push(<IgrSelectItem key={i[field]} value={i[field]}>{i[field]}</IgrSelectItem>);
        uniqueValues.push(i[field]);
      }
    }
    return (
      <IgrSelect style={{width: '100%', height: '100%'}} size="large" change={(e: any) => ctx.cell.editValue = e.detail.value}>
            {cellValues}
      </IgrSelect>
    );
  }, [webGridCellEditSampleRoleplay]);

  useEffect(() => {
    const column1 = grid1Ref.current.getColumnByName('column1');
    const column2 = grid1Ref.current.getColumnByName('column2');
    const column3 = grid1Ref.current.getColumnByName('column3');

    grid1Ref.current.data = webGridCellEditSampleRoleplay;
    column1.inlineEditorTemplate = webGridCellEditCellTemplate;
    column2.inlineEditorTemplate = webGridCellEditCellTemplate;
    column3.inlineEditorTemplate = webGridCellEditCellTemplate;
      
    
  }, [webGridCellEditSampleRoleplay, webGridCellEditCellTemplate]);

```
<!-- end: React -->

Working sample of the above can be found here for further reference: 

`sample="/{ComponentSample}/cell-editing-sample", height="650", alt="{Platform} {ComponentTitle} Cell Editing Template Sample"`

<!-- Angular -->

<!-- For more information on how to configure columns and their templates, you can see the documentation for [Grid Columns configuration](../grid/grid.md#angular-grid-column-configuration). -->

<!-- end: Angular -->

<!-- ComponentStart: Grid -->

### {ComponentTitle} Excel Style Editing


Using Excel Style Editing allows the user to navigate trough the cells just as he would using the Excel, and ever so quickly edit them.

Implementing this custom functionality can be done by utilizing the events of the `{ComponentName}`. First we hook up to the grid's keydown events, and from there we can implement two functionalities:

* Constant edit mode

<!-- Angular, WebComponents -->

```typescript
public keydownHandler(event) {
  const key = event.keyCode;
  const grid = this.grid;
  const activeElem = grid.navigation.activeNode;

  if ((key >= 48 && key <= 57) ||
      (key >= 65 && key <= 90) ||
      (key >= 97 && key <= 122)) {
        // Number or Alphabet upper case or Alphabet lower case
        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !grid.crudService.cellInEditMode) {
            grid.crudService.enterEditMode(cell);
            cell.editValue = event.key;
        }
    }
}
```
<!-- end: Angular, WebComponents -->

<!-- React -->

```typescript
function keydownHandler(event) {
  const key = event.keyCode;
  const grid = grid1Ref.current;
  const activeElem = grid.navigation.activeNode;

  if ((key >= 48 && key <= 57) ||
      (key >= 65 && key <= 90) ||
      (key >= 97 && key <= 122)) {
        // Number or Alphabet upper case or Alphabet lower case
        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !grid.crudService.cellInEditMode) {
            grid.crudService.enterEditMode(cell);
            cell.editValue = event.key;
        }
    }
}
```
<!-- end: React -->

* <kbd>Enter</kbd>/<kbd>Shift+Enter</kbd> navigation

<!-- Angular, WebComponents -->
```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eligible cell, we will use a custom method that will check the next suitable index
    let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    this.grid.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        this.grid.clearCellSelection();
        this.cdr.detectChanges();
    });
}
```
<!-- end: Angular, WebComponents -->

<!-- React -->
```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eligible cell, we will use a custom method that will check the next suitable index
    let nextRow = getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    grid1Ref.current.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        grid1Ref.current.clearCellSelection();
    });
}
```
<!-- end: React -->

Key parts of finding the next eligible index would be:

```typescript
//first we check if the currently selected cell is the first or the last
if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
return currentRowIndex;
}
// in case using shift + enter combination, we look for the first suitable cell going up the field
if (previous) {
return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
}
// or for the next one down the field
return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
```

Please check the full sample for further reference:

##### {Platform} Grid Excel Style Editing Sample

`sample="/{ComponentSample}/editing-excel-style", height="550", alt="{Platform} {ComponentTitle} Excel Style Editing Example"`

Main benefits of the above approach include:

- Constant edit mode: typing while a cell is selected will immediately enter edit mode with the value typed, replacing the existing one
- Any non-data rows are skipped when navigating with <kbd>Enter</kbd>/<kbd>Shift+Enter</kbd>. This allows users to quickly cycle through their values.

<!-- ComponentEnd: Grid -->

## CRUD operations

> [!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The `{ComponentName}` provides a straightforward API for basic CRUD operations.

### Adding a new record

The `{ComponentName}` component exposes the `AddRow` method which will add the provided data to the data source itself.

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```
<!-- end: Angular, WebComponents -->

```razor
//Assuming we have a `GetNewRecord` method returning the new row data.
const record = this.GetNewRecord();
this.GridRef.AddRow(record);
```

<!-- React -->
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = getNewRecord();
grid1Ref.current.addRow(record);
```
<!-- end: React -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
}
```

```razor
//Assuming we have a `GetNewRecord` method returning the new row data.
const record = this.GetNewRecord();
this.TreeGridRef.AddRow(record);
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record, 1);
}
```
<!-- ComponentEnd: HierarchicalGrid -->

### Updating data in the {ComponentTitle}

Updating data in the {ComponentTitle} is achieved through `UpdateRow` and `UpdateCell` methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->
```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```
<!-- end: Angular, WebComponents -->

<!-- React -->
```typescript
// Updating the whole row
grid1Ref.current.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
grid1Ref.current.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
selectedCell.update(newData);

// Directly using the row `update` method
const row = grid1Ref.current.getRowByKey(rowID);
row.update(newData);
```
<!-- end: React -->


```razor
// Updating the whole row
this.grid.UpdateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.grid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.Update(newData);

// Directly using the row `update` method
const row = this.grid.GetRowByKey(rowID);
row.Update(newData);
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
// Updating the whole row
this.treeGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Tree Grid API
this.treeGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.treeGrid.getRowByKey(rowID);
row.update(newData);
```

```razor
// Updating the whole row
this.treeGrid.UpdateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Tree Grid API
this.treeGrid.UpdateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.Update(newData);

// Directly using the row `update` method
const row = this.treeGrid.GetRowByKey(rowID);
row.Update(newData);
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
// Updating the whole row
this.hierarchicalGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.hierarchicalGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.hierarchicalGrid.getRowByKey(rowID);
row.update(newData);
```
<!-- ComponentEnd: HierarchicalGrid -->

### Deleting data from the {ComponentTitle}

Please keep in mind that `DeleteRow` method will remove the specified row only if a `PrimaryKey` is defined.

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->
```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
<!-- end: Angular, WebComponents -->

<!-- React -->
```typescript
// Delete row through Grid API
grid1Ref.current.deleteRow(selectedCell.cellID.rowID);
// Delete row through row object
const row = grid1Ref.current.getRowByIndex(rowIndex);
row.delete();
```
<!-- end: React -->

```razor
// Delete row through Grid API
this.grid.DeleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.GetRowByIndex(rowIndex);
row.Delete();
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```

```razor
// Delete row through Tree Grid API
this.treeGrid.DeleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.GetRowByIndex(rowIndex);
row.Delete();
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```
<!-- ComponentEnd: HierarchicalGrid -->

These can be wired to user interactions, not necessarily related to the `{ComponentName}` for example, a button click:

```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

### Cell Validation on Edit Event

Using the `{ComponentName}`'s editing events, we can alter how the user interacts with the `{ComponentName}`.

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

<!-- Angular -->

We'll also display a custom error message using [Toast](../../notifications/toast.md).

<!-- end: Angular -->

The first thing we need to do is bind to the grid's event:

<!-- Angular -->
```html
<{ComponentSelector} (cellEdit)="handleCellEdit($event)">
</{ComponentSelector}>
```

<!-- end: Angular -->

<!-- React -->
```tsx
<{ComponentSelector} cellEdit={handleCellEdit}>
</{ComponentSelector}>
```
<!-- end: React -->

<!-- Blazor, WebComponents -->

```razor
<{ComponentSelector} CellEditScript="HandleCellEdit" />
```

<!-- ComponentStart: Grid -->
```typescript
constructor() {
    var grid = document.getElementById('grid') as IgcGridComponent;
    this.webGridCellEdit = this.webGridCellEdit.bind(this);
    grid.addEventListener("cellEdit", this.webGridCellEdit);
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```typescript
constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    this.webTreeGridCellEdit = this.webTreeGridCellEdit.bind(this);
    treeGrid.addEventListener("cellEdit", this.webTreeGridCellEdit);
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```ts
constructor() {
    var hGrid = document.getElementById('hGrid') as IgcHierarchicalGridComponent;
    hGrid.addEventListener("cellEdit", this.webHierarchicalGridCellEdit);
}
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Blazor, WebComponents -->

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- ComponentStart: Grid -->

<!-- Angular -->
```typescript
export class MyGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'UnitsOnOrder') {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.open();
            }
        }
    }
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
public webGridCellEdit(event: CustomEvent<IgcGridEditEventArgs>): void {
    const column = event.detail.column;
    if (column.field === 'UnitsOnOrder') {
            const rowData = event.detail.rowData;
            if (!rowData) {
                return;
            }
            if (event.detail.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                alert("You cannot order more than the units in stock!");
            }
    }
}

```
<!-- end: WebComponents -->

<!-- React -->
```typescript
function handleCellEdit(s: IgrGridBaseDirective, args: IgrGridEditEventArgs): void {
    const column = args.detail.column;

    if (column.field === 'UnitsOnOrder') {
        const rowData = args.detail.rowData;
        if (!rowData) {
            return;
        }
        if (args.detail.newValue > rowData.UnitsInStock) {
            args.detail.cancel = true;
            alert("You cannot order more than the units in stock!");  
        }
    }
}
```
<!-- end: React -->

```razor
*** In JavaScript ***
igRegisterScript("HandleCellEdit", (ev) => {
    var d = ev.detail;
    if (d.column != null && d.column.field == "UnitsOnOrder") {
        if (d.newValue > d.rowData.UnitsInStock) {
            d.cancel = true;
            alert("You cannot order more than the units in stock!")
        }
    }
}, false);
```
If the value entered in a cell under the **Units On Order** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and the user will be alerted to the cancellation.

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```typescript
public webTreeGridCellEdit(event: CustomEvent<IgcGridEditEventArgs>): void {
    const column = event.detail.column;
    		
    if (column.field === 'Age') {
        if (event.detail.newValue < 18) {
            event.detail.cancel = true;
            alert('Employees must be at least 18 years old!');
        }
    } else if (column.field === 'HireDate') {
        if (event.detail.newValue > new Date().getTime()) {
            event.detail.cancel = true;
            alert('The employee hire date must be in the past!');
        }
    }
}

```

```razor
*** In JavaScript ***
igRegisterScript("HandleCellEdit", (ev) => {
    const column = event.detail.column;

	if (column.field === 'Age') {
		if (event.detail.newValue < 18) {
			event.detail.cancel = true;
			alert('Employees must be at least 18 years old!');
		}
	} else if (column.field === 'HireDate') {
		if (event.detail.newValue > new Date().getTime()) {
			event.detail.cancel = true;
			alert('The employee hire date must be in the past!');
		}
	}
}, false);
```

If the value entered in a cell under the **Age** column is below 18 or the value in the **HireDate** column is in the future, the editing will be cancelled and the user will be alerted to the cancellation.

<!-- Angular -->

Here, we are validating two columns. If the user tries to set an invalid value for an employee's **Age** (below 18) or their **Hire Date** (a future date), the editing will be cancelled (the value will not be submitted) and a toast with an error message will be displayed.

<!-- end: Angular -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
export class MyHGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = event.column;
        if (column.field === 'Debut') {
            if (event.newValue > today.getFullYear()) {
                this.toast.message = 'The debut date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.newValue > new Date()) {
                this.toast.message = 'The launch date must be in the past!';
                this.toast.open();
                event.cancel = true;
            }
        }
    }
}
```

Here, we are validating two columns. If the user tries to change an artist's **Debut** year or an album's **Launch Date**, the grid will not allow any dates that are greater than today.

<!-- ComponentEnd: HierarchicalGrid -->

The result of the above validation being applied to our `{ComponentName}` can be seen in the below demo:

`sample="/{ComponentSample}/editing-events", height="650", alt="{Platform} {ComponentTitle} Editing Event Example"`

## Styling

<!-- WebComponents, Blazor, React -->

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS Properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- ComponentStart: Grid -->
```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid Class="grid"></IgbGrid>
```

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-edit-mode-color: orange;
    --ig-grid-cell-editing-background: lightblue;
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igc-tree-grid class="treeGrid"></igc-tree-grid>
```

```razor
<IgbTreeGrid Class="treeGrid"></IgbTreeGrid>
```

Then set the related CSS properties for that class:

```css
.treeGrid {
    --ig-grid-edit-mode-color: orange;
    --ig-grid-cell-editing-background: lightblue;
}
```
<!-- ComponentEnd: TreeGrid -->

### Styling Example

`sample="/{ComponentSample}/cell-editing-styling", height="650", alt="{Platform} {ComponentTitle} Cell Editing Styling Example"`

<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

The `{ComponentName}` allows for its cells to be styled through the [{ProductName} Theme Library](../themes/styles.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.

In the below steps, we are going to go over how you can style the grid's cell in edit mode and how you can scope those styles.

In order to use the [Ignite UI Theming Library](../themes/styles.md), we must first import the theme `index` file in our global styles:

### Importing Style Library

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Now we can make use of all of the functions exposed by the {ProductName} theme engine.

### Defining a Palette

After we've properly imported the index file, we create a custom palette that we can use. Let's define two colors that we like and use them to build a palette with [igx-palette](../themes/palettes.md):

```scss
$white: #fff;
$blue: #4567bb;

$color-palette: palette($primary: $white, $secondary: $blue);
```

### Defining Themes

We can now define the theme using our palette. The cells are styled by the [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme), so we can use that to generate a theme for our `{ComponentName}`:

```scss
$custom-grid-theme: grid-theme(
    $cell-editing-background: $blue,
    $cell-edited-value-color: $white,
    $cell-active-border-color: $white,
    $edit-mode-color: color($color-palette, "secondary", 200)
);
```

### Applying the Theme

The easiest way to apply our theme is with a `sass` `@include` statement in the global styles file:

```scss
@include grid($custom-grid-theme);
```

This way, the theme will apply to **all** grids in our application. If we wish to apply this custom styling only to a specific component, we need to scope the theme.

### Scoped Component Theme

In order for the custom theme to affect only our specific component, we can move all of the styles we just defined from the global styles file to our custom component's style file (including the [import](#importing-style-library) of the `index` file).

This way, due to {Platform}'s [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), our styles will be applied only to our custom component.

 > [!Note]
 >If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 > [!Note]
 >We wrap the statement inside of a `:host` selector to prevent our styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
            @include grid($custom-grid-theme);
        }
    }
}
```

### Styling Demo

In addition to the steps above, we can also style the controls that are used for the cells' editing templates: [igx-input-group](../input-group.md#styling), [igx-datepicker](../date-picker.md#styling) & [igx-checkbox](../checkbox.md#styling)

`sample="/{ComponentSample}/editing-style", height="700", alt="{Platform} {ComponentTitle} Editing Style Example"`



> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

## API References

* `{ComponentName}`

<!-- Angular -->
* `InputDirective`
<!-- end:Angular -->

* `DatePicker`

## Additional Resources

<!-- Angular -->

* [Build CRUD operations with the Grid](../general/how-to/how-to-perform-crud.md)


* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentStart:  HierarchicalGrid -->
<!-- * [Searching](search.md) -->
<!-- ComponentEnd:  HierarchicalGrid -->

<!-- end: Angular -->

<!-- Blazor, WebComponents, React -->

<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Searching](search.md)
<!-- ComponentEnd:  Grid -->

<!-- end: Blazor, WebComponents, React -->

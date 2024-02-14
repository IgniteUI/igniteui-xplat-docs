---
title: {Platform} {ComponentTitle} Selection - {ProductName}
_description: See how easy it is to select data in {ProductName} grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Selection Overview

With the {ProductName} Select feature in {Platform} {ComponentTitle} you can easily interact with and manipulate data using simple mouse interactions. There are three selection modes available: 

- Row selection
- Cell selection 
- Column selection 

With the `RowSelection` property, you can specify:

- None 
- Single  
- Multiple Select 

## {Platform} {ComponentTitle} Selection Example

The sample below demonstrates three types of **cell selection** behaviors in the `{ComponentName}`. Use the buttons below to enable each of the available selection modes.

<!-- Angular -->
A brief description will be provided on each button interaction through a snackbar message box.
<!-- end: Angular -->

`sample="/{ComponentSample}/cell-selection-mode", height="650", alt="{Platform} {ComponentTitle} Selection Example"`



## {Platform} {ComponentTitle} Selection Options

<!-- ComponentStart:  Grid -->
The {ProductName} `{ComponentName}` component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the `{ComponentName}`. In order to change/enable selection mode you can use `RowSelection`, `CellSelection` or `Selectable` properties.
<!-- ComponentEnd:  Grid -->

### {Platform} {ComponentTitle} Row Selection

Property `RowSelection` enables you to specify the following options:

- `None` - Row selection would be disabled for the `{ComponentName}`.
- `Single` - Selection of only one row within the `{ComponentName}` would be available.
- `Multiple` - Multi-row selection would be available by using the row selectors, with a key combination like <kbd>ctrl</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused.

<!-- ComponentStart: TreeGrid -->

- `MultipleCascade` -  This is a mode for cascading selection, resulting in the selection of all children in the tree below the record that the user selects with user interaction. In this mode a parent's selection state entirely depends on the selection state of its children.

<!-- ComponentEnd: TreeGrid -->

> Go to [Row selection topic](row-selection.md) for more information.

### {Platform} {ComponentTitle} Cell Selection

Property `CellSelection` enables you to specify the following options:

- `None` - Cell selection would be disabled for the `{ComponentName}`.
- `Single` - Selection of only one cell within the `{ComponentName}` would be available.
- `Multiple` - Currently, this is the default state of the selection in the `{ComponentName}`. Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

<!-- ComponentStart:  Grid -->
> Go to [Cell selection topic](cell-selection.md) for more information.
<!-- ComponentEnd:  Grid -->

### {Platform} {ComponentTitle} Column Selection

The `Selectable` property enables you to specify the following options for each `Column`. The corresponding column selection will be enabled or disabled if this property is set to true or false, respectively.

This leads to the following three variations:

- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>ctrl</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>shift</kbd> + <kbd>mouse click</kbd> selects everything in between.

<!-- ComponentStart:  Grid -->
> Go to [Column selection topic](column-selection.md) for more information.
<!-- ComponentEnd:  Grid -->

<!-- ComponentStart: Grid -->

## {Platform} {ComponentTitle} Context Menu

Using the `ContextMenu` event you can add a custom context menu to facilitate your work with `{ComponentName}`. With a **right click** on the grid's body, the event emits the cell on which it is triggered. The **context menu** will operate with the emitted cell.

If there is a **multi-cell selection**, we will put logic, which will check whether the selected cell is in the area of the multi-cell selection. If it is, we will also emit the values of the selected cells.

Basically the main function will look like this:

<!-- Angular -->

```typescript
public rightClick(eventArgs: any) {
     // Prevent the default behavior of the right click
    eventArgs.event.preventDefault();
    this.multiCellArgs = {};
    // If we have multi-cell selection, check if selected cell is within the ranges
    if (this.multiCellSelection) {
        const node = eventArgs.cell.selectionNode;
        const isCellWithinRange = this.grid1.getSelectedRanges().some(range => {
            if (node.column >= range.columnStart &&
                node.column <= range.columnEnd &&
                node.row >= range.rowStart &&
                node.row <= range.rowEnd) {
                return true;
            }
            return false;
        })
        // If the cell is within a multi-cell selection range, bind all the selected cells data
        if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
        }
    }
    // Set the position of the context menu
    this.contextmenuX = eventArgs.event.clientX;
    this.contextmenuY = eventArgs.event.clientY;
    this.clickedCell = eventArgs.cell;
    // Enable the context menu
    this.contextmenu = true;
}
```

<!-- end: Angular -->

<!-- WebComponents -->

```ts
    public rightClick(event: any) {
        const eventArgs = event.detail;
        eventArgs.event.preventDefault();
        this.multiCellArgs = {};
        if (this.multiCellSelection) {
          const node = eventArgs.cell.selectionNode;
          const isCellWithinRange = this.grid.getSelectedRanges().some((range) => {
            if (
              node.column >= range.columnStart &&
              node.column <= range.columnEnd &&
              node.row >= range.rowStart &&
              node.row <= range.rowEnd
            ) {
              return true;
            }
            return false;
          });
          if (isCellWithinRange) {
            this.multiCellArgs = { data: this.multiCellSelection.data };
          }
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.toggleContextMenu();
      }
```
<!-- end: WebComponents -->

```tsx
function rightClick(grid: IgrGridBaseDirective, event: IgrGridCellEventArgs) {
    const eventArgs = event.detail;
    eventArgs.event.preventDefault();
    const node = eventArgs.cell.id;
    const isCellWithinRange = grid.getSelectedRanges().some((range: any) => {
        if (node.columnID >= range.columnStart &&
            node.columnID <= range.columnEnd &&
            node.rowIndex >= range.rowStart &&
            node.rowIndex <= range.rowEnd
            ) {
                return true;
            }
        return false;
    });
    setIsCellWithinRange(isCellWithinRange);
    setClickedCell(eventArgs.cell);
    openContextMenu(eventArgs.event.clientX, eventArgs.event.clientY)
}
```

```razor
    public void RightClick(MouseEventArgs e)
    {
        this.MenuX = e.ClientX + "px";
        this.MenuY = e.ClientY + "px";
    }


    public void onMenuShow(IgbGridCellEventArgs e)
    {
        IgbGridCellEventArgsDetail detail = e.Detail;
        this.ShowMenu = true;
        this.ClickedCell = detail.Cell;
    }
```

The context menu will have the following functions:

- Copy the selected cell's *value*.
- Copy the selected cell's *dataRow*.
- If the selected cell is within a **multi-cell selection range**, copy all the *selected data*.

<!-- Angular -->

```typescript
//contextmenu.component.ts

public copySelectedCellData(event) {
    const selectedData = { [this.cell.column.field]: this.cell.value };
    this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
    this.onCellValueCopy.emit({ data: selectedData });
}

public copyRowData(event) {
    const selectedData = this.cell.row.data ;
    this.copyData(JSON.stringify(this.cell.row.data));
    this.onCellValueCopy.emit({ data: selectedData });
}

public copySelectedCells(event) {
    const selectedData = this.selectedCells.data;
    this.copyData(JSON.stringify(selectedData));
    this.onCellValueCopy.emit({ data: selectedData });
}
```

<!-- end: Angular -->

<!-- WebComponents -->

```ts
    public copySelectedRowData() {
        const selectedData = this.grid.getRowData(this.clickedCell.id.rowID);
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        this.toggleContextMenu();
    }

    public copySelectedCellData() {
        const selectedData = this.clickedCell.value;
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        this.toggleContextMenu();
    }


    public copySelectedData() {
        const selectedData = this.grid.getSelectedData();
        this.copyData(selectedData);
        const selectedDataArea = document.getElementById('selectedArea');
        selectedDataArea.innerText = JSON.stringify(selectedData);
        
        this.toggleContextMenu();
    }

    private copyData(data: any[]) {
        const tempElement = document.createElement('input');
        document.body.appendChild(tempElement);
        tempElement.setAttribute('id', 'temp_id');
        (document.getElementById('temp_id') as HTMLInputElement).value = JSON.stringify(data);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    }
```

<!-- end: WebComponents -->

```tsx
function copySelectedRowData() {
    const selectedData = gridRef.current.getRowData(clickedCell.id.rowID);
    copyData(selectedData);
    closeContextMenu();
}

function copySelectedCellData() {
    const selectedData = clickedCell.value;
    copyData(selectedData);
    closeContextMenu();
}

function copySelectedData() {
    const selectedData = gridRef.current.getSelectedData(null,null);
    copyData(selectedData);
    closeContextMenu();
}

function copyData(data: any[]) {
    const tempElement = document.createElement('input');
    document.body.appendChild(tempElement);
    tempElement.setAttribute('id', 'temp_id');
    (document.getElementById('temp_id') as HTMLInputElement).value = JSON.stringify(data);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    setSelectedData(JSON.stringify(data));
}
```

```razor
    public void CopyCellData()
    {
        this.ShowMenu = false;
        this.SelectedData = this.ClickedCell.Value.ToString();
        StateHasChanged();
    }


    public async void CopyRowData()
    {
        this.ShowMenu = false;
        NwindDataItem rowData = this.NwindData.ElementAt(this.ClickedCell.Id.RowIndex);
        this.SelectedData = JsonConvert.SerializeObject(rowData);
        StateHasChanged();
}

    public async void CopyCellsData()
    {
        this.ShowMenu = false;
        var selectedData = await this.grid.GetSelectedDataAsync(true, false);
        this.SelectedData = JsonConvert.SerializeObject(selectedData);
        StateHasChanged();
    }
```

The `{ComponentName}` will fetch the copied data and will paste it in a container element.

The template we are going to use to combine the grid with the context menu:

<!-- Angular -->
```html
<div class="wrapper">
    <div class="grid__wrapper" (window:click)="disableContextMenu()">
        <igx-grid #grid1 [data]="data" [autoGenerate]="false" height="500px" width="100%"
            (contextMenu)="rightClick($event)" (rangeSelected)="getCells($event)"
            (selected)="cellSelection($event)">
        <!-- Columns area -->
        </igx-grid>
        <div *ngIf="contextmenu==true">
            <contextmenu [x]="contextmenuX" [y]="contextmenuY" [cell]="clickedCell" [selectedCells]="multiCellArgs" (onCellValueCopy)="copy($event)">
            </contextmenu>
        </div>
    </div>
    <div class="selected-data-area">
        <div>
           <pre>{{copiedData}}</pre>
        </div>
    </div>
</div>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
    <div class="container sample">
      <div class="wrapper">
        <igc-grid auto-generate="false" width="50%" height="100%" name="grid" id="grid">
          <igc-column field="ProductID" header="Product ID">
          </igc-column>
          <igc-column field="ProductName" header="Product Name">
          </igc-column>
          <igc-column field="UnitsInStock" header="Units In Stock" data-type="number">
          </igc-column>
          <igc-column field="UnitPrice" header="Units Price" data-type="number">
          </igc-column>
          <igc-column field="Discontinued" data-type="boolean">
          </igc-column>
          <igc-column field="OrderDate" header="Order Date" data-type="date">
          </igc-column>
        </igc-grid>
        <div id="selectedArea" class="selected-data-area">
        </div>
      </div>
    </div>
    <div id="menu" style="display: none;" class="contextmenu">
      <span id="copySingleCell" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Cell Data
      </span>
      <span id="copyRow" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Row Data
      </span>
      <span id="copyMultiCells" class="item">
        <igc-icon name="content_copy"></igc-icon>Copy Cells Data
      </span>
    </div>
  </div>
```
<!-- end: WebComponents -->

```tsx
 <>
    <div className="container sample">
        <div className="wrapper" onClick={closeContextMenu}>
            <IgrGrid
                autoGenerate="false"
                data={northWindData}
                primaryKey="ProductID"
                ref={gridRef}
                contextMenu={rightClick}>
            <IgrColumn field="ProductID" header="Product ID">
            </IgrColumn>
            <IgrColumn field="ProductName" header="Product Name">
            </IgrColumn>
            <IgrColumn field="UnitsInStock" header="Units In Stock" dataType="number">
            </IgrColumn>
            <IgrColumn field="UnitPrice" header="Units Price" dataType="number">
            </IgrColumn>
            <IgrColumn field="Discontinued" dataType="boolean">
            </IgrColumn>
            <IgrColumn field="OrderDate" header="Order Date" dataType="date">
            </IgrColumn>
            </IgrGrid>
            <div className="selected-data-area">
                {selectedData}
            </div>
        </div>
    </div>
    <div style={{display: "none"}} className="contextmenu" ref={contextMenuRef}>
        <span className="item" onClick={copySelectedCellData}>
            <IgrIcon ref={iconRef} collection='material' name="content_copy"></IgrIcon>Copy Cell Data
        </span>
        <span className="item" onClick={copySelectedRowData}>
            <IgrIcon collection='material' name="content_copy"></IgrIcon>Copy Row Data
        </span>
        {isCellWithinRange && (
        <span className="item" onClick={copySelectedData}>
            <IgrIcon collection='material' name="content_copy"></IgrIcon>Copy Cells Data
        </span>)}
    </div>
</>
```

```razor
<div class="container vertical">
    <div class="wrapper" oncontextmenu="event.preventDefault()">
        <IgbGrid AutoGenerate="false"
                 CellSelection="GridSelectionMode.Multiple"
                 ContextMenu="onMenuShow"
                 @oncontextmenu="RightClick"
                 Name="grid"
                 @ref="grid"
                 Data="NwindData">
            <IgbColumn Field="ProductID"
                       Header="Product ID">
            </IgbColumn>

            <IgbColumn Field="ProductName"
                       Header="Product Name">
            </IgbColumn>

            <IgbColumn Field="UnitsInStock"
                       Header="Units In Stock"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="UnitPrice"
                       Header="Units Price"
                       DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn Field="Discontinued"
                       DataType="GridColumnDataType.Boolean">
            </IgbColumn>

            <IgbColumn Field="OrderDate"
                       Header="Order Date"
                       DataType="GridColumnDataType.Date">
            </IgbColumn>

        </IgbGrid>
        <div class="selected-data-area">
            @SelectedData
        </div>
        </div>
        @if (ShowMenu)
        {
            <div id="menu" class="contextmenu" style="left: @MenuX; top: @MenuY">
                <span id="copySingleCell" class="item" @onclick="CopyCellData">
                    <IgbIcon @ref=icon IconName="content_copy" Collection="material"></IgbIcon>Copy Cell Data
                </span>
            <span id="copyRow" class="item" @onclick="CopyRowData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Row Data
                </span>
            <span id="copyMultiCells" class="item" @onclick="CopyCellsData">
                    <IgbIcon IconName="content_copy" Collection="material"></IgbIcon>Copy Cells Data
                </span>
            </div>
        }
</div>
```

 Select multiple cells and press the right mouse button. The context menu will appear and after selecting **Copy cells data** the selected data will appear in the right empty box.

 The result is:

`sample="/{ComponentSample}/custom-context-menu", height="600", alt="{Platform} {ComponentTitle} custom context menu"`


<!-- ComponentEnd: Grid -->

## Known Issues and Limitations

<!-- Angular -->

- Using the `{ComponentName}` with Selection enabled on IE11 requires the explicit import of the array polyfill in polyfill.ts of the {Platform} application. IE11 is no longer supported as of version 13.0.0.

```typescript
import 'core-js/es7/array';
```
<!-- end: Angular -->

When the grid has no `PrimaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection
- Row Expand/collapse
- Row Editing
- Row Pinning



## API References

* `{ComponentName}`


## Additional Resources

<!-- ComponentStart:  Grid -->
* [Row Selection](row-selection.md)
* [Cell Selection](cell-selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Virtualization and Performance](virtualization.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

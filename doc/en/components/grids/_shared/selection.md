---
title: {Platform} {ComponentTitle} Selection - {ProductName}
_description: See how easy it is to select data in {ProductName} grid using variety of events, rich API or with simple mouse interactions like single select.
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Selection Overview
With {ProductName} {ComponentTitle} you can easily select data by using variety of events, rich API or with simple mouse interactions like single select.

## {Platform} {ComponentTitle} Selection Example

The sample below demonstrates three types of **cell selection** behaviors in {ComponentTitle}. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.

<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-cell-selection-mode"
           alt="{Platform} {ComponentTitle}  Selection Example">
</code-view>

## {Platform} {ComponentTitle} Selection Options

{ProductName} {ComponentTitle} component provides three different selection modes - [Row selection](row-selection.md), [Cell selection](cell-selection.md) and [Column selection](column-selection.md). By default only **Multi-cell selection** mode is enabled in the {ComponentTitle}. In order to change/enable selection mode you can use `RowSelection`, `CellSelection` or `Selectable` properties.

### {Platform} {ComponentTitle} Row Selection

Property `RowSelection` enables you to specify the following options:
- none - Row selection would be disabled for the {ComponentTitle}
- single - Selection of only one row within the {ComponentTitle} would be available
- multiple - Multi-row selection would be available by using the `Row selectors`, with a key combination like <kbd>ctrl</kbd> + <kbd>click</kbd>, or by pressing the <kbd>space key</kbd> once a cell is focused

<!-- ComponentStart: TreeGrid -->

- multipleCascade -  This is a mode for cascading selection, resulting in the selection of all children in the tree below the record that the user selects with user interaction. In this mode a parent's selection state entirely depends on the selection state of its children.

<!-- ComponentEnd: TreeGrid -->

> Go to [Row selection topic](row-selection.md) for more information.

### {Platform} {ComponentTitle} Cell Selection

Property `CellSelection` enables you to specify the following options:
- none - Cell selection would be disabled for the {ComponentTitle}
- single - Selection of only one cell within the {ComponentTitle} would be available.
- multiple - Currently, this is the default state of the selection in the {ComponentTitle}. Multi-cell selection is available by mouse dragging over the cells, after a left button mouse clicked continuously.

> Go to [Cell selection topic](cell-selection.md) for more information.

### {Platform} {ComponentTitle} Column Selection

The `Selectable` property enables you to specify the following options for each **column**:
- false - the corresponding column selection will be disabled for the {ComponentTitle}
- true - the corresponding column selection will be enabled for the {ComponentTitle}
- This lead to the following three variations:
- Single selection - <kbd>mouse click</kbd> over the column cell.
- Multi column selection - holding <kbd>ctrl</kbd> + <kbd>mouse click</kbd> over the column cells.
- Range column selection - holding <kbd>shift</kbd> + <kbd>mouse click</kbd> selects everything in between.

> Go to [Column selection topic](column-selection.md) for more information.

<!-- ComponentStart: Grid -->

## {Platform} {ComponentTitle} Context Menu

Using the `ContextMenu` event you can add a custom context menu to facilitate your work with **{ComponentName}**. With a **right click** on the grid's body, the event emits the cell on which it is triggered. The **context menu** will operate with the emitted cell.

If there is a **multi-cell selection**, we will put logic, which will check whether the selected cell is in the area of the multi-cell selection. If it is, we will also emit the values of the selected cells.

Basically the main function will look like this:

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

```razor
TO DO
```

The context menu will have the following functions:
- Copy the selected cell's *value*
- Copy the selected cell's *dataRow*
- If the selected cell is within a **multi-cell selection range**, copy all the *selected data*

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

```razor
TO DO
```

The {ComponentName} will fetch the copied data and will paste it in a container element.

The template we are going to use to combine the grid with the context menu:
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

```razor
TO DO
```

 Select multiple cells and press the `right mouse` button. The context menu will appear and after selecting `Copy cells data` the selected data will appear in the right empty box.
 The result is:


<code-view style="height:600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-custom-context-menu" >
</code-view>

<!-- ComponentEnd: Grid -->

## Known Issues and Limitations

- Using the {ComponentTitle} with Selection enabled on IE11 requires the explicit import of the array polyfill in polyfill.ts of the {Platform} application. IE11 is no longer supported as of version 13.0.0.

```typescript
import 'core-js/es7/array';
```

- When the grid has no `PrimaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
    * Row Selection
    * Row Expand/collapse
    * Row Editing
    * Row Pinning

## API References

* {ComponentName}
<!-- ComponentStart: Grid, HierarchicalGrid, PivotGrid -->

* `GridRow`

<!-- ComponentEnd: Grid, HierarchicalGrid, PivotGrid -->
<!-- ComponentStart: TreeGrid -->

* `TreeGridRow`

<!-- ComponentEnd: TreeGrid -->
* `GridCell`

## Additional Resources

* [{ComponentTitle} overview](@@igMainTopic.md)
* [Row Selection](row-selection.md)
* [Cell Selection](cell-selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Virtualization and Performance](virtualization.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

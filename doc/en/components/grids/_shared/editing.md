---
title: {Platform} {ComponentTitle} Editing - {ProductName}
_description: Get a powerful public API and an easy way to perform data manipulations like creating, updating, or deleting records. See the {Platform} {ComponentTitle} editing options!
_keywords: data manipulation, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Editing

The {ProductName} `{ComponentName}` component provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The data manipulation phases are: [Cell Editing](cell-editing.md), [Row Editing](row-editing.md), and Batch Editing (Coming Soon). The `{ComponentName}` gives you a powerful public API which allows you to customize the way these operations are performed.

<!-- Angular -->

Additionally, **Cell editing** exposes several default editors based on the column data type, that could be easily customized via [CellEditor directive](cell-editing.md#cell-editing-templates) or [Row directives](row-editing.md#customizing-row-editing-overlay).

<!-- end: Angular -->

## Setup

In order to specify which edit mode should be enabled, the `{ComponentName}` exposes the following boolean properties - `Editable` and `RowEditable`.

The `Editable` property enables you to specify the following options:

- **false** - the editing for the corresponding column will be disabled. This is the default value.
- **true** - the editing for the corresponding column will be enabled.

>Keep in mind that if the column is not editable, you can still modify its value through the public API exposed by the `{ComponentName}`.

The `RowEditable` property enables you to specify the following options:

- **false** - the row editing in the corresponding grid will be disabled. This is the default value.
- **true** - the row editing in the corresponding grid will be enabled.

In the `{ComponentName}`, if you set `RowEditable` property to true, and the `Editable` property is not explicitly defined for any column, the editing will be enabled for all the columns except the *primary key*.

<!--
[Batch editing](batch-editing.md) in the grid can be enabled for both [cell editing](cell-editing.md) and [row editing](row-editing.md) modes. In order to set up batch editing it is necessary to provide to the grid a  **TransactionService**.
-->

- **Cell and Batch Editing** - in this scenario every singe modification of each cell is preserved separately and undo/ redo operations are available on cell level;
- **Row and Batch Editing** - in this scenario the modifications are preserved on row level so undo/ redo operations will not be working for each cell that is modified but for the bunch of cell from each row.

### Editing Templates

 If you want to use a data type specific *edit templates*, you should specify the column's `DataType` property. So let's now see what are the default templates for each type:

 - For `string` data type, default template is using `Input`.
 - For `number` data type, default template is using `Input` type="number", so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to 0.
 - For `date` data type, default template is using `DatePicker`
 - For `dateTime` data type, default template is using `DateTimeEditor`. This editor will give you a mask directions for the input elements part of the DateTime object.
 - For `time` -  data type, default template is using `TimePicker`.
 - For `boolean` data type, default template is using `Checkbox`.
 - For `currency` data type, default template is using `InputGroup` with prefix/suffix configuration based on application or grid locale settings.
 - For `percent` data type, default template is using `InputGroup` with suffix element that shows a preview of the edited value in percents.
 <!-- ComponentStart:  Grid -->
 - For custom templates you can see [Cell Editing topic](cell-editing.md#{PlatformLower}-grid-cell-editing-and-edit-templates-example)
 <!-- ComponentEnd:  Grid -->

<!-- ComponentStart:  Grid -->
All available column data types could be found in the official [Column types topic](column-types.md#default-template).
<!-- ComponentEnd:  Grid -->

### Event Arguments and Sequence
<!-- ComponentStart:  Grid -->
The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.
<!-- ComponentEnd:  Grid -->

 | Event           | Description                                                                                                                                               | Arguments                  | Cancellable |
 | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
 | `RowEditEnter`  | If `RowEditing` is enabled, fires when a row enters edit mode                                                                                             | `GridEditEventArgs`     | **true**    |
 | `CellEditEnter` | Fires when a cell **enters edit mode** (after `RowEditEnter`)                                                                                             | `GridEditEventArgs`     | **true**    |
 | `CellEdit`      | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing `Enter`)                                                     | `GridEditEventArgs`     | **true**    |
 | `CellEditDone`  | If value is changed, fires **after** a cell has been edited and cell's value is **committed**                                                             | `GridEditDoneEventArgs` | **false**   |
 | `CellEditExit`  | Fires when a cell **exits edit mode**                                                                                                                     | `GridEditDoneEventArgs` | **false**   |
 | `RowEdit`       | If `RowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | `GridEditEventArgs`     | **true**    |
 | `RowEditDone`   | If `RowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**.                                             | `GridEditDoneEventArgs` | **false**   |
 | `RowEditExit`   | If `RowEditing` is enabled, fires when a row **exits edit mode**                                                                                          | `GridEditDoneEventArgs` | **false**   |

### Event Cancelation

 - `RowEditEnter` - Neither `Row` nor `Cell` will enter edit mode.
 - `CellEditEnter` - Prevents entering cell edit. If `RowEditable` is enabled, row edit will be triggered, although cell edit will remain forbidden.
 - `CellEdit` - Allowed `Cell` and/or `Row` edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
 - `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:

`sample="/{ComponentSample}/editing-lifecycle", height="620", alt="{Platform} {ComponentTitle} editing lifecycle"`


### Features integration
While a cell/row is in edit mode, a user may interact with the grid in many ways. The following table specifies how a certain interaction affects the current editing:

| {ComponentTitle} | Filtering | Sorting | Paging | Moving | Pinning | Hiding | GroupBy | Resizing | Escape | Enter |  F2   |  Tab  | Cell Click | Add new row/Delete/Edit |
| ---------------- | :-------: | :-----: | :----: | :----: | :-----: | :----: | :-----: | :------: | :----: | :---: | :---: | :---: | :--------: | :---------------------: |
| Keep edit mode   |           |         |        |        |         |        |         |    ✔     |        |       |       |       |            |                         |
| Exit edit mode   |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Commit           |           |         |        |        |         |        |         |          |        |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Discard          |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |       |       |       |            |                         |

As seen from the table, all interactions, except resizing a column, will end the editing and will discard the new values. Should the new value be committed, this can be done by the developer in the corresponding feature "-ing" event.

Example how to commit new values, if user tries to sort the column while a cell/row is in edit mode:

```html
<igx-grid #grid [data]="localData" [primaryKey]="'ProductID'" (sorting)="onSorting($event)">
</igx-grid>
```

```html
<igc-grid id="grid" primary-key="ProductID" >
</igc-grid>
```


<!-- Angular -->

```typescript
public onSorting(event: ISortingEventArgs) {
    this.grid.endEdit(true);
}
```

<!-- end: Angular -->

<!-- WebComponents -->

```typescript
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.addEventListener("sorting", this.onSorting);
}

public onSorting(event: IgcSortingEventArgs) {
    this.grid.endEdit(true);
}
```
<!-- end: WebComponents -->

```razor
<IgbGrid
    Id="grid"
    SortingScript="SortingHandler"
    RowEditable="true">
</IgbGrid>

//In JavaScript
function SortingHandler() {
    grid.endEdit(true);
}
igRegisterScript("SortingHandler", SortingHandler, false);
```

```tsx
function onSorting(grid: IgrGridBaseDirective, event: IgrSortingEventArgs) {
    grid.endEdit(true);
}

<IgrGrid data={localData} primaryKey="ProductID" sorting={onSorting}>
</IgrGrid>
```

## API References

* `Cell`

<!-- ComponentStart: Grid, HierarchicalGrid -->

* `GridRow`

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

* `TreeGridRow`

<!-- ComponentEnd: TreeGrid -->
<!-- Angular -->
* `DatePickerComponent`
* `CheckboxComponent`
* `Overlay`
<!-- end: Angular -->
## Additional Resources

<!-- Angular, WebComponents, React -->


* [Column Data Types](column-types.md#default-template)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<!-- ComponentStart: HierarchicalGrid -->
<!-- * [Searching](search.md) -->
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular, WebComponents, React -->

<!-- Blazor -->

<!-- ComponentStart:  Grid -->
* [Column Data Types](column-types.md#default-template)
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

<!-- ComponentStart: HierarchicalGrid -->
<!-- * [Searching](search.md) -->
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Blazor -->
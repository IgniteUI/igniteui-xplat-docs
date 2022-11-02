---
title: Batch Editing and Transactions in {Platform} {ComponentTitle} - Infragistics
_description: Perform data manipulation without affecting the underlying data with {ComponentTitle} Batch Editing, using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Row Selection

With row selection in {ProductName}, there is row selector column that precedes all other columns within the row. When a user clicks on the row selector, the row will either become selected or deselected, enabling the user to select multiple rows of data.

## {Platform} Row Selection Example

<!-- ComponentStart: TreeGrid -->

The sample below demonstrates the four types of `{ComponentName}`'s **row selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box. Use the switch button to _hide_ or _show_ the row selector checkbox.

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid -->

The sample below demonstrates the three types of `{ComponentName}`'s **row selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box. Use the switch button to _hide_ or _show_ the row selector checkbox.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-selection-mode"
           github-src="{ComponentSample}/row-selection-mode"
           alt="{Platform} {ComponentTitle} Row Selection Example">
</code-view>



## Setup
In order to setup row selection in the `{ComponentName}`, you just need to set the `RowSelection` property. This property accepts `GridSelectionMode` enumeration.

`GridSelectionMode` exposes the following modes:

- **None**
- **Single**
- **Multiple**

<!-- ComponentStart: TreeGrid -->

- **MultipleCascade**

<!-- ComponentEnd: TreeGrid -->

Below we will take a look at each of them in more detail.

### None Selection

In the `{ComponentName}` by default row selection is disabled (`RowSelection` is None). So you can **not** select or deselect a row through interaction with the `{ComponentName}` UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set `RowSelection` to `Single` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the *space* key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected `RowSelectionChanging` event is emitted.

```html
<{ComponentSelector} [data]="remote | async" [rowSelection]="'single'" [autoGenerate]="true"
          (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true">
</{ComponentSelector}>
```

```typescript
public handleRowSelection(args) {
    if (args.added.length && args.added[0] === 3) {
        args.cancel = true;
    }
}
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Single
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

```razor
function rowSelectionChangingHandler(args) {
        if (args.detail.added.length && args.added[0] === 3) {
        args.detail.cancel = true;
    }
}

igRegisterScript("rowSelectionChangingHandler", rowSelectionChangingHandler, false);
```

### Multiple Selection

To enable multiple row selection in the `{ComponentName}` just set the `RowSelection` property to `Multiple`. This will enable a row selector field on each row and in the `{ComponentName}` header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the *space* key when a cell is focused. If you have selected one row and click on another while holding the *shift* key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you *click* while holding the *ctrl* key, the row will be toggled and the previous selection will be preserved.

```html
<{ComponentSelector} [data]="remote | async" [primaryKey]="'ProductID'" [rowSelection]="'multiple'"
        (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true" [autoGenerate]="true">
</{ComponentSelector}>
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

<!-- ComponentStart: TreeGrid -->

### Cascade Selection

To enable cascade row selection in the `{ComponentName}` just set the `RowSelection` property to `MultipleCascade`. This will enable a row selector field on each row and in the `{ComponentName}` header. The row selector allows users to select multiple rows which would select all children in the tree below. The selection persists through scrolling, paging, and data operations, such as sorting and filtering. The row can also be selected by clicking on a cell or by pressing the *space* key when a cell is focused. If you have selected one row and *click* on another while holding the *shift* key, the selection of a parent record will select all of its children even if they are not in the selected range. In this selection mode, when you *click* on a single row, the previously selected rows will be deselected. If you *click* while holding the *ctrl* key, the row and its children will be toggled and the previous selection will be preserved.

```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true"
        [rowSelection]="'multipleCascade'" [allowFiltering]="true" (rowSelectionChanging)="handleRowSelection($event)">
</igx-tree-grid>
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.MultipleCascade
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

<!-- ComponentEnd: TreeGrid -->

**Notes**

<!-- ComponentStart: Grid, HierarchicalGrid -->

<!-- Angular -->
* In order to have proper row selection and cell selection, while `{ComponentName}` has remote virtualization, a `PrimaryKey` should be provided.
* When the `{ComponentName}` has remote virtualization, then clicking the header checkbox will select/deselect all records that are currently in the grid. When new data is loaded in the `{ComponentName}` on demand, newly added rows will not be selected and it is a limitation, so you should handle that behavior by yourself and you can select these rows by using the provided API methods.
<!-- end: Angular -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

* Row selection will trigger `RowSelectionChanging` event. This event gives you information about the *new selection*, *old selection*, the rows that have been *added* and *removed* from the old selection. Also the event is *cancellable*, so this allows you to prevent selection.
* When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set `HideRowSelectors` to **true**.
* When you switch between row selection modes at runtime, this will clear the previous row selection state.


## API usage

### Select Rows Programmatically

The code snippet below can be used to select one or multiple rows simultaneously (via `PrimaryKey`). Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```html
<{ComponentSelector} #grid  [data]="remote | async"
[primaryKey]="'ProductID'"
[rowSelection]="'multiple'
[autoGenerate]="true">
</{ComponentSelector}>

<button (click)="grid.selectRows([1,2,5], true)">Select 1,2 and 5</button>
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
    </{ComponentSelector}>
    <IgbButton onclick='grid.selectRows([1,2,5], true)'>Select</IgbButton>
```

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the `{ComponentName}` selection.

### Deselect Rows

If you need to deselect rows programmatically, you can use the `DeselectRows` method.

```html
<{ComponentSelector} #grid  [data]="remote | async"
[primaryKey]="'ProductID'"
[rowSelection]="'multiple'
[autoGenerate]="true">
</{ComponentSelector}>

<button (click)="grid.deselectRows([1,2,5], true)">Select 1,2 and 5</button>
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
    </{ComponentSelector}>
    <IgbButton onclick='grid.deselectRows([1,2,5], true)'>Select</IgbButton>
```

### Row Selection Event

When there is some change in the row selection `RowSelectionChanging` event is emitted. `RowSelectionChanging` exposes the following arguments:
- `OldSelection`  - array of row IDs that contains the previous state of the row selection.
- `NewSelection` - array of row IDs that match the new state of the row selection.
- `Added` - array of row IDs that are currently added to the selection.
- `Removed` - array of row IDs that are currently removed according old selection state.
- `Event` - the original event that triggered row selection change.
- `Cancel` -  allows you the prevent the row selection change.

<!-- ComponentStart: HierarchicalGrid -->

- `Owner` - if the event is triggered from a child grid, this will give you a reference to the component, from which the event is emitted.

<!-- ComponentEnd: HierarchicalGrid -->

```html
<{ComponentSelector} (rowSelectionChanging)="handleRowSelectionChange($event)">
</{ComponentSelector}>
```

```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection
}

```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChangingScript='rowSelectionChangingHandler'
             Data=northwindEmployees>
    </{ComponentSelector}>
```

```razor
function rowSelectionChangingHandler(args) {
    args.detail.cancel = true; // this will cancel the row selection
}

igRegisterScript("rowSelectionChangingHandler", rowSelectionChangingHandler, false);
```

### Select All Rows

Another useful API method that `{ComponentName}` provides is `SelectAll`. By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. If you call the method with *false* parameter, `SelectAll(false)` will always select all data in the grid, even if filtering is applied.

> **Note** Keep in mind that `SelectAll()` will not select the rows that are deleted.

### Deselect All Rows

`{ComponentName}` provides a `DeselectAll` method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. If you call the method with *false* parameter, `DeselectAll(false)` will always clear all row selection state even if filtering is applied.

### How to get Selected Rows

If you need to see which rows are currently selected, you can get their row IDs with the `SelectedRows` getter.

```typescript
public getSelectedRows() {
    const currentSelection = this.grid.selectedRows; // return array of row IDs
}
```

Additionally, assigning row IDs to `SelectedRows` will allow you to change the grid's selection state.

```typescript
public mySelectedRows = [1, 2, 3]; // an array of row IDs
```

```html
<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" [autoGenerate]="false" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitsInStock'"></igx-column>
</{ComponentSelector}>
```

```razor
<{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             SelectedRows=selectedRows
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
</{ComponentSelector}>

@code {
    public object[] selectedRows = {1, 2, 4};
}
```

### Row Selector Templates

You can template header and row selectors in the `{ComponentName}` and also access their contexts which provide useful functionality for different scenarios.

By default, the `{ComponentName}` **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [`RowSelectionChanging` event](#row-selection-event). In case you implement a custom template with a `Click` handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row Template

```razor
igRegisterScript("WebGridRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    if (ctx.$implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.$implicit.index}</span>
<igc-checkbox checked></igc-checkbox>
</div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.$implicit.index}</span>
<igc-checkbox></igc-checkbox>
</div>`;
    }
}, false);
```

<!-- Angular -->

To create a custom row selector template,  within the `{ComponentSelector}`, declare an `<ng-template>` with `igxRowSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

The `selected` property shows whether the current row is selected or not while the `index` property can be used to access the row index.
```html
<ng-template igxRowSelector let-rowContext>
    {{ rowContext.index }}
    <igx-checkbox
        [checked]="rowContext.selected"
        [readonly]="true"
    ></igx-checkbox>
</ng-template>
```

The `rowID` property can be used to get a reference of an `{ComponentSelector}` row. This is useful when you implement a `click` handler on the row selector element.
```html
<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.key)"></igx-checkbox>
</ng-template>
```
In the above example we are using an `igx-checkbox` and we bind `rowContext.selected` to its `checked` property. See this in action in our [`Row Numbering Demo`](#row-numbering-demo).

<!-- ComponentStart: HierarchicalGrid -->

> [!NOTE]
The `rowContext.select()` and `rowContext.deselect()` methods are exposed in the template context of an `{ComponentSelector}`. They make it easier to toggle the current row, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular -->

### Header Template

```razor
igRegisterScript("WebGridHeaderRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div style="width: 70px;height: 60px;display: flex;">
    <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/igLogo.png">
</div>`;
}, false);
```

<!-- Angular -->

To create a custom header selector template, within the `{ComponentName}`, declare an `<ng-template>` with `igxHeadSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The `SelectedCount` property shows you how many rows are currently selected while `totalCount` shows you how many rows there are in the `{ComponentName}` in total.

```html
<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}
</ng-template>
```

The `SelectedCount` and `TotalCount` properties can be used to determine if the head selector should be checked or indeterminate (partially selected).

```html
<{ComponentSelector} [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]=" headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</{ComponentSelector}>
```

<!-- ComponentStart: HierarchicalGrid -->

Each hierarchy level in an `{ComponentSelector}` can have its own row and header templating.

> [!NOTE]
The `headContext.selectAll()` and `headContext.deselectAll()` methods are exposed in the template context of an `{ComponentSelector}`. They make it easier to toggle all rows, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular -->

### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses `RowContext.Index` to display row numbers and an `Checkbox` bound to `RowContext.Selected`.

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-selection-template-numbers"
           github-src="{ComponentSample}/row-selection-template-numbers"
           alt="{Platform} {ComponentTitle} Selection Template Numbering Example">
</code-view>

<!-- ComponentStart: Grid -->

<!-- Angular -->
### Excel Style Row Selectors Demo

This demo uses custom templates to resemble Excel-like header and row selectors.

<!-- NOTE this sample is differed -->

<code-view style="height:550px"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-selection-template-excel"
           github-src="{ComponentSample}/row-selection-template-excel"
           alt="{Platform} {ComponentTitle} Selection Template Excel Example">
</code-view>

<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

### Conditional Selection Demo

This demo prevents some rows from being selected using the `RowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-conditional-row-selectors"
           github-src="{ComponentSample}/conditional-row-selectors"
           alt="{Platform} {ComponentTitle} Conditional Row Selectors Example">
</code-view>

## API References

* `{ComponentName}`
* `{ComponentName}Row`
* `{ComponentName}Cell`

## Additional Resources

* [{ComponentTitle} Overview](overview.md)
* [Selection](selection.md)
* [Cell selection](cell-selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Virtualization and Performance](virtualization.md)


Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

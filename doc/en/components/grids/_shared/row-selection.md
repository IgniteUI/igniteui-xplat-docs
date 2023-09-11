---
title: Row Selection in {Platform} {ComponentTitle} - Infragistics
_description: Perform data manipulation without affecting the underlying data with {ComponentTitle} Batch Editing, using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Row Selection

With row selection in {Platform} `{ComponentName}`, there is row selector column that precedes all other columns within the row. When a user clicks on the row selector, the row will either become selected or deselected, enabling the user to select multiple rows of data.

## {Platform} Row Selection Example

<!-- ComponentStart: TreeGrid -->

The sample below demonstrates the four types of `{ComponentName}`'s **row selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box. Use the switch button to _hide_ or _show_ the row selector checkbox.

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid -->

The sample below demonstrates the three types of `{ComponentName}`'s **row selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box. Use the switch button to _hide_ or _show_ the row selector checkbox.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

`sample="/{ComponentSample}/row-selection-mode", height="700", alt="{Platform} {ComponentTitle} Row Selection Example"`


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

<!-- Angular -->
```html
<{ComponentSelector} [data]="remote | async" [rowSelection]="'single'" [autoGenerate]="true"
          (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true">
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" row-selection="Single" auto-generate="true"
        allow-filtering="true">
</{ComponentSelector}>
```
```ts
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.addEventListener("rowSelectionChanging", this.handleRowSelection);
}
```

```typescript
public handleRowSelection(args: IgcRowSelectionEventArgs) {
    if (args.detail.added.length && args.detail.added[0] === 3) {
        args.detail.cancel = true;
    }
}
```
<!-- end: WebComponents -->

```tsx
function handleRowSelection(args: IgrRowSelectionEventArgs) {
    if (args.detail.added.length && args.detail.added[0] === 3) {
        args.detail.cancel = true;
    }
}

<{ComponentSelector} rowSelection="single" autoGenerate="true" allowFiltering="true" rowSelectionChanging={handleRowSelection}>
</{ComponentSelector}>
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Single
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChanging='RowSelectionChanging'
             Data=northwindEmployees>
    </{ComponentSelector}>
@code {
    private void RowSelectionChanging(IgbRowSelectionEventArgs args)
    {
        // handler for selection change
    }
}
```

### Multiple Selection

To enable multiple row selection in the `{ComponentName}` just set the `RowSelection` property to `Multiple`. This will enable a row selector field on each row and in the `{ComponentName}` header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the *space* key when a cell is focused. If you have selected one row and click on another while holding the *shift* key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you *click* while holding the *ctrl* key, the row will be toggled and the previous selection will be preserved.

<!-- Angular -->
```html
<{ComponentSelector} [data]="remote | async" [primaryKey]="'ProductID'" [rowSelection]="'multiple'"
        (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true" [autoGenerate]="true">
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" primary-key="ProductID" row-selection="Multiple"
        allow-filtering="true" auto-generate="true">
</{ComponentSelector}>
```
<!-- end: WebComponents -->

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
```

```tsx
<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple"
        allowFiltering="true" autoGenerate="true">
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

```html
<igc-tree-grid id="grid" primaryKey="ID" foreign-key="ParentID" auto-generate="true"
        row-selection="MultipleCascade" allow-filtering="true">
</igc-tree-grid>
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.MultipleCascade
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
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

<!-- Angular -->
```html
<{ComponentSelector} #grid  [data]="remote | async"
[primaryKey]="'ProductID'"
[rowSelection]="'multiple'
[autoGenerate]="true">
</{ComponentSelector}>

<button (click)="grid.selectRows([1,2,5], true)">Select 1,2 and 5</button>
```
<!-- end: Angular -->

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=grid
             AutoGenerate=true
             Data=northwindEmployees>
    </{ComponentSelector}>
    <IgbButton @onclick=Select>Select</IgbButton>
    @code {
        public IgbGrid grid;
        private async void Select()
        {
            object[] array = new object[] { 1,2, 5 };
            await this.grid.SelectRowsAsync(array, true);
        }
    }
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</{ComponentSelector}>

<button id='select'>Select 1,2 and 5</button>
```

```ts
constructor() {
    document.getElementById("select").addEventListener("click", this.onClickSelect);
}
public onClickSelect() {
    const grid = document.getElementById("grid") as IgcGridComponent;
    grid.selectRows([1,2,5], true);
}
```
<!-- end: WebComponents -->

```tsx
function onClickSelect() {
    gridRef.current.selectRows([1,2,5], true);
}

<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" autoGenerate="true" ref={gridRef}>
</{ComponentSelector}>
<button onClick={onClickSelect}>Select 1,2 and 5</button>
```

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the `{ComponentName}` selection.

### Deselect Rows

If you need to deselect rows programmatically, you can use the `DeselectRows` method.

<!-- Angular -->
```html
<{ComponentSelector} #grid  [data]="remote | async"
[primaryKey]="'ProductID'"
[rowSelection]="'multiple'
[autoGenerate]="true">
</{ComponentSelector}>

<button (click)="grid.deselectRows([1,2,5], true)">Select 1,2 and 5</button>
```
<!-- end: Angular -->

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=grid
             AutoGenerate=true
             Data=northwindEmployees>
    </{ComponentSelector}>
    <IgbButton @onclick=Deselect>Deselect</IgbButton>
    @code {
        public IgbGrid grid;
        private async void Deselect()
        {
            object[] array = new object[] { 1, 2, 5 };
            await this.grid.DeselectRowsAsync(array);
        }
    }
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</{ComponentSelector}>

<button id='deselect'>DeSelect</button>
```
```ts
constructor() {
    document.getElementById("deselect").addEventListener("click", this.onClickDeselect);
}
public onClickDeselect() {
    const grid = document.getElementById("grid") as IgcGridComponent;
    grid.deselectRows([1,2,5]);
}
```
<!-- end: WebComponents -->

```tsx
function onClickDeselect() {
    gridRef.current.deselectRows([1,2,5]);
}

<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" autoGenerate="true" ref={gridRef}>
</{ComponentSelector}>
<button onClick={onClickDeselect}>Deselect 1,2 and 5</button>
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

<!-- Angular -->
```html
<{ComponentSelector} (rowSelectionChanging)="handleRowSelectionChange($event)">
</{ComponentSelector}>
```
<!-- end: Angular -->

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.addEventListener("rowSelectionChanging", this.handleRowSelectionChange);
}

public handleRowSelectionChange(args) {
    args.detail.cancel = true; // this will cancel the row selection
}
```

```tsx
function handleRowSelectionChange(args: IgrRowSelectionEventArgs) {
    args.detail.cancel = true; // this will cancel the row selection
}

<{ComponentSelector} rowSelectionChanging={handleRowSelectionChange}>
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
             RowSelectionChanging='RowSelectionChanging'
             Data=northwindEmployees>
    </{ComponentSelector}>
@code {
    private void RowSelectionChanging(IgbRowSelectionEventArgs args)
    {
        // handler
    }
}
```

### Select All Rows

Another useful API method that `{ComponentName}` provides is `SelectAllRows`. By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. If you call the method with *false* parameter, `SelectAllRows(false)` will always select all data in the grid, even if filtering is applied.

> **Note** Keep in mind that `SelectAllRows` will not select the rows that are deleted.

### Deselect All Rows

`{ComponentName}` provides a `DeselectAllRows` method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. If you call the method with *false* parameter, `DeselectAllRows(false)` will always clear all row selection state even if filtering is applied.

### How to get Selected Rows

If you need to see which rows are currently selected, you can get their row IDs with the `SelectedRows` getter.

```typescript
public getSelectedRows() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    const currentSelection = grid.selectedRows; // return array of row IDs
}
```

```razor
    <{ComponentSelector} Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=grid
             AutoGenerate=true
             Data=northwindEmployees>
    </{ComponentSelector}>
    <IgbButton @onclick=GetSelected>Get selected</IgbButton>
    @code {
        public IgbGrid grid;
        private async void GetSelected()
        {
            var selected = this.grid.SelectedRows;
        }
    }
```

```tsx
function getSelectedRows() {
    return gridRef.current.selectedRows;
}
```

Additionally, assigning row IDs to `SelectedRows` will allow you to change the grid's selection state.


<!-- Angular -->
```html
<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" [autoGenerate]="false" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitsInStock'"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```ts

public mySelectedRows = [1, 2, 3]; // an array of row IDs
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.selectedRows = this.mySelectedRows;
}
```

```tsx
const mySelectedRows = [1,2,3];

<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" autoGenerate="false" selectedRows={mySelectedRows}>
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
    public object[] selectedRows = new object[] { 1, 2, 5 };
}
```

### Row Selector Templates

You can template header and row selectors in the `{ComponentName}` and also access their contexts which provide useful functionality for different scenarios.

By default, the `{ComponentName}` **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [RowSelectionChanging event](#row-selection-event). In case you implement a custom template with a `Click` handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row Template


To create a custom row selector template,  within the `{ComponentSelector}` you can use the `RowSelectorTemplate` property. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

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

```razor
igRegisterScript("WebGridRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    if (ctx.implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.implicit.index}</span>
<igc-checkbox checked></igc-checkbox>
</div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.implicit.index}</span>
<igc-checkbox></igc-checkbox>
</div>`;
    }
}, false);
```

```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    if (ctx.implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
            <span> ${ctx.implicit.index}</span>
            <igc-checkbox checked></igc-checkbox>
            </div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
            <span> ${ctx.implicit.index}</span>
            <igc-checkbox></igc-checkbox>
            </div>`;
    }
}
```

```tsx
function rowSelectorTemplate(ctx: IgrRowSelectorTemplateContext) {
    if (ctx.dataContext.implicit.selected) {
        return (
            <>
                <div style={{justifyContent: 'space-evenly', display: 'flex', width: '70px'}}>
                    <span> ${ctx.dataContext.implicit.index}</span>
                    <IgrCheckbox checked></IgrCheckbox>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div style={{justifyContent: 'space-evenly', display: 'flex', width: '70px'}}>
                    <span> ${ctx.dataContext.implicit.index}</span>
                    <IgrCheckbox checked></IgrCheckbox>
                </div>
            </>
        );
    }
}

<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" autoGenerate="false" rowSelectorTemplate={rowSelectorTemplate}>
</{ComponentSelector}>
```

The `rowID` property can be used to get a reference of an `{ComponentSelector}` row. This is useful when you implement a `click` handler on the row selector element.
```html
<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.key)"></igx-checkbox>
</ng-template>
```
```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    return html`
        <igc-checkbox
            @click="${(event: any) => {
            this.onSelectorClick(event, ctx.implicit.key);
            }}"
        ></igc-checkbox>
    `;
}
```

```tsx
public rowSelectorTemplate(ctx: IgrRowSelectorTemplateContext) {
    return (
        <>
            <IgrCheckbox onClick={(event) => onSelectorClick(event, ctx.dataContext.implicit.key)}>
            </IgrCheckbox>
        </>
    );
}
```
In the above example we are using an `Checkbox` and we bind `rowContext.selected` to its `checked` property. See this in action in our [Row Numbering Demo](#row-numbering-demo).

<!-- ComponentStart: HierarchicalGrid -->

> [!Note]
The `rowContext.select()` and `rowContext.deselect()` methods are exposed in the template context of an `{ComponentSelector}`. They make it easier to toggle the current row, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

### Header Template

To create a custom header selector template, within the `{ComponentName}`, you can use the `HeadSelectorTemplate` property. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The `SelectedCount` property shows you how many rows are currently selected while `totalCount` shows you how many rows there are in the `{ComponentName}` in total.

```html
<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}
</ng-template>
```

```ts
public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    return html` ${ctx.implicit.selectedCount} / ${ctx.implicit.totalCount} `;
};
```

```tsx
function headSelectorTemplate(ctx: IgrHeadSelectorTemplateContext) {
    return (
        <>
            {ctx.dataContext.implicit.selectedCount} / {ctx.dataContext.implicit.totalCount}
        </>
    );
};
```

```razor
public RenderFragment<IgbHeadSelectorTemplateContext> Template = (context) =>
{
    return @<div> <img style="min-width:80px;" src="https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/igLogo.png"/></div>;
};
```

The `SelectedCount` and `TotalCount` properties can be used to determine if the head selector should be checked or indeterminate (partially selected).


<!-- Angular -->
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
<!-- end: Angular -->

```html
<{ComponentSelector} id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</{ComponentSelector}>
```

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.headSelectorTemplate = this.headSelectorTemplate;
}

public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    const implicit: any = ctx.implicit;
    if (implicit.selectedCount > 0 && implicit.selectedCount === implicit.totalCount) {
            return html`<igc-checkbox checked></igc-checkbox>`;
        } else if (implicit.selectedCount > 0 && implicit.selectedCount !== implicit.totalCount) {
            return html`<igc-checkbox indeterminate></igc-checkbox>`;
        }
        return html`<igc-checkbox></igc-checkbox>`;
}
```

```tsx
function headSelectorTemplate(ctx: IgcHeadSelectorTemplateContext) {
    const implicit: any = ctx.dataContext.implicit;
    if (implicit.selectedCount > 0 && implicit.selectedCount === implicit.totalCount) {
            return (
                <>
                    <IgrCheckbox checked></IgrCheckbox>
                </>
            );
        } else if (implicit.selectedCount > 0 && implicit.selectedCount !== implicit.totalCount) {
            return (
                <>
                    <IgrCheckbox indeterminate></IgrCheckbox>
                </>
            );
        }
        return (
            <>
                <IgrCheckbox ></IgrCheckbox>
            </>
        );
}

<{ComponentSelector} primaryKey="ProductID" rowSelection="multiple" autoGenerate="true" headSelectorTemplate={headSelectorTemplate}>
</{ComponentSelector}>
```

<!-- ComponentStart: HierarchicalGrid -->

Each hierarchy level in an `{ComponentSelector}` can have its own row and header templating.

> [!Note]
The `headContext.selectAll()` and `headContext.deselectAll()` methods are exposed in the template context of an `{ComponentSelector}`. They make it easier to toggle all rows, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses `RowContext.Index` to display row numbers and an `Checkbox` bound to `RowContext.Selected`.

`sample="/{ComponentSample}/row-selection-template-numbers", height="550", alt="{Platform} {ComponentTitle} Selection Template Numbering Example"`



<!-- ComponentStart: Grid -->


### Excel Style Row Selectors Demo

This demo uses custom templates to resemble Excel-like header and row selectors.

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/row-selection-template-excel", height="550", alt="{Platform} {ComponentTitle} Selection Template Excel Example"`




<!-- ComponentEnd: Grid -->

### Conditional Selection Demo

This demo prevents some rows from being selected using the `RowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.

`sample="/{ComponentSample}/conditional-row-selectors", height="550", alt="{Platform} {ComponentTitle} Conditional Row Selectors Example"`



## API References

* `{ComponentName}`
* `{ComponentName}Row`
* `Cell`

## Additional Resources

<!-- ComponentStart:  Grid -->
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
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

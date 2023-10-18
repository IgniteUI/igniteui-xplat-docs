---
title: {Platform} {ComponentTitle} Keyboard Navigation - {ProductName}
_description: Learn how to use {ComponentTitle} Keyboard Navigation with {ProductName}. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, {ProductName}, infragistics
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Keyboard Navigation

 The {ProductName} Keyboard Navigation feature in {Platform} {ComponentTitle} provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the `Grid` and allows the user to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the `{ComponentName}` has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the `{ComponentName}` introduces the following tab stops:

* **GroupBy or Toolbar area** (if enabled).
* **{ComponentTitle} header**.
* **{ComponentTitle} body**.
* **Column summaries** (if enabled).
* **{ComponentTitle} paginator** (if enabled).

> [!Note]
> Due to this change, navigating between the cells with <kbd>tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> is no longer supported in the `{ComponentName}`.
> Pressing the <kbd>Tab</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

> [!Note]
> Exposing any **focusable** element into the `{ComponentName}` body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full *keyboard navigation* support in the `{ComponentName}` header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the `{ComponentName}` header container is focused, the following key combinations are available:

### Key Combinations

 - <kbd>↑</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
 - <kbd>↓</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
 - <kbd>←</kbd> navigates one cell left (no looping).
 - <kbd>→</kbd> navigates one cell right (no wrapping between lines).
 - <kbd>Ctrl</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
 - <kbd>Home</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
 - <kbd>Ctrl</kbd> + <kbd>→</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
 - <kbd>End</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
 - <kbd>Alt</kbd> + <kbd>L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled.
 - <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable.
 - <kbd>Ctrl</kbd> + <kbd>↑</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared.
 - <kbd>Ctrl</kbd> + <kbd>↓</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared.
 - <kbd>Space</kbd> selects the column. If the column is already selected, selection is cleared.
 <!-- ComponentStart:Grid -->
 - <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> groups the column, if the column is marked as groupable.
 <!-- ComponentEnd:Grid -->
 - <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd> ungroups the column, if the column is marked as groupable.
 - <kbd>Alt</kbd> + <kbd>←</kbd> or <kbd>Alt</kbd> + <kbd>↑</kbd> collapses the column group header, if the header is not already collapsed.
 - <kbd>Alt</kbd> + <kbd>→</kbd> or <kbd>Alt</kbd> + <kbd>↓</kbd> expands the column group header, if the header is not already expanded.

## Body navigation

When the `{ComponentName}` body is focused, the following key combinations are available:

### Key Combination

<!-- ComponentStart: Grid, TreeGrid -->

- <kbd>↑</kbd>- navigates one cell up.
- <kbd>↓</kbd> navigates one cell down.

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

- <kbd>↑</kbd>- navigates one cell up, or one level up the grid hierarchy if necessary (no wrapping).
- <kbd>↓</kbd> navigates one cell down, or one level down the grid hierarchy if necessary (no wrapping).

<!-- ComponentEnd: HierarchicalGrid -->

 - <kbd>←</kbd> navigates one cell left (no wrapping between lines).
 - <kbd>→</kbd> - navigates one cell right (no wrapping between lines).
 - <kbd>Ctrl</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row.
 - <kbd>Ctrl</kbd> + <kbd>→</kbd> navigates to the rightmost cell in the row.
 - <kbd>Ctrl</kbd> + <kbd>↑</kbd> navigates to the first cell in the column.
 - <kbd>Ctrl</kbd> + <kbd>↓</kbd> navigates to the last cell in the column.
 - <kbd>Home</kbd> navigates to the leftmost cell in the row.
 - <kbd>End</kbd> navigates to the rightmost cell in the row.
 - <kbd>Ctrl</kbd> + <kbd>Home</kbd> navigates to the top leftmost data cell in the grid.
 - <kbd>Ctrl</kbd> + <kbd>End</kbd> navigates to the bottom rightmost data cell in the grid.
 - <kbd>Page Up</kbd> scrolls one page (view port) up.
 - <kbd>Page Down</kbd> scrolls one page (view port) down.
 - <kbd>Enter</kbd> enters edit mode.
 - <kbd>F2</kbd> enters edit mode.
 - <kbd>Esc</kbd> exits edit mode.
 - <kbd>Tab</kbd> available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to the **CANCEL** and **DONE** buttons, and from **DONE** button to the left-most editable cell in the row.
 - <kbd>Shift</kbd> + <kbd>Tab</kbd> - available only if there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the first cell in the row, moves the focus to the last editable cell in the previous row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to **CANCEL** and **DONE** buttons, and from **DONE** button to the right-most editable cell in the row.
 - <kbd>Space</kbd> - selects the row, if [Row Selection](row-selection.md) is enabled.
 - <kbd>Alt</kbd> + <kbd>←</kbd> or <kbd>Alt</kbd> + <kbd>↑</kbd> -
 <!-- ComponentStart: Grid -->
  over Group Row - collapses the group.
 <!-- ComponentEnd: Grid -->
 <!-- ComponentStart: HierarchicalGrid -->
  collapses the row island.
 <!-- ComponentEnd: HierarchicalGrid -->
 <!-- ComponentStart: TreeGrid -->
  collapses the current node.
 <!-- ComponentEnd: TreeGrid -->
 - <kbd>Alt</kbd> + <kbd>→</kbd> or <kbd>Alt</kbd> + <kbd>↓</kbd> -  <!-- ComponentStart: Grid -->
  over Group Row - expands the group.
 <!-- ComponentEnd: Grid -->
 <!-- ComponentStart: HierarchicalGrid -->
  expands the row island.
 <!-- ComponentEnd: HierarchicalGrid -->
 <!-- ComponentStart: TreeGrid -->
  expands the current node.
 <!-- ComponentEnd: TreeGrid -->
 <!-- ComponentStart: Grid -->
 - <kbd>Alt</kbd> + <kbd>←</kbd> or <kbd>Alt</kbd> + <kbd>↑</kbd> - over Master Detail Row - collapses the details view.
 - <kbd>Alt</kbd> + <kbd>→</kbd> or <kbd>Alt</kbd> + <kbd>↓</kbd> - over Master Detail Row - expands the details view.
 - <kbd>Space</kbd> - over Group Row - selects all rows in the group, if `RowSelection` property is set to multiple.
 <!-- ComponentEnd: Grid -->



Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

<!-- Angular, WebComponents, React -->

## Demo


`sample="/{ComponentSample}/keyboard-navigation-guide", height="600", alt="{Platform} {ComponentTitle} keyboard navigation guide"`

<!-- end: Angular, WebComponents, React -->

## Custom Keyboard Navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>Enter</kbd> or <kbd>Tab</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:


| API | Description | Arguments |
|---------|-------------|-----------|
| `GridKeydown` | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | `GridKeydownEventArgs` |
| `ActiveNodeChange` | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | `ActiveNodeChangeEventArgs` |
<!-- Angular, WebComponents -->
| `NavigateTo` | Navigates to a position in the grid, based on provided `Rowindex` and `VisibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type ```{ targetType: GridKeydownTargetType, target: Object }``` . Usage: <br />```grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });``` | ```RowIndex: number, VisibleColumnIndex: number, callback: ({ targetType: GridKeydownTargetType, target: Object }```) => {} |
| `GetNextCell`| returns `ICellPosition` object, which defines the next cell by `RowIndex` and `VisibleColumnIndex`. A callback function can be passed as a third parameter of `GetNextCell` method. The callback function accepts `Column` as a param and returns a `boolean` value indication if a given criteria is met: <br />```const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);``` | ```currentRowIndex: number, currentVisibleColumnIndex: number, callback: (Column) => boolean``` |
| `GetPreviousCell` | returns `ICellPosition` object, which defines the previous cell by `RowIndex` and `VisibleColumnIndex`. A callback function can be passed as a third parameter of `GetPreviousCell` method. The callback function accepts `Column` as a param and returns a `boolean` value indication if a given criteria is met: <br />```const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);``` | ``` CurrentRowIndex: number, CurrentVisibleColumnIndex: number, callback: (Column) => boolean ``` |
<!-- end: Angular, WebComponents -->
<br />

<!-- ComponentStart: HierarchicalGrid -->
> [!Note]
> Both `GetNextCell` and `GetPreviousCell` are
> available for the current level and cannot access cells from upper or lower level.
<!-- ComponentEnd: HierarchicalGrid -->

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the `GridKeydown` event:

<!-- ComponentStart: Grid -->
```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" (gridKeydown)="customKeydown($event)">
```
```html
<{ComponentSelector} id="grid1" primary-key="ProductID">
</{ComponentSelector}>
```

```razor
<{ComponentSelector} PrimaryKey="ProductID" GridKeydownScript="WebGridCustomKBNav">
</{ComponentSelector}>

// In JavaScript

igRegisterScript("WebGridCustomKBNav", (evtArgs) => {
    const args = evtArgs.detail;
    const target = args.target;
    const evt = args.event;
    const type = args.targetType;
    const grid = document.getElementsByTagName("igc-grid")[0];

    if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}, false);
```

```tsx
<{ComponentSelector} id="grid1" primaryKey="ProductID" gridKeydown={customKeydown}>
</{ComponentSelector}>
```

```ts
constructor() {
        var grid = this.grid = document.getElementById('grid') as IgcGridComponent;

        this._bind = () => {
            grid.data = this.data
            grid.addEventListener("gridKeydown", this.customKeydown);
        }
        this._bind();

    }
```

```typescript
function customKeydown(s: IgrGridBaseDirective, e: IgrGridKeydownEventArgs) {
  const detail = e.detail
  const target= detail.target;
  const evt = detail.event;
  const type = detail.targetType;

  if (type === GridKeydownTargetType.DataCell && target.editMode && evt.key.toLowerCase() === 'tab') {
      // 1. USER INPUT VALIDATION ON TAB
      
  }
  if (type === GridKeydownTargetType.DataCell && evt.key.toLowerCase() === 'enter') {
      // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS

  }
}
```
<!-- ComponentEnd: Grid -->


```typescript
public customKeydown(args: any) {
    const evt = args.detail;
    const target: IgxGridCell = evt.target as IgxGridCell;
    const evt: KeyboardEvent = evt.event as KeyboardEvent;
    const type = evt.targetType;

    if (type === 'dataCell' && target.inEditMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```
<!-- Angular, WebComponents, Blazor -->

Based on the event arg values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>Tab</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>Enter</kbd> key over a cell, we will move focus to cell in the next row:

<!-- end: Angular, WebComponents, Blazor -->

<!-- Angular, WebComponents -->
```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
        });
```
<!-- end: Angular, WebComponents -->

<!-- React -->

Based on the event arg values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>Tab</kbd> key over a cell in edit mode, we will perform validation on the input:

```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
```
<!-- end: React -->

```razor

// In JavaScript

igRegisterScript("WebGridCustomKBNav", (evtArgs) => {
    const args = evtArgs.detail;
    const target = args.target;
    const evt = args.event;
    const type = args.targetType;
    const grid = document.getElementsByTagName("igc-grid")[0];

    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    grid.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
    });
}, false);

```

> [!Note]
> Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:
- Double click or press <kbd>F2</kbd> key on a cell in a numeric column, change the value to **7** and press <kbd>Tab</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>Enter</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

#### Demo


`sample="/{ComponentSample}/keyboard-custom-navigation", height="400", alt="{Platform} {ComponentTitle} keyboard custom navigation"`


## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

<!-- Angular -->

## API References

* [{ComponentTitle} API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [{ComponentTitle} Styles]({environment:sassApiUrl}/index.html#function-grid-theme)

<!-- end: Angular -->

## Additional Resources

<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
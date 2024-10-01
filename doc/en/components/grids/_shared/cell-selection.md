---
title: {Platform} {ComponentTitle} Cell Selection - {ProductName}
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The {ComponentTitle} supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for {Platform}, infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Cell Selection

The {ProductName} Cell Selection in {Platform} {ComponentTitle} enables rich data select capabilities and offers powerful API in the `{ComponentName}` component. The {Platform} {ComponentTitle} supports three selection modes:

- {ComponentTitle} Multiple Cell Selection
- {ComponentTitle} Single Selection
- {ComponentTitle} None Selection

<!-- ComponentStart: HierarchicalGrid -->
In the `{ComponentName}` you can specify the cell selection mode on grid level. So for example in the parent grid multi-cell selection can be enabled, but in child grids cell selection mode can be single or disabled.
<!-- ComponentEnd: HierarchicalGrid -->

Let's dive deeper into each of these options.

## {Platform} {ComponentTitle} Cell Selection Example

The sample below demonstrates the three types of `{ComponentName}`'s **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.

`sample="/{ComponentSample}/cell-selection-mode", height="750", alt="{Platform} {ComponentTitle} Cell Selection Example"`



## Selection Types

### {ComponentTitle} Multiple-Cell Selection

<!-- ComponentStart: HierarchicalGrid -->
This is the default cell selection mode in both parent and child grids. Please keep in mind that you can make cell selection one grid at a time, and you can not make cross grid range selection or to have a selected cells in multiple grids. Each key combination related to range selection and mouse drag functionality can be used only in the same grid.
<!-- ComponentEnd: HierarchicalGrid -->

How to select cells:
- By **Mouse drag** - Rectangular data selection of cells would be performed.
- By <kbd>Ctrl</kbd> key press + **Mouse drag** - Multiple range selections would be performed. Any other existing cell selection will be persisted.
- Instant multi-cell selection by using <kbd>Shift</kbd> key. Select single cell and select another single cell by holding the <kbd>Shift</kbd> key. Cell range between the two cells will be selected. Keep in mind that if another second cell is selected while holding <kbd>Shift</kbd> key the cell selection range will be updated based on the first selected cell position (starting point).
- Keyboard multi-cell selection by using the <kbd>Arrow</kbd> keys while holding <kbd>Shift</kbd> key. Multi-cell selection range will be created based on the focused cell.
- Keyboard multi-cell selection by using the <kbd>Ctrl</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>  keys and <kbd>Ctrl</kbd> + <kbd>Home</kbd>/<kbd>End</kbd> while holding <kbd>Shift</kbd> key. Multi-cell selection range will be created based on the focused cell.
- Clicking with the **Left Mouse** key while holding <kbd>Ctrl</kbd> key will add single cell ranges into the selected cells collection.
- Continuous multiple cell selection is available, by clicking with the mouse and dragging.

<!-- ComponentStart: Grid, TreeGrid -->
#### Demo

<!-- TODO sample does not load any data in Blazor -->

`sample="/{ComponentSample}/multi-cell-selection-mode", height="700", alt="{Platform} {ComponentTitle} Multi Cell Selection Example"`



<!-- ComponentEnd: Grid, TreeGrid -->

### {ComponentTitle} Single Selection

When you set the `CellSelection` to **single**, this allows you to have only one selected cell in the grid at a time. Also the mode **mouse drag** will not work and instead of selecting a cell, this will make default text selection.

> When single cell is selected `Selected` event is emitted, no matter if the **selection mode** is **single** or **multiple**. In multi-cell selection mode when you select a range of cells `RangeSelected` event is emitted.

### {ComponentTitle} None Selection

If you want to disable cell selection you can just set `CellSelection` to **none**. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the **activation style** is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.

## Keyboard Navigation Interactions

### While Shift Key is Pressed

- <kbd>Shift</kbd> + <kbd>↑</kbd> to add above cell to the current selection.
- <kbd>Shift</kbd> + <kbd>↓</kbd> to add below cell to the current selection.
- <kbd>Shift</kbd> + <kbd>←</kbd> to add left cell to the current selection.
- <kbd>Shift</kbd> + <kbd>→</kbd> to add right cell to the current selection.

### While Ctrl + Shift Keys are Pressed

- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> to select all cells above the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd> to select all cells below the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd> to select all cells till the start of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd> to select all cells till the end of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> to select all cells from the focused cell till the first-most cell in the grid
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> to select all cells from the focused cell till the last-most cell in the grid

> [!Note]
> Continuous scroll is possible only within Grid's body.

## Api Usage

Below are the methods that you can use in order to select ranges, clear selection or get selected cells data.


<!-- Angular, WebComponents, React, Blazor -->

### Select range

`SelectRange` - Select a range of cells with the API. rowStart and rowEnd should use row indexes and columnStart and columnEnd could use column index or column data field value.

<!-- WebComponents -->
```ts
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid.selectRange(range);
```
<!-- end: WebComponents -->

```tsx
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
gridRef.current.selectRange(range);
```

<!-- Blazor -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```razor
<{ComponentSelector} @ref=grid  CellSelection="GridSelectionMode.Multiple" AutoGenerate=true></<{ComponentSelector}>

@code {
    private {ComponentSelector} grid;

    private async void SetSelection()
    {        
        IgbGridSelectionRange selectionRange = new IgbGridSelectionRange();
        selectionRange.ColumnStart = 1;
        selectionRange.ColumnEnd = 1;
        selectionRange.RowStart = 2;
        selectionRange.RowEnd = 2;

        this.grid.SelectRange(new IgbGridSelectionRange[] {});
    }
}
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: Blazor -->
<!-- end: Angular, WebComponents, React, Blazor -->

### Clear cell selection

`ClearCellSelection` will clear the current cell selection.

<!-- WebComponents -->
```ts
this.grid.clearCellSelection();
```
<!-- end: WebComponents -->

```tsx
gridRef.current.clearCellSelection();
```



```razor
@code {
    private async void ClearSelection()
    {
        await this.grid.ClearCellSelectionAsync();
    }
}
```

### Get Selected Data

<!-- Blazor -->
`GetSelectedData` will return array of the selected data in Dictionary format. Examples below:

```razor
<{ComponentSelector} @ref=grid  CellSelection="GridSelectionMode.Multiple" AutoGenerate=true></<{ComponentSelector}>

@code {
    private {ComponentSelector} grid;

    private async void GetSelectedData()
    {
        object[] data = await this.grid.GetSelectedDataAsync(true, true);
    }
}
```
<!-- end: Blazor -->

<!-- Angular, WebComponents, React -->
`GetSelectedData` will return array of the selected data in format depending on the selection. Examples below:

- If three different single cells are selected:

```typescript
expectedData = [
    { CompanyName: 'Infragistics' },
    { Name: 'Michael Langdon' },
    { ParentID: 147 }
];
```

- If three cells from one column are selected:

```typescript
expectedData = [
    { Address: 'Obere Str. 57'},
    { Address: 'Avda. de la Constitución 2222'},
    { Address: 'Mataderos 2312'}
];
```

- If three cells are selected with mouse drag from one row and three columns:

```typescript
expectedData = [
    { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
];
```

- If three cells are selected with mouse drag from two rows and three columns:

```typescript
expectedData = [
    { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
    { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
];
```

- If two different ranges are selected:

```typescript
expectedData = [
    { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
    { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
    { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
    { Address: 'Fauntleroy Circus', City: 'London'}
];
```

- If two overlapping ranges are selected, the format would be:

```typescript
expectedData = [
    { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
    { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
    { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
    { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
];
```

<!-- end: Angular, WebComponents, React -->

<!-- Angular -->
> [!Note]
> `SelectedCells` will return the correct result even if the cell is not visible in grids view port. `GetSelectedData` will also return the selected cell data.
> `GetSelectedRanges` will return the current selected ranges in the grid from both keyboard and pointer interactions. The type is **GridSelectionRange[]**.
<!-- end: Angular -->

## Features Integration

The multi-cell selection is index based (DOM elements selection).

- `Sorting` - When sorting is performed selection will not be cleared. It will leave currently selected cells the same while sorting ascending or descending.
- `Paging` - On paging selected cells will be cleared. Selection wont be persisted across pages.
- `Filtering` - When filtering is performed selection will not be cleared. If filtering is cleared it will return - the initially selected cells.
- `Resizing` - On column resizing selected cells will not be cleared.
- `Hiding` - It will not clear the selected cells. If column is hidden, the cells from the next visible column will be selected.
- `Pinning` - Selected cell will not be cleared. Same as hiding
- `GroupBy` - On column grouping selected cells will not be cleared.

<!-- ComponentEnd: Grid, TreeGrid -->


<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- ComponentStart: Grid -->

<!-- WebComponents -->
```ts
<igc-grid class="grid">
```
<!-- end: WebComponents -->

```tsx
<IgrGrid className="grid"></IgrGrid>
```

```razor
<IgbGrid Class="grid"></IgbGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-cell-selected-text-color: #FFFFFF;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062A3;
}
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```ts
<igc-tree-grid class="treeGrid"></igc-tree-grid>
```
<!-- end: WebComponents -->

```razor
<IgbTreeGrid Class="treeGrid"></IgbTreeGrid>
```

```tsx
<IgrTreeGrid className="treeGrid"></IgrTreeGrid>
```

Then set the related CSS properties for that class:

```css
.treeGrid {
    --ig-grid-cell-selected-text-color: #fff;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062a3;
    --ig-grid-cell-editing-background: #0062a3;
}
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

<!-- WebComponents -->
```ts
<igc-hierarchical-grid class="hGrid"></igc-hierarchical-grid>
```
<!-- end: WebComponents -->

```tsx
<IgrHierarchicalGrid className="hGrid"></IgrHierarchicalGrid>
```

```razor
<IgbHierarchicalGrid Class="hGrid"></IgbHierarchicalGrid>
```

Then set the related CSS properties for that class:

```css
.hGrid {
    --ig-grid-cell-selected-text-color: #fff;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062a3;
    --ig-grid-cell-editing-background: #0062a3;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Demo

`sample="/{ComponentSample}/cell-selection-style", height="620", alt="{Platform} {ComponentTitle} Cell Selection Styling Example"`


<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->
## Styling Guidelines

The theme engine exposes properties that allows us to style the **range of selected cells**.

### Import Theme

To get started with styling the selection, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Define Colors

Once done, we can make use of the [igx-contrast-color]({environment:sassApiUrl}/index.html#function-igx-contrast-color) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions. With them, we define the colors we would like to use for our selection range:
```scss
    $text-color:contrast-color($default-palette, 'primary', 900);
    $background-color: color($default-palette, "primary", 900);
    $border-yellow: #f2c43c;
```

### Create Custom Theme

Next we create a new theme that extends the [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) passing our `text-color`, `background-color` and `border-yellow` variables as `$cell-selected-text-color`, `$cell-selected-background` and `$cell-active-border-color`, respectively:

```scss
$custom-grid-theme: grid-theme(
    $cell-selected-text-color: $text-color,
    $cell-active-border-color: $border-yellow,
    $cell-selected-background: $background-color
);
```

### Apply Theme

Afterwards, all we need to do is include the mixin in our component's style (could also be in the app styles), so that our @@igSelector uses the newly created theme instead of the default one:

```scss
    @include grid($custom-grid-theme);
```

 > [!Note]
 >If the component is using an [Emulated ViewEncapsulation](../themes/styles.md#view-encapsulation), it is necessary to penetrate this encapsulation using `::ng-deep`.
 > We scope the style under `:host` selector so as not to affect any other grids we might have in our application.

 ```scss
    :host {
        ::ng-deep {
            @include grid($custom-grid-theme);
        }
    }
```


With the custom theme applied, the selected grid cells are highlighted with our selected colors:

### Demo
`sample="/{ComponentSample}/multi-cell-selection-style", height="620", alt="{Platform} {ComponentTitle} Multi Cell Selection Example"`



> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end:Angular -->

## API References

* `{ComponentName}`


## Additional Resources

<!-- ComponentStart: Grid, HierarchicalGrid -->
* [Selection](selection.md)
* [Row Selection](row-selection.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Virtualization and Performance](virtualization.md)
<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

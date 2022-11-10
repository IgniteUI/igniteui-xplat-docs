---
title: Cell Selection in {Platform} {ComponentTitle} - Infragistics
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The {ComponentTitle} supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for {Platform}, infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} Cell Selection

The selection feature enables rich data select capabilities in the Ignite UI for {Platform} `{ComponentName}`. A variety of events and single select actions are available thanks to the powerful API and easy to use methods. The `{ComponentName}` now supports three modes for cell selection, and you can easily switch between them by changing `CellSelection` property. You can disable cell selection, you can select only one cell within the grid or to select multiple cells in the grid, which is provided as default option.

<!-- ComponentStart: HierarchicalGrid -->
In the `{ComponentName}` you can specify the cell selection mode on grid level. So for example in the parent grid multi-cell selection can be enabled, but in child grids cell selection mode can be single or disabled.
<!-- ComponentEnd: HierarchicalGrid -->

Let's dive deeper into each of these options.

## {Platform} Cell Selection Example

The sample below demonstrates the three types of `{ComponentName}`'s **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.

<code-view style="height:750px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-cell-selection-mode"
           github-src="{ComponentSample}/cell-selection-mode"
           alt="{Platform} {ComponentTitle} Cell Selection Example">
</code-view>

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
- Keyboard multi-cell selection by using the <kbd>Ctrl</kbd> + <kbd>Arrow</kbd> keys and <kbd>Ctrl</kbd> + <kbd>Home</kbd>/<kbd>End</kbd> while holding <kbd>Shift</kbd> key. Multi-cell selection range will be created based on the focused cell.
- Clicking with the **Left Mouse** key while holding <kbd>Ctrl</kbd> key will add single cell ranges into the selected cells collection.
- Continuous multiple cell selection is available, by clicking with the mouse and dragging.

<!-- ComponentStart: Grid, TreeGrid -->
#### Demo

<!-- TODO sample does not load any data in Blazor -->

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-multi-cell-selection-mode"
           github-src="{ComponentSample}/multi-cell-selection-mode"
           alt="{Platform} {ComponentTitle} Multi Cell Selection Example">
</code-view>

<!-- ComponentEnd: Grid, TreeGrid -->

### {ComponentTitle} Single Selection

When you set the `CellSelection` to **single**, this allows you to have only one selected cell in the grid at a time. Also the mode **mouse drag** will not work and instead of selecting a cell, this will make default text selection.

> When single cell is selected `Selected` event is emitted, no matter if the **selection mode** is **single** or **multiple**. In multi-cell selection mode when you select a range of cells `RangeSelected` event is emitted.

### {ComponentTitle} None Selection

If you want to disable cell selection you can just set `CellSelection` to **none**. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the **activation style** is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.

## Keyboard Navigation Interactions

### While Shift Key is Pressed

- <kbd>Shift</kbd> + <kbd>Arrow Up</kbd> to add above cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Down</kbd> to add below cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Left</kbd> to add left cell to the current selection.
- <kbd>Shift</kbd> + <kbd>Arrow Right</kbd> to add right cell to the current selection.

### While Ctrl + Shift Keys are Pressed

- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Up</kbd> to select all cells above the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Down</kbd> to select all cells below the focused cell in the column.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Left</kbd> to select all cells till the start of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Arrow Right</kbd> to select all cells till the end of the row.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> to select all cells from the focused cell till the first-most cell in the grid
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> to select all cells from the focused cell till the last-most cell in the grid

> [!NOTE]
> Continuous scroll is possible only within Grid's body.

## Api Usage

Below are the methods that you can use in order to select ranges, clear selection or get selected cells data.

<!-- Angular -->
### Get Selected Data

`GetSelectedData` will return array of the selected data in format depending on the selection. Examples below:

1. If three different single cells are selected:
```typescript
expectedData = [
    { CompanyName: 'Infragistics' },
    { Name: 'Michael Langdon' },
    { ParentID: 147 }
];
```

2. If three cells from one column are selected:
```typescript
expectedData = [
    { Address: 'Obere Str. 57'},
    { Address: 'Avda. de la Constitución 2222'},
    { Address: 'Mataderos 2312'}
];
```

3. If three cells are selected with mouse drag from one row and three columns:
```typescript
expectedData = [
    { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
];
```

4. If three cells are selected with mouse drag from two rows and three columns:
```typescript
expectedData = [
    { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
    { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
];
```

5. If two different ranges are selected:
```typescript
expectedData = [
    { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
    { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
    { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
    { Address: 'Fauntleroy Circus', City: 'London'}
];
```

6. If two overlapping ranges are selected, the format would be:
```typescript
expectedData = [
    { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
    { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
    { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
    { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
];
```

> [!NOTE]
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

 >[!NOTE]
 >If the component is using an [Emulated ViewEncapsulation](../themes/sass/component-themes.md#view-encapsulation), it is necessary to penetrate this encapsulation using `::ng-deep`.
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
<code-view style="height:620px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-multi-cell-selection-style"
           github-src="{ComponentSample}/multi-cell-selection-style"
           alt="{Platform} {ComponentTitle} Multi Cell Selection Example">
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end:Angular -->

## API References

* `{ComponentName}`
<!-- ComponentStart: Grid, HierarchicalGrid -->

* `GridRow`

<!-- ComponentEnd: Grid, HierarchicalGrid -->
<!-- ComponentStart: TreeGrid -->

* `TreeGridRow`

<!-- ComponentEnd: TreeGrid -->
* `GridCell`

## Additional Resources

* [{ComponentTitle} Overview](overview.md)
* [Selection](selection.md)
* [Row Selection](row-selection.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Virtualization and Performance](virtualization.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

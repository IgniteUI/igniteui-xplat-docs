---
title: {Platform} Grids | Changelog | Infragistics 
_description: Learn about new features and bug fixes for the {ProductName} Grid, TreeGrid, HierarchicalGrid, and PivotGrid components
_keywords: {Platform} Grids, Infragistics, Grid, TreeGrid, HierarchicalGrid, PivotGrid, Changelog
mentionedTypes: ["Grid", "TreeGrid", "HierarchicalGrid", "PivotGrid"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# Changelog for igniteui-{PlatformLower}-grids

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->

## **{PackageVerChanges-25-2-APR}**

### {PackageGrids} (Grids)

- {IgPrefix}Grid, {IgPrefix}TreeGrid, {IgPrefix}HierarchicalGrid, {IgPrefix}PivotGrid
  - Improved performance by dynamically adjusting the scroll throttle based on the data displayed in grid.

**Breaking Changes**

- {IgPrefix}Grid, {IgPrefix}TreeGrid, {IgPrefix}HierarchicalGrid, {IgPrefix}PivotGrid
  - Original `data` array mutations (like adding/removing/moving records in the original array) are no longer detected automatically. Components need an array reference change for the change to be detected.

**Localization(i18n)**

- {IgPrefix}Grid, {IgPrefix}TreeGrid, {IgPrefix}HierarchicalGrid, {IgPrefix}PivotGrid
  - New `Intl` implementation for the grid components that format and render data like dates and numbers.
  - New localization implementation for the currently supported languages for all components that have resource strings in the currently supported languages.
  - New public localization API and package named `igniteui-i18n-resources` containing the new resources that are used in conjunction.

**PDF export**
- Added PDF export functionality allowing users to export grid data to PDF format.

**Popover API**

- Dropdown menus and dialogs are now using HTML Popover API to provide better positioning and accessibility.

## **{PackageVerChanges-25-1-OCT_2}**

### {PackageGrids} (Grids)

#### **All Grids**

<!-- React, WebComponents -->
- {IgPrefix}Grid, {IgPrefix}TreeGrid, {IgPrefix}HierarchicalGrid
  - Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell.

        It can be enabled on the individual columns:
<!-- end: React, WebComponents -->

<!-- React -->
        ```tsx
        <IgrColumn field="field" merge={true}></IgrColumn>
        ```
        The merging can be configured on the grid level to apply either:
     - `onSort` - only when the column is sorted.
     - `always` - always, regardless of data operations.

        ```tsx
        <IgrGrid cellMergeMode="always">
        </IgrGrid>
        ```
<!-- end: React -->

<!-- WebComponents -->
        ```html
        <igc-column field="field" merge="true"></igc-column>
        ```
        The merging can be configured on the grid level to apply either:
     - `onSort` - only when the column is sorted.
     - `always` - always, regardless of data operations.

        ```html
        <igc-grid cell-merge-mode="always">
        </igc-grid>
        ```
<!-- end: WebComponents -->

<!-- Blazor -->
- **Cell Merging**
  - Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell. It can be enabled on the individual columns:

```razor
<IgbColumn Field="field" Merge="true"></IgbColumn>
```

- The merging can be configured on the grid level to apply either:
    - `OnSort` - only when the column is sorted.
    - `Always` - always, regardless of data operations.
  The default `CellMergeMode` is `OnSort`.
```razor
<IgbGrid CellMergeMode="GridCellMergeMode.Always">
</IgbGrid>
```

- **Column Pinning**
  - Added ability to pin individual columns to a specific side (start or end of the grid), so that you can now have pinning from both sides. This can be done either declaratively by setting the `PinningPosition` property on the column:
```razor
<IgbColumn Field="Col1" Pinned="true" PinningPosition="ColumnPinningPosition.End">
</IgbColumn>
```
  - Or:
```razor
col.PinningPosition = ColumnPinningPosition.End;
col.Pinned = true;

col.PinningPosition = ColumnPinningPosition.Start;
col.Pinned = true;
```
  - If property `PinningPosition` is not set on a column, the column will default to the position specified on the grid's pinning options for columns.

- **Sorting and Grouping Improvements**
  - Improved sorting algorithm efficiency using Schwartzian transformation. This is a technique, also known as decorate-sort-undecorate, which avoids recomputing the sort keys by temporarily associating them with the original data records.
  - Refactored sorting algorithms from recursive to iterative.
  - Refactored grouping algorithm from recursive to iterative.
  - Optimized grouping operations.

- **Other Improvements**   
  - A column's `MinWidth` and `MaxWidth` constrain the user-specified width so that it cannot go outside their bounds.
  - The `PagingMode` property can now be set as simple strings "local" and "remote" and does not require importing the `GridPagingMode` enum.
<!-- end: Blazor -->

## **{PackageVerChanges-25-1-SEP}**

### {PackageGrids} (Grids)

#### <label>PREVIEW</label> Cell Suffix Content

Added support for suffix content within the cells that allows you to add additional text or icons to the end of the cell value and style it. The full list of added properties for the cell suffix content is listed below:

- `SuffixText`
- `SuffixTextColor`
- `SuffixTextFont`
- `SuffixIconName`
- `SuffixIconCollectionName`
- `SuffixIconStroke`
- `SuffixIconFill`
- `SuffixIconViewBoxLeft`
- `SuffixIconViewBoxTop`
- `SuffixIconViewBoxWidth`
- `SuffixIconViewBoxHeight`
- `TextDecoration`

Please note that the maximum size available for the icons is 24x24. You can provide an icon that is larger or smaller than this, but you will need to configure the viewbox settings in order to properly scale it to fit in the 24x24 space so it is fully visible.

### Bug Fixes

<!-- React, WebComponents -->
| Bug Number | Control | Description |
|------------|---------|-------------|
|38231|{IgPrefix}Grid|Unpinned column does not return to the original position if hidden columns exist|
<!-- end: React, WebComponents -->

<!-- Blazor -->
| Bug Number | Control | Description |
|------------|---------|-------------|
|34960|IgbGrid|Maximum call stack size exceeded error in Blazor Web Application if grid is in a modal dialog|
|38231|IgbGrid|Unpinned column does not return to the original position if hidden columns exist|
|31323|IgbGrid|A NullReferenceException happens when the data type has a collection-type property, and the 1st element of that collection is null|
|37855|IgbGrid|Crypto.randomUID not found error is thrown if a grid contains HeaderTemplate and the page is accessed using unsecured(http) protocol|
<!-- end: Blazor -->

## **{PackageVerChanges-24-2-MAY}**

### {PackageGrids}

- **All Grids**
  - Allow applying initial filtering through `FilteringExpressionsTree` property

## **{PackageVerChanges-24-2-MAR}**

### {PackageGrids}

| Bug Number | Control | Description |
|------------|---------|-------------|
|36864|Grids|There is wrong import path "grids/combined" for the react licensed package|

## **{PackageVerChanges-24-2-FEB}**

### {PackageGrids}

- **All Grids**
  - Added new `disabledSummaries` for the columns of the grid, allowing the developers to skip some of the summaries
  - Encapsulate internal grid action button

### Bug Fixes

<!-- React -->
| Bug Number | Control | Description |
|------------|---------|-------------|
|34324|IgrGrid|Column hiding through condition in the grid template is not working|
|34678|IgrGrid|Enum values coerced to strings, breaking expected numeric behavior in some grid properties|
|32093|IgrPivotGrid|PivotDateDimensionOptions are not applied to the PivotDateDimension|
<!-- end: React -->

## **{PackageVerChanges-24-2-JAN}**

### {PackageGrids}

- **All Grids**
  - Fixed a critical memory leak when components are opened in several duplicate browser tabs.

## **{PackageVerChanges-24-1-JUN}**

### {PackageGrids}

- **All Grids**
  - Added new `RowClick` event.

- `PivotGrid`
  - Added `sortable` property for a `PivotDimension`.
  - Added horizontal layout. Can be enabled inside the new `pivotUI` property as `rowLayout` `horizontal`.
  - Added row dimension summaries for horizontal layout only. Can be enabled for each `PivotDimension` by setting `horizontalSummary` to **true**.
  - Added `horizontalSummariesPosition` property to the `pivotUI`, configuring horizontal summaries position.
  - Added row headers for the row dimensions. Can be enabled inside the new `pivotUI` property as `showHeaders` **true**.
  - Keyboard navigation now can move in to row headers back and forth from any row dimension headers or column headers.
  - Added keyboard interactions for row dimension collapse using <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> arrows and row headers sorting using <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> arrows.

**Breaking Changes**

- **All Grids**
  - `RowIsland`
  - Removed `displayDensity` deprecated property.
  - Renamed `actualColumns`, `contentColumns` properties to `actualColumnList` and `contentColumnList`. Use `columns` or `columnList` property to get all columns now.
  - Renamed `rowDelete` and `rowAdd` event argument type to `RowDataCancelableEventArgs`.
  - Renamed `contextMenu` event argument type to `GridContextMenuEventArgs`.
  - Removed `GridEditEventArgs`,  `GridEditDoneEventArgs`, `PinRowEventArgs` events `rowID` and `primaryKey` properties. Use `rowKey` instead.
- `PivotGrid`
  - removed `showPivotConfigurationUI` property. Use `pivotUI` and set inside it the new `showConfiguration` option.
- `Column`
  - Removed `movable` property. Use Grid's `moving` property now.
  - Removed `columnChildren` property. Use `childColumns` instead.
- `ColumnGroup`
  - Removed `children` property. Use `childColumns` instead.
- `Paginator`
  - Removed `isFirstPageDisabled` and `isLastPageDisabled` properties. Use `isFirstPage` and `isLastPage` instead.

- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](../grids/grid/size.md) topic for more.

- `PivotGrid` - Configuration of the component can now be applied correctly.

## **{PackageVerChanges-23-2-JUL}**

### {PackageGrids} (Grid)

- Added New Features - [State Persistence](../grids/grid/state-persistence.md)

## **{PackageVerChanges-23-2}**

<!-- React, WebComponents -->
- [Grid](../grids/data-grid.md) - This is a new fully functional cross-platform grid and includes features like filtering, sorting, templates, row selection, row grouping, row pinning and movable columns.
<!-- end: React, WebComponents -->

<!-- Blazor -->
- [Grid](../grids/data-grid.md) - New grid component with features like filtering, sorting, templates, row selection, row grouping, row pinning and movable columns.
<!-- end: Blazor -->

### Deprecated Components

> [DataGrid](../grids/data-grid/overview.md) - The DataGrid is deprecated, please use [Grid](../grids/data-grid.md)

## **{PackageVerChanges-23-2-MAR}**

### {PackageGrids}

- New [`HierarchicalGrid`](../grids/hierarchical-grid/overview.md) component

## **{PackageVerChanges-22-2.2}**

### {PackageGrids}

<!-- WebComponents -->
- A new argument `PrimaryKey` has been introduced to `IgcRowDataEventArgs`, and part of the event arguments that are emitted by the `RowAdded` and `RowDeleted` events. When the grid has a primary key attribute added, then the emitted primaryKey event argument represents the row ID, otherwise it defaults to undefined.
- `RowSelectionChanging` event arguments are changed. Now, the `OldSelection`, `NewSelection`, `Added` and `Removed` collections no longer consist of the row keys of the selected elements when the grid has set a primaryKey, but now in any case the row data is emitted.
- When the grid is working with remote data and a primary key has been set, the selected rows that are not currently part of the grid view will be emitted for a partial row data object.
- When selected row is deleted from the grid component `RowSelectionChanging` event will no longer be emitted.
- The `OnGroupingDone` event has been renamed to `GroupingDone` to not violate the no on-prefixed outputs convention.
- The `OnDensityChanged` event has been renamed to `DensityChanged` to not violate the no on-prefixed outputs convention. All components exposing this event are affected.

- `PivotGrid`: The `IgcPivotDateDimension` properties `InBaseDimension` and `InOption` have been deprecated and renamed to `BaseDimension` and `Options` respectively.
<!-- end: WebComponents -->

## **{PackageVerChanges-22-2.1}**

### {PackageGrids}

- New [Pivot Grid](../grids/pivot-grid/overview.md) component.

## **{PackageVerChanges-22-2}**

### {PackageGrids}

- New [Grid](../grids/data-grid.md) component.
- New [Tree Grid](../grids/tree-grid/overview.md) component.

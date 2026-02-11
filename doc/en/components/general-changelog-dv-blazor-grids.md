---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Infragistics.Controls.Grid", "Infragistics.Controls.GridSelectionMode", "Infragistics.Controls.DataGridCellEventArgs", "Infragistics.Controls.GridBaseDirective", "MaskInput", "Shape", "RoundShape", "XamRadialGauge, XamLinearGauge, XamBulletGraph, XamTreemap", "XamRadialChart", "Toolbar"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls.Charts
---

# {ProductName} Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of {ProductName} are documented on this page.

## **{PackageVerChanges-25-2-NOV}**
### {PackageGrids} (Grids)

#### **All Grids**

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

### General

#### Added
- `DateRangePicker`

#### Changed
- Updated the readonly styles of most form associated components across all themes to better signify when a component is in a readonly state.
- `Tooltip`
  - Behavioral change: `Tooltip` default placement is "bottom" now.
  - Behavioral change: `Tooltip` will not render an arrow indicator by default unless with-arrow is set.
  - Breaking change: `Tooltip` events will no longer return its anchor target in its detail property. You can still access it at event.target.anchor.

#### Deprecated
- `Tooltip` - `DisableArrow` is deprecated. Use `WithArrow` to render an arrow indicator.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|34960|IgbGrid|Maximum call stack size exceeded error in Blazor Web Application if grid is in a modal dialog|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook|

## **{PackageVerChanges-25-1-SEP}**
### {PackageGrids} (Grids)

#### <label>PREVIEW</label> Cell Suffix Content

Added support for suffix content within the cells that allows you to add additional text or icons to the end of the cell value and style it. The full list of added properties for the cell suffix content is listed below and is available on the `DataGridColumn` and `CellInfo` class:

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

| Bug Number | Control | Description      |
|------------|---------|------------------|
|38231 | `IgbGrid` | Unpinned column does not return to the original position if hidden columns exist|
|33861 | Excel Library | Adding line chart corrupts excel File for German culture|

### Enhancements

#### IgbBulletGraph

- <label>PREVIEW</label> Added new `LabelsVisible` property

#### Charts

- New properties added to the DataToolTipLayer, ItemToolTipLayer, and CategoryToolTipLayer to aid in styling: `ToolTipBackground`, `ToolTipBorderBrush`, and `ToolTipBorderThickness`

- New properties added to the DataLegend to aid in styling: `ContentBackground`, `ContentBorderBrush`, and `ContentBorderThickness`. The `ContentBorderBrush` and `ContentBorderThickness` default to transparent and 0 respectively, so in order to see these borders, you will need to set these properties.

- Added a new property to `ChartMouseEventArgs` called `WorldPosition` that provides the world relative position of the mouse. This position will be a value between 0 and 1 for both the X and Y axis within the axis space.

- Added `HighlightingFadeOpacity` to `SeriesViewer` and `DomainChart`. This allows you to configure the opacity applied to highlighted series.

#### IgbDataGrid

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

#### IgbLinearGauge

- <label>PREVIEW</label> Added new `LabelsVisible` property


## **{PackageVerChanges-25-1-AUG}**
### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|31323 | `IgbDataChart`, `IgbGrid`, `IgbCombo` | A NullReferenceException happens when the data type has a collection-type property, and the 1st element of that collection is null|

### General
The following properties of these components are now nullable:
- `Button`: `Form`
- `Calendar`: `SpecialDates`, `DisabledDates`
- `Combo`: `ValueKey`, `DisplayKey`, `GroupKey`
- `DatePicker`: `Value`, `Min`, `Max`
- `DateTimePicker`: `Value`, `Min`, `Max`
- `Dropdown`: `SelectedItem`
- `Input`: `Pattern`, `MinLength`, `MaxLength`, `Min`, `Max`, `Step`
- `Select`: `Value`, `SelectedItem`
- `Tile`: `ColStart`, `RowStart`
- `TileManager`: `MinColumnWidth`, `MinRowHeight`, `Gap`

## **{PackageVerChanges-25-1-JULY}**
### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|37855 | `IgbGrid` | Crypto.randomUID not found error is thrown if a grid contains HeaderTemplate and the page is accessed using unsecured(http) protocol|

## **{PackageVerChanges-25-1-JUNE}**
### {PackageGrids} (Grids)

- `Column`
  - Added events: `HiddenChange`, `ExpandedChange`, `WidthChange`, `PinnedChange`
- `Grid`
  - Added events: `GroupingExpressionsChange`, `GroupingExpansionStateChange`
- `RowIsland`
  - Added new parameter `ParentRowData` in `GridCreatedEventArgsDetail` args for `GridCreated` event
- `Grid`, `HierarchicalGrid`, `TreeGrid`
  - Added property - `ExpansionStates` - represents a list of key-value pairs [row ID, expansion state].
  - Added event: `ExpansionStatesChange`
  - Type of `Rendered` event is changed from `VoidHandler` to `ComponentBoolValueChangedEventHandler`
  - Type of DataChanging event is changed from `ForOfDataChangingEventHandler` to `ForOfDataChangeEventHandler`
  - Type of DataChanged event is changed from `VoidHandler` to `ForOfDataChangeEventHandler`
- `PivotDataSelector`
  - Added events: `ColumnsExpandedChange`, `RowsExpandedChange`, `FiltersExpandedChange`, `ValuesExpandedChange`

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25997 | `IgbDataGrid` | Summaries are only showing for first grouped child row|
|37244 | Excel Library | Custom Data Validation is not working|

## **{PackageVerChanges-24-2-MAY}**
### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|37271 | `IgbHierarchicalGrid` | ParentRowData included to IGridCreatedEventArgs|
|37244 | Excel Library | Custom Data Validation is not working|

## **{PackageVerChanges-24-2-APR}**
### {PackageGrids}

- **All Grids**
  - Allow applying initial filtering through `FilteringExpressionsTree` property

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25602 | `IgbDataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
|32598 | `IgbDataGrid` | Multi-selection is not working correctly

## **{PackageVerChanges-24-2-MAR}**
### {PackageGrids}

- **All Grids**
  - Added new `DisabledSummaries` for the columns of the grid, allowing the developers to skip some of the summaries
  - Encapsulate internal grid action button

## **{PackageVerChanges-24-2-FEB}**
### Bug Fixes

The following table lists the bug fixes made for the {ProductName} toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|31344 | `IgbGrid` | Two way binding for the SelectedRows doesn't work|
|34149 | `IgbGrid` | Repeatedly showing and hiding the IgbGrid causes memory leakage in JS Heap|
|34224 | `IgbGrid` | 'There are multiple .NET runtimes present' error is thrown when the app changes from Server mode to WebAssembly mode if 'InteractiveAuto' is used for the render mode|
|34654 | `IgbGrid` | NullReferenceException is thrown if a data contains an empty list|
|35439 | `IgbGrid` | CPU usage and Memory consumption are abnormally high when the app is opened in multiple tabs|
|36024 | `IgbGrid` | The JS heap size never reduced when moving back and forth between two pages with IgbGrid component|
|36176 | Excel Library | Exception occurs when loading an Excel workbook that has a LET function|
|36379 | Excel Library | Colors with any alpha channel in an excel workbook fail to load|
|26218 | Excel Library | Chart's plot area right margin becomes narrower and fill pattern and fill foreground are gone just by loading an Excel file|
|34083 | Excel Library | TextOperatorConditionalFormat's is not loaded/saved properly if the text contains = in a template Excel file|
|35495 | Excel Library | Pictures in cells are lost when a template file is loaded|


## **{PackageVerChanges-24-2-JAN}**
### {PackageGrids}

- **All Grids**
  - Fixed a critical memory leak when components are opened in several duplicate browser tabs.

## **{PackageVerChanges-24-1-SEP}**
### {PackageGrids}

- **All Grids**
  - Added `GetColumns` / `GetColumnsAsync` methods, which return the grid columns collection.
  - Added new `RowClick` event.
- `PivotGrid`
  - Added `Sortable` property for a `PivotDimension`.
  - Added horizontal layout. Can be enabled inside the new `PivotUI` property as `RowLayout` `Horizontal`.
  - Added row dimension summaries for horizontal layout only. Can be enabled for each `PivotDimension` by setting `HorizontalSummary` to **true**.
  - Added `HorizontalSummariesPosition` property to the `PivotUI`, configuring horizontal summaries position.
  - Added row headers for the row dimensions. Can be enabled inside the new `PivotUI` property as `ShowHeaders` **true**.
  - Keyboard navigation now can move in to row headers back and forth from any row dimension headers or column headers.
  - Added keyboard interactions for row dimension collapse using <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> arrows and row headers sorting using <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> arrows.

**Breaking Changes**
- **All Grids**
  - `RowIsland`
  - Removed `DisplayDensity` deprecated property.
  - Renamed `Columns`, `ActualColumns`, `ContentColumns` properties to `ColumnList`, `ActualColumnList` and `ContentColumnList`. Recommended to use the new `GetColumns` method instead.
  - Renamed `RowDelete` and `RowAdd` event argument type to `RowDataCancelableEventArgs`.
  - Renamed `ContextMenu` event argument type to `GridContextMenuEventArgs`.
  - Removed `GridEditEventArgs`,  `GridEditDoneEventArgs`, `PinRowEventArgs` events `RowID` and `PrimaryKey` properties. Use `RowKey` instead.
- `PivotGrid`
  - removed `ShowPivotConfigurationUI` property. Use `PivotUI` and set inside it the new `ShowConfiguration` option.
- `Column`
  - Removed `Movable` property. Use Grid's `Moving` property now.
  - Removed `ColumnChildren` property. Use `ChildColumns` instead.
- `ColumnGroup`
  - Removed `Children` property. Use `ChildColumns` instead.
- `Paginator`
  - Removed `IsFirstPageDisabled` and `IsLastPageDisabled` properties. Use `IsFirstPage` and `IsLastPage` instead.

## **{PackageVerChanges-24-1-JUN}**
### {PackageGrids}
- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](grids/grid/size.md) topic for more.
- `PivotGrid` - The type of Columns, Rows, Filters from `PivotConfiguration` option is now array of IgbPivotDimension - `IgbPivotDimension[]`, it was `IgbPivotDimensionCollection` previously.

The type of Values from `PivotConfiguration` option is now array of IgbPivotValue - `IgbPivotValue[]`, it was `IgbPivotValueCollection` previously.

## **{PackageVerChanges-23-2}**
### {PackageGrids} - Toolbar - <label>PREVIEW</label>

- Save tool action has been added to save the chart to an image via the clipboard.
- Vertical orientation has been added via the toolbar's `Orientation` property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
- Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

### {PackageGrids} (Grid)

- Added New Features - [State Persistence](grids/grid/state-persistence.md)

## **{PackageVerChanges-22-2.65}**
### {PackageGrids} (Data Grid)

- A new argument `PrimaryKey` has been introduced to `IgbRowDataEventArgs` from `Detail`, and part of the event arguments that are emitted by the `RowAdded` and `RowDeleted` events. When the grid has a primary key attribute added, then the emitted primaryKey event argument represents the row ID, otherwise it defaults to null.
- `RowSelectionChanging` event arguments are changed. Now, the `OldSelection`, `NewSelection`, `Added` and `Removed` collections no longer consist of the row keys of the selected elements when the grid has set a primaryKey, but now in any case the row data is emitted.
- When the grid is working with remote data and a primary key has been set, the selected rows that are not currently part of the grid view will be emitted for a partial row data object.
- When selected row is deleted from the grid component `RowSelectionChanging` event will no longer be emitted.
- The `OnGroupingDone` event has been renamed to `GroupingDone` to not violate the no on-prefixed outputs convention.
- The `OnDensityChanged` event has been renamed to `DensityChanged` to not violate the no on-prefixed outputs convention. All components exposing this event are affected.

### {PackageGrids} (Pivot Grid)

- The `IgbPivotDateDimension` properties `InBaseDimension` and `InOption` have been deprecated and renamed to `BaseDimension` and `Options` respectively.

## **{PackageVerChanges-22-2.50}**

### New Components

- [Combo](inputs/combo/overview.md)
- [Pivot Grid](grids/pivot-grid/overview.md)
- .NET 7.0

## **{PackageVerChanges-22-2}**

### New Components

- [Grid](grids/data-grid.md)
- [TreeGrid](grids/tree-grid/overview.md)

### {PackageGrids} (Data Grid)

- Changed **{IgPrefix}Column** to `DataGridColumn`
- Changed **GridCellEventArgs** to `DataGridCellEventArgs`
- Changed **GridSelectionMode** to `DataGridSelectionMode`
- Changed **SummaryOperand** to `DataSourceSummaryOperand`

## **{PackageVerChanges-22-1}**
### {PackageGrids} (Data Grid)

Added New Feature - [Row Paging](grids/data-grid/row-paging.md) which is used to split a large set of data into a sequence of pages that have similar content. With pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows/buttons that let users flip through the pages of data.

## **{PackageVerChanges-21-2.1}**
### {PackageGrids} (Data Grid)

- Changed `ValueField` property from type string[] to string.

## **{PackageVerChanges-21-2}**
### {PackageGrids} (Data Grid)

- New Features Added:
  - [Filter Row](grids/data-grid/column-filtering.md)
  - [Load/Save Layout Customizations](grids/data-grid/load-save-layout.md)
  - [GroupBy Area for column grouping](grids/data-grid/row-grouping.md)
  - [Cell Merging](grids/data-grid/cell-merging.md)
- New API:
  - Added `SelectionChanged` event. Used to detect changes on selection interactions
     e.g. Multiple row selection.
- Breaking Changes:
  - Changed grid's SummaryScope property's type to SummaryScope from `DataSourceSummaryScope`
  - Changed GroupHeaderDisplayMode property's type to GroupHeaderDisplayMode from `DataSourceSectionHeaderDisplayMode`

## **{PackageVerChanges-21-1}**
### {PackageGrids} (Data Grid)

- Added `EditOnKeyPress` aka Excel-style Editing, instantly begin editing when typing.
- Added `EditModeClickAction` property - By default double-clicking is required to enter edit mode. This can be set to `SingleClick` to allow for edit mode to occur when selecting a new cell.
- Added `EnterKeyBehaviors` property - aka Excel-style Navigation (Enter Behavior) – controls the behavior of the enter key, e.g. Options are (none, edit, move up, down, left, right)
- Added `EnterKeyBehaviorAfterEdit` property - While in edit-mode, this property controls when enter is pressed, e.g. Options are (moves to the cell below, above, right, left)
- Added `SelectAllRows` - method.
- Added Row Range Selection - With `GridSelectionMode` property set to MultipleRow the following new functionality is now included:
  - Click and drag to select rows
  - <kbd>SHIFT</kbd> and click to select multiple rows.
  - <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.
- Pressing space bar toggles selection of active row via `GridSelectionMode` property set to MultipleRow or SingleRow
- Added Column Summaries to Column Options Dialog.


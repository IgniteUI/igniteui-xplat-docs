---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
---

# {ProductName} Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

All notable changes for each version of {ProductName} are documented on this page.

## **{PackageVerLatest}**
### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|2235|Excel|Workbook.Load() throwing a Excel.FormulaParseException. |

## **{PackageVerChanges-25-2-NOV}**
### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook|
|40262|IgrSpreadsheet|#Circularity! is displayed when there are warnings. Request to match Excel - display a value eg. 0 instead|
|40458|IgrSpreadsheet|When using Arial font, the igx-spreadsheet cuts off text in the cells|

## **{PackageVerChanges-25-1-OCT_2}**
### {PackageGrids} (Grids)
- `IgrGrid`, `IgrTreeGrid`, `IgrHierarchicalGrid`
  - Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell.

        It can be enabled on the individual columns:

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

        The default `cellMergeMode` is `onSort`.

        The functionality can be modified by setting a custom `mergeStrategy` on the grid, in case some other merge conditions or logic is needed for a custom scenario.

        It's possible also to set a `mergeComparer` on the individual columns, in case some custom handling is needed for a particular data field.

  - Added ability to pin individual columns to a specific side (start or end of the grid), so that you can now have pinning from both sides. This can be done either declaratively by setting the `pinningPosition` property on the column:

        ```tsx
        <IgrColumn field="Col1" pinned={true} pinningPosition="pinningPosition">
        </IgrColumn>
        ```

        ```ts
        pinningPosition = ColumnPinningPosition.End;
        ```

        Or with the API, via optional parameter:

        ```ts
        grid.pinColumn('Col1', 0, ColumnPinningPosition.End);
        grid.pinColumn('Col2', 0, ColumnPinningPosition.Start);
        ```

        If property `pinningPosition` is not set on a column, the column will default to the position specified on the grid's `pinning` options for `columns`.

  - **Sorting improvements**
     - Improved sorting algorithm efficiency using Schwartzian transformation. This is a technique, also known as decorate-sort-undecorate, which avoids recomputing the sort keys by temporarily associating them with the original data records.
     - Refactored sorting algorithms from recursive to iterative.
  - **Groupby improvements**
     - Refactored grouping algorithm from recursive to iterative.
     - Optimized grouping operations.




## **{PackageVerChanges-25-1-OCT}**
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

| Bug Number | Control | Description |
|------------|---------|-------------|
|38231 | `IgrGrid` | Unpinned column does not return to the original position if hidden columns exist|
|33861 | Excel Library | Adding line chart corrupts excel File for German culture|

#### IgrDataGrid

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

## **{PackageVerChanges-24-2-APR2}**
### {PackageGrids}

**Breaking Changes**

- The `IgrDataGrid` & `IgrMultiColumnComboBox` are now part of the igniteui-react-data-grids package.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25997 | `IgrDataGrid` | Summaries are only showing for first grouped child row|
|37685 | `IgrSpreadsheet` | Poor rendering of numbers formatted with Arial font.|
|37244 | Excel Library | Custom Data Validation is not working.|

## **{PackageVerChanges-24-2-APR}**
### {PackageGrids}

- **All Grids**
  - Allow applying initial filtering through `FilteringExpressionsTree` property

### Deprecations

- The `clicked` event of the `Button` is deprecated. Use the native `onClick` handler.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25602 | `IgrDataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
|30319 | `IgrDataGrid` | Records are sorted despite no value changed|
|32598 | `IgrDataGrid` | Multi-selection is not working correctly

## **{PackageVerChanges-24-2-MAR}**
### {PackageGrids}
The following table lists the bug fixes made for the {ProductName} toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36864|Grids|There is wrong import path "grids/combined" for the react licensed package|

## **{PackageVerChanges-24-2-FEB}**
### {PackageGrids}

- **All Grids**
  - Added new `disabledSummaries` for the columns of the grid, allowing the developers to skip some of the summaries
  - Encapsulate internal grid action button

### Bug Fixes

The following table lists the bug fixes made for the {ProductName} toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|34324 | `IgrGrid` | Column hiding through condition in the grid template is not working|
|34678 | `IgrGrid` | Enum values coerced to strings, breaking expected numeric behavior in some grid properties|
|32093 | `IgrPivotGrid` | PivotDateDimensionOptions are not applied to the PivotDateDimension|
|35496 | `IgrSpreadsheet` | Error when setting styles in Excel with images|
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

## **{PackageVerChanges-24-1-JUN}**
### {PackageGrids}

- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](grids/grid/size.md) topic for more.


- `PivotGrid` - Configuration of the component can now be applied correctly.
## **{PackageVerChanges-23-2-MAR}**
### {PackageGrids}

- New [`HierarchicalGrid`](grids/hierarchical-grid/overview.md) component

## **{PackageVerChanges-23-2-DEC}**
### {PackageGrids} (Grid)

- Added New Features - [State Persistence](grids/grid/state-persistence.md)

## **{PackageVerChanges-23-2}**
### {PackageGrids} - Toolbar - <label>PREVIEW</label>

- Save tool action has been added to save the chart to an image via the clipboard.
- Vertical orientation has been added via the toolbar's `Orientation` property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
- Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

- [Grid](grids/data-grid.md) - This is a new fully functional cross-platform grid and includes features like filtering, sorting, templates, row selection, row grouping, row pinning and movable columns.

### Deprecated Components

> [DataGrid](grids/data-grid/overview.md) - The DataGrid is deprecated, please use [Grid](grids/data-grid.md)

## **{PackageVerChanges-22-2}**
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

#### Data Grid
- Added `ValueMultiField`, of type string[], in the `ComboBoxColumn` to be used when your items in the drop down contain a key that consists of multiple fields.

> [!Note]
> The following breaking changes were introduced

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

<div class="divider--half"></div>

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

## **{PackageVerChangedFields}**
### {PackageGrids} (Data Grid)

> [!Note]
> These breaking changes were introduce in the grid package.

- Changed name of PropertyPath

The data grid component property `propertyPath` has been renamed to `field`. This applies to all Column types, GroupDescription, SortDescription & SummaryDescription.

```tsx
 <IgrTextColumn field="Name"/>
```

```ts
import { IgrColumnSummaryDescription, IgrColumnSortDescription, IgrColumnGroupDescription } from 'igniteui-react-data-grids'
const productCount = new IgrColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgrColumnGroupDescription();
income.field = "Income";
```

## **{PackageVerRenamedGrid}**
### {PackageGrids} (Data Grid)

- Changed Name of Live Grid

The data grid component and it's corresponding module's names have changed from "LiveGrid" to "DataGrid".

> [!Note]
> These breaking changes were introduce in these packages and components only:

The new code for importing the grid and it's corresponding module is:

```ts
import { IgrDataGrid } from "igniteui-react-data-grids";
import { IgrDataGridModule } from 'igniteui-react-data-grids';
```

- Required Peer Dependency for Data Grid

The data grid component requires the "inputs" package.

```ts
**npm install --save {PackageInputs}**
```

<div class="divider--half"></div>


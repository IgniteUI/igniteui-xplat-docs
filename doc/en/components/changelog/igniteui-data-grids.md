---
title: {Platform} What's New | {ProductName} | Infragistics
_description: Learn about new features in the {ProductName}.
_keywords: Changelog, What's New,  {ProductName}, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
---
# {ProductName} Changelog

<!-- markdownlint-disable MD003 MD007 MD031 MD046 -->

<!-- React, WebComponents, Blazor -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: React, WebComponents, Blazor -->

All notable changes for each version of {ProductName} are documented on this page.

## **{PackageVerChanges-25-1-JUNE}**

### {PackageGrids} (Data Grid)

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

## **{PackageVerChanges-24-2-JULY}**

### {PackageGrids} (Data Grid)

- The `{IgPrefix}DataGrid` & `{IgPrefix}MultiColumnComboBox` are now part of the {PackageDataGrids} package.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25997 | `{IgPrefix}DataGrid` | Summaries are only showing for first grouped child row|

## **{PackageVerChanges-24-2-APR}**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25602 | `{IgPrefix}DataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
|30319 | `{IgPrefix}DataGrid` | Records are sorted despite no value changed|
|32598 | `{IgPrefix}DataGrid` | Multi-selection is not working correctly

## **{PackageVerChanges-23-2}**

### Deprecated Components

> [DataGrid](grids/data-grid/overview.md) - The DataGrid is deprecated, please use [Grid](grids/data-grid.md)

## **{PackageVerChanges-22-2}**

### {PackageGrids} (Data Grid)

- Changed **{IgPrefix}Column** to `DataGridColumn`
- Changed **GridCellEventArgs** to `DataGridCellEventArgs`
- Changed **GridSelectionMode** to `DataGridSelectionMode`
- Changed **SummaryOperand** to `DataSourceSummaryOperand`

## **{PackageVerChanges-21-2.1}**

### {PackageGrids} (Data Grid)

#### Data Grid
- Added `ValueMultiField`, of type string[], in the `ComboBoxColumn` to be used when your items in the drop down contain a key that consists of multiple fields.

> [!Note]
> The following breaking changes were introduced

- Changed `ValueField` property from type string[] to string.

## **{PackageVerChanges-21-2}**

### {PackageGrids} (Data Grid)

Added New Feature - [Row Paging](grids/data-grid/row-paging.md) which is used to split a large set of data into a sequence of pages that have similar content. With pagination, data can be displayed in a set number of rows, letting users "scroll" through their data, without needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows/buttons that let users flip through the pages of data.

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

- Pressing space bar toggles selection of active row via `GridSelectionMode` property set to MultipleRow or SingleRow
- Added Column Summaries to Column Options Dialog.

## **{PackageVerChangedFields}**

### {PackageGrids} (Data Grid)

> [!Note]
> These breaking changes were introduce in the grid package.

- Changed name of PropertyPath

The data grid component property `propertyPath` has been renamed to `field`. This applies to all Column types, GroupDescription, SortDescription & SummaryDescription.

<!-- React -->

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

<!-- end: React -->

<!-- WebComponents -->

```html
<igc-text-column field="Name"></igc-text-column>
```

```ts
import { IgcColumnSummaryDescription, IgcColumnSortDescription, IgcColumnGroupDescription} from 'igniteui-webcomponents-data-grids'
const productCount = new IgcColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgcColumnGroupDescription();
income.field = "Income";
```

<!-- end: WebComponents -->

## **{PackageVerRenamedGrid}**

### {PackageGrids} (Data Grid)

- Changed Name of Live Grid

The data grid component and it's corresponding module's names have changed from "LiveGrid" to "DataGrid".

> [!Note]
> These breaking changes were introduce in these packages and components only:

The new code for importing the grid and it's corresponding module is:

<!-- React -->

```ts
import { IgrDataGrid } from "igniteui-react-data-grids";
import { IgrDataGridModule } from 'igniteui-react-data-grids';
```

<!-- end: React -->

<!-- WebComponents -->

```ts
import { IgcDataGrid } from "igniteui-webcomponents-data-grids";
import { IgcDataGridModule } from 'igniteui-webcomponents-data-grids';
```

<!-- end: WebComponents -->

- Required Peer Dependency for Data Grid

The data grid component requires the "inputs" package.

```ts
**npm install --save {PackageInputs}**
```

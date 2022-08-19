---
title: $Platform$ Excel Library| Using Worksheets | Infragistics
_description: Use Infragistics' $Platform$ excel library to input data by working with the worksheet's row and cells and setting their corresponding values. Easily transfer data from $ProductName$ excel to your application!
_keywords: Excel library, worksheet, $ProductName$, Infragistics
mentionedTypes: ['Workbook', 'Worksheet', 'WorksheetCell', 'DisplayOptions', 'WorksheetFilterSettings', 'IWorksheetCellFormat']
---
# $Platform$ Using Worksheets

The Infragistics $Platform$ Excel Engine's `Worksheet` is where your data is kept. You can input data by working with the Worksheet's rows and cells and setting their corresponding values. The `Worksheet` allows you to filter, sort, and customize the formats of the cells, as shown below.

## $Platform$ Using Worksheets Example


<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library-operations-on-worksheets"
           alt="$Platform$ Using Worksheets Example"
           github-src="excel/excel-library/operations-on-worksheets">
</code-view>

<div class="divider--half"></div>


<!-- Angular, React, WebComponents -->
The following code shows the imports needed to use the code-snippets below:

```ts
import { Workbook } from "{PackageExcel}";
import { Worksheet } from "{PackageExcel}";
import { WorkbookFormat } from "{PackageExcel}";
import { Color } from "{PackageCore}";

import { CustomFilterCondition } from "{PackageExcel}";
import { ExcelComparisonOperator } from "{PackageExcel}";
import { FormatConditionTextOperator } from "{PackageExcel}";
import { OrderedSortCondition } from "{PackageExcel}";
import { RelativeIndex } from "{PackageExcel}";
import { SortDirection } from "{PackageExcel}";
import { WorkbookColorInfo } from "{PackageExcel}";
```
<!-- end: Angular, React, WebComponents -->

## Configuring the Gridlines
The gridlines are used to visually separate the cells in the worksheet. You may show or hide the gridlines and also change their color.

You can show or hide the gridlines using the `ShowGridlines` property of the `DisplayOptions` of the worksheet. The following code demonstrates how you can hide the gridlines in your worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showGridlines = false;
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.DisplayOptions.ShowGridlines = false;
```

You can configure the gridlines' color using the `GridlineColor` property of the `DisplayOptions` of the worksheet. The following code demonstrates how you can change the gridlines in your worksheet to be red:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.gridlineColor = "Red";
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.DisplayOptions.GridlineColor = Core.Graphics.Colors.Red;
```

## Configuring the Headers
The column and row headers are used to visually identify columns and rows. They are also used to visually highlight the currently selected cell or cell region.

You can show or hide the column and row headers using the `ShowRowAndColumnHeaders` property of the `DisplayOptions` of the worksheet. The following code demonstrates how you can hide the row and column headers:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.showRowAndColumnHeaders = false;
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.DisplayOptions.ShowRowAndColumnHeaders = false;
```

## Configuring Editing of the Worksheet
By default, the `Worksheet` objects that you save will be editable. You can disable editing of a worksheet by protecting it using the `Worksheet` object's `Protect` method. This method has a lot of nullable `bool` arguments that determine which pieces are protected, and one of these options is to allow editing of objects, which if set to **false** will prevent editing of the worksheet.

The following code demonstrates how to disable editing in your worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.Protect();
```

You can also use the `Worksheet` object's `Protect` method to protect a worksheet against structural changes.

When protection is set, you can set the `CellFormat` object's `Locked` property on individual cells, rows, merged cell regions, or columns to override the worksheet object's protection on those objects. For example, if you need all cells of a worksheet to be read-only except for the cells of one column, you can protect the worksheet and then set the `CellFormat` object's `Locked` property to **false** on a specific `WorksheetColumn` object. This will allow your users to edit cells within the column while disabling editing of the other cells in the worksheet.

The following code demonstrates how you can do this:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
worksheet.columns(0).cellFormat.locked = false;
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.Protect();
worksheet.Columns[0].CellFormat.Locked = ExcelDefaultableBoolean.False;
```

## Filtering Worksheet Regions
Filtering is done by setting a filter condition on a worksheet's `WorksheetFilterSettings` which can be retrieved from the `Worksheet` object's `FilterSettings` property. Filter conditions are only reapplied when they're added, removed, modified, or when the `ReapplyFilters` method is called on the worksheet. They are not constantly evaluated as data within the region changes.

You can specify the region to apply the filter by using the `SetRegion` method on the `WorksheetFilterSettings` object.

Below is a list of methods and their descriptions that you can use to add a filter to a worksheet:

| Method			| Description     																	|
| ------------- 	|:-------------:																	|
|`ApplyAverageFilter`|Represents a filter which can filter data based on whether the data is below or above the average of the entire data range.|
|`ApplyDatePeriodFilter`|Represents a filter which can filter dates in a Month, or quarter of any year.|
|`ApplyFillFilter`|Represents a filter which will filter cells based on their background fills. This filter specifies a single CellFill. Cells of with this fill will be visible in the data range. All other cells will be hidden.|
|`ApplyFixedValuesFilter`|Represents a filter which can filter cells based on specific, fixed values, which are allowed to display.|
|`ApplyFontColorFilter`|Represents a filter which will filter cells based on their font colors. This filter specifies a single color. Cells with this color font will be visible in the data range. All other cells will be hidden.|
|`ApplyIconFilter`|Represents a filter which can filter cells based on their conditional formatting icon.|
|`ApplyRelativeDateRangeFilter`|Represents a filter which can filter date cells based on dates relative to the when the filter was applied.|
|`ApplyTopOrBottomFilter`|Represents a filter which can filter in cells in the upper or lower portion of the sorted values.|
|`ApplyYearToDateFilter`|Represents a filter which can filter in date cells if the dates occur between the start of the current year and the time when the filter is evaluated.|
|`ApplyCustomFilter`|Represents a filter which can filter data based on one or two custom conditions. These two filter conditions can be combined with a logical "and" or a logical "or" operation.|

You can use the following code snippet as an example to add a filter to a worksheet region:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.filterSettings.setRegion("Sheet1!A1:A10");
worksheet.filterSettings.applyAverageFilter(0, AverageFilterType.AboveAverage);
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.FilterSettings.SetRegion("Sheet1!A1:A10");
worksheet.FilterSettings.ApplyAverageFilter(0, Documents.Excel.Filtering.AverageFilterType.AboveAverage);
```

## Freezing and Splitting Panes
You can freeze rows at the top of your worksheet or columns at the left using the freezing panes features. Frozen rows and columns remain visible at all times while the user is scrolling. The frozen rows and columns are separated from the rest of the worksheet by a single, solid line, which cannot be removed.

In order to enable pane freezing, you need to set the `PanesAreFrozen` property of the `Worksheet` object's `DisplayOptions` to **true**. You can then specify the rows or columns to freeze by using the `FrozenRows` and `FrozenColumns` properties of the display options `FrozenPaneSettings`, respectively.

You can also specify the first row in the bottom pane or first column in the right pane using the `FirstRowInBottomPane` and `FirstColumnInRightPane` properties, respectively.

The following code snippet demonstrates how to use the freezing panes features in a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.panesAreFrozen = true;

worksheet.displayOptions.frozenPaneSettings.frozenRows = 3;
worksheet.displayOptions.frozenPaneSettings.frozenColumns = 1;

worksheet.displayOptions.frozenPaneSettings.firstColumnInRightPane = 2;
worksheet.displayOptions.frozenPaneSettings.firstRowInBottomPane = 6;
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.DisplayOptions.PanesAreFrozen = true;

worksheet.DisplayOptions.FrozenPaneSettings.FrozenRows = 3;
worksheet.DisplayOptions.FrozenPaneSettings.FrozenColumns = 3;

worksheet.DisplayOptions.FrozenPaneSettings.FirstColumnInRightPane = 2;
worksheet.DisplayOptions.FrozenPaneSettings.FirstRowInBottomPane = 6;
```

## Setting the Worksheet Zoom Level
You can change the zoom level for each worksheet independently using the `MagnificationInNormalView` property on the `Worksheet` object's `DisplayOptions`. This property takes a value between 10 and 400 and represents the percentage of zoom that you wish to apply.

The following code demonstrates how you can do this:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions.magnificationInNormalView = 300;
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.DisplayOptions.MagnificationInNormalView = 300;
```

## Worksheet Level Sorting
Sorting is done by setting a sorting condition on a worksheet level object on either columns or rows. You can sort columns or rows in ascending or descending order.

This is done by specifying a region and sort type to the `Worksheet` object's `WorksheetSortSettings` that can be retrieved using the `SortSettings` property of the sheet.

The sort conditions in a sheet are only reapplied when sort conditions are added, removed, modified, or when the `ReapplySortConditions` method is called on the worksheet. Columns or rows will be sorted within the region. "Rows" is the default sort type.

The following code snippet demonstrates how to apply a sort to a region of cells in a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.sortSettings.sortConditions().addItem(new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.SortSettings.SortConditions.Add(new RelativeIndex(0), new Infragistics.Documents.Excel.Sorting.OrderedSortCondition(Documents.Excel.Sorting.SortDirection.Ascending));
```

## Worksheet Protection
You can protect a worksheet by calling the `Protect` method on the `Worksheet` object. This method exposes many nullable `bool` parameters that allow you to restrict or allow the following user operations:

- Editing of cells.
- Editing of objects such as shapes, comments, charts, or other controls.
- Editing of scenarios.
- Filtering of data.
- Formatting of cells.
- Inserting, deleting, and formatting of columns.
- Inserting, deleting, and formatting of rows.
- Inserting of hyperlinks.
- Sorting of data.
- Usage of pivot tables.

You can remove worksheet protection by calling the `Unprotect` method on the `Worksheet` object.

The following code snippet shows how to enable protection of all of the above-listed user operations:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.protect();
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

worksheet.Protect();
```

## Worksheet Conditional Formatting
You can configure the conditional formatting of a `Worksheet` object by using the many "Add" methods exposed on the `ConditionalFormats` collection of that worksheet. The first parameter of these "Add" methods is the `string` region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a `CellFormat` property that determines the way that the `WorksheetCell` elements should look when the condition in that conditional format holds true. For example, you can use the properties attached to this `CellFormat` property such as `Fill` and `Font` to determine the background and font settings of your cells under a particular conditional format, respectively.

There are a few conditional formats that do not have a `CellFormat` property, as their visualization on the worksheet cell behaves differently. These conditional formats are the `DataBarConditionalFormat`, `ColorScaleConditionalFormat`, and `IconSetConditionalFormat`.

When loading a pre-existing `Workbook` from Excel, the formats will be preserved when that `Workbook` is loaded. The same is true for when you save the `Workbook` out to an Excel file.

The following code example demonstrates usage of conditional formats on a worksheet:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");

var color = new Color();
color.colorString = "Red";

var format = worksheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
format.cellFormat.font.colorInfo = new WorkbookColorInfo(color);
```

```razor
var workbook = new Workbook();
var worksheet = workbook.Sheets.Add("Sheet1", SheetType.Worksheet) as Worksheet;

var format = worksheet.ConditionalFormats.AddAverageCondition("A1:A10", Documents.Excel.ConditionalFormatting.FormatConditionAboveBelow.AboveAverage);
format.CellFormat.Font.ColorInfo = new WorkbookColorInfo(Core.Graphics.Colors.Red);
```

 ## API Members

 - `CellFormat`
 - `ColorScaleConditionalFormat`
 - `ConditionalFormats`
 - `DataBarConditionalFormat`
 - `DisplayOptions`
 - `FilterSettings`
 - `ShowGridlines`
 - `ShowRowAndColumnHeaders`
 - `SortSettings`
 - `Workbook`
 - `WorksheetCell`
 - `WorksheetColumn`
 - `WorksheetFilterSettings`
 - `WorksheetSortSettings`
 - `Worksheet`
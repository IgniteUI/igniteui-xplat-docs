---
title: {Platform} Excel Library| Working with Charts | Infragistics
_description: Use the Infragistics' {Platform} excel library's chart feature to add visual charting representations of data trends across regions of cells in a worksheet. Visualize {ProductName} excel data in over 70 chart types!
_keywords: Excel library, charts,  {ProductName}, Infragistics
mentionedTypes: ["Workbook", "Worksheet"]
---
# {Platform} Working with Charts

The Infragistics {Platform} Excel Engine's `WorksheetChart` functionality allows you to add visual charting representations of data trends across regions of cells in a worksheet. For example, if you want to see your Excel data in a region of cells visualized as a column, line, or over 70 other chart types, this feature can help you to achieve that.

## {Platform} Working with Charts Example


`sample="/excel/excel-library/working-with-charts", height="500", alt="{Platform} Working with Charts Example"`

> [!Note]
> The XLSX format is required. Other formats are not supported at this time.

<div class="divider--half"></div>

## Usage
In order to add a chart to a worksheet, you must use the `AddChart` method of the worksheet's shapes collection. In this method, you can specify the chart type that you wish to use, the top-left cell, the bottom-right cell, and the percentages of those cells that you wish for the chart to take up.

The `AddChart` method returns the worksheet chart element to be added to the worksheet. Once you have this, you can use the `SetSourceData` method on the chart to set a cell address of the region of worksheet cells that you wish to use as a data source, as well as whether or not you want to switch the mapping of columns and rows to the X and Y axis.

There are over 70 supported chart types, including `Line`, `Area`, `Column`, and `Pie`.

The following code demonstrates how to use the Excel charting feature. The below snippet will add a column chart to between the first cell and the 13th cell in the first row of the worksheet. The source data is then set for the data in the region of A2:M6, switching the mapping of columns and rows for the X and Y axis of the column chart:

```ts
var chart = ws.shapes().addChart(ChartType.ColumnClustered,
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(12), { x: 100, y: 100 });

chart.setSourceData("A2:M6", true);
```

```razor
var chart = sheet.Shapes.AddChart(Documents.Excel.Charts.ChartType.ColumnClustered,
    sheet.Rows[0].Cells[0], new Core.Point(0, 0),
    sheet.Rows[0].Cells[props.Length - 1], new Core.Point(100, 100));

chart.SetSourceData("A2:M6", true);
```

## API References

 - `AddChart`
 - `Area`
 - `Column`
 - `Line`
 - `Pie`
 - `WorksheetChart`
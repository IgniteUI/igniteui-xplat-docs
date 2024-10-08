---
title: {Platform} Excel Library| Working with Sparklines | Infragistics
_description: Use sparkline charts in Infragistics' {Platform} excel library to visual data trends across a region of cells in your worksheet. View {ProductName} excel engine tutorials!
_keywords: Excel library, sparkline chart, {ProductName}, Infragistics
mentionedTypes: ["Workbook"]
---
# {Platform} Working with Sparklines

The Infragistics {Platform} Excel Library has support for adding sparklines to an Excel Worksheet. These can be used to show simple visual representations of data trends across a region of cells of data in your worksheet. For example, if you wanted to see your Excel data across a particular cell region visualized as a simple column or line sparkline chart, this feature can help you to achieve that.

## {Platform} Working with Sparklines Example


`sample="/excel/excel-library/working-with-sparklines", height="500", alt="{Platform} Working with Sparklines Example"`



<div class="divider--half"></div>

## Supported Sparklines
The following is a list of the supported predefined sparkline types.

-  Line
-  Column
-  Stacked (Win/Loss)

The following code demonstrates how to programmatically add Sparklines to a Worksheet via the sparklineGroups collection:

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");
```

```razor
var workbook = new Workbook();
var sheet1 = workbook.Sheets.Add("Sparklines", SheetType.Worksheet) as Worksheet;
var sheet2 = workbook.Sheets.Add("Data", SheetType.Worksheet) as Worksheet;

sheet1.SparklineGroups.Add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.SparklineGroups.Add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
```

## API References

 - `Workbook`
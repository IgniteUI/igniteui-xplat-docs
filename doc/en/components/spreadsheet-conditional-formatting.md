---
title: {Platform} Spreadsheet | Conditional Formatting | Infragistics
_description: Use Infragistics' {Platform} spreadsheet control to conditionally format the cells of a worksheet. Check out {ProductName} spreadsheet demos!
_keywords: Spreadsheet, conditional formatting, {ProductName}, Infragistics, Worksheet
mentionedTypes: ['Spreadsheet', 'ConditionalFormatCollection', 'WorksheetCell', 'Worksheet', 'IWorksheetCellFormat']
---
# {Platform} Spreadsheet Conditional Formatting

The {Platform} Spreadsheet component allows you to conditionally format the cells of a worksheet. This allows you to highlight different pieces of your data based on a condition.

## {Platform} Spreadsheet Conditional Formatting Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-conditional-formatting"
           alt="{Platform} Spreadsheet Conditional Formatting Example"
           github-src="excel/spreadsheet/conditional-formatting">
</code-view>

<div class="divider--half"></div>

## Conditional Formatting Overview

You can configure the conditional formatting of a particular worksheet by using the many `Add` methods exposed on the `ConditionalFormats` collection of that worksheet. The first parameter of these `Add` methods is the string region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your worksheet have a `CellFormat` property that determines the way that the cells should look when the condition in that conditional format holds true. For example, you can use the properties attached to this `CellFormat` property such as `Fill` and `Font` to determine the background and font settings of your cells, respectively.

When a conditional format is created and a `CellFormat` applied, there is a subset of properties that are currently supported by the worksheet cell. The properties that are currently honored off of the `CellFormat` are `Fill`, `Border` properties, `FormatString`, and some `Font` properties such as strikethrough, underline, italic, bold, and color. Many of these can be seen from the code snippet below.

There are a few conditional formats that do not have a `CellFormat` property, as their visualization on the cells behaves differently. These conditional formats are the `DataBarConditionalFormat`, `ColorScaleConditionalFormat`, and `IconSetConditionalFormat`.

When loading a pre-existing workbook from Excel, the formats will be preserved when that workbook is loaded. The same is true for when you save the workbook out to an Excel file.

The following lists the supported conditional formats in the {Platform} `Spreadsheet` control:

- `AverageConditionalFormat`: Added using the `AddAverageCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is above or below the average or standard deviation for the associated range.
- `BlanksConditionalFormat`: Added using the `AddBlanksCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is not set.
- `ColorScaleConditionalFormat`: Added using the `AddColorScaleCondition` method, this conditional format exposes properties which control the coloring of a worksheet cell based on the cell’s value as relative to minimum, midpoint, and maximum threshold values.
- `DataBarConditionalFormat`: Added using the `AddDataBarCondition` method, this conditional format exposes properties which display data bars in a worksheet cell based on the cell’s value as relative to the associated range of values.
- `DateTimeConditionalFormat`: Added using the `AddDateTimeCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s date value falls within a given range of time.
- `DuplicateConditionalFormat`: Added using the `AddDuplicateCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique or duplicated across the associated range.
- `ErrorsConditionalFormat`: Added using the `AddErrorsCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- `FormulaConditionalFormat`: Added using the `AddFormulaCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a formula.
- `IconSetConditionalFormat`: Added using the `AddIconSetCondition` method, this conditional format exposes properties which display icons in a worksheet cell based on the cell’s value as relative to threshold values.
- `NoBlanksConditionalFormat`: Added using the `AddNoBlanksCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is set.
- `NoErrorsConditionalFormat`: Added using the `AddNoErrorsCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value is valid.
- `OperatorConditionalFormat`: Added using the `AddOperatorCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether the cell’s value meets the criteria defined by a logical operator.
- `RankConditionalFormat`: Added using the `AddRankCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is within the top of bottom rank of values across the associated range.
- `TextOperatorConditionalFormat`: Added using the `AddTextCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s text value meets the criteria defined by a string and a `FormatConditionTextOperator` value as placed in the `AddTextCondition` method’s parameters.
- `UniqueConditionalFormat`: Added using the `AddUniqueCondition` method, this conditional format exposes properties which control the visual attributes of a worksheet cell based on whether a cell’s value is unique across the associated range.

## Dependencies

In order to add conditional formatting to the `Spreadsheet` control, you will need to import the following dependencies:

<!-- Angular -->
```ts
import { CellFill } from "igniteui-angular-excel";
import { Color } from 'igniteui-angular-core';
import { ColorScaleType } from "igniteui-angular-excelScaleType";
import { FormatConditionAboveBelow } from 'igniteui-angular-excel';
import { FormatConditionIconSet } from 'igniteui-angular-excel';
import { FormatConditionOperator } from 'igniteui-angular-excel';
import { FormatConditionTextOperator } from 'igniteui-angular-excel';
import { FormatConditionTimePeriod } from 'igniteui-angular-excel';
import { FormatConditionTopBottom } from "igniteui-angular-excel";
import { WorkbookColorInfo } from 'igniteui-angular-excel';
```

<!-- React -->
```ts
import { CellFill } from "igniteui-react-excel";
import { Color } from 'igniteui-react-core';
import { ColorScaleType } from "igniteui-react-excelScaleType";
import { FormatConditionAboveBelow } from 'igniteui-react-excel';
import { FormatConditionIconSet } from 'igniteui-react-excel';
import { FormatConditionOperator } from 'igniteui-react-excel';
import { FormatConditionTextOperator } from 'igniteui-react-excel';
import { FormatConditionTimePeriod } from 'igniteui-react-excel';
import { FormatConditionTopBottom } from "igniteui-react-excel";
import { WorkbookColorInfo } from 'igniteui-react-excel';
```

<!-- WebComponents -->
```ts
import { CellFill } from "igniteui-webcomponents-excel";
import { Color } from 'igniteui-webcomponents-core';
import { ColorScaleType } from "igniteui-webcomponents-excel";
import { FormatConditionAboveBelow } from 'igniteui-webcomponents-excel';
import { FormatConditionIconSet } from 'igniteui-webcomponents-excel';
import { FormatConditionOperator } from 'igniteui-webcomponents-excel';
import { FormatConditionTextOperator } from 'igniteui-webcomponents-excel';
import { FormatConditionTimePeriod } from 'igniteui-webcomponents-excel';
import { FormatConditionTopBottom } from "igniteui-webcomponents-excel";
import { WorkbookColorInfo } from 'igniteui-webcomponents-excel';
```

## Code Snippet

The following code snippet demonstrates how to add each of the conditional formats to a spreadsheet in the `Spreadsheet` control:

```ts
let sheet = this.spreadsheet.activeWorksheet;

let red = new Color();
red.colorString = "#ff0000";

let blue = new Color();
blue.colorString = "#0000ff";

let green = new Color();
green.colorString = "#00ff00";

let gray = new Color();
gray.colorString = "#d3d3d3";

let avgFormat = sheet.conditionalFormats().addAverageCondition("A1:A10", FormatConditionAboveBelow.AboveAverage);
avgFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let blanksFormat = sheet.conditionalFormats().addBlanksCondition("B1:B10");
blanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let colorFormat = sheet.conditionalFormats().addColorScaleCondition("C1:C10", ColorScaleType.ThreeColor);
colorFormat.minimumThreshold.formatColor = new WorkbookColorInfo(red);
colorFormat.midpointThreshold.formatColor = new WorkbookColorInfo(blue);
colorFormat.maximumThreshold.formatColor = new WorkbookColorInfo(green);

let dataBarFormat = sheet.conditionalFormats().addDataBarCondition("D1:D10");

let dateTimeFormat = sheet.conditionalFormats().addDateTimeCondition("E1:E10", FormatConditionTimePeriod.NextWeek);
dateTimeFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let duplicateFormat = sheet.conditionalFormats().addDuplicateCondition("F1:F10");
duplicateFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let errorFormat = sheet.conditionalFormats().addErrorsCondition("G1:G10");
errorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let formulaFormat = sheet.conditionalFormats().addFormulaCondition("H1:H10", "=H1>2");
formulaFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let iconFormat = sheet.conditionalFormats().addIconSetCondition("I1:I10", FormatConditionIconSet.IconSet3TrafficLights1);

let noBlanksFormat = sheet.conditionalFormats().addNoBlanksCondition("J1:J10");
noBlanksFormat.cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(gray));

let noErrorFormat = sheet.conditionalFormats().addErrorsCondition("K1:K10");
noErrorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let operatorFormat = sheet.conditionalFormats().addOperatorCondition("L1:L10", FormatConditionOperator.Greater);
operatorFormat.setOperand1(500);
operatorFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);

let rankFormat = sheet.conditionalFormats().addRankCondition("M1:M10", FormatConditionTopBottom.Top, 5);
rankFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(green);

let textFormat = sheet.conditionalFormats().addTextCondition("N1:N10", "A", FormatConditionTextOperator.Contains);
textFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(red);

let uniqueFormat = sheet.conditionalFormats().addUniqueCondition("O1:O10");
uniqueFormat.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);
```

## API References

 - `AddAverageCondition`
 - `AddBlanksCondition`
 - `AddColorScaleCondition`
 - `AddDataBarCondition`
 - `AddDateTimeCondition`
 - `AddDuplicateCondition`
 - `AddErrorsCondition`
 - `AddFormulaCondition`
 - `AddIconSetCondition`
 - `AddNoBlanksCondition`
 - `AddNoErrorsCondition`
 - `AddOperatorCondition`
 - `AddRankCondition`
 - `AddTextCondition`
 - `AddUniqueCondition`
 - `CellFormat`
 - `ColorScaleConditionalFormat`
 - `ColorScaleConditionalFormat`:
 - `ConditionalFormats`
 - `DataBarConditionalFormat`
 - `DataBarConditionalFormat`:
 - `DateTimeConditionalFormat`:
 - `DuplicateConditionalFormat`:
 - `ErrorsConditionalFormat`:
 - `FormatConditionTextOperator`
 - `FormatString`
 - `FormulaConditionalFormat`:
 - `IconSetConditionalFormat`
 - `IconSetConditionalFormat`:
 - `NoBlanksConditionalFormat`:
 - `NoErrorsConditionalFormat`:
 - `OperatorConditionalFormat`:
 - `RankConditionalFormat`:
 - `Spreadsheet`
 - `TextOperatorConditionalFormat`:
 - `UniqueConditionalFormat`:
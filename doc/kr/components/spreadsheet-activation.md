---
title: $Platform$ Spreadsheet | Grid Controls | Activation | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, $ProductName$, Infragistics
_language: kr
mentionedTypes: ['Spreadsheet']
---

# $Platform$ Spreadsheet Activation

The `Spreadsheet` control exposes properties that allow you to determine the currently active cell, pane, and worksheet in the control. This is helpful as it can help you to determine where the user may be navigating or editing in the control.

## Demo


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-overview"
           github-src="excel/spreadsheet/overview">
</code-view>

<div class="divider--half"></div>

## Activation Overview

The activation of the `Spreadsheet` control is split up between the cells, panes, and worksheets of the current `Workbook` of the spreadsheet. The three "active" properties are described below:

- `ActiveCell`: Returns or sets the active cell in the spreadsheet. To set it, you must create a new instance of `SpreadsheetCell` and pass in information about that cell, such as the column and row or the string address of the cell.
- `ActivePane`: Returns the active pane in the currently active worksheet of the spreadsheet control.
- `ActiveWorksheet`: Returns or sets the active worksheet in the `Workbook` of the spreadsheet control. This can be set by setting it to an existing worksheet in the `Workbook` attached to the spreadsheet.

The following code snippet shows setting activation of the cell and worksheet in the `Spreadsheet` control:

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```

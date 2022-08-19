---
title: $Platform$ Spreadsheet | Hyperlinks | Infragistics
_description: Use Infragistics' $Platform$ spreadsheet control to display hyperlinks in the Excel workbook, which can link to websites, file directories and other worksheets. View $ProductName$ spreadsheet tutorials!
_keywords: Excel Spreadsheet, hyperlinks, $ProductName$, Infragistics
mentionedTypes: ['Spreadsheet']
---
# $Platform$ Spreadsheet Hyperlinks

The $Platform$ Spreadsheet component allows display of pre-existing hyperlinks in your Excel workbook as well as insertion of new ones that can link to websites, file directories, and even other worksheets in the workbook.

## $Platform$ Spreadsheet Hyperlinks Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-hyperlinks"
           alt="$Platform$ Spreadsheet Hyperlinks Example"
           github-src="excel/spreadsheet/hyperlinks">
</code-view>

<div class="divider--half"></div>

## Hyperlinks Overview

Hyperlinks are added to the `Spreadsheet` control by accessing the `Hyperlinks` collection on the worksheet that you want to place the hyperlink on. This collection has an `Add` method that takes a `WorksheetHyperlink` object, where you can define the cell address, the hyperlink URL to be navigated to, the display text, and a tooltip to optionally be displayed on hover.

## Dependencies

When setting up your $Platform$ spreadsheet control to use hyperlinks, you will need to import the `WorksheetHyperlink` class like so:

<!-- Angular -->
```ts
import { WorksheetHyperlink } from 'igniteui-angular-excel';
```

<!-- React -->
```ts
import { WorksheetHyperlink } from 'igniteui-react-excel';
```

<!-- WebComponents -->
```ts
import { WorksheetHyperlink } from 'igniteui-webcomponents-excel';
```

## Code Snippet

The following code snippet demonstrates how to add a hyperlink to the currently viewed worksheet in the $Platform$ `Spreadsheet` control:

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```

 ## API Members

 - `Hyperlinks`
 - `Spreadsheet`
 - `WorksheetHyperlink`
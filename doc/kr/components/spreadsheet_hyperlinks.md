---
title: $PlatformShort$ Spreadsheet | Grid Controls | Hyperlinks | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, $ProductName$, Infragistics
mentionedTypes: ['Spreadsheet']
---
# $PlatformShort$ Spreadsheet Hyperlinks

The $PlatformShort$ Spreadsheet component allows display of pre-existing hyperlinks in your Excel workbook as well as insertion of new ones that can link to websites, file directories, and even other worksheets in the workbook.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-hyperlinks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="excel/spreadsheet/hyperlinks"></sample-button>

<div class="divider--half"></div>

## Hyperlinks Overview

Hyperlinks are added to the `Spreadsheet` control by accessing the `Hyperlinks` collection on the worksheet that you want to place the hyperlink on. This collection has an `Add` method that takes a `WorksheetHyperlink` object, where you can define the cell address, the hyperlink URL to be navigated to, the display text, and a tooltip to optionally be displayed on hover.

## Dependencies

When setting up your spreadsheet control to use hyperlinks, you will need to import the `WorksheetHyperlink` class like so:

```ts
import { WorksheetHyperlink } from 'igniteui-angular-excel';
```

```ts
import { WorksheetHyperlink } from 'igniteui-react-excel';
```

<!-- WebComponents -->
```ts
import { WorksheetHyperlink } from 'igniteui-webcomponents-excel';
```

## Code Snippet

The following code snippet demonstrates how to add a hyperlink to the currently viewed worksheet in the `Spreadsheet` control:

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```
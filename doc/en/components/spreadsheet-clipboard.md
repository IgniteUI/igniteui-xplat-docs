---
title: $Platform$ Spreadsheet | Clipboard Operations | Infragistics
_description: Use clipboard operations such as copy, cut and paste within Infragistics' $Platform$ spreadsheet control. View Infragistics $ProductName$ spreadsheet demos today!
_keywords: Spreadsheet, clipboard operations, $ProductName$, Infragistics
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction', 'SpreadsheetCommandType', 'Command']
---
# $Platform$ Working with Clipboard

This topic explains how to perform clipboard operations on the $ProductName$ spreadsheet component.

## $Platform$ Working with Clipboard Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-clipboard"
           alt="$Platform$ Working with Clipboard Example"
           github-src="excel/spreadsheet/clipboard">
</code-view>

<div class="divider--half"></div>

## Dependencies
Before making use of the clipboard you will want to import the `SpreadsheetAction` enumeration:

<!-- Angular -->
```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<!-- React -->
```ts
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { SpreadsheetAction } from 'igniteui-react-spreadsheet';
```

```ts
import { IgcSpreadsheetComponent } from 'igniteui-webcomponents-spreadsheet';
import { SpreadsheetAction } from 'igniteui-webcomponents-spreadsheet';
```

<div class="divider--half"></div>


## Usage
The following code snippet shows how you can execute commands related to the clipboard in the $Platform$ `Spreadsheet` control:

```ts
public cut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Cut);
}

public copy(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Copy);
}

public paste(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Paste);
}
```

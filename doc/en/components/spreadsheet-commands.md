---
title: $PlatformShort$ Spreadsheet | Commands | Infragistics
_description: Perform commands to activate different features of Infragistics' $PlatformShort$ spreadsheet control. Learn commnads such as ZoomIn and ZoomOut with $ProductName$ spreadsheet!
_keywords: Spreadsheet, commands, $ProductName$, Infragistics
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction']
---
# $PlatformShort$ Working with Commands

The $PlatformShort$ Spreadsheet component allows you to perform commands for activating different features of the spreadsheet. This topic explains how to perform different operations with the control using commands. Many of the commands will perform their action based on the active cells, rows, or worksheets. For example two such commands are ZoomIn and ZoomOut. See the SpreadsheetAction enum for a full list.

## $PlatformShort$ Working with Commands Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-commands-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-commands' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Working with Commands Example"></iframe>
</div>
<sample-button src="excel/spreadsheet/commands"></sample-button>

<div class="divider--half"></div>

## Dependencies
Before making use of the commands you will want to import the `SpreadsheetAction`

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

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
The following snippet shows how you can setup the data validation rules

```ts
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

// ...

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```

```ts
public spreadsheet : IgrSpreadsheet = new IgrSpreadsheet({});

// ...

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```

```ts
let spreadsheet = (document.getElementById("spreadsheet") as IgcSpreadsheetComponent);

// ...

function zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

function zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```

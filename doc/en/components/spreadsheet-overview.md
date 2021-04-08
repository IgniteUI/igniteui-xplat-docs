---
title: $PlatformShort$ Spreadsheet | Tables and Spreadsheet Component | Infragistics
_description: Our $PlatformShort$ spreadsheet controls help you embed Excel document and editing experiences right into your application. Improve your data visualization today!
_keywords: Excel Spreadsheet, $ProductName$, Infragistics
mentionedTypes: ['Spreadsheet']
---
# $PlatformShort$ Spreadsheet Overview

The $PlatformShort$ Spreadsheet component allows visualizing and editing of spreadsheet data. Features include activation, cell editing, conditional formatting, selection, clipboard.

## $PlatformShort$ Spreadsheet Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-overview"
           alt="$PlatformShort$ Spreadsheet Example"
           github-src="excel/spreadsheet/overview">
</code-view>

<div class="divider--half"></div>

## Dependencies
When installing the $PlatformShort$ spreadsheet component, the core and excel package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageExcel}
npm install --save {PackageSpreadsheet}
</pre>


## Required Modules

The `Spreadsheet` requires the following modules:

```razor
ExcelModule.Register(IgniteUIBlazor);
SpreadsheetModule.Register(IgniteUIBlazor);
```

```ts
import { IgxExcelModule } from 'igniteui-angular-excel';
import { IgxSpreadsheetModule } from 'igniteui-angular-spreadsheet';

@NgModule({
    imports: [
        // ...
        IgxExcelModule,
        IgxSpreadsheetModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';

IgrExcelModule.register();
IgrSpreadsheetModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// spreadsheet's modules
import { IgcExcelModule } from 'igniteui-webcomponents-excel';
import { IgcSpreadsheetModule } from 'igniteui-webcomponents-spreadsheet';

// register the modules
ModuleManager.register(
    IgcExcelModule,
    IgcSpreadsheetModule
);
```

<div class="divider--half"></div>

## Usage
Now that the $PlatformShort$ spreadsheet module is imported, next is the basic configuration of the spreadsheet.

```html
<igx-spreadsheet #spreadsheet height="500px" width="100%">
</igx-spreadsheet>
```

```html
<igc-spreadsheet id="spreadsheet" height="500px" width="100%">
</igc-spreadsheet>
```

> [!NOTE]
>
> In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a `Workbook`.

The following demonstrates how to load a workbook into the $PlatformShort$ spreadsheet

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { ExcelUtility } from 'ExcelUtility';

// ...

@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

ngOnInit() {
    const excelFile = '../../assets/Sample1.xlsx';
    ExcelUtility.loadFromUrl(excelFile).then((w) => {
      this.spreadsheet.workbook = w;
    });
}
```

```ts
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { ExcelUtility } from 'ExcelUtility';

// ...

public spreadsheet : IgrSpreadsheet = new IgrSpreadsheet({})

ngOnInit() {
    const excelFile = '../../assets/Sample1.xlsx';
    ExcelUtility.loadFromUrl(excelFile).then((w) => {
      this.spreadsheet.workbook = w;
    });
}
```

```ts
import { IgcSpreadsheetComponent } from 'igniteui-webcomponents-spreadsheet';
import { Workbook } from 'igniteui-webcomponents-excel';
import { ExcelUtility } from "./ExcelUtility";

// ...

let spreadsheet = (document.getElementById("spreadsheet") as IgcSpreadsheetComponent);

const excelFile = '../../assets/Sample1.xlsx';
ExcelUtility.loadFromUrl(excelFile).then((w: Workbook) => {
    spreadsheet.workbook = w;
});

```

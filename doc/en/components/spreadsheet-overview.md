---
title: $Platform$ Spreadsheet | Tables and Spreadsheet Component | Infragistics
_description: Our $Platform$ spreadsheet controls help you embed Excel document and editing experiences right into your application. Improve your data visualization today!
_keywords: Excel Spreadsheet, $ProductName$, Infragistics
mentionedTypes: ['Spreadsheet']
---
# $Platform$ Spreadsheet Overview

The $Platform$ Spreadsheet  (Excel viewer) component is lightweight, feature-rich and supplied with all the necessary options for operating, visualizing, and editing all types of spreadsheet data – scientific, business, financial, and more. All the information can be presented in a tabular format that feels intuitive and easy to navigate across cells, panes, and worksheets. The spreadsheet is complemented by flexible Excel-like interface, detailed charts, and features such as activation, cell editing, conditional formatting, styling, selection, clipboard. The data sheet is optimized for fast performance. It works on all browsers for complex and voluminous spreadsheet models, while ensuring flawless functionality and simplicity.

## $Platform$ Spreadsheet Example

Let’s look at this rather simple spreadsheet example below and see what commands can be applied to each row and cell and explore the ways in which the spreadsheet data can be managed. 

Just like in Excel spreadsheet, you can apply filtering functionality, sorting, move cells, customization in terms of cells color, keyboard shortcuts, and add the ability to even calculate formulas.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-overview"
           alt="$Platform$ Spreadsheet Example"
           github-src="excel/spreadsheet/overview">
</code-view>

<div class="divider--half"></div>

Why using Ignite UI for React spreadsheet? 

* Flexible layout and easy customization 

You can easily select, add, remove, switch the features you want on/off, and configure React sheets in an instant so that it all answers the needs of end-users. There are also configurable libraries, styling and formatting alternatives, visibility options, plenty of themes to choose from. 

* Convenient Excel-like interface 

Just like operating data in Excel, our spreadsheet component delivers all well-known Excel clip board operations – copy, paste, cut. You won’t need extra training or new skills in order to start using it right away. It also comes with options for sorting, full keyboard navigation, values and formulas, cell dragging, column and rows editing, filtering, number formatting, resizing. The smart and fast calculation engine powers even the most complex estimations. With no dependencies on Excel. 

* Data operations 

Collect and manage scientific, business, engineering, financial and educational data. Prepare and create analysis, advanced grids, reports, data input forms, budgeting, forecasting scenarios, custom spreadsheets. All of this thanks to the comprehensive API. 

* Fast and secure data processing  

With our spreadsheet, processing data is 100% safe and secure…  

* Excel and CSV import & export 

With the built-in Excel import/export functionality, you can instantly load and open Excel documents and view them on-demand, add changes and save them. Also, effortlessly export your completed Excel .xlsx spreadsheets.

## Dependencies
When installing the $Platform$ spreadsheet component, the core and excel package must also be installed.

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
Now that the $Platform$ spreadsheet module is imported, next is the basic configuration of the spreadsheet.

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

The following demonstrates how to load a workbook into the $Platform$ spreadsheet

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

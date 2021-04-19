---
title: $Platform$ Spreadsheet | Grid Controls | Overview | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, $ProductName$, Infragistics
mentionedTypes: ['Spreadsheet']
---
# $Platform$ $Platform$ Spreadsheet

The $Platform$ Spreadsheet is a $Platform$ component that allows visualizing and editing of spreadsheet data. Features include activation, cell editing, conditional formatting, selection, clipboard.

## Demo


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-overview"
           github-src="excel/spreadsheet/overview">
</code-view>

<div class="divider--half"></div>

## Dependencies
When installing the spreadsheet package, the core and excel package must also be installed.

- **npm install --save {PackageCore}**
- **npm install --save {PackageExcel}**
- **npm install --save {PackageSpreadsheet}**


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
// spreadhseet's modules
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
Now that the spreadsheet module is imported, next is the basic configuration of the spreadsheet.

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

The following demonstrates how to load a workbook into the spreadsheet

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

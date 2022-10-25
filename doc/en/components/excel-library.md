---
title: {Platform} Excel Library| Data Spreadsheet and Table | Infragistics
_description: Use Infragistics' {Platform} excel library to work with spreadsheet data using Microsoft Excel features.  Learn how easily you can transfer data from excel to your application using {ProductName} excel library!
_keywords: Excel library, {ProductName}, Infragistics, workbook
mentionedTypes: ['Workbook']
---
# {Platform} Excel Library Overview

The Infragistics {Platform} Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like `Workbook`, `Worksheet`, `Cell`, `Formula` and many more. The Infragistics {Platform} Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

## {Platform} Excel Library Example


<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library-overview"
           alt="{Platform} Excel Library Example"
           github-src="excel/excel-library/overview">
</code-view>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the excel package, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageExcel}
</pre>

## Component Modules

The {Platform} excel library requires the following modules:

```ts
// app.module.ts
import { IgxExcelModule } from 'igniteui-angular-excel';

@NgModule({
    imports: [
        // ...
        IgxExcelModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrExcelModule } from 'igniteui-react-excel';

IgrExcelModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcExcelModule  } from 'igniteui-webcomponents-excel';

// register the modules
ModuleManager.register(
    IgcExcelModule
);
```
## Modules Implementation

The Excel Library contains 5 modules that you can use to limit bundle size of your app:

-	**IgxExcelCoreModule** – This contains the object model and much of the excel infrastructure
-	**IgxExcelFunctionsModule** – This contains the majority of the functions for formula evaluations, such as Sum, Average, Min, Max, etc. The absence of this module won’t cause any issues with formula parsing if the formula is to be calculated. For example, if you apply a formula like “=SUM(A1:A5)” and ask for the Value of the cell, then you would get a #NAME! error returned. This is not an exception throw – it’s an object that represents a particular error since formulas can result in errors.
-	**IgxExcelXlsModule** – This contains the load and save logic for xls (and related) type files – namely the Excel97to2003 related WorkbookFormats.
-	**IgxExcelXlsxModule** – This contains the load and save logic for xlsx (and related) type files – namely the Excel2007 related and StrictOpenXml WorkbookFormats.
-	**IgxExcelModule** – This references the other 4 modules and so basically ensures that all the functionality is loaded/available.

<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->

## Requirements

In order to use the {Platform} excel library, you need to add the following using statement:

```razor
@using Infragistics.Documents.Excel
```

If you are using a Web Assembly (WASM) Blazor project, there are a couple of extra steps:

- Add a reference to the following script in the wwwroot/index.html file:

```razor
<script src="_content/IgniteUI.Blazor.Documents.Excel/excel.js"></script>
```

- Set the static `Workbook.InProcessRuntime` to the current runtime. This can be done by using the following code:

```razor
@using Microsoft.JSInterop

@code {

    [Inject]
    public IJSRuntime Runtime { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        Workbook.InProcessRuntime = (IJSInProcessRuntime)this.Runtime;
    }
}
```

<!-- end: Blazor -->

## Supported Versions of Microsoft Excel
The following is a list of the supported versions of Excel.**

-  Microsoft Excel 97

-  Microsoft Excel 2000

-  Microsoft Excel 2002

-  Microsoft Excel 2003

-  Microsoft Excel 2007

-  Microsoft Excel 2010

-  Microsoft Excel 2013

-  Microsoft Excel 2016

> [!NOTE]
> The Excel Library does not support the Excel Binary Workbook (.xlsb) format at this time.

## Load and Save Workbooks
Now that the Excel Library module is imported, next step is to load a workbook.

<!-- Angular, React, WebComponents -->

In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a `Workbook`.

<!-- end: Angular, React, WebComponents -->

In order to load and save `Workbook` objects, you can utilize the save method of the actual `Workbook` object, as well as its static `Load` method.

```ts
import { Workbook } from "{PackageExcel}";
import { WorkbookSaveOptions } from "{PackageExcel}";
import { WorkbookFormat } from "{PackageExcel}";
import { ExcelUtility } from "ExcelUtility";

var workbook = ExcelUtility.load(file);
ExcelUtility.save(workbook, "fileName");
```

```razor
protected override void OnInitialized()
{
    var memoryStream = new System.IO.MemoryStream();
    workbook.Save(memoryStream);

    memoryStream.Position = 0;
    var bytes = memoryStream.ToArray();
    this.SaveFile(bytes, "fileName.xlsx", string.Empty);
}

private void SaveFile(byte[] bytes, string fileName, string mime)
{
    if (this.Runtime is WebAssemblyJSRuntime wasmRuntime)
      wasmRuntime.InvokeUnmarshalled<string, string, byte[], bool>("BlazorDownloadFileFast", fileName, mime, bytes);
    else if (this.Runtime is IJSInProcessRuntime inProc)
      inProc.InvokeVoid("BlazorDownloadFile", fileName, mime, bytes);
}
```

>[!NOTE]
>For Angular
><div class="divider--half"></div>
>
## Managing Heap
>
>Due to the size of the Excel Library, it's recommended to disable the source map generation.
>
>Modify `angular.json` by setting the `vendorSourceMap` option under architect => build => options and under serve => options:
>
```ts
...
    "architect": {
        "build": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "tsConfig": "src/tsconfig.app.json",
                  // ...
          },
              // ...
        },
        "serve": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "browserTarget": "my-app:build"
          },
              // ...
        },
        // ...
      }
```
>
<!-- -->

 ## API Members

 - `Load`
 - `WorkbookInProcessRuntime`
 - `Workbook`
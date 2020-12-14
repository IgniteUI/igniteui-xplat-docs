---
title: $PlatformShort$ Excel ライブラリ | データ スプレッドシートとテーブル | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ Excel ライブラリは、Microsoft Excel 機能を使用してスプレッドシート データを使用した作業が可能になります。$ProductName$ Excel ライブラリを使用して Excel からアプリケーションにデータを簡単に転送できる方法について説明します。
_keywords: Excel library, $ProductName$, Infragistics, workbook, Excel ライブラリ, ワークブック, インフラジスティックス
mentionedTypes: ['Workbook']
_language: ja
---
# $PlatformShort$ Excel ライブラリの概要

Infragistics $PlatformShort$ Excel ライブラリは、Workbook、Worksheet、Cell、Formula などの人気の Microsoft® Excel® スプレッドシート オブジェクトを使用してスプレッドシート データで作業をすることができます。Infragistics $PlatformShort$ Excel ライブラリによって Excel スプレッドシートでアプリケーションのデータを表示するだけでなく、Excel からアプリケーションへのデータの転送も簡単になります。

## $PlatformShort$ Excel ライブラリの例

<div class="sample-container loading" style="height: 100px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/excel-library-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Excel ライブラリの例"></iframe>
</div>
<sample-button src="excel/excel-library/overview"></sample-button>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## 依存関係
excel パッケージをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageExcel}
</pre>

## モジュールの要件

$PlatformShort$ Excel ライブラリを作成するには、以下のモジュールが必要です。

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
## モジュールの実装

Excel ライブラリには、アプリのバンドル サイズを制限するために使用できる 5 つのモジュールが含まれています。

-	**IgxExcelCoreModule** – オブジェクトモデルを含み、Excel の基盤となります。
-	**IgxExcelFunctionsModule** – Sum、Average、Min、Max、SumIfs、Ifs など、数式評価のほとんどのカスタム関数を含み、このモジュールがなくても数式が計算 ( “=SUM(A1:A5 などの数式を適用するなど) されてセルの Value を要求する場合は数式の解析で問題を発生しません。(注: 例外のスローではありません。数式の結果がエラーとなるため特定のエラーを表すオブジェクト)。
-	**IgxExcelXlsModule** – xls (および関連する) タイプ ファイルのロジックの読み込みと保存を含みます。これは Excel97to2003 関連の WorkbookFormats です。
-	**IgxExcelXlsxModule** – xlsx (および関連する) タイプ ファイルのロジックの読み込みと保存を含みます。これは Excel2007 関連および StrictOpenXml ANDWorkbookFormats です。
-	**IgxExcelModule** – 他の 4 つのモジュールの参照ですべての機能の読み込み/使用を可能にします。

<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->

## Requirements

In order to use the $PlatformShort$ excel library, you need to add the following using statement:

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

## サポートされるバージョンの Microsoft Excel
以下は Excel のサポートされるバージョンのリストです。**

-  Microsoft Excel 97

-  Microsoft Excel 2000

-  Microsoft Excel 2002

-  Microsoft Excel 2003

-  Microsoft Excel 2007

-  Microsoft Excel 2010

-  Microsoft Excel 2013

-  Microsoft Excel 2016

> [!NOTE]
> Excel ライブラリ は Excel Binary Workbook (.xlsb) フォーマットを現時点ではサポートしていません。

## ワークブックの読み込みと保存
注: Excel ライブラリ モジュールをインポートした後、ワークブックを読み込みます。

<!-- Angular, React, WebComponents -->

In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a `Workbook`.

<!-- end: Angular, React, WebComponents -->

`Workbook` オブジェクトを読み込んで保存するために、実際の `Workbook` の保存メソッドや static な `Load` メソッドを使用できます。

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
## ヒープの管理
>
>Excel Library のサイズに因り、ソースマップの生成を無効にすることを推奨します。
>
>architect => build => options から serve の options で `vendorSourceMap` オプションを設定して `angular.json` を変更します。
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
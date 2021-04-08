---
title: $PlatformShort$ スプレッドシート | テーブルとスプレッドシート コンポーネント | インフラジスティックス
_description: $PlatformShort$ スプレッドシート コントロールを使用して、Excel ドキュメントと編集機能をアプリケーションに直接埋め込みます。データ可視化を向上させます。
_keywords: Excel Spreadsheet, $ProductName$, Infragistics, Excel スプレッドシート, インフラジスティックス
_language: ja
mentionedTypes: ['Spreadsheet']
---
# $PlatformShort$ Spreadsheet の概要

$PlatformShort$ Spreadsheet は、スプレッドシート データの視覚化と編集を可能にします。機能には、アクティブ化、セル編集、条件付き書式設定、選択、クリップボードなどがあります。

## $PlatformShort$ Spreadsheet の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-overview"
           alt="$PlatformShort$ Spreadsheet の例"
           github-src="excel/spreadsheet/overview">
</code-view>

<div class="divider--half"></div>

## 依存関係
$PlatformShort$ スプレッドシート コンポーネントをインストールするときは、core パッケージと excel パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageExcel}
npm install --save {PackageSpreadsheet}
</pre>


## モジュールの要件

`Spreadsheet` を作成するには、以下のモジュールが必要です。

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

## 使用方法
$PlatformShort$ スプレッドシート モジュールがインポートされたので、次にスプレッドシートの基本設定です。

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
> 次のコード スニペットでは、外部の [ExcelUtility](excel-utility.md) クラスを使用して `Workbook` を保存およびロードしています。

以下は、ワークブックを $PlatformShort$ スプレッドシートにロードする方法を示しています。

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

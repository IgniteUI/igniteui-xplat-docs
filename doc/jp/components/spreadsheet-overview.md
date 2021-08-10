---
title: $Platform$ Spreadsheet コンポーネント – Ignite UI for $Platform$
_description: Ignite UI for $Platform$ Spreadsheet を使用して、柔軟なレイアウト、簡単なカスタマイズ オプション、Excel のような便利なインターフェイスを利用できます。表データを好きなように管理できます。
_keywords: Excel Spreadsheet, $ProductName$, Infragistics, Excel スプレッドシート, インフラジスティックス
_language: ja
mentionedTypes: ['Spreadsheet']
---
# $Platform$ Spreadsheet の概要

$Platform$ Spreadsheet (Excel ビューア) コンポーネントは軽量で機能が豊富で、科学、ビジネス、財務など、あらゆる種類のスプレッドシート データを操作、視覚化、編集するために必要なすべてのオプションが用意されています。すべての情報は、セル、ペイン、およびワークシート間を直感的かつ簡単にナビゲートできる表形式で表示できます。スプレッドシートは、Excel のような柔軟なインターフェイス、詳細なチャート、およびアクティブ化、セル編集、条件付き書式設定、スタイル設定、選択、クリップボードなどの機能によって補完されます。

## $Platform$ Spreadsheet の例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-overview"
           alt="$Platform$ Spreadsheet の例"
           github-src="excel/spreadsheet/overview">
</code-view>

<div class="divider--half"></div>

## 機能 

* 機能 

Excel スプレッドシートと同様に、フィルタリング機能、ソート、セルの移動、セルの色に関するカスタマイズ、キーボード ショートカットを適用したり、数式を計算する機能を追加したりできます。

Ignite UI for React スプレッドシートを使用する理由 

* パフォーマンス 

スプレッドシートはすべての最新のブラウザーと互換性があり、完璧な機能と簡便性を保証しながら、複雑で膨大なスプレッドシート モデル用に最適化されています。

* 柔軟なレイアウトと簡単なカスタマイズ

必要な機能のオン/オフを簡単に選択、追加、削除、切り替え、React シートを瞬時に構成できるため、すべてがエンドユーザーのニーズに応えます。構成可能なライブラリ、スタイルとフォーマットの選択肢、表示オプション、選択できるテーマもたくさんあります。 

* 便利な Excel のようなインターフェース

Excel でデータを操作するのと同じように、スプレッドシート コンポーネントは、コピー、貼り付け、切り取りなど、よく知られているすべての Excel クリップボード操作を提供します。すぐに使い始めるために、追加のトレーニングや新しいスキルは必要ありません。また、ソート、完全なキーボード ナビゲーション、値と数式、セルのドラッグ、列と行の編集、フィルタリング、数値の書式設定、サイズ変更のオプションも付属しています。スマートで高速な計算エンジンは、最も複雑な推定にも対応します。Excel に依存しません。 

* データ操作 

科学、ビジネス、エンジニアリング、財務、教育のデータを収集して管理します。分析、高度なグリッド、レポート、データ入力フォーム、予算編成、予測シナリオ、カスタム スプレッドシートを準備および作成します。これらすべてが包括的な API のおかげです。 

* 高速で安全なデータ処理  

データ処理は 100% 安全です。 

* Excel と CSV のインポートとエクスポート 

組み込みの Excel インポート/エクスポート機能を使用すると、Excel ドキュメントを即座にロードして開き、オンデマンドで表示したり、変更を追加したり、保存したりできます。また、完成した Excel.xlsx スプレッドシートを簡単にエクスポートできます。

## 依存関係
$Platform$ スプレッドシート コンポーネントをインストールするときは、core パッケージと excel パッケージもインストールする必要があります。

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
$Platform$ スプレッドシート モジュールがインポートされたので、次にスプレッドシートの基本設定です。

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

以下は、ワークブックを $Platform$ スプレッドシートにロードする方法を示しています。

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

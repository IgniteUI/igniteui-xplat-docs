---
title: {Platform} {ComponentTitle} エクスポート - {ProductName}
_description: {ProductName} {ComponentTitle} のエクスポート機能を使用すると、フィルタリング、ソート、および現在のグリッド状態などの機能を保持したまま、グリッド データを Excel、CSV、および PDF 形式にエクスポートできます。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
_license: commercial
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridExportExcel}
_language: ja
---

# {Platform} {ComponentTitle} エクスポート

<!-- Blazor, React, WebComponents -->
{ProductName} {ComponentTitle} は、Grid Toolbar Exporter コンポーネントを介してデータ エクスポート機能を提供します。表示されたデータを Excel、CSV、または PDF 形式でエクスポートできます。Excel エクスポートは、フィルタリングやソートなどの機能をサポートする MS Excel テーブル形式を使用します。エクスポートを有効にするには、`GridToolbarExporter` をグリッドのツールバー内に配置します。デフォルトでは、すべてのエクスポート形式が有効になっています。
<!-- end: Blazor, React, WebComponents  -->

<!-- Angular -->
{Platform} {ComponentTitle} の {ProductName} エクスポート サービスは、データを Excel および PDF 形式にエクスポートできます。エクスポート機能は、`ExcelExporterService` クラスと `PdfExporterService` クラスにカプセル化されています。Excel エクスポートは、フィルタリングやソートなどの機能をサポートする MS Excel テーブル形式を使用し、PDF エクスポートはグリッドの現在の状態をキャプチャします。エクスポートを開始するには、`ExcelExporterService` または `PdfExporterService` の `Export` メソッドを呼び出し、最初の引数として `{ComponentName}` コンポーネントを渡します。
<!-- end: Angular -->

## {Platform} エクスポートの例

`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} エクスポートの例"`


<!-- Angular -->
## {ComponentTitle} のデータのエクスポート

Ignite UI Excel および PDF エクスポーターの使用を開始するには、最初に app.module.ts ファイルで `ExcelExporterService` および `PdfExporterService` をインポートし、`providers` 配列にサービスを追加します。

```ts
// app.module.ts
import { ExcelExporterService, PdfExporterService } from 'igniteui-{Platform}';

@NgModule({
  providers: [ ExcelExporterService, PdfExporterService ]
})

export class AppModule {}
```

> [!Note]
> v12.2.1 以降では、エクスポーター サービスは root で提供されます。つまり、AppModule プロバイダーでそれらを宣言する必要はありません。

エクスポートの開始は、コンポーネントのテンプレートでボタンのハンドラーを使用します。

```html
<{ComponentTitle} #{ComponentTitle} [data]="localData" [autoGenerate]="true"></{ComponentTitle}>
<button (click)="exportButtonHandler()">Export {ComponentTitle} to Excel</button>
<button (click)="exportPdfButtonHandler()">Export {ComponentTitle} to PDF</button>
```

```Razor
<IgbDataGrid data="localData"/>
<button @onclick="exportButtonHandler">Export to Excel</button>
<button @onclick="exportPdfButtonHandler">Export to PDF</button>
```

コンストラクターの引数を `ExcelExporterService` または `PdfExporterService` として型定義することで、エクスポーター サービスにアクセスでき、{Platform} フレームワークがサービスのインスタンスを提供します。Excel または PDF にデータをエクスポートするには、`Export` メソッドを呼び出し、最初の引数として {ComponentTitle} コンポーネントを渡します。

次のコードは、コンポーネント ファイル内のエクスポート処理を実行します。

```ts
// component.ts
import { ExcelExporterService, ExcelExporterOptions, PdfExporterService, PdfExporterOptions } from 'igniteui-{Platform}';
import { {ComponentName} } from 'igniteui-{Platform}';

@ViewChild('{ComponentName}') public {ComponentName}: {ComponentName};

constructor(private excelExportService: ExcelExporterService, private pdfExportService: PdfExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.{ComponentName}, new ExcelExporterOptions('ExportedDataFile'));
}

public exportPdfButtonHandler() {
  this.pdfExportService.export(this.{ComponentName}, new PdfExporterOptions('ExportedDataFile'));
}
```

すべてが正常に完了すると、{ComponentTitle} コンポーネントと 2 つのエクスポート ボタンが表示されます。それぞれのボタンを押すと、エクスポート プロセスがトリガーされ、ブラウザーは `{ComponentName}` コンポーネントのデータを Excel または PDF 形式で含む 「ExportedDataFile.xlsx」 または 「ExportedDataFile.pdf」 という名前のファイルをダウンロードします。
<!-- end: Angular -->

<!-- Angular -->

## すべてのデータのエクスポート

**ページング**などのリモート操作を使用する場合、グリッドは一度に完全なデータ セットにアクセスできない場合があります。このような場合は、[Excel エクスポート サービス](../exporter-excel.md)を使用し、利用可能な場合は完全なデータ コレクションを渡すことをお勧めします。

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new ExcelExporterOptions('ExportedDataFile'));
}
```

リモート データの PDF ダウンロードを提供する場合は、ユーザーが期待する内容をドキュメントに反映させるために、最初に完全なデータ セットを取得してから `export` を呼び出すことを検討してください。

<!-- end: Angular -->

<!-- ComponentStart: Grid -->
## グループ化されたデータのエクスポート

グループ化されたデータをエクスポートするには、`{ComponentName}` を 1 つ以上の列でグループ化する必要があります。ブラウザーは、選択した列でグループ化された Excel 形式の `{ComponentName}` コンポーネントからのデータを含む 「ExportedDataFile.xlsx」 という名前のファイルをダウンロードします。トピックのはじめに例があります。

<!-- Angular -->
`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} グループ化されたデータのエクスポートの例"`
<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## 複数列ヘッダー グリッドのエクスポート

定義された[複数列ヘッダー](multi-column-headers.md)を使用して `{ComponentName}` をエクスポートできます。すべてのヘッダーは、`{ComponentName}` に表示されるときに、エクスポートされた Excel ファイルに反映されます。エクスポートされたデータから定義された複数列ヘッダーを除外する場合は、`ExporterOption` `IgnoreMultiColumnHeaders` を **true** に設定できます。

> [!Note]
> Excel テーブルは複数の列ヘッダーをサポートしていないため、エクスポートされた `{ComponentName}` はテーブルとしてフォーマットされません。

> [!Note]
> `GridToolbarExporter` は、エンド ユーザーが使用できるエクスポート形式を制御する方法も示すように構成されています。ツールバーのエクスポーター オプションを使用して、Excel、CSV、または PDF ボタンを切り替えます。
> <!-- WebComponents -->
> - `export-excel`、`export-csv`、`export-pdf`
> <!-- end: WebComponents -->
> <!-- Angular, React -->
> - `exportExcel`、`exportCsv`、`exportPdf`
> <!-- end: Angular, React -->
> <!-- Blazor -->
> - `ExportExcel`、`ExportCsv`、`ExportPdf`
> <!-- end: Blazor -->

`sample="/{ComponentSample}/multi-column-headers-export", height="750", alt="{Platform} {ComponentTitle} 複数列ヘッダーのエクスポートの例"`

## 固定された列ヘッダーを使用してグリッドをエクスポートする


デフォルトでは、Excel エクスポーター サービスは、スクロール可能な (固定されていない) 列ヘッダーを使用してグリッドをエクスポートします。多くのシナリオでは、エクスポートされた Excel ファイルの上部にすべてのヘッダーを固定し、ユーザーがレコードをスクロールしても常に表示されるようにしたい場合があります。これを実現するには、`ExporterOption` `FreezeHeaders` を **true** に設定します。

> [!Note]
> PDF エクスポートには、ドキュメントの上部に列ヘッダー行が自動的に含まれるため、読者がファイルを開いたり印刷したりしても同じコンテキストが保持されます。

<!-- Angular -->
```ts
public exportButtonHandler() {
    const exporterOptions = new ExcelExporterOptions('ExportedDataFile');
    exporterOptions.freezeHeaders = true;
    this.excelExportService.export(this.grid, exporterOptions);
}
```
<!-- end: Angular -->

<!-- WebComponents -->
<!-- ComponentStart: Grid, TreeGrid -->
```ts
constructor() {
  var gridToolbarExporter1 = document.getElementById('gridToolbarExporter1') as IgcGridToolbarExporterComponent;
  gridToolbarExporter1.addEventListener("exportStarted", this.webGridExportEventFreezeHeaders);
}

public webGridExportEventFreezeHeaders(args: any): void {
  args.detail.options.freezeHeaders = true;
}
```
<!-- ComponentEnd: Grid, TreeGrid -->
<!-- end: WebComponents -->

<!-- WebComponents -->
<!-- ComponentStart: HierarchicalGrid -->
```ts
constructor() {
  var hGridToolbarExporter = document.getElementById('hGridToolbarExporter') as IgcGridToolbarExporterComponent;
  hGridToolbarExporter.addEventListener("exportStarted", this.webGridExportEventFreezeHeaders);
}

public webGridExportEventFreezeHeaders(args: CustomEvent<IgcExporterEvent>): void {
  args.detail.options.freezeHeaders = true;
}
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: WebComponents -->

<!-- React -->
<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->
```tsx
function exportEventFreezeHeaders(args: IgrExporterEventArgs) {
    args.detail.options.freezeHeaders = true;
  }

<IgrGridToolbar>
  <IgrGridToolbarActions>
    <IgrGridToolbarExporter onExportStarted={exportEventFreezeHeaders}></IgrGridToolbarExporter>
  </IgrGridToolbarActions>
</IgrGridToolbar>
```
<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->
<!-- end: React -->

<!-- ComponentStart: Grid, TreeGrid -->
```razor
 <{ComponentSelector}>
    <IgbGridToolbar>
      <IgbGridToolbarActions>
        <IgbGridToolbarExporter
          ExportExcel="true" ExportStartedScript="WebGridExportEventFreezeHeaders">
        </IgbGridToolbarExporter>
      </IgbGridToolbarActions>
    </IgbGridToolbar>
 </{ComponentSelector}>

igRegisterScript("WebGridExportEventFreezeHeaders", (ev) => {
    ev.detail.options.freezeHeaders = false;
}, false);
```
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- Blazor -->
<!-- ComponentStart: HierarchicalGrid -->
```razor
 <{ComponentSelector}>
    <IgbGridToolbar>
      <IgbGridToolbarActions>
        <IgbGridToolbarExporter
          ExportExcel="true" ExportStartedScript="WebHierarchicalGridExportEventFreezeHeaders">
        </IgbGridToolbarExporter>
      </IgbGridToolbarActions>
    </IgbGridToolbar>
 </{ComponentSelector}>

igRegisterScript("WebHierarchicalGridExportEventFreezeHeaders", (ev) => {
    ev.detail.options.freezeHeaders = false;
}, false);
```
<!-- ComponentEnd: HierarchicalGrid -->
<!-- end: Blazor -->

<!-- Angular -->
## エクスポートするコンテンツのカスタマイズ

上記の例では、Excel Exporter サービスはすべての使用可能なデータをエクスポートします。行または列全体のエクスポートをしない方が良い場合があります。これを実現するには、それぞれ各列と各行に対して発生する `columnExporting` および `rowExporting` イベントをサブスクライブし、イベント引数オブジェクトの `cancel` プロパティを **true** に設定してイベントをキャンセルします。

以下の例では、ヘッダーが 「Age」 で、インデックスが 1 の場合、エクスポートから列を除外します。

```ts
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.{ComponentTitle}, new ExcelExporterOptions('ExportedDataFile'));
```

`{ComponentName}` コンポーネントのデータ エクスポートでは、行フィルタリングおよび列の非表示などの機能に応じて `{ComponentName}` で表示されるデータのみをエクスポートします。`ExcelExporterOptions` または `PdfExporterOptions` オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。
<!-- end: Angular -->

## 既知の問題と制限

<!-- ComponentStart: Grid -->
|制限|説明|
|--- |--- |
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|セルのスタイル設定|Excel エクスポーター サービスは、セル コンポーネントに適用されたカスタム スタイルのエクスポートをサポートしていません。このようなシナリオでは、[Excel ライブラリ](../../excel-library.md)を使用することをお勧めします。|
|幅の広い PDF レイアウト|非常に幅の広い Grid は、PDF の列がページに収まるように縮小されることがあります。ドキュメントを読みやすく保つために、エクスポートする前に列幅を適用するか、優先度の低いフィールドを非表示にしてください。|
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
|制限|説明|
|--- |--- |
|階層レベル|Excel エクスポーター サービスは、最大 8 レベルの階層を作成できます。|
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|セルのスタイル設定|Excel エクスポーター サービスは、セル コンポーネントに適用されたカスタム スタイルのエクスポートをサポートしていません。このようなシナリオでは、[Excel ライブラリ](../../excel-library.md)を使用することをお勧めします。|
|幅の広い PDF レイアウト|非常に幅の広い Grid は、PDF の列がページに収まるように縮小されることがあります。ドキュメントを読みやすく保つために、エクスポートする前に列幅を適用するか、優先度の低いフィールドを非表示にしてください。|
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
|制限|説明|
|--- |--- |
|階層レベル|Excel エクスポーター サービスは、最大 8 レベルの階層を作成できます。|
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|ピン固定列された列のエクスポート|エクスポートされた Excel ファイルでは、ピン固定列は固定されませんが、グリッドに表示されるのと同じ順序で表示されます。|
|幅の広い PDF レイアウト|非常に幅の広い Grid は、PDF の列がページに収まるように縮小されることがあります。ドキュメントを読みやすく保つために、エクスポートする前に列幅を適用するか、優先度の低いフィールドを非表示にしてください。|
<!-- ComponentEnd: HierarchicalGrid -->

## API リファレンス

<!-- Angular -->
- `ExcelExporterService`
- `ExcelExporterOptions`
- `PdfExporterService`
- `PdfExporterOptions`
<!-- end: Angular -->
- `{ComponentName}`

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

- [{ProductName} **フォーラム (英語)**]({ForumsLink})
- [{ProductName} **GitHub (英語)**]({GithubLink})

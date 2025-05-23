---
title: {Platform} {ComponentTitle} Excel へのエクスポート - {ProductName}
_description: {ProductName} Excel Exporter を使用すると、クライアント Excel の機能をより便利でシンプルにできます。この形式では、フィルタリングやソートなどの機能が使用できます。
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridExportExcel}
_language: ja
---

# {Platform} {ComponentTitle} Export to Excel サービス

{Platform} {ComponentTitle} の {ProductName} Export to Excel サービスは、データを Excel へエクスポートできます。エクスポート機能は、`ExcelExporterService` クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式ではフィルタリングやソートなどの機能が使用でき、`ExcelExporterService` の `Export` メソッドを呼び出して最初の引数として `{ComponentName}` コンポーネントを渡し、グリッドを簡単にエクスポートします。

## {Platform} Excel Exporter の例


`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} Excel Exporter の例"`


<!-- Angular -->
## {ComponentTitle} のデータのエクスポート

IgniteUI Excel Exporter を使用するには、`ExcelExporterService` を app.module.ts ファイルにインポートし、`providers` 配列にサービスを追加します。

```ts
// app.module.ts
import { ExcelExporterService } from 'igniteui-{Platform}';

@NgModule({
  providers: [ ExcelExporterService ]
})

export class AppModule {}
```

> [!Note]
> v12.2.1 以降では、エクスポーター サービスは root で提供されます。つまり、AppModule プロバイダーでそれらを宣言する必要はありません。

> [!Note]
> Excel Exporter サービスは JSZip にピア依存関係があります。JSZip ライブラリは Excel Exporter の使用時にインストールしてください。

エクスポート処理の開始は、コンポーネントのテンプレートでボタンのハンドラーを使用します。

```html
<{ComponentTitle} #{ComponentTitle} [data]="localData" [autoGenerate]="true"></{ComponentTitle}>
<button (click)="exportButtonHandler()">Export {ComponentTitle} to Excel</button>
```

```Razor
<IgbDataGrid data="localData"/>
<button @onclick="exportButtonHandler">Export to Excel</button>
```

エクスポーター サービスへのアクセスは、コンポーネントのコンストラクターで `ExcelExporterService` 型の引数を定義し、{Platform} フレームワークはサービスのインスタンスを提供します。データを MS Excel 形式でエクスポートするには、エクスポーター サービスの `Export` メソッドを呼び出して {ComponentTitle} コンポーネントを最初の引数として渡します。

以下のコードはコンポーネントのファイルでエクスポート処理を実行します。

```ts
// component.ts
import { ExcelExporterService, ExcelExporterOptions } from 'igniteui-{Platform}';
import { {ComponentName} } from 'igniteui-{Platform}';

@ViewChild('{ComponentName}') public {ComponentName}: {ComponentName};

constructor(private excelExportService: ExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.{ComponentName}, new ExcelExporterOptions('ExportedDataFile'));
}
```

上記をすべて行うと、{ComponentTitle} コンポーネントとその下にボタンを確認できます。ボタンを押すととエクスポート処理をトリガーし、ブラウザーで 「ExportedDataFile.xlsx」 ファイルをダウンロードします。このファイルは MS Excel 形式の `{ComponentName}` コンポーネントのデータを含みます。
<!-- end: Angular -->

<!-- Angular -->

## すべてのデータのエクスポート

**ページング**などのリモート操作を使用している場合に、Grid がすべてのデータにアクセスできない場合があります。このような場合、[Excel Export サービス](../exporter-excel.md)を使用してデータ コレクション全体を渡すことをお勧めします。例:

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new ExcelExporterOptions('ExportedDataFile'));
}
```

<!-- end: Angular -->

<!-- ComponentStart: Grid -->
## グループ化されたデータのエクスポート

グループ化されたデータをエクスポートするには、`{ComponentName}` を 1 つ以上の列でグループ化する必要があります。ブラウザーは、選択した列でグループ化された MSExcel 形式の `{ComponentName}` コンポーネントからのデータを含む「ExportedDataFile.xlsx」という名前のファイルをダウンロードします。トピックのはじめに例があります。

<!-- Angular -->
`sample="/{ComponentSample}/excel-exporting", height="750", alt="{Platform} {ComponentTitle} グループ化されたデータのエクスポートの例"`
<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## 複数列ヘッダー グリッドのエクスポート

定義された[複数列ヘッダー](multi-column-headers.md)を使用して `{ComponentName}` をエクスポートできるようになりました。すべてのヘッダーは、`{ComponentName}` に表示されるときに、エクスポートされた Excel ファイルに反映されます。エクスポートされたデータから定義された複数列ヘッダーを除外する場合は、`ExporterOption` `IgnoreMultiColumnHeaders` を **true** に設定できます。

> [!Note]
> Excel テーブルは複数の列ヘッダーをサポートしていないため、エクスポートされた `{ComponentName}` はテーブルとしてフォーマットされません。

`sample="/{ComponentSample}/multi-column-headers-export", height="750", alt="{Platform} {ComponentTitle} 複数列ヘッダーのエクスポートの例"`

## 固定された列ヘッダーを使用してグリッドをエクスポートする


デフォルトでは、Excel エクスポーター サービスは、スクロール可能な (固定されていない) 列ヘッダーを使用してグリッドをエクスポートします。エクスポートされた Excel ファイルの上にあるすべてのヘッダーを固定して、ユーザーがレコードをスクロールしても常に表示されたままにするシナリオがあります。これを実現するには、`ExporterOption` `FreezeHeaders` を **true** に設定します。

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

上記の例では、Excel Exporter サービスで利用可能なデータをすべてエクスポートしました。行または列全体のエクスポートをしない方が良い場合があります。実装は、各列で発生される `columnExporting` または各行で発生される `rowExporting` イベントを処理し、イベント引数オブジェクトの `cancel` プロパティを **true** に設定して各イベントをキャンセルします。

以下の例では、ヘッダーが「Age」で、インデックスが 1 の場合、エクスポートから列を除外します。

```ts
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.{ComponentTitle}, new ExcelExporterOptions('ExportedDataFile'));
```

`{ComponentName}` コンポーネントのデータ エクスポートでは、行フィルタリングおよび列の非表示などの機能に応じて `{ComponentName}` で表示されるデータのみをエクスポートします。`ExcelExporterOptions` オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。
<!-- end: Angular -->

## 既知の問題と制限

<!-- ComponentStart: Grid -->
|制限|説明|
|--- |--- |
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|セルのスタイル設定|Excel エクスポーター サービスは、セル コンポーネントに適用されたカスタム スタイルのエクスポートをサポートしていません。このようなシナリオでは、[Excel ライブラリ](../../excel-library.md)を使用することをお勧めします。|
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
|制限|説明|
|--- |--- |
|階層レベル|Excel エクスポーター サービスは、最大 8 レベルの階層を作成できます。|
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|セルのスタイル設定|Excel エクスポーター サービスは、セル コンポーネントに適用されたカスタム スタイルのエクスポートをサポートしていません。このようなシナリオでは、[Excel ライブラリ](../../excel-library.md)を使用することをお勧めします。|
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
|制限|説明|
|--- |--- |
|階層レベル|Excel エクスポーター サービスは、最大 8 レベルの階層を作成できます。|
|ワークシートの最大サイズ|Excel でサポートされているワークシートの最大サイズは、1,048,576 行 x 16,384 列です。|
|ピン固定列された列のエクスポート|エクスポートされた Excel ファイルでは、ピン固定列は固定されませんが、グリッドに表示されるのと同じ順序で表示されます。|
<!-- ComponentEnd: HierarchicalGrid -->

## API リファレンス

* `ExcelExporterService`
* `ExcelExporterOptions`
* `{ComponentName}`

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

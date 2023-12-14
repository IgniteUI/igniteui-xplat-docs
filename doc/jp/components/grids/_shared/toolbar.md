---
title: {Platform} {ComponentTitle} for {ProductName}
_description: 重要な UI 操作には {Platform} {ComponentTitle} を使用します。列の非表示、ピン固定、Excel エクスポートなど、グリッドの機能にさまざまな UI コントロールをホストします。
_keywords: {Platform}, {ComponentTitle}, {ComponentTitle}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} ツールバー

{ProductName} ツールバーは、{Platform} {ComponentTitle} の UI 操作用のコンテナーです。{Platform} ツールバーは {Platform} コンポーネントの一番上、つまり `{ComponentName}` にあり、水平方向のサイズと一致します。ツールバー コンテナーは、任意のカスタム コンテンツまたは事前定義された UI コントロールのセットをホストできます。{Platform} {ComponentTitle} のデフォルト セットには次のものが含まれます。 

 - 列の非表示
 - 列のピン固定
 - Excel エクスポート
 - 高度なフィルタリング

ツールバーと事前定義された UI コンポーネントは、{Platform} イベントをサポートし、開発者向けに API を公開します。

## {Platform} ツールバー グリッドの例


`sample="/{ComponentSample}/toolbar-sample-1", height="420", alt="{Platform} {ComponentTitle} ツールバーの例"`

事前定義された `Actions` および `Title` UI コンポーネントが `GridToolbar` 内に追加されます。これはすべて、対応するグリッド機能とのデフォルトのインタラクションを提供するツールバーを持つために必要です。

<!-- ComponentStart: Grid -->
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```

```html
<igc-grid id="grid" auto-generate="true">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-grid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
        <IgrGridToolbarTitle key="toolbarTitle">
            Grid Toolbar
        </IgrGridToolbarTitle>
        <IgrGridToolbarActions key="toolbarActions">
            <IgrGridToolbarAdvancedFiltering key="advancedFiltering"></IgrGridToolbarAdvancedFiltering>
            <IgrGridToolbarPinning key="pinning"></IgrGridToolbarPinning>
            <IgrGridToolbarHiding key="hiding"></IgrGridToolbarHiding>
            <IgrGridToolbarExporter key="export"></IgrGridToolbarExporter>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrGrid>
```

```razor
<IgbGrid>
    <IgbGridToolbar>
        <IgbGridToolbarActions>
            <IgbGridToolbarAdvancedFiltering>
            </IgbGridToolbarAdvancedFiltering>
            <IgbGridToolbarHiding>
            </IgbGridToolbarHiding>
            <IgbGridToolbarPinning>
            </IgbGridToolbarPinning>
            <IgbGridToolbarExporter>
            </IgbGridToolbarExporter>
        </IgbGridToolbarActions>
    </IgbGridToolbar>
</IgbGrid>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-tree-grid>
```
```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" auto-generate="true">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Tree Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
```html
<igc-hierarchical-grid id="hGrid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>Hierarchical Grid Toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering><igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> 上記のコード スニペットに示されているように、事前定義された `Actions` UI コンポーネントは `GridToolbarActions` にラップされています。このように、ツールバーのタイトルはツールバーの左側に配置され、アクションはツールバーの右側に配置されます。

これらの UI はそれぞれ独立して追加することも、まったく追加しないこともできます。このようにして、ツールバー コンテナは空になります。

<!-- ComponentStart: Grid -->
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-grid>
```
```html
<igc-grid auto-generate="true">
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-grid>
```

```razor
<IgbGrid>
    <IgbGridToolbar>
    </IgbGridToolbar>
</IgbGrid>
```

```tsx
<IgrGrid>
    <IgrGridToolbar key="toolbar">
    </IgrGridToolbar>
</IgrGrid>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-tree-grid>
```
```html
<igc-tree-grid primary-key="ID" foreign-key="ParentID" auto-generate="true">
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
```html
<igc-hierarchical-grid>
    <igc-grid-toolbar>
    </igc-grid-toolbar>
</igc-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->

デフォルトの各 UI コンポーネントの詳細については、以下の**機能**セクションを読み続けてください。

<!-- ComponentStart: HierarchicalGrid -->

## 子グリッド付きのツールバー

IgxHierarchicalGrid の子グリッドの実装方法と DI スコープの動作には特定の制限があるため、子グリッドのスコープでツールバーを使用する場合は注意が必要です。
`igx-row-island` タグ内でツールバー コンポーネントを定義するときは、必ず IgxGridToolbar を使用し、提供されたグリッド インスタンスを入力プロパティとしてツールバー自体に渡すようにしてください。
これにより、テンプレートのスコープ内に常に正しいグリッド インスタンスが含まれるようになります。

```html
<igx-hierarchical-grid>
    <!--...-->
    <igx-row-island>
        <!--
            You can name the binding from igxGridToolbar however you want. Just make sure to use
            it inside the template if you need to access the grid instance.
        -->
        <igx-grid-toolbar [grid]="gridRef" *igxGridToolbar="let gridRef">
            <igx-grid-toolbar-title>Child toolbar {{ gridRef.parentIsland.level }}</igx-grid-toolbar-title>
        </igx-grid-toolbar>
    </igx-row-island>
    <!--...-->
</igx-hierarchical-grid>
```
<!-- ComponentEnd: HierarchicalGrid -->


## 機能

ツールバーは、グリッド全体に影響を与えるロジック/インタラクションを分離するのに最適です。

上記のように、制御、列の非表示、列のピン固定、高度なフィルタリング、およびグリッドからのデータのエクスポートのためのデフォルトのコンポーネントを提供するように構成できます。

これらの機能は、{ProductName} のカード コンポーネントと同様のパターンに従うことで、互いに独立して有効にできます。

以下にリストされているのは、ツールバーの主な機能と、それぞれのサンプル コードです。

`sample="/{ComponentSample}/toolbar-sample-2", height="630", alt="{Platform} {ComponentTitle} ツールバー サンプル 2"`



### Title (タイトル)

グリッドのツールバーのタイトルを設定するには、`GridToolbarTitle` を使用します。

ユーザーは、単純なテキストからより複雑なテンプレートまで、どんなものでも提供できます。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-title>Grid toolbar title</igc-grid-toolbar-title>
</igc-grid-toolbar>
```

```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarTitle key="toolbarTitle">Grid toolbar title</IgrGridToolbarTitle>
</IgrGridToolbar>
```

```razor
<IgbGridToolbar>
    <IgbGridToolbarTitle>Grid toolbar title</IgbGridToolbarTitle>
</IgbGridToolbar>
```

### 操作


`GridToolbarActions` は、ユーザーが親グリッドに関連して操作 / インタラクションを配置できる特定のコンテナを公開します。
ツールバーのタイトル部分と同様に、ユーザーは、デフォルトのツールバー インタラクション コンポーネントを含め、そのテンプレート部分内にどんなものでも提供できます。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <button igxButton>Action</button>
        <igx-select></igx-select>
        <!--...-->
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <!--...-->
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
    <!-- ... -->
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">

    </IgrGridToolbarActions>
</IgrGridToolbar>

```
<!-- Angular -->

各アクションは、`OverlaySettings` 入力を使用して、アクション ダイアログのオーバーレイ設定を変更する方法を公開するようになりました。例:

```html
<igx-grid-toolbar-actions>
    <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
    <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding>
</igx-grid-toolbar-actions>
```

```html
<igc-grid-toolbar-actions>
    <igc-grid-toolbar-pinning id="pinTool"></ig-grid-toolbar-pinning>
    <igc-grid-toolbar-hiding id="hideTool"></igc-grid-toolbar-hiding>
</igc-grid-toolbar-actions>
```

```ts
constructor() {
    var pinTool = this.pinTool = document.getElementById('pinTool') as IgcGridToolbarPinningComponent;
    var hideTool = this.hideTool = document.getElementById('hideTool') as IgcGridToolbarHidingComponent;
    pinTool.overlaySettings = this.overlaySettingsScaleCenter;
    hideTool.overlaySettings = this.overlaySettingsAuto;
}
```

```ts
public data: any[];
public positionStrategyScaleCenter = new GlobalPositionStrategy({
    openAnimation: scaleInCenter,
    closeAnimation: scaleOutCenter
});
public overlaySettingsScaleCenter = {
    positionStrategy: this.positionStrategyScaleCenter,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: true,
    closeOnEscape: true
};

public positionStrategyAuto = new AutoPositionStrategy();
public overlaySettingsAuto = {
    positionStrategy: this.positionStrategyAuto,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: false,
    closeOnEscape: false
};
constructor() {
    this.data = athletesData;
}
```

デフォルトの overlaySettings は、*ConnectedPositionStrategy* と *Absolute* スクロール方法を使用しています。*modal* は false に設定されており、*close on escape* ([Esc] キーを押して閉じる) インタラクションと *close on outside click* (外側のクリックで閉じる) インタラクションが有効になっています。

<!-- end: Angular -->

### 列のピン固定

`GridToolbarPinning` は、グリッド内の列のピン固定を操作するためのデフォルトの UI を提供します。

コンポーネントは、ツールバーを含む親グリッドと、コンポーネントのタイトル、コンポーネント入力のプレースホルダー、ドロップダウン自体の高さなど、UI をカスタマイズするためのいくつかの入力プロパティを使用して、そのまま動作します。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-pinning>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarPinning Title="Grid pinned columns" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarPinning>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            column-list-height="400px">
        </igc-grid-toolbar-pinning>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarPinning key="pinning" title="Grid pinned columns" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarPinning>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

### 列の非表示

`GridToolbarHiding` は、列非表示を操作するためのデフォルトの UI を提供します。コンポーネントのタイトル、コンポーネント入力のプレースホルダー、ドロップダウン自体の高さなど、UI をカスタマイズするための同じ入力プロパティを公開します。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-hiding>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarHiding Title="Grid column hiding" Prompt="Filter column collection" ColumnListHeight="400px"></IgbGridToolbarHiding>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            column-list-height="400px">
        </igc-grid-toolbar-hiding>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarHiding key="hiding" title="Grid column hiding" prompt="Filter column collection" columnListHeight="400px"></IgrGridToolbarHiding>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

### 高度なフィルタリング

ツールバーの高度なフィルタリング コンポーネントは、高度なフィルタリング機能のデフォルトの UI を提供します。コンポーネントは、ボタンのデフォルトのテキストを変更する方法を公開します。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarAdvancedFiltering></IgbGridToolbarAdvancedFiltering>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-advanced-filtering>Custom text for the toggle button</igc-grid-toolbar-advanced-filtering>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarAdvancedFiltering key="advancedFiltering"></IgrGridToolbarAdvancedFiltering>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

### データのエクスポート

<!-- ComponentStart: HierarchicalGrid -->

> [!Note]
> `{ComponentName}` または階層下の子グリッドのいずれかをエクスポートすると、エクスポートされるデータは、それぞれのグリッドに属する行のフラット コレクションになります (子グリッドはエクスポートされたデータに含まれません)。

<!-- ComponentEnd: HierarchicalGrid -->

残りのツールバー操作と同様に、エクスポートは、すぐに使用できる `GridToolbarExporter` を介して提供されます。

<!-- Angular -->

エクスポート コンポーネントは、ターゲット データ形式 (`ExcelExporterService` および `CSVExporterService`) のそれぞれのサービスを使用しています。つまり、それぞれのサービスが依存関係挿入チェーンを通じて提供されない場合、コンポーネントは何もエクスポートできません。

{Platform} の DI の復習が必要な場合は、[公式ガイド](https://{Platform}.io/guide/dependency-injection)をご覧ください。これは、アプリケーションのすべてのエクスポート サービスを有効にする方法を示すサンプル スニペットです。

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-{Platform}';

@NgModule({
    //...
    providers: [IgxExcelExporterService, IgxCsvExporterService ]
})
export class AppModule { ... }
```

> [!Note]
> v12.2.1 以降では、エクスポーター サービスは root で提供されます。つまり、AppModule プロバイダーでそれらを宣言する必要はありません。

<!-- end: Angular -->

ツールバー エクスポーター コンポーネントは、UI とエクスポート エクスペリエンスの両方をカスタマイズするためのいくつかの入力プロパティを公開します。

これらは、表示テキストの変更から、ドロップダウンのオプションの有効化/無効化、生成されたファイルの名前のカスタマイズまで多岐にわたります。完全なリファレンスについては、`ToolbarExporter` の API ヘルプを参照してください。

これは、{Platform} テンプレートを介してカスタマイズできるいくつかのオプションを示すスニペットです。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <!-- exportCSV enables the csv export entry in the dropdown UI -->
        <!-- exportExcel enables the excel export entry in the dropdown UI -->
        <igx-grid-toolbar-exporter
            [exportCSV]="csvExportEnabled"
            [exportExcel]="excelExportEnabled"
            filename="exported_data">
            Custom text for the exporter button
            <span excelText>Custom text for the excel export entry</span>
            <span csvText>Custom text for the CSV export entry</span>
        </igx-grid-toolbar-exporter>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

```razor
<IgbGridToolbar>
    <IgbGridToolbarActions>
        <IgbGridToolbarExporter ExportCSV="true" ExportExcel="true" Filename="exported_data"></IgbGridToolbarExporter>
    </IgbGridToolbarActions>
</IgbGridToolbar>
```

```html
<igc-grid-toolbar>
    <igc-grid-toolbar-actions>
        <igc-grid-toolbar-exporter export-csv="true" export-excel="true" filename="exported_data">
        </igc-grid-toolbar-exporter>
    </igc-grid-toolbar-actions>
</igc-grid-toolbar>
```

```tsx
<IgrGridToolbar key="toolbar">
    <IgrGridToolbarActions key="toolbarActions">
        <IgrGridToolbarExporter key="export" exportCSV="true" exportExcel="true" filename="exported_data"></IgrGridToolbarExporter>
    </IgrGridToolbarActions>
</IgrGridToolbar>
```

エクスポートされたファイル名を変更することに加えて、ユーザーは `ToolbarExporting` イベントを待機し、イベント プロパティのオプション エントリをカスタマイズすることで、エクスポーター オプションをさらに構成できます。

> [!Note]
> デフォルトで CSV にエクスポートした際にエクスポーターがカンマ区切りセパレーターを使用してエクスポートし、出力ファイルに .csv 拡張しを使用します。
> エクスポーターのイベントにサブスクライブまたはエクスポーター オプション フィールドの値を変更して、エクスポート パラメーターをカスタマイズできます。
> またイベント引数のキャンセル フィールドを true に設定してエクスポートをキャンセルすることもできます。

次のコード スニペットは、ツールバーのエクスポート イベントのサブスクライブとエクスポーター オプションの構成を示しています。

<!-- Angular -->
```html
<{ComponentSelector} (toolbarExporting)="configureExport($event)" ></{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="toolbarExporter"></{ComponentSelector}>
```
```ts
constructor() {
    var toolbarExporter = this.toolbarExporter = document.getElementById('toolbarExporter') as IgcGridToolbarExporterComponent;
    toolbarExporter.addEventListener("toolbarExporting", this.configureExport);
}
```
<!-- end: WebComponents -->

```tsx
function configureExport(evt: IgrGridToolbarExportEventArgs) {
    const args = evt.detail;
    const options: IgrExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
    });
}

<{ComponentSelector} toolbarExporting={configureExport}>
</{ComponentSelector}>
```


<!-- Angular -->
```typescript
configureExport(args: IGridToolbarExportEventArgs) {
    const options: IgxExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;

    if (options instanceof IgxExcelExporterOptions) {
        options.columnWidth = 10;
    } else {
        options.fileType = CsvFileTypes.TSV;
        options.valueDelimiter = '\t';
    }

    args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === 'Athlete' ||
                            columnArgs.header === 'Country';
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === 'Name';
        }
    });
}
```
<!-- end: Angular -->

```typescript
public configureExport(evt: CustomEvent<IgcGridToolbarExportEventArgs>) {
    const args = evt.detail;
    const options: IgcExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;
    (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
            columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
    });
}
```

```razor
<IgbGridToolbarExporter ExportStartedScript="WebGridToolbarExporting"></IgbGridToolbarExporter>
```

```razor
// In Javascript
igRegisterScript("WebGridToolbarExporting", (evt) => {
        const args = evt.detail;
        const options = args.options;
        options.fileName = `Report_${new Date().toDateString()}`;
        args.exporter.columnExporting.subscribe((columnArgs) => {
                columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
        });
}, false);
```
以下のサンプルは、エクスポート ファイルをカスタマイズする方法を示します。


`sample="/{ComponentSample}/toolbar-sample-3", height="420", alt="{Platform} {ComponentTitle} ツールバー サンプル 3"`



<!-- Angular, WebComponents -->

## エクスポート インジケーター

デフォルトのツールバー エクスポーター コンポーネントを使用する場合、エクスポート操作が行われると、操作の進行中にツールバーに進行状況インジケーターが表示されます。

さらに、ユーザーはツールバーの `ShowProgress` プロパティを設定して、自分の長時間実行操作に使用するか、グリッドで実行されている操作を示す別の方法として使用できます。

以下のサンプルでは、プログレス バーが表示されるようにデータのエクスポートに必要な時間を増やすために、大量のデータを使用しています。さらに、グリッドで長時間実行される操作をシミュレートする別のボタンがあります。

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/data-exporting-indicator", height="370", alt="{Platform} {ComponentTitle} データ エクスポート インジケーター"`



## カスタム コンテンツ

> [!Note]
> これは、古いツールバー テンプレート ディレクティブを置き換えます。v11 より前のバージョンから移行する場合は、マイグレーションによってテンプレート コンテンツの移動が処理されます。ただし、テンプレート内のバインディングは処理しないため、マイグレーションの完了後に、変更されたテンプレート ファイルを再確認してください。

ツールバー コンポーネントのアクション部分が特定のユース ケースに十分でない場合、ツールバー自体には、ユーザーが追加の UI を提供できる一般的なコンテンツ プロジェクションがあります。ユーザーが API 呼び出しまたはバインディングにそれぞれのグリッド インスタンスを必要とする場合は、テンプレート参照変数を作成できます。

サンプル スニペットは次のとおりです。

<!-- Angular -->
```html
<{ComponentSelector} #gridRef>
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>{{ titleBinding }}</igx-grid-toolbar-title>
        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <button igxButton="flat" igxRipple (click)="#gridRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>

        <igx-grid-toolbar-actions>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid">
    <igc-grid-toolbar>
        <igc-grid-toolbar-title>title</igx-grid-toolbar-title>
        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <igc-grid-toolbar-actions>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

以下のサンプルは、列ヘッダーをクリックして並べ替えセットをクリアするためのボタンをツールバーに追加する方法です。

`sample="/{ComponentSample}/toolbar-sample-4", height="420", alt="{Platform} {ComponentTitle} ツールバー サンプル 4"`

<!-- end: Angular, WebComponents -->

<!-- WebComponents, Blazor, React -->

## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-toolbar-background-color: #2a2b2f;
    --ig-grid-toolbar-title-text-color: #ffcd0f;
    --ig-grid-toolbar-dropdown-background: #2a2b2f;
}
```

### デモ

`sample="/{ComponentSample}/toolbar-style", height="540", alt="{Platform} {ComponentTitle} ツールバーのスタイル設定の例"`

<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

## スタイル設定

ツールバーのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント mixins が存在する index ファイルをインポートする必要があります。

```scss
@use "igniteui-{Platform}/theming" as *;

// IMPORTANT: Prior to {ProductName} version 13 use:
// @import '~igniteui-{Platform}/lib/core/styles/themes/index';
```

まず、新しいパレットを作成します。

```scss
$my-dark-palette: palette(
    $primary: #2466ff,
    $secondary: #FFCD0F,
    $surface: #2a2b2f,
    $grays: #fff,
);

$my-dark-color: color($my-dark-palette, 'surface');
```

[grid-toolbar-theme]({environment:sassApiUrl}/index.html#function-grid-toolbar-theme) を拡張する新しいテーマを作成し、`$background-color` と `$title-text-color` パラメーターを変更します。

```scss
$dark-grid-toolbar-theme: grid-toolbar-theme(
    $palette: $my-dark-palette,
    $background-color: $my-dark-color,
    $title-text-color: color($my-dark-palette, 'secondary'),
    $dropdown-background: $my-dark-color,
);
```

ツールバーの列操作メニューにテーマを設定するには、`column-actions-theme` コンポーネントのテーマを変更する必要があります。

```scss
$dark-column-actions-theme: column-actions-theme(
    $palette: $my-dark-palette,
    $title-color: color($my-dark-palette, 'secondary'),
    $background-color: color($my-dark-palette, 'surface')
);
```

列操作は他のコンポーネント (igx-button、igx-checkbox、および igx-input-group) を使用しているため、新しいツールバー テーマに一致するようにテーマを変更する必要があります。

```scss
$dark-button-theme: button-theme(
    $palette: $my-dark-palette,
    $outlined-background: color($my-dark-palette, 'secondary'),
    $outlined-hover-background: color($my-dark-palette, 'grays', 100),
    $outlined-hover-text-color: color($my-dark-palette, 'secondary')
);

$dark-checkbox-theme: checkbox-theme(
    $palette: $my-dark-palette,
    $tick-color: $my-dark-color,
);

$dark-input-group-theme: input-group-theme(
    $palette: $my-dark-palette
);
```

最後にコンポーネントのテーマを**含めます**。

```scss
:host {
    @include grid-toolbar($dark-grid-toolbar-theme);
    @include column-actions($dark-column-actions-theme);
    @include checkbox($dark-checkbox-theme);
    @include input-group($dark-input-group-theme);
    @include button($dark-button-theme);
}
```

> [!Note]
>`$legacy-support` が `false(default)` に設定されている場合、css 変数 を以下のように含めます。

```scss
:host {
    @include css-vars($dark-grid-toolbar-theme);
    @include css-vars($dark-column-actions-theme);
    @include css-vars($dark-checkbox-theme);
    @include css-vars($dark-input-group-theme);
    @include css-vars($dark-button-theme);
}
```

> [!Note]
>コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

```scss
:host {
    ::ng-deep {
        @include grid-toolbar($dark-grid-toolbar-theme);
        @include column-actions($dark-column-actions-theme);
        @include checkbox($dark-checkbox-theme);
        @include input-group($dark-input-group-theme);
        @include button($dark-button-theme);
    }
}
```

### デモ

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/toolbar-style", height="510", alt="{Platform} {ComponentTitle} ツールバー スタイル"`



<div class="divider"></div>

<!-- end: Angular -->

## API リファレンス

以下は、Grid Toolbar サービスのその他の API です。

* `GridToolbarAdvancedFiltering`
* `GridToolbar`
* `GridToolbarExporter`
* `GridToolbarHiding`
* `GridToolbarPinning`
* `GridToolbarTitle`

* `{ComponentName}` イベント:
* `ToolbarExporting`

<!-- Angular -->

スタイル:

* `{ComponentName}` スタイル

<!-- end: Angular -->

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

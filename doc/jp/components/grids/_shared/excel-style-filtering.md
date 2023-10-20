---
title: {Platform} {ComponentTitle} Excel スタイル フィルタリング - {ProductName}
_description: {Platform} {ComponentTitle} で Excel フィルタリングを構成する方法を説明します。さまざまなオプションを有効/無効にし、Excel スタイル フィルター メニューを自由にカスタマイズできます。
_keywords: excel like filter, {Platform}, {ProductName}, Infragistics, excel のようなフィルター, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} の Excel スタイル フィルタリング

{Platform} {ComponentTitle} は、Excel のようなフィルタリング UI を提供する Excel スタイルのフィルタリング機能を公開します。これにより、大規模なデータセットを操作するプロセスが簡素化されます。主なアイデアは、無関係なエントリを排除しながら、最も関連性の高いデータをフィルタリングできるようにすることです。

## {Platform} {ComponentTitle} Excel スタイル フィルタリングの例

`sample="/{ComponentSample}/excel-style-filtering-sample-1", height="950", alt="{Platform} {ComponentTitle} Excel スタイルのフィルタリング サンプル 1"`


## 使用方法

`Grid` コンポーネントの Excel スタイル フィルタリングをオンにするには、2 つの入力を設定します。`AllowFiltering` を **true** に設定し、`FilterMode` を `ExcelStyleFilter` に設定してください。

<!-- Angular -->
```html
<{ComponentSelector} [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'" >
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<IgbGrid AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter" />
```

<!-- WebComponents -->
```html
<{ComponentSelector} auto-generate="true" allow-filtering="true" filter-mode="excelStyleFilter" >
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- React -->
```tsx
<IgrGrid data={nwindData} autoGenerate="false" ref={gridRef} allowFiltering="true" filterMode="excelStyleFilter">
</IgrGrid>
```
<!-- end: React -->

## インタラクション

特定の列のフィルター メニューを開くには、ヘッダーの {Platform} フィルター アイコンをクリックします。さらに、選択したヘッダーで <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> の組み合わせを使用できます。列でフィルタリング機能とソート、ピン固定、移動、選択、非表示が設定された場合、オンになっている機能のボタンが表示されます。

フィルターが適用されていない場合、リストのすべての項目が選択されます￥。リストの上の入力からフィルターされます。データのフィルターは、リストで項目を選択/非選択して [適用] ボタンをクリックするか、あるいは  <kbd>Enter</kbd>. を押します。リスト項目に適用したフィルタリングは、`equals` オペレーターでフィルター式を作成します。各式間のロジック オペレーターは `OR` です。

検索ボックスに入力してフィルターを適用すると、検索条件に一致する項目のみが選択されます。ただし、現在フィルターされている項目に項目を追加したい場合は、**[現在の選択をフィルターに追加]** オプションを選択する必要があります。

フィルターをクリアしたい場合、**[すべて選択]** オプションをチェックして [適用] ボタンを押します。

異なる式でフィルターを適用する場合、**テキスト フィルター**をクリックし、特定の列で使用できるフィルター演算子のサブメニューを開きます。いずれかを選択してカスタム フィルター ダイアログを開き、フィルターとロジック演算子を使用して式を追加できます。[クリア] ボタンでフィルターをクリアできます。


## メニュー機能の構成

ソート、ピン固定、および非表示機能は、対応する入力を使用してフィルター メニューから削除できます: `Sortable`、`Selected`、`DisablePinning`、`DisableHiding`。

<!-- ComponentStart: Grid -->

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [moving]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false"  [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

```razor
    <IgbGrid Data=northwindEmployees
             AllowFiltering="true"
             FilterMode="FilterMode.ExcelStyleFilter"
             AutoGenerate="false">
        <IgbColumn Field="ProductName" Sortable="true"></IgbColumn>
        <IgbColumn Field="UnitPrice" Sortable="true" DisablePinning="true" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="QuantityPerUnit" Sortable="false" DisablePinning="true" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="OrderDate" Sortable="true" DisablePinning="false" DisableHiding="true"></IgbColumn>
        <IgbColumn Field="Discontinued" Sortable="true"></IgbColumn>
    </IgbGrid>
```

```html
<igc-grid id="grid1" auto-generate="false" height="650px" width="100%" moving="true" allow-filtering="true" filter-mode="ExcelStyleFilter">
    <igc-column field="ProductName" header="Product Name" sortable="true" data-type="String">
    </igc-column>
    <igc-column field="QuantityPerUnit" header="Quantity Per Unit" sortable="false" disable-pinning="true" disable-hiding="true" data-type="String">
    </igc-column>
    <igc-column field="UnitPrice" header="Unit Price" disable-pinning="true" disable-hiding="true" sortable="true" data-type="Number">
    </igc-column>
    <igc-column field="OrderDate" header="Order Date" sortable="false"  data-type="Date">
    </igc-column>
    <igc-column field="Discontinued" header="Discontinued" sortable="true" data-type="Boolean">
    </igc-column>
</igc-grid>
```

```tsx
<IgrGrid data={nwindData} autoGenerate="false" ref={gridRef} allowFiltering="true" filterMode="excelStyleFilter">
    <IgrColumn field="ProductName" header="Product Name" sortable="true" dataType="String">
    </IgrColumn>
    <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" sortable="false" disable-pinning="true" disable-hiding="true" data-type="String">
    </IgrColumn>
    <IgrColumn field="UnitPrice" header="Unit Price" disable-pinning="true" disable-hiding="true" sortable="true" data-type="Number">
    </IgrColumn>
    <IgrColumn field="OrderDate" header="Order Date" sortable="false"  data-type="Date">
    </IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" sortable="true" data-type="Boolean">
    </IgrColumn>      
</IgrGrid>  
```

以下のサンプルの **Product Name** と **Discontinued** 列で 4 つすべての機能が有効です。**Quantity Per Unit** で 4 機能すべてが無効、**Unit Price** でソートのみが有効、**Order Date** でピン固定と非表示のみ有効です。すべてが `Selectable` です。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [moving]="true" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Product ID" [dataType]="'string'">
    </igx-column>
    <igx-column field="Name" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="false" [disablePinning]="true" [disableHiding]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
            <span *ngIf="cell.row.data.UnitPrice != 0">${{val}}</span>
        </ng-template>
    </igx-column>
    <igx-column field="AddedDate" header="Added Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
            <img *ngIf="cell.row.data.UnitPrice != 0 && val" src="assets/images/grid/active.png" title="Continued" alt="Continued" />
            <img *ngIf="cell.row.data.UnitPrice != 0 && !val" src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

```razor
Add tree grid snippet
```

```html
<igc-tree-grid id="treegrid1" auto-generate="false" height="480px" width="100%" moving="true" allow-filtering="true"
    primary-key="ID" foreign-key="ParentID" filter-mode="ExcelStyleFilter">
    <igc-column field="ID" header="Product ID" data-type="String">
    </igc-column>
    <igc-column field="Name" header="Product Name" sortable="true" data-type="'string'">
    </igc-column>
    <igc-column field="UnitPrice" header="Unit Price" data-type="Number" sortable="false" disable-pinning="true" disable-hiding="true">
    </igc-column>
    <igc-column field="AddedDate" header="Added Date" data-type="Date" sortable="false">
    </igc-column>
    <igc-column field="Discontinued" header="Discontinued" data-type="Boolean" sortable="true">
    </igc-column>
</igc-tree-grid>
```

以下のサンプルでは、「Product Name」 列と 「Discontinued」 列で 3 つの機能がすべて有効化され、「Unit Price」 で 3 つすべてが無効化され、「Added Date」 でピン固定と非表示のみが設定されています。

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [moving]="true" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```

```razor
Add blazor snippets here
```

```html
<igc-hierarchical-grid class="hgrid" auto-gGenerate="false" moving="true" allow-filtering='true' filter-mode="ExcelStyleFilter"
    height="650px" width="100%" rowHeight="65px" id="hierarchicalGrid">
    <igc-column field="Artist" filterable='true' sortable="true"></igc-column>
    <igc-column field="Photo" filterable='false'>
    </igc-column>
    <igc-column field="Debut" filterable='true' disable-pinning="true" disable-hiding="true"></igc-column>
    <igc-column field="Grammy Nominations" filterable='true' date-type="Number" sortable="false"></igc-column>
    <igc-column field="Grammy Awards" filterable='true' date-type="Number"></igc-column>

    <igc-row-island key="Albums" auto-gGenerate="false" allow-filtering='true' filter-mode="ExcelStyleFilter">
        <igc-column field="Album" filterable='true'></igc-column>
        <igc-column field="Launch Date" filterable='true' date-type="Date"></igc-column>
        <igc-column field="Billboard Review" filterable='true' date-type="Number"></igc-column>
        <igc-column field="US Billboard 200" filterable='true' date-type="Number"></igc-column>
    <igc-row-island key="Songs" auto-generate="false" >
            <igc-column field="No."></igc-column>
            <igc-column field="Title"></igc-column>
            <igc-column field="Released"></igc-column>
            <igc-column field="Genre"></igc-column>
    </igc-row-island>
    </igc-row-island>

    <igc-row-island key="Tours" auto-generate="false">
        <igc-column field="Tour"></igc-column>
        <igc-column field="Started on"></igc-column>
        <igc-column field="Location"></igc-column>
        <igc-column field="Headliner"></igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

下のサンプルでは、「Artist」 列では 3 つの機能がすべて有効化され、「Debut」 では 3 つすべてが無効化され、「Grammy Nominations」 ではピン固定と非表示のみが設定されています。

<!-- ComponentEnd: HierarchicalGrid -->

`sample="/{ComponentSample}/excel-style-filtering-sample-2", height="620", alt="{Platform} {ComponentTitle} excel style filtering sample 2"`


## テンプレート

<!-- Angular -->

列機能を無効にせずに Excel スタイル フィルター メニューをさらにカスタマイズする場合は、カスタム テンプレートを使用できます。Excel スタイル フィルター メニューには、テンプレート化のための 2 つのディレクティブがあります。
- `IgxExcelStyleColumnOperationsTemplateDirective` - ソート、移動、固定などのすべての列操作で領域を再テンプレート化します。
- `IgxExcelStyleFilterOperationsTemplateDirective` - すべてのフィルター固有の操作で領域を再テンプレート化します。

これらの領域の 1 つだけ、または両方を再テンプレート化できます。これらのディレクティブ内にカスタム コンテンツを配置したり、組み込みの Excel スタイル フィルタリング コンポーネントを使用できます。

次のコードは、`excel-style-header`、`excel-style-sorting`、および `excel-style-search` コンポーネントを使用してカスタム Excel スタイル フィルター メニューを定義する方法を示しています。

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->

Excel スタイル フィルター メニューをさらにカスタマイズする場合は、`ExcelStyleHeaderIconTemplate` プロパティを使用して、メニューのヘッダー アイコンのカスタム テンプレートを定義できます。

次のコードは、`ExcelStyleHeaderIconTemplate` を使用して Excel スタイル フィルター メニューをカスタマイズする方法を示しています。

```razor
<IgbGrid    
    Name="grid"
    @ref="grid"
    Data="Data"    
    AllowFiltering="true"
    FilterMode="FilterMode.ExcelStyleFilter"
    ExcelStyleHeaderIconTemplateScript="WebGridFilterAltIconTemplate"/>

*** In JavaScript ***
igRegisterScript("WebGridFilterAltIconTemplate", (ctx) => {
    var html = window.igTemplating.html;
        return html`<img height="15px" width="15px" src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" title="Continued" alt="Continued" />`
}, false);
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.excelStyleHeaderIconTemplate = this.webGridFilterAltIconTemplate;
}

public webGridFilterAltIconTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<img height="15px" width="15px" src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" title="Continued" alt="Continued" />`
}
```

```tsx
const webGridFilterAltIconTemplate = ({dataContext: IgrCellTemplateContext}) => {
  return (
    <img 
      height="15px" 
      width="15px" 
      src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" 
      title="Continued" 
      alt="Continued" 
    />
  );
}

function App() {
    return (
        <>
        <IgrGrid autoGenerate="true" allowFiltering="true" filterMode="excelStyleFilter" 
            excelStyleHeaderIconTemplate={webGridFilterAltIconTemplate}>
        </IgrGrid>
        <>
    )
}
```

<!-- end: WebComponents, Blazor, React -->

<!-- ComponentStart: Grid -->

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

</igx-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-grid id="grid1" auto-generate="false" height="650px" width="100%" allow-filtering="true" filter-mode="ExcelStyleFilter">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>

</igc-grid>
``` -->

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
</igx-tree-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-tree-grid id="treegrid1" auto-generate="false" height="650px" width="100%" allow-filtering="true"
    primary-key="ID" foreign-key="ParentID" filter-mode="ExcelStyleFilter">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>

</igc-tree-grid>
``` -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
            <igx-excel-style-column-operations>
                <igx-excel-style-header
                    [showPinning]="true"
                    [showHiding]="true"
                >
                </igx-excel-style-header>

                <igx-excel-style-sorting></igx-excel-style-sorting>
            </igx-excel-style-column-operations>

            <igx-excel-style-filter-operations>
                <igx-excel-style-search></igx-excel-style-search>
            </igx-excel-style-filter-operations>
        </igx-grid-excel-style-filtering>

</igx-hierarchical-grid>
```

<!-- ```razor
Add razor snipets
``` -->

<!-- ```html
<igc-hierarchical-grid class="hgrid" auto-generate="false" allow-fFiltering='true' filter-mode="ExcelStyleFilter"
    height="650px" width="100%" row-height="65px" id="hierarchicalGrid">

    <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
        <igc-excel-style-column-operations>
            <igc-excel-style-header
                show-pinning="true"
                show-hiding="true"
            >
            </igc-excel-style-header>

            <igc-excel-style-sorting></igc-excel-style-sorting>
        </igc-excel-style-column-operations>

        <igc-excel-style-filter-operations>
            <igc-excel-style-search></igc-excel-style-search>
        </igc-excel-style-filter-operations>
    </igc-grid-excel-style-filtering>
    <igc-row-island key="Albums" auto-generate="false" allow-fFiltering='true' filter-mode="ExcelStyleFilter">
        <igc-grid-excel-style-filtering min-height="380px" max-height="500px">
            <igc-excel-style-column-operations>
                <igc-excel-style-header
                    show-pinning="true"
                    show-hiding="true"
                >
                </igc-excel-style-header>

                <igc-excel-style-sorting></igc-excel-style-sorting>
            </igc-excel-style-column-operations>

            <igc-excel-style-filter-operations>
                <igc-excel-style-search></igc-excel-style-search>
            </igc-excel-style-filter-operations>
        </igc-grid-excel-style-filtering>

</igc-hierarchical-grid>
``` -->

<!-- ComponentEnd: HierarchicalGrid -->


<!-- Angular -->

`ExcelStyleHeaderIcon` ディレクティブを使用して、列ヘッダーの Excel スタイル フィルタリング アイコンを再テンプレート化することもできます。

```html
<{ComponentSelector}>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</{ComponentSelector}>
```

```ts
public filterIconHeaderTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igx-icon>filter_alt</igx-icon>`;
}
```

<!-- end: Angular -->

`sample="/{ComponentSample}/excel-style-filtering-sample-3", height="620", alt="{Platform} {ComponentTitle} excel style filtering sample 3"`


<!-- Angular -->

以下は、使用可能な Excel スタイルフィルタリング コンポーネントの完全なリストです。
- `Excel-style-header`
- `Excel-style-sorting`
- `Excel-style-moving`
- `Excel-style-pinning`
- `Excel-style-hiding`
- `Excel-style-selecting`
- `Excel-style-clear-filters`
- `Excel-style-conditional-filter`
- `Excel-style-search`

<!-- end: Angular -->

<!-- Angular -->

## 一意の列値戦略

Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。これらの値は手動で提供し、ロード オン デマンドすることができます。詳細については、[{ComponentTitle} リモート データ操作](remote-data-operations.md#一意の列値ストラテジ)で説明されています。

<!-- end: Angular -->

<!-- Angular -->

 ## 書式設定された値のフィルタリング ストラテジ

デフォルトでは、{ComponentTitle} コンポーネントは元のセル値に基づいてデータをフィルター処理しますが、場合によっては、書式設定された値に基づいてデータをフィルター処理することが必要になる場合があります。

<!-- ComponentStart: Grid, HierarchicalGrid -->

これを行うには、`FormattedValuesFilteringStrategy` を使用できます。

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

そのためには、`TreeGridFormattedValuesFilteringStrategy` を使用できます。

<!-- ComponentEnd: TreeGrid -->

以下のサンプルは、列の数値を文字列として書式設定し、文字列値に基づいて {ComponentTitle} をフィルターする方法を示します。



`sample="/{ComponentSample}/filtering-strategy", height="620", alt="{Platform} {ComponentTitle} filtering strategy"`


> [!Note]
>データの同じフィールドに複数の列がバインドされていて、1 つの列にフォーマッタがある場合、書式設定された値のフィルタリング ストラテジは正しく動作しません。

<!-- end: Angular -->

<!-- ComponentStart: TreeGrid -->

## ツリー フィルター ビュー

デフォルトでは、Excel スタイル フィルタリング ダイアログはリスト ビューで項目を表示します。それらをツリー ビューに表示するには、`TreeGridFilteringStrategy` を使用して、列フィールド名の配列を指定します。フィルター項目は、指定された列の場合はツリー ビューに、他のすべての列の場合はリスト ビューに表示されます。次のサンプルは、最初の列のツリー ビューにフィルター項目を表示する方法を示しています:

`sample="/{ComponentSample}/filter-view", height="650", alt="{Platform} {ComponentTitle} filter view"`


<!-- ComponentEnd: TreeGrid -->

<!-- Angular -->

## 外部の Excel スタイル フィルタリング

上記デモで示されるように、Excel スタイル フィルタリング ダイアログのデフォルトの外観は `{ComponentName}` 内にあります。このダイアログは、フィルターを構成するときにのみ表示されます。ダイアログはグリッドの外部でスタンドアロン コンポーネントとして使用すると、常に表示になります。以下のデモでは、Excel スタイル フィルタリングが `{ComponentName}` とは別に宣言されます。

### デモ

`sample="/{ComponentSample}/external-excel-style-filtering", height="620", alt="{Platform} {ComponentTitle} external excel style filtering"`


### 使用方法

Excel スタイル フィルタリング コンポーネントを設定するには、その `Column` プロパティを {ComponentTitle} の列の 1 つに設定する必要があります。上記のサンプルでは、{ComponentTitle} の列を表示する SelectComponent の値に `Column` プロパティをバインドしています。


<!-- ComponentStart: Grid -->

```html
<igx-select #gridColums value="ProductID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of grid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="grid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
add snippet for blazor
``` -->

```html
<igc-select id="gridColums" value="ProductID">
   <label>Columns:</label>
</igc-select>

<igc-grid-excel-style-filtering>
</igc-grid-excel-style-filtering>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-select #gridColums value="ID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of treegrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="treegrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
Add snippet for blazor
``` -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-select #gridColums value="Artist">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of hierarchicalgrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="hierarchicalgrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```

<!-- ```razor
Add snippet for blazor
``` -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular -->

<!-- Angular -->

## 表示要素が重なる場合のアウトレット設定

{ComponentTitle} の [z-index](https://developer.mozilla.org/ja/docs/Web/CSS/z-index) は、DOM のグリッドごとに個別のスタック コンテキストを作成します。これにより、グリッドのすべての子孫要素が互いに重ね合うことなく意図したとおりに描画されます。
ただし、グリッドの外側にある要素 (Excel スタイル フィルターなど) は、同じ `z-index` を持つ外側の要素 (たとえば、2 つのグリッドが上下に重ねる) と競合し、誤った描画が発生します。この問題の解決策は、`Outlet` プロパティを外部アウトレット ディレクティブに設定して、オーバーレイ要素が常に一番上に表示されるようにすることです。

### デモ

`sample="/{ComponentSample}/external-outlet", height="700", alt="{Platform} {ComponentTitle} external outlet"`

<!-- end: Angular -->


<!-- Angular -->

## スタイル設定

ページネータのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Excel スタイルのフィルタリング ダイアログは、`filtering-row-background` パラメーターを使用して、グリッドのテーマから背景色を取得します。背景を変更するには、カスタム テーマを作成する必要があります。

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);
```

ボタン、チェックボックス、リスト、さらにはドロップダウンなど、フィルタリング ダイアログのような Excel 内には明らかに多くのコンポーネントがあります。スタイルを設定するには、それぞれに個別のテーマを作成する必要があります。

```scss
$dark-button: button-theme(
    $background: #FFCD0F,
    $foreground: #292826,
    $hover-background: #292826,
    $hover-foreground: #FFCD0F
);

$dark-input-group: input-group-theme(
    $box-background: #FFCD0F,
    $idle-text-color: #292826,
    $focused-text-color: #292826,
    $filled-text-color: #292826
);

$custom-list: list-theme(
    $background: #FFCD0F
);

$custom-checkbox: checkbox-theme(
    $empty-color: #292826,
    $fill-color: #292826,
    $tick-color: #FFCD0F,
    $label-color: #292826
);

$custom-drop-down: drop-down-theme(
    $background-color: #FFCD0F,
    $item-text-color: #292826,
    $hover-item-background: #292826,
    $hover-item-text-color: #FFCD0F
);
```

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[button-theme]({environment:sassApiUrl}/index.html#function-button-theme)、[checkbox-theme]({environment:sassApiUrl}/index.html#function-checkbox-theme)、[drop-down-theme]({environment:sassApiUrl}/index.html#function-drop-down-theme)、[input-group-theme]({environment:sassApiUrl}/index.html#function-input-group-theme)、および [list-theme]({environment:sassApiUrl}/index.html#function-list-theme) テーマは、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後のステップは、それぞれのテーマを持つコンポーネント mixin を**含める**ことです。また、入力のプレース ホルダーの色プロパティを設定します。

```scss
@include drop-down($custom-drop-down);
@include grid($custom-grid);
.igx-excel-filter, .igx-excel-filter__secondary {
    @include button($dark-button);
    @include input-group($dark-input-group);
    @include list($custom-list);
    @include checkbox($custom-checkbox);
    .igx-input-group__input::placeholder {
        color: #FFCD0F;
    }
}
```

> [!Note]
>`.igx-excel-filter` と `.igx-excel-filter__secondary` 内のほとんどのコンポーネントのミックスインをスコープするため、これらのカスタムテーマは、Excel スタイル フィルタリング ダイアログとそのすべてのサブダイアログにネストされたコンポーネントのみに影響します。そうでない場合、他のボタン、チェックボックス、入力グループ、およびリストも影響を受けます。

> [!Note]
>コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include grid($custom-grid);
        .igx-excel-filter, .igx-excel-filter__secondary {
            @include button($dark-button);
            @include input-group($dark-input-group);
            @include list($custom-list);
            @include checkbox($custom-checkbox);
            .igx-input-group__input::placeholder {
                color: #FFCD0F;
            }
        }
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) および [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```
また [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-grid: grid-theme(
    $filtering-row-background: #FFCD0F
);

$dark-button: button-theme(
    $background: color($dark-palette, "secondary", 400),
    $foreground: color($dark-palette, "primary", 400),
    $hover-background: color($dark-palette, "primary", 400),
    $hover-foreground: color($dark-palette, "secondary", 400)
);

$dark-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 400),
    $idle-text-color: color($dark-palette, "primary", 400),
    $focused-text-color: color($dark-palette, "primary", 400),
    $filled-text-color: color($dark-palette, "primary", 400)
);

$custom-list: list-theme(
    $background: color($dark-palette, "secondary", 400)
);

$custom-checkbox: checkbox-theme(
    $empty-color: color($dark-palette, "primary", 400),
    $fill-color: color($dark-palette, "primary", 400),
    $tick-color: color($dark-palette, "secondary", 400),
    $label-color: color($dark-palette, "primary", 400)
);

$custom-drop-down:drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),
    $item-text-color: color($dark-palette, "primary", 400),
    $hover-item-background: color($dark-palette, "primary", 400),
    $hover-item-text-color: color($dark-palette, "secondary", 400)
);
```

> [!Note]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネント (この場合は[light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid)、[light-input-group]({environment:sassApiUrl}/index.html#variable-_light-input-group)、[light-button]({environment:sassApiUrl}/index.html#variable-_light-button)、[light-list]({environment:sassApiUrl}/index.html#variable-_light-list)、[light-checkbox]({environment:sassApiUrl}/index.html#variable-_light-checkbox)、[light-drop-down]({environment:sassApiUrl}/index.html#variable-_light-drop-down)) に提供される 2 つの定義済みスキーマのいずれかを拡張します。

```scss
$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
           color: ("secondary", 400)
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        flat-background:(
           color: ("secondary", 400)
        ),
        flat-text-color:(
           color: ("primary", 400)
        ),
        flat-hover-background:(
           color: ("primary", 400)
        ),
        flat-hover-text-color:(
           color: ("secondary", 400)
        ),

        raised-background:(
           color: ("secondary", 400)
        ),
        raised-text-color:(
           color: ("primary", 400)
        ),
        raised-hover-background:(
           color: ("primary", 400)
        ),
        raised-hover-text-color:(
           color: ("secondary", 400)
        )
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 400)
        ),
        idle-text-color:(
           color: ("primary", 400)
        ),
        focused-text-color:(
           color: ("primary", 400)
        ),
        filled-text-color:(
           color: ("primary", 400)
        )
    )
);

$custom-list-schema: extend($_light-list,
    (
        background:(
           color: ("secondary", 400)
        )
    )
);

$custom-checkbox-schema: extend($_light-checkbox,
    (
        empty-color:(
           color: ("primary", 400)
        ),
        fill-color:(
           color: ("primary", 400)
        ),
        tick-color:(
           color: ("secondary", 400)
        ),
        label-color:(
           color: ("primary", 400)
        )
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),
        item-text-color:(
           color: ("primary", 400)
        ),
        hover-item-background:(
           color: ("primary", 400)
        ),
        hover-item-text-color:(
           color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
$custom-light-schema: extend($light-schema,(
   grid: $custom-grid-schema,
   button: $custom-button-schema,
   input-group: $custom-input-group-schema,
   list: $custom-list-schema,
   checkbox: $custom-checkbox-schema,
   drop-down: $custom-drop-down-schema
));

$custom-grid: grid-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-list: list-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-checkbox: checkbox-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

`sample="/{ComponentSample}/excel-style-filtering-style", height="950", alt="{Platform} {ComponentTitle} Excel スタイルのフィルタリング スタイル"`


> [!Note]
>サンプルは、**テーマの変更**で選択したグローバル テーマの影響を受けません。

<!-- end: Angular -->

<!-- WebComponents, Blazor, React -->
## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

```html
<igc-grid class="grid"></igc-grid>
```

```tsx
<IgrGrid className="grid"></IgrGrid>
```

```razor
<IgbGrid class="grid"></IgbGrid>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-list-item-background: #ffcd0f;
}
```
### デモ

`sample="/{ComponentSample}/excel-style-filtering-style", height="950", alt="{Platform} {ComponentTitle} Excel スタイルのフィルタリング スタイル"`

<!-- end: WebComponents, Blazor, React -->

## API リファレンス

* `Column`
* `Grid`

## その他のリソース

<!-- ComponentStart:  Grid -->
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentEnd:  Grid -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

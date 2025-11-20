---
title: {Platform} {ComponentTitle} 集計 - {ProductName}
_description: 列のグループ フッターで {Platform} {ComponentTitle} 集計を構成し、オプションを使用して {ProductName} Material テーブルにカスタム {Platform} テンプレートを設定します。
_keywords: {Platform} {ComponentTitle} summaries, {Platform}, {ProductName}, Infragistics, {Platform} {ComponentTitle} 集計, インフラジスティックス
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridSummaries}
_language: ja
---

# {Platform} {ComponentTitle} 集計

{Platform} {ComponentTitle} の {ProductName} 集計機能は、グループ フッターとして列ごとのレベルで機能します。{Platform} {ComponentName} 集計は、列内のデータ タイプに応じて、あるいは `{ComponentName}` にカスタム テンプレートを実装することによって、定義済みのデフォルト集計項目を使用して別のコンテナの列情報を表示できます。

## {Platform} {ComponentTitle} 集計概要の例

`sample="/{ComponentSample}/data-summary-options", height="650", alt="{Platform} {ComponentTitle} データ集計のオプション"`


> [!Note]
> 列の集計は列**値すべての関数**ですが、フィルタリングが適用された場合、列の集計**はフィルターされた結果値の関数になります**。

`{ComponentName}` 集計を列ごとに有効にして必要な列のみアクティブ化できます。`{ComponentName}` 集計は、列のデータ型に基づいてデフォルト集計の定義済みセットを提供します。


`string` および `boolean` `DataType`の場合、以下の関数が利用できます:
 - Count

`number`、`currency`、および `percent` データ型の場合、以下の関数を使用できます。

 - Count
 - Min
 - Max
 - Average
 - Sum

`date` データ型の場合、以下の関数が利用できます:
 - Count
 - Earliest
 - Latest

すべての利用可能な列データ型は、公式の[列タイプトピック](column-types.md#デフォルトのテンプレート)にあります。

`HasSummary` プロパティを **true** に設定すると `{ComponentName}` 集計が列レベルで有効になります。各列の集計は列のデータ型に基づいて解決されます。`{ComponentName}` のデフォルトの列データ型は `string` のため、`number` または `date` 固有の集計を適用するには、`DataType` プロパティを `number` または `date` に設定します。集計値は、グリッドの `Locale` および列 `PipeArgs` に従ってローカライズされて表示されます。

<!-- ComponentStart: Grid -->
<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector}>
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" HasSummary="true"></IgbColumn>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" header="Product ID" width="200px"  sortable="true">
    </igc-column>
    <igc-column field="ProductName" header="Product Name" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="true">
    </igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} autoGenerate={false} height="800px" width="800px">
    <IgrColumn field="ProductID" header="Product ID" width="200px"  sortable={true}>
    </IgrColumn>
    <IgrColumn field="ProductName" header="Product Name" width="200px" sortable={true} hasSummary={true}>
    </IgrColumn>
    <IgrColumn field="ReorderLevel" width="200px" editable={true} dataType="number" hasSummary={true}>
    </IgrColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular -->
```html
<{ComponentSelector} #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} AutoGenerate="false" Data="SingersData" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID">
        <IgbColumn Field="Artist" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Photo" DataType="GridColumnDataType.Image"></IgbColumn>
        <IgbColumn Field="Debut" HasSummary="true"></IgbColumn>
        <IgbColumn Field="GrammyNominations" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="GrammyAwards" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbRowIsland ChildDataKey="Albums" AutoGenerate="false">
            <IgbColumn Field="Album" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="LaunchDate" DataType="GridColumnDataType.Date"></IgbColumn>
            <IgbColumn Field="BillboardReview" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
            <IgbColumn Field="USBillboard200" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        </IgbRowIsland>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID">
    <igc-column field="Artist" header="Artist" has-summary="true"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"> </igc-column>
    <igc-column field="Debut" header="Debut" has-summary="true"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" has-summary="true"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" has-summary="true"> </igc-column>
    <igc-row-island child-data-key="Albums" auto-generate="false">
        <igc-column field="Album" header="Album" data-type="string"> </igc-column>
        <igc-column field="LaunchDate" header="Launch Date" data-type="date"> </igc-column>
        <igc-column field="BillboardReview" header="Billboard Review" data-type="number" has-summary="true"> </igc-column>
        <igc-column field="USBillboard200" header="US Billboard 200" data-type="number" has-summary="true"> </igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```
<!-- end: WebComponents -->

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={singersData} ref={hierarchicalGridRef} primaryKey="ID">
    <IgrColumn field="Artist" header="Artist" hasSummary={true}></IgrColumn>
    <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
    <IgrColumn field="Debut" header="Debut" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" hasSummary={true}></IgrColumn>
    <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
        <IgrColumn field="Album" header="Album" dataType="string"></IgrColumn>
        <IgrColumn field="LaunchDate" header="Launch Date" dataType="date"></IgrColumn>
        <IgrColumn field="BillboardReview" header="Billboard Review" dataType="number" hasSummary={true}></IgrColumn>
        <IgrColumn field="USBillboard200" header="US Billboard 200" dataType="number" hasSummary={true} ></IgrColumn>
     </IgrRowIsland>
</IgrHierarchicalGrid>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ID" header="Order ID" width="200px">
    </igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [hasSummary]="true">
    </igx-column>
    <igx-column field="Units" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector}>
        <IgbColumn Field="ID" Header="Order ID"></IgbColumn>
        <IgbColumn Field="Name" Header="Order Product" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Units" Header="Units" HasSummary="true"></IgbColumn>
</{ComponentSelector}>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ID" header="Order ID">
    </igc-column>
    <igc-column field="Name" header="Order Product" has-summary="true">
    </igc-column>
    <igc-column field="Units" header="Units" editable="true" data-type="number" has-summary="true">
    </igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```tsx
<{ComponentSelector} autoGenerate={false} height="800px" width="800px">
    <IgrColumn field="ID" header="Order ID">
    </IgrColumn>
    <IgrColumn field="Name" header="Order Product" hasSummary={true}>
    </IgrColumn>
    <IgrColumn field="Units" header="Units" editable={true} dataType="number" hasSummary={true}>
    </IgrColumn>
</{ComponentSelector}>
```
<!-- ComponentEnd: TreeGrid -->

特定の列や列のリストを有効または無効にする他の方法として `{ComponentName}` のパブリック メソッド `EnableSummaries`/`DisableSummaries` を使用する方法があります。

<!-- ComponentStart: Grid -->
<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</{ComponentSelector}>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" header="Product ID" width="200px" sortable="true">
    </igc-column>
    <igc-column field="ProductName" header="Product Name" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="false">
    </igc-column>
</{ComponentSelector}>
<button id="enableBtn">Enable Summary</button>
<button id="disableBtn">Disable Summary </button>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var enableBtn = this.enableBtn = document.getElementById('enableBtn') as HTMLButtonElement;
    var disableBtn = this.disableBtn = document.getElementById('disableBtn') as HTMLButtonElement;
    grid.data = this.data;
    enableBtn.addEventListener("click", this.enableSummary);
    disableBtn.addEventListener("click", this.disableSummary);
}
```
<!-- end: WebComponents -->

<!-- Angular, WebComponents -->
```typescript
public enableSummary() {
    this.grid.enableSummaries([
        {fieldName: 'ReorderLevel'},
        {fieldName: 'ProductID'}
    ]);
}
public disableSummary() {
    this.grid.disableSummaries(['ProductID']);
}
```
<!-- end: Angular, WebComponents -->

<!-- TODO: EnableSummariesAsync not working so please add it to the code snippet when it got fixed. -->

```razor
 <{ComponentSelector} @ref=grid Id="grid" AutoGenerate="false">
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" Sortable="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" Sortable="false" DisablePinning="true" DisableHiding="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" Sortable="true" DisablePinning="false" DisableHiding="true"></IgbColumn>
</{ComponentSelector}>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "EmployeeID" };
        await this.grid.DisableSummariesAsync(disabledSummaries);
    }
}
```

```tsx
const enableSummary = () => {
    gridRef.current.enableSummaries([
        {fieldName: 'ReorderLevel'},
        {fieldName: 'ProductID'}
    ]);
}
const disableSummary = () => {
    gridRef.current.disableSummaries(['ProductID']);
}

<{ComponentSelector} ref={gridRef} autoGenerate={false} height="800px" width="800px">
    <IgrColumn field="ProductID" header="Product ID" width="200px" sortable={true}>
    </IgrColumn>
    <IgrColumn field="ProductName" header="Product Name" width="200px" sortable={true} hasSummary={true}>
    </IgrColumn>
    <IgrColumn field="ReorderLevel" width="200px" editable={true} dataType="number" hasSummary={true}>
    </IgrColumn>
</{ComponentSelector}>
<button onClick={enableSummary}>Enable Summary</button>
<button onClick={disableSummary}>Disable Summary </button>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
<!-- Angular -->
```html
<{ComponentSelector} #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px">
    <igx-column field="Artist" header="Artist" [hasSummary]="true"> </igx-column>
    <igx-column field="Photo" header="Photo"> </igx-column>
    <igx-column field="Debut" header="Debut" [hasSummary]="true"> </igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [dataType]="'number'" [hasSummary]="true"> </igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [dataType]="'number'" [hasSummary]="true"> </igx-column>
</{ComponentSelector}>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID">
    <igc-column field="Artist" header="Artist" has-summary="true"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"> </igc-column>
    <igc-column field="Debut" header="Debut" has-summary="true"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" has-summary="true"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" has-summary="true"> </igc-column>
</igc-hierarchical-grid>
<button id="enableBtn">Enable Summary</button>
<button id="disableBtn">Disable Summary </button>
```
```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as {ComponentName};
    var enableBtn = this.enableBtn = document.getElementById('enableBtn') as HTMLButtonElement;
    var disableBtn = this.disableBtn = document.getElementById('disableBtn') as HTMLButtonElement;
    hierarchicalGrid.data = this.data;
    enableBtn.addEventListener("click", this.enableSummary);
    disableBtn.addEventListener("click", this.disableSummary);
}
```
<!-- end: WebComponents -->

<!-- Angular, WebComponents -->
```typescript
public enableSummary() {
    this.hierarchicalGrid.enableSummaries([
        {fieldName: 'GrammyNominations'},
        {fieldName: 'GrammyAwards'}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries(['GrammyNominations']);
}
```
<!-- end: Angular, WebComponents -->

```razor
<{ComponentSelector} AutoGenerate="false" Data="SingersData" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID">
    <IgbColumn Field="Artist" HasSummary="true"></IgbColumn>
    <IgbColumn Field="Photo" DataType="GridColumnDataType.Image"></IgbColumn>
    <IgbColumn Field="Debut" HasSummary="true"></IgbColumn>
    <IgbColumn Field="GrammyNominations" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
    <IgbColumn Field="GrammyAwards" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
</{ComponentSelector}>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "GrammyNominations" };
        await this.hierarchicalGrid.DisableSummariesAsync(disabledSummaries);
    }
}
```

```tsx
const enableSummary = () => {
    hierarchicalGridRef.current.enableSummaries([
        {fieldName: 'GrammyNominations'},
        {fieldName: 'GrammyAwards'}
    ]);
}
const disableSummary = () => {
    hierarchicalGridRef.current.disableSummaries(['GrammyNominations']);
}

<IgrHierarchicalGrid autoGenerate={false} data={singersData} ref={hierarchicalGridRef} primaryKey="ID">
    <IgrColumn field="Artist" header="Artist" hasSummary={true}></IgrColumn>
    <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
    <IgrColumn field="Debut" header="Debut" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" hasSummary={true}></IgrColumn>
</IgrHierarchicalGrid>
<button onClick={enableSummary}>Enable Summary</button>
<button onClick={disableSummary}>Disable Summary </button>
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<{ComponentSelector} #treeGrid [data]="data" [autoGenerate]="false" height="800px" width="800px">
    <igx-column field="ID" header="Order ID" width="200px">
    </igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [hasSummary]="true">
    </igx-column>
    <igx-column field="Units" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-tree-grid auto-generate="false" name="treeGrid" id="treeGrid" primary-key="ID">
    <igx-column field="ID" header="Order ID" width="200px">
    </igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [hasSummary]="true">
    </igx-column>
    <igx-column field="Units" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igc-tree-grid>
<button id="enableBtn">Enable Summary</button>
<button id="disableBtn">Disable Summary </button>
```
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as {ComponentName};
    var enableBtn = this.enableBtn = document.getElementById('enableBtn') as HTMLButtonElement;
    var disableBtn = this.disableBtn = document.getElementById('disableBtn') as HTMLButtonElement;
    treeGrid.data = this.data;
    enableBtn.addEventListener("click", this.enableSummary);
    disableBtn.addEventListener("click", this.disableSummary);
}
```
<!-- end: WebComponents -->

<!-- Angular, WebComponents -->
```typescript
public enableSummary() {
    this.treeGrid.enableSummaries([
        {fieldName: 'Name'},
        {fieldName: 'Units'}
    ]);
}
public disableSummary() {
    this.treeGrid.disableSummaries(['Units']);
}
```
<!-- end: Angular, WebComponents -->

```razor
<{ComponentSelector} AutoGenerate="false" Data="OrdersTreeData" Name="treeGrid" @ref="treeGridRef" Id="treeGrid" PrimaryKey="ID">
    <IgbColumn Field="ID" Header="Order ID"></IgbColumn>
    <IgbColumn Field="Name" Header="Order Product" HasSummary="true"></IgbColumn>
    <IgbColumn Field="Units" Header="Units" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
</{ComponentSelector}>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "Units" };
        await this.treeGrid.DisableSummariesAsync(disabledSummaries);
    }
}
```

```tsx
const enableSummary = () => {
    treeGridRef.current.enableSummaries([
        {fieldName: 'Name'},
        {fieldName: 'Units'}
    ]);
}
const disableSummary = () => {
    treeGridRef.current.disableSummaries(['Units']);
}

<IgrTreeGrid autoGenerate={false} data={ordersTreeData} ref={treeGridRef} primaryKey="ID">
    <IgrColumn field="ID" header="Order ID"></IgrColumn>
    <IgrColumn field="Name" header="Order Product" hasSummary={true}></IgrColumn>
    <IgrColumn field="Units" header="Units" editable={true} dataType="number" hasSummary={true}></IgrColumn>
</IgrTreeGrid>
<button onClick={enableSummary}>Enable Summary</button>
<button onClick={disableSummary}>Disable Summary </button>
```
<!-- ComponentEnd: TreeGrid -->

<!-- Angular, WebComponents, Blazor -->
## カスタム {ComponentTitle} 集計

これらの機能が要件を満たさない場合は、カスタム集計を提供できます。


<!-- WebComponents -->
これを実現するには、列のデータ型とニーズに応じて、基本クラス `SummaryOperand`、`NumberSummaryOperand`、または `DateSummaryOperand` のいずれかをオーバーライドする必要があります。このように既存の関数を再定義、または新しい関数を追加できます。`SummaryOperand` クラスは、`Count` メソッドに対してのみデフォルトの実装を提供します。`NumberSummaryOperand` は `SummaryOperand` を拡張し、`Min`、`Max`、`Sum`、および `Average` の実装を提供します。`DateSummaryOperand` は `SummaryOperand` を拡張し、さらに特定の列の `Earliest` と `Latest` を提供します。

<!-- end: WebComponents -->

<!-- Angular -->
```typescript
import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular';

class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```
<!-- end: Angular -->


```typescript
import { IgcSummaryResult, IgcSummaryOperand, IgcNumberSummaryOperand, IgcDateSummaryOperand } from 'igniteui-webcomponents-grids';

class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgcSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```
<!-- ComponentStart: Grid, HierarchicalGrid -->
```razor

//In JavaScript
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        const result = [];
        result.push({
            key: 'products',
            label: 'Products',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: data.length ? data.reduce((a, b) => +a + +b) : 0
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Products',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
        });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```
<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
```razor

//In JavaScript
class PtoSummary {
    operate(data, allData, fieldName) {
        const result = [];
        result.push({
            key: 'totalOnPTO',
            label: 'Employees On PTO',
            summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'devs',
            label: 'Developers',
            summaryResult: this.count(allData.filter((rec) => rec[fieldName].includes('Developer') && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'tl',
            label: 'Team Leads',
            summaryResult: this.count(allData.filter((rec) => rec[fieldName].includes('Team Lead') && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'managers',
            label: 'Managers/Directors',
            summaryResult: this.count(allData.filter((rec) => (rec[fieldName].includes('Manager') || rec[fieldName].includes('Director')) && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'ceo',
            label: 'CEO/President',
            summaryResult: this.count(allData.filter((rec) => (rec[fieldName].includes('CEO') || rec[fieldName].includes('President')) && rec['OnPTO']).map(r => r[fieldName]))
        });
        return result;
    }
}
```
<!-- ComponentEnd: TreeGrid -->

例で見られるように、基本クラスは `Operate` メソッドを公開しているため、すべてのデフォルトの集計を取得して結果を変更するか、まったく新しい集計結果を計算するかを選択できます。

このメソッドは `SummaryResult` のリストを返します。

```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

```typescript
interface IgcSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

そして、集計を計算するためのオプションのパラメーターを受け取ります。
以下の[すべてのデータにアクセスするカスタム集計](#すべてのデータにアクセスするカスタム集計)セクションを参照してください。

> [!Note]
> 集計行の高さを適切に計算するには、データが空の場合でも、{ComponentTitle} が常に適切な長さの `SummaryResult` の配列を返す `Operate` メソッドを必要とします。

<!-- ComponentStart: Grid -->
次に、カスタム集計を `UnitsInStock` 列に追加しましょう。これを実現するには、以下で作成するクラスに `Summaries` プロパティを設定します。
<!-- Angular -->
```html
<{ComponentSelector} #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" width="200px" sortable="true">
    </igc-column>
    <igc-column field="ProductName" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column id="unitsInStock" field="UnitsInStock" width="200px" data-type="number" has-summary="true" sortable="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="true">
    </igc-column>
</{ComponentSelector}>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    var unitsInStock = this.unitsInStock = document.getElementById('unitsInStock') as IgcColumnComponent;
    grid1.data = this.data;
    unitsInStock.summaries = this.mySummary;
}
```
<!-- end: WebComponents -->

```typescript
export class GridComponent implements OnInit {
    mySummary = MySummary;
}
```

```razor
<{ComponentSelector} 
        AutoGenerate="true"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        PrimaryKey="ProductID"
        ColumnInitScript="WebGridCustomSummary">
</{ComponentSelector}>

// In Javascript
igRegisterScript("WebGridCustomSummary", (event) => {
    if (event.detail.field === "UnitsInStock") {
        event.detail.summaries = WebGridDiscontinuedSummary;
    }
}, false);
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
次に、カスタム集計を `GrammyAwards` 列に追加しましょう。これを実現するには、以下で作成するクラスに `Summaries` プロパティを設定します。
<!-- Angular -->
```html
<{ComponentSelector} #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px">
    <igx-column field="Artist" header="Artist" [hasSummary]="true"> </igx-column>
    <igx-column field="Photo" header="Photo"> </igx-column>
    <igx-column field="Debut" header="Debut" [hasSummary]="true"> </igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [dataType]="'number'" [hasSummary]="true"> </igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [dataType]="'number'" [hasSummary]="true"> </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID">
    <igc-column field="Artist" header="Artist" has-summary="true"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"> </igc-column>
    <igc-column field="Debut" header="Debut" has-summary="true"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" has-summary="true"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" has-summary="true" id="grammyAwards"> </igc-column>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as {ComponentName};
    var grammyAwards = this.grammyAwards = document.getElementById('grammyAwards') as IgcColumnComponent;
    hierarchicalGrid.data = this.data;
    grammyAwards.summaries = this.mySummary;
}
```
<!-- end: WebComponents -->

```typescript
export class HierarchicalGridComponent implements OnInit {
    mySummary = MySummary;
}
```

```razor
<{ComponentSelector} 
        AutoGenerate="true"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Data="SingersData"
        PrimaryKey="ID"
        ColumnInitScript="WebHierarchicalGridCustomSummary">
</{ComponentSelector}>

// In Javascript
igRegisterScript("WebHierarchicalGridCustomSummary", (event) => {
    if (event.detail.field === "GrammyAwards") {
        event.detail.summaries = WebHierarchicalGridSummary;
    }
}, false);
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
次に、カスタム集計を `Title` 列に追加しましょう。これを実現するには、以下で作成するクラスに `Summaries` プロパティを設定します。
<!-- Angular -->
```html
<{ComponentSelector} #treeGrid [data]="data" [autoGenerate]="false" height="800px" width="800px">
    <igx-column field="Name"></igx-column>
    <igx-column field="Age" [hasSummary]="true">
    </igx-column>
    <igx-column field="Title" [dataType]="'string'" [hasSummary]="true">
    </igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-tree-grid auto-generate="false" name="treeGrid" id="treeGrid" primary-key="ID">
    <igc-column field="Name" data-type="string"></igc-column>
    <igc-column field="Age" data-type="number"></igc-column>
    <igc-column field="Title" data-type="string" has-summary="true" id="column1"></igc-column>
</igc-tree-grid>
```
```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as {ComponentName};
    var column1 = this.column1 = document.getElementById('column1') as IgcColumnComponent;
    treeGrid.data = this.data;
    column1.summaries = this.mySummary;
}
```
<!-- end: WebComponents -->

```typescript
export class TreeGridComponent implements OnInit {
    mySummary = MySummary;
}
```

```razor
<{ComponentSelector} 
        AutoGenerate="true"
        Name="treeGrid"
        @ref="treeGrid"
        Data="EmployeesFlatData"
        PrimaryKey="ID"
        ColumnInitScript="WebTreeGridCustomSummary">
</{ComponentSelector}>

// In Javascript
igRegisterScript("WebTreeGridCustomSummary", (event) => {
    if (event.detail.field === "Title") {
        event.detail.summaries = PtoSummary;
    }
}, false);
```
<!-- ComponentEnd: TreeGrid -->

### すべてのデータにアクセスするカスタム集計
カスタム列集計内のすべての {ComponentTitle} データにアクセスできます。SummaryOperand `Operate` メソッドには、2 つの追加のオプション パラメーターが導入されています。
以下のコード スニペットで示されるように operate メソッドには以下の 3 つのパラメーターがあります。
- columnData - 現在の列の値のみを含む配列を提供します。
- allGridData - グリッド データソース全体を提供します。
- fieldName - 現在の列フィールド

<!-- ComponentStart: Grid, HierarchicalGrid -->
```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```

```typescript
class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgcSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```

```razor
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```
<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'totalOnPTO', label: 'Employees On PTO', summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName])) });
        return result;
    }
}
```

```typescript
class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgcSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'totalOnPTO', label: 'Employees On PTO', summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName])) });
        return result;
    }
}
```

```razor
class PtoSummary {
    operate(data, allData, fieldName) {
        const result = [];
        result.push({
            key: 'totalOnPTO',
            label: 'Employees On PTO',
            summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName]))
        });
        return result;
    }
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, TreeGrid -->
<!-- WebComponents -->

`sample="/{ComponentSample}/data-summaries-custom", height="650", alt="{Platform} {ComponentTitle} データ集計カスタム"`

<!-- end: WebComponents -->
<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: Grid -->
<!-- Blazor -->

`sample="/{ComponentSample}/data-summary-options", height="650", alt="{Platform} {ComponentTitle} データ集計オプション"`

<!-- end: Blazor -->
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Blazor -->

`sample="/{ComponentSample}/data-summaries-custom", height="650", alt="{Platform} {ComponentTitle} データ集計カスタム"`

<!-- end: Blazor -->
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
`sample="/{ComponentSample}/data-summary-options", height="650", alt="{Platform} {ComponentTitle} データ集計オプション"`
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular, WebComponents, Blazor -->


### 集計テンプレート

`SummaryTemplate` は、列の集計の結果をコンテキストとして提供する列の集計を対象としています。

```html
<igx-column [hasSummary]="true">
    <ng-template igxSummary let-summaryResults>
        <span> My custom summary template</span>
        <span>{{ summaryResults[0].label }} - {{ summaryResults[0].summaryResult }}</span>
    </ng-template>
</igx-column>
```

```html
<igc-column id="column" has-summary="true">
</igc-column>
```
```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.summaryTemplate = this.summaryTemplate;
}

public summaryTemplate = (ctx: IgcSummaryTemplateContext) => {
    return html`
        <span> My custom summary template</span>
        <span>${ ctx.implicit[0].label } - ${ ctx.implicit[0].summaryResult }</span>
    `;
}
```

```tsx
const summaryTemplate = (ctx: IgrSummaryTemplateContext) => {
  return (
    <>
      <span>My custom summary template</span>
      <span>{ctx.implicit[0].label} - {ctx.implicit[0].summaryResult}</span>
    </>
  );
}

<IgrColumn hasSummary={true} summaryTemplate={summaryTemplate}></IgrColumn>
```

```razor
<IgbColumn HasSummary="true" SummaryTemplateScript="SummaryTemplate">
</IgbColumn>

igRegisterScript("SummaryTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
    <span> ${ctx.implicit[0].label} - ${ctx.implicit[0].summaryResult} </span>
</div>`
}, false);
```

デフォルトの集計が定義されている場合、集計領域の高さは、集計の数が最も多い列とグリッドの `--ig-size` に応じてデザインにより計算されます。`SummaryRowHeight` 入力プロパティを使用して、デフォルト値をオーバーライドします。引数として数値が必要であり、falsy の値を設定すると、グリッド フッターのデフォルトのサイズ設定動作がトリガーされます。

<!-- Angular -->

> [!Note]
> 列の集計テンプレートは、列 `SummaryTemplate` プロパティを必要な TemplateRef に設定することにより、API を介して定義できます。

<!-- end: Angular -->

`sample="/{ComponentSample}/data-summary-template", height="650", alt="{Platform} {ComponentTitle} データ集計のテンプレート"`

## 無効な集計

<!-- WebComponents -->
`disabled-summaries` プロパティは、{Platform} {ComponentTitle} の集計機能に対して列ごとに正確な制御を提供します。このプロパティを使用すると、{ComponentName} 内の各列に表示される集計をカスタマイズして、最も関連性の高い意味のあるデータのみが表示されるようにすることができます。たとえば、配列で集計キーを指定することにより、**['count', 'min', 'max']** などの特定の集計タイプを除外できます。
<!-- end: WebComponents -->

<!-- React -->
`DisabledSummaries` プロパティは、{Platform} {ComponentTitle} の集計機能に対して列ごとに正確な制御を提供します。このプロパティを使用すると、{ComponentName} 内の各列に表示される集計をカスタマイズして、最も関連性の高い意味のあるデータのみが表示されるようにすることができます。たとえば、配列で集計キーを指定することにより、**['count', 'min', 'max']** などの特定の集計タイプを除外できます。
<!-- end: React -->

<!-- Blazor -->
`DisabledSummaries` プロパティは、{Platform} {ComponentTitle} の要約機能に対して列ごとに正確な制御を提供します。このプロパティを使用すると、{ComponentName} 内の各列に表示される集計をカスタマイズして、最も関連性の高い意味のあるデータのみが表示されるようにすることができます。たとえば、配列で集計キーを指定することにより、**['count', 'min', 'max']** などの特定の集計タイプを除外できます。
<!-- end: Blazor -->

<!-- WebComponents, React, Blazor -->
このプロパティは、コードを通じて**実行時に動的に**変更することもできるため、変化するアプリケーションの状態やユーザー操作に合わせて {ComponentName} の集計を柔軟に調整できます。
<!-- end: WebComponents, React, Blazor -->

<!-- WebComponents -->
次の例は、`disabled-summaries` プロパティを使用してさまざまな列の集計を管理し、{Platform} {ComponentTitle} で特定のデフォルトおよびカスタムの集計タイプを除外する方法を示しています。
<!-- end: WebComponents -->

<!-- React -->
次の例は、`disabledSummaries` プロパティを使用してさまざまな列の集計を管理し、{Platform} {ComponentTitle} で特定のデフォルトおよびカスタムの集計タイプを除外する方法を示しています。
<!-- end: React -->

<!-- Blazor -->
次の例は、`DisabledSummaries` プロパティを使用してさまざまな列の集計を管理し、{Platform} {ComponentTitle} で特定のデフォルトおよびカスタムの集計タイプを除外する方法を示しています。
<!-- end: Blazor -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->
<!-- WebComponents -->
```html
<!-- Disable default summaries -->
<igc-column
    field="UnitPrice"
    header="Unit Price"
    data-type="number"
    has-summary="true"
    disabled-summaries="['count', 'sum', 'average']"
>
</igc-column>

<!-- Disable custom summaries -->
<igc-column
    field="UnitsInStock"
    header="Units In Stock"
    data-type="number"
    has-summary="true"
    summaries="discontinuedSummary"
    disabled-summaries="['discontinued', 'totalDiscontinued']"
>
</igc-column>
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
<!-- Disable default summaries -->
<IgrColumn
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    hasSummary={true}
    disabledSummaries={['count', 'sum', 'average']}
/>

<!-- Disable custom summaries -->
<IgrColumn
    field="UnitsInStock"
    header="Units In Stock"
    dataType="number"
    hasSummary={true}
    summaries={discontinuedSummary}
    disabledSummaries={['discontinued', 'totalDiscontinued']}
/>
```
<!-- end: React -->

<!-- Blazor -->
```razor
<!-- Disable default summaries -->
<IgbColumn 
    Field="UnitPrice" 
    Header="Unit Price" 
    DataType="GridColumnDataType.Number"
    HasSummary="true" 
    DisabledSummaries="['count', 'sum', 'average']" />

<!-- Disable custom summaries -->
<IgbColumn 
    Field="UnitsInStock" 
    Header="Units In Stock" 
    DataType="GridColumnDataType.Number"
    HasSummary="true" 
    Summaries="discontinuedSummary" 
    DisabledSummaries="['discontinued', 'totalDiscontinued']" />
```
<!-- end: Blazor -->
<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

`UnitPrice` の場合、`count`、`sum`、`average` などのデフォルトの集計は無効になっており、`min` や `max` などの他の集計は有効のままになっています。

<!-- WebComponents -->
`UnitsInStock` の場合、`discontinued` や `totalDiscontinued` などのカスタム集計は `disabled-summaries` プロパティを使用して除外されます。

実行時に、`DisabledSummaries` プロパティを使用して集計を動的に無効にすることもできます。たとえば、特定の列のプロパティをプログラムで設定または更新して、ユーザー操作やアプリケーションの状態の変化に基づいて表示される集計を調整できます。
<!-- end: WebComponents -->

<!-- React -->
`UnitsInStock` の場合、`discontinued` や `totalDiscontinued` などのカスタム集計は `DisabledSummaries` プロパティを使用して除外されます。

実行時に、`DisabledSummaries` プロパティを使用して集計を動的に無効にすることもできます。たとえば、特定の列のプロパティをプログラムで設定または更新して、ユーザー操作やアプリケーションの状態の変化に基づいて表示される集計を調整できます。
<!-- end: React -->

<!-- Blazor -->
`UnitsInStock` の場合、`discontinued` や `totalDiscontinued` などのカスタム集計は `DisabledSummaries` プロパティを使用して除外されます。

実行時に、`DisabledSummaries` プロパティを使用して集計を動的に無効にすることもできます。たとえば、特定の列のプロパティをプログラムで設定または更新して、ユーザー操作やアプリケーションの状態の変化に基づいて表示される集計を調整できます。
<!-- end: Blazor -->

`sample="/{ComponentSample}/disabled-summaries", height="750", alt="{Platform} {ComponentTitle} 無効な集計"`

<!-- Angular, WebComponents, React -->
## 集計のフォーマット
デフォルトでは、組み込みの集計オペランドによって生成される集計結果は、グリッド `Locale` および列 `PipeArgs` に従ってローカライズおよびフォーマットされます。カスタム オペランドを使用する場合、`Locale` と `PipeArgs` は適用されません。集計結果のデフォルトの外観を変更する場合は、`SummaryFormatter` プロパティを使用してフォーマットできます。

```typescript
public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
    const result = summary.summaryResult;
    if (summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
        && result !== null && result !== undefined) {
        const pipe = new DatePipe('en-US');
        return pipe.transform(result,'MMM YYYY');
    }
    return result;
}
```

```typescript
    public dateSummaryFormat(summary: IgcSummaryResult, summaryOperand: IgcSummaryOperand): string {
        const result = summary.summaryResult;
        if (summaryOperand instanceof IgcDateSummaryOperand && summary.key !== "count" && result !== null && result !== undefined) {
            const format = new Intl.DateTimeFormat("en", { year: "numeric" });
            return format.format(new Date(result));
        }
        return result;
    }
```

```html
<igx-column [summaryFormatter]="dateSummaryFormat"></igx-column>
```

```html
<igc-column id="column"></igx-column>
```
```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.summaryFormatter = this.dateSummaryFormat;
}
```

```razor
<IgbColumn HasSummary="true" SummaryFormatterScript="SummaryFormatter"/>

igRegisterScript("SummaryFormatter", (summary) => {
    const result = summary.summaryResult;
    if (summaryOperand instanceof IgcDateSummaryOperand && summary.key !== "count" && result !== null && result !== undefined) {
        const format = new Intl.DateTimeFormat("en", { year: "numeric" });
        return format.format(new Date(result));
    }
    return result;
}, true);
```

```tsx
const summaryFormatter = (summary: IgrSummaryResult, summaryOperand: IgrSummaryOperand): string => {
    const result = summary.summaryResult;
    if (summary.key !== "count" && result !== null && result !== undefined) {
      const format = new Intl.DateTimeFormat("en", { year: "numeric" });
      return format.format(new Date(result));
    }
    return result;
  }
  
<IgrColumn hasSummary={true} summaryFormatter={summaryFormatter}></IgrColumn>
```

`sample="/{ComponentSample}/data-summary-formatter", height="650", alt="{Platform} {ComponentTitle} データ集計のフォーマッタ"`

<!-- end: Angular, WebComponents, React -->

<!-- ComponentStart: Grid -->

## グループ化の集計

列のグループがある場合、`{ComponentName}` は `SummaryCalculationMode` と `SummaryPosition` を使用して集計配置の変更やモードの計算をします。これら 2 つのプロパティに加えて、`{ComponentName}` は、参照するグループ行が縮小されたときに集計行が表示されたままであるかどうかを決定できる `ShowSummaryOnCollapse` プロパティを公開します。

以下は使用できる `SummaryCalculationMode` プロパティの値です:

 - `RootLevelOnly` - ルート レベルのみ集計が計算されます。
 - `ChildLevelsOnly` - 子レベルのみ集計が計算されます。
 - `RootAndChildLevels` - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は使用できる `SummaryPosition` プロパティの値です。

 - `Top` - 集計行はグループ列の子の前に表示されます。
 - `Bottom` - 集計行はグループ列の子の後に表示されます。これがデフォルト値です。

`ShowSummaryOnCollapse` プロパティはブール値です。デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、グループ行が縮小されたときに、集計行は表示されたままになります。


> [!Note]
> `SummaryPosition` プロパティは子レベルの集計のみに適用します。ルート レベルの集計は、`{ComponentName}` の下に常に固定されます。

### デモ

`sample="/{ComponentSample}/groupby-summary-options", height="650", alt="{Platform} {ComponentTitle} グループ化の集計のオプション"`


<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

## 子集計

`{ComponentName}` はルート ノードの集計と各ネストされた子ノード レベルの区別をサポートします。集計は `SummaryCalculationMode` プロパティを使用して設定できます。子レベル集計は、`SummaryPosition` を使用して子ノードの前または後に表示できます。これら 2 つのプロパティに加えて、`{ComponentName}` は、参照するグループ行が縮小されたときに集計行が表示されたままであるかどうかを決定できる `ShowSummaryOnCollapse` プロパティを公開します。


以下は使用できる `SummaryCalculationMode` プロパティの値です:

 - `RootLevelOnly` - ルート レベルのノードのみ集計が計算されます。
 - `ChildLevelsOnly` - 子レベルのみ集計が計算されます。
 - `RootAndChildLevels` - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は使用できる `SummaryPosition` プロパティの値です。

 - `Top` - 集計行は子行のリストの前に表示されます。
 - `Bottom` - 集計行は子行のリストの後に表示されます。これがデフォルト値です。

`ShowSummaryOnCollapse` プロパティはブール値です。デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、親行が縮小されたときに、集計行は表示されたままになります。

> [!Note]
> `SummaryPosition` プロパティは子レベルの集計のみに適用します。ルート レベルの集計は、`{ComponentName}` の下に常に固定されます。

`sample="/{ComponentSample}/data-summary-children", height="720", alt="{Platform} {ComponentTitle} データの子集計"`


<!-- ComponentEnd: TreeGrid -->


## キーボード ナビゲーション

集計行は、以下のキーボード操作でナビゲーションできます。

- <kbd>上矢印</kbd> - 1 つ上のセルへ移動。
- <kbd>下矢印</kbd> - 1 つ下のセルへ移動。
- <kbd>左矢印</kbd> - 1 つ左のセルへ移動。
- <kbd>右矢印</kbd> - 1 つ右のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>左矢印</kbd> または <kbd>HOME</kbd> - 左端のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>右矢印</kbd> または <kbd>END</kbd> - 右端のセルへ移動。


<!-- WebComponents, Blazor, React -->

## スタイル設定

定義済みのテーマに加えて、利用可能な [CSS プロパティ](../theming-grid.md)のいくつかを設定することで、グリッドをさらにカスタマイズできます。
一部の色を変更したい場合は、最初にグリッドのクラスを設定する必要があります。

<!-- ComponentStart: Grid, TreeGrid -->
```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid">
</{ComponentSelector}>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.grid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### デモ

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: Grid -->
`sample="/{ComponentSample}/groupby-summary-styling", height="710", alt="{Platform} {ComponentTitle} グループ化集計のスタイル設定"`
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
`sample="/{ComponentSample}/data-summary-options-styling", height="710", alt="{Platform} {ComponentTitle} 集計のスタイル設定"`
<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->
```html
<{ComponentSelector} class="hierarchicalGrid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="hierarchicalGrid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="hierarchicalGrid">
</{ComponentSelector}>
```

次に、そのクラスに関連する CSS プロパティを設定します。

```css
.hierarchicalGrid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### デモ

`sample="/{ComponentSample}/data-summary-options-styling", height="710", alt="{Platform} {ComponentTitle} グループ化集計のスタイル設定"`
<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->
## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[grid-summary-theme]({environment:sassApiUrl}/index.html#function-grid-summary-theme) を拡張する新しいテーマを作成し、`$background-color`、`$focus-background-color`、`$label-color`、`$result-color`、`$pinned-border-width`、`$pinned-border-style`、および `$pinned-border-color` パラメーターを受け取る方法です。

```scss
$custom-theme: grid-summary-theme(
    $background-color: #e0f3ff,
    $focus-background-color: rgba( #94d1f7, .3 ),
    $label-color: #e41c77,
    $result-color: black,
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: #e41c77
);
```
最後にそれぞれのテーマを持つコンポーネント mixins を**含めます**。

```scss
@include grid-summary($custom-theme);
```

> [!Note]
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

 ```scss
:host {
    ::ng-deep {
        @include grid-summary($custom-theme);
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、[igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) および [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$blue-color: #7793b1;
$green-color: #00ff2d;

$my-custom-palette: palette($primary: $blue-color, $secondary: $green-color);
```

また [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-theme: grid-summary-theme(
    $background-color: color($my-custom-palette, "primary", 700),
    $focus-background-color: color($my-custom-palette, "primary", 800),
    $label-color: color($my-custom-palette, "secondary", 500),
    $result-color: color($my-custom-palette, "grays", 900),
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: color($my-custom-palette, "secondary", 500)
);
```

> [!Note]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[パレット](../themes/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [_light-grid-summary]({environment:sassApiUrl}/index.html#variable-_light-grid-summary)) の 1 つを拡張します。

```scss
// Extending the light grid summary schema
$my-summary-schema: extend($_light-grid-summary,
    (
        background-color: (igx-color: ('primary', 700)),
        focus-background-color: (igx-color: ('primary', 800)),
        label-color: (igx-color: ('secondary', 500)),
        result-color: (igx-color: ('grays', 900)),
        pinned-border-width: 2px,
        pinned-border-style: dotted,
        pinned-border-color: (igx-color: ('secondary', 500))
    )
);
```

カスタム スキーマを適用するには、グローバル [light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-dark-schema) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema,
    (
        igx-grid-summary: $my-summary-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: grid-summary-theme(
    $palette: $my-custom-palette,
    $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

`sample="/{ComponentSample}/groupby-summary-styling", height="710", alt="{Platform} {ComponentTitle} グループ化集計のスタイル設定"`


<!-- end: Angular -->

## API リファレンス

* `SummaryOperand`
* `NumberSummaryOperand`
* `DateSummaryOperand`
* `ColumnGroup`
* `Column`

## その他のリソース

<!-- Angular -->


* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<!-- ComponentStart: Grid -->

* [選択に基づいた集計](selection-based-aggregates.md)

<!-- ComponentEnd: Grid -->

<!-- end: Angular -->

<!-- Blazor -->

<!-- ComponentStart: Grid -->
* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
<!-- ComponentEnd: Grid -->

<!-- end: Blazor -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

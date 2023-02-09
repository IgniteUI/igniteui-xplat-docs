---
title: {Platform} {ComponentTitle} 集計 - {ProductName}
_description: 列のグループ フッターで {Platform} {ComponentTitle} 集計を構成し、オプションを使用して {ProductName} Material テーブルにカスタム {Platform} テンプレートを設定します。
_keywords: {Platform} {ComponentTitle} summaries, {Platform}, {ProductName}, Infragistics, {Platform} {ComponentTitle} 集計, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_language: ja
---

# {Platform} {ComponentTitle} 集計

{Platform} `{ComponentName}` には、グループ フッターとして列レベルで**集計**できる機能があります。{Platform} グリッド集計は、列内のデータ タイプに応じて、あるいは `{ComponentName}` にカスタム テンプレートを実装することによって、定義済みのデフォルト集計項目を使用して別のコンテナの列情報を表示できます。

## {Platform} {ComponentTitle} 集計概要の例

<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-summary-options"
           github-src="{ComponentSample}/data-summary-options" >
</code-view>

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


<!-- ComponentStart: Grid, TreeGrid -->

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
<IgbGrid>
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" HasSummary="true"></IgbColumn>
</IgbGrid>
```

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" header="Product ID" width="200px"  sortable="true">
    </igc-column>
    <igc-column field="ProductName" header="Product Name" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="Number" has-summary="true">
    </igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

<!-- ComponentEnd: Grid, TreeGrid -->


<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```

```razor
Add blazor snippet for hgrid
```

```html
<igc-hierarchical-grid class="hgrid" auto-generate="false">
    <igc-column field="Artist" has-sSummary='true'></igc-column>
    <igc-column field="Photo">
    </igc-column>
    <igc-column field="Debut" has-summary='true'></igc-column>
    <igc-column field="Grammy Nominations" has-summary='true' data-type="Number"></igc-column>
    <igc-column field="Grammy Awards" has-summary='true' data-type="Number"></igc-column>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->


特定の列や列のリストを有効または無効にする他の方法として `{ComponentName}` のパブリック メソッド `EnableSummaries`/`DisableSummaries` を使用する方法があります。

<!-- ComponentStart: Grid, TreeGrid -->

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
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="Number" has-summary="false">
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

    this._bind = () => {
        grid.data = this.data;
        enableBtn.addEventListener("click", this.enableSummary);
        disableBtn.addEventListener("click", this.disableSummary);
    }
    this._bind();
}
```
<!-- end: WebComponents -->

```typescript
public enableSummary() {
    this.grid.enableSummaries([
        {fieldName: 'ReorderLevel', customSummary: this.mySummary},
        {fieldName: 'ProductID'}
    ]);
}
public disableSummary() {
    this.grid.disableSummaries('ProductName');
}
```

<!-- TODO: EnableSummariesAsync not working so please add it to the code snippet when it got fixed. -->

```razor
 <IgbGrid @ref=grid Id="grid" AutoGenerate="false">
        <IgbColumn Field="EmployeeID" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="FirstName" Sortable="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="LastName" Sortable="false" DisablePinning="true" DisableHiding="true" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Title" Sortable="true" DisablePinning="false" DisableHiding="true"></IgbColumn>
</IgbGrid>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "EmployeeID" };
        await this.grid.DisableSummariesAsync(disabledSummaries);
    }
}
```

<!-- ComponentEnd: Grid, TreeGrid -->


<!-- ComponentStart: HierarchicalGrid -->

```html
<{ComponentSelector} #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
  <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
        <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</{ComponentSelector}>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.hierarchicalGrid.enableSummaries([
        {fieldName: 'Grammy Nominations', customSummary: this.mySummary},
        {fieldName: 'Artist'}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries('Photo');
}
```

```razor
Add blazor snippet for hgrid
```
<!-- ComponentEnd: HierarchicalGrid -->


## カスタム {ComponentTitle} 集計

<!-- TODO: Remove comments tag of this paragraph and add custom summary when working -->

<!-- If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. In order to achieve this you have to override one of the base classes `SummaryOperand`, `NumberSummaryOperand` or `DateSummaryOperand` according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. `SummaryOperand` class provides the default implementation only for the `Count` method. `NumberSummaryOperand` extends `SummaryOperand` and provides implementation for the `Min`, `Max`, `Sum` and `Average`. `DateSummaryOperand` extends `SummaryOperand` and additionally gives you `Earliest` and `Latest`. -->

<!-- ComponentStart: Grid, TreeGrid -->
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

<!-- ```razor
Add blazor snippet
``` -->

<!-- ComponentEnd: Grid, TreeGrid -->


<!-- ComponentStart: HierarchicalGrid -->

```typescript
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';

class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'More than 5',
            summaryResult: data.filter((rec) => rec > 5).length
        });

        return result;
    }
}
```

```typescript
import { IgcRowIslandComponent, IgcHierarchicalGridComponent, IgcNumberSummaryOperand, IgcSummaryResult } from 'igniteui-webcomponents-grids';

class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgcSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'More than 5',
            summaryResult: data.filter((rec) => rec > 5).length
        });

        return result;
    }
}
```

<!-- ```razor
Add blazor snippet for hgrid
``` -->
<!-- ComponentEnd: HierarchicalGrid -->

<!-- As seen in the examples, the base classes expose the `Operate` method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.

The method returns a list of `SummaryResult`. -->

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

<!-- ```razor
Add SummaryResult snippet here
```

and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

> [!Note]
> In order to calculate the summary row height properly, the {ComponentTitle} needs the `Operate` method to always return an array of `SummaryResult` with the proper length even when the data is empty. -->

<!-- ComponentStart: Grid, TreeGrid -->
<!-- And now let's add our custom summary to the column `UnitsInStock`. We will achieve that by setting the Summaries` property to the class we create below. -->
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
    <igc-column id="unitsInStock" field="UnitsInStock" width="200px" dataType="'number'" has-summary="true" sortable="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="Number" has-summary="true">
    </igc-column>
</{ComponentSelector}>
```
```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    var unitsInStock = this.unitsInStock = document.getElementById('unitsInStock') as IgcColumnComponent;

    this._bind = () => {
        grid1.data = this.data;
        unitsInStock.summaries = this.mySummary;
    }
    this._bind();
}
```
<!-- end: WebComponents -->

```typescript
export class GridComponent implements OnInit {
    mySummary = MySummary;
}
```

<!-- ```razor
Add blazor snippet
``` -->

<!-- ComponentEnd: Grid, TreeGrid -->


<!-- ComponentStart: HierarchicalGrid -->

<!-- And now let's add our custom summary to the column `GramyNominations`. We will achieve that by setting the `Summaries` property to the class we create below. -->

```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```

<!-- WebComponents -->
```html
<igc-hierarchical-grid id="hgrid" class="hgrid" auto-generate="false">
    <igc-column field="Artist" has-summary='true'></igc-column>
    <igc-column field="Photo">
    </igc-column>
    <igc-column field="Debut" has-summary='true'></igc-column>
    <igc-column id="grammyNom" field="Grammy Nominations" has-summary='true' data-type="Number"></igc-column>
    <igc-column field="Grammy Awards" has-summary='true' data-type="Number"></igc-column>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var hgrid = this.hgrid = document.getElementById('hgrid') as IgcHierarchicalGridComponent;
    var grammyNom = this.grammyNom = document.getElementById('grammyNom') as IgcColumnComponent;

    this._bind = () => {
        grid1.data = this.data;
        grammyNom.summaries = this.mySummary;
    }
    this._bind();
}
```
<!-- end: WebComponents -->

```typescript
export class HGridSummarySampleComponent implements OnInit {
    mySummary = MySummary;
}
```

<!-- ```razor
Add blazor snippet for hgrid
``` -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ### Custom summaries, which access all data
 Now you can access all {ComponentTitle} data inside the custom column summary. Two additional optional parameters are introduced in the SummaryOperand `Operate` method.
As you can see in the code snippet below the operate method has the following three parameters:
- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field -->

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

<!-- ```razor
Add blazor snippet for my summary
```-->

<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-summary-options"
           github-src="{ComponentSample}/data-summary-options" >
</code-view>

### 集計テンプレート
`Summary` は、列の集計の結果をコンテキストとして提供する列の集計を対象としています。

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

    this._bind = () => {
        column.summaryTemplate = this.summaryTemplate;
    }
    this._bind();
}

public summaryTemplate = (ctx: IgcSummaryTemplateContext) => {
    return html`
        <span> My custom summary template</span>
        <span>${ ctx.label } - ${ ctx.summaryResult }</span>
    `;
}
```

```razor
<IgbColumn HasSummary="true" SummaryTemplateScript="SummaryTemplate">
</IgbColumn>

igRegisterScript("SummaryTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
    <span> ${ctx.$implicit[0].label} - ${ctx.$implicit[0].summaryResult} </span>
</div>`
}, false);
```

デフォルトの集計が定義されている場合、集計領域の高さは、集計の数が最も多い列とグリッドの表示密度に応じてデザインにより計算されます。`SummaryRowHeight` 入力プロパティを使用して、デフォルト値をオーバーライドします。引数として数値が必要であり、falsy の値を設定すると、グリッド フッターのデフォルトのサイズ設定動作がトリガーされます。

<!-- Angular -->

> [!Note]
> 列の集計テンプレートは、列 `SummaryTemplate` プロパティを必要な TemplateRef に設定することにより、API を介して定義できます。

<!-- end: Angular -->


<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-summary-template"
           github-src="{ComponentSample}/data-summary-template" >
</code-view>

## 集計のフォーマット
デフォルトでは、組み込みの集計オペランドによって生成される集計結果は、グリッド `Locale` および列 `PipeArgs` に従ってローカライズおよびフォーマットされます。カスタム オペランドを使用する場合、`Locale` と `PipeArgs` は適用されません。集計結果のデフォルトの外観を変更する場合は、`SummaryFormatter` プロパティを使用してフォーマットできます。

```typescript
public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
    const result = summary.summaryResult;
    if(summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
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
    if(summaryOperand instanceof IgcDateSummaryOperand && summary.key !== 'count'
        && result !== null && result !== undefined) {
        const pipe = new DatePipe('en-US');
        return pipe.transform(result,'MMM YYYY');
    }
    return result;
}
```

```html
<igx-column [summaryFormatter]="dateSummaryFormat"></igx-column>
```

```html
<igc-column id="column" [summaryFormatter]="dateSummaryFormat"></igx-column>
```
```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;

    this._bind = () => {
        column.summaryFormatter = this.dateSummaryFormat;
    }
    this._bind();
}
```

<!-- TODO -- update blazor snippet when the sample is ready -->

```razor
<IgbColumn HasSummary="true" SummaryFormatterScript="SummaryFormatter"/>

igRegisterScript("SummaryFormatter", (summary, summaryOperand) => {
    return summary.summaryResult + " rows";
}, false);
```

<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-summary-formatter"
           github-src="{ComponentSample}/data-summary-formatter" >
</code-view>

<!-- ComponentStart: Grid -->

## グループの集計

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

<code-view style="height:650px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-groupby-summary-options"
           github-src="{ComponentSample}/groupby-summary-options" >
</code-view>

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

<code-view style="height:720px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-summary-children"
           github-src="{ComponentSample}/data-summary-children" >
</code-view>

<!-- ComponentEnd: TreeGrid -->


## キーボード ナビゲーション

集計行は、以下のキーボード操作でナビゲーションできます。

- <kbd>上矢印</kbd> - 1 つ上のセルへ移動。
- <kbd>下矢印</kbd> - 1 つ下のセルへ移動。
- <kbd>左矢印</kbd> - 1 つ左のセルへ移動。
- <kbd>右矢印</kbd> - 1 つ右のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>左矢印</kbd> または <kbd>HOME</kbd> - 左端のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>右矢印</kbd> または <kbd>END</kbd> - 右端のセルへ移動。

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
 >コンポーネントが [Emulated](../themes/styles.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除`する必要があります。

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

テーマ エンジンを使用して [**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [_light-grid-summary]({environment:sassApiUrl}/index.html#variable-_light-grid-summary) の 1 つを拡張します。

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

カスタム スキーマを適用するには、グローバル [light]({environment:sassApiUrl}/index.html#variable-light-schema) または [dark]({environment:sassApiUrl}/index.html#variable-dark-schema) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

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

<code-view style="height:710px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-groupby-summary-styling"
           github-src="{ComponentSample}/groupby-summary-styling" >
</code-view>

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


* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<!-- end: Blazor -->

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

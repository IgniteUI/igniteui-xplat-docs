---
title: {Platform} {ComponentTitle} 状態保持 - {ProductName}
_description: 包括的な {ProductName} のツールセットを使用して、グリッドの状態を簡単に保存および復元できます。列の復元、使用方法、デモをご覧ください。
_keywords: state persistence, {Platform}, {ProductName}, Infragistics, 状態の永続化, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} 状態保持

{ProductName} の {Platform} {ComponentTitle} 状態保持機能を使用すると、開発者はグリッドの状態を簡単に保存および復元できます。`GridState` が {Platform} `{ComponentName}` に適用されると、`GetState` および `SetState` メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の永続化を実現できます。

## サポートされる機能

`GridState` ディレクティブは、以下の機能の状態の保存および復元をサポートします。

<!-- ComponentStart: Grid, TreeGrid -->

* **Sorting**
* **Filtering**
* **Advanced Filtering**
* **Paging**
* **CellSelection**
* **RowSelection**
* **ColumnSelection**
* **RowPinning**
* **Expansion**
* **GroupBy**
* **Columns**
    * **新規**: 複数列ヘッダーが標準でサポートされるようになりました。
    * 列の順序
    * `IColumnState` インターフェイスによって定義される列プロパティ。
    * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state-persistence.md#列の復元)セクションを参照してください。

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

* `RowIslands`
    * 階層のすべての子グリッドの保存/復元機能
* `Sorting`
* `Filtering`
* `AdvancedFiltering`
* `Paging`
* `CellSelection`
* `RowSelection`
* `ColumnSelection`
* `RowPinning`
* `Expansion`
* `Columns`
    * **新規**: 複数列ヘッダーが標準でサポートされるようになりました。
    * 列の順序
    * `IColumnState` インターフェイスによって定義される列プロパティ。
    * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state-persistence.md#列の復元)セクションを参照してください。

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: PivotGrid -->

* `Sorting`
* `Filtering`
* `CellSelection`
* `RowSelection`
* `ColumnSelection`
* `Expansion`
* `PivotConfiguration`
    * `IPivotConfiguration` インターフェイスによって定義されるピボット構成プロパティ。
    * ピボットのディメンションと値の関数は、アプリケーションレベルのコードを使用して復元されます。「[ピボット構成の復元](state-persistence.md#ピボット構成の復元)」セクションを参照してください。
    * ピボットの行と列のストラテジもアプリケーション レベルのコードを使用して復元されます。「[ピボットのストラテジの復元](state-persistence.md#ピボットのストラテジの復元)」セクションを参照してください。

<!-- ComponentEnd: PivotGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

> `GridState` ディレクティブはテンプレートを処理しません。列テンプレートの復元方法については、「[列の復元](state-persistence.md#列の復元)」セクションを参照してください。

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## 使用方法

`GetState` - このメソッドは、シリアル化された JSON 文字列でグリッド状態を返します。これは、開発者がそれを取得して任意のデータストレージ (データベース、クラウド、ブラウザーの localStorage など) に保存できます。このメソッドは最初のオプションのパラメーター `Serialize` を受け取り、`GetState` が `IGridState` オブジェクトを返すか、シリアル化された JSON 文字列を返すかを決定します。

開発者は、機能名、または機能名を 2 番目の引数として持つ配列を渡すことにより、特定の機能の状態のみを取得することを選択できます。

```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();

// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);
```

```razor
GetState blazor snippet
```

`SetState` - `SetState` メソッドは、シリアル化されたJSON文字列または `IGridState` オブジェクトを引数として受け入れ、オブジェクト/JSON 文字列で見つかった各機能の状態を復元します。

```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```

```razor
SetState blazor snippet
```

`Options` オブジェクトは、`IGridStateOptions` インターフェースを実装します。特定の機能の名前であるキーには、この機能の状態を追跡するかどうかを示すブール値があります。`GetState` メソッドはこれらの機能の状態を戻り値に入れず、`SetState` メソッドはその状態を復元しません。

```typescript
public options =  { cellSelection: false; sorting: false; }
```

```html
<{ComponentSelector} [igxGridState]="options">
</{ComponentSelector}>
```

```razor
Add options snippet blazor
```

これらのシンプルなシングル ポイント API を使用すると、わずか数行のコードで完全な状態維持機能を実現できます。**下からコードをコピーして貼り付けます** - ユーザーが現在のページを離れるたびに、ブラウザーの `SessionStorage` オブジェクトにグリッドの状態が保存されます。ユーザーがメイン ページに戻るときに、グリッドの状態が復元されます。必要なデータを取得するために、複雑で高度なフィルタリングやソートの式を毎回設定する必要はなくなりました。一度実行して、以下のコードでユーザーに代わって処理してください。

```typescript
@ViewChild(IgxGridStateDirective, { static: true })
public state!: IgxGridStateDirective;

public ngOnInit() {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
        this.saveGridState();
    });
}

public ngAfterViewInit() {
    this.restoreGridState();
}

public saveGridState() {
    const state = this.state.getState() as string;
    window.sessionStorage.setItem('grid1-state', state);
}

public restoreGridState() {
    const state = window.sessionStorage.getItem('grid1-state');
    this.state.setState(state);
}
```

```razor
Add blazor snippet for working with the sessionStorage
```

```typescript
private state: IgcGridStateDirective;

constructor() {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
        this.saveGridState();
    });
}

connectedCallback() {
    this.restoreGridState();
}

public saveGridState() {
    const state = this.state.getState() as string;
    window.sessionStorage.setItem('grid1-state', state);
}

public restoreGridState() {
    const state = window.sessionStorage.getItem('grid1-state');
    this.state.setState(state);
}
```

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

## 列の復元

`GridState` はデフォルトで列テンプレート、列フォーマッタなどを保持しません ([制限](state-persistence.md#制限)を参照))。これらの復元は、アプリケーション レベルのコードで実現できます。テンプレート化された列でこれを行う方法を示します。

1. テンプレート参照変数 (以下の例では `#activeTemplate`) を定義し、`ColumnInit` イベントにイベント ハンドラーを割り当てます。

<!-- ComponentStart: Grid -->
```html
<igx-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
</igx-grid>
```

```razor
Add snippet for grid
```

```html
<igc-grid id="grid">
    <igc-column id="isActive" field="IsActive" header="IsActive">
    </igc-column>
</igc-grid>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var isActive = this.isActive = document.getElementById('isActive') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        grid.columnInit = this.gridColumnInit;
        isActive.bodyTemplate = this.activeTemplate;
    }
    this._bind();
}

public activeTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-checkbox checked="${ctx.cell.value}"></igc-checkbox>`;
}
```

<!-- ComponentEnd: Grid  -->

<!-- ComponentStart: HierarchicalGrid -->

```html
<igx-hierarchical-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
</igx-hierarchical-grid>
```

```razor
Add snippet for grid
```

```html
<igc-hierarchical-grid id="grid">
    <igc-column id="isActive" field="IsActive" header="IsActive">
    </igc-column>
</igc-hierarchical-grid>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    var isActive = this.isActive = document.getElementById('isActive') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        grid.columnInit = this.gridColumnInit;
        isActive.bodyTemplate = this.activeTemplate;
    }
    this._bind();
}

public activeTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-checkbox checked="${ctx.cell.value}"></igc-checkbox>`;
}
```

<!-- ComponentEnd: HierarchicalGrid  -->

<!-- ComponentStart: TreeGrid -->

```html
<igx-tree-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

```razor
Add sample
```

```html
<igc-tree-grid id="grid">
    <igc-column id="isActive" field="IsActive" header="IsActive">
    </igc-column>
</igc-tree-grid>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgctreeGridComponent;
    var isActive = this.isActive = document.getElementById('isActive') as IgcColumnComponent;

    this._bind = () => {
        grid.data = this.data;
        grid.columnInit = this.gridColumnInit;
        isActive.bodyTemplate = this.activeTemplate;
    }
    this._bind();
}

public activeTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-checkbox checked="${ctx.cell.value}"></igc-checkbox>`;
}
```

<!-- ComponentEnd: TreeGrid  -->

1. @ViewChild または @ViewChildren デコレータを使用して、コンポーネントのテンプレート ビューをクエリします。`ColumnInit` イベント ハンドラーで、テンプレートを列の `BodyTemplate` プロパティに割り当てます。


```typescript
@ViewChild('activeTemplate', { static: true }) public activeTemplate: TemplateRef<any>;
public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
        column.summaries = MySummary;
        column.filters = IgxNumberFilteringOperand.instance();
    }
}
```

```razor
Add blazor handler for bodyTemplate
```

```typescript
public onColumnInit(column: IgcColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
        column.summaries = MySummary;
        column.filters = IgcNumberFilteringOperand.instance();
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->


<!-- ComponentStart: PivotGrid -->

## ピボット構成の復元

`GridState` は、デフォルトではピボット ディメンション関数、値フォーマッタなどを保持しません ([制限](state-persistence.md#制限)を参照)。これらの復元は、アプリケーション レベルのコードで実現できます。`{ComponentName}` は、構成に含まれるカスタム関数を戻すために使用できる 2 つのイベント (`DimensionInit` と `ValueInit`) を公開します。以下はその方法です。

* `DimensionInit` および `ValueInit` イベントのイベント ハンドラーを割り当てます。

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfig" [igxGridState]="options"
    (valueInit)='onValueInit($event)' (dimensionInit)='onDimensionInit($event)'>
</igx-pivot-grid>
```

```razor
blazor snippet
```

> `DimensionInit` および `ValueInit` イベントは、`PivotConfiguration` プロパティで定義された値とディメンションごとに発行されます。

* `ValueInit` イベント ハンドラーで、すべてのカスタム集計、フォーマッタ、およびスタイルを設定します。

```typescript
public onValueInit(value: IPivotValue) {
    // Needed only for custom aggregators, formatter or styles.
    if (value.member === 'AmountofSale') {
        value.aggregate.aggregator = IgxTotalSaleAggregate.totalSale;
        value.aggregateList?.forEach((aggr: IPivotAggregator) => {
            switch (aggr.key) {
                case 'SUM':
                    aggr.aggregator = IgxTotalSaleAggregate.totalSale;
                    break;
                case 'MIN':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMin;
                    break;
                case 'MAX':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMax;
                    break;
            }
        });
    } else if (value.member === 'Value') {
        value.formatter = (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined;
        value.styles.upFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
        value.styles.downFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }
}
```

```razor
Add blazor handling for valueInit
```

* `DimensionInit` イベント ハンドラーで、すべてのカスタム `MemberFunction` 実装を設定します。

```typescript
public onDimensionInit(dim: IPivotDimension) {
    switch (dim.memberName) {
        case 'AllProducts':
            dim.memberFunction = () => 'All Products';
            break;
        case 'ProductCategory':
            dim.memberFunction = (data) => data.Product.Name;
            break;
        case 'City':
            dim.memberFunction = (data) => data.Seller.City;
            break;
        case 'SellerName':
            dim.memberFunction = (data) => data.Seller.Name;
            break;
    }
}
```

```razor
Add blazor handling for dimensionInit
```

<!-- ComponentEnd: PivotGrid -->


<!-- ComponentStart: HierarchicalGrid -->

## 子グリッドの復元
子グリッドの状態の保存/復元は、`RowIslands` プロパティによって制御され、デフォルトで有効に設定されています。`GridState` は、ルート グリッドと階層のすべての子グリッドの両方の機能を保存/復元するために同じオプションを使用します。たとえば、以下のオプションを渡す場合:

``` html
<!-- public options = {selection: false, sorting: false, rowIslands: true} -->
<igx-grid [igxGridState]="options"></igx-grid>
```

```razor
Blazor snippet
```

`GetState` API は、`Selection` と `Sorting` を除くすべてのグリッド (ルート グリッドと子グリッド) 機能の状態を返します。開発者が後ですべてのグリッドの `Filtering` 状態のみを復元するには、以下を使用します。

```typescript
this.state.setState(state, ['filtering', 'rowIslands']);
```

```razor
setState snippet
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/data-persistence-state", height="763", alt="{Platform} {ComponentTitle} data persistence state"`



<!-- ComponentStart: PivotGrid -->

## ピボット ストラテジの復元

`GridState` は、デフォルトで は ([制限](state-persistence.md#制限)を参照) リモート ピボット操作もカスタム ディメンション ストラテジも保持しません (詳細については、[Pivot Grid リモート操作](remote-operations.md)のサンプルを参照してください)。これらの復元は、アプリケーション レベルのコードで実現できます。`GridState` は、`StateParsed` と呼ばれるイベントを公開します。このイベントはグリッド状態が適用される前に追加で変更するために使用できます。以下はその方法です。

> `StateParsed` は、文字列引数で `SetState` を使用している場合にのみ発行します。

* カスタム ソート方法およびカスタム ピボット列/行ディメンション ストラテジを設定します。

```html
<igx-pivot-grid #grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy" [defaultExpandState]='true'
    [igxGridState]="options" [sortStrategy]="customStrategy" [showPivotConfigurationUI]='false' [superCompactMode]="true" [height]="'500px'">
</igx-pivot-grid>
```

```typescript
@ViewChild(IgxGridStateDirective, { static: true })
public state!: IgxGridStateDirective;

public customStrategy = NoopSortingStrategy.instance();
public options: IGridStateOptions = {...};
public pivotConfigHierarchy: IPivotConfiguration = {
    columnStrategy: NoopPivotDimensionsStrategy.instance(),
    rowStrategy: NoopPivotDimensionsStrategy.instance(),
    columns: [...],
    rows: [...],
    values: [...],
    filters: [...]
};
```

```razor
Add snippet for blazor
```

* `SessionStorage` から状態を復元し、カスタム ストラテジを適用します。

```typescript
public restoreState() {
    const state = window.sessionStorage.getItem('grid-state');
    this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
        parsedState.sorting.forEach(x => x.strategy = NoopSortingStrategy.instance());
        parsedState.pivotConfiguration.rowStrategy = NoopPivotDimensionsStrategy.instance();
        parsedState.pivotConfiguration.columnStrategy = NoopPivotDimensionsStrategy.instance();
    });
    this.state.setState(state as string);
}
```

```razor
Add snippet for blazor for restore state
```

`sample="/{ComponentSample}/data-persistence-noop", height="580", alt="{Platform} {ComponentTitle} data persistence noop"`



<!-- ComponentEnd: PivotGrid -->

## 制限

<!-- ComponentStart: HierarchicalGrid -->

* パラメーターなしで `SetState` API を使用してすべてのグリッド機能を一度に復元する場合、ルート グリッドの列プロパティがデフォルトにリセットされる場合があります。その場合は、後で列または列の選択機能を復元してください。

```typescript
state.setState(gridState);
state.setState(gridState.columns);
state.setState(gridState.columnSelection);
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

* `GetState` メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトをJSON文字列に変換します。JSON.stringify() が関数をサポートしないため、`GridState` ディレクティブは、columns `Formatter`、`Filters`、`Summaries`、`SortStrategy`、`CellClasses`、`CellStyles`、`HeaderTemplate` および `BodyTemplate` プロパティを無視します。

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->


<!-- ComponentStart: PivotGrid -->

<!-- Angular -->
* `GetState` メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトをJSON文字列に変換します。JSON.stringify() は関数をサポートされていないため、`GridState` ディレクティブはピボット ディメンション `MemberFunction`、ピボット値 `Member`、`Formatter`、カスタム `Aggregate` 関数、`Styles`、およびピボット構成戦略 (`ColumnStrategy` および `RowStrategy`) を無視します。
<!-- end:Angular -->

<!-- ComponentEnd: PivotGrid -->

## その他のリソース

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart:  Grid -->
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [選択](selection.md)
<!-- ComponentEnd:  Grid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: PivotGrid -->


* [ピボット グリッド機能](features.md)
<!-- * [ピボット グリッドのリモート操作](remote-operations.md) -->

<!-- ComponentEnd: PivotGrid -->
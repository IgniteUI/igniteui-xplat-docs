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

<!-- Angular -->
{Platform} {ComponentTitle} の {ProductName} 状態保持機能を使用すると、開発者はグリッドの状態を簡単に保存および復元できます。`GridState` が {Platform} `{ComponentName}` に適用されると、`GetState` および `SetState` メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の永続化を実現できます。
<!-- end: Angular -->

<!-- React, WebComponents -->
{Platform} {ComponentTitle} の {ProductName} 状態保持を使用すると、開発者はグリッドの状態を簡単に保存および復元できます。`GridState` が {Platform} `{ComponentName}` に適用されると、`GetState`、`GetStateAsString`、`ApplyState` および `ApplyStateFromString` メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の永続化を実現できます。
<!-- end: React, WebComponents -->

<!-- Blazor -->
{Platform} {ComponentTitle} の {ProductName} 状態保持を使用すると、開発者はグリッドの状態を簡単に保存および復元できます。`GridState` が {Platform} `{ComponentName}` に適用されると、`GetStateAsString` および `ApplyStateFromString` メソッドが公開され、開発者はこれを使用して、あらゆるシナリオで状態の永続化を実現できます。
<!-- end: Blazor -->

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
    * 複数列ヘッダー
    * 列の順序
    * `IColumnState` インターフェイスによって定義される列プロパティ。
<!-- * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state-persistence.md#列の復元)セクションを参照してください。 -->

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
<!-- * 列テンプレートおよび関数はアプリケーション レベルのコードを使用して復元されます。[列の復元](state-persistence.md#列の復元)セクションを参照してください。 -->

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

<!-- Angular -->
<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

> `GridState` はテンプレートを処理しません。列テンプレートの復元方法については、「[列の復元](state-persistence.md#列の復元)」セクションを参照してください。

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->
<!-- end: Angular -->

## 使用方法

<!-- Angular -->
`GetState` - このメソッドは、シリアル化された JSON 文字列でグリッド状態を返します。これは、開発者がそれを取得して任意のデータストレージ (データベース、クラウド、ブラウザーの localStorage など) に保存できます。このメソッドは最初のオプションのパラメーター `Serialize` を受け取り、`GetState` が `IGridState` オブジェクトを返すか、シリアル化された JSON 文字列を返すかを決定します。

開発者は、機能名、または機能名を 2 番目の引数として持つ配列を渡すことにより、特定の機能の状態のみを取得することを選択できます。
<!-- end: Angular -->

<!-- React, WebComponents -->
`GetState` メソッドは、すべての状態情報を含むグリッドの状態を `GridStateInfo` オブジェクトで返します。保存するには追加の手順が必要になる場合があります。
<!-- end: React, WebComponents -->

<!-- Blazor, React, WebComponents -->
`GetStateAsString` は、シリアル化された JSON 文字列を返します。これは、開発者がそれを取得して任意のデータストレージ (データベース、クラウド、ブラウザーの localStorage など) に保存できます。

開発者は、引数として機能名を含む配列を渡すことにより、特定の機能の状態のみを取得することを選択できます。空の配列では、デフォルトの状態オプションが使用されます。
<!-- end: Blazor, React, WebComponents -->

<!-- Angular -->
```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();

// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid">
    <igc-grid-state id="gridState"></igc-grid-state>
</{ComponentSelector}>
```

```typescript
var gridState = document.getElementById('gridState') as IgcGridStateComponent;

// get an `IgcGridStateInfo` object, containing all features original state objects, as returned by the grid public API
const state: IgcGridStateInfo = gridState.getState();

// get all features` state in a serialized JSON string
const stateString: string = gridState.getStateAsString();

// get the sorting and filtering expressions
const sortingFilteringStates: IgcGridStateInfo = gridState.getState(['sorting', 'filtering']);
```
<!-- end: WebComponents -->

```tsx
<IgrGrid>
    <IgrGridState ref={(ref) => { gridState = ref; }}></IgrGridState>
</IgrGrid>
```

```tsx
// get an `IgrGridStateInfo` object, containing all features original state objects, as returned by the grid public API
const state: IgrGridStateInfo = gridState.getState([]);

// get all features` state in a serialized JSON string
const stateString: string = gridState.getStateAsString([]);

// get the sorting and filtering expressions
const sortingFilteringStates: IgrGridStateInfo = gridState.getState(['sorting', 'filtering']);
```

```razor
<{ComponentSelector}>
    <IgbGridState @ref="gridState"></IgbGridState>
</{ComponentSelector}>

@code {
    // get all features` state in a serialized JSON string
    string stateString = gridState.GetStateAsString(new string[0]);

    // get the sorting and filtering expressions
    string sortingFilteringStates = gridState.GetStateAsString(new string[] { "sorting", "filtering" });
}
```

<!-- Angular -->
`SetState` - `SetState` メソッドは、シリアル化された JSON 文字列または `IGridState` オブジェクトを引数として受け入れ、オブジェクト/JSON 文字列で見つかった各機能の状態を復元します。
<!-- end: Angular -->

<!-- React, WebComponents -->
`ApplyState` - このメソッドは引数として `GridStateInfo` オブジェクトを受け取り、オブジェクト内で見つかった各フィーチャまたは 2 番目の引数として指定されたフィーチャの状態を復元します。
<!-- end: React, WebComponents -->

<!-- Blazor, React, WebComponents -->
`ApplyStateFromString` - このメソッドはシリアル化された JSON 文字列を引数として受け取り、JSON 文字列内で見つかった各機能の状態、または 2 番目の引数として指定された機能を復元します。
<!-- end: Blazor, React, WebComponents -->

<!-- Angular -->
```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
gridState.applyState(gridState);
gridState.applyStateFromString(gridStateString);
gridState.applyState(sortingFilteringStates)
```
<!-- end: WebComponents -->

```tsx
gridState.applyState(gridState, []);
gridState.applyStateFromString(gridStateString, []);
gridState.applyState(sortingFilteringStates, [])
```

```razor
gridState.ApplyStateFromString(gridStateString, new string[0]);
gridState.ApplyStateFromString(sortingFilteringStates, new string[0])
```

<!-- Angular -->
`Options` オブジェクトは、`IGridStateOptions` インターフェースを実装します。特定の機能の名前であるキーには、この機能の状態を追跡するかどうかを示すブール値があります。`GetState` メソッドはこれらの機能の状態を戻り値に入れず、`SetState` メソッドはその状態を復元しません。
<!-- end: Angular -->

<!-- React, WebComponents -->
`Options` オブジェクトは、`GridStateOptions` インターフェースを実装します。特定の機能の名前であるキーには、この機能の状態を追跡するかどうかを示すブール値があります。`GetState`/`GetStateAsString` メソッドはこれらの機能の状態を戻り値に入れず、`ApplyState`/`ApplyStateFromString` メソッドはその状態を復元しません。
<!-- end: React, WebComponents -->

<!-- Blazor -->
`Options` オブジェクトは、`GridStateOptions` インターフェースを実装します。特定の機能の名前であるキーには、この機能の状態を追跡するかどうかを示すブール値があります。`GetStateAsString` メソッドはこれらの機能の状態を戻り値に入れず、`ApplyStateFromString` メソッドはその状態を復元しません。
<!-- end: Blazor -->

<!-- Angular -->
```typescript
public options =  { cellSelection: false, sorting: false };
```

```html
<{ComponentSelector} [igxGridState]="options">
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->

```typescript
gridState.options = { cellSelection: false, sorting: false };
```
<!-- end: WebComponents -->

```tsx
<IgrGridState options={{ cellSelection: false, sorting: false }}></IgrGridState>
```

```razor
gridState.Options = new IgbGridStateOptions
    {
        CellSelection = false,
        Sorting = false
    };
```

これらのシンプルなシングル ポイント API を使用すると、わずか数行のコードで完全な状態維持機能を実現できます。**下からコードをコピーして貼り付けます** - ユーザーが現在のページを離れるたびに、ブラウザーの `SessionStorage` オブジェクトにグリッドの状態が保存されます。ユーザーがメイン ページに戻るときに、グリッドの状態が復元されます。必要なデータを取得するために、複雑で高度なフィルタリングやソートの式を毎回設定する必要はなくなりました。一度実行して、以下のコードでユーザーに代わって処理してください。

<!-- Angular -->
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
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
constructor() {
    window.addEventListener("load", () => { this.restoreGridState(); });
    window.addEventListener("beforeunload", () => { this.saveGridState(); });
}

// Using methods that work with IgcGridStateInfo object.
public saveGridState() {
    const state = this.gridState.getState();
    window.localStorage.setItem('grid-state', JSON.stringify(state));
}

public restoreGridState() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        this.gridState.applyState(JSON.parse(state));
    }
}

// Or using string alternative methods.
public saveGridStateString() {
    const state = this.gridState.getStateAsString();
    window.localStorage.setItem('grid-state', state);
}

public restoreGridStateString() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        this.gridState.applyStateFromString(state);
    }
}
```
<!-- end: WebComponents -->

```tsx
<IgrGrid rendered={restoreGridState}>
    <IgrGridState ref={(ref) => { gridState = ref; }}></IgrGridState>
</IgrGrid>
```

```tsx
useEffect(() => {
    restoreGridState();
    window.addEventListener('beforeunload', saveGridState);
    return () => {
      window.removeEventListener('beforeunload', saveGridState);
    }
}, []);

// Using methods that work with IgrGridStateInfo object.
function saveGridState() {
    const state = gridState.getState([]);
    window.localStorage.setItem('grid-state', JSON.stringify(state));
}

function restoreGridState() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        gridState.applyState(JSON.parse(state), []);
    }
}

//Or using string alternative methods.
function saveGridState() {
    const state = gridState.getStateAsString([]);
    window.localStorage.setItem('grid-state', state);
}

function restoreGridState() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        gridState.applyStateFromString(state, []);
    }
}
```

```razor
@using IgniteUI.Blazor.Controls
@using Newtonsoft.Json
@implements IDisposable

@inject IJSRuntime JS
@inject NavigationManager Navigation

<IgbGrid Rendered="OnGridRendered">
    <IgbGridState @ref="gridState"></IgbGridState>
    <IgbColumn Field="ContactName" Header="Name" MinWidth="200px" ></IgbColumn>
    <IgbColumn Field="ContactTitle" Header="Title" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
    <IgbColumn Field="CompanyName" Header="Company" MinWidth="200px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
</IgbGrid>

@code {
    protected override void OnAfterRender(bool firstRender)
    {
        Navigation.LocationChanged += OnLocationChanged;
    }

    void OnLocationChanged(object sender, LocationChangedEventArgs e)
    {
        SaveGridState();
    }

    void IDisposable.Dispose()
    {
        // Unsubscribe from the event when our component is disposed
        Navigation.LocationChanged -= OnLocationChanged;
    }

    void OnGridRendered()
    {
        RestoreGridState();
    }

    async void SaveGridState() {
        string state = gridState.getStateAsString(new string[0]);
        await JS.InvokeVoidAsync("window.localStorage.setItem", "grid-state", state);
    }

    async void RestoreGridState() {
        string state = await JS.InvokeAsync<string>("window.localStorage.getItem", "grid-state");
        if (state) {
            gridState.ApplyStateFromString(state, new string[0]);
        }
    }
}
```
<!-- Angular -->

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


```html
<igc-grid id="grid">
    <igc-grid-state id="gridState"></igc-grid-state>
    <igc-column id="isActive" field="IsActive" header="IsActive"></igc-column>
</igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var isActiveCol = this.isActive = document.getElementById('isActive') as IgcColumnComponent;
    this.onColumnInit = this.onColumnInit.bind(this);

    this._bind = () => {
        grid.data = this.data;
        grid.addEventListener("columnInit", this.onColumnInit);
        isActiveCol.bodyTemplate = this.activeTemplate;
    }
    this._bind();
}

public activeTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-checkbox checked="${ctx.cell.value}"></igc-checkbox>`;
}
```

```tsx
<IgrGrid columnInit={onColumnInit}>
    <IgrGridState></IgrGridState>
    <IgrColumn field="IsActive" header="IsActive" bodyTemplate={activeTemplate}></IgrColumn>
</IgrGrid>
```

```tsx
function activeTemplate(ctx: { dataContext: IgrCellTemplateContext }) {
    return (<IgrCheckbox checked={ctx.dataContext.cell.value}></IgrCheckbox>);
}
```

```razor
<IgbGrid ColumnInit="OnColumnInit">
    <IgbGridState @ref="gridState"></IgbGridState>
    <IgbColumn Field="IsActive" Header="IsActive" BodyTemplate="ActiveTemplate">
    </IgbColumn>
</IgbGrid>

@code {
    public static RenderFragment<IgbCellTemplateContext> ActiveTemplate = (context) =>
    {
        bool value = Convert.ToBoolean(context.Cell.Value);
        return @<IgbCheckbox Checked="@value"></IgbCheckbox>;
    };
}
```

<!-- ComponentEnd: Grid  -->

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

```html
<igc-tree-grid id="grid">
    <igc-grid-state id="gridState"></igc-grid-state>
    <igc-column id="isActive" field="IsActive" header="IsActive">
    </igc-column>
</igc-tree-grid>
```
```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgctreeGridComponent;
    var isActive = this.isActive = document.getElementById('isActive') as IgcColumnComponent;
    this.onColumnInit = this.onColumnInit.bind(this);

    this._bind = () => {
        grid.data = this.data;
        grid.addEventListener("columnInit", this.onColumnInit);
        isActive.bodyTemplate = this.activeTemplate;
    }
    this._bind();
}

public activeTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-checkbox checked="${ctx.cell.value}"></igc-checkbox>`;
}
```

```razor
<IgbTreeGrid>
    <IgbGridState @ref="gridState"></IgbGridState>
    <IgbColumn Field="IsActive" Header="IsActive" BodyTemplate="ActiveTemplate">
    </IgbColumn>
</IgbTreeGrid>

@code {
    public static RenderFragment<IgbCellTemplateContext> ActiveTemplate = (context) =>
    {
        bool value = Convert.ToBoolean(context.Cell.Value);
        return @<IgbCheckbox Checked="@value"></IgbCheckbox>;
    };
}
```

<!-- ComponentEnd: TreeGrid  -->

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
    this.onColumnInit = this.onColumnInit.bind(this);

    this._bind = () => {
        grid.data = this.data;
        grid.addEventListener("columnInit", this.onColumnInit);
        isActive.bodyTemplate = this.activeTemplate;
    }
    this._bind();
}

public activeTemplate = (ctx: IgcCellTemplateContext) => {
    return html`<igc-checkbox checked="${ctx.cell.value}"></igc-checkbox>`;
}
```

<!-- ComponentEnd: HierarchicalGrid  -->

2. @ViewChild または @ViewChildren デコレータを使用して、コンポーネントのテンプレート ビューをクエリします。`ColumnInit` イベント ハンドラーで、テンプレートを列の `BodyTemplate` プロパティに割り当てます。

```typescript
@ViewChild('activeTemplate', { static: true }) public activeTemplate: TemplateRef<any>;
public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
    }
}
```

<!-- Blazor, React, WebComponents -->
2. `ColumnInit` イベント ハンドラーで、テンプレートを列の `BodyTemplate` プロパティに割り当てます。
<!-- end: Blazor, React, WebComponents -->

```typescript
public onColumnInit(event: any) {
    const column = event.detail as IgcColumnComponent;
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
    }
}
```

```tsx
function onColumnInit(s: IgrGridComponent, e: IgrColumnComponentEventArgs) {
    const column: IgrColumn = e.detail;
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
    }
}
```

```razor
// In Javascript
public void OnColumnInit(IgbColumnComponentEventArgs args)
{
    IgbColumn column = args.Detail;
    if (column.Field == "IsActive")
    {
        column.BodyTemplate = ActiveTemplate;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- end: Angular -->

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

`sample="/{ComponentSample}/state-persistence-main", height="763", alt="{Platform} {ComponentTitle} State Persistence "`

<!-- ComponentStart: PivotGrid -->

## ピボット ストラテジの復元

`GridState` は、リモート ピボット操作もカスタム ディメンション ストラテジも保持しません<!-- (詳細については、[Pivot Grid リモート操作]((./remote-operations.md)のサンプルを参照してください) ([制限](state-persistence.md#制限)を参照) -->。これらの復元は、アプリケーション レベルのコードで実現できます。`GridState` は、`StateParsed` と呼ばれるイベントを公開します。このイベントはグリッド状態が適用される前に追加で変更するために使用できます。以下はその方法です。

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

<!-- Angular -->
* `GetState` メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトをJSON文字列に変換します。JSON.stringify() が関数をサポートしないため、`GridState` ディレクティブは、columns `Formatter`、`Filters`、`Summaries`、`SortStrategy`、`CellClasses`、`CellStyles`、`HeaderTemplate` および `BodyTemplate` プロパティを無視します。
* <!-- end: Angular -->

<!-- Blazor, React, WebComponents -->
* `GetStateAsString` メソッドは、JSON.stringify() メソッドを使用して、元のオブジェクトをJSON文字列に変換します。JSON.stringify() が関数をサポートしないため、`GridState` コンポーネントは、列の `Formatter`、`Filters`、`Summaries`、`SortStrategy`、`CellClasses`、`CellStyles`、`HeaderTemplate` および `BodyTemplate` プロパティを無視します。
<!-- end: Blazor, React, WebComponents -->

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


<!-- * [ピボット グリッド機能](features.md) -->
<!-- * [ピボット グリッドのリモート操作](remote-operations.md) -->

<!-- ComponentEnd: PivotGrid -->
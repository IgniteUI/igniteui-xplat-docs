---
title: {Platform} {ComponentTitle} State Persistence - {ProductName}
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for {Platform}. Learn how to restore columns, explore usage, and see demos!
_keywords: state persistence, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} State Persistence

<!-- Angular -->
The {ProductName} State Persistence in {Platform} {ComponentTitle} allows developers to easily save and restore the grid state. When the `GridState` is applied on the {Platform} `{ComponentName}`, it exposes the `GetState` and `SetState` methods that developers can use to achieve state persistence in any scenario.
<!-- end: Angular -->

<!-- Blazor, React, WebComponents -->
The {ProductName} State Persistence in {Platform} {ComponentTitle} allows developers to easily save and restore the grid state. When the `GridState` is applied on the {Platform} `{ComponentName}`, it exposes the `ExtractState` and `ApplyState` methods that developers can use to achieve state persistence in any scenario.
<!-- end: Blazor, React, WebComponents -->

## Supported Features

`GridState` directive supports saving and restoring the state of the following features:

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
    * **NEW**: Multi column headers are now supported out of the box
    * Columns order
    * Column properties defined by the `IColumnState` interface.
    * Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section.

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

* `RowIslands`
    * saving/restoring features for all child grids down the hierarchy
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
    * **NEW**: Multi column headers are now supported out of the box
    * Columns order
    * Column properties defined by the `IColumnState` interface.
    * Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: PivotGrid -->

* `Sorting`
* `Filtering`
* `CellSelection`
* `RowSelection`
* `ColumnSelection`
* `Expansion`
* `PivotConfiguration`
    * Pivot Configuration properties defined by the `IPivotConfiguration` interface.
    * Pivot Dimension and Value functions are restored using application level code, see [Restoring Pivot Configuration](state-persistence.md#restoring-pivot-configuration) section.
    * Pivot Row and Column strategies are also restored using application level code, see [Restoring Pivot Strategies](state-persistence.md#restoring-pivot-strategies) section.

<!-- ComponentEnd: PivotGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

> The `GridState` does not take care of templates. Go to [Restoring Column](state-persistence.md#restoring-columns) section to see how to restore column templates.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## Usage

<!-- Angular -->
The `GetState` method returns the grid state in a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc). The method accepts first optional parameter `Serialize`, which determines whether `GetState` will return an `IGridState` object or a serialized JSON string.

The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.
<!-- end: Angular -->

<!-- Blazor, React, WebComponents -->
The `ExtractState` method returns the grid state in a State object, containing all the state info. Additional steps may be required in order to save it. The alternative `ExtractStateAsString` returns a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc).

The developer may choose to get only the state for a certain feature/features, by passing in an array with feature names as an argument. Empty array will result to using the default state options.
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

// get an `IgcState` object, containing all features original state objects, as returned by the grid public API
const state: IgcState = gridState.extractState();

// get all features` state in a serialized JSON string
const stateString: string = gridState.extractStateAsString();

// get the sorting and filtering expressions
const sortingFilteringStates: IgcState = gridState.extractState(['sorting', 'filtering']);
```
<!-- end: WebComponents -->

```tsx
<IgrGrid>
    <IgrGridState ref={(ref) => { gridState = ref; }}></IgrGridState>
</IgrGrid>
```

```tsx
// get an `IgrState` object, containing all features original state objects, as returned by the grid public API
const state: IgrState = gridState.extractState([]);

// get all features` state in a serialized JSON string
const stateString: string = gridState.extractStateAsString([]);

// get the sorting and filtering expressions
const sortingFilteringStates: IgrState = gridState.extractState(['sorting', 'filtering']);
```

```razor
<{ComponentSelector}>
    <IgbGridState @ref="gridState"></IgbGridState>
</{ComponentSelector}>

@code {
    // get an `IgbState` object, containing all features original state objects, as returned by the grid public API
    State state = gridState.ExtractState(new string[0]);

    // get all features` state in a serialized JSON string
    string stateString = gridState.ExtractStateAsString(new string[0]);

    // get the sorting and filtering expressions
    State sortingFilteringStates = gridState.ExtractState(new string[] { "sorting", "filtering" });
}
```

<!-- Angular -->
`SetState` - The `SetState` method accepts the serialized JSON string or `IGridState` object as argument and will restore the state of each feature found in the object/JSON string.
<!-- end: Angular -->

<!-- Blazor, React, WebComponents -->
`ApplyState` - The method accepts a `State` object as argument and will restore the state of each feature found in the object or specified features as second argument.

`ApplyStateFromString` - The method accepts a serialized JSON string as argument and will restore the state of each feature found in the JSON string or specified features as second argument.
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
gridState.ApplyState(gridState, new string[0]);
gridState.ApplyStateFromString(gridStateString, new string[0]);
gridState.ApplyState(sortingFilteringStates, new string[0])
```

<!-- Angular -->
The `Options` object implements the `IGridStateOptions` interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. `GetState` method will not put the state of these features in the returned value and `SetState` method will not restore state for them.
<!-- end: Angular -->

<!-- Blazor, React, WebComponents -->
The `Options` object implements the `GridStateOptions` interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. `ExtractState`/`ExtractStateAsString` methods will not put the state of these features in the returned value and `ApplyState`/`ApplyStateFromString` methods will not restore state for them.
<!-- end: Blazor, React, WebComponents -->

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

The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `SessionStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

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
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.addEventListener("rendered", () => { this.restoreGridState(); });
    window.addEventListener("beforeunload", () => { this.saveGridState(); });
}

public saveGridState() {
    const state = this.gridState.extractState();
    window.localStorage.setItem('grid-state', JSON.stringify(state));
}

public restoreGridState() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        this.gridState.applyState(JSON.parse(state));
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
    window.addEventListener('beforeunload', saveGridState);
    return () => {
      window.removeEventListener('beforeunload', saveGridState);
    }
}, []);

function saveGridState() {
    const state = gridState.extractState([]);
    window.localStorage.setItem('grid-state', JSON.stringify(state));
}

function restoreGridState() {
    const state = window.localStorage.getItem('grid-state');
    if (state) {
        gridState.applyState(JSON.parse(state), []);
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

    // Using `ExtractState` method
    async void SaveGridState() {
        IgbState state = gridState.ExtractState(new string[0]);
        await JS.InvokeVoidAsync("window.localStorage.setItem", "grid-state", JsonConvert.SerializeObject(state));
    }

    // Or using `ExtractStateAsString` method
    async void SaveGridStateString() {
        string state = gridState.ExtractStateAsString(new string[0]);
        await JS.InvokeVoidAsync("window.localStorage.setItem", "grid-state", state);
    }

    async void RestoreGridState() {
        string state = await JS.InvokeAsync<string>("window.localStorage.getItem", "grid-state");
        if (state) {
            gridState.ApplyState(JsonConvert.DeserializeObject<IgbState>(state), new string[0]);
            // Or
            gridState.ApplyStateFromString(state, new string[0]);
        }
    }
}
```

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

## Restoring columns

`GridState` will not persist columns templates, column formatters, etc. by default (see [limitations](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. Let's show how to do this for templated columns:

1. Define a template reference variable (in the example below it is `#activeTemplate`) and assign an event handler for the `ColumnInit` event:

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

<!-- Angular -->
2. Query the template view in the component using @ViewChild or @ViewChildren decorator. In the `ColumnInit` event handler, assign the template to the column `BodyTemplate` property:
<!-- end: Angular -->

```typescript
@ViewChild('activeTemplate', { static: true }) public activeTemplate: TemplateRef<any>;
public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
    }
}
```

<!-- Blazor, React, WebComponents -->
2. In the `ColumnInit` event handler, assign the template to the column `BodyTemplate` property:
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
public void OnColumnInit(IgbColumnComponentEventArgs event)
{
    IgbColumn column = event.Detail;
    if (column.Field == "IsActive")
    {
        column.BodyTemplate = ActiveTemplate;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->


<!-- ComponentStart: PivotGrid -->

## Restoring Pivot Configuration

`GridState` will not persist pivot dimension functions, value formatters, etc. by default (see [limitations](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `{ComponentName}` exposes two events which can be used to set back any custom functions you have in the configuration: `DimensionInit` and `ValueInit`. Let's show how to do this:

* Assign event handlers for the `DimensionInit` and `ValueInit` events:

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfig" [igxGridState]="options"
    (valueInit)='onValueInit($event)' (dimensionInit)='onDimensionInit($event)'>
</igx-pivot-grid>
```

```razor
blazor snippet
```

> The `DimensionInit` and `ValueInit` events are emitted for each value and dimension defined in the `PivotConfiguration` property.

* In the `ValueInit` event handler set all custom aggregators, formatters and styles:

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

* In the `DimensionInit` event handler set all custom `MemberFunction` implementations:

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

## Restoring Child Grids
Saving / Restoring state for the child grids is controlled by the `RowIslands` property and is enabled by default. `GridState` will use the same options for saving/restoring features both for the root grid and all child grids down the hierarchy. For example, if we pass the following options:

``` html
<!-- public options = {selection: false, sorting: false, rowIslands: true} -->
<igx-grid [igxGridState]="options"></igx-grid>
```

```razor
Blazor snippet
```

Then the `GetState` API will return the state for all grids (root grid and child grids) features excluding `Selection` and `Sorting`. If later on the developer wants to restore only the `Filtering` state for all grids, use:

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

## Restoring Pivot Strategies

`GridState` will not persist neither remote pivot operations nor custom dimension strategies.
 <!-- (For further information see [Pivot Grid Remote Operations](./remote-operations.md) sample) by default (see [limitations](state-persistence.md#limitations)). -->
 Restoring any of these can be achieved with code on application level. The `GridState` exposes an event called `StateParsed` which can be used to additionally modify the grid state before it gets applied. Let's show how to do this:

> `StateParsed` is only emitted when we are using `SetState` with string argument.

* Set custom sorting strategy and custom pivot column and row dimension strategies:

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

* Restoring the state from the `SessionStorage` and applying the custom strategies looks like the following:

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

## Limitations

<!-- ComponentStart: HierarchicalGrid -->

* When restoring all grid features at once (using `SetState` API with no parameters), then column properties for the root grid might be resetted to default. If this happens, restore the columns or column selection feature separately after that:

```typescript
state.setState(gridState);
state.setState(gridState.columns);
state.setState(gridState.columnSelection);
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- Angular -->
* `GetState` method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the `GridState` directive will ignore the columns `Formatter`, `Filters`, `Summaries`, `SortStrategy`, `CellClasses`, `CellStyles`, `HeaderTemplate` and `BodyTemplate` properties.
<!-- end: Angular -->

<!-- Blazor, React, WebComponents -->
* `ExtracStateAsString` method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the `GridState` component will ignore the columns `Formatter`, `Filters`, `Summaries`, `SortStrategy`, `CellClasses`, `CellStyles`, `HeaderTemplate` and `BodyTemplate` properties.
<!-- end: Blazor, React, WebComponents -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: PivotGrid -->

<!-- Angular -->
* `GetState` method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the `GridState` directive will ignore the pivot dimension `MemberFunction`, pivot values `Member`, `Formatter`, custom `Aggregate` functions,
 `Styles` and pivot configuration strategies: `ColumnStrategy` and `RowStrategy`.
<!-- end:Angular -->

<!-- ComponentEnd: PivotGrid -->

## Additional Resources

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart:  Grid -->
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: PivotGrid -->


<!-- * [Pivot Grid Features](features.md) -->
<!-- * [Pivot Grid Remote Operations](remote-operations.md) -->

<!-- ComponentEnd: PivotGrid -->
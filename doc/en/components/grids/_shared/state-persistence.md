---
title: {Platform} {ComponentTitle} State Persistence - {ProductName}
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for {Platform}. Learn how to restore columns, explore usage, and see demos!
_keywords: state persistence, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} State Persistence

The {Platform} {ComponentTitle}State Persistence feature in {ProductName} allows developers to easily save and restore the grid state. When the `GridState` is applied on the {Platform} `{ComponentName}`, it exposes the `GetState` and `SetState` methods that developers can use to achieve state persistence in any scenario.

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

> The `GridState` directive does not take care of templates. Go to [Restoring Column](state-persistence.md#restoring-columns) section to see how to restore column templates.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## Usage

The `GetState` method returns the grid state in a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc). The method accepts first optional parameter `Serialize`, which determines whether `GetState` will return an `IGridState` object or a serialized JSON string.

The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.

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

`SetState` - The `SetState` method accepts the serialized JSON string or `IGridState` object as argument and will restore the state of each feature found in the object/JSON string.

```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```

```razor
SetState blazor snippet
```

The `Options` object implements the `IGridStateOptions` interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. `GetState` method will not put the state of these features in the returned value and `SetState` method will not restore state for it.

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

The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `SessionStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

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

1. Query the template view in the component using @ViewChild or @ViewChildren decorator. In the `ColumnInit` event handler, assign the template to the column `BodyTemplate` property:


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

`sample="/{ComponentSample}/data-persistence-state", height="763", alt="{Platform} {ComponentTitle} data persistence state"`



<!-- ComponentStart: PivotGrid -->

## Restoring Pivot Strategies

`GridState` will not persist neither remote pivot operations nor custom dimension strategies (For further information see [Pivot Grid Remote Operations](remote-operations.md) sample) by default (see [limitations](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `GridState` exposes an event called `StateParsed` which can be used to additionally modify the grid state before it gets applied. Let's show how to do this:

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

* `GetState` method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the `GridState` directive will ignore the columns `Formatter`, `Filters`, `Summaries`, `SortStrategy`, `CellClasses`, `CellStyles`, `HeaderTemplate` and `BodyTemplate` properties.

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


* [Pivot Grid Features](features.md)
<!-- * [Pivot Grid Remote Operations](remote-operations.md) -->

<!-- ComponentEnd: PivotGrid -->
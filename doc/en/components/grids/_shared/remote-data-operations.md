---
title: {Platform} {ComponentTitle} Remote Data Operations - {ProductName}
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with {ProductName}.
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Remote Data, Paging, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Remote Data Operations
<!-- Angular -->
The {ProductName} Remote Data Operations feature in {Platform} {ComponentTitle} supports operations such as remote virtualization, remote sorting, remote filtering and others. This allows the developer to perform these tasks on a server, retrieve the data that is produced and display it in the `{ComponentName}`.

## {Platform} {ComponentTitle} Remote Data Operations Overview Example

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/remote-filtering-data", height="550", alt="{Platform} {ComponentTitle} Remote Data Operations Overview Example"`


<!-- end: Angular -->
By default, the `{ComponentName}` uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the `{ComponentName}` by taking advantage of certain inputs and events, which are exposed by the `{ComponentName}`.

<!-- Angular -->

<!-- ComponentStart: Grid -->

## Remote Virtualization

The `{ComponentName}` supports the scenario in which the data chunks are requested from a remote service, exposing the behavior implemented in the `ForOf` directive it uses internally.

To utilize this feature, you need to subscribe to the `DataPreLoad` output so that you make the appropriate request based on the arguments received, as well as set the public `{ComponentName}` property `TotalItemCount` with the respective information coming from the service.

```html
<igx-grid #grid [data]="remoteData | async" [autoGenerate]="false"
          (dataPreLoad)="processData(false)"
          (sortingDone)="processData(true)">
    <igx-column [field]="'ProductID'" [sortable]="true"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitPrice'" [dataType]="'number'" [formatter]="formatCurrency" [sortable]="true"></igx-column>
</igx-grid>
```

```typescript
public ngAfterViewInit() {
    this.grid.isLoading = true;

    this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
            this.grid.totalItemCount = data['@odata.count'];
            this.grid.isLoading = false;
    });
}

public processData(reset) {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }

    this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
        this.grid.sortingExpressions[0], reset, () => {
        this.cdr.detectChanges();
    });
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

When requesting data, you need to utilize the `IForOfState` interface, which provides the `StartIndex` and `ChunkSize` properties.

> [!Note]
>The first `ChunkSize` will always be 0 and should be determined by you based on the specific application scenario.

<!-- end: Angular -->

<!-- Angular -->

### Remote Virtualization Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/data-performance-operations", height="550", alt="{Platform} {ComponentTitle} Remote Data Operations Overview Example"`



<!-- end: Angular -->


## Infinite Scroll

 A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterized by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in `{ComponentName}`.

To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the `StartIndex` and `ChunkSize` properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.




The first thing to do is fetch the first chunk of the data. Setting the `TotalItemCount` property is important, as it allows the grid to size its scrollbar correctly.

<!-- Angular -->
```typescript
public ngAfterViewInit() {
    this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
        if (request.data) {
            this.grid.totalItemCount = this.page * this.pageSize;
            this.grid.data = this._remoteService.getCachedData({startIndex: 0, chunkSize: 10});
            this.totalItems = request.data['@odata.count'];
            this.totalPageCount = Math.ceil(this.totalItems / this.pageSize);
            this.grid.isLoading = false;
        }
    });
}
```

<!-- end: Angular -->

```razor
@code {
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                var grid = this.grid;
                grid.IsLoading = true;
                double dataViewSize = 480.0 / 50.0;
                this.PageSize = Convert.ToInt32(Math.Floor(dataViewSize * 1.5));
                var data = await GetDataRemote(1, this.PageSize);
                this.CachedData = data;
                this.LocalData = this.CachedData;
                grid.TotalItemCount = (this.PageSize * this.Page) + 1;
                double pageCount = Math.Ceiling((double)this.TotalItems / (double)this.PageSize);
                this.TotalPageCount = (int)pageCount;
                grid.IsLoading = false;
                StateHasChanged();
            }

        }
}
```

Additionally, you have to subscribe to the `DataPreLoad` output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.

<!-- Angular -->

```typescript
public handlePreLoad() {
    const isLastChunk = this.grid.totalItemCount ===
                        this.grid.virtualizationState.startIndex + this.grid.virtualizationState.chunkSize;
    // when last chunk reached load another page of data
    if (isLastChunk) {
        if (this.totalPageCount === this.page) {
            this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
            return;
        }
        this.page++;
        this.grid.isLoading = true;
        this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
            if (request.data) {
                this.grid.totalItemCount = Math.min(this.page * this.pageSize, this.totalItems);
                this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
                this.grid.isLoading = false;
            }
        });
    } else {
        this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
    }
}
```
<!-- end: Angular -->

```razor
<IgbGrid AutoGenerate="false"
         Height="480px"
         Name="grid"
         Id="grid"
         Data="LocalData"
         @ref="grid"
         DataPreLoad="OnDataPreLoad">
    <IgbColumn Name="ID"
               Field="ProductID"
               Header="ID">
    </IgbColumn>

    <IgbColumn Name="ProductName"
               Field="ProductName"
               Header="Product Name">
    </IgbColumn>

    <IgbColumn Name="QuantityPerUnit"
               Field="QuantityPerUnit"
               Header="Quantity Per Unit">
    </IgbColumn>

    <IgbColumn Name="UnitPrice"
               Field="UnitPrice"
               Header="Unit Price">
    </IgbColumn>

    <IgbColumn Name="OrderDate"
               Field="OrderDate"
               Header="Order Date">
    </IgbColumn>

    <IgbColumn Name="Discontinued"
               Field="Discontinued"
               Header="Discontinued">
    </IgbColumn>

</IgbGrid>
@code {
        private IgbGrid grid;
        public async void OnDataPreLoad(IgbForOfStateEventArgs e)
        {
            int chunkSize = (int)e.Detail.ChunkSize;
            int startIndex = (int)e.Detail.StartIndex;
            int totalCount = (int)this.grid.TotalItemCount;

            bool isLastChunk = totalCount == startIndex + chunkSize;
            // when last chunk reached load another page of data
            if (isLastChunk)
            {
                if (this.TotalPageCount == this.Page)
                {
                    this.LocalData = this.CachedData.Skip(startIndex).Take(chunkSize).ToList();
                    return;
                }

                // add next page of remote data to cache
                this.grid.IsLoading = true;
                this.Page++;
                var remoteData = await GetDataRemote(this.Page, this.PageSize);
                this.CachedData.AddRange(remoteData);

                var data = this.CachedData.Skip(startIndex).Take(chunkSize);
                this.LocalData = data.ToList();
                this.grid.IsLoading = false;
                this.grid.TotalItemCount = Math.Min(this.Page * this.PageSize, this.TotalItems);
            }
            else
            {
                var data = this.CachedData.Skip(startIndex).Take(chunkSize).ToList();
                this.LocalData = data;
            }
        }
}
```

### Infinite Scroll Demo

`sample="/{ComponentSample}/infinite-scroll", height="550", alt="{Platform} {ComponentTitle} Remote Data Operations Infinite Scroll Example"`




<!-- Angular -->
## Remote Sorting/Filtering

To provide remote sorting and filtering, you need to subscribe to the `DataPreLoad`, `SortingExpressionsChange` and `FilteringExpressionsTreeChange` outputs, so that you make the appropriate request based on the arguments received, as well as set the public `{ComponentName}` property `TotalItemCount` with the respective information coming from the service.

We will also take advantage of the **rxjs** `debounceTime` function, which emits a value from the source Observable only after a particular time span has passed without another source emission. This way the remote operation will be triggered only when the specified amount of time has passed without the user interrupting it.

```typescript
const DEBOUNCE_TIME = 300;
public ngAfterViewInit() {
    this.grid.dataPreLoad.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });

    this.grid.filteringExpressionsTreeChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData(true);
    });

    this.grid.sortingExpressionsChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

When remote sorting and filtering are provided, usually we do not need the built-in sorting and filtering of the grid. We can disable them by setting the `SortStrategy` and the `FilterStrategy` inputs of the grid to the `NoopSortingStrategy` and the `NoopFilteringStrategy` respective instances.

```html
<igx-grid #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false'
        [filterStrategy]="noopFilterStrategy"
        [sortStrategy]="noopSortStrategy"
        [allowFiltering]="true">
</igx-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();
public noopSortStrategy = NoopSortingStrategy.instance();
```

```razor
BLAZOR CODE SNIPPET HERE
```

> [!Note]
>When remote data is requested, the filtering operation is case-sensitive.

### Remote Sorting/Filtering Demo

You can see the result of the code from above at the beginning of this article in the Demo section.

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

### Remote Filtering

To provide remote filtering, you need to subscribe to the `FilteringExpressionsTreeChange` output so that you make the appropriate request based on the arguments received. Let's use a flat collection as a data source for our Tree Grid by providing a `PrimaryKey` and a `ForeignKey`.

We will also take advantage of the **rxjs** `debounceTime` function, which emits a value from the source Observable only after a particular time span has passed without another source emission. This way the remote operation will be triggered only when the specified amount of time has passed without the user interrupting it.

```typescript
const DEBOUNCE_TIME = 300;
public ngAfterViewInit() {
    this.treeGrid.filteringExpressionsTreeChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

When remote filtering is provided, usually we do not need the built-in filtering of the Tree Grid. We can disable it by setting the `FilterStrategy` input of the Tree Grid to the `NoopFilteringStrategy` instance.

```html
<igx-tree-grid #treeGrid [data]="remoteData | async" primaryKey="ID" foreignKey="ParentID"
               [autoGenerate]="false"
               [filterStrategy]="noopFilterStrategy"
               [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
</igx-tree-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();

public processData() {
    this.treeGrid.isLoading = true;

    const filteringExpr = this.treeGrid.filteringExpressionsTree;

    this._remoteService.getData(filteringExpr, () => {
        this.treeGrid.isLoading = false;
    });
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

The remote filtering will have to be performed over the flat collection directly. We will also have to include all the parents for any record that matches the filtering condition regardless of whether or not the parents match the filtering (we do this to keep the hierarchy intact). The result can be seen below:

> [!Note]
>When remote data is requested, the filtering operation is case-sensitive.

### Remote Filtering Demo

You can see the result of the code from above at the beginning of this article in the Demo section.

<!-- ComponentEnd: TreeGrid -->

## Unique Column Values Strategy

The list items inside the Excel Style Filtering dialog represent the unique values for the respective column. The `{ComponentName}` generates these values based on its data source by default. In case of remote filtering, the grid data does not contain all the data from the server. In order to provide the unique values manually and load them on demand, we can take advantage of the `{ComponentName}`'s `UniqueColumnValuesStrategy` input. This input is actually a method that provides three arguments:

- `Column`  - The respective column instance.
- `FilteringExpressionsTree` - The filtering expressions tree, which is reduced based on the respective column.
- `Done` - Callback that should be called with the newly generated column values when they are retrieved from the server.

The developer can manually generate the necessary unique column values based on the information, that is provided by the `Column` and the `FilteringExpressionsTree` arguments and then invoke the `Done` callback.

> [!Note]
> When the `UniqueColumnValuesStrategy` input is provided, the default unique values generating process in the excel style filtering will not be used.


```html
<igx-grid #grid1 [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
</igx-grid>
```

```html
<igx-tree-grid #treeGrid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
</igx-tree-grid>
```

```typescript
public columnValuesStrategy = (column: IgxColumnComponent,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

#### Unique Column Values Strategy Demo

`sample="/{ComponentSample}/excel-style-filtering-load-on-demand", height="550", alt="{Platform} {ComponentTitle} Remote Data Operations Unique Column Values Strategy Example"`



```html
<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'Artist'" [data]="data" [filterMode]="'excelStyleFilter'"
                       [uniqueColumnValuesStrategy]="singersColumnValuesStrategy">
    <igx-row-island [primaryKey]="'Album'" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                    [uniqueColumnValuesStrategy]="albumsColumnValuesStrategy">
    </igx-row-island>
</igx-hierarchical-grid>
```

```typescript
public singersColumnValuesStrategy = (column: IgxColumnComponent,
                                      columnExprTree: IFilteringExpressionsTree,
                                      done: (uniqueValues: any[]) => void) => {
// Get specific column data for the singers.
this.remoteValuesService.getColumnData(
    null, 'Singers', column, columnExprTree, uniqueValues => done(uniqueValues));
}

public albumsColumnValuesStrategy = (column: IgxColumnComponent,
                                     columnExprTree: IFilteringExpressionsTree,
                                     done: (uniqueValues: any[]) => void) => {
// Get specific column data for the albums of a specific singer.
const parentRowId = (column.grid as any).foreignKey;
this.remoteValuesService.getColumnData(
    parentRowId, 'Albums', column, columnExprTree, uniqueValues => done(uniqueValues));
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

In order to provide a custom loading template for the excel style filtering, we can use the `ExcelStyleLoading` directive:

```html
<igx-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    <ng-template igxExcelStyleLoading>
        Loading...
    </ng-template>
</igx-grid>
```

```html
<igx-tree-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    <ng-template igxExcelStyleLoading>
        Loading...
    </ng-template>
</igx-tree-grid>
```

```html
<igx-hierarchical-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    <ng-template igxExcelStyleLoading>
        Loading...
    </ng-template>
</igx-hierarchical-grid>
```

```razor
BLAZOR CODE SNIPPET HERE
```

<div class="divider--half"></div>

## Remote Paging

<!-- ComponentStart: Grid -->

The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.

```typescript
@Injectable()
export class RemotePagingService {
    public remoteData: BehaviorSubject<any[]>;
    public dataLenght: BehaviorSubject<number> = new BehaviorSubject(0);
    public url = 'https://www.igniteui.com/api/products';

    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]) as any;
    }

    public getData(index?: number, perPage?: number): any {
        let qS = '';

        if (perPage) {
            qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        }

        this.http
            .get(`${this.url + qS}`).pipe(
                map((data: any) => data)
            ).subscribe((data) => this.remoteData.next(data));
    }

    public getDataLength(): any {
        return this.http.get(this.url).pipe(
            map((data: any) => data.length)
        );
    }
}
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->

The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.

```typescript
@Injectable()
export class RemotePagingService {
    public remoteData: BehaviorSubject<any[]>;
    public dataLenght: BehaviorSubject<number> = new BehaviorSubject(0);
    public url = 'https://www.igniteui.com/api/products';

    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]) as any;
    }

    public getData(index?: number, perPage?: number): any {
        let qS = '';

        if (perPage) {
            qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        }

        this.http
            .get(`${this.url + qS}`).pipe(
                map((data: any) => data)
            ).subscribe((data) => this.remoteData.next(data));
    }

    public getDataLength(): any {
        return this.http.get(this.url).pipe(
            map((data: any) => data.length)
        );
    }
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

<!-- ComponentEnd: HierarchicalGrid -->

After declaring the service, we need to create a component, which will be responsible for the `{ComponentName}` construction and data subscription.

<!-- ComponentStart: Grid -->
```typescript
export class RemotePagingGridSample implements OnInit, AfterViewInit, OnDestroy {
    public data: Observable<any[]>;
    private _dataLengthSubscriber;

    constructor(private remoteService: RemoteService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }
}
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
export class HGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    public data: BehaviorSubject<any> = new BehaviorSubject([]);
    private _dataLengthSubscriber;

    constructor(private remoteService: RemotePagingService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }
}
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

In this sample we will demonstrate how to display a certain number of root records per page no matter how many child records they have. In order to cancel the built-in Tree Grid paging algorithm, which displays a certain number of records no matter their level (root or child), we have to set the `PerPage` property to `Number.MAX_SAFE_INTEGER`.

```html
<igx-tree-grid #treeGrid>
        <igx-paginator [perPage]="maxPerPage">
        </igx-paginator>
```

```typescript
public maxPerPage = Number.MAX_SAFE_INTEGER;
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: TreeGrid -->

Now we can choose between setting-up our own custom paging template or using the default one that the `Paginator` provides. Let's first take a look what is necessary to set-up remote paging by using the default paging template.

### Remote paging with default template

If you want to use the default paging template, you need to set the Paginator's `TotalRecords` property, only then the grid will be able to calculate the total page number based on total remote records. When performing a remote pagination the Paginator will pass to the Grid only the data for the current page, so the grid will not try to paginate the provided data source. That's why we should set Grid's `PagingMode` property to `GridPagingMode.Remote`. Also it is necessary to either subscribe to `PagingDone` or `PerPageChange` events in order to fetch the data from your remote service, it depends on the use case which event will be used.

```html
<igx-grid #grid1 [data]="data | async" [isLoading]="isLoading" [pagingMode]="mode">
    <igx-column field="ID"></igx-column>

    <igx-paginator [(page)]="page" [(perPage)]="perPage"  [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)">
    </igx-paginator>
</igx-grid>
```

```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" [pagingMode]="mode">
    <igx-column field="Name"></igx-column>

    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)">
    </igx-paginator>
</igx-tree-grid>
```

```html
<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'CustomerID'" [pagingMode]="mode">
    <igx-column field="CustomerID"></igx-column>

    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)" (perPageChange)="getFirstPage()">
    </igx-paginator>
</igx-hierarchical-grid>
```

```typescript
public totalCount = 0;
public data: Observable<any[]>;
public mode = GridPagingMode.remote;
public isLoading = true;
@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

private _dataLengthSubscriber;

public set perPage(val: number) {
    this._perPage = val;
    this.paginate(0);
}

public ngOnInit() {
    this.data = this.remoteService.remoteData.asObservable();

    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data: any) => {
        this.totalCount = data;
        this.grid1.isLoading = false;
    });
}

public ngAfterViewInit() {
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);
}

public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

`sample="/{ComponentSample}/remote-paging-template", height="620", alt="{Platform} {ComponentTitle} Remote Paging Default Template Example"`



### Remote Paging with Custom Paginator Content

When we define a custom paginator content we need to define the content in a way to get the data only for the requested page and to pass the correct **skip** and **top** parameters to the remote service according to the selected page and items `PerPage`. We are going to use the `Paginator` in order to ease our example configuration, along with the `PageSizeSelectorComponent` and `PageNavigationComponent` that were introduced - `PageSize` will add the per page dropdown and label and `PageNav` will add the navigation action buttons and labels.

```html
<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(page)]="page"
    [(perPage)]="perPage"
    [selectOptions]="selectOptions"
    (pageChange)="paginate($event)"
    (perPageChange)="perPageChange($event)">
    <igx-paginator-content>
	    <igx-page-size></igx-page-size>
        [This is my custom content]
	    <igx-page-nav></igx-page-nav>
    </igx-paginator-content>
</igx-paginator>
```

```razor
BLAZOR CODE SNIPPET HERE
```

<!-- ComponentStart: Grid -->
```typescript
@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

private _perPage = 15;
private _dataLengthSubscriber: { unsubscribe: () => void; } | undefined;

constructor(private remoteService: RemotePagingService) { }

public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);
}

public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}

public perPageChange(perPage: number) {
    const skip = this.page * perPage;
    const top = perPage;

    this.remoteService.getData(skip, top);
}
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: HierarchicalGrid -->
```typescript
@ViewChild('hierarchicalGrid', { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;

public ngOnInit(): void {
    this._dataLengthSubscriber = this.remoteService.getDataLength(
        { parentID: null, rootLevel: true, key: 'Customers' }).subscribe((length) => {
            this.totalCount = length;
        });
}

public ngAfterViewInit() {
    this.hierarchicalGrid.isLoading = true;
    this._dataSubscriber = this.remoteService.getData({parentID: null, rootLevel: true, key: 'Customers' }, 0, this.perPage)
        .subscribe((data) => {
            this.hierarchicalGrid.isLoading = false;
            this.data.next(data);
        },(error) => {
                this.hierarchicalGrid.emptyGridMessage = error.message;
                this.hierarchicalGrid.isLoading = false;
                this.hierarchicalGrid.cdr.detectChanges();
            }
        );
}
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->
```typescript
public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);
}
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: TreeGrid -->

> [!Note]
> In order for the Remote Paging to be configured properly a `GridPagingMode.Remote` should be set:


```typescript
public mode = GridPagingMode.Remote;
```

```html
<igx-grid #grid1 [data]="data | async" width="100%" height="580px" [pagingMode]="mode"></igx-grid>
```

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data | async" [primaryKey]="'CustomerID'"
    [height]="'550px'" [width]="'100%'" [pagingMode]="mode"></igx-hierarchical-grid>
```

```html
<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content"
        expansionDepth="0" width="100%" height="540px" [pagingMode]="mode"></igx-tree-grid>
```

```razor
BLAZOR CODE SNIPPET HERE
```

The last step will be to declare the paginator content based on your requirements.

```html
<igx-paginator-content>
    <igx-page-size></igx-page-size>
    [This is my custom content]
    <igx-page-nav></igx-page-nav>
</igx-paginator-content>
```

```razor
BLAZOR CODE SNIPPET HERE
```

After all the changes above, the following result will be achieved.

`sample="/{ComponentSample}/remote-paging-data", height="620", alt="{Platform} {ComponentTitle} Remote Paging Custom Template Example"`



<!-- ComponentStart: Grid -->
### Remote Paging with Custom Paginator

In some cases you may want to define your own paging behavior and this is when we can take advantage of the Paging template and add our custom logic along with it. We are going to extend the Remote Paging example in order to demonstrate this:

`sample="/{ComponentSample}/remote-paging-custom", height="620", alt="{Platform} {ComponentTitle} Remote Paging Custom Paging Example"`



Below you will find the methods that we've defined in order to implement our own `next` and `previous` page actions.

```typescript
@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);
}

public nextPage() {
    this.firstPage = false;
    this.page++;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page + 1 >= this.totalPages) {
        this.lastPage = true;
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
}

public previousPage() {
    this.lastPage = false;
    this.page--;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page <= 0) {
        this.firstPage = true;
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
}

public paginate(page: number, recalculate = false) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalculate) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
    this.remoteService.getData(skip, top);
    this.buttonDeselection(this.page, this.totalPages);
}
```

```razor
BLAZOR CODE SNIPPET HERE
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: Grid -->
### Remote Paging with Batch editing

With the examples so far we clarified how to set up the `{ComponentName}` with remote data. Now, let's focus on enabling batch editing for the grid by following the [Batch Editing topic/guide](batch-editing.md).

Before continuing with the sample it is good to clarify the current use case. When pagination is done on the server, the grid contains the data only for the current page and if we add new rows the newly added rows (with Batch Editing) will be concatenated with the current data that the grid contains. Therefore, if the server returns no data for a given page, grid's data source will be consisted only from the newly added rows, which the grid will paginate based on the defined pagination settings (page, perPage).

```typescript
public ngOnInit() {
    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
        this.totalCount = data;
        this._recordOnServer = data;
        this._totalPagesOnServer = Math.floor(this.totalCount / this.perPage);
        this.grid1.isLoading = false;
    });
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

In order to handle this use case properly, we need to implement some custom logic.

First, we have to know the total number of records that are on the server. Given that, we calculate the total number of data pages on the server, and based on its value, we will implement the custom pagination logic.

```typescript
public paginate(page: number) {
    this.grid1.endEdit(true);
    if (page > this._totalPagesOnServer) {
        if (this.page !== this._totalPagesOnServer) {
            const skipEl = this._totalPagesOnServer * this.perPage;
            this.remoteService.getData(skipEl, this.perPage);
        }
        this.page = page - this._totalPagesOnServer;
        this.page = page;
        return;
    } else {
        this.page = 0;
    }
    this.page = page;
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);
}
```

```razor
BLAZOR CODE SNIPPET HERE
```

As you can see in the `Paginate` method, custom pagination logic is performed, based on the `TotalPagesOnServer` value.

#### Remote Paging with Batch Editing Demo

`sample="/{ComponentSample}/remote-paging-batch-editing", height="620", alt="{Platform} {ComponentTitle} Remote Paging Batch Editing Example"`



<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

## Known Issues and Limitations

- When the grid has no `PrimaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

* Row Selection
* Row Expand/collapse
* Row Editing
* Row Pinning

## API References

* `Paginator`
* `{ComponentName}`

## Additional Resources
<!-- ComponentStart: Grid -->
* [Paging](paging.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

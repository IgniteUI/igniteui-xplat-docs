---
title: {Platform} {ComponentTitle} リモート データ操作 - {ProductName}
_description: リモート フィルタリング、リモートソート、リモート スクロールなどの Angular リモート データ操作を使用して、{ProductName} のサーバーからデータをロードします。
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Remote Data, Paging, {Platform}, {ComponentKeywords}, {ProductName}, ページング, リモート データ, インフラジスティックス
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} のリモート データ操作
<!-- Angular -->
{Platform} {ComponentTitle} の {ProductName} リモート データ操作機能は、リモート仮想化、リモート ソート、リモート フィルタリングなどのリモート データ操作をサポートします。これにより、開発者はこれらのタスクをサーバー上で実行し、生成されたデータを取得して `{ComponentName}` に表示できます。

## {Platform} {ComponentTitle} リモート データ操作概要の例

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/remote-filtering-data", height="550", alt="{Platform} {ComponentTitle} リモート データ操作概要の例"`


<!-- end: Angular -->
デフォルトで、`{ComponentName}` は独自のロジックを使用してデータ操作を実行します。

これらのタスクをリモートで実行し、`{ComponentName}` で公開される特定の入力とイベントを使用して `{ComponentName}` に結果のデータを供給できます。

<!-- Angular -->

<!-- ComponentStart: Grid -->

## リモート仮想化

`{ComponentName}` は、データ チャンクがリモート サービスから要求されるシナリオをサポートし、内部で使用される `ForOf` ディレクティブで実装された動作を公開します。

この機能を使用するには、取得した引数に基づいて適切な要求を実行するために `DataPreLoad` 出力にサブスクライブし、サービスから送信される相対する情報とパブリック `{ComponentName}` の `TotalItemCount` プロパティを設定する必要があります。

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

データを要求する際に `StartIndex` および `ChunkSize` プロパティを提供する `IForOfState` インターフェイスを使用できます。

> [!Note]
>最初の `ChunkSize` は常に 0 で、特定のアプリケーション シナリオに基づいて設定する必要があります。

<!-- end: Angular -->

<!-- Angular -->

### リモートの仮想化デモ

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/data-performance-operations", height="550", alt="{Platform} {ComponentTitle} リモート データ操作概要の例"`



<!-- end: Angular -->

<!-- Angular, WebComponents, React -->

## 無限スクロール

 エンドポイントからデータを分割して取得するシナリオの一般的なデザインは、無限スクロールです。データ グリッドの場合、エンドユーザーが一番下までスクロールすることによってトリガーされたロードデータが連続的に増加します。次の段落では、使用可能な API を使用して `{ComponentName}` で無限スクロールを簡単に実現する方法について説明します。

無限スクロールを実装するには、データを分割してフェッチする必要があります。すでにフェッチされたデータはローカルに保存し、チャンクの長さおよび数を決定する必要があります。また、グリッドで最後に表示されるデータ行インデックスを追跡する必要があります。このように、`StartIndex` と `ChunkSize` プロパティを使用して、ユーザーが上にスクロールして既にフェッチしたデータを表示するか、下にスクロールしてエンドポイントからさらにデータをフェッチする必要があるかを決定できます。

<!-- end: Angular, WebComponents, React -->

<!-- Angular -->

最初に、データの最初のチャンクをフェッチするために `ngAfterViewInit` ライフサイクル フックを使用します。`TotalItemCount` プロパティはグリッドがスクロールバーのサイズを正しく設定できるために重要です。

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

```razor
BLAZOR CODE SNIPPET HERE
```

さらに、`DataPreLoad` 出力にサブスクライブする必要があります。これにより、グリッドが現在ロードされているものではなく、異なるチャンクを表示しようとするときに必要なデータを提供できます。イベント ハンドラーで、ローカルに既にキャッシュされている新しいデータをフェッチするか、データを返すかを決定する必要があります。

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

```razor
BLAZOR CODE SNIPPET HERE
```

<!-- end: Angular -->

<!-- WebComponents -->
<!-- end: WebComponents -->



### 無限スクロールのデモ

`sample="/{ComponentSample}/infinite-scroll", height="550", alt="{Platform} {ComponentTitle} リモート データ操作の無限スクロールの例"`




<!-- Angular -->
## リモート ソート/フィルタリング

リモート ソートおよびフィルタリングは、`DataPreLoad`、`SortingExpressionsChange`、および `FilteringExpressionsTreeChange` 出力にサブスクライブし、パブリック `{ComponentName}` プロパティの `TotalItemCount` をサービスから送信される個々の情報とともに設定し、受け取った引数に基づいて適切な要求を作成します。

また、**rxjs** `debounceTime` 関数を使用します。この関数は、特定の期間の経過後、別のソースが出力されない場合にのみ、Observable のソースから値を出力します。この方法では、ユーザーが中断することなく指定された時間が経過した場合にのみ、リモート操作がトリガーされます。

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

リモート ソートとフィルタリングが提供される場合、グリッドの組み込みのソートとフィルタリングは必要ありません。グリッドの `SortStrategy` および `FilterStrategy` 入力をそれぞれのインスタンスの `NoopSortingStrategy` および `NoopFilteringStrategy` に設定して、無効にできます。

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
>リモー トデータが要求された場合、フィルタリング操作が大文字と小文字を区別します。

### リモート ソート/フィルタリングのデモ

このトピックのはじめにあるコードの結果は、デモで確認できます。

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

### リモート フィルタリング

リモート フィルタリングを提供するには、受け取った引数に基づいて適切な要求を行うように `FilteringExpressionsTreeChange` 出力にサブスクライブする必要があります。`PrimaryKey` と `ForeignKey` を提供して、Tree Grid のデータソースとしてフラット コレクションを使用します。

また、**rxjs** `debounceTime` 関数を使用します。この関数は、特定の期間の経過後、別のソースが出力されない場合にのみ、Observable のソースから値を出力します。この方法では、ユーザーが中断することなく指定された時間が経過した場合にのみ、リモート操作がトリガーされます。

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

リモート フィルタリングが提供される場合、ツリー グリッドの組み込みのフィルタリングは必要ありません。ツリー グリッドの `FilterStrategy` 入力を `NoopFilteringStrategy` インスタンスに設定して、無効にできます。

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

リモート フィルタリングは、フラット コレクションで直接実行する必要があります。また、親がフィルターに一致するかどうかにかかわらず、フィルター条件に一致するすべてのレコードにすべての親を含める必要があります (階層をそのままにするためにこれを行います)。結果は以下で確認できます。

> [!Note]
>リモー トデータが要求された場合、フィルタリング操作が大文字と小文字を区別します。

### リモート フィルタリングのデモ

このトピックのはじめにあるコードの結果は、デモで確認できます。

<!-- ComponentEnd: TreeGrid -->

## 一意の列値ストラテジ

Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。`{ComponentName}` は、デフォルトでデータソースに基づいてこれらの値を生成します。リモート フィルタリングの場合、グリッドのデータにはサーバーからのすべてのデータが含まれていません。これらの一意の値を手動で提供し、オンデマンドで読み込むために、`{ComponentName}` の `UniqueColumnValuesStrategy` 入力を利用できます。この入力は、実際には 3 つの引数を提供するメソッドです。

- `Column` - それぞれの列インスタンス。
- `FilteringExpressionsTree` - フィルタリング式ツリー。各列に基づいて削減されます。
- `Done` - サーバーから取得されたときに、新しく生成された列値で呼び出されるコールバック。

開発者は、`Column` と `FilteringExpressionsTree` 引数によって提供される情報に基づいて、必要な一意の列値を手動で生成し、`Done` コールバックを呼び出すことができます。

> [!Note]
> `UniqueColumnValuesStrategy` 入力が提供される場合、Excel スタイル フィルタリングでプロセスを生成するデフォルトの一意の値は使用されません。


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

#### 一意の列値ストラテジーのデモ

`sample="/{ComponentSample}/excel-style-filtering-load-on-demand", height="550", alt="{Platform} {ComponentTitle} リモート データ操作の一意の列値ストラテジー例"`



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

Excel スタイル フィルタリングのカスタム ロード テンプレートを提供するには、`ExcelStyleLoading` ディレクティブを使用できます。

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

## リモート ページング

<!-- ComponentStart: Grid -->

ページング機能はリモート データで処理することもできます。はじめにデータ フェッチングを行うサービスを宣言します。ページ カウントを計算するためすべてのデータ項目のカウントをが必要なため、ロジックをサービスに追加する必要があります。

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

ページング機能はリモート データで処理することもできます。はじめにデータ フェッチングを行うサービスを宣言します。ページ カウントを計算するためすべてのデータ項目のカウントをが必要なため、ロジックをサービスに追加する必要があります。

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

サービスを宣言した後にコンポーネントを作成する必要があり、`{ComponentName}` コンストラクションとデータ サブスクリプションを処理します。

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

このサンプルでは、​​子レコードがいくつあっても、ページごとに一定数のルート レコードを表示する方法を示します。レベル (ルートまたは子) に関係なく一定数のレコードを表示するビルトインの Tree Grid ページング アルゴリズムをキャンセルするには、`PerPage` プロパティを `Number.MAX_SAFE_INTEGER` に設定してください。

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

これで、独自のカスタム ページング テンプレートを設定するか、`Paginator` が提供するデフォルトのテンプレートを使用するかを選択できます。まず、デフォルトのページング テンプレートを使用してリモート ページングを設定するために必要なものを見てみましょう。

### デフォルト テンプレートのリモート ページング

デフォルトのページング テンプレートを使用する場合、`TotalRecords` プロパティを設定する必要があります。それにより、グリッドはリモートの合計レコード数に基づいて合計ページ番号を計算できます。リモートページネーターを実行する場合、グリッドに現在のページのデータのみを渡すため、グリッドは提供されたデータソースのページネーションを試行しません。そのため、`PagingMode` プロパティを `GridPagingMode.Remote` に設定する必要があります。リモート サービスからデータをフェッチするために `PagingDone` または `PerPageChange` イベントにサブスクライブする必要があります。イベントが使用されるユース ケースによって異なります。

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

`sample="/{ComponentSample}/remote-paging-template", height="620", alt="{Platform} {ComponentTitle} リモート ページングのテンプレート テンプレートの例"`



### カスタム ページネーター コンテンツのリモート ページング

カスタム ページネータ コンテンツを定義するときは、要求されたページのデータのみを取得するようにコンテンツを定義し、選択したページと `PerPage` 項目に応じて正しい **skip** および **top** パラメーターをリモート サービスに渡す必要があります。導入された `PageSizeSelectorComponent` と `PageNavigationComponent` とともに、設定例を簡単にするために `Paginator` を使用します。`PageSize` はページごとのドロップダウンとラベルを追加し、`PageNav` はナビゲーション アクション ボタンとラベルを追加します。

```html
<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(page)]="page"
    [(perPage)]="perPage"
    [selectOptions]="selectOptions"
    [displayDensity]="grid1.displayDensity"
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
> リモート ページングを適切に構成するには、`GridPagingMode.Remote` を設定する必要があります。


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

最後の手順は、要件に基づいてページネータのコンテンツを宣言することです。

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

上記すべての設定を完了すると以下のような結果になります。

`sample="/{ComponentSample}/remote-paging-data", height="620", alt="{Platform} {ComponentTitle} リモート ページングのカスタム テンプレートの例"`



<!-- ComponentStart: Grid -->
### カスタム ページネーターのリモート ページング

独自のページング動作を定義するために、ページング テンプレートを使用してカスタム ロジックを追加できます。上記を実証するために、リモート ページングの例を拡張します。

`sample="/{ComponentSample}/remote-paging-custom", height="620", alt="{Platform} {ComponentTitle} リモート ページングのカスタム ページングの例"`



以下に、独自の `next` および `previous` のページ操作を実装するために定義したメソッドを示します。

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
### 一括編集のリモート ページング

これまでの例で、リモート データで `{ComponentName}` を設定する方法を説明しました。次に、[一括編集のトピック](batch-editing.md)に従ってグリッドのバッチ編集を有効にします。

サンプルを続行する前に、現在のユースケースを明確します。ページネーションを実行すると、グリッドには現在のページのデータのみが含まれます。新しい行を追加すると、(一括編集により) 新しく追加された行はグリッドに含まれる現在のデータと連結されます。したがって、サーバーが指定されたページのデータを返さない場合、グリッドのデータソースは新しく追加された行のみで構成され、グリッドは定義されたページ設定 (page, perPage) に基づいてページを作成します。

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

このユースケースを適切に処理するには、カスタム ロジックを実装する必要があります。

最初に、サーバー上にあるレコードの総数を知る必要があります。サーバーのデータ ページの総数を計算し、その値に基づいてカスタム ページネーション ロジックを実装します。

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

`Paginate` メソッドで示されるように、`TotalPagesOnServer` 値に基づいてカスタム ページネーション ロジックが実行されます。

#### 一括編集のリモート ページング デモ

`sample="/{ComponentSample}/remote-paging-batch-editing", height="620", alt="{Platform} {ComponentTitle} リモート ページングの一括編集の例"`



<!-- ComponentEnd: Grid -->
<!-- end: Angular -->

## 既知の問題と制限

- グリッドに `PrimaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合)、データ要求が完了すると、行は次の状態を失います:

* 行の選択
* 行の展開/縮小
* 行の編集
* 行のピン固定

## API リファレンス

* `Paginator`
* `{ComponentName}`

## その他のリソース
<!-- ComponentStart:  Grid -->
* [ページング](paging.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
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

---
title: {Platform} {ComponentTitle} 検索フィルター - {ProductName}
_description: {Platform} {ComponentTitle} は、{ComponentTitle} 一括編集を使用して、基になるデータに影響を与えずにデータ操作を実行します。デモと例をお試しください。
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} 検索フィルター

{Platform} {ComponentTitle} の {ProductName} 検索フィルター機能を使用すると、データのコレクション内の値を検索するプロセスが可能になります。この機能のセットアップが簡単になり、検索入力ボックス、ボタン、キーボード ナビゲーション、その他の便利な機能を使用して実装できるため、ユーザー エクスペリエンスがさらに向上します。ブラウザーにはネイティブなコンテンツ検索機能がありますが、ほとんどの場合で `{ComponentName}` は表示範囲外の行列を仮想化します。そのため、ネイティブ ブラウザー検索は DOM の一部でないため仮想化セルでデータを検索できません。{ComponentName} では、{Platform} Material テーブル ベースのグリッドの拡張により、**検索 API** を使用した**仮想コンテンツ**の検索が可能です。

## {Platform} 検索の例

次の例は、すべての列と行を検索できる検索入力ボックスと、各列の特定のフィルタリング オプションを備えた `{ComponentName}` を表しています。

`sample="/{ComponentSample}/data-searching", height="600", alt="{Platform} {ComponentTitle} 検索の例"`

## {Platform} 検索の使用

### {ComponentTitle} のセットアップ

グリッドを作成してからデータをバインドします。コンポーネントにカスタム スタイルも追加しました。

<!-- ComponentStart: Grid -->
<!-- Angular -->

```html
<{ComponentSelector} #grid1 id="grid1" [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column [field]="'IndustrySector'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'IndustryGroup'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'SectorType'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'KRD'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'MarketNotion'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Date'" dataType="date" [sortable]="true"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

```razor
<{ComponentSelector} @ref=grid Width="100%" Height="480px" AllowFiltering=true AutoGenerate=false Data=marketData DisplayDensity="DisplayDensity.Compact">
    <IgbColumn Field="IndustrySector" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="IndustryGroup" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="SectorType" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="KRD" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
    <IgbColumn Field="MarketNotion" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
</{ComponentSelector}>

@code {
    protected override void OnInitialized()
    {
        base.OnInitialized();
        this.marketData = MarketData.GetData();
    }
}
```

```html
<{ComponentSelector} id="grid1" auto-generate="false" allow-filtering="true">
    <igc-column field="IndustrySector" data-type="string" sortable="true"></igc-column>
    <igc-column field="IndustryGroup" data-type="string" sortable="true"></igc-column>
    <igc-column field="SectorType" data-type="string" sortable="true"></igc-column>
    <igc-column field="KRD" data-type="number" sortable="true"></igc-column>
    <igc-column field="MarketNotion" data-type="number" sortable="true"></igc-column>
    <igc-column field="Date" data-type="date" sortable="true"></igc-column>
</{ComponentSelector}>
```

```tsx
<{ComponentSelector} ref={gridRef} autoGenerate="false" allowFiltering="true" displayDensity="compact" data={data}>
    <IgrColumn field="IndustrySector" dataType="string" sortable="true"></IgrColumn>        
    <IgrColumn field="IndustryGroup" dataType="string" sortable="true"></IgrColumn>        
    <IgrColumn field="SectorType" dataType="string" sortable="true"></IgrColumn>        
    <IgrColumn field="KRD" dataType="number" sortable="true"></IgrColumn>        
    <IgrColumn field="MarketNotion" dataType="number" sortable="true"></IgrColumn>  
</{ComponentSelector}>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- Angular -->
```html
<igx-tree-grid #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" height="480px" width="100%" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
</igx-tree-grid>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<igc-tree-grid id="treeGrid" auto-generate="false" primary-key="ID" foreign-key="ParentID" allow-filtering="true" height="100%" width="100%">
    <igc-column field="Name" data-type="string" sortable="true"></igc-column>        
    <igc-column field="ID" data-type="number" sortable="true"></igc-column>        
    <igc-column field="Title" data-type="string" sortable="true"></igc-column>        
    <igc-column field="Age" data-type="number" sortable="true"></igc-column>        
    <igc-column field="HireDate" data-type="date" sortable="true"></igc-column>        
</igc-tree-grid>
```
```ts
private treeGrid: IgcTreeGridComponent;

constructor() {
    this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    this.treeGrid.data = new EmployeesFlatData();
}
```
<!-- end: WebComponents -->

```tsx
<IgrTreeGrid ref={gridRef} data={data} autoGenerate="false" primaryKey="ID" foreignKey="ParentID" allowFiltering="true" height="100%" width="100%">
    <IgrColumn field="Name" dataType="string" sortable="true"></IgrColumn>        
    <IgrColumn field="ID" dataType="number" sortable="true"></IgrColumn>        
    <IgrColumn field="Title" dataType="string" sortable="true"></IgrColumn>        
    <IgrColumn field="Age" dataType="number" sortable="true"></IgrColumn>        
    <IgrColumn field="HireDate" dataType="date" sortable="true"></IgrColumn>  
</IgrTreeGrid>
```

```razor
<IgbTreeGrid @ref=treeGrid AutoGenerate=false Data=EmployeesFlatData PrimaryKey="ID" ForeignKey="ParentID" AllowFiltering=true Height="100%" Width="100%">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="ID" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
    <IgbColumn Field="Title" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
    <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable=true></IgbColumn>
</IgbTreeGrid>
```
<!-- ComponentEnd: TreeGrid -->

では、`{ComponentName}` の検索 API の準備をしましょう。検索したテキストの保存、また大文字小文字の区別や完全一致 (またはそのいずれか) に使用するプロパティを作成できます。

<!-- ComponentStart: Grid -->
<!-- Angular -->

```typescript
public searchText: string = '';
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```
<!-- end: Angular -->

<!-- WebComponents -->

```typescript
    private grid: IgcGridComponent;    

    private searchBox: IgcInputComponent;
    
    private clearIcon: IgcIconComponent;
    private nextIconButton: IgcIconButtonComponent;
    private prevIconButton: IgcIconButtonComponent;

    private caseSensitiveChip: IgcChipComponent;
    private exactMatchChip: IgcChipComponent;
```

<!-- end: WebComponents -->

```razor
public string searchText = "";
public bool caseSensitive = false;
public bool exactMatch = false;
```

```tsx
const gridRef = useRef<IgrGrid>(null);
const clearIconRef = useRef<IgrIconButton>(null);
const iconButtonPrevRef = useRef<IgrIconButton>(null);
const caseSensitiveChipRef = useRef<IgrChip>(null);
const exactMatchChipRef = useRef<IgrChip>(null);
const iconButtonNextRef = useRef<IgrIconButton>(null);
const [searchText, setSearchText] = useState('')
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```ts
private treeGrid: IgcTreeGridComponent;    

private searchBox: IgcInputComponent;

private icon: IgcIconComponent;
private nextIconButton: IgcIconButtonComponent;
private prevIconButton: IgcIconButtonComponent;

private caseSensitiveChip: IgcChipComponent;
private exactMatchChip: IgcChipComponent;
```
<!-- end: WebComponents -->

```razor
private IgbTreeGrid treeGrid;

public string searchText = "";
public bool caseSensitive = false;
public bool exactMatch = false;
```

```tsx
const gridRef = useRef<IgrTreeGrid>(null);
const searchIconRef = useRef<IgrIconButton>(null);
const clearIconRef = useRef<IgrIconButton>(null);
const iconButtonNextRef = useRef<IgrIconButton>(null);
const iconButtonPrevRef = useRef<IgrIconButton>(null);
const caseSensitiveChipRef = useRef<IgrChip>(null);
const exactMatchChipRef = useRef<IgrChip>(null);
const [searchText, setSearchText] = useState('');
```
<!-- ComponentEnd: TreeGrid -->

### {Platform} 検索ボックス入力


<!-- WebComponents -->
検索入力を作成します。input 要素を取得することで、その現在の値を取得できます。これにより、`{ComponentName}` の `FindNext` メソッドと `FindPrev` メソッドを使用して、`SearchText` が出現するすべての箇所をハイライト表示し、(呼び出したメソッドに応じて) 次 / 前の箇所にスクロールできるようになります。
<!-- end: WebComponents -->

<!-- Angular -->
検索入力を作成します。`SearchText` を ngModel として新しく作成した入力へバインドして ngModelChange イベントにサブスクライブします。ユーザーによる各 `SearchText` のすべての変更を検出できます。これによって `{ComponentName}` の `FindNext` と `FindPrev` メソッドを使用して `SearchText` のすべての出現を強調し、次へまたは前 (呼び出すメソッドに基づいて) へスクロールできます。
<!-- end: Angular -->

<!-- Blazor -->
検索入力を作成します。新しく作成した入力の `Value` プロパティに `SearchText` をバインドし、`ValueChanging` イベントをサブスクライブすることで、ユーザーによるすべての `SearchText` の変更を検出できます。これによって `{ComponentName}` の `FindNext` と `FindPrev` メソッドを使用して `SearchText` のすべての出現を強調し、次へまたは前 (呼び出すメソッドに基づいて) へスクロールできます。
<!-- end: Blazor -->

<!-- React -->
検索入力を作成します。`searchText` を新しく作成したinput要素の `value` プロパティにバインドし、`inputOccured` イベントをサブスクライブすることで、ユーザーによるすべての `searchText` の変更を検出できます。これにより、`{ComponentName}` の `findNext` メソッドと `findPrev` メソッドを使用して、`searchText` が出現するすべての箇所をハイライト表示し、(呼び出したメソッドに応じて) 次 / 前の箇所にスクロールできるようになります。
<!-- end: React -->

`FindNext` と `FindPrev` メソッドの両方に 3 つの引数があります。

- `Text`: **string** (検索テキスト)
- (オプション) `CaseSensitive`: **boolean** (検索で完全一致するかどうか、デフォルト値は false)。
- (オプション) `ExactMatch`: **boolean** (検索で完全一致するかどうか、デフォルト値は false)。

完全一致で検索した場合、検索 API は `SearchText` と完全一致 (大文字小文字の区別を含む) するセル値のみ結果としてハイライト表示します。たとえば、文字列 'software' と 'Software' は大文字小文字を区別しない場合は完全一致となります。

上記のメソッドは **number** 値を返します (`{ComponentName}` で指定した文字列が含まれる回数)。

<!-- ComponentStart: Grid -->
<!-- Angular -->
```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
```
<!-- end: Angular -->

```razor
<IgbInput ValueChanging="valueChanging" Value="@searchText" />
```

<!-- WebComponents -->
```html
<igc-input id="searchBox" name="searchBox">
</igc-input>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    this.searchBox = document.getElementById('searchBox') as IgcInputComponent;
    grid.data = new MarketData();
}

public nextSearch(){
    this.grid.findNext(this.searchBox.value, false, false);
}
```
<!-- end: WebComponents -->

```tsx
function handleOnSearchChange(input: IgrInput, event: IgrComponentValueChangedEventArgs) {
    setSearchText(event.detail);
}

function nextSearch() {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}


<IgrInput name="searchBox" value={searchText} inputOcurred={handleOnSearchChange}>
</IgrInput>
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```html
<igc-input id="searchBox" name="searchBox">
</igc-input>
```
```ts
constructor() {
    this.searchBox = document.getElementById('searchBox') as IgcInputComponent;
    this.caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    this.exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;
}

public nextSearch() {
    this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}
```
<!-- end: WebComponents -->

```razor
<IgbInput ValueChanging="OnValueChanging" Value="@searchText" />

public void NextSearch()
{
    this.treeGrid.FindNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

```tsx
function handleOnSearchChange(input: IgrInput, event: IgrComponentValueChangedEventArgs) {
    setSearchText(event.detail);
    gridRef.current.findNext(event.detail, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

function nextSearch() {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}


<IgrInput name="searchBox" value={searchText} inputOcurred={handleOnSearchChange}>
</IgrInput>
```
<!-- ComponentEnd: TreeGrid -->

<!-- Angular -->

### 検索結果の個数を表示

検索で見つかった現在の場所と総個数を示します。グリッドの `LastSearchInfo` プロパティを使用します。このプロパティは、**find** メソッド使用時に自動的に更新されます。

- グリッドの `LastSearchInfo.MatchInfoCache.Length` 値は検索で見つかった個数です。
- グリッドの `LastSearchInfo.ActiveMatchIndex` 値は、現在の一致 (出現) のインデックス位置です。

```html
<div class="resultsText" *ngIf="@@igObjectRef.lastSearchInfo">
    <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length > 0">
        {{ @@igObjectRef.lastSearchInfo.activeMatchIndex + 1 }} of {{ @@igObjectRef.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span>
</div>
```

<!-- end: Angular -->

### 検索ボタンの追加

ボタンの各クリック イベント ハンドラー内で `FindNext` と `FindPrev` メソッドを呼び出して検索や検索結果をナビゲーションするためのボタンを作成します。


<!-- Angular -->
```html
<div class="searchButtons">
    <input type="button" value="Previous" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```
<!-- end: Angular -->

<!-- ComponentStart: Grid -->
```razor
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
    <IgbIcon IconName="prev" Collection="material"/>
</IgbIconButton>
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
    <IgbIcon IconName="next" Collection="material" />
</IgbIconButton>

@code {
    private IgbGrid grid;
    public void PrevSearch()
    {
        this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

<!-- WebComponents -->
```html
<igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
<igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
```
```ts
constructor() {
    var nextIconButton = document.getElementById('nextIconBtn') as IgcIconButtonComponent;
    var prevIconButton = document.getElementById('prevIconBtn') as IgcIconButtonComponent;
    nextIconButton.addEventListener("click", this.nextSearch);
    prevIconButton.addEventListener("click", this.prevSearch);
}
public prevSearch() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    const searchBox = document.getElementById('searchBox') as IgcInputComponent;
    grid.findPrev(searchBox.value, false, false);
}

public nextSearch() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    const searchBox = document.getElementById('searchBox') as IgcInputComponent;
    grid.findNext(searchBox.value, false, false);
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```html
<igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
<igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
```
```ts
constructor() {
    this.nextIconButton = document.getElementById('nextIconBtn') as IgcIconButtonComponent;
    this.prevIconButton = document.getElementById('prevIconBtn') as IgcIconButtonComponent;
    this.nextIconButton.addEventListener("click", this.nextSearch);
    this.prevIconButton.addEventListener("click", this.prevSearch);
}

public prevSearch() {
    this.treeGrid.findPrev(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}

public nextSearch() {
    this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}
```
<!-- end: WebComponents -->

```razor
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
    <IgbIcon IconName="prev" Collection="material"/>
</IgbIconButton>
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
    <IgbIcon IconName="next" Collection="material" />
</IgbIconButton>

@code {
    private IgbTreeGrid treeGrid;

    public void PrevSearch()
    {
        this.treeGrid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```
<!-- ComponentEnd: TreeGrid -->

```tsx
function prevSearch() {
    gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

function nextSearch() {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

<IgrIconButton key="prevIconButton" ref={iconButtonPrevRef} variant="flat" name="prev" collection="material" clicked={prevSearch}>
</IgrIconButton>
<IgrIconButton key="nextIconButton" ref={iconButtonNextRef} variant="flat" name="next" collection="material" clicked={nextSearch}>
</IgrIconButton>
```


### キーボード検索の追加

ユーザーは矢印キーと <kbd>Enter</kbd> キーで結果を移動できます。`PreventDefault` メソッドのデフォルト キャレットの移動を防止する検索入力の **keydown** イベントを処理し、ユーザーが押したキーに基づいて `FindNext`/`FindPrev` メソッドを呼び出します。

<!-- Angular -->
```html
<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
public searchKeyDown(ev) {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
        ev.preventDefault();
        this.@@igObjectRef.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```
<!-- end: Angular -->

<!-- ComponentStart: Grid -->
<!-- WebComponents -->
```html
<input id="search1"/>
```

```typescript
constructor() {
    const search1 = document.getElementById('search1') as HtmlInputElement;
    search1.addEventListener('keydown', this.searchKeyDown);
    search1.addEventListener('change', this.findNext);
}

public findNext(e) {
    const searchText = e.target.value;
    const caseSensitive = false;
    const exactMatch = false;
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.findNext(searchText, caseSensitive, exactMatch)
}

public searchKeyDown(ev) {
    const search1 = document.getElementById('search1') as HtmlInputElement;
    const grid = document.getElementById('grid') as IgcGridComponent;
    if (ev.key === 'Enter') {
        ev.preventDefault();
        grid.findNext(search1.value, false, false);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
        ev.preventDefault();
        grid.findPrev(search1.value, false, false);
    }
}
```
<!-- end: WebComponents -->

```tsx
function searchKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === 'Enter') {
        e.preventDefault();
        gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
    }
}

 <div onKeyDown={searchKeyDown}>
    <IgrInput name="searchBox" value={searchText} inputOcurred={handleOnSearchChange}></IgrInput>
</div>
```

<!-- Blazor -->

ユーザーは<kbd>Enter</kbd> キーで結果を移動できます。これを実現するために、検索の **keydown** イベントを処理し、ユーザーが <kbd>Shift</kbd> キーを押したかどうかに応じて `FindNext`/`FindPrev` メソッドを呼び出すことができます。

<!-- end: Blazor -->

```razor
<IgbInput ValueChanging="valueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown"/>

@code {
    private void OnSearchKeyDown(KeyboardEventArgs evt)
    {
        if (evt.Key == "Enter" && !evt.ShiftKey) {
            this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (evt.Key == "Enter") {
            this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
```html
<igc-input id="searchBox" name="searchBox">
</igc-input>
```
```ts
constructor() {
    this.searchBox = document.getElementById('searchBox') as IgcInputComponent;

    this.searchBox.addEventListener("keydown", (evt) => { this.onSearchKeydown(evt); });
    this.searchBox.addEventListener("igcInput", (evt) => {
        this.treeGrid.findNext(evt.detail, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
    });
}

public onSearchKeydown(evt: KeyboardEvent) {  
    if (evt.key === 'Enter' || evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
    } else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.treeGrid.findPrev(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
    }
}
```
<!-- end: WebComponents -->

```tsx
function searchKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault();
        gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
    }
}

function handleOnSearchChange(input: IgrInput, event: IgrComponentValueChangedEventArgs) {
    setSearchText(event.detail);
    gridRef.current.findNext(event.detail, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

<div onKeyDown={searchKeyDown}>
    <IgrInput name="searchBox" value={searchText} inputOcurred={handleOnSearchChange}></IgrInput>
</div>
```

```razor
<IgbInput ValueChanging="OnValueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown" />

@code {
    private void OnSearchKeyDown(KeyboardEventArgs evt)
    {
        if (evt.Key == "Enter" || evt.Key == "ArrowDown") {
            this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (evt.Key == "ArrowUp") {
            this.treeGrid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public void OnValueChanging(string newValue)
    {
        this.searchText = newValue;
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```
<!-- ComponentEnd: TreeGrid -->

### 大文字と小文字の区別と完全一致

<!-- Angular -->

次に完全一致の検索で大文字と小文字を区別するかどうかをユーザーが選択できるようにします。この目的のために、`CaseSensitive` プロパティと `ExactMatch` プロパティを入力の `Checked` プロパティにそれぞれバインドすることで単純なチェックボックス入力を使用し、プロパティを切り替えて `FindNext` メソッドを呼び出すことで `Change` イベントを処理できます。

<!-- end: Angular -->

<!-- Angular -->
```html
<span>Case sensitive</span>
<input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()">

<span>Exact match</span>
<input type="checkbox" [checked]="exactMatch" (change)="updateExactSearch()">
```

```typescript
public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```
<!-- end: Angular -->

<!-- ComponentStart: Grid -->
<!-- WebComponents -->
次に完全一致の検索で大文字と小文字を区別するかどうかをユーザーが選択できるようにします。この目的のために、単純なチェックボックス入力を使用し、その `change` イベントにバインドして、チェックボックスの `checked` 状態を使用できます。

```html
<span>Case sensitive</span>
<input id="case" type="checkbox">

<span>Exact match</span>
<input id="exact" type="checkbox">
```

```typescript
constructor() {
    const case = document.getElementById("case") as HTMLInputElement;
    const exact = document.getElementById("exact") as HTMLInputElement;
    case.addEventListener("change", this.updateSearch);
    exact.addEventListener("change", this.updateSearch);
}

public updateSearch() {
    const search1 = document.getElementById("search1") as HTMLInputElement;
    const case = document.getElementById("case") as HTMLInputElement;
    const exact = document.getElementById("exact") as HTMLInputElement;
    const grid = document.getElementById("grid") as IgcGridComponent;
    grid.findNext(search1.value, case.checked, exact.checked);
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
<!-- WebComponents -->
次に完全一致の検索で大文字と小文字を区別するかどうかをユーザーが選択できるようにします。この目的のために、単純な選択可能な `Chips` を使用し、`igcSelect` イベントにバインドして、ユーザーがいつチップを操作したかを判断できます。

```html
<igc-chip selectable="true" id="caseSensitiveChip">Case Sensitive</igc-chip>
<igc-chip selectable="true" id="exactMatchChip">Exact Match</igc-chip>
```

```ts
constructor() {
    this.caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    this.exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;

    this.caseSensitiveChip.addEventListener("igcSelect", (evt) => {
        this.treeGrid.findNext(this.searchBox.value, evt.detail, this.exactMatchChip.selected);
    });
    this.exactMatchChip.addEventListener("igcSelect", (evt) => {
        this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, evt.detail);
    });
}
```
<!-- end: WebComponents -->
<!-- ComponentEnd: TreeGrid -->

<!-- Blazor -->

次に完全一致の検索で大文字と小文字を区別するかどうかをユーザーが選択できるようにします。この目的のために、単純な選択可能な `Chips` を使用し、`SelectedChanged` イベントにバインドして、ユーザーがいつチップを操作したかを判断できます。

<!-- end: Blazor -->

```razor
<IgbChip Selectable=true SelectedChanged="UpdateCase">
    Case Sensitive
</IgbChip>
<IgbChip  Selectable=true SelectedChanged="UpdateExactSearch">
    Exact Match
</IgbChip>

@code {
    public void UpdateCase(bool selected) {
        this.caseSensitive = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void UpdateExactSearch(bool selected) {
        this.exactMatch = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```
<!-- React -->
次に完全一致の検索で大文字と小文字を区別するかどうかをユーザーが選択できるようにします。この目的のために、`IgrChip` を使用してその参照を取得し、`selected` プロパティを使用できます。
<!-- end: React -->
```tsx
const caseSensitiveChipRef = useRef<IgrChip>(null);
const exactMatchChipRef = useRef<IgrChip>(null);

function updateSearch() {
    gridRef.current.findNext("searchValue", caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

<IgrChip ref={caseSensitiveChipRef} key="caseSensitiveChip" selectable="true">
    <span key="caseSensitive">Case Sensitive</span>
</IgrChip>
<IgrChip ref={exactMatchChipRef} key="exactMatchChip" selectable="true">
    <span key="exactMatch">Exact Match</span>
</IgrChip>
```

### 保持

`{ComponentName}` のフィルターやソート、レコードの追加や削除をする場合を想定します。そのような処理の後、現在の検索が自動的に更新されて `SearchText` に一致するテキストが保持されます。更に検索がページングで動作し、`{ComponentName}` の `PerPage` プロパティの変更時もハイライト表示が保持されます。

### アイコンの追加

その他のコンポーネントを使用するためにユーザー インターフェイスを作成し、検索バー全体のデザインを向上します。検索入力の左側に検索または削除アイコン、検索オプションのチップ、右側にはマテリアル デザイン アイコンと Ripple スタイルのボタンを組み合わせたナビゲーションを表示できます。入力グループ内のコンポーネントをラップしてより洗練されたデザインにすることができます。

<!-- Angular -->

[**InputGroup**](../input-group.md)、[**Icon**](../icon.md)、[**Ripple**](../ripple.md)、[**Button**](../button.md)、[**Chip**](../chip.md) のモジュールを使用します。

<!-- end: Angular -->

```typescript
import {
    @@igxNameModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxChipsModule
} from 'igniteui-angular';

@NgModule({
    imports: [IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule, IgxChipsModule],
})
export class AppModule {}
```

```typescript
import { defineComponents, IgcInputComponent, IgcChipComponent, IgcIconComponent, IgcIconButtonComponent, registerIconFromText } from "igniteui-webcomponents";

defineComponents(IgcInputComponent, IgcChipComponent, IgcIconComponent, IgcIconButtonComponent);
```

<!-- ComponentStart: Grid -->
```tsx
import { IgrGridModule } from "igniteui-react-grids";
import { IgrChipModule } from "igniteui-react";

const mods: any[] = [IgrGridModule, IgrChipModule];
mods.forEach((m) => m.register());
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```tsx
import { IgrTreeGridModule } from "igniteui-react-grids";
import { IgrChipModule, IgrIconButtonModule, IgrInputModule } from "igniteui-react";

const mods: any[] = [IgrTreeGridModule, IgrChipModule, IgrIconButtonModule, IgrInputModule];
mods.forEach((m) => m.register());
```
<!-- ComponentEnd: TreeGrid -->

<!-- Blazor -->

`Input`、`Icon`、`IconButton`、`Chip` のモジュールを使用します。

<!-- end: Blazor -->

<!-- ComponentStart: Grid -->
```razor
// eg. Program.cs register the following:
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGridModule),
    typeof(IgbInputModule),
    typeof(IgbIconButtonModule),
    typeof(IgbIconModule)
);
```
<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->
```razor
// eg. Program.cs register the following:
builder.Services.AddIgniteUIBlazor(
    typeof(IgbTreeGridModule),
    typeof(IgbInputModule),
    typeof(IgbIconButtonModule),
    typeof(IgbIconModule)
);
```
<!-- ComponentEnd: TreeGrid -->
```razor
@code {
    private IgbIcon searchIconRef { get; set; }
    const string searchIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
    const string prevIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const string nextIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const string clearIcon = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";
    
    protected override void OnAfterRender(bool firstRender)
    {
        if (this.searchIconRef != null && firstRender)
        {
            this.searchIconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.searchIconRef.RegisterIconFromTextAsync("search", searchIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("prev", prevIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("next", nextIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("clear", clearIcon, "material");
            }));
        }
    }
}
```

テンプレートを新しいコンポーネントで更新します。

<!-- Angular -->

[InputGroup](../input-group.md) 内のすべてのコンポーネントをラップします。左側で検索と 削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに `SearchText` を更新し、`{ComponentName}` の `ClearSearch` メソッドを呼び出してハイライト表示をクリアします。

<!-- end: Angular -->

```html
<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
        (keydown)="searchKeyDown($event)" />

    <igx-suffix *ngIf="searchText.length > 0">

    </igx-suffix>
</igx-input-group>
```

<!-- Angular -->
```typescript
public clearSearch() {
    this.searchText = '';
    this.@@igObjectRef.clearSearch();
}
```
<!-- end: Angular -->

<!-- ComponentStart: Grid -->
```html
<igc-input id="searchBox" name="searchBox">
    <igc-icon id="clearIcon" slot="prefix" name="clear" collection="material"></igc-icon>
    <div slot="suffix">
        <igc-chip selectable="true" id="caseSensitiveChip">Case Sensitive</igc-chip>
        <igc-chip selectable="true" id="exactMatchChip">Exact Match</igc-chip>
    </div>
    <div slot="suffix">
        <igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
        <igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
    </div>
</igc-input>
```

<!-- WebComponents -->
```typescript
constructor() {
    const prevIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const nextIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const clearIconText = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

    registerIconFromText("prev", prevIconText, "material");
    registerIconFromText("next", nextIconText, "material");
    registerIconFromText("clear", clearIconText, "material");
}
```
<!-- end: WebComponents -->

```tsx
const prevIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
const nextIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
const clearIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

useEffect(() => {
    if (clearIconRef?.current) {
        clearIconRef.current.registerIconFromText("clear", clearIconText, "material");
    }
    if (iconButtonPrevRef?.current) {
        iconButtonPrevRef.current.registerIconFromText("prev", prevIconText, "material");
    }
    if (iconButtonNextRef?.current) {
        iconButtonNextRef.current.registerIconFromText("next", nextIconText, "material");
    }
}, []);

<IgrInput name="searchBox" value={searchText} inputOcurred={handleOnSearchChange}>
    <div slot="prefix" key="prefix">
        <IgrIconButton key="clearIcon" ref={clearIconRef} variant="flat" name="clear" collection="material" clicked={clearSearch}>
        </IgrIconButton>
    </div>
    <div slot="suffix" key="chipSuffix">
        <IgrChip ref={caseSensitiveChipRef} key="caseSensitiveChip" selectable="true">
        <span key="caseSensitive">Case Sensitive</span>
        </IgrChip>
        <IgrChip ref={exactMatchChipRef} key="exactMatchChip" selectable="true">
        <span key="exactMatch">Exact Match</span>
        </IgrChip>
    </div>
    <div slot="suffix" key="buttonsSuffix">
        <IgrIconButton key="prevIconButton" ref={iconButtonPrevRef} variant="flat" name="prev" collection="material" clicked={prevSearch}>
        </IgrIconButton>
        <IgrIconButton key="nextIconButton" ref={iconButtonNextRef} variant="flat" name="next" collection="material" clicked={nextSearch}>
        </IgrIconButton>
    </div>
</IgrInput>
```

<!-- Blazor -->

`Input` 内のすべてのコンポーネントをラップします。左側で検索と 削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに `SearchText` を更新し、`{ComponentName}` の `ClearSearch` メソッドを呼び出してハイライト表示をクリアします。

<!-- end: Blazor -->
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

`Input` 内のすべてのコンポーネントをラップします。左側で検索と 削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに `SearchText` を更新し、{ComponentName} の `ClearSearch` メソッドを呼び出して強調表示をクリアします。

```html
<igc-input id="searchBox" name="searchBox">
    <igc-icon id="icon" slot="prefix" name="search" collection="material"></igc-icon>
    <div slot="suffix">
        <igc-chip selectable="true" id="caseSensitiveChip">Case Sensitive</igc-chip>
        <igc-chip selectable="true" id="exactMatchChip">Exact Match</igc-chip>
    </div>
    <div slot="suffix">
        <igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
        <igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
    </div>
</igc-input>
```

<!-- WebComponents -->
```typescript
constructor() {
    const prevIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const nextIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const searchIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
    const clearIconText = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

    registerIconFromText('prev', prevIconText, 'material');
    registerIconFromText('next', nextIconText, 'material');
    registerIconFromText('search', searchIconText, 'material');
    registerIconFromText('clear', clearIconText, 'material');

    this.icon = document.getElementById('icon') as IgcIconComponent;
    this.searchBox = document.getElementById('searchBox') as IgcInputComponent;

    this.searchBox.addEventListener('igcInput', (evt) => {
        this.icon.name = evt.detail ? 'clear' : 'search';
    });
    this.icon.addEventListener('click', this.clearSearch);
}

public clearSearch() {
    this.searchBox.value = '';
    this.icon.name = 'search';
    this.treeGrid.clearSearch();
}
```
<!-- end: WebComponents -->

```tsx
const prevIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
const nextIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
const searchIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
const clearIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

useEffect(() => {
    if (searchIconRef?.current) {
        searchIconRef.current.registerIconFromText("search", searchIconText, "material");
        searchIconRef.current.registerIconFromText("clear", clearIconText, "material");
    }
    if (iconButtonPrevRef?.current) {
        iconButtonPrevRef.current.registerIconFromText("prev", prevIconText,"material");
    }
    if (iconButtonNextRef?.current) {
        iconButtonNextRef.current.registerIconFromText("next", nextIconText, "material");
    }
}, []);

function clearSearch() {
  setSearchText('');
  gridRef.current.clearSearch();
}

<IgrInput name="searchBox" value={searchText} inputOcurred={handleOnSearchChange}>
    <div slot="prefix" key="prefix">
        {searchText.length === 0 ? (
          <IgrIconButton key="searchIcon" ref={searchIconRef} variant="flat" name="search" collection="material">
          </IgrIconButton>
        ) : (
          <IgrIconButton key="clearIcon" ref={clearIconRef} variant="flat" name="clear" collection="material" clicked={clearSearch}>
          </IgrIconButton>
        )}        
    </div>
    <div slot="suffix" key="chipSuffix">
        <IgrChip ref={caseSensitiveChipRef} key="caseSensitiveChip" selectable="true">
        <span key="caseSensitive">Case Sensitive</span>
        </IgrChip>
        <IgrChip ref={exactMatchChipRef} key="exactMatchChip" selectable="true">
        <span key="exactMatch">Exact Match</span>
        </IgrChip>
    </div>
    <div slot="suffix" key="buttonsSuffix">
        <IgrIconButton key="prevIconButton" ref={iconButtonPrevRef} variant="flat" name="prev" collection="material" clicked={prevSearch}>
        </IgrIconButton>
        <IgrIconButton key="nextIconButton" ref={iconButtonNextRef} variant="flat" name="next" collection="material" clicked={nextSearch}>
        </IgrIconButton>
    </div>
</IgrInput>
```
<!-- ComponentEnd: TreeGrid -->

```razor
<IgbInput ValueChanging="OnValueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown">
    @if (searchText.Length == 0)
    {
        <IgbIcon @ref="searchIconRef" slot="prefix" IconName="search" Collection="material"/>
    }
    @if (searchText.Length > 0)
    {
        <IgbIcon slot="prefix" IconName="clear" Collection="material" @onclick="ClearSearch"/>
    }

    <div class="chips" slot="suffix">
        <IgbChip Selectable=true SelectedChanged="UpdateCase">
            Case Sensitive
        </IgbChip>
        <IgbChip  Selectable=true SelectedChanged="UpdateExactSearch">
            Exact Match
        </IgbChip>
    </div>
    <div class="searchButtons" slot="suffix">
        <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
            <IgbIcon IconName="prev" Collection="material"/>
        </IgbIconButton>
        <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
            <IgbIcon IconName="next" Collection="material" />
        </IgbIconButton>
    </div>
</IgbInput>

@code {

    public void clearSearch()
    {
        this.searchText = "";
        this.grid.ClearSearchAsync();
    }
}
```

右側の入力グループに以下の目的で別のコンテナーを作成します。

<!-- Angular -->

- 検索結果の表示

```html
<igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="@@igObjectRef.lastSearchInfo">
        <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length > 0">
            {{ @@igObjectRef.lastSearchInfo.activeMatchIndex + 1 }} of {{ @@igObjectRef.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length == 0">
            No results
        </span>
    </div>
</igx-suffix>
```

```html
<igc-suffix >
    <div class="resultsText">
        <span id="results">
        </span>
    </div>
</igc-suffix>
```
```typescript
public showResults() {
    if (this.grid.lastSearchInfo.matchInfoCache.length > 0)  {
        var index = this.grid.lastSearchInfo.activeMatchIndex + 1 ;
        var length = this.grid.lastSearchInfo.matchInfoCache.length;
        document.getElementById('results').innerHTML = index +'of' + length + 'results';
    }
    else if (this.grid.lastSearchInfo.matchInfoCache.length == 0)  {
        document.getElementById('results').innerHTML = 'No results';
    }
}
```

<!-- end: Angular -->

- 以下は `CaseSensitive` と `ExactMatch` を切り替えるチップを表示する方法です。プロパティに基づいて色が変わる 2 つのチップでチェックボックスを 置き換えます。チップをクリックすると、どちらのチップがクリックされたかによって各ハンドラーを呼び出します。

<!-- Angular -->

```html
<div class="chips">
    <igx-chips-area>
        <igx-chip (click)="updateSearch()" [color]="caseSensitive? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
            <span>Case Sensitive</span>
        </igx-chip>
        <igx-chip (click)="updateExactSearch()" [color]="exactMatch? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
            <span>Exact Match</span>
        </igx-chip>
    </igx-chips-area>
</div>
```
<!-- end: Angular -->


<!-- WebComponents -->
```html
<div slot="suffix">
    <igc-chip selectable="true" id="caseSensitiveChip">Case Sensitive</igc-chip>
    <igc-chip selectable="true" id="exactMatchChip">Exact Match</igc-chip>
</div>
```

<!-- ComponentStart: Grid -->
```ts
constructor() {
    const input = document.getElementById("searchBox") as IgcInputComponent;
    input.addEventListener("change", this.updateSearch);
}
public updateSearch() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    const caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    const exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;
    grid.findNext(input.value, caseSensitiveChip.selected, exactMatchChip.selected);
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```ts
constructor() {
    this.caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    this.exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;

    this.caseSensitiveChip.addEventListener('igcSelect', (evt) => {
        this.treeGrid.findNext(this.searchBox.value, evt.detail, this.exactMatchChip.selected);
    });
    this.exactMatchChip.addEventListener('igcSelect', (evt) => {
        this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, evt.detail);
    });
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- end: WebComponents -->

```tsx
<div slot="suffix" key="chipSuffix">
    <IgrChip ref={caseSensitiveChipRef} key="caseSensitiveChip" selectable="true" select={handleCaseSensitiveChange}>
        <span key="caseSensitive">Case Sensitive</span>
    </IgrChip>
    <IgrChip ref={exactMatchChipRef} key="exactMatchChip" selectable="true" select={handleExactMatchChange}>
        <span key="exactMatch">Exact Match</span>
    </IgrChip>
</div>

function handleCaseSensitiveChange(chip: IgrChip, event: IgrComponentBoolValueChangedEventArgs) {
  gridRef.current.findNext(searchText, event.detail, exactMatchChipRef.current.selected);
}
function handleExactMatchChange(chip: IgrChip, event: IgrComponentBoolValueChangedEventArgs) {
  gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, event.detail);
}
```

```razor
    <div class="chips" slot="suffix">
        <IgbChip Selectable=true SelectedChanged="UpdateCase">
            Case Sensitive
        </IgbChip>
        <IgbChip  Selectable=true SelectedChanged="UpdateExactSearch">
            Exact Match
        </IgbChip>
    </div>

@code {
    public void UpdateCase(bool selected) {
        this.caseSensitive = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void UpdateExactSearch(bool selected) {
        this.exactMatch = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

- 検索ナビゲーション ボタンは、マテリアルアイコンを使用して入力を Ripple スタイルボタンにします。click イベントのハンドラーはそのままで `FindNext`/`FindPrev` メソッドを呼び出します。

<!-- Angular -->

```html
<igx-suffix>
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </div>
</igx-suffix>
```
<!-- end: Angular -->


<!-- WebComponents -->

```html
<div slot="suffix">
    <igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
    <igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
</div>
```

```typescript
constructor() {
    const nextIconButton = this.nextIconButton = document.getElementById('nextIconBtn') as IgcIconButtonComponent;
    const prevIconButton = this.prevIconButton = document.getElementById('prevIconBtn') as IgcIconButtonComponent;
    nextIconButton.addEventListener("click", this.nextSearch);
    prevIconButton.addEventListener("click", this.prevSearch);
}
```

<!-- ComponentStart: Grid -->
```ts
public nextSearch() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    const caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    const exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;
    grid.findNext(input.value, caseSensitiveChip.selected, exactMatchChip.selected);
}

public prevSearch() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    const caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    const exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;
    grid.findPrev(input.value, caseSensitiveChip.selected, exactMatchChip.selected);
}
```
<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```ts
public prevSearch() {
    this.treeGrid.findPrev(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}

public nextSearch() {
    this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}
```
<!-- ComponentEnd: TreeGrid -->

<!-- end: WebComponents -->

```tsx
function prevSearch() {
    gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

function nextSearch() {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

<div slot="suffix" key="buttonsSuffix">
    <IgrIconButton key="prevIconButton" ref={iconButtonPrevRef} variant="flat" name="prev" collection="material" clicked={prevSearch}>
    </IgrIconButton>
    <IgrIconButton key="nextIconButton" ref={iconButtonNextRef} variant="flat" name="next" collection="material" clicked={nextSearch}>
    </IgrIconButton>
</div>
```


```razor
<div class="searchButtons" slot="suffix">
    <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
        <IgbIcon IconName="prev" Collection="material"/>
    </IgbIconButton>
    <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
        <IgbIcon IconName="next" Collection="material" />
    </IgbIconButton>
</div>
@code {
    public void PrevSearch()
    {
        this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

## 既知の問題と制限


|制限|説明|
|--- |--- |
|テンプレートを使用したセル内の検索|検索機能のハイライト表示が、デフォルトのセルテンプレートに対してのみ機能する問題。カスタム セル テンプレートを含む列がある場合、ハイライト表示が機能しないため、列フォーマッタなどの代替アプローチを使用するか、`Searchable` (検索可能な) プロパティを false に設定します。|
|セル テキストが切れる問題| セル内のテキストが長すぎるために検索テキストが省略記号によって切れている場合も、セルまでスクロールして一致カウントに含まれますが、ハイライト表示はされません。 |

## API リファレンス

このトピックでは、`{ComponentName}` にカスタム検索バーを実装し、更に検索結果を移動する際の機能を追加しました。アイコン、チップ、入力などその他の {ProductName} も使用しています。以下は検索 API です。

`{ComponentName}` メソッド:
-   `FindNext`
-   `FindPrev`
-   `ClearSearch`
-   `RefreshSearch`

`Column` プロパティ:
-   `Searchable`

その他のコンポーネント (またはそのいずれか) で使用した API:

<!-- Angular -->

* `InputGroup`
* `RippleDirective`
* `ButtonDirective`

<!-- end: Angular -->

* `Icon`
* `Chip`

<!-- Blazor -->

* `Input`
* `IconButton`

<!-- end: Blazor -->

## その他のリソース

* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

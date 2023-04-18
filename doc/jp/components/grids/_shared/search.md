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

{Platform} `{ComponentName}` により、データのコレクション内の値を見つけるプロセスが可能になります。この機能のセットアップが簡単になり、検索入力ボックス、ボタン、キーボード ナビゲーション、その他の便利な機能を使用して実装できるため、ユーザー エクスペリエンスがさらに向上します。ブラウザーにはネイティブなコンテンツ検索機能がありますが、ほとんどの場合で `{ComponentName}` は表示範囲外の行列を仮想化します。そのため、ネイティブ グリッド検索は DOM の一部でないため仮想化セルでデータを検索できません。`{ComponentName}` では、{ProductName} Material テーブル ベースのグリッドの拡張により、**検索 API** を使用した**仮想コンテンツ**の検索が可能です。

## {Platform} 検索の例

次の例は、すべての列と行を検索できる検索入力ボックスと、各列の特定のフィルタリング オプションを備えた `{ComponentName}` を表しています。

`sample="/{ComponentSample}/data-searching", height="600", alt="{Platform} {ComponentTitle} 検索の例"`

## {Platform} 検索の使用

### {ComponentTitle} のセットアップ

グリッドを作成してからデータをバインドします。コンポーネントにカスタム スタイルも追加しました。

<!-- ComponentStart: Grid -->
```html
<igx-grid #grid1 id="grid1" [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column [field]="'IndustrySector'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'IndustryGroup'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'SectorType'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'KRD'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'MarketNotion'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Date'" dataType="date" [sortable]="true"></igx-column>
</igx-grid>
```

```razor
<IgbGrid @ref=grid Width="100%" Height="480px" AllowFiltering=true AutoGenerate=false Data=marketData DisplayDensity="DisplayDensity.Compact">
    <IgbColumn Field="IndustrySector" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="IndustryGroup" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="SectorType" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="KRD" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
    <IgbColumn Field="MarketNotion" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
</IgbGrid>

@code {
    protected override void OnInitialized()
    {
        base.OnInitialized();
        this.marketData = MarketData.GetData();
    }
}
```

```html
<igc-grid id="grid1" auto-generate="false" allow-filtering="true">
    <igc-column field="IndustrySector" data-type="String" sortable="true"></igc-column>
    <igc-column field="IndustryGroup" data-type="String" sortable="true"></igc-column>
    <igc-column field="SectorType" data-type="String" sortable="true"></igc-column>
    <igc-column field="KRD" data-type="Number" sortable="true"></igc-column>
    <igc-column field="MarketNotion" data-type="Number" sortable="true"></igc-column>
    <igc-column field="Date" data-type="Date" sortable="true"></igc-column>
</igc-grid>
```

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->
```html
<igx-tree-grid #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
</igx-tree-grid>
```

```razor
TODO TREEGRID SNIPPET
```

```html
<igc-tree-grid id="treeGrid1" auto-generate="false" primary-key="ID" foreign-key="ParentID" allow-filtering="true">
    <igc-column field="Name" data-type="String" sortable="true"></igc-column>
    <igc-column field="ID" data-type="Number" sortable="true"></igc-column>
    <igc-column field="Title" data-type="String" sortable="true"></igc-column>
    <igc-column field="Age" dataTdata-typeype="Number" sortable="true"></igc-column>
    <igc-column field="HireDate" data-type="Date" sortable="true"></igc-column>
</igc-tree-grid>
```
<!-- ComponentEnd: TreeGrid -->

```css
.grid__wrapper {
    margin: 15px;
}

.offset {
    margin-bottom: 15px;
}

.resultsText {
    font-size: 0.875rem;
}

.chips {
    margin-left: 5px;
}

.searchButtons {
    margin-left: 5px;
}
```

`{ComponentName}` の検索 API を使用します。検索したテキストの保存、また大文字小文字の区別や完全一致 (またはそのいずれか) に使用するプロパティを作成できます。

```typescript
public searchText: string = '';
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```

```razor
public string searchText = "";
public bool caseSensitive = false;
public bool exactMatch = false;
```

### {Platform} 検索ボックス入力

<!-- Angular -->
検索入力を作成します。`SearchText` を ngModel として新しく作成した入力へバインドして ngModelChange イベントにサブスクライブします。ユーザーによる各 `SearchText` のすべての変更を検出できます。これによって `{ComponentName}` の `FindNext` と `FindPrev` メソッドを使用して `SearchText` のすべての出現を強調し、次へまたは前 (呼び出すメソッドに基づいて) へスクロールできます。
<!-- end: Angular -->

<!-- Blazor -->
検索入力を作成します。新しく作成した入力の `Value` プロパティに `SearchText` をバインドし、`ValueChanging` イベントをサブスクライブすることで、ユーザーによるすべての `SearchText` の変更を検出できます。これによって `{ComponentName}` の `FindNext` と `FindPrev` メソッドを使用して `SearchText` のすべての出現を強調し、次へまたは前 (呼び出すメソッドに基づいて) へスクロールできます。
<!-- end: Blazor -->

`FindNext` と `FindPrev` メソッドの両方に 3 つの引数があります。

- `Text`: **string** (検索テキスト)
- (オプション) `CaseSensitive`: **boolean** (検索で完全一致するかどうか、デフォルト値は false)。
- (オプション) `ExactMatch`: **boolean** (検索で完全一致するかどうか、デフォルト値は false)。

完全一致で検索した場合、検索 API は `SearchText` と完全一致 (大文字小文字の区別を含む) するセル値のみ結果として強調表示します。たとえば、文字列 'software' と 'Software' は大文字小文字を区別しない場合は完全一致となります。

上記のメソッドは **number** 値を返します (`{ComponentName}` で指定した文字列が含まれる回数)。

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
<!--searchgrid.component.html-->

<input id="search1" placeholder="Search" />
```
```ts
constructor() {
    var search1 = this.search1 = document.getElementById('search1') as HtmlInputElement;

    this._bind = () => {
        search1.addEventListener('change', searchValue);
    }
    this._bind();
}
public searchValue(e) {
    var searchText = e.target.value;
    var caseSensitive = false;
    var exactMatch = false;
    grid.findNext(searchText, caseSensitive, exactMatch)
}
```

<!-- end: WebComponents -->

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

<!-- Blazor -->

<!-- TO DO -->

<!-- end: Blazor -->

### 検索ボタンの追加

ボタンの各クリック イベント ハンドラー内で `FindNext` と `FindPrev` メソッドを呼び出して検索や検索結果をナビゲーションするためのボタンを作成します。

```html
<div class="searchButtons">
    <input type="button" value="Previous" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```

```razor
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
    <IgbIcon IconName="prev" Collection="material"/>
</IgbIconButton>
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
    <IgbIcon IconName="next" Collection="material" />
</IgbIconButton>

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

<!-- WebComponents -->
```html
<div class="searchButtons">
    <input id="prevBtn" type="button" value="Previous"/>
    <input id="nextBtn" type="button" value="Next"/>
</div>
```
```ts
constructor() {
    var prevBtn = this.prevBtn = document.getElementById('prevBtn') as HtmlInputElement;
    var nextBtn = this.nextBtn = document.getElementById('nextBtn') as HtmlInputElement;

    this._bind = () => {
        prevBtn.addEventListener('change', findPrev);
        nextBtn.addEventListener('change', findPrev);
    }
    this._bind();
}
public findPrev(e) {
    var searchText = e.target.value;
    var caseSensitive = false;
    var exactMatch = false;
    grid.findPrev(searchText, caseSensitive, exactMatch)
}
public findNext(e) {
    var searchText = e.target.value;
    var caseSensitive = false;
    var exactMatch = false;
    grid.findNext(searchText, caseSensitive, exactMatch)
}
```
<!-- end: WebComponents -->

### キーボード検索の追加

<!-- Angular -->

ユーザーは矢印キーと <kbd>Enter</kbd> キーで結果を移動できます。 `PreventDefault` メソッドのデフォルト キャレットの移動を防止する検索入力の **keydown** イベントを処理し、ユーザーが押したキーに基づいて `FindNext`/`FindPrev` メソッドを呼び出します。

<!-- end: Angular -->

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

<!-- WebComponents -->
```html
<input id="search1" placeholder="Search" />
```

```typescript
constructor() {
    var search1 = this.search1 = document.getElementById('search1') as HtmlInputElement;

    this._bind = () => {
        search1.addEventListener('keydown', searchKeyDown);
        search1.addEventListener('change', findNext);
    }
    this._bind();
}

public findNext(e) {
    var searchText = e.target.value;
    var caseSensitive = false;
    var exactMatch = false;
    grid.findNext(searchText, caseSensitive, exactMatch)
}

public searchKeyDown(ev) {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
        ev.preventDefault();
        this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```
<!-- end: WebComponents -->

<!-- Blazor -->

ユーザーは<kbd>Enter</kbd> キーで結果を移動できます。 これを実現するために、検索の **keydown** イベントを処理し、ユーザーが <kbd>Shift</kbd> キーを押したかどうかに応じて `FindNext`/`FindPrev` メソッドを呼び出すことができます。

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

<!-- WebComponents -->
```html
<span>Case sensitive</span>
<input id="case" type="checkbox">

<span>Exact match</span>
<input id="exact" type="checkbox">
```

```typescript
constructor() {
    var case = this.case = document.getElementById('case') as HtmlInputElement;
    var exact = this.exact = document.getElementById('exact') as HtmlInputElement;

    this._bind = () => {
        case.checked = this.caseSensitive;
        exact.checked = this.exactMatch;
        case.addEventListener('change', updateSearch);
        exact.addEventListener('change', updateExactSearch);
    }
    this._bind();
}

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```
<!-- end: WebComponents -->

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

### 保持

`{ComponentName}` のフィルターやソート、レコードの追加や削除をする場合を想定します。そのような処理の後、現在の検索が自動的に更新されて `SearchText` に一致するテキストが保持されます。更に検索がページングで動作し、`{ComponentName}` の `PerPage` プロパティの変更時も強調表示が保持されます。

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
import {
    igcXNameModule,
    IgcXInputGroupModule,
    IgcXIconModule,
    IgcXRippleModule,
    IgcXButtonModule,
    IgcXChipsModule
} from 'igniteui-webcomponents-inputs';

ModuleManager.register(
    IgcXInputGroupModule,
    IgcXIconModule,
    IgcXRippleModule,
    IgcXButtonModule,
    IgcXChipsModule
);
```

<!-- Blazor -->

`Input`、`Icon`、`IconButton`、`Chip` のモジュールを使用します。

<!-- end: Blazor -->

```razor
// eg. Program.cs register the following:
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGridModule),
    typeof(IgbInputModule),
    typeof(IgbIconButtonModule),
    typeof(IgbIconModule)
);

@code {
    protected override void OnInitialized()
    {
        base.OnInitialized();

        this.marketData = MarketData.GetData();
    }
}
```

テンプレートを新しいコンポーネントで更新します。

<!-- Angular -->

[InputGroup](../input-group.md) 内のすべてのコンポーネントをラップします。左側で検索と 削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに `SearchText` を更新し、`{ComponentName}` の `ClearSearch` メソッドを呼び出して強調表示をクリアします。

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

```html
<igc-input-group type="search" class="offset">
    <igc-prefix>
        <igc-icon>search</igx-icon>
        <igc-icon>clear</igx-icon>
    </igc-prefix>

    <input id="search1" placeholder="Search" />

    <igc-suffix>
        <!-- ... -->
    </igc-suffix>
</igc-input-group>
```

<!-- Angular -->
```typescript
public clearSearch() {
    this.searchText = '';
    this.@@igObjectRef.clearSearch();
}
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
public clearSearch() {
    this.searchText = '';
    this.grid.clearSearch();
}
```
<!-- end: WebComponents -->

<!-- Blazor -->

`Input` 内のすべてのコンポーネントをラップします。左側で検索と 削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに `SearchText` を更新し、`{ComponentName}` の `ClearSearch` メソッドを呼び出して強調表示をクリアします。

<!-- end: Blazor -->

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
    private IgbIcon searchIconRef { get; set; }
    const string searchIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
    const string prevIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const string nextIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const string clearIcon = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

    protected override void OnAfterRender(bool firstRender)
    {
        base.OnAfterRender(firstRender);

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
<!-- end: Angular -->

<!-- Blazor -->

<!-- TO DO -->

<!-- end: Blazor -->

<!-- WebComponents -->
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
<!-- end: WebComponents -->

<!-- Angular -->

- 以下は `CaseSensitive` と `ExactMatch` を切り替えるチップを表示する方法です。プロパティに基づいて色が変わる 2 つのチップでチェックボックスを 置き換えます。チップをクリックすると、どちらのチップがクリックされたかによって各ハンドラー `UpdateSearch` または `UpdateExactSearch` を呼び出します。

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

- 検索ナビゲーション ボタンは、マテリアルアイコンを使用して入力を Ripple スタイルボタンにします。click イベントのハンドラーはそのままで `FindNext`/`FindPrev` メソッドを呼び出します。

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
<div class="chips">
    <igc-chips-area>
        <igc-chip id="case">
            <span>Case Sensitive</span>
        </igc-chip>
        <igc-chip id="exact">
            <span>Exact Match</span>
        </igc-chip>
    </igc-chips-area>
</div>
```

```typescript
constructor() {
    var case = this.case = document.getElementById('case') as HtmlInputElement;
    var exact = this.exact = document.getElementById('exact') as HtmlInputElement;

    this._bind = () => {
        case.checked = this.caseSensitive;
        exact.checked = this.exactMatch;
        case.addEventListener('change', updateSearch);
        exact.addEventListener('change', updateExactSearch);
    }
    this._bind();
}

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

```html
<igc-suffix>
    <div class="searchButtons">
        <button id="prevBtn">
            <igc-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button id="nextBtn">
            <igc-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </div>
</igc-suffix>
```
```ts
constructor() {
    var prevBtn = this.prevBtn = document.getElementById('prevBtn') as HtmlInputElement;
    var nextBtn = this.nextBtn = document.getElementById('nextBtn') as HtmlInputElement;

    this._bind = () => {
        prevBtn.addEventListener('change', findPrev);
        nextBtn.addEventListener('change', findPrev);
    }
    this._bind();
}
public findPrev(e) {
    var searchText = e.target.value;
    var caseSensitive = false;
    var exactMatch = false;
    grid.findPrev(searchText, caseSensitive, exactMatch)
}
public findNext(e) {
    var searchText = e.target.value;
    var caseSensitive = false;
    var exactMatch = false;
    grid.findNext(searchText, caseSensitive, exactMatch)
}
```
<!-- end: WebComponents -->

## 既知の問題と制限
<!-- Angular -->

|制限|説明|
|--- |--- |
|テンプレートを使用したセル内の検索|検索機能の強調表示が、デフォルトのセルテンプレートに対してのみ機能する問題。カスタム セル テンプレートを含む列がある場合、強調表示が機能しないため、列フォーマッタなどの代替アプローチを使用するか、`Searchable` (検索可能な) プロパティを false に設定します。|
|リモート仮想化| リモート仮想化の使用時に検索が正しく動作しない問題。|
|セル テキストが切れる問題| セル内のテキストが長すぎるために検索テキストが省略記号によって切れている場合も、セルまでスクロールして一致カウントに含まれますが、強調表示はされません。 |

<!-- end: Angular -->

<!-- Blazor -->

|制限|説明|
|--- |--- |
|テンプレートを使用したセル内の検索|検索機能の強調表示が、デフォルトのセルテンプレートに対してのみ機能する問題。カスタム セル テンプレートを含む列がある場合、強調表示が機能しないため、列フォーマッタなどの代替アプローチを使用するか、`Searchable` (検索可能な) プロパティを false に設定します。|
|セル テキストが切れる問題| セル内のテキストが長すぎるために検索テキストが省略記号によって切れている場合も、セルまでスクロールして一致カウントに含まれますが、強調表示はされません。 |

<!-- end: Blazor -->

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

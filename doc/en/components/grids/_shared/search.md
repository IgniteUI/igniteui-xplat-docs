---
title: {Platform} {ComponentTitle} Search Filter - {ProductName}
_description: Perform data manipulation without affecting the underlying data with {ComponentTitle} Batch Editing, using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Search Filter

The {Platform} `{ComponentName}` search enables the process of finding values in the collection of data. We make it easier to setup this functionality and it can be implemented with search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the `{ComponentName}` virtualizes its columns and rows that are out of view. In these cases, the native grid search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the {ProductName} Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the `{ComponentName}`.

## {Platform} Search Example

The following example represents `{ComponentName}` with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.

`sample="/{ComponentSample}/data-searching", height="600", alt="{Platform} {ComponentTitle} Search Example"`

## {Platform} Search Usage

### {ComponentTitle} Setup

Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

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

Great, and now let's prepare for the search API of our `{ComponentName}`! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

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

### {Platform} Search Box Input


<!-- WebComponents -->
Now let's create our search input!  By getting the input element we can get its current value. This will allow us to use the `{ComponentName}`'s `FindNext` and `FindPrev` methods to highlight all the occurrences of the `SearchText` and scroll to the next/previous one (depending on which method we have invoked).
<!-- end: WebComponents -->

<!-- Angular -->
Now let's create our search input! By binding our `SearchText` as ngModel to our newly created input and subscribe to the ngModelChange event, we can detect every single `SearchText` modification by the user. This will allow us to use the `{ComponentName}`'s `FindNext` and `FindPrev` methods to highlight all the occurrences of the `SearchText` and scroll to the next/previous one (depending on which method we have invoked).
<!-- end: Angular -->

<!-- Blazor -->
Now let's create our search input! By binding our `SearchText` to the `Value` property to our newly created input and subscribe to the `ValueChanging` event, we can detect every single `SearchText` modification by the user. This will allow us to use the `{ComponentName}`'s `FindNext` and `FindPrev` methods to highlight all the occurrences of the `SearchText` and scroll to the next/previous one (depending on which method we have invoked).
<!-- end: Blazor -->

<!-- React -->
Now let's create our search input! By binding our `searchText` to the `value` property to our newly created input and subscribe to the `inputOccured` event, we can detect every single `searchText` modification by the user. This will allow us to use the `{ComponentName}`'s `findNext` and `findPrev` methods to highlight all the occurrences of the `searchText` and scroll to the next/previous one (depending on which method we have invoked).
<!-- end: React -->

Both the `FindNext` and the `FindPrev` methods have three arguments:

- `Text`: **string** (the text we are searching for)
- (optional) `CaseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `ExactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the `SearchText` by taking the case sensitivity into account as well. For example the strings '_software_' and '_Software_' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the `{ComponentName}` contains the given string).

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

<!-- Angular -->

### Display Results Count

Let's also display the position of the current occurrence, along with the total results count! We can do this by using the grid's `LastSearchInfo` property. This property is automatically updated when using the **find** methods.

- The grid's `LastSearchInfo.MatchInfoCache.Length` value will give us the total results count.
- The grid's `LastSearchInfo.ActiveMatchIndex` value will give us the index position of the current occurrence (match).

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

### Add Search Buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the `FindNext` and the `FindPrev` methods inside the buttons' respective click event handlers.


<!-- Angular -->
```html
<div class="searchButtons">
    <input type="button" value="Previous" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```
<!-- end: Angular -->

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

```tsx
function prevSearch() {
    gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

function nextSearch() {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

<IgrIconButton key="prevIconButton" ref={iconButtonPrevRef} variant="flat" iconName="prev" collection="material" clicked={prevSearch}>
</IgrIconButton>
<IgrIconButton key="nextIconButton" ref={iconButtonNextRef} variant="flat" iconName="next" collection="material" clicked={nextSearch}>
</IgrIconButton>
```


### Add Keyboard Search

We can also allow the users to navigate the results by using the keyboard's arrow keys and the <kbd>Enter</kbd> key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the `PreventDefault` method and invoke the `FindNext`/`FindPrev` methods depending on which key the user has pressed.

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

We can also allow the users to navigate the results by using the keyboard's <kbd>Enter</kbd> key. In order to achieve this, we can handle the **keydown** event of our search and invoke the `FindNext`/`FindPrev` methods depending on if the user has pressed <kbd>Shift</kbd> as well or not.

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

### Case Sensitive and Exact Match

<!-- Angular -->

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple checkbox inputs by binding our `CaseSensitive` and `ExactMatch` properties to the inputs' `Checked` properties respectively and handle their `Change` events by toggling our properties and invoking the `FindNext` method.

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
Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple checkbox inputs and bind to its `change` event where we can use the checkbox `checked` state.

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

<!-- Blazor -->

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple selectable `Chips` and bind to the `SelectedChanged` event to determine when the user interacts with them.

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
Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use the `IgrChip` and get its reference and use the `selected` property.
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

### Persistence

What if we would like to filter and sort our `{ComponentName}` or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the `SearchText`! Furthermore, the search will work with paging and will persist the highlights through changes of the `{ComponentName}`'s `PerPage` property.

### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right. We can wrap these components inside an input group for a more refined design.

<!-- Angular -->

To do this, let's go and grab the [**InputGroup**](../input-group.md), [**Icon**](../icon.md),  [**Ripple**](../ripple.md), [**Button**](../button.md) and the [**Chip**](../chip.md) modules.

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

```tsx
import { IgrGridModule } from "igniteui-react-grids";
import { IgrChipModule } from "igniteui-react";

const mods: any[] = [IgrGridModule, IgrChipModule];
mods.forEach((m) => m.register());
```

<!-- Blazor -->

To do this, let's go and grab the `Input`, `Icon`, `IconButton` and the `Chip` modules.

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
```

Finally, let's update our template with the new components!

<!-- Angular -->

We will wrap all of our components inside an [InputGroup](../input-group.md). On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our `SearchText` and invoke the `{ComponentName}`'s `ClearSearch` method to clear the highlights.

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

<!-- Blazor -->

We will wrap all of our components inside an `Input`. On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our `SearchText` and invoke the `{ComponentName}`'s `ClearSearch` method to clear the highlights.

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

    public void clearSearch()
    {
        this.searchText = "";
        this.grid.ClearSearchAsync();
    }
}
```

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
        <IgrIconButton key="clearIcon" ref={clearIconRef} variant="flat" iconName="clear" collection="material" clicked={clearSearch}>
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
        <IgrIconButton key="prevIconButton" ref={iconButtonPrevRef} variant="flat" iconName="prev" collection="material" clicked={prevSearch}>
        </IgrIconButton>
        <IgrIconButton key="nextIconButton" ref={iconButtonNextRef} variant="flat" iconName="next" collection="material" clicked={nextSearch}>
        </IgrIconButton>
    </div>
</IgrInput>
```

On the right in our input group, let's create three separate containers with the following purposes:

<!-- Angular -->

- For displaying the search results.

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

- For displaying a couple of chips that toggle the `CaseSensitive` and the `ExactMatch` properties. We have replaced the checkboxes with two stylish chips that change color based on these properties. Whenever a chip is clicked, we invoke its respective handler.

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

<!-- end: WebComponents -->

```tsx
<div slot="suffix" key="chipSuffix">
    <IgrChip ref={caseSensitiveChipRef} key="caseSensitiveChip" selectable="true">
    <span key="caseSensitive">Case Sensitive</span>
    </IgrChip>
    <IgrChip ref={exactMatchChipRef} key="exactMatchChip" selectable="true">
    <span key="exactMatch">Exact Match</span>
    </IgrChip>
</div>
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

- For the search navigation buttons, we have transformed our inputs into ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the `FindNext`/`FindPrev` methods.

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
<!-- end: WebComponents -->

```tsx
function prevSearch() {
    gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

function nextSearch() {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
}

<div slot="suffix" key="buttonsSuffix">
    <IgrIconButton key="prevIconButton" ref={iconButtonPrevRef} variant="flat" iconName="prev" collection="material" clicked={prevSearch}>
    </IgrIconButton>
    <IgrIconButton key="nextIconButton" ref={iconButtonNextRef} variant="flat" iconName="next" collection="material" clicked={nextSearch}>
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

## Known Limitations


|Limitation|Description|
|--- |--- |
|Searching in cells with a template|The search functionality highlights work only for the default cell templates. If you have a column with custom cell template, the highlights will not work so you should either use alternative approaches, such as a column formatter, or set the `Searchable` property on the column to false.|
|Remote Virtualization| The search will not work properly when using remote virtualization|
|Cells with cut off text| When the text in the cell is too large to fit and the text we are looking for is cut off by the ellipsis, we will still scroll to the cell and include it in the match count, but nothing will be highlighted |

## API References

In this article we implemented our own search bar for the `{ComponentName}` with some additional functionality when it comes to navigating between the search results. We also used some additional {ProductName} components like icons, chips and inputs. The search API is listed below.

`{ComponentName}` methods:
-   `FindNext`
-   `FindPrev`
-   `ClearSearch`
-   `RefreshSearch`

`Column` properties:
-   `Searchable`

Additional components with relative APIs that were used:

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

## Additional Resources

<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
<!-- ComponentEnd:  Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

---
title: {Platform} {ComponentTitle} Search Filter - {ProductName}
_description: Perform data manipulation without affecting the underlying data with {ComponentTitle} Batch Editing, using {Platform} {ComponentTitle}. See demos & examples!
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid"]
---

# {Platform} {ComponentTitle} Search Filter

{Platform} {ComponentTitle} search enables the process of finding values in the collection of data. We make it easier to setup this functionality and it can be implemented with search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the {ComponentTitle} virtualizes its columns and rows that are out of view. In these cases, the native grid search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the {ProductName} Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the {ComponentTitle}. 

## {Platform} Search Example

The following example represents {ComponentTitle} with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-search-sample" alt="{Platform} Search Example">
</code-view>


## {Platform} Search Usage

### {ComponentTitle} Setup
Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

<!-- ComponentStart: Grid -->
```html
<!--searchgrid.component.html-->

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
    <IgbGridColumn Field="IndustrySector" DataType="GridColumnDataType.String1" Sortable=true></IgbGridColumn>
    <IgbGridColumn Field="IndustryGroup" DataType="GridColumnDataType.String1" Sortable=true></IgbGridColumn>
    <IgbGridColumn Field="SectorType" DataType="GridColumnDataType.String1" Sortable=true></IgbGridColumn>
    <IgbGridColumn Field="KRD" DataType="GridColumnDataType.Number" Sortable=true></IgbGridColumn>
    <IgbGridColumn Field="MarketNotion" DataType="GridColumnDataType.Number" Sortable=true></IgbGridColumn>
</IgbGrid>

@code {
    protected override void OnInitialized()
    {
        base.OnInitialized();
        this.marketData = MarketData.GetData();
    }
}
```
<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->
```html
<!--searchgrid.component.html-->

<igx-tree-grid #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
</igx-tree-grid>
```

<!-- TODO razor-->

<!-- ComponentEnd: TreeGrid -->

```css
/* searchgrid.component.css */

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

Great, and now let's prepare for the search API of our {ComponentTitle}! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

```typescript
// searchgrid.component.ts

public searchText: string = '';
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```

```razor
public string searchText = "";
public bool caseSensitive = false;
public bool exactMatch = false;
```

### {Platform} Search Box Input

<!-- Angular -->
Now let's create our search input! By binding our **searchText** as ngModel to our newly created input and subscribe to the ngModelChange event, we can detect every single **searchText** modification by the user. This will allow us to use the {ComponentTitle}'s `FindNext` and `FindPrev` methods to highlight all the occurrences of the **searchText** and scroll to the next/previous one (depending on which method we have invoked).
<!-- end: Angular -->
<!-- Blazor -->
Now let's create our search input! By binding our **searchText** to the `Value` property to our newly created input and subscribe to the `ValueChanging` event, we can detect every single **searchText** modification by the user. This will allow us to use the {ComponentTitle}'s `FindNext` and `FindPrev` methods to highlight all the occurrences of the **searchText** and scroll to the next/previous one (depending on which method we have invoked).
<!-- end: Blazor -->

Both the `FindNext` and the `FindPrev` methods have three arguments:
- `text`: **string** (the text we are searching for)
- (optional) `caseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `exactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the **searchText** by taking the case sensitivity into account as well. For example the strings '_software_' and '_Software_' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the {ComponentTitle} contains the given string).

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
```

```razor
<IgbInput ValueChanging="valueChanging" Value="@searchText" />
```

<!-- Angular -->

### Display Results Count
Let's also display the position of the current occurrence, along with the total results count! We can do this by using the grid's `lastSearchInfo` property. This property is automatically updated when using the **find** methods.

- The `@@igObjectRef.lastSearchInfo.matchInfoCache.length` value will give us the total results count.
- The `@@igObjectRef.lastSearchInfo.activeMatchIndex` value will give us the index position of the current occurrence (match).

```html
<!--searchgrid.component.html-->

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

### Add Search Buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the `FindNext` and the `FindPrev` methods inside the buttons' respective click event handlers.

```html
<!--searchgrid.component.html-->

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

### Add Keyboard Search

<!-- Angular -->
We can also allow the users to navigate the results by using the keyboard's arrow keys and the Enter key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the preventDefault() method and invoke the `FindNext`/`FindPrev` methods depending on which key the user has pressed.
<!-- end: Angular -->

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

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
Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple checkbox inputs by binding our **caseSensitive** and **exactMatch** properties to the inputs' **checked** properties respectively and handle their **change** events by toggling our properties and invoking the `FindNext` method.
<!-- end: Angular -->

```html
<!--searchgrid.component.html-->

<span>Case sensitive</span>
<input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()">

<span>Exact match</span>
<input type="checkbox" [checked]="exactMatch" (change)="updateExactSearch()">
```

```typescript
// searchgrid.component.ts

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

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

### Persistence

What if we would like to filter and sort our {ComponentTitle} or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the **searchText**! Furthermore, the search will work with paging and will persist the highlights through changes of the {ComponentTitle}'s `PerPage` property.

### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right. We can wrap these components inside an input group for a more refined design.

<!-- Angular -->
To do this, let's go and grab the [**InputGroup**](../input-group.md), [**Icon**](../icon.md),  [**Ripple**](../ripple.md), [**Button**](../button.md) and the [**Chip**](../chip.md) modules.
<!-- end: Angular -->

```typescript
// app.module.ts

...
import {
    @@igxNameModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxChipsModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule, IgxChipsModule],
})
export class AppModule {}
```

<!-- Blazor -->
To do this, let's go and grab the `Input`, `Icon`, `IconButton` and the `Chip` modules.
<!-- end: Blazor -->

```razor
@code {
    protected override void OnInitialized()
    {
        base.OnInitialized();

        IgbGridModule.Register(IgniteUIBlazor);
        IgbInputModule.Register(IgniteUIBlazor);
        IgbIconButtonModule.Register(IgniteUIBlazor);
        IgbIconModule.Register(IgniteUIBlazor);

        this.marketData = MarketData.GetData();
    }
}
```

Finally, let's update our template with the new components!

<!-- Angular -->
We will wrap all of our components inside an [**IgxInputGroup**](../input-group.md). On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our **searchText** and invoke the {ComponentTitle}'s `ClearSearch` method to clear the highlights.
<!-- end: Angular -->

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
        (keydown)="searchKeyDown($event)" />

    <igx-suffix *ngIf="searchText.length > 0">
        ...
    </igx-suffix>
</igx-input-group>
```

```typescript
// searchgrid.component.ts

public clearSearch() {
    this.searchText = '';
    this.@@igObjectRef.clearSearch();
}
```

<!-- Blazor -->
We will wrap all of our components inside an `Input`. On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our **searchText** and invoke the {ComponentTitle}'s `ClearSearch` method to clear the highlights.
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

On the right in our input group, let's create three separate containers with the following purposes:

<!-- Angular -->

- For displaying the search results.

```html
<!--searchgrid.component.html-->

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

<!-- Angular -->
- For displaying a couple of chips that toggle the **caseSensitive** and the **exactMatch** properties. We have replaced the checkboxes with two stylish chips that change color based on these properties. Whenever a chip is clicked, we invoke its respective handler - **updateSearch** or **updateExactSearch** depending on which chip has been clicked.

```html
<!--searchgrid.component.html-->

    ...
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
    ...
```

- For the search navigation buttons, we have transformed our inputs into ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the `FindNext`/`FindPrev` methods.

```html
<!--searchgrid.component.html-->

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

## Known Limitations

|Limitation|Description|
|--- |--- |
|Searching in cells with a template|The search functionality highlights work only for the default cell templates. If you have a column with custom cell template, the highlights will not work so you should either use alternative approaches, such as a column formatter, or set the `Searchable` property on the column to false.|
|Remote Virtualization| The search will not work properly when using remote virtualization|
|Cells with cut off text| When the text in the cell is too large to fit and the text we are looking for is cut off by the ellipsis, we will still scroll to the cell and include it in the match count, but nothing will be highlighted |

## API References

In this article we implemented our own search bar for the {ComponentTitle} with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Angular components like icons, chips and inputs. The search API is listed below.

`{ComponentName}` methods:
-   `FindNext`
-   `FindPrev`
-   `ClearSearch`
-   `RefreshSearch`

`ColumnComponent` properties:
-   `Searchable`

Additional components and/or directives with relative APIs that were used:

<!-- Angular -->

* `InputGroupComponent`
* `RippleDirective`
* `ButtonDirective`

<!-- end: Angular -->
* `IconComponent`
* `ChipComponent`
<!-- Blazor -->

* `InputComponent`
* `IconButtonComponent`

<!-- end: Blazor -->

## Additional Resources

* [{ComponentTitle} overview](overview.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

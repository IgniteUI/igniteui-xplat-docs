---
title: {Platform} {ComponentTitle} Sorting - {ProductName}
_description: Get started with the {Platform} sorting feature of {ProductName} {ComponentTitle}! Configure a mix of sortable columns & change the display order of data records.
_keywords: {Platform} sort, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
---

# {Platform} {ComponentTitle} Sorting

In {Platform} `{ComponentName}`, data sorting is enabled on a per-column level, meaning that the `{ComponentName}` can have a mix of sortable and non-sortable columns. Performing {Platform} sort actions enables you to change the display order of the records based on specified criteria.

<!-- Angular -->

> [!Note]
> Up until now, grouping/sorting worked in conjuction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

<!-- end: Angular -->

## {Platform} {ComponentTitle} Sorting Overview Example

<!-- ComponentStart: HierarchicalGrid -->

Additionally there is a custom contextmenu added for sorting using `{ComponentName}`'s `ContextMenu` Output.

<!-- ComponentEnd: HierarchicalGrid -->

`sample="/{ComponentSample}/column-sorting-options", height="550", alt="{Platform} {ComponentTitle} column sorting options"`


This is done via the `Sortable` input. With the `{ComponentName}` sorting, you can also set the `SortingIgnoreCase` property to perform case sensitive sorting:

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

```razor
<IgbColumn Field="Title" Sortable="true"></IgbColumn>
```

```html
<igc-column field="ProductName" header="Product Name" data-type="string" sortable="true"></igc-column>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The `{ComponentName}` provides a solution for this problem by indicating the index of each sorted column.

<!-- ComponentStart: Grid -->

`sample="/{ComponentSample}/column-sorting-indicators", height="550", alt="{Platform} {ComponentTitle} column sorting indicators"`


<!-- ComponentEnd: Grid -->

## Sorting through the API

You can sort any column or a combination of columns through the `{ComponentName}` API using the `{ComponentName}` `Sort` method:

<!-- Angular -->
```typescript
import { SortingDirection } from 'igniteui-angular';
```
<!-- end: Angular -->

<!-- WebComponents -->
```typescript
import { SortingDirection } from 'igniteui-webcomponents-grids';
```
<!-- end: WebComponents -->

<!-- Angular -->
```typescript

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```
<!-- end: Angular -->


<!-- WebComponents -->
```typescript

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort([{ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true }]);

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```
<!-- end: WebComponents -->

```razor
@code {
    this.grid.SortAsync(new IgbSortingExpression[]
        {
            new IgbSortingExpression
            {
                FieldName = "CompanyName",
                Dir = SortingDirection.Asc
            },
            new IgbSortingExpression
            {
                FieldName = "Country",
                Dir = SortingDirection.Asc
            }
        });
}
```

> [!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any `Column` or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the `ClearSort` method:

```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the {ComponentTitle}
this.grid.clearSort();
```

```razor
@code {
    @*Removes the sorting state from the Title column*@
    this.grid.ClearSortAsync("Title");

    @*Removes the sorting state from every column in the Grid*@
    this.grid.ClearSortAsync("");
}
```

> [!Note]
> The `SortStrategy` of the `{ComponentName}` is of different type compared to the `SortStrategy` of the `Column`, since they work in different scopes and expose different parameters.

> [!Note]
> The sorting operation **DOES NOT** change the underlying data source of the `{ComponentName}`.

## Initial Sorting State

It is possible to set the initial sorting state of the `{ComponentName}` by passing an array of sorting expressions to the `SortingExpressions` property of the `{ComponentName}`.

<!-- Angular -->
```typescript
public ngOnInit() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: Angular -->

```razor
@code {
    protected override void OnAfterRender(bool first)
    {
        if (first)
        {
            this.grid.SortingExpressions = new IgbSortingExpression[]{
                new IgbSortingExpression()
                {
                    FieldName = "Title",
                    Dir = SortingDirection.Asc
                }};
        }
    }
}
```

<!-- WebComponents -->
```typescript
public connectedCallback() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```
<!-- end: WebComponents -->

> [!Note]
> If values of type `string` are used by a column of `DataType` `Date`, the `{ComponentName}` won't parse them to `Date` objects and using `{ComponentName}` `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<!-- ComponentStart: Grid -->
<!-- Angular -->
## Remote Sorting

The `{ComponentName}` supports remote sorting, which is demonstrated in the [{ComponentTitle} Remote Data Operations](remote-data-operations.md) topic.

<!-- end: Angular -->

<!-- ComponentEnd: Grid -->

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

<!-- Angular -->
- `IgxSortHeaderIconDirective` – re-templates the sorting icon when no sorting is applied.

```html
<ng-template igxSortHeaderIcon>
    <igx-icon>unfold_more</igx-icon>
</ng-template>
```
<!-- end: Angular -->
- `SortHeaderIconTemplate` – re-templates the sorting icon when no sorting is applied.

```razor
<IgbGrid SortHeaderIconTemplate="SortDefaultTemplate">

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDefaultTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="unfold_more" Collection="material"></IgbIcon>;
    };
}
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.sortHeaderIconTemplate = this.sortHeaderIconTemplate;
}

public sortHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="unfold_more"></igc-icon>`;
}
```

<!-- Angular -->

- `IgxSortAscendingHeaderIconDirective` – re-templates the sorting icon when the column is sorted in ascending order.

```html
<ng-template igxSortAscendingHeaderIcon>
    <igx-icon>expand_less</igx-icon>
</ng-template>
```

<!-- end: Angular -->

- `SortAscendingHeaderIconTemplate` – re-templates the sorting icon when the column is sorted in ascending order.

```razor
<IgbGrid SortAscendingHeaderIconTemplate="SortAscendingTemplate">

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortAscendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_less" Collection="material"></IgbIcon>;
    };
}
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.sortAscendingHeaderIconTemplate = this.sortAscendingHeaderIconTemplate;
}

public sortAscendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_less"></igc-icon>`;
}
```

<!-- Angular -->

- `IgxSortDescendningHeaderIconDirective` – re-templates the sorting icon when the column is sorted in descending order.

```html
<ng-template igxSortDescendingHeaderIcon>
    <igx-icon>expand_more</igx-icon>
</ng-template>
```

<!-- end: Angular -->

- `SortDescendingHeaderIconTemplate` – re-templates the sorting icon when the column is sorted in descending order.


```razor
<IgbGrid SortDescendingHeaderIconTemplate="SortDescendingTemplate">

@code {
    public RenderFragment<IgbGridHeaderTemplateContext> SortDescendingTemplate = (ctx) =>
    {
        return @<IgbIcon Size="SizableComponentSize.Small" IconName="expand_more" Collection="material"></IgbIcon>;
    };
}
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.sortDescendingHeaderIconTemplate = this.sortDescendingHeaderIconTemplate;
}

public sortDescendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_more"></igc-icon>`;
}
```

<!-- Angular -->

## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts the `$sorted-header-icon-color` and `sortable-header-icon-hover-color` parameters.

```scss
$custom-theme: grid-theme(
    $sorted-header-icon-color: #ffb06a,
    $sortable-header-icon-hover-color: black
);
```
The last step is to **include** the component mixins:

```scss
 @include grid($custom-theme);
```

> [!Note]
 >If the component is using an [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```

### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$black-color: black;
$orange-color: #ffb06a;

$custom-palette: palette($primary: $black-color, $secondary: $orange-color);
```

And then with [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: grid-theme(
    $sorted-header-icon-color: color($custom-palette, "secondary", 500),
    $sortable-header-icon-hover-color: color($custom-palette, "primary", 500)
);
```

> [!Note]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [Palettes](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [_light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid):

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        sorted-header-icon-color: (igx-color:('secondary', 500)),
        sortable-header-icon-hover-color: (igx-color:('primary', 500))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([light]({environment:sassApiUrl}/index.html#variable-light-schema) or [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema,
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

`sample="/{ComponentSample}/column-sorting-style", height="550", alt="{Platform} {ComponentTitle} column sorting style"`


> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

<!-- WebComponents, Blazor -->
## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-grid class="grid"></igc-grid>
```

```razor
<IgbGrid class="grid"></IgbGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```
### Demo

`sample="/{ComponentSample}/column-sorting-style", height="550", alt="{Platform} {ComponentTitle} column sorting style"`

<!-- end: WebComponents, Blazor -->

## API References

* `SortingExpression`

## Additional Resources

<!-- ComponentStart:  Grid -->
* [Virtualization and Performance](virtualization.md)
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

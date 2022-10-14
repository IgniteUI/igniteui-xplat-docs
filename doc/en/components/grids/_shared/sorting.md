---
title: {Platform} {ComponentTitle} Sorting - {ProductName}
_description: Get started with the {Platform} sorting feature of {ProductName} {ComponentTitle}! Configure a mix of sortable columns & change the display order of data records.
_keywords: {Platform} sort, {Platform}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Sorting

In {Platform} {ComponentTitle}, data sorting is enabled on a per-column level, meaning that the **{ComponentSelector}** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.


> Note: Up until now, grouping/sorting worked in conjuction with each other. In 13.2 version, a new behavior which decouples gropuing from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

## {Platform} {ComponentTitle} Sorting Overview Example

<!-- ComponentStart: Grid -->

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-sorting-sample"
           github-src="{ComponentSample}/sorting-sample" >
</code-view>

<!-- ComponentEnd: Grid -->


<!-- ComponentStart: TreeGrid -->

Additionally there is a custom contextmenu added for sorting using **{ComponentSelector}**'s `ContextMenu` Output.

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-sorting"
           github-src="{ComponentSample}/sorting" >
</code-view>

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

Additionally there is a custom contextmenu added for sorting using **{ComponentSelector}**'s `ContextMenu` Output.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-sorting"
           github-src="{ComponentSample}/sorting" >

</code-view>
<!-- ComponentEnd: HierarchicalGrid -->
This is done via the `Sortable` input. With the {ComponentTitle} sorting, you can also set the `SortingIgnoreCase` property to perform case sensitive sorting:


<!-- Angular -->
```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```
<!-- end: Angular -->

```razor
<IgbGridColumn Field="Title" Sortable="true"></IgbGridColumn>
```

## Sorting Indicators
Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order. 

The **{ComponentName}** provides a solution for this problem by indicating the index of each sorted column.

<!-- ComponentStart: Grid -->

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-sorting-indicators"
           github-src="{ComponentSample}/sorting-indicators" >
</code-view>

<!-- ComponentEnd: Grid -->

## Sorting through the API

You can sort any column or a combination of columns through the {ComponentTitle} API using the {ComponentTitle} `Sort` method:

<!-- Angular -->
```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```
<!-- end: Angular -->

```razor
@code {
Currently not working
}
```

> [!NOTE]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any `Column` or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the `ClearSort` method:

<!-- Angular -->
```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the {ComponentTitle}
this.grid.clearSort();
```
<!-- end: Angular -->

```razor
@code {
    @*Removes the sorting state from the Title column*@
    this.grid.ClearSortAsync("Title");

    @*Removes the sorting state from every column in the Grid*@
    this.grid.ClearSortAsync("");
}
```

> [!NOTE]
> The `SortStrategy` of the **{ComponentTitle}** is of different type compared to the `SortStrategy` of the **Column**, since they work in different scopes and expose different parameters.

> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the {ComponentTitle}.

## Initial sorting state

It is possible to set the initial sorting state of the {ComponentTitle} by passing an array of sorting expressions to the `SortingExpressions` property of the {ComponentTitle}.

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
        this.grid.SortingExpressions = new IgbSortingExpression[]{
            new IgbSortingExpression()
            {
                FieldName = "Title",
                Dir = SortingDirection.Asc
            }};
    }
}
```

> [!NOTE]
> If values of type `string` are used by a column of `DataType` `Date`, the {ComponentTitle} won't parse them to `Date` objects and using {ComponentTitle} `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<!-- ComponentStart: Grid -->
## Remote Sorting

The {ComponentTitle} supports remote sorting, which is demonstrated in the [{ComponentTitle} Remote Data Operations](remote-data-operations.md) topic.

<!-- ComponentEnd: Grid -->

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following directives are available for templating the sorting indicator for any sorting state (ascending, descending, none):

<!-- Angular -->
- `IgxSortHeaderIconDirective` – re-templates the sorting icon when no sorting is applied.

```html
<ng-template igxSortHeaderIcon>
    <igx-icon>unfold_more</igx-icon>
</ng-template>
```

- `IgxSortAscendingHeaderIconDirective` – re-templates the sorting icon when the column is sorted in ascending order.

```html
<ng-template igxSortAscendingHeaderIcon>
    <igx-icon>expand_less</igx-icon>
</ng-template>
```

- `IgxSortDescendningHeaderIconDirective` – re-templates the sorting icon when the column is sorted in descending order.

```html
<ng-template igxSortDescendingHeaderIcon>
    <igx-icon>expand_more</igx-icon>
</ng-template>
```
<!-- end: Angular -->

Add snippets for templating sorting icons

## Styling

<!-- Angular -->
To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts the `$sorted-header-icon-color` and `sortable-header-icon-hover-color` parameters.

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

>[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$black-color: black;
$orange-color: #ffb06a;

$custom-palette: palette($primary: $black-color, $secondary: $orange-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: grid-theme(
    $sorted-header-icon-color: color($custom-palette, "secondary", 500),
    $sortable-header-icon-hover-color: color($custom-palette, "primary", 500)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid):  

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        sorted-header-icon-color: (igx-color:('secondary', 500)),
        sortable-header-icon-hover-color: (igx-color:('primary', 500))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

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

<!-- end: Angular -->

Add Styling section for Blazor

### Demo

<!-- ComponentStart: Grid -->

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-sorting-styling"
           github-src="{ComponentSample}/sorting-styling" >
</code-view>

<!-- ComponentEnd: Grid -->


<!-- ComponentStart: TreeGrid -->

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-sorting-styling"
           github-src="{ComponentSample}/sorting-styling" >
</code-view>

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-sorting-styling"
           github-src="{ComponentSample}/sorting-styling" >

</code-view>

<!-- ComponentEnd: HierarchicalGrid -->


>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References
* `ISortingExpression`

## Additional Resources

* [{ComponentTitle} overview](overview.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)


Our community is active and always welcoming to new ideas.

* [Ignite UI for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

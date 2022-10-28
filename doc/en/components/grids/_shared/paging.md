---
title: {Platform} {ComponentTitle} Paging - Infragistics
_description: Configure {Platform} pagination and create custom pages in the {Platform} table by Ignite UI, get data for the requested pages with variety of events.
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Paging, {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics
---

# {Platform} {ComponentTitle} Pagination Overview

Pagination is used to split a large set of data into a sequence of pages that have similar content. {Platform} table pagination improves user experience and data interaction. `{ComponentTitle}` pagination is configurable via a separate component projected in the grid tree by defining a `Paginator` tag, similar to adding of a column. As in any {Platform} table, the pagination in the `{ComponentTitle}` supports template for custom pages.

## {Platform} {ComponentTitle} Pagination Example

The following example represents `{ComponentTitle}` pagination and exposes the options usage of items per page and how paging can be enabled. The user can also quickly navigate through the `{ComponentTitle}` pages via "Go to last page" and "Go to first page" buttons.

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-paging-basic"
           github-src="{ComponentSample}/row-paging-basic"
           alt="{Platform} {ComponentTitle} Pagination Example">
</code-view>

<!-- Angular -->

Adding a [Paginator](../paginator.md) component will control whether the feature is present, you can enable/disable it by using a simple `*ngIf` with a toggle property. The `perPage` input controls the visible records per page. Let's update our `{ComponentTitle}` to enable paging:

<!-- end: Angular -->

```html
<igx-grid #grid [data]="data" [height]="'500px'" [width]="'100%'" [displayDensity]="'cosy'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```

```razor
TO-DO GRID CODE SNIPPET
```

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [height]="'500px'" [width]="'100%'" [displayDensity]="'cosy'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-hierarchical-grid>
```

```razor
TO-DO H-GRID CODE SNIPPET
```

```html
<igx-tree-grid #treeGrid [data]="data" [height]="'500px'" [width]="'100%'" [displayDensity]="'cosy'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-tree-grid>
```

```razor
TO-DO TREEGRID CODE SNIPPET
```

```html
<igx-paginator #paginator [totalRecords]="20">
    <igx-paginator-content>
        <div id="numberPager" style="justify-content: center;">
            <button [disabled]="paginator.isFirstPage" (click)="paginator.previousPage()" igxButton="flat">
                PREV
            </button>
            <span>
               Page {{paginator.page}} of {{paginator.totalPages}}
            </span>
            <button [disabled]="paginator.isLastPage" (click)="paginator.nextPage()" igxButton="flat">
                NEXT
            </button>
        </div>
    </igx-paginator-content>
</igx-paginator>
```

```razor
TO-DO CODE SNIPPET
```

<!-- ComponentStart: Grid -->
## Paging with Group By

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process.

Integration between Paging and Group By is described in the [Group By](groupby.md#grid-group-by-with-paging) topic.

<!-- ComponentEnd: Grid -->

## Usage

The `Paginator` component is used along with the `{ComponentName}` component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igx-grid #grid [data]="data">
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="10"
            [selectOptions]="selectOptions" [displayDensity]="grid.displayDensity">
    </igx-paginator>
</igx-grid>
```

```razor
TO-DO GRID CODE SNIPPET
```

```html
<igx-hierarchical-grid>
    <igx-column *ngFor="let c of hColumns" [field]="c.field">
    </igx-column>
    <igx-row-island [key]="'childData'" [autoGenerate]="true">
        <igx-row-island [key]="'childData'" [autoGenerate]="true">
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>
    <igx-row-island [key]="'childData2'" [autoGenerate]="true">
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>

    <igx-paginator></igx-paginator>
</igx-hierarchical-grid>
```

```razor
TO-DO H-GRID CODE SNIPPET
```

```html
<igx-tree-grid #treeGrid [data]="data">
    <igx-paginator #paginator [(page)]="treeGrid.page" [totalRecords]="treeGrid.length" [(perPage)]="10"
            [selectOptions]="selectOptions" [displayDensity]="treeGrid.displayDensity">
    </igx-paginator>
</igx-tree-grid>
```

```razor
TO-DO TREEGRID CODE SNIPPET
```

<!-- ComponentStart: HierarchicalGrid -->
### Paginator Configuration within Child Grids

Due to certain limitations in how the child grids of an `{ComponentTitle}` are implemented and how DI scope works, when defining a paginator component inside the `RowIsland` tags, always make sure to use the `Paginator` directive on the paginator itself. This will make sure that the child grid have the correct paginator instance as a reference:

```html
<igx-hierarchical-grid>
    <igx-row-island>
        <igx-grid-toolbar *igxPaginator>
        </igx-grid-toolbar>
    </igx-row-island>
</igx-hierarchical-grid>
```

```razor
TO-DO H-GRID CODE SNIPPET
```
<!-- ComponentEnd: HierarchicalGrid -->

### Paginator Component Demo

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-paging-options"
           github-src="{ComponentSample}/row-paging-options"
           alt="{Platform} {ComponentTitle} Reusable Paginator Example">
</code-view>

<div class="divider--half"></div>

## Remote Paging

Remote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the `{ComponentTitle}` construction and data subscription. For more detailed information, check the [`Remote Data Operations`](remote-data-operations.md#remote-paging) topic.

<!-- ComponentStart: Grid -->

## Remote Paging with Custom Template

In some cases you may want to define your own paging behavior and this is when we can take advantage of the `PaginatorContent` and add our custom logic along with it. [This section](remote-data-operations.md#remote-paging-with-custom-igx-paginator-content) explains how we are going to extend the Remote Paging example in order to demonstrate this.

<!-- ComponentEnd: Grid -->

<!-- Angular -->

## Pagination Styling in {Platform}

To get started with styling the paginator, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the `PaginatorTheme` and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.

```scss
$dark-paginator: paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

As seen, the `PaginatorTheme` only controls colors for the paging container, but does not affect the buttons in the pager UI. To style those buttons, let's create a new button theme:

```scss
$dark-button: button-theme(
    $icon-color: #FFCD0F,
    $icon-hover-color: #292826,
    $icon-hover-background: #FFCD0F,
    $icon-focus-color: #292826,
    $icon-focus-background: #FFCD0F,
    $disabled-color: #16130C
);
```

In this example we only changed the icon color and background and the button disabled color, but the the `ButtonTheme` provides way more parameters to control the button style.

The last step is to **include** the component mixins, each with its respective theme:

```scss
@include grid-paginator($dark-grid-paginator);
.igx-grid-paginator__pager {
    @include button($dark-button);
}
```

>[!NOTE]
>We scope the `Button` mixin within `.igx-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other buttons in the grid would be affected too.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include paginator($dark-paginator);
        .igx-paginator__pager {
            @include button($dark-button);
        }
    }
}
```

### Defining a Color Palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `Palette` and `Color` functions.

`Palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```

And then with `Color` we can easily retrieve color from the palette.

```scss
$dark-paginator: paginator-theme(
    $palette: $dark-palette,
    $text-color: color($dark-palette, "secondary", 400),
    $background-color: color($dark-palette, "primary", 200),
    $border-color: color($dark-palette, "primary", 500)
);

$dark-button: button-theme(
    $palette: $dark-palette,
    $icon-color: color($dark-palette, "secondary", 700),
    $icon-hover-color: color($dark-palette, "primary", 500),
    $icon-hover-background: color($dark-palette, "secondary", 500),
    $icon-focus-color: color($dark-palette, "primary", 500),
    $icon-focus-background: color($dark-palette, "secondary", 500),
    $disabled-color: color($dark-palette, "primary", 700)
);
```

>[!NOTE]
>The `Color` and `Palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

 Going further with the theming engine, you can build a robust and flexible structure that benefits from [schemas](../themes/sass/schemas.md). A schema is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - `DarkPagination` and `DarkButton` schemas:

```scss
// Extending the dark paginator schema
$dark-paginator-schema: extend($_dark-pagination,
        (
            text-color:(
               color: ("secondary", 400)
            ),
            background-color:(
               color: ("primary", 200)
            ),
            border-color:(
               color:( "primary", 500)
            )
        )
);
// Extending the dark button schema
$dark-button-schema: extend($_dark-button,
        (
            icon-color:(
               color:("secondary", 700)
            ),
            icon-hover-color:(
               color:("primary", 500)
            ),
            icon-hover-background:(
               color:("secondary", 500)
            ),
            icon-focus-color:(
               color:("primary", 500)
            ),
            icon-focus-background:(
               color:("secondary", 500)
            ),
            disabled-color:(
               color:("primary", 700)
            )
        )
);
```

In order to apply our custom schemas we have to **extend** one of the globals `Light` or `Dark`, which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-paginator: $dark-paginator-schema,
    igx-button: $dark-button-schema
));

// Definingpaginator-theme with the global dark schema
$dark-paginator: paginator-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$dark-button: button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Pagination Style Example

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-row-paging-style"
           github-src="{ComponentSample}/row-paging-style"
           alt="{Platform} {ComponentTitle} Paging Style Example">
</code-view>

<div class="divider--half"></div>

<!-- end: Angular -->

## API References
* `{ComponentName}`
* `GridPaginator`

## Additional Resources

* [Paginator](../paginator.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for {Platform} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [Ignite UI for {Platform} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})
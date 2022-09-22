---
title: Multi-column Headers in {Platform} {ComponentTitle} - Infragistics
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Angular grid and combine them into multi headers.
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: []
---

# {ComponentTitle} Multi-column Headers Overview

The `Grid` supports multi-column headers which allow you to group columns by placing them under a common multi-header. Each multi-column headers group could be a representation of combinations between other groups or columns within the Material UI grid.

## {Platform} Grid Multi-column Headers Overview Example

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-multi-column-headers"
           github-src="{ComponentSample}/multi-column-headers"
           alt="{Platform} {ComponentName} Multi-Column Headers Overview Example">
</code-view>

The declaration of multi-column headers is achieved by wrapping a set of columns into an `ColumnGroup` component with `Header` title information passed.

```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="Contact Information">
        <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```

```razor
TO-DO CODE SNIPPET
```

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting `ColumnGroup` leads to the desired result.

```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

```razor
TO-DO CODE SNIPPET
```

Every `ColumnGroup` supports [moving](column-moving.md), [pinning](column-pinning.md) and [hiding](column-hiding.md).
> [!NOTE]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested `column groups` or `columns` is not allowed. <br />
> Moving between `columns` and `column groups` is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.


```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```

```razor
TO-DO CODE SNIPPET
```

## Multi-column Header Template

Each of the column groups of the grid can be templated separately. The column group expects `ng-template` tag decorated with the `igxHeader` directive.
The `ng-template` is provided with the column group object as a context.

```html
<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>    
</igx-column-group>
```

```razor
TO-DO CODE SNIPPET
```

If you want to re-use a single template for several column groups, you could set the `headerTemplate` property of the column group like this:

```html
<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}
</ng-template>

<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">    
</igx-column-group>
<igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">    
</igx-column-group>
```

```razor
TO-DO CODE SNIPPET
```

> [!NOTE]
> If a header is retemplated and the corresponding column group is movable, you have to set the **draggable** attribute to **false** on the templated elements, so that you can handle any of the events that are applied!

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

```razor
TO-DO CODE SNIPPET
```

The following sample demonstrates how to implement collapsible column groups using header templates.

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-multi-column-header-template"
           github-src="{ComponentSample}/multi-column-header-template"
           alt="{Platform} {ComponentName} Multi Column Header Template Sample">
</code-view>

## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the `$header-background`, `$header-text-color`, `$header-border-width`, `$header-border-style` and `$header-border-color` parameters.

```scss
$custom-theme: igx-grid-theme(
    $header-background: #e0f3ff,
    $header-text-color: #e41c77,
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: rgba(0, 0, 0, 0.08)
);
```
The last step is to **include** the component mixins: 

```scss
@include igx-grid($custom-theme);
```

>[!NOTE]
 >If the component is using an [Emulated](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `igx-palette` and `igx-color`functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$light-blue-color: #e0f3ff;
$deep-pink-color: #e41c77;

$custom-palette: igx-palette($primary: $light-blue-color, $deep-pink-color);
```

And then with `igx-color` we can easily retrieve color from the palette.

```scss
$custom-theme: igx-grid-theme(
    $header-background: igx-color($custom-palette, "primary", 500),
    $header-text-color: igx-color($custom-palette, "secondary", 500),
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: igx-color($custom-palette, "grays", 200)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [Palettes](../themes/palette.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [schemas](../themes/schemas.md). A schema is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - `_light-grid`:  

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        header-background: (igx-color:('primary', 500)),
        header-text-color: (igx-color:('secondary', 500)),
        header-border-width: 1px,
        header-border-style: solid,
        header-border-color: (igx-color:('grays', 200))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals `light` or `dark`, which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/{ComponentSample}-multi-column-headers-styling"
           github-src="{ComponentSample}/multi-column-headers-styling"
           alt="{Platform} {ComponentName} Multi Column Headers Styling Sample">
</code-view>

## Known Issues and Limitations

- Using Grid with multi-column headers on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application.

    ```typescript
    import 'core-js/es7/array';
    ```

## API References
<div class="divider--half"></div>

* `IgxGridComponent`
* IgxGridComponent Styles
* `IgxColumnGroupComponent`

<div class="divider--half"></div>

## Additional Resources

<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
* [Group by](groupby.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
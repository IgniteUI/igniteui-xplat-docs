---
title: {Platform} {ComponentTitle} Column Selection - {ProductName}
_description: Learn how to configure column selection with {ProductName} {ComponentTitle}. This makes grid interactions much easier and faster than ever.
_keywords: {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, column selection
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridColumnSelection}
---

# {Platform} {ComponentTitle} Column Selection Overview

The {Platform} {ComponentTitle} Column Selection feature in {ProductName} offers a simplified and Excel-like way to select and highlight an entire column with a single click. It can be enabled through the `columnSelection` input. Thanks to the rich API, the feature allows for easy manipulation of the selection state, data extraction from the selected fractions, data analysis operations, and visualizations.

## {Platform} {ComponentTitle} Column Selection Example

The sample below demonstrates the three types of `{ComponentName}`'s **column selection** behavior. Use the column selection dropdown below to enable each of the available selection modes.

<!-- ComponentStart: Grid -->

*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.

<!-- ComponentEnd: Grid -->

<!-- ComponentStart: TreeGrid -->

*_Unit Price_ and _Discontinued_ are with disabled column selection.

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: HierarchicalGrid -->

*_Photo_ and _Debut_ are with disabled column selection.

<!-- ComponentEnd: HierarchicalGrid -->

`sample="/{ComponentSample}/column-selection-mode", height="570", alt="{Platform} Column Selection Example"`



## Basic Usage

The column selection feature can be enabled through the `ColumnSelection` input, which takes `GridSelectionMode` values.

## Interactions

The default selection mode is `None`. If set to `Single` or `Multiple`, all of the presented columns will be `Selectable`. With that being said, in order to select a column, we just need to click on one, which will mark it as `Selected`. If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!Note]
> The [Multi Column Headers](multi-column-headers.md) feature does not reflect on the `Selectable` input. The `ColumnGroupComponent` is `Selectable`, if at least one of its children has the selection behavior enabled. In addition, the component is marked as `Selected` if all of its `Selectable` descendants are `Selected`.

<!-- ComponentStart: Grid -->

*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

*Under _Personal Details_ Column Group only column _ID_ and _Title_ are selectable.

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

*Under _Location_ Column Group only column _City_ is selectable.

<!-- ComponentEnd: HierarchicalGrid -->


`sample="/{ComponentSample}/column-selection-group", height="570", alt="{Platform} {ComponentTitle} column selection group"`


## Keyboard Combinations

> [!Note]
> The keyboard combinations are available only when the grid `ColumnSelection` input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:
- Multi-column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API Manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as `Selected` by setting the corresponding **setter**.

> [!Note]
> The above statement also applies to the `ColumnGroupComponent`, except that when the `Selected` property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [API References](#api-references) section.

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a `class` for the grid first:

```html
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

```tsx
<{ComponentSelector} className="grid"></{ComponentSelector}>
```

```razor
<{ComponentSelector} class="grid"></{ComponentSelector}>
```

Then set the related CSS properties to this class:


```css
.grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
```

### Demo

`sample="/{ComponentSample}/column-selection-styles", height="570", alt="{Platform} {ComponentTitle} column selection styles"`


<!-- end: WebComponents, Blazor, React -->

<!-- Angular -->

## Styling

Before diving into the styling options, the core module and all component mixins need to be imported.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

> [!Note]
<!-- ComponentStart: Grid -->
>Please note that [row selection](row-selection.md) and [column selection](column-selection.md) can't be manipulated independently. They depend on the same `variables`.
<!-- ComponentEnd: Grid -->

With that being said, let's move on and change the **selection** and **hover** styles. <br/>

Following the simplest approach, let's define our custom **theme**.

<!-- ComponentStart: TreeGrid -->

```scss
$custom-grid-theme: grid-theme(
    $row-selected-background: #011627,
    $row-selected-text-color: #ECAA53,
    $row-selected-hover-background: #011627,
    $header-selected-text-color: #ECAA53,
    $header-selected-background: #011627,
    $expand-icon-color: #ECAA53,
    $expand-icon-hover-color: #B64B80
);
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid -->

```scss
$custom-grid-theme: grid-theme(
    $row-selected-background: #011627,
    $row-selected-text-color: #ECAA53,
    $row-selected-hover-background: #011627,
    $header-selected-text-color: #ECAA53,
    $header-selected-background: #011627
);
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

[grid-theme]({environment:sassApiUrl}/index.html#function-grid-theme) accepts several parameters but those are the five responsible for changing the appearance of all selected columns:
- **$row-selected-background** - sets the background of the selected fraction.
- **$row-selected-text-color** - sets the text color of the selected fraction
- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.
- **$header-selected-text-color** - sets the text color of the selected column header
- **$header-selected-background** - sets the background color of the selected column header.


### Using CSS Variables
The last step is to include the custom `{ComponentSelector}` theme.

```scss
@include css-vars($custom-grid-theme)
```

### Overriding the Base Theme
In order to style components for Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

> [!Note]
>If the component is using the [Emulated](../themes/styles.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. In order to prevent the custom theme from leaking into other components, be sure that you have included the `:host` selector before `::ng-deep`.

```scss
:host {
    ::ng-deep {
        @include grid($custom-column-selection-theme);
    }
}
```

### Demo

<!-- NOTE this sample is differed -->

`sample="/{ComponentSample}/column-selection-styles", height="570", alt="{Platform} {ComponentTitle} column selection styles"`


> [!Note]
>The sample will not be affected by the selected global theme from **Change Theme**.

<!-- end: Angular -->

## API References

The column selection UI has a few more APIs to explore, which are listed below.

* `{ComponentName}`
* `Column`
* `ColumnGroup`

`{ComponentName}` properties:
* `ColumnSelection`
* `SelectedColumns`
* `SelectColumns`
* `DeselectColumns`
* `SelectAllColumns`
* `DeselectAllColumns`

`Column` properties:
* `Selectable`
* `Selected`

`ColumnGroup` properties:
* `Selectable`
* `Selected`

`{ComponentName}` events:
* `OnColumnsSelectionChange`

## Additional Resources

<!-- ComponentStart: Grid -->
* [Selection](selection.md)
* [Cell Selection](cell-selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Virtualization and Performance](virtualization.md)
<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName}  **GitHub**]({GithubLink})

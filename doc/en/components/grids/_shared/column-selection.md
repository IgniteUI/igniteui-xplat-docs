---
title: {Platform} {ComponentTitle} Column Selection - Infragistics
_description: Learn how to configure column selection with {ProductName} {ComponentTitle}. This makes grid interactions much easier and faster than ever.
_keywords: {Platform}, {ComponentTitle}, {ComponentName}, {ProductName}, Infragistics, column selection
mentionedTypes: [{ComponentApiMembers}]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
---

# {Platform} {ComponentTitle} Column Selection Overview
The Column selection feature provides an easy way to select an entire column with a single click. It emphasizes the importance of a particular column by focusing the header cell(s) and everything below. The feature comes with a rich `API` that allows for manipulation of the selection state, data extraction from the selected fractions and data analysis operations and visualizations.

## {Platform} {ComponentTitle} Column Selection Example

The sample below demonstrates the three types of {ComponentTitle}'s **column selection** behavior. Use the _column selection_ dropdown below to enable each of the available selection modes.

<!-- ComponentStart: Grid -->

*_Contact Title_, _City_ and _Address_ columns are with disabled column selection.

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

*_Unit Price_ and _Discontinued_ are with disabled column selection.

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

*_Photo_ and _Debut_ are with disabled column selection.

<!-- ComponentEnd: HierarchicalGrid -->


<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-selection"
           alt="{Platform} Column Selection Example">
</code-view>

## Basic Usage

The column selection feature can be enabled through the `ColumnSelection` input, which takes `GridSelectionMode` values.

## Interactions
The default selection mode is `none`. If set to `single` or `multiple` all of the presented columns will be `Selectable`. With that being said, in order to select a column, we just need to click on one, which will mark it as `Selected`. If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!NOTE]
> [`Multi-column Headers`](multi-column-headers.md) don't reflect on the `Selectable` input. The `ColumnGroupComponent` is `Selectable`, if at least one of its children has the selection behavior enabled. In addition, the component is marked as `Selected` if all of its `Selectable` descendants are `Selected`.

<!-- ComponentStart: Grid -->

*Under _Country Information_ Column Group only column _City_ and _Postal code_ are selectable.

<!-- ComponentEnd: Grid -->
<!-- ComponentStart: TreeGrid -->

*Under _Personal Details_ Column Group only column _ID_ and _Title_ are selectable.

<!-- ComponentEnd: TreeGrid -->
<!-- ComponentStart: HierarchicalGrid -->

*Under _Location_ Column Group only column _City_ is selectable.

<!-- ComponentEnd: HierarchicalGrid -->


<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-group-selection" >
</code-view>

## Keyboard Combinations

> [!NOTE]
> The keyboard combinations are available only when the grid `ColumnSelection` input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:
- Multi-column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API manipulations
The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as `Selected` by setting the corresponding **setter**.

> [!NOTE]
> The above statement also applies to the `ColumnGroupComponent`, except that when the `Selected` property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [`API References`](#api-references) section.

## Styling
Before diving into the styling options, the core module and all component mixins need to be imported.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

```razor
TO DO
```

>[!NOTE]
>Please note that [`row selection`](row-selection.md) and [`column selection`](column-selection.md) can't be manipulated   independently. They depend on the same `variables`.

With that being said, let's move on and change the **selection** and **hover** styles.<br/>
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

```razor
TO DO
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

```razor
TO DO
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

[`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) accepts several parameters but those are the five responsible for changing the appearance of all selected columns:
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

```razor
TO DO
```

### Overriding the Base Theme
In order to style components for Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

<!-- Angular -->

>[!NOTE]
>If the component is using the [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. In order to prevent the custom theme from leaking into other components, be sure that you have included the `:host` selector before `::ng-deep`.

```scss
:host {
    ::ng-deep {
        @include grid($custom-column-selection-theme);
    }
}
```

<!-- end: Angular -->

```razor
TO DO
```

### Demo

<code-view style="height:570px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-column-selection-styles" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## <a name="api-references"></a>API References

The column selection UI has a few more APIs to explore, which are listed below.

* {ComponentName}
* `ColumnComponent`
* `ColumnGroupComponent`

`{ComponentName}` properties:
* `ColumnSelection`
* `SelectedColumns`
* `SelectColumns`
* `DeselectColumns`
* `SelectAllColumns`
* `DeselectAllColumns`

`ColumnComponent` properties:
* `Selectable`
* `Selected`

`ColumnGroupComponent` properties:
* `Selectable`
* `Selected`

`{ComponentName}` events:
* `OnColumnsSelectionChange`

## Additional Resources

* [{ComponentTitle} overview](overview.md)
* [Selection](selection.md)
* [Cell selection](cell-selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Virtualization and Performance](virtualization.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName}  **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

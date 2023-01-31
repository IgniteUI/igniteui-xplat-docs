---
title: {Platform} Data Grid | Column Animations | Infragistics
_description: Learn how to display column animations through events when moving or hiding columns with Infragistics' {ProductName} data table & grid. Check out {ProductName} table tutorials!
_keywords: {Platform} Table, Data Grid, column animations, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Column Animations

The {ProductName} Data Table / Data Grid supports Column Animation during events like Column Hiding or Column Moving.  When Column Animation on the {Platform} data grid is set, the corresponding animation will fire for all of the cells in that column.

## {Platform} Grid Column Animations Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-animation"
           alt="{Platform} Grid Column Animations Example"
           github-src="grids/data-grid/column-animation">
</code-view>

<div class="divider--half"></div>

## Animation Properties

Each column animation property is listed and described below:

- `ColumnAddingAnimationMode`: When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.
- `ColumnExchangingAnimationMode`: When a column is exchanged, you have the option to have the exchanged column header and its cells slide to the left, right, top, or bottom. There are also options to have it fade as well as slide and fade.
- `ColumnHidingAnimationMode`: When a column is hidden, you have the option to have the column header and its cells slide out to the left, right, top, or bottom. There are also options to have it fade out as well as slide and fade out.
- `ColumnMovingAnimationMode`: When a column is moved, you have the option to have the column header and its cells slide over.
- `ColumnPropertyUpdatingAnimationMode`: When a column's property changes, you have the option to have that property change animate by interpolating or deeply interpolating its change.
- `ColumnShowingAnimationMode`: When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.

## Code Snippet

The following demonstrates the implementation of each of the column animations described in this topic:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    columnAddingAnimationMode="SlideToLeft"
    columnExchangingAnimationMode="SlideToRight"
    columnHidingAnimationMode="SlideToTopAndFadeOut"
    columnMovingAnimationMode="SlideOver"
    columnPropertyUpdatingAnimationMode="Interpolate"
    columnShowingAnimationMode="SlideFromBottomAndFadeIn" />
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      column-addingAnimation-mode="SlideToLeft"
      column-exchanging-animation-mode="SlideToRight"
      column-hiding-animation-mode="SlideToTopAndFadeOut"
      column-moving-animation-mode="SlideOver"
      column-property-updating-animation-mode="Interpolate"
      column-showing-animation-mode="SlideFromBottomAndFadeIn">
</igc-data-grid>
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    ColumnAddingAnimationMode="ColumnShowingAnimationMode.SlideFromLeft"
    ColumnExchangingAnimationMode="ColumnExchangingAnimationMode.SlideToRight"
    ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToTopAndFadeOut"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnPropertyUpdatingAnimationMode="ColumnPropertyUpdatingAnimationMode.Interpolate"
    ColumnShowingAnimationMode="ColumnShowingAnimationMode.SlideFromBottomAndFadeIn" />
```

## API References

 - `ColumnAddingAnimationMode`
 - `ColumnExchangingAnimationMode`
 - `ColumnHidingAnimationMode`
 - `ColumnMovingAnimationMode`
 - `ColumnPropertyUpdatingAnimation`
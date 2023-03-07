---
title: {Platform} Data Grid | Real-Time Data Grid and Tables | Load & Save | Infragistics
_description: Use Infragistics' {ProductName} Data Table & Grid which supports loading and saving the layout the user makes.
_keywords: {Platform} Table, Data Grid, cell activation, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Load & Save Layout

The {ProductName} Data Table / Data Grid supports loading and saving the grid layout. This is performed by calling the `LoadLayout` and `SaveLayout` methods of the grid. These features are useful when an end user can move, sort, and group columns, and wants to preserve the state of the grid and be able to recover the layout and resume work at a later time.

## {Platform} Grid Load & Save Layout Example


`sample="/grids/data-grid/load-save-layout", height="600", alt="{Platform} Grid Load & Save Layout Example"`



<div class="divider--half"></div>

## Supported Features

The grid supports saving the following features:

- [Column Visibility](column-chooser.md)
- [Column Pinning](column-pinning.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Column Sorting](column-sorting.md)
- [Column Filtering](column-filtering.md)
- [Row Grouping](row-grouping.md)

## API References

 - `Grid`
 - `LoadLayout`
 - `SaveLayout`
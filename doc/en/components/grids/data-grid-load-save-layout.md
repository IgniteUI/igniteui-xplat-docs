---
title: {Platform} Data Grid | Real-Time Data Grid and Tables | Load & Save | Infragistics
_description: Use Infragistics' {ProductName} Data Table & Grid which supports loading and saving the layout the user makes.
_keywords: {Platform} Table, Data Grid, cell activation, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
---

# {Platform} Grid Load & Save Layout

The {ProductName} Data Table / Data Grid supports loading and saving the grid layout. This is performed by calling the `LoadLayout` and `SaveLayout` methods of the grid. These features are useful when an end user can move, sort, and group columns, and wants to preserve the state of the grid and be able to recover the layout and resume work at a later time.

## {Platform} Grid Load & Save Layout Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-load-save-layout"
           alt="{Platform} Grid Load & Save Layout Example"
           github-src="grids/data-grid/load-save-layout">
</code-view>

<div class="divider--half"></div>

## Supported Features

The grid supports saving the following features:

- [Column Visibility](data-grid-column-chooser.md)
- [Column Pinning](data-grid-column-pinning.md)
- [Column Moving](data-grid-column-moving.md)
- [Column Resizing](data-grid-column-resizing.md)
- [Column Sorting](data-grid-column-sorting.md)
- [Column Filtering](data-grid-column-filtering.md)
- [Row Grouping](data-grid-row-grouping.md)

## API References

 - `Grid`
 - `LoadLayout`
 - `SaveLayout`
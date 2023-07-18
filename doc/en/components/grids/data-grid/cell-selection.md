---
title: {Platform} Data Grid | Cell Selection | Selection | Infragistics
_description: Use cell and row selection of the Infragistics' {Platform} data grid to highlight areas of the table. Learn how to configure single or multiple row selection for the {ProductName} table.
_keywords: {Platform} Table, Data Grid, cell selection, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.GridSelectionMode']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellSelection}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Selection

The {ProductName} Data Table / Data Grid supports single or multiple row and cell selection.

## {Platform} Grid Selection Example


`sample="/grids/data-grid/cell-selection", height="600", alt="{Platform} Grid Selection Example"`



<div class="divider--half"></div>

## Overview

Selection in the {Platform} data grid is enabled on a row and cell level and can be configured by using the `SelectionMode` option of the {Platform} grid. This property takes five different options, listed below:

- `None`: Selection is not enabled.
- `SingleCell`: Selection of a single cell is enabled.
- `SingleRow`: Selection of a single row is enabled.
- `MultipleCell`: Selection of multiple cells is enabled.
- `MultipleRow`: Selection of multiple rows is enabled.
- `RangeCell`: Selection of a range of multiple cells by clicking and dragging is enabled.

`SelectionBehavior` defaults to `ModifierBased`, where only one row or cell is selected at a time and modifier keys (CTRL) are required to multi-select items. `SelectionBehavior` set to `Toggle` will allow multiple rows or cells to be selected on single click only.

`MultipleRow` includes the following functionality:
- Click and drag to select rows
- Shift and click to select multiple rows.
- Shift and press the up/down arrow keys to select multiple rows.

Pressing the space bar toggles selection of active row via `MultipleRow` or `SingleRow`.

## Row Range Selection

The following example demonstrates how to selected or deselected all rows in the grid. Note, `SelectionMode` must be set to MultipleRow.

`sample="/grids/data-grid/row-selection", height="600", alt="{Platform} Grid Selection Example"`



<div class="divider--half"></div>

## API References

 - `ModifierBased`
 - `MultipleCell`
 - `MultipleRow`
 - `RangeCell`
 - `SelectionBehavior`
 - `SelectionMode`
 - `SingleCell`
 - `SingleRow`
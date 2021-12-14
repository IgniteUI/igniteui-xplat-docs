---
title: $Platform$ Data Grid | Cell Selection | Selection | Infragistics
_description: Use cell and row selection of the Infragistics' $Platform$ data grid to highlight areas of the table. Learn how to configure single or multiple row selection for the $ProductName$ table.
_keywords: $Platform$ Table, Data Grid, cell selection, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'GridSelectionMode']
---

# $Platform$ Grid Selection

The $ProductName$ Data Table / Data Grid supports single or multiple row and cell selection.

## $Platform$ Grid Selection Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-cell-selection"
           alt="$Platform$ Grid Selection Example"
           github-src="grids/data-grid/cell-selection">
</code-view>

<div class="divider--half"></div>

## Overview

Selection in the $Platform$ data grid is enabled on a row and cell level and can be configured by using the `SelectionMode` option of the $Platform$ grid. This property takes five different options, listed below:

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

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-row-selection"
           alt="$Platform$ Grid Selection Example"
           github-src="grids/data-grid/row-selection" >
</code-view>

<div class="divider--half"></div>

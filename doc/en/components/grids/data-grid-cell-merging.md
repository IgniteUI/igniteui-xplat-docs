---
title: $Platform$ Data Grid | Cell Merging | Merging | Infragistics
_description: Use the cell merging feature of the Infragistics' $Platform$ data grid to join cells with duplicate values.
_keywords: $Platform$ Table, Data Grid, cell merging, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'MergedCellMode', 'MergedCellEvaluationCriteria']
namespace: Infragistics.Controls
---

# $Platform$ Grid Cell Merging

The $ProductName$ Data Table / Data Grid supports cell merging. You may opt-in and detect when adjacent sibling records for a specific column contains the same value. While the cells are not active, selected, or in edit mode, the value displays across the cells.

## $Platform$ Grid Cell Merging Example

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-cell-merging"
           alt="$Platform$ Grid Cell Merging Example"
           github-src="grids/data-grid/cell-merging">
</code-view>

<div class="divider--half"></div>

## Overview

Cell Merging in the $Platform$ data grid can be configured by using the `MergedCellMode` option of the entire $Platform$ grid or individual columns. This property can be set to one of the following options, listed below:

- `Never`: The grid or column will never merge cells. This is the default behavior.
- `Always`: The grid or column will always attempt to merge cells.
- `OnlyWhenSorted`: The grid or column will only attempt to merge cells when a column is sorted.

Note, regardless of the value of this property, cells can only be merged across sibling records.

Cell merging can be evaluated based on whether the data is formatted or not using the `MergedCellEvaluationCriteria` property. This is applicable to the entire grid or individual columns and can be set to one of the following options, listed below:

- `RawValue`: Merge cells from adjacent rows when the raw values from the cells are the same. This is the default value.
- `FormattedText`: Merge cells from adjacent rows when the formatted value from the cells is the same.

<div class="divider--half"></div>
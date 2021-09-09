---
title: $Platform$ Data Grid | Cell Merging | Merging | Infragistics
_description: Use the cell merging feature of the Infragistics' $Platform$ data grid to join cells with duplicate values. 
_keywords: $Platform$ Table, Data Grid, cell merging, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'MergedCellMode', 'MergedCellEvaluationCriteria']
---

# $Platform$ Grid Merging

The $ProductName$ Data Table / Data Grid supports cell merging.

## $Platform$ Grid Cell Merging Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-cell-merging"
           alt="$Platform$ Grid Cell Merging Example"
           github-src="grids/data-grid/cell-merging">
</code-view>

<div class="divider--half"></div>

## Overview

Cell Merging in the $Platform$ data grid can be configured by using the `MergedCellMode` option of the $Platform$ grid. This property takes three different options, listed below:

- `Never`: The grid will never merge cells. This is the default behavior.
- `Always`: The grid will always attempt to merge cells.
- `OnlyWhenSorted`: The grid will only attempt to merge cells when a column is sorted.

In addition, there is a `MergedCellEvaluationCriteria` property which can be used depending on if formatting is applied. This property takes two options, listed below:

- `RawValue`: Merge cells from adjacent rows when the raw values from the cells are the same. This is the default value.
- `FormattedText`: Merge cells from adjacent rows when the formatted value from the cells is the same.

<div class="divider--half"></div>
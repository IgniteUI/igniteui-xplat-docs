---
title: $PlatformShort$ Data Grid | Cell Selection | Selection | Infragistics
_description: Use cell and row selection of the Infragistics' $PlatformShort$ data grid to highlight areas of the table. Learn how to configure single or multiple row selection for the $ProductName$ table.
_keywords: $PlatformShort$ Table, Data Grid, cell selection, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'GridSelectionMode']
---

# $PlatformShort$ Grid Selection

The $ProductName$ Data Table / Data Grid supports single or multiple row and cell selection.

## $PlatformShort$ Grid Selection Example


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-cell-selection" 
           alt="$PlatformShort$ Grid Selection Example" 
           github-src="grids/data-grid/cell-selection">
</code-view>

<div class="divider--half"></div>

## Overview

Selection in the $PlatformShort$ data grid is enabled on a row and cell level and can be configured by using the `SelectionMode` option of the $PlatformShort$ grid. This property takes five different options, listed below:

- `None`: Selection is not enabled.
- `SingleCell`: Selection of a single cell is enabled.
- `SingleRow`: Selection of a single row is enabled.
- `MultipleCell`: Selection of multiple cells is enabled.
- `MultipleRow`: Selection of multiple rows is enabled.
- `RangeCell`: Selection of a range of multiple cells by clicking and dragging is enabled.

When set to `MultipleRow` or `MultipleCell`, it is not necessary to hold the CTRL key to select multiple rows or cells. Each row or cell will be selected or deselected on click of that particular row or cell.

## Code Snippet

The following demonstrates how to configure selection on the $PlatformShort$ data grid to set multiple row selection:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    selectionMode="MultipleRow" />
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      selection-mode="MultipleRow">
</igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"                      
    DataSource="DataSource"
    SelectionMode="GridSelectionMode.MultipleRow" />
```
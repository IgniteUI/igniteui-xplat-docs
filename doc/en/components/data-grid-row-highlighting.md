---
title: $PlatformShort$ Data Grid | Row Highlighting | Infragistics
_description: Configuring the row highlight of the Infragistics' $PlatformShort$ data grid on mouse over. Learn how to configure row highlight for the $ProductName$ table.
_keywords: $PlatformShort$ Table, Data Grid, row highlighting, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'IsRowHoverEnabled', 'RowHoverBackground']
---

# $PlatformShort$ Grid Highlighting

The $ProductName$ Data Table / Data Grid supports configuring the appearance of row highlighting.

## $PlatformShort$ Grid Highlighting Example


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-highlighting" 
           alt="$PlatformShort$ Grid Highlighting Example" 
           github-src="grids/data-grid/row-highlighting">
</code-view>

<div class="divider--half"></div>

## Overview

Highlighting records in the $PlatformShort$ data can be toggled by setting the `IsRowHoverEnabled` boolean property of the $PlatformShort$ grid. Note, this is enabled by default.

In addition, the color is configurable by setting the `RowHoverBackground` string property to a hex value.

## Code Snippet

The following demonstrates how to enable row highlighting on the $PlatformShort$ data grid and applies the color blue:

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    isRowHoverEnabled={true} 
    rowHoverBackground="#bfbfff"/>
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      is-row-hover-enabled="true"
      row-hover-background="#bfbfff">
</igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"                      
    DataSource="DataSource"
    IsRowHoverEnabled="true"
    RowHoverBackground="#bfbfff" />
```
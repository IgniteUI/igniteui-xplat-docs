---
title: {Platform} Data Grid | Row Highlighting | Infragistics
_description: Configuring the row highlight of the Infragistics' {Platform} data grid on mouse over. Learn how to configure row highlight for the {ProductName} table.
_keywords: {Platform} Table, Data Grid, row highlighting, {ProductName}, Infragistics
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.Column"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Highlighting

The {ProductName} Data Table / Data Grid supports configuring the appearance of row highlighting.

## {Platform} Grid Highlighting Example


`sample="/grids/data-grid/row-highlighting", height="600", alt="{Platform} Grid Highlighting Example"`



<div class="divider--half"></div>

## Overview

Highlighting records in the {Platform} data can be toggled by setting the `IsRowHoverEnabled` boolean property of the {Platform} grid. Note, this is enabled by default.

In addition, the color is configurable by setting the `RowHoverBackground` string property to a hex value.

## Code Snippet

The following demonstrates how to enable row highlighting on the {Platform} data grid and applies the color blue:

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
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    IsRowHoverEnabled="true"
    RowHoverBackground="#bfbfff" />
```

## API References

 - `IsRowHoverEnabled`
 - `RowHoverBackground`
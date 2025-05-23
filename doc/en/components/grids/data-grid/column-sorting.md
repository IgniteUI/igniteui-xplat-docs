---
title: {Platform} Data Grid | Column Sorting | Infragistics
_description: Use Infragistics' {Platform} grid component's sorting feature to configure a mix of sortable and non-sortable columns, with rich API and data sorting. View {ProductName} tutorials!
_keywords: {Platform} Table, Data Grid, column, sorting, row, {ProductName}, Infragistics
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.HeaderClickAction"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridSorting}
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Sorting Overview
The {ProductName} Data Table / Data Grid supports ascending and descending column sorting with a Single Column, Multi-Column and Tri-State Column Sorting configuration.

## {Platform} Grid Sorting Example


`sample="/grids/data-grid/column-sorting", height="600", alt="{Platform} Grid Sorting Example"`



<div class="divider--half"></div>

## Code Snippet

You can sort by a single or multiple column ascending or descending in the {Platform} data grid by using the `HeaderClickAction` property. If TriState is enabled you can remove the sort applied to a column.

- `SortByMultipleColumns`
- `SortByMultipleColumnsTriState`
- `SortByOneColumnOnly`
- `SortByOneColumnOnlyTriState`

<!--React-->
```ts
import { HeaderClickAction } from 'igniteui-react-data-grids';
```

<!--WebComponents-->
```ts
import { HeaderClickAction } from 'igniteui-webcomponents-data-grids';
```

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    headerClickAction={HeaderClickAction.SortByMultipleColumns}
    dataSource={this.data}
    ref={this.onGridRef}/>
```

```html
<igc-data-grid
    id="grid"
    height="100%"
    width="100%"
    header-click-action="SortByMultipleColumns">
</igc-data-grid>
```

```razor
<IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
    HeaderClickAction="HeaderClickAction.SortByMultipleColumns"
    DataSource="DataSource" />
```

## Sorting through API
```ts
import { IgrColumnSortDescription } from 'igniteui-react-data-grids';
import { ListSortDirection } from 'igniteui-react-core';
```

```ts
public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
}
// ...
let colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
colSortDesc.sortDirection = ListSortDirection.Descending;
this.grid.sortDescriptions.add(colSortDesc);
```

```ts
import { IgcColumnSortDescription } from 'igniteui-webcomponents-data-grids';
import { ListSortDirection } from 'igniteui-webcomponents-core';

let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;

let colSortDesc = new IgcColumnSortDescription();
colSortDesc.field = "UnitsInStock";
colSortDesc.sortDirection = ListSortDirection.Descending;
grid1.sortDescriptions.add(colSortDesc);
```

```razor
@code {
    // Using the ref property above:
    private IgbDataGrid grid;
    private IgbDataGrid DataGridRef
    {
        get { return grid; }
        set
        {
            grid = value;
            OnGridRefChanged();
            StateHasChanged();
        }
    }

    private void OnGridRefChanged()
    {
        if (this.DataGridRef != null)
        {
            this.DataGridRef.SortDescriptions.Add(new ColumnSortDescription()
            {
                Field = "Property",
                SortDirection = ListSortDirection.Descending
            });
        }
    }
}
```

## API References

 - `HeaderClickAction`
 - `SortByMultipleColumnsTriState`
 - `SortByMultipleColumns`
 - `SortByOneColumnOnlyTriState`
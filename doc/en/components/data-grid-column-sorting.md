---
title: $PlatformShort$ Data Grid | Column Sorting | Infragistics
_description: Use Infragistics' $PlatformShort$ grid component's sorting feature to configure a mix of sortable and non-sortable columns, with rich API and data sorting. View $ProductName$ tutorials!
_keywords: $PlatformShort$ Table, Data Grid, column, sorting, row, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'HeaderClickAction']
---

# $PlatformShort$ Grid Sorting Overview
The $ProductName$ Data Table / Data Grid supports ascending and descending column sorting with a Single Column, Multi-Column and Tri-State Column Sorting configuration.

## $PlatformShort$ Grid Sorting Overview Example

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-column-sorting-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="grids/data-grid/column-sorting"></sample-button>

<div class="divider--half"></div>

## Code Snippet

You can sort by a single or multiple column ascending or descending in the $PlatformShort$ data grid by using the `HeaderClickAction` property. If TriState is enabled you can remove the sort applied to a column.

- `SortByMultipleColumns`
- `SortByMultipleColumnsTriState`
- `SortByOneColumnOnly`
- `SortByOneColumnOnlyTriState`

<!--React-->
```ts
import { HeaderClickAction } from 'igniteui-react-grids';
```

<!--WebComponents-->
```ts
import { HeaderClickAction } from 'igniteui-webcomponents-grids';
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
<DataGrid Height="100%" Width="100%" @ref="DataGridRef"
    HeaderClickAction="HeaderClickAction.SortByMultipleColumns"
    DataSource="DataSource" />
```

## Sorting through API
```ts
import { IgrColumnSortDescription } from 'igniteui-react-grids';
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
import { IgcColumnSortDescription } from 'igniteui-webcomponents-grids';
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
    private DataGrid grid;
    private DataGrid DataGridRef
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
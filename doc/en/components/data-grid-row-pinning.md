---
title: $Platform$ Data Grid | Row Pinning |  Infragistics
_description: Use Infragistics' $Platform$ grid component's row pinning feature in order to lock row change row order with a rich and easy to use API. Check out $ProductName$ table demos!
_keywords: $Platform$ Table, Data Grid, row pinning, $ProductName$, Infragistics
mentionedTypes: ['Grid']
---

# $Platform$ Row Pinning

 The $ProductName$ Data Table / Data Grid allows Row Pinning by either using keys or the underlying data source items. When a row is pinned, it will be duplicated at the top of the $PlatformLower$ data grid and remain fixed there with light gray background and its actual row will be rendered with low opacity.

## $Platform$ Row Pinning Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-row-pinning"
           alt="$Platform$ Row Pinning Example"
           github-src="grids/data-grid/row-pinning">
</code-view>

<div class="divider--half"></div>

You can pin rows in the $Platform$ data grid by adding the target row’s underlying data item to the pinnedItems collection of the $Platform$ grid.

## Code Snippet

```ts
public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    this.grid.pinnedItems.add(this.data[2]);
    this.grid.pinnedItems.add(this.data[4]);
}
```

```html
 <igc-data-grid id="grid"
      width="100%"
      height="100%">
 </igc-data-grid>
```

```ts
let grid1 = (document.getElementById("grid") as IgcDataGridComponent);
grid1.dataSource = data;
grid1.pinnedItems.add(data[2]);
grid1.pinnedItems.add(data[4]);
```

```razor
<DataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource" />

@code {

    private DataGrid grid;
    public DataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            OnGridChanged();
            StateHasChanged();
        }
    }

    private void OnGridChanged()
    {
        grid.PinnedItems.Add(this.DataSource[2] as Employee);
        grid.PinnedItems.Add(this.DataSource[4] as Employee);
    }
}
```

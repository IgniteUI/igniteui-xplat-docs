---
title: $Platform$ Data Grid | Row Grouping | Infragistics
_description: Use Infragistics' $Platform$ grid component's Group Row feature to group rows into a sticky header Row Group. This is an easy way to visually group data based on your criteria. Check out $ProductName$ table demos!
_keywords: $Platform$ Table, Data Grid, row grouping, groupby area,  $ProductName$, Infragistics
mentionedTypes: ['Grid']
---

# $Platform$ Row Grouping

The $ProductName$ Data Table / Data Grid lets you group rows into a ‘sticky header’ Row Group.  This is similar to the Group By feature in Microsoft Outlook, which is an easy way to visually group data based on your own criteria.

## $Platform$ Row Grouping Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-row-grouping"
           alt="$Platform$ Row Grouping Example"
           github-src="grids/data-grid/row-grouping">
</code-view>

<div class="divider--half"></div>

## Group-By Area

Set `IsGroupByAreaVisible` property on the DataGrid to True, as shown in the example above, to the user interface. The group-by area allows users more options to group and sort columns without interact when interacting the DataGrid indirectly. Groups can be positioned and reordered based on the users needs. This area also populates when columns are programmatically added as `GroupDescriptions` on the DataGrid as well.

## Multiple Groups

```ts
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';

public componentDidMount() {
    window.addEventListener('load', this.onLoad);
}

public onLoad() {
    const state = new IgrColumnGroupDescription();
    state.field = "Country";
    state.displayName = "Location";
    state.sortDirection = ListSortDirection.Descending;
    const city = new IgrColumnGroupDescription();
    city.field = "City";
    city.displayName = "";
    const income = new IgrColumnGroupDescription();
    income.field = "Income";
    income.displayName = "Income";

    this.grid.groupDescriptions.add(state);
    this.grid.groupDescriptions.add(city);
    this.grid.groupDescriptions.add(income);
}
```

```ts
import { IgcIgcColumnGroupDescription } from 'igniteui-webcomponents-grids';
import { ListSortDirection } from 'igniteui-webcomponents-core';

public connectedCallback() {
    const state = new IgcColumnGroupDescription();
    state.field = "Country";
    state.displayName = "Location";
    state.sortDirection = ListSortDirection.Descending;
    const city = new IgcColumnGroupDescription();
    city.field = "City";
    city.displayName = "";
    const income = new IgcColumnGroupDescription();
    income.field = "Income";
    income.displayName = "Income";

    this.grid = document.getElementById("grid") as IgcDataGridComponent;
    this.grid.groupDescriptions.add(state);
    this.grid.groupDescriptions.add(city);
    this.grid.groupDescriptions.add(income);
}
```

```razor
@code {
    private void OnGridCreated()
    {
        var state = new ColumnGroupDescription { Field = "Country", DisplayName = "Location" };
        var city = new ColumnGroupDescription { Field = "City", DisplayName = "" };
        var income = new ColumnGroupDescription { Field = "Income", DisplayName = "Income" };

        this.DataGridRef.GroupDescriptions.Add(state);
        this.DataGridRef.GroupDescriptions.Add(city);
        this.DataGridRef.GroupDescriptions.Add(income);
    }
}
```

## Hierarchical Groups

The `GroupHeaderDisplayMode` property allows the groups to be hierarchical. By default, each group description that is added gets aggregated together. Setting the `GroupHeaderDisplayMode` to `Split` will create a section header for ever group defined in `GroupDescriptions` property of the `Grid`.


<!-- React -->
```ts
import { DataSourceSectionHeaderDisplayMode } from 'igniteui-react-core';

public componentDidMount() {
    // ...
    this.grid.groupHeaderDisplayMode = DataSourceSectionHeaderDisplayMode.Split;
}
```

<!-- WebComponents -->
```ts
import { DataSourceSectionHeaderDisplayMode } from 'igniteui-webcomponents-core';

public connectedCallback() {
    // ...
    this.grid.groupHeaderDisplayMode = DataSourceSectionHeaderDisplayMode.Split;
}
```

```razor
<DataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource"
    GroupHeaderDisplayMode="DataSourceSectionHeaderDisplayMode.Split" />
```

## Collapsable Groups

Also, the `Grid` can display a toggle on each group section to allow the end user to expand or collapse the grouped data via the `IsGroupCollapsable` property.

<!-- React -->
```ts
public componentDidMount() {
    // ...
    this.grid.isGroupCollapsable = true;
}
```

<!-- WebComponents -->
```ts
public connectedCallback() {
    // ...
    this.grid.isGroupCollapsable = true;
}
```

```razor
<DataGrid @ref="DataGridRef" Height="100%" Width="100%"
    DataSource="DataSource"
    IsGroupCollapsable="true" />
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.


```ts
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
import { DataSourceSectionHeaderDisplayMode } from 'igniteui-react-core';

public componentDidMount() {
    window.addEventListener('load', this.onLoad);
}

public onLoad() {
    const state = new IgrColumnGroupDescription();
    state.field = "Country";
    state.displayName = "Location";
    state.sortDirection = ListSortDirection.Descending;
    const city = new IgrColumnGroupDescription();
    city.field = "City";
    city.displayName = "";
    const income = new IgrColumnGroupDescription();
    income.field = "Income";
    income.displayName = "Income";

    this.grid.groupDescriptions.add(state);
    this.grid.groupDescriptions.add(city);
    this.grid.groupDescriptions.add(income);

    this.grid.isGroupCollapsable = true;
    this.grid.groupHeaderDisplayMode = DataSourceSectionHeaderDisplayMode.Split;
}
```

```ts
import { IgcIgcColumnGroupDescription } from 'igniteui-webcomponents-grids';
import { ListSortDirection } from 'igniteui-webcomponents-core';
import { DataSourceSectionHeaderDisplayMode } from 'igniteui-webcomponents-core';

public connectedCallback() {
    const state = new IgcColumnGroupDescription();
    state.field = "Country";
    state.displayName = "Location";
    state.sortDirection = ListSortDirection.Descending;
    const city = new IgcColumnGroupDescription();
    city.field = "City";
    city.displayName = "";
    const income = new IgcColumnGroupDescription();
    income.field = "Income";
    income.displayName = "Income";

    this.grid = document.getElementById("grid") as IgcDataGridComponent;
    this.grid.groupDescriptions.add(state);
    this.grid.groupDescriptions.add(city);
    this.grid.groupDescriptions.add(income);

    this.grid.isGroupCollapsable = true;
    this.grid.groupHeaderDisplayMode = DataSourceSectionHeaderDisplayMode.Split;
}
```

```razor
<DataGrid @ref="DataGridRef" Height="100%" Width="100%"
    DataSource="DataSource"
    GroupHeaderDisplayMode="DataSourceSectionHeaderDisplayMode.Split"
    IsGroupCollapsable="true" />

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
            OnGridCreated();
            StateHasChanged();
        }
    }

    private void OnGridCreated()
    {
        var state = new ColumnGroupDescription { Field = "Country", DisplayName = "Location" };
        var city = new ColumnGroupDescription { Field = "City", DisplayName = "" };
        var income = new ColumnGroupDescription { Field = "Income", DisplayName = "Income" };

        this.DataGridRef.GroupDescriptions.Add(state);
        this.DataGridRef.GroupDescriptions.Add(city);
        this.DataGridRef.GroupDescriptions.Add(income);
    }
}
```


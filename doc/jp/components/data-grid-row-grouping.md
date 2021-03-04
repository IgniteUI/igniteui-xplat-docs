---
title: $PlatformShort$ データ グリッド | 行のグループ化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ グリッド コンポーネントのグループ行機能を使用して、行を「固定ヘッダー」行グループにまとめます。独自の基準に基づいてデータを視覚的にグループ化する簡単な方法です。$ProductName$ テーブルのサンプルを是非お試しください!
_keywords: $PlatformShort$ Table, Data Grid, row grouping, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, 行のグループ化, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $PlatformShort$ 行のグループ化

$ProductName$ Data Table / Data Grid は、行を「固定ヘッダー」行グループにまとめることができます。これ機能は Microsoft Outlook の Group By 機能に似ています。独自の基準に基づいてデータを視覚的にグループ化する簡単な方法です。

## $PlatformShort$ 行のグループ化の例


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-grouping" alt="$PlatformShort$ 行のグループ化の例">
</code-view>
<sample-button src="grids/data-grid/row-grouping"></sample-button>

<div class="divider--half"></div>

## 複数のグループ

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

## 階層グループ

`GroupHeaderDisplayMode` プロパティを使用すると、グループを階層化できます。デフォルトで、追加された各グループの説明が集計されます。`GroupHeaderDisplayMode` を `Split` に設定すると、`Grid` の `GroupDescriptions` プロパティで定義されたグループのセクション ヘッダーが作成されます。


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

## 縮小可能なグループ

また、`Grid` は各グループ セクションに切り替えを表示して、エンドユーザーが `IsGroupCollapsable` プロパティでグループ化されたデータを展開または縮小できます。

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

## まとめ

上記すべてのコード スニペットを以下のコード ブロックにまとめて、プロジェクトに簡単にコピーできます。


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
import { IgcColumnGroupDescription } from 'igniteui-webcomponents-grids';
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
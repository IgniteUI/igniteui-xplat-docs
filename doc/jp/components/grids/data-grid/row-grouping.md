---
title: {Platform} データ グリッド | 行のグループ化 | インフラジスティックス
_description: インフラジスティックスの {Platform} グリッド コンポーネントのグループ行機能を使用して、行を「固定ヘッダー」行グループにまとめます。独自の基準に基づいてデータを視覚的にグループ化する簡単な方法です。{ProductName} テーブルのサンプルを是非お試しください!
_keywords: {Platform} Table, Data Grid, row grouping, groupby area,  {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 行のグループ化, groupby 領域,  インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridGroupBy}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} 行のグループ化

{ProductName} Data Table / Data Grid は、行を「固定ヘッダー」行グループにまとめることができます。これ機能は Microsoft Outlook の Group By 機能に似ています。独自の基準に基づいてデータを視覚的にグループ化する簡単な方法です。

## {Platform} 行の GroupBy 領域の例

`sample="/grids/data-grid/row-grouping", height="600", alt="{Platform} 行のグループ化の例"`



<div class="divider--half"></div>

## Group-By 領域

上記の例に示すように、DataGrid の `IsGroupByAreaVisible` プロパティをユーザー インターフェイスで True に設定します。group-by 領域を使用すると、ユーザーは、DataGrid を間接的に操作するときに、操作せずに列をグループ化およびソート オプションを増やすことができます。グループは、ユーザーのニーズに基づいて配置および並べ替えることができます。この領域は、DataGrid で列がプログラムで `GroupDescriptions` として追加されたときにも入力されます。

## グループ化説明の使用の例

`sample="/grids/data-grid/row-group-descriptions", height="600", alt="{Platform} 行のグループ化の例"`



<div class="divider--half"></div>

## 階層グループ

`GroupHeaderDisplayMode` プロパティを使用すると、グループを階層化できます。デフォルトで、追加された各グループの説明が集計されます。`GroupHeaderDisplayMode` を `Split` に設定すると、`Grid` の `GroupDescriptions` プロパティで定義されたグループのセクション ヘッダーが作成されます。


<!-- React -->
```ts
import { GroupHeaderDisplayMode } from 'igniteui-react-core';

public componentDidMount() {
    // ...
    this.grid.groupHeaderDisplayMode = GroupHeaderDisplayMode.Split;
}
```

<!-- WebComponents -->
```ts
import { GroupHeaderDisplayMode } from 'igniteui-webcomponents-core';

public connectedCallback() {
    // ...
    this.grid.groupHeaderDisplayMode = GroupHeaderDisplayMode.Split;
}
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource"
    GroupHeaderDisplayMode="GroupHeaderDisplayMode.Split" />
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
<IgbDataGrid @ref="DataGridRef" Height="100%" Width="100%"
    DataSource="DataSource"
    IsGroupCollapsable="true" />
```

## まとめ

上記すべてのコード スニペットを以下のコード ブロックにまとめて、プロジェクトに簡単にコピーできます。


```ts
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
import { GroupHeaderDisplayMode } from 'igniteui-react-core';

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
    this.grid.groupHeaderDisplayMode = GroupHeaderDisplayMode.Split;
}
```

```ts
import { IgcIgcColumnGroupDescription } from 'igniteui-webcomponents-grids';
import { ListSortDirection } from 'igniteui-webcomponents-core';
import { GroupHeaderDisplayMode } from 'igniteui-webcomponents-core';

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
    this.grid.groupHeaderDisplayMode = GroupHeaderDisplayMode.Split;
}
```

```razor
<IgbDataGrid @ref="DataGridRef" Height="100%" Width="100%"
    DataSource="DataSource"
    GroupHeaderDisplayMode="GroupHeaderDisplayMode.Split"
    IsGroupCollapsable="true" />

@code {
    private IgbDataGrid grid;
    public IgbDataGrid DataGridRef
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
        var city = new ColumnGroupDescription { Field = "City", DisplayName = "City" };
        var income = new ColumnGroupDescription { Field = "Income", DisplayName = "Income" };

        this.DataGridRef.GroupDescriptions.Add(state);
        this.DataGridRef.GroupDescriptions.Add(city);
        this.DataGridRef.GroupDescriptions.Add(income);
    }
}
```

## API リファレンス

 - `Grid`
 - `GroupDescriptions`
 - `GroupHeaderDisplayMode`
 - `IsGroupByAreaVisible`
 - `IsGroupCollapsable`
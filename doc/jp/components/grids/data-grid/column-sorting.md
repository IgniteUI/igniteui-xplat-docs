---
title: {Platform} データ グリッド | 列ソート | インフラジスティックス
_description: インフラジスティックスの {Platform} グリッド コンポーネントのソート機能を使用して、豊富な API とデータ並び替えによって、ソート可能な列とソート不可の列の組み合わせを設定します。{ProductName} チュートリアルを是非お試しください!
_keywords: {Platform} Table, Data Grid, column, sorting, row, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 列, ソート, 行, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.HeaderClickAction"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridSorting}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッド ソートの概要
{Platform} Data Table / Data Grid は、単一列、複数列、およびトライステート列のソート構成で昇順および降順の列のソートをサポートします。

## {Platform} グリッド ソートの例


`sample="/grids/data-grid/column-sorting", height="600", alt="{Platform} グリッド ソートの例"`



<div class="divider--half"></div>

## コード スニペット

`HeaderClickAction` プロパティを使用して、{Platform} データ グリッドで単一または複数の列を昇順降順にソートできます。TriState が有効な場合、列に適用されているソートを削除できます。

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

## API を使用したソート
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

## API リファレンス

 - `HeaderClickAction`
 - `SortByMultipleColumnsTriState`
 - `SortByMultipleColumns`
 - `SortByOneColumnOnlyTriState`
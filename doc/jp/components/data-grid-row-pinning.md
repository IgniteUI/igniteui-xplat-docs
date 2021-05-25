---
title: $Platform$ データ グリッド | 行のピン固定 | インフラジスティックス
_description: インフラジスティックスの $Platform$ グリッド コンポーネントの行ピン固定機能を使用し、豊富で使いやすい API によって、行変更の順序をロックします。$ProductName$ テーブルのサンプルを是非お試しください!
_keywords: $Platform$ Table, Data Grid, row pinning, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, 行のピン固定, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $Platform$ 行のピン固定

$ProductName$ Data Table / Data Grid では、キーまたは基本データ ソースの項目を使用した行のピン固定が可能です。行を固定するとその行が $PlatformLower$ データ グリッドの最上部に複製され、薄い灰色の背景で固定されたままになり、実際の行は低い不透明度でレンダリングされます。

## $Platform$ 行のピン固定の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-pinning"
           alt="$Platform$ 行のピン固定の例"
           github-src="grids/data-grid/row-pinning">
</code-view>

<div class="divider--half"></div>

$Platform$ データ グリッドでターゲット行の基本データ項目を $Platform$ グリッドの pinnedItems コレクションに追加して行をピン固定できます。

## コード スニペット

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
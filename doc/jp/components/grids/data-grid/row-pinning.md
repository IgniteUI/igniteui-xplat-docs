---
title: {Platform} データ グリッド | 行のピン固定 | インフラジスティックス
_description: インフラジスティックスの {Platform} グリッド コンポーネントの行ピン固定機能を使用し、豊富で使いやすい API によって、行変更の順序をロックします。{ProductName} テーブルのサンプルを是非お試しください!
_keywords: {Platform} Table, Data Grid, row pinning, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 行のピン固定, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.Column"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridRowPinning}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](grid/overview.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} 行のピン固定

{ProductName} Data Table / Data Grid では、キーまたは基本データ ソースの項目を使用した行のピン固定が可能です。行を固定するとその行が {PlatformLower} データ グリッドの最上部に複製され、薄い灰色の背景で固定されたままになり、実際の行は低い不透明度でレンダリングされます。

## {Platform} 行のピン固定の例


`sample="/grids/data-grid/row-pinning", height="600", alt="{Platform} 行のピン固定の例"`



<div class="divider--half"></div>

{Platform} データ グリッドでターゲット行の基本データ項目を {Platform} グリッドの pinnedItems コレクションに追加して行をピン固定できます。

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
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource" />

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


## API リファレンス

 - `Grid`
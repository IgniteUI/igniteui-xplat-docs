---
title: {Platform} データ グリッド | 列オプション | インフラジスティックス
_description: インフラジスティックスの {ProductName} データ グリッドは、各列ヘッダーのドロップダウン UI を介して列のピン固定、移動、フィルター、およびソートの機能をサポートします。{ProductName} テーブルの列オプションを是非お試しください!
_keywords: {Platform} Table, Data Grid, column options, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 列オプション, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.HeaderClickAction", "Infragistics.Controls.Grid.Implementation.Column"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} Grid 列オプションの概要

{ProductName} データ グリッドは、各列ヘッダに表示される UI による列のグループ化、非表示、移動、固定、フィルター、およびソートの機能をサポートします。

列オプション UI を有効にするには、グリッドの `IsColumnOptionsEnabled` プロパティを true に設定します。

## {Platform} Grid 列オプションの例


`sample="/grids/data-grid/column-options", height="600", alt="{Platform} Grid 列オプションの例"`



<div class="divider--half"></div>

## 列オプションの構成

列の `IsFilteringEnabled` プロパティにより、列ごとにフィルタリングの有効/無効化を切り替えることができます。True または false に設定すると、列のオプション UI のフィルタリング セクションが表示または非表示になります。

`HeaderClickAction` プロパティを使用すると、グリッド全体のソートの有効/無効化を切り替えることができます。これを `None` に設定すると、グリッドのソートが完全に削除され、各列のオプション UI に反映されます。`SortByOneColumnOnly` を設定すると、一度に 1 つの列のソートが有効になります。

## コード スニペット

以下のコードは、グリッドと列を調整することにより、列オプション UI でフィルタリングとソートをプログラムで有効にする方法を紹介します。

```tsx
<IgrDataGrid
height="1-00%"
width="100%"
headerClickAction="SortByOneColumnOnly"
isColumnOptionsEnabled="true">
    <IgrTextColumn field="ID" isFilteringEnabled="false"/>
</IgrDataGrid>
```

<!--React-->
```ts
import { HeaderClickAction } from 'igniteui-react-data-grids';

//enable column options
this.grid.isColumnOptionsEnabled="true";

//adjust filtering for column
let idColumn = this.grid.actualColumns.item(0);
idColumn.isFilteringEnabled="false";

//adjust sorting
this.grid.headerClickAction = HeaderClickAction.SortByOneColumnOnly;
```

<!--WebComponents-->
```ts
import { HeaderClickAction } from 'igniteui-webcomponents-data-grids';

//enable column options
this.grid.isColumnOptionsEnabled="true";

//adjust filtering for column
let idColumn = this.grid.actualColumns.item(0);
idColumn.isFilteringEnabled="false";

//adjust sorting
this.grid.headerClickAction = HeaderClickAction.SortByOneColumnOnly;
```

```html
<igc-data-grid
     id="grid"
     height="calc(100% - 40px)"
     width="100%"
     header-click-action="SortByOneColumnOnly"
     is-column-options-enabled="true">
    <igc-text-column field="ID" is-filtering-enabled="false"></igc-text-column>
</igc-data-grid>
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    HeaderClickAction="HeaderClickAction.SortByOneColumnOnly"
    IsColumnOptionsEnabled="true">
    <IgbTextColumn Field="ID" IsFilteringEnabled="false" />
</IgbDataGrid>
```

## API リファレンス

 - `HeaderClickAction`
 - `IsColumnOptionsEnabled`
 - `IsFilteringEnabled`
 - `SortByOneColumnOnly`
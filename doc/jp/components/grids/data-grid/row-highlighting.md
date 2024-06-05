---
title: {Platform} Data Grid | 行のハイライト表示 | インフラジスティックス
_description: マウスオーバーでインフラジスティックス {Platform} データ グリッドの行ハイライト表示の構成。{ProductName} テーブルの行ハイライト表示を設定する方法について説明します。
_keywords: {Platform} Table, Data Grid, row highlighting, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 行のハイライト表示, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} Grid ハイライト表示

{ProductName} Data Table / Data Grid は、行のハイライト表示の構成をサポートします。

## {Platform} Grid ハイライト表示の例


`sample="/grids/data-grid/row-highlighting", height="600", alt="{Platform} Grid ハイライト表示の例"`



<div class="divider--half"></div>

## 概要

{Platform} データ内のレコードのハイライト表示は、{Platform} グリッド の `IsRowHoverEnabled` ブール値プロパティを設定して切り替えることができます。これはデフォルトで有効になっていることに注意してください。

さらに、`RowHoverBackground` 文字列プロパティを 16 進数値に設定して色を設定できます。

## コード スニペット

以下は、{Platform} データ グリッドで行のハイライト表示を有効にし、青色を適用する方法を示します。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    isRowHoverEnabled={true}
    rowHoverBackground="#bfbfff"/>
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      is-row-hover-enabled="true"
      row-hover-background="#bfbfff">
</igc-data-grid>
```

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    IsRowHoverEnabled="true"
    RowHoverBackground="#bfbfff" />
```

## API リファレンス

 - `IsRowHoverEnabled`
 - `RowHoverBackground`
---
title: $Platform$ Data Grid | 行の強調表示 | インフラジスティックス
_description: マウスオーバーでインフラジスティックス $Platform$ データ グリッドの行強調表示の構成。$ProductName$ テーブルの行強調表示を設定する方法について説明します。
_keywords: $Platform$ Table, Data Grid, row highlighting, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, 行の強調表示, インフラジスティックス
mentionedTypes: ['Grid', 'IsRowHoverEnabled', 'RowHoverBackground']
---

# $Platform$ Grid 強調表示

$ProductName$ Data Table / Data Grid は、行の強調表示の構成をサポートします。

## $Platform$ Grid 強調表示の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-highlighting"
           alt="$Platform$ Grid 強調表示の例"
           github-src="grids/data-grid/row-highlighting">
</code-view>

<div class="divider--half"></div>

## 概要

$Platform$ データ内のレコードの強調表示は、$Platform$ グリッド の `IsRowHoverEnabled` ブール値プロパティを設定して切り替えることができます。これはデフォルトで有効になっていることに注意してください。

さらに、`RowHoverBackground` 文字列プロパティを 16 進数値に設定して色を設定できます。

## コード スニペット

以下は、$Platform$ データ グリッドで行の強調表示を有効にし、青色を適用する方法を示します。

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
<DataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    IsRowHoverEnabled="true"
    RowHoverBackground="#bfbfff" />
```
---
title: $PlatformShort$ Data Grid | 行の強調表示 | インフラジスティックス
_description: マウスオーバーでインフラジスティックス $PlatformShort$ データ グリッドの行強調表示の構成。$ProductName$ テーブルの行強調表示を設定する方法について説明します。
_keywords: $PlatformShort$ Table, Data Grid, row highlighting, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, 行の強調表示, インフラジスティックス
mentionedTypes: ['Grid', 'IsRowHoverEnabled', 'RowHoverBackground']
---

# $PlatformShort$ Grid 強調表示

$ProductName$ Data Table / Data Grid は、行の強調表示の構成をサポートします。

## $PlatformShort$ Grid 強調表示の例

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Grid 強調表示の例"></iframe>
</div>
<sample-button src="grids/data-grid/row-highlighting"></sample-button>

<div class="divider--half"></div>

## 概要

$PlatformShort$ データ内のレコードの強調表示は、$PlatformShort$ グリッド の `IsRowHoverEnabled` ブール値プロパティを設定して切り替えることができます。

さらに、`RowHoverBackground` 文字列プロパティを 16 進数値に設定して色を設定できます。

## コード スニペット

以下は、$PlatformShort$ データ グリッドで行の強調表示を有効にし、青色を適用する方法を示します。

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
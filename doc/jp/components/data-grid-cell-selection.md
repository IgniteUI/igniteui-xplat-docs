---
title: $PlatformShort$ データ グリッド | セル選択 | 選択 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ データ グリッドのセルおよび行選択を使用して、テーブルの領域を強調表示します。$ProductName$ テーブルの単一行選択または複数行選択を設定する方法について説明します。
_keywords: $PlatformShort$ Table, Data Grid, cell selection, $ProductName$, Infragistics, $PlatformShort$ テーブル, データ グリッド, セル選択, インフラジスティックス
mentionedTypes: ['Grid', 'GridSelectionMode']
_language: ja
---

# $PlatformShort$ グリッドの選択

$ProductName$ Data Table / Data Grid は、単一行または複数行およびセルの選択をサポートしています。

## $PlatformShort$ グリッドの選択例

<div class="sample-container loading" style="height: 600px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-selection' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<sample-button src="grids/data-grid/cell-selection"></sample-button>

<div class="divider--half"></div>

## 概要

$PlatformShort$ データ グリッドでの選択は行およびセル レベルで有効になり、$PlatformShort$ グリッドの `SelectionMode` オプションを使用して構成できます。このプロパティには、以下にリストされている 5 つの異なるオプションがあります。

- `None`: 選択は有効にされていません。
- `SingleCell`: 単一セルの選択が有効です。
- `SingleRow`: 単一行の選択が有効です。
- `MultipleCell`: 複数セルの選択が可能になります。
- `MultipleRow`: 複数行の選択が可能になります。
- `RangeCell`: クリックしてドラッグの複数セル範囲の選択が可能になります。

`MultipleRow` または `MultipleCell` に設定すると、複数行またはセルを選択するために CTRL キーを押す必要はありません。各行/セルは、その特定の行/セルをクリックしたときに選択または選択解除されます。

## コード スニペット

以下は、$PlatformShort$ データ グリッド上の選択を構成して、複数行の選択を設定する方法を紹介します。

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    dataSource={this.data}
    selectionMode="MultipleRow" />
```

```html
<igc-data-grid id="grid"
      height="100%"
      width="100%"
      selection-mode="MultipleRow">
</igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"                      
    DataSource="DataSource"
    SelectionMode="GridSelectionMode.MultipleRow" />
```
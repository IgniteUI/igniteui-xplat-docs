---
title: $Platform$ データ グリッド | セル選択 | 選択 | インフラジスティックス
_description: インフラジスティックスの $Platform$ データ グリッドのセルおよび行選択を使用して、テーブルの領域を強調表示します。$ProductName$ テーブルの単一行選択または複数行選択を設定する方法について説明します。
_keywords: $Platform$ Table, Data Grid, cell selection, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, セル選択, インフラジスティックス
mentionedTypes: ['Grid', 'GridSelectionMode']
_language: ja
---

# $Platform$ グリッドの選択

$ProductName$ Data Table / Data Grid は、単一行または複数行およびセルの選択をサポートしています。

## $Platform$ グリッド選択の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-cell-selection"
           alt="$Platform$ グリッド選択の例"
           github-src="grids/data-grid/cell-selection">
</code-view>

<div class="divider--half"></div>

## 概要

$Platform$ データ グリッドでの選択は行およびセル レベルで有効になり、$Platform$ グリッドの `SelectionMode` オプションを使用して構成できます。このプロパティには、以下にリストされている 5 つの異なるオプションがあります。

- `None`: 選択は有効にされていません。
- `SingleCell`: 単一セルの選択が有効です。
- `SingleRow`: 単一行の選択が有効です。
- `MultipleCell`: 複数セルの選択が可能になります。
- `MultipleRow`: 複数行の選択が可能になります。
- `RangeCell`: クリックしてドラッグの複数セル範囲の選択が可能になります。

`MultipleRow` または `MultipleCell` に設定すると、複数行またはセルを選択するために CTRL キーを押す必要はありません。各行/セルは、その特定の行/セルをクリックしたときに選択または選択解除されます。

## コード スニペット

以下は、$Platform$ データ グリッド上の選択を構成して、複数行の選択を設定する方法を紹介します。

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
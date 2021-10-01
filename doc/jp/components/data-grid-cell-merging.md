---
title: $Platform$ データ グリッド | セル結合 | 結合 | インフラジスティックス
_description: Infragistics の $Platform$ データ グリッドのセル結合機能を使用して、重複する値を持つセルを結合します。
_keywords: $Platform$ Table, Data Grid, cell merging, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, セル結合, インフラジスティックス
mentionedTypes: ['Grid', 'MergedCellMode', 'MergedCellEvaluationCriteria']
_language: ja
---

# $Platform$ グリッド セルの結合

$ProductName$ データ テーブル / データ グリッドはセルの結合をサポートします。You may opt-in and detect when adjacent sibling records for a specific column contains the same value. While the cells are not in edit mode, the value displays across the cells.

## $Platform$ グリッド セルの結合例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-cell-merging"
           alt="$Platform$ グリッド セルの結合例"
           github-src="grids/data-grid/cell-merging">
</code-view>

<div class="divider--half"></div>

## 概要

$Platform$ データ グリッドでのセルの結合は、$Platform$ グリッドの  `MergedCellMode` オプションを使用して構成できます。このプロパティには、以下に示す 3 つのオプションがあります:

- `Never`: グリッドがセルを結合することはありません。これがデフォルトの動作です。
- `Always`: グリッドは常にセルの結合を試みます。
- `OnlyWhenSorted`: グリッドは、列がソートされたときにのみセルの結合を試みます。

Note, regardless of the value of this property, cells can only be merged across sibling records.

さらに、フォーマットが適用されているかどうかに応じて使用できる  `MergedCellEvaluationCriteria` プロパティがあります。このプロパティには、以下に示す 2 つのオプションがあります:

- `RawValue`: セルの生の値が同じ場合、隣接する行のセルを結合します。これがデフォルト値です。
- `FormattedText`: セルからのフォーマットされた値が同じである場合、隣接する行からのセルを結合します。

<div class="divider--half"></div>
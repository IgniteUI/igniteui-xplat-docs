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

`SelectionBehavior` defaults to `ModifierBased`, where only one row or cell is selected at a time and modifier keys (CTRL) are required to multi-select items. `SelectionBehavior` set to `Toggle` will allow multiple rows or cells to be selected on single click only. 

`MultipleRow` includes the following functionality:
- Click and drag to select rows
- Shift and click to select multiple rows.
- Shift and press the up/down arrow keys to select multiple rows.

Pressing the space bar toggles selection of active row via `MultipleRow` or `SingleRow`.

## Row Range Selection

The following example demonstrates how to selected or deselected all rows in the grid. Note, `SelectionMode` must be set to MultipleRow.

<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-selection" 
           alt="$PlatformShort$ Grid Selection Example" 
           github-src="grids/data-grid/row-selection">
</code-view>

<div class="divider--half"></div>

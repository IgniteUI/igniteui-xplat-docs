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
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-cell-selection"
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

`SelectionBehavior` のデフォルトは `ModifierBased` で、一度に 1 つの行またはセルのみが選択され、項目を複数選択するには修飾キー (CTRL) が必要です。`SelectionBehavior` を `Toggle` に設定すると、シングル クリックでのみ複数の行またはセルを選択できます。

`MultipleRow` には次の機能が含まれています。
- クリックしてドラッグし、行を選択します。
- Shift キーを押しながらクリックして、複数の行を選択します。
- Shift キーを押しながら上下の矢印キーを押して、複数の行を選択します。

スペース バーを押すと、`MultipleRow` または `SingleRow` を介してアクティブな行の選択が切り替わります。

## 範囲の行選択

次の例は、グリッド内のすべての行を選択または選択解除する方法を示しています。`SelectionMode` は MultipleRow に設定する必要があることに注意してください。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-row-selection"
           alt="$Platform$ グリッド選択の例"
           github-src="grids/data-grid/row-selection" >
</code-view>

<div class="divider--half"></div>

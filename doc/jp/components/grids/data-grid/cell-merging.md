---
title: {Platform} データ グリッド | セル結合 | 結合 | インフラジスティックス
_description: Infragistics の {Platform} データ グリッドのセル結合機能を使用して、重複する値を持つセルを結合します。
_keywords: {Platform} Table, Data Grid, cell merging, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, セル結合, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.MergedCellMode", "Infragistics.Controls.Grid.Implementation.MergedCellEvaluationCriteria"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッド セルの結合

{ProductName} データ テーブル / データ グリッドはセルの結合をサポートします。オプトインして、特定の列の隣接する兄弟レコードに同じ値が含まれている場合に検出できます。セルがアクティブ、選択、または編集モードではない間、値はセル全体に表示されます。

## {Platform} グリッド セルの結合例

`sample="/grids/data-grid/cell-merging", height="600", alt="{Platform} グリッド セルの結合例"`



<div class="divider--half"></div>

## 概要

{Platform} データ グリッドでのセルの結合は、{Platform} グリッド全体または個々の列の `MergedCellMode` オプションを使用して構成できます。このプロパティは、以下にリストされている次のオプションのいずれかに設定できます:

- `Never`: グリッドまたは列がセルを結合することはありません。これがデフォルトの動作です。
- `Always`: グリッドまたは列が常にセルの結合を試みます。
- `OnlyWhenSorted`: グリッドまたは列が列がソートされたときにのみセルの結合を試みます。

このプロパティの値に関係なく、セルは兄弟レコード間でのみ結合できることに注意してください。

セルの結合は、`MergedCellEvaluationCriteria` プロパティを使用してデータが書式設定されているかどうかに基づいて評価できます。これは、グリッド全体または個々の列に適用され、以下にリストされている次のオプションのいずれかに設定できます。

- `RawValue`: セルの生の値が同じ場合、隣接する行のセルを結合します。これがデフォルト値です。
- `FormattedText`: セルからのフォーマットされた値が同じである場合、隣接する行からのセルを結合します。

<div class="divider--half"></div>

## API リファレンス

 - `FormattedText`
 - `MergedCellEvaluationCriteria`
 - `MergedCellMode`
 - `OnlyWhenSorted`
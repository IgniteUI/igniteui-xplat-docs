---
title: $Platform$ データ グリッド | リアルタイム データ グリッドとテーブル | 読み込みと保存 | インフラジスティックス
_description: ユーザーが作成したレイアウトの読み込みと保存をサポートするインフラジスティックスの $ProductName$ データ テーブルとグリッドをお試しください。
_keywords: $Platform$ Table, Data Grid, cell activation, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, セルのアクティブ化, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $Platform$ グリッド レイアウトの読み込みと保存

$ProductName$ データ テーブル / データ グリッドは、グリッド レイアウトの読み込みと保存をサポートしています。これは、グリッドの `LoadLayout` メソッドと `SaveLayout` メソッドを呼び出すことによって実行されます。These features are useful when an end user can move, sort, and group columns, and wants to preserve the state of the grid and be able to recover the layout and resume work at a later time.

## $Platform$ グリッド レイアウトの読み込みと保存の例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-load-save-layout"
           alt="$Platform$ グリッド レイアウトの読み込みと保存の例"
           github-src="grids/data-grid/load-save-layout">
</code-view>

<div class="divider--half"></div>

## サポートされる機能

グリッドは、次の機能の保存をサポートしています:

- [列の表示状態](data-grid-column-chooser.md)
- [列のピン固定](data-grid-column-pinning.md)
- [列移動](data-grid-column-moving.md)
- [列のサイズ変更](data-grid-column-resizing.md)
- [列のグループ化](data-grid-column-group-by.md)
- [列のソート](data-grid-column-sorting.md)
- [行フィルタリング](data-grid-row-filter.md)

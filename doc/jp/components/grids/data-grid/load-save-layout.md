---
title: {Platform} データ グリッド | リアルタイム データ グリッドとテーブル | 読み込みと保存 | インフラジスティックス
_description: ユーザーが作成したレイアウトの読み込みと保存をサポートするインフラジスティックスの {ProductName} データ テーブルとグリッドをお試しください。
_keywords: {Platform} Table, Data Grid, cell activation, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, セルのアクティブ化, インフラジスティックス
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: {CanonicalLinkToGridMain}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッド レイアウトの読み込みと保存

{ProductName} データ テーブル / データ グリッドは、グリッド レイアウトの読み込みと保存をサポートしています。これは、グリッドの `LoadLayout` メソッドと `SaveLayout` メソッドを呼び出すことによって実行されます。これらの機能は、エンドユーザーが列を移動、ソート、グループ化でき、グリッドの状態を保持し、レイアウトを復元して後で作業を再開できるようにする場合に役立ちます。

## {Platform} グリッド レイアウトの読み込みと保存の例


`sample="/grids/data-grid/load-save-layout", height="600", alt="{Platform} グリッド レイアウトの読み込みと保存の例"`



<div class="divider--half"></div>

## サポートされる機能

グリッドは、次の機能の保存をサポートしています:

- [列の表示状態](column-chooser.md)
- [列のピン固定](column-pinning.md)
- [列の移動](column-moving.md)
- [列のサイズ変更](column-resizing.md)
- [行グループ](row-grouping.md)
- [列のソート](column-sorting.md)
- [列フィルタリング](column-filtering.md)

## API リファレンス

 - `Grid`
 - `LoadLayout`
 - `SaveLayout`
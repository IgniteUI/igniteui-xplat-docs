---
title: {Platform} {ComponentTitle} の仮想化とパフォーマンス - {ProductName}
_description: {ProductName} の仮想化ディレクティブは、大規模なデータセットを処理する際のグリッドのスピードとパフォーマンスの背後にあるコア メカニズムです。無料でお試しください。
_keywords: {Platform} {ComponentTitle}, {ComponentTitle} performance, data table virtualization, {ProductName}, {ComponentTitle} パフォーマンス, データ  テーブルの仮想, インフラジスティックス
_canonicalLink: grid/virtualization
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} {ComponentTitle} 仮想化とパフォーマンス

{ProductName} の `{ComponentName}` コントロールは、`igxForOf` ディレクティブを使用し、水平および垂直方向にコンテンツを仮想化します。

## {Platform} {ComponentTitle} 仮想化とパフォーマンスの例

<code-view style="height:550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-data-performance-virtualization"
           github-src="{ComponentSample}/data-performance-virtualization"
           alt="{Platform} {ComponentTitle} 仮想化とパフォーマンスの例">
</code-view>

## 仮想化の有効化

`ForOf` ディレクティブは、ビューポートに表示されているデータのみを描画し、ユーザーがスクロール時に表示データを切り替えた際に `{ComponentName}` が DOM 描画およびメモリ使用を最適化します。`{ComponentName}` の `Width` および `Height` のデフォルト値は `100%` です。コンテンツが利用可能なスペースにフィットせず、垂直方向または水平方向にスクロールバーが必要な場合に仮想化が有効になります。

ただし、`{ComponentName}` の `Width` または `Height` を明示的に `null` 値に設定できます。つまり、関連するディメンションが項目の合計サイズに基づいて決定されます。スクロールバーが表示されず、すべての項目が相対するディメンション (`Width` が `null` 値の場合は列で、`Height` が `null` 値の場合は行) に描画されます。

データのサイズは以下によって決定されます。

*   垂直 (行) 仮想化の行の高さ。`RowHeight` オプションで決定されますがデフォルトは 50(px) です。
*   水平 (列) 仮想化の列幅 (ピクセル単位)。各列コンポーネントで明示的に幅を設定、または明示的に幅が設定されないすべての列に適用する `{ComponentName}` の `ColumnWidth` オプションを設定できます。

ディメンションを設定せずにグリッドでデフォルト動作を適用する場合、ほとんどの場合は望ましいレイアウトになります。列幅は列カウント、幅が設定された列、および `{ComponentName}` コンテナの計算幅に基づいて決定されます。グリッドは、割り当てる幅が 136px 未満になる以外はすべての列を利用可能なスペースに合わせようとします。その場合、割り当てられない幅を持つ列は 136px の最小幅に設定され、水平方向スクロールバーが表示されます。グリッドは水平方向に仮想化されます。

列幅をパーセンテージ (%) で明示的に設定する場合、ほとんどの場合に水平スクロールバーがない水平方向に仮想化されないグリッドを作成します。

<!-- Angular -->

## リモート仮想化

`{ComponentName}` はリモート仮想化をサポートします。詳細については、[リモート データ操](remote-data-operations.md)作で説明されています。

<!-- end: Angular -->

## 仮想化の制限

*   Mac OS で 「Show scrollbars only when scrolling」システム オプションを true (デフォルト値) に設定した場合、水平スクロールバーが表示されません。これは、`{ComponentName}` の行コンテナーで、overflow が hidden に設定されているためです。オプションを「Always」に変更するとスクロールが表示されます。

## FAQ

### 仮想化がで {ComponentTitle} でディメンションを設定する必要があるのはなぜですか?

描画する前にコンテナーおよび項目のサイズの情報がない場合に `{ComponentName}` でランダムな位置にスクロールすると、スクロールバーの幅や高さの設定、表示項目の決定で誤りが発生します。ディメンションの推測がスクロールバーの誤操作となり、ユーザー エクスペリエンスを低下させます。そのため、仮想化を有効にするには、関連ディメンションを設定する必要があります。

## API リファレンス

* `Grid`
* `Column`

## その他のリソース


* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName}  **GitHub (英語)**]({GithubLink})

---
title: {Platform} ポイント チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} ポイント チャート
_keywords: {Platform} Charts, Point Chart, Infragistics, {Platform} チャート, ポイント チャート, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Legend", 'Series']
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} ポイント チャート

{ProductName} ポイント チャートは、ポイントのコレクションを描画します。値は Y 軸 (左側のラベル) に表示され、カテゴリは X 軸 (下部のラベル) に表示されます。これらのチャートは、プロットされた値の合計を表示することにより、一定期間の変化量を強調したり、複数の項目や全体の一部の関係を比較したりします。

## {Platform} ポイント チャートの例

`CategoryChart` コントロールで {Platform}  ポイント チャートを作成するには、以下の例のように、データを `ItemsSource` プロパティにバインドし、`ChartType` プロパティを **Point** 列挙型に設定します。

`sample="/charts/category-chart/point-chart-multiple-sources", height="600", alt="{Platform} ポイント チャートの例"`



<div class="divider--half"></div>

## 単一シリーズの {Platform} ポイント チャート

次の例では、{Platform} ポイント チャートは、y 軸に数値データ列を、x 軸に非数値データ列を自動的に選択することにより、単一のデータ ソースをプロットします。

`sample="/charts/category-chart/point-chart-single-source", height="600", alt="単一シリーズの {Platform} ポイント チャート"`



<div class="divider--half"></div>

## 複数シリーズの {Platform} ポイント チャート

{Platform} ポイント チャートを使用すると、複数のシリーズを組み合わせて時間の経過に伴う変化を比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、ポイント チャートは追加データに合わせて自動的に更新されます。

`sample="/charts/category-chart/point-chart-multiple-sources", height="600", alt="複数シリーズの {Platform} ポイント チャート"`



<div class="divider--half"></div>

## {Platform} ポイント チャートのスタイル設定

{Platform} ポイント チャートを設定したら、マーカーとそのアウトライン、ブラシ、太さを変更するなど、スタイルをさらにカスタマイズします。

`sample="/charts/category-chart/point-chart-styling", height="600", alt="{Platform} ポイント チャートのスタイル設定"`



<div class="divider--half"></div>

## 高度なタイプのポイント チャート

次のトピックに従って、`CategoryChart` コントロールの代わりに `XamDataChart` コントロールを使用して、より高度なタイプの {Platform} ポイント チャートを作成できます。

- [散布バブル チャート](bubble-chart.md)
- [散布マーカー チャート](scatter-chart.md#{PlatformLower}-散布マーカー-チャート)
- [散布高密度チャート](scatter-chart.md#{PlatformLower}-散布高密度チャート)
- [極座標型マーカー チャート](polar-chart.md#{PlatformLower}-極座標型マーカー-チャート)

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャートのパフォーマンス](../features/chart-performance.md)
- [チャート マーカー](../features/chart-markers.md)

## API リファレンス

以下は、上記のセクションで説明されている API メンバーのリストです。

- `CategoryChart`
- `XamDataChart`
- `ChartType`
- `MarkerTypes`
- `MarkerOutlines`
- `MarkerBrushes`
- `MarkerThickness`


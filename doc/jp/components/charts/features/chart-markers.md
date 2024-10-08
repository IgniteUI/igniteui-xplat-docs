---
title: {Platform} チャート マーカー | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} チャート マーカー
_keywords: {Platform} Charts, Markers, Infragistics, {Platform} チャート, マーカー, インフラジスティックス
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート マーカー

{ProductName} マーカーは、カテゴリ チャートのプロット領域にデータ ポイントの値を表示する視覚要素です。値が主グリッド線と副グリッド線の間にある場合も指定したデータ ポイントの値をただちに識別できるようユーザーをサポートします。

# {Platform} チャート マーカーの例

次の例では、[折れチャート](../types/line-chart.md)は、2009 年から 2019 年までのヨーロッパ、中国、および米国の国々の再生可能エネルギーの発電量を比較しています。マーカーが `MarkerType` プロパティを `Circle` 列挙値に設定して有効になっています。

マーカーのカラーは、以下のサンプルの `MarkerBrushes`プロパティと `MarkerOutlines` プロパティを設定することによっても管理されます。このサンプルでは、ドロップダウンを使用してマーカーと `CategoryChart.ChartType` を構成できます。

`sample="/charts/category-chart/marker-options", height="500", alt="{Platform} 構成オプションの例"`



<div class="divider--half"></div>

# {Platform} チャート マーカー テンプレート

以下の例に示すように、マーカー プロパティに加えて、`XamCategoryChart` コントロールで描画されたシリーズの `MarkerTemplate` プロパティに関数を設定することで、独自のマーカーを実装できます。

`sample="/charts/category-chart/marker-templates", height="600", alt="{Platform} チャート マーカーのテンプレート"`



<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャートのハイライト表示](chart-highlighting.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerType`
- `CategoryChart`

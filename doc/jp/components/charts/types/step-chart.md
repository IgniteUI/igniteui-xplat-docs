---
title: {Platform} ステップ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} ステップ チャート
_keywords: {Platform} Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics, {Platform} チャート, ステップ チャート, ステップ エリア チャート, ステップ折れ線チャート, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} ステップ チャート

{ProductName} ステップ チャートは連続する垂直線と水平線で接続されたポイントのコレクションとして描画されるカテゴリ チャートのグループに属しています。ステップ エリア チャートの場合、線の下の領域が塗りつぶされます。値は y 軸に表示され、カテゴリは x 軸に表示されます。ステップ チャートは、一定期間の変化量を強調したり、複数の項目を比較したりします。

## {Platform} ステップ エリア チャート

`CategoryChart` コントロールでステップ エリア チャートを作成するには、以下の例のように、`ChartType` プロパティを `StepArea` 列挙型に設定します。

`sample="/charts/category-chart/step-area-multiple-sources", height="600", alt=" 複数ソースの {Platform} ステップ エリア チャート"`



<div class="divider--half"></div>

## {Platform} ステップ折れ線チャート

{Platform} ステップ折れ線チャートは、線の下の領域が塗りつぶされていないことを除いて、ステップ エリア チャートと非常によく似ています。

次の例に示すように、データをバインドし、`ChartType` プロパティを `StepLine` 値に設定することで、`CategoryChart` コントロールでステップ折れ線チャートを作成できます。

`sample="/charts/category-chart/step-line-multiple-sources", height="600", alt="複数ソースの {Platform} ステップ折れ線チャート"`



<div class="divider--half"></div>

## {Platform} ステップ チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたステップ チャートが必要な場合は、以下に示すように、`CategoryChart` コントロールの `MarkerTypes`、`MarkerBrushes`、`MarkerOutlines`、折れ線の `Brushes`、および折れ線の `Outlines` プロパティを構成できます。

`sample="/charts/category-chart/step-line-styling", height="600", alt="{Platform} ステップ折れ線チャートのスタイル設定"`



<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [折れ線チャート](line-chart.md)
- [チャート マーカー](../features/chart-markers.md)

## API リファレンス

以下は、上記のセクションで説明されている API メンバーのリストです。

- `CategoryChart`
- `ChartType`
- `StepArea`
- `StepLine`
- `Brushes`
- `Outlines`
- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerTypes`


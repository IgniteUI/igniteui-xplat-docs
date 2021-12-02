---
title: $Platform$ シェープ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $Platform$ シェープ チャート
_keywords: $Platform$ Charts, Shape Chart, Infragistics, $Platform$ チャート, シェープ チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "ScatterPolygonSeries", "ScatterPolylineSeries"]
_language: ja
---
# $Platform$ シェープ チャート

$ProductName$ シェープ チャートは、一連の形状 (1 つまたは複数の X/Y 座標の配列) をとり、それらをデカルト (x、y) 座標系のポリゴンまたはポリラインのコレクションとして描画するチャートのグループです。シェープ チャートは科学データの強調領域でよく使用されますが、ダイアグラム、青写真、さらには建物の間取り図のプロットにも使用できます。

## $Platform$ 散布ポリゴン チャート

$Platform$ 散布ポリゴン チャートは、`XamDataChart` コントロールの `ScatterPolygonSeries` を使用して、デカルト (x、y) 座標系でポリゴンの配列または配列の配列を描画します。このチャートは、プロット図、青写真、さらには建物の間取り図の塗りつぶし図形に使用できます。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ScatterPolygonSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polygon-series"
           github-src="charts/data-chart/type-scatter-polygon-series"
           alt="$Platform$ 散布ポリゴン チャート" >
</code-view>

<div class="divider--half"></div>

## $Platform$ 散布ポリライン チャート

$Platform$ 散布ポリライン チャートは、`XamDataChart` コントロールの `ScatterPolylineSeries` を使用して、デカルト (x、y) 座標系でポリラインの配列または配列の配列を描画します。このチャートは、プロット図、青写真、さらには建物の間取り図のアウトラインに使用できます。また、大量の要素間の複雑な関係を視覚化することもできます。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ScatterPolylineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polyline-series"
           github-src="charts/data-chart/type-scatter-polyline-series"
           alt="$Platform$ 散布ポリライン チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [折れ線チャート](line-chart.md)
- [散布チャート](scatter-chart.md)

## API メンバー

以下は、上記のセクションで説明された API メンバーのリストです。

- `XamDataChart`
- `ScatterPolygonSeries`
- `ScatterPolylineSeries`
- `ItemsSource`
- `ShapeMemberPath`
- `NumericXAxis`
- `NumericYAxis`
- `YAxisName`
- `XAxisName`
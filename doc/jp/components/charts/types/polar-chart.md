---
title: {Platform} 極座標チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} 極座標チャート
_keywords: {Platform} Charts, Polar Chart, Infragistics, {Platform} チャート, 極座標チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "PolarAreaSeries", 'Series']
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} 極座標チャート

{ProductName} 極座標チャートは、デカルト (x、y) 座標系の代わりに極座標 (角度、半径) 座標系を使用してチャートにデータをプロットします。言い換えれば、極座標チャートは[散布図シリーズ](scatter-chart.md)の概念を使用していますが、横の線に沿って伸びるのではなく、円の周りでデータ ポイントをラップします。これらは、科学データのプロットによく用いられ (たとえば風向きや風速、地場の方向と強さ、ソーラー システムの機材の場所など)、予測結果からの収集データの偏差を強調表示できます。

## {Platform} 極座標エリア チャート

極座標型エリア チャートは、データ ポイントを接続するポリゴンのコレクションを使用して描画され、[カテゴリ エリア チャート](area-chart.md#{Platform}-エリア-チャートの例)と同じデータ プロットの概念を使用しますが、視覚化によってデータ ポイントが水平線に沿って配置されるのではなく、円の周りに配置される点が異なります。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarAreaSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-area-chart"
           github-src="charts/data-chart/polar-area-chart"
           alt="{Platform} 極座標型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 極座標スプライン エリア チャート

極座標スプライン エリア チャートもポリゴンのコレクションとして描画されますが、[極座標エリア チャート](polar-chart.md#{Platform}-極座標エリア-チャート)のように直線ではなく、データ ポイントを接続する曲線スプラインを使用します。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarAreaSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-spline-area-chart"
           github-src="charts/data-chart/polar-spline-area-chart"
           alt="{Platform} 極座標型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 極座標型マーカー チャート

極座標型マーカー チャートは、極座標 (角度、半径) でデータ ポイントを表すマーカーのコレクションを使用して描画します。このチャートは、[散布マーカー チャート](scatter-chart.md#{Platform}-散布マーカー-チャート)と同じデータ プロットの概念を使用していますが、視覚化によってデータ ポイントが水平線に沿って引き伸ばされるのではなく、円の周りに折り返される点が異なります。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarScatterSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-scatter-chart"
           github-src="charts/data-chart/polar-scatter-chart"
           alt="{Platform} 極座標型マーカー チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 極座標型折れ線チャート

極座標折れ線チャートは極座標 (角度/半径) のデータ ポイントを結ぶ直線のコレクションを使用して描画されます。このチャートは、[散布折れ線チャート](scatter-chart.md#{Platform}-散布折れ線チャート)と同じデータ プロットの概念を使用しますが、視覚化によってデータ ポイントが水平線に沿って引き伸ばされるのではなく、円の周りにラップされる点が異なります。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarLineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-line-chart"
           github-src="charts/data-chart/polar-line-chart"
           alt="{Platform} 極座標型折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 極座標スプライン チャート

極座標スプライン チャートは極座標 (角度、半径) でデータ ポイントを接続する曲線スプラインのコレクションを使用して描画されます。このチャートは、[散布スプライン チャート](scatter-chart.md#{Platform}-散布スプライン-チャート)と同じデータ プロットの概念を使用しますが、視覚化によってデータ ポイントが水平線に沿って引き伸ばされるのではなく、円の周りにラップされる点が異なります。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarSplineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-spline-chart"
           github-src="charts/data-chart/polar-spline-chart"
           alt="{Platform} 極座標スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 極座標チャートのスタイル設定

極座標チャートを作成したら、線の色、マーカーの種類、またはそれらのマーカーのアウトライン色の変更など、スタイルをさらにカスタマイズしたい場合があります。`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `PolarAreaSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-area-chart-styling"
           github-src="charts/data-chart/polar-area-chart-styling"
           alt="{Platform} 極座標チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [ドーナツ チャート](Donut-chart.md)
- [折れ線チャート](line-chart.md)
- [円チャート](Pie-chart.md)
- [ラジアル チャート](radial-chart.md)
- [散布図](scatter-chart.md)
- [スプライン チャート](spline-chart.md)

## API メンバー

以下は、上記のセクションで説明された API メンバーのリストです。

- `XamDataChart`
- `PolarAreaSeries`
- `PolarLineSeries`
- `PolarSplineSeries`
- `PolarSplineAreaSeries`
- `PolarScatterSeries`
- `ItemsSource`
- `AngleAxisName`
- `AngleMemberPath`
- `RadiusAxisName`
- `RadiusMemberPath`
- `NumericAngleAxis`
- `NumericRadiusAxis`


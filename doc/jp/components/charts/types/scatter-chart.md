---
title: $PlatformShort$ 散布図 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 散布図
_keywords: $PlatformShort$ Charts, Scatter Chart, Infragistics, $PlatformShort$ チャート, 散布図, インフラジスティックス
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries"]
_language: ja
---
# $PlatformShort$ 散布図

$PlatformShort$ 散布図は、異なる一連のデータ内の項目間の関係を示したり、数値の x 座標と y 座標を使用してデータ項目をプロットしたりするチャートのグループです。このチャートは、データの不均等な散らばりやデータの塊に注意が向けられます。科学データのプロットによく用いられ、予測結果からの収集データの偏差を強調表示できます。また、データを時シリーズに (データが時系列でない場合であっても) 構成するためにも使用できます。

## $PlatformShort$ 散布マーカー チャート

$PlatformShort$ 散布図は、マーカーのコレクションとして描画されます。各マーカーには、デカルト座標系での位置を決定する 1 対の数値 X/Y 値があります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ScatterSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-point-chart"
           alt="$PlatformShort$ 散布マーカー チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 散布折れ線チャート

$PlatformShort$ は、直線で接続されたマーカーのコレクションとして描画され、各マーカーにはデカルト座標系での位置を決定する X/Y の数値のペアがあります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ScatterLineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-line-chart"
           alt="$PlatformShort$ 散布折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 散布スプライン チャート

$PlatformShort$ は、曲線スプラインで接続されたマーカーのコレクションとして描画され、各マーカーにはデカルト座標系での位置を決定する X/Y の数値のペアがあります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ScatterSplineSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-line-chart"
           alt="$PlatformShort$ 散布スプライン チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 散布高密度チャート

$PlatformShort$ 散布高密度 (HD) チャートを使用して、わずかな読み込み時間で数千から数百万のデータ ポイントに及ぶ散布データをバインドして表示します。このチャート タイプは非常に多くのポイント用に設計されているため、フル サイズのマーカーではなく小さな点として視覚化され、データ ポイントのクラスターを表すより高い色密度を使用してデータが最も多い領域を表示します。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `HighDensityScatterSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-hd-series"
           alt="$PlatformShort$ 散布 HD チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 散布エリア チャート

$PlatformShort$ 散布エリア チャートは各ポイントに割り当てられた数値を使って、X および Y データの三角形分割に基づいて、色付きのサーフェスを描画します。このチャートはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ScatterAreaSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-area-series"
           alt="$PlatformShort$ 散布エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 散布等高線チャート

$PlatformShort$ 散布等高線チャートは、X データと Y データの三角形分割に基づいて、各ポイントに数値データ値が割り当てられた色付きの等高線を描画します。このチャートはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ScatterContourSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-contour-series"
           alt="$PlatformShort$ 散布等高線チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [バブル チャート](bubble-chart.md)
- [折れ線チャート](line-chart.md)
- [スプライン チャート](spline-chart.md)
- [シェープ チャート](shape-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ                  | コントロール名   | API メンバー
----------------------------|----------------|------------------------
散布マーカー              | `XamDataChart` | `ScatterSeries`
散布折れ線                | `XamDataChart` | `ScatterLineSeries`
散布スプライン              | `XamDataChart` | `ScatterSplineSeries`
高密度散布        | `XamDataChart` | `HighDensityScatterSeries`
散布エリア                | `XamDataChart` | `ScatterAreaSeries`
散布等高線             | `XamDataChart` | `ScatterContourSeries`

---
title: $PlatformShort$ ラジアル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ラジアル チャート
_keywords: $PlatformShort$ Charts, Radial Chart, Infragistics, $PlatformShort$ チャート, ラジアル チャート, インフラジスティックス
mentionedTypes: ["XamDataChart"]
_language: ja
---
# $PlatformShort$ ラジアル チャート

ラジアル チャートは、データを取得し、円の周囲でラップされるデータ ポイントのコレクションとしてデータを描画するシリーズのグループです (カテゴリ シリーズが行うように水平方向の線に沿って拡大するのではなく)。カテゴリ シリーズと同様、ラジアル チャートはチャートの範囲の最小から最大までのカテゴリのリストもマッピングし、カテゴリ シリーズの同じカテゴリ グループ化メカニズムをサポートします。


## $PlatformShort$ ラジアル エリア チャート

The $ProductName$ Radial Area Chart belongs to a group of Radial Charts and has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Area Chart](area-chart.md), but wraps the data points around a circular axis rather than stretching them along a horizontal line.

You can create this type of chart in `XamDataChart` control by binding your data to `RadialAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart"
           alt="$PlatformShort$ ラジアル エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル縦棒チャート

The Radial Column Chart belongs to a group of radial charts, and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Column Chart](column-chart.md), but wraps data points around a circle rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="$PlatformShort$ ラジアル縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル折れ線チャート

The Radial Line Chart belongs to a group of radial charts and has a shape of an unfilled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Line Chart](line-chart.md), but wraps the data points around a circular axis rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-line-chart"
           alt="$PlatformShort$ ラジアル折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル円チャート

The Radial Pie Chart belongs to a group of Radial Charts and uses belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialPieSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-pie-chart"
           alt="$PlatformShort$ ラジアル円チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル チャートのスタイル設定

ラジアル チャートを作成したら、線の色、マーカーの種類、またはそれらのマーカーのアウトライン色の変更など、スタイルをさらにカスタマイズしたい場合があります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RangeAreaSeries` にバインドします。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart-styling"
           alt="$PlatformShort$ ラジアル エリア チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>


## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [縦棒チャート](column-chart.md)
- [ドーナツ チャート](donut-chart.md)
- [折れ線チャート](line-chart.md)
- [円チャート](pie-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ    | コントロール名   | API メンバー
--------------|----------------|-----------------------
ラジアル エリア   | `XamDataChart` | `RadialAreaSeries`
ラジアル縦棒 | `XamDataChart` | `RadialColumnSeries`
ラジアル折れ線   | `XamDataChart` | `RadialLineSeries`
ラジアル円    | `XamDataChart` | `RadialPieSeries`

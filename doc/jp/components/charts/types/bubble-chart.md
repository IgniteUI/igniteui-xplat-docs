---
title: $PlatformShort$ バブル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックス の $PlatformShort$ バブル チャート
_keywords: $PlatformShort$ Charts, Bubble Chart, Infragistics, $PlatformShort$ チャート, バブル チャート, インフラジスティックス
mentionedTypes: ["XamDataChart", "BubbleSeries", "ScatterSeries"]
_language: ja
---
# $PlatformShort$ バブル チャート

$PlatformShort$ Bubble Chart is a type of [Scatter Charts](scatter-chart.md) that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. These coordinates of the data point are determined by two numeric data columns. The Bubble Chart draws attention to uneven intervals or clusters of data. This chart is often used to plot scientific data, and can highlight the deviation of collected data from predicted results. The Bubble Chart has many of the characteristics of the [Scatter Marker Chart](scatter-chart.md#$PlatformShort$-scatter-marker-chart) but with the option to have various radius scale sizes.

## $PlatformShort$ バブル チャートの例

You can create the Bubble Chart in `XamDataChart` control using the `BubbleSeries` and two numeric axes, as shown in the example below.。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-multiple-sources"
           alt="$PlatformShort$ バブル チャートの例" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの $PlatformShort$ バブル チャート

You can bind your data to `ItemsSource` property of `BubbleSeries` and map data columns using its `XMemberPath`, `YMemberPath`, `RadiusMemberPath` properties, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-single-source"
           alt="単一シリーズの  $PlatformShort$ バブル チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ バブル チャート

In $PlatformShort$ Bubble Chart, binding multiple data sources works by setting each new data source to `ItemsSource` property of a additional `BubbleSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-multiple-sources"
           alt="複数シリーズの $PlatformShort$ バブル チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ バブル チャートのスタイル設定

In $PlatformShort$ Bubble Chart, you can customize shape of bubble markers using `MarkerType` property, their size with `RadiusScale` property, and their appearance using `MarkerBrush`, `MarkerOutline`, `MarkerThickness` properties. In addition, you can also color bubble markers based on a data column using `FillMemberPath` and `FillScale` properties. In this example, usage of above properties is demonstrated.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-bubble-chart-styling"
           alt="$PlatformShort$ バブル チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

- [散布図](scatter-chart.md)
- [シェープ チャート](shape-chart.md)


## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `XamDataChart`
- `BubbleSeries`
- `ScatterSeries`
- `ItemsSource`
- `FillMemberPath`
- `FillScale`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`
- `MarkerThickness`
- `RadiusScale`
- `RadiusMemberPath`
- `XMemberPath`
- `YMemberPath`
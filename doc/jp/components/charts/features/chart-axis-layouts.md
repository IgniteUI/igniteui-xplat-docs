---
title: $PlatformShort$ 軸レイアウト | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 軸レイアウト
_keywords: $PlatformShort$ Axis, Layouts, Infragistics, $PlatformShort$ 軸, レイアウト, インフラジスティックス
mentionedTypes: [ 'XamCategoryChart', 'XamDataChart' ]
_language: ja
---

# $PlatformShort$ 軸レイアウト

All $ProductName$ charts include options to configure many axis layout options such as location, gap, and overlap as well as having the ability to share axes and have multiple axes in the same chart. These features are demonstrated in the examples given below.

> NOTE: the following examples applied to `XamCategoryChart` as well as `XamFinancialChart` controls.

## Axis Gap Example

The `XAxisGap` property of the $PlatformShort$ charts, determines the amount of space between columns or bars of plotted series. This property accepts a numeric value between 0.0 and 1.0. The value represents a relative width of the gap out of the available number of pixels between the series.

Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gap"
           alt="$PlatformShort$ Axis Gap Example"
           github-src="charts/category-chart/axis-gap">
</code-view>

<div class="divider--half"></div>

## Axis Overlap Example

The `XAxisOverlap` property of the $PlatformShort$ charts, allows setting the overlap of the rendered columns or bars of plotted series. This property accepts a numeric value between -1.0 and 1.0. The value represents a relative overlap out of the available number of pixels dedicated to each series.

Setting this property to a negative value (down to -1.0) results in the categories being pushed away from each other, producing a gap between themselves. Conversely, setting this property to a positive value (up to 1.0) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-overlap"
           alt="$PlatformShort$ Axis Overlap Example"
           github-src="charts/category-chart/axis-overlap">
</code-view>

<div class="divider--half"></div>

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The `XAxisLabelLocation` property of the $PlatformShort$ charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the `YAxisLabelLocation` property to position y-axis on left side or right side of plot area.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-locations"
           alt="$PlatformShort$ Axis Locations Example"
           github-src="charts/category-chart/axis-locations">
</code-view>

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use `XamDataChart` to share axis, add multiple axes of the same type, or even cross axis at specific values. The following example shows how to use these features.

## Axis Sharing Example

You can share and add multiple axes in the same plot area of the $PlatformShort$ Data Chart. It a common scenario to use share`TimeXAxis` and add multiple `NumericYAxis` to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing"
           alt="$PlatformShort$ Axis Sharing Example"
           github-src="charts/data-chart/axis-sharing">
</code-view>

<div class="divider--half"></div>

## Axis Crossing Example

In the the $PlatformShort$ Data Chart, you can also position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting `CrossingAxis` and `CrossingValue` properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at 0,0 origin.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-crossing"
           alt="$PlatformShort$ Axis Crossing Axes Example"
           github-src="charts/data-chart/axis-crossing">
</code-view>

<div class="divider--half"></div


## その他のリソース

- [軸グリッド線](axis-gridlines.md)
- [軸オプション](axis-options.md)


## API メンバー
- `CrossingAxis`
- `CrossingValue`
- `NumericYAxis`
- `XAxisGap`
- `XAxisLabelLocation`
- `XAxisOverlap`
- `XamDataChart`
- `YAxisLabelLocation`

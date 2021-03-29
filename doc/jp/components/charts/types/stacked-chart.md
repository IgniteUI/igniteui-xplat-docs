---
title: $PlatformShort$ 積層型チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 積層型チャート
_keywords: $PlatformShort$ Charts, Stacked Chart, Infragistics, $PlatformShort$ チャート, 積層型チャート, インフラジスティックス
mentionedTypes: ["XamDataChart"]
_language: ja
---
# $PlatformShort$ Stacked Chart

The $ProductName$ Stacked Chart is special group of charts that render multiple values of data items as stacked area/polygons, bars, columns, lines, or splines. Standard Stacked Charts render actual values of data items while Stacked 100% Charts render values as percentage of total values.


# $PlatformShort$ Stacked Types

This example show all types of $ProductName$ Stacked Chart that you can render in the `XamDataChart` control.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-series"
           alt="$PlatformShort$ Stacked Chart Types" >
</code-view>

<div class="divider--half"></div>

The following sections demonstrate individual types of $ProductName$ Stacked Charts.


## $PlatformShort$ Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the Bar Chart in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

In this example of an Stacked Bar Chart, we have a Numeric X Axis (bottom labels of the chart) and a Category Y Axis (left labels of the chart).

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart"
           alt="$PlatformShort$ Stacked Bar Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100 Bar Chart

The $PlatformShort$ Stacked 100 Bar Chart is identical to the $PlatformShort$ stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point.

In this example of a Stacked 100 Bar Chart, the Energy Product values are shown as a 100% value of all of the data in the fragments of the horizontal bars.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart"
           alt="$PlatformShort$ Stacked 100 Bar Chart" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ Stacked Column Chart

The Stacked Column Chart is identical to the Column Chart in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the Stacked Bar Chart but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="$PlatformShort$ Stacked Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100 Column Chart

The Stacked 100 Column Chart is identical to the Stacked Column Chart in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="$PlatformShort$ Stacked 100 Column Chart" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ Stacked Area Chart

Stacked Area Charts are rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as Area Charts, with the only difference being that visually, the shaded areas are stacked on top of each other.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart"
           alt="$PlatformShort$ Stacked Area Chart" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ Stacked 100 Area Chart

Sometimes the series represent part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart"
           alt="$PlatformShort$ Stacked 100 Area Chart" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ Stacked Spline Area Chart

Stacked Spline Area Charts are rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Charts follow all of the same requirements as area charts, with the only difference being that the visually shaded areas are stacked on top of each other.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-area-chart"
           alt="$PlatformShort$ Stacked Spline Area Chart" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ Stacked 100 Spline Area Chart

The Stacked 100 Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100 Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-area-chart"
           alt="$PlatformShort$ Stacked 100 Spline Area Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked Spline Chart

The Stacked Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions, as we have shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-chart"
           alt="$PlatformShort$ Stacked Spline Chart" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ Stacked 100 Spline Chart

The Stacked 100 Spline Chart is identical to the Stacked Spline Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100 Spline Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-chart"
           alt="$PlatformShort$ Stacked 100 Spline Chart" >
</code-view>

<div class="divider--half"></div>

## その他のリソース
- [棒チャート](bar-chart.md)
- [縦棒チャート](column-chart.md)

## API メンバー
- `Stacked100AreaSeries`
- `Stacked100BarSeries`
- `Stacked100ColumnSeries`
- `Stacked100LineSeries`
- `Stacked100SplineAreaSeries`
- `Stacked100SplineSeries`
- `StackedAreaSeries`
- `StackedBarSeries`
- `StackedColumnSeries`
- `StackedLineSeries`
- `StackedSplineAreaSeries`
- `StackedSplineSeries`
- `XamDataChart`
---
title: {Platform} Stacked Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Stacked Chart
_keywords: {Platform} Charts, Stacked Chart, Stacked 100% Chart, Infragistics
mentionedTypes: ["XamDataChart", "StackedAreaSeries", "Stacked100AreaSeries", "StackedBarSeries", "Stacked100BarSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "StackedLineSeries", "Stacked100LineSeries", "StackedSplineSeries", "Stacked100SplineSeries", "StackedSplineAreaSeries", "Stacked100SplineAreaSeries", 'Series']
namespace: Infragistics.Controls.Charts
---
# {Platform} Stacked Chart

The {ProductName} Stacked Chart belongs to a special group of charts that render multiple values of data items as stacked area/polygons, bars, columns, lines, or splines. Standard Stacked Charts render actual values of data items while Stacked 100% Charts render values as percentage of total values.

## {Platform} Stacked Chart Types

The following example, you can use the drop-down to switch between all of the different types stacked charts available in the {Platform} `XamDataChart` control.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-chart-types"
           github-src="charts/data-chart/stacked-chart-types"
           alt="{Platform} Stacked Chart Types" >
</code-view>

<div class="divider--half"></div>

The following sections demonstrate individual types of {ProductName} Stacked Charts.

## {Platform} Stacked Area Chart

Stacked Area Charts are rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as [Area Chart](area-chart.md), with the only difference being that visually, the shaded areas are stacked on top of each other.

You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart"
           github-src="charts/data-chart/stacked-area-chart"
           alt="{Platform} Stacked Area Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked 100 Area Chart

Sometimes the series represent part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100AreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart"
           github-src="charts/data-chart/stacked-100-area-chart"
           alt="{Platform} Stacked 100 Area Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the [Bar Chart](bar-chart.md) in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

In this example of an Stacked Bar Chart, we have a Numeric X Axis (bottom labels of the chart) and a Category Y Axis (left labels of the chart). You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedBarSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart"
           github-src="charts/data-chart/stacked-bar-chart"
           alt="{Platform} Stacked Bar Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked 100% Bar Chart

The {Platform} Stacked 100% Bar Chart is identical to the {Platform} stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100% bar chart presents the data in terms of percent of the sum of all values in a data point.

In this example of a Stacked 100% Bar Chart, the Energy Product values are shown as a 100% value of all of the data in the fragments of the horizontal bars. You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100BarSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart"
           github-src="charts/data-chart/stacked-100-bar-chart"
           alt="{Platform} Stacked 100 Bar Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked Column Chart

The Stacked Column Chart is identical to the [Column Chart](column-chart.md) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the Stacked Bar Chart but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedColumnSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           github-src="charts/data-chart/stacked-column-chart"
           alt="{Platform} Stacked Column Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the Stacked Column Chart in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100% Column Chart presents the data in terms of percent of the sum of all values in a data point.

The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers. You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100ColumnSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           github-src="charts/data-chart/stacked-100-column-chart"
           alt="{Platform} Stacked 100 Column Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked Line Chart

The Stacked Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-line-chart"
           alt="{Platform} Stacked Line Chart"
           github-src="charts/data-chart/stacked-line-chart">
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked 100% Line Chart

The Stacked 100% Line Chart is identical to the Stacked Line Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Line Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100LineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-line-chart"
           alt="{Platform} Stacked 100 Line Chart"
           github-src="charts/data-chart/stacked-100-line-chart">
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked Spline Area Chart

Stacked Spline Area Charts are rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Charts follow all of the same requirements as [Area Chart](area-chart.md), with the only difference being that the visually shaded areas are stacked on top of each other.

You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedSplineAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-area-chart"
           github-src="charts/data-chart/stacked-spline-area-chart"
           alt="{Platform} Stacked Spline Area Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked 100% Spline Area Chart

The Stacked 100% Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100SplineAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-area-chart"
           github-src="charts/data-chart/stacked-100-spline-area-chart"
           alt="{Platform} Stacked 100 Spline Area Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked Spline Chart

The Stacked Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedSplineSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-chart"
           github-src="charts/data-chart/stacked-spline-chart"
           alt="{Platform} Stacked Spline Chart" >
</code-view>

<div class="divider--half"></div>


## {Platform} Stacked 100% Spline Chart

The Stacked 100% Spline Chart is identical to the Stacked Spline Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100SplineSeries`.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-chart"
           github-src="charts/data-chart/stacked-100-spline-chart"
           alt="{Platform} Stacked 100 Spline Chart" >
</code-view>

<div class="divider--half"></div>


## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type               | Control Name   | API Members
-------------------------|----------------|--------------------------------
Stacked Area             | `XamDataChart` | `StackedAreaSeries`
Stacked Bar              | `XamDataChart` | `StackedBarSeries`
Stacked Column           | `XamDataChart` | `StackedColumnSeries`
Stacked Line             | `XamDataChart` | `StackedLineSeries`
Stacked Spline           | `XamDataChart` | `StackedSplineSeries`
Stacked Spline Area      | `XamDataChart` | `StackedSplineAreaSeries`
Stacked 100% Area        | `XamDataChart` | `Stacked100AreaSeries`
Stacked 100% Bar         | `XamDataChart` | `Stacked100BarSeries`
Stacked 100% Column      | `XamDataChart` | `Stacked100ColumnSeries`
Stacked 100% Line        | `XamDataChart` | `Stacked100LineSeries`
Stacked 100% Spline      | `XamDataChart` | `Stacked100SplineSeries`
Stacked 100% Spline Area | `XamDataChart` | `Stacked100SplineAreaSeries`

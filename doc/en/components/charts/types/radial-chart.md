---
title: $PlatformShort$ Radial Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Radial Chart
_keywords: $PlatformShort$ Charts, Radial Chart, Infragistics
mentionedTypes: ["XamDataChart"]
---
# $PlatformShort$ Radial Chart

Radial Chart is a group of series that takes data and render it as collection of data points wrapped around a circle (rather than stretching along a horizontal line as Category Series do). Just like Category Series, Radial Chart are also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the same category grouping mechanisms of Category Series.

## $PlatformShort$ Radial Area Chart

The $ProductName$ Radial Area Chart belongs to a group of Radial Charts and has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Area Chart](area-chart.md), but wraps the data points around a circular axis rather than stretching them along a horizontal line.

The following example depicts a player attribute chart for a pair of professional soccer players. You can create this type of chart in `XamDataChart` control by binding your data to `RadialAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart"
           alt="$PlatformShort$ Radial Area Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Column Chart

The Radial Column Chart belongs to a group of radial charts, and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Column Chart](column-chart.md), but wraps data points around a circle rather than stretching them along a horizontal line.

The following example depicts a player attribute chart for a pair of professional soccer players. You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="$PlatformShort$ Radial Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Line Chart

The Radial Line Chart belongs to a group of radial charts and has a shape of an unfilled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Line Chart](line-chart.md), but wraps the data points around a circular axis rather than stretching them along a horizontal line.

The following example depicts a player attribute chart for a pair of professional soccer players. You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-line-chart"
           alt="$PlatformShort$ Radial Line Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Pie Chart

The Radial Pie Chart belongs to a group of Radial Charts and uses belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

The following example depicts a player attribute chart for a pair of professional soccer players. You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialPieSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-pie-chart"
           alt="$PlatformShort$ Radial Pie Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Chart Styling

Once our radial chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers.

The following example depicts a player attribute chart for a pair of professional soccer players. You can create this type of chart in `XamDataChart` control by binding your data to `RadialAreaSeries`, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart-styling"
           alt="$PlatformShort$ Radial Area Chart Styling" >
</code-view>

<div class="divider--half"></div>


## Additonal Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Donut Chart](donut-chart.md)
- [Line Chart](line-chart.md)
- [Pie Chart](pie-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type    | Control Name   | API Members
--------------|----------------|-----------------------
Radial Area   | `XamDataChart` | `RadialAreaSeries`
Radial Column | `XamDataChart` | `RadialColumnSeries`
Radial Line   | `XamDataChart` | `RadialLineSeries`
Radial Pie    | `XamDataChart` | `RadialPieSeries`

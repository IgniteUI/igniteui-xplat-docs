---
title: $PlatformShort$ Polar Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Polar Chart
_keywords: $PlatformShort$ Charts, Polar Chart, Infragistics
mentionedTypes: ["XamDataChart", "PolarAreaSeries", "PolarLineSeries", "PolarSplineSeries"]
---
# $PlatformShort$ Polar Chart

$PlatformShort$ Polar Chart is a group of series that use the polar (angle, radius) coordinate system instead of the Cartesian (x, y) coordinate system to plot data in chart. In other words, Polar Chart take concepts of [Scatter Series](scatter-chart.md) and wrap them around a circle rather than stretching along a horizontal line. This group of series is used to show the relationship among the items in several distinct series of data using the polar coordinates system.

Polar Chart draw attention to uneven intervals or clusters of data. They are often used to plot scientific data (e.g. wind direction and speed, direction, and strength of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

## $PlatformShort$ Polar Line Chart

The Polar Line Chart belongs to a group of polar charts and is rendered using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. Polar Line Charts use the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md) with the difference that the visualization wraps data points around a circle rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-line-series"
           alt="$PlatformShort$ Polar Line Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Polar Spline Chart

The Polar Spline Chart belongs to a group of polar charts and is rendered using a collection of curved splines connecting data points in polar (angle/radius) coordinate system. Polar Spline Charts use the same concepts of data plotting as the [Scatter Spline Chart](scatter-chart.md) with the difference that the visualization wraps data points around a circle rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarSplineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-spline-series"
           alt="$PlatformShort$ Polar Spline Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Polar Chart Styling

Once our polar chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers.

You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarAreaSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-area-chart-styling"
           alt="$PlatformShort$ Polar Area Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](line-chart.md)
- [Radial Chart](radial-chart.md)
- [Scatter Chart](scatter-chart.md)
- [Spline Chart](spline-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type       | Control Name   | API Members
-----------------|----------------|---------------------
Polar Area       | `XamDataChart` | `PolarAreaSeries`
Polar Line       | `XamDataChart` | `PolarLineSeries`
Polar Spline     | `XamDataChart` | `PolarSplineSeries`

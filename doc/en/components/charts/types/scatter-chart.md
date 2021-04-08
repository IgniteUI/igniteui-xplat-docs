---
title: $PlatformShort$ Scatter Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Scatter Chart
_keywords: $PlatformShort$ Charts, Scatter Chart, Infragistics
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries"]
---
# $PlatformShort$ Scatter Chart

$PlatformShort$ Scatter Chart is a group of series that show markers to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. The x and y coordinates of the data point are determined by two numeric data columns. The Scatter Series draw attention to uneven intervals or clusters of data. These types of series are often used to plot scientific data, and can highlight the deviation of collected data from predicted results. Scatter series can also be used to organize data chronologically (even if the data is not in chronological order).

## $PlatformShort$ Scatter Marker Chart

In this example, the Scatter Point Chart is comparing the total births and deaths between Africa and Europe in 2015. You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-point-chart"
           alt="$PlatformShort$ Scatter Marker Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Scatter Line Chart

The Scatter Line Chart belongs to a group of scatter charts that use the Cartesian (x, y) coordinate system to plot data. This series is rendered as a collection of markers connected by a straight line, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-line-chart"
           alt="$PlatformShort$ Scatter Line Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Scatter Spline Chart

The Scatter Spline Chart belongs to a group of scatter charts that use the Cartesian (x, y) coordinate system to plot data. This series is rendered as a collection of markers connected by a curved spline, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterSplineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-spline-chart"
           alt="$PlatformShort$ Scatter Spline Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Scatter High Density Chart

Use the $PlatformShort$ DataChart's High Density Scatter Chart functionality to bind and show scatter data ranging from thousands to millions of data points with very little loading time. Due to this chart type being designed for such a large amount of points, it is visualized as tiny dots as opposed to full sized markers, and displays areas with the most data using a higher color density representing a cluster of data points.

You can create this type of chart in the `XamDataChart` control by binding your data to a `HighDensityScatterSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-hd-series"
           alt="$PlatformShort$ Scatter HD Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Scatter Area Chart

The Scatter Area Chart draws a colored surface based on a triangulation of X and Y data with a numeric data value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterAreaSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-area-series"
           alt="$PlatformShort$ Scatter Area Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Scatter Contour Chart

The Scatter Contour Chart draws colored contour lines based on a triangulation of X and Y data with a numeric data value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterContourSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-contour-series"
           alt="$PlatformShort$ Scatter Contour Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Charts](area-chart.md)
- [Bubble Charts](bubble-chart.md)
- [Line Charts](line-chart.md)
- [Spline Charts](spline-chart.md)
- [Shape Charts](shape-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type                  | Control Name   | API Members
----------------------------|----------------|------------------------
Scatter Marker              | `XamDataChart` | `ScatterSeries`
Scatter Line                | `XamDataChart` | `ScatterLineSeries`
Scatter Spline              | `XamDataChart` | `ScatterSplineSeries`
High Density Scatter        | `XamDataChart` | `HighDensityScatterSeries`
Scatter Area                | `XamDataChart` | `ScatterAreaSeries`
Scatter Contour             | `XamDataChart` | `ScatterContourSeries`

---
title: {Platform} Scatter Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Scatter Chart
_keywords: {Platform} Charts, Scatter Chart, Infragistics
_language: kr
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries"]
---
# {Platform} Scatter Charts

The {ProductName} Scatter Chart belongs to a group of charts that show the relationship among items in distinct series of data or to plot data items using numeric x and y coordinates. These charts draw attention to uneven intervals or clusters of data. They are often used to plot scientific data, and can highlight the deviation of collected data from predicted results. Also, you can use them to organize data chronologically (even if the data is not in chronological order).

## {Platform} Scatter Marker Chart

{Platform} Scatter Marker Chart renders as a collection of markers, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-point-chart"
           github-src="charts/data-chart/scatter-point-chart"
           alt="{Platform} Scatter Marker Chart" >
</code-view>

<div class="divider--half"></div>

## {Platform} Scatter Line Chart

{Platform} Scatter Line Chart renders as a collection of markers connected by a straight lines, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-line-chart"
           github-src="charts/data-chart/scatter-line-chart"
           alt="{Platform} Scatter Line Chart" >
</code-view>

<div class="divider--half"></div>

## {Platform} Scatter Spline Chart

{Platform} Scatter Spline Chart renders as a collection of markers connected by a curved spline, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterSplineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-scatter-spline-chart"
           github-src="charts/data-chart/scatter-spline-chart"
           alt="{Platform} Scatter Spline Chart" >
</code-view>

<div class="divider--half"></div>

## {Platform} Scatter High Density Chart

Use the {Platform} Scatter High Density (HD) Chart to bind and show scatter data ranging from thousands to millions of data points with very little loading time. Due to this chart type being designed for such a large amount of points, it is visualized as tiny dots as opposed to full sized markers, and displays areas with the most data using a higher color density representing a cluster of data points.

You can create this type of chart in the `XamDataChart` control by binding your data to a `HighDensityScatterSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-hd-series"
           github-src="charts/data-chart/type-scatter-hd-series"
           alt="{Platform} Scatter HD Chart" >
</code-view>

<div class="divider--half"></div>

## {Platform} Scatter Area Chart

{Platform} Scatter Area Chart draws a colored surface based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterAreaSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-area-series"
           github-src="charts/data-chart/type-scatter-area-series"
           alt="{Platform} Scatter Area Chart" >
</code-view>

<div class="divider--half"></div>

## {Platform} Scatter Contour Chart

{Platform} Scatter Contour Chart draws colored contour lines based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ScatterContourSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-contour-series"
           github-src="charts/data-chart/type-scatter-contour-series"
           alt="{Platform} Scatter Contour Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Bubble Chart](bubble-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

Chart Type                  | Control Name   | API Members
----------------------------|----------------|------------------------
Scatter Marker              | `XamDataChart` | `ScatterSeries`
Scatter Line                | `XamDataChart` | `ScatterLineSeries`
Scatter Spline              | `XamDataChart` | `ScatterSplineSeries`
High Density Scatter        | `XamDataChart` | `HighDensityScatterSeries`
Scatter Area                | `XamDataChart` | `ScatterAreaSeries`
Scatter Contour             | `XamDataChart` | `ScatterContourSeries`

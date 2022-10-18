---
title: {Platform} Point Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Point Chart
_keywords: {Platform} Charts, Point Chart, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Legend", 'Series']
namespace: Infragistics.Controls.Charts
---
# {Platform} Point Chart

The {ProductName} Point Chart renders a collection of points. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). These charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

## {Platform} Point Chart Example

You can create the {Platform} Point Chart in the `CategoryChart` control by binding your data to `ItemsSource` property and setting `ChartType` property to **Point** enum, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           github-src="charts/category-chart/point-chart-multiple-sources"
           alt="{Platform} Point Chart Example" >
</code-view>

<div class="divider--half"></div>

## {Platform} Point Chart with Single Series

In the following example, the {Platform} Point Chart plots a single data source by automatically selecting numeric data column for y-axis and non-numeric data column for x-axis.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-single-source"
           github-src="charts/category-chart/point-chart-single-source"
           alt="{Platform} Point Chart with Single Series" >
</code-view>

<div class="divider--half"></div>

## {Platform} Point Chart with Multiple Series

Since the {Platform} Point Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the point chart will automatically update to fit the additional data.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           github-src="charts/category-chart/point-chart-multiple-sources"
           alt="{Platform} Point Chart with Multiple Series" >
</code-view>

<div class="divider--half"></div>

## {Platform} Point Chart Styling

Once the {Platform} Point Chart is set up, we may want to make some further styling customizations such as change the markers and its outlines, brushes and thickness.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-styling"
           github-src="charts/category-chart/point-chart-styling"
           alt="{Platform} Point Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Advanced Types of Point Charts

You can create more advanced types of {Platform} Point Charts using the `XamDataChart` control instead of `CategoryChart` control by following these topics:

- [Scatter Bubble Chart](bubble-chart.md)
- [Scatter Marker Chart](scatter-chart.md#{Platform}-scatter-marker-chart)
- [Scatter HD Chart](scatter-chart.md#{Platform}-scatter-high-density-chart)
- [Polar Marker Chart](polar-chart.md#{Platform}-polar-Marker-chart)

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Performance](../features/chart-performance.md)
- [Chart Markers](../features/chart-markers.md)

## API Members

The following table lists API members mentioned in the above sections:

- `CategoryChart`
- `XamDataChart`
- `ChartType`
- `MarkerTypes`
- `MarkerOutlines`
- `MarkerBrushes`
- `MarkerThickness`


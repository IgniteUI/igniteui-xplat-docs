---
title: {Platform} Point Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Point Chart
_keywords: {Platform} Charts, Point Chart, Infragistics
_language: kr
mentionedTypes: ["CategoryChart", "ChartType", "Legend"]
---
# {Platform} Point Chart

The {ProductName} Point Chart renders a collection of points. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). These charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

## {Platform} Point Chart Example

You can create the {Platform} Point Chart in the `CategoryChart` control by binding your data to `ItemsSource` property and setting `ChartType` property to `Point` value, as shown in the example below.

`sample="/charts/category-chart/point-chart-multiple-sources", height="600", alt="{Platform} Point Chart Example"`



<div class="divider--half"></div>

## {Platform} Point Chart with Single Series

In the following example, the {Platform} Point Chart is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019. The Y-Axis, or labels on the left of the chart, are displaying the terawatt hour (TWh) values of renewed electricity and the X-Axis, or labels on the bottom of the chart, are displaying the year.

`sample="/charts/category-chart/point-chart-single-source", height="600", alt="{Platform} Point Chart with Single Series"`



<div class="divider--half"></div>

## {Platform} Point Chart with Multiple Series

Since the {Platform} Point Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the point chart will automatically update to fit the additional data.

`sample="/charts/category-chart/point-chart-multiple-sources", height="600", alt="{Platform} Point Chart with Multiple Series"`



<div class="divider--half"></div>

## {Platform} Point Chart Styling

Once the {Platform} Point Chart is set up, we may want to make some further styling customizations such as change the markers and its outlines, brushes and thickness.

`sample="/charts/category-chart/point-chart-styling", height="600", alt="{Platform} Point Chart Styling"`



<div class="divider--half"></div>

## Advanced Types of Point Charts

You can create more advanced types of {Platform} Point Charts using the `XamDataChart` control instead of `CategoryChart` control by following these topics:

- [Scatter Bubble Chart](bubble-chart.md)
- [Scatter Marker Chart](scatter-chart.md#{PlatformLower}-scatter-marker-chart)
- [Scatter HD Chart](scatter-chart.md#{PlatformLower}-scatter-high-density-chart)
- [Polar Marker Chart](polar-chart.md#{PlatformLower}-polar-marker-chart)

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Performance](../features/chart-performance.md)
- [Chart Markers](../features/chart-markers.md)

## API References

The following table lists API members mentioned in the above sections:

- `CategoryChart`
- `XamDataChart`
- `ChartType`
- `MarkerTypes`
- `MarkerOutlines`
- `MarkerBrushes`
- `MarkerThickness`


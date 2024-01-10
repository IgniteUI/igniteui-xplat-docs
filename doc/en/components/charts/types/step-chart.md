---
title: {Platform} Step Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Step Chart
_keywords: {Platform} Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", 'Series', "CategoryChartType"]
namespace: Infragistics.Controls.Charts
---
# {Platform} Step Chart

The {ProductName} Step Chart belongs to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. Values are represented on the y-axis and categories are displayed on the x-axis. Step Chart emphasizes the amount of change over a period of time or compares multiple items.

## {Platform} Step Area Chart

You can create {Platform} Step Area Chart in the `CategoryChart` control by setting `ChartType` property to `StepArea` enum, as shown in the example below.

`sample="/charts/category-chart/step-area-multiple-sources", height="600", alt="{Platform} Step Area Chart Multiple Sources"`



<div class="divider--half"></div>

## {Platform} Step Line Chart

The {Platform} Step Line Chart is very similar to Step Area Chart, except that the area below lines are filled in.

You can create Step Line Chart in the `CategoryChart` control by binding your data and setting `ChartType` property to `StepLine` value, as shown in the example below.

`sample="/charts/category-chart/step-line-multiple-sources", height="600", alt="{Platform} Step Line Chart Multiple Sources"`



<div class="divider--half"></div>

## {Platform} Step Chart Styling

If you need Step Charts with more features such as composite other series, you can configure the `MarkerTypes`, `MarkerBrushes`, `MarkerOutlines`, lines' `Brushes`, and lines' `Outlines` properties on the `CategoryChart` control as demonstrated below.

`sample="/charts/category-chart/step-line-styling", height="600", alt="{Platform} Styling Step Line Chart"`



<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](line-chart.md)
- [Chart Markers](../features/chart-markers.md)

## API References

The following table lists API members mentioned in the above sections:

- `CategoryChart`
- `ChartType`
- `StepArea`
- `StepLine`
- `Brushes`
- `Outlines`
- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerTypes`


---
title: $PlatformShort$ Step Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Step Chart
_keywords: $PlatformShort$ Charts, Step Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ChartType"]
---
# $PlatformShort$ Step Charts

$PlatformShort$ Step Charts is to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. . Values are represented on the y-axis and categories are displayed on the x-axis. This emphasizes the amount of change over a period of time or compares multiple items.

## $PlatformShort$ Step Line Chart

You can create Step Line Chart in the `XamCategoryChart` control by binding your data to `ItemsSource` property and setting `ChartType` property to `StepLine` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="$PlatformShort$ Step Line Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Step Area Chart

The Step Area Chart is very similar to Step Area Chart, except that the area below lines are filled in.

You can create a Step Chart in the `XamCategoryChart` control by setting `ChartType` property to `StepArea` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources"
           alt="$PlatformShort$ Step Area Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Step Chart Styling

If you need a Step Chart with more features such as composite other series, you can configure the `MarkerTypes`, `MarkerBrushes`, `MarkerOutlines`, lines' `Brushes` and lines' `Outlines` properties on the `XamCategoryChart` control as demonstrated below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-styling"
           alt="$PlatformShort$ Styling Step Line Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Charts](area-chart.md)
- [Line Charts](line-chart.md)
- [Chart Markers](../features/chart-markers.md)

## API Members

The following table lists API members mentioned in the above sections:

- `XamCategoryChart`
- `ChartType`
- `StepArea`
- `StepLine`
- `Brushes`
- `Outlines`
- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerTypes`


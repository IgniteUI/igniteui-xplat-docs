---
title: $Platform$ Spline Chart | Data Visualization | Infragistics
_description: Infragistics' $Platform$ Spline Chart
_keywords: $Platform$ Charts, Spline Chart, Infragistics
_language: kr
mentionedTypes: ["CategoryChart", "XamDataChart", "SplineSeries", "StackedSplineSeries", "Stacked100SplineSeries"]
---
# $Platform$ Spline Chart

The $ProductName$ Spline Chart belongs to a group of Category Charts that render as a collection of points connected by smooth curves of spline. Values are represented on the y-axis and categories are displayed on the x-axis. Spline Chart emphasizes the amount of change over a period of time or compares multiple items as well as the relationship of parts to a whole by displaying the total of the plotted values. Spline Chart is identical to [Line Chart](line-chart.md) in all aspects except that line connecting data points has spline interpolation and smoothing for improved presentation of data.

## $Platform$ Spline Chart Example

The following example shows how to create $Platform$ Spline Chart in the `CategoryChart` control by binding your data and setting the `ChartType` property to Spline enum.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           github-src="charts/category-chart/spline-multiple-sources"
           alt="$Platform$ Spline Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Spline Chart with Single Series

The Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period for Europe, as shown in the example below.

You can create this type of chart in the `CategoryChart` control by binding your data and setting the `ChartType` property to `Spline`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-single-source"
           github-src="charts/category-chart/spline-single-source"
           alt="$Platform$ Spline Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Spline Chart with Multiple Series

Since the Spline Chart allows you to combine multiple series and compare or see how they change over time. All we need to do is bind to a data source containing the data for China and the USA, and the chart will automatically update to fit the additional data.

You can create this type of chart in the `CategoryChart` control by binding your data and setting the `ChartType` property to `Spline`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           github-src="charts/category-chart/spline-multiple-sources"
           alt="$Platform$ Spline Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Spline Chart Styling

If you need a Spline Chart with more features such as composite other series, you can configure the markers, marker brushes, marker outlines, series brushes and series outlines as demonstrated below.

You can create this type of chart in the `CategoryChart` control by binding your data and setting the `ChartType` property to `Spline`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-styling"
           github-src="charts/category-chart/spline-styling"
           alt="$Platform$ Spline Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Advanced Types of Spline Charts

The following sections explain more advanced types of $Platform$ Spline Charts that can be created using the `XamDataChart` control instead of `CategoryChart` control with simplified API.

## $Platform$ Stacked Spline Chart

The Stacked Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions, as we have shown in the example below.

You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedSplineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-chart"
           github-src="charts/data-chart/stacked-spline-chart"
           alt="$Platform$ Stacked Spline Chart" >
</code-view>

<div class="divider--half"></div>

## $Platform$ Stacked 100% Spline Chart

The Stacked 100% Spline Chart is identical to the Stacked Spline Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100SplineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-chart"
           github-src="charts/data-chart/stacked-100-spline-chart"
           alt="$Platform$ Stacked 100 Spline Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](spline-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)
- [Stacked Chart](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type          | Control Name       | API Members
--------------------|--------------------|--------------------------
Spline              | `CategoryChart` | `ChartType` = `Spline`
Stacked Spline      | `XamDataChart`     | `StackedSplineSeries`
Stacked 100% Spline | `XamDataChart`     | `Stacked100SplineSeries`

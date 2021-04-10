---
title: $PlatformShort$ Line Charts and Graphs | $ProductName$
_description: The $PlatformShort$ Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds. Try for FREE.
_keywords: $PlatformShort$ Charts, Line Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "Legend", "PolarLineSeries", "RadialLineSeries", "StackedLineSeries", "Stacked100LineSeries"]
---
# $PlatformShort$ Line Charts

$PlatformShort$ Line Charts, or Line Graphs, are a type of category charts that show the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart.

## $PlatformShort$ Category Line Chart

In the following example, Category Line Chart is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019. The Y-Axis, or labels on the left of the chart, are displaying the terawatt hour (TWh) values of renewed electricity and the X-Axis, or labels on the bottom of the chart, are displaying the year.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources"
           alt="$PlatformShort$ Line Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Line Chart Recommendations

### Are $PlatformShort$ Line Charts right for your project?

- Different than an [area chart](area-chart.md), the line chart does not fill the area between the X-Axis (bottom axis) and the line.
- The $PlatformShort$ line chart is identical to the $PlatformShort$ [spline chart](spline-chart.md) in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

A Line Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Layered Line Chart
- Stacked Line Chart
- Stepped Line Chart
- Polar Line Chart
- Stacked 100 Line Chart

### Line Chart Use Cases

There are several common use cases for choosing a Line Chart:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming and Drill-down.
- Need to compare the trends over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize detailed time-series data.

### Line Chart Best Practices:

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data  from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Line Chart

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period), it makes overlapped lines impossible to differentiate.

### Line Chart Data Structure:

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source must contain at least one data item.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## $PlatformShort$ Line Chart with Single Series

The $PlatformShort$ Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period, as we have shown in the example below.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-single-source"
           alt="$PlatformShort$ Line Chart with Single Source"
           github-src="charts/category-chart/chart-single-source">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Line Chart with Multiple Series

Since the $PlatformShort$ Line Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the line chart will automatically update to fit the additional data.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources"
           alt="$PlatformShort$ Line Chart with Multiple Sources"
           github-src="charts/category-chart/line-chart-multiple-sources'">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Line Chart with Live Data

The $PlatformShort$ Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

In this example, we are streaming live data into the $PlatformShort$ Line Chart at an interval of your choosing. You can set the data points from 5,000 to 1 million and update the chart to optimize the scale based on the device you are rendering the chart on.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency"
           alt="$PlatformShort$ Line Chart Live Data Example"
           github-src="charts/category-chart/high-frequency">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Styling Line Chart

Once our chart is set up, we may want to make some further styling customizations such as change the line colors, change the legend font family, and/or increase the size of the axis labels to make it easier to read.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Line`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-styling"
           alt="$PlatformShort$ Line Chart Styling"
           github-src="charts/category-chart/line-chart-styling">
</code-view>

<div class="divider--half"></div>

## Advanced Types of Line Charts

The following sections explain more advanced types of $PlatformShort$ Line Charts that can be created using the `XamDataChart` control instead of `XamCategoryChart` control with simplified API.

## $PlatformShort$ Stacked Line Chart

The Stacked Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-line-chart"
           alt="$PlatformShort$ Stacked Line Chart"
           github-src="charts/data-chart/stacked-line-chart">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100% Line Chart

The Stacked 100% Line Chart is identical to the Stacked Line Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Line Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100LineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-line-chart"
           alt="$PlatformShort$ Stacked 100 Line Chart"
           github-src="charts/data-chart/stacked-100-line-chart">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Line Chart

The Radial Line Chart belongs to a group of radial charts and has a shape of an unfilled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Line Chart, but wraps the data points around a circular axis rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-line-chart"
           alt="$PlatformShort$ Radial Line Chart"
           github-src="charts/data-chart/radial-line-chart">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Polar Line Chart

The Polar Line Chart belongs to a group of polar charts and is rendered using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. Polar Line Charts use the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md) with the difference that the visualization wraps data points around a circle rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `PolarLineSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-line-series"
           alt="$PlatformShort$ Polar Line Chart"
           github-src="charts/data-chart/type-polar-line-series">
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Charts](area-chart.md)
- [Column Charts](column-chart.md)
- [Polar Charts](polar-chart.md)
- [Radial Charts](radial-chart.md)
- [Spline Charts](spline-chart.md)
- [Stacked Charts](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type        | Control Name       | API Members
------------------|--------------------|-----------------------
Line              | `XamCategoryChart` | `ChartType` = `Line`
Polar Line        | `XamDataChart`     | `PolarLineSeries`
Radial Line       | `XamDataChart`     | `RadialLineSeries`
Stacked Line      | `XamDataChart`     | `StackedLineSeries`
Stacked 100% Line | `XamDataChart`     | `Stacked100LineSeries`
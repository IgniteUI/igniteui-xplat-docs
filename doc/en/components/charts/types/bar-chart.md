---
title: $PlatformShort$ Bar Charts and Graphs | $ProductName$
_description: $PlatformShort$ Bar Charts are among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories. Try for FREE.
_keywords: $PlatformShort$ Charts, Bar Chart, Infragistics
mentionedTypes: ["XamDataChart", "BarSeries", "StackedBarSeries", "Stacked100BarSeries"]
---
# $PlatformShort$ Bar Charts

$PlatformShort$ Bar Charts, Bar Graphs, or Horizontal Bar Charts, are among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by horizontal bars with equal heights but different lengths. They are ideal for showing variations in the value of an item over time. Data is represented using a collection of rectangles that extend from the left to right of the chart towards the values of data points. Bar Charts are very similar to [Column Charts](column-chart.md) except that Bar Charts render with 90 degrees clockwise rotation and therefore they have horizontal orientation (left to right) while [Column Charts](column-chart.md) have vertical orientation (up and down)

## $PlatformShort$ Category Bar Chart

The $ProductName$ Category Bar Chart groups data items from multiple data sources into categories and renders them as horizontal bars or rectangles. Values are represented on the X-Axis and categories are displayed on the Y-Axis.

You can create this type of chart in the `XamDataChart` control by binding your data sources to multiple `BarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources"
           alt="$PlatformShort$ Bar Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Bar Chart Recommendations

### Are $PlatformShort$ Bar Charts right for your project?

$PlatformShort$ Bar Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Grouped Bar Chart
- Stacked Bar Chart
- Polar Bar Chart
- Stacked 100 Bar Chart

### Bar Chart Use Cases

There are several common use cases for choosing a Bar Chart:

- You need to show trends over time or a numeric value change in a category of data.
- You need to compare data values of 1 or more data series.
- You want to show a part-to-whole comparison.
- You want to show top or bottom percentage of categories.
- Analyzing multiple data points grouped in sub-categories (Stacked Bar).

These use cases are commonly used for the following scenarios:

- Sales Management.
- Inventory Management.
- Stock Charts.
- Any String Value Comparing a Numeric Value or Time-Series Value.

### Bar Chart Best Practices:

- Start you numeric Axis at 0.
- Use a single color for the bars.
- Be sure the space separating each bar is 1/2 the width of the bar itself.
- Be sure ranking or comparing ordered categories (items) are sorted in increasing or decreasing order.
- Right-align category values on the Y-Axis (left side labels of chart) for readability.

### When Not to Use Bar Chart

- You have too much data so the Y-Axis can't fit in the space or is not legible.
- You need a detailed Time-Series analysis  - consider a [Line Chart](line-chart.md) with a Time-Series for this type of data.

### Bar Chart Data Structure:

- The data source must be an array or a list of data items.
- The data source must contain at least one data item.
- The list must contain at least one data column (string or date time).
- The list must contain at least one numeric data column.

<div class="divider--half"></div>

## $PlatformShort$ Bar Chart with Single Series

Bar Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the left to right of the chart towards the values of data points. You can create this type of chart in the `XamDataChart` control by binding your data to a `BarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-single-source"
           alt="$PlatformShort$ Bar Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Bar Chart with Multiple Series

The Bar Chart is able to render multiple bars per category for comparison purposes. In this example, the Bar Chart is comparing box office revenue amongst popular movie franchises. You can create this type of chart in the `XamDataChart` control by binding your data to multiple `BarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources"
           alt="$PlatformShort$ Bar Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Bar Chart Styling

The Bar Chart can be styled, and allows for the ability to use [annotation values](../features/chart-annotations.md) for each bar, for example, to demonstrate percent comparisons. You can create this type of chart in the `XamDataChart` control by binding your data to a `BarSeries` and adding a `CalloutLayer`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-styling"
           alt="$PlatformShort$ Bar Chart Styling" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the Bar Chart in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedBarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart"
           alt="$PlatformShort$ Stacked Bar Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100% Bar Chart

The $ProductName$ Stacked 100% Bar Chart is identical to the $PlatformShort$ stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100BarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart"
           alt="$PlatformShort$ Stacked 100 Bar Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Charts](area-chart.md)
- [Column Charts](column-chart.md)
- [Line Charts](line-chart.md)
- [Spline Charts](spline-chart.md)
- [Stacked Charts](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

- `XamDataChart`
- `ItemsSource`
- `BarSeries`
- `CalloutLayer`
- `StackedBarSeries`
- `Stacked100BarSeries`
- `StackedBarSeries`

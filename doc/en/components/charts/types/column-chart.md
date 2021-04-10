---
title: $PlatformShort$ Column Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Column Chart
_keywords: $PlatformShort$ Charts, Column Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries"]
---
# $PlatformShort$ Column Charts

The $ProductName$ Column Charts, Column Graphs, or Vertical Bar Charts are among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by columns with equal widths but differing heights. These columns extend from the bottom to top of the chart towards the values of data points. Column Charts emphasize the amount of change over a period of time or compares multiple items. Column Charts are very similar to [Bar Charts](bar-chart.md) except that Column Charts render in vertical orientation  (up and down) while [Bar Charts](bar-chart.md) have horizontal orientation (left to right) or 90 degrees clockwise rotation.

## $PlatformShort$ Category Column Chart

The $ProductName$ Category Column Chart groups data items from multiple data sources into categories and renders them as vertical columns or rectangles. Values are represented on the Y-Axis and categories are displayed on the X-Axis.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting `ChartType` to Column enum, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="$PlatformShort$ Column Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Column Chart Recommendations

### Are $PlatformShort$ Column Charts right for your project?

A Column Chart uses the same concepts of data plotting as the [Bar Chart](bar-chart.md), but data points are stretched along a horizontal line (X-Axis) rather than vertical line (Y-Axis). In other words, the Column Chart is rendered like the [Bar Chart](bar-chart.md) but with 90 degrees counter-clockwise rotation.

### Column Chart Use Cases

There are several uses cases for a Column Chart. When you:

- Need to compare data values of related categories.
- Need to compare data over a time period.
- Need to display negative values as well as positive values in the same data set.
- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

### Column Chart Best Practices:

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.

### When Not to Use Column Charts

- You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

### Column Chart Data Structure:

- The data model must contain at least one numeric property.
- The data model may contain an options string or date-time property for labels.
- The data source should contain at least one data item.

## $PlatformShort$ Column Chart with Single Series

Column Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Column`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-single-source"
           alt="$PlatformShort$ Column Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Column Chart with Multiple Series

The Column Chart is able to render multiple columns per category for comparison purposes. You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the `ChartType` property to `Column`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="$PlatformShort$ Column Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Column Chart Advanced Scenarios

For more advanced types of column charts, use `XamDataChart` control to create other types of column charts as the following sections demonstrate them.

## $PlatformShort$ Styling Column Chart

The $PlatformShort$ Column Chart has many options for styling and modification of the visual appearance. For example, the sample below demonstrates using a [crossing value](../features/chart-axis-layouts.md) for your X-Axis, as well as using [marker templates](../features/chart-markers.md) to display the value of an item above (or below) its corresponding column.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-column-chart-styling"
           alt="$PlatformShort$ Column Chart Styling" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Waterfall Chart

The Waterfall Chart belongs to a group of category charts and it is rendered using a collection of vertical columns that show the difference between consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. The Waterfall Chart is similar in appearance to the Range Column Chart, but it requires only one numeric data column rather than two columns for each data point.

You can create this type of chart in the `XamDataChart` control by binding your data to a `WaterfallSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart"
           alt="$PlatformShort$ Waterfall Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked Column Chart

The Stacked Column Chart is identical to the Column Chart in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the [Stacked Bar Chart](bar-chart.md) but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedBarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="$PlatformShort$ Stacked Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the Stacked Column Chart in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100BarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="$PlatformShort$ Stacked 100 Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Range Column Chart

The $ProductName$ Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional Column Chart. This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the Y-Axis and categories are displayed on the X-Axis.

The Range Column Chart is identical to the [Range Area Chart](area-chart.md) in all aspects except that the ranges are represented as a set of vertical columns rather than a filled area.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RangeColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart"
           alt="$PlatformShort$ Range Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Column Chart

The Radial Column Chart belongs to a group of radial charts, and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the Column Chart, but wraps data points around a circle rather than stretching them along a horizontal line.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="$PlatformShort$ Radial Column Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Bar Charts](bar-chart.md)
- [Radial Charts](radial-chart.md)
- [Stacked Charts](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

Chart Type          | Control Name       | API Members
--------------------|--------------------|------------------------
Column              | `XamCategoryChart` | `ChartType` = `Column`
Radial Column       | `XamDataChart`     | `RadialColumnSeries`
Range Column        | `XamDataChart`     | `RangeColumnSeries`
Stacked Column      | `XamDataChart`     | `StackedColumnSeries`
Stacked 100% Column | `XamDataChart`     | `Stacked100ColumnSeries`
Waterfall           | `XamDataChart`     | `WaterfallSeries`

---
title: $PlatformShort$ Column Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Column Chart
_keywords: $PlatformShort$ Charts, Column Chart, Column Graph, Vertical Bar Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries"]
---
# $PlatformShort$ Column Chart

The $ProductName$ Column Char, Column Graph, or Vertical Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by columns with equal widths but different heights. These columns extend from the bottom to top of the chart towards the values of data points. This chart emphasizes the amount of change over a period of time or compares multiple items. Column Chart is very similar to [Bar Chart](bar-chart.md) except that Column Chart renders in vertical orientation (up and down) while [Bar Chart](bar-chart.md) has horizontal orientation (left to right) or 90 degrees clockwise rotation.

## $PlatformShort$ Column Chart Example

The $ProductName$ Category Column Chart groups data items from multiple data sources into categories and renders them as vertical columns or rectangles. Values are represented on the Y-Axis and categories are displayed on the X-Axis.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting `ChartType` to Column enum, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="$PlatformShort$ Column Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Column Charts Recommendations

### Column Charts Use Cases

There are several uses cases for Column Charts. When you:

- Need to compare data values of related categories.
- Need to compare data over a time period.
- Need to display negative values as well as positive values in the same data set.
- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

### Column Charts Best Practices:

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.

### When Not to Use Column Charts

- You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

### Column Charts Data Structure:

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
           alt="$PlatformShort$ Column Chart with Multiple Sources"
           github-src="charts/category-chart/column-chart-multiple-sources" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ Column Chart Styling

The $PlatformShort$ Column Chart has many options for styling and modification of the visual appearance. For example, the sample below demonstrates changing appearance of columns and using [Marker Templates](../features/chart-markers.md) to display the value of an item above (or below) its corresponding column.

You can create this type of chart in the `XamDataChart` control by binding your data to a `ColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-styling"
           alt="$PlatformShort$ Column Chart Styling"
           github-src="charts/category-chart/column-chart-styling">
</code-view>

<div class="divider--half"></div>

## Advanced Types of Column Charts

The following sections explain more advanced types of $PlatformShort$ Column Charts that can be created using the `XamDataChart` control instead of `XamCategoryChart` control with simplified API.


## $PlatformShort$ Waterfall Chart

The Waterfall Chart belongs to a group of category charts and it is rendered using a collection of vertical columns that show the difference between consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. The Waterfall Chart is similar in appearance to the [Range Column Chart](column-chart.md#$PlatformShort$-range-column-chart), but it requires only one numeric data column rather than two columns for each data point.

You can create this type of chart in the `XamDataChart` control by binding your data to a `WaterfallSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart"
           alt="$PlatformShort$ Waterfall Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked Column Chart

The Stacked Column Chart is similar to the [Category Column Chart](column-chart.md#$PlatformShort$-column-chart-example) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the [Stacked Bar Chart](stacked-chart.md#$PlatformShort$-stacked-bar-chart) but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the `XamDataChart` control by binding your data to a `StackedBarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="$PlatformShort$ Stacked Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the [Stacked Column Chart](stacked-chart.md#$PlatformShort$-stacked-column-chart) in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the `XamDataChart` control by binding your data to a `Stacked100BarSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="$PlatformShort$ Stacked 100 Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Range Column Chart

The $ProductName$ Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional [Category Column Chart](column-chart.md#$PlatformShort$-column-chart-example). This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the Y-Axis and categories are displayed on the X-Axis.

The Range Column Chart is identical to the [Range Area Chart](area-chart.md)(area-chart.md#$PlatformShort$-Range-Area-chart) in all aspects except that the ranges are represented as a set of vertical columns rather than a filled area.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RangeColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart"
           alt="$PlatformShort$ Range Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Column Chart

The Radial Column Chart belongs to a group of [Radial Chart](radial-chart.md), and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Category Column Chart](column-chart.md#$PlatformShort$-column-chart-example), but wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the `XamDataChart` control by binding your data to a `RadialColumnSeries`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="$PlatformShort$ Radial Column Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Bar Chart](bar-chart.md)
- [Composite Chart](Composite-chart.md)
- [Radial Chart](radial-chart.md)
- [Stacked Chart](stacked-chart.md)

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

---
title: $PlatformShort$ Column Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Column Chart
_keywords: $PlatformShort$ Charts, Column Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
---
# $PlatformShort$ Column Chart

The $ProductName$ Column Chart is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points. A Column Chart emphasizes the amount of change over a period of time or compares multiple items. Values are represented on the Y-Axis (NumericYAxis) and categories are displayed on the X-Axis (CategoryXAxis).

## $PlatformShort$ Column Chart Example

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-legend"
           alt="$PlatformShort$ Column Chart with Legend" >
</code-view>

<div class="divider--half"></div>

A Column Chart uses the same concepts of data plotting as the Bar Chart but data points are stretched along a horizontal line (X-Axis) rather than vertical line (Y-Axis). In other words, the Column Chart is rendered like the Bar Chart but with 90 degrees counter-clockwise rotation.

There are several uses cases for a Column Chart. When you:

- Need to compare data values of related categories.
- Need to compare data over a time period.
- Need to display negative values as well as positive values in the same data set.
- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

Column Chart Best Practices:

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.

Do not Use a Column Chart When:

- You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

Data Structure:

- The data model must contain at least one numeric property.
- The data model may contain an options string or date-time property for labels.
- The data source should contain at least one data item.

## $PlatformShort$ Column Chart with Single Series

Column Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points.
In this example, the Column Chart uses monthly average temperatures.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-single-source"
           alt="$PlatformShort$ Column Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Column Chart with Multiple Series

The Column Chart is able to render multiple columns per category for comparison purposes. In this example, the Column Chart is comparing box office revenue amongst popular movie franchises.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="$PlatformShort$ Column Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Styling Column Chart

The $PlatformShort$ Column Chart has many options for styling and modification of the visual appearance. For example, the sample below demonstrates using a crossing value for your X-Axis, as well as using marker templates to display the value of an item above (or below) its corresponding column:


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-column-chart-styling"
           alt="$PlatformShort$ Column Chart Styling" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Waterfall Chart

The Waterfall Chart belongs to a group of category charts and it is rendered using a collection of vertical columns that show the difference between consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. The Waterfall Chart is similar in appearance to the Range Column Chart, but it requires only one numeric data column rather than two columns for each data point.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart"
           alt="$PlatformShort$ Waterfall Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked Column Chart

The Stacked Column Chart is identical to the Column Chart in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the Stacked Bar Chart but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

Renewable electricity produced between USA, Europe and China is demonstrated in the example below.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="$PlatformShort$ Stacked Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Stacked 100 Column Chart

The Stacked 100 Column Chart is identical to the Stacked Column Chart in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="$PlatformShort$ Stacked 100 Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Range Column Chart

The $ProductName$ Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional Column Chart. This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the Y-Axis and categories are displayed on the X-Axis.

The Range Column chart is identical to the Range Area chart in all aspects except that the ranges are represented as a set of vertical columns rather than filled area.

In this Range Column Chart example, weather data variance between high and low temperatures by month is shown.


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart"
           alt="$PlatformShort$ Range Column Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Column Chart

The Radial Column Chart belongs to a group of radial charts, and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the Column Chart, but wraps data points around a circle rather than stretching them along a horizontal line.

In this Radial Column chart sample, player stats are compared against different soccer skills.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="$PlatformShort$ Radial Column Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources
- [Axis Annotations](../features/chart-axis-options.md)
- [Axis Options](../features/chart-axis-options.md)
- [Axis Gridlines](../features/chart-axis-gridlines.md)
- [Highlighting](../features/chart-highlighting.md)
<!-- - [Gantt Chart](gantt-chart.md) -->
<!-- - [Pyramid Chart](pyramid-chart.md) -->

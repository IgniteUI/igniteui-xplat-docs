---
title: $PlatformShort$ Point Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Point Chart
_keywords: $PlatformShort$ Charts, Point Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "ChartType", "Legend"]
---
# $PlatformShort$ Point Chart

$PlatformShort$ Point Chart renders a collection of points. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). These charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

With multiple series, our $PlatformShort$ Point Chart requires more visual indicators for end-users to easily perceive what data is displayed. To improve the experience, we need to add a legend for the multiple series. First, we will add a legend object to our application and then we will set it to the `Legend` property of the $PlatformShort$ `XamCategoryChart`. This gives the benefit for our users to more easily comprehend what data set each point corresponds to.

## $PlatformShort$ Point Chart Example

You can create an Area Chart in the `XamCategoryChart` control by binding your data to `ItemsSource` property and setting `ChartType` property to `Point` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-point-chart-multiple-sources"
           alt="$PlatformShort$ Point Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Point Chart with Single Series

In the following example, the $PlatformShort$ Point Chart is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019. The Y-Axis, or labels on the left of the chart, are displaying the terawatt hour (TWh) values of renewed electricity and the X-Axis, or labels on the bottom of the chart, are displaying the year.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-point-chart-single-source"
           alt="$PlatformShort$ Point Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Point Chart with Multiple Series

Since the $PlatformShort$ Point Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the point chart will automatically update to fit the additional data.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-point-chart-multiple-sources"
           alt="$PlatformShort$ Point Chart" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Point Chart Styling

Once our chart is set up, we may want to make some further styling customizations such as change the point colors, change the legend font family, and/or increase the size of the axis labels to make it easier to read.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-point-chart-styling"
           alt="$PlatformShort$ Point Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources
- [Scatter Chart](scatter-chart.md)

Chart Type               | Control Name       | API Members
-------------------------|--------------------|-----------------------
Point                    | `XamCategoryChart` | `ChartType` = `Point`

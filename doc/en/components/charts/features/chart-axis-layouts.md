---
title: $PlatformShort$ Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Axis Layouts
_keywords: $PlatformShort$ Axis, Layouts, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Axis Layouts

The $ProductName$ chart component includes options to configure many axis layout options such as gap, overlap, and location, as well as having the ability to share axes and have multiple axes in the same chart. This is demonstrated in the examples given below.

## Axis Gap Example

The `Gap` property on the category axes of the $PlatformShort$ data chart component determines the amount of space between series of the chart.

This property accepts a numeric value between 0 and 1. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gap" 
           alt="$PlatformShort$ Axis Gap Example" 
           github-src="charts/category-chart/axis-gap">
</code-view>

<div class="divider--half"></div>

## Axis Overlap Example

The axis `Overlap` feature of the category axes of the $PlatformShort$ chart component allows setting the overlap of the rendered categories. This property accepts a numeric value between -1 and 1. The value represents a relative overlap out of the available number of pixels dedicated to each series.

Setting this property to a negative value (down to -1) results in the categories being pushed away from each other, producing a gap between themselves. Conversely, setting this property to a positive value (up to 1) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-overlap" 
           alt="$PlatformShort$ Axis Overlap Example" 
           github-src="charts/category-chart/axis-overlap">
</code-view>

<div class="divider--half"></div>

## Multiple Axis Example

 You can share and add multiple axes in the same plot area of the $PlatformShort$ data chart component. It a common scenario to use multiple axes when you want to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing" 
           alt="$PlatformShort$ Axis Sharing and Multiple Axes Example" 
           github-src="charts/data-chart/axis-sharing">
</code-view>

<div class="divider--half"></div>

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. This especially important when using more than two axes in the same data chart or when sharing axes between multiple series. Setting the axis location is as simple as setting the `LabelLocation` property of the corresponding axis.

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-locations" 
           alt="$PlatformShort$ Axis Locations Example" 
           github-src="charts/data-chart/axis-locations">
</code-view>

<div class="divider--half"></div>
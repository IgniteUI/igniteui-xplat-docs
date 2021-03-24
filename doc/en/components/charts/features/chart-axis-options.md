---
title: $PlatformShort$ Axis Options | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Axis Options
_keywords: $PlatformShort$ Axis, Options, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Axis Options

In the $ProductName$ chart component, the axes provide properties for visual configurations such as titles, labels, and ranges. This is demonstrated in the examples provided below.

## Axis Titles Example

The axis titles feature of the $PlatformShort$ chart component allows you to add contextual information to the axes of the chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, margins, and alignments.

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-titles" 
           alt="$PlatformShort$ Axis Titles Example" 
           github-src="charts/category-chart/axis-titles">
</code-view>

<div class="divider--half"></div>


## Axis Labels Example

The $ProductName$ chart component allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of these labels.

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-labels" 
           alt="$PlatformShort$ Axis Labels Example" 
           github-src="charts/category-chart/axis-labels">
</code-view>

<div class="divider--half"></div>

## Axis Range Example

In the $PlatformShort$ chart component, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the `MinimumValue` and `MaximumValue` options on the corresponding axes.

By default, the $PlatformShort$ chart component will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the `MinimumValue` of the y-axis to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the `MaximumValue` property.

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-range" 
           alt="$PlatformShort$ Axis Range Example" 
           github-src="charts/category-chart/axis-range">
</code-view>

<div class="divider--half"></div>
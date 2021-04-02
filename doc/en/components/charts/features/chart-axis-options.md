---
title: $PlatformShort$ Axis Options | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Axis Options
_keywords: $PlatformShort$ Axis, Options, Title, Labels, Range Infragistics
mentionedTypes: ["XamCategoryChart"]
---

# $PlatformShort$ Axis Options

In all $ProductName$ charts, the axes provide properties for visual configurations such as titles, labels, and ranges. These features are demonstrated in the examples provided below.

## Axis Titles Example

The axis titles feature of the $PlatformShort$ charts, allows you to add contextual information to the your chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, colors, margins, and alignments.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-titles"
           alt="$PlatformShort$ Axis Titles Example"
           github-src="charts/category-chart/axis-titles">
</code-view>

<div class="divider--half"></div>


## Axis Labels Example

The $ProductName$ charts allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of axis labels.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-labels"
           alt="$PlatformShort$ Axis Labels Example"
           github-src="charts/category-chart/axis-labels">
</code-view>

<div class="divider--half"></div>

## Axis Range Example

In the $PlatformShort$ charts, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the `YAxisMinimumValue` and `YAxisMaximumValue` options.

By default, the $PlatformShort$ charts will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the `YAxisMinimumValue` to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the `YAxisMaximumValue` property.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-range"
           alt="$PlatformShort$ Axis Range Example"
           github-src="charts/category-chart/axis-range">
</code-view>

<div class="divider--half"></div>


## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layout](chart-axis-layouts.md)

## API Members

The following is a list of API members mentioned in the above sections:

- `XAxisMaximumValue`
- `XAxisMinimumValue`
- `YAxisMaximumValue`
- `YAxisMinimumValue`
- `XamCategoryChart`

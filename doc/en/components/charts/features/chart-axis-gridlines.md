---
title: $PlatformShort$ Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Axis Gridlines
_keywords: $PlatformShort$ Axis, Gridlines, Infragistics
mentionedTypes: ['XamCategoryChart']
---

# $PlatformShort$ Axis Gridlines

All $ProductName$ charts include built-in capability to modify appearance of axis lines as wells as frequency of major/minor gridlines and tickmarks that are rendered on x-axis and y-axis. These features are demonstrated in the examples given below.

## Axis Gridlines Example

Axis major gridlines are long lines that extend horizontally (y-axis) or vertically (x-axis) from locations of axis labels and they render through plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines. This example shows how to configure axis gridline.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ Axis Gridlines Example"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## Axis Gridlines Properties

The following table lists all properties of axis gridline that you can configure.

Axis Visuals           | Type    | Property Names
-----------------------|---------|-----------------------
Major Stroke Color     | string  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
Minor Stroke Color     | string  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
Major Stroke Thickness | number  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness`
Minor Stroke Thickness | number  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness`
Major Interval         | number  | `XAxisInterval` <br> `YAxisInterval`
Minor Interval         | number  | `XAxisMinorInterval` <br> `YAxisMinorInterval`

> NOTE The `XAxisInterval`and `YAxisInterval` properties control frequency of axis major gridlines as well as frequency of axis tickmarks.


## Axis Tickmarks Example

Axis tickmarks are short lines that extend from axis major gridlines towards axis labels. This example shows how to configure axis tickmark.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-tickmarks"
           alt="$PlatformShort$ Axis Tickmarks Example"
           github-src="charts/category-chart/axis-tickmarks">
</code-view>

<div class="divider--half"></div>

## Axis Gridlines Properties

This table lists tickmark properties of axes that you can configure and the following example demonstrates how to set those gridline properties.

Axis Visuals           | Type    | Property Names
-----------------------|---------|-----------------------
Tick Stroke Color      | string  | `XAxisTickStroke` <br> `YAxisTickStroke`
Tick Stroke Thickness  | number  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness`
Tick Stroke Length     | number  | `XAxisTickLength` <br> `YAxisTickLength`


## Additional Resources

- [Axis Layout](axis-layout.md)
- [Axis Options](axis-options.md)
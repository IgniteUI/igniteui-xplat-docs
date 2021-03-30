---
title: $PlatformShort$ Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Axis Gridlines
_keywords: $PlatformShort$ Axis, Gridlines, Infragistics
mentionedTypes: ['XamCategoryChart']
---

# $PlatformShort$ Axis Gridlines

All $ProductName$ charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

Axis tickmarks are displayed along all horizontal and vertical axes at each label at all major line positions of the $PlatformShort$ chart.

Axis major gridlines are long lines that extend horizontally along the Y-Axis or vertically along the X-Axis from locations of axis labels, and they render through the plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines.

## Axis Gridlines Example

This example shows how configure the axis gridline to display major and minor gridlines at specified intervals:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ Axis Gridlines Example"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Axis Gridlines Properties

Setting the axis major interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis. These properties must be set to a value greater than 0.

In order to display minor gridlines that correspond to minor interval, you need to set `MinorStroke` and `MinorStrokeThickness` properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your $PlatformShort$ chart by setting the following properties:

Axis Visuals           | Type    | Property Names                                               | Description
-----------------------|---------|--------------------------------------------------------------|----------------
Major Stroke Color     | string  | `XAxisMajorStroke` <br> `YAxisMajorStroke`                   | This property sets the color of axis major gridlines.
Minor Stroke Color     | string  | `XAxisMajorStroke` <br> `YAxisMajorStroke`                   | This property sets the color of axis minor gridlines.
Major Stroke Thickness | number  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness` | This property sets the thickness in pixels of the axis major gridlines.
Minor Stroke Thickness | number  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness` | This property sets the thickness in pixels of the axis minor gridlines.
Major Interval         | number  | `XAxisInterval` <br> `YAxisInterval`                         | This value provides adequate spacing for axis labels, if used.
Minor Interval         | number  | `XAxisMinorInterval` <br> `YAxisMinorInterval`               | This value provides adequate spacing for minor gridlines, if used.

Regarding the Major and Minor Interval in the table above, it is important to note that the major interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval. The minor interval gridlines are always rendered between the major gridlines, and as such, the minor interval properties should always be set to something much smaller (usually 2-5 times smaller) than the value of the major Interval properties.

On category axes, the intervals are represented as an index between first item and last category item. Generally, this value should equal to 10-20% of total numbers of category items for the major Interval so that all axis labels fit on axis so that they are not clipped by other axis labels. For minor intervals, this is represented as a fraction of the major interval properties. This value generally should equal between 0.25 and 0.5.

On numeric axes, the interval values are represented as a double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value. 

On date time axes, this value is represented as time span between axis minimum value and axis maximum value. 

The following example demonstrates how to customize the gridlines by setting the properties above:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ Axis Gridlines Example"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Axis Tickmarks

Axis tick marks are enabled by setting the `TickLength` property of an axis to a value greater than 0. This property specifies the length of the line segments forming the tick marks.

Tick marks are always displayed at the axis stroke line and point to the direction of the labels. Labels are offset by the value of the `TickLength` property to avoid overlapping. For example, for a horizontal axis where the label location is `AxisLabelsLocation.OutsideBottom`, if the `TickLength` is set to 5, labels will be shifted down by that amount.

You can customize how the axis tickmarks are displayed in your Blazor chat by setting the following properties: 

Axis Visuals           | Type    | Property Names                                             | Description
-----------------------|---------|------------------------------------------------------------|-------------------------
Tick Stroke Color      | string  | `XAxisTickStroke` <br> `YAxisTickStroke`                   | These properties set the color of the tickmarks.
Tick Stroke Thickness  | number  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness` | These properties set the thickness of the axis tick marks.
Tick Stroke Length     | number  | `XAxisTickLength` <br> `YAxisTickLength`                   | These properties set the length of the axis tick marks.

The following example demonstrates how to customize the tickmarks by setting the properties above:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-tickmarks"
           alt="$PlatformShort$ Axis Tickmarks Example"
           github-src="charts/category-chart/axis-tickmarks">
</code-view>

<div class="divider--half"></div>

## Additional Resources

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)
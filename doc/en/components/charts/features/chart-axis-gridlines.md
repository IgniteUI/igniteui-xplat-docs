---
title: {Platform} Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' {Platform} Axis Gridlines
_keywords: {Platform} Axis, Gridlines, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
---

# {Platform} Axis Gridlines

All {ProductName} charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

> [!Note]
> the following examples can be applied to `CategoryChart` as well as `FinancialChart` controls.

Axis major gridlines are long lines that extend horizontally along the Y-Axis or vertically along the X-Axis from locations of axis labels, and they render through the plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines.

Axis tickmarks are displayed along all horizontal and vertical axes at each label at all major line positions of the {Platform} chart.

## {Platform} Axis Gridlines Example

This example shows how configure the axis gridline to display major and minor gridlines at specified intervals:

`sample="/charts/category-chart/axis-gridlines", height="450", alt="{Platform} Axis Gridlines Example"`



<div class="divider--half"></div>

## {Platform} Axis Gridlines Properties

Setting the axis interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis.

In order to display minor gridlines that correspond to minor interval, you need to set `XAxisMinorStroke` and `XAxisMinorStrokeThickness` properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your {Platform} chart by setting the following properties:

| Axis Visuals           | Type    | Property Names                                               | Description |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| Major Stroke Color     | string  | `XAxisMajorStroke` <br> `YAxisMajorStroke`                   | These properties set the color of axis major gridlines. |
| Minor Stroke Color     | string  | `XAxisMinorStroke` <br> `YAxisMinorStroke`                   | These properties set the color of axis minor gridlines. |
| Major Stroke Thickness | number  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness` | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness` | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number  | `XAxisInterval` <br> `YAxisInterval`                         | These properties set interval between axis major gridlines and labels. |
| Minor Interval         | number  | `XAxisMinorInterval` <br> `YAxisMinorInterval`               | These properties set interval between axis minor gridlines, if used. |
| Axis Line Stroke Color | string  | `XAxisStroke` <br> `YAxisStroke`                   | These properties set the color of an axis line. |
| Axis Stroke Thickness  | number  | `XAxisStrokeThickness` <br> `YAxisStrokeThickness` | These properties set the thickness in pixels of an axis line. |

Regarding the Major and Minor Interval in the table above, it is important to note that the major interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval. The minor interval gridlines are always rendered between the major gridlines, and as such, the minor interval properties should always be set to something much smaller (usually 2-5 times smaller) than the value of the major Interval properties.

On category axes, the intervals are represented as an index between first item and last category item. Generally, this value should equal to 10-20% of total numbers of category items for the major Interval so that all axis labels fit on axis so that they are not clipped by other axis labels. For minor intervals, this is represented as a fraction of the major interval properties. This value generally should equal between 0.25 and 0.5.

On numeric axes, the interval values are represented as a double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.

On date time axes, this value is represented as time span between axis minimum value and axis maximum value.

The following example demonstrates how to customize the gridlines by setting the properties above:

`sample="/charts/category-chart/axis-gridlines", height="450", alt="{Platform} Axis Gridlines Example"`

The axes of the `XamDataChart` also have the ability to place a dash array on the major and minor gridlines by utilizing the `MajorStrokeDashArray` and `MinorStrokeDashArray` properties, respectively. The actual axis line can be dashed as well by setting the `StrokeDashArray` property of the corresponding axis. These properties take an array of numbers that will describe the length of the dashes for the corresponding grid lines.

The following example demonstrates a `XamDataChart` with the above dash array properties set:

`sample="/charts/data-chart/dash-array-axes", height="450", alt="{Platform} Axis Dash Array Example"`


<div class="divider--half"></div>

## {Platform} Axis Tickmarks Example

Axis tick marks are enabled by setting the `XAxisTickLength` and `YAxisTickLength` properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the `YAxisTickLength` property is set to 5, axis labels will be shifted left by that amount.

The following example demonstrates how to customize the tickmarks by setting the properties above:

`sample="/charts/category-chart/axis-tickmarks", height="450", alt="{Platform} Axis Tickmarks Example"`



<div class="divider--half"></div>

## {Platform} Axis Tickmarks Properties

You can customize how the axis tickmarks are displayed in our {Platform} chats by setting the following properties:

| Axis Visuals           | Type    | Property Names                                             | Description |
| -----------------------|---------|------------------------------------------------------------|------------------------- |
| Tick Stroke Color      | string  | `XAxisTickStroke` <br> `YAxisTickStroke`                   | These properties set the color of the tickmarks. |
| Tick Stroke Thickness  | number  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness` | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length     | number  | `XAxisTickLength` <br> `YAxisTickLength`                   | These properties set the length of the axis tick marks. |


## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| `XamDataChart`                                     | `CategoryChart` or `FinancialChart` |
| -------------------------------------------------- | ----------------------------------- |
| `Axes` -> `NumericXAxis` -> `Interval`             | `XAxisInterval` (Major Interval) |
| `Axes` -> `NumericYAxis` -> `Interval`             | `YAxisInterval` (Major Interval) |
| `Axes` -> `NumericXAxis` -> `MinorInterval`        | `XAxisMinorInterval`    |
| `Axes` -> `NumericYAxis` -> `MinorInterval`        | `YAxisMinorInterval`    |
| `Axes` -> `NumericXAxis` -> `MajorStroke`          | `XAxisMajorStroke`    |
| `Axes` -> `NumericYAxis` -> `MajorStroke`          | `YAxisMajorStroke`    |
| `Axes` -> `NumericXAxis` -> `MajorStrokeThickness` | `XAxisMajorStrokeThickness` |
| `Axes` -> `NumericYAxis` -> `MajorStrokeThickness` | `YAxisMajorStrokeThickness` |
| `Axes` -> `NumericXAxis` -> `MinorStrokeThickness` | `XAxisMinorStrokeThickness` |
| `Axes` -> `NumericYAxis` -> `MinorStrokeThickness` | `YAxisMinorStrokeThickness` |
| `Axes` -> `NumericXAxis` -> `StrokeThickness`      | `XAxisStrokeThickness`   |
| `Axes` -> `NumericYAxis` -> `StrokeThickness`      | `YAxisStrokeThickness`   |
| `Axes` -> `NumericXAxis` -> `Stroke`               | `XAxisStroke` (Axis Line Color) |
| `Axes` -> `NumericYAxis` -> `Stroke`               | `YAxisStroke` (Axis Line Color) |
| `Axes` -> `NumericXAxis` -> `TickLength`           | `XAxisTickLength`    |
| `Axes` -> `NumericYAxis` -> `TickLength`           | `YAxisTickLength`    |
| `Axes` -> `NumericXAxis` -> `TickStroke`           | `XAxisTickStroke`    |
| `Axes` -> `NumericYAxis` -> `TickStroke`           | `YAxisTickStroke`    |
| `Axes` -> `NumericXAxis` -> `Strip`                | `XAxisStrip` (Space between Major Gridlines) |
| `Axes` -> `NumericYAxis` -> `Strip`                | `YAxisStrip` (Space between Major Gridlines) |

---
title: $Platform$ Sparkline | Data Visualization Tools | Infragistics
_description: Use Infragistics' $Platform$ sparkline chart control to render in a small scale layout such as a grid cell or stand alone. Learn about the $ProductName$ sparkline chart configurable elements!
_keywords: Sparkline, $ProductName$, Infragistics, WinLoss, Area, Column
mentionedTypes: ["XamSparkline", "SparklineDisplayType", "TrendLineType"]
namespace: Infragistics.Controls.Charts
---

# $Platform$ Sparkline

The $ProductName$ Sparkline is a lightweight charting control. It is intended for rendering within a small-scale layout such as within a grid cell but can also be rendered alone. The `Sparkline` has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips.

## $Platform$ Sparkline Example

The following example shows all the different types of `Sparkline` available. The type is defined by setting the `DisplayType` property. If the `DisplayType` property is not specified, then by default, the `Line` type is displayed.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-display-types"
           github-src="charts/sparkline/display-types"
           alt="$Platform$ Sparkline Example" >
</code-view>

<div class="divider--half"></div>

Like this sample? Get access to our complete $Platform$ toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/download">Download it for free.</a>

## Sparkline Recommendations

### Is the Sparkline chart right for your project?

The primary benefit of the Sparkline control compared to other charting controls is that it can render in a limited space such as a grid cell with all its visual elements shown.

The $Platform$ Sparkline has the ability to mark the data points with elliptical icons to indicate the highest, lowest, first, last, and negative values. The markers can be customized with a desired shape, color, or image.

### Sparkline Use Cases

- You have a compact space to display a chart in.
- You want to show trends in a series of values, such as weekly revenue.

### Sparkline Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Sparkline

- You need to analyze the data in detail.
- You need to display every label of the data points. It only allows showing high and low values on the Y-Axis, and first and last values on the X-Axis.

### Sparkline Data Structure

- It requires one-dimensional data.
- The data set must contain at least two numeric fields.
- The text in the data source fields can be used to display the first and last label on the X-Axis.

## Sparkline Types

The $Platform$ Sparkline supports the following types of sparklines by setting the `DisplayType` property accordingly:

- `Line`:  Displays the line chart type of Sparkline with numeric data, connecting the data points with line segments. At least two data points must be supplied to visualize the data in Sparkline.
- `Area`: Displays the Area chart type of Sparkline with numeric data. This is like line type with additional steps of closing the area after each line is drawn. At least two data points must be supplied to visualize the data in Sparkline.
- `Column`: Displays the Column chart type of Sparkline with numeric data. Some may refer to it as vertical bars. This type can render a single data point, but it would require specifying the minimum value range property (minimum) in Sparkline so the supplied single data point can be visible, otherwise the value will be treated as the minimum value and will not be visible.
- `WinLoss`: This type is similar in its visual appearance to Column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative value) of the data set. The idea is to indicate a win or loss scenario. For the Win/Loss chart to display properly, the data set must have both positive and negative values. If the WinLoss sparkline is bound to the same data as the other types such as the Line type, which can be bound to a collection of numeric values, then the $Platform$ Sparkline will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-display-types"
           github-src="charts/sparkline/display-types"
           alt="$Platform$ Sparkline Example" >
</code-view>

<div class="divider--half"></div>

## Markers

The $Platform$ Sparkline allows you to show markers as circular-colored icons on your series to indicate the individual data points based on X/Y coordinates. Markers can be set on sparklines of display types of `Line`, `Area`, and `Column`. The `WinLoss` type of sparkline does not currently accept markers. By default, markers are not displayed, but they can be enabled by setting the corresponding marker visibility property.

Markers in the sparkline can be placed in any combination of the following locations:

- `All`: Display markers for all data points in the sparkline.
- `Low`: Display markers on the data point of the lowest value. If there are multiple points at the lowest value, it will show on each point with that value.
- `High`: Display markers on the data point of the highest value. If there are multiple points at the highest value, it will show on each point with that value.
- `First`: Display a marker on the first data point in the sparkline.
- `Last`: Display a marker on the last data point in the sparkline.
- `Negative`: Display markers on the negative data points plotted in the sparkline.

All of the markers mentioned above can be customized using the related marker type's property in aspects of color, visibility, and size. For example, the `Low` markers above will have properties `LowMarkerBrush`, `LowMarkerVisibility`, and `LowMarkerSize`.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-markers"
           github-src="charts/sparkline/markers" >
</code-view>

<div class="divider--half"></div>

## Normal Range

The normal range feature of the $Platform$ Sparkline is a horizontal stripe representing some pre-defined meaningful range when the data is being visualized. The normal range can be set as a shaded area outlined with the desired color.

The normal range can be wider than the maximum data point or beyond, and it can also be as thin as the sparkline's `Line` display type, to serve as a threshold indicator, for instance. The width of the normal range is determined by the following three properties, which serve as the minimum settings required for displaying the normal range:

- `NormalRangeVisibility`: Whether the normal range is visible.
- `NormalRangeMaximum`: The bottom border of the range.
- `NormalRangeMinimum`: The top border of the range.

By default, the normal range is not displayed. When enabled, the normal range shows up with a light gray color appearance, which can also be configured using the `NormalRangeFill` property.

You can also configure whether to show the normal range in front of or behind the plotted series in your $Platform$ Sparkline by setting the `DisplayNormalRangeInFront` property.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-normal-range"
           github-src="charts/sparkline/normal-range" >
</code-view>

<div class="divider--half"></div>

## Trendlines

The $Platform$ Sparkline has support for a range of trendlines that display as another layer on top of the actual sparkline layer. To display a sparkline, you can use the `TrendLineType` property.

The trendlines are calculated according to the algorithm specified by the `TrendLineType` property using the values of the data the the chart is bound to.

Trendlines can only be displayed one at a time and by default, the trendline is not displayed.

The sample below shows all the available trendlines via the dropdown:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-trendlines"
           github-src="charts/sparkline/trendlines" >
</code-view>

<div class="divider--half"></div>

## Unknown Value Interpolation

The $Platform$ Sparkline can detect unknown values and render the space for unknown values through a specified interpolation algorithm. If your data contains null values and you do not use this feature, meaning no interpolation is specified, the unknown value will not be plotted.

To plot the unknown values, you can set the `UnknownValuePlotting` property of the $Platform$ Sparkline. The sample below shows the differences between the values of the `UnknownValuePlotting` property, allowing you to toggle it on or off using a checkbox:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-unknown-values"
           github-src="charts/sparkline/unknown-values"  >
</code-view>

<div class="divider--half"></div>


## Sparkline in Data Grid

You can embed the $Platform$ Sparkline in a template column of data grid or other UI controls that support templates. The following code example shows how to do this:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-grid"
           github-src="charts/sparkline/grid" >
</code-view>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)

## API Members

The following is a list of API members mentioned in the above sections:

- `DisplayNormalRangeInFront`
- `DisplayType`
- `LowMarkerBrush`
- `LowMarkerSize`
- `LowMarkerVisibility`
- `NormalRangeFill`
- `UnknownValuePlotting`
- `XamSparkline`

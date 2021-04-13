---
title: $PlatformShort$ Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics $ProductName$ chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, value overlay, $ProductName$, Infragistics
mentionedTypes: ["XamDataChart", "ValueOverlay"]
namespace: Infragistics.Controls.Charts
---

# $PlatformShort$ Chart Overlays

The $ProductName$ data chart allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the `ValueOverlay`. This can help you to visualize data such as the mean or median of a particular series.

## $PlatformShort$ Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay"
           alt="$PlatformShort$ Value Overlay Example"
           github-src="charts/data-chart/series-value-overlay">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Value Overlay Properties

Unlike other series types that use a `ItemsSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single `Axis` to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

`ValueOverlay` appearance properties are inherited from `Series` and so `Brush` and `Thickness` for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a `ValueOverlay` to show the value of the overlay on the owning axis. In order to show this, you can set the `IsAxisAnnotationEnabled` property to true.

## $PlatformShort$ Financial Overlays

You can also plot built-in financial overlays and indicators in $ProductName$ [Stock Chart](../types/stock-chart.md).

## Additional Resources

You can find more information about related chart types in these topics:

- [Chart Annotations](chart-annotations.md)
- [Column Chart](../types/area-chart.md)
- [Line Chart](../types/line-chart.md)
- [Stock Chart](../types/stock-chart.md)

## API Members

The following is a list of API members mentioned in the above sections:

`XamDataChart`
`ItemsSource`
`ValueOverlay`
`Axis`
`Brush`
`IsAxisAnnotationsEnabled`
`Series`
`Thickness`

---
title: {Platform} Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics {ProductName} chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our {ProductName} graph types!
_keywords: {Platform} charts, data chart, value overlay, {ProductName}, Infragistics
mentionedTypes: ["XamDataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart Overlays

The {Platform} `XamDataChart` allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the `ValueOverlay`. This can help you to visualize data such as the mean or median of a particular series.

## {Platform} Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

`sample="/charts/data-chart/series-value-overlay", height="600", alt="{Platform} Value Overlay Example"`


<div class="divider--half"></div>

## {Platform} Value Overlay Properties

Unlike other series types that use a `ItemsSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single `Axis` to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

`ValueOverlay` appearance properties are inherited from `Series` and so `Brush` and `Thickness` for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a `ValueOverlay` to show the value of the overlay on the owning axis. In order to show this, you can set the `IsAxisAnnotationEnabled` property to true.

## {Platform} Value Layer

The {Platform} charting components also expose the ability to use value lines to call out different focal points of your data, such as minimum, maximum, and average values.

Applying the `ValueLayer` in the `CategoryChart` and `FinancialChart` components is done by setting the `ValueLines` property on the chart. This property takes a collection of the `ValueLayerValueMode` enumeration. You can mix and match multiple value layers in the same chart by adding multiple `ValueLayerValueMode` enumerations to the `ValueLines` collection of the chart.

In the `XamDataChart`, this is done by adding a `ValueLayer` to the `Series` collection of the chart and then setting the `ValueMode` property to one of the `ValueLayerValueMode` enumerations. Each of these enumerations and what they mean is listed below:

- `Auto`: The default value mode of the `ValueLayerValueMode` enumeration.
- `Average`: Applies potentially multiple value lines to call out the average value of each series plotted in the chart.
- `GlobalAverage`: Applies a single value line to call out the average of all of the series values in the chart.
- `GlobalMaximum`: Applies a single value line to call out the absolute maximum value of all of the series values in the chart.
- `GlobalMinimum`: Applies a single value line to call out the absolute minimum value of all of the series values in the chart.
- `Maximum`: Applies potentially multiple value lines to call out the maximum value of each series plotted in the chart.
- `Minimum`: Applies potentially multiple value lines to call out the minimum value of each series plotted in the chart.

If you want to prevent any particular series from being taken into account when using the `ValueLayer` element, you can set the `TargetSeries` property on the layer. This will force the layer to target the series that you define. You can have as many `ValueLayer` elements within a single `XamDataChart` as you want.

The following sample demonstrates usage of the different `ValueLines` in the `CategoryChart`:

`sample="/charts/category-chart/value-lines", height="600", alt="{Platform} Value Lines Example"`

<div class="divider--half"></div>

## {Platform} Financial Overlays

You can also plot built-in financial overlays and indicators in {Platform} [Stock Chart](../types/stock-chart.md).

## Additional Resources

You can find more information about related chart types in these topics:

- [Chart Annotations](chart-annotations.md)
- [Column Chart](../types/area-chart.md)
- [Line Chart](../types/line-chart.md)
- [Stock Chart](../types/stock-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- `XamDataChart`
- `ItemsSource`
- `ValueOverlay`
- `Axis`
- `Brush`
- `IsAxisAnnotationsEnabled`
- `Series`
- `Thickness`
- `ValueLayer`
- `ValueLayerValueMode`
- `ValueLines`

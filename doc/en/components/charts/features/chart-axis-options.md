---
title: {Platform} Axis Options | Data Visualization | Infragistics
_description: Infragistics' {Platform} Axis Options
_keywords: {Platform} Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Axis Options

In all {ProductName} charts, the axes provide properties for visual configurations such as titles, labels, and ranges. These features are demonstrated in the examples provided below.

## Axis Titles Example

The axis titles feature of the {Platform} charts, allows you to add contextual information to the your chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, colors, margins, and alignments.

`sample="/charts/category-chart/axis-titles", height="450", alt="{Platform} Axis Titles Example"`



<div class="divider--half"></div>


## Axis Labels Examples

The {Platform} Charts allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of axis labels. The following example shows how to use these features of axes.

`sample="/charts/category-chart/axis-labels", height="450", alt="{Platform} Axis Labels Example"`



<div class="divider--half"></div>

## Axis Labels Management

The axes of the chart have the ability to perform an enhanced calculation regarding the amount of space available to the labels of the owning axis. This enhanced calculation allows the axis to optimize the amount of space given to it in order to display more labels for the given axis.

This enhanced calculation is something that you need to opt-in to, which you can do by setting the `UseEnhancedIntervalManagement` property to true. Then, if you prefer to display as many labels as can fit in the dimensions of the axis without manually setting the `Interval` property of the axis, you can set the `EnhancedIntervalPreferMoreCategoryLabels` property on the axis to true.

The chart also has the ability to consider auto-rotation of the labels if they will not fit in the allotted space as well as the ability to apply an automatic margin to the plot area to ensure the labels can fit. This is something that can be opted into initially by first setting the `AutoMarginAndAngleUpdateMode` property on the chart to either `SizeChanging` or `SizeChangingAndZoom`. This will tell the chart when to re-evaluate the auto margin and angle applied to the labels, if desired.

After setting the `AutoMarginAndAngleUpdateMode`, you can set the `ShouldAutoExpandMarginForInitialLabels` property to true to opt into the automatic margin or set the `ShouldConsiderAutoRotationForInitialLabels` property to true for the auto-rotation. You can also further customize the automatic margin that is applied by setting the `AutoExpandMarginExtraPadding` and `AutoExpandMarginMaximumValue` to provide extra space or a maximum possible margin, respectively.

Custom label formats such as `NumberFormatSpecifier` and `DateTimeFormatSpecifier` can be added to each axis via the `XAxisLabelFormatSpecifier` and `YAxisLabelFormatSpecifier` collections. Commonly used for applying Intl.NumberFormat and Intl.DateTimeFormat language sensitive number, date and time formatting. In order for a custom format to be applied to the labels, the `YAxisLabelFormat` or `XAxisLabelFormat` need to be set to `{0}` on the `CategoryChart`.

The following example formats the yAxis with a `NumberFormatSpecifier` to reprerent $USD prices for top box office movies in the United States.

`sample="/charts/category-chart/format-specifiers", height="450", alt="{Platform} Format Specifiers for Axis Labels"`

<div class="divider--half"></div>

## Axis Range Example

In the {Platform} charts, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the `YAxisMinimumValue` and `YAxisMaximumValue` options.

By default, charts will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the `YAxisMinimumValue` to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the `YAxisMaximumValue` property.

`sample="/charts/category-chart/axis-range", height="450", alt="{Platform} Axis Range Example"`



<div class="divider--half"></div>


## Axis Modes & Scale

In the `FinancialChart` and `CategoryChart` controls, you can choose if your data is plotted on logarithmic scale along the y-axis when the `YAxisIsLogarithmic` property is set to true or on linear scale when this property is set to false (default value). With the `YAxisLogarithmBase` property, you can change base of logarithmic scale from default value of 10 to other integer value.

The `FinancialChart` and control allows you to choose how your data is represented along the y-axis using `YAxisMode` property that provides `Numeric` and `PercentChange` modes. The `Numeric` mode will plot data with the exact values while the `PercentChange` mode will display the data as percentage change relative to the first data point provided. The default value is `Numeric` mode.

In addition to `YAxisMode` property, the `FinancialChart` control has `XAxisMode` property that provides `Time` and `Ordinal` modes for the x-axis. The `Time` mode will render space along the x-axis for gaps in data (e.g. no stock trading on weekends or holidays). The `Ordinal` mode will collapse date areas where data does not exist. The default value is `Ordinal` mode.

`sample="/charts/financial-chart/axis-types", height="450", alt="{Platform} Axis Range Example"`



<div class="divider--half"></div>

## Axis Gap Example

The `XAxisGap` property of the {Platform} charts, determines the amount of space between columns or bars of plotted series. This property accepts a numeric value between 0.0 and 1.0. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

The `XAxisMaximumGap` property of the {Platform} charts, determines the maximum gap value to allow. This default is set to 1.0 but can be changed depending on what you set `XAxisGap` to.

The `XAxisMinimumGapSize` property of the {Platform} charts, determines the minimum amount of pixels to use for the gap between the categories, if possible.

The following example shows the average maximum temperature in Celsius in New York City's Central Park represented by a [Column Chart](../types/column-chart.md) with an `XAxisGap` initially set to 1, and so there will be a full category's width between the columns. There is a slider that allows you to configure the gap in this example so that you can see what the different values do.

`sample="/charts/category-chart/axis-gap", height="450", alt="{Platform} Axis Gap Example"`



<div class="divider--half"></div>

## Axis Overlap Example

The `XAxisOverlap` property of the {Platform} charts, allows setting the overlap of the rendered columns or bars of plotted series. This property accepts a numeric value between -1.0 and 1.0. The value represents a relative overlap out of the available number of pixels dedicated to each series. Setting this property to a negative value (down to -1.0) results in the categories being pushed away from each other, producing a gap between themselves. Conversely, setting this property to a positive value (up to 1.0) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

The following example shows a comparison of the highest grossing worldwide film franchises compared by the total world box office revenue of the franchise and the highest grossing movie in the series, represented by a [Column Chart](../types/column-chart.md) with an `XAxisOverlap` initially set to 1, and so the columns will completely overlap each other. There is a slider that allows you to configure the overlap in this example so that you can see what the different values do.

`sample="/charts/category-chart/axis-overlap", height="450", alt="{Platform} Axis Overlap Example"`



<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layout](chart-axis-layouts.md)

## API References

The following is a list of API members mentioned in the above sections:

| `XamDataChart`                                         | `FinancialChart`       | `CategoryChart`        |
| ------------------------------------------------------ | ---------------------- | ---------------------- |
| `Axes` -> `NumericYAxis` -> `MaximumValue`             | `YAxisMaximumValue`    | `YAxisMaximumValue`    |
| `Axes` -> `NumericYAxis` -> `MinimumValue`             | `YAxisMinimumValue`    | `YAxisMinimumValue`    |
| `Axes` -> `NumericYAxis` -> `IsLogarithmic`            | `YAxisIsLogarithmic`   | `YAxisIsLogarithmic`   |
| `Axes` -> `NumericYAxis` -> `LogarithmBase`            | `YAxisLogarithmBase`   | `YAxisLogarithmBase`   |
| `Axes` -> `CategoryXAxis` -> `Gap`                     | None                   | `XAxisGap`             |
| `Axes` -> `CategoryXAxis` -> `Overlap`                 | None                   | `XAxisOverlap`         |
| `Axes` -> `TimeXAxis`                                  | `XAxisMode`            | None                   |
| `Axes` -> `PercentChangeYAxis`                         | `YAxisMode`            | None                   |
| `Axes` -> `NumericYAxis` -> `labelSettings.angle`      | `YAxisLabelAngle`      | `YAxisLabelAngle`      |
| `Axes` -> `NumericXAxis` -> `labelSettings.angle`      | `XAxisLabelAngle`      | `XAxisLabelAngle`      |
| `Axes` -> `NumericYAxis` -> `labelSettings.textColor`  | `YAxisLabelForeground` | `YAxisLabelForeground` |
| `Axes` -> `NumericXAxis` -> `labelSettings.textColor`  | `XAxisLabelForeground` | `XAxisLabelForeground` |
| `Axes` -> `NumericYAxis` -> `labelSettings.visibility` | `YAxisLabelVisibility` | `YAxisLabelVisibility` |
| `Axes` -> `NumericXAxis` -> `labelSettings.visibility` | `XAxisLabelVisibility` | `XAxisLabelVisibility` |


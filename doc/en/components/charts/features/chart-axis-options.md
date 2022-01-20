---
title: $Platform$ Axis Options | Data Visualization | Infragistics
_description: Infragistics' $Platform$ Axis Options
_keywords: $Platform$ Axis, Options, Title, Labels, Range, Scale, Mode, Infragistics
mentionedTypes: ["CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode"]
namespace: Infragistics.Controls.Charts
---

# $Platform$ Axis Options

In all $ProductName$ charts, the axes provide properties for visual configurations such as titles, labels, and ranges. These features are demonstrated in the examples provided below.

## $Platform$ Axis Titles

The axis titles feature of the $Platform$ charts, allows you to add contextual information to the your chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, colors, margins, and alignments.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-titles"
           alt="$Platform$ Axis Titles Example"
           github-src="charts/category-chart/axis-titles">
</code-view>

<div class="divider--half"></div>


## $Platform$ Axis Labels

The $Platform$ Charts allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of axis labels. The following example shows how to use these features of axes.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-labels"
           alt="$Platform$ Axis Labels Example"
           github-src="charts/category-chart/axis-labels">
</code-view>

<div class="divider--half"></div>

## $Platform$ Axis Range

In the $Platform$ charts, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the `YAxisMinimumValue` and `YAxisMaximumValue` options.

By default, charts will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the `YAxisMinimumValue` to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the `YAxisMaximumValue` property.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-range"
           alt="$Platform$ Axis Range Example"
           github-src="charts/category-chart/axis-range">
</code-view>

<div class="divider--half"></div>


## $Platform$ Axis Modes & Scale

In the `FinancialChart` and `CategoryChart` controls, you can choose if your data is plotted on logarithmic scale along the y-axis when the `YAxisIsLogarithmic` property is set to true or on linear scale when this property is set to false (default value). With the `YAxisLogarithmBase` property, you can change base of logarithmic scale from default value of 10 to other integer value.

The `FinancialChart` and control allows you to choose how your data is represented along the y-axis using `YAxisMode` property that provides `Numeric` and `PercentChange` modes. The `Numeric` mode will plot data with the exact values while the `PercentChange` mode will display the data as percentage change relative to the first data point provided. The default value is `Numeric` mode.

In addition to `YAxisMode` property, the `FinancialChart` control has `XAxisMode` property that provides `Time` and `Ordinal` modes for the x-axis. The `Time` mode will render space along the x-axis for gaps in data (e.g. no stock trading on weekends or holidays). The `Ordinal` mode will collapse date areas where data does not exist. The default value is `Ordinal` mode.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-axis-types"
           alt="$Platform$ Axis Range Example"
           github-src="charts/financial-chart/axis-types">
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layout](chart-axis-layouts.md)

## API Members

The following is a list of API members mentioned in the above sections:

| `FinancialChart`      | `CategoryChart`      |
| --------------------- | -------------------- |
| `YAxisMaxmumValue`    | `YAxisMaxmumValue`   |
| `YAxisMinimumValue`   | `YAxisMinimumValue`  |
| `YAxisIsLogarithmic`  | `YAxisIsLogarithmic` |
| `YAxisLogarithmBase`  | `YAxisLogarithmBase` |
| `YAxisMode`           |                      |
| `XAxisMode`           |                      |
 

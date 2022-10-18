---
title: {Platform} Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' {Platform} Axis Layouts
_keywords: {Platform} Axis, Layouts, Location, Position, Share, Multiple, Crossing, Infragistics
mentionedTypes: [ "DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "Axis", "AxisLabelSettings", "ScatterSplineSeries", "TimeXAxis" ]
---

# {Platform} Axis Layouts

All {ProductName} charts include options to configure many axis layout options such as location as well as having the ability to share axis between series or have multiple axes in the same chart. These features are demonstrated in the examples given below.

> [!NOTE]
> the following examples can be applied to `CategoryChart` as well as `FinancialChart` controls.

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The `XAxisLabelLocation` property of the {Platform} charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the `YAxisLabelLocation` property to position y-axis on left side or right side of plot area.

The following example depicts the amount of renewable electricity produced since 2009, represented by a [Line Chart](../types/line-chart.md). There is a drop-down that lets you configure the `YAxisLabelLocation` so that you can visualize what the axes look like when the labels are placed on the left or right side on the inside or outside of the chart's plot area.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-locations"
           alt="{Platform} Axis Locations Example"
           github-src="charts/category-chart/axis-locations">
</code-view>

<!-- ## Axis Orientation Example

TODO add info/example of 4 charts with all possible combinations of XAxisInverted and YAxisInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use {Platform} Data Chart to share axis, add multiple y-axis and/or x-axis in the same plot area, or even cross axes at specific values. The following examples show how to use these features of the `XamDataChart`.

### Axis Sharing Example

You can share and add multiple axes in the same plot area of the {Platform} `XamDataChart`. It a common scenario to use share `TimeXAxis` and add multiple `NumericYAxis` to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

The following example depicts a stock price and trade volume chart with a [Stock Chart](../types/stock-chart.md) and a [Column Chart](../types/column-chart.md) plotted. In this case, the Y-Axis on the left is used by the [Column Chart](../types/column-chart.md) and the Y-Axis on the right is used by the [Stock Chart](../types/stock-chart.md), while the X-Axis is shared between the two.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing"
           alt="{Platform} Axis Sharing Example"
           github-src="charts/data-chart/axis-sharing">
</code-view>

<div class="divider--half"></div>

### Axis Crossing Example

In addition to placing axes outside plot area, the {Platform} `XamDataChart` also provides options to position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting `CrossingAxis` and `CrossingValue` properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at (0, 0) origin point.

The following example shows a Sin and Cos wave represented by a [Scatter Spline Chart](../types/scatter-chart.md) with the X and Y axes crossing each other at the (0, 0) origin point.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-crossing"
           alt="{Platform} Axis Crossing Axes Example"
           github-src="charts/data-chart/axis-crossing">
</code-view>

<div class="divider--half"></div>

<!-- Blazor -->
### Axis Timeline Example

The following example demonstrates how to style the data chart using the `TimeXAxis` as a timeline:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-timeline-axis-type"
           alt="{Platform} TimeLine with Callout Layer"
           github-src="charts/data-chart/timeline-axis-type">
</code-view>

<div class="divider--half"></div>
<!-- end: Blazor -->

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Options](chart-axis-options.md)


## API Members

The following is a list of API members mentioned in the above sections:
d in the above sections:


| `XamDataChart`                                         | `CategoryChart`                 |
| ------------------------------------------------------ | ------------------------------- |
| `Axes` -> `NumericYAxis` -> `CrossingAxis`             | None                            |
| `Axes` -> `NumericYAxis` -> `CrossingValue`            | None                            |
| `Axes` -> `NumericXAxis` -> `IsInverted`               | `XAxisInverted`                 |
| `Axes` -> `NumericYAxis` -> `IsInverted`               | `YAxisInverted`                 |
| `Axes` -> `NumericYAxis` -> `LabelLocation`            | `YAxisLabelLocation`            |
| `Axes` -> `NumericXAxis` -> `LabelLocation`            | `XAxisLabelLocation`            |
| `Axes` -> `NumericYAxis` -> `LabelHorizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` -> `NumericXAxis` -> `LabelVerticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` -> `NumericYAxis` -> `LabelVisibility`          | `YAxisLabelVisibility`          |
| `Axes` -> `NumericXAxis` -> `LabelVisibility`          | `XAxisLabelVisibility`          |

<!-- TODO correct links in Transformer -->
<!--
| `Axes` -> `NumericYAxis` -> `labelSettings.location`            | `YAxisLabelLocation`            |
| `Axes` -> `NumericXAxis` -> `labelSettings.location`            | `XAxisLabelLocation`            |
| `Axes` -> `NumericYAxis` -> `labelSettings.horizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` -> `NumericXAxis` -> `labelSettings.verticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` -> `NumericYAxis` -> `labelSettings.visibility`          | `YAxisLabelVisibility`          |
| `Axes` -> `NumericXAxis` -> `labelSettings.visibility`          | `XAxisLabelVisibility`          | -->


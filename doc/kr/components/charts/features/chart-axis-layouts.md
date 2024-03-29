---
title: {Platform} Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' {Platform} Axis Layouts
_keywords: {Platform} Axis, Layouts, Location, Position, Gap, Overlap, Infragistics
_language: kr
mentionedTypes: [ "CategoryChart", "XamDataChart" ]
---

# {Platform} Axis Layouts

All {ProductName} charts include options to configure many axis layout options such as location, gap, and overlap as well as having the ability to share axes and have multiple axes in the same chart. These features are demonstrated in the examples given below.

> [!Note]
> The following examples can be applied to `CategoryChart` as well as `FinancialChart` controls.

## Axis Gap Example

The `XAxisGap` property of the {Platform} charts, determines the amount of space between columns or bars of plotted series. This property accepts a numeric value between 0.0 and 1.0. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

The following example shows the average maximum temperature in Celsius in New York City's Central Park represented by a [Column Chart](../types/column-chart.md) with an `XAxisGap` initially set to 1, and so there will be a full category's width between the columns. There is a slider that allows you to configure the gap in this example so that you can see what the different values do.

`sample="/charts/category-chart/axis-gap", height="450", alt="{Platform} Axis Gap Example"`



<div class="divider--half"></div>

## Axis Overlap Example

The `XAxisOverlap` property of the {Platform} charts, allows setting the overlap of the rendered columns or bars of plotted series. This property accepts a numeric value between -1.0 and 1.0. The value represents a relative overlap out of the available number of pixels dedicated to each series. Setting this property to a negative value (down to -1.0) results in the categories being pushed away from each other, producing a gap between themselves. Conversely, setting this property to a positive value (up to 1.0) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

The following example shows a comparison of the highest grossing worldwide film franchises compared by the total world box office revenue of the franchise and the highest grossing movie in the series, represented by a [Column Chart](../types/column-chart.md) with an `XAxisOverlap` initially set to 1, and so the columns will completely overlap each other. There is a slider that allows you to configure the overlap in this example so that you can see what the different values do.

`sample="/charts/category-chart/axis-overlap", height="450", alt="{Platform} Axis Overlap Example"`



<div class="divider--half"></div>

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The `XAxisLabelLocation` property of the {Platform} charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the `YAxisLabelLocation` property to position y-axis on left side or right side of plot area.

The following example depicts the amount of renewable electricity produced since 2009, represented by a [Line Chart](../types/line-chart.md). There is a drop-down that lets you configure the `YAxisLabelLocation` so that you can visualize what the axes look like when the labels are placed on the left or right side on the inside or outside of the chart's plot area.

`sample="/charts/category-chart/axis-locations", height="450", alt="{Platform} Axis Locations Example"`



<!-- ## Axis Orientation Example

TODO add info/example of 4 charts with all possible combinations of XAxisIsInverted and YAxisIsInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use `XamDataChart` to share axis, add multiple axes of the same type, or even cross axis at specific values. The following examples show how to use these features.

## Axis Sharing Example

You can share and add multiple axes in the same plot area of the {Platform} Data Chart. It a common scenario to use share`TimeXAxis` and add multiple `NumericYAxis` to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

The following example depicts a stock price and trade volume chart with a [Stock Chart](../types/stock-chart.md) and a [Column Chart](../types/column-chart.md) plotted. In this case, the Y-Axis on the left is used by the [Column Chart](../types/column-chart.md) and the Y-Axis on the right is used by the [Stock Chart](../types/stock-chart.md), while the X-Axis is shared between the two.

`sample="/charts/data-chart/axis-sharing", height="450", alt="{Platform} Axis Sharing Example"`



<div class="divider--half"></div>

## Axis Crossing Example

In the the {Platform} Data Chart, you can also position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting `CrossingAxis` and `CrossingValue` properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at 0,0 origin.

The following example shows a Sin and Cos wave represented by a [Scatter Spline Chart](../types/scatter-chart.md) with the X and Y axes crossing each other at the (0, 0) origin point. The sliders provided can help you to configure where the X and Y axis cross each other in this case.

`sample="/charts/data-chart/axis-crossing", height="450", alt="{Platform} Axis Crossing Axes Example"`



<div class="divider--half"></div>


## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Options](chart-axis-options.md)


## API References

The following is a list of API members mentioned in the above sections:

- `CrossingAxis`
- `CrossingValue`
- `NumericYAxis`
- `CategoryChart`
- `XamDataChart`
- `FinancialChart`
- `XAxisGap`
- `XAxisLabelLocation`
- `XAxisOverlap`
- `YAxisLabelLocation`

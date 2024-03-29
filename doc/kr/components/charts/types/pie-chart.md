---
title: {Platform} Pie Charts and Graphs | {ProductName}
_description: The {ProductName} pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections.  Try for FREE.
_keywords: {Platform} charts, pie chart, {ProductName}, Infragistics, data binding, slice selection, slice explosion, animation
_language: kr
mentionedTypes: ["XamPieChart", "XamDataChart"]
---
# {Platform} Pie Chart

The {ProductName} Pie Chart, or Pie Graph, is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## {Platform} Pie Chart Example

You can create this type of chart with the `XamPieChart` control by binding your data as shown in the example below.

This example of an {Platform} Pie Chart includes a simple data set with 6 values. Each key/pair value has a string and a numeric data value, the data values add up to a value of 100% of visualization. In this case, we are showing the overall breakdown of budget spend by department.

`sample="/charts/pie-chart/overview", height="600", alt="{Platform} Pie Chart Overview"`



<div class="divider--half"></div>

## {Platform} Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization. Others include:

- Pie
- Doughnut (Ring)
- Funnel
- Stacked Area
- Stacked 100% Area (Stacked Percentage Area)
- Stacked Bar
- Stacked 100% Bar (Stacked Percentage Bar)
- Treemap
- Waterfall

The {Platform} Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

Best Practices for a Pie Chart:

- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
- Ensuring data segments add up to 100%.
- Arranging the order of data from largest (highest) to smallest (least).
- Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
- Ensuring the color palette is distinguishable for segments/slices of the parts.
- Considering data labels in segments vs. legends for ease of reading.
- Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
- Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When:

- Comparing change over time —use a Bar, Line or Area chart.
- Requiring precise data comparison —use a Bar, Line or Area chart.
- You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a Bar chart.

## {Platform} Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum. You can collapse the point using legend click.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the `Legend` property. The `LegendLabelMemberPath` can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

Additionally you can use the `LegendItemTemplate` and `LegendItemBadgeTemplate` properties and the various font properties on ItemLegend to further customize the look of the legend items.

`sample="/charts/pie-chart/legend", height="600", alt="{Platform} Pie Chart Legend"`



<div class="divider--half"></div>

## {Platform} Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

In the sample below, the `OthersCategoryThreshold` is set to 2, and `OthersCategoryType` is set to Number. Therefore, items with value less than or equal to 2 will be assigned to the "Others" category.

If you set `OthersCategoryType` to Percent, then `OthersCategoryThreshold` will be interpreted as a percentage rather than as a value, i.e. items whose values are less than 2% of the sum of all item values would be assigned to the Others category. You can use whichever `OthersCategoryType` is most appropriate for your application.

`sample="/charts/pie-chart/others", height="600", alt="{Platform} Pie Chart Others"`



<div class="divider--half"></div>

## {Platform} Pie Chart Explosion

The pie chart supports explosion of individual pie slices as well as a `SliceClick` event that allows you to modify selection states and implement custom logic

`sample="/charts/pie-chart/explosion", height="600", alt="{Platform} Pie Chart Explosion"`



<div class="divider--half"></div>

## {Platform} Pie Chart Selection
The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the `SelectedItems` property. The selected slices are then highlighted.

There is a property called `SelectionMode` which is how you set what mode you want the pie chart to use. The default value is `Single`. In order to disable selection, set the property to `Manual`.

The pie chart supports three different selection modes.

* Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
* Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
* Manual - When the mode is set to Manual, selection is disabled.

The pie chart has 4 events associated with selection:
* SelectedItemChanging
* SelectedItemChanged
* SelectedItemsChanging
* SelectedItemsChanged

The events that end in “Changing” are cancelable events which means you can stop the selection of a slice by setting the event argument property `Cancel` to true. When set to true the associated property will not update and the slice will not become selected. This is useful for scenarios where you want to keep users from being able to select certain slices based on the data inside it.

For scenarios where you click on the Others slice, the pie chart will return an object called `PieSliceOthersContext`. This object contains a list of the data items contained within the Others slice.

`sample="/charts/pie-chart/selection", height="600", alt="{Platform} Pie Chart Selection"`



<div class="divider--half"></div>

## {Platform} Pie Chart Animation

You can animate the pie chart smoothly by setting the `radiusFactor` property, which will scale the chart's radius. Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

`sample="/charts/pie-chart/animation", height="600", alt="{Platform} Pie Chart Animation"`



<div class="divider--half"></div>

## {Platform} Pie Chart Styling

Once our pie chart is created, we may want to make some further styling customizations such as a change of the colors for the slices of the chart, as demonstrated below:


`sample="/charts/pie-chart/styling", height="600", alt="{Platform} Pie Chart Styling"`


<div class="divider--half"></div>

## {Platform} Radial Pie Chart

The Radial Pie Chart belongs to a group of Radial Charts and uses belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.


`sample="/charts/data-chart/radial-pie-chart", height="600", alt="{Platform} Radial Pie Chart"`


<div class="divider--half"></div>

## Additional Resources
- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References
The following table lists API members mentioned in the above sections:

- `LegendItemBadgeTemplate`
- `LegendItemTemplate`
- `LegendLabelMemberPath`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`

| Chart Type       | Control Name   | API Members |
| -----------------|----------------|------------ |
| Pie Chart      | `XamPieChart`     | `PieChart` |
| Radial Pie Chart | `XamDataChart` | `RadialPieSeries` |


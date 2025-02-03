---
title: {Platform} Pie Charts and Graphs | {ProductName}
_description: The {ProductName} data pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections.  Try for FREE.
_keywords: {Platform} charts, pie chart, {ProductName}, Infragistics, data binding, slice selection, animation, highlighting, legend
mentionedTypes: ["DataPieChart", "XamDataChart", "OthersCategoryType", "SeriesSelectionMode", "SeriesSelectionBehavior", "SeriesHighlightingBehavior"]
namespace: Infragistics.Controls.Charts
---
# {Platform} Data Pie Chart

The {ProductName} Data Pie Chart is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## {Platform} Data Pie Chart Example

You can create the {Platform} Pie Chart in the `DataPieChart` by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization.

`sample="/charts/data-pie-chart/overview", height="600", alt="{Platform} Data Pie Chart Overview"`

<div class="divider--half"></div>

## {Platform} Data Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization such as Doughnut (Ring) Chart, Funnel Chart, Stacked Area Chart, Stacked Bar Chart, and Treemap.

The {Platform} Data Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Selection
- Slice Highlighting
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

## {Platform} Data Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the `Legend` property. The ItemLegend will display its items in vertical orientation as a default, but this can be changed by setting its `Orientation` property.

The labels shown on the legend will display the same content as the label that is shown for each slice in the `DataPieChart` by default, but this can be modified by utilizing the `LegendSliceLabelContentMode` property on the chart. This exposes an enumeration that allows you to show the label, value, percentage, or any combination of those as the legend's content for each slice in the chart.

You can also modify the ItemLegend badge. By default, it appears as a filled circle corresponding to the color of the associated chart slice. You can configure this by using the `LegendItemBadgeShape` property on the chart, and you can set this to be a circle, line, bar, column, and more.

Below is an example that demonstrates usage of the ItemLegend with the `DataPieChart`.

`sample="/charts/data-pie-chart/legend", height="600", alt="{Platform} Data Pie Chart Legend"`

<div class="divider--half"></div>

## {Platform} Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice.

The Others category in the `DataPieChart` has three main, configurable properties - `OthersCategoryType`, `OthersCategoryThreshold`, and `OthersCategoryText` that allow you to configure how the Others slice in the chart is shown. These are each described below:

The `OthersCategoryType` property works in tandem with the `OthersCategoryThreshold` property of the `DataPieChart`. For the `OthersCategoryType`, you can define whether you want the `OthersCategoryThreshold` to be evaluated as a number or a percentage. For example, if you decide on number and set the `OthersCategoryThreshold` to 5, any slices that have a value less than 5 will become part of the Others category. Using the same value of 5 with a percent type, any values that are less than 5 percent of the total values of the `DataPieChart` will become part of the Others category.

By default, the Others slice will be represented by a label of "Others." You can change this by modifying the `OthersCategoryText` property of the chart.

If you want to ensure that the Others category does not show up in the `DataPieChart`, you can set the `OthersCategoryThreshold` to 0.

The following sample demonstrates usage of the Others slice in the `DataPieChart`:

`sample="/charts/data-pie-chart/others", height="600", alt="{Platform} Data Pie Chart Others"`

<div class="divider--half"></div>

## {Platform} Data Pie Chart Selection

The `DataPieChart` supports slice selection by mouse click on the slices plotted in the chart. This can be configured by utilizing the `SelectionBehavior` and `SelectionMode` properties of the chart, described below:

The main two options of the `SelectionBehavior` are `PerDataItemSingleSelect` and `PerDataItemMultiSelect`, which will enable single and multiple selection, respectively.

The `SelectionMode` property exposes an enumeration that determines how the pie chart slices respond to being selected. The following are the options of that enumeration and what they do:

- `Brighten`: The selected slices will be highlighted.
- `FadeOthers`: The selected slices will remain their same color and others will fade.
- `FocusColorFill`: The selected slices will change their background to the FocusBrush of the chart.
- `FocusColorOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart.
- `FocusColorThickOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- `GrayscaleOthers`: The unselected slices will have a gray color filter applied to them.
- `None`: There is no effect on the selected slices.
- `SelectionColorFill`: The selected slices will change their background to the SelectionBrush of the chart.
- `SelectionColorOutline`: The selected slices will have an outline with the color defined by the SelectionBrush of the chart.
- `SelectionColorThickOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- `ThickOutline`: The selected slices will apply an outline with the thickness dependent on the Thickness property of the chart.

When a slice is selected, its underlying data item will be added to the SelectedSeriesItems collection of the chart. As such, the XamDataPieChart exposes the SelectedSeriesItemsChanged event to detect when a slice has been selected and this collection is changed.

The following sample demonstrates the selection feature of the `DataPieChart` control:

`sample="/charts/data-pie-chart/selection", height="600", alt="{Platform} Data Pie Chart Selection"`

<div class="divider--half"></div>

## {Platform} Data Pie Chart Highlighting

The `DataPieChart` supports mouse over highlighting, as well as a highlighting overlay that can be configured by providing a separate data source.

First, the `HighlightingBehavior` enumerated property determines how a slice will be highlighted. The following are the options of that property and what they do:

- `DirectlyOver`: The slices are only highlighted when the mouse is directly over them.
- `NearestItems`: The nearest slice to the mouse position will be highlighted.
- `NearestItemsAndSeries`: The nearest slice and series to the mouse position will be highlighted.
- `NearestItemsRetainMainShapes`: The nearest items to the mouse position will be highlighted and the main shapes of the series will not be de-emphasized.

The `HighlightingMode` enumerated property determines how the data pie chart slices respond to being highlighted. The following are the options of that property and what they do:

- `Brighten`: The series will have its color brightened when the mouse position is over or near it.
- `BrightenSpecific`: The specific slice will have its color brightened when the mouse position is over or near it.
- `FadeOthers`: The series will retain its color when the mouse position is over or near it, while the others will appear faded.
- `FadeOthersSpecific`: The specific slice will retain its color when the mouse position is over or near it, while the others will appear faded.
- `None`: The series and slices will not be highlighted.

The following example demonstrates the mouse highlighting behaviors of the `DataPieChart` component:

`sample="/charts/data-pie-chart/highlighting", height="600", alt="{Platform} Data Pie Chart Highlighting"`

In addition to the mouse highlighting, the `DataPieChart` exposes a highlight filter capability that can display a subset of your data. This is applied by specifying a `HighlightedDataSource` for the control and by setting the `HighlightedValuesDisplayMode` property to `Overlay`. The `HighlightedDataSource` expects a subset of the data assigned to the `DataSource` property of the `DataPieChart`.

When these conditions are met, the values of the subset will be highlighted, while the remainder of the full set of data will be faded - effectively creating a highlight for the subset and allowing easier visualization of a subset of your data within the same control.

The following example demonstrates highlight filtering. 

`sample="/charts/data-pie-chart/highlight-filter", height="600", alt="{Platform} Data Pie Chart Highlight Filtering"`

<div class="divider--half"></div>

## {Platform} Data Pie Chart Animation

The `DataPieChart` supports animating its slices into view, as well as when a value changes.

You can set the `IsTransitionInEnabled` property to **true** to have the pie chart animate into view. The type of animation performed can be configured by setting the `TransitionInMode` enumerated property to the type of animation you would like to see. Additionally, you can also set the `TransitionInSpeedType` property to scale with index, value, normal, or randomized. The duration of this animation can be controlled by the `TransitionInDuration` property, which takes a `TimeSpan`.

If you would like to animate data changes, this can also be done by setting the `AnimateSeriesWhenAxisRangeChanges` property to **true**. The duration of this change can be configured by setting the `TransitionDuration` property as well.

The following sample demonstrates the usage of animation in the `DataPieChart`:

`sample="/charts/data-pie-chart/animation", height="600", alt="{Platform} Data Pie Chart Animation"`

<div class="divider--half"></div>

## Additional Resources

- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- `ChartType`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`
- `SelectionBehavior`

 |Chart Type       | Control Name   | API Members |
 |-----------------|----------------|------------ |
 |Data Pie Chart      | `DataPieChart`     | `DataPieChart` |
 |Item Legend | `ItemLegend` | `ItemLegend` |


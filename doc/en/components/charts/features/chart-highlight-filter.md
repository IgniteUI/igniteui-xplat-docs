---
title: {Platform} Chart Highlight Filter | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Highlight Filter
_keywords: {Platform} Charts, Highlighting, Filtering, Infragistics
mentionedTypes: ["CategoryChart", "XamDataChart", "Series", "HighlightedValuesDisplayMode"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart Highlight Filter

The {ProductName} Chart components support a data highlighting overlay that can enhance the visualization of the series plotted in those charts by allowing you to view a subset of the data plotted. This can help you to visualize things like target values versus actual values with your data set. This feature is demonstrates in the following example:

`sample="/charts/data-chart/chart-highlight-filter-multiple-series", height="500", alt="{Platform} Highlight Filter Example"`

Note that data highlighting feature is supported by the `XamDataChart` and `CategoryChart`, but it is configured in different ways in those controls due to the nature of how those controls work. The following will explain the different APIs for the highlight filter feature.

## Using Highlight Filter with DataChart

In the `XamDataChart`, much of the highlight filter API happens on the series themselves, mainly by setting the `HighlightedValueMemberPath` property to the name of a property on your underlying data item that represents a subset of the data that you are looking to show. This will highlight the subset of data while showing the total set with a reduced opacity in the case of column and area series types, and a dashed line in the case of line series types.

The following sample demonstrates using the `HighlightedValueMemberPath` to show the highlighting:

The reduced opacity of the column and area series types is configurable by setting the `HighlightedValuesFadeOpacity` property on the series. You can also set the `HighlightedValuesDisplayMode` property to `Hidden` if you do not wish to see the overlay at all.

By default, the data source used for the `HighlightedValueMemberPath` will be what you have set the `ItemsSource` of the series or chart to, but you can also provide your own by using the `HighlightedItemsSource` property of the series. Note, that if you are using a category series, the schema of the `HighlightedItemsSource` will need to match the schema of the `ItemsSource` property of that series.

The part of the series shown by the highlight filter will be represented in the legend and tooltip layers of the chart separately. You can configure the title that this is given in the tooltip and legend by setting the `HighlightedTitleSuffix`. This will append the value that you provide to the end of the `Title` of the series.

The following example demonstrates the usage of the data highlighting overlay feature within the `XamDataChart` control:

`sample="/charts/data-chart/chart-highlight-filter", height="500", alt="{Platform} Highlight Filter Example"`

## Using Highlight Filter in CategoryChart

The `CategoryChart` highlight filter happens on the chart by setting the `InitialHighlightFilter` property. Since the `CategoryChart` takes all of the properties on your underlying data item into account by default, you will need to define the `InitialGroups` on the chart as well so that the data can be grouped and aggregated in a way that you can have a subset of the data to filter on. You can set the `InitialGroups` to a value path in your underlying data item to group by a path that has duplicate values. 

<!-- Unsure of this part. Need to review -->
<!-- ????? The `InitialHighlightFilter` is done using OData filter query syntax. The syntax for this is an abbreviation of the filter operator. For example, if you wanted to have an InitialHighlightFilter of "Month not equals January" it would be represented as "Month ne 'January'"-->

Similar to the `XamDataChart`, the `HighlightedValuesDisplayMode` property is also exposed on the `CategoryChart`. In the case that you do not want to see the overlay, you can set this property to `Hidden`.

The following example demonstrates the usage of the data highlighting overlay feature within the `CategoryChart` control:

`sample="/charts/category-chart/chart-highlight-filter", height="500", alt="{Platform} Highlight Filter Example"`

<!-- TODO add new section that talks about how this feature also applies to Range, Financial series and the HighlightedValueMemberPath property corresponds to:
HighlightedHighMemberPath and HighlightedLowMemberPath in Range Series
HighlightedHighMemberPath, HighlightedLowMemberPath, HighlightedOpenMemberPath, HighlightedCloseMemberPath in Financial Series-->

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Highlighting](chart-highlighting.md)
- [Chart Data Tooltip](chart-data-tooltip.md)
- [Chart Data Aggregations](chart-data-aggregations.md)

## API References

The following is a list of API members mentioned in the above sections:


| `CategoryChart` Properties                    | `XamDataChart` Properties | 
| ----------------------------------------------|---------------------------|
| `CategoryChart.HighlightedItemsSource`        | `Series.HighlightedItemsSource`  |
| `CategoryChart.HighlightedTitleSuffix`        | `Series.HighlightedTitleSuffix`  | 
| `CategoryChart.HighlightedValueMemberPath`    | `Series.HighlightedValueMemberPath`     | 
| `CategoryChart.HighlightedValuesDisplayMode`  | `Series.HighlightedValuesDisplayMode`   | 
| `CategoryChart.HighlightedValuesFadeOpacity`  | `Series.HighlightedValuesFadeOpacity`   | 
| `CategoryChart.HighlightedValuesDisplayMode`  | `Series.HighlightedValuesDisplayMode`   | 
| `CategoryChart.InitialHighlightFilter`        |  |
| `CategoryChart.InitialGroups`                 |  |

---
title: {Platform} Data Aggregations | Data Visualization | Infragistics
_description: Infragistics' {Platform} Data Aggregations
_keywords: {Platform} Charts, Markers, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Data Aggregations

In the {ProductName} `CategoryChart` control Data Aggregations feature allows you to group data in the chart by unique values on the `XAxis` and then sort those groups. You may then apply summaries which will be reflected by the range of the `YAxis` and will be displayed in the tooltip when hovering the series.

# {Platform} Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and can be changed to other properties within each data item such as Product, MonthName, and Year to aggregate the sales data. Also a summary and sort option is available to get a desirable order for the grouped property. 

Note, the abbreviated functions found within the dropdowns for `InitialSummaries` and `GroupSorts` have be applied as shown to get a correct result based on the property you assign. eg. Sum(sales) as Sales | Sales Desc

`sample="/charts/category-chart/data-aggregations", height="500", alt="{Platform} Data Aggregations Example"`

```html
<igx-category-chart
    [dataSource]="salesData"
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.salesData}
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc"/>
```
```html
<igc-category-chart
     id="chart"
     initial-groups="country"
     initial-summaries="Sum(sales) as Sales"
     group-sorts="Sales Desc">
</igc-category-chart>
```

## API References

The following is a list of API members mentioned in the above sections:

- `InitialSortDescriptions`
- `InitialSorts`
- `SortDescriptions`
- `InitialGroups`
- `InitialGroupDescriptions`
- `GroupDescriptions`
- `InitialSummaries`
- `InitialSummaryDescriptions`
- `SummaryDescriptions`
- `InitialGroupSortDescriptions`
- `GroupSorts`
- `GroupSortDescriptions`

> [!Note]
> Chart Aggregation will not work when using `IncludedProperties` | `ExcludedProperties`. These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.


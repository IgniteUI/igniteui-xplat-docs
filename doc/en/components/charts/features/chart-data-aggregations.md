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

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and applies a summary and sort based on the Sales Sum. 

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-aggregations"
           alt="{Platform} Data Aggregations Example"
           github-src="charts/category-chart/data-aggregations">
</code-view>

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

## API Members

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

> NOTE: Chart Aggregation will not work when using `IncludedProperties` | `ExcludedProperties`. These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.


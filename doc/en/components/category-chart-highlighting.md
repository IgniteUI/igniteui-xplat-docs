---
title: $Platform$ Charts and Graphs | Data Visualization Tools | Highlighting | Infragistics
_description: Infragistics' $Platform$ charts control allows you to highlight areas of the graph. Learn about $ProductName$ highlighing features!
_keywords: $Platform$ charts, category chart, Highlight Layers, Highlighting, $ProductName$, Infragistics
mentionedTypes: ['CategoryChart']
---
# $Platform$ Highlighting

This topic provides conceptual information about the highlighting features of the $ProductName$ category chart component.

## $Platform$ Highlighting Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-highlighting"
           alt="$Platform$ Highlighting Example"
           github-src="charts/category-chart/highlighting">
</code-view>

<div class="divider--half"></div>


## Highlight Layers

The $ProductName$ category chart component can enable three types of highlighting when hovering over items.

1. Series Highlighting will highlight the single data point when the pointer is positioned over it.

1. Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position.

1. Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position.

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    IsSeriesHighlightingEnabled="true"
    IsCategoryHighlightingEnabled="true"
    IsItemHighlightingEnabled="true">
</CategoryChart>
```

```html
<igx-category-chart
    [dataSource]="data"
    isSeriesHighlightingEnabled="true"
    isCategoryHighlightingEnabled="true"
    isItemHighlightingEnabled="true">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    isSeriesHighlightingEnabled={true}
    isCategoryHighlightingEnabled={true}
    isItemHighlightingEnabled={true} />
```

```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    is-series-highlighting-enabled="true"
    is-category-highlighting-enabled="true"
    is-item-highlighting-enabled="true" >
</igc-category-chart>
```

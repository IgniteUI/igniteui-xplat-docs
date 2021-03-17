---
title: $PlatformShort$ Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Highlighting
_keywords: $PlatformShort$ Charts, Highlighting, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Chart Highlighting

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-highlighting" 
           alt="$PlatformShort$ Highlighting Example" 
           github-src="charts/category-chart/category-chart-column-chart-with-highlighting">
</code-view>

<div class="divider--half"></div>


## Highlight Layers

The $ProductName$ category chart component can enable three types of highlighting when hovering over items.

1. Series Highlighting will highlight the single data point when the pointer is positioned over it.

2. Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position.

3. Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position.

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

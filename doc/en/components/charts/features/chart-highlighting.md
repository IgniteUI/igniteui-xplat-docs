---
title: $PlatformShort$ Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Highlighting
_keywords: $PlatformShort$ Charts, Highlighting, Infragistics
mentionedTypes: ['XamCategoryChart']
---

# $PlatformShort$ Chart Highlighting

All $PlatformShort$ Charts support highlighting of visuals such as lines, columns, and markers when the end-user hovers mouse cursor over data items rendered in plot area. Highlighting is supported by the `XamCategoryChart`, `XamFinancialChart`, and `XamDataChart` components and they have the same API for using the highlighting feature.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-highlighting"
           alt="$PlatformShort$ Highlighting Example"
           github-src="charts/category-chart/category-chart-column-chart-with-highlighting">
</code-view>

<div class="divider--half"></div>


## Highlight Layers

The $ProductName$ `XamCategoryChart` can enable three types of highlighting when hovering over data items.

1. Series Highlighting will highlight the single data point represented by a marker or column when the pointer is positioned over it. This is enabled by setting the `IsSeriesHighlightingEnabled` property to true.

2. Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position. This is enabled by setting the `IsItemHighlightingEnabled` property to true.

3. Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position. This is enabled by setting the `IsCategoryHighlightingEnabled` property to true.

```razor
<CategoryChart Height="500px" Width="700px" DataSource="@DataSource"
    IsSeriesHighlightingEnabled="true"
    IsCategoryHighlightingEnabled="false"
    IsItemHighlightingEnabled="false">
</CategoryChart>
```

```html
<igx-category-chart [dataSource]="data" width="800px" height="500px"
    isSeriesHighlightingEnabled="true"
    isCategoryHighlightingEnabled="false"
    isItemHighlightingEnabled="false">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    isSeriesHighlightingEnabled={true}
    isCategoryHighlightingEnabled={false}
    isItemHighlightingEnabled={false} />
```

```html
<igc-category-chart id="chart" width="800px" height="500px"
    is-series-highlighting-enabled="true"
    is-category-highlighting-enabled="false"
    is-item-highlighting-enabled="false" >
</igc-category-chart>
```

## API Members
- `IsCategoryHighlightingEnabled`
- `IsItemHighlightingEnabled`
- `IsSeriesHighlightingEnabled`
- `XamCategoryChart`


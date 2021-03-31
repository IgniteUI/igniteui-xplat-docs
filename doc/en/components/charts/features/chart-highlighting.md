---
title: $PlatformShort$ Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Highlighting
_keywords: $PlatformShort$ Charts, Highlighting, Infragistics
mentionedTypes: ['XamCategoryChart']
---

# $PlatformShort$ Chart Highlighting

All $PlatformShort$ Charts support highlighting of visuals such as lines, columns, and markers when the end-user hovers mouse cursor over data items rendered in plot area. Highlighting is supported by the `XamCategoryChart`, `XamFinancialChart`, and `XamDataChart` components and they have the same API for using the highlighting feature.

## $PlatformShort$ Chart Highlighting Example

The following example demonstrates the different highlighting options that are available on the $PlatformShort$ chart. Click on the checkboxes to enable the different highlight types.

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

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Tooltips](chart-tooltips.md)

## API Members

The following table lists API members mentioned in the above sections:

- `IsCategoryHighlightingEnabled`
- `IsItemHighlightingEnabled`
- `IsSeriesHighlightingEnabled`
- `XamCategoryChart`
- `XamDataChart`
- `XamFinancialChart`


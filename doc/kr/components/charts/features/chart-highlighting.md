---
title: $Platform$ Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' $Platform$ Chart Highlighting
_keywords: $Platform$ Charts, Highlighting, Infragistics
_language: kr
mentionedTypes: ["CategoryChart"]
---

# $Platform$ Chart Highlighting

All $Platform$ Charts support highlighting of visuals such as lines, columns, and markers when the end-user hovers mouse cursor over data items rendered in plot area. Highlighting is supported by the `CategoryChart`, `FinancialChart`, and `XamDataChart` controls and they have the same API for using the highlighting feature.

## $Platform$ Chart Highlighting Example

The following example demonstrates the different highlighting options that are available on the $Platform$ chart. Click on the checkboxes to enable the different highlight types.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-highlighting"
           alt="$Platform$ Highlighting Example"
           github-src="charts/category-chart/category-chart-column-chart-with-highlighting">
</code-view>

<div class="divider--half"></div>

# $Platform$ Chart Highlighting Modes & Behaviors

All $Platform$ Charts support a variety of highlighting options. `HighlightingMode` can be set to brighten or fade when the mouse is hovering over a series/data item rendered in the plot area. `HighlightingBehavior` can be set to directly over or the nearest data item to trigger the highlighting effect. Highlighting modes and behaviors is supported by the `CategoryChart`, `FinancialChart`, and `XamDataChart` controls and they have the same API for using the highlighting feature.

# $Platform$ Chart Legend Highlighting

All $Platform$ Charts support legend highlighting. `LegendHighlightingMode` can enabled so that when mouse is hovering over a legend marker item then the rendered series will highlight in the plot area. Legend highlighting is supported by the `CategoryChart`, `FinancialChart`, and `XamDataChart` controls and they have the same API for using the highlighting feature.

## Highlight Layers

The $ProductName$ `CategoryChart` can enable three types of highlighting when hovering over data items.

1. Series Highlighting will highlight the single data point represented by a marker or column when the pointer is positioned over it. This is enabled by setting the `IsSeriesHighlightingEnabled` property to true.

2. Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position. This is enabled by setting the `IsItemHighlightingEnabled` property to true.

3. Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position. This is enabled by setting the `IsCategoryHighlightingEnabled` property to true.

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Tooltips](chart-tooltips.md)

## API Members

The following is a list of API members mentioned in the above sections:

- `HighlightingMode`
- `HighlightingBehavior`
- `LegendHighlightingBehavior`
- `IsCategoryHighlightingEnabled`
- `IsItemHighlightingEnabled`
- `IsSeriesHighlightingEnabled`
- `CategoryChart`
- `XamDataChart`
- `FinancialChart`


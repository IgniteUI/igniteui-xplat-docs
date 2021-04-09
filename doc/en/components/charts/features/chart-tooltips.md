---
title: $PlatformShort$ Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Tooltips
_keywords: $PlatformShort$ Charts, Tooltips, Infragistics
mentionedTypes: ["XamCategoryChart", "ToolTipType"]
---

# $PlatformShort$ Chart Tooltips

In $PlatformShort$ charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips supported by the `XamCategoryChart`, `XamFinancialChart`, and `XamDataChart` components.

## $PlatformShort$ Chart Tooltips Example

The following example shows the [Column Chart](../types/column-chart.md) is comparing movie series total world box office revenue versus the highest grossing movie in that series with tooltips enabled by setting the `ToolTipType` property to "Default" at the start. This property is configurable in the sample and can be set to one of the following options:

- `Default`- tooltips will display a tooltip for a single item when the pointer is positioned over it.
- `Item`- tooltips will display a tooltip for each data item in the category that the pointer is positioned over.
- `Category`- tooltips will display a grouped tooltip for all data points in the category that the pointer is positioned over.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="$PlatformShort$ Tooltip Types Example"
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Chart Tooltip Template

The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, tooltip templates can be configured to customize the tooltip content and look and feel.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-tooltip-template"
           alt="$PlatformShort$ Tooltip Template"
           github-src="charts/data-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Markers](chart-markers.md)

## API Members

The following is a list of API members mentioned in the above sections:

- `ToolTipType`
- `XamCategoryChart`

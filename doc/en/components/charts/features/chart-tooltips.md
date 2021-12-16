---
title: $Platform$ Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' $Platform$ Chart Tooltips
_keywords: $Platform$ Charts, Tooltips, Infragistics
mentionedTypes: ["CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
---

# $Platform$ Chart Tooltips

In $Platform$ charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the `CategoryChart`, `FinancialChart`, and `XamDataChart` controls.

## $Platform$ Chart Tooltip Types

$Platform$ Chart provide three types of tooltips that you can with tooltips enabled by setting the `ToolTipType` property. The following example shows the [Column Chart](../types/column-chart.md) with a combo-box that you can use to change type of tooltips.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="$Platform$ Tooltip Types Example"
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

<div class="divider--half"></div>

The `ToolTipType` property is configurable and can be set to one of the following options:

Property Value     | Description
-------------------|----------------
`Default`  Tooltip | Display a tooltip for a single item when the pointer is positioned over it.
`Item`  Tooltip    | Display a tooltip for each data item in the category that the pointer is positioned over.
`Category` Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over.

<div class="divider--half"></div>

## $Platform$ Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of $Platform$ charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in $Platform$ `CategoryChart` control. Note that you can also apply the same logic to custom tooltips in $Platform$ `FinancialChart` control.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template"
           alt="$Platform$ Tooltip Template"
           github-src="charts/category-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>


## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in $Platform$ Data Chart control.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-tooltip-template"
           alt="$Platform$ Tooltip Template"
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
- `CategoryChart`
- `XamDataChart`

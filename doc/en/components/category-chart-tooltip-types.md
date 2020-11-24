---
title: $PlatformShort$ Charts and Graphs | Data Visualization Tools | Tooltip Types | Infragistics
_description: Use Infragistics' $PlatformShort$ chart's tooltips to display important data. View our $ProductName$ graph tutorials!
_keywords: $PlatformShort$ charts, category chart, tooltip, $ProductName$, Infragistics
mentionedTypes: ['CategoryChart', 'ToolTipType']
---
# $PlatformShort$ Tooltip Types

This topic provides conceptual information about the tooltip types available on the $ProductName$ category chart component.

## $PlatformShort$ Tooltip Types Example
<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Tooltip Types Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/category-chart/tooltip-types"></sample-button>

</div>
<div class="divider--half"></div>

## Tooltip Types

The $ProductName$ category chart component can be configured to display Tooltips in the following ways:

1. `Default` tooltips will display a tooltip for a single item when the pointer is positioned over it.
1. `Item` tooltips will display a tooltip for each data item in the category that the pointer is positioned over.
1. `Category` tooltips will display a grouped tooltip for all data points in the category that the pointer is positioned over.
1. `None` will prevent tooltips from displaying.

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    ToolTipType="ToolTipType.Category"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    toolTipType="Category" />
```

```html
<igc-category-chart
    id="chart"
    tool-tip-type="Category">
</igc-category-chart>
```

---
title: $PlatformShort$ Financial Chart | ToolTip Types | Infragistics
_description: Use Infragistics' $PlatformShort$ financial chart's tooltips to display important data. View our $ProductName$ graph tutorials!
_keywords: $PlatformShort$ charts, financial chart, stock chart, tooltips, $ProductName$, Infragistics
mentionedTypes: ['XamFinancialChart']
---
# $PlatformShort$ Tooltip Types

This topic provides conceptual information about the tooltip types available on the $PlatformShort$ financial chart component.

## $PlatformShort$ Tooltip Types Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-types" 
           alt="$PlatformShort$ Tooltip Types Example" 
           github-src="charts/financial-chart/tooltip-types">
</code-view>

<div class="divider--half"></div>

## Tooltip Types

The $PlatformShort$ financial chart component can be configured to display Tooltips in the following ways:

1. `Default` tooltips will display a tooltip for a single item when the pointer is positioned over it.
1. `Item` tooltips will display a tooltip for each data item in the category that the pointer is positioned over.
1. `Category` tooltips will display a grouped tooltip for all data points in the category that the pointer is positioned over.
1. `None` will prevent tooltips from displaying.

```html
<igx-financial-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.data}
    toolTipType="Category" />
```

```html
<igc-financial-chart id="chart"
    tool-tip-type="Category">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"                
    DataSource="DataSource"
    ToolTipType="ToolTipType.Category"/>
```

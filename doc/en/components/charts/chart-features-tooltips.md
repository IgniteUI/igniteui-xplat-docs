---
title: $PlatformShort$ Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Tooltips
_keywords: $PlatformShort$ Charts, Tooltips, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Chart Tooltips

This topic provides conceptual information about the tooltip types available on the $ProductName$ category chart component.

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips" 
           alt="$PlatformShort$ Tooltip Types Example" 
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

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

<!-- TODO uncomment below section when bug# 272693 is fixed 

# $PlatformShort$ Tooltip Templates

The $PlatformShort$ category chart component provides default tooltips for each type of series. The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, tooltip templates can be configured to customize the tooltip content and look and feel.

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template" 
           alt="$PlatformShort$ Tooltip Templates Example" 
           github-src="charts/category-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

The tooltip content is customized by creating a template for the tooltip as demonstrated in the following code.

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
   <div>
      <span> {{item.Country}} energy use: <br/></span>
      <span> Coal :{{item.Coal | number}}<br/></span>
      <span> Oil :{{item.Oil | number}}<br/></span>
      <span> Gas :{{item.Gas | number}}<br/></span>
      <span> Nuclear :{{item.Nuclear | number}}<br/></span>
      <span> Hydro :{{item.Hydro | number}}<br/></span>
    </div>
</ng-template>

<div class="chart">
    <igx-category-chart height="100%" width="100%"
        [dataSource]="data" chartTitle="Energy Production"
        subtitle="by Country"
        [tooltipTemplate]="valueTooltip"
        [chartType]="chartType">
    </igx-category-chart>
</div>
```

```tsx
 <IgrCategoryChart height="100%" width="100%"
        dataSource={this.state.data}
        chartTitle="Energy Production"
        subtitle="by Country"
        tooltipTemplate={this.valueTooltip}
        chartType={this.state.chartType} />
```
```html
<igc-category-chart
    id="chart"
    width="800px"
    height="700px"
    chart-title="Energy Production"
    subtitle="by Country"
    chart-type="Column">
  </igc-category-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcCategoryChartComponent);
chart.dataSource = categoryData;

let template: TemplateFunction;
chart.tooltipTemplate = template;
```

TODO uncomment above section when bug# 272693 is fixed 
-->

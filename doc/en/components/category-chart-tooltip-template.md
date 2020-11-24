---
title: $PlatformShort$ Charts and Graphs | Data Visualization Tools | Tooltip Templates | Infragistics
_description: Use Infragistics' $PlatformShort$ chart's tooltips to display important data. View our $ProductName$ graph tutorials!
_keywords: $PlatformShort$ charts, category chart, tooltip template, $ProductName$, Infragistics
mentionedTypes: ['CategoryChart']
---
# $PlatformShort$ Tooltip Templates

The $PlatformShort$ category chart component provides default tooltips for each type of series. The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, tooltip templates can be configured to customize the tooltip content and look and feel.

## $PlatformShort$ Tooltip Templates Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-template-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Tooltip Templates Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-template-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/category-chart/tooltip-template"></sample-button>

</div>

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
---
title: $PlatformShort$ Data Chart Component - Native $PlatformShort$ | $ProductName$
_description: The $ProductName$ Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Chart Control, $PlatformShort$ Chart Example, $PlatformShort$ Chart Component, $PlatformShort$ Data Chart
_language: kr
mentionedTypes: ['XamDataChart', 'ColumnSeries', 'ValueOverlay']
namespace: Infragistics.Controls.Charts
---

# $PlatformShort$ Value Overlay

The $ProductName$ data chart component allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the `ValueOverlay`. This can help you to visualize data such as the mean or median of a particular series.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-value-overlay-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-value-overlay-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/series-value-overlay"></sample-button>

</div>

<div class="divider--half"></div>

Unlike other series types that use a `DataSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single `Axis` to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

`ValueOverlay` appearance properties are inherited from `Series` and so `Brush` and `Thickness` for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a `ValueOverlay` to show the value of the overlay on the owning axis. In order to show this, you can set the `IsAxisAnnotationEnabled` property to true.

## Code Example

The following code snippet demonstrates adding a value overlay with axis annotation to the $ProductName$ data chart component:

```html
<igx-data-chart #chart height="600px" width="800px" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Label"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Value"></igx-column-series>

  <igx-value-overlay [axis]="yAxis" value=5 thickness=5 isAxisAnnotationEnabled=true></igx-value-overlay>

</igx-data-chart>
```

```tsx
<IgrDataChart height="600px"
    width="800px"
    dataSource={this.data} >
    <IgrCategoryXAxis name="xAxis" label="Label" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Value" />
    <IgrValueOverlay name="overlay1" axisName="yAxis" value={5} thickness={5} isAxisAnnotationEnabled={true} />
</IgrDataChart>
```

```html
<igc-data-chart id="chart" height="600px" width="800px">
  <igc-category-x-axis id="xAxis" label="Label"></igc-category-x-axis>
  <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

  <igc-column-series id="series1" value-member-path="Value"></igc-column-series>

  <igc-value-overlay id="valueOverlay" value="5" thickness="5" is-axis-annotation-enabled=true></igc-value-overlay>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let legend = (document.getElementById("legend") as IgcLegendComponent);
chart.legend = legend;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let valueOverlay = (document.getElementById("valueOverlay") as IgcValueOverlayComponent);
valueOverlay.axis = yAxis;
```

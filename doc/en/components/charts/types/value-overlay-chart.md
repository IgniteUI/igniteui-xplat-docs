---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics $ProductName$ chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, value overlay, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'ColumnSeries', 'ValueOverlay']
namespace: Infragistics.Controls.Charts
---

# $PlatformShort$ Value Overlay Chart

The $ProductName$ data chart allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the `ValueOverlay`. This can help you to visualize data such as the mean or median of a particular series.

## $PlatformShort$ Value Overlay Example

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay"
           alt="$PlatformShort$ Value Overlay Example"
           github-src="charts/data-chart/series-value-overlay">
</code-view>

<div class="divider--half"></div>

Unlike other series types that use a `DataSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single `Axis` to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

`ValueOverlay` appearance properties are inherited from `Series` and so `Brush` and `Thickness` for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a `ValueOverlay` to show the value of the overlay on the owning axis. In order to show this, you can set the `IsAxisAnnotationEnabled` property to true.

## Code Example

The following code snippet demonstrates adding a value overlay with axis annotation to the $ProductName$ data chart:

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

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let valueOverlay = (document.getElementById("valueOverlay") as IgcValueOverlayComponent);
valueOverlay.axis = yAxis;
```

```razor
<DataChart Height="100%" Width="100%" >
    <CategoryXAxis Name="xAxis" DataSource="DataSource" Label="Label" />
    <NumericYAxis Name="yAxis" MinimumValue="0" MaximumValue="10" />

    <ColumnSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="DataSource" ValueMemberPath="Value" />

    <ValueOverlay AxisName="yAxis" Value="5.0" Thickness="5" IsAxisAnnotationEnabled="true" />
</DataChart>
```

---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Axis Annotations | Infragistics
_description: Infragistics' $PlatformShort$ charts control allows you to add annotations to your $PlatformShort$ chart axes, such as Crosshair layer, final value layer and value overlay. Improve your $PlatformShort$  charts and visualizations with $ProductName$
_keywords: $PlatformShort$ charts, data chart, axis annotations, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','LineSeries','ValueOverlay','CrosshairLayer']
---
# $PlatformShort$ Axis Annotations

In the $ProductName$ data chart component, you are able to add annotations to your axes to show particular values at different points on that axis. This can help you to visualize things such as final series values, overlay values, and values corresponding to crosshairs in the chart.

## Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/axis-annotations"></sample-button>

</div>

<div class="divider--half"></div>

In the $ProductName$ data chart, the following are the series and layers that support axis annotations:

- `CrosshairLayer`
- `FinalValueLayer`
- `ValueOverlay`

You can enable the axis annotations by setting the `IsAxisAnnotationEnabled` property of the corresponding layer or overlay to `true`. In doing so, this will place a box on the corresponding owning axis or axes with the value that that particular overlay or layer represents at the point that it is currently at. For example, with the `CrosshairLayer`, these annotations can appear on both the X and Y axes and will move around and change as you scroll around the plot area.

The `IsAxisAnnotationEnabled` property does not exist on the `FinalValueLayer`, as this layer is an axis annotation in itself and has no other visualization other than the annotation on the axis.

You can customize the axis annotations in background, value precision, outline, padding, stroke (outline) thickness, and text color. These can be set using the `AxisAnnotationBackground`, `AxisAnnotationInterpolatedValuePrecision`, `AxisAnnotationOutline`, axis annotation padding (`AxisAnnotationPaddingBottom`,`AxisAnnotationPaddingLeft`,`AxisAnnotationPaddingRight`,`AxisAnnotationPaddingTop`),

`AxisAnnotationStrokeThickness`, and `AxisAnnotationTextColor` properties, respectively. In addition to these properties, there is also an `AxisAnnotationFormatLabel` event that you can use to fully customize what exactly is shown in `ValueOverlay` axis annotations.

Note, the `CrosshairLayer` has the ability to show annotations on both the X and Y axis. These can be customized individually, and as such, each of the above properties exist, but with either an "xAxis" or a "yAxis" placed in front of the name. For example, `XAxisAnnotationBackground` or `YAxisAnnotationTextColor`. In addition `XAxisAnnotationFormatLabel` and `YAxisAnnotationFormatLabel` event that you can use to fully customize what exactly is shown in `CrosshairLayer` axis annotations.

## Code Example
This code demonstrates how to create a $ProductName$ data chart with each of the layers and the overlay with axis annotations enabled for each. In this case, the `FinalValueLayer` is also customized to have a yellow text color.

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" Label="label" DataSource="@data" />
    <NumericYAxis Name="yAxis" />
    <ColumnSeries XAxisName="xAxis"
        YAxisName="yAxis"
        ValueMemberPath="Pop1995"
        DataSource="@DataSource" />
    <ValueOverlay AxisName="yAxis"
        IsAxisAnnotationEnabled="true"
        Thickness="3"
        Value="85" />
    <CrosshairLayer IsAxisAnnotationEnabled="true" />
    <FinalValueLayer AxisAnnotationTextColor="yellow" />
</DataChart>
```

```html
<igx-data-chart [dataSource]="data" width="100%" height="500px">
    <igx-category-x-axis #xAxis label="label"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="value"></igx-column-series>

    <igx-value-overlay [axis]="yAxis" isAxisAnnotationEnabled=true thickness=3 value=85></igx-value-overlay>

    <igx-crosshair-layer isAxisAnnotationEnabled=true></igx-crosshair-layer>

    <igx-final-value-layer axisAnnotationTextColor="Yellow"></igx-final-value-layer>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data} width="100%" height="500px">
    <IgrCategoryXAxis name="xAxis" label="label" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="value" />

    <IgrValueOverlay name="overlay" axisName="yAxis" value={85} thickness={3} isAxisAnnotationEnabled={true} />

    <IgrCrosshairLayer name="crosshair" isAxisAnnotationEnabled={true} />

    <IgrFinalValueLayer name="finalValue" axisAnnotationTextColor="Yellow" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart" width="700px" height="500px">
    <igc-category-x-axis id="xAxis" interval="1" label="month">
    </igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis">
    </igc-numeric-y-axis>

    <igc-column-series id="series1"
      value-member-path="temperature">
    </igc-column-series>

    <igc-value-overlay id="valueOverlay"
      is-axis-annotation-enabled="true"
      thickness="3" value="85" brush="Green">
    </igc-value-overlay>

    <igc-crosshair-layer is-axis-annotation-enabled="true">
    </igc-crosshair-layer>

    <igc-final-value-layer axis-annotation-text-color="Yellow">
    </igc-final-value-layer>
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

### Additional Resources

- [Data Chart Series Annotations](data-chart-series-annotations.md)
- [Value Overlay](data-chart-value-overlay.md)




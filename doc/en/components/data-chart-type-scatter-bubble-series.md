---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Scatter Bubble Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create scatter bubble charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, scatter bubble charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','BubbleSeries']

---
# $PlatformShort$ Scatter Bubble Chart

This topic explains, with code examples, how to use scatter `BubbleSeries` in the $PlatformShort$ data chart component. This series
is similar to [Scatter Marker Series](data-chart-type-scatter-point-series.md) which use the Cartesian (x, y) coordinate system to plot data. This series displays the data as a collection of scaled bubbles, each having a pair of numeric X/Y values that determines its location and 3rd value that determines its size.


## $PlatformShort$ Scatter Bubble Chart Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-bubble-series" alt="$PlatformShort$ Scatter Bubble Chart Example">
</code-view>


<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only `NumericYAxis` and `NumericYAxis` can be used with `BubbleSeries`.

## Required Data

The `BubbleSeries` has the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
- All data items must contain 3 numeric data columns which should be mapped to the `XMemberPath`, `YMemberPath`, and `RadiusMemberPath` properties

You can use the [SampleScatterStats](data-chart-data-sources-stats.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## Required Modules

The scatter bubble series requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartScatterCoreModule.Register(IgniteUIBlazor);
DataChartScatterModule.Register(IgniteUIBlazor);
DataChartInteractivityModuleRegister(IgniteUIBlazor);
NumberAbbreviatorModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxBubbleSeries } from 'igniteui-angular-charts';
import { IgxSizeScale } from 'igniteui-angular-charts';
import { IgxValueBrushScale } from 'igniteui-angular-charts';
import { IgxCustomPaletteBrushScale } from 'igniteui-angular-charts';
import { BrushSelectionMode } from 'igniteui-angular-charts';
import { MarkerType } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteBrushScale } from 'igniteui-react-charts';
import { BrushSelectionMode } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcBubbleSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleModule } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleModule } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteBrushScaleModule } from 'igniteui-webcomponents-charts';
import { BrushSelectionMode } from 'igniteui-webcomponents-charts';
import { MarkerType } from 'igniteui-webcomponents-charts';
// series' components
import { IgcBubbleSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleComponent } from "igniteui-webcomponents-charts";
import { IgcCustomPaletteBrushScaleComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcBubbleSeriesModule,
    IgcSizeScaleModule,
    IgcValueBrushScaleModule,
    IgcCustomPaletteBrushScaleModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with `BubbleSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <BubbleSeries Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        DataSource="@DataSource"
        XMemberPath="Population"
        YMemberPath="GdpTotal"
        RadiusMemberPath="GdpPerCapita" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>

    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita">
    </igx-bubble-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" isLogarithmic="true" />
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    {/* series: */}
    <IgrBubbleSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="population"
     yMemberPath="gdpTotal"
     radiusMemberPath="gdpPerCapita" />
 </IgrDataChart>
```

```ts
const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

const series1 = new IgrBubbleSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "population";
series1.yMemberPath = "gdpTotal";
series1.radiusMemberPath = "gdpPerCapita";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleShapeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis id="xAxis" is-logarithmic="true"></igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis" is-logarithmic="true"></igc-numeric-y-axis>

    <igc-bubble-series
        id="series1"
        x-member-path="population"
        y-member-path="gdpTotal"
        radius-member-path="gdpPerCapita">
    </igc-bubble-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## Bubble Shapes

You can customize appearance of `BubbleSeries` using the [Markers](data-chart-series-markers.md) properties as well as to change shape of bubbles to one of predefined shapes, for example:

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue">
</igx-bubble-series>
```

```tsx
<IgrBubbleSeries
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
/>
```

```html
<igc-bubble-series
 id="series1"
 marker-type="Square"
 marker-brush="White"
 marker-oOutline="Blue">
</igc-bubble-series>
```

```ts
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

```ts
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

```ts
const series1 = new IgcBubbleSeriesComponent();
series1.id = "series1";
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

## Bubble Radius Scale

The `RadiusScale` is an optional feature of `BubbleSeries` that determines the sizes of bubbles. This feature is implemented through the` SizeScale` object. When the radius scale is set, the smallest bubble will be equal to `MinimumValue`, the largest bubble will be equal to `MaximumValue`, and all the remaining bubbles will be scaled accordingly. The size scale can be either linear or logarithmic. When the radius scale is not set, each bubble’s size is equal to the value of data column mapped to `RadiusMemberPath` property

```ts
const sizeScale = new IgxSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

```ts
const sizeScale = new IgrSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

```ts
const sizeScale = new IgcSizeScaleComponent();
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.radiusScale = sizeScale;
```

## Bubble Fill Scale

The `FillScale` is an optional feature which determines the color pattern within a single `BubbleSeries`. This series supports the following fill scales:

- `ValueBrushScale` uses a set of values from data column mapped to `FillMemberPath` property to determine an interpolated brush for bubbles. Also, it can have user-specified `MinimumValue` and `MaximumValue`. When a range is set on this scale, bubbles with values that fall outside the range do not get a brush from the `Brushes` collection and are not colored.
- `CustomPaletteBrushScale` uses the index of a bubble marker to select a brush from the `Brushes` collection. When the `BrushSelectionMode` property is set to the `Select` enumerable value, the bubbles are colored sequentially and it is set to `Interpolate`, the brush is interpolated based on the bubble’s index and the number of brushes in the collection.

```ts
const brushScale = new IgxValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgxCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

```ts
const brushScale = new IgrValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgrCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

```ts
const brushScale = new IgcValueBrushScaleComponent();
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgcCustomPaletteBrushScaleComponent();
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.fillScale = brushScale;
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Tooltips](data-chart-series-tooltips.md)
- [Series Trendlines](data-chart-series-trendlines.md)
- [Series Types](data-chart-series-types.md)


---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Scatter Area Chart | Data Binding | Infragistics
_description: Infragistics $ProductName$ provide scatter area series . Learn about our $ProductName$  scatter area series!
_keywords: $PlatformShort$ charts, data chart, scatter area charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','ScatterAreaSeries','ScatterContourSeries']
---
# $PlatformShort$ Scatter Area Chart

This topic explains, with code examples, how to use  `ScatterAreaSeries` in the $PlatformShort$ data chart component. This series draws a colored surface based on a triangulation of X and Y data with a numeric value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. The `ScatterAreaSeries` works a lot like the `ScatterContourSeries` except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-area-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-area-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-scatter-area-series"></sample-button>

</div>

<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only `NumericYAxis` and `NumericYAxis` can be used with `ScatterAreaSeries`.

## Required Data

The `ScatterAreaSeries` has the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
- All data items must contain 3 numeric data columns which should be mapped to the `XMemberPath`, `YMemberPath`, and `ColorMemberPath` properties.

You can use the [SampleScatterData](data-chart-data-sources-scatter.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterData.create();
```

## Required Modules

The scatter area series requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* DataChartCoreModule
* DataChartScatterCoreModule
* DataChartScatterModule
* DataChartInteractivityModule
* ScatterAreaSeriesModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterAreaSeries } from 'igniteui-angular-charts';
import { IgxCustomPaletteColorScale } from 'igniteui-angular-charts';
import { ColorScaleInterpolationMode } from 'igniteui-angular-charts';
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
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
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
import { IgcScatterAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteColorScaleModule } from 'igniteui-webcomponents-charts';
import { ColorScaleInterpolationMode } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteColorScaleComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterAreaSeriesModule,
    IgcCustomPaletteColorScaleModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with  `ScatterAreaSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="750px">
        <NumericXAxis Name="xAxis" />
        <NumericYAxis Name="yAxis" />
        <ScatterAreaSeries Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="@DataSource"
            XMemberPath="X"
            YMemberPath="Y"
            ColorMemberPath="Z" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-area-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-area-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />
    {/* series: */}
    <IgrScatterAreaSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z" />
 </IgrDataChart>
```

```ts
const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

const series1 = new IgrScatterAreaSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "X";
series1.yMemberPath = "Y";
series1.colorMemberPath = "Z";

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
    <igc-numeric-x-axis id="xAxis"></igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>
    <igc-scatter-area-series
        id="series1"
        x-member-path="X"
        y-member-path="Y"
        color-member-path="Z">
    </igc-scatter-area-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterAreaSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## Color Scale

Use the `ColorScale` property of the` ScatterAreaSeries` to resolve values of points and thus fill the surface of the series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.

The provided `CustomPaletteColorScale` class should satisfy most coloring needs, but you can inherit from the `ColorScale` abstract class and provide your own coloring logic.

The following table list properties of the `CustomPaletteColorScale` affecting surface coloring of the `ScatterAreaSeries`.

- `Palette`  sets the collection of colors to select from or to interpolate between.
- `InterpolationMode` sets the method getting a color from the Palette.
- `MaximumValue` sets the highest value to assign a color. Any given value greater than this value will be Transparent.
- `MinimumValue` sets the lowest value to assign a color. Any given value less than this value will be Transparent.


```ts
const scale = new IgrCustomPaletteColorScale({});
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.interpolationMode = ColorScaleInterpolationMode.Interpolate;
scale.palette = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

const series1 = new IgrScatterAreaSeries({ name: "series1" });
series1.colorMemberPath = "Z";
series1.colorScale = scale;
```

```ts
const scale = new IgcCustomPaletteColorScaleComponent();
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.interpolationMode = ColorScaleInterpolationMode.InterpolateRGB;
scale.palette = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

let series1 = (document.getElementById("series1") as IgcScatterAreaSeriesComponent);
series1.colorScale = scale;
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Chart Legend](data-chart-legends.md)
- [Series Types](data-chart-series-types.md)


---
title: $Platform$ Data Chart | Data Visualization Tools | Scatter Contour Chart | Data Binding | Infragistics
_description: Use Infragistics' $Platform$ charts control to create scatter contour charts. Learn about our $ProductName$ graph types!
_keywords: $Platform$ charts, data chart, scatter contour charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','ScatterContourSeries']

---
# $Platform$ Scatter Contour Chart

This topic explains, with code examples, how to use  `ScatterContourSeries` in the $Platform$ data chart component. This series
draws colored contour lines based on a triangulation of X and Y data with a numeric value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. The `ScatterContourSeries` works a lot like the `ScatterAreaSeries` except that it represents data as contour lines colored using a fill scale and the scatter area series represents data as a surface interpolated using a color scale.


## $Platform$ Scatter Contour Chart Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-contour-series"
           alt="$Platform$ Scatter Contour Chart Example"
           github-src="charts/data-chart/type-scatter-contour-series">
</code-view>

<div class="divider--half"></div>

## Required Axes
The $Platform$ data chart component provides various types of axes but only `NumericYAxis` and `NumericYAxis` can be used with `ScatterContourSeries`.

## Required Data

The `ScatterContourSeries` has the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
- All data items must contain 3 numeric data columns which should be mapped to the `XMemberPath`, `YMemberPath`, and `ValueMemberPath` properties.

You can use the [SampleScatterData](data-chart-data-sources-scatter.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterData.create();
```

## Required Modules

The scatter contour series requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartScatterCoreModule.Register(IgniteUIBlazor);
DataChartScatterModule.Register(IgniteUIBlazor);
DataChartInteractivityModuleRegister(IgniteUIBlazor);
ScatterContourSeriesModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterContourSeries } from 'igniteui-angular-charts';
import { IgxValueBrushScale } from 'igniteui-angular-charts';
import { IgxLinearContourValueResolver } from 'igniteui-angular-charts';
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
import { IgrScatterContourSeries } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrLinearContourValueResolver } from 'igniteui-react-charts';
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
import { IgcScatterContourSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleModule } from 'igniteui-webcomponents-charts';
import { IgcLinearContourValueResolverModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterContourSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcLinearContourValueResolverComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterContourSeriesModule,
    IgcValueBrushScaleModule,
    IgcLinearContourValueResolverModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with  `ScatterContourSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ScatterContourSeries Name="series1"
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
    <igx-scatter-contour-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-contour-series>
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
    <IgrScatterContourSeries
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

const series1 = new IgrScatterContourSeries({ name: "series1" });
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
    <igc-scatter-contour-series
        id="series1"
        x-member-path="X"
        y-member-path="Y"
        color-member-path="Z">
    </igc-scatter-contour-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterContourSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## Contour Fill Scale

Use the `FillScale` property of the` ScatterContourSeries` to resolve fill brushes of the contour lines.

The provided `ValueBrushScale` class should satisfy most coloring needs, but you can inherit from this class and provide your own coloring logic. The following table lists properties of the `ValueBrushScale` affecting the surface coloring of the `ScatterContourSeries`:

- `Brushes` sets the collection of brushes for filling contours.
- `MaximumValue` sets the highest value to assign a brush. Any given value greater than this value will be Transparent.
- `MinimumValue` sets the lowest value to assign a brush. Any given value less than this value will be Transparent.

```ts
const scale = new IgrValueBrushScale({});
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.brushes = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];
const series1 = new IgrScatterContourSeries({ name: "series1" });
series1.fillMemberPath = "Z";
series1.fillScale = scale;
```

```ts
const scale = new IgcValueBrushScaleComponent();
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.brushes = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

let series1 = (document.getElementById("series1") as IgcScatterContourSeriesComponent);
series1.fillScale = scale;
```

## Contour Value Resolver

The `ScatterContourSeries` renders using exactly 10 contour lines at even intervals between the minimum and maximum values of the items mapped to the `ValueMemberPath` property. If you desire more or fewer contours, you can assign the `LinearContourValueResolver` with a number of contours to the `ValueResolver` property of the `ScatterContourSeries`.

The following code shows how to configure the number of contour lines in the `ScatterContourSeries`.

```ts
const contours = new IgrLinearContourValueResolver({});
contours.valueCount = 15;
const series1 = new ScatterContourSeries({ name: "series1" });
series1.valueResolver = contours;
```

```ts
const contours = new IgcLinearContourValueResolverComponent();
contours.valueCount = 15;

let series1 = (document.getElementById("series1") as IgcScatterContourSeriesComponent);
series1.valueResolver = contours;
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Chart Legend](data-chart-legends.md)
- [Series Types](data-chart-series-types.md)


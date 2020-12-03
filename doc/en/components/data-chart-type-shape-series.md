---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Scatter Shape Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create shape charts such as ScatterPolygonSeries and ScatterPolylineSeries. View the demo for more information!
_keywords: $PlatformShort$ charts, data chart, shape charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','ShapeColumnSeries','ScatterPolygonSeries','ScatterPolylineSeries']

---
# $PlatformShort$ Scatter Shape Series

This topic explains various types of shape series in the $PlatformShort$ data chart component. Scatter shape series is a group of chart series that take array of shapes (array or arrays of X/Y coordinates) and render them as collection of polygons (`ScatterPolygonSeries`)  or polylines (`ScatterPolylineSeries`) in Cartesian (x, y) coordinate system.

Scatter shape series are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## $PlatformShort$ Scatter Shape Series Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-shape-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-shape-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Scatter Shape Series Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-shape-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-shape-series"></sample-button>

</div>

<div class="divider--half"></div>

## Types of Shape Series
The following table lists all types of shape series and their descriptions:

| Series Name  | Description   |
|--------------|---------------|
| `ScatterPolygonSeries` | Displays a polygon for each of shape mapped to `ShapeMemberPath` property. It is useful for rendering shapes such as a country boarders. |
| `ScatterPolylineSeries` | Displays a polyline for each of shape mapped to `ShapeMemberPath` property. It is useful for rendering disconnected lines such as a network graph.  |


## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with scatter shape series.

| Series Type             | YAxis Type     | XAxis Type     |
|-------------------------|----------------|----------------|
| `ScatterPolygonSeries`  | `NumericYAxis` | `NumericXAxis` |
| `ScatterPolylineSeries` | `NumericYAxis` | `NumericXAxis` |

## Required Data

Scatter shape series have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
- All data items must contain at one shape data column (array or arrays of X/Y coordinates) which should be mapped to the `ShapeMemberPath` property of scatter shape series (e.g. `ScatterPolygonSeries`)

You can use the [SampleShapeData](data-chart-data-sources-shape.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleShapeData.create();
```

## Required Modules

The scatter polygon series requires the following modules.

```razor
DataChartCoreModule
DataChartScatterCoreModule
DataChartScatterModule
DataChartInteractivityModule
* ScatterPolygonSeriesModule
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterPolygonSeries } from 'igniteui-angular-charts';
import { IgxScatterPolylineSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
import { IgrScatterPolylineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisModule  } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
// scatter series' modules:
import { IgcScatterPolygonSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcScatterPolylineSeriesModule } from 'igniteui-webcomponents-charts';
// scatter series' elements:
import { IgcScatterPolygonSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcScatterPolylineSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartShapeCoreModule,
    IgcDataChartShapeModule,
    IgcScatterPolygonSeriesModule,
    IgcScatterPolylineSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with `ShapeColumnSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ScatterPolygonSeries Name="series1"
        Title="House Floor Plan"
        DataSource="@DataSource"
        Brush="Gray"
        Outline="Black"
        ShapeMemberPath="Points" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-polygon-series
        name="series1"
        shapeMemberPath="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igx-scatter-polygon-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />
    {/* series: */}
    <IgrScatterPolygonSeries
     name="series1"
     shapeMemberPath="Points"
     title="House Floor Plan"
     brush="Gray"
     outline="Black" />
 </IgrDataChart>
```

```ts
const series1 = new IgrScatterPolygonSeries({ name: "series1" });
series1.shapeMemberPath = "Points";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.brush = "Gray";
series1.outline = "Black";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

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
    <igc-scatter-polygon-series
        id="series1"
        shape-member-path="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igc-scatter-polygon-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterPolygonSeriesComponent);
series1.dataSource = data;
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

Note that you can also use above code to create `ScatterPolygonSeries` by replacing `ScatterPolylineSeries`.

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


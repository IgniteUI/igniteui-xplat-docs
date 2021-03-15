---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Scatter Polygon Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create scatter polygon charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, scatter polygon charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','ShapeColumnSeries','ScatterPolygonSeries']

---
# $PlatformShort$ Scatter Polygon Chart

The $ProductName$ scatter polyline chart belongs to a group of shape charts that take an array of shapes (array or arrays of X/Y coordinates). This series renders that array of shapes as a collection of polygons in the Cartesian (x, y) system.

Scatter shape series are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## $PlatformShort$ Scatter Polygon Chart Example


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polygon-series" 
           alt="$PlatformShort$ Scatter Polygon Chart Example" 
           github-src="charts/data-chart/type-scatter-polygon-series">
</code-view>

<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `ScatterPolygonSeries`.

- `NumericXAxis`
- `NumericYAxis`

## Required Data

The `ScatterPolygonSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
- All data items must contain at one shape data column (array or arrays of X/Y coordinates) which should be mapped to the `ShapeMemberPath` property of scatter shape series.

You can use the [SampleShapeData](data-chart-data-sources-shape.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleShapeData.create();
```

## Required Modules

Creation of the `ScatterPolygonSeries` requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartScatterCoreModule.Register(IgniteUIBlazor);
DataChartScatterModule.Register(IgniteUIBlazor);
DataChartInteractivityModuleRegister(IgniteUIBlazor);
ScatterPolygonSeriesModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterPolygonSeries } from 'igniteui-angular-charts';
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
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcScatterPolygonSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterPolygonSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartShapeCoreModule,
    IgcDataChartShapeModule,
    IgcScatterPolygonSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance the $ProductName$ data chart with `ScatterPolygonSeries` and bind it to a data source.

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
 <igc-data-chart
    width="700px"
    height="500px">
    <igc-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igc-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igc-scatter-polygon-series
        name="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        shape-member-path="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igc-scatter-polygon-series>
 </igc-data-chart>
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


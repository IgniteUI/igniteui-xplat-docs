---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Polar Charts | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create polar charts such as polar scatter, polar line, polar area and many more. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, polar charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'PolarLineSeries']
---
# $PlatformShort$ Polar Series

This topic explains various types of polar series in the $PlatformShort$ data chart component. Polar series is a group of series that use the polar (angle, radius) coordinate system instead of the Cartesian (x, y) coordinate system to plot data in chart. In other words, polar series take concepts of [Scatter Series](data-chart-type-scatter-point-series.md) and wrap them around a circle rather than stretching along a horizontal line. This group of series is used to show the relationship among the items in several distinct series of data using the polar coordinates system.

Polar series draw attention to uneven intervals or clusters of data. They are often used to plot scientific data (e.g. wind's direction and speed, strength and direction of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

<!-- Angular, React, WebComponents -->
## $PlatformShort$ Polar Series Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-series" 
           alt="$PlatformShort$ Polar Series Example" 
           github-src="charts/data-chart/type-polar-series">
</code-view>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## Types of Polar Series
The Data Chart supports the following types of polar series:

| Series Name  | Description   |
|--------------|---------------|
| `PolarAreaSeries` | Displays a filled polygon enclosed by a collection of straight lines connecting data points which are located at the polar (angle/radius) coordinates  |
| `PolarSplineAreaSeries` | Displays a filled polygon enclosed by a collection of smooth/interpolated lines connecting data points which are located at the polar (angle/radius) coordinates  |
| `PolarSplineSeries` | Displays a collection of smooth/interpolated lines connecting data points which are located at the polar (angle/radius) coordinates  |
| `PolarScatterSeries` | Displays a collection of markers representing data points which are located at the polar (angle/radius) coordinates  |
| `PolarLineSeries` | Displays a collection of straight lines connecting data points which are located at the polar (angle/radius) coordinates  |


## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with polar series.

| Series Type             | Radius Axis Type    | Angle Axis Type    |
|-------------------------|---------------------|--------------------|
| `PolarAreaSeries`       | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarSplineAreaSeries` | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarSplineSeries`     | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarScatterSeries`    | `NumericRadiusAxis` | `NumericAngleAxis` |
| `PolarLineSeries`       | `NumericRadiusAxis` | `NumericAngleAxis` |

## Required Data

Polar series have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the polar series.
- All data items must contain at least two numeric data columns which should be mapped using the `AngleMemberPath` and `RadiusMemberPath` properties of polar series (e.g. `PolarAreaSeries`)

In polar coordinate systems, the location of data points is determined by an angle (angular coordinate) from a fixed direction and distance (radial coordinate) from a fixed point (analogous to the origin of a Cartesian coordinate) which is called "the pole". The lines that start from the pole and point outwards are gridlines of the angular axis (`NumericAngleAxis`) and the concentric rings that surround the pole are gridlines of the radius axis (`NumericRadiusAxis`)

You can use the [SamplePolarData](data-chart-data-sources-polar.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SamplePolarData.create();
```
## Required Modules

The polar series requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartPolarModule.Register(IgniteUIBlazor);
DataChartPolarCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxPolarAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarLineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarScatterSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartPolarCoreModule,
        IgxDataChartPolarModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrNumericAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrPolarAreaSeries } from 'igniteui-react-charts';
import { IgrPolarLineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineAreaSeries } from 'igniteui-react-charts';
import { IgrPolarScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartPolarCoreModule.register();
IgrDataChartPolarModule.register();
```

```ts
// Module Manager:
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericAngleAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericAngleAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcPolarAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarScatterSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcPolarAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarScatterSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartPolarCoreModule,
    IgcDataChartPolarModule,
    IgcPolarAreaSeriesModule,
    IgcPolarLineSeriesModule,
    IgcPolarSplineSeriesModule,
    IgcPolarSplineAreaSeriesModule,
    IgcPolarScatterSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with `PolarLineSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="750px">
        <NumericAngleAxis Name="angleAxis" StartAngleOffset="-90" />
        <NumericRadiusAxis Name="radiusAxis" />
        <PolarLineSeries Name="series1"
            DataSource="@DataSource"
            AngleAxisName="angleAxis"
            AngleMemberPath="Direction"
            RadiusAxisName="radiusAxis"
            RadiusMemberPath="WindSpeed" />
</DataChart>
```

```html
<igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-line-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-line-series>
</igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrNumericAngleAxis  name="angleAxis" startAngleOffset={-90} />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrPolarLineSeries
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrPolarLineSeries({ name: "series1" });
series1.angleMemberPath = "Direction";
series1.radiusMemberPath  = "WindSpeed";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrNumericAngleAxis({ name: "angleAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(radiusAxis);
this.chart.axes.add(angleAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-angle-axis  id="angleAxis" start-angle-offset="-90"></igc-numeric-angle-axis>
    <igc-numeric-radius-axis id="radiusAxis"></igc-numeric-radius-axis>
    <igc-polar-line-series
        id="series1"
        angle-member-path="Direction"
        radius-member-path="WindSpeed">
    </igc-polar-line-series>
</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let angleAxis = (document.getElementById("angleAxis") as IgcNumericAngleAxisComponent);
let radiusAxis = (document.getElementById("radiusAxis") as IgcNumericRadiusAxisComponent);

let series1 = (document.getElementById("series1") as IgcPolarLineSeriesComponent);
series1.angleAxis = angleAxis;
series1.radiusAxis = radiusAxis;
```

Note that you can also use above code to create other type of polar series by replacing `PolarLineSeries` with name of polar series that you want to render.

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


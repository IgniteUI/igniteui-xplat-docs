---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Polar Area Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create polar area charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, polar area charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'PolarAreaSeries']
---
# $PlatformShort$ Polar Area Chart

The $ProductName$ polar area chart belongs to a group of polar charts and has a shape of a filled polygon which vertices or corners are located at the polar (angle/radius) coordinates of data points. The `PolarAreaSeries` uses the same concepts of data plotting as the `ScatterSeries` but wraps data points around a circle rather than stretching them along a horizontal line. Like with other series types, multiple `PolarAreaSeries` can be plotted in the same data chart and they can be overlaid on each other to show differences and similarities between data sets.
## $PlatformShort$ Polar Area Chart Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-area-series" 
           alt="$PlatformShort$ Polar Area Chart Example" 
           github-src="charts/data-chart/type-polar-area-series">
</code-view>

<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `PolarAreaSeries`.

- `NumericRadiusAxis`
- `NumericAngleAxis`

## Required Data

The `PolarAreaSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the `PolarAreaSeries`.
- All data items must contain at least two numeric data columns which should be mapped using the `AngleMemberPath` and `RadiusMemberPath` properties of the `PolarAreaSeries`.

In polar coordinate systems, the location of data points is determined by an angle (angular coordinate) from a fixed direction and distance (radial coordinate) from a fixed point (analogous to the origin of a Cartesian coordinate) which is called "the pole". The lines that start from the pole and point outwards are gridlines of the angular axis (`NumericAngleAxis`) and the concentric rings that surround the pole are gridlines of the radius axis (`NumericRadiusAxis`)

You can use the [SamplePolarData](data-chart-data-sources-polar.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SamplePolarData.create();
```
## Required Modules

Creation of the `PolarAreaSeries` requires the following modules:

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
// series' components
import { IgcPolarAreaSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartPolarCoreModule,
    IgcDataChartPolarModule,
    IgcPolarAreaSeriesModule,
);
```

## Code Example
This code demonstrates how to create an instance of the $ProductName$ data chart with `PolarAreaSeries` and bind it to a data source.

```razor
<DataChart Height="500px" Width="750px">
        <NumericAngleAxis Name="angleAxis" StartAngleOffset="-90" />
        <NumericRadiusAxis Name="radiusAxis" />
        <PolarAreaSeries Name="series1"
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
    <igx-polar-area-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-area-series>
</igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrNumericAngleAxis  name="angleAxis" startAngleOffset={-90} />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrPolarAreaSeries
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrPolarAreaSeries({ name: "series1" });
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
    <igc-polar-area-series
        id="series1"
        angle-axis="angleAxis"
        radius-axis="radiusAxis"
        angle-member-path="Direction"
        radius-member-path="WindSpeed">
    </igc-polar-area-series>
</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


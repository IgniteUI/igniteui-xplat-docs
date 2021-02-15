---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Polar Spline Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create polar spline charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, polar spline charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'PolarSplineSeries']
---
# $PlatformShort$ Polar Spline Chart

The $ProductName$ polar spline chart belongs to a group of polar charts and is rendered using a collection of spline lines connecting data points in polar (angle/radius) coordinate system. The `PolarSplineSeries` uses the same concepts of data plotting as the `ScatterSplineSeries` but wraps data points around a circle rather than stretching them along a horizontal line. Like with other series types, multiple `PolarSplineSeries` can be plotted in the same data chart and they can be overlaid on each other to show differences and similarities between data sets.

## $PlatformShort$ Polar Spline Chart Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-spline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Polar Spline Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-polar-spline-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-polar-spline-series"></sample-button>

</div>

<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `PolarSplineSeries`.

- `NumericRadiusAxis`
- `NumericAngleAxis`

## Required Data

The `PolarSplineSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the `PolarSplineSeries`.
- All data items must contain at least two numeric data columns which should be mapped using the `AngleMemberPath` and `RadiusMemberPath` properties of the `PolarSplineSeries`.

In polar coordinate systems, the location of data points is determined by an angle (angular coordinate) from a fixed direction and distance (radial coordinate) from a fixed point (analogous to the origin of a Cartesian coordinate) which is called "the pole". The lines that start from the pole and point outwards are gridlines of the angular axis (`NumericAngleAxis`) and the concentric rings that surround the pole are gridlines of the radius axis (`NumericRadiusAxis`)

You can use the [SamplePolarData](data-chart-data-sources-polar.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SamplePolarData.create();
```

## Required Modules

Creation of the `PolarSplineSeries` requires the following modules:

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
import { IgxPolarSplineSeries } from 'igniteui-angular-charts';
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
import { IgrPolarSplineSeries } from 'igniteui-react-charts';
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
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartPolarCoreModule,
    IgcDataChartPolarModule,
    IgcDataChartInteractivityModule
);
```

## Code Example
This code demonstrates how to create an instance of the $ProductName$ data chart with `PolarSplineSeries` and bind it to a data source.

```html
<igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-spline-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-spline-series>
</igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.dataSource}
    width="700px"
    height="500px">
    <IgrNumericAngleAxis  name="angleAxis" startAngleOffset={-90} />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrPolarSplineSeries
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrPolarSplineSeries({ name: "series1" });
series1.angleMemberPath = "Direction";
series1.radiusMemberPath  = "WindSpeed";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrNumericAngleAxis({ name: "angleAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SamplePolarData.create();
this.chart.axes.add(radiusAxis);
this.chart.axes.add(angleAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="100%"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
    <igc-numeric-angle-axis name="angleAxis"
        start-angle-offset="-90" interval="30"
        minimum-value="0"
        maximum-value="360">
    </igc-numeric-angle-axis>
    <igc-numeric-radius-axis name="radiusAxis"
        inner-radius-extent-scale="0.1"
        radius-extent-scale="0.9"
        minimum-value="0"
        maximum-value="100"
        interval="25">
    </igc-numeric-radius-axis>
    <igc-polar-spline-series
        name="series1"
        angle-member-path="Direction"
        radius-member-path="WindSpeed"
        radius-axis-name="radiusAxis"
        angle-axis-name="angleAxis"
        title="Wind Speed">
    </igc-polar-spline-series>
</igc-data-chart>
```

```ts
let chart = document.getElementById("chart") as IgcDataChartComponent;
chart.dataSource = SamplePolarData.create();
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


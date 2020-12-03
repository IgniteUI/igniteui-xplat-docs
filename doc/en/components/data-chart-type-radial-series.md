---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Radial Charts | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create radial charts such as radial area, radial line, radial pie and many more. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, radial charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','RadialPieSeries']
---
# $PlatformShort$ Radial Series

This topic explains various types of radial series in the $PlatformShort$ data chart component. Radial series a group of series that render data as collection of data points wrapped around a circle, rather than stretching along a horizontal line as [Category Series](data-chart-type-category-series.md) do. Radial series are also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the same category grouping mechanisms of [Category Series](data-chart-type-category-series.md).

<!-- Angular, React, WebComponents -->
## $PlatformShort$ Radial Series Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Radial Series Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-radial-series"></sample-button>

</div>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## Types of Radial Series
The following table lists all types of radial series and their descriptions:

| Series Name  | Description   |
|--------------|---------------|
| `RadialAreaSeries` | Displays a filled polygon enclosed by a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates  |
| `RadialSplineAreaSeries` | Displays a filled polygon enclosed by a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates  |
| `RadialSplineSeries` | Displays a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates  |
| `RadialScatterSeries` | Displays a collection of markers representing data points which are located at the radial (angle/radius) coordinates  |
| `RadialLineSeries` | Displays a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates  |


## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with radial series.

| Series Type             | Radius Axis Type    | Angle Axis Type    |
|-------------------------|---------------------|--------------------|
| `RadialAreaSeries`      | `NumericRadiusAxis` | `CategoryAngleAxis` |
| `RadialPieSeries`       | `NumericRadiusAxis` | `CategoryAngleAxis` |
| `RadialColumnSeries`    | `NumericRadiusAxis` | `CategoryAngleAxis` |
| `RadialLineSeries`      | `NumericRadiusAxis` | `CategoryAngleAxis` |

## Required Data

Radial series have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the radial series.
- All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryAngleAxis`)
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of radial series (e.g. `RadialAreaSeries`)


You can use the [SampleRadialData](data-chart-data-sources-radial.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleRadialData.create();
```


## Required Modules

The radial series requires the following modules.

```razor
DataChartCoreModule
DataChartRadialSeriesModule
DataChartRadialSeriesCoreModule
DataChartInteractivityModule
```

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxRadialAreaSeries } from 'igniteui-angular-charts';
import { IgxRadialLineSeries } from 'igniteui-angular-charts';
import { IgxRadialPieSeries } from 'igniteui-angular-charts';
import { IgxRadialColumnSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartRadialCoreModule,
        IgxDataChartRadialModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrCategoryAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrRadialAreaSeries } from 'igniteui-react-charts';
import { IgrRadialLineSeries } from 'igniteui-react-charts';
import { IgrRadialPieSeries } from 'igniteui-react-charts';
import { IgrRadialColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartRadialCoreModule } from 'igniteui-react-charts';
import { IgrDataChartRadialModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartRadialCoreModule.register();
IgrDataChartRadialModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcCategoryAngleAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcCategoryAngleAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcRadialAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRadialLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRadialPieSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRadialColumnSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcRadialAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRadialLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRadialPieSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRadialColumnSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartRadialCoreModule,
    IgcDataChartRadialModule,
    IgcRadialAreaSeriesModule,
    IgcRadialLineSeriesModule,
    IgcRadialPieSeriesModule,
    IgcRadialColumnSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with `RadialAreaSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="750px">
        <CategoryAngleAxis Name="angleAxis" Label="Department" />
        <NumericRadiusAxis Name="radiusAxis" />
        <RadialPieSeries Name="series1"
            DataSource="@DataSource"
            AngleAxisName="angleAxis"
            ValueMemberPath="Budget"
            ValueAxisName="radiusAxis"
            />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-angle-axis name="angleAxis" label="Department"></igx-category-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-radial-pie-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-pie-series>
 </igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrCategoryAngleAxis name="angleAxis" label="Department" />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrRadialPieSeries
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrRadialPieSeries({ name: "series1" });
series1.valueMemberPath  = "Budget";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrCategoryAngleAxis({ name: "angleAxis" });
angleAxis.label = "Department";

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
    <igc-category-angle-axis id="angleAxis" label="Department"></igc-category-angle-axis>
    <igc-numeric-radius-axis id="radiusAxis"></igc-numeric-radius-axis>
    <igc-radial-pie-series
        id="series1"
        value-member-path="Budget">
    </igc-radial-pie-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let angleAxis = (document.getElementById("angleAxis") as IgcCategoryAngleAxisComponent);
let radiusAxis = (document.getElementById("radiusAxis") as IgcNumericRadiusAxisComponent);

let series1 = (document.getElementById("series1") as IgcRadialPieSeriesComponent);
series1.angleAxis = angleAxis;
series1.valueAxis = radiusAxis;
```

Note that you can also use above code to create other type of radial series by replacing `RadialAreaSeries` with name of radial series that you want to render.

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


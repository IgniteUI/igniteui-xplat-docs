---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Scatter Spline Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create scatter spline charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, scatter spline charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'ScatterSplineSeries']
---
# $PlatformShort$ Scatter Spline Chart

The $ProductName$ scatter point chart belongs to a group of scatter charts that use the Cartesian (x, y) coordinate system to plot data. This series is rendered as a collection of markers connected with a spline, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system.

The `ScatterSplineSeries` draws attention to uneven intervals or clusters of data. They can highlight the deviation of collected data from predicted results and they are often used to plot scientific and statistical data. The `ScatterSplineSeries` organizes and plots data chronologically (even if the data is not in chronological order before binding) on X-Axis and Y-Axis.

## $PlatformShort$ Scatter Spline Chart Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-spline-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-spline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Scatter Spline Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-spline-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-scatter-spline-series"></sample-button>

</div>

<div class="divider--half"></div>

## Required Axes

The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `ScatterSplineSeries`.

- `NumericXAxis`
- `NumericYAxis`

## Required Data

The `ScatterSplineSeries` has the following data requirements:

- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
- All data items must contain 2 numeric data columns which should be mapped to the `XMemberPath` and `YMemberPath` properties

You can use the [SampleScatterStats](data-chart-data-sources-stats.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## Required Modules

Creation of the `ScatterSplineSeries` requires the following modules.

```razor
DataChartCoreModule
DataChartScatterCoreModule
DataChartScatterModule
DataChartInteractivityModule
* ScatterSplineSeriesModule
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterSplineSeries } from 'igniteui-angular-charts';
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
import { IgrScatterSplineSeries } from 'igniteui-react-charts';
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
import { IgcScatterSplineSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterSplineSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterAreaSeriesModule,
    IgcScatterSplineSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of the $ProductName$ data chart with `ScatterSplineSeries` and bind it to a data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>
    <igx-scatter-spline-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal">
    </igx-scatter-spline-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" isLogarithmic="true"/>
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    {/* series: */}
    <IgrScatterSplineSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="Population"
     yMemberPath="GdpTotal" />
 </IgrDataChart>
```

```ts
const series1 = new IgrScatterSplineSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "Population";
series1.yMemberPath = "GdpTotal";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleShapeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart" width="100%" height="100%">

    <igc-numeric-x-axis name="xAxis"
        is-logarithmic="true">
    </igc-numeric-x-axis>
    <igc-numeric-y-axis name="yAxis"
        is-logarithmic="true">
    </igc-numeric-y-axis>

    <igc-scatter-spline-series id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        x-member-path="Population"
        y-member-path="GdpTotal">
    </igc-scatter-spline-series>

</igc-data-chart>
```

```ts
this.chart = document.getElementById("chart") as IgcDataChartComponent;
this.chart.dataSource = data;
```

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ScatterSplineSeries Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        DataSource="@DataSource"
        XMemberPath="Population"
        YMemberPath="GdpTotal" />
</DataChart>
```

## Series Appearance

You can customize appearance of marker using the [Markers](data-chart-series-markers.md) properties as well as changing `Brush` and `Thickness` of line visuals between markers. This code snippet below demonstrate how to use these properties.

```html
<igx-scatter-spline-series
 name="series1"
 brush="Purple"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2">
</igx-scatter-spline-series>
```

```tsx
<IgrScatterSplineSeries
 name="series1"
 brush="Purple"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness={2} />
```

```ts
const series1 = new IgxScatterSplineSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Purple";
series1.thickness = 2;
```

```ts
const series1 = new IgrScatterSplineSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Purple";
series1.thickness = 2;
```

```html
<igc-scatter-spline-series
 name="series1"
 brush="Purple"
 marker-type="Square"
 marker-brush="White"
 marker-outline="Blue"
 thickness="2">
</igc-scatter-spline-series>
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Tooltips](data-chart-series-tooltips.md)
- [Series Trendlines](data-chart-series-trendlines.md)
- [Series Types](data-chart-series-types.md)

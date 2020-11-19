---
title: $PlatformShort$ Data Chart | Data Visualization | Infragistics
_description: Effortlessly create an $PlatformShort$ data chart that displays multiple instances of visual elements to create composite chart views. Get started today!
_keywords: data chart, $PlatformShort$ component, $PlatformShort$ chart, $ProductName$, charting component
mentionedTypes: ['XamDataChart', 'SeriesType']
---
# $PlatformShort$ Data Chart

The $PlatformShort$ data chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this data chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/chart-overview"></sample-button>

</div>

<div class="divider--half"></div>


<!-- Angular, React, WebComponents -->
## Dependencies
When installing the $PlatformShort$ data chart package, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## Required Modules

The $PlatformShort$ data chart component requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* DataChartCoreModule
* DataChartScatterCoreModule,
* DataChartScatterModule,
* NumberAbbreviatorModule
<!-- end: Blazor -->

```ts
import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxNumberAbbreviatorModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';
import { IgxBubbleSeriesComponent } from 'igniteui-angular-charts';
import { IgxNumericXAxisComponent } from 'igniteui-angular-charts';
import { IgxNumericYAxisComponent } from 'igniteui-angular-charts';
import { IgxSizeScaleComponent } from 'igniteui-angular-charts';
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
        IgxNumberAbbreviatorModule
    ]
})
export class AppModule { /* ... */ }
```

```ts
// data chart's modules required for all series:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
' modules:
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
// scatter series elements:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrNumberAbbreviatorModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';

import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcNumberAbbreviatorModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcBubbleSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleComponent } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcDataChartInteractivityModule,
    IgcNumberAbbreviatorModule
);
```

<div class="divider--half"></div>


## Supported Series

The $PlatformShort$ charting component supports over 65 types of series including [Category Series](data-chart-type-category-series.md), [Financial Series](data-chart-type-financial-series.md), [Polar Series](data-chart-type-polar-series.md), [Radial Series](data-chart-type-radial-series.md), [Range Series](data-chart-type-range-series.md), [Scatter Series](data-chart-type-scatter-bubble-series.md), and [Shape Series](data-chart-type-shape-series.md). Refer to the [Series](data-chart-series-types.md) topic, for a full list of supported types of series and how to use them.

## Supported Axes
The $PlatformShort$ data chart component supports various types of axis that are intended to use with specific type of series. The following table lists which axes can be used with type of series.   Refer to the [Series](data-chart-series-types.md) and [Axis](data-chart-axis-types.md) topics, for more information on how to use these types of axis.

Axis Type           | Supported Series Types
--------------------|-----------------------
CategoryYAxis       | only `Bar` in [Category Series](data-chart-type-category-series.md) group
CategoryXAxis       | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except `Bar`)
TimeXAxis           |  all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except `Bar`)
OrdinalTimeXAxis    | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except `Bar`)
PercentChangeYAxis  | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), [Category Series](data-chart-type-category-series.md), [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md)
NumericYAxis        | all [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md), [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), [Category Series](data-chart-type-category-series.md)
NumericXAxis        | all [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md), and `Bar` in [Category Series](data-chart-type-category-series.md) group
NumericAngleAxis   | all [Polar Series](data-chart-type-polar-series.md)
NumericRadiusAxis  | all [Polar Series](data-chart-type-polar-series.md) and [Radial Series](data-chart-type-radial-series.md)
CategoryAngleAxis  | all  [Radial Series](data-chart-type-radial-series.md)


## Usage
Now that the $PlatformShort$ data chart modules are imported, next step is to bind chart to data. All series require specific number and type of data columns to render correctly and you can find a data source for each type of series in the [Data Sources](data-chart-data-sources.md) topic.

The following code snippet demonstrates how to create scatter `Bubble` and bind it to [SampleScatterStats](data-chart-data-sources-stats.md) data.

> [!NOTE]
>
> Setting a data source on the chart component will apply to all series but you can also set different data sources on each series added in the data chart.

```razor
<div class="igComponent">

    @if (DataSource != null)
    {
        <DataChart Height="500px" Width="700px" DataSource="@DataSource">
            <NumericXAxis Name="xAxis" IsLogarithmic="true"/>
            <NumericYAxis Name="yAxis" IsLogarithmic="true"/>
            <BubbleSeries Name="series1"
                XAxisName="xAxis"
                YAxisName="yAxis"
                XMemberPath="Population"
                YMemberPath="GdpTotal"
                RadiusMemberPath="GdpPerCapita"
                DataSource="@DataSource"/>
        </DataChart>
    }

</div>
```

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" ></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" ></igx-numeric-y-axis>
    <igx-bubble-series
        name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        xMemberPath="population"
        yMemberPath="gdpTotal"
        radiusMemberPath="gdpPerCapita"
        [dataSource]="data"  ></igx-bubble-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart dataSource={this.data}
               width="700px"
               height="500px">
    <IgrNumericXAxis name="xAxis" isLogarithmic="true" />
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    <IgrBubbleSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="population"
        yMemberPath="gdpTotal"
        radiusMemberPath="gdpPerCapita"
        dataSource={this.data}  />
 </IgrDataChart>
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis id="xAxis"
        is-logarithmic="true"
        abbreviate-large-numbers="true"
        minimum-value="10000"
        maximum-value="1000000000">
    </igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis"
        is-logarithmic="true"
        abbreviate-large-numbers="true">
    </igc-numeric-y-axis>
    <igc-bubble-series id="series1"
        x-member-path="population"
        y-member-path="gdpTotal"
        radius-member-path="gdpPerCapita">
    </igc-bubble-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data1;

let sizeScale = new IgcSizeScaleComponent();
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.dataSource = data1;
series1.xAxis = xAxis;
series1.yAxis = yAxis;
series1.radiusScale = sizeScale;
```

<div class="divider--half"></div>


### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Axis Settings](data-chart-axis-settings.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


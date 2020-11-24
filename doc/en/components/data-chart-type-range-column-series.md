---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Range Column Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create range column charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, range column charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Range Column Chart

The $ProductName$ range column chart belongs to a group of range charts and is rendered using two lines with the area between the lines filled in. This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the y-axis and categories are displayed on the x-axis. The `RangeColumnSeries` is identical to the `RangeAreaSeries` in all aspects except that the ranges are represented as filled area rather than a set of vertical columns.

## $PlatformShort$ Range Column Chart Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-range-column-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-range-column-series"></sample-button>

</div>

<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `RangeColumnSeries`:

- `CategoryXAxis`
- `OrdinalTimeXAxis`
- `TimeXAxis`
- `NumericYAxis`

## Required Data

The `RangeColumnSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the `RangeColumnSeries`.
- All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryXAxis`).
- All data items must contain at least two numeric data column which should be mapped using the `HighMemberPath` and `LowMemberPath` properties of the `RangeColumnSeries`.

You can use the [SampleRangeData](data-chart-data-sources-range.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleRangeData.create();
```

## Required Modules

Creation of the `RangeColumnSeries` requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* DataChartCoreModule
* RadialPieSeriesModule
* RadialPieSeriesCoreModule
* DataChartInteractivityModule
<!-- end: Blazor -->

```ts
// in app.module.ts file
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxRangeColumnSeries } from 'igniteui-angular-charts';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

```ts
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrRangeColumnSeries } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcRangeColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartInteractivityModule,
    IgcRangeColumnSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of the $ProductName$ data chart with `RangeColumnSeries` and bind it to a data source.

```razor
<DataChart Height="500px" Width="750px">
        <CategoryXAxis Name="xAxis" Label="Year" DataSource="@DataSource"/>
        <NumericYAxis  Name="yAxis" />
        <RangeColumnSeries Name="series1"
            XAxisName="xAxis"           YAxisName="yAxis"
            DataSource="@DataSource"
            LowMemberPath="Low"
            HighMemberPath="High" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-column-series>
 </igx-data-chart>
```


```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrCategoryXAxis name="xAxis" label="Year" />
    <IgrNumericYAxis  name="yAxis" />
    {/* series: */}
    <IgrRangeColumnSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low" />
 </IgrDataChart>
```

```ts
const series1 = new IgrRangeColumnSeries({ name: "series1" });
series1.highMemberPath = "High";
series1.lowMemberPath  = "Low";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const xAxis = new IgrNumericXAxis({  name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleRangeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-category-x-axis id="xAxis" label="Year"></igc-category-x-axis>
    <igc-numeric-y-axis  id="yAxis"></igc-numeric-y-axis>
    <igc-range-column-series
        id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        high-member-path="High"
        low-member-path="Low">
    </igc-range-column-series>
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
- [Series Annotations](data-chart-series-annotations.md)
- [Series Highlighting](data-chart-series-highlighting.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Tooltips](data-chart-series-tooltips.md)
- [Series Trendlines](data-chart-series-trendlines.md)
- [Series Types](data-chart-series-types.md)

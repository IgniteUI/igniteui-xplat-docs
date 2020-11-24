---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Line Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create line charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, line chart, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Line Chart

The $ProductName$ line chart belongs to a group of category charts and it is rendered using a collection of points connected by straight line segments. Values are represented on the y-axis and categories are displayed on the x-axis. `LineSeries` emphasizes the amount of change over a period of time or compares multiple items as well as the relationship of parts to a whole by displaying the total of the plotted values. The $PlatformShort$ line chart is identical to the $PlatformShort$ spline chart in all aspects except that line connecting data points do not have spline interpolation and smoothing for improved presentation of data.

## $PlatformShort$ Line Chart Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-category-line-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Line Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-category-line-series"></sample-button>

</div>

<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `LineSeries`.

- `CategoryXAxis`
- `OrdinalTimeXAxis`
- `TimeXAxis`
- `NumericYAxis`

## Required Data

The `LineSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the `LineSeries`.
- All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryXAxis`)
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the `LineSeries`.

You can use the [SampleCategoryData](data-chart-data-sources-category.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleCategoryData.create();
```

## Required Modules

Creation of the `LineSeries` requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* DataChartCoreModule;
* DataChartCategoryModule;
* DataChartCategoryCoreModule;
* DataChartInteractivityModule;
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxLineSeries } from 'igniteui-angular-charts';
// data chart's modules:

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
// axis' modules:
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrLineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcLineSeriesModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

// registering data chart's modules:
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartInteractivityModule,
    IgcLineSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of the $ProductName$ data chart with `LineSeries` and bind it to a data source.

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <LineSeries
        Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        ValueMemberPath="USA" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-line-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-line-series>
 </igx-data-chart>
```


```tsx
 <IgrDataChart
    dataSource={this.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrCategoryXAxis name="xAxis" label="Year" />
    <IgrNumericYAxis  name="yAxis" />
    {/* series */}
    <IgrLineSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```ts
const series1 = new IgrLineSeries({ name: "series1" });
series1.valueMemberPath = "USA";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart" width="100%" height="100%"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
    <igc-category-x-axis name="xAxis" label="Year"></igc-category-x-axis>
    <igc-numeric-y-axis name="yAxis" ></igc-numeric-y-axis>
    <igc-line-series
        name="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="USA">
    </igc-line-series>
    <igc-line-series
        name="series2"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="RUS">
    </igc-line-series>
</igc-data-chart>
```

```ts
let chart = document.getElementById("chart") as IgcDataChartComponent;
chart.dataSource = SampleCategoryData.create();
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

---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Range Charts | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create range charts such as range area, range column and many more. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, range charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Range Series

This topic explains various types of range series in the $PlatformShort$ data chart component. The range series is a group of chart series that takes two numeric data columns and render them as collection of data points stretched in horizontal orientation (e.g. `RangeAreaSeries`)

## $PlatformShort$ Range Series Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-range-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Range Series Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-range-series"></sample-button>

</div>

<div class="divider--half"></div>

## Types of Range Series
The following table lists all types of range series and their descriptions:

| Series Name  | Description   |
|--------------|---------------|
| `RangeAreaSeries` | Displays filled region/area between pairs of High/Low values of data points. Categories are arranged horizontally and values – vertically. |
| `RangeColumnSeries` | Displays discrete data in separate columns between High/Low values of data points. Categories are arranged horizontally and values are plotted vertically.   |


## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with range series.

| Series Type         | YAxis Type     | XAxis Type      |
|---------------------|----------------|-----------------|
| `RangeAreaSeries`   | `NumericYAxis` | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `RangeColumnSeries` | `NumericYAxis` | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## Required Data

Range series have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the range series.
- All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryXAxis`)
- All data items must contain at least two numeric data column which should be mapped using the `HighMemberPath` and `LowMemberPath` properties of range series (e.g. `RangeAreaSeries`)

You can use the [SampleRangeData](data-chart-data-sources-range.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleRangeData.create();
```

## Required Modules

The range series requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* DataChartCoreModule
* RadialPieSeriesModule
* RadialPieSeriesCoreModule
* DataChartInteractivityModule
<!-- end: Blazor -->
```

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxRangeAreaSeries } from 'igniteui-angular-charts';
import { IgxRangeColumnSeries } from 'igniteui-angular-charts';
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
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrRangeAreaSeries } from 'igniteui-react-charts';
import { IgrRangeColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcRangeAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRangeColumnSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcRangeAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRangeColumnSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcRangeAreaSeriesModule,
    IgcRangeColumnSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with `RangeColumnSeries` and bind it to the data source.

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
        high-member-path="High"
        low-member-path="Low">
    </igc-range-column-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcRangeColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

Note that you can also use above code to create `RangeAreaSeries` by replacing `RangeColumnSeries`.

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

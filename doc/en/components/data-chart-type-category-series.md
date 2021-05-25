---
title: $Platform$ Data Chart | Data Visualization Tools | Category Series | Data Binding | Infragistics
_description: Use Infragistics' $Platform$ charts control to create category charts such as area, bar, column, line and more. Learn about our $ProductName$ graph types!
_keywords: $Platform$ charts, data chart, category series, area, chart, bar chart, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $Platform$ Category Series


This topic explains various types of category series in the $Platform$ data chart component. Category series is a group of the simplest and most common form of chart series that take data and render it as collection of data points stretched along a horizontal line (e.g. `ColumnSeries`) or vertical line (e.g. `BarSeries`).

<!-- Angular, React, WebComponents -->
## $Platform$ Category Series Example


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-category-series"
           alt="$Platform$ Category Series Example"
           github-src="charts/data-chart/type-category-series">
</code-view>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## Types of Category Series
The following table lists all types of category series and their descriptions:

| Series Name  | Description   |
|--------------|---|
| `AreaSeries` | Displays a set of evenly placed points connected by a line below which area is filled in. Categories are arranged horizontally and values – vertically. |
| `BarSeries` | Displays discrete data in separate rows. Unlike other series, categories are arranged vertically and values are plotted horizontally. In other words, this series is like `ColumnSeries` but rotated 90 degrees clockwise. |
| `ColumnSeries` | Displays discrete data in separate columns. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a data series over time or for comparing multiple items.  |
| `LineSeries` | Displays a set of evenly placed points connected by straight lines. Used for showing data or information that changes continuously over time. Useful when emphasizing the relationship between the points is required. |
| `PointSeries` | Displays markers at locations of data points without connecting them by lines. Shape of these markers can be changed using `markerType` property |
| `SplineSeries` | Displays a set of evenly placed points connected by smooth lines that are generated using spline interpolation for improved presentation of data.   |
| `SplineAreaSeries`  | Same as the `AreaSeries` type with the added feature of spline interpolation and smoothing for improved presentation of data.   |
| `StepLineSeries` | Same as the `LineSeries` type, except that the values are connected by continuous vertical and horizontal lines forming a step-like progression instead of a straight line tracing the shortest path between points.   |
| `StepAreaSeries` | Same as the `StepLineSeries` type, except that the area below values is filled out instead of continuous vertical and horizontal lines forming a step-like progression for the changes between data points. |
| `WaterfallSeries` | Displays a set of points as vertical columns that show the difference between values of consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a consecutive data points over time or for comparing multiple items.    |

## Required Axes
The $Platform$ data chart component provides various types of axes but only the following types of axes can be used with category series.

| Series Type        | YAxis Type      | XAxis Type                      |
|--------------------|-----------------|---------------------------------|
| `BarSeries`        | `CategoryYAxis` | `NumericXAxis`                                   |
| `AreaSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `ColumnSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `LineSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `SplineSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `SplineAreaSeries` | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StepAreaSeries`   | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StepLineSeries`   | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `WaterfallSeries`  | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## Required Data

Category series have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the category series.
- All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryXAxis`)
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of a category series (e.g. `LineSeries`)



You can use the [SampleCategoryData](data-chart-data-sources-category.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleCategoryData.create();
```

## Required Modules

The category series requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartCategoryModule.Register(IgniteUIBlazor);
DataChartCategoryCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxAreaSeries } from 'igniteui-angular-charts';
import { IgxBarSeries } from 'igniteui-angular-charts';
import { IgxColumnSeries } from 'igniteui-angular-charts';
import { IgxLineSeries } from 'igniteui-angular-charts';
import { IgxPointSeries } from 'igniteui-angular-charts';
import { IgxSplineSeries } from 'igniteui-angular-charts';
import { IgxSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxStepAreaSeries } from 'igniteui-angular-charts';
import { IgxStepLineSeries } from 'igniteui-angular-charts';
import { IgxWaterfallSeries } from 'igniteui-angular-charts';
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
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrAreaSeries } from 'igniteui-react-charts';
import { IgrBarSeries } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrPointSeries } from 'igniteui-react-charts';
import { IgrSplineSeries } from 'igniteui-react-charts';
import { IgrSplineAreaSeries } from 'igniteui-react-charts';
import { IgrStepAreaSeries } from 'igniteui-react-charts';
import { IgrStepLineSeries } from 'igniteui-react-charts';
import { IgrWaterfallSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
// Module Manager:
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisComponent } from 'igniteui-webcomponents-charts';
// series' modules:
import { IgcAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcBarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPointSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStepAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStepLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcWaterfallSeriesModule } from 'igniteui-webcomponents-charts';
//series' components
import { IgcAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcBarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPointSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStepAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStepLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcWaterfallSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// registering the modules:
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcAreaSeriesModule,
    IgcBarSeriesModule,
    IgcColumnSeriesModule,
    IgcLineSeriesModule,
    IgcPointSeriesModule,
    IgcSplineSeriesModule,
    IgcSplineAreaSeriesModule,
    IgcStepAreaSeriesModule,
    IgcStepLineSeriesModule,
    IgcWaterfallSeriesModule
);
```

## Code Example - Column Series
This code demonstrates how to create an instance of data chart with `ColumnSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ColumnSeries
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
    <igx-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-column-series>
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
    {/* series */}
    <IgrColumnSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```ts
const series1 = new IgrColumnSeries({ name: "series1" });
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
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-category-x-axis id="xAxis" label="Year"></igc-category-x-axis>
    <igc-numeric-y-axis  id="yAxis"></igc-numeric-y-axis>
    <igc-column-series
        id="series1"
        valueMemberPath="USA">
    </igc-column-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## Code Example - Bar Series
Note that you can also use above code to create other type of category series by replacing `ColumnSeries` with name of series that you want to render. However, the `BarSeries` is an exception from this rule because it requires different types of axes. This code demonstrates how to create an instance of data chart with `BarSeries` and bind it to the data source.

```razor
<DataChart Height="500px" Width="700px">
    <NumericXAxis Name="xAxis" />
    <CategoryYAxis Name="yAxis" />
    <BarSeries
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
    <igx-numeric-x-axis  name="xAxis"></igx-numeric-x-axis>
    <igx-category-y-axis name="yAxis" label="Year"></igx-category-y-axis>
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-bar-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis  name="xAxis" />
    <IgrCategoryYAxis name="yAxis" label="Year" />
    {/* series */}
    <IgrBarSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```ts
const series1 = new IgrBarSeries({ name: "series1" });
series1.valueMemberPath = "USA";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis  id="xAxis"></igc-numeric-x-axis>
    <igc-category-y-axis id="yAxis" label="Year"></igc-category-y-axis>
    <igc-bar-series
        id="series1"
        valueMemberPath="USA">
    </igc-bar-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcCategoryYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBarSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
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



---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Stacked Charts | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create stacked charts such as stacked area chart, stacked bar chart and many more. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, stacked charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','StackedColumnSeries','CategoryXAxis']
namespace: Infragistics.Controls.Charts
---
# $PlatformShort$ Stacked Series

This topic explains the various types of stacked series in the $PlatformShort$ data chart component. Stacked series are a group of the simplest and most common form of chart series that take data and render it as collection of data points stretched along a horizontal line (e.g. `ColumnSeries`) or vertical line (e.g. `BarSeries`).

## $PlatformShort$ Stacked Series Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Stacked Series Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-stacked-series"></sample-button>

</div>

<div class="divider--half"></div>

Each stacked series has its own Series collection in which you can place the `StackedFragmentSeries` elements. These fragments are what make up the actual rendering of the chart and are the elements that accept the `ValueMemberPath`.

## Types of Stacked Series
The following table lists all types of category series and their descriptions:

| Series Name  | Description   |
|--------------|---|
| `StackedAreaSeries` | This series type is rendered using a collection of points connected by line segments (`StackedFragmentSeries`) with the area below the line filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis. |
| `StackedBarSeries` | Displays discrete data in bars stacked next to each other. Categories are arranged vertically and values are stacked horizontally. This series is usually used for showing the changes in a data series over time or for comparing multiple items. |
| `StackedColumnSeries` | Displays discrete data in columns stacked on top of each other. Categories are arranged horizontally and values are stacked vertically. This series is usually used for showing the changes in a data series over time or for comparing multiple items.  |
| `StackedLineSeries` | This series type is rendered using a collection of points connected by line segments (`StackedFragmentSeries`) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis. |
| `StackedSplineAreaSeries` | This series type is rendered using a collection of points connected by smooth curves of spline segments (`StackedFragmentSeries`) with the area below the spline filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.  |
| `StackedSplineSeries` | This series type is rendered using a collection of points connected by smooth curves of spline segments (`StackedFragmentSeries`) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.   |
| `Stacked100AreaSeries` | This series is identical to the `StackedAreaSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100AreaSeries` presents the data in terms of percent of the sum of all values in a data point. |
| `Stacked100BarSeries` | This series is the same as the `StackedBarSeries` type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data. |
| `Stacked100ColumnSeries` | This series is the same as the `StackedColumnSeries` type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data.  |
| `Stacked100LineSeries` | This series is identical to the `StackedLineSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100LineSeries` presents the data in terms of percent of the sum of all values in a data point. |
| `Stacked100SplineAreaSeries` | This series is identical to the `StackedSplineAreaSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100SplineAreaSeries` presents the data in terms of percent of the sum of all values in a data point.   |
| `Stacked100SplineSeries` | This series is identical to the `StackedSplineSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100SplineSeries` presents the data in terms of percent of the sum of all values in a data point.   |

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with stacked series.

| Series Type        | YAxis Type      | XAxis Type                      |
|--------------------|-----------------|---------------------------------|
| `StackedAreaSeries`          | `CategoryYAxis` | `NumericXAxis`                                   |
| `StackedBarSeries`           | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedColumnSeries`        | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedLineSeries`          | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedSplineAreaSeries`    | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StackedSplineSeries`        | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100AreaSeries`       | `CategoryYAxis` | `NumericXAxis`                                   |
| `Stacked100BarSeries`        | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100ColumnSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100LineSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100SplineAreaSeries` | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `Stacked100SplineSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## Required Data

Stacked series have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the chart will not render the stacked series.
- All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryXAxis`)
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the `StackedFragmentSeries` to be added to Series collection of the stacked series.

## Required Modules

The stacked series requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
DataChartCategoryModule.Register(IgniteUIBlazor);
DataChartStackedModule.Register(IgniteUIBlazor);
StackedFragmentSeriesModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStackedAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedBarSeries } from 'igniteui-angular-charts';
import { IgxStackedColumnSeries } from 'igniteui-angular-charts';
import { IgxStackedLineSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineSeries } from 'igniteui-angular-charts';
import { IgxStacked100AreaSeries } from 'igniteui-angular-charts';
import { IgxStacked100BarSeries } from 'igniteui-angular-charts';
import { IgxStacked100ColumnSeries } from 'igniteui-angular-charts';
import { IgxStacked100LineSeries } from 'igniteui-angular-charts';
import { IgxStacked100SplineAreaSeries } from 'igniteui-angular-charts'
import { IgxStacked100SplineSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxDataChartStackedModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
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
import { IgrStackedAreaSeries } from 'igniteui-react-charts';
import { IgrStackedBarSeries } from 'igniteui-react-charts';
import { IgrStackedColumnSeries } from 'igniteui-react-charts';
import { IgrStackedFragmentSeries } from 'igniteui-react-charts';
import { IgrStackedLineSeries } from 'igniteui-react-charts';
import { IgrStackedSplineAreaSeries } from 'igniteui-react-charts';
import { IgrStackedSplineSeries } from 'igniteui-react-charts';
import { IgrStacked100AreaSeries } from 'igniteui-react-charts';
import { IgrStacked100BarSeries } from 'igniteui-react-charts';
import { IgrStacked100ColumnSeries } from 'igniteui-react-charts';
import { IgrStacked100LineSeries } from 'igniteui-react-charts';
import { IgrStacked100SplineAreaSeries } from 'igniteui-react-charts'
import { IgrStacked100SplineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartStackedModule } from 'igniteui-react-charts';
import { IgrColumnFragmentModule } from 'igniteui-react-charts' ;

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartStackedModule.register();
IgrColumnFragmentModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartStackedModule } from 'igniteui-webcomponents-charts';
import { IgcColumnFragmentModule } from 'igniteui-webcomponents-charts' ;
// axis' modules:
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisModule  } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisComponent } from 'igniteui-webcomponents-charts';
// scatter series' modules:
import { IgcStackedAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedBarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedFragmentSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100AreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100BarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100ColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100LineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100SplineAreaSeriesModule } from 'igniteui-webcomponents-charts'
import { IgcStacked100SplineSeriesModule } from 'igniteui-webcomponents-charts';
// scatter series' elements:
import { IgcStackedAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedBarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedFragmentSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100AreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100BarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100ColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100LineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100SplineAreaSeriesComponent } from 'igniteui-webcomponents-charts'
import { IgcStacked100SplineSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartStackedModule,
    IgcColumnFragmentModule,
    IgcStackedAreaSeriesModule,
    IgcStackedBarSeriesModule,
    IgcStackedColumnSeriesModule,
    IgcStackedFragmentSeriesModule,
    IgcStackedLineSeriesModule,
    IgcStackedSplineAreaSeriesModule,
    IgcStackedSplineSeriesModule,
    IgcStacked100AreaSeriesModule,
    IgcStacked100BarSeriesModule,
    IgcStacked100ColumnSeriesModule,
    IgcStacked100LineSeriesModule,
    IgcStacked100SplineAreaSeriesModule,
    IgcStacked100SplineSeriesModule
);
```

## Code Example - Stacked Column Series
This code demonstrates how to create an instance of data chart with `StackedColumnSeries` and bind it to the data source. Note that you can also use above code to create other type of category series by replacing `StackedColumnSeries` with name of series that you want to render.

```razor
<DataChart Width="100%" Height="100%>
    <CategoryXAxis Name="xAxis" Label="Country" DataSource="@data" />
    <NumericYAxis Name=yAxis />
    <StackedColumnSeries 
      XAxisName="xAxis" 
      YAxisName="yAxis"
      DataSource="@data">
        <StackedFragmentSeries ValueMemberPath="Coal" />
        <StackedFragmentSeries ValueMemberPath="Hydro" />
        <StackedFragmentSeries ValueMemberPath="Nuclear" />
        <StackedFragmentSeries ValueMemberPath="Gas" />
        <StackedFragmentSeries ValueMemberPath="Oil" />
  </StackedColumnSeries>
</DataChart>
```

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-column-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-column-series>

</igx-data-chart>
```

```tsx
<IgrDataChart width="100%"
  height="100%"
  dataSource={this.data} >

  <IgrCategoryXAxis name="xAxis" label="Country" />
  <IgrNumericYAxis name="yAxis" minimumValue={0} />
  <IgrStackedColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
    <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal" />
    <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro" />
    <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear" />
    <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
    <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil" />
  </IgrStackedColumnSeries>
</IgrDataChart>
```

```ts
const stackedSeries = new IgrStackedColumnSeries({ name: "series" });

const fragment1 = new IgrStackedFragmentSeries({ name: "coal" });
fragment1.valueMemberPath = "Coal";

const fragment2 = new IgrStackedFragmentSeries({ name: "hydro" });
fragment2.valueMemberPath = "Hydro";

const fragment3 = new IgrStackedFragmentSeries({ name: "nuclear" });
fragment3.valueMemberPath = "Nuclear";

const fragment4 = new IgrStackedFragmentSeries({ name: "gas" });
fragment4.valueMemberPath = "Gas";

const fragment5 = new IgrStackedFragmentSeries({ name: "oil" });
fragment5.valueMemberPath = "Oil";

stackedSeries.xAxisName = "xAxis";
stackedSeries.yAxisName = "yAxis";

stackedSeries.series.add(fragment1);
stackedSeries.series.add(fragment2);
stackedSeries.series.add(fragment3);
stackedSeries.series.add(fragment4);
stackedSeries.series.add(fragment5);

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stackedSeries);
```

```html
<igc-data-chart id="chart" height="500px" width="700px">
  <igc-category-x-axis id="xAxis" label="Country"></igc-category-x-axis>
  <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

  <igc-stacked-column-series id="series1">
    <igc-stacked-fragment-series value-member-path="Coal"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Hydro"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Nuclear"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Gas"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Oil"></igc-stacked-fragment-series>
  </igc-stacked-column-series>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcStackedColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## Code Example - Stacked Bar Series
 The `StackedBarSeries` is an exception to the rule that you can replace `StackedColumnSeries` with any series name because it requires different types of axes in that it uses a `CategoryYAxis` and `NumericXAxis`. This code demonstrates how to create an instance of the data chart with a `StackedBarSeries` and bind it to the data source.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-numeric-x-axis #xAxis></igx-numeric-x-axis>
  <igx-category-y-axis #yAxis label="Country"></igx-category-y-axis>

  <igx-stacked-bar-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-bar-series>

</igx-data-chart>
```

```tsx
<IgrDataChart width="100%"
  height="100%"
  dataSource={this.data} >
  <IgrNumericXAxis name="xAxis" />
  <IgrCategoryYAxis name="yAxis" label="Country" />

  <IgrStackedBarSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
    <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal" />
    <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro" />
    <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear" />
    <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
    <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil" />
  </IgrStackedBarSeries>
</IgrDataChart>
```

```ts
const stackedSeries = new IgrStackedBarSeries({ name: "series" });

const fragment1 = new IgrStackedFragmentSeries({ name: "fragment1" });
fragment1.valueMemberPath = "Coal";

const fragment2 = new IgrStackedFragmentSeries({ name: "fragment2" });
fragment2.valueMemberPath = "Hydro";

const fragment3 = new IgrStackedFragmentSeries({ name: "fragment3" });
fragment3.valueMemberPath = "Nuclear";

const fragment4 = new IgrStackedFragmentSeries({ name: "fragment4" });
fragment4.valueMemberPath = "Gas";

const fragment5 = new IgrStackedFragmentSeries({ name: "fragment5" });
fragment5.valueMemberPath = "Oil";

stackedSeries.xAxisName = "xAxis";
stackedSeries.yAxisName = "yAxis";

stackedSeries.series.add(fragment1);
stackedSeries.series.add(fragment2);
stackedSeries.series.add(fragment3);
stackedSeries.series.add(fragment4);
stackedSeries.series.add(fragment5);

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stackedSeries);
```

```html
<igc-data-chart id="chart" height="500px" width="700px">
  <igc-numeric-x-axis id="xAxis"></igc-numeric-x-axis>
  <igc-category-y-axis id="yAxis" label="Country"></igc-category-y-axis>

  <igc-stacked-bar-series id="series1">
    <igc-stacked-fragment-series value-member-path="Coal"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Hydro"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Nuclear"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Gas"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Oil"></igc-stacked-fragment-series>
  </igc-stacked-bar-series>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcCategoryYAxisComponent);

let series1 = (document.getElementById("series1") as IgcStackedBarSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

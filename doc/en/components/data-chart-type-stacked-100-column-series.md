---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Stacked 100 Column Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create stacked 100 column charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, stacked 100 column charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','Stacked100ColumnSeries']
namespace: Infragistics.Controls.Charts
---
# $PlatformShort$ Stacked 100 Column Chart

The $ProductName$ stacked 100 column chart belongs to a group of category charts and is rendered using a collection of rectangles (`StackedFragmentSeries`) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis. The $PlatformShort$ stacked 100 column chart is identical to the $PlatformShort$ stacked column chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point. In addition, the `Stacked100ColumnSeries` uses the same concepts of data plotting as `Stacked100BarSeries` but data points are stacked along vertical line (y-axis) rather than along horizontal line (x-axis). In other words, the stacked 100 column chart is rendered like the stacked 100 bar chart but with 90 degrees counter-clockwise rotation.

## $PlatformShort$ Stacked 100 Column Chart Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-100-column-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-stacked-100-column-series"></sample-button>

</div>

<div class="divider--half"></div>

The `Stacked100ColumnSeries` has its own `Series` collection in which you can place the `StackedFragmentSeries` elements. These fragments are what make up the actual rendering of the chart and are the elements that accept the `ValueMemberPath`.

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `Stacked100ColumnSeries`.

- `CategoryXAxis`
- `OrdinalTimeXAxis`
- `TimeXAxis`
- `NumericYAxis`

## Required Data

The `Stacked100ColumnSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the `Stacked100ColumnSeries`.
- All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryXAxis`).
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the `StackedFragmentSeries` to be added to the `Stacked100ColumnSeries`' `Series` collection.

## Required Modules

Creation of the `Stacked100ColumnSeries` requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* DataChartCoreModule        
* DataChartInteractivityModule
* Stacked100ColumnSeriesModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStacked100ColumnSeries } from 'igniteui-angular-charts';
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
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrStacked100ColumnSeries } from 'igniteui-react-charts';
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
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartStackedModule } from 'igniteui-webcomponents-charts';
import { IgcStackedFragmentSeriesModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartStackedModule,
    IgcStackedFragmentSeriesModule,
);
```

## Code Example
This code demonstrates how to create an instance of the $ProductName$ data chart with `Stacked100ColumnSeries` and bind it to a data source.

```razor
<DataChart Width="100%" Height="100%>
    <CategoryXAxis Name="xAxis" Label="Country" DataSource="@data" />
    <NumericYAxis Name=yAxis />
    <Stacked100ColumnSeries 
      XAxisName="xAxis" 
      YAxisName="yAxis"
      DataSource="@data">
        <StackedFragmentSeries ValueMemberPath="Coal" />
        <StackedFragmentSeries ValueMemberPath="Hydro" />
        <StackedFragmentSeries ValueMemberPath="Nuclear" />
        <StackedFragmentSeries ValueMemberPath="Gas" />
        <StackedFragmentSeries ValueMemberPath="Oil" />
  </Stacked100ColumnSeries>
</DataChart>
```

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-100-column-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-100-column-series>

</igx-data-chart>
```

```html
<igc-data-chart id="chart" width="100%" height="100%">
    <igc-category-x-axis name="xAxis" label="Country"></igc-category-x-axis>
    <igc-numeric-y-axis name="yAxis" minimum-value="0"></igc-numeric-y-axis>
    <igc-stacked-100-column-series name="series" x-axis-name="xAxis" y-axis-name="yAxis">
        <igc-stacked-fragment-series name="coal" value-member-path="Coal" title="Coal"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="hydro" value-member-path="Hydro" title="Hydro"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="nuclear" value-member-path="Nuclear" title="Nuclear"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="gas" value-member-path="Gas" title="Gas"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="oil" value-member-path="Oil" title="Oil"></igc-stacked-fragment-series>
    </igc-stacked-100-column-series>
</igc-data-chart>
```

```tsx
<IgrDataChart width="100%"
  height="100%"
  dataSource={this.data} >

  <IgrCategoryXAxis name="xAxis" label="Country" />
  <IgrNumericYAxis name="yAxis" minimumValue={0} />
  <IgrStacked100ColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
    <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal" />
    <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro" />
    <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear" />
    <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
    <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil" />
  </IgrStacked100ColumnSeries>
</IgrDataChart>
```

```ts
const stack = new IgrStacked100ColumnSeries({ name: "series" });
stack.xAxisName = "xAxis";
stack.yAxisName = "yAxis";

const propertyNames: string[] = ["Coal", "Hydro", "Nuclear", "Gas", "Oil"];
for (const propertyName of propertyNames) {
    const fragment = new IgrStackedFragmentSeries();
    fragment.valueMemberPath = propertyName;
    fragment.title = propertyName;
    stack.series.add(fragment);
}

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stack);
```
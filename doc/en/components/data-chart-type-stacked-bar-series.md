---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Stacked Bar Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create stacked bar charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, stacked bar charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','StackedBarSeries']
namespace: Infragistics.Controls.Charts
---
# $PlatformShort$ Stacked Bar Chart

The $ProductName$ stacked bar chart belongs to a group of category charts and is rendered using a collection of rectangles (`StackedFragmentSeries`) that are stacked next to each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the x-axis, and all negative values are grouped on the negative side of the x-axis. `StackedBarSeries` uses the same concepts of data plotting as `StackedColumnSeries` but data points are stacked along horizontal line (x-axis) rather than along vertical line (y-axis). In other words, the stacked bar chart is rendered like the stacked column chart but with 90 degrees clockwise rotation.

## $PlatformShort$ Stacked Bar Chart Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-bar-series" 
           alt="$PlatformShort$ Stacked Bar Chart Example" 
           github-src="charts/data-chart/type-stacked-bar-series">
</code-view>

<div class="divider--half"></div>

The `StackedBarSeries` has its own `Series` collection in which you can place the `StackedFragmentSeries` elements. These fragments are what make up the actual rendering of the chart and are the elements that accept the `ValueMemberPath`.

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `StackedBarSeries`.

- `NumericXAxis`
- `CategoryYAxis`

## Required Data

The `StackedBarSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the `StackedBarSeries`.
- All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryYAxis`).
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the `StackedFragmentSeries` to be added to the `StackedBarSeries`' `Series` collection.

## Required Modules

Creation of the `StackedBarSeries` requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
DataChartCategoryModule.Register(IgniteUIBlazor);
DataChartStackedModule.Register(IgniteUIBlazor);
StackedFragmentSeriesModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStackedBarSeries } from 'igniteui-angular-charts';
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
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrStackedBarSeries } from 'igniteui-react-charts';
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
This code demonstrates how to create an instance of the $ProductName$ data chart with `StackedBarSeries` and bind it to a data source.

```razor
<DataChart Width="100%" Height="100%>
    <CategoryXAxis Name="xAxis" Label="Country" DataSource="@data" />
    <NumericYAxis Name=yAxis />
    <StackedBarSeries 
      XAxisName="xAxis" 
      YAxisName="yAxis"
      DataSource="@data">
        <StackedFragmentSeries ValueMemberPath="Coal" />
        <StackedFragmentSeries ValueMemberPath="Hydro" />
        <StackedFragmentSeries ValueMemberPath="Nuclear" />
        <StackedFragmentSeries ValueMemberPath="Gas" />
        <StackedFragmentSeries ValueMemberPath="Oil" />
  </StackedBarSeries>
</DataChart>
```

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

```html
<igc-data-chart id="chart" width="100%" height="100%">
    <igc-numeric-x-axis name="xAxis" minimum-value="0"></igc-numeric-x-axis>
    <igc-category-y-axis name="yAxis" label="Country"></igc-category-y-axis>
    <igc-stacked-bar-series name="series" x-axis-name="xAxis" y-axis-name="yAxis">
        <igc-stacked-fragment-series name="coal" value-member-path="Coal" title="Coal"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="hydro" value-member-path="Hydro" title="Hydro"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="nuclear" value-member-path="Nuclear" title="Nuclear"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="gas" value-member-path="Gas" title="Gas"></igc-stacked-fragment-series>
        <igc-stacked-fragment-series name="oil" value-member-path="Oil" title="Oil"></igc-stacked-fragment-series>
    </igc-stacked-bar-series>
</igc-data-chart>
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
const stack = new IgrStackedBarSeries({ name: "series" });
stack.xAxisName = "xAxis";
stack.yAxisName = "yAxis";

const propertyNames: string[] = ["Coal", "Hydro", "Nuclear", "Gas", "Oil"];
for (const propertyName of propertyNames) {
    const fragment = new IgrStackedFragmentSeries();
    fragment.valueMemberPath = propertyName;
    fragment.title = propertyName;
    stack.series.add(fragment);
}

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stack);
```
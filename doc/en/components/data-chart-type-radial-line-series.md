---
title: $PlatformShort$ Data Chart | Data Visualization Tools |Radial Line Chart | Data Binding | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create radial line charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, radial line charts, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart','RadialLineSeries']
---
# $PlatformShort$ Radial Line Chart

The $ProductName$ radial line chart belongs to a group of radial charts and is rendered using a collection of straight lines connecting data points. The `RadialLineSeries` uses the same concepts of data plotting as the `LineSeries`, but wraps data points around a circle rather than stretching them along a horizontal line.

## $PlatformShort$ Radial Line Chart Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-line-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Radial Line Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-radial-line-series"></sample-button>

</div>

<div class="divider--half"></div>

## Required Axes
The $PlatformShort$ data chart component provides various types of axes but only the following types of axes can be used with `RadialLineSeries`.

- `NumericRadiusAxis`
- `CategoryAngleAxis`

## Required Data

The `RadialLineSeries` has the following data requirements:
- The data source must be an array or a list of data items.
- The data source must contain at least one data item otherwise the chart will not render the `RadialLineSeries`.
- All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `CategoryAngleAxis`).
- All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the `RadialLineSeries`.


You can use the [SampleRadialData](data-chart-data-sources-radial.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleRadialData.create();
```

## Required Modules

Creation of the `RadialLineSeries` requires the following modules:

```razor
DataChartCoreModule
* RadialLineSeriesModule
* RadialLineSeriesCoreModule
DataChartInteractivityModule
```

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxRadialLineSeries } from 'igniteui-angular-charts';
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
import { IgrRadialLineSeries } from 'igniteui-react-charts';
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
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartRadialCoreModule,
    IgcDataChartRadialModule,
    IgcDataChartInteractivityModule
);
```

## Code Example
This code demonstrates how to create an instance of the $ProductName$ data chart with `RadialLineSeries` and bind it to a data source.

```razor
<DataChart Height="500px" Width="750px">
        <CategoryAngleAxis Name="angleAxis" Label="Department" />
        <NumericRadiusAxis Name="radiusAxis" />
        <RadialLineSeries Name="series1"
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
    <igx-radial-line-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-line-series>
 </igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrCategoryAngleAxis name="angleAxis" label="Department" />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrRadialLineSeries
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrRadialLineSeries({ name: "series1" });
series1.valueMemberPath  = "Budget";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrCategoryAngleAxis({ name: "angleAxis" });
angleAxis.label = "Department";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleRadialData.create();
this.chart.axes.add(radiusAxis);
this.chart.axes.add(angleAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="100%">
    <igc-category-angle-axis name="angleAxis" label="Department">
    </igc-category-angle-axis>
    <igc-numeric-radius-axis name="radiusAxis"
    inner-radius-extent-scale="0.1" minimum-value="0">
    </igc-numeric-radius-axis>
    <igc-radial-line-series
        name="series1"
        value-member-path="Budget"
        value-axis-name="radiusAxis"
        angle-axis-name="angleAxis"
        title="Budget">
    </igc-radial-line-series>
    <igc-radial-line-series
        name="series2"
        value-member-path="Spending"
        value-axis-name="radiusAxis"
        angle-axis-name="angleAxis"
        title="Spending">
    </igc-radial-line-series>
</igc-data-chart>
```

```ts
this.chart = document.getElementById("chart") as IgcDataChartComponent;
this.chart.dataSource = SampleRadialData.create();
```

### Additional Resources

- [Axis Types](data-chart-axis-types.md)
- [Axis Sharing](data-chart-axis-sharing.md)
- [Chart Legend](data-chart-legends.md)
- [Series Markers](data-chart-series-markers.md)
- [Series Types](data-chart-series-types.md)


---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Financial OHLC Series | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create financial OHLC charts. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, financial OHLC chart, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries','PriceDisplayType','CategoryXAxis']
---
# $PlatformShort$ Financial OHLC Chart

The $ProductName$ financial price chart in `OHLC` display mode is used to plot stock prices, and show the stock’s High, Low, Open, and Close prices for each day. Each data point is plotted as a vertical line with horizontal perpendicular lines on both the left and right side. The vertical line indicates the span between high and low values of an investment. The top of the vertical line indicates the highest price during a session and the bottom of the vertical line indicates the lowest price during a session. The horizontal lines indicate the span between the opening and closing values of an investment. The horizontal line on the left-hand side of the vertical line indicates the opening value of a session. The horizontal line on the right-hand side of the vertical line indicates the closing value of a session.

## $PlatformShort$ Financial OHLC Chart Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-ohlc-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-ohlc-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-ohlc-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-financial-ohlc-series"></sample-button>

</div>

<div class="divider--half"></div>


## Required Axes

The $PlatformShort$ data chart component provides various types of axes but all financial series can only use the `NumericYAxis` as Y-Axis and `CategoryXAxis`, `OrdinalTimeXAxis`, or `TimeXAxis` as X-Axis.

## Required Data

Financial series have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the data chart will not render the financial series.
- All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the financial axis (e.g. `CategoryXAxis`)
- All data items must contain 5 numeric data column which should be mapped using properties of a financial series: `OpenMemberPath`, `HighMemberPath`, `LowMemberPath`, `CloseMemberPath`, `VolumeMemberPath`

You can use the [SampleFinancialData](data-chart-data-sources-financial.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleFinancialData.create();
```

## Required Modules

The financial series requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

* DataChartCoreModule
* DataChartFinancialModule
* DataChartFinancialCoreModule
* DataChartFinancialIndicatorsModule
* DataChartInteractivityModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxFinancialPriceSeriesModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxFinancialPriceSeriesModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
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
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
// series' modules:
import { IgcFinancialPriceSeriesModule } from 'igniteui-webcomponents-charts';
// series' components:
import { IgcFinancialPriceSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcFinancialPriceSeriesModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with `FinancialPriceSeries`.

```razor
<DataChart Height="500px" Width="750px">
    <CategoryXAxis Name="xAxis" Label="Label" DataSource="@DataSource" />
    <NumericYAxis Name="yAxis" />
    <FinancialPriceSeries Name="series1"
        DisplayType="PriceDisplayType.OHLC"
        XAxisName="xAxis"
        YAxisName="yAxis"
        LowMemberPath="Low"
        HighMemberPath="High"
        OpenMemberPath="Open"
        CloseMemberPath="Close"
        VolumeMemberPath="Volume" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

    <igx-financial-price-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="OHLC"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">

    <IgrCategoryXAxis name="xAxis" label="Date" />
    <IgrNumericYAxis  name="yAxis" />

    <IgrFinancialPriceSeries
    name="series1"
    xAxisName="xAxis"
    yAxisName="yAxis"
    displayType="OHLC"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </IgrDataChart>
```

```ts
const series1 = new IgrFinancialPriceSeries({ name: "series1" });
series1.lowMemberPath = "Low";
series1.highMemberPath = "High";
series1.openMemberPath = "Open";
series1.closeMemberPath = "High";
series1.volumeMemberPath = "Volume";
series1.displayType = "OHLC";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Date";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleFinancialData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-category-x-axis id="xAxis" label="Date"></igc-category-x-axis>
    <igc-numeric-y-axis  id="yAxis"></igc-numeric-y-axis>

    <igc-financial-price-series
        id="series2"
        display-type="OHLC"
        low-member-path="Low"
        high-member-path="High"
        open-member-path="Open"
        close-member-path="Close"
        volume-member-path="Volume">
    </igc-financial-price-series>

 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series2 = (document.getElementById("series2") as IgcFinancialPriceSeriesComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxis;
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



---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Financial Overlay | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to display financial overlays. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, financial overlays, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
---
# $PlatformShort$ Financial Overlays

Financial Overlays are often used by traders to measure changes and to show trends in stock prices. These overlays are usually displayed in front of the `FinancialPriceSeries` because they share the same Y-Axis scale. In contrast, financial indicators do not share the same Y-Axis scale with the `FinancialPriceSeries` and as result financial indicators are usually plotted below or above the `FinancialPriceSeries` or overlays. However, the chart control supports plotting both overlays as well as indicators in the same plot area, if desired, using multiple axes or by sharing axes.

## Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-overlays-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-overlays' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-overlays-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/type-financial-overlays"></sample-button>

</div>

<div class="divider--half"></div>

The following lists the available financial overlays:

- `BollingerBandsOverlay` (BBO) is based on the standard deviation in the prices, so they incorporate price changes in their width. The bands are wider when the standard deviation increases and narrower when the standard deviation decreases and are smoothed by a moving average. Apart from the standard deviation and smoothing period being user adjustable, there is also a user adjustable multiplier to affect the scale of the BollingerBandsOverlay width,
- `PriceChannelOverlay` (PCO) is price volatility or the changes in price over time between two parallel lines. The lower line is the trend line and is drawn on the lows prices, and the upper line is the channel line and is based on the high prices. Channels show trend direction for any time frame. Price channels, or trend, can be up, down or sideways


## Required Axes

The $PlatformShort$ data chart component provides various types of axes but all financial series can only use the `NumericYAxis` as Y-Axis and `CategoryXAxis`, `OrdinalTimeXAxis`, or `TimeXAxis` as X-Axis.

## Required Data

Financial overlays have the following data requirements:
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
import { IgxBollingerBandsOverlay } from 'igniteui-angular-charts';
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
import { IgrBollingerBandsOverlay } from 'igniteui-react-charts';
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
import { IgcBollingerBandsOverlayModule } from 'igniteui-webcomponents-charts';
// series' components:
import { IgcFinancialPriceSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcBollingerBandsOverlayComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcFinancialPriceSeriesModule,
    IgcBollingerBandsOverlayModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with a `BollingerBandsOverlay`.

```razor
<DataChart Height="500px" Width="750px">
    <CategoryXAxis Name="xAxis" Label="Label" DataSource="@DataSource" />
    <NumericYAxis Name="yAxis" />
    <BollingerBandsOverlay Name="series1"
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

    <igx-bollinger-bands-overlay
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-bollinger-bands-overlay>

 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">

    {/* axes */}
    <IgrCategoryXAxis name="xAxis" label="Date" />
    <IgrNumericYAxis  name="yAxis" />

    {/* series */}
    <IgrBollingerBandsOverlay
    name="series1"
    xAxisName="xAxis"
    yAxisName="yAxis"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </IgrDataChart>
```

```ts
const series1 = new IgrBollingerBandsOverlay({ name: "series1" });
series1.lowMemberPath = "Low";
series1.highMemberPath = "High";
series1.openMemberPath = "Open";
series1.closeMemberPath = "High";
series1.volumeMemberPath = "Volume";
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
    <igc-bollinger-bands-overlay
        id="series1"
        low-member-path="Low"
        high-member-path="High"
        open-member-path="Open"
        close-member-path="Close"
        volume-member-path="Volume">
    </igc-bollinger-bands-overlay>

 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBollingerBandsOverlayComponent);
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



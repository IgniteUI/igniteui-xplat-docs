---
title: $PlatformShort$ Financial Chart | Performance | Infragistics
_description: Render millions of financial data points using Infragistics' $PlatformShort$ financial chart control at super fast speed. Check out the $ProductName$ graph's high performance!
_keywords: $PlatformShort$ charts, financial chart, stock chart, performance, $ProductName$, Infragistics, data binding
mentionedTypes: ['FinancialChart', 'FinancialChartType', 'FinancialOverlayType', 'FinancialChartVolumeType', 'MarkerType', 'FinancialChartXAxisMode', 'FinancialChartZoomSliderType', 'FinancialChartYAxisMode', 'DomainChart' ]
---
# $PlatformShort$ Chart Performance

The $PlatformShort$ financial chart component has very good performance of rendering a lot of data points. The following demo binds 20 years of data, with 1 day intervals and displays the stock prices using candle sticks.

## $PlatformShort$ Chart Performance Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-performance-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-performance' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Chart Performance Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-performance-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/financial-chart/performance"></sample-button>

</div>
<div class="divider--half"></div>


The following code demonstrates how to bind the $PlatformShort$ financial chart to high volumes of data.

```ts
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
```

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    width="850px"
    height="600px"
    dataSource={this.data} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px">
 </igc-financial-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcFinancialChartComponent);
chart.dataSource = data;
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource" />
```

There are several $PlatformShort$ specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

> [!NOTE]
> For Angular:
>
> * When storing lots of data in properties in your components to bind against, you should make sure to set `changeDetection: ChangeDetectionStrategy.OnPush` in your `@Component` decorator. Setting this will tell $PlatformShort$ not to dig deeply into changes within your data array, something you don't want $PlatformShort$ doing every change detection cycle.
> * Instead of $PlatformShort$ automatically telling the charts how they should react to data changes, its your responsibility to notify the components how the data they have been bound to has been modified. Reacting to these delta notifications can be done much more efficiently than to have to compare a 1M record array for any changes, every time $PlatformShort$ runs a change detection. Look for the `notify*` methods on each chart for more information about how to notify the chart of changes to the data it is bound against.
> * When $PlatformShort$ is in Debug mode, there is a lot of overhead in some browsers that will drag down performance. When evaluating real world performance always make sure to serve or build with `--prod` version.

<!-- -->
> [!NOTE]
> For React:
>
> * When $PlatformShort$ is in development mode, there is a lot of overhead in some browsers that will drag down performance. When evaluating real world performance always make sure to use production builds.

Also, you should consider the following features of the financial chart when optimizing performance in your application.

## Chart Type
Setting the `ChartType` option can have the following impact on chart performance:

* `Line` - is the least expensive chart type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
* `Column` - is more expensive to render than the `Line` chart type and it is recommended when rendering data items with single numeric value.
* `Bar` - is more expensive to render than the `Column` chart type and it is recommended when rendering data items with OHLC  numeric values.
* `Candle` - is more expensive to render than the `Bar` chart type and it is also recommended when rendering data items with OHLC  numeric values.

## Volume Type
Setting the `VolumeType` option can have the following impact on chart performance:

* `Line` - is the least expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
* `Area` - is more expensive to render than the `Line` volume type.
* `Column` - is more expensive to render than the `Area` volume type and it is recommended when rendering volume data of 1-3 stocks.
* `None` - does not display the volume pane.

## Marker Type
Setting the `MarkerType` option to `none` will decrease the amount of items to render than any other type.

## Legend Visibility
Setting the `IsLegendVisible` option to `false` will increase performance since the legend will not be drawn.

## Zoom Slider Type
Setting the `ZoomSliderType` option to `none` will improve chart performance and enable more vertical space for other indicators and the volume pane.

## Chart Panes
Setting a lot of panes using `FinancialIndicatorType` and `FinancialOverlayType` options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

## X-Axis Mode
Setting the `XAxisMode` option can have the following impact on chart performance:

* `Ordinal` - is the least expensive x-axis mode to use in the financial chart and it is recommended when rendering of break in data range (e.g. weekends or holidays) is not important.
* `Time` - is more expensive expensive than the `Ordinal` to use in the financial chart. It is recommended when rendering of break in data range (e.g. weekends or holidays) is  required.

## Y-Axis Mode
Setting the `YAxisMode` option to `numeric` is recommended for higher performance, as fewer operations are needed than using `PercentChange` mode.

## Annotations
Enabling the Callout Annotations (`CalloutsVisible`) or Final Value Annotations (`FinalValueAnnotationsVisible`) will decrease performance of the financial chart.

## Axis Visuals

By default, the financial chart is already optimized for the best performance and enabling additional visuals of the chart might decrease performance, for example the following options:

* `XAxisTitle`
* `YAxisTitle`
* `XAxisTickStroke`
* `YAxisTickStroke`
* `XAxisMajorStroke`
* `YAxisMajorStroke`
* `XAxisMinorStroke`
* `YAxisMinorStroke`
* `XAxisLabel`
* `YAxisLabel`
* `XAxisStroke`
* `YAxisStroke`
* `XAxisStrip`
* `YAxisStrip`
* `YAxisInterval`


<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Binding High Volume Data](financial-chart-high-volume.md)
* [Binding Real-Time Data](financial-chart-high-frequency.md)
* [Binding Multiple Data Sources](financial-chart-multiple-data.md)

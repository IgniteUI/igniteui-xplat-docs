---
title: $PlatformShort$ Financial Chart | High Volume Data | Infragistics
_description: Learn how to optimize the performance of the Infragistics' $PlatformShort$ financial chart control. Improve the $ProductName$graph's performance!
_keywords: $PlatformShort$ charts, financial chart, stock chart, performance, $ProductName$, Infragistics
mentionedTypes: ['XamFinancialChart']
---
# $PlatformShort$ Binding High Volume Data

The $PlatformShort$ financial chart component is capable of handling high volumes of data. The following demo binds 20 years of data, with 1 hour intervals and displays the stock prices using line chart type.

## $PlatformShort$ Binding High Volume Data Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-high-volume" alt="$PlatformShort$ Binding High Volume Data Example">
</code-view>

<div class="divider--half"></div>

There are several chart features and $PlatformShort$ specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

> [!NOTE]
> For Angular:
> When storing lots of data in properties in your components to bind against, you should make sure to set `changeDetection: ChangeDetectionStrategy.OnPush` in your `@Component` decorator. Setting this will tell $PlatformShort$ not to dig deeply into changes within your data array, something you don't want $PlatformShort$ doing every change detection cycle.

The following code demonstrates how to bind the financial chart to high volumes of data.

```ts
import { GenerateHourlyPricesService } from "../services/generate-hourly-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateHourlyPricesService) {
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

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Chart Performance](financial-chart-performance.md)
* [Binding Real-Time Data](financial-chart-high-frequency.md)
* [Binding Multiple Data Sources](financial-chart-multiple-data.md)



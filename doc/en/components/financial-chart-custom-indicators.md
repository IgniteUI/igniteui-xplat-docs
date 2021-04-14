---
title: $PlatformShort$ Financial Chart | Data Visualization Tools | Infragistics | Custom Indicators
_description: Use the financial chart component to visualize financial data using a simple API. View the demo, dependencies, usage and toolbar for more information.
_keywords: $PlatformShort$ charts, financial chart, $ProductName$, Infragistics
mentionedTypes: ['FinancialChart']
---
# $PlatformShort$ Custom Indicators

The $PlatformShort$ financial chart component allows you to define custom financial indicators to display in the Indicator Pane.

## $PlatformShort$ Custom Indicators Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-custom-indicators"
           alt="$PlatformShort$ Custom Indicators Example"
           github-src="charts/financial-chart/custom-indicators">
</code-view>

<div class="divider--half"></div>

In the $PlatformShort$ financial chart component, you can enable custom financial indicators by adding names for them to the `customIndicatorNames` property and performing calculations for them in the `applyCustomIndicators` event.

The following code example shows how to set up and calculate two custom indicators, one featuring the Simple Moving Average (SMA) and one displaying random values.

```html
 <igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    (applyCustomIndicators)="applyCustomIndicators($event)"
    customIndicatorNames="Open, Open (SMA)">
 </igx-financial-chart>
```

```ts
public applyCustomIndicators(event: { sender: any, args: IgxFinancialChartCustomIndicatorArgs }) {
    if (event.args.index === 0) {
        const info: IgxFinancialEventArgs = event.args.indicatorInfo;
        const ds = info.dataSource;
        const open = ds.openColumn;
        for (let i = 0; i < ds.indicatorColumn.length; i++) {
            ds.indicatorColumn[i] = open[i];
        }
    } else {
        const info: IgxFinancialEventArgs = event.args.indicatorInfo;
        const ds = info.dataSource;
        const close = ds.closeColumn;
        for (let i = 0; i < ds.indicatorColumn.length; i++) {
            let startIndex = i - 9;
            if (startIndex < 0) {
                startIndex = 0;
            }
            const count = (i - startIndex) + 1;

            let sum = 0;
            for (let j = startIndex; j <= i; j++) {
                sum += close[j];
            }
            ds.indicatorColumn[i] = sum / count;
        }
    }
}
```

```tsx
import { IgrFinancialEventArgs } from 'igniteui-react-charts';
import { IgrFinancialChartCustomIndicatorArgs } from 'igniteui-react-charts';

<IgrFinancialChart
    customIndicatorNames="Open, Open (SMA)"
    applyCustomIndicators={this.applyCustomIndicators}
    width="700px"
    height="500px"
    dataSource={this.state.data} />
```

```ts
public applyCustomIndicators(s: IgrFinancialChart, event: IgrFinancialChartCustomIndicatorArgs) {
    if (event.args.index === 0) {
        const info: IgrFinancialEventArgs = event.args.indicatorInfo;
        const ds = info.dataSource;
        const open = ds.openColumn;
        for (let i = 0; i < ds.indicatorColumn.length; i++) {
            ds.indicatorColumn[i] = open[i];
        }
    } else {
        const info: IgrFinancialEventArgs = event.args.indicatorInfo;
        const ds = info.dataSource;
        const close = ds.closeColumn;
        for (let i = 0; i < ds.indicatorColumn.length; i++) {
            let startIndex = i - 9;
            if (startIndex < 0) {
                startIndex = 0;
            }
            const count = (i - startIndex) + 1;

            let sum = 0;
            for (let j = startIndex; j <= i; j++) {
                sum += close[j];
            }
            ds.indicatorColumn[i] = sum / count;
        }
    }
}
```

```html
<igc-financial-chart id="chart" height="500px" width="90%"
    custom-indicator-names="Open, Open (SMA)">
</igc-financial-chart>
```

```ts
import { IgcFinancialEventArgs } from 'igniteui-webcomponents-charts';
import { IgcFinancialChartCustomIndicatorArgs } from 'igniteui-webcomponents-charts';

...

let chart = (document.getElementById("chart") as IgcFinancialChartComponent);
chart.dataSource = data;
chart.applyCustomIndicators = applyCustomIndicators;

function applyCustomIndicators(s: IgcFinancialChartComponent, e: IgcFinancialChartCustomIndicatorArgs ) {
    if (e.index === 0) {
        const info: IgcFinancialEventArgs = e.indicatorInfo;
        const ds = info.dataSource;
        const open = ds.openColumn;
        for (let i = 0; i < ds.indicatorColumn.length; i++) {
            ds.indicatorColumn[i] = open[i];
        }
    } else {
        const info: IgcFinancialEventArgs = e.indicatorInfo;
        const ds = info.dataSource;
        const close = ds.closeColumn;
        for (let i = 0; i < ds.indicatorColumn.length; i++) {
            let startIndex = i - 9;
            if (startIndex < 0) {
                startIndex = 0;
            }
            const count = (i - startIndex) + 1;

            let sum = 0;
            for (let j = startIndex; j <= i; j++) {
                sum += close[j];
            }
            ds.indicatorColumn[i] = sum / count;
        }
    }
}
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    ApplyCustomIndicatorsScript="onApplyCustomIndicators"/>

// In .JS file:
function onApplyCustomIndicators(chart, args) {

    if (args.Index === 0) {

        let info = args.IndicatorInfo;

        var ds = info.dataSource;

        let prices = ds.openColumn;
        let priceStart = ds.openColumn[0];
        let min = int.MaxValue;
        let max = int.MinValue;

        for (i = 0; i < ds.indicatorColumn.length; i++)
        {
            let priceChange = prices[i] - priceStart;
            let pricePercentage = (priceChange / priceStart) * 100;
            min = Math.Min(min, pricePercentage);
            max = Math.Max(max, pricePercentage);
            ds.indicatorColumn[i] = pricePercentage;
        }

        ds.minimumValue = min;
        ds.maximumValue = max;
    }
}

igRegisterScript("onApplyCustomIndicators", onApplyCustomIndicators, false);
```

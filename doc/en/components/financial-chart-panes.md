---
title: $PlatformShort$ Financial Chart | Panes | Infragistics
_description: Use Infragistics' $PlatformShort$ financial chart control's panes, such as price pane, indicator pane, volume pane and zoom pane, to display financial data. Check out $ProductName$ financial chart's panes!
_keywords: $PlatformShort$ charts, financial chart, stock chart, panes, $ProductName$, Infragistics
mentionedTypes: ['FinancialChart', 'FinancialChartYAxisMode']
---
# $PlatformShort$ Chart Panes

The $PlatformShort$ financial chart component has multiple panes to display financial data.

## Demo
<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-panes-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-panes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-panes-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/financial-chart/panes"></sample-button>

</div>

<div class="divider--half"></div>

The following panes are available in the $PlatformShort$ financial chart component:
* Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
* Indicator Pane - Renders all the financial indicators in a separate chart while the `BollingerBands` and `PriceChannel` overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
* Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
* Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

## Indicator Pane
Financial Indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed below the price pane because they do not share the same Y-Axis scale.

By default the indicator panes are not displayed. The toolbar allows the end user to select which indicator to display at run time.
In order to display an indicator pane initially, the `IndicatorTypes` property must be set to a least one type of indicator, as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    indicatorTypes="AverageTrueRange,ForceIndex" />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    indicator-types="AverageTrueRange,ForceIndex">
 </igc-financial-chart>
```

```razor
this.Chart.IndicatorTypes.Add(FinancialIndicatorType.AverageTrueRange);
this.Chart.IndicatorTypes.Add(FinancialIndicatorType.ForceIndex);
```

## Volume Pane
The volume pane represents the number of shares traded during a given period. Low volume would indicate little interest, while high volume would indicate high interest with a lot of trades.  This can be displayed using column, line or area chart types. The toolbar allows the end user to display the volume pane by selecting a chart type to render the data at runtime. In order the display the pane, a volume type must be set, as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    volumeType="Column" />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    volume-type="Column">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   VolumeType="FinancialChartVolumeType.Column" />
```

## Price Pane
This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to `Auto`. You can override the default setting, as demonstrated in the following code:

 ```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Line">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    chartType="Line" />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    chart-type="Line">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   ChartType="FinancialChartType.Line" />
```

Note that is recommended to use line chart type if plotting multiple data sources or if plotting data source with a lot of data points.

## Zoom Pane
This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the `ZoomSliderType` to `none` as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    zoomSliderType="none" />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    zoom-slider-type="none">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   ZoomSliderType="FinancialChartZoomSliderType.Line" />
```

Note that you should set the `ZoomSliderType` option to the same value as the `ChartType` option is set to. This way, the zoom slider will show correct preview of the price pane. The following code demonstrates how to do this:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Line"
    zoomSliderType="Line">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    chartType="Line"
    zoomSliderType="Line" />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    chart-type="Line"
    zoom-slider-type="Line">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   ChartType="FinancialChartType.Line"
   ZoomSliderType="FinancialChartZoomSliderType.Line" />
```

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Chart Performance](financial-chart-performance.md)

---
title: $PlatformShort$ Financial Chart | Configuration Options | Infragistics
_description: Learn how to use Infragistics' $PlatformShort$ financial chart control's features such as configuring navigation, price pane, overlays, indicators, volume panes, trendlines, titles, subtitles and legends.  View our $ProductName$ financial graph demos!
_keywords: $PlatformShort$ charts, financial chart, stock chart, trendlines, indicators, $ProductName$, Infragistics
mentionedTypes: ['FinancialChart', 'FinancialOverlayType']
---
# $PlatformShort$ Chart Trendlines

The $PlatformShort$ financial chart component provides many visuals that can be customized, such as the navigation behavior, trendline layers, overlays, legend, chart titles and subtitles.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/financial-chart/trendlines"></sample-button>

</div>

<div class="divider--half"></div>

## Configuring Navigation
In the $PlatformShort$ financial chart component, chart navigation is enabled by default. However, you can customize it by setting the following properties:

- `IsHorizontalZoomEnabled` - This specifies if the chart can be horizontally zoomed through user interactions. By default, this property is set to true.
- `IsVerticalZoomEnabled` - This specifies if the chart can be vertically zoomed through user interactions. By default, this property is set to false.
- `IsWindowSyncedToVisibleRange` - If set to true the Y-Axis will automatically resize to the visible data range. By default, this property is set to false.
- `WindowRect` - This is used to retrieve or specify the scroll and zoom state in the `FinancialChart` component. The `WindowRect` is expressed as a Rectangle with coordinates and sizes between 0 and 1.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="false">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="false">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   IsHorizontalZoomEnabled="true"
   IsVerticalZoomEnabled="true" />
```

## Configuring Price Pane
The price pane is always displayed in the Financial Chart and you can configure it by changing chart type and customizing appearance of its visuals. The following code demonstrates how to set the brushes and thickness of series in the price pane.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Candle"
    brushes="Green, Blue"
    outlines="Green, Blue"
    negativeBrushes="Red"
    negativeOutlines="Red"
    thickness="2">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    chartType="Candle"
    brushes="Green, Blue"
    outlines="Green, Blue"
    negativeBrushes="Red"
    negativeOutlines="Red"
    thickness={2} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    chart-type="Candle"
    brushes="Green, Blue"
    outlines="Green, Blue"
    negative-brushes="Red"
    negative-outlines="Red"
    thickness="2">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   ChartType="FinancialChartType.Candle"
   Brushes="Green, Blue"
   Outlines="Green, Blue"
   NegativeBrushes="Red"
   NegativeOutlines="Red"
   Thickness="2" />
```

## Configuring Overlays
By default overlays are not displayed on the $PlatformShort$ financial chart component. There are two types of overlays - `BollingerBands` and `PriceChannel`. You can also customize the default settings of the overlays. The following code demonstrates how to set the color, overlay outlines and thickness.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    overlayTypes="BollingerBands"
    overlayBrushes="Red"
    overlayOutlines="Green"
    overlayThickness="2">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    overlayTypes="BollingerBands"
    overlayBrushes="Red"
    overlayOutlines="Green"
    overlayThickness={2} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    overlay-types="BollingerBands"
    overlay-brushes="Red"
    overlay-outlines="Green"
    overlay-thickness="2">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   OverlayBrushes="Red"
   OverlayOutlines="Green"
   OverlayThickness="2" />

@code {
   protected override void OnInitialized()
   {
      this.Chart.OverlayTypes.Add(FinancialOverlayType.BollingerBands);
   }
}   
```

## Configuring Indicators
By default the indicator panes are not displayed in the financial chart. The toolbar allows the end user to select which indicator to display at run time. In order to display the pane, an indicator type must be set, as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex"
    indicatorBrushes="Green, Blue"
    indicatorNegativeBrushes="Red"
    indicatorDisplayTypes="Line"
    indicatorThickness="2">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    indicatorTypes="AverageTrueRange,ForceIndex"
    indicatorBrushes="Green, Blue"
    indicatorNegativeBrushes="Red"
    indicatorDisplayTypes="Line"
    indicatorThickness={2} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    indicator-types="AverageTrueRange,ForceIndex"
    indicator-brushes="Green, Blue"
    indicator-negative-brushes="Red"
    indicator-display-types="Line"
    indicator-thickness="2">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"                            
   IndicatorBrushes="Green, Blue"
   IndicatorNegativeBrushes="Red"                            
   IndicatorThickness="2" />

@code {
   protected override void OnInitialized()
   {
      this.Chart.IndicatorTypes.Add(FinancialIndicatorType.AverageTrueRange);
      this.Chart.IndicatorTypes.Add(FinancialIndicatorType.ForceIndex);

      this.Chart.IndicatorDisplayTypes.Add(IndicatorDisplayType.Line);
   }
}   
```

## Configuring Volume Pane
By default volume pane is not displayed in the financial chart component. However, you can enable this pane at runtime using chart toolbar or in programmatically as it is demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column"
    volumeBrushes="Green, Blue"
    volumeOutlines="White"
    volumeThickness="2">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    volumeType="Column"
    volumeBrushes="Green, Blue"
    volumeOutlines="White"
    volumeThickness={2} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    volume-type="Column"
    volume-brushes="Green, Blue"
    volume-outlines="White"
    volume-thickness="2">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   VolumeType="FinancialChartVolumeType.Column"
   VolumeBrushes="Green, Blue"
   VolumeOutlines="White"
   VolumeThickness="2" />
```

## Configuring Trendlines
By default trendlines are not displayed on the $PlatformShort$ financial chart component. When a trendline is displayed, it is the same trendline displayed on all chart panes. You can also customize the default settings of the trendline.

The following code demonstrates how to set the color and thickness of the trendline.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    trendLineType="QuinticFit"
    trendLineThickness="2"
    trendLineBrushes="Green, Blue">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    trendLineType="QuinticFit"
    trendLineBrushes="Green, Blue"
    trendLineThickness={2} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    trend-line-type="QuinticFit"
    trend-line-thickness="2"
    trend-line-brushes="Green, Blue">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   TrendLineType="TrendLineType.QuinticFit"
   TrendLineThickness="2"
   TrendLineBrushes="Green, Blue" />
```

## Configuring Titles
You can set title and subtitle that will be displayed between chart's toolbar and the price pane of the financial chart. The following code demonstrates how to set the title and subtitle.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartTitle="Stock Prices"
    subtitle="Between 2000 and 2015">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    chartTitle="Stock Prices"
    subtitle="Between 2000 and 2015" />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    chart-title="Stock Prices"
    subtitle="Between 2000 and 2015">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   ChartTitle="Stock Prices"
   Subtitle="Between 2000 and 2015"/>
```

## Configuring Legend
The legend is not displayed be default. The following code demonstrates how to enable the legend.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isLegendVisible="true">
 </igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    isLegendVisible={true} />
```

```html
 <igc-financial-chart id="chart"
    width="850px"
    height="600px"
    is-legend-visible="true">
 </igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
   Height="100%"
   DataSource="DataSource"
   IsLegendVisible="true"/>
```

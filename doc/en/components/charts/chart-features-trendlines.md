---
title: $PlatformShort$ Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Trendlines
_keywords: $PlatformShort$ Charts, Trendlines, Infragistics
mentionedTypes: []
---

# $PlatformShort$ Chart Trendlines

The $PlatformShort$ financial stock chart has support for trendlines, which help to identify a trend in data bound to a series.

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines" 
           alt="$PlatformShort$ Trendlines Example" 
           github-src="charts/financial-chart/trendlines">
</code-view>

<div class="divider--half"></div>

Trendlines in the $PlatformShort$ data chart component are not on by default. In order to set them, you can set the `TrendLineType` property on the corresponding series that you wish the trendline to show up on. You can modify multiple appearance properties of the trendline such as its brush, period, thickness, and dash array.

Trendlines are supported on all series except for stacked and range series. Below is a list of trendlines that can be used with the series of the data chart:

- `None`
- `CubicFit`
- `CumulativeAverage`
- `ExponentialAverage`
- `ExponentialFit`
- `LinearFit`
- `LogarithmicFit`
- `ModifiedAverage`
- `PowerLawFit`
- `QuadraticFit`
- `QuarticFit`
- `QuinticFit`
- `SimpleAverage`
- `WeightedAverage`

The following code snippet demonstrates how to add a trendline to a series in the $PlatformShort$ data chart component:

```razor
<FinancialChart 
    Width="100%"
    Height="100%"
    ChartType="FinancialChartType.Bar"
    Thickness=2
    DataSource="DataSource"
    TrendLineType="QuinticFit"
    TrendLineThickness=2
    TrendLinePeriod=10
    TrendLineBrushes="rgba(0, 101, 209, 1)"/>
```

```html
<igx-financial-chart 
    width="100%"
    height="100%"
    chartType="Bar"
    dataSource="[DataSource]"
    trendLineType="QuinticFit"
    trendLineThickness="2"
    trendLinePeriod="10"
    trendLineBrushes="Blue">
</igx-financial-chart>
```

```tsx
<IgrFinancialChart 
    Width="100%"
    Height="100%"
    ChartType="Bar"
    Thickness={2}
    DataSource="{this.DataSource}"
    TrendLineType="QuinticFit"
    TrendLineThickness={2}
    TrendLinePeriod={10}
    TrendLineBrushes="rgba(0, 101, 209, 1)"/>
```

```html
<igc-financial-chart 
    width="100%"
    height="100%"
    chart-type="Bar"
    thickness="2"
    datasource="{this.DataSource}"
    trend-line-type="QuinticFit"
    trend-line-thickness="2"
    trend-line-period="10"
    trend-line-brushes="rgba(0, 101, 209, 1)">
</igc-financial-chart>
```

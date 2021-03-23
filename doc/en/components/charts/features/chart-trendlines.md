---
title: $PlatformShort$ Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Chart Trendlines
_keywords: $PlatformShort$ Charts, Trendlines, Infragistics
mentionedTypes: ['XamFinancialChart', 'TrendLineType']
---

# $PlatformShort$ Chart Trendlines

In $PlatformShort$ charts, trendlines help identifying a trend or find patterns in data. Trendlines are always rendered in front of data points bound to the chart. They are supported by the `XamCategoryChart`, `XamFinancialChart`, and `XamDataChart` (except for stacked series, shape series, and range series).

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines"
           alt="$PlatformShort$ Trendlines Example"
           github-src="charts/financial-chart/trendlines">
</code-view>

<div class="divider--half"></div>

All $PlatformShort$ charts do not trendlines on by default. In order to enable them, you can set the `TrendLineType` property that you wish the trendline to show up on. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness. Below is a list of trendlines that can be used with the series of the data chart:

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
<FinancialChart Width="100%" Height="100%" DataSource="DataSource"
    TrendLineType="QuinticFit"
    TrendLineThickness=2
    TrendLinePeriod=10
    TrendLineBrushes="rgba(0, 101, 209, 1)"/>
```

```html
<igx-financial-chart width="100%" height="100%" dataSource="[DataSource]"
    trendLineType="QuinticFit"
    trendLineThickness="2"
    trendLinePeriod="10"
    trendLineBrushes="Blue">
</igx-financial-chart>
```

```tsx
<IgrFinancialChart Width="100%" Height="100%" DataSource="{this.DataSource}"
    TrendLineType="QuinticFit"
    TrendLineThickness={2}
    TrendLinePeriod={10}
    TrendLineBrushes="rgba(0, 101, 209, 1)"/>
```

```html
<igc-financial-chart  width="100%" height="100%" datasource="{this.DataSource}"
    trend-line-type="QuinticFit"
    trend-line-thickness="2"
    trend-line-period="10"
    trend-line-brushes="rgba(0, 101, 209, 1)">
</igc-financial-chart>
```

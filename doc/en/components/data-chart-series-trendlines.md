---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Trendline | Infragistics
_description: Use the trendlines of the Infragistics' $PlatformShort$ charts to identify a trend in data bound to a series. Check out the $ProductName$ graph's trendlines feature!
_keywords: $PlatformShort$ charts, data chart, trendlines, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'AreaSeries', 'BarSeries','ColumnSeries', 'PointSeries','SplineSeries','StepAreaSeries','WaterfallSeries']

---
# $PlatformShort$ Trendlines

The $PlatformShort$ data chart component has support for trendlines, which help to identify a trend in data bound to a series.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/data-chart/series-trendlines"></sample-button>

</div>

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
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />

    <FinancialPriceSeries
        XAxisName="xAxis"
        YAxisName="yAxis"
        TrendLineType="TrendLineType.CubicFit"
        LowMemberPath="Low"
        HighMemberPath="High"
        OpenMemberPath="Open"
        CloseMemberPath="Close"
        VolumeMemberPath="Volume" />
</DataChart>
```

```html
<igx-data-chart  [dataSource]="data"
    height="400px"
    width="100%">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-financial-price-series
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        highMemberPath="High"
        lowMemberPath="Low"
        closeMemberPath="Close"
        openMemberPath="Open"
        volumeMemberPath="Volume"
        trendLineType="CubicFit">
    </igx-financial-price-series>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px" >

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrFinancialPriceSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low"
        closeMemberPath="Close"
        openMemberPath="Open"
        volumeMemberPath="Volume"
        trendLineType="CubicFit" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-financial-price-series
        high-member-path="High"
        low-member-path="Low"
        close-member-path="Close"
        open-member-path="Open"
        volume-member-path="Volume"
        trend-line-type="CubicFit">
    </igc-financial-price-series>

</igc-data-chart>
```

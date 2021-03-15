---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Financial Area Indicators | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to display financial area indicators. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, financial area indicators, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
---
# $PlatformShort$ Financial Area Indicators

Financial indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed in a separate chart above or below of a chart with the `FinancialPriceSeries` because they do not share the same Y-Axis scale. However, the chart control supports plotting price series and indicators in the same plot area, if desired, using multiple axes and by sharing axes. For more information on this, please refer to the [Axis Sharing and Multiple Axes](data-chart-axis-sharing.md) topic.

## $PlatformShort$ Financial Area Indicators Example


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-area-indicators" 
           alt="$PlatformShort$ Financial Area Indicators Example" 
           github-src="charts/data-chart/type-financial-area-indicators">
</code-view>

<div class="divider--half"></div>


All financial indicators have a `DisplayType` property that determines if an indicator renders using a line, columns, or area. The sample above shows the area visualization.

The following lists all of the possible types of financial indicators:

- `AbsoluteVolumeOscillatorIndicator` (AVO) calculates the difference between two average volume measures. It is similar to the Percentage Volume Oscillator, but scores range from -100% to +100%. The indicator is used to identify whether volume trends are increasing or decreasing. The user can select the time period for analysis
- `AccumulationDistributionIndicator` (ADI) is a very popular volume related indicator. It evaluates the supply and demand of a stock, security, or index over time by looking at disparities in whether investors are selling or buying
- `AverageDirectionalIndexIndicator` |  (ADX) measures trend strength without regard to trend direction. This indicator is usually used to determine the strength and direction of the stock trends
- `AverageTrueRangeIndicator` |  is (ATR) measures a security’s degree of price movement or volatility within a given period of time. The indicator is not a measure of price direction or duration, but simply the amount of price movement or volatility. The Average True Range (ATR) is frequently calculated with a 14 day period using several bases, including: daily, weekly or monthly. The Average True Range is the exponential moving average of the TR values for the last 14 periods. The actual period used can vary depending on user preference
- `BollingerBandWidthIndicator` |  (BBW) is used with the `BollingerBandsOverlay`. This indicator represents the width of the Bollinger bands at a given point. The more variation there is, the wider the band. Narrowing bandwidth (lower values) indicates decreases in standard deviation and widening bandwidth (higher values) indicates increasing standard deviation in price. It supports a scaling factor like the `BollingerBandsOverlay`, so that their values can be matched
- `ChaikinVolatilityIndicator` (CHV) reflects the volatility of a security by showing the percent change of the Exponential Moving Average of the difference in high and low prices during a specified period of time.
- `ChaikinOscillatorIndicator` is (COI) used to identify trends in the accumulation/distribution indicator. The Chaikin Oscillator is the 10-day exponential moving average (EMA) of the accumulation/distribution indicator subtracted from the 3-day EMA of the accumulation/distribution indicator.
- `CommodityChannelIndexIndicator` (CCI) is used to identify cyclical trends in a security. The indicator is based on the assumption that securities prices change in cycles that can be identified. It is calculated by dividing difference of the Simple Moving Average (SMA) of the Typical Price (SMATP) during a given time period with the previous period’s Typical Price (TP) by the product of the Constant and the Mean Absolute Deviation.
- `DetrendedPriceOscillatorIndicator` (DPO) is designed to control for long-term pricing trends in order to identify short-term trends. It is based on a displaced moving average and is not a momentum oscillator.
- `EaseOfMovementIndicator` (EOM) is used to identify the volume needed to change the price of a security. It is usually smoothed with a moving average.
- `FastStochasticOscillatorIndicator` (FSO) displays the closing price relative to the high-low range over a given period of time. There are three types of Stochastic Oscillators: Fast, Slow, and Full. This indicator is a momentum indicator that shows the relation of the current close price relative to the high/low range over a given time period using a scale of 0 to 100. It is based on the premise that prices will close near 100 in a rising market and closer to 0 in a declining market. This indicator is used to identify buying or selling divergences.
- `ForceIndexIndicator` (FII) is a price-and-volume oscillator that financial analysts use to determine if a stock’s trend is positive or negative. The force index is calculated by subtracting yesterday’s closing price from today’s closing price and multiplying the difference with the current day’s volume. If the closing price is higher today than yesterday, the force is positive. If the closing price is lower than yesterday’s, the force is negative.
- `FullStochasticOscillatorIndicator` (FSO) displays the closing price relative to the high-low range over a given period of time. This indicator is similar to the `SlowStochasticOscillatorIndicator` but with time period customization.
- `MarketFacilitationIndexIndicator` (MFI) combines price and volume in analysis to measure efficiency. It is calculated by taking the difference between the low price and the high price and dividing it by the volume.
- `MassIndexIndicator` (MII) is used for finding trend reversals. It is based on the premise that reversals are likely to happen when the price range widens. The calculation compares the previous trading ranges (highs minus lows). EMAs are used for this purpose. This indicator increases if there is substantial movement or it decreases if there are small movements
- `MedianPriceIndicator` (MPI) represents the middle point between the high and low prices. Median is a measure of central tendency. This indicator displays a chart of the median.
- `MarketFacilitationIndexIndicator` (MFI) is a momentum indicator and is similar to the Relative Strength Index (RSI The MFI is used as a measure of the money flowing in and out of a security and can be used to predict a trend reversal. MFI ranges from 0 and 100 and is interpreted like the RSI.
- `MovingAverageConvergenceDivergenceIndicator` (MACD) is one of the most popular indicators for financial services. It is used to identify changes in the strength, direction, momentum, or length of a trend for a stock price. MACD is computed by taking the difference between two exponential moving averages (EMAs) of closing prices. The difference is then charted over time with a moving average of the difference.
- `NegativeVolumeIndexIndicator` (NVI) is frequently used in combination with the `PositiveVolumeIndexIndicator`. This indicator can be used to identify bull markets. These two indicators are based on the premise that smart money trades on low volume days and less informed or overly optimistic investors trade on high volume days.
- `OnBalanceVolumeIndicator` (OBV) calculates a running total of sales volume for a stock and displays whether this volume is flowing in (purchasing) or out (selling) of a given stock. The total volume for a day is given a positive or negative value depending on whether the prices were higher or lower that day than the previous day. A higher closing price would yield a positive value and a lower closing price would result in a negative value. These values are accumulated into the running total.
- `PercentagePriceOscillatorIndicator` (PPO) shows the difference between two moving averages. The difference is presented as a percentage of the larger moving average. The end user selects the time period for analysis.
- `PercentageVolumeOscillatorIndicator` (PVO) is the percentage difference between volume smoothed using a long period and a short period. This indicator hovers around zero. The user can select the various period values to analyze. This indicator changes, when graphically displayed, can be useful for detecting patterns in volume. An increasing PVO indicates increases in volume levels and a declining PVO indicates declining volume levels.
- `PositiveVolumeIndexIndicator` (PVI) is used together with the Negative Volume Index, it can be used to identify bull markets. These two indicators are based on the premise that smart money trades on low volume days and less informed or overly optimistic investors trade on high volume days.
- `PriceVolumeTrendIndicator` (PVT) is a momentum based indicator used to measure money flow by adding or subtracting a portion of the daily volume. This added or subtracted value depends on the amount of the current day’s price rising or falling compared to the previous day’s close. This indicator is primarily used to confirm trends, as well as spot possible trading signals due to divergences.
- `PriceVolumeTrendIndicator` (PVT) is a momentum based indicator used to measure money flow by adding or subtracting a portion of the daily volume. This added or subtracted value depends on the amount of the current day’s price rising or falling compared to the previous day’s close. This indicator is primarily used to confirm trends, as well as spot possible trading signals due to divergences.
- `RelativeStrengthIndexIndicator` (RSI) is a commonly used measure of market strength/weakness calculated on closing prices during a specified time period. It is based on the premise that prices close higher in strong market periods and lower in weak periods. RSI is the ratio of higher closes to lower closes. The range is 0 to 100.
- `SlowStochasticOscillatorIndicator` (SSO) displays the closing price relative to the high-low range over a given period of time. This indicator is used to identify buying or selling divergences and it uses a 3-day time period for Simple Moving Average (SMA).
- `StandardDeviationIndicator` (SDI) measures statistical variation in stock prices or volatility. The difference between an individual security’s closing price and the average security closing price is called the dispersion. The larger the dispersion is the higher the standard deviation will be and therefore the volatility. The smaller the dispersion is (the difference between an individual closing price and the average price), the smaller the standard deviation and the lower the price volatility.
- `StochRSIIndicator` (SRSI) measures when a security is overbought or oversold within a specified period of time. The values range from 0 to 1. This indicator is calculated by applying the Stochastic Oscillator formula to `RelativeStrengthIndexIndicator` (RSI) data.
- `TRIXIndicator` (TRIX) is a measure of momentum used to identify overbought or oversold securities. Like other oscillators, TRIX scores hover around zero. A positive value indicates an overbought security while a negative value indicates an oversold one. TRIX is calculated using a triple exponential smoothed moving average of the price over a specific period of time. A signal line is frequently used to indicate where a security’s price is likely to be in the future.
- `TypicalPriceIndicator` (TPI) is common financial pivot point that represents the arithmetic average of the High, Low, and Closing prices of a security for a given period of time.
- `UltimateOscillatorIndicator` (UOI) uses the weighted average from three different time periods in order to reduce the volatility and noise associated with other indicators that are based on single time periods. Since this is a range bound indicator, the scores are between 0 and 100.
- `WeightedCloseIndicator` (WCI) is similar to the `TypicalPriceIndicator` in that it represents an average of the high price, low price, and closing price for a day. However, this indicator has more emphasis on the closing price and it is included twice when calculating the arithmetic average.
- `WilliamsPercentRIndicator` (WPRI) is similar to the Stochastic Oscillator. However, the scale ranges from 0 to -100. It is useful for identifying overbought and oversold securities. This indicator is calculated by dividing the difference between the highest high for the period and the current close by the highest high minus the lowest low for the period.


## Required Axes

The $PlatformShort$ data chart component provides various types of axes but all financial series can only use the `NumericYAxis` as Y-Axis and `CategoryXAxis`, `OrdinalTimeXAxis`, or `TimeXAxis` as X-Axis.

## Required Data

Financial series, indicators, and overlays have the following data requirements:
- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the data chart will not render the financial series.
- All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the financial axis (e.g. `CategoryXAxis`)
- All data items must contain 5 numeric data column which should be mapped using properties of a financial series: `OpenMemberPath`, `HighMemberPath`, `LowMemberPath`, `CloseMemberPath`, `VolumeMemberPath`

You can use the [SampleFinancialData](data-chart-data-sources-financial.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleFinancialData.create();
```

## Required Modules

The financial series requires the following modules:

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartFinancialModule.Register(IgniteUIBlazor);
DataChartFinancialCoreModule.Register(IgniteUIBlazor);
DataChartFinancialIndicatorsModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
import { IgxMedianPriceIndicator } from 'igniteui-angular-charts';
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
import { IgrMedianPriceIndicator } from 'igniteui-react-charts';
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
import { IgcMedianPriceIndicatorModule } from 'igniteui-webcomponents-charts';
// series' components:
import { IgcFinancialPriceSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcBollingerBandsOverlayComponent } from 'igniteui-webcomponents-charts';
import { IgcMedianPriceIndicatorComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcFinancialPriceSeriesModule,
    IgcBollingerBandsOverlayModule,
    IgcMedianPriceIndicatorModule
);
```

## Code Example
This code demonstrates how to create an instance of data chart with a `MedianPriceIndicator`. Note these series use the same X-Axis and Y-Axis but you can use multiple axes and assign them to different series. Refer to the [Axis Sharing and Multiple Axes](data-chart-axis-sharing.md) topic for more info.

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" Label="Label" DataSource="@DataSource" />
    <NumericYAxis  Name="yAxis"
        LabelRightMargin="10" LabelExtent="50"
        LabelHorizontalAlignment="@HorizontalAlignment.Left"
        LabelLocation="@AxisLabelsLocation.OutsideRight" />
    <MedianPriceIndicator Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        DisplayType="IndicatorDisplayType.Area"
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

    <igx-median-price-indicator
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Area"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-median-price-indicator>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">

    <IgrCategoryXAxis name="xAxis" label="Date" />
    <IgrNumericYAxis  name="yAxis" />

    <IgrMedianPriceIndicator
    name="series1"
    xAxisName="xAxis"
    yAxisName="yAxis"
    displayType="Area"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </IgrDataChart>
```

```ts
const series1 = new IgrMedianPriceIndicator({ name: "series1" });
series1.lowMemberPath = "Low";
series1.highMemberPath = "High";
series1.openMemberPath = "Open";
series1.closeMemberPath = "High";
series1.volumeMemberPath = "Volume";
series1.displayType = "Area";
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

    <igc-median-price-indicator
        id="series3"
        display-type="Area"
        low-member-path="Low"
        high-member-path="High"
        open-member-path="Open"
        close-member-path="Close"
        volume-member-path="Volume">
    </igc-median-price-indicator>
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



---
title: $PlatformShort$ 株価チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 株価チャート
_keywords: $PlatformShort$ Charts, Stock Chart, Infragistics, $PlatformShort$ チャート, 株価チャート, インフラジスティックス
mentionedTypes: ["XamFinancialChart"]
_language: ja
---
# $PlatformShort$ 株価チャート

$PlatformShort$ 株価チャート ($PlatformShort$ ローソク足チャートと呼ばれることもあります) は、インタラクティブな時系列表示で株価ティッカー データまたは価格データを描画する複合視覚化です。株式ティッカーは、分析している会社のデータ (ティッカー シンボル、通常は 1〜5 文字) を表します。株価チャートは、時系列 X 軸の時間の経過に伴うティッカーの株価を示します。株価チャートには、各期間の始値、高値、安値、終値 (OHLC) などの企業のティッカー データの情報も表示されます。$PlatformShort$ 株価チャートは、価格とボリュームの表示モードや多数の株指標など、データを視覚化して解釈するための複数の方法を提供します。 

典型的な株価チャートは、価格帯のテクニカル分析に使用されるローソク足チャートのティッカー データで表されます。ローソク足チャートは、1 日の高値と安値を、ティッカー シンボルの始値と終値と比較します。

- ローソク足チャートの本文には、始値と終値 (O/C) が表示されます。
- ローソク足チャートには、始値と終値 (O/C) が表示されます。
- ティッカー値の上限と下限の間の距離は、ティッカー価格の日の範囲です。
- ローソク足チャートのティッカー値は、資産が開いたよりも高く閉じたときに中空になります。
- ローソク足チャートのティッカー値は、資産が開いたよりも低く閉じたときに塗りつぶされます。
- 黒または赤のローソク足は、前のローソク足の終値よりも低い終値の価格を表します。
- 白または緑のローソク足は、前のローソク足の終値よりも高い終値を表します。

株価チャートは、ユーザーがデータ分析機能を実行できるようにすることを目的としているため、次のようなインタラクティブな要素が含まれています:

- 時間ベースのフィルター
- 価格ペイン
- ボリューム ペイン
- インジケーター ペイン
- トレンドライン
- ナビゲーション/ズームバー ペイン

株価チャートは、次のいずれかを表示するように設定できます:

- ローソク足チャート
- 棒チャート
- 縦棒チャート
- 折れ線チャート 

データ構造:

- データ ソースはデータ項目の配列またはリストである必要があります。
- データ ソースに少なくとも 1 つのデータ項目を含む必要があります。
- すべてのデータ項目には、ティッカー データの日付を表す日時 (または文字列) 列が少なくとも 1 つ含まれている必要があります。
- すべてのデータ項目には、棒チャート、折れ線チャート、および縦棒チャートの 1 つの数値列が含まれている必要があります。
- すべてのデータ項目には、ローソク足チャートの始値、高値、安値、終値 (OHLC) の 4 つの数値列が含まれている必要があります。
- すべてのデータ項目には、ローソク足チャートの始値、高値、安値、終値、ボリュームの 5 つの数値列が含まれている必要があります。

## 複数シリーズの $PlatformShort$ 株価チャート


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data" 
           alt="$PlatformShort$ 株価指数チャート" >
</code-view>

<div class="divider--half"></div>

<div class="divider--half"></div>

## $PlatformShort$ 株価チャート

この例では、株価チャートは 1 年間の S&P 500を表しています。投資家に役立ち、テクニカル解析を実施し、将来の価格/レポートを予測します。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart" 
           alt="$PlatformShort$ 株価指数チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 株価チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えた株価チャートが必要な場合は、以下に示すように、厚さ、アウトライン、ブラシ、負のアウトライン、負のブラシを構成できます。この例では、株価チャートは Amazon、Microsoft、Tesla の収益を比較しています。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-styling" 
           alt="$PlatformShort$ 株価指数チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ チャートの注釈

The Crosshair Annotation Layer provides crossing lines that meet at the actual value of every targeted series. Crosshair types include: Horizontal, Vertical, and Both. The Crosshairs can also be configured to snap to data points by setting the `CrosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

The Callout Layer displays a callout at X/Y positions. 

Note: When using the ordinal X axis mode, the CalloutsXMemberPath should point to the numeric index of the item, otherwise CalloutsXMemberPath should point to the time value.

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-annotations" 
           alt="$PlatformShort$ チャートの注釈" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ チャートのペイン

The following panes are available:

- Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
- Indicator Pane - Renders all the financial indicators in a separate chart while the BollingerBands and PriceChannel overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
- Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
- Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

### Indicator Pane
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

### Volume Pane
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

### Price Pane
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

### Zoom Pane
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

この例では、株価チャートは米国の収益をプロットしています。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-panes" 
           alt="$PlatformShort$ チャートのペイン" >
</code-view>

<div class="divider--half"></div>

## その他のリソース
- [軸の注釈](data-chart-axis-annotations.md)
- [軸オプション](chart-features-axis-options.md)
- [軸グリッド線](chart-features-axis-gridlines.md)
- [チャート強調表示](chart-features-highlighting.md)

<!-- TODO list API links used in this topic 
## API メンバー
-->
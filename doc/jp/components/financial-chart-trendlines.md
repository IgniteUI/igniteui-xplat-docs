---
title: $PlatformShort$ ファイナンシャル チャート | 構成オプション | インフラジスティックス
_description: ナビゲーション、価格ペイン、オーバーレイ、インジケーター、ボリューム ペイン、トレンドライン、タイトル、サブタイトル、凡例の設定など、インフラジスティックスの $PlatformShort$ ファイナンシャル チャート コントロールの機能の使用方法をについて説明します。$ProductName$ ファイナンシャル グラフのサンプルを是非お試しください!
_keywords: $PlatformShort$ charts, financial chart, stock chart, trendlines, indicators, $ProductName$, Infragistics, $PlatformShort$ チャート, ファイナンシャル チャート, 株価チャート, ドレンドライン, インジケーター, インフラジスティックス
mentionedTypes: ['FinancialChart', 'FinancialOverlayType']
_language: ja
---
# $PlatformShort$ 近似曲線

$PlatformShort$ Financial Chart コンポーネントで、ナビゲーション動作、トレンドライン レイヤー、オーバーレイ、凡例、チャート タイトル、チャート サブタイトルなどのカスタマイズ可能なビジュアルがあります。

## $PlatformShort$ 近似曲線例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Financial Chart コンポーネントで、ナビゲーション動作、トレンドライン レイヤー、オーバーレイ、凡例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/financial-chart/trendlines"></sample-button>

</div>

<div class="divider--half"></div>

## ナビゲーションの構成
$PlatformShort$ Financial Chart コンポーネントでは、チャート ナビゲーションがデフォルトで有効になっています。ただし、以下のプロパティを設定することによって、カスタマイズできます。

- `IsHorizontalZoomEnabled` - チャートがユーザー操作により水平方向にズーム可能かどうかを指定します。デフォルトでこのプロパティは true に設定されます。
- `IsVerticalZoomEnabled` - チャートがユーザー操作により垂直方向にズーム可能かどうかを指定します。デフォルトでこのプロパティは false に設定されます。
- `IsWindowSyncedToVisibleRange` - true に設定される場合、Y 軸は表示データ範囲に自動的にサイズ変更します。デフォルトでこのプロパティは false に設定されます。
- `WindowRect` - `FinancialChart` のスクロール状態およびズーム状態を取得または設定するために使用できます。`WindowRect` は、 0 ~ 1 の間の座標およびサイズの Rectangle として表現されます。

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

## 価格ペインの構成
価格ペインは常に Financial Chart で表示されます。チャート タイプを変更、またはビジュアルの外観をカスタマイズして構成します。以下のコードは価格ペインでシリーズのブラシおよび太さを設定します。

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

## オーバーレイの構成
オーバーレイはデフォルトで $PlatformShort$ Financial Chart に表示されません。オーバーレイには、`BollingerBands` および `PriceChannel` の 2 種類があります。オーバーレイのデフォルト設定をカスタマイズできます。以下のコードはオーバーレイの色、アウトライン、および太さを設定します。

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
   ChartType="FinancialChartType.Candle"
   Brushes="Green, Blue"
   Outlines="Green, Blue"
   NegativeBrushes="Red"
   NegativeOutlines="Red"
   Thickness="2" />
```

## インジケーターの構成
デフォルトでインジケーター ペインは Financial Chart に表示されません。ツールバーを使用してランタイムに表示するインジケーターを選択できます。ペインを表示するには、以下のコードのようにインジケーター タイプを設定する必要があります。

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

## ボリューム ペインの構成
デフォルトでボリューム ペインは Financial Chart に表示されません。ただし、チャート ツールバーを使用してランタイムにこのペインを有効にするか、以下のコードのようにコードで有効にできます。

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

## トレンドラインの構成
トレンドラインはデフォルトでは $PlatformShort$ Financial Chart に表示されません。トレンドラインが表示される場合、同じトレンドラインがすべてのチャート ペインに表示されます。トレンドラインのデフォルト設定をカスタマイズできます。

以下のコードはトレンドラインの色および太さを設定します。

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

## タイトルの構成
チャート ツールバーおよび Financial Chart の価格ペインの間に表示されるタイトルおよびサブタイトルを設定できます。以下のコード例は、タイトルとサブタイトルを設定する方法を紹介します。

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

## 凡例の構成
凡例はデフォルトで表示されません。以下のコードは、凡例を有効する方法を示します。

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
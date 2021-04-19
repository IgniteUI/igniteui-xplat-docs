---
title: $Platform$ ファイナンシャル チャート | ペイン | インフラジスティックス
_description: インフラジスティックスの $Platform$ ファイナンシャル チャート コントロールのペイン (価格ペイン、インジケーター ペイン、ボリューム ペイン、ズーム ペインなど) を使用して、財務データを表示します。$ProductName$ ファイナンシャル チャートのペインを是非お試しください。
_keywords: $Platform$ charts, financial chart, stock chart, panes, $ProductName$, Infragistics, $Platform$ チャート, ファイナンシャル チャート, 株価チャート, ペイン, インフラジスティックス
mentionedTypes: ['FinancialChart', 'FinancialChartYAxisMode']
_language: ja
---
# $Platform$ チャート ペイン

$Platform$ Financial Chart コンポネントには財務データを表示する複数のペインがあります。

## $Platform$ チャート ペインの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-panes"
           alt="$Platform$ チャート ペインの例"
           github-src="charts/financial-chart/panes">
</code-view>

<div class="divider--half"></div>

以下のペインが $Platform$ Financial Chart コンポネントで利用できます。
* 価格ペイン - 折れ線、ローソク足、棒 (OHLC)、トレンドライン、および財務オーバーレイを使用して価格を描画します。
* インジケーター ペイン - すべての財務指標を別のチャートに描画し、`BollingerBands` および `PriceChannel` オーバーレイが Y 軸と同じ値範囲を使用するために価格ペインに描画されます。
* ボリューム ペイン - 縦棒、折れ線、およびエリアのチャート タイプを使用して出来高を上記のペインの下に描画します。
* ズーム ペイン - すべてのペインのズームを制御します。常にチャートの下側に描画されます。

## インジケーター ペイン
財務指標は、株価の動きの計測やトレンドを確認するためにトレーダーによって使用されます。これらのインジケーターは、同じ Y 軸を共有しないため価格ペインの下に表示されます。

デフォルトでインジケーター ペインは表示されません。ユーザーは、ツールバーを使用してランタイムで表示するインジケーターを選択できます。
初期でインジケーター ペインを表示するには、以下のコードのように `IndicatorTypes` プロパティをインジケーターのタイプを 1 つ以上に設定する必要があります。

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

## ボリューム ペイン
ボリューム ペインは指定した期間に取引された株式数を表します。出来高の低さは関心が低いことを示し、出来高の多さは取引が多く、関心が高いことを示します。縦棒、折れ線、またはエリア チャート タイプを使用して表示できます。ツールバーでチャート タイプを選択すると、ランタイムにデータを表示するボリューム ペインが表示されます。ペインを表示するには、以下のコードのようにボリューム タイプを設定する必要があります。

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

## 価格ペイン
このペインは、在庫価格を表示し、経時的な在庫の高値、安値、始値、終値を示します。さらに、トレンドラインおよびオーバーレイを表示できます。ツールバーからチャート タイプを選択できます。デフォルトで、チャート タイプは `Auto` に設定されています。次のコードに示すように、デフォルト設定をオーバーライドできます。

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

注: 複数のデータ ソースまたはデータ ポイントが大量にあるデータ ソースを描画する場合、折れ線チャート タイプを使用してください。

## ズーム ペイン
このペインはすべての表示されるペインのズームを制御します。このペインはデフォルトで表示されます。以下のコードのように `ZoomSliderType` を `none` に設定すると機能を無効にできます。

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

注: `ZoomSliderType` オプションを `ChartType` オプションと同じ値に設定してください。このように、ズーム スライダーは価格ペインの正しいプレビューを表示します。以下のコードはその方法を示しています。

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

### その他のリソース
<div class="divider--half"></div>

* [チャートのパフォーマンス](financial-chart-performance.md)

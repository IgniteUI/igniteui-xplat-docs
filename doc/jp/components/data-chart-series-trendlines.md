---
title: $PlatformShort$ データ チャート | データ可視化ツール | トレンドライン | インフラジスティックス
_description: インフラジスティックスの $Platform Short$ チャートのトレンドラインを使用して、シリーズにバインドされたデータのトレンドを識別します。$ProductName$ グラフのトレンドライン機能をお試しください!
_keywords: $PlatformShort$ charts, data chart, trendlines, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, トレンドライン, インフラジスティックス
mentionedTypes: ['XamDataChart', 'AreaSeries', 'BarSeries','ColumnSeries', 'PointSeries','SplineSeries','StepAreaSeries','WaterfallSeries']
_language: ja
---
# $PlatformShort$ トレンドライン

$PlatformShort$ データ チャート コンポーネントは、シリーズにバインドされたデータの傾向を識別するのに役立つトレンドラインをサポートしています。

## $PlatformShort$ トレンドラインの例


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-trendlines" alt="$PlatformShort$ トレンドラインの例">
</code-view>


<div class="divider--half"></div>

$PlatformShort$ データ チャート コンポーネントでは、チャート ナビゲーションがデフォルトで無効になっています。それらを設定するために、トレンドラインを表示したい対応するシリーズに `TrendLineType` プロパティを設定できます。ブラシ、ピリオド、太さ、破線の配列など、トレンドラインの複数の外観プロパティを変更できます。

近似曲線は、積層シリーズとエリア シリーズを除くすべてのシリーズでサポートされています。以下は、一連のチャートで使用できるトレンドラインのリストです。

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

以下のコード スニペットは、$PlatformShort$ データ チャート コンポネントのシリーズに近似曲線を追加する方法を示しています。

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

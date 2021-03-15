---
title: $PlatformShort$ データ チャート | データ可視化ツール | 軸共有 | インフラジスティックス
_description: インフラジスティックスの $Platform Short$ チャート コントロールにより、複数の軸を同じプロット エリアに表示できます。複数の軸を持つ $ProductName$ グラフを作成します!
_keywords: $PlatformShort$ charts, data chart, axis sharing, $ProductName$, Infragistics, multiple axes, $PlatformShort$ チャート, データ チャート, 軸共有, インフラジスティックス, 複数軸
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
_language: ja
---
# $PlatformShort$ 軸共有と複数軸

 $PlatformShort$ データ チャート コンポーネントの同じプロット領域に複数の軸を共有して追加できます。すべての軸に対して、チャートプロット領域に関連して位置を指定できます。広範囲の値 (株価や株取引量など) を持つ多くのデータソースをプロットする場合は、複数の軸を使用するのが一般的なシナリオです。

## $PlatformShort$ 軸共有と複数軸の例


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing" 
           alt="$PlatformShort$ 軸共有と複数軸の例" 
           github-src="charts/data-chart/axis-sharing">
</code-view>

<div class="divider--half"></div>


## コード例
このコードは、2 つのシリーズ間で共有される 2 つの `NumericYAxis` と 1 つの `CategoryXAxis` で $ProductName$ データ チャートを作成する方法を示します。

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="sharedXAxis"
        Label="Date"/>
    <NumericYAxis Name="rightYAxis>
        LabelLocation="AxisLabelsLocation.OutsideRight" />
    <NumericYAxis Name="leftYAxis>
        LabelLocation="AxisLabelsLocation.OutsideLeft" />
    <FinancialPriceSeries Name=" series1"
        XAxisName="sharedXAxis"
        YAxisName="rightYAxis"
        DisplayType="PriceDisplayType.Candlestick"
        LowMemberPath="Low"
        HighMemberPath="High"
        OpenMemberPath="Open"
        CloseMemberPath="Close"
        VolumeMemberPath="Volume" />
    <MoneyFlowIndexIndicator Name=" series1"
        XAxisName="sharedXAxis"
        YAxisName="leftYAxis"
        DisplayType="IndicatorDisplayType.Column"
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

    <igx-category-x-axis name="sharedXAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="rightYAxis" labelLocation="OutsideRight"></igx-numeric-y-axis>
    <igx-numeric-y-axis  name="leftYAxis" labelLocation="OutsideLeft"></igx-numeric-y-axis>

    <igx-financial-price-series
    name="series2"
    xAxisName="sharedXAxis"
    yAxisName="rightYAxis"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-money-flow-index-indicator
    name="series3"
    xAxisName="sharedXAxis"
    yAxisName="leftYAxis"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-money-flow-index-indicator>

 </igx-data-chart>
```

```tsx
 <IgrDataChart >

    {/* axes */}
    <IgrCategoryXAxis name="sharedXAxis" label="Date"/>
    <IgrNumericYAxis  name="rightYAxis" labelLocation="OutsideRight" />
    <IgrNumericYAxis  name="leftYAxis" labelLocation="OutsideLeft" />

    {/* series */}
    <IgrFinancialPriceSeries
    name="series2"
    xAxisName="sharedXAxis"
    yAxisName="rightYAxis"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

    <IgrMoneyFlowIndexIndicator
    name="series3"
    xAxisName="sharedXAxis"
    yAxisName="leftYAxis"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </IgrDataChart>
```

```ts
const rightYAxis = new IgrNumericYAxis({ name: "rightYAxis" });
rightYAxis.labelLocation = "OutsideRight";
const leftYAxis = new IgrNumericYAxis({ name: "leftYAxis" });
leftYAxis.labelLocation = "OutsideLeft";
const sharedXAxis = new IgrCategoryXAxis({ name: "sharedXAxis" });
sharedXAxis.label = "Date";

const series1 = new IgrFinancialPriceSeries({ name: "series1" });
series1.lowMemberPath = "Low";
series1.highMemberPath = "High";
series1.openMemberPath = "Open";
series1.closeMemberPath = "High";
series1.volumeMemberPath = "Volume";
series1.xAxisName = "sharedXAxis";
series1.yAxisName = "rightYAxis";

const series2 = new IgrMoneyFlowIndexIndicator({ name: "series2" });
series2.lowMemberPath = "Low";
series2.highMemberPath = "High";
series2.openMemberPath = "Open";
series2.closeMemberPath = "High";
series2.volumeMemberPath = "Volume";
series2.xAxisName = "sharedXAxis";
series2.yAxisName = "leftYAxis";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleFinancialData.create();
this.chart.axes.add(leftYAxis);
this.chart.axes.add(rightYAxis);
this.chart.axes.add(sharedXAxis);
this.chart.series.add(series1);
this.chart.series.add(series2);
```

```html
<igc-data-chart id="chart"
    width="700px"
    height="500px">

    <igc-category-x-axis id="xAxis" label="Date">
    </igc-category-x-axis>
    <igc-numeric-y-axis id="yAxisLeft" label-location="OutsideLeft"
      minimum-value="0" maximum-value="300" major-stroke-thickness="0">
    </igc-numeric-y-axis>
    <igc-numeric-y-axis id="yAxisRight" label-location="OutsideRight"
      minimum-value="400" maximum-value="700">
    </igc-numeric-y-axis>

    <igc-financial-price-series id="series1"
      display-type="Candlestick"
      high-member-path="High"
      low-member-path="Low"
      close-member-path="Close"
      open-member-path="Open"
      volume-member-path="Volume">
    </igc-financial-price-series>

    <igc-money-flow-index-indicator id="series2"
      display-type="Area"
      high-member-path="High"
      low-member-path="Low"
      close-member-path="Close"
      open-member-path="Open"
      volume-member-path="Volume">
    </igc-money-flow-index-indicator>
  </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxisLeft = (document.getElementById("yAxisLeft") as IgcNumericYAxisComponent);
let yAxisRight = (document.getElementById("yAxisRight") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcFinancialPriceSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxisRight;

let series2 = (document.getElementById("series2") as IgcMoneyFlowIndexIndicatorComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxisLeft;
```

### その他のリソース

- [軸タイプ](data-chart-axis-types.md)
- [シリーズ タイプ](data-chart-series-types.md)




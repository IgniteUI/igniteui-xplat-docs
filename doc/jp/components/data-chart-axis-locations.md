---
title: $PlatformShort$ データ チャート | データ可視化ツール | 軸位置 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用すると、チャート プロット エリアに関連して軸の位置を指定できます。2 つの軸を持つ $ProductName$ グラフを作成します!
_keywords: $PlatformShort$ charts, data chart, axis locations, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 軸位置, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ 軸の位置

 すべての軸に対して、チャートのプロット領域に関連して軸の位置を指定できます。これは、同じデータ チャートで 2 つ以上の軸を使用する場合、または複数のシリーズ間で[軸を共有する](data-chart-axis-sharing.md)場合に特に重要です。


## $PlatformShort$ 軸の位置の例

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-locations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 軸の位置の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/axis-locations"></sample-button>

</div>

<div class="divider--half"></div>


## コード例
このコードは、左右に配置される 2 つの `NumericYAxis` と、互いに積み重ねられる 2 つの `CategoryXAxis` を使用してデータ チャートを作成する方法を示します。

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxisYears" 
        Interval="12" 
        Label="Year" 
        LabelLocation="AxisLabelsLocation.OutsideBottom"
        Overlap="1"
        Gap="0.4"
        DataSource="@DataSource" />
    <CategoryXAxis Name="xAxisMonths"
        Interval="1"
        Label="Month"
        LabelLocation="AxisLabelsLocation.OutsideBottom"
        Overlap="1"
        Gap="0.4"
        DataSource="@DataSource" />
    <NumericYAxis Name="yAxisLeft"
        Title="Expanse | Revenue"
        MinimumValue="-900"
        MaximumValue="900"
        Interval="300"
        LabelLocation="AxisLabelsLocation.OutsideBottom" />
    <NumericYAxis Name="yAxisRight"
        Title="Profit (%)"
        MinimumValue="0"
        MaximumValue="100"
        LabelLocation="AxisLabelsLocation.OutsideRight" />
    <ColumnSeries name="series1"
        ValueMemberPath="Revenue"
        XAxisName="xAxisMonths"
        YAxisName="yAxisLeft" />
    <ColumnSeries name="series3"
        ValueMemberPath="Expanse"
        XAxisName="xAxisMonths"
        YAxisName="yAxisLeft" />
    <ColumnSeries name="series2"
        ValueMemberPath="Profit"
        XAxisName="xAxisYears"
        YAxisName="yAxisRight" />
</DataChart> 
```

```html
   <igx-data-chart
            [dataSource]="dataSource"
            width="700px"
            height="500px">

            <igx-category-x-axis name="xAxisYears"
            interval="12" labelLocation="OutsideBottom"
            label="Year"  overlap="1" gap="0.4"  >
            </igx-category-x-axis>
            <igx-category-x-axis name="xAxisMonths"
            interval="1"  labelLocation="OutsideBottom"
            label="Month" overlap="1" gap="0.4" >
            </igx-category-x-axis>

            <igx-numeric-y-axis  name="yAxisLeft"
            title="Expanse | Revenue"
            minimumValue="-900" labelLocation="OutsideLeft"
            maximumValue="900"
            interval="300" >
            </igx-numeric-y-axis>
            <igx-numeric-y-axis  name="yAxisRight"
            title="Profit (%)"
            minimumValue="0"  labelLocation="OutsideRight"
            maximumValue="100" >
            </igx-numeric-y-axis>
            <igx-column-series name="series1"
            valueMemberPath="Revenue"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series3"
            valueMemberPath="Expanse"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series2"
            valueMemberPath="Profit"
            xAxisName="xAxisYears"
            yAxisName="yAxisRight" >
            </igx-column-series>
         </igx-data-chart>
```

```tsx
 <IgrDataChart dataSource={this.data}>
    {/* axes */}
    <IgrCategoryXAxis name="xAxisYears"
    interval={12} labelLocation="OutsideBottom"
    label="Year"  overlap={1} gap={0.4}  />
    <IgrCategoryXAxis name="xAxisMonths"
    interval={1}  labelLocation="OutsideBottom"
    label="Month" overlap={1} gap={0.4}/>
    <IgrNumericYAxis  name="yAxisLeft"
    title="Expanse | Revenue"
    minimumValue={-900} labelLocation="OutsideLeft"
    maximumValue={900}
    interval={300} />
    <IgrNumericYAxis  name="yAxisRight"
    title="Profit (%)"
    minimumValue={0}  labelLocation="OutsideRight"
    maximumValue={100} />
    {/* series */}
    <IgrColumnSeries name="series1"
    valueMemberPath="Revenue"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <IgrColumnSeries name="series3"
    valueMemberPath="Expanse"
    xAxisName="xAxisMonths"
    yAxisName="yAxisLeft" />
    <IgrColumnSeries name="series2"
    valueMemberPath="Profit"
    xAxisName="xAxisYears"
    yAxisName="yAxisRight" />
 </IgrDataChart>
```



### その他のリソース

- [軸タイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [シリーズ タイプ](data-chart-series-types.md)




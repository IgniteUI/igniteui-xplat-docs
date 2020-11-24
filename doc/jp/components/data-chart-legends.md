---
title: $PlatformShort$ データ チャート | データ可視化ツール | 凡例 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールの凡例は、プロットされたデータに関連するコンテキスト情報を表示します。$ProductName$ グラフ凡例をお試しください!
_keywords: $PlatformShort$ charts, data chart, legend, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 凡例, インフラジスティックス
mentionedTypes: ['XamDataChart', 'Infragistics.Controls.Charts.Legend']
_language: ja
---
# $PlatformShort$ 凡例

凡例は、エンドユーザーが $PlatformShort$ データ チャート コンポネントにプロットされたデータに関連するコンテキスト情報を使用してデータ チャートシリーズの表示を識別するのに役立ちます。プロットエリアに表示されるデータを理解しやすくするために、ほとんどのデータ チャートには凡例が少なくとも 1 つ必要ですが、必須ではなく、データ チャートはデフォルトで凡例なしで表示できます。

## $PlatformShort$ 凡例例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-legends-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-legends' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ データ チャート | データ可視化ツール | 凡例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-legends-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/legends"></sample-button>

</div>

<div class="divider--half"></div>

## 凡例概要

デフォルトでは、$PlatformShort$ データ チャート コンポネントはデータ チャート内のどのシリーズの凡例も表示しません。複数のシリーズに共通の凡例を表示したい場合は、凡例 オブジェクトをアプリケーションに追加してから、それをデータ チャートの Legend プロパティに設定する必要があります。

さらに、各シリーズオブジェクトの `Title` プロパティを設定しない場合、凡例にデフォルトのシリーズ タイトルが使用されます。

次のコード スニペットは、$PlatformShort$ データ チャート コンポネントで凡例を使用する方法を示しています。

```razor
<div class="igContainer">
    <div class="igOptions-horizontal">
        <span class="igLegend-title">Legend: </span>
        <div class="igLegend">
            <Legend @ref="LegendRef" Orientation="LegendOrientation.Horizontal" />
        </div>
    </div>
<div class="igComponent">
    <DataChart Height="500px" Legend="@LegendRef" Width="700px" ChartTitle>
        <CategoryXAxis Name="xAxis" Label="Country" DataSource="@data"/>
        <NumericYAxis Name="yAxis" MinimumValue="0" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Coal"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Hydro"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Nuclear"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Gas"
            DataSource="@data" />
        <ColumnSeries
            Name="series1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ValueMemberPath="Oil"
            DataSource="@data" />
    </DataChart>
</div>
```

```html
<div>
  <igx-legend #legend></igx-legend>
</div>
<div>
  <igx-data-chart chartTitle="Energy Use Per Country" subtitle="Results over a two year period" height="600px" width="100%"
    [dataSource]="data" [legend]="legend">

    <igx-category-x-axis #xAxis name="xAxis" label="Country"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis name="yAxis" minimumValue=0></igx-numeric-y-axis>

    <igx-column-series name="series1" title="Coal" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Coal"></igx-column-series>
    <igx-column-series name="series2" title="Hydro" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Hydro"></igx-column-series>
    <igx-column-series name="series3" title="Nuclear" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Nuclear"></igx-column-series>
    <igx-column-series name="series4" title="Gas" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Gas"></igx-column-series>
    <igx-column-series name="series5" title="Oil" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Oil"></igx-column-series>
  </igx-data-chart>
</div>
```

```ts
@ViewChild("legend")
public legend : IgxLegendComponent;
```

```tsx
public render() {
    return (
        <div>
            <div>
                <IgrLegend ref={this.onLegendRef}
                    orientation="Horizontal" />
            </div>
            <IgrDataChart dataSource={this.data} ref={this.onChartRef} width="100%" height="400px">
                <IgrCategoryXAxis name="xAxis" label="Country" />
                <IgrNumericYAxis name="yAxis" minimumValue={0}  />

                <IgrColumnSeries name="series1" title="Coal" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Coal" />
                <IgrColumnSeries name="series2" title="Hydro" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Hydro" />
                <IgrColumnSeries name="series3" title="Nuclear" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Nuclear" />
                <IgrColumnSeries name="series4" title="Gas" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Gas" />
                <IgrColumnSeries name="series5" title="Oil" xAxisName="xAxis"
                    yAxisName="yAxis" valueMemberPath="Oil" />
            </IgrDataChart>
        </div>
    );
}
```

```ts
public onChartRef(chart: IgrDataChart) {
    this.chart = chart;
    if (this.legend) {
        this.chart.legend = this.legend;
    }
}

public onLegendRef(legend: IgrLegend) {
    this.legend = legend;
    if (this.chart) {
        this.chart.legend = this.legend;
    }
}
```

```html
<div>
  <igc-legend id="legend" orientation="horizontal">
  </igc-legend>
</div>
<div>
  <igc-data-chart id="chart" height="500px" width="700px" >

    <igc-category-x-axis id="xAxis" label="Country"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis" min-value="0" abbreviate-large-numbers="true"></igc-numeric-y-axis>

    <igc-column-series id="series1" title=" Coal" value-member-path="Coal"></igc-column-series>
    <igc-column-series id="series2" title=" Hydro" value-member-path="Hydro"></igc-column-series>
    <igc-column-series id="series3" title=" Nuclear" value-member-path="Nuclear"></igc-column-series>
    <igc-column-series id="series4" title=" Gas" value-member-path="Gas"></igc-column-series>
    <igc-column-series id="series5" title=" Oil" value-member-path="Oil"></igc-column-series>
  </igc-data-chart>
</div>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let legend = (document.getElementById("legend") as IgcLegendComponent);
chart.legend = legend;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let series2 = (document.getElementById("series2") as IgcColumnSeriesComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxis;

let series3 = (document.getElementById("series3") as IgcColumnSeriesComponent);
series3.xAxis = xAxis;
series3.yAxis = yAxis;

let series4 = (document.getElementById("series4") as IgcColumnSeriesComponent);
series4.xAxis = xAxis;
series4.yAxis = yAxis;

let series5 = (document.getElementById("series5") as IgcColumnSeriesComponent);
series5.xAxis = xAxis;
series5.yAxis = yAxis;
```
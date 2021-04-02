---
title: $PlatformShort$  データ チャート | データ可視化ツール | 値オーバーレイ | インフラジスティックス
_description: $ProductName$ チャート コントロールの値オーバーレイ機能を使用して、単一の数値に水平線または垂直線を配置します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, value overlay, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 値オーバーレイ, インフラジスティックス
mentionedTypes: ["XamDataChart", "ColumnSeries", "ValueOverlay"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# $PlatformShort$ 値オーバーレイ チャート

$ProductName$ データ チャートを使用すると、`ValueOverlay` を使用して定義した単一の数値で水平線または垂直線を配置できます。特定のシリーズの平均値や中央値などのデータを視覚化するのに役立ちます。

## $PlatformShort$ 値オーバーレイの例

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay"
           alt="$PlatformShort$ 値オーバーレイの例"
           github-src="charts/data-chart/series-value-overlay">
</code-view>

<div class="divider--half"></div>

データ バインディングに `DataSource` を使用する他のシリーズタイプとは異なり、値オーバーレイは `ValueMemberPath` プロパティを使用して単一の数値をバインドします。値オーバーレイでは、使用する単一の軸を定義する必要があります。X 軸を使用する場合、値のオーバーレイは垂直線になり、Y 軸を使用する場合は、水平線になります

数値の X 軸またはY軸を使用する場合、`ValueMemberPath` プロパティは、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。数値の X 軸または Y 軸を使用する場合、`ValueMemberPath` は、値オーバーレイを表示するカテゴリのインデックスを反映する必要があります。

数値オーバーレイを角度角軸で使用すると、チャートの中心からの線として表示され、半径半径軸を使用すると、円として表示されます。

`ValueOverlay` 外観プロパティは、`Series` から継承されているため、例えば `Brush` と `Thickness` を使用でき、他のタイプのシリーズと同じように機能します。

`ValueOverlay` に軸注釈を表示して、所有する軸にオーバーレイの値を表示することもできます。これを示すために、`IsAxisAnnotationEnabled` プロパティを true に設定できます。

## コード例

以下のコード スニペットは、$ProductName$ データ チャートに値オーバーレイを追加する方法を示しています:

```html
<igx-data-chart #chart height="600px" width="800px" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Label"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Value"></igx-column-series>

  <igx-value-overlay [axis]="yAxis" value=5 thickness=5 isAxisAnnotationEnabled=true></igx-value-overlay>

</igx-data-chart>
```

```tsx
<IgrDataChart height="600px"
    width="800px"
    dataSource={this.data} >
    <IgrCategoryXAxis name="xAxis" label="Label" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Value" />
    <IgrValueOverlay name="overlay1" axisName="yAxis" value={5} thickness={5} isAxisAnnotationEnabled={true} />
</IgrDataChart>
```

```html
<igc-data-chart id="chart" height="600px" width="800px">
  <igc-category-x-axis id="xAxis" label="Label"></igc-category-x-axis>
  <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

  <igc-column-series id="series1" value-member-path="Value"></igc-column-series>

  <igc-value-overlay id="valueOverlay" value="5" thickness="5" is-axis-annotation-enabled=true></igc-value-overlay>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let valueOverlay = (document.getElementById("valueOverlay") as IgcValueOverlayComponent);
valueOverlay.axis = yAxis;
```

```razor
<DataChart Height="100%" Width="100%" >
    <CategoryXAxis Name="xAxis" DataSource="DataSource" Label="Label" />
    <NumericYAxis Name="yAxis" MinimumValue="0" MaximumValue="10" />

    <ColumnSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="DataSource" ValueMemberPath="Value" />

    <ValueOverlay AxisName="yAxis" Value="5.0" Thickness="5" IsAxisAnnotationEnabled="true" />
</DataChart>
```

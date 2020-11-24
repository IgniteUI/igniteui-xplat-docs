---
title: $PlatformShort$ データ チャート | データ可視化ツール | 軸注釈 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用すると、十字線レイヤー、最終値レイヤー、値オーバーレイなどの $PlatformShort$ チャート軸に注釈を追加できます。$ProductName$ で $PlatformShort$ チャートと視覚化を改善します!
_keywords: $PlatformShort$ charts, data chart, axis annotations, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 軸注釈, インフラジスティックス
mentionedTypes: ['XamDataChart','LineSeries','ValueOverlay','CrosshairLayer']
_language: ja
---
# $PlatformShort$ 軸の注釈

$ProductName$ データチャート コンポーネントでは、軸に注釈を追加して、その軸上のさまざまな点に特定の値を表示することができます。これによって最終的なシリーズ値、オーバーレイ値、チャート内の十字線に対応する値などを可視化するのに役立ちます。

## $PlatformShort$ 軸の注釈の例

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 軸の注釈の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/axis-annotations"></sample-button>

</div>

<div class="divider--half"></div>

以下は、$ProductName$ データチャートで軸の注釈をサポートするシリーズとレイヤーです。

- `CrosshairLayer`
- `FinalValueLayer`
- `ValueOverlay`

軸の注釈を有効にするには、対応するレイヤーまたはオーバーレイの IsAxisAnnotationEnabled プロパティを true に設定します。これにより、対応する所有軸または軸上に特定のオーバーレイまたはレイヤーのある現在のポイントで表す値を持つボックスを配置します。たとえば、CrosshairLayer を使用すると、これらの注釈は X 軸と Y 軸の両方に表示され、プロット領域のスクロールに従って変化します。

`IsAxisAnnotationEnabled` プロパティは `FinalValueLayer` には存在しません。このレイヤーはそれ自体が軸の注釈であり、軸上の注釈以外の視覚タイプは他にありません。

背景、値の精度、アウトライン、パディング、ストローク (アウトライン) の太さ、およびテキストの色で軸の注釈をカスタマイズできます。これらは、`AxisAnnotationBackground`、`AxisAnnotationInterpolatedValuePrecision`、`AxisAnnotationOutline`、軸注釈パディング (`AxisAnnotationPaddingBottom`、`AxisAnnotationPaddingLeft`、`AxisAnnotationPaddingRight`、`AxisAnnotationPaddingTop`) を使用して設定できます。

それぞれ `AxisAnnotationStrokeThickness` プロパティと `AxisAnnotationTextColor` プロパティがあり、これらのプロパティに加えて、`ValueOverlay` 軸注釈の表示を完全にカスタマイズできる `AxisAnnotationFormatLabel` イベントもあります。

`CrosshairLayer` には、X 軸と Y 軸の両方に注釈を表示する機能があります。これらは個別にカスタマイズできるため、上記の各プロパティは存在しますが、名前の前に xAxis または yAxis  があります。たとえば、`XAxisAnnotationBackground` または `YAxisAnnotationTextColor` です。さらに、`XAxisAnnotationFormatLabel` および `YAxisAnnotationFormatLabel` イベントを使用して、`CrosshairLayer` 軸の注釈に表示されるコンテンツを完全にカスタマイズできます。

## コード例
このコードは、各レイヤーとそれに対して有効になっている軸注釈を使用したオーバーレイを使用して $ProductName$ データチャートを作成する方法を示します。ここでは、`FinalValueLayer` も黄色のテキスト色になるようにカスタマイズされています。

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" Label="label" DataSource="@data" />
    <NumericYAxis Name="yAxis" />
    <ColumnSeries XAxisName="xAxis"
        YAxisName="yAxis"
        ValueMemberPath="Pop1995"
        DataSource="@DataSource" />
    <ValueOverlay AxisName="yAxis"
        IsAxisAnnotationEnabled="true"
        Thickness="3"
        Value="85" />
    <CrosshairLayer IsAxisAnnotationEnabled="true" />
    <FinalValueLayer AxisAnnotationTextColor="yellow" />
</DataChart> 
```

```html
<igx-data-chart [dataSource]="data" width="100%" height="500px">
    <igx-category-x-axis #xAxis label="label"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="value"></igx-column-series>

    <igx-value-overlay [axis]="yAxis" isAxisAnnotationEnabled=true thickness=3 value=85></igx-value-overlay>

    <igx-crosshair-layer isAxisAnnotationEnabled=true></igx-crosshair-layer>

    <igx-final-value-layer axisAnnotationTextColor="Yellow"></igx-final-value-layer>
</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data} width="100%" height="500px">
    <IgrCategoryXAxis name="xAxis" label="label" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="value" />

    <IgrValueOverlay name="overlay" axisName="yAxis" value={85} thickness={3} isAxisAnnotationEnabled={true} />

    <IgrCrosshairLayer name="crosshair" isAxisAnnotationEnabled={true} />

    <IgrFinalValueLayer name="finalValue" axisAnnotationTextColor="Yellow" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart" width="700px" height="500px">
    <igc-category-x-axis id="xAxis" interval="1" label="month">
    </igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis">
    </igc-numeric-y-axis>

    <igc-column-series id="series1"
      value-member-path="temperature">
    </igc-column-series>

    <igc-value-overlay id="valueOverlay"
      is-axis-annotation-enabled="true"
      thickness="3" value="85" brush="Green">
    </igc-value-overlay>

    <igc-crosshair-layer is-axis-annotation-enabled="true">
    </igc-crosshair-layer>

    <igc-final-value-layer axis-annotation-text-color="Yellow">
    </igc-final-value-layer>
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

### その他のリソース

- [データ チャート シリーズ注釈](data-chart-series-annotations.md)
- [値オーバーレイ](data-chart-value-overlay.md)




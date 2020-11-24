---
title: $PlatformShort$ データ チャート | データ可視化ツール | 散布等高線チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して散布等高線チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, scatter contour charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 散布等高線チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','ScatterContourSeries']
_language: ja
---
# $PlatformShort$ 散布図 - 等高線シリーズ

このトピックは、コード例を示して $PlatformShort$ データ チャート コンポーネントで `ScatterContourSeries` を使用する方法を説明します。このシリーズ
各ポイントに数値が割り当てられた X および Y データの三角測量に基づいて色付きの等高線を描画します。このシリーズのタイプはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。`ScatterContourSeries` は `ScatterAreaSeries` とよく似ていますが、塗りつぶしスケールを使用して色付けされた等高線としてデータを表し、散布エリア シリーズはカラースケールを使用して補間された面としてデータを表します。


## $PlatformShort$ 散布図 - 等高線シリーズ例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-contour-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-contour-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-contour-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-scatter-contour-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントにはさまざまな種類の軸がありますが、ScatterContourSeries では `NumericYAxis` と `NumericYAxis` のみ使用できます。

## データの要件

 `ScatterContourSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
- すべてのデータ項目には、`XMemberPath`、`YMemberPath`、`ValueMemberPath` プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SampleScatterData](data-chart-data-sources-scatter.md) を使用できます。

```ts
public dataSource: any[] = SampleScatterData.create();
```

## モジュールの要件

散布等高線シリーズを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataChartCoreModule        
* DataChartScatterCoreModule
* DataChartScatterModule   
* DataChartInteractivityModule
* ScatterContourSeriesModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterContourSeries } from 'igniteui-angular-charts';
import { IgxValueBrushScale } from 'igniteui-angular-charts';
import { IgxLinearContourValueResolver } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterContourSeries } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrLinearContourValueResolver } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcScatterContourSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleModule } from 'igniteui-webcomponents-charts';
import { IgcLinearContourValueResolverModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterContourSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcLinearContourValueResolverComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterContourSeriesModule,
    IgcValueBrushScaleModule,
    IgcLinearContourValueResolverModule
);
```

## コード例
このコードは、`ScatterContourSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ScatterContourSeries Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        DataSource="@DataSource"
        XMemberPath="X"
        YMemberPath="Y"
        ColorMemberPath="Z" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-contour-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-contour-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />
    {/* series: */}
    <IgrScatterContourSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="X"
     yMemberPath="Y"
     colorMemberPath="Z" />
 </IgrDataChart>
```

```ts
const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

const series1 = new IgrScatterContourSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "X";
series1.yMemberPath = "Y";
series1.colorMemberPath = "Z";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleShapeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis id="xAxis"></igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>
    <igc-scatter-contour-series
        id="series1"
        x-member-path="X"
        y-member-path="Y"
        color-member-path="Z">
    </igc-scatter-contour-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterContourSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## 等高線の塗りつぶしスケール

` ScatterContourSeries` の `FillScale` プロパティを使用して等高線の塗りブラシを解決します。

提供されている `ValueBrushScale` クラスはほとんどの色付けのニーズを満たすはずですが、このクラスから継承して独自の色付けのロジックを指定することができます。以下の表は `ScatterContourSeries` の面のカラーリングに影響する `ValueBrushScale` プロパティをリストします。

- `Brushes` は、輪郭を塗りつぶすためのブラシのコレクションを設定します。
- `MaximumValue` は、ブラシを割り当てるための最大値を設定します。指定した値がこの値より大きい場合は透明になります。
- `MinimumValue` は、ブラシを割り当てるための最小値を設定します。指定した値がこの値より小さい場合は透明になります。


```ts
const scale = new IgrValueBrushScale({});
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.brushes = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];
const series1 = new IgrScatterContourSeries({ name: "series1" });
series1.fillMemberPath = "Z";
series1.fillScale = scale;
```

```ts
const scale = new IgcValueBrushScaleComponent();
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.brushes = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

let series1 = (document.getElementById("series1") as IgcScatterContourSeriesComponent);
series1.fillScale = scale;
```

## 等高線値リゾルバー

`ScatterContourSeries` は、`ValueMemberPath` プロパティにマップされた項目の最小値と最大値の間を等間隔でちょうど 10 本の等高線を使用して描画します。これより多くの等高線が必要な場合、またはこれより少ない等高線が必要な場合、等高線の数を持つ `LinearContourValueResolver` を `ScatterContourSeries` の `ValueResolver` プロパティに割り当てることができます。

以下のコードは、`ScatterContourSeries` の等高線の数を構成する方法を示します。

```ts
const contours = new IgrLinearContourValueResolver({});
contours.valueCount = 15;
const series1 = new ScatterContourSeries({ name: "series1" });
series1.valueResolver = contours;
```

```ts
const contours = new IgcLinearContourValueResolverComponent();
contours.valueCount = 15;

let series1 = (document.getElementById("series1") as IgcScatterContourSeriesComponent);
series1.valueResolver = contours;
```


### その他のリソース

- [軸のタイプ](data-chart-axis-types.md)
- [チャート凡例](data-chart-legends.md)
- [シリーズ タイプ](data-chart-series-types.md)


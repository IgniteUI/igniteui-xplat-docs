---
title: $PlatformShort$ データ チャート | データ可視化ツール | 散布エリア チャート | データ バインディング | インフラジスティックス
_description: Infragistics $ProductName$ は散布エリア シリーズを提供します。$ProductName$ 散布エリア シリーズについて説明します。
_keywords: $PlatformShort$ charts, data chart, scatter area charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 散布図エリア チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','ScatterAreaSeries','ScatterContourSeries']
_language: ja
---
# $PlatformShort$ 散布図 - エリア シリーズ

このトピックは、コード例を示して $PlatformShort$ データ チャート コンポーネントで `ScatterAreaSeries` を使用する方法を説明します。このシリーズは、各ポイントに数値が割り当てられた X および Y データの三角測量に基づいて色付きの表面を描画します。このシリーズのタイプはヒート マップ、磁場の強さ、またはオフィスの Wi-Fi の強さを描画する場合などに便利です。`ScatterAreaSeries` は `ScatterContourSeries` と同様ですが、同じ値を持つデータポイントを接続する等線の置換に補完で色つきサーフェス エリアとしてデータを表します。

## $PlatformShort$ 散布図 - エリア シリーズの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-area-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 散布図 - エリア シリーズの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-area-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-scatter-area-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントにはさまざまな種類の軸がありますが、`ScatterAreaSeries` では `NumericYAxis` と `NumericYAxis` のみ使用できます。

## データの要件

`ScatterAreaSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
- すべてのデータ項目には、` XMemberPath `、` YMemberPath `、そして `ColorMemberPath` プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SamplePolarData](data-chart-data-sources-scatter.md) を使用できます。

```ts
public dataSource: any[] = SampleScatterData.create();
```

## モジュールの要件

散布エリア シリーズを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataChartCoreModule        
* DataChartScatterCoreModule
* DataChartScatterModule       
* DataChartInteractivityModule
* ScatterAreaSeriesModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterAreaSeries } from 'igniteui-angular-charts';
import { IgxCustomPaletteColorScale } from 'igniteui-angular-charts';
import { ColorScaleInterpolationMode } from 'igniteui-angular-charts';
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
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
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
import { IgcScatterAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteColorScaleModule } from 'igniteui-webcomponents-charts';
import { ColorScaleInterpolationMode } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteColorScaleComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterAreaSeriesModule,
    IgcCustomPaletteColorScaleModule
);
```

## コード例
このコードは、`ScatterAreaSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="750px">
        <NumericXAxis Name="xAxis" />
        <NumericYAxis Name="yAxis" />
        <ScatterAreaSeries Name="series1"
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
    <igx-scatter-area-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-area-series>
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
    <IgrScatterAreaSeries
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

const series1 = new IgrScatterAreaSeries({ name: "series1" });
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
    <igc-scatter-area-series
        id="series1"
        x-member-path="X"
        y-member-path="Y"
        color-member-path="Z">
    </igc-scatter-area-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcScatterAreaSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## カラー スケール

` ScatterAreaSeries` の `ColorScale` プロパティを使用して、ポイントの値を解決し、シリーズの面を塗りつぶします。色は、ピクセル単位の三角ラスタライザーを三角測量データに適用することによって、サーフェスの図形の周りをなめらかに補間します。サーフェスの描画がピクセル単位であるため、カラー スケールはブラシではなく色を使用します。

提供されている `CustomPaletteColorScale` クラスはほとんどの色付けのニーズを満たすはずですが、`ColorScale` 抽象クラスから継承して独自の色付けのロジックを指定することができます。

以下の表は `ScatterAreaSeries` の面のカラ―リングに影響する `CustomPaletteColorScale` プロパティをリストします。

- `Palette` は、選択する、または補間する色のコレクションを設定します。
- `InterpolationMode` は、パレットから色を取得するメソッドを設定します。
- `MaximumValue` は、色を割り当てるための最大値を設定します。指定した値がこの値より大きい場合は透明になります。
- `MinimumValue` は、色を割り当てるための最小値を設定します。指定した値がこの値より小さい場合は透明になります。


```ts
const scale = new IgrCustomPaletteColorScale({});
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.interpolationMode = ColorScaleInterpolationMode.Interpolate;
scale.palette = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

const series1 = new IgrScatterAreaSeries({ name: "series1" });
series1.colorMemberPath = "Z";
series1.colorScale = scale;
```

```ts
const scale = new IgcCustomPaletteColorScaleComponent();
scale.minimumValue = -2;
scale.maximumValue = 2;
scale.interpolationMode = ColorScaleInterpolationMode.InterpolateRGB;
scale.palette = [
    "#8670CB", "#513E8C", "#003F5E",
    "#0C6B99", "#4AC4FF", "#B5CC2E",
    "#FFD034", "#FC8612", "#ED4840"
];

let series1 = (document.getElementById("series1") as IgcScatterAreaSeriesComponent);
series1.colorScale = scale;
```

### その他のリソース

- [軸タイプ](data-chart-axis-types.md)
- [チャートの凡例](data-chart-legends.md)
- [シリーズ タイプ](data-chart-series-types.md)


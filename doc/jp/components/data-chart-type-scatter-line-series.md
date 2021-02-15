---
title: $PlatformShort$ データ チャート | データ可視化ツール | 散布 折れ線チャート | データ バインディング | インフラジスティックス
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, $ProductName$, Infragistics, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart', 'ScatterLineSeries']
_language: ja
---
# $PlatformShort$ 散布折れ線チャート

$ProductName$ 散布折れ線チャートは、デカルト (x, y) 座標系を使用してデータをプロットする散布図のグループに属します。このシリーズは、直線で接続されたマーカーのコレクションとしてレンダリングされ、各マーカーにはデカルト座標系での位置を決定する X/Y の数値のペアがあります。

`ScatterLineSeries` は、不均等な間隔またはデータのクラスターに注意を促します。予測結果の収集データの標準偏差を強調表示し、科学データや統計データをプロットするためによく使用されます。`ScatterLineSeries` は、データを時系列に整理して X 軸と Y 軸にプロットします (バインド前にデータが時系列に並んでいなくても)。

## $PlatformShort$ 散布折れ線チャートの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-line-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-line-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 散布折れ線チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-line-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-scatter-line-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件

$PlatformShort$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、`ScatterLineSeries` で使用できるのは以下のタイプの軸のみです。

- `NumericXAxis`
- `NumericYAxis`

## データの要件

`ScatterLineSeries` には以下のデータ要件があります。

- データソースはデータ項目の配列またはリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
- すべてのデータ項目には、`XMemberPath` と `YMemberPath`  プロパティにマップされる 2 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SampleScatterStats](data-chart-data-sources-stats.md) を使用できます。

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## モジュールの要件

`ScatterLineSeries` を作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartScatterCoreModule.Register(IgniteUIBlazor);
DataChartScatterModule.Register(IgniteUIBlazor);      
DataChartInteractivityModule.Register(IgniteUIBlazor);
ScatterLineSeriesModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterLineSeries } from 'igniteui-angular-charts';
import { MarkerType } from 'igniteui-angular-charts';
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
import { IgrScatterLineSeries } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
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
import { IgcScatterLineSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterLineSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcScatterAreaSeriesModule,
    IgcScatterLineSeriesModule
);
```

## コード例
このコードは、`ScatterLineSeries` を使用して $ProductName$ データ チャートのインスタンスを作成し、それをデータ ソースにバインドする方法を示します。

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ScatterLineSeries Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        DataSource="@DataSource"
        XMemberPath="Population"
        YMemberPath="GdpTotal" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>
    <igx-scatter-line-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal">
    </igx-scatter-line-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" isLogarithmic="true"/>
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    {/* series: */}
    <IgrScatterLineSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="Population"
     yMemberPath="GdpTotal" />
 </IgrDataChart>
```

```ts
const series1 = new IgrScatterLineSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "Population";
series1.yMemberPath = "GdpTotal";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleShapeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart" width="100%" height="100%">

    <igc-numeric-x-axis name="xAxis"
        is-logarithmic="true">
    </igc-numeric-x-axis>
    <igc-numeric-y-axis name="yAxis"
        is-logarithmic="true">
    </igc-numeric-y-axis>

    <igc-scatter-line-series id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        x-member-path="Population"
        y-member-path="GdpTotal">
    </igc-scatter-line-series>

</igc-data-chart>
```

```ts
this.chart = document.getElementById("chart") as IgcDataChartComponent;
this.chart.dataSource = data;
```

## シリーズの外観

[マーカー](data-chart-series-markers.md) プロパティを使用してマーカーの外観をカスタマイズできます。マーカーごとに `Brush` と `Thickness` のビジュアルを変更することもできます。以下のこのコード スニペットは、これらのプロパティの使用方法を示しています。

```html
<igx-scatter-line-series
 name="series1"
 brush="Purple"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2">
</igx-scatter-line-series>
```

```tsx
<IgrScatterLineSeries
 name="series1"
 brush="Purple"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness={2} />
```

```ts
const series1 = new IgxScatterLineSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Purple";
series1.thickness = 2;
```

```ts
const series1 = new IgrScatterLineSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Purple";
series1.thickness = 2;
```

```html
<igc-scatter-line-series
 name="series1"
 brush="Purple"
 marker-type="Square"
 marker-brush="White"
 marker-outline="Blue"
 thickness="2">
</igc-scatter-line-series>
```

### その他のリソース

- [軸のタイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャート凡例](data-chart-legends.md)
- [シリーズ マーカー](data-chart-series-markers.md)
- [シリーズのツールチップ](data-chart-series-tooltips.md)
- [シリーズ トレンドライン](data-chart-series-trendlines.md)
- [シリーズ タイプ](data-chart-series-types.md)

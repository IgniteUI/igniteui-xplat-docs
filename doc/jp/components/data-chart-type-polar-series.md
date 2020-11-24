---
title: $PlatformShort$ データ チャート | データ可視化ツール | 極座標散布チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して、極座標散布図、極座標折れ線、極座標エリアなどの極座標チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, polar charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 極座標チャート, インフラジスティックス
mentionedTypes: ['XamDataChart', 'PolarLineSeries']
_language: ja
---
# $PlatformShort$ 極座標シリーズ

このトピックは、$PlatformShort$ データ チャート コンポーネントの極座標 シリーズのさまざまなタイプについて説明します。極座標シリーズは、デカルト（x、y）座標系の代わりに極座標（角度、半径）座標シリーズを使用してチャートにデータをプロットする一連のシリーズです。つまり、極座標シリーズは[散布シリーズ](data-chart-type-scatter-point-series.md) の概念を使用して、水平線に沿って伸びるのではなく円の周りを囲みます。このシリーズのグループは、極座標系を使用して複数の異なるデータのシリーズ内の項目間の関係を示すために使用されます。

極座標シリーズでは、データの不均等な散らばりやデータの塊に注意が向けられます。これらは科学的なデータ (風の方向と速度、磁場の強さと方向、太陽系内の物体の位置など) をプロットするためによく使用され、予測結果と収集データの偏差を強調することができます。

<!-- Angular, React, WebComponents -->
## $PlatformShort$ 極座標シリーズ例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-polar-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-polar-series"></sample-button>

</div>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## 極座標シリーズのタイプ
データチャートは、以下のタイプの極座標シリーズをサポートしています。

| シリーズ名|説明   |
|--------------|---------------|
| `PolarAreaSeries`|極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合で囲まれ、塗りつぶされた多角形を表示します  |
| `PolarSplineAreaSeries`|極座標（角度/半径）座標にあるデータ ポイントを結ぶ滑らかな/補間された線の集合で囲まれ、塗りつぶされた多角形を表示します  |
| `PolarSplineSeries`|極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ滑らかな/補間された集合を表示します。  |
| `PolarScatterSeries`|極座標 (角度/半径) 座標にあるデータ ポイントを表すマーカーの集合を表示します。  |
| `PolarLineSeries`|極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合を表示します。  |


## 軸の要件
`XamDataChart` コントロールは、さまざまな軸タイプを提供しますが、極座標シリーズの特定のタイプでは以下の軸タイプのみ使用できます。

| シリーズ タイプ             |半径軸タイプ    |角度軸タイプ    |
|-------------------------|---------------------|--------------------|
| `PolarAreaSeries`       |`NumericRadiusAxis`|`NumericAngleAxis` |
| `PolarSplineAreaSeries`|`NumericRadiusAxis`|`NumericAngleAxis` |
| `PolarSplineSeries`     |`NumericRadiusAxis`|`NumericAngleAxis` |
| `PolarScatterSeries`    |`NumericRadiusAxis`|`NumericAngleAxis` |
| `PolarLineSeries`       |`NumericRadiusAxis`|`NumericAngleAxis` |

## データの要件

極座標シリーズには、以下のデータ要件があります。
- データソースはデータ項目の配列やリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートは極座標シリーズを描画しません。
- すべてのデータ項目には、極座標シリーズの `AngleMemberPath` および `RadiusMemberPath` プロパティを使用してマッピングする必要がある少なくとも2つの数値データ列 (`PolarAreaSeries` など）を含める必要があります。

極座標シリーズのデータポイントの位置は、「極」と呼ばれる、固定方向からの角度 (角度座標) と固定点 (デカルト座標の原点に類似) からの距離 (半径座標) によって決まります。極から始まり外側に向かう線は、角度軸のグリッド線 (` NumericAngleAxis `)、極を囲む同心円は半径軸のグリッド線 (` NumericRadiusAxis `) です。

上記データ要件を満たすデータソースとして [SamplePolarData](data-chart-data-sources-polar.md) を使用できます。

```ts
public dataSource: any[] = SamplePolarData.create();
```
## モジュールの要件

極座標シリーズを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataChartCoreModule        
* DataChartPolarModule
* DataChartPolarCoreModule      
* DataChartInteractivityModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxPolarAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarLineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineSeries } from 'igniteui-angular-charts';
import { IgxPolarSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxPolarScatterSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartPolarCoreModule,
        IgxDataChartPolarModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrNumericAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrPolarAreaSeries } from 'igniteui-react-charts';
import { IgrPolarLineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineAreaSeries } from 'igniteui-react-charts';
import { IgrPolarScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartPolarCoreModule.register();
IgrDataChartPolarModule.register();
```

```ts
// Module Manager:
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericAngleAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericAngleAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcPolarAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPolarScatterSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcPolarAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPolarScatterSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartPolarCoreModule,
    IgcDataChartPolarModule,
    IgcPolarAreaSeriesModule,
    IgcPolarLineSeriesModule,
    IgcPolarSplineSeriesModule,
    IgcPolarSplineAreaSeriesModule,
    IgcPolarScatterSeriesModule
);
```

## コード例
このコードは、`PolarLineSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="750px">
        <NumericAngleAxis Name="angleAxis" StartAngleOffset="-90" />
        <NumericRadiusAxis Name="radiusAxis" />
        <PolarLineSeries Name="series1"
            DataSource="@DataSource"
            AngleAxisName="angleAxis"
            AngleMemberPath="Direction"
            RadiusAxisName="radiusAxis"
            RadiusMemberPath="WindSpeed" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-line-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-line-series>
 </igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrNumericAngleAxis  name="angleAxis" startAngleOffset={-90} />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrPolarLineSeries
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrPolarLineSeries({ name: "series1" });
series1.angleMemberPath = "Direction";
series1.radiusMemberPath  = "WindSpeed";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrNumericAngleAxis({ name: "angleAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(radiusAxis);
this.chart.axes.add(angleAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-angle-axis  id="angleAxis" start-angle-offset="-90"></igc-numeric-angle-axis>
    <igc-numeric-radius-axis id="radiusAxis"></igc-numeric-radius-axis>
    <igc-polar-line-series
        id="series1"
        angle-member-path="Direction"
        radius-member-path="WindSpeed">
    </igc-polar-line-series>
</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let angleAxis = (document.getElementById("angleAxis") as IgcNumericAngleAxisComponent);
let radiusAxis = (document.getElementById("radiusAxis") as IgcNumericRadiusAxisComponent);

let series1 = (document.getElementById("series1") as IgcPolarLineSeriesComponent);
series1.angleAxis = angleAxis;
series1.radiusAxis = radiusAxis;
```

上記のコードを使って `PolarLineSeries` をレンダリングしたい極座標シリーズの名前で置き換えて他のタイプの極座標 シリーズを作成することもできます。

### その他のリソース

- [軸タイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャートの凡例](data-chart-legends.md)
- [シリーズのマーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)


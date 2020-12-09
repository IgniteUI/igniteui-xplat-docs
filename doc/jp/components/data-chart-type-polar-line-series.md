---
title: $PlatformShort$ データ チャート | データ可視化ツール | 極座標折れ線チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して極座標折れ線チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, polar line charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 極座標折れ線チャート, インフラジスティックス
mentionedTypes: ['XamDataChart', 'PolarLineSeries']
_language: ja
---
# $PlatformShort$ 極座標折れ線チャート

$ProductName$ 極座標エリア チャートは、極座標チャートのグループに属し、データ ポイントを接続する直線のコレクションを使用して描画されます。`PolarLineSeries` は `ScatterLineSeries` と同じデータ プロットの概念を使用していますが、横の線に沿って伸びるのではなく、円の周りでデータ ポイントをラップします。他のシリーズ タイプと同じように、複数の `PolarLineSeries` は同じデータ チャートにプロットでき、データセットの相違点を示すために互いにオーバーレイできます。

## $PlatformShort$ 極座標折れ線チャートの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-line-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 極座標折れ線チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-polar-line-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-polar-line-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、`PolarLineSeries` で使用できるのは以下のタイプの軸のみです。

- `NumericRadiusAxis`
- `NumericAngleAxis`

## データの要件

`PolarLineSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで `PolarLineSeries` がレンダリングされません。
- すべてのデータ項目には、極座標シリーズの `AngleMemberPath` と `RadiusMemberPath` プロパティを使用してマッピングする必要がある少なくとも 2 つの数値データ列 (`PolarLineSeries` など）を含める必要があります。

極座標シリーズのデータポイントの位置は、「極」と呼ばれる、固定方向からの角度 (角度座標) と固定点 (デカルト座標の原点に類似) からの距離 (半径座標) によって決まります。極から始まって外側を指す線は角度軸 (`NumericAngleAxis`) のグリッド線で、極を囲む同心円状の輪は半径軸 (`NumericRadiusAxis`) のグリッド線です。

上記データ要件を満たすデータソースとして [SamplePolarData](data-chart-data-sources-polar.md) を使用できます。

```ts
public dataSource: any[] = SamplePolarData.create();
```

## モジュールの要件

`PolarLineSeries` を作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartPolarModule.Register(IgniteUIBlazor);
DataChartPolarCoreModule.Register(IgniteUIBlazor);    
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxPolarLineSeries } from 'igniteui-angular-charts';
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
import { IgrPolarLineSeries } from 'igniteui-react-charts';
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
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartPolarModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartPolarCoreModule,
    IgcDataChartPolarModule,
    IgcDataChartInteractivityModule
);
```

## コード例
このコードは、`PolarLineSeries` を使用して $ProductName$ データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

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
    dataSource={this.dataSource}
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
this.chart.dataSource = SamplePolarData.create();
this.chart.axes.add(radiusAxis);
this.chart.axes.add(angleAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="100%"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
    <igc-numeric-angle-axis name="angleAxis"
        start-angle-offset="-90" interval="30"
        minimum-value="0"
        maximum-value="360">
    </igc-numeric-angle-axis>
    <igc-numeric-radius-axis name="radiusAxis"
        inner-radius-extent-scale="0.1"
        radius-extent-scale="0.9"
        minimum-value="0"
        maximum-value="100"
        interval="25">
    </igc-numeric-radius-axis>
    <igc-polar-line-series
        name="series1"
        angle-member-path="Direction"
        radius-member-path="WindSpeed"
        radius-axis-name="radiusAxis"
        angle-axis-name="angleAxis"
        title="Wind Speed">
    </igc-polar-line-series>
</igc-data-chart>
```

```ts
let chart = document.getElementById("chart") as IgcDataChartComponent;
chart.dataSource = SamplePolarData.create();
```

### その他のリソース

- [軸のタイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャート凡例](data-chart-legends.md)
- [シリーズ マーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)


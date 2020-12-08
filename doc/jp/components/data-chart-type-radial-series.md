---
title: $PlatformShort$ データ チャート | データ可視化ツール | ラジアル チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して、ラジアル エリア、ラジアル折れ線、ラジアル円などのラジアル  チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, radial charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ラジアル チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','RadialPieSeries']
_language: ja
---
# $PlatformShort$ ラジアル シリーズ

このトピックは、$PlatformShort$ データ チャート コンポーネントのラジアル シリーズのさまざまなタイプについて説明します。ラジアル シリーズは、[カテゴリ シリーズ](data-chart-type-category-series.md)のように水平線に沿って伸びるのではなく、円の周りを囲んだデータポイントのコレクションとしてデータをレンダリングするシリーズのグループです。ラジアル シリーズは、チャートの範囲の最小から最大までのカテゴリのリストもマッピングし、カテゴリシリーズと同じカテゴリグループ化メカニズムをサポートします。

<!-- Angular, React, WebComponents -->
## $PlatformShort$ ラジアル シリーズの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ラジアル シリーズの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-radial-series"></sample-button>

</div>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## ラジアル シリーズのタイプ
以下の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名|説明   |
|--------------|---------------|
| `RadialAreaSeries`|ラジアル (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合で囲まれ、塗りつぶされた多角形を表示します  |
| `RadialSplineAreaSeries`|ラジアル (角度/半径) 座標にあるデータ ポイントを結ぶ滑らかな/補間された線の集合で囲まれ、塗りつぶされた多角形を表示します  |
| `RadialSplineSeries`|ラジアル (角度/半径) 座標にあるデータ ポイントを結ぶ滑らかな/補間された線の集合を表示します。  |
| `RadialScatterSeries`|極座標 (角度/半径) 座標にあるデータ ポイントを表すマーカーの集合を表示します。  |
| `RadialLineSeries`|極座標 (角度/半径) 座標にあるデータ ポイントを結ぶ直線の集合を表示します。  |


## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまな軸タイプを提供しますが、ラジアル シリーズで使用できるのは以下のタイプの軸のみです。

| シリーズ タイプ             |半径軸タイプ    |角度軸タイプ    |
|-------------------------|---------------------|--------------------|
| `RadialAreaSeries`      |`NumericRadiusAxis`|`CategoryAngleAxis` |
| `RadialPieSeries`       |`NumericRadiusAxis`|`CategoryAngleAxis` |
| `RadialColumnSeries`    |`NumericRadiusAxis`|`CategoryAngleAxis` |
| `RadialLineSeries`      |`NumericRadiusAxis`|`CategoryAngleAxis` |

## データの要件

極座標シリーズには、以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートはラジアル シリーズをレンダリングしません。
- すべてのデータ項目には、財務軸 (`CategoryXAxis` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
- データ項目は、カテゴリシリーズ (`RadialAreaSeries` など) の `ValueMemberPath` プロパティを使用してマップする数値データ列を少なくとも 1 列含む必要があります。


上記データ要件を満たすデータソースとして [SampleRadialData](data-chart-data-sources-radial.md) を使用できます。

```ts
this.state = { dataSource: SampleRadialData.create() }
```


## モジュールの要件

ラジアル シリーズを作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartRadialSeriesModule.Register(IgniteUIBlazor);
DataChartRadialSeriesCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxRadialAreaSeries } from 'igniteui-angular-charts';
import { IgxRadialLineSeries } from 'igniteui-angular-charts';
import { IgxRadialPieSeries } from 'igniteui-angular-charts';
import { IgxRadialColumnSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartRadialCoreModule,
        IgxDataChartRadialModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrCategoryAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrRadialAreaSeries } from 'igniteui-react-charts';
import { IgrRadialLineSeries } from 'igniteui-react-charts';
import { IgrRadialPieSeries } from 'igniteui-react-charts';
import { IgrRadialColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartRadialCoreModule } from 'igniteui-react-charts';
import { IgrDataChartRadialModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartRadialCoreModule.register();
IgrDataChartRadialModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcCategoryAngleAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcCategoryAngleAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericRadiusAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcRadialAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRadialLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRadialPieSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRadialColumnSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcRadialAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRadialLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRadialPieSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRadialColumnSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartRadialCoreModule,
    IgcDataChartRadialModule,
    IgcRadialAreaSeriesModule,
    IgcRadialLineSeriesModule,
    IgcRadialPieSeriesModule,
    IgcRadialColumnSeriesModule
);
```

## コード例
このコードは、`RadialAreaSeries` でデータ チャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="750px">
        <CategoryAngleAxis Name="angleAxis" Label="Department" />
        <NumericRadiusAxis Name="radiusAxis" />
        <RadialPieSeries Name="series1"
            DataSource="@DataSource"
            AngleAxisName="angleAxis"
            ValueMemberPath="Budget"
            ValueAxisName="radiusAxis"
            />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-angle-axis name="angleAxis" label="Department"></igx-category-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-radial-pie-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-pie-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrCategoryAngleAxis name="angleAxis" label="Department" />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrRadialPieSeries
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrRadialPieSeries({ name: "series1" });
series1.valueMemberPath  = "Budget";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrCategoryAngleAxis({ name: "angleAxis" });
angleAxis.label = "Department";

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
    <igc-category-angle-axis id="angleAxis" label="Department"></igc-category-angle-axis>
    <igc-numeric-radius-axis id="radiusAxis"></igc-numeric-radius-axis>
    <igc-radial-pie-series
        id="series1"
        value-member-path="Budget">
    </igc-radial-pie-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let angleAxis = (document.getElementById("angleAxis") as IgcCategoryAngleAxisComponent);
let radiusAxis = (document.getElementById("radiusAxis") as IgcNumericRadiusAxisComponent);

let series1 = (document.getElementById("series1") as IgcRadialPieSeriesComponent);
series1.angleAxis = angleAxis;
series1.valueAxis = radiusAxis;
```

上記のコードを使って `RadialAreaSeries` をレンダリングしたい極座標シリーズの名前で置き換えて他のタイプの極座標 シリーズを作成することもできます。

### その他のリソース

- [軸タイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャートの凡例](data-chart-legends.md)
- [シリーズのマーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)


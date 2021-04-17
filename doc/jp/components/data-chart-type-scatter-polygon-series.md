---
title: $Platform$ データ チャート | データ可視化ツール | 散布ポリゴン チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $Platform$ チャート コントロールを使用して散布ポリゴン チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $Platform$ charts, data chart, scatter polygon charts, $ProductName$, Infragistics, $Platform$ チャート, データ チャート, 散布ポリゴン チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','ShapeColumnSeries','ScatterPolygonSeries']
_language: ja
---
# $Platform$ 散布ポリゴン チャート

 $ProductName$ 散布ポリライン チャートは、形状の配列 (X または Y 座標の配列) を取得するシェイプ チャートのグループに属します。このシリーズは、その形状の配列をデカルト (x, y) システムのポリゴンのコレクションとしてレンダリングします。

散布図シリーズは科学データの強調領域でよく使用されますが、ダイアグラム、青写真、さらには建物の間取り図のプロットにも使用できます。

## $Platform$ 散布ポリゴン チャートの例


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polygon-series"
           alt="$Platform$ 散布ポリゴン チャートの例"
           github-src="charts/data-chart/type-scatter-polygon-series">
</code-view>

<div class="divider--half"></div>

## 軸の要件
$Platform$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、`ScatterPolygonSeries` で使用できるのは以下のタイプの軸のみです。

- `NumericXAxis`
- `NumericYAxis`

## Required Data

`ScatterPolygonSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
- すべてのデータ項目には、散布シェイプシリーズの  `ShapeMemberPath` プロパティにマッピングする必要がある 1 つのシェイプ データ列 (Xまたは Y 座標の配列) を含める必要があります。

上記データ要件を満たすデータソースとして [SampleShapeData](data-chart-data-sources-shape.md) を使用できます。

```ts
public dataSource: any[] = SampleShapeData.create();
```

## モジュールの要件

`ScatterPolygonSeries` を作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartScatterCoreModule.Register(IgniteUIBlazor);
DataChartScatterModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
ScatterPolygonSeriesModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterPolygonSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartShapeModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcScatterPolygonSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcScatterPolygonSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartShapeCoreModule,
    IgcDataChartShapeModule,
    IgcScatterPolygonSeriesModule
);
```

## コード例
このコードは、`ScatterPolygonSeries` を使用して $ProductName$ データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ScatterPolygonSeries Name="series1"
        Title="House Floor Plan"
        DataSource="@DataSource"
        Brush="Gray"
        Outline="Black"
        ShapeMemberPath="Points" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-polygon-series
        name="series1"
        shapeMemberPath="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igx-scatter-polygon-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />
    {/* series: */}
    <IgrScatterPolygonSeries
     name="series1"
     shapeMemberPath="Points"
     title="House Floor Plan"
     brush="Gray"
     outline="Black" />
 </IgrDataChart>
```

```ts
const series1 = new IgrScatterPolygonSeries({ name: "series1" });
series1.shapeMemberPath = "Points";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.brush = "Gray";
series1.outline = "Black";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleShapeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart
    width="700px"
    height="500px">
    <igc-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igc-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igc-scatter-polygon-series
        name="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        shape-member-path="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igc-scatter-polygon-series>
 </igc-data-chart>
```

### その他のリソース

- [軸のタイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャート凡例](data-chart-legends.md)
- [シリーズ マーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)


---
title: $PlatformShort$ データ チャート | データ可視化ツール | カテゴリ シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して、エリア、横棒チャート、縦棒チャート、折れ線チャートなどのカテゴリ チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, category series, area, chart, bar chart, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, カテゴリ シリーズ, エリア, チャート, 棒チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ カテゴリ シリーズ


このトピックは、$PlatformShort$ データ チャート コンポーネントのファイナカテゴリ シリーズのさまざまなタイプについて説明します。カテゴリ シリーズは、データを取り入れてそれを水平線 (`ColumnSeries` など) または垂直線 (`BarSeries` など) に沿って延ばしたデータ ポイントのコレクションとして描画するチャート シリーズの中でも、もっとも簡単で一般的な形のグループです。

<!-- Angular, React, WebComponents -->
## $PlatformShort$ カテゴリ シリーズの例


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-category-series" alt="$PlatformShort$ カテゴリ シリーズの例">
</code-view>


<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## カテゴリ シリーズのタイプ
以下の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名  | 概要   |
|--------------|---|
| `AreaSeries` | その下の領域が塗りつぶされる線で接続された、均等に配置された一連の点を表示します。カテゴリは水平に配置され、値は垂直に配置されます。 |
| `BarSeries` | 個々のデータを別々の行に表示します。他のシリーズとは異なり、カテゴリは縦に並べられ、値は横にプロットされます。つまり、このシリーズは `ColumnSeries` に似てますが、時計回りに90度回転されます。 |
| `ColumnSeries` | 個々のデータを別々の列に表示します。カテゴリは水平方向、値は垂直方向にプロットされます。データ シリーズの経時的な変化を表示、または複数の項目を比較するために使用します。|
| `LineSeries` | 直線で結ばれた均等に配置された点のセットを表示します。経時的に連続的に変化するデータまたは情報を示すために使用します。ポイントの間の関係を強調する必要がある場合に役立ちます。 |
| `PointSeries` | 線で結ばずにデータポイントの位置にマーカーを表示します。これらのマーカーの形状は、`markerType` プロパティを使用して変更されます。|
| `SplineSeries` | データ表示を向上させるためにスプライン補間を使用して生成した滑らかな線で接続された、均等に配置された点のセットを表示します。 |
| `SplineAreaSeries`  | データの表示を向上させるためのスプライン補間とスムージングの追加機能を持つ `AreaSeries` タイプ。 |
| `StepLineSeries` | `LineSeries` と同じですが、値が点間の最短経路をトレースする直線ではなく、段階的に連続する垂直線と水平線で接続されている点が異なります。  |
| `StepAreaSeries` | `StepLineSeries` と同じですが、連続する垂直線と水平線がデータポイント間の変化を段階的に進行させるのではなく、値より下の領域が塗りつぶされる点が異なります。|
| `WaterfallSeries` | ポイントの集合を、連続するデータ ポイントの値同士の差異を示す垂直列として表示します。列は色でコード化され、値が正の変化であるか負の変化であるかを区別します。カテゴリは水平方向、値は垂直方向にプロットされます。データ ポイントの経時的な変化を表示、または複数の項目を比較するために使用します。 |

## 軸の要件
$PlatformShort$ データ チャート コンポーネントは、さまざまな軸タイプを提供しますが、カテゴリ シリーズの特定のタイプでは以下の軸タイプのみ使用できます。

| シリーズ タイプ        | YAxis タイプ      | XAxis タイプ                      |
|--------------------|-----------------|---------------------------------|
| `BarSeries`        | `CategoryYAxis` | `NumericXAxis`                                   |
| `AreaSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `ColumnSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `LineSeries`       | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `SplineSeries`     | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `SplineAreaSeries` | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StepAreaSeries`   | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `StepLineSeries`   | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `WaterfallSeries`  | `NumericYAxis`  | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## データの要件

カテゴリシリーズには、以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースには少なくとも1つのデータ項目が含まれている必要があります。そうでない場合、チャートはカテゴリ シリーズをレンダリングしません。
- すべてのデータ項目には、財務軸 (`CategoryXAxis` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
- データ項目は、カテゴリシリーズ (`LineSeries` など) の `ValueMemberPath` プロパティを使用してマップする数値データ列を少なくとも 1 列含む必要があります。



上記データ要件を満たすデータソースとして [SampleCategoryData](data-chart-data-sources-category.md) を使用できます。

```ts
public dataSource: any[] = SampleCategoryData.create();
```

## モジュールの要件

カテゴリ シリーズを作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartCategoryModule.Register(IgniteUIBlazor);
DataChartCategoryCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxAreaSeries } from 'igniteui-angular-charts';
import { IgxBarSeries } from 'igniteui-angular-charts';
import { IgxColumnSeries } from 'igniteui-angular-charts';
import { IgxLineSeries } from 'igniteui-angular-charts';
import { IgxPointSeries } from 'igniteui-angular-charts';
import { IgxSplineSeries } from 'igniteui-angular-charts';
import { IgxSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxStepAreaSeries } from 'igniteui-angular-charts';
import { IgxStepLineSeries } from 'igniteui-angular-charts';
import { IgxWaterfallSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrAreaSeries } from 'igniteui-react-charts';
import { IgrBarSeries } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrPointSeries } from 'igniteui-react-charts';
import { IgrSplineSeries } from 'igniteui-react-charts';
import { IgrSplineAreaSeries } from 'igniteui-react-charts';
import { IgrStepAreaSeries } from 'igniteui-react-charts';
import { IgrStepLineSeries } from 'igniteui-react-charts';
import { IgrWaterfallSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
// Module Manager:
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisComponent } from 'igniteui-webcomponents-charts';
// series' modules:
import { IgcAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcBarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcPointSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStepAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStepLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcWaterfallSeriesModule } from 'igniteui-webcomponents-charts';
//series' components
import { IgcAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcBarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcPointSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStepAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStepLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcWaterfallSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// registering the modules:
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcAreaSeriesModule,
    IgcBarSeriesModule,
    IgcColumnSeriesModule,
    IgcLineSeriesModule,
    IgcPointSeriesModule,
    IgcSplineSeriesModule,
    IgcSplineAreaSeriesModule,
    IgcStepAreaSeriesModule,
    IgcStepLineSeriesModule,
    IgcWaterfallSeriesModule
);
```

## コード例 - 列シリーズ
このコードは、`ColumnSeries` でデータ チャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <ColumnSeries
        Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        ValueMemberPath="USA" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-column-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrCategoryXAxis name="xAxis" label="Year" />
    <IgrNumericYAxis  name="yAxis" />
    {/* series */}
    <IgrColumnSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```ts
const series1 = new IgrColumnSeries({ name: "series1" });
series1.valueMemberPath = "USA";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-category-x-axis id="xAxis" label="Year"></igc-category-x-axis>
    <igc-numeric-y-axis  id="yAxis"></igc-numeric-y-axis>
    <igc-column-series
        id="series1"
        valueMemberPath="USA">
    </igc-column-series>
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
```

## コード例 - 棒シリーズ
上記のコードを使って `ColumnSeries` をレンダリングしたいシリーズの名前で置き換えて他のタイプのカテゴリ シリーズを作成することもできます。ただし、`BarSeries` は、他のタイプの軸が必要なため、この規則の例外となります。このコードは、`BarSeries` でデータ チャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="700px">
    <NumericXAxis Name="xAxis" />
    <CategoryYAxis Name="yAxis" />
    <BarSeries
        Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        ValueMemberPath="USA" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis  name="xAxis"></igx-numeric-x-axis>
    <igx-category-y-axis name="yAxis" label="Year"></igx-category-y-axis>
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-bar-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis  name="xAxis" />
    <IgrCategoryYAxis name="yAxis" label="Year" />
    {/* series */}
    <IgrBarSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```ts
const series1 = new IgrBarSeries({ name: "series1" });
series1.valueMemberPath = "USA";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis  id="xAxis"></igc-numeric-x-axis>
    <igc-category-y-axis id="yAxis" label="Year"></igc-category-y-axis>
    <igc-bar-series
        id="series1"
        valueMemberPath="USA">
    </igc-bar-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcCategoryYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBarSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

### その他のリソース

- [軸のタイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャート凡例](data-chart-legends.md)
- [シリーズの注釈](data-chart-series-annotations.md)
- [シリーズの強調表示](data-chart-series-highlighting.md)
- [シリーズ マーカー](data-chart-series-markers.md)
- [シリーズのツールチップ](data-chart-series-tooltips.md)
- [シリーズ トレンドライン](data-chart-series-trendlines.md)
- [シリーズ タイプ](data-chart-series-types.md)



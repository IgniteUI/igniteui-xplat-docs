---
title: $PlatformShort$ データ チャート | データ可視化ツール | 積層型チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して、積層型エリア チャート、積層型棒チャートなどの積層型チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, stacked charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 積層型チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','StackedColumnSeries']
namespace: Infragistics.Controls.Charts
_language: ja
---
# $PlatformShort$ 積層シリーズ

このトピックは、$PlatformShort$ データ チャート コンポーネントの積層シリーズのさまざまなタイプについて説明します。積層シリーズは、データを受け取り、それを水平線 (`ColumnSeries` など) または垂直線 (`BarSeries` など) に沿って伸びるデータポイントの集まりとしてレンダリングするチャートシリーズの最も単純で最も一般的な形式のグループです。

## $PlatformShort$ 積層シリーズの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 積層シリーズの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-stacked-series"></sample-button>

</div>

<div class="divider--half"></div>

積層シリーズごとに独自の `Series` コレクションがあり、StackedFragmentSeries 要素を配置できます。これらのフラグメントは、チャートの実際のレンダリングを構成するものであり、`ValueMemberPath` を受け入れる要素です。

## 積層シリーズのタイプ
以下の表は、すべてのタイプのカテゴリ シリーズとその説明をまとめたものです。

| シリーズ名|説明   |
|--------------|---|
| `StackedAreaSeries`|このシリーズタイプは、線の下の領域が塗りつぶされて重なり合うようにして、線分 (StackedFragmentSeries) で接続された点のコレクションを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。 |
| `StackedBarSeries`|個々のデータを互いに積層された棒に表示します。カテゴリは垂直方向に配置され、値は水平方向に積層されます。このシリーズは通常、データ シリーズの経時的な変化の表示、または複数の項目を比較するために使用されます。 |
| `StackedColumnSeries`|個々のデータをそれぞれ上に積層された列に表示します。カテゴリは水平方向、値は垂直方向に積層されます。このシリーズは通常、データ シリーズの経時的な変化の表示、または複数の項目を比較するために使用されます。  |
| `StackedLineSeries`|このシリーズタイプは、互いの上に積み重ねられた線分 (`StackedFragmentSeries`) で接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。 |
| `StackedSplineAreaSeries`|このシリーズタイプは、スプラインの下の領域が塗りつぶされ、積み重ねられた状態で、スプラインセグメントの滑らかな曲線  (`StackedFragmentSeries`) で接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。  |
| `StackedSplineSeries`|このシリーズ タイプは、互いに積み重ねられたスプライン セグメントの滑らかな曲線 (StackedFragmentSeries) によって接続された点の集まりを使用してレンダリングされます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも y 軸の正の側にグループ化され、負の値は y 軸の負の側にグループ化されます。   |
| `Stacked100AreaSeries`|このシリーズは、y 軸の値の取り扱いを除いて、すべての点で StackedAreaSeries と同じです。データを直接的に表す代わりに、`Stacked100AreaSeries` は、データ ポイント内のすべての値の合計の割合でデータを表示します。 |
| `Stacked100BarSeries`|このシリーズは `StackedBarSeries` タイプと同じですが、データを直接表示するのではなく、カテゴリ内のすべての値のパーセントでデータを表示する機能が追加されています。 |
| `Stacked100ColumnSeries`|このシリーズは `StackedColumnSeries` タイプと同じですが、データを直接表現するのではなく、カテゴリ内のすべての値のパーセントでデータを表現するという追加機能があります。  |
| `Stacked100LineSeries`|このシリーズは、y軸上の値の取り扱いを除いて、あらゆる点で `StackedLineSeries` と同じです。`Stacked100LineSeries` は、データを直接表現するのではなく、データポイント内のすべての値の合計に対するパーセントでデータを表現します。 |
| `Stacked100SplineAreaSeries`|このシリーズは、y 軸上の値の取り扱いを除いて、あらゆる点で `StackedSplineAreaSeries` と同じです。`Stacked100SplineAreaSeries` は、データを直接表現するのではなく、データ ポイント内のすべての値の合計に対するパーセントでデータを表現します。   |
| `Stacked100SplineSeries`|このシリーズは、y軸上の値の取り扱いを除いて、あらゆる点で `StackedSplineSeries` と同じです。`Stacked100SplineSeries` は、データを直接表現するのではなく、データ ポイント内のすべての値の合計に対するパーセントでデータを表現します。   |

## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまな種類の軸を提供しますが、積み上げシリーズで使用できるのは以下の種類の軸のみです。

| シリーズ タイプ        |YAxis タイプ      |XAxis タイプ                      |
|--------------------|-----------------|---------------------------------|
| `StackedAreaSeries`          |`CategoryYAxis`|`NumericXAxis`                                   |
| `StackedBarSeries`           |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `StackedColumnSeries`        |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `StackedLineSeries`          |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `StackedSplineAreaSeries`    |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `StackedSplineSeries`        |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `Stacked100AreaSeries`       |`CategoryYAxis`|`NumericXAxis`                                   |
| `Stacked100BarSeries`        |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `Stacked100ColumnSeries`     |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `Stacked100LineSeries`       |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `Stacked100SplineAreaSeries`|`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |
| `Stacked100SplineSeries`     |`NumericYAxis`|`CategoryXAxis`、`OrdinalTimeXAxis`、`TimeXAxis` |

## データの要件

積層シリーズには、以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで積層シリーズがレンダリングされません。
- すべてのデータ項目には、財務軸 (CategoryXAxis など) の Label プロパティにマッピングする必要があるデータ列 (文字列または日時) を少なくとも 1 列含める必要があります
- すべてのデータ項目には、積層シリーズの `Series` コレクションに追加する `StackedFragmentSeries` の `ValueMemberPath` プロパティを使用してマッピングする必要がある少なくとも 1 つの数値データ列を含める必要があります。

## モジュールの要件

積層シリーズを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

DataChartCoreModule        
DataChartInteractivityModule
DataChartCategoryModule
DataChartStackedModule,
StackedFragmentSeriesModule,
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStackedAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedBarSeries } from 'igniteui-angular-charts';
import { IgxStackedColumnSeries } from 'igniteui-angular-charts';
import { IgxStackedLineSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineAreaSeries } from 'igniteui-angular-charts';
import { IgxStackedSplineSeries } from 'igniteui-angular-charts';
import { IgxStacked100AreaSeries } from 'igniteui-angular-charts';
import { IgxStacked100BarSeries } from 'igniteui-angular-charts';
import { IgxStacked100ColumnSeries } from 'igniteui-angular-charts';
import { IgxStacked100LineSeries } from 'igniteui-angular-charts';
import { IgxStacked100SplineAreaSeries } from 'igniteui-angular-charts'
import { IgxStacked100SplineSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxDataChartStackedModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
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
import { IgrStackedAreaSeries } from 'igniteui-react-charts';
import { IgrStackedBarSeries } from 'igniteui-react-charts';
import { IgrStackedColumnSeries } from 'igniteui-react-charts';
import { IgrStackedFragmentSeries } from 'igniteui-react-charts';
import { IgrStackedLineSeries } from 'igniteui-react-charts';
import { IgrStackedSplineAreaSeries } from 'igniteui-react-charts';
import { IgrStackedSplineSeries } from 'igniteui-react-charts';
import { IgrStacked100AreaSeries } from 'igniteui-react-charts';
import { IgrStacked100BarSeries } from 'igniteui-react-charts';
import { IgrStacked100ColumnSeries } from 'igniteui-react-charts';
import { IgrStacked100LineSeries } from 'igniteui-react-charts';
import { IgrStacked100SplineAreaSeries } from 'igniteui-react-charts'
import { IgrStacked100SplineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartStackedModule } from 'igniteui-react-charts';
import { IgrColumnFragmentModule } from 'igniteui-react-charts' ;

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartStackedModule.register();
IgrColumnFragmentModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules:
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartStackedModule } from 'igniteui-webcomponents-charts';
import { IgcColumnFragmentModule } from 'igniteui-webcomponents-charts' ;
// axis' modules:
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisModule  } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryYAxisComponent } from 'igniteui-webcomponents-charts';
// scatter series' modules:
import { IgcStackedAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedBarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedFragmentSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedLineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100AreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100BarSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100ColumnSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100LineSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcStacked100SplineAreaSeriesModule } from 'igniteui-webcomponents-charts'
import { IgcStacked100SplineSeriesModule } from 'igniteui-webcomponents-charts';
// scatter series' elements:
import { IgcStackedAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedBarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedFragmentSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedLineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStackedSplineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100AreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100BarSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100ColumnSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100LineSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcStacked100SplineAreaSeriesComponent } from 'igniteui-webcomponents-charts'
import { IgcStacked100SplineSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartStackedModule,
    IgcColumnFragmentModule,
    IgcStackedAreaSeriesModule,
    IgcStackedBarSeriesModule,
    IgcStackedColumnSeriesModule,
    IgcStackedFragmentSeriesModule,
    IgcStackedLineSeriesModule,
    IgcStackedSplineAreaSeriesModule,
    IgcStackedSplineSeriesModule,
    IgcStacked100AreaSeriesModule,
    IgcStacked100BarSeriesModule,
    IgcStacked100ColumnSeriesModule,
    IgcStacked100LineSeriesModule,
    IgcStacked100SplineAreaSeriesModule,
    IgcStacked100SplineSeriesModule
);
```

## コード例 - 積層柱状シリーズ
このコードは、`StackedColumnSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。上記のコードを使って `StackedColumnSeries` をレンダリングしたいシリーズの名前で置き換えて他のタイプのカテゴリ シリーズを作成することもできます。

```razor
<DataChart Width="100%" Height="100%>
    <CategoryXAxis Name="xAxis" Label="Country" DataSource="@data" />
    <NumericYAxis Name=yAxis />
    <StackedColumnSeries 
      XAxisName="xAxis" 
      YAxisName="yAxis"
      DataSource="@data">
        <StackedFragmentSeries ValueMemberPath="Coal" />
        <StackedFragmentSeries ValueMemberPath="Hydro" />
        <StackedFragmentSeries ValueMemberPath="Nuclear" />
        <StackedFragmentSeries ValueMemberPath="Gas" />
        <StackedFragmentSeries ValueMemberPath="Oil" />
  </StackedColumnSeries>
</DataChart>
```

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-column-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-column-series>

</igx-data-chart>
```

```tsx
<IgrDataChart width="100%"
  height="100%"
  dataSource={this.data} >

  <IgrCategoryXAxis name="xAxis" label="Country" />
  <IgrNumericYAxis name="yAxis" minimumValue={0} />
  <IgrStackedColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
    <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal" />
    <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro" />
    <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear" />
    <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
    <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil" />
  </IgrStackedColumnSeries>
</IgrDataChart>
```

```ts
const stackedSeries = new IgrStackedColumnSeries({ name: "series" });

const fragment1 = new IgrStackedFragmentSeries({ name: "coal" });
fragment1.valueMemberPath = "Coal";

const fragment2 = new IgrStackedFragmentSeries({ name: "hydro" });
fragment2.valueMemberPath = "Hydro";

const fragment3 = new IgrStackedFragmentSeries({ name: "nuclear" });
fragment3.valueMemberPath = "Nuclear";

const fragment4 = new IgrStackedFragmentSeries({ name: "gas" });
fragment4.valueMemberPath = "Gas";

const fragment5 = new IgrStackedFragmentSeries({ name: "oil" });
fragment5.valueMemberPath = "Oil";

stackedSeries.xAxisName = "xAxis";
stackedSeries.yAxisName = "yAxis";

stackedSeries.series.add(fragment1);
stackedSeries.series.add(fragment2);
stackedSeries.series.add(fragment3);
stackedSeries.series.add(fragment4);
stackedSeries.series.add(fragment5);

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stackedSeries);
```

```html
<igc-data-chart id="chart" height="500px" width="700px">
  <igc-category-x-axis id="xAxis" label="Country"></igc-category-x-axis>
  <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

  <igc-stacked-column-series id="series1">
    <igc-stacked-fragment-series value-member-path="Coal"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Hydro"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Nuclear"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Gas"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Oil"></igc-stacked-fragment-series>
  </igc-stacked-column-series>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcStackedColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## コード例 - 積層棒シリーズ
 `StackedBarSeries` は、`CategoryYAxis` と `NumericXAxis` を使用するという点で異なるタイプの軸を必要とするため、`StackedColumnSeries` を任意のシリーズ名に置き換えることができるという規則の例外です。このコードは、`StackedBarSeries` を使用してデータチャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-numeric-x-axis #xAxis></igx-numeric-x-axis>
  <igx-category-y-axis #yAxis label="Country"></igx-category-y-axis>

  <igx-stacked-bar-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-bar-series>

</igx-data-chart>
```

```tsx
<IgrDataChart width="100%"
  height="100%"
  dataSource={this.data} >
  <IgrNumericXAxis name="xAxis" />
  <IgrCategoryYAxis name="yAxis" label="Country" />

  <IgrStackedBarSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
    <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal" />
    <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro" />
    <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear" />
    <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
    <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil" />
  </IgrStackedBarSeries>
</IgrDataChart>
```

```ts
const stackedSeries = new IgrStackedBarSeries({ name: "series" });

const fragment1 = new IgrStackedFragmentSeries({ name: "fragment1" });
fragment1.valueMemberPath = "Coal";

const fragment2 = new IgrStackedFragmentSeries({ name: "fragment2" });
fragment2.valueMemberPath = "Hydro";

const fragment3 = new IgrStackedFragmentSeries({ name: "fragment3" });
fragment3.valueMemberPath = "Nuclear";

const fragment4 = new IgrStackedFragmentSeries({ name: "fragment4" });
fragment4.valueMemberPath = "Gas";

const fragment5 = new IgrStackedFragmentSeries({ name: "fragment5" });
fragment5.valueMemberPath = "Oil";

stackedSeries.xAxisName = "xAxis";
stackedSeries.yAxisName = "yAxis";

stackedSeries.series.add(fragment1);
stackedSeries.series.add(fragment2);
stackedSeries.series.add(fragment3);
stackedSeries.series.add(fragment4);
stackedSeries.series.add(fragment5);

const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Country";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleCategoryData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(stackedSeries);
```

```html
<igc-data-chart id="chart" height="500px" width="700px">
  <igc-numeric-x-axis id="xAxis"></igc-numeric-x-axis>
  <igc-category-y-axis id="yAxis" label="Country"></igc-category-y-axis>

  <igc-stacked-bar-series id="series1">
    <igc-stacked-fragment-series value-member-path="Coal"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Hydro"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Nuclear"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Gas"></igc-stacked-fragment-series>
    <igc-stacked-fragment-series value-member-path="Oil"></igc-stacked-fragment-series>
  </igc-stacked-bar-series>

</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcCategoryYAxisComponent);

let series1 = (document.getElementById("series1") as IgcStackedBarSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

---
title: $PlatformShort$ データ チャート | データ可視化ツール | 範囲チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して、範囲エリア、範囲柱状などの範囲チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, range charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 範囲チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ エリア シリーズ

このトピックでは、$PlatformShort$ データ チャート コンポーネントコントロールのさまざまな種類のエリア シリーズについて説明します。エリア シリーズは、2 つの数値データ列を使用し、それらを水平方向に引き伸ばされたデータポイントのコレクションとしてレンダリングする一連のチャート シリーズです (`RangeAreaSeries` など)。

## $PlatformShort$ エリア シリーズの例


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-range-series" 
           alt="$PlatformShort$ エリア シリーズの例" 
           github-src="charts/data-chart/type-range-series">
</code-view>

<div class="divider--half"></div>

## エリア シリーズのタイプ
以下の表は、すべての種類のエリア シリーズとその説明を示しています。

| シリーズ名  | 説明   |
|--------------|---------------|
| `RangeAreaSeries` | データポイントの High / Low 値のペア間の塗りつぶされた領域/範囲を表示します。 |
| `RangeColumnSeries` | カテゴリは横に並べられ、値は縦に並べられます。高値/低値のデータポイント間の個別の列に離散データを表示します。カテゴリは水平方向、値は垂直方向にプロットされます。 |


## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまな軸タイプを提供しますが、エリア シリーズで使用できるのは以下のタイプの軸のみです。

| Series タイプ         | YAxis タイプ     | XAxis タイプ      |
|---------------------|----------------|-----------------|
| `RangeAreaSeries`   | `NumericYAxis` | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |
| `RangeColumnSeries` | `NumericYAxis` | `CategoryXAxis`, `OrdinalTimeXAxis`, `TimeXAxis` |

## データの要件

エリア シリーズには、以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートはエリア シリーズを描画しません。
- すべてのデータ項目には、カテゴリ軸の `Label` プロパティにマッピングする必要があるラベルデータ列（文字列または日時）を少なくとも1つ含める必要があります（`CategoryXAxis` など）。
- すべてのデータ項目には、極座標シリーズの `HighMemberPath` と `LowMemberPath` プロパティを使用してマッピングする必要がある少なくとも2つの数値データ列 (`RangeAreaSeries` など）を含める必要があります。

上記データ要件を満たすデータソースとして [SampleRangeData](data-chart-data-sources-range.md) を使用できます。

```ts
public dataSource: any[] = SampleRangeData.create();
```

## モジュールの要件

範囲シリーズを作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
RadialPieSeriesModule.Register(IgniteUIBlazor);
RadialPieSeriesCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxRangeAreaSeries } from 'igniteui-angular-charts';
import { IgxRangeColumnSeries } from 'igniteui-angular-charts';
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
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrRangeAreaSeries } from 'igniteui-react-charts';
import { IgrRangeColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcRangeAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcRangeColumnSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcRangeAreaSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcRangeColumnSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcRangeAreaSeriesModule,
    IgcRangeColumnSeriesModule
);
```

## コード例
このコードは、`RangeColumnSeries` でデータ チャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="750px">
        <CategoryXAxis Name="xAxis" Label="Year" DataSource="@DataSource"/>
        <NumericYAxis  Name="yAxis" />
        <RangeColumnSeries Name="series1" 
            XAxisName="xAxis"           YAxisName="yAxis"
            DataSource="@DataSource"
            LowMemberPath="Low"
            HighMemberPath="High" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-column-series>
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
    {/* series: */}
    <IgrRangeColumnSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low" />
 </IgrDataChart>
```

```ts
const series1 = new IgrRangeColumnSeries({ name: "series1" });
series1.highMemberPath = "High";
series1.lowMemberPath  = "Low";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const xAxis = new IgrNumericXAxis({  name: "xAxis" });
const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
yAxis.label = "Year";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleRangeData.create();
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
    <igc-range-column-series
        id="series1"
        high-member-path="High"
        low-member-path="Low">
    </igc-range-column-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcRangeColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

`RangeColumnSeries` を置き換えることで `RangeAreaSeries` を作成するために上記のコードを使用することもできます。

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

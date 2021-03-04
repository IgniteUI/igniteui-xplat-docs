---
title: $PlatformShort$ データ チャート | データ可視化ツール | スプライン エリア チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用してスプライン エリア チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, spine area chart, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, スプライン エリア チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ スプライン エリア チャート

$ProductName$ スプライン エリア チャートは、カテゴリ チャートのグループに属し、スプラインの下の領域が塗りつぶされたスプラインの滑らかな曲線で接続されたポイントのコレクションを使用して描画されます。値は y 軸に表示され、カテゴリは x 軸に表示されます。`SplineAreaSeries` は時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。$PlatformShort$ スプライン エリア チャートは、データ ポイントを接続するラインにスプライン補間とデータの表示を改善するスムージングがあること以外は $PlatformShort$ エリア チャートと同じです。

## $PlatformShort$ スプライン エリア チャートの例


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-category-spline-area-series" alt="$PlatformShort$ スプライン エリア チャートの例">
</code-view>


<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、`SplineAreaSeries` で使用できるのは以下のタイプの軸のみです。

- `CategoryXAxis`
- `OrdinalTimeXAxis`
- `TimeXAxis`
- `NumericYAxis`

## データの要件

`SplineAreaSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで `SplineAreaSeries` がレンダリングされません。
- すべてのデータ項目には、財務軸 (`CategoryXAxis` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
- すべてのデータ項目には、`SplineAreaSeries` の `ValueMemberPath` プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。

上記データ要件を満たすデータソースとして [SampleCategoryData](data-chart-data-sources-category.md) を使用できます。

```ts
public dataSource: any[] = SampleCategoryData.create();
```

## モジュールの要件

`SplineAreaSeries` を作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartCategoryModule.Register(IgniteUIBlazor);
DataChartCategoryCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxSplineAreaSeries } from 'igniteui-angular-charts';
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
import { IgrSplineAreaSeries } from 'igniteui-react-charts';
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
import { IgcSplineAreaSeriesModule } from 'igniteui-webcomponents-charts';
//series' components
import { IgcSplineAreaSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// registering the modules:
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcSplineAreaSeriesModule,
);
```

## コード例
このコードは、`SplineAreaSeries` を使用して $ProductName$ データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <SplineAreaSeries
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
    <igx-spline-area-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-spline-area-series>
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
    <IgrSplineAreaSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```ts
const series1 = new IgrSplineAreaSeries({ name: "series1" });
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
    <igc-spline-area-series
        id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        valueMemberPath="USA">
    </igc-spline-area-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;
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

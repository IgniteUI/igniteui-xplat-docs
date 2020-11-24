---
title: $PlatformShort$ データ チャート | データ可視化ツール | ステップ折れ線チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用してステップ折れ線チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, step line chart, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ステップ折れ線チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ ステップ折れ線チャート

$ProductName$ ステップ折れ線チャートは、カテゴリ チャートのグループに属し、連続的な垂直線と水平線で接続されたポイントのコレクションを使用して描画され、階段状のチャートを形成します。値は y 軸に表示され、カテゴリは x 軸に表示されます。`StepLineSeries` は時間毎のデータの変化や複数の項目を比較する場合に用いられます。$PlatformShort$ ステップ折れ線チャートは、ステップ線の下の領域が塗りつぶされていないことを除いて、すべての面で $PlatformShort$ ステップ領域チャートと同じです。

## $PlatformShort$ ステップ折れ線チャート例

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-category-step-line-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ステップ折れ線チャート例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-category-step-line-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データチャート コンポーネントはさまざまなタイプの軸を提供しますが、`StepLineSeries` で使用できるのは以下のタイプの軸のみです。

- `CategoryXAxis`
- `OrdinalTimeXAxis`
- `TimeXAxis`
- `NumericYAxis`

## データの要件

`StepLineSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで `StepLineSeries` がレンダリングされません。
- すべてのデータ項目には、財務軸 (`CategoryXAxis` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
- すべてのデータ項目には、`StepLineSeries` の `ValueMemberPath` プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。

上記データ要件を満たすデータソースとして [SampleCategoryData](data-chart-data-sources-category.md) を使用できます。

```ts
public dataSource: any[] = SampleCategoryData.create();
```

## モジュールの要件

`StepLineSeries` を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataChartCoreModule;
* DataChartCategoryModule;
* DataChartCategoryCoreModule;
* DataChartInteractivityModule;
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStepLineSeries } from 'igniteui-angular-charts';
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
import { IgrStepLineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
```

```ts
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcStepLineSeriesModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

// registering data chart's modules:
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartInteractivityModule,
    IgcStepLineSeriesModule
);
```

## コード例
このコードは、`StepLineSeries` を使用して $ProductName$ データチャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```razor
<DataChart Height="500px" Width="700px">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <StepLineSeries
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
    <igx-step-line-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-step-line-series>
 </igx-data-chart>
```


```tsx
 <IgrDataChart
    dataSource={this.dataSource}
    width="700px"
    height="500px">
    {/* axes */}
    <IgrCategoryXAxis name="xAxis" label="Year" />
    <IgrNumericYAxis  name="yAxis" />
    {/* series */}
    <IgrStepLineSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA" />
 </IgrDataChart>
```

```ts
const series1 = new IgrStepLineSeries({ name: "series1" });
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
<igc-data-chart id="chart" width="100%" height="100%"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
    <igc-category-x-axis name="xAxis" label="Year"></igc-category-x-axis>
    <igc-numeric-y-axis name="yAxis" ></igc-numeric-y-axis>
    <igc-step-line-series
        name="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="USA">
    </igc-step-line-series>
    <igc-step-line-series
        name="series2"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        value-member-path="RUS">
    </igc-step-line-series>
</igc-data-chart>
```

```ts
let chart = document.getElementById("chart") as IgcDataChartComponent;
chart.dataSource = SampleCategoryData.create();
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

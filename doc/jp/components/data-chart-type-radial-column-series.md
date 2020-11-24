---
title: $PlatformShort$ データ チャート | データ可視化ツール | ラジアル縦棒チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用してラジアル縦棒チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, radial column charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ラジアル縦棒チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','RadialColumnSeries']
_language: ja
---
# $PlatformShort$ ラジアル縦棒チャート

$ProductName$ ラジアル縦棒チャートは、放射状チャートのグループに属し、チャートの中心からデータポイントの位置に向かって伸びる長方形のコレクションを使用して描画されます。`RadialColumnSeries` は `ColumnSeries` と同じデータ プロットの概念を使用していますが、横の線に沿って伸びるのではなく、円の周りでデータ ポイントをラップします。

## $PlatformShort$ ラジアル縦棒チャート例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-column-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ラジアル縦棒チャート例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-radial-column-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、`RadialColumnSeries` で使用できるのは以下のタイプの軸のみです。

- `NumericRadiusAxis`
- `CategoryAngleAxis`

## データの要件

`RadialColumnSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで `RadialColumnSeries` がレンダリングされません。
- すべてのデータ項目には、財務軸 (`CategoryAngleAxis` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
- すべてのデータ項目には、`RadialColumnSeries` の `ValueMemberPath` プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。


上記データ要件を満たすデータソースとして [SampleRadialData](data-chart-data-sources-radial.md) を使用できます。

```ts
public dataSource: any[] = SampleRadialData.create();
```

## モジュールの要件

`RadialColumnSeries` を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataChartCoreModule        
* RadialColumnSeriesModule
* RadialcolumnSeriesCoreModule      
* DataChartInteractivityModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
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
import { IgcRadialColumnSeriesModule } from 'igniteui-webcomponents-charts';
// series' components
import { IgcRadialColumnSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartRadialCoreModule,
    IgcDataChartRadialModule,
    IgcRadialColumnSeriesModule
);
```

## コード例
このコードは、`RadialColumnSeries` を使用して $ProductName$ データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```razor
<DataChart Height="500px" Width="750px">
        <CategoryAngleAxis Name="angleAxis" Label="Department" />
        <NumericRadiusAxis Name="radiusAxis" />
        <RadialColumnSeries Name="series1"
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
    <igx-radial-column-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-column-series>
 </igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrCategoryAngleAxis name="angleAxis" label="Department" />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrRadialColumnSeries
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrRadialColumnSeries({ name: "series1" });
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
    <igc-radial-column-series
        id="series1"
        angle-axis-name="angleAxis"
        value-axis-name="radiusAxis"
        value-member-path="Budget">
    </igc-radial-column-series>
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
- [シリーズ マーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)


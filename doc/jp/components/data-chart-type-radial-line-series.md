---
title: $PlatformShort$ データ チャート | データ可視化ツール | ラジアル折れ線チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用してラジアル折れ線チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, radial line charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ラジアル折れ線チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','RadialLineSeries']
_language: ja
---
# $PlatformShort$ ラジアル折れ線チャート

$ProductName$ ラジアル折れ線チャートは、放射チャートのグループに属し、データ ポイントを接続する直線のコレクションを使用して描画されます。`RadialLineSeries` は `LineSeries` と同じデータ プロットの概念を使用していますが、横の線に沿って伸びるのではなく、円の周りでデータ ポイントをラップします。

## $PlatformShort$ ラジアル折れ線チャートの例


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-line-series" alt="$PlatformShort$ ラジアル折れ線チャートの例">
</code-view>


<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、`RadialLineSeries` で使用できるのは以下のタイプの軸のみです。

- `NumericRadiusAxis`
- `CategoryAngleAxis`

## データの要件

`RadialLineSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで `RadialLineSeries` がレンダリングされません。
- すべてのデータ項目には、財務軸 (`CategoryAngleAxis` など) の `Label` プロパティにマッピングする必要があるデータ列 （文字列または日時）を少なくとも 1 列含める必要があります
- すべてのデータ項目には、`RadialLineSeries` の `ValueMemberPath` プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。


上記データ要件を満たすデータソースとして [SampleRadialData](data-chart-data-sources-radial.md) を使用できます。

```ts
public dataSource: any[] = SampleRadialData.create();
```

## モジュールの要件

`RadialLineSeries` を作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
RadialLineSeriesModule.Register(IgniteUIBlazor);
RadialLineSeriesCoreModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxRadialLineSeries } from 'igniteui-angular-charts';
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
import { IgrRadialLineSeries } from 'igniteui-react-charts';
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
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartRadialModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartRadialCoreModule,
    IgcDataChartRadialModule,
    IgcDataChartInteractivityModule
);
```

## コード例
このコードは、`RadialLineSeries` を使用して $ProductName$ データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```razor
<DataChart Height="500px" Width="750px">
        <CategoryAngleAxis Name="angleAxis" Label="Department" />
        <NumericRadiusAxis Name="radiusAxis" />
        <RadialLineSeries Name="series1"
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
    <igx-radial-line-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-line-series>
 </igx-data-chart>
```

```tsx
<IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">
    <IgrCategoryAngleAxis name="angleAxis" label="Department" />
    <IgrNumericRadiusAxis name="radiusAxis" />
    <IgrRadialLineSeries
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis" />
</IgrDataChart>
```

```ts
const series1 = new IgrRadialLineSeries({ name: "series1" });
series1.valueMemberPath  = "Budget";
series1.radiusAxisName = "radiusAxis";
series1.angleAxisName = "angleAxis";

const radiusAxis = new IgrNumericRadiusAxis({ name: "radiusAxis" });
const angleAxis = new IgrCategoryAngleAxis({ name: "angleAxis" });
angleAxis.label = "Department";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleRadialData.create();
this.chart.axes.add(radiusAxis);
this.chart.axes.add(angleAxis);
this.chart.series.add(series1);
```

```html
<igc-data-chart id="chart"
    width="100%"
    height="100%">
    <igc-category-angle-axis name="angleAxis" label="Department">
    </igc-category-angle-axis>
    <igc-numeric-radius-axis name="radiusAxis"
    inner-radius-extent-scale="0.1" minimum-value="0">
    </igc-numeric-radius-axis>
    <igc-radial-line-series
        name="series1"
        value-member-path="Budget"
        value-axis-name="radiusAxis"
        angle-axis-name="angleAxis"
        title="Budget">
    </igc-radial-line-series>
    <igc-radial-line-series
        name="series2"
        value-member-path="Spending"
        value-axis-name="radiusAxis"
        angle-axis-name="angleAxis"
        title="Spending">
    </igc-radial-line-series>
</igc-data-chart>
```

```ts
this.chart = document.getElementById("chart") as IgcDataChartComponent;
this.chart.dataSource = SampleRadialData.create();
```

### その他のリソース

- [軸のタイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャート凡例](data-chart-legends.md)
- [シリーズ マーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)


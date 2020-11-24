---
title: $PlatformShort$ データ チャート | データ可視化ツール | 範囲エリア チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して範囲エリア チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, range area charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 範囲エリア チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ 範囲エリア チャート

$ProductName$ 範囲エリア チャートは、範囲チャートのグループに属し、線の間の領域が塗りつぶされた 2 本の線を使用してレンダリングされます。このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数のアイテムを比較します。範囲値は y 軸に表示され、カテゴリは x 軸に表示されます。`RangeAreaSeries` は、範囲が塗りつぶされた領域ではなく垂直柱の集まりで表されること以外は `RangeColumnSeries` と同じです。

## $PlatformShort$ 範囲エリア チャート例

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-range-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-range-area-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、`RangeAreaSeries` で使用できるのは以下のタイプの軸のみです。

- `CategoryXAxis`
- `OrdinalTimeXAxis`
- `TimeXAxis`
- `NumericYAxis`

## データの要件

`RadialAreaSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はチャートで `RangeAreaSeries` がレンダリングされません。
- すべてのデータ項目には、カテゴリ軸の `Label` プロパティにマッピングする必要があるラベルデータ列（文字列または日時）を少なくとも1つ含める必要があります (`CategoryXAxis` など)。
- すべてのデータ項目には、`RangeAreaSeries` の `HighMemberPath` プロパティと `LowMemberPath` プロパティを使用してマップする必要がある少なくとも 2 つの数値データ列が含まれている必要があります。

上記データ要件を満たすデータソースとして [SampleRangeData](data-chart-data-sources-range.md) を使用できます。

```ts
public dataSource: any[] = SampleRangeData.create();
```

## モジュールの要件

`RangeAreaSeries` を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataChartCoreModule        
* RadialPieSeriesModule
* RadialPieSeriesCoreModule      
* DataChartInteractivityModule
<!-- end: Blazor -->

```ts
// in app.module.ts file
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxRangeAreaSeries } from 'igniteui-angular-charts';
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
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrRangeAreaSeries } from 'igniteui-react-charts';
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
import { IgcDataChartCategoryCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartCategoryModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcRangeAreaSeriesModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartInteractivityModule,
    IgcRangeAreaSeriesModule
);
```

## コード例
このコードは、`RangeAreaSeries` を使用して $ProductName$ データ チャートのインスタンスを作成し、それをデータソースにバインドする方法を示します。

```razor
<DataChart Height="500px" Width="750px">
        <CategoryXAxis Name="xAxis" Label="Year" DataSource="@DataSource"/>
        <NumericYAxis  Name="yAxis" />
        <RangeAreaSeries Name="series1" 
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
    <igx-range-area-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-area-series>
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
    <IgrRangeAreaSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low" />
 </IgrDataChart>
```

```ts
const series1 = new IgrRangeAreaSeries({ name: "series1" });
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
    <igc-range-area-series
        id="series1"
        x-axis-name="xAxis"
        y-axis-name="yAxis"
        high-member-path="High"
        low-member-path="Low">
    </igc-range-area-series>
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

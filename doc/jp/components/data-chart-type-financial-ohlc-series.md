---
title: $PlatformShort$ データ チャート | データ可視化ツール | ファイナンシャル OHLC シリーズ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用してファイナンシャル OHLC チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, financial OHLC chart, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ファイナンシャル OHLC チャート, インフラジスティックス
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries','PriceDisplayType','CategoryXAxis']
_language: ja
---
# $PlatformShort$ ファイナンシャル OHLC チャート

`OHLC` 表示モードの $ProductName$ 金融価格チャートは、株価をプロットし、各日の株価の高値、安値、始値、終値を表示するために使用されます。各データ ポイントは、左と右の両側に水平の垂直線を伴った縦の線としてプロットされます。垂直の線は投資の高値と安値の間の範囲を示します。垂直の線の上部は取引期間中の最大の高値を示し、垂直の線の下部は取引期間中の最安値を示します。水平の線は投資の始値と終値の間の範囲を示します。垂直線の左側の水平の線はセッションの開始値を示します。垂直の線の右側の水平の線はセッションの終値を示します。

## サンプル

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-ohlc-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-ohlc-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-ohlc-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-financial-ohlc-series"></sample-button>

</div>

<div class="divider--half"></div>


## 軸の要件

$PlatformShort$ データ チャートコンポーネントはさまざまなタイプの軸を提供しますが、すべての財務シリーズでは、`NumericYAxis` を Y 軸として、`CategoryXAxis`、`OrdinalTimeXAxis`、または `TimeXAxis` を X 軸としてのみ使用できます。

## データの要件

ファイナンシャル シリーズには、以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースは、少なくともデータ項目を 1 つ含む必要があり、含まない場合はデータ チャートでファイナンシャル シリーズを描画しません。
- すべてのデータ項目には、財務軸の `Label` プロパティ (`CategoryXAxis` など) にマッピングされるデータ列 (文字列または日時) が少なくとも1つ含まれている必要があります。
- すべてのデータ項目は、ファイナンシャル シリーズのプロパティ使用してマップされる 5 つの数値データ列を含む必要があります。 `OpenMemberPath`、`HighMemberPath`, `LowMemberPath`、`CloseMemberPath`、`VolumeMemberPath`。

上記データ要件を満たすデータソースとして [SampleFinancialData](data-chart-data-sources-financial.md) を使用できます。

```ts
public dataSource: any[] = SampleFinancialData.create();
```

## モジュールの要件

ファイナンシャル シリーズを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* DataChartCoreModule        
* DataChartFinancialModule
* DataChartFinancialCoreModule
* DataChartFinancialIndicatorsModule        
* DataChartInteractivityModule
<!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxFinancialPriceSeriesModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxFinancialPriceSeriesModule,
        // ...
    ]
})
```

```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
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
import { IgcCategoryXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components:
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryXAxisComponent } from 'igniteui-webcomponents-charts';
// series' modules:
import { IgcFinancialPriceSeriesModule } from 'igniteui-webcomponents-charts';
// series' components:
import { IgcFinancialPriceSeriesComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcFinancialPriceSeriesModule
);
```

## コード例
`FinancialPriceSeries` でデータ チャートのインスタンスを作成する方法を示します。

```razor
<DataChart Height="500px" Width="750px">
    <CategoryXAxis Name="xAxis" Label="Label" DataSource="@DataSource" />
    <NumericYAxis Name="yAxis" />
    <FinancialPriceSeries Name="series1"
        DisplayType="PriceDisplayType.OHLC"
        XAxisName="xAxis"
        YAxisName="yAxis"
        LowMemberPath="Low"
        HighMemberPath="High"
        OpenMemberPath="Open"
        CloseMemberPath="Close"
        VolumeMemberPath="Volume" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

    <igx-financial-price-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="OHLC"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">

    <IgrCategoryXAxis name="xAxis" label="Date" />
    <IgrNumericYAxis  name="yAxis" />

    <IgrFinancialPriceSeries
    name="series1"
    xAxisName="xAxis"
    yAxisName="yAxis"
    displayType="OHLC"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </IgrDataChart>
```

```ts
const series1 = new IgrFinancialPriceSeries({ name: "series1" });
series1.lowMemberPath = "Low";
series1.highMemberPath = "High";
series1.openMemberPath = "Open";
series1.closeMemberPath = "High";
series1.volumeMemberPath = "Volume";
series1.displayType = "OHLC";
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";

const yAxis = new IgrNumericYAxis({ name: "yAxis" });
const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
xAxis.label = "Date";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleFinancialData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-category-x-axis id="xAxis" label="Date"></igc-category-x-axis>
    <igc-numeric-y-axis  id="yAxis"></igc-numeric-y-axis>

    <igc-financial-price-series
        id="series2"
        display-type="OHLC"
        low-member-path="Low"
        high-member-path="High"
        open-member-path="Open"
        close-member-path="Close"
        volume-member-path="Volume">
    </igc-financial-price-series>

 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series2 = (document.getElementById("series2") as IgcFinancialPriceSeriesComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxis;
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



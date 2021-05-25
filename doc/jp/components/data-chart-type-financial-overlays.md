---
title: $Platform$ データ チャート | データ可視化ツール | 財務オーバーレイ | インフラジスティックス
_description: インフラジスティックスの $Platform$ チャート コントロールを使用して財務オーバーレイを表示します。$ProductName$ グラフ タイプについて説明します。
_keywords: $Platform$ charts, data chart, financial overlays, $ProductName$, Infragistics, $Platform$ チャート, データ チャート, 財務オーバーレイ, インフラジスティックス
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
_language: ja
---
# $Platform$ ファイナンシャル オーバーレイ

ファイナンシャル オーバーレイは、株価の動きの計測やトレンドを確認するためにトレーダーによって使用されます。これらのオーバーレイは、同じY軸スケールを共有するため、通常 `FinancialPriceSeries` の前に表示されます。対照的に、財務指標は `FinancialPriceSeries` と同じ Y 軸スケールを共有しないため、通常、財務指標は `FinancialPriceSeries` またはオーバーレイの上または下にプロットされます。ただし、チャート コントロールは同じプロット領域でオーバーレイとインジケーターをサポートします。複数軸の使用や軸を共有することもできます。

## $Platform$ ファイナンシャル オーバーレイの例


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-overlays"
           alt="$Platform$ ファイナンシャル オーバーレイの例"
           github-src="charts/data-chart/type-financial-overlays">
</code-view>

<div class="divider--half"></div>

以下は、利用可能なファイナンシャル オーバーレイです。

- `BollingerBandsOverlay` (BBO) は、価格の標準偏差に基づいて価格変動を幅に取り入れます。バンドは標準偏差が増加すると幅が広くなり、標準偏差が減少すると幅が狭くなります。また、バンドは移動平均で平滑化されます。標準偏差およびユーザーが調整可能な平滑化期間は別にして、BollingerBandsOverlay 幅のスケールに影響を及ぼすユーザーが調整可能な乗数もあります。、
- `PriceChannelOverlay` (PCO) は、価格変動または平行線で価格の経時変化です。下の線はトレンド ラインで低い価格に描画されます。上の線はチャネル ラインで高値に基づきます。チャネルは任意の期間のトレンド方向を示します。価格チャネルまたはトレンドは、上、下または横が可能です。


## 軸の要件

$Platform$ データ チャート コンポーネントはさまざまなタイプの軸を提供しますが、すべての財務シリーズでは、`NumericYAxis` を Y 軸として、`CategoryXAxis`、`OrdinalTimeXAxis`、または `TimeXAxis` を X 軸としてのみ使用できます。

## データの要件

ファイナンシャル オーバーレイには、以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースは、少なくともデータ項目を 1 つ含む必要があり、含まない場合はデータ チャートでファイナンシャル シリーズを描画しません。
- すべてのデータ項目には、財務軸の `Label` プロパティ (`CategoryXAxis` など) にマッピングされるデータ列 (文字列または日時) が少なくとも1つ含まれている必要があります。
- すべてのデータ項目は、ファイナンシャル シリーズのプロパティ使用してマップされる 5 つの数値データ列を含む必要があります。 `OpenMemberPath`、`HighMemberPath`, `LowMemberPath`、`CloseMemberPath`、`VolumeMemberPath`。

上記データ要件を満たすデータソースとして [SampleFinancialData](data-chart-data-sources-financial.md) を使用できます。

```ts
public dataSource: any[] = SampleFinancialData.create();
```

## モジュールの要件

ファイナンシャル シリーズを作成するには、以下のモジュールが必要です。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartFinancialModule.Register(IgniteUIBlazor);
DataChartFinancialCoreModule.Register(IgniteUIBlazor);
DataChartFinancialIndicatorsModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
import { IgxBollingerBandsOverlay } from 'igniteui-angular-charts';
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
import { IgrBollingerBandsOverlay } from 'igniteui-react-charts';
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
import { IgcBollingerBandsOverlayModule } from 'igniteui-webcomponents-charts';
// series' components:
import { IgcFinancialPriceSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcBollingerBandsOverlayComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryCoreModule,
    IgcDataChartCategoryModule,
    IgcFinancialPriceSeriesModule,
    IgcBollingerBandsOverlayModule
);
```

## コード例
`BollingerBandsOverlay` でデータ チャートのインスタンスを作成する方法を示します。

```razor
<DataChart Height="500px" Width="750px">
    <CategoryXAxis Name="xAxis" Label="Label" DataSource="@DataSource" />
    <NumericYAxis Name="yAxis" />
    <BollingerBandsOverlay Name="series1"
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

    <igx-bollinger-bands-overlay
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-bollinger-bands-overlay>

 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="700px"
    height="500px">

    {/* axes */}
    <IgrCategoryXAxis name="xAxis" label="Date" />
    <IgrNumericYAxis  name="yAxis" />

    {/* series */}
    <IgrBollingerBandsOverlay
    name="series1"
    xAxisName="xAxis"
    yAxisName="yAxis"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </IgrDataChart>
```

```ts
const series1 = new IgrBollingerBandsOverlay({ name: "series1" });
series1.lowMemberPath = "Low";
series1.highMemberPath = "High";
series1.openMemberPath = "Open";
series1.closeMemberPath = "High";
series1.volumeMemberPath = "Volume";
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
    <igc-bollinger-bands-overlay
        id="series1"
        low-member-path="Low"
        high-member-path="High"
        open-member-path="Open"
        close-member-path="Close"
        volume-member-path="Volume">
    </igc-bollinger-bands-overlay>

 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBollingerBandsOverlayComponent);
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



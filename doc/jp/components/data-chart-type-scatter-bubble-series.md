---
title: $PlatformShort$ データ チャート | データ可視化ツール | 散布バブル チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して散布バブル チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, scatter bubble charts, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 散布図バブル チャート, インフラジスティックス
mentionedTypes: ['XamDataChart','BubbleSeries']
_language: ja
---
# $PlatformShort$ 散布図 - バブル シリーズ

このトピックは、コード例を示して $PlatformShort$ データ チャート コンポーネントで散布 `BubbleSeries` 使用する方法を説明します。このシリーズ
データをプロットするためにデカルト座標系 (x, y) を使用する[散布図 - マーカーシリーズ](data-chart-type-scatter-point-series.md) に似ています。このシリーズはスケールされたバブルの集まりとしてデータを表示します。それぞれがその位置を決定する一対の数値X / Y値とそのサイズを決定する 3 番目の値を持ちます。


## $PlatformShort$ 散布図 - バブル シリーズの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-bubble-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-bubble-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 散布図 - バブル シリーズの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/type-scatter-bubble-series"></sample-button>

</div>

<div class="divider--half"></div>

## 軸の要件
$PlatformShort$ データ チャート コンポーネントにはさまざまな種類の軸がありますが、`BubbleSeries` では `NumericYAxis` と `NumericYAxis` のみ使用できます。

## データの要件

`BubbleSeries` には以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースはデータ項目を少なくとも 1 つ含む必要があります。含まない場合はチャートに散布シェイプ シリーズを描画しません。
- すべてのデータ項目には、`XMemberPath`、`YMemberPath`、`RadiusMemberPath` プロパティにマップされる 3 つの数値データ列を含める必要があります。

上記データ要件を満たすデータソースとして [SampleScatterStats](data-chart-data-sources-stats.md) を使用できます。

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## モジュールの要件

散布バブル シリーズを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

DataChartCoreModule        
DataChartScatterCoreModule
DataChartScatterModule   
DataChartInteractivityModule
* NumberAbbreviatorModule
```

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxBubbleSeries } from 'igniteui-angular-charts';
import { IgxSizeScale } from 'igniteui-angular-charts';
import { IgxValueBrushScale } from 'igniteui-angular-charts';
import { IgxCustomPaletteBrushScale } from 'igniteui-angular-charts';
import { BrushSelectionMode } from 'igniteui-angular-charts';
import { MarkerType } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```


```ts
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteBrushScale } from 'igniteui-react-charts';
import { BrushSelectionMode } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';

// registering data chart's modules:
IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
```

```ts
// module manager
import { ModuleManager } from 'igniteui-webcomponents-core';
// data chart's modules
import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterModule } from 'igniteui-webcomponents-charts';
// axis' modules:
import { IgcNumericYAxisModule } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisModule } from 'igniteui-webcomponents-charts';
// axis' components
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
// series modules:
import { IgcBubbleSeriesModule } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleModule } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleModule } from 'igniteui-webcomponents-charts';
import { IgcCustomPaletteBrushScaleModule } from 'igniteui-webcomponents-charts';
import { BrushSelectionMode } from 'igniteui-webcomponents-charts';
import { MarkerType } from 'igniteui-webcomponents-charts';
// series' components
import { IgcBubbleSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcValueBrushScaleComponent } from "igniteui-webcomponents-charts";
import { IgcCustomPaletteBrushScaleComponent } from 'igniteui-webcomponents-charts';
// data chart component
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcBubbleSeriesModule,
    IgcSizeScaleModule,
    IgcValueBrushScaleModule,
    IgcCustomPaletteBrushScaleModule
);
```

## コード例
このコードは、`BubbleSeries` でデータチャートのインスタンスを作成し、データソースにバインドする方法を説明します。

```razor
<DataChart Height="500px" Width="750px">
    <NumericXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />
    <BubbleSeries Name="series1"
        XAxisName="xAxis"
        YAxisName="yAxis"
        DataSource="@DataSource"
        XMemberPath="Population"
        YMemberPath="GdpTotal"
        RadiusMemberPath="GdpPerCapita" />
</DataChart>
```

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>

    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita">
    </igx-bubble-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart
    dataSource={this.state.dataSource}
    width="500px"
    height="500px">
    {/* axes */}
    <IgrNumericXAxis name="xAxis" isLogarithmic="true" />
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    {/* series: */}
    <IgrBubbleSeries
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="population"
     yMemberPath="gdpTotal"
     radiusMemberPath="gdpPerCapita" />
 </IgrDataChart>
```

```ts
const xAxis = new IgrNumericXAxis({ name: "xAxis" });
const yAxis = new IgrNumericYAxis({ name: "yAxis" });

const series1 = new IgrBubbleSeries({ name: "series1" });
series1.xAxisName = "xAxis";
series1.yAxisName = "yAxis";
series1.xMemberPath = "population";
series1.yMemberPath = "gdpTotal";
series1.radiusMemberPath = "gdpPerCapita";

this.chart = new IgrDataChart({ name: "chart" });
this.chart.dataSource = SampleShapeData.create();
this.chart.axes.add(yAxis);
this.chart.axes.add(xAxis);
this.chart.series.add(series1);
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis id="xAxis" is-logarithmic="true"></igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis" is-logarithmic="true"></igc-numeric-y-axis>

    <igc-bubble-series
        id="series1"
        x-member-path="population"
        y-member-path="gdpTotal"
        radius-member-path="gdpPerCapita">
    </igc-bubble-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;
```

## バブル形状

BubbleSeries  の外観は、[Markers](data-chart-series-markers.md) プロパティの使用やバブルの形状を定義済みの形状の 1 つに変更してカスタマイズすることができます。次に例を示します。

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue">
</igx-bubble-series>
```

```tsx
<IgrBubbleSeries
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
/>
```

```html
<igc-bubble-series
 id="series1"
 marker-type="Square"
 marker-brush="White"
 marker-oOutline="Blue">
</igc-bubble-series>
```

```ts
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

```ts
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

```ts
const series1 = new IgcBubbleSeriesComponent();
series1.id = "series1";
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

## バブル半径スケール

`RadiusScale` は、バブルのサイズを決定する BubbleSeries のオプション機能です。この機能は、` SizeScale` オブジェクトを介して実装できます。半径スケールが設定されると、最小のバブルは `MinimumValue` と等しくなり、最大のバブルは `MaximumValue` と等しくなり、すべての残りのバブルはそれに応じて拡大/縮小されます。サイズ スケールはリニアと対数のどちらでもかまいません。半径スケールが設定されていない場合、各バブルのサイズは `RadiusMemberPath` プロパティにマップされたデータ列の値と等しくなります。

```ts
const sizeScale = new IgxSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

```ts
const sizeScale = new IgrSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

```ts
const sizeScale = new IgcSizeScaleComponent();
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.radiusScale = sizeScale;
```

## バブル塗りつぶしスケール

`FillScale` は、単一の `BubbleSeries` 内のカラーパターンを決定するオプション機能です。このシリーズは、以下の塗りつぶしスケールをサポートします。

- `ValueBrushScale` は、`FillMemberPath` プロパティにマップされたデータ列の値のセットを使用して、バブルの補間ブラシを決定します。またユーザー指定の `MinimumValue` や `MaximumValue` を持つこともできます。このスケールで範囲が設定されると、範囲外になる値を持つバブルが `Brushes` コレクションからブラシを取得せずに、色も付けられません。
- `CustomPaletteBrushScale` は、`Brushes` コレクションからブラシを選択するバブル マーカーのインデックスを使用します。`BrushSelectionMode` プロパティが `Select` enumerable値に設定されている場合、バブルは順番に色付けされ、`Interpolate` に設定されます。ブラシは、バブルのインデックスとコレクション内のブラシの数に基づいて補間されます。

```ts
const brushScale = new IgxValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgxCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

```ts
const brushScale = new IgrValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgrCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgrBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

```ts
const brushScale = new IgcValueBrushScaleComponent();
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgcCustomPaletteBrushScaleComponent();
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.fillScale = brushScale;
```

### その他のリソース

- [軸のタイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [チャート凡例](data-chart-legends.md)
- [シリーズ マーカー](data-chart-series-markers.md)
- [シリーズのツールチップ](data-chart-series-tooltips.md)
- [シリーズ トレンドライン](data-chart-series-trendlines.md)
- [シリーズ タイプ](data-chart-series-types.md)


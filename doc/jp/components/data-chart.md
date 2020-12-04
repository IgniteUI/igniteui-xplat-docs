---
title: $PlatformShort$ データ チャート | データ可視化 | インフラジスティックス
_description: 複数の視覚的要素のインスタンスを表示する $PlatformShort$ データ チャートを簡単に作成して、複合チャート ビューを作成します。今日から始められます。
_keywords: data chart, $PlatformShort$ component, $PlatformShort$ chart, $ProductName$, charting component, データ チャート, $PlatformShort$ コンポーネント, $PlatformShort$ チャート, チャート作成コンポーネント
mentionedTypes: ['XamDataChart', 'SeriesType']
_language: ja
---
# $PlatformShort$ データ チャート

$PlatformShort$ データ チャートは、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。データ チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。

## $PlatformShort$ データ チャートの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ データ チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/chart-overview"></sample-button>

</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## 依存関係
$PlatformShort$ データ チャート パッケージをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件

$PlatformShort$ データ チャート コンポーネントを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

```razor
DataChartCoreModule.Register(IgniteUIBlazor);
DataChartScatterCoreModule,
DataChartScatterModule,
NumberAbbreviatorModule.Register(IgniteUIBlazor);
```

```ts
import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxNumberAbbreviatorModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';
import { IgxBubbleSeriesComponent } from 'igniteui-angular-charts';
import { IgxNumericXAxisComponent } from 'igniteui-angular-charts';
import { IgxNumericYAxisComponent } from 'igniteui-angular-charts';
import { IgxSizeScaleComponent } from 'igniteui-angular-charts';
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
        IgxNumberAbbreviatorModule
    ]
})
export class AppModule { /* ... */ }
```

```ts
// data chart's modules required for all series:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
// scatter series' modules:
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
// scatter series elements:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrNumberAbbreviatorModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';

import { IgcDataChartCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcNumberAbbreviatorModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterCoreModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartScatterModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericXAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
import { IgcBubbleSeriesComponent } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleComponent } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcDataChartCoreModule,
    IgcDataChartScatterCoreModule,
    IgcDataChartScatterModule,
    IgcDataChartInteractivityModule,
    IgcNumberAbbreviatorModule
);
```

<div class="divider--half"></div>


## サポートされるシリーズ

$PlatformShort$ チャート作成コンポーネントは、[カテゴリ シリーズ](data-chart-type-category-series.md), [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[極座標シリーズ](data-chart-type-polar-series.md)、[ラジアル シリーズ](data-chart-type-radial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md) を含む 65 種類以上のシリーズをサポートします。サポートされている[シリーズ](data-chart-series-types.md)のタイプとそれらの使用方法のリストについては、シリーズのトピックを参照してください。

## サポートされる軸
$PlatformShort$ データ チャート コンポーネントは、特定の種類のシリーズで使用することを目的としたさまざまな種類の軸をサポートします。以下の表はシリーズ タイプで使用できます。   これらのタイプの軸の使用方法については、[シリーズ](data-chart-series-types.md)と[軸](data-chart-axis-types.md)のトピックを参照してください。

軸タイプ           |サポートされるシリーズ タイプ
--------------------|-----------------------
CategoryYAxis       |[カテゴリ シリーズ ](data-chart-type-category-series.md) グループの `Bar` のみ
CategoryXAxis       |すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) (`Bar` を除く)
TimeXAxis           |すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) (`Bar` を除く)
OrdinalTimeXAxis    |すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) (`Bar` を除く)
PercentChangeYAxis|すべての [ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md)、[散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md)
NumericYAxis        |すべての [散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md)、[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md)
NumericXAxis        |[カテゴリ シリーズ](data-chart-type-category-series.md) グループのすべての [散布シリーズ](data-chart-type-scatter-bubble-series.md)、[図形シリーズ](data-chart-type-shape-series.md)、`Bar`
NumericAngleAxis   |すべての [極座標シリーズ](data-chart-type-polar-series.md)
NumericRadiusAxis|すべての [極座標シリーズ](data-chart-type-polar-series.md) と [ラジアル シリーズ](data-chart-type-radial-series.md)
CategoryAngleAxis|すべての [ラジアル シリーズ](data-chart-type-radial-series.md)


## 使用方法
$PlatformShort$ データ チャート モジュールがインポートされたので、以下のステップはチャートをデータにバインドすることです。すべてのシリーズを正しく表示するには、特定の数と種類のデータ列が必要です。[データソース](data-chart-data-sources.md) のトピックで、系列の種類ごとにデータソースを見つけることができます。

以下のコード スニペットは、散布 `Bubble` を作成し、それを [SampleScatterStats](data-chart-data-sources-stats.md) データにバインドする方法を示しています。

> [!NOTE]
>
> チャート コンポーネントにデータソースを設定すると、すべてのシリーズに適用されますが、データ チャートに追加された各シリーズに異なるデータソースを設定することもできます。

```razor
<div class="igComponent">

    @if (DataSource != null)
    {        
        <DataChart Height="500px" Width="700px" DataSource="@DataSource">
            <NumericXAxis Name="xAxis" IsLogarithmic="true"/>            
            <NumericYAxis Name="yAxis" IsLogarithmic="true"/>            
            <BubbleSeries Name="series1" 
                XAxisName="xAxis"
                YAxisName="yAxis"               
                XMemberPath="Population"
                YMemberPath="GdpTotal"
                RadiusMemberPath="GdpPerCapita"
                DataSource="@DataSource"/>
        </DataChart>                          
    }

</div>
```

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" ></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" ></igx-numeric-y-axis>
    <igx-bubble-series
        name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        xMemberPath="population"
        yMemberPath="gdpTotal"
        radiusMemberPath="gdpPerCapita"
        [dataSource]="data"  ></igx-bubble-series>
 </igx-data-chart>
```

```tsx
 <IgrDataChart dataSource={this.data}
               width="700px"
               height="500px">
    <IgrNumericXAxis name="xAxis" isLogarithmic="true" />
    <IgrNumericYAxis name="yAxis" isLogarithmic="true"/>
    <IgrBubbleSeries
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="population"
        yMemberPath="gdpTotal"
        radiusMemberPath="gdpPerCapita"
        dataSource={this.data}  />
 </IgrDataChart>
```

```html
 <igc-data-chart id="chart"
    width="700px"
    height="500px">
    <igc-numeric-x-axis id="xAxis"
        is-logarithmic="true"
        abbreviate-large-numbers="true"
        minimum-value="10000"
        maximum-value="1000000000">
    </igc-numeric-x-axis>
    <igc-numeric-y-axis id="yAxis"
        is-logarithmic="true"
        abbreviate-large-numbers="true">
    </igc-numeric-y-axis>
    <igc-bubble-series id="series1"
        x-member-path="population"
        y-member-path="gdpTotal"
        radius-member-path="gdpPerCapita">
    </igc-bubble-series>
 </igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data1;

let sizeScale = new IgcSizeScaleComponent();
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;

let xAxis = (document.getElementById("xAxis") as IgcNumericXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcBubbleSeriesComponent);
series1.dataSource = data1;
series1.xAxis = xAxis;
series1.yAxis = yAxis;
series1.radiusScale = sizeScale;
```

<div class="divider--half"></div>


### その他のリソース

- [軸タイプ](data-chart-axis-types.md)
- [軸の共有](data-chart-axis-sharing.md)
- [軸の設定](data-chart-axis-settings.md)
- [チャートの凡例](data-chart-legends.md)
- [シリーズのマーカー](data-chart-series-markers.md)
- [シリーズ タイプ](data-chart-series-types.md)


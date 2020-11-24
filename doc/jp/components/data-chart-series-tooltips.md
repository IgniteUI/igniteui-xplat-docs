---
title: $PlatformShort$ データ チャート | データ可視化ツール | ツールチップ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャートのツールチップを使用して、重要なデータを表示します。$ProductName$ グラフ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ charts, data chart, tooltips, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ ツールチップ

$PlatformShort$ データ チャート コンポーネントは、2 つのツールチップ 「レイヤー」 と共にツールチップを表示できます。これらのツールチップを使用すると、データ チャート内の各シリーズに関するコンテキスト情報を確認するのに役立ちます。

## $PlatformShort$ ツールチップ例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-tooltips-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ツールチップ例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-tooltips-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/data-chart/series-tooltips"></sample-button>

</div>

<div class="divider--half"></div>

$PlatformShort$ データ チャート コンポーネントでツールチップ レイヤーを有効にするには、対話モジュールをインポートして登録する必要があります。以下のコードを使用できます。

<!-- Blazor -->
* DataChartInteractivityModule
<!-- end: Blazor -->

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

```ts
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrDataChartInteractivityModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// tooltip modules
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcCategoryToolTipLayerModule } from 'igniteui-webcomponents-charts';
import { IgcItemToolTipLayerModule } from 'igniteui-webcomponents-charts';

// register the modules
ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcCategoryToolTipLayerModule,
    IgcItemToolTipLayerModule
);
```

## デフォルト ツールチップ

$PlatformShort$ データ チャート コンポーネントは、各シリーズ タイプにデフォルト ツールチップを提供します。デフォルトのツールチップには、シリーズのタイトル、データ値、軸の値など、ホバーされている特定のシリーズ項目に関連するすべての情報が表示されます。これらもシリーズの外観に合わせてスタイル設定されています。

次のコード スニペットは、$PlatformShort$ データ チャート コンポーネントで既定のツールチップを有効にする方法を示しています。

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value"
        ShowDefaultTooltips="true"
        DataSource="@data" />  
</DataChart>
```

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip={true} />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series name="series1"
        value-member-path="Value"
        show-default-tooltip="true">
    </igc-column-series>

</igc-data-chart>
```

## カテゴリ ツールチップ レイヤー

CategoryToolTipLayer は、カテゴリ軸を使用する $PlatformShort$ データ チャート コンポーネントのシリーズ用にグループ化されたヒントを表示します。グループ化されたツールチップは現在、$PlatformShort$ データ チャート コンポーネントの上部に表示されています。

以下のコードは、カテゴリ ツールチップ レイヤーを $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value"
        ShowDefaultTooltips="true"
        DataSource="@data" />
    <CategoryToolTipLayer></CategoryToolTipLayer>  
</DataChart>
```

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-category-tooltip-layer></igx-category-tooltip-layer>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip={true} />

    <IgrCategoryToolTipLayer name="CategoryToolTipLayer" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series name="series1"
        value-member-path="Value"
        show-default-tooltip="true">
    </igc-column-series>

    <igc-category-tooltip-layer></igc-category-tooltip-layer>

</igc-data-chart>
```

## 項目ツールチップ レイヤー

項目ツールチップ レイヤーは、特定のシリーズにマウスがホバーする場合に $PlatformShort$ データ チャート コンポーネント上のすべてのシリーズに関するヒントを個別に表示します。ツールチップスタイルは、ツールチップを表示しているシリーズから継承されます。

以下のコードは、項目ツールチップ レイヤーを $PlatformShort$ データ チャート コンポーネントに追加する方法を示します。

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value"
        ShowDefaultTooltips="true"
        DataSource="@data" />
    <ItemToolTipLayer></ItemToolTipLayer>  
</DataChart>
```

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-item-tooltip-layer></igx-item-tooltip-layer>

</igx-data-chart>
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px">

    <IgrCategoryXAxis name="xAxis" />
    <IgrNumericYAxis name="yAxis" />

    <IgrColumnSeries name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip={true} />

    <IgrItemToolTipLayer />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series name="series1"
        value-member-path="Value"
        show-default-tooltip="true">
    </igc-column-series>

    <igc-item-tooltip-layer></igc-item-tooltip-layer>

</igc-data-chart>
```

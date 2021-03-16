---
title: $PlatformShort$ データ チャート | データ可視化ツール | 強調表示 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用すると、グラフの領域を強調表示できます。$Product Name$ 強調表示機能について説明します。
_keywords: $PlatformShort$ charts, data chart, highlighting, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 強調表示, インフラジスティックス 
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ ハイライト

$PlatformShort$ データ チャート コンポネントを使用すると、データ チャートにプロットされたシリーズを強調表示し、マウスが移動している項目またはシリーズを視覚化、または強調表示レイヤーを使用して視覚化できます。

> [!NOTE]
> 注: ハイライトは、積層型シリーズで現在サポートされていません。

## $PlatformShort$ ハイライトの例


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-highlighting" 
           alt="$PlatformShort$ ハイライトの例" 
           github-src="charts/data-chart/series-highlighting">
</code-view>

<div class="divider--half"></div>

$PlatformShort$ データ チャート コンポネントでハイライトを有効にするには、対話モジュールをインポートして登録する必要があります。以下のコードを使用できます。

```razor
DataChartInteractivityModule.Register(IgniteUIBlazor);
DataChartAnnotationModule.Register(IgniteUIBlazor);
```

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        IgxDataChartInteractivityModule,
        IgxDataChartAnnotationModule,
    ]
})
```

```ts
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-angular-charts';

IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
```

```ts
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcDataChartAnnotationModule } from 'igniteui-webcomponents-charts';

IgcDataChartInteractivityModule.register();
IgcDataChartAnnotationModule.register();
```

## シリーズ ビジュアルをハイライト

$PlatformShort$ データ チャート コンポネントのシリーズ ハイライト機能を使用すると、単一の項目またはシリーズ全体を強調表示できます。たとえば、折れ線シリーズを使用している場合、ハイライトは線の形状全体を 1 つの単一形状として強調表示します。ただし、列シリーズなどのシリーズの各項目にハイライトを適用することはできます。

次のコード スニペットは、データ チャートのシリーズで強調表示を有効にする方法を示しています。

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value1"
        IsHighlightingEnabled="true"
        DataSource="@data" />
    <ColumnSeries name="series2"
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value2"
        IsHighlightingEnabled="true" />    
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
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
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
        valueMemberPath="Value1"
        isHighlightingEnabled={this.state.isSeriesHighlighting} />
    <IgrColumnSeries name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled={this.state.isSeriesHighlighting}  />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series id="series1"
        value-member-path="Value1"
        is-highlighting-enabled=true>
    </igc-column-series>

    <igc-column-series id="series2"
        value-member-path="Value2"
        is-highlighting-enabled=true>
    </igc-column-series>
</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let series2 = (document.getElementById("series2") as IgcColumnSeriesComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxis;
```

## シリーズ カテゴリをハイライト

カテゴリ軸または $PlatformShort$ データ チャート コンポネント内のすべてのカテゴリ軸に対する注釈レイヤーを表します。軸に、軸の主グリッド線の間に配置されるシリーズ、たとえば列シリーズなどが含まれる場合、現在のカテゴリを塗りつぶすシェイプが描画されます。

ライン シリーズなどその他のシリーズの場合、マウス位置に最も近いグリッドラインで調節可能な幅を持つバンドを描画します。この場合、`UseInterpolation` プロパティが有効になると、x 位置がカーソルの x 位置に付け加えられます。

`Brush` プロパティを設定して、強調表示領域の色を変更することもできます。

以下は、データ チャートにカテゴリ ハイライト レイヤーを追加する方法を示すコード スニペットです。

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name=xAxis />
    <NumericYAxis Name=yAxis />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value1"
        IsHighlightingEnabled="true"
        DataSource="@data" />
    <ColumnSeries name="series2"
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value2"
        IsHighlightingEnabled="true" /> 
    <CategoryHighlightLayer />   
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
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-highlight-layer></igx-category-highlight-layer>

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
        valueMemberPath="Value1" />

    <IgrColumnSeries name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2" />

    <IgrCategoryHighlightSeries />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series id="series1"
        value-member-path="Value1"
        is-highlighting-enabled=true>
    </igc-column-series>

    <igc-column-series id="series2"
        value-member-path="Value2"
        is-highlighting-enabled=true>
    </igc-column-series>

    <igc-category-highlight-layer>
    </igc-category-highlight-layer>
</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let series2 = (document.getElementById("series2") as IgcColumnSeriesComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxis;
```

## シリーズ項目をハイライト

カテゴリ項目ハイライト レイヤーは、縞模様の図形またはマーカーをその位置で描画することにより、カテゴリ軸を使用してシリーズの項目を強調表示します。

デフォルトの強調表示はシリーズの型に依存します。たとえば、列シリーズと行シリーズのハイライトは異なります。列シリーズの場合は縞模様で、ライン シリーズの場合はマーカーです。`HighlightType` プロパティを設定してデフォルトの強調表示をオーバーライドできます。

次のコード スニペットは、$PlatformShort$ データ チャート コンポネントにカテゴリ項目ハイライト レイヤーを追加する方法を示しています。

```razor
<DataChart Height="400px" Width="100%">
    <CategoryXAxis Name="xAxis" />
    <NumericYAxis Name="yAxis" />

    <ColumnSeries name="series1" 
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value1"
        IsHighlightingEnabled="true"
        DataSource="@data" />
    <ColumnSeries name="series2"
        XAxisName="xAxis"
        YAxisName="yAxis" 
        ValueMemberPath="Value2"
        IsHighlightingEnabled="true" /> 
    <CategoryItemHighlightLayer />   
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
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-item-highlight-layer></igx-category-item-highlight-layer>

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
        valueMemberPath="Value1" />

    <IgrColumnSeries name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="Value2" />

    <IgrCategoryHighlightLayer name="CategoryHighlightLayer" />
</IgrDataChart>
```

```html
<igc-data-chart id="chart"
    height="400px"
    width="100%">

    <igc-category-x-axis id="xAxis"></igc-category-x-axis>
    <igc-numeric-y-axis id="yAxis"></igc-numeric-y-axis>

    <igc-column-series id="series1"
        value-member-path="Value1"
        is-highlighting-enabled=true>
    </igc-column-series>

    <igc-column-series id="series2"
        value-member-path="Value2"
        is-highlighting-enabled=true>
    </igc-column-series>

    <igc-category-item-highlight-layer>
    </igc-category-item-highlight-layer>
</igc-data-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcDataChartComponent);
chart.dataSource = data;

let xAxis = (document.getElementById("xAxis") as IgcCategoryXAxisComponent);
let yAxis = (document.getElementById("yAxis") as IgcNumericYAxisComponent);

let series1 = (document.getElementById("series1") as IgcColumnSeriesComponent);
series1.xAxis = xAxis;
series1.yAxis = yAxis;

let series2 = (document.getElementById("series2") as IgcColumnSeriesComponent);
series2.xAxis = xAxis;
series2.yAxis = yAxis;
```


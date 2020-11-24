---
title: $PlatformShort$ スパークライン | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ スパークライン チャート コントロールを使用して、グリッド セルやスタンドアロンなどのコンパクトなレイアウトで描画します。$ProductName$ スパークライン チャートの設定可能な要素について説明します。
_keywords: Sparkline, $ProductName$, Infragistics, WinLoss, Area, Column, スパークライン, インフラジスティックス, エリア, 列
mentionedTypes: ['XamSparkline', 'SparklineDisplayType', 'TrendLineType']
_language: ja
---

# $PlatformShort$ スパークラインの概要

$ProductName$ スパークライン コンポーネントは、軽量なチャート コントロールです。グリッド セル内などのコンパクトなレイアウト内でのレンダリングを目的としていますが、単独でレンダリングすることもできます。

スパークライン コントロールには、チャートの種類、マーカー、範囲、トレンドライン、不明な値のプロット、ツールチップなど、構成およびカスタマイズが可能ないくつかの視覚的要素とそれに対応する機能があります。

## $PlatformShort$ スパークラインの概要例

<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ スパークラインの概要例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz　で表示
    </button>
</div>
<sample-button src="charts/sparkline/display-types"></sample-button>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## 依存関係
$ProductName$ スパークライン コンポーネントを使用するには、以下のパッケージをインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

$PlatformShort$ スパークライン コンポーネントには、以下のモジュールのインポートが必要です。

```ts
// app.module.ts
import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxSparklineCoreModule } from "igniteui-angular-charts";
import { SparklineDisplayType } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxSparklineCoreModule,
        IgxSparklineModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { SparklineDisplayType } from 'igniteui-react-charts';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();
```

```ts
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';
import { SparklineDisplayType } from 'igniteui-webcomponents-charts';

ModuleManager.register(IgcSparklineModule);
```

```razor
@code {
    protected override void OnInitialized()
    {
        SparklineModule.Register(IgniteUIBlazor);
    }
}
```

## スパークラインのタイプ

$ProductName$ スパークライン コンポーネントは、以下のスパークライン タイプをサポートしています。

- `Area`
- `Column`
- `Line`
- `WinLoss`

タイプは `DisplayType` プロパティの設定により定義されます。`DisplayType` プロパティが指定されていない場合は、既定では `Line` 型が表示されます。

`WinLoss` スパークライン タイプは、柱状のチャート タイプです。ここでは、各列の値はデータセットの正の最大値 (正の値の場合) または負の最小値 (負の値の場合) に等しくなり、多くの場合 Win または Loss  (または似たような相反する概念) を意味します。`WinLoss` スパークラインを正しく表示するには、データセットには正の値と負の値が必要です。

`WinLoss` スパークラインが、数値のコレクションにバインドできる `Line` タイプなどの他のタイプと同じデータにバインドされている場合、スパークライン コンポーネントはそのコレクションから最大値と最小値の 2 つの値を選択し、それらの値に基づいてスパークラインをレンダリングします。

```html
<igx-sparkline height="200px" width="400px"
    [dataSource]="data"
    valueMemberPath="Value"
    displayType="Area" />
```

```tsx
<IgrSparkline height="200px" width="400px"
    dataSource={this.data}
    valueMemberPath="Value"
    displayType="Area" />
```

```html
<igc-sparkline id="chart1"
    height="33%"
    width="100%"
    display-type="WinLoss"
    value-member-path="Value1">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    DisplayType="SparklineDisplayType.Area"
    ValueMemberPath="Value"
    LabelMemberPath="Angle" />
```

```ts
    this.chart1 = document.getElementById("chart1") as IgcSparklineComponent;
    this.chart1.dataSource = this.data1;
```
<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="charts/sparkline/display-types"></sample-button>


<div class="divider--half"></div>

## マーカー

$ProductName$ スパークライン コンポーネントを使用すると、マーカーをシリーズ上の円形のアイコンとして表示して、X/Y 座標に基づいて個々のデータポイントを示すことができます。マーカーは、表示タイプが Line、Area、および Column のスパークラインに設定できます。``WinLoss`` 型のスパークラインは、現在マーカーを設定できません。既定では、マーカーは表示されません。

スパークライン内のマーカーは、以下の場所を任意に組み合わせて配置できます。

- `すべて`: スパークライン内のすべてのデータ ポイントにマーカーを表示します。
- `低値`: 最低値のデータ ポイントにマーカーを表示します。最小値に複数の点がある場合は、その値を持つ各点に表示されます。
- `高値`: 最低値のデータ ポイントにマーカーを表示します。最高値に複数のポイントがある場合は、その値を持つ各ポイントに表示されます。
- `始値`: スパークラインの最初のデータポイントにマーカーを表示します。
- `終値`: スパークラインの最後のデータ ポイントにマーカーを表示します。
- `負数`: スパークラインにプロットされた負のデータ点にマーカーを表示します。

上記のすべてのマーカーは、色、可視性、およびサイズの観点で関連マーカー タイプのプロパティを使用してカスタマイズできます。たとえば、上記の `Low` マーカーは、`LowMarkerBrush`、`LowMarkerVisibility`、`LowMarkerSize` の各プロパティを持ちます。

```html
<igx-sparkline
    highMarkerVisibility="Visible"
    lowMarkerVisibility="Visible"
    firstMarkerVisibility="Visible"
    lastMarkerVisibility="Visible"
    negativeMarkerVisibility="Visible"
    markerVisibility="Collapsed"
    markerSize="10"
    firstMarkerSize="10"
    lastMarkerSize="10"
    lowMarkerSize="10"
    highMarkerSize="10"
    negativeMarkerSize="10"/>
```

```tsx
<IgrSparkline
    highMarkerVisibility="Visible"
    lowMarkerVisibility="Visible"
    firstMarkerVisibility="Visible"
    lastMarkerVisibility="Visible"
    negativeMarkerVisibility="Visible"
    markerVisibility="Collapsed"
    markerSize={10}
    firstMarkerSize={10}
    lastMarkerSize={10}
    lowMarkerSize={10}
    highMarkerSize={10}
    negativeMarkerSize={10}/>
```

```html
 <igc-sparkline id="sparkline"
    minimum="-3"
    maximum="8"
    marker-visibility="Visible"
    high-marker-visibility="Visible"
    low-marker-visibility="Visible"
    first-marker-visibility="Visible"
    last-marker-visibility="Visible"
    negative-marker-visibility="Visible"
    marker-size="10"
    first-marker-size="1"
    last-marker-size="10"
    low-marker-size="10"
    high-marker-size="10"
    negative-marker-size="10">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    Minimum="-3"
    Maximum="8"
    MarkerVisibility="Visibility.Visible"
    HighMarkerVisibility="Visibility.Visible"
    LowMarkerVisibility="Visibility.Visible"
    FirstMarkerVisibility="Visibility.Visible"
    LastMarkerVisibility="Visibility.Visible"
    NegativeMarkerVisibility="Visibility.Visible"
    MarkerSize="10"
    FirstMarkerSize="1"
    LastMarkerSize="10"
    LowMarkerSize="10"
    HighMarkerSize="10"
    NegativeMarkerSize="10" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-markers-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-markers' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-markers-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="charts/sparkline/markers"></sample-button>

<div class="divider--half"></div>

## 標準範囲

$ProductName$ スパークライン コンポーネントの通常の範囲機能は、データが視覚化されているときに定義済みの意味のある範囲を表す水平方向の縞模様です。標準範囲は、指定した色のアウトラインで網掛けエリアとして設定できます。

通常の範囲は、最大データ ポイントよりも広い場合もあれば、それを超える場合もあります。また、しきい値インジケータとして機能するように、スパークラインの `Line` 表示タイプと同じ幅にすることもできます。正常範囲の幅は、正常範囲を表示するために最低限必要な以下の 3 つのプロパティによって決まります。

- `NormalRangeVisibility`: 標準範囲が表示されるかどうか。
- `NormalRangeMaximum`: 範囲の下境界線。
- `NormalRangeMinimum`: 範囲の上境界線。

既定では、標準範囲は表示されません。有効にすると、標準範囲は薄い灰色の外観で表示されますが、`NormalRangeFill` プロパティを使用して構成することもできます。

DisplayNormalRangeInFront プロパティを設定することで、スパークライン コンポーネントのプロットされたシリーズの前または後ろに標準範囲を表示するかどうかを設定することもできます。

```html
<igx-sparkline
    normalRangeVisibility="Visible"
    normalRangeMinimum="1"
    normalRangeMaximum="4"
    normalRangeFill="rgba(88, 88, 88, 0.4)"
    displayNormalRangeInFront="true" />
```

```tsx
<IgrSparkline
    normalRangeVisibility="Visible"
    normalRangeMinimum={1}
    normalRangeMaximum={4}
    normalRangeFill="rgba(255, 0, 0, 0.4)"
    displayNormalRangeInFront="true"  />
```
```html
<igc-sparkline id="sparkline"
    normal-range-visibility="Visible"
    normal-range-minimum="1"
    normal-range-maximum="4"
    normal-range-fill="rgba(255, 0, 0, 0.4)"
    display-normal-range-in-front="true" >
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    NormalRangeVisibility="Visibility.Visible"
    NormalRangeMinimum="1"
    NormalRangeMaximum="4"
    NormalRangeFill="rgba(255, 0, 0, 0.4)"
    DisplayNormalRangeInFront="true" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-normal-range-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-normal-range' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-normal-range-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="charts/sparkline/normal-range"></sample-button>

<div class="divider--half"></div>

## トレンドライン

$ProductName$ スパークライン コンポーネントは、実際のスパークライン レイヤーの上に別のレイヤーとして表示される一連のトレンドラインをサポートしています。近似曲線を表示するには、`TrendLineType` プロパティを使用します。

近似曲線は、チャートがバインドされているデータの値を使用して、`TrendLineType` プロパティで指定されたアルゴリズムに従って計算されます。

近似曲線は一度に 1 つだけ表示でき、デフォルトでは近似曲線は表示されません。

サポートされている近似曲線のリストは以下にあります。

- `None`
- `CubicFit`
- `CumulativeAverage`
- `ExponentialAverage`
- `ExponentialFit`
- `LinearFit`
- `LogarithmicFit`
- `ModifiedAverage`
- `PowerLawFit`
- `QuadraticFit`
- `QuarticFit`
- `QuinticFit`
- `SimpleAverage`
- `WeightedAverage`

以下のコード例は、$ProductName$ スパークライン コンポーネントで近似曲線を有効にする方法を示しています。

```html
<igx-sparkline
    trendLineThickness="3"
    trendLinePeriod="5"
    trendLineType="ExponentialFit"
    trendLineBrush="gray" />
```

```tsx
<IgrSparkline
    trendLineThickness={3}
    trendLinePeriod={5}
    trendLineType="ExponentialFit"
    trendLineBrush="Red"  />
```
```html
<igc-sparkline id="chart1"
    trend-line-thickness="3"
    trend-line-period="5"
    trend-line-type="ExponentialFit"
    trend-line-brush="Red">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    TrendLineThickness="3"
    TrendLinePeriod="5"
    TrendLineType="TrendLineType.ExponentialFit"
    TrendLineBrush="Red" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="charts/sparkline/trendlines"></sample-button>


<div class="divider--half"></div>

## 不明な値の補間

$ProductName$ スパークライン コンポーネントは、不明な値を検出し、指定された補間アルゴリズムを介して不明な値のためのスペースを描画することができます。データに null 値が含まれていて、この機能を使用しない場合、つまり補間が指定されていない場合、不明な値はプロットされません。

未知の値をプロットするために、スパークライン コンポーネントの `UnknownValuePlotting` プロパティを設定することができます。

```html
<igx-sparkline
    unknownValuePlotting="LinearInterpolate" />
```

```tsx
<IgrSparkline
    unknownValuePlotting="LinearInterpolate" />
```

```html
<igc-sparkline id="sparkline"
    unknown-value-plotting="LinearInterpolate">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    UnknownValuePlotting="UnknownValuePlotting.LinearInterpolate"/>
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-unknown-values-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-unknown-values' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-unknown-values-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="charts/sparkline/unknown-values"></sample-button>

<div class="divider--half"></div>


## データ グリッドのスパークライン

$ProductName$ スパークライン コンポーネントは、データ グリッドのテンプレート列またはテンプレートをサポートする他のコンポーネントに埋め込むことができます。以下のコード例ではその方法を示します。

```html
<igx-grid #grid1 [data]="data | async"
[height]="'500px'" width="100%" [autoGenerate]='false' >
    <!-- ... -->
    <igx-column [field]="'OrderHistory'" [width]="'160px'" header="Order History" >
        <ng-template igxCell let-val>
            <igx-sparkline height="50px" width="150px"
            [dataSource]="val"
            valueMemberPath="Sold"
            displayType="Line"
            lineThickness="2"
            brush="rgb(21, 190, 6)"  >
            </igx-sparkline>
        </ng-template>
    </igx-column>
    <!-- ... -->
</igx-grid>
```

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    rowHeight="70"
    autoGenerateColumns="false"
    dataSource={this.data}>
    {/* ... */}
    <IgrTemplateColumn field="OrderHistory"
    headerText="Order History"
    horizontalAlignment="center" width="*>120"
    template={this.getOrderHistoryTemplate} />
    {/* ... */}
</IgrDataGrid>
```

```ts
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-grids';
// ...
public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
    const info = props.dataContext as IgrTemplateCellInfo;
    return (
        <div className="sparklineInGrid">
           <IgrSparkline
               height="60px" width="100%"
               displayType="Line"
               dataSource={info.rowItem.OrderHistory}
               valueMemberPath="Sold"
               labelMemberPath="Week"
               lineThickness={2}
               brush="rgb(21, 190, 6)"
               negativeBrush="rgb(211, 17, 3)" />
        </div>
    );
}
```

```html
<igc-data-grid id="grid"
    height="100%"
    width="100%"
    row-height="70"
    auto-generate-columns="false">
    <!-- ... -->
    <igc-template-column id="historyColumn"
    field="OrderHistory" header-text="Order History" horizontal-alignment="center" width="*>150"></igc-template-column>
   <!-- ... -->
</igc-data-grid>
```

```ts
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
import { IgcTemplateColumnComponent } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellInfo } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellUpdatingEventArgs } from 'igniteui-webcomponents-grids';
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';

ModuleManager.register(IgcDataGridModule);
ModuleManager.register(IgcSparklineModule);

constructor() {
    super();
    this.data = Products.getData();
    this.onUpdatingHistoryColumn = this.onUpdatingHistoryColumn.bind(this);
}

connectedCallback() {
    this.grid = document.getElementById("grid") as IgcDataGridComponent;
    this.grid.dataSource = this.data;

    const historyColumn = document.getElementById("historyColumn") as IgcTemplateColumnComponent;
    historyColumn.cellUpdating = this.onUpdatingHistoryColumn;
}

public onUpdatingHistoryColumn(s: IgcTemplateColumnComponent, e: IgcTemplateCellUpdatingEventArgs) {
    const content = e.content as HTMLDivElement;
    let chart: IgcSparklineComponent | null = null;
    let info = e.cellInfo as IgcTemplateCellInfo;

    if (content.childElementCount === 0) {
        chart = new IgcSparklineComponent();
        chart.valueMemberPath = "Sold";
        chart.labelMemberPath = "Week";
        chart.displayType = SparklineDisplayType.Line;
        chart.lineThickness = 2;
        chart.brush = "rgb(21, 190, 6)";
        chart.negativeBrush = "rgb(211, 17, 3)";
        chart.width = "100%";
        chart.height = "100%";

        content.style.width = "calc(100% - 10px)";
        content.style.height = "calc(100% - 10px)";
        content.style.padding = "5px";
        content.style.margin = "0px";
        content.style.display = "inline-grid";
        content.appendChild(chart);
    }
    else {
        chart = content.children[0] as IgcSparklineComponent;
    }

    if (chart) {
        chart.dataSource = info.rowItem.OrderHistory;
    }
}
```

```razor
<DataGrid Height="100%" Width="100%"
          RowHeight="90"
          AutoGenerateColumns="false"
          DataSource="DataSource">    
    <TemplateColumn Field="OrderHistory" Width="@("*>180")" HeaderText="Order History" >                     
        <Template>
            <RenderFragment>
                 <div style="width: 100%; height: 70px; background: transparent">
                     <Sparkline Height="100%" Width="100%"
                                DataSource="@((context.RowItem as Product).OrderHistory)"
                                DisplayType="SparklineDisplayType.Line"
                                ValueMemberPath="Sold"
                                LabelMemberPath="Week"
                                Brush="rgb(21, 190, 6)">
                     </Sparkline>
                 </div>
            </RenderFragment>
        </Template>
    </TemplateColumn>
</DataGrid>
```

<div class="sample-container loading" style="height: 530px">
    <iframe id="sparkline-grid-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-grid' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-grid-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="charts/sparkline/grid"></sample-button>
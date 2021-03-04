---
title: ドーナツ チャート | 階層データの可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ドーナツ チャート コントロールを使用して、複数の変数を同心円で表示し、階層データを可視化します。詳細については、$ProductName$ ドーナツ チャートのサンプルを参照してください。
_keywords: $PlatformShort$ charts, doughnut chart, $ProductName$, Infragistics, data binding, slice selection, slice explosion, animation, multiple rings, $PlatformShort$ チャート, ドーナツ チャート, データ バインディング, スライス選択, スライス切り離し, アニメーション, 複数リング, インフラジスティックス
mentionedTypes: ['XamDoughnutChart']
_language: ja
---
# $PlatformShort$ ドーナツ チャートの概要

$ProductName$ Doughnut Chart コンポーネントは円チャートと同様、変数の発生を比例的に表示します。ドーナツ型チャート は、複数の変数をコンセントリック リングで表示でき、階層データの可視化を組み込みでサポートします。

## $PlatformShort$ ドーナツ チャートの例


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-overview" alt="$PlatformShort$ ドーナツ チャートの例">
</code-view>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## 依存関係
Chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件

$PlatformShort$ ドーナツ チャートを作成するには、以下のモジュールが必要です。

```razor
DoughnutChartModule.Register(IgniteUIBlazor);
RingSeriesModule.Register(IgniteUIBlazor);
```

```ts
// app.module.ts
import { IgxDoughnutChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDoughnutChartModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
```

```ts
import { IgcDoughnutChartModule } from 'igniteui-webcomponents-charts';
import { IgcRingSeriesModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDoughnutChartModule,
    IgcRingSeriesModule
);
```

<div class="divider--half"></div>

## 使用方法

ファイナドーナツ型 チャート モジュールをインポートした後、チャートをデータにバインドします。
コンポーネントを作成するには、最初にバインドするためのデータが必要になります。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

```ts
this.data = [
    { Value: 30, Label: "Google",    },
    { Value: 15, Label: "Microsoft", },
    { Value: 30, Label: "Apple",     },
    { Value: 15, Label: "Samsung",   },
    { Value: 10, Label: "Other",     },
];
```

次のコードは、ドーナツ型チャートを上記のデータにバインドする方法を示しています。

```html
 <igx-doughnut-chart height="100%" width="100%">
        <igx-ring-series
            [dataSource]="data"
            labelMemberPath="Label"
            valueMemberPath="Value">
        </igx-ring-series>
 </igx-doughnut-chart>
```

```tsx
<IgrDoughnutChart height="100%" width="100%">
    <IgrRingSeries
        name="ring1"
        dataSource={this.data}
        labelMemberPath="Label"
        valueMemberPath="Value"/>
</IgrDoughnutChart>
```

<div class="divider--half"></div>

## 複数のリング
ドーナツ チャート コンポーネントは、複数のリングを、異なるデータ項目にバインド可能な各リングと同時に表示できます。または共通のデータ ソースを共有できます。たとえば、以下の 2 つのデータ ソースは、複数のリングにバインドするために使用されます。
```

```ts
public Months: any[];
public Seasons: any[];
/// ...

this.Months = [
    { Value: 1, Label: "December" },
    { Value: 1, Label: "January" },
    { Value: 1, Label: "February" },
    { Value: 1, Label: "March" },
    { Value: 1, Label: "April" },
    { Value: 1, Label: "May" },
    { Value: 1, Label: "June" },
    { Value: 1, Label: "July" },
    { Value: 1, Label: "August" },
    { Value: 1, Label: "September" },
    { Value: 1, Label: "October" },
    { Value: 1, Label: "November" },
];
this.Seasons = [
    { Value: 4, Label: "Winter" },
    { Value: 4, Label: "Spring" },
    { Value: 4, Label: "Summer" },
    { Value: 4, Label: "Fall" },
];
```


```html
 <igx-doughnut-chart width="100%" height="100%">
        <igx-ring-series name="Months"
            [dataSource]="Months"
            labelsPosition="Center"
            labelMemberPath="Label"
            valueMemberPath="Value"
            radiusFactor="0.9"
            startAngle="0">
        </igx-ring-series>
        <igx-ring-series name="Seasons"
            [dataSource]="Seasons"
            labelsPosition="InsideEnd"
            labelMemberPath="Label"
            valueMemberPath="Value"
            radiusFactor="0.4"
            startAngle="0">
        </igx-ring-series>
 </igx-doughnut-chart>
```

```tsx
<IgrDoughnutChart height="100%" width="100%">
    <IgrRingSeries
       name="Months"
       dataSource={this.Months}
       labelsPosition="Center"
       labelMemberPath="Label"
       valueMemberPath="Value"
       radiusFactor={0.9}
       startAngle={0}/>
    <IgrRingSeries
       name="Seasons"
       dataSource={this.Seasons}
       labelsPosition="InsideEnd"
       labelMemberPath="Label"
       valueMemberPath="Value"
       radiusFactor={0.4}
       startAngle={0}/>
</IgrDoughnutChart>
```

## 複数リング サンプル


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-rings" >
</code-view>


<div class="divider--half"></div>

## スライスの選択

ドーナツ型チャート コンポーネントは、1 つ以上のスライスの状態を 選択された状態に設定する API を公開します。任意で、単一のカスタム ビジュアル スタイルを選択済みスライスに適用できます。

**スライス選択の有効化/無効化** - `AllowSliceSelection` プロパティを設定してドーナツ型チャートでスライスの選択を有効または無効にします。

```tsx
<IgrDoughnutChart height="100%" width="100%"
    allowSliceSelection="true"
    sliceClick={this.onSliceClick}>
    <IgrRingSeries
        name="ring1"
        dataSource={this.state.data}
        labelMemberPath="Company"
        valueMemberPath="MarketShare"
        selectedSliceStroke="white"
        selectedSliceFill="rgb(143,143,143)"
        selectedSliceOpacity = "1.0"
        selectedSliceStrokeThickness= "2"/>
</IgrDoughnutChart>
```

**選択されたスライスのスタイル設定** - スライスの `TargetType` で選択されたスライスのスタイルを定義し、ドーナツ型チャートの `SelectedStyle` プロパティに割り当てることでスタイル設定できます。

**スライスをクリックして選択状態を変更** - `SliceClick` イベントにイベント ハンドラーをアタッチした場合、選択状態を変更するためのイベント引数のクリックしたスライスへの参照を提供します。ドーナツ型チャートは、選択されたスライスのスタイルを決定する `SelectedStyle` プロパティを公開します。デフォルトでは、適用されるスタイルはありません。スライスを選択しても表示は変わりません。独自のスタイルを選択されたスライスに適用すると、Slice の `TargetType` を持つ Style を定義して、`SelectedStyle` プロパティの値として設定する必要があります。

**IsSelected プロパティを設定** - $PlatformShort$ ドーナツ チャートは、`IsSelected` プロパティを直接変更できるすべてのスライスへの参照を保持しなす。ドーナツ チャートは、スライスの選択済み/選択解除の状態の変更に使用する `SliceClick` イベントを公開します。

**SelectedSlices コレクションのコンテンツを変更** - `SelectedSlices` コレクションのコンテンツを変更して選択されたスライスを変更できます。ドーナツ チャートは、Slice オブジェクトへに対し `IsSelected` プロパティを直接修正できるすべてのスライスへの参照を保持します。

## スライス選択のサンプル


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-selection" >
</code-view>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## スライスの分割
ドーナツ チャート コンポーネントのスライスは、コードまたはユーザー インタラクションによって分割できます。

**スライス分割の有効化/無効化**
`AllowSliceExplosion` プロパティを設定してスライスを分割する機能を有効または無効にできます。

**スライスのクリック時にスライスの分割状態を変更**
`SliceClick` イベント用イベント ハンドラーをアタッチする場合、イベント引数でクリックされたスライスへの参照を提供するので、分割状態を修正できます。

**IsExploded プロパティの設定**
ドーナツ チャートはすべてのスライスへの参照を保持して `IsExploded` プロパティを直接変更できます。

**ExplodedSlices コレクションのコンテンツの修正**
`ExplodedSlices` コレクションのコンテンツを変更することにより公開されたスライスを変更できます。

```tsx
<IgrDoughnutChart height="100%" width="100%"
    ref={this.onChartRef}
    allowSliceExplosion="true"
    sliceClick={this.onSliceClick}>
    <IgrRingSeries
        name="ring1"
        dataSource={this.state.data}
        labelMemberPath="Company"
        valueMemberPath="MarketShare"
        radiusFactor={0.7}/>
</IgrDoughnutChart>
```

```ts
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';

public onSliceClick = (s: IgrDoughnutChart, e: IgrSliceClickEventArgs) => {
    e.isExploded = !e.isExploded;
    e.isSelected = false;
}
```

```ts
import { IgcSliceClickEventArgs } from 'igniteui-webcomponents-charts';
import { IgcDoughnutChartComponent } from 'igniteui-webcomponents-charts';

public onSliceClick = (s: IgcDoughnutChartComponent, e: IgcSliceClickEventArgs) => {
    e.isExploded = !e.isExploded;
    e.isSelected = false;
}
```

## スライスの分割のサンプル


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-explosion" >
</code-view>


<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## 凡例
ドーナツ チャート コンポネントは凡例の使用をサポートしています。使用される凡例は、一連のチャートを介して接続されている ItemLegend です。

```ts
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';

IgrItemLegendModule.register();
```

```tsx
<div className="legend">
    <IgrItemLegend ref={this.onLegendRef} />
</div>
<div className="chart">
    <IgrDoughnutChart ref={this.onChartRef}
        width="300px"
        height="300px">
        <IgrRingSeries
            name="ring1"
            dataSource={this.state.data}
            labelMemberPath="Company"
            valueMemberPath="MarketShare"/>
    </IgrDoughnutChart>
</div>
```

```ts
public chart: IgrDoughnutChart;
public legend: IgrItemLegend;
// ...
this.onChartRef = this.onChartRef.bind(this);
this.onLegendRef = this.onLegendRef.bind(this);
// ...
public onChartRef(chart: IgrDoughnutChart) {
    this.chart = chart;
    if (this.legend) {
        this.chart.actualSeries[0].legend = this.legend;
    }
}

public onLegendRef(legend: IgrItemLegend) {
    this.legend = legend;
    if (this.chart) {
        this.chart.actualSeries[0].legend = this.legend;
    }
}
```
## 凡例サンプル


<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-legend" >
</code-view>


## アニメーション

チャートの半径をスケールする `radiusFactor` プロパティを設定してドーナツ チャートをアニメーション化できます。
`startAngle` プロパティを設定してチャートが回転する間、チャートの角度が増加し続けるようにします。

以下のコードでは、radiusFactor がチャートをサイズの 0.25％ 増加し、startAngle がチャートを 1 度回転しています。radiusFactor と startAngle が最大値に達すると、アニメーション フラグをリセットし、間隔をクリアしてアニメーションを停止します。

```ts
window.setInterval(() => this.tick(), 15);
public tick(): void {
    if (this.isAnimating) {
        if (this.chartSeries.radiusFactor < 1.0)
            this.chartSeries.radiusFactor += 0.0025;

        if (this.chartSeries.startAngle < 360)
            this.chartSeries.startAngle++;

        if (this.chartSeries.radiusFactor >= 1.0 &&
            this.chartSeries.startAngle >= 360) {
            this.isAnimating = false;
            window.clearInterval(this.interval);
        }
    }
}
```

## サンプル

<code-view style="height: 450px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-animation" >
</code-view>


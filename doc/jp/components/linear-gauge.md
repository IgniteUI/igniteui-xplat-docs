---
title: {Platform} リニア ゲージ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの {Platform} リニア ゲージ コントロールを使用して、シンプルで簡潔なビューでデータを可視化します。{ProductName} リニア ゲージの設定可能な要素について説明します。
_keywords: linear gauge, {ProductName}, Infragistics, animation, labels, needle, scales, ranges, tick marks, リニア ゲージ, インフラジスティックス, アニメーション, ラベル, 針, スケール, 範囲, 目盛
mentionedTypes: ["XamLinearGauge"]
namespace: Infragistics.Controls.Gauges
_language: ja
---
# {Platform} リニア ゲージの概要

{ProductName} リニア ゲージ コンポーネントを使用すると、リニア ゲージの形式でデータを視覚化できます。`XamLinearGauge` は、スケールおよび 1 つ以上の範囲と比較した値のシンプルで簡潔なビューを提供します。1 つのスケール、1 セットの目盛り、および 1 セットのラベルをサポートします。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれており、アニメーションでは、`TransitionDuration` プロパティの設定で簡単にカスタマイズできます。また構成可能な向きや方向、視覚要素やツールチップなどがサポートされます。

## {Platform} リニア ゲージの例

以下のサンプルは、同じ `XamLinearGauge` でいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

`sample="/gauges/linear-gauge/animation", height="155", alt="{Platform} リニア ゲージの例"`



<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## 依存関係
{Platform} gauge コンポーネントをインストールするときに core パッケージもインストールする必要があります。

```cmd
npm install --save {PackageCore}
npm install --save {PackageGauges}
```
<!-- end: Angular, React, WebComponents -->

## モジュールの要件

`XamLinearGauge` を作成するには、以下のモジュールが必要です。


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbLinearGaugeModule));
```

```ts
// app.module.ts
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxLinearGaugeModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();
```

```ts
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges';

ModuleManager.register(
    IgcLinearGaugeModule
    );
```


<div class="divider--half"></div>

## 使用方法

以下のコードは針およびスケールで 3 つの比較範囲を含むリニア ゲージを作成する方法を紹介します。

```html
 <igx-linear-gauge width="700px"
                   height="30px"
                   minimumValue="5"
                   maximumValue="55"
                   value="43">
    <igx-linear-graph-range startValue="0"
                            endValue="15"
                            brush="red">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="15"
                            endValue="30"
                            brush="yellow">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="30"
                            endValue="55"
                            brush="green">
    </igx-linear-graph-range>
 </igx-linear-gauge>
```

```tsx
 <IgrLinearGauge width="700px"
                   height="30px"
                   minimumValue={5}
                   maximumValue={55}
                   value={43}>
    <IgrLinearGraphRange startValue={0}
                            endValue={15}
                            brush="red"/>
    <IgrLinearGraphRange startValue={15}
                            endValue={30}
                            brush="yellow"/>
    <IgrLinearGraphRange startValue={30}
                            endValue={55}
                            brush="green"/>
 </IgrLinearGauge>
```

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=5 value=43
    maximum-value=55>
    <igc-linear-graph-range
        start-value=0
        end-value=15
        brush="red">
    </igc-linear-graph-range>
    <igc-linear-graph-range
        start-value=50
        end-value=30
         brush="yellow">
    </igc-linear-graph-range>
     <igc-linear-graph-range
        start-value=30
        end-value=55
        brush="green">
    </igc-linear-graph-range>
</igc-linear-gauge>
```

```razor
<IgbLinearGauge Height="80px" Width="100%"
        MinimumValue="5"
        MaximumValue="55"
        Value="43" >
    <IgbLinearGraphRange StartValue="0"
            EndValue="15"
            Brush="red" >
    </IgbLinearGraphRange>
     <IgbLinearGraphRange StartValue="15"
            EndValue="30"
            Brush="yellow">
    <IgbLinearGraphRange StartValue="30"
            EndValue="55"
            Brush="green">
    </IgbLinearGraphRange>
</IgbLinearGauge>
```

<div class="divider--half"></div>

## 針
これは、コンポーネントで表示されるプライマリ メジャーでバーで可視化されます。あるいは以下で示す図形のほとんどすべてをカスタマイズすることもできます。

```html
 <igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100 interval=10
    value=50
    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07>
</igx-linear-gauge>
```

```tsx
 <IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0}
    maximumValue={100} interval={10}
    value={50}
    isNeedleDraggingEnabled={true}
    needleShape="Custom"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleStrokeThickness={1}
    needleBreadth={15}
    needleInnerExtent={0.35}
    needleOuterExtent={0.65}
    needleOuterPointExtent={0.8}
    needleInnerPointExtent={0.325}
    needleInnerPointWidth={0}
    needleOuterPointWidth={0.3}
    needleInnerBaseWidth={0}
    needleOuterBaseWidth={0.07} />
```

```html
  <igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0
    maximum-value=100
    interval=10
    value=50
    is-needle-dragging-enabled=true
    needle-shape="Custom"
    needle-brush="DodgerBlue"
    needle-out-line="DodgerBlue"
    needle-stroke-thickness=1
    needle-breadth=15
    needle-inner-extent=0.35
    needle-outer-extent=0.65
    needle-outer-point-extent=0.8
    needle-inner-point-extent=0.325
    needle-inner-point-width=0
    needle-outer-point-width=0.3
    needle-inner-base-width=0
    needle-outer-base-width=0.07>
</igc-linear-gauge>
```

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    IsNeedleDraggingEnabled="true"
    NeedleShape="LinearGraphNeedleShape.Custom"
    NeedleBrush="DodgerBlue"
    NeedleOutline="DodgerBlue"
    NeedleStrokeThickness="1"
    NeedleBreadth="15"
    NeedleInnerExtent="0.35"
    NeedleOuterExtent="0.65"
    NeedleOuterPointExtent="0.8"
    NeedleInnerPointExtent="0.325"
    NeedleInnerPointWidth="0"
    NeedleOuterPointWidth="0.3"
    NeedleInnerBaseWidth="0"
    NeedleOuterBaseWidth="0.07">
</IgbLinearGauge>
```


`sample="/gauges/linear-gauge/needle", height="125", alt="{Platform} リニア ゲージのneedle"`

## 針のハイライト

リニア ゲージを変更して、2 番目の針を表示できます。これにより、メイン針の `Value` の不透明度が低く表示されます。これを有効にするには、まず `HighlightValueDisplayMode` を Overlay に設定し、次に `HighlightValue` を適用します。

```html
<igx-linear-gauge
    #linearGauge
    height="80px" 
    width="400px"
    value=70
    minimumValue=0 
    maximumValue=100 
    interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    needleBrush="Blue"
    highlightValueDisplayMode="Overlay"
    highlightValue=25
    isHighlightNeedleDraggingEnabled=true>
</igx-linear-gauge>
```

```tsx
<IgrLinearGauge
    height="80px"
    width="100%"
    value={75}
    minimumValue={0} 
    maximumValue={100} 
    interval={10}
    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    needleBrush='blue'
    highlightValueDisplayMode="Overlay"
    highlightValue={25} 
    isHighlightNeedleDraggingEnabled={true}
    />
```

```html
<igc-linear-gauge
    id="gauge"
    height="80px"
    width="100%"
    minimum-value="0" 
    maximum-value="100" 
    value="75"
    interval="10"
    label-interval="10"
    label-extent="0.025"
    labels-pre-terminal="0"
    labels-post-initial="0"
    needle-brush="blue"
    highlight-value-display-mode="Overlay"
    highlight-value=25 
    is-highlight-needle-dragging-enabled=true>
</igc-linear-gauge>
```

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" 
    MaximumValue="100" 
    Value="75"
    Interval="10"
    LabelInterval="10"
    LabelExtent="0.025"
    LabelsPreTerminal="0"
    LabelsPostInitial="0"
    NeedleBrush="Blue"
    HighlightValueDisplayMode="HighlightedValueDisplayMode.Overlay"
    HighlightValue=25
    IsHighlightNeedleDraggingEnabled=true>
</IgbLinearGauge>
```

`sample="/gauges/linear-gauge/highlight-needle", height="125", alt="{Platform} リニア ゲージの針のハイライト"`

## 範囲
範囲はスケールで指定した値の範囲をハイライト表示する視覚的な要素です。その目的は、パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    rangeBrushes="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232" >
    <igx-linear-graph-range
        startValue=0 endValue=50
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.25 outerEndExtent=0.4>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=50 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.4 outerEndExtent=0.55>
    </igx-linear-graph-range>
</igx-linear-gauge>
```

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
    rangeBrushes="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232" >
    <IgrLinearGraphRange
        startValue={0} endValue={50}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.25} outerEndExtent={0.4} />
    <IgrLinearGraphRange
        startValue={50} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.4} outerEndExtent={0.55} />
</IgrLinearGauge>
```

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100 interval=10
    range-brushes="#a4bd29, #F86232"
    range-outlines="#a4bd29, #F86232" >
    <igc-linear-graph-range
        start-value=0 end-value=50
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.25 outer-end-extent=0.4>
    </igc-linear-graph-range>
    <igc-linear-graph-range
        start-value=50 end-value=100
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.4 outer-end-extent=0.55>
    </igc-linear-graph-range>
</igc-linear-gauge>
```

```razor
<IgbLinearGauge Height="80px" Width="100%"
        MinimumValue="0" Value="50"
        MaximumValue="100" Interval="10"
        RangeBrushes="#A4BD29, #F86232"
        RangeOutlines="#A4BD29, #F86232">
    <IgbLinearGraphRange StartValue="0"
            EndValue="50"
            InnerStartExtent="0.075"
            InnerEndExtent="0.075"
            OuterStartExtent="0.25"
            OuterEndExtent="0.4">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="50"
            EndValue="100"
            InnerStartExtent="0.075"
            InnerEndExtent="0.075"
            OuterStartExtent="0.4"
            OuterEndExtent="0.55">
    </IgbLinearGraphRange>
</IgbLinearGauge>
```


`sample="/gauges/linear-gauge/ranges", height="125", alt="{Platform} リニア ゲージの範囲"`


## 目盛
目盛は、リニア ゲージを読み取りやすくするために、目盛の間隔でスケールを分割して見せる役割を果たします。

主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、およびスタイルは、対応するプロパティを設定し制御できます。

補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100
    interval=10
    tickBrush="DodgerBlue"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05
    minorTickCount=4
    minorTickBrush="DarkViolet"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1>
</igx-linear-gauge>
```

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100}
    interval={10}
    tickBrush="DodgerBlue"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.25}
    tickEndExtent={0.05}
    minorTickCount={4}
    minorTickBrush="DarkViolet"
    minorTickEndExtent={0.05}
    minorTickStartExtent={0.15}
    minorTickStrokeThickness={1} />
```

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100
    interval=10
    tick-brush="DodgerBlue"
    ticks-pre-terminal=0
    ticks-post-initial=0
    tick-stroke-thickness=2
    tick-start-extent=0.25
    tick-end-extent=0.05
    minor-tick-count=4
    minor-tick-brush="DarkViolet"
    minor-tick-end-extent=0.05
    minor-tick-start-extent=0.15
    minor-tick-stroke-thickness=1>
</igc-linear-gauge>
```

```razor
 <IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    TickBrush="DodgerBlue"
    TicksPreTerminal="0"
    TicksPostInitial="0"
    TickStrokeThickness="2"
    TickStartExtent="0.25"
    TickEndExtent="0.05"
    MinorTickCount="4"
    MinorTickBrush="DarkViolet"
    MinorTickEndExtent="0.05"
    MinorTickStartExtent="0.15"
    MinorTickStrokeThickness="1">
</IgbLinearGauge>
```

`sample="/gauges/linear-gauge/tickmarks", height="125", alt="{Platform} リニア ゲージの目盛"`


## ラベル
ラベルはスケールのメジャーを示します。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="DodgerBlue"
    font="11px Verdana">
</igx-linear-gauge>
```

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="DodgerBlue"
    font="11px Verdana" />
```

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100 interval=10
    label-interval=10
    label-extent=0.025
    labels-pre-terminal=0
    labels-post-initial=0
    font-brush="DodgerBlue"
    font="11px Verdana">
</igc-linear-gauge>
```
```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    LabelInterval="10"
    LabelExtent="0.025"
    LabelsPreTerminal="0"
    LabelsPostInitial="0"
    FontBrush="DodgerBlue"
    Font="11px Verdana">
</IgbLinearGauge>
```


`sample="/gauges/linear-gauge/labels", height="125", alt="{Platform} リニア ゲージのラベル"`


## バッキング
バッキング要素はブレット グラフ コントロールの背景と境界線を表します。常に最初に描画される要素でラベルやメモリなどの残りの要素は互いにオーバーレイします。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1>
</igx-linear-gauge>
```

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness={4}
    backingInnerExtent={0}
    backingOuterExtent={1} />
```

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=20
    maximum-value=100 interval=10
    backing-brush="#bddcfc"
    backing-outline="DodgerBlue"
    backing-stroke-thickness=4
    backing-inner-extent=0
    backing-outer-extent=1>
</igc-linear-gauge>
```

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0"
    MaximumValue="100"
    Value="50"
    Interval="10"
    BackingBrush="#BDDCFC"
    BackingOutline="DodgerBlue"
    BackingStrokeThickness="4"
    BackingInnerExtent="0"
    BackingOuterExtent="1">
</IgbLinearGauge>
```


`sample="/gauges/linear-gauge/backing", height="125", alt="{Platform} リニア ゲージのバッキング"`


## スケール
スケールはゲージで値の全範囲をハイライト表示する視覚的な要素です。外観やスケールの図形のカスタマイズ、更にスケールを反転 (`IsScaleInverted` プロパティを使用) させて、すべてのラベルを左から右ではなく、右から左へ描画することもできます。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    isScaleInverted=false
    scaleBrush="DodgerBlue"
    scaleOutline="DarkViolet"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95>
</igx-linear-gauge>
```

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100} interval={10}
    isScaleInverted={false}
    scaleBrush="DodgerBlue"
    scaleOutline="DarkViolet"
    scaleStrokeThickness={1}
    scaleInnerExtent={0.05}
    scaleOuterExtent={0.65}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95} />
```

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100 interval=10
    isScale-inverted=false
    scale-brush="DodgerBlue"
    scale-outline="DarkViolet"
    scale-stroke-thickness=1
    scale-inner-extent=0.05
    scale-outer-extent=0.65
    scale-start-extent=0.05
    scale-end-extent=0.95>
</igc-linear-gauge>
```
```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    IsScaleInverted="false"
    ScaleBrush="DodgerBlue"
    ScaleOutline="Red"
    ScaleStrokeThickness="2"
    ScaleInnerExtent="0.05"
    ScaleOuterExtent="0.65"
    ScaleStartExtent="0.05"
    ScaleEndExtent="0.95">
</IgbLinearGauge>
```


`sample="/gauges/linear-gauge/scale", height="125", alt="{Platform} リニア ゲージのスケール"`


## まとめ
上記すべてのコード スニペットを以下のコード ブロックにまとめています。プロジェクトに簡単にコピーしてブレットグラフのすべての機能を再現できます。

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="Black"
    font="11px Verdana"

    interval=10
    tickBrush="Black"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05

    minorTickCount=4
    minorTickBrush="Black"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1

    value=50
    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="Black"
    needleOutline="Black"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07

    isScaleInverted=false
    scaleBrush="Gray"
    scaleOutline="Gray"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=0 endValue=50
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.25 outerEndExtent=0.4>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=50 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.4 outerEndExtent=0.55>
    </igx-linear-graph-range>
</igx-linear-gauge>
```

```tsx
<IgrLinearGauge
    height="80px" width="400px"
    minimumValue={0}
    maximumValue={100}

    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="Black"
    font="11px Verdana"

    interval={10}
    tickBrush="Black"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.25}
    tickEndExtent={0.05}

    minorTickCount={4}
    minorTickBrush="Black"
    minorTickEndExtent={0.05}
    minorTickStartExtent={0.15}
    minorTickStrokeThickness={1}

    value={50}
    isNeedleDraggingEnabled={true}
    needleShape="Custom"
    needleBrush="Black"
    needleOutline="Black"
    needleStrokeThickness={1}
    needleBreadth={15}
    needleInnerExtent={0.35}
    needleOuterExtent={0.65}
    needleOuterPointExtent={0.8}
    needleInnerPointExtent={0.325}
    needleInnerPointWidth={0}
    needleOuterPointWidth={0.3}
    needleInnerBaseWidth={0}
    needleOuterBaseWidth={0.07}

    isScaleInverted={false}
    scaleBrush="Gray"
    scaleOutline="Gray"
    scaleStrokeThickness={1}
    scaleInnerExtent={0.05}
    scaleOuterExtent={0.65}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95}

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness={4}
    backingInnerExtent={0}
    backingOuterExtent={1}

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <IgrLinearGraphRange
        startValue={0} endValue={50}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.25} outerEndExtent={0.4} />
    <IgrLinearGraphRange
        startValue={50} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.4} outerEndExtent={0.55} />
</IgrLinearGauge>
```

```html
<igc-linear-gauge id="lineargauge"
    height="80px" width="400px"
    minimum-value=0
    maximum-value=100

    label-interval=10
    label-extent=0.025
    labels-pre-terminal=0
    labels-post-initial=0
    font-brush="Black"
    font="11px Verdana"

    interval=10
    tick-brush="Black"
    ticks-pre-terminal=0
    ticks-post-initial=0
    tick-stroke-thickness=2
    tick-start-extent=0.25
    tick-end-extent=0.05

    minor-tick-count=4
    minor-tick-brush="Black"
    minor-tick-end-extent=0.05
    minor-tick-start-extent=0.15
    minor-tick-stroke-thickness=1

    value=50
    is-needle-dragging-enabled=true
    needle-shape="Custom"
    needle-brush="Black"
    needle-outline="Black"
    needle-stroke-thickness=1
    needle-breadth=15
    needle-inner-extent=0.35
    needle-outer-extent=0.65
    needle-outer-point-extent=0.8
    needle-inner-point-extent=0.325
    needle-inner-point-width=0
    needle-outer-point-width=0.3
    needle-inner-base-width=0
    needle-outer-base-width=0.07

    is-scale-inverted=false
    scale-brush="Gray"
    scale-outline="Gray"
    scale-stroke-thickness=1
    scale-inner-extent=0.05
    scale-outer-extent=0.65
    scale-start-extent=0.05
    scale-end-extent=0.95

    backing-brush="#cecece"
    backing-outline="#cecece"
    backing-stroke-thickness=4
    backing-inner-extent=0
    backing-outer-extent=1

    range-brushes ="#C62828, #F96232, #FF9800"
    range-outlines="#C62828, #F96232, #FF9800">
    <igc-linear-graph-range
        start-value=0 end-Value=50
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.25 outer-end-extent=0.4>
    </igc-linear-graph-range>
    <igc-linear-graph-range
        start-value=50 end-value=100
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.4 outer-end-extent=0.55>
    </igc-linear-graph-range>
</igc-linear-gauge>
```

```razor
<IgbLinearGauge Height="80px" Width="100%"
        MinimumValue="0"
        MaximumValue="100"

        LabelInterval="10"
        LabelExtent="0.025"
        LabelsPreTerminal="0"
        LabelsPostInitial="0"
        FontBrush="DodgerBlue"
        Font="11px Verdana"

        Interval="10"
        TickBrush="DodgerBlue"
        TicksPreTerminal="0"
        TicksPostInitial="0"
        TickStrokeThickness="2"
        TickStartExtent="0.25"
        TickEndExtent="0.05"

        MinorTickCount="4"
        MinorTickBrush="DarkViolet"
        MinorTickEndExtent="0.05"
        MinorTickStartExtent="0.15"
        MinorTickStrokeThickness="1"
        Value="50"
        MaximumValue="100" Interval="10"
        IsNeedleDraggingEnabled="true"
        NeedleShape="LinearGraphNeedleShape.Custom"
        NeedleBrush="DodgerBlue"
        NeedleOutline="DodgerBlue"
        NeedleStrokeThickness="1"
        NeedleBreadth="15"
        NeedleInnerExtent="0.35"
        NeedleOuterExtent="0.65"
        NeedleOuterPointExtent="0.8"
        NeedleInnerPointExtent="0.325"
        NeedleInnerPointWidth="0"
        NeedleOuterPointWidth="0.3"
        NeedleInnerBaseWidth="0"
        NeedleOuterBaseWidth="0.07"

        IsScaleInverted="false"
        ScaleBrush="DodgerBlue"
        ScaleOutline="Red"
        ScaleStrokeThickness="2"
        ScaleInnerExtent="0.05"
        ScaleOuterExtent="0.65"
        ScaleStartExtent="0.05"
        ScaleEndExtent="0.95"

        BackingBrush="#BDDCFC"
        BackingOutline="DodgerBlue"
        BackingStrokeThickness="4"
        BackingInnerExtent="0"
        BackingOuterExtent="1"

        RangeBrushes="#A4BD29, #F86232"
        RangeOutlines="#A4BD29, #F86232">
    <IgbLinearGraphRange StartValue="0"
                EndValue="50"
                InnerStartExtent="0.075"
                InnerEndExtent="0.075"
                OuterStartExtent="0.25"
                OuterEndExtent="0.4">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="50"
                EndValue="100"
                InnerStartExtent="0.075"
                InnerEndExtent="0.075"
                OuterStartExtent="0.4"
                OuterEndExtent="0.55">
    </IgbLinearGraphRange>
</IgbLinearGauge>
```
<div class="divider--half"></div>

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

- `XamLinearGauge`
- `XamLinearGraphRange`

## その他のリソース

その他のゲージ タイプの詳細については、以下のトピックを参照してください。

- [ブレット グラフ](bullet-graph.md)
- [ラジアル ゲージ](radial-gauge.md)

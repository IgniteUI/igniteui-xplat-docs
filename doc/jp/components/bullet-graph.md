---
title: $PlatformShort$ ブレット グラフ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ブレット グラフ コントロールを使用すると、範囲を表示し、複数の測定値を比較するダッシュボードを作成できます。インフラジスティックス データ視覚化ツールを是非お試しください!
_keywords: $PlatformShort$ Bullet Graph, animation, labels, needle, scales, ranges, tick marks, Infragistics, ブレット グラフ, インフラジスティックス, $PlatformShort$ ブレット グラフ, アニメーション, ラベル, ニードル, スケール, 範囲, 目盛, インフラジスティックス
mentionedTypes: ['XamBulletGraph']
_language: ja
---
# $PlatformShort$ ブレット グラフの概要

$PlatformShort$ Bullet Graph コンポーネントは、目盛り上でメジャーの比較を簡潔にリニアで表示します。

## サンプル

ブレット グラフ コンポーネントは、きれいなデータ表現を作成するための多数の機能をサポートします。ブレット グラフは、目標に対する進捗状況、評価の範囲、複数の測定比較を表現する際に最も効率的で効果的なグラフの 1 つです。ブレット グラフは、水平または垂直のわずかな領域で、ゴールに至る進捗、評価の範囲、複数の測定比較を表現するための最も効率的で効果的な方法の 1 つです。

以下のサンプルは、同じゲージでいくつかのプロパティを設定して全く異なるゲージにする方法を示します。

<div class="sample-container loading" style="height: 155px">
    <iframe id="bullet-graph-sample-iframe" src='{environment:dvDemosBaseUrl}/gauges/bullet-graph-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="bullet-graph-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="gauges/bullet-graph/animation"></sample-button>

</div>
<div class="divider--half"></div>

このゲージは、スケール、針、目盛 (1 組)、ラベル (1 組) をサポートします。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれています。アニメーションは、`TransitionDuration` プロパティの設定で簡単にカスタマイズできます。
ブレット グラフの機能には構成可能な向きや方向、視覚要素やツールチップなどがあります。

<!-- Angular, React, WebComponents -->
## 依存関係
gauge パッケージのインストール時に core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGauges}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件
<!-- Blazor -->
`XamBulletGraph` を作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

* BulletGraphModule
<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->
```ts
// app.module.ts
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { IgxBulletGraphComponent } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxBulletGraphModule,
        IgxBulletGraphComponent
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { IgrBulletGraph } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// Bullet Graph Module
import { IgcBulletGraphCoreModule  } from 'igniteui-webcomponents-gauges';
import { IgcBulletGraphModule } from 'igniteui-webcomponents-gauges';

// register the modules
ModuleManager.register(
    IgcBulletGraphCoreModule,
    IgcBulletGraphModule
);
```

<div class="divider--half"></div>

## 使用方法

以下のコードは、ブレット グラフ コンポーネントを作成し、パフォ―マンス バーと比較目盛マーカー、および 3 つの比較範囲をスケールに構成します。


```html
 <igx-bullet-graph height="100"
                   width="300"
                   minimumValue="5"
                   maximumValue="55"
                   value = "35"
                   targetValue = "43">
        <igx-linear-graph-range startValue="0"
                                endValue="15"
                                brush="#828181">
        </igx-linear-graph-range>
        <igx-linear-graph-range startValue="15"
                                endValue="30"
                                brush="#AAAAAA">
        </igx-linear-graph-range>
        <igx-linear-graph-range startValue="30"
                                endValue="55"
                                brush="#D0D0D0">
        </igx-linear-graph-range>
 </igx-bullet-graph>
```

```tsx
 <IgrBulletGraph height="100"
                   width="300"
                   minimumValue= {5}
                   maximumValue= {55}
                   value = {35}
                   targetValue = {43}>
        <IgrLinearGraphRange startValue={0}
                                endValue={15}
                                brush="#828181"/>
        <IgrLinearGraphRange StartValue={15}
                                endValue={30}
                                brush="#AAAAAA"/>
        <IgrLinearGraphRange StartValue={30}
                                bndValue={55}
                                brush="#D0D0D0"/>
 </IgrBulletGraph>
```

```html
  <igc-bullet-graph height="100px"
    width="300px"
    minimum-value="5"
    maximum-value="55"
    value="35"
    target-value = "43">
    <igc-linear-graph-range
      start-value="0"
      end-value="15"
      brush="#828181">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="15"
      end-value="30"
      brush="#AAAAAA">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="30"
      end-value="55"
      brush="#D0D0D0">
    </igc-linear-graph-range>
  </igc-bullet-graph>
```

```razor   
<BulletGraph Height="80px" Width="100%"
MinimumValue="5" Value="35"
MaximumValue="55" TargetValue="43">
<LinearGraphRange StartValue="0"
  EndValue="15"
  Brush="#828181" />
<LinearGraphRange StartValue="15"
  EndValue="30"
  Brush="#AAAAAA" />
<LinearGraphRange StartValue="30"
  EndValue="55"
  Brush="#D0D0D0" />
</BulletGraph>
```

<div class="divider--half"></div>

## 比較メジャー
ブレットグラフは、パフォーマンス値とターゲット値の 2 つのメジャーを表示できます。

パフォーマンス値は、コンポーネントで表示されるプライマリ メジャーでグラフ全体の長さに沿って拡張するバーとして表示されます。ターゲット値は、パフォーマンス値が比較の対象とするメジャーでパフォーマンス バーの向きに対して直角に交わる小さなブロックとして表示されます。

```html
<igx-bullet-graph
    value=50
    valueBrush="DodgerBlue"
    valueStrokeThickness=1
    valueInnerExtent=0.5
    valueOuterExtent=0.65
    targetValue=80
    targetValueBreadth=10
    targetValueBrush="LimeGreen"
    targetValueOutline="LimeGreen"
    targetValueStrokeThickness=1
    targetValueInnerExtent=0.3
    targetValueOuterExtent=0.85
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100>
</igx-bullet-graph>
```

```tsx
<IgrBulletGraph
    value={50}
    valueBrush="DodgerBlue"
    valueStrokeThickness={1}
    valueInnerExtent={0.5}
    valueOuterExtent={0.65}
    targetValue={80}
    targetValueBreadth={10}
    targetValueBrush="LimeGreen"
    targetValueOutline="LimeGreen"
    targetValueStrokeThickness={1}
    targetValueInnerExtent={0.3}
    targetValueOuterExtent={0.85}
    height="80px" width="400px"
    minimumValue={0} value={50}
    maximumValue={100}/>
```

```html
  <igc-bullet-graph
    height="80px"
    width="400px"
    value="50"
    value-brush="DodgerBlue"
    value-stroke-thickness="1"
    value-inner-extent="0.5"
    value-outer-extent="0.65"
    target-value="80"
    target-value-breadth="10"
    target-value-brush="LimeGreen"
    target-value-outline="LimeGreen"
    target-value-stroke-thickness="1"
    target-value-inner-extent="0.3"
    target-value-outer-extent="0.85"
    minimum-value="0"
    maximum-value="100">
  </igc-bullet-graph>
```

```razor
<BulletGraph Height="80px" Width="100%"
    MinimumValue="0"
    MaximumValue="100"

    Value="50"
    ValueBrush="DodgerBlue"
    ValueStrokeThickness="1"
    ValueInnerExtent="0.5"
    ValueOuterExtent="0.65"

    TargetValue="80"
    TargetValueBreadth="10"
    TargetValueBrush="LimeGreen"
    TargetValueOutline="LimeGreen"
    TargetValueStrokeThickness="1"
    TargetValueInnerExtent="0.3"
    TargetValueOuterExtent="0.85">
</BulletGraph>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="bullet-graph-measures-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/bullet-graph-measures' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="bullet-graph-measures-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="gauges/bullet-graph/measures"></sample-button>

</div>

## 比較範囲
範囲はスケールで指定した値の範囲を強調表示する視覚的な要素です。その目的は、パフォーマンス バー メジャーの質的状態を視覚で伝えると同時に、その状態をレベルとして示すことにあります。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=80 interval=10
    maximumValue=100 targetValue=90
    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=0 endValue=40
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=40 endValue=70
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=70 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.95 outerEndExtent=0.95>
    </igx-linear-graph-range>
</igx-bullet-graph>
```

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={80} interval={10}
    maximumValue={100} targetValue={90}
    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <IgrLinearGraphRange
        startValue={0} endValue={40}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95}/>
    <IgrLinearGraphRange
        startValue={40} endValue={70}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95}/>
    <IgrLinearGraphRange
        startValue={70} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95}/>
</IgrBulletGraph>
```

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="80" interval="10"
    maximum-value="100" target-value="90"
    range-brushes ="#C62828, #F96232, #FF9800"
    range-outlines="#C62828, #F96232, #FF9800">
    <igc-linear-graph-range
      start-value="0" end-value="40"
      inner-start-extent="0.075" inner-end-extent="0.075"
      outer-start-extent="0.95" outer-end-extent="0.95">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="40" end-value="70"
      inner-start-extent="0.075" inner-end-extent="0.075"
      outer-start-extent="0.95" outer-end-extent="0.95">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="70" end-value="100"
      inner-start-extent="0.075" inner-end-extent="0.075"
      outer-start-extent="0.95" outer-end-extent="0.95">
    </igc-linear-graph-range>
  </igc-bullet-graph>
```

```razor
<BulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="80" Interval="10"
  MaximumValue="100" TargetValue="90"
  RangeBrushes="#C62828,#F96232,#FF9800"
  RangeOutlines="#C62828,#F96232,#FF9800">
<LinearGraphRange 
  StartValue="0" 
  EndValue="40" 
  InnerStartExtent="0.075" 
  InnerEndExtent="0.075"
  OuterStartExtent="0.95" 
  OuterEndExtent="0.95">
</LinearGraphRange>
<LinearGraphRange 
  StartValue="40" 
  EndValue="70"
  InnerStartExtent="0.075" 
  InnerEndExtent="0.075"
  OuterStartExtent="0.95" 
  OuterEndExtent="0.95">
</LinearGraphRange>
<LinearGraphRange StartValue="70" 
  EndValue="100"
  InnerStartExtent="0.075" 
  InnerEndExtent="0.075"
  OuterStartExtent="0.95" 
  OuterEndExtent="0.95">
</LinearGraphRange>
</BulletGraph>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="bullet-graph-ranges-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/bullet-graph-ranges' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="bullet-graph-ranges-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="gauges/bullet-graph/ranges"></sample-button>

</div>

## 目盛
目盛は、ブレット グラフを読み取りやすくするために、目盛の間隔でスケールを分割して見せる役割を果たします。
- 主目盛 - 主目盛は、スケールの主要な区切りとして使用されます。表示間隔、範囲、およびスタイルは、対応するプロパティを設定し制御できます。
- 補助目盛 - 補助目盛は主目盛を補助し、スケールの数値を読み取りやすくするために追加して使用します。主目盛と同じ方法でカスタマイズできます。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70
    maximumValue=100 targetValue=90
    interval=10
    tickBrush="DodgerBlue"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.2
    tickEndExtent=0.075
    minorTickCount=4
    minorTickBrush="DarkViolet"
    minorTickEndExtent=0.1
    minorTickStartExtent=0.2
    minorTickStrokeThickness=1>
</igx-bullet-graph>
```

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70}
    maximumValue={100} targetValue={90}
    interval={10}
    tickBrush="DodgerBlue"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.2}
    tickEndExtent={0.075}
    minorTickCount={4}
    minorTickBrush="DarkViolet"
    minorTickEndExtent={0.1}
    minorTickStartExtent={0.2}
    minorTickStrokeThickness={1}/>
```

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70"
    maximum-value="100" target-value="90"
    interval="10"
    tick-brush="DodgerBlue"
    ticks-pre-terminal="0"
    ticks-post-initial="0"
    tick-stroke-thickness="2"
    tick-start-extent="0.2"
    tick-end-extent="0.075"
    minor-tick-count="4"
    minor-tick-brush="DarkViolet"
    minor-tick-end-extent="0.1"
    minor-tick-start-extent="0.2"
    minor-tick-stroke-thickness="1">
  </igc-bullet-graph>
```
```razor
<BulletGraph Height="80px" Width="100%"
    MinimumValue="0" Value="70" Interval="10"
    MaximumValue="100" TargetValue="90"

    TickBrush="DodgerBlue"
    TicksPreTerminal="0"
    TicksPostInitial="0"
    TickStrokeThickness="2"
    TickStartExtent="0.2"
    TickEndExtent="0.075"

    MinorTickCount="4"
    MinorTickBrush="DarkViolet"
    MinorTickEndExtent="0.1"
    MinorTickStartExtent="0.2"
    MinorTickStrokeThickness="1">
</BulletGraph>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="bullet-graph-tickmarks-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/bullet-graph-tickmarks' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="bullet-graph-tickmarks-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="gauges/bullet-graph/tickmarks"></sample-button>

</div>

## ラベル
ラベルはスケールのメジャーを示します。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="DodgerBlue"
    font="11px Verdana">
</igx-bullet-graph>
```

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70} interval={10}
    maximumValue={100} targetValue={90}
    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="DodgerBlue"
    font="11px Verdana"/>
```

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70" interval="10"
    maximum-value="100" target-value="90"
    label-interval="10"
    label-extent="0.025"
    labels-pre-terminal="0"
    labels-post-initial="0"
    font-brush="DodgerBlue"
    font="11px Verdana">
  </igc-bullet-graph>
```

```razor
<BulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  LabelInterval="10"
  LabelExtent="0.025"
  LabelsPreTerminal="0"
  LabelsPostInitial="0"
  FontBrush="DodgerBlue"
  Font="11px Verdana">
</BulletGraph>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="bullet-graph-labels-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/bullet-graph-labels' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="bullet-graph-labels-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="gauges/bullet-graph/labels"></sample-button>

</div>

## バッキング
バッキング要素はブレット グラフ コントロールの背景と境界線を表します。常に最初に描画される要素でラベルやメモリなどの残りの要素は互いにオーバーレイします。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1>
</igx-bullet-graph>
```

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70} interval={10}
    maximumValue={100} targetValue={90}
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness={4}
    backingInnerExtent={0}
    backingOuterExtent={1}/>
```

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70" interval="10"
    maximum-value="100" target-value="90"
    backing-brush="#bddcfc"
    backing-outline="DodgerBlue"
    backing-stroke-thickness="4"
    backing-inner-extent="0"
    backing-outer-extent="1">
  </igc-bullet-graph>
```

```razor
<BulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  BackingBrush="#BDDCFC"
  BackingOutline="DodgerBlue"
  BackingStrokeThickness="4"
  BackingInnerExtent="0"
  BackingOuterExtent="1">
</BulletGraph>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="bullet-graph-background-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/bullet-graph-background' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="bullet-graph-background-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="gauges/bullet-graph/background"></sample-button>

</div>

## スケール
スケールはゲージで値の全範囲を強調表示する視覚的な要素です。外観やスケールの図形のカスタマイズ、更にスケールを反転 (`IsScaleInverted` プロパティを使用) させて、すべてのラベルを左から右ではなく、右から左へ描画することもできます。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0 value=70 interval=10
    maximumValue=100 targetValue=90
    isScaleInverted=false
    scaleBackgroundBrush="DodgerBlue"
    scaleBackgroundOutline="DarkViolet"
    scaleBackgroundThickness=2
    scaleStartExtent=0.05
    scaleEndExtent=0.95>
</igx-bullet-graph>
```

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0} value={70} interval={10}
    maximumValue={100} targetValue={90}
    isScaleInverted={false}
    scaleBackgroundBrush="DodgerBlue"
    scaleBackgroundOutline="DarkViolet"
    scaleBackgroundThickness={2}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95}/>
```

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70" interval="10"
    maximum-value="100" target-value="90"
    is-scale-inverted="false"
    scale-background-brush="DodgerBlue"
    scale-background-outline="DarkViolet"
    scale-background-thickness="2"
    scale-start-extent="0.05"
    scale-end-extent="0.95">
  </igc-bullet-graph>
```

```razor
<BulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  IsScaleInverted="false"
  ScaleBackgroundBrush="DodgerBlue"
  ScaleBackgroundOutline="Red"
  ScaleBackgroundThickness="2"
  ScaleStartExtent="0.05"
  ScaleEndExtent="0.95">
</BulletGraph>
```
<div class="sample-container loading" style="height: 125px">
    <iframe id="bullet-graph-scale-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/bullet-graph-scale' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="bullet-graph-scale-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="gauges/bullet-graph/scale"></sample-button>

</div>

## まとめ
上記すべてのコード スニペットを以下のコード ブロックにまとめています。プロジェクトに簡単にコピーしてブレットグラフのすべての機能を再現できます。

```html
<igx-bullet-graph
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100
    isScaleInverted=false
    scaleBackgroundBrush="Gray"
    scaleBackgroundOutline="Gray"
    scaleBackgroundThickness=2
    scaleStartExtent=0.05
    scaleEndExtent=0.95

    value=50
    valueBrush="Black"
    valueStrokeThickness=1
    valueInnerExtent=0.5
    valueOuterExtent=0.65
    targetValue=80
    targetValueBreadth=7.5
    targetValueBrush="Black"
    targetValueOutline="Black"
    targetValueStrokeThickness=1
    targetValueInnerExtent=0.3
    targetValueOuterExtent=0.85

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="Black"
    font="11px Verdana"

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1

    interval=10
    tickBrush="Black"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.2
    tickEndExtent=0.075

    minorTickCount=4
    minorTickBrush="Black"
    minorTickEndExtent=0.1
    minorTickStartExtent=0.2
    minorTickStrokeThickness=1

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=20 endValue=40
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=40 endValue=60
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=60 endValue=90
        innerStartExtent=0.25 innerEndExtent=0.25
        outerStartExtent=0.9 outerEndExtent=0.9>
    </igx-linear-graph-range>
</igx-bullet-graph>
```

```tsx
<IgrBulletGraph
    height="80px" width="400px"
    minimumValue={0}
    maximumValue={100}
    isScaleInverted={false}
    scaleBackgroundBrush="Gray"
    scaleBackgroundOutline="Gray"
    scaleBackgroundThickness={2}
    scaleStartExtent={0.05}
    scaleEndExtent={0.95}

    value={50}
    valueBrush="Black"
    valueStrokeThickness={1}
    valueInnerExtent={0.5}
    valueOuterExtent={0.65}
    targetValue={80}
    targetValueBreadth={7.5}
    targetValueBrush="Black"
    targetValueOutline="Black"
    targetValueStrokeThickness={1}
    targetValueInnerExtent={0.3}
    targetValueOuterExtent={0.85}

    labelInterval={10}
    labelExtent={0.025}
    labelsPreTerminal={0}
    labelsPostInitial={0}
    fontBrush="Black"
    font="11px Verdana"

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness={4}
    backingInnerExtent={0}
    backingOuterExtent={1}

    interval={10}
    tickBrush="Black"
    ticksPreTerminal={0}
    ticksPostInitial={0}
    tickStrokeThickness={2}
    tickStartExtent={0.2}
    tickEndExtent={0.075}

    minorTickCount={4}
    minorTickBrush="Black"
    minorTickEndExtent={0.1}
    minorTickStartExtent={0.2}
    minorTickStrokeThickness={1}

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <IgrLinearGraphRange
        startValue={20} endValue={40}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9}/>
    <IgrLinearGraphRange
        startValue={40} endValue={60}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9}/>
    <IgrLinearGraphRange
        startValue={60} endValue={90}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9}/>
</IgrBulletGraph>
```

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0"
    maximum-value="100"
    is-scale-inverted="false"
    scale-background-brush="Gray"
    scale-background-outline="Gray"
    scale-background-thickness="2"
    scale-start-extent="0.05"
    scale-end-extent="0.95"

    value="50"
    value-brush="Black"
    value-stroke-thickness="1"
    value-inner-extent="0.5"
    value-outer-extent="0.65"
    target-value="80"
    target-value-breadth="7.5"
    target-value-brush="Black"
    target-value-outline="Black"
    target-value-stroke-thickness="1"
    target-value-inner-extent="0.3"
    target-value-outer-extent="0.85"

    label-interval="10"
    label-extent="0.025"
    labels-pre-terminal="0"
    labels-post-initial="0"
    font-brush="Black"
    font="11px Verdana"

    backing-brush="#cecece"
    backing-outline="#cecece"
    backing-stroke-thickness="4"
    backing-inner-extent="0"
    backing-outer-extent="1"

    interval="10"
    tick-brush="Black"
    ticks-pre-terminal="0"
    ticks-post-initial="0"
    tick-stroke-thickness="2"
    tick-start-extent="0.2"
    tick-end-extent="0.075"

    minor-tick-count="4"
    minor-tick-brush="Black"
    minor-tick-end-extent="0.1"
    minor-tick-start-extent="0.2"
    minor-tick-stroke-thickness="1"

    range-brushes="#C62828, #F96232, #FF9800"
    range-outlines="#C62828, #F96232, #FF9800">
    <igc-linear-graph-range
      start-value="20" end-value="40"
      inner-start-extent="0.25" inner-end-extent="0.25"
      outer-start-extent="0.9" outer-end-extent="0.9">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="40" end-value="60"
      inner-start-extent="0.25" inner-end-extent="0.25"
      outer-start-extent="0.9" outer-end-extent="0.9">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="60" end-value="90"
      inner-start-extent="0.25" inner-end-extent="0.25"
      outer-start-extent="0.9" outer-end-extent="0.9">
    </igc-linear-graph-range>
  </igc-bullet-graph>
```

```razor
<BulletGraph Height="80px" Width="100%"
    MinimumValue="0" Value="50" Interval="10"
    MaximumValue="100" TargetValue="90"
    IsScaleInverted="false"
    ScaleBackgroundBrush="DodgerBlue"
    ScaleBackgroundOutline="Red"
    ScaleBackgroundThickness="2"
    ScaleStartExtent="0.05"
    ScaleEndExtent="0.95"

    ValueBrush="Black"
    ValueStrokeThickness="1"
    ValueInnerExtent="0.5"
    ValueOuterExtent="0.65"
    TargetValue="80"
    TargetValueBreadth="7.5"
    TargetValueBrush="Black"
    TargetValueOutline="Black"
    TargetValueStrokeThickness="1"
    TargetValueInnerExtent="0.3"
    TargetValueOuterExtent="0.85"

    LabelInterval="10"
    LabelExtent="0.025"
    LabelsPreTerminal="0"
    LabelsPostInitial="0"
    FontBrush="DodgerBlue"
    Font="11px Verdana"

    BackingBrush="#BDDCFC"
    BackingOutline="DodgerBlue"
    BackingStrokeThickness="4"
    BackingInnerExtent="0"
    BackingOuterExtent="1"
    TickBrush="DodgerBlue"
    TicksPreTerminal="0"
    TicksPostInitial="0"
    TickStrokeThickness="2"
    TickStartExtent="0.2"
    TickEndExtent="0.075"

    MinorTickCount="4"
    MinorTickBrush="DarkViolet"
    MinorTickEndExtent="0.1"
    MinorTickStartExtent="0.2"
    MinorTickStrokeThickness="1"

    RangeBrushes="#C62828,#F96232,#FF9800"
    RangeOutlines="#C62828,#F96232,#FF9800">
    <LinearGraphRange StartValue="20" EndValue="40"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9" OuterEndExtent="0.9">
    </LinearGraphRange>
    <LinearGraphRange StartValue="40" EndValue="60"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9" OuterEndExtent="0.9">
    </LinearGraphRange>
    <LinearGraphRange StartValue="60" EndValue="90"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9 OuterEndExtent="0.9">
    </LinearGraphRange>
</BulletGraph>
```

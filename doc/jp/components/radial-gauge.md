---
title: $Platform$ ラジアル ゲージ チャート | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $Platform$ ラジアル ゲージコ ントロールを使用して、魅力的なデータ可視化とダッシュボードを作成し、豊富なスタイルと対話機能を KPI で実現できます。$ProductName$ ラジアル ゲージの設定可能な要素について説明します。
_keywords: Radial Gauge, $ProductName$, Infragistics, animation, labels, needle, scales, ranges, tick marks, ラジアル ゲージ, インフラジスティックス, アニメーション, ラベル, 針, スケール, 範囲, 目盛
mentionedTypes: ['XamRadialGauge', 'XamRadialGaugeRange']
_language: ja
---
# $Platform$ ラジアル ゲージの概要

$Platform$ Radial Gauge コンポーネントは、針、目盛り、範囲、ラベルなどの視覚要素をサポートし、定義済みの図形やスケールを表示できます。

$ProductName$ Radial Gauge コンポーネントは、ゲージを表示するデータ ビジュアライゼーション ツールです。スケール、目盛り、ラベル、針、および範囲などの複数の視覚要素を含むことができます。このコンポーネントには、アニメーション化されたトランジションのサポートも組み込まれています。アニメーションは、`TransitionDuration` プロパティの設定で簡単にカスタマイズできます。

## $Platform$ ラジアル ゲージの例

以下のサンプルは、同じゲージでいくつかのプロパティを設定して全く異なるゲージにする方法を示します。


<code-view style="height: 375px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-animation"
           alt="$Platform$ ラジアル ゲージの例"
           github-src="gauges/radial-gauge/animation">
</code-view>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## 依存関係
gauge コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGauges}
</pre>
<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->
IgniteUI.Blazor パッケージの追加については、以下のトピックを参照してください。
- [作業の開始](general-getting-started.md)
- [NuGet パッケージの追加](general-nuget-feed.md)

以下の名前空間を追加してコントロールの実装を開始できます。
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor
</pre>
<!-- end: Blazor -->

## モジュールの要件

`XamRadialGauge` を作成するには、以下のモジュールが必要です。

```razor
IgbRadialGaugeModule.Register(IgniteUIBlazor);
```

```ts
// app.module.ts
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxRadialGaugeModule
        // ...
    ]
})
export class AppModule {}
```

```ts
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// Radial Gauge Module
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';

// register the modules
ModuleManager.register(
    IgcRadialGaugeModule
);
```

```ts
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();
```


<div class="divider--half"></div>


## 使用方法

以下のコードは針およびスケールで 3 つの比較範囲を含むラジアル ゲージを作成する方法を紹介します。

```html
 <igx-radial-gauge height="400px" width="400px"
    value="25"
    interval="5"
    minimumValue="0"
    maximumValue="100">
    <igx-radial-gauge-range startValue="0"
                            endValue="30"
                            brush="red">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="30"
                            endValue="60"
                            brush="yellow">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="60"
                            endValue="100"
                            brush="green">
    </igx-radial-gauge-range>
</igx-radial-gauge>
```

```tsx
 <IgrRadialGauge height="400px" width="400px"
    value={25}
    interval={5}
    minimumValue={0}
    maximumValue={100}>
    <IgrRadialGaugeRange startValue={0}
                         endValue={30}
                         brush="red"/>
    <IgrRadialGaugeRange startValue={30}
                         endValue={60}
                         brush="yellow"/>
    <IgrRadialGaugeRange startValue={60}
                         endValue={100}
                         brush="green"/>
</IgrRadialGauge>
```

```html
  <igc-radial-gauge
    height="400px"
    width="400px"
    value="25"
    interval="5"
    minimum-value="0"
    maximum-value="100">
    <igc-radial-gauge-range
      start-value="0"
      end-value="30"
      brush="red">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
      start-value="30"
      end-value="60"
      brush="yellow">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
      start-value="60"
      end-value="100"
      brush="green">
    </igc-radial-gauge-range>
  </igc-radial-gauge>
```

```razor

<IgbRadialGauge Height="100%" Width="100%"
      MinimumValue="0" Value="25"
      MaximumValue="100" Interval="5" >
    <IgbRadialGaugeRange
          StartValue="0"
          EndValue="30"
          Brush="red">
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange
          StartValue="30"
          EndValue="60"
          Brush="Yellow" >
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange
          StartValue="60"
          EndValue="100"
          Brush="Green">
    </IgbRadialGaugeRange>
</IgbRadialGauge>
```

<div class="divider--half"></div>

## バッキング

ゲージには、スケールの後ろ側に描かれた背景図形があり、図形はゲージの背景として動作します。

バッキング要素はラジアル ゲージ コントロールの背景と境界線を表します。常に最初に描画される要素で針、ラベルやメモリなどの残りの要素はその上のオーバーレイです。

バッキングは、円形またはフィットにできます。円形の場合は 360 度の円形のゲージが作成されますが、一方フィット図形の場合は `ScaleStartAngle` および `ScaleEndAngle` プロパティで円弧部分が塗りつぶされます。これには、`BackingShape` プロパティを設定します。

```html
<igx-radial-gauge
    backingShape="Fitted"
    backingBrush="#fcfcfc"
    backingOutline="DodgerBlue"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15
    scaleStartAngle=135 scaleEndAngle=45
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

```tsx
<IgrRadialGauge
    backingShape="Fitted"
    backingBrush="#fcfcfc"
    backingOutline="DodgerBlue"
    backingOversweep={5}
    backingCornerRadius={10}
    backingStrokeThickness={5}
    backingOuterExtent={0.8}
    backingInnerExtent={0.15}
    scaleStartAngle={135} scaleEndAngle={45}
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10} />
```

```html
  <igc-radial-gauge
    height="300px" width="300px"
    backing-shape="Fitted"
    backing-brush="#fcfcfc"
    backing-outline="DodgerBlue"
    backing-oversweep="5"
    backing-corner-radius="10"
    backing-stroke-thickness="5"
    backing-outer-extent="0.8"
    backing-inner-extent="0.15"
    scale-start-angle="135" scale-end-angle="45"
    minimum-value="0" value="50"
    maximum-value="80" interval="10">
  </igc-radial-gauge>
```

```razor
 <IgbRadialGauge Height="100%" Width="100%"
    BackingShape="RadialGaugeBackingShape.Fitted"
    BackingBrush="#FCFCFC"
    BackingOutline="DodgerBlue"
    BackingOversweep="5"
    BackingCornerRadius="10"
    BackingStrokeThickness="5"
    BackingOuterExtent="0.8"
    BackingInnerExtent="0.15"

    ScaleStartAngle="135"
    ScaleEndAngle="45"
    MinimumValue="0"
    MaximumValue="80"
    Value="50"
    Interval="10">
</IgbRadialGauge>

```


<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-backing"
           github-src="gauges/radial-gauge/backing">
</code-view>

## スケール

スケールは視覚要素で、`MinimumValue` と `MaximumValue` 値を設定してゲージの値範囲全体を強調表示できます。バッキングとともにゲージの全体的な図形を定義します。`ScaleStartAngle` と `ScaleEndAngle` プロパティは、スケールの円弧の境界線を定義します。`ScaleSweepDirection` プロパティが、スケールが時計回りまたは反時計回りのどちらの方向に動くかを指定します。`ScaleBrush`、`ScaleStartExtent`、`ScaleEndExtent` プロパティを設定してスケールの外観をカスタマイズできます。

```html
<igx-radial-gauge
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="DodgerBlue"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```
```tsx
<IgrRadialGauge
    scaleStartAngle={135}
    scaleEndAngle={45}
    scaleBrush="DodgerBlue"
    scaleSweepDirection="Clockwise"
    scaleOversweep={1}
    scaleOversweepShape="Fitted"
    scaleStartExtent={0.45}
    scaleEndExtent={0.575}
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10} />
```

```html
  <igc-radial-gauge
    height="300px" width="300px"
    scale-start-angle="135"
    scale-end-angle="45"
    scale-brush="DodgerBlue"
    scale-sweep-direction="Clockwise"
    scale-oversweep="1"
    scale-oversweep-shape="Fitted"
    scale-start-extent="0.45"
    scale-end-extent="0.575"
    minimum-value="0" value="50"
    maximum-value="80" interval="10">
  </igc-radial-gauge>
```

```razor
<IgbRadialGauge
  ScaleStartAngle="135"
  ScaleEndAngle="45"
  ScaleBrush="DodgerBlue"
  ScaleSweepDirection="SweepDirection.Clockwise"
  ScaleOversweep="1"
  ScaleOversweepShape="RadialGaugeScaleOversweepShape.Fitted"
  ScaleStartExtent="0.45"
  ScaleEndExtent="0.575"
  MinimumValue="0"
  MaximumValue="80"
  Value="50"
  Interval="10">
</IgbRadialGauge>
```


<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-scale"
           github-src="gauges/radial-gauge/scale">
</code-view>

## ラベル
ゲージ ラベルは `MinimumValue` と `MaximumValue` の値の間で指定された間隔で数値を表示する視覚要素です。0 はゲージ中央、1 はゲージ バッキングの外側範囲を表す `LabelExtent` プロパティで小数を使用してラベルの配置を設定できます。`FontBrush` や `Font` など、さまざまなスタイル プロパティを設定してラベルをカスタマイズできます。

```html
<igx-radial-gauge
    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="DodgerBlue"
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=100 interval=10>
</igx-radial-gauge>
```

```tsx
<IgrRadialGauge
    labelExtent={0.65}
    labelInterval={10}
    font="11px Verdana"
    fontBrush="DodgerBlue"
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10} />
```

```html
  <igc-radial-gauge
    height="300px" width="300px"
    label-extent="0.65"
    label-interval="10"
    font="11px Verdana"
    font-brush="DodgerBlue"
    minimum-value="0" value="50"
    maximum-value="100" interval="10">
  </igc-radial-gauge>
```

```razor
<IgbRadialGauge
  Height="100%" Width="100%"
  LabelInterval="10"
  LabelInterval="10"
  Font="11px Verdana"
  FontBrush="DodgerBlue"
  MinimumValue="0"
  MaximumValue="80"
  Value="50"
  Interval="10">
</IgbRadialGauge>

```


<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-labels"
           github-src="gauges/radial-gauge/labels">
</code-view>

## 目盛
目盛は、ラジアル ゲージの中央から放射状に表示される細い線です。目盛には、主目盛および副目盛の 2 種類があり、主目盛りは `MinimumValue` と `MaximumValue` の間の `Interval` に表示されます。また `MinorTickCount` プロパティは、隣接する 2 つの主目盛間の副目盛の数を指定します。目盛りの長さは、`TickStartExtent`、`TickEndExtent`、`MinorTickStartExtent`、`MinorTickEndExtent` に少数値 (0 から 1 の間) を設定して制御できます。

```html
<igx-radial-gauge
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="DodgerBlue"
    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="DarkViolet"
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

```tsx
<IgrRadialGauge
    tickStartExtent={0.45}
    tickEndExtent={0.575}
    tickStrokeThickness={2}
    tickBrush="DodgerBlue"
    minorTickCount={4}
    minorTickEndExtent={0.5}
    minorTickStartExtent={0.575}
    minorTickStrokeThickness={1}
    minorTickBrush="DarkViolet"
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10}/>
```

```html
  <igc-radial-gauge
    height="300px" width="300px"
    tick-start-extent="0.45"
    tick-end-extent="0.575"
    tick-stroke-thickness="2"
    tick-brush="DodgerBlue"
    minor-tick-count="4"
    minor-tick-end-extent="0.5"
    minor-tick-start-extent="0.575"
    minor-tick-stroke-thickness="1"
    minor-tick-brush="DarkViolet"
    minimum-value="0" value="50"
    maximum-value="80" interval="10">
  </igc-radial-gauge>
```

```razor
 <IgbRadialGauge Height="100%" Width="100%"
    TickStartExtent="0.5"
    TickEndExtent="0.57"
    TickStrokeThickness="2"
    TickBrush="DodgerBlue"
    MinorTickCount="4"
    MinorTickEndExtent="0.520"
    MinorTickStartExtent="0.57"
    MinorTickStrokeThickness="1"
    MinorTickBrush="DarkViolet"
    MinimumValue="0"
    MaximumValue="80"
    Value="50"
    Interval="10">
</IgbRadialGauge>

```


<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-tickmarks"
           github-src="gauges/radial-gauge/tickmarks">
</code-view>

## 範囲
範囲に `MinimumValue` や `MaximumValue` プロパティで指定した連続値の境界を強調表示します。開始値と終了値を指定してゲージに複数の範囲を追加でき、各範囲には、`Brush` や `Outline` などのカスタマイズ プロパティがあります。または、`RangeBrushes` や `RangeOutlines` プロパティを範囲の色リストに設定することもできます。

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10
    rangeBrushes ="red, yellow, green"
    rangeOutlines="red, yellow, green">
   <igx-radial-gauge-range
       startValue=5  endValue=15 brush="red">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=15  endValue=35 brush="yellow">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=35  endValue=45 brush="green">
   </igx-radial-gauge-range>
</igx-radial-gauge>
```

```tsx
<IgrRadialGauge
    height="300px" width="300px"
    minimumValue={0} value={50}
    maximumValue={80} interval={10}
    rangeBrushes ="red, yellow, green"
    rangeOutlines="red, yellow, green">
   <IgrRadialGaugeRange
       startValue={1}  endValue={10} brush="yellow" />
   <IgrRadialGaugeRange
       startValue={10}  endValue={25} brush="green" />
   <IgrRadialGaugeRange
       startValue={25}  endValue={40} brush="red" />
    <IgrRadialGaugeRange
       startValue={40}  endValue={80} brush="yellow" />
</IgrRadialGauge>
```

```html
  <igc-radial-gauge
    height="300px" width="300px"
    minimum-value="0" value="50"
    maximum-value="80" interval="10"
    range-brushes ="red, yellow, green"
    range-outlines="red, yellow, green">
    <igc-radial-gauge-range
        start-value="5"  end-value="15" brush="red">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
      start-value="15"  end-value="35" brush="yellow">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
      start-value="35"  end-value="45" brush="green">
    </igc-radial-gauge-range>
  </igc-radial-gauge>
```

```razor
<IgbRadialGauge Height="100%" Width="100%"
      MinimumValue="0" Value="50"
      MaximumValue="80" Interval="10"
      RangeBrushes="#A4BD29, #F86232"
      RangeOutlines="#A4BD29, #F86232">
    <IgbRadialGaugeRange StartValue="10"
          EndValue="25"
          InnerStartExtent="0.50"
          InnerEndExtent="0.50"
          OuterStartExtent="0.57"
          OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange StartValue="25"
          EndValue="40"
          InnerStartExtent="0.50"
          InnerEndExtent="0.50"
          OuterStartExtent="0.57"
          OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
</IgbRadialGauge>
```


<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-ranges"
           github-src="gauges/radial-gauge/ranges">
</code-view>

## 針

ゲージ針は、ゲージの設定値を示す視覚要素です。針は、あらかじめ定義されたいくつかの図形の中から選択でき、ピボット図形をゲージの中心に配置できます。またピボット図形は、事前に定義された図形の 1 つを使用します。オーバーレイとアンダーレイを含むピボット図形には、図形に適用する別のピボット ブラシがあります。

サポートされている針の形とキャップは、`NeedleShape` と `NeedlePivotShape` プロパティで設定します。

ゲージのインタラクティブ モードを有効 (`IsNeedleDraggingEnabled` プロパティを使用) にするとユーザーは `MinimumValue` と `MaximumValue` の値間で針をドラッグして値を変更できるようになります。

```html
<igx-radial-gauge
    value=50
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

```tsx
<IgrRadialGauge
    value={50}
    isNeedleDraggingEnabled={true}
    isNeedleDraggingConstrained={true}
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent={0.475}
    needleStrokeThickness={1}
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio={0.2}
    needlePivotStrokeThickness={1}
    height="300px" width="300px"
    minimumValue={0}
    maximumValue={80} interval={10} />
```

```html
  <igc-radial-gauge
    height="300px" width="300px"
    is-needle-dragging-enabled="true"
    is-needle-dragging-constrained="true"
    needle-shape="NeedleWithBulb"
    needle-brush="DodgerBlue"
    needle-outline="DodgerBlue"
    needle-end-extent="0.475"
    needle-stroke-thickness="1"
    needle-pivot-shape="CircleOverlay"
    needle-pivot-brush="#9f9fa0"
    needle-pivot-outline="#9f9fa0"
    needle-pivot-width-ratio="0.2"
    needle-pivot-stroke-thickness="1"
    minimum-value="0" value="50"
    maximum-value="80" interval="10">
  </igc-radial-gauge>
```

```razor
<IgbRadialGauge Height="100%" Width="100%"
    IsNeedleDraggingEnabled="true"
    IsNeedleDraggingConstrained="true"
    NeedleShape="RadialGaugeNeedleShape.NeedleWithBulb"
    NeedleBrush="DodgerBlue"
    NeedleOutline="DodgerBlue"
    NeedleEndExtent="0.475"
    NeedleStrokeThickness="1"
    NeedlePivotShape="RadialGaugePivotShape.CircleOverlay"
    NeedlePivotBrush="#9F9FA0"
    NeedlePivotOutline="#9F9FA0"
    NeedlePivotWidthRatio="0.2"
    NeedlePivotStrokeThickness="1"
    Value="50"
    MinimumValue="0"
    MaximumValue="80"
    Interval="10">
</IgbRadialGauge>
```

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-needle"
           github-src="gauges/radial-gauge/needle">
</code-view>

## まとめ
上記すべてのコード スニペットを以下のコード ブロックにまとめています。プロジェクトに簡単にコピーしてブレットグラフのすべての機能を再現できます。

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="#c6c6c6"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575

    value=70
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1

    interval=10
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="Black"
    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="Black"

    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="Black"

    backingShape="Fitted"
    backingBrush="#ededed"
    backingOutline="Gray"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15

    rangeBrushes ="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232">
    <igx-radial-gauge-range
        startValue=20 endValue=40
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
    <igx-radial-gauge-range
        startValue=40 endValue=60
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
</igx-radial-gauge>
```

```tsx
<IgrRadialGauge
    height="300px" width="300px"
    minimumValue={0}
    maximumValue={80}
    scaleStartAngle={135}
    scaleEndAngle={45}
    scaleBrush="#c6c6c6"
    scaleSweepDirection="Clockwise"
    scaleOversweep={1}
    scaleOversweepShape="Fitted"
    scaleStartExtent={0.45}
    scaleEndExtent={0.575}

    value={70}
    isNeedleDraggingEnabled={true}
    isNeedleDraggingConstrained={true}
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent={0.475}
    needleStrokeThickness={1}
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio={0.2}
    needlePivotStrokeThickness={1}

    interval={10}
    tickStartExtent={0.45}
    tickEndExtent={0.575}
    tickStrokeThickness={2}
    tickBrush="Black"
    minorTickCount={4}
    minorTickEndExtent={0.5}
    minorTickStartExtent={0.575}
    minorTickStrokeThickness={1}
    minorTickBrush="Black"

    labelExtent={0.65}
    labelInterval={10}
    font="11px Verdana"
    fontBrush="Black"

    backingShape="Fitted"
    backingBrush="#ededed"
    backingOutline="Gray"
    backingOversweep={5}
    backingCornerRadius={10}
    backingStrokeThickness={5}
    backingOuterExtent={0.8}
    backingInnerExtent={0.15}

    rangeBrushes ="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232">
    <IgrRadialGaugeRange
        startValue={20} endValue={40}
        innerStartExtent={0.45} innerEndExtent={0.45}
        outerStartExtent={0.57} outerEndExtent={0.57} />
    <IgrRadialGaugeRange
        startValue={40} endValue={60}
        innerStartExtent={0.45} innerEndExtent={0.45}
        outerStartExtent={0.57} outerEndExtent={0.57} />
</IgrRadialGauge>
```

```html
  <igc-radial-gauge
    height="300px" width="300px"
    minimum-value="0"
    maximum-value="80"
    scale-start-angle="135"
    scale-end-angle="45"
    scale-brush="#c6c6c6"
    scale-sweep-direction="Clockwise"
    scale-oversweep="1"
    scale-oversweep-shape="Fitted"
    scale-start-extent="0.45"
    scale-end-extent="0.575"

    value="70"
    is-needle-dragging-enabled="true"
    is-needle-dragging-constrained="true"
    needle-shape="NeedleWithBulb"
    needle-brush="DodgerBlue"
    needle-outline="DodgerBlue"
    needle-end-extent="0.475"
    needle-stroke-thickness="1"
    needle-pivot-shape="CircleOverlay"
    needle-pivot-brush="#9f9fa0"
    needle-pivot-outline="#9f9fa0"
    needle-pivot-width-ratio="0.2"
    needle-pivot-stroke-thickness="1"

    interval="10"
    tick-start-extent="0.45"
    tick-end-extent="0.575"
    tick-stroke-thickness="2"
    tick-brush="Black"
    minor-tick-count="4"
    minor-tick-end-extent="0.5"
    minor-tick-start-extent="0.575"
    minor-tick-stroke-thickness="1"
    minor-tick-brush="Black"

    label-extent="0.65"
    label-interval="10"
    font="11px Verdana"
    font-brush="Black"

    backing-shape="Fitted"
    backing-brush="#ededed"
    backing-outline="Gray"
    backing-oversweep="5"
    backing-corner-radius="10"
    backing-stroke-thickness="5"
    backing-outer-extent="0.8"
    backing-inner-extent="0.15"

    range-brushes ="#a4bd29, #F86232"
    range-outlines="#a4bd29, #F86232">
    <igc-radial-gauge-range
      start-value="20" end-value="40"
      inner-start-extent="0.45" inner-end-extent="0.45"
      outer-start-extent="0.57" outer-end-extent="0.57">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
      start-value="40" end-value="60"
      inner-start-extent="0.45" inner-end-extent="0.45"
      outer-start-extent="0.57" outer-end-extent="0.57">
    </igc-radial-gauge-range>
  </igc-radial-gauge>
```

```razor
<IgbRadialGauge Height="100%" Width="100%"
             MinimumValue="0"
             MaximumValue="80"
             Value="50"
             Interval="10"

             ScaleStartAngle="135"
             ScaleEndAngle="45"
             ScaleBrush="DodgerBlue"
             ScaleSweepDirection="SweepDirection.Clockwise"
             ScaleOversweep="1"
             ScaleOversweepShape="RadialGaugeScaleOversweepShape.Fitted"
             ScaleStartExtent="0.45"
             ScaleEndExtent="0.575"

             IsNeedleDraggingEnabled="true"
             IsNeedleDraggingConstrained="true"
             NeedleShape="RadialGaugeNeedleShape.NeedleWithBulb"
             NeedleBrush="DodgerBlue"
             NeedleOutline="DodgerBlue"
             NeedleEndExtent="0.475"
             NeedleStrokeThickness="1"
             NeedlePivotShape="RadialGaugePivotShape.CircleOverlay"
             NeedlePivotBrush="#9F9FA0"
             NeedlePivotOutline="#9F9FA0"
             NeedlePivotWidthRatio="0.2"
             NeedlePivotStrokeThickness="1"
             TickStartExtent="0.5"
             TickEndExtent="0.57"
             TickStrokeThickness="2"
             TickBrush="DodgerBlue"

             MinorTickCount="4"
             MinorTickEndExtent="0.520"
             MinorTickStartExtent="0.57"
             MinorTickStrokeThickness="1"
             MinorTickBrush="DarkViolet"

             LabelExtent="0.65"
             LabelInterval="10"
             Font="11px Verdana"
             FontBrush="Black"
             BackingShape="RadialGaugeBackingShape.Fitted"
             BackingBrush="#FCFCFC"
             BackingOutline="DodgerBlue"
             BackingOversweep="5"
             BackingCornerRadius="10"
             BackingStrokeThickness="5"
             BackingOuterExtent="0.8"
             BackingInnerExtent="0.15"

             RangeBrushes="#A4BD29, #F86232"
             RangeOutlines="#A4BD29, #F86232">
    <IgbRadialGaugeRange StartValue="20"
        EndValue="40"
        InnerStartExtent="0.50"
        InnerEndExtent="0.50"
        OuterStartExtent="0.57"
        OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange StartValue="40"
        EndValue="60"
        InnerStartExtent="0.50"
        InnerEndExtent="0.50"
        OuterStartExtent="0.57"
        OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
</IgbRadialGauge>
```
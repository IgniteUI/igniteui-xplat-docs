---
title: {Platform} Radial Gauge Chart | Data Visualization Tools | Infragistics
_description: Use Infragistics' {Platform} radial gauge control to create engaging data visualizations and dashboards and show off KPIs with rich style and interactivity. Learn about the {ProductName} radial gauge configurable elements!
_keywords: Radial Gauge, {ProductName}, Infragistics, animation, labels, needle, scales, ranges, tick marks
mentionedTypes: ['XamRadialGauge', 'XamRadialGaugeRange']
namespace: Infragistics.Controls.Gauges
---
# {Platform} Radial Gauge Overview

The {Platform} radial gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale. The `XamRadialGauge`  also has built-in support for animated transitions. This animation is easily customizable by setting the `TransitionDuration` property.

## {Platform} Radial Gauge Example

The following sample demonstrates how setting multiple properties on the same `XamRadialGauge` can transform it to completely different radial gauge.


<code-view style="height: 375px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-animation"
           alt="{Platform} Radial Gauge Example"
           github-src="gauges/radial-gauge/animation">
</code-view>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the gauge component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGauges}
</pre>
<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->
Please refer to these topics on adding the IgniteUI.Blazor package.
- [Getting Started](general-getting-started.md)
- [Adding Nuget Package](general-nuget-feed.md)

Afterwards you may start implementing the control by adding the following namespaces:
<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
@using IgniteUI.Blazor.Controls

</pre>
<!-- end: Blazor -->

## Component Modules

The `XamRadialGauge` requires the following modules:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRadialGaugeModule));
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


## Usage

The following code demonstrates how create a radial gauge containing a needle and three comparative ranges on the scale.

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

## Backing

The radial gauge component comes with a backing shape drawn behind the scale that acts as a background for the radial gauge.

The backing element represents background and border of the radial gauge component. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

The backing can be circular or fitted. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the `ScaleStartAngle` and `ScaleEndAngle` properties. This can be set by setting the `BackingShape` property.

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

## Scale

The scale is visual element that highlights full range of values in the gauge which can be created by supplying `MinimumValue` and `MaximumValue` values. Together with backing, it defines overall shape of gauge. The `ScaleStartAngle` and `ScaleEndAngle` properties define bounds of arc of the scale. While, the `ScaleSweepDirection` property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting `ScaleBrush`, `ScaleStartExtent`, and `ScaleEndExtent` properties.

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

## Labels
The radial gauge labels are visual elements displaying numeric values at a specified interval between values of the `MinimumValue` and `MaximumValue` properties. You can position labels by setting the `LabelExtent` property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as `FontBrush` and `Font`.

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

## Tick Marks
Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the `Interval` between the `MinimumValue` and `MaximumValue` properties. Use the `MinorTickCount` property to specify the number of minor tick marks displayed between each major tick mark. You can control the length of tick marks by setting a fraction (between 0 and 1) to `TickStartExtent`, `TickEndExtent`, `MinorTickStartExtent`, and `MinorTickEndExtent` properties.

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

## Ranges
A range highlights a set of continuous values bound by a specified `MinimumValue` and `MaximumValue` properties. You can add multiple ranges to the radial gauge by specifying their starting and ending values. Each range has a few customization properties such as `Brush` and `Outline`. Alternatively, you can set `RangeBrushes` and `RangeOutlines` properties to a list of colors for the ranges.

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

## Needle

Radial gauge needles are visual elements used to signify a gauge set value. Needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

The supported needle shapes and caps are set using the `NeedleShape` and `NeedlePivotShape` properties.

You can enable an interactive mode of the gauge (using `IsNeedleDraggingEnabled` property) and the end-user will be able to change value by dragging the needle between values of `MinimumValue` and `MaximumValue` properties.

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

## Summary
For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the radial gauge with all features and visuals enabled.

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

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Linear Gauge](Linear-gauge.md)

## API References

The following is a list of API members mentioned in the above sections:

- `XamRadialGauge`
- `XamRadialGaugeRange`
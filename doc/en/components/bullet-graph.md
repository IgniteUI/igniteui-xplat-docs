---
title: {Platform} Bullet Graph | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} bullet graph control allows you to create dashboards displaying ranges or comparing multiple measurements. View our data visualization tools!
_keywords: {Platform} Bullet Graph, animation, labels, needle, scales, ranges, tick marks, Infragistics
mentionedTypes: ['XamBulletGraph']
namespace: Infragistics.Controls.Gauges
---
# {Platform} Bullet Graph Overview

The {Platform} bullet graph component allows for a linear and concise view of measures compared against a scale.

The {ProductName} bullet graph component provides you with the ability to create attractive data presentations, replacing meters and gauges that are used on dashboards with simple yet straightforward and clear bar charts. A bullet graph is one of the most effective and efficient ways to present progress towards goals, good/better/best ranges, or compare multiple measurements in as little horizontal or vertical space as possible.

## {Platform} Bullet Graph Example

The following sample demonstrates how setting multiple properties on the same `XamBulletGraph` can transform it to completely different bullet graph.

<code-view style="height: 155px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph-animation"
           alt="{Platform} Bullet Graph Example"
           github-src="gauges/bullet-graph/animation">
</code-view>

<div class="divider--half"></div>

The bullet graph supports one scale, NEW TEXT TTTDFK one set of tick marks and one set of labels. The bullet graph component also has built-in support for animated transitions. This animation is easily customizable by setting the `TransitionDuration` property.
The features of the bullet graph include configurable orientation and direction, configurable visual elements such as the needle, and more.

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the gauge package, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageGauges}
</pre>
<!-- end: Angular, React, WebComponents -->

## Component Modules

The `XamBulletGraph` requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBulletGraphModule));
```

```ts
// app.module.ts
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxBulletGraphModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();
```

```ts
import { IgcBulletGraphCoreModule  } from 'igniteui-webcomponents-gauges';
import { IgcBulletGraphModule } from 'igniteui-webcomponents-gauges';
import { ModuleManager } from 'igniteui-webcomponents-core';

// register the modules
ModuleManager.register(
    IgcBulletGraphCoreModule,
    IgcBulletGraphModule
);
```


<div class="divider--half"></div>

## Usage

The following code walks through creating a bullet graph component, and configuring a performance bar, comparative measure marker, and three comparative ranges on the scale.


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
<IgbBulletGraph Height="80px" Width="100%"
MinimumValue="5" Value="35"
MaximumValue="55" TargetValue="43">
<IgbLinearGraphRange StartValue="0"
  EndValue="15"
  Brush="#828181" />
<IgbLinearGraphRange StartValue="15"
  EndValue="30"
  Brush="#AAAAAA" />
<IgbLinearGraphRange StartValue="30"
  EndValue="55"
  Brush="#D0D0D0" />
</IgbBulletGraph>
```

<div class="divider--half"></div>

## Comparative Measures
The bullet graph can show two measures: performance value and target value.

Performance value is the primary measure displayed by the component and it is visualized as a bar that stretches along the length of the whole graph. The target value is a measure which the performance value compares against. It is displayed as a small block that runs perpendicular to the orientation of the performance bar.

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
    maximumValue={100} />
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
<IgbBulletGraph Height="80px" Width="100%"
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
</IgbBulletGraph>
```


<code-view style="height: 125px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph-measures"
           github-src="gauges/bullet-graph/measures">
</code-view>

## Comparative Ranges
The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same time the degree to which it resides within that state.

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
        outerStartExtent={0.95} outerEndExtent={0.95} />
    <IgrLinearGraphRange
        startValue={40} endValue={70}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95} />
    <IgrLinearGraphRange
        startValue={70} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.95} outerEndExtent={0.95} />
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
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="80" Interval="10"
  MaximumValue="100" TargetValue="90"
  RangeBrushes="#C62828,#F96232,#FF9800"
  RangeOutlines="#C62828,#F96232,#FF9800">
<IgbLinearGraphRange
  StartValue="0"
  EndValue="40"
  InnerStartExtent="0.075"
  InnerEndExtent="0.075"
  OuterStartExtent="0.95"
  OuterEndExtent="0.95">
</IgbLinearGraphRange>
<IgbLinearGraphRange
  StartValue="40"
  EndValue="70"
  InnerStartExtent="0.075"
  InnerEndExtent="0.075"
  OuterStartExtent="0.95"
  OuterEndExtent="0.95">
</IgbLinearGraphRange>
<IgbLinearGraphRange StartValue="70"
  EndValue="100"
  InnerStartExtent="0.075"
  InnerEndExtent="0.075"
  OuterStartExtent="0.95"
  OuterEndExtent="0.95">
</IgbLinearGraphRange>
</IgbBulletGraph>
```


<code-view style="height: 125px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph-ranges"
           github-src="gauges/bullet-graph/ranges">
</code-view>

## Tick Marks
The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the bullet graph.
- Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.
- Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

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
    minorTickStrokeThickness={1} />
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
<IgbBulletGraph Height="80px" Width="100%"
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
</IgbBulletGraph>
```


<code-view style="height: 125px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph-tickmarks"
           github-src="gauges/bullet-graph/tickmarks">
</code-view>

## Labels
The labels indicate the measures on the scale.

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
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  LabelInterval="10"
  LabelExtent="0.025"
  LabelsPreTerminal="0"
  LabelsPostInitial="0"
  FontBrush="DodgerBlue"
  Font="11px Verdana">
</IgbBulletGraph>
```


<code-view style="height: 125px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph-labels"
           github-src="gauges/bullet-graph/labels">
</code-view>

## Backing
The backing element represents background and border of the bullet graph component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

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
    backingOuterExtent={1} />
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
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  BackingBrush="#BDDCFC"
  BackingOutline="DodgerBlue"
  BackingStrokeThickness="4"
  BackingInnerExtent="0"
  BackingOuterExtent="1">
</IgbBulletGraph>
```


<code-view style="height: 125px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph-background"
           github-src="gauges/bullet-graph/background">
</code-view>

## Scale
The scale is visual element that highlights the full range of values in the gauge. You can customize appearance and shape of the scale. The scale can also be inverted (using `IsScaleInverted` property) and all labels will be rendered from right-to-left instead of left-to-right.

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
    scaleEndExtent={0.95} />
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
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  IsScaleInverted="false"
  ScaleBackgroundBrush="DodgerBlue"
  ScaleBackgroundOutline="Red"
  ScaleBackgroundThickness="2"
  ScaleStartExtent="0.05"
  ScaleEndExtent="0.95">
</IgbBulletGraph>
```

<code-view style="height: 125px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/gauges/bullet-graph-scale"
           github-src="gauges/bullet-graph/scale">
</code-view>

## Summary
For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the bullet graph with all features and visuals enabled.

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
        outerStartExtent={0.9} outerEndExtent={0.9} />
    <IgrLinearGraphRange
        startValue={40} endValue={60}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9} />
    <IgrLinearGraphRange
        startValue={60} endValue={90}
        innerStartExtent={0.25} innerEndExtent={0.25}
        outerStartExtent={0.9} outerEndExtent={0.9} />
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
<IgbBulletGraph Height="80px" Width="100%"
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
    <IgbLinearGraphRange StartValue="20" EndValue="40"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9" OuterEndExtent="0.9">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="40" EndValue="60"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9" OuterEndExtent="0.9">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="60" EndValue="90"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9 OuterEndExtent="0.9">
    </IgbLinearGraphRange>
</IgbBulletGraph>
```


## API References

The following is a list of API members mentioned in the above sections:

- `XamBulletGraph`
- `XamLinearGraphRange`


## Additional Resources

You can find more information about other types of gauges in these topics:

- [Linear Gauge](Linear-gauge.md)
- [Radial Gauge](radial-gauge.md)
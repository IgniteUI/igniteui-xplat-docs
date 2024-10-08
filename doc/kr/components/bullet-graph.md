---
title: {Platform} Bullet Graph Component - {Platform} | {ProductName}
_description: The Bullet Graph Component in {ProductName} allows for a linear and concise view of measures compared against a scale.
_keywords: {ProductName}, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components, Native {Platform} Components Library, {Platform} Chart, {Platform} Data Grid, {Platform} Chart Control, {Platform} Grid Component, {Platform} data grid Bullet graph component example, {Platform} bullet graph
_language: kr
mentionedTypes: ["XamBulletGraph"]
---

# {Platform} Bullet Graph

The Bullet Graph Component allows for a linear and concise view of measures compared against a scale.

## Demo

The bullet graph component provides you with the ability to create attractive data presentations, replacing meters and gauges that are used on dashboards with simple yet straightforward and clear bar charts. A bullet graph is one of the most effective and efficient ways to present progress towards goals, good/better/best ranges, or compare multiple measurements in as little horizontal or vertical space as possible.

The following sample demonstrates how setting multiple properties on the same gauge can transform it to completely different gauge.


`sample="/gauges/bullet-graph/animation", height="125", alt="{Platform} bullet graph animation"`


<div class="divider--half"></div>

This gauge supports one scale, one set of tick marks and one set of labels. The component also has built-in support for animated transitions. This animation is easily customizable by setting the `transitionDuration` property.
The features of the bullet graph include configurable orientation and direction, configurable visual elements such as the needle, and more.

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the gauge package, the core package must also be installed.

- **npm install --save {PackageCore}**
- **npm install --save {PackageGauges}**
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
// Module Manager for registering the modules of the chart
import { ModuleManager } from 'igniteui-webcomponents-core';
// Bullet Graph Module
import { IgcBulletGraphModule } from 'igniteui-webcomponents-gauges';

// register the modules
ModuleManager.register(
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
                   value="35"
                   targetValue="43">
        <igx-linear-graph-range startValue="0"
                                endValue="15"
                                Brush="#828181">
        </igx-linear-graph-range>
        <igx-linear-graph-range StartValue="15"
                                EndValue="30"
                                Brush="#AAAAAA">
        </igx-linear-graph-range>
        <igx-linear-graph-range StartValue="30"
                                EndValue="55"
                                Brush="#D0D0D0">
        </igx-linear-graph-range>
 </igx-bullet-graph>
```

```tsx
 <IgrBulletGraph height="100"
                   width="300"
                   minimumValue={5}
                   maximumValue={55}
                   value={35}
                   targetValue={43}>
        <IgrLinearGraphRange startValue={0}
                                endValue={15}
                                Brush="#828181"/>
        <IgrLinearGraphRange StartValue={15}
                                EndValue={30}
                                Brush="#AAAAAA"/>
        <IgrLinearGraphRange StartValue={30}
                                EndValue={55}
                                Brush="#D0D0D0"/>
 </IgrBulletGraph>
```

```html
  <igc-bullet-graph height="100px"
    width="300px"
    minimum-value="5"
    maximum-value="55"
    value="35"
    target-value="43">
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
<div class="divider--half"></div>

## Configurable Elements

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


`sample="/gauges/bullet-graph/measures", height="125", alt="{Platform} bullet graph measures"`


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


`sample="/gauges/bullet-graph/ranges", height="125", alt="{Platform} bullet graph ranges"`


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


`sample="/gauges/bullet-graph/tickmarks", height="125", alt="{Platform} bullet graph tickmarks"`


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


`sample="/gauges/bullet-graph/labels", height="125", alt="{Platform} bullet graph labels"`


## Backing
The backing element represents background and border of the bullet graph control. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

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


`sample="/gauges/bullet-graph/background", height="125", alt="{Platform} bullet graph background"`


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


`sample="/gauges/bullet-graph/scale", height="125", alt="{Platform} bullet graph scale"`


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

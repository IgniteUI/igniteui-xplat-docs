---
title: $PlatformShort$ Linear Gauge Component - Native $PlatformShort$ | $ProductName$
_description: Use the Linear Gauge component to see a simple display of a value compared against a scale and one or more ranges.
_keywords: $PlatformShort$, $ProductName$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Data Grid, $PlatformShort$ Chart Control, $PlatformShort$ Grid Component, $PlatformShort$ linear graph Component, $PlatformShort$ linear graph
_language: kr
---
# $PlatformShort$ Linear Gauge

Use the Linear Gauge component to see a simple display of a value compared against a scale and one or more ranges.

## Demo

The linear gauge component allows for visualizing data in the form of a linear gauge. It provides a simple and concise view of a value compared against a scale and one or more ranges. It supports one scale, one set of tick marks and one set of labels. The component has also a built-in support for animated transitions. This animation is easily customizable by setting the `transitionDuration` property. The features of the linear gauge component include configurable orientation and direction, configurable visual elements such as the needle, and more.

The following sample demonstrates how setting multiple properties on the same gauge can transform it to completely different gauge.

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-sample-iframe" src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="gauges/linear-gauge/animation"></sample-button>

</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the gauge package, the core package must also be installed.

- **npm install --save {PackageCore}**
- **npm install --save {PackageGauges}**
<!-- end: Angular, React, WebComponents -->

## Required Modules

The `XamLinearGauge` requires the following modules.

```razor
LinearGaugeModule
```


```ts
// app.module.ts
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';
import { IgxLinearGauge } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxLinearGaugeModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import { IgxLinearGauge } from "ignite-react-gauges";

IgrLinearGaugeModule.register();
```

```ts
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges';
import { IgcLinearGaugeComponent } from 'igniteui-webcomponents-gauges';

ModuleManager.register(
    IgcLinearGaugeModule
    );
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a linear gauge containing a needle and three comparative ranges on the scale.

```html
 <igx-linear-gauge width="70px"
                   height="300px"
                   minimumValue = "5"
                   maximumValue = "55"
                   value = "43">
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
 <IgrLinearGauge width="70px"
                   height="300px"
                   minimumValue = {5}
                   maximumValue = {55}
                   value = {43}>
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

<div class="divider--half"></div>

# $PlatformShort$ Configurable Elements

## Needle
This is the primary measure displayed by the component and is visualized as a bar or you can customize it to show almost any shape as is demonstrated below.

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
    needleOuterBaseWidth={0.07}/>
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

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-needle-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-needle' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-needle-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="gauges/linear-gauge/needle"></sample-button>

</div>

## Ranges
The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

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
        outerStartExtent={0.25} outerEndExtent={0.4}/>
    <IgrLinearGraphRange
        startValue={50} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.4} outerEndExtent={0.55}/>
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

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-ranges-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-ranges' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-ranges-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="gauges/linear-gauge/ranges"></sample-button>

</div>

## Tick Marks
The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the linear gauge.

Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.

Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

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
    minorTickStrokeThickness={1}/>
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
<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-tickmarks-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-tickmarks' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-tickmarks-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="gauges/linear-gauge/tickmarks"></sample-button>

</div>

## Labels
The labels indicate the measures on the scale.

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
    font="11px Verdana"/>
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

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-labels-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-labels' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-labels-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="gauges/linear-gauge/labels"></sample-button>

</div>

## Backing
The backing element represents background and border of the bullet graph control. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

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
    backingOuterExtent={1}/>
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
<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-backing-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-backing' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-backing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="gauges/linear-gauge/backing"></sample-button>

</div>

## Scale
The scale is a visual element that highlights the full range of values in the gauge. You can customize the appearance and the shape of the scale. It can also be inverted (using `IsScaleInverted` property) and all labels will be rendered from right-to-left instead of left-to-right.

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
    scaleEndExtent={0.95}/>
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
 <div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-scale-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-scale' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-scale-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="gauges/linear-gauge/scale"></sample-button>

</div>

## Summary
For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the linear gauge with all features and visuals enabled.

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
        outerStartExtent={0.25} outerEndExtent={0.4}/>
    <IgrLinearGraphRange
        startValue={50} endValue={100}
        innerStartExtent={0.075} innerEndExtent={0.075}
        outerStartExtent={0.4} outerEndExtent={0.55}/>
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
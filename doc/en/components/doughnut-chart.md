---
title: $PlatformShort$ Doughnut Chart | Hierarchical Data Visualization  | Infragistics
_description: Use the Infragistics' $PlatformShort$ doughnut chart control to display multiple variables in concentric rings for hierarchical data visualization. View $ProductName$ doughnut chart demos for more information!
_keywords: $PlatformShort$ charts, doughnut chart, $ProductName$, Infragistics, data binding, slice selection, slice explosion, animation, multiple rings
mentionedTypes: ['XamDoughnutChart']

---
# $PlatformShort$ Doughnut Chart Overview

The $ProductName$ doughnut chart component is similar to the Pie Chart component, proportionally illustrating the occurrences of a variable. The doughnut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data.

## $PlatformShort$ Doughnut Chart Overview Example

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Doughnut Chart Overview Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/doughnut-chart/overview"></sample-button>

</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## Dependencies
When installing the charts component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## Required Modules

The $PlatformShort$ doughnut chart component requires the following modules.

```razor
DoughnutChartModule
* RingSeriesModule
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

## Usage

Now that the doughnut chart module is imported, next step is to bind it to data.
In order to create the component, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```ts
this.data = [
    { Value: 30, Label: "Google",    },
    { Value: 15, Label: "Microsoft", },
    { Value: 30, Label: "Apple",     },
    { Value: 15, Label: "Samsung",   },
    { Value: 10, Label: "Other",     },
];
```

The following code demonstrates how to bind the doughnut chart to the above data.

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

## Multiple Rings
The doughnut chart component can also display multiple rings at the same time with each of the rings capable of being bound to a different data item, or they can share a common data source. For example, the following 2 data sources
are used to bind to multiple rings:
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

## Multiple Rings Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-rings-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-rings' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-rings-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/doughnut-chart/rings"></sample-button>

</div>

<div class="divider--half"></div>

## Slice Selection

The doughnut chart component exposes the API for setting the state of one or more slices to selected. Optionally, you may apply a single custom visual style to the selected slices.

**Enable/disable slice selection** - You can enable (default setting) or disable slice selection in the doughnut chart by setting the `AllowSliceSelection` property.

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

**Configuring the look of the selected slices** - You can define how the selected slices will look by defining a style with a `TargetType` of Slice and assigning it to the `SelectedStyle` property of the doughnut chart.

**Changing the selection state upon slice click** - If you attach an event handler for the `SliceClick` event, it supplies a reference to the clicked slice in the event arguments allowing you to modify its selection state. The doughnut chart exposes a `SelectedStyle` property that determines the look of the selected slices. By default, no style is applied, and selecting a slice will not alter its appearance in any way. In order to apply your own style to the selected slices you need to define a Style with `TargetType` of Slice and set it as the value of the `SelectedStyle` property.

**Setting the IsSelected property** - The $PlatformShort$ doughnut chart component holds references to all the slices allowing you to modify their `IsSelected` property directly. The doughnut chart exposes a `SliceClick` event used to change the selected/unselected state of a slice.

**Modifying the contents of the SelectedSlices collection** - You can change the selected slice by changing the contents of the `SelectedSlices` collection. The doughnut chart holds references to all the slices allowing you to modify their `IsSelected` property directly to the Slice objects.

## Slice Selection Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/doughnut-chart/selection"></sample-button>

</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## Slice Explosion
The doughnut chart component slices explode either programmatically or by user interaction.

**Enable/disable slice explosion**
You can enable or disable the ability to explode slices by setting the `AllowSliceExplosion` property.

**Changing the exploded state of a slice upon slice click**
If you attach an event handler for the `SliceClick` event, a reference to the clicked slice is supplied in the event arguments and you can modify its exploded state.

**Setting the IsExploded property**
The doughnut chart component holds references to all the slices allowing you to modify their `IsExploded` property directly.

**Modifying the contents of the ExplodedSlices collection**
You can change the exploded slices by changing the contents of the `ExplodedSlices` collection.

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

## Slice Explosion Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-explosion-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/doughnut-chart/explosion"></sample-button>

</div>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## Legend
The doughnut chart component supports the use of a legend. The legend used is the ItemLegend which is connected though the series of the chart.

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
## Legend Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="doughnut-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/doughnut-chart/legend"></sample-button>

</div>

## Animation

You can animate the doughnut chart by setting the `radiusFactor` property, which will scales the chart's radius.
Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

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

## Animation Demo
<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-animation-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-animation' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="doughnut-chart-animation-iframe" data-demos-base-url="environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
<sample-button src="charts/doughnut-chart/animation"></sample-button>

</div>

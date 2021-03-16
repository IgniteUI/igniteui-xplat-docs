---
title: $PlatformShort$ Pie Chart | Data Visualization Tool | Infragistics
_description: Use Infragistics' $PlatformShort$ pie chart to create a colorful pie chart to display categorical data. Learn about the $ProductName$ pie chart configurable elements!
_keywords: $PlatformShort$ charts, pie chart, $ProductName$, Infragistics, data binding, slice selection, slice explosion, animation
mentionedTypes: ['XamPieChart','SliceSelectionMode','PieSliceOthersContext']
---
# $PlatformShort$ Pie Chart Overview

$PlatformShort$ Pie Chart, or Pie Graph, is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization. Others include: 

- Pie 
- Doughnut (Ring) 
- Funnel 
- Stacked Area  
- Stacked 100% Area (Stacked Percentage Area) 
- Stacked Bar 
- Stacked 100% Bar (Stacked Percentage Bar) 
- Treemap 
- Waterfall 

The $PlatformShort$ Pie Chart includes interactive features that give the viewer tools to analyze data, like: 

- Legends 
- Slice Explosion 
- Slice Selection 
- Chart Animations 

Best Practices for a Pie Chart: 

- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
- Ensuring data segments add up to 100%.
- Arranging the order of data from largest (highest) to smallest (least).
- Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
- Ensuring the color palette is distinguishable for segments/slices of the parts.
- Considering data labels in segments vs. legends for ease of reading.
- Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
- Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When: 

- Comparing change over time —use a Bar, Line or Area chart.
- Requiring precise data comparison —use a Bar, Line or Area chart.
- You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a Bar chart.

## $PlatformShort$ Pie Chart Example

This example of an $PlatformShort$ Pie Chart includes a simple data set with 6 values. Each key/pair value has a string and a numeric data value, the data values add up to a value of 100% of visualization. In this case, we are showing the overall breakdown of budget spend by department. 


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-overview" 
           alt="$PlatformShort$ Pie Chart Overview" >
</code-view>

<div class="divider--half"></div>

<!-- Blazor -->
In order to use the $PlatformShort$ Pie Chart, the following module is first required to be added to your application:

```razor
PieChartModule.Register(IgniteUIBlazor);
```
<!-- end: Blazor -->

<!-- Angular, React, WebComponents -->
## How to Make $PlatformShort$ Pie Chart

### 1. Install $PlatformShort$ core package

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
</pre>

### 2. Install $PlatformShort$ charts

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCharts}
</pre>

### 3. Install Required Modules
The $PlatformShort$ Pie Chart requires the following modules

```ts
// app.module.ts

import { IgxPieChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxPieChartModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrPieChartModule } from 'igniteui-react-charts';

IgrPieChartModule.register();
```

```ts
import { IgcPieChartModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcPieChartModule);
```

<div class="divider--half"></div>

<!-- end: Angular, React, WebComponents -->

<!-- Angular, React, WebComponents -->
## Usage

Now that the pie chart module is imported, next step is to bind it to data.
In order to create a pie chart, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```ts
var data = [
    { MarketShare: 30, Company: "Google",    },
    { MarketShare: 30, Company: "Apple",     },
    { MarketShare: 15, Company: "Microsoft", },
    { MarketShare: 15, Company: "Samsung",   },
    { MarketShare: 10, Company: "Other",     },
];
```

The following code demonstrates how to bind the pie chart to the above data.

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               labelMemberPath="Company"
               valueMemberPath="MarketShare">
</igx-pie-chart>
```
```tsx
<IgrPieChart
    dataSource={this.state.data}
    labelMemberPath="Company"
    valueMemberPath="MarketShare"
    width="300px"
    height="300px" />
```
<!-- end: Angular, React, WebComponents -->

<div class="divider--half"></div>

## $PlatformShort$ Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum. You can collapse the point using legend click.

In order to display a legend next to the pie chart component an ItemLegend needs to be created and assigned to the `Legend` property. The `LegendLabelMemberPath` can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

Additionally you can use the `LegendItemTemplate` and `LegendItemBadgeTemplate` properties and the various font properties on ItemLegend to further customize the look of the legend items.

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               valueMemberPath="MarketShare"
               labelMemberPath="Company"
               legendLabelMemberPath="Company"
               [legend]="PieChartLegend">
</igx-pie-chart>
```

```tsx
<IgrPieChart dataSource={this.state.data}
             labelMemberPath="Company"
             valueMemberPath="MarketShare"
             width="500px"
             height="500px"
             legendLabelMemberPath="Company" />

<IgrItemLegend ref={this.legend} />

```

```html
<igc-pie-chart id="chart"
        width="100%" height="100%"
        outlines="White"
        value-member-path="MarketShare"
        label-member-path="MarketShare"
        legend-label-member-path="Company"
        radius-factor="0.7">
</igc-pie-chart>

<igc-item-legend id="legend"></igc-item-legend>

```


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-legend" 
           alt="$PlatformShort$ Pie Chart Legend" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Pie Chart Others Category 
Sometimes, the underlying data for the pie chart component will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

In the sample below, the `OthersCategoryThreshold` is set to 2, and `OthersCategoryType` is set to Number. Therefore, items with value less than or equal to 2 will be assigned to the “Others” category.

If you set `OthersCategoryType` to Percent, then `OthersCategoryThreshold` will be interpreted as a percentage rather than as a value, i.e. items whose values are less than 2% of the sum of all item values would be assigned to the Others category. You can use whichever `OthersCategoryType` is most appropriate for your application.


```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               labelMemberPath="Company"
               valueMemberPath="MarketShare"
               othersCategoryThreshold="2"
               othersCategoryType="Number"
               othersCategoryText="Others">
</igx-pie-chart>
```
```tsx
<IgrPieChart dataSource={this.state.data}
             labelMemberPath="Company"
             valueMemberPath="MarketShare"
             width="500px"
             height="500px"
             othersCategoryThreshold="20"
             othersCategoryType="Number"
             othersCategoryText="Others"/>
```
```html
 <igc-pie-chart id="chart"
        width="100%" height="100%"
        label-member-path="Company"
        value-member-path="MarketShare"
        others-category-threshold="20"
        others-category-type="Number"
        others-category-text="Others"
        radius-factor="0.7">
</igc-pie-chart>
```


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-others" 
           alt="$PlatformShort$ Pie Chart Others" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Pie Chart Explosion
The pie chart component supports explosion of individual pie slices as well as a `SliceClick` event that allows you to modify selection states and implement custom logic

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               allowSliceExplosion="true"
               sliceClick="piechart_SliceClick">
</igx-pie-chart>
```

```tsx
<IgrPieChart dataSource={this.state.data}
             labelMemberPath="Company"
             valueMemberPath="MarketShare"
             width="100%"
             height="100%"
             explodedRadius={0.2}
             explodedSlices="1, 2"
             allowSliceExplosion="true"
             radiusFactor={0.7}
             sliceClick={this.onSliceClick}/>
```

```ts
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import { IgrPieChartBase } from 'igniteui-react-charts';
import { IIgrPieChartBaseProps } from 'igniteui-react-charts';

public onSliceClick = (s: IgrPieChartBase<IIgrPieChartBaseProps>, e: IgrSliceClickEventArgs) => {
    e.isExploded = !e.isExploded;
	e.isSelected = false;
}
```

```ts
import { IgcSliceClickEventArgs } from 'igniteui-webcomponents-charts';
import { IgcPieChartComponent } from 'igniteui-webcomponents-charts';

public onSliceClick = (s: IgcPieChartComponent, e: IgcSliceClickEventArgs) => {
    e.isExploded = !e.isExploded;
	e.isSelected = false;
}
```


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-explosion" 
           alt="$PlatformShort$ Pie Chart Explosion" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Pie Chart Selection
The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the `SelectedItems` property. The selected slices are then highlighted.

There is a property called `SelectionMode` which is how you set what mode you want the pie chart to use. The default value is `Single`. In order to disable selection, set the property to `Manual`.

The pie chart component supports three different selection modes.

* Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
* Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
* Manual - When the mode is set to Manual, selection is disabled.

The pie chart component has 4 events associated with selection:
* SelectedItemChanging
* SelectedItemChanged
* SelectedItemsChanging
* SelectedItemsChanged

The events that end in “Changing” are cancelable events which means you can stop the selection of a slice by setting the event argument property `Cancel` to true. When set to true the associated property will not update and the slice will not become selected. This is useful for scenarios where you want to keep users from being able to select certain slices based on the data inside it.

For scenarios where you click on the Others slice, the pie chart will return an object called `PieSliceOthersContext`. This object contains a list of the data items contained within the Others slice.


```html
<igx-pie-chart [dataSource]="data"
            width="100%"
            height="100%"
            selectionMode="multiple"
            selectedSliceStroke = "white"
            selectedSliceFill= "rgb(143,143,143)"
            selectedSliceOpacity =1.0
            selectedSliceStrokeThickness=2>
</igx-pie-chart>
```

```tsx
<IgrPieChart dataSource={this.state.data}
            labelMemberPath="Company"
            valueMemberPath="MarketShare"
            width="100%"
            height="100%"
            ref={this.onPieRef}
            selectionMode="multiple"
            sliceClick={this.onSliceClick}
            selectedSliceStroke="white"
            selectedSliceFill="rgb(143,143,143)"
            selectedSliceOpacity = "1.0"
            selectedSliceStrokeThickness= "2"/>
```

```ts
public onPieRef(chart: IgrPieChart) {
    this.chart  = chart;
}

public onSliceClick = (s: IgrPieChartBase<IIgrPieChartBaseProps>, e: IgrSliceClickEventArgs) =>
    let selectedSlices: string = "";
    const selectedItems = this.chart.selectedItems.toArray();

    for (const item of selectedItems) {
       selectedSlices += item.Company + " ";
    }
    this.setState( {selectedLabel: selectedSlices } );
}
```

```html
<igc-pie-chart id="chart"
    width="100%"
    height="100%"
    label-member-path="Company"
    value-member-path="MarketShare"
    selection-mode="Multiple"
    radius-factor="0.7">
</igc-pie-chart>
```

```ts
Public onSliceClick(s: IgcPieChartComponent, e: IgcSliceClickEventArgs) {
    let selectedSlice: string = "";
    const selectedItems = this.chart.selectedItems.toArray();

    for (const item of selectedItems) {
        selectedSlice += item.Company + ", ";
    }

    this.label.innerText = "Selected Slices: " + selectedSlice;
    }
```


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-selection" 
           alt="$PlatformShort$ Pie Chart Selection" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Pie Chart Animation

You can animate the pie chart smoothly by setting the `radiusFactor` property, which will scale the chart's radius. Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

```ts
window.setInterval(() => this.tick(), 15);

public tick(): void {
    if (this.isAnimating) {
        if (this.chart.radiusFactor < 1.0)
            this.chart.radiusFactor += 0.0025;

        if (this.chart.startAngle < 360)
            this.chart.startAngle++;

        if (this.chart.radiusFactor >= 1.0 &&
            this.chart.startAngle >= 360) {
            this.isAnimating = false;
            window.clearInterval(this.interval);
        }
    }
}
```


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-animation" 
           alt="$PlatformShort$ Pie Chart Animation" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Pie Chart Styling

Once our pie chart is created, we may want to make some further styling customizations such as a change of the colors for the slices of the chart, as demonstrated below:


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-styling" 
           alt="$PlatformShort$ Pie Chart Styling" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Radial Pie Chart

The Radial Pie Chart belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-pie-chart" 
           alt="$PlatformShort$ Radial Pie Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources
- [Animations](chart-features-animations.md)
- [Tooltips](chart-features-tooltips.md)


<!-- TODO list API links used in this topic 
## API Members
-->
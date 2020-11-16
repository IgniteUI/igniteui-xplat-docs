---
title: $PlatformShort$ Sparkline | Data Visualization Tools | Infragistics
_description: Use Infragistics' $PlatformShort$ sparkline chart control to render in a small scale layout such as a grid cell or stand alone. Learn about the $ProductName$ sparkline chart configurable elements!
_keywords: Sparkline, $ProductName$, Infragistics, WinLoss, Area, Column
mentionedTypes: ['XamSparkline', 'SparklineDisplayType', 'TrendLineType']
---

# $PlatformShort$ Sparkline Overview

The $ProductName$ sparkline component is a lightweight charting control. It is intended for rendering within a small scale layout such as within a grid cell, but can also be rendered alone.

The sparkline control has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips.

## Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<sample-button src="charts/sparkline/display-types"></sample-button>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->
## Dependencies
In order to use the $ProductName$ sparkline component, the following packages need to be installed:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

The $PlatformShort$ sparkline component requires the import of the following modules:

```ts
// app.module.ts
import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxSparklineCoreModule } from "igniteui-angular-charts";
import { SparklineDisplayType } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxSparklineCoreModule,
        IgxSparklineModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { SparklineDisplayType } from 'igniteui-react-charts';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();
```

```ts
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';
import { SparklineDisplayType } from 'igniteui-webcomponents-charts';

ModuleManager.register(IgcSparklineModule);
```

```razor
@code {
    protected override void OnInitialized()
    {
        SparklineModule.Register(IgniteUIBlazor);
    }
}
```

## Sparkline Types

The $ProductName$ sparkline component supports the following types of sparklines:

- `Area`
- `Column`
- `Line`
- `WinLoss`

The type is defined by setting the `DisplayType` property. If the `DisplayType` property is not specified, then by default, the `Line` type is displayed.

The `WinLoss` sparkline type is a column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative values) of the bound data set, often denoting a Win or a Loss, or similar opposing concepts. For the `WinLoss` sparkline to display properly, the data set should have both positive and negative values.

If the `WinLoss` sparkline is bound to the same data as the other types such as the `Line` type, which can be bound to a collection of numeric values, then the sparkline component will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

```html
<igx-sparkline height="200px" width="400px"
    [dataSource]="data"
    valueMemberPath="Value"
    displayType="Area" />
```

```tsx
<IgrSparkline height="200px" width="400px"
    dataSource={this.data}
    valueMemberPath="Value"
    displayType="Area" />
```

```html
<igc-sparkline id="chart1"
    height="33%"
    width="100%"
    display-type="WinLoss"
    value-member-path="Value1">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    DisplayType="SparklineDisplayType.Area"
    ValueMemberPath="Value"
    LabelMemberPath="Angle" />
```

```ts
    this.chart1 = document.getElementById("chart1") as IgcSparklineComponent;
    this.chart1.dataSource = this.data1;
```
<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

## Markers

The $ProductName$ sparkline component allows you to show markers as circular colored icons on your series to indicate the individual data points based on X/Y coordinates. Markers can be set on sparklines of display types `Line`, `Area`, and `Column`. The `WinLoss` type of sparkline does not currently accept markers. By default, markers are not displayed.

Markers in the sparkline can be placed in any combination of the following locations:

- `All`: Display markers for all data points in the sparkline.
- `Low`: Display markers on the data point of the lowest value. If there are multiple points at the lowest value, it will show on each point with that value.
- `High`: Display markers on the data point of the highest value. If there are multiple points at the highest value, it will show on each point with that value.
- `First`: Display a marker on the first data point in the sparkline.
- `Last`: Display a marker on the last data point in the sparkline.
- `Negative`: Display markers on the negative data points plotted in the sparkline.

All of the markers mentioned above can be customized using the related marker types' property in aspects of color, visibility, and size. For example, the `Low` markers above will have properties `LowMarkerBrush`, `LowMarkerVisibility`, and `LowMarkerSize`.

```html
<igx-sparkline
    highMarkerVisibility="Visible"
    lowMarkerVisibility="Visible"
    firstMarkerVisibility="Visible"
    lastMarkerVisibility="Visible"
    negativeMarkerVisibility="Visible"
    markerVisibility="Collapsed"
    markerSize="10"
    firstMarkerSize="10"
    lastMarkerSize="10"
    lowMarkerSize="10"
    highMarkerSize="10"
    negativeMarkerSize="10"/>
```

```tsx
<IgrSparkline
    highMarkerVisibility="Visible"
    lowMarkerVisibility="Visible"
    firstMarkerVisibility="Visible"
    lastMarkerVisibility="Visible"
    negativeMarkerVisibility="Visible"
    markerVisibility="Collapsed"
    markerSize={10}
    firstMarkerSize={10}
    lastMarkerSize={10}
    lowMarkerSize={10}
    highMarkerSize={10}
    negativeMarkerSize={10}/>
```

```html
 <igc-sparkline id="sparkline"
    minimum="-3"
    maximum="8"
    marker-visibility="Visible"
    high-marker-visibility="Visible"
    low-marker-visibility="Visible"
    first-marker-visibility="Visible"
    last-marker-visibility="Visible"
    negative-marker-visibility="Visible"
    marker-size="10"
    first-marker-size="1"
    last-marker-size="10"
    low-marker-size="10"
    high-marker-size="10"
    negative-marker-size="10">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    Minimum="-3"
    Maximum="8"
    MarkerVisibility="Visibility.Visible"
    HighMarkerVisibility="Visibility.Visible"
    LowMarkerVisibility="Visibility.Visible"
    FirstMarkerVisibility="Visibility.Visible"
    LastMarkerVisibility="Visibility.Visible"
    NegativeMarkerVisibility="Visibility.Visible"
    MarkerSize="10"
    FirstMarkerSize="1"
    LastMarkerSize="10"
    LowMarkerSize="10"
    HighMarkerSize="10"
    NegativeMarkerSize="10" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-markers-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-markers' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-markers-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

## Normal Range

The normal range feature of the $ProductName$ sparkline component is a horizontal stripe representing some pre-defined meaningful range when the data is being visualized. The normal range can be set as a shaded area outlined with the desired color.

The normal range can be wider than the maximum data point or beyond, and it can also be as thin as the sparkline's `Line` display type, to serve as a threshold indicator, for instance. The width of the normal range is determined by the following three properties, which serve as the minimum settings required for displaying the normal range:

- `NormalRangeVisibility`: Whether or not the normal range is visible.
- `NormalRangeMaximum`: The bottom border of the range.
- `NormalRangeMinimum`: The top border of the range.

By default, the normal range is not displayed. When enabled, the normal range shows up with a light gray color appearance, which can also be configured using the `NormalRangeFill` property.

You can also configure whether or not to show the normal range in front of or behind the plotted series in your sparkline component by setting the `DisplayNormalRangeInFront` property.

```html
<igx-sparkline
    normalRangeVisibility="Visible"
    normalRangeMinimum="1"
    normalRangeMaximum="4"
    normalRangeFill="rgba(88, 88, 88, 0.4)"
    displayNormalRangeInFront="true" />
```

```tsx
<IgrSparkline
    normalRangeVisibility="Visible"
    normalRangeMinimum={1}
    normalRangeMaximum={4}
    normalRangeFill="rgba(255, 0, 0, 0.4)"
    displayNormalRangeInFront="true"  />
```
```html
<igc-sparkline id="sparkline"
    normal-range-visibility="Visible"
    normal-range-minimum="1"
    normal-range-maximum="4"
    normal-range-fill="rgba(255, 0, 0, 0.4)"
    display-normal-range-in-front="true" >
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    NormalRangeVisibility="Visibility.Visible"
    NormalRangeMinimum="1"
    NormalRangeMaximum="4"
    NormalRangeFill="rgba(255, 0, 0, 0.4)"
    DisplayNormalRangeInFront="true" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-normal-range-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-normal-range' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-normal-range-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

## Trendlines

The $ProductName$ sparkline component has support for a range of trendlines that display as another layer on top of the actual sparkline layer. To display a sparkline, you can use the `TrendLineType` property.

The trendlines are calculated according to the algorithm specified by the `TrendLineType` property using the values of the data the the chart is bound to.

Trendlines can only be displayed one at a time and by default, the trendline is not displayed.

A list of supported trendlines can be found below:

- `None`
- `CubicFit`
- `CumulativeAverage`
- `ExponentialAverage`
- `ExponentialFit`
- `LinearFit`
- `LogarithmicFit`
- `ModifiedAverage`
- `PowerLawFit`
- `QuadraticFit`
- `QuarticFit`
- `QuinticFit`
- `SimpleAverage`
- `WeightedAverage`

The following code example shows how to enable a trendline in the $ProductName$ sparkline component:

```html
<igx-sparkline
    trendLineThickness="3"
    trendLinePeriod="5"
    trendLineType="ExponentialFit"
    trendLineBrush="gray" />
```

```tsx
<IgrSparkline
    trendLineThickness={3}
    trendLinePeriod={5}
    trendLineType="ExponentialFit"
    trendLineBrush="Red"  />
```
```html
<igc-sparkline id="chart1"
    trend-line-thickness="3"
    trend-line-period="5"
    trend-line-type="ExponentialFit"
    trend-line-brush="Red">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    TrendLineThickness="3"
    TrendLinePeriod="5"
    TrendLineType="TrendLineType.ExponentialFit"
    TrendLineBrush="Red" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

## Unknown Value Interpolation

The $ProductName$ sparkline component can detect unknown values and render the space for unknown values through a specified interpolation algorithm. If your data contains null values and you do not use this feature, meaning no interpolation is specified, the unknown value will not be plotted.

In order to plot the unknown values, you can set the `UnknownValuePlotting` property of the sparkline component.

```html
<igx-sparkline
    unknownValuePlotting="LinearInterpolate" />
```

```tsx
<IgrSparkline
    unknownValuePlotting="LinearInterpolate" />
```

```html
<igc-sparkline id="sparkline"
    unknown-value-plotting="LinearInterpolate">
</igc-sparkline>
```

```razor
<Sparkline Height="100%"
    Width="100%"
    DataSource="DataSource"
    UnknownValuePlotting="UnknownValuePlotting.LinearInterpolate"/>
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-unknown-values-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-unknown-values' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-unknown-values-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>


## Sparkline in Data Grid

You can embed the $ProductName$ sparkline component in a template column of data grid or other components that support templates. The following code example shows how to do this:

```html
<igx-grid #grid1 [data]="data | async"
[height]="'500px'" width="100%" [autoGenerate]='false' >
    <!-- ... -->
    <igx-column [field]="'OrderHistory'" [width]="'160px'" header="Order History" >
        <ng-template igxCell let-val>
            <igx-sparkline height="50px" width="150px"
            [dataSource]="val"
            valueMemberPath="Sold"
            displayType="Line"
            lineThickness="2"
            brush="rgb(21, 190, 6)"  >
            </igx-sparkline>
        </ng-template>
    </igx-column>
    <!-- ... -->
</igx-grid>
```

```tsx
<IgrDataGrid
    height="100%"
    width="100%"
    rowHeight="70"
    autoGenerateColumns="false"
    dataSource={this.data}>
    {/* ... */}
    <IgrTemplateColumn field="OrderHistory"
    headerText="Order History"
    horizontalAlignment="center" width="*>120"
    template={this.getOrderHistoryTemplate} />
    {/* ... */}
</IgrDataGrid>
```

```ts
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-grids';
// ...
public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
    const info = props.dataContext as IgrTemplateCellInfo;
    return (
        <div className="sparklineInGrid">
           <IgrSparkline
               height="60px" width="100%"
               displayType="Line"
               dataSource={info.rowItem.OrderHistory}
               valueMemberPath="Sold"
               labelMemberPath="Week"
               lineThickness={2}
               brush="rgb(21, 190, 6)"
               negativeBrush="rgb(211, 17, 3)" />
        </div>
    );
}
```

```html
<igc-data-grid id="grid"
    height="100%"
    width="100%"
    row-height="70"
    auto-generate-columns="false">
    <!-- ... -->
    <igc-template-column id="historyColumn"
    field="OrderHistory" header-text="Order History" horizontal-alignment="center" width="*>150"></igc-template-column>
   <!-- ... -->
</igc-data-grid>
```

```ts
import { IgcDataGridModule } from 'igniteui-webcomponents-grids';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
import { IgcTemplateColumnComponent } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellInfo } from 'igniteui-webcomponents-grids';
import { IgcTemplateCellUpdatingEventArgs } from 'igniteui-webcomponents-grids';
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';

ModuleManager.register(IgcDataGridModule);
ModuleManager.register(IgcSparklineModule);

constructor() {
    super();
    this.data = Products.getData();
    this.onUpdatingHistoryColumn = this.onUpdatingHistoryColumn.bind(this);
}

connectedCallback() {
    this.grid = document.getElementById("grid") as IgcDataGridComponent;
    this.grid.dataSource = this.data;

    const historyColumn = document.getElementById("historyColumn") as IgcTemplateColumnComponent;
    historyColumn.cellUpdating = this.onUpdatingHistoryColumn;
}

public onUpdatingHistoryColumn(s: IgcTemplateColumnComponent, e: IgcTemplateCellUpdatingEventArgs) {
    const content = e.content as HTMLDivElement;
    let chart: IgcSparklineComponent | null = null;
    let info = e.cellInfo as IgcTemplateCellInfo;

    if (content.childElementCount === 0) {
        chart = new IgcSparklineComponent();
        chart.valueMemberPath = "Sold";
        chart.labelMemberPath = "Week";
        chart.displayType = SparklineDisplayType.Line;
        chart.lineThickness = 2;
        chart.brush = "rgb(21, 190, 6)";
        chart.negativeBrush = "rgb(211, 17, 3)";
        chart.width = "100%";
        chart.height = "100%";

        content.style.width = "calc(100% - 10px)";
        content.style.height = "calc(100% - 10px)";
        content.style.padding = "5px";
        content.style.margin = "0px";
        content.style.display = "inline-grid";
        content.appendChild(chart);
    }
    else {
        chart = content.children[0] as IgcSparklineComponent;
    }

    if (chart) {
        chart.dataSource = info.rowItem.OrderHistory;
    }
}
```

```razor
<DataGrid Height="100%" Width="100%"
          RowHeight="90"
          AutoGenerateColumns="false"
          DataSource="DataSource">    
    <TemplateColumn Field="OrderHistory" Width="@("*>180")" HeaderText="Order History" >                     
        <Template>
            <RenderFragment>
                 <div style="width: 100%; height: 70px; background: transparent">
                     <Sparkline Height="100%" Width="100%"
                                DataSource="@((context.RowItem as Product).OrderHistory)"
                                DisplayType="SparklineDisplayType.Line"
                                ValueMemberPath="Sold"
                                LabelMemberPath="Week"
                                Brush="rgb(21, 190, 6)">
                     </Sparkline>
                 </div>
            </RenderFragment>
        </Template>
    </TemplateColumn>
</DataGrid>
```

<div class="sample-container loading" style="height: 530px">
    <iframe id="sparkline-grid-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-grid' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-grid-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
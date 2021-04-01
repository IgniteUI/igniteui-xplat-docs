---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Synchronization | Infragistics
_description: Synchronize between multiple Infragistics' $PlatformShort$ charts controls including zooming, panning and crosshair events. Learn about our $ProductName$ graph synchronization capabilities!
_keywords: $PlatformShort$ charts, data chart, synchronization, $ProductName$, Infragistics
mentionedTypes: ["XamDataChart"]
---
# $PlatformShort$ Chart Synchronization

The $ProductName$ data chart allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization"
           alt="$PlatformShort$ Chart Synchronization Example"
           github-src="charts/data-chart/chart-synchronization">
</code-view>

<div class="divider--half"></div>

## Required Modules

In order to use synchronization in the data chart, you need to import and register the interactivity module. This can be done by using the following code:

```razor
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

```ts
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
IgrDataChartInteractivityModule.register();
```

```ts
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
IgcDataChartInteractivityModule.register();
```

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the `IsHorizontalZoomEnabled` and/or `IsVerticalZoomEnabled` property to `true`, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## Code Snippet

The following code snippet demonstrates how to synchronize a pair of chart controls in the $ProductName$ data chart:

```razor
<DataChart Width="600px" Height="400px" @ref="Chart1"
    DataSource="DataSource1"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">
</DataChart>

<DataChart Width="600px" Height="400px" @ref="Chart2"
    DataSource="DataSource2"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">
</DataChart>
```

```html
<igx-data-chart width="600px" height="400px" #chart1
    [dataSource]="DataSource1"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>

<igx-data-chart width="600px" height="400px" #chart2
    [dataSource]="DataSource2"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>
```

```tsx
<IgrDataChart width="600px" height="400px" ref={this.chart1}
    dataSource={this.state.dataSource1}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />

<IgrDataChart width="600px" height="400px" ref={this.chart2}
    dataSource={this.state.dataSource2}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />
```

```html
<igc-data-chart width="600px" height="400px" id="chart1"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>

<igc-data-chart width="600px" height="400px" id="chart2"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>
```


## API Members
- `IsHorizontalZoomEnabled`
- `IsVerticalZoomEnabled`
- `SyncChannel`
- `SynchronizeHorizontally`
- `SynchronizeVertically`
- `XamDataChart`

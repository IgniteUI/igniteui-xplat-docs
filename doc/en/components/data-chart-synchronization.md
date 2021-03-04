---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Synchronization | Infragistics
_description: Synchronize between multiple Infragistics' $PlatformShort$ charts controls including zooming, panning and crosshair events. Learn about our $ProductName$ graph synchronization capabilies!
_keywords: $PlatformShort$ charts, data chart, synchronization, $ProductName$, Infragistics
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Chart Synchronization

The $ProductName$ data chart component allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## $PlatformShort$ Chart Synchronization Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization" alt="$PlatformShort$ Chart Synchronization Example">
</code-view>


<div class="divider--half"></div>

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the `IsHorizontalZoomEnabled` and/or `IsVerticalZoomEnabled` property to `true`, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## Code Snippet

The following code snippet demonstrates how to synchronize a pair of chart controls in the $ProductName$ data chart:

```razor
<DataChart Height="600px" 
    Width="100%"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">

</DataChart>

<DataChart Height="600px" 
    Width="100%"
    IsHorizontalZoomEnabled="true"
    IsVerticalZoomEnabled="true"
    SyncChannel="ChannelA"
    SynchronizedHorizontally="true"
    SynchronizedVertically="true">

</DataChart>
```

```html
<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>

<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>
```

```tsx
<IgrDataChart width="600px"
    height="400px"
    dataSource={this.data}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />


<IgrDataChart width="600px"
    height="400px"
    dataSource={this.data}
    isHorizontalZoomEnabled={true}
    isVerticalZoomEnabled={true}
    syncChannel="ChannelA"
    synchronizeHorizontally={true}
    synchronizeVertically={true} />
```

```html
<igc-data-chart id="chart1"
    width="600px"
    height="400px"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>

<igc-data-chart id="chart2"
    width="600px"
    height="400px"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true"
    sync-channel="ChannelA"
    synchronize-horizontally="true"
    synchronize-vertically="true">
</igc-data-chart>
```


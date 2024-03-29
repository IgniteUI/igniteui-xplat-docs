---
title: {Platform} Data Chart | Data Visualization Tools | Synchronization | Infragistics
_description: Synchronize between multiple Infragistics' {Platform} charts controls including zooming, panning and crosshair events. Learn about our {ProductName} graph synchronization capabilities!
_keywords: {Platform} charts, data chart, synchronization, {ProductName}, Infragistics
mentionedTypes: ["XamDataChart"]
namespace: Infragistics.Controls.Charts
---
# {Platform} Chart Synchronization

The {ProductName} data chart allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## {Platform} Chart Synchronization Example

This sample shows synchronization of two {Platform} data charts:

`sample="/charts/data-chart/chart-synchronization", height="600", alt="{Platform} Chart Synchronization Example"`



<div class="divider--half"></div>

## Chart Synchronization Properties

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the `IsHorizontalZoomEnabled` and/or `IsVerticalZoomEnabled` property to **true**, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## API References

The following is a list of API members mentioned in the above sections:

- `IsHorizontalZoomEnabled`
- `IsVerticalZoomEnabled`
- `SyncChannel`
- `SynchronizeHorizontally`
- `SynchronizeVertically`
- `XamDataChart`

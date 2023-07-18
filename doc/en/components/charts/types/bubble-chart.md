---
title: {Platform} Bubble Chart | Data Visualization | Infragistics
_description: Infragistics' {Platform} Bubble Chart
_keywords: {Platform} Charts, Bubble Chart, Infragistics
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries", 'Series']
namespace: Infragistics.Controls.Charts
---
# {Platform} Bubble Chart

The {ProductName} Bubble Chart is a type of [Scatter Chart](scatter-chart.md) that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. These coordinates of the data point are determined by two numeric data columns. The Bubble Chart draws attention to uneven intervals or clusters of data. This chart is often used to plot scientific data, and can highlight the deviation of collected data from predicted results. The Bubble Chart has many of the characteristics of the [Scatter Marker Chart](scatter-chart.md#{PlatformLower}-scatter-marker-chart) but with the option to have various radius scale sizes.

## {Platform} Bubble Chart Example

You can create {ProductName} Bubble Chart in `XamDataChart` control using the `BubbleSeries` and two numeric axes, as shown in the example below.

`sample="/charts/data-chart/scatter-bubble-chart-multiple-sources", height="600", alt="{Platform} Bubble Chart Example"`



<div class="divider--half"></div>

## {Platform} Bubble Chart with Single Series

You can bind your data to `ItemsSource` property of `BubbleSeries` and map data columns using its `XMemberPath`, `YMemberPath`, `RadiusMemberPath` properties, as shown in the example below:

`sample="/charts/data-chart/scatter-bubble-chart-single-source", height="600", alt="{Platform} Bubble Chart with Single Series"`



<div class="divider--half"></div>

## {Platform} Bubble Chart with Multiple Series

In {Platform} Bubble Chart, binding multiple data sources works by setting each new data source to `ItemsSource` property of a additional `BubbleSeries`, as shown in the example below:

`sample="/charts/data-chart/scatter-bubble-chart-multiple-sources", height="600", alt="{Platform} Bubble Chart with Multiple Series"`



<div class="divider--half"></div>

## {Platform} Bubble Chart Styling

In {Platform} Bubble Chart, you can customize shape of bubble markers using `MarkerType` property, their size with `RadiusScale` property, and their appearance using `MarkerBrush`, `MarkerOutline`, `MarkerThickness` properties. In addition, you can also color bubble markers based on a data column using `FillMemberPath` and `FillScale` properties. In this example, usage of above properties is demonstrated.

`sample="/charts/data-chart/scatter-bubble-chart-styling", height="600", alt="{Platform} Bubble Chart Styling"`



<div class="divider--half"></div>

## Additional Resources

- [Scatter Chart](scatter-chart.md)
- [Shape Chart](shape-chart.md)


## API References

The following table lists API members mentioned in the above sections:

- `XamDataChart`
- `BubbleSeries`
- `ScatterSeries`
- `ItemsSource`
- `FillMemberPath`
- `FillScale`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`
- `MarkerThickness`
- `RadiusScale`
- `RadiusMemberPath`
- `XMemberPath`
- `YMemberPath`
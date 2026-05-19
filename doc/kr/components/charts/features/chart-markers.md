---
title: {Platform} Chart Markers | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Markers
_keywords: {Platform} Charts, Markers, Marker Size, Infragistics
_language: kr
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType", "MarkerSeries", "ScatterLineSeries", "ScatterSplineSeries", "ScatterSeries", "LineSeries", "SplineSeries", "MarkerAutomaticBehavior", "SeriesViewer"]
---

# {Platform} Chart Markers

In {ProductName}, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

## {Platform} Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the `MarkerType` property to "Circle."

The colors of the markers are also managed by setting the `MarkerBrushes` and `MarkerOutlines` properties in the sample below. The markers and `CategoryChart.ChartType` is configurable in this sample by using the drop-downs as well.

`sample="/charts/category-chart/marker-options", height="500", alt="{Platform} Configuration Options Example"`



<div class="divider--half"></div>

## {Platform} Chart Marker Size

You can control the exact device-independent pixel dimensions of data point markers by setting the `MarkerSize` property on any series that supports markers. This gives you precise control over how large markers appear on screen, regardless of the marker template or style being used.

By default, marker sizing is determined by the series marker template. When you set `MarkerSize` to a specific numeric value, all markers in that series render at that exact device-independent pixel width and height. Setting `MarkerSize` back to `NaN` restores the default template-driven sizing.

The `MarkerSize` property is available on all series types that derive from `MarkerSeries`, including `LineSeries`, `SplineSeries`, `AreaSeries`, `ColumnSeries`, `ScatterSeries`, `ScatterLineSeries`, `ScatterSplineSeries`, and polar/radial series types.

The following code examples show how to set `MarkerSize` to 30 device-independent pixels on a `ScatterLineSeries` in the `XamDataChart` control:

```razor
<IgbDataChart>
    <IgbScatterLineSeries
        MarkerSize="30"
        MarkerType="Circle"
        XMemberPath="X"
        YMemberPath="Y"
        XAxisName="xAxis"
        YAxisName="yAxis" />
</IgbDataChart>
```

```tsx
<IgrDataChart>
    <IgrScatterLineSeries
        markerSize={30}
        markerType="Circle"
        xMemberPath="X"
        yMemberPath="Y"
        xAxisName="xAxis"
        yAxisName="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart>
    <igc-scatter-line-series
        marker-size="30"
        marker-type="Circle"
        x-member-path="X"
        y-member-path="Y"
        x-axis-name="xAxis"
        y-axis-name="yAxis">
    </igc-scatter-line-series>
</igc-data-chart>
```

To reset markers to their default template-driven size, set `MarkerSize` to `NaN` (or remove the attribute in markup):

```razor
<IgbLineSeries MarkerSize="NaN" MarkerType="Circle" ... />
```

```tsx
<IgrLineSeries markerSize={NaN} markerType="Circle" ... />
```

The following sample demonstrates `MarkerSize` on scatter series with an interactive editor:

`sample="/charts/data-chart/scatter-marker-options", height="500", alt="{Platform} Chart Marker Size Example"`

> [!NOTE]
> For `BubbleSeries`, the `MarkerSize` property does not override the bubble radius, which is controlled by the radius data column and the `RadiusScale`. Bubble sizes remain entirely driven by the data and scale configuration.

<div class="divider--half"></div>

## {Platform} Chart Checkmark Marker Type

The {ProductName} charts include a `Checkmark` option in the `MarkerType` enum. This marker renders a V-shaped checkmark icon inside a circle on data points in your chart.

You can apply the `Checkmark` marker type to an individual series by setting its `MarkerType` property to `MarkerType.Checkmark`. To use the checkmark shape for all series in the chart simultaneously, set the chart's `MarkerAutomaticBehavior` property to `MarkerAutomaticBehavior.Checkmark`.

The `SeriesViewer.CheckmarkMarkerTemplate` property defines the marker template used for series with a checkmark marker type, and can be used to customize its appearance across the chart.

<div class="divider--half"></div>

## {Platform} Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  `MarkerTemplate` property of a series rendered in the `CategoryChart` control as it is demonstrated in example below.

`sample="/charts/category-chart/marker-templates", height="600", alt="{Platform} Chart Marker Templates"`



<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerSize`
- `MarkerType`
- `UseLightweightMarkers`
- `MarkerAutomaticBehavior`
- `SeriesViewer.CheckmarkMarkerTemplate`
- `CategoryChart`
- `XamDataChart`

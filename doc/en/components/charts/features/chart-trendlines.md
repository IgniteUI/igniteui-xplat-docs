---
title: {Platform} Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' {Platform} Chart Trendlines
_keywords: {Platform} Charts, Trendlines, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart Trendlines

In {ProductName} charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the `CategoryChart`, `FinancialChart`, and `XamDataChart` (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the `TrendLineType` property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness.

The trendlines also have the ability to have a dash array applied to them once enabled. This is done by setting the `TrendLineDashArray` property to an array of numbers. The numeric array describes the length of the dashes of the trendline.

# {Platform} Chart Trendlines Example

The following sample depicts a `FinancialChart` showing the stock trend of Microsoft between 2013 and 2017 with a **QuinticFit** trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

`sample="/charts/financial-chart/trendlines", height="500", alt="{Platform} Trendlines Example"`


<div class="divider--half"></div>

# {Platform} Chart Trendlines Dash Array Example

The following sample depicts a `XamDataChart` showing a `FinancialPriceSeries` with a **QuarticFit** dashed trendline applied via the `TrendLineDashArray` property:

`sample="/charts/data-chart/dash-array-trendline", height="500", alt="{Platform} Trendlines Example"`


<div class="divider--half"></div>

# {Platform} Chart Trendline Layer

The `TrendLineLayer` is a series type that is designed to display a single trendline type for a target series. The difference between this and the existing trendline features on the existing series types is that since the `TrendLineLayer` is a series type, you can add more than one of them to the `Series` collection of the chart to have multiple trendlines attached to the same series. You can also have the trendline appear in the legend, which was not possible previously.

### Trendline Layer Usage

The `TrendLineLayer` must be provided with a `TargetSeries` and a `TrendLineType` in order to work properly. The different trendline types that are available are the same as the trendlines that are available on the series.

If you would like to show the `TrendLineLayer` in the Legend, you can do so by setting the `UseLegend` property to `true`.

### Styling the Trendline Layer

By default, the `TrendLineLayer` renders with the same color as its `TargetSeries` in a dashed line. This can be configured by using the various styling properties on the `TrendLineLayer`.

To change the color of the trendline that is drawn, you can set its `Brush` property. Alternatively, you can also set the `UseIndex` property to `true`, which will pull from the chart's `Brushes` palette based on the index in which the `TrendLineLayer` is placed in the chart's `Series` collection.

You can also modify the way that the `TrendLineLayer` appears by using its `AppearanceMode` and `ShiftAmount` properties. The `ShiftAmount` takes a value between -1.0 and 1.0 to determine how much of a "shift" to apply to the options that end in "Shift".

The following are the options for the `AppearanceMode` property:

- `Auto`: This will default to the DashPattern enumeration.
- `BrightnessShift`: The trendline will take the `TargetSeries` brush and modify its brightness based on the provided `ShiftAmount`.
- `DashPattern`: The trendline will appear as a dashed line. The frequency of the dashes can be modified by using the `DashArray` property on the `TrendLineLayer`.
- `OpacityShift`: The trendline will take the `TargetSeries` brush and modify its opacity based on the provided `ShiftAmount`.
- `SaturationShift`: The trendline will take the `TargetSeries` brush and modify its saturation based on the provided `ShiftAmount`.

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The `CategoryChart` and `FinancialChart` components share the following API properties:

- `DomainChart.TrendLineBrushes`
- `DomainChart.TrendLinePeriod`
- `DomainChart.TrendLineThickness`
- `DomainChart.TrendLineType`

In the `XamDataChart` component, most types of series have the following API properties:

- `ScatterBase.TrendLineBrush`
- `ScatterBase.TrendLineDashArray`
- `ScatterBase.TrendLinePeriod`
- `ScatterBase.TrendLineThickness`
- `ScatterBase.TrendLineType`

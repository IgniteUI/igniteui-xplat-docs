---
title: {Platform} Axis Types | Data Visualization | Infragistics
_description: Infragistics' {Platform} Axis Types
_keywords: {Platform} Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Axis Types

The {ProductName} Category Chart uses only one `CategoryXAxis` and one `NumericYAxis` type. Similary, {ProductName} Financial Chart uses only one `TimeXAxis` and one `NumericYAxis` types. However, the {ProductName} Data Chart provides support for multiple axis types that you can position on any side of the chart by setting [axis location](chart-axis-layouts.md#axis-locations-example) or even inside of the chart by using [axis crossing](chart-axis-layouts.md#axis-crossing-example) properties. This topic goes over each one, which axes and series are compatible with each other, and some specific properties to the unique axes.

## Cartesian Axes

The `XamDataChart` with Cartesian Axes, allows you to plot data in horizontal (X-axis) and vertical (X-axis) direction with 3 types of X-Axis
(`CategoryXAxis`, `NumericXAxis`, and `TimeXAxis`) and 2 types of Y-Axis (`CategoryYAxis` and `NumericYAxis`).
 
### Category X-Axis

The `CategoryXAxis` treats its data as a sequence of categorical data items. It can display almost any type of data including strings and numbers. If you are plotting numbers on this axis, it is important to keep in mind that this axis is a discrete axis and not continuous. This means that each categorical data item will be placed equidistant from the one before it. The items will also be plotted in the order that they appear in the axis' data source.

The `CategoryXAxis` requires you to provide a `DataSource` and a `Label` in order to plot data with it. It is generally used with the `NumericYAxis` to plot the following type of series:

| Category Series  | Stacked Series | Financial Series | 
|------------------|----------------|--------------------| 
| - `AreaSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` | -  `StackedAreaSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br> <br> | - `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> <br> <br> <br> | 

 The following example demonstrates usage of the `CategoryXAxis` type:

 `sample="/charts/data-chart/stacked-column-chart", height="500", alt="{Platform} Category X Axis Example"`

### Category Y-Axis

The `CategoryYAxis` works very similarly to the `CategoryXAxis` described above, but it is placed vertically rather than horizontally. Also, this axis requires you to provide a `DataSource` and a `Label` in order to plot data with it. The `CategoryYAxis` is generally used with the `NumericXAxis` to plot the following type of series:

 - `BarSeries`
 - `StackedBarSeries`
 - `Stacked100BarSeries`

 The following example demonstrates usage of the `CategoryYAxis` type:

 `sample="/charts/data-chart/bar-chart-multiple-sources", height="500", alt="{Platform} Category Y Axis Example"`

### Numeric X-Axis

The `NumericXAxis` treats its data as continously varying numerical data items. Labels on this axis are placed horizontally along the X-Axis. The location of the `NumericXAxis` labels depends on the `XMemberPath` property of the various `Scatter Series` that it supports if combined with a `NumericYAxis`. Alternatively, if combined with the `CategoryXAxis`, these labels will be placed corresponding to the `ValueMemberPath` of the `BarSeries`, `StackedBarSeries`, and `Stacked100BarSeries`.

The `NumericXAxis` is compatible with the following type of series:

 - `BarSeries` 
 - `BubbleSeries` 
 - `HighDensityScatterSeries`
 - `ScatterSeries`
 - `ScatterLineSeries`
 - `ScatterSplineSeries` 
 - `ScatterAreaSeries`
 - `ScatterContourSeries`
 - `ScatterPolylineSeries`
 - `ScatterPolygonSeries`
 - `StackedBarSeries`
 - `Stacked100BarSeries`

 The following example demonstrates usage of the `NumericXAxis`:

 `sample="/charts/data-chart/type-scatter-hd-series", height="500", alt="{Platform} Numeric X Axis Example"`

### Numeric Y-Axis

The `NumericYAxis` treats its data as continously varying numerical data items. Labels on this axis are placed vertically along the Y-Axis. The location of the `NumericYAxis` labels depends on the `YMemberPath` property of the various `Scatter Series` that is supports if combined with a `NumericXAxis`. Alternatively, if combined with the `CategoryYAxis`, these labels will be placed corresponding to the `ValueMemberPath` of the category or stacked series mentioned in the table above. If you are using one of the financial series, they will be placed corresponding to the Open/High/Low/Close paths and the series type that you are using.

The `NumericYAxis` is compatible with the following type of series:

| Category Series  | Stacked Series | Financial Series | Scatter Series |
|------------------|----------------|------------------|----------------|
| - `AreaSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> | - `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> | - `BubbleSeries` <br> - `HighDensityScatterSeries` <br> -  `ScatterSeries` <br>  - `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolylineSeries`  <br> -  `ScatterPolygonSeries`  <br> |

 The following example demonstrates usage of the `NumericYAxis`:

 `sample="/charts/data-chart/scatter-line-chart", height="500", alt="{Platform} Numeric Y Axis Example"`

### Time X Axis

The `TimeXAxis` treats its data as a sequence of data items, sorted by date. Labels on this axis type are dates and can be formatted and arranged according to date intervals. The date range of this axis is determined by the date values in a data column that is mapped using its `DateTimeMemberPath`. This, along with a `DataSource` is required to plot data with this axis type.

The `TimeXAxis` is the X-Axis type in the `FinancialChart` component.

#### Breaks in Time X Axis

The `TimeXAxis` has the option to exclude intervals of data by using `Breaks`. As a result, the labels and plotted data will not appear at the excluded interval. For example, working/non-working days, holidays, and/or weekends. An instance of `TimeAxisBreak` can be added to the `Breaks` collection of the axis and configured by using a unique `Start`, `End` and `Interval`.

#### Formating in Time X Axis

The `TimeXAxis` has the `LabelFormats` property, which represents a collection of `TimeAxisLabelFormat` objects. Each `TimeAxisLabelFormat` added to the collection is responsible for assigning a unique `Format` and `Range`. This can be especially useful for drilling down data from years to milliseconds and adjusting the labels depending on the range of time shown by the chart.

The `Format` property of the `TimeAxisLabelFormat` specifies what format to use for a particular visible range. The `Range` property of the `TimeAxisLabelFormat` specifies the visible range at which the axis label formats will switch to a different format. For example, if you have two `TimeAxisLabelFormat` elements with a range set to 10 days and another set to 5 hours, then as soon as the visible range of the axis becomes less than 10 days, it will switch to 5-hour format.

#### Intervals in Time X Axis

The `TimeXAxis` replaces the conventional `Interval` property of the category and numeric axes with an `Intervals` collection of type `TimeAxisInterval`. Each `TimeAxisInterval` added to the collection is responsible for assigning a unique `Interval`, `Range` and `IntervalType`. This can be especially useful for drilling down data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart. A description of these properties is below:

- `Interval`: This specifies the interval to use. This is tied to the `IntervalType` property. For example, if the `IntervalType` is set to `Days`, then the numeric value specified in `Interval` will be in days.
- `Range`: This specifies the visible range at which the axis interval will switch to a different interval. For example, if you have two TimeAxisInterval with a range set to 10 days and another set to 5 hours, as soon as the visible range in the axis becomes less than 10 days it will switch to the interval whose range is 5 hours.
- `IntervalType`: This specifies the unit of time for the `Interval` property.

## Polar Axes

The `XamDataChart` with Polar Axes, allows you to plot data outwards (radius axis) from center of the chart and around (angle axis) of center of the chart.

### Category Angle Axis

The `CategoryAngleAxis` treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers. 

The `CategoryAngleAxis` is generally used with the `NumericRadiusAxis` to plot [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the `CategoryAngleAxis` type:

 `sample="/charts/data-chart/radial-area-chart", height="500", alt="{Platform} Category Angle Axis Example"`

### Numeric Angle Axis

The `NumericAngleAxis` treats its data as continously varying numerical data items. The labels on this axis area placed along a radius line starting from the center of the circular plot. The location of the labels on the `NumericAngleAxis` varies according to the value in the data column mapped using the `RadiusMemberPath` property of the [Polar Series](../types/polar-chart.md) object or the `ValueMemberPath` property of the [Radial Series](../types/radial-chart.md) object. 

The The `NumericAngleAxis` can be used with either the `CategoryAngleAxis` to plot [Radial Series](../types/radial-chart.md) or with the `NumericRadiusAxis` to plot [Rolar Series](../types/polar-chart.md) respectively.

The following example demonstrates usage of the `NumericAngleAxis` type:

 `sample="/charts/data-chart/polar-scatter-chart", height="500", alt="{Platform} Numeric Angle Axis Example"`

### Numeric Radius Axis

The `NumericRadiusAxis` treats the data as continously varing numerical data items. The labels on this axis are placed around the circular plot. The location of the labels varies according to the value in a data column mapped using the `AngleMemberPath` property of the corresponding polar series.

The `NumericRadiusAxis` can be used with the `NumericRadiusAxis` to plot [Polar Series](../types/polar-chart.md).

The following example demonstrates usage of the `NumericRadiusAxis` type:

 `sample="/charts/data-chart/polar-line-chart", height="500", alt="{Platform} Numeric Radius Axis Example"`

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layouts](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

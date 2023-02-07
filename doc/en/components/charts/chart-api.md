---
title: {Platform} Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics {ProductName} chart provides useful API to configure and styles chart visuals
_keywords: {Platform} charts, chart API, API, {ProductName}, Infragistics
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart API

The {ProductName} charts provide simple and easy to use APIs to plot your data in `CategoryChart`, `FinancialChart`, and `XamDataChart`.

## {Platform} Category Chart API Members

The {Platform} `CategoryChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `CategoryChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `CrosshairsDisplayMode` <br> - `TransitionInMode` <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` <br> |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> - `XAxisTitle`  <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes` <br>  - `ToolTipType` <br> <br> <br> <br> |

## {Platform} Financial Chart API Members

The {Platform} `FinancialChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `FinancialChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode`  <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` <br> - `YAxisMode` <br> - `XAxisMode` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`  <br> - `IndicatorTypes` <br>  - `VolumeType` <br>  - `ZoomSliderType` <br> |

## {Platform} Data Chart API Members

The {Platform} `XamDataChart` has the following API members:

| Chart Properties | Axis Classes |
|------------------|--------------|
| - `SeriesViewer.Title` <br> - `SeriesViewer.Subtitle` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> <br> |  - `Axis` <br> - `CategoryXAxis` <br> - `CategoryYAxis` <br> - `CategoryAngleAxis` <br> - `NumericXAxis` <br> - `NumericYAxis` <br> - `NumericAngleAxis` <br> - `NumericRadiusAxis` <br> |

The {Platform} `XamDataChart` can use the following type of `Series`:

| Category Series  | Stacked Series |
|------------------|----------------|
| - `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br> |


| Scatter Series | Financial Series |
|----------------|------------------|
| -  `BubbleSeries` <br> - `HighDensityScatterSeries` <br> -  `ScatterSeries` <br>  - `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolylineSeries`  <br> -  `ScatterPolygonSeries`  <br> | -  `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> - `WeightedCloseIndicator` <br> |


| Radial Series | Polar Series |
|---------------|--------------|
| - `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br> <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br> |


## {Platform} Data Legend API Members

The {Platform} `XamDataLegend` has the following API members:

- `IncludedColumns`
- `ExcludedColumns`
- `IncludedSeries`
- `ExcludedSeries`
- `ValueFormatAbbreviation`
- `ValueFormatMode`
- `ValueFormatCulture`
- `ValueFormatMinFractions`
- `ValueFormatMaxFractions`
- `ValueTextColor`
- `TitleTextColor`
- `LabelTextColor`
- `UnitsTextColor`
- `SummaryType`


## Additional Resources

You can find more information about charts in these topics:

- [Chart Overview](chart-overview.md)
- [Chart Features](chart-features.md)




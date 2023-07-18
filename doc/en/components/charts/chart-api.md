---
title: {Platform} Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics {ProductName} chart provides useful API to configure and styles chart visuals
_keywords: {Platform} charts, chart API, API, {ProductName}, Infragistics
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "SeriesViewer", "XamDoughnutChart", "XamPieChart", and "XamSparkline" ]
namespace: Infragistics.Controls.Charts
---

# {Platform} Chart API

The {ProductName} charts provide simple and easy to use APIs to plot your data in `CategoryChart`, `FinancialChart`, `XamDataChart`, `XamDoughnutChart`, `XamPieChart`, and `XamSparkline` UI elements.

## {Platform} Category Chart API Members

The {Platform} `CategoryChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `CategoryChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `CrosshairsDisplayMode` <br> - `TransitionInMode` <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` <br> |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> - `XAxisTitle`  <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes` <br>  - `ToolTipType` <br> <br> <br> <br> <br> |

## {Platform} Financial Chart API Members

The {Platform} `FinancialChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `FinancialChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode`  <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` <br> - `YAxisMode` <br> - `XAxisMode` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`  <br> - `IndicatorTypes` <br>  - `VolumeType` <br>  - `ZoomSliderType` <br> <br> <br> |

## {Platform} Data Chart API Members

The {Platform} `XamDataChart` has the following API members:

| Chart Properties | Axis Classes |
|------------------|--------------|
| - `SeriesViewer.Title` <br> - `SeriesViewer.Subtitle` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `PlotAreaMargin` <br> |  - `Axis` is base class for all axis types <br> - `CategoryXAxis` used with Category, Stacked, and Financial Series <br> - `CategoryYAxis` used with Category, Stacked Series <br> - `CategoryAngleAxis` used with Radial Series <br> - `NumericXAxis` used with Scatter and Stacked Bar Series <br> - `NumericYAxis` used with Category, Stacked, and Financial Series <br> - `NumericAngleAxis` used with Polar Series <br> - `NumericRadiusAxis` used with Polar and Radial Series <br> - `TimeXAxis` used with Category and Financial Series <br> |

The {Platform} `XamDataChart` can use the following type of series that inherit from `Series`:

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
- `HeaderTextColor`
- `BadgeShape`


## {Platform} Donut Chart API Members

The {Platform} `XamDoughnutChart` has the following API members:

- `AllowSliceExplosion`
- `AllowSliceSelection`
- `InnerExtent`
- `SliceClick`

## {Platform} Pie Chart API Members

The {Platform} `XamPieChart` has the following API members:

- `LegendItemBadgeTemplate`
- `LegendItemTemplate`
- `LegendLabelMemberPath`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`

## {Platform} Sparkline Chart API Members

The {Platform} `XamSparkline` has the following API members:

- `DisplayNormalRangeInFront`
- `XamSparkline.DisplayType`
- `LowMarkerBrush`
- `LowMarkerSize`
- `LowMarkerVisibility`
- `NormalRangeFill`
- `UnknownValuePlotting`

## Additional Resources

You can find more information about charts in these topics:

- [Chart Overview](chart-overview.md)
- [Chart Features](chart-features.md)




---
title: {Platform} Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics {ProductName} chart provides useful API to configure and styles chart visuals
_keywords: {Platform} charts, chart API, API, {ProductName}, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "SeriesViewer", "XamDoughnutChart", "XamPieChart", "XamSparkline", "DataPieChart" ]
namespace: Infragistics.Controls.Charts
---

# {Platform} Charts API

The {ProductName} charts provide simple and easy to use APIs to plot your data in `CategoryChart`, `FinancialChart`, `XamDataChart`, `DataPieChart`, `XamDoughnutChart`, `XamPieChart`, and `XamSparkline` UI elements.

## {Platform} Category Chart API

The {Platform} `CategoryChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `CategoryChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `CrosshairsDisplayMode` <br> - `TransitionInMode` <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` <br> |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> - `XAxisTitle`  <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes` <br>  - `ToolTipType` <br> <br> <br> <br> <br> |

## {Platform} Financial Chart API

The {Platform} `FinancialChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `FinancialChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode`  <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` <br> - `YAxisMode` <br> - `XAxisMode` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`  <br> - `IndicatorTypes` <br>  - `VolumeType` <br>  - `ZoomSliderType` <br> <br> <br> |

## {Platform} Data Chart API

The {Platform} `XamDataChart` has the following API members:

| Chart Properties | Axis Classes |
|------------------|--------------|
| - `SeriesViewer.Title` <br> - `SeriesViewer.Subtitle` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `XamDataChart.Axes` <br> - `SeriesViewer.Series` <br> |  - `Axis` is base class for all axis types <br> - `CategoryXAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br> - `CategoryYAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md) <br> - `CategoryAngleAxis` used with [Radial Series](types/radial-chart.md) <br> - `NumericXAxis` used with [Scatter Series](types/scatter-chart.md) and [Bar Series](types/bar-chart.md)   <br> - `NumericYAxis` used with [Scatter Series](types/scatter-chart.md), [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br> - `NumericAngleAxis` used with [Polar Series](types/polar-chart.md) <br> - `NumericRadiusAxis` used with [Polar Series](types/polar-chart.md) and [Radial Series](types/radial-chart.md) <br> - `TimeXAxis` used with [Category Series](types/column-chart.md) and [Financial Series](types/stock-chart.md) <br> <br> |

The {Platform} `XamDataChart` can use the following type of series that inherit from `Series`:

| Category Series  | Stacked Series |
|------------------|----------------|
| - `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br> |


| Scatter Series | Financial Series |
|----------------|------------------|
| -  `BubbleSeries` <br> - `HighDensityScatterSeries` <br> -  `ScatterSeries` <br>  - `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolylineSeries`  <br> -  `ScatterPolygonSeries`  <br> <br> | -  `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> - `WeightedCloseIndicator` <br> - and [many more](types/stock-chart.md) |


| Radial Series | Polar Series |
|---------------|--------------|
| - `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br> <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br> |


## {Platform} Data Legend API

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


## {Platform} Donut Chart API

The {Platform} `XamDoughnutChart` has the following API members:

- `AllowSliceExplosion`
- `AllowSliceSelection`
- `InnerExtent`

## {Platform} Data Pie Chart API

The {Platform} `DataPieChart` has the following API members:

- `DataPieChart.ChartType`
- `DataPieChart.HighlightingBehavior`
- `DataPieChart.OthersCategoryThreshold`
- `DataPieChart.OthersCategoryType`
- `DataPieChart.SelectionMode`
- `DataPieChart.SelectionBehavior`

## {Platform} Pie Chart API

The {Platform} `XamPieChart` has the following API members:

- `XamPieChart.LegendItemBadgeTemplate`
- `XamPieChart.LegendItemTemplate`
- `XamPieChart.LegendLabelMemberPath`
- `XamPieChart.OthersCategoryThreshold`
- `XamPieChart.OthersCategoryType`
- `XamPieChart.SelectionMode`

## {Platform} Sparkline Chart API

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




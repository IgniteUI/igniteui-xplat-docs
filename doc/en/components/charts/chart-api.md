---
title: $Platform$ Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics $ProductName$ chart provides useful API to configure and styles chart visuals
_keywords: $Platform$ charts, chart API, API, $ProductName$, Infragistics
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
---

# $Platform$ Chart API

The $ProductName$ charts provide simple and easy to use APIs to plot various types of charts.

## $Platform$ Category Chart API

The $Platform$ `CategoryChart` has the following API members:

Chart Properties | Axis Properties | Series Properties
-----------------|-----------------|-------------------
 - `ItemsSource` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes` <br> <br> <br>

## $Platform$ Financial Chart API

The $Platform$ `FinancialChart` has the following API members:

Chart Properties | Axis Properties | Series Properties
-----------------|-----------------|-------------------
- `ItemsSource` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br> | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`

## $Platform$ Data Chart API

The $Platform$ `XamDataChart` has the following API members:

Chart Properties | Axis Classes
-----------------|-------------
 - `Legend` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> <br> |  - `Axis` <br> - `CategoryXAxis` <br> - `CategoryYAxis` <br> - `CategoryAngleAxis` <br> - `NumericXAxis` <br> - `NumericYAxis` <br> - `NumericAngleAxis` <br> - `NumericRadiusAxis` <br>

The $Platform$ `XamDataChart` can use the following type of `Series`:

Category Series  | Stacked Series
-----------------|---------------
- `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br>


Scatter Series | Financial Series
---------------|--------------
-  `BubbleSeries` <br> -  `ScatterSeries` <br> -  `ScatterHDSeries` <br> -  `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolySeries`  <br> -  `ScatterPolygonSeries`  <br> | -  `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> <br>


Radial Series | Polar Series
--------------|-------------------
- `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br> <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br>


## $Platform$ Data Legend API

The $Platform$ `XamDataLegend` has the following API members:

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








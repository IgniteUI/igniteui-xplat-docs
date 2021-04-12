---
title: $PlatformShort$ Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics $ProductName$ chart provides useful API to configure and styles chart visuals
_keywords: $PlatformShort$ charts, chart API, API, $ProductName$, Infragistics
mentionedTypes: ["XamDataChart", "XamCategoryChart", "XamFinancialChart"]
namespace: Infragistics.Controls.Charts
---

# $PlatformShort$ Chart API

The $ProductName$ charts provide simple and easy to use APIs to plot various types of charts.

## $PlatformShort$ Category Chart API

The $PlatformShort$ `XamCategoryChart` has the following API members:

Chart Properties | Axis Properties | Series Properties
-----------------|-----------------|-------------------
- `Legend` <br> - `ItemsSource` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`

## $PlatformShort$ Financial Chart API

The $PlatformShort$ `XamFinancialChart` has the following API members:

Chart Properties | Axis Properties | Series Properties
-----------------|-----------------|-------------------
- `Legend` <br> - `ItemsSource` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br> | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`

## $PlatformShort$ Data Chart API

The $PlatformShort$ `XamDataChart` has the following API members:

Chart Properties | Axis Classes
-----------------|-------------
 - `Legend` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> |  - `Axis` <br> - `CategoryXAxis` <br> - `CategoryYAxis` <br> - `CategoryAngleAxis` <br> - `NumericXAxis` <br> - `NumericYAxis` <br> - `NumericAngleAxis` <br> - `NumericRadiusAxis` <br>

The $PlatformShort$ `XamDataChart` can use the following type of `Series`:

Category Series  | Stacked Series | Financial Series
-----------------|----------------|-------------------
- `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> | -  `FinancialPriceSeries` <br> -  `FinancialIndicator` <br> -  `FinancialOverlay` <br> -  `BollingerBandsOverlay` <br> -  `MassIndexIndicator` <br> - and many more


Scatter Series | Polar Series | Radial Series
---------------|--------------|-------------------
-  `BubbleSeries` <br> -  `ScatterSeries` <br> -  `ScatterHDSeries` <br> -  `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolySeries`  <br> -  `ScatterPolygonSeries`  <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br> | - `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br>




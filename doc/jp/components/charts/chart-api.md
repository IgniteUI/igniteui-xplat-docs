---
title: $Platform$ チャート API | データ可視化 ツール | インフラジスティックス
_description: インフラジスティックスの $ProductName$ チャートは、チャートのビジュアルを構成およびスタイル設定するための便利な API を提供します。
_keywords: $Platform$ charts, chart API, API, $ProductName$, Infragistics, $Platform$ チャート, チャート API, インフラジスティックス
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# $Platform$ チャート API

$ProductName$ チャートは、さまざまなタイプのチャートをプロットするためのシンプルで使いやすい API を提供します。

## $Platform$ カテゴリ チャート API メンバー

$Platform$ `CategoryChart` には次の API メンバーがあります。

チャート プロパティ | 軸プロパティ | シリーズ プロパティ
-----------------|-----------------|-------------------
 - `ItemsSource` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `CrosshairsDisplayMode` <br> - `TransitionInMode` <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` <br>|  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> - `XAxisTitle`  <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes` <br>  - `ToolTipType` <br> <br> <br> <br>

## $Platform$ ファイナンシャル チャート API メンバー

$Platform$ `FinancialChart` には次の API メンバーがあります。

チャート プロパティ | 軸プロパティ | シリーズ プロパティ
-----------------|-----------------|-------------------
- `ItemsSource` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode`  <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` <br> - `YAxisMode` <br> - `XAxisMode` | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`  <br> - `IndicatorTypes` <br>  - `VolumeType` <br>  - `ZoomSliderType` <br>

## $Platform$ データ チャート API メンバー

$Platform$ `XamDataChart` には次の API メンバーがあります。

チャート プロパティ | 軸クラス
-----------------|-------------
 - `Legend` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> <br> |  - `Axis` <br> - `CategoryXAxis` <br> - `CategoryYAxis` <br> - `CategoryAngleAxis` <br> - `NumericXAxis` <br> - `NumericYAxis` <br> - `NumericAngleAxis` <br> - `NumericRadiusAxis` <br>

$Platform$ `XamDataChart` は、次のタイプの `Series` を使用できます。

カテゴリ シリーズ  | 積層シリーズ 
-----------------|---------------
- `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br>


散布シリーズ | ファイナンシャル シリーズ
---------------|--------------
-  `BubbleSeries` <br> - `HighDensityScatterSeries` <br> -  `ScatterSeries` <br>  - `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolylineSeries`  <br> -  `ScatterPolygonSeries`  <br> | -  `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> <br>


ラジアル シリーズ | 極座標シリーズ
--------------|-------------------
- `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br> <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br>


## $Platform$ データ凡例の API メンバー

$PlatformShort$ `XamDataLegend` には次の API メンバーがあります:

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








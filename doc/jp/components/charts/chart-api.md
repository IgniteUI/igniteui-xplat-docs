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

## $Platform$ カテゴリ チャート API

$Platform$ `CategoryChart` には次の API メンバーがあります。

チャート プロパティ | 軸プロパティ | シリーズ プロパティ
-----------------|-----------------|-------------------
- `Legend` <br> - `DataSource` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`

## $Platform$ ファイナンシャル チャート API

$Platform$ `FinancialChart` には次の API メンバーがあります。

チャート プロパティ | 軸プロパティ | シリーズ プロパティ
-----------------|-----------------|-------------------
- `Legend` <br> - `DataSource` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br> | - `ChartType` <br>  - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`

## $Platform$ データ チャート API

$Platform$ `XamDataChart` には次の API メンバーがあります。

チャート プロパティ | 軸クラス
-----------------|-------------
 - `Legend` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> |  - `Axis` <br> - `CategoryXAxis` <br> - `CategoryYAxis` <br> - `CategoryAngleAxis` <br> - `NumericXAxis` <br> - `NumericYAxis` <br> - `NumericAngleAxis` <br> - `NumericRadiusAxis` <br>

$Platform$ `XamDataChart` は、次のタイプの `Series` を使用できます。

カテゴリ シリーズ  | 積層シリーズ | ファイナンシャル シリーズ
-----------------|----------------|-------------------
- `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> | -  `FinancialPriceSeries` <br> -  `FinancialIndicator` <br> -  `FinancialOverlay` <br> -  `BollingerBandsOverlay` <br> -  `MassIndexIndicator` <br> - and many more


散布シリーズ | 極座標シリーズ | ラジアル シリーズ
---------------|--------------|-------------------
-  `BubbleSeries` <br> -  `ScatterSeries` <br> -  `ScatterHDSeries` <br> -  `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolySeries`  <br> -  `ScatterPolygonSeries`  <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br> | - `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br>




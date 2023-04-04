---
title: {Platform} チャート API | データ可視化 ツール | インフラジスティックス
_description: インフラジスティックスの {ProductName} チャートは、チャートのビジュアルを構成およびスタイル設定するための便利な API を提供します。
_keywords: {Platform} charts, chart API, API, {ProductName}, Infragistics, {Platform} チャート, チャート API, インフラジスティックス
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "SeriesViewer", "XamDoughnutChart", "XamPieChart", and "XamSparkline" ]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート API

{ProductName} チャートは、`CategoryChart`、`FinancialChart`、`XamDataChart`、`XamDoughnutChart`、`XamPieChart`、および `XamSparkline` UI 要素でデータをプロットするためのシンプルで使いやすい API を提供します。

## {Platform} カテゴリ チャート API メンバー

{Platform} `CategoryChart` には次の API メンバーがあります。

| チャート プロパティ | 軸プロパティ | シリーズ プロパティ |
|-------------------|--------------|-------------------|
| - `CategoryChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `CrosshairsDisplayMode` <br> - `TransitionInMode` <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` <br> |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> - `XAxisTitle`  <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes` <br>  - `ToolTipType` <br> <br> <br> <br> <br> |

## {Platform} ファイナンシャル チャート API メンバー

{Platform} `FinancialChart` には次の API メンバーがあります。

| チャート プロパティ | 軸プロパティ | シリーズ プロパティ |
|-------------------|-------------|--------------------|
| - `FinancialChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode`  <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` <br> - `YAxisMode` <br> - `XAxisMode` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`  <br> - `IndicatorTypes` <br>  - `VolumeType` <br>  - `ZoomSliderType` <br> <br> <br> |

## {Platform} データ チャート API メンバー

{Platform} `XamDataChart` には次の API メンバーがあります。

| チャート プロパティ | 軸クラス |
|------------------|----------|
| - `SeriesViewer.Title` <br> - `SeriesViewer.Subtitle` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `PlotAreaMargin` <br> |  - `Axis` is base class for all axis types <br> - `CategoryXAxis` used with Category, Stacked, and Financial Series <br> - `CategoryYAxis` used with Category, Stacked Series <br> - `CategoryAngleAxis` used with Radial Series <br> - `NumericXAxis` used with Scatter and Stacked Bar Series <br> - `NumericYAxis` used with Category, Stacked, and Financial Series <br> - `NumericAngleAxis` used with Polar Series <br> - `NumericRadiusAxis` used with Polar and Radial Series <br> - `TimeXAxis` used with Category and Financial Series <br> |

{Platform} `XamDataChart` は、`Series` から継承する次のタイプのシリーズを使用できます。

| カテゴリ シリーズ  | 積層シリーズ |
|------------------|----------------|
| - `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br> |


| 散布シリーズ | ファイナンシャル シリーズ |
|----------------|------------------|
| -  `BubbleSeries` <br> - `HighDensityScatterSeries` <br> -  `ScatterSeries` <br>  - `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolylineSeries`  <br> -  `ScatterPolygonSeries`  <br> | -  `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> - `WeightedCloseIndicator` <br> |


| ラジアル シリーズ | 極座標シリーズ |
|---------------|--------------|
| - `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br> <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br> |


## {Platform} データ凡例の API メンバー

{Platform} `XamDataLegend` には次の API メンバーがあります:

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

## その他のリソース

チャートの詳細については、次のトピックを参照してください。

- [チャート](chart-overview.md)
- [チャート機能](chart-features.md)




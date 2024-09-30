---
title: {Platform} チャート API | データ可視化 ツール | インフラジスティックス
_description: インフラジスティックスの {ProductName} チャートは、チャートのビジュアルを構成およびスタイル設定するための便利な API を提供します。
_keywords: {Platform} charts, chart API, API, {ProductName}, Infragistics, {Platform} チャート, チャート API, インフラジスティックス
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "SeriesViewer", "XamDoughnutChart", "XamPieChart", "XamSparkline", "DataPieChart" ]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート API

{ProductName} チャートは、`CategoryChart`、`FinancialChart`、`XamDataChart`、`DataPieChart`、`XamDoughnutChart`、`XamPieChart`、および `XamSparkline` UI 要素でデータをプロットするためのシンプルで使いやすい API を提供します。

## {Platform} カテゴリ チャート API

{Platform} `CategoryChart` には次の API メンバーがあります。

| チャート プロパティ | 軸プロパティ | シリーズ プロパティ |
|-------------------|--------------|-------------------|
| - `CategoryChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `CrosshairsDisplayMode` <br> - `TransitionInMode` <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` <br> |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisGap` <br> - `XAxisOverlap` <br> - `XAxisTitle`  <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes` <br>  - `ToolTipType` <br> <br> <br> <br> <br> |

## {Platform} ファイナンシャル チャート API

{Platform} `FinancialChart` には次の API メンバーがあります。

| チャート プロパティ | 軸プロパティ | シリーズ プロパティ |
|-------------------|-------------|--------------------|
| - `FinancialChart.ChartType` <br> - `ExcludedProperties` <br> - `IncludedProperties` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `ToolTipType`  <br> - `CrosshairsDisplayMode`  <br> - `HighlightingBehavior` <br> - `HighlightingMode` <br> - `TrendLineType` |  - `XAxisInterval` <br> - `XAxisLabelLocation` <br> - `XAxisTitle` <br> - `YAxisInterval` <br> - `YAxisLabelLocation`  <br> - `YAxisTitle` <br>  - `YAxisMinimumValue` <br> - `YAxisMaximumValue` <br> - `YAxisMode` <br> - `XAxisMode` | - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `MarkerTypes`  <br> - `IndicatorTypes` <br>  - `VolumeType` <br>  - `ZoomSliderType` <br> <br> <br> |

## {Platform} データ チャート API

{Platform} `XamDataChart` には次の API メンバーがあります。

| チャート プロパティ | 軸クラス |
|------------------|--------------|
| - `SeriesViewer.Title` <br> - `SeriesViewer.Subtitle` <br> - `IsHorizontalZoomEnabled` <br> - `IsVerticalZoomEnabled` <br> - `Brushes` <br> - `Outlines` <br> - `MarkerBrushes` <br> - `MarkerOutlines` <br> - `XamDataChart.Axes` <br> - `SeriesViewer.Series` <br> |  - `Axis` はすべての軸タイプの基本クラスです <br> - [カテゴリ シリーズ](types/column-chart.md)、[積層型シリーズ](types/stacked-chart.md)、および[ファイナンシャル シリーズ](types/stock-chart.md)で使用される `CategoryXAxis` <br> - [カテゴリ シリーズ](types/column-chart.md)および[積層型シリーズ](types/stacked-chart.md)で使用される `CategoryYAxis` <br> - [ラジアル シリーズ](types/radial-chart.md)で使用される `CategoryAngleAxis` <br> - [散布シリーズ](types/scatter-chart.md)および[棒シリーズ](types/bar-chart.md)で使用される `NumericXAxis`   <br> - [散布シリーズ](types/scatter-chart.md)、[カテゴリ シリーズ](types/column-chart.md)、[積層型シリーズ](types/stacked-chart.md)、および[ファイナンシャル シリーズ](types/stock-chart.md)で使用される `NumericYAxis` <br> - [極座標シリーズ](types/polar-chart.md)で使用される `NumericAngleAxis` <br> - [極座標シリーズ](types/polar-chart.md) および[ラジアル シリーズ](types/radial-chart.md)で使用される `NumericRadiusAxis` <br> - [カテゴリ シリーズ](types/column-chart.md)および[ファイナンシャル シリーズ](types/stock-chart.md)で使用される `TimeXAxis` <br> <br> |

{Platform} `XamDataChart` は、`Series` から継承する次のタイプのシリーズを使用できます。

| カテゴリ シリーズ  | 積層シリーズ |
|------------------|----------------|
| - `AreaSeries` <br> - `BarSeries` <br> - `ColumnSeries` <br> - `LineSeries` <br> -  `PointSeries`  <br> - `SplineSeries` <br>  -  `SplineAreaSeries` <br> -  `StepLineSeries` <br> -  `StepAreaSeries` <br> - `RangeAreaSeries` <br> - `RangeColumnSeries` <br> - `WaterfallSeries` <br> | -  `StackedAreaSeries` <br> -  `StackedBarSeries` <br> -  `StackedColumnSeries` <br> -  `StackedLineSeries` <br> -  `StackedSplineSeries` <br> -  `Stacked100AreaSeries` <br> -  `Stacked100BarSeries` <br> -  `Stacked100ColumnSeries` <br> -  `Stacked100LineSeries` <br> -  `Stacked100SplineSeries` <br> <br> <br> |


| 散布シリーズ | ファイナンシャル シリーズ |
|----------------|------------------|
| -  `BubbleSeries` <br> - `HighDensityScatterSeries` <br> -  `ScatterSeries` <br>  - `ScatterLineSeries` <br> -  `ScatterSplineSeries` <br> -  `ScatterAreaSeries` <br> -  `ScatterContourSeries` <br> -  `ScatterPolylineSeries`  <br> -  `ScatterPolygonSeries`  <br> <br> | -  `FinancialPriceSeries` <br> -  `BollingerBandsOverlay` <br> -  `ForceIndexIndicator` <br> -  `MedianPriceIndicator` <br> - `MassIndexIndicator`  <br> - `RelativeStrengthIndexIndicator` <br> - `StandardDeviationIndicator` <br> -  `TypicalPriceIndicator` <br> - `WeightedCloseIndicator` <br> - おとび [その他](types/stock-chart.md) |


| ラジアル シリーズ | 極座標シリーズ |
|---------------|--------------|
| - `RadialLineSeries` <br> -  `RadialAreaSeries` <br> -  `RadialPieSeries` <br> -  `RadialColumnSeries` <br> <br> | - `PolarScatterSeries` <br> -  `PolarLineSeries` <br> -  `PolarAreaSeries` <br> -  `PolarSplineSeries` <br> -  `PolarSplineAreaSeries` <br> |


## {Platform} データ凡例の API

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


## {Platform} ドーナツ チャート API

{Platform} `XamDoughnutChart` には、次の API メンバーがあります。

- `AllowSliceExplosion`
- `AllowSliceSelection`
- `InnerExtent`

## {Platform} データ円チャート API

{Platform} `DataPieChart` には、次の API メンバーがあります。

- `DataPieChart.ChartType`
- `DataPieChart.HighlightingBehavior`
- `DataPieChart.OthersCategoryThreshold`
- `DataPieChart.OthersCategoryType`
- `DataPieChart.SelectionMode`
- `DataPieChart.SelectionBehavior`

## {Platform} 円チャート API

{Platform} `XamPieChart` には、次の API メンバーがあります。

- `XamPieChart.LegendItemBadgeTemplate`
- `XamPieChart.LegendItemTemplate`
- `XamPieChart.LegendLabelMemberPath`
- `XamPieChart.OthersCategoryThreshold`
- `XamPieChart.OthersCategoryType`
- `XamPieChart.SelectionMode`

## {Platform} スパークライン チャート API

{Platform} `XamSparkline` には、次の API メンバーがあります。

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




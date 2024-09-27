---
title: {Platform} チャート API | データ視覚化ツール | インフラジスティックス
_description: インフラジスティックスの {ProductName} マップは、マップ ビジュアルを構成およびスタイル設定するための便利な API を提供します。
_keywords: {Platform} maps, geographic, map API, API, {Platform} マップ, 地理, マップ API, API, {ProductName}
mentionedTypes: ['XamGeographicMap', 'Series', 'SeriesViewer', 'GeographicSymbolSeries', 'GeographicProportionalSymbolSeries', 'GeographicShapeSeries', 'GeographicHighDensityScatterSeries', 'GeographicScatterAreaSeries', 'GeographicContourLineSeries', 'GeographicShapeSeriesBase']
namespace: Infragistics.Controls.Maps
_language: ja
---

# {Platform} 地理マップ API

{Platform} `XamGeographicMap` には次の API メンバーがあります:

- `Zoomable`
- `ZoomToGeographic`
- `WorldRect`
- `WindowRect`
- `WindowScale`
- `GetGeographicFromZoom`
- `GetGeographicPoint`
- `GetPixelPoint`

# {Platform} 地理的シリーズの種類

{Platform} `XamGeographicMap` には 7 種類のシリーズがあり、データ バインディング用の `ItemsSource` プロパティがあります。

 - `GeographicHighDensityScatterSeries`
 - `GeographicSymbolSeries`
 - `GeographicProportionalSymbolSeries`
 - `GeographicPolylineSeries`
 - `GeographicShapeSeries`
 - `GeographicScatterAreaSeries`
 - `GeographicContourLineSeries`

さらに、シリーズの各種類には、データ項目をマッピングし、その外観をスタイル設定するための特定のプロパティがあります。

## {Platform} 地理記号シリーズ API

{Platform} `GeographicSymbolSeries` (地理マーカー シリーズ) には、次の API メンバーがあります。

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`

## {Platform} 地理バブル シリーズ API

{Platform} `GeographicProportionalSymbolSeries` (地理バブル シリーズ) には、次の API メンバーがあります。

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `RadiusMemberPath`
- `RadiusScale`
- `FillScale`
- `FillMemberPath`

## {Platform} 地理シェイプ シリーズ API

{Platform} `GeographicShapeSeries` と `GeographicPolylineSeries` には同じ API メンバーがあります。

- `ShapeMemberPath`
- `Thickness`
- `Brush`
- `Outline`

## {Platform} 地理エリア シリーズ API


{Platform} `GeographicScatterAreaSeries` には、次の API メンバーがあります。

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ColorMemberPath`
- `ColorScale`

## {Platform} 地理等高線シリーズ API

{Platform} `GeographicContourLineSeries` には、次の API メンバーがあります。

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ValueMemberPath`
- `FillScale`

## {Platform} 地理 HD シリーズ API

{Platform} `GeographicHighDensityScatterSeries` には、次の API メンバーがあります。


- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `HeatMaximumColor`
- `HeatMinimumColor`
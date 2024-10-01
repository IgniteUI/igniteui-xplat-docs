---
title: {Platform} Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics {ProductName} map provides useful API to configure and styles map visuals
_keywords: {Platform} maps, geographic, map API, API, {ProductName},
mentionedTypes: ["XamGeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
---

# {Platform} Geographic Map API

The {Platform} `XamGeographicMap` has the following API members:

- `Zoomable`
- `ZoomToGeographic`
- `WorldRect`
- `WindowRect`
- `WindowScale`
- `GetGeographicFromZoom`
- `GetGeographicPoint`
- `GetPixelPoint`

# {Platform} Geographic Series Types

The {Platform} `XamGeographicMap` has 7 types of series and they have the `ItemsSource` property for data binding.

 - `GeographicHighDensityScatterSeries`
 - `GeographicSymbolSeries`
 - `GeographicProportionalSymbolSeries`
 - `GeographicPolylineSeries`
 - `GeographicShapeSeries`
 - `GeographicScatterAreaSeries`
 - `GeographicContourLineSeries`

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## {Platform} Geographic Symbol Series API

The {Platform} `GeographicSymbolSeries` (Geographic Marker Series) has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`

## {Platform} Geographic Bubble Series API

The {Platform} `GeographicProportionalSymbolSeries` (Geographic Bubble Series) has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `RadiusMemberPath`
- `RadiusScale`
- `FillScale`
- `FillMemberPath`

## {Platform} Geographic Shape Series API

The {Platform} `GeographicShapeSeries` and `GeographicPolylineSeries` have the same API members:

- `ShapeMemberPath`
- `Thickness`
- `Brush`
- `Outline`

## {Platform} Geographic Area Series API


The {Platform} `GeographicScatterAreaSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ColorMemberPath`
- `ColorScale`

## {Platform} Geographic Contour Series API

The {Platform} `GeographicContourLineSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ValueMemberPath`
- `FillScale`

## {Platform} Geographic HD Series API

The {Platform} `GeographicHighDensityScatterSeries` has the following API members:


- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `HeatMaximumColor`
- `HeatMinimumColor`
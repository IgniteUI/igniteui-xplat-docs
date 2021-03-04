---
title: $PlatformShort$ Map | Data Visualization Tools | Map Navigation | Infragistics
_description: Navigate Infragistics' $PlatformShort$ map by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about $ProductName$ map's navigation capabilities!
_keywords: $PlatformShort$ map, navigations, $ProductName$, Infragistics
mentionedTypes: ['XamGeographicMap']
---
# $PlatformShort$ Navigating Map Content

Navigation in the `XamGeographicMap` control is enabled by default and it allows zooming and panning of the map content. However, this behavior can be changed using the `Zoomable` property. It is important to know that the map allows only synchronized zooming - scaling the map content with preserved aspect ratio. As result, it is not possible to scale the map content vertically without scaling it also horizontally and vice versa.

## $PlatformShort$ Navigating Map Content Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-navigation" alt="$PlatformShort$ Navigating Map Content Example">
</code-view>


<div class="divider--half"></div>

## Geographic Coordinates

You navigate map content within geographic region bound by these coordinates:
- horizontally from 180°E (negative) to 180°W (positive) longitudes
- vertically from 85°S (negative) to 85°N (positive) latitudes

This code snippet shows how navigate the map using geographic coordinates:

```ts
const geoMap = new IgrGeographicMap({ name: "geoMap" });

geoMap.zoomToGeographic({ left: -134.5, top: 16.5, width: 70.0, height: 37.0 });
```

```razor
this.GeoMap.ZoomToGeographic(new Rect() { Left = -134.5, Top = 16.5, Width = 70.0, Height = 37.0 });
```

## Window Coordinates

Also, you can navigate map content within window rectangle bound by these relative coordinates:
- horizontally from 0.0 to 1.0 values
- vertically from 0.0 to 1.0 values

This code snippet shows how navigate the map using relative window coordinates:

```ts
const geoMap = new IgrGeographicMap({ name: "geoMap" });

geoMap.windowRect = { left: 0.1, top: 0.1, width: 0.5, height: 0.5 };
// or
geoMap.windowPositionHorizontal = 0.1;
geoMap.windowPositionVertical = 0.1;
geoMap.windowScale = 0.5;
```

```razor
this.GeoMap.ZoomToGeographic(new Rect() { Left = 0.1, Top = 0.1, Width = 0.5, Height = 0.5 });
// or
this.GeoMap.WindowPositionHorizontal = 0.1;
this.GeoMap.WindowPositionVertical = 0.1;
this.GeoMap.WindowScale = 0.5;
```

## Properties
The following table summarizes properties that can be used in navigation of the `XamGeographicMap` control:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|`WindowRect`| Rect | Sets new position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values will zoom out the entire map content in the navigation window. |
|`WindowScale`| number | Sets new size of the navigation window in of the map control. It is equivalent smallest value of Width or Height stored in the `WindowRect` property |
|`WindowPositionHorizontal`| number | Sets new horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the `WindowRect` property. |
|`WindowPositionVertical`| number | Sets new vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the `WindowRect` property. |
|`ActualWindowRect`| Rect | Indicates current position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values displays the entire map content in the navigation window.  |
|`ActualWindowScale`| number | Indicates current size of the navigation window in of the map control. It is equivalent to smallest value of Width or Height stored in the `ActualWindowRect` property |
|`ActualWindowPositionHorizontal`| number | Indicates current horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the `ActualWindowRect` property. |
|`ActualWindowPositionVertical`| number | Indicates vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the `ActualWindowRect` property. |

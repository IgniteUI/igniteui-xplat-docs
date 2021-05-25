---
title: $Platform$ Map | Data Visualization Tools | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics
---
# $Platform$ Binding Multiple Data Sources

In the `XamGeographicMap`, you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, `GeographicSymbolSeries` for plotting geographic locations of airports, the `GeographicPolylineSeries` for plotting flights between airports, and 2nd `GeographicPolylineSeries` for plotting gridlines of major geographic coordinates.


## Demo


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-sources"  >
</code-view>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

`GeographicSymbolSeries` – displays locations of major airports
`GeographicPolylineSeries` – displays flights between airports
`GeographicPolylineSeries` – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

## Creating Data Sources

Create data sources for all geographic series that you want to display in the `XamGeographicMap`. For example, you can the use[WorldConnections](geo-map-resources-world-connections.md) script.


```html
 TODO - ADD CODE SNIPPET
```

```tsx
import WorldConnections from "./WorldConnections";
// ..

public onMapReferenced(map: IgrGeographicMap) {
    this.geoMap = map;

    const worldFlights: any[] = WorldConnections.getFlights();
    const worldAirports: any[] = WorldConnections.getAirports();
    const worldGridlines: any[] = WorldConnections.getGridlines();

    // create and overlay geographic series here
}
```

## Overlaying Flights

Create first `GeographicPolylineSeries` object with flight connections between major airports and add it to `Series` collection of the `XamGeographicMap`.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
lineSeries.dataSource = worldFlights;
lineSeries.shapeMemberPath = "points";
lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
lineSeries.shapeStrokeThickness = 4;
this.geoMap.series.add(lineSeries);
```

## Overlaying Gridlines

Create second `GeographicPolylineSeries` object with geographic gridlines and add it to `Series` collection of the `XamGeographicMap`.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
const gridSeries = new IgrGeographicPolylineSeries( { name: "gridSeries" });
gridSeries.dataSource = worldGridlines;
gridSeries.shapeMemberPath = "points";
gridSeries.shapeStroke = "Gray";
gridSeries.shapeStrokeThickness = 1;
this.geoMap.series.add(gridSeries);
```

Create `GeographicSymbolSeries` object with geographic gridlines and add it to `Series` collection of the geographic `XamGeographicMap`.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
symbolSeries.dataSource = worldAirports;
symbolSeries.markerType = MarkerType.Circle;
symbolSeries.latitudeMemberPath = "lat";
symbolSeries.longitudeMemberPath = "lon";
symbolSeries.markerBrush = "#aad3df";
symbolSeries.markerOutline = "rgb(73, 73, 73)";
this.geoMap.series.add(symbolSeries);
```

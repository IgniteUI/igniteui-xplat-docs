---
title: {Platform} Map | Data Visualization Tools | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, {ProductName}, Infragistics
_language: kr
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter']
---

# {Platform} Binding and Overlaying Multiple Shape Files

In the `XamGeographicMap`, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, `GeographicSymbolSeries` for plotting geographic locations of ports, the `GeographicPolylineSeries` for plotting routes between ports, and the `GeographicShapeSeries` for plotting shapes of countries.

## Demo


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-shapes"  >
</code-view>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the `ShapeDataSource` class. Refer to the [Binding Shape Files](geo-map-binding-shp-file.md) topic for more information about `ShapeDataSource` object.

`GeographicSymbolSeries` – displays locations of major cities
`GeographicPolylineSeries` – displays routes between major ports
`GeographicShapeSeries` – displays shapes of countries of the world

You can use geographic series in this or other combinations to plot desired data.

## Loading Multiple Shapefiles

In constructor of your page, add a `ShapeDataSource` for each shapefile that you want to display in the geographic map component.


```html
 TODO - ADD CODE SNIPPET
```

```tsx
import { IgrShapeDataSource } from 'igniteui-react-core';
// ...

const sdsPolygons = new IgrShapeDataSource();
sdsPolygons.importCompleted = this.onShapePolygonsLoaded;
sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
sdsPolygons.dataBind();
const sdsPolylines = new IgrShapeDataSource();
sdsPolylines.importCompleted = this.onShapePolylinesLoaded;
sdsPolylines.shapefileSource = url + "/shapes/WorldConnections.shp";
sdsPolylines.databaseSource  = url + "/shapes/WorldConnections.dbf";
sdsPolylines.dataBind();
const sdsLocations = new IgrShapeDataSource();
sdsLocations.importCompleted = this.onShapeLocationsLoaded;
sdsLocations.shapefileSource = url + "/Shapes/WorldCities.shp";
sdsLocations.databaseSource  = url + "/Shapes/WorldCities.dbf";
sdsLocations.dataBind();
```

## Overlaying Shape Polygons

Create `GeographicShapeSeries` object with shapes of countries of the world and add it to Series collection of the `XamGeographicMap`.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
// ...

public onShapePolygonsLoaded(sds: IgrShapeDataSource, e: any) {
    const polygons = sds.getPointData();
    const shapeSeries = new IgrGeographicShapeSeries( { name: "shapeSeries" });
    shapeSeries.dataSource = polygons;
    shapeSeries.shapeMemberPath = "points";
    shapeSeries.shapeFill = "Gray";
    shapeSeries.shapeStroke = "Black";
    shapeSeries.shapeStrokeThickness = 1;
    this.geoMap.series.add(shapeSeries);
}
```

## Overlaying Shape Polyline

Create `GeographicPolylineSeries` object with routes between major ports and add it to Series collection of the `XamGeographicMap`.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
public onShapePolylinesLoaded(sds: IgrShapeDataSource, e: any) {
    const polylines = sds.getPointData();
    const lineSeries = new IgrGeographicPolylineSeries ( {name: "lineSeries" });
    lineSeries.dataSource = polylines;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeStroke = "Red";
    lineSeries.shapeStrokeThickness = 4;
    this.geoMap.series.add(lineSeries);
}
```

## Overlaying Shape Points

Create `GeographicSymbolSeries` object with locations of major cities and add it to Series collection of the `XamGeographicMap`.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { MarkerType } from 'igniteui-react-charts';
// ...

public onShapeLocationsLoaded(sds: IgrShapeDataSource, e: any) {
    const locations: any[];
    for (const record of sds.getPointData()) {
        const location = {
            // each shapefile record has just one point
            lat: record.points[0][0].y,
            lon: record.points[0][0].x,
            city: record.fieldValues.Name
        };
        locations.push(location);
    }

    const symbolSeries = new IgrGeographicSymbolSeries ( { ame: "symbolSeries" });
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush = "#aad3df";
    symbolSeries.markerOutline = "rgb(73, 73, 73)";
    symbolSeries.thickness = 1;
    this.geoMap.series.add(symbolSeries);
}
```

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
this.geoMap.backgroundContent = {};
```
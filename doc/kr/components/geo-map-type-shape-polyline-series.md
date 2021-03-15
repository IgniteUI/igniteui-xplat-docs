---
title: $PlatformShort$ Map | Data Visualization Tools | Polyline Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics
---
# $PlatformShort$ Using Shape Polyline Series

Use the map component's `GeographicPolylineSeries` to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

## Demo


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polyline-series"  >
</code-view>

<div class="divider--half"></div>

The `GeographicPolylineSeries` works a lot like the `GeographicShapeSeries` except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements
Similarly to other types of geographic series in the control, the `GeographicPolylineSeries` has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the ShapeMemberPath property. The `GeographicPolylineSeries` uses points of this mapped data column to plot polygons in the control.

## Code Snippet
The following code shows how to bind the `GeographicPolylineSeries` to locations of cities loaded from a shape file using the ``ShapeDataSource``.

<!-- React -->
```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
// ...

public render() {
    return (
    <IgrGeographicMap
        ref={this.onMapReferenced}
        width="600px"
        height="600px"
        zoomable="true" />
    );
}

public onMapReferenced(map: IgrGeographicMap) {
    this.geoMap = map;

    const sds = new IgrShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "/Shapes/AmericanRoads.shp";
    sds.databaseSource  = "/Shapes/AmericanRoads.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {

    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];
    // filtering records of loaded shapefile
    for (const record of sds.getPointData()) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road",
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }
    // creating polyline series for roads of each country
    this.addSeries(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeries(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeries(roadsMEX, "rgba(14, 194, 14, 0.9)");
}

public addSeries(shapeData: any[], shapeBrush: string)
{
    const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
    lineSeries.dataSource = shapeData;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeFilterResolution = 2.0;
    lineSeries.shapeStrokeThickness = 2;
    lineSeries.shapeStroke = shapeBrush;

    this.geoMap.series.add(lineSeries);
}
```

<!-- Angular -->
```html
TODO - ADD CODE SNIPPET
```


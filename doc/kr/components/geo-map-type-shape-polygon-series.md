---
title: $Platform$ Map | Data Visualization Tools | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics
_language: kr
---

# $Platform$ Using Shape Polygon Series

Use the map component's `GeographicShapeSeries` to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

## Demo


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polygon-series"  >
</code-view>

<div class="divider--half"></div>

The `GeographicShapeSeries` works a lot like the `GeographicPolylineSeries` except that geo-spatial data is rendered with polygons instead of polylines.

## Data Requirements
Similar to other types of geographic series in the map control, the `GeographicShapeSeries` has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `ShapeMemberPath` property. The `GeographicShapeSeries` uses points of this mapped data column to plot polygons in the map control.

## Code Snippet
The following code demonstrates how to bind the `GeographicShapeSeries` to shapes of countries in the world loaded from a shape file using the `ShapeDataSource`.

<!-- React -->
```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
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
    sds.shapefileSource = "/shapes/WorldCountries.shp";
    sds.databaseSource  = "/shapes/WorldCountries.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {
    const countriesNATO: any[] = [];
    const countriesSCO: any[] = [];
    const countriesARAB: any[] = [];
    const countriesOther: any[] = [];

    for (const record of sds.getPointData()) {
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.Name,
            org: record.fieldValues.Alliance,
            pop: record.fieldValues.Population
        };
        const group = record.fieldValues.Alliance;
        if (group === "NATO") {
            countriesNATO.push(country);
        } else if (group === "SCO") {
            countriesSCO.push(country);
        } else if (group === "ARAB LEAGUE") {
            countriesARAB.push(country);
        } else {
            countriesOther.push(country);
        }
    }
    this.createSeries(countriesNATO, "rgb(32, 146, 252)", "NATO");
    this.createSeries(countriesSCO, "rgb(252, 32, 32)", "SCO");
    this.createSeries(countriesARAB, "rgb(14, 194, 14)", "AL");
    this.createSeries(countriesOther, "rgb(146, 146, 146)", "Other");
}

public createSeries(shapeData: any[], shapeBrush: string, shapeTitle: string)
{
    const seriesName = shapeTitle + "series";
    const geoSeries = new IgrGeographicShapeSeries( { name: seriesName });
    geoSeries.dataSource = shapeData;
    geoSeries.shapeMemberPath = "points";
    geoSeries.brush = shapeBrush;
    geoSeries.outline = "Black";
    geoSeries.thickness = 1;
    geoSeries.title = shapeTitle;
    this.geoMap.series.add(geoSeries);
}
```

<!-- Angular -->
```html
TODO - ADD CODE SNIPPET
```


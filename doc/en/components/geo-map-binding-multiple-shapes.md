---
title: {Platform} Map | Data Visualization Tools | Binding Multiple Data Shapes | Infragistics
_description: Use Infragistics' {Platform} to add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. View {ProductName} map tutorials!
_keywords: {Platform} map, shape files, {ProductName}, Infragistics, data binding
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
---
# {Platform} Binding and Overlaying Multiple Shape Files

In the {ProductName} map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, `GeographicSymbolSeries` for plotting geographic locations of ports, the `GeographicPolylineSeries` for plotting routes between ports, and the `GeographicShapeSeries` for plotting shapes of countries.

## {Platform} Binding and Overlaying Multiple Shape Files Example


`sample="/maps/geo-map/binding-multiple-shapes", height="500", alt="{Platform} Binding and Overlaying Multiple Shape Files Example"`



<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the `ShapefileConverter` class. Refer to the [Binding Shape Files](geo-map-binding-shp-file.md) topic for more information about `ShapefileConverter` object.

- `GeographicSymbolSeries` – displays locations of major cities
- `GeographicPolylineSeries` – displays routes between major ports
- `GeographicShapeSeries` – displays shapes of countries of the world

You can use geographic series in above or other combinations to plot desired data.

## Importing Components

First, let's import required components and modules:

```ts
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
```

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcGeographicMapModule
);
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicShapeSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
```

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbGeographicMapModule),
    typeof(IgbDataChartInteractivityModule)
);
```

## Creating Series

Next, we need to create a map with a few Geographic Series that will later load different type of shapefile.

```html
<div className="sampleRoot">
    <div className="map" >
        <igx-geographic-map
            #map
            width="700px"
            height="500px"
            zoomable="true" >
            <igx-geographic-shape-series #shapeSeries
                name="polygonSeries"
                shapeMemberPath="points"
                shapeFill="rgb(150, 150, 150)"
                shapeStroke="Black"
                shapeStrokeThickness={1.0} >
            </igx-geographic-shape-series>
            <igx-geographic-polyline-series  #polylineSeries
            [tooltipTemplate]="polylineTooltipTemplate"
                  name="polylineSeries"
                 shapeMemberPath="points"
                 shapeStroke="rgba(147, 15, 180, 0.5)"
                 thickness={3.0} >
            </igx-geographic-polyline-series>
            <igx-geographic-symbol-series  #symbolSeries
                name="symbolSeries"
                longitudeMemberPath="longitude"
                latitudeMemberPath="latitude"
                markerType="Circle"
                markerOutline="rgb(2, 102, 196)"
                markerBrush="White" >
            </igx-geographic-symbol-series>
        </igx-geographic-map>
    </div>
</div>

<ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>{{item.capacity}}</span><br />
            <span>Distance: {{item.distance}}</span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #shapeTooltipTemplate>
        <div>
            <span>{{item.name}}</span><br />
            <span>Population: {{item.population}}</span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
        <div>
            <span [style.color]="series.brush">City: {{item.city}}</span>
        </div>
    </ng-template>
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%" >
    <igc-geographic-shape-series
        id="polygonSeries"
        shape-memberPath="points"
        shape-fill="rgb(150, 150, 150)"
        shape-stroke="Black"
        shape-stroke-thickness="1.0">
    </igc-geographic-shape-series>
    <igc-geographic-polyline-series
        id="lineSeries"
        shape-member-path="points"
        shape-stroke="rgba(147, 15, 180, 0.5)"
        thickness="3.0" >
    </igc-geographic-polyline-series>
    <igc-geographic-symbol-series
        id="symbolSeries"
        longitude-member-path="longitude"
        latitude-member-path="latitude"
        marker-type="Circle"
        marker-outline="rgb(2, 102, 196)"
        marker-brush="White">
    </igc-geographic-symbol-series>
</igc-geographic-map>
```

```tsx
public render() {
    return (
        <IgrGeographicMap
            width="100%"
            height="100%"
            zoomable="true" >
            <IgrGeographicShapeSeries
                name="polygonSeries"
                dataSource={this.state.polygons}
                shapeMemberPath="points"
                shapeFill="rgb(150, 150, 150)"
                shapeStroke="Black"
                shapeStrokeThickness={1.0} />
            <IgrGeographicPolylineSeries
                name="lineSeries"
                dataSource={this.state.polylines}
                shapeMemberPath="points"
                shapeStroke="rgba(147, 15, 180, 0.5)"
                thickness={3.0}  />
            <IgrGeographicSymbolSeries
                name="symbolSeries"
                dataSource={this.state.locations}
                longitudeMemberPath="longitude"
                latitudeMemberPath="latitude"
                markerType="Circle"
                markerOutline="rgb(2, 102, 196)"
                markerBrush="White" />
        </IgrGeographicMap>
    );
}
```

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicShapeSeries ShapefileDataSource="@AsiaShape" Outline="Black" Thickness="1" Brush="Red" />
    <IgbGeographicShapeSeries ShapefileDataSource="@EuropeShape" Outline="Black" Thickness="1" Brush="Purple" />
</IgbGeographicMap>
```

## Loading Shapefiles

Next, in constructor of your page, add a `ShapefileConverter` for each shapefile that you want to display in the geographic map component.

```ts
const sdsPolygons = new IgrShapeDataSource();
sdsPolygons.importCompleted = this.onPolygonsLoaded;
sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
sdsPolygons.dataBind();
const sdsPolylines = new IgrShapeDataSource();
sdsPolylines.importCompleted = this.onPolylinesLoaded;
sdsPolylines.shapefileSource = url + "/shapes/WorldConnections.shp";
sdsPolylines.databaseSource  = url + "/shapes/WorldConnections.dbf";
sdsPolylines.dataBind();
const sdsLocations = new IgrShapeDataSource();
sdsLocations.importCompleted = this.onPointsLoaded;
sdsLocations.shapefileSource = url + "/Shapes/WorldCities.shp";
sdsLocations.databaseSource  = url + "/Shapes/WorldCities.dbf";
sdsLocations.dataBind();
```

```ts
const sdsPolygons = new IgxShapeDataSource();
sdsPolygons.importCompleted = this.onPolygonsLoaded;
sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
sdsPolygons.dataBind();
const sdsPolylines = new IgxShapeDataSource();
sdsPolylines.importCompleted = this.onPolylinesLoaded;
sdsPolylines.shapefileSource = url + "/shapes/WorldConnections.shp";
sdsPolylines.databaseSource  = url + "/shapes/WorldConnections.dbf";
sdsPolylines.dataBind();
const sdsLocations = new IgxShapeDataSource();
sdsLocations.importCompleted = this.onPointsLoaded;
sdsLocations.shapefileSource = url + "/Shapes/WorldCities.shp";
sdsLocations.databaseSource  = url + "/Shapes/WorldCities.dbf";
sdsLocations.dataBind();
```

```ts
const sdsPolygons = new IgcShapeDataSource();
sdsPolygons.importCompleted = this.onPolygonsLoaded;
sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
sdsPolygons.dataBind();
const sdsPolylines = new IgcShapeDataSource();
sdsPolylines.importCompleted = this.onPolylinesLoaded;
sdsPolylines.shapefileSource = url + "/shapes/WorldConnections.shp";
sdsPolylines.databaseSource  = url + "/shapes/WorldConnections.dbf";
sdsPolylines.dataBind();
const sdsLocations = new IgcShapeDataSource();
sdsLocations.importCompleted = this.onPointsLoaded;
sdsLocations.shapefileSource = url + "/Shapes/WorldCities.shp";
sdsLocations.databaseSource  = url + "/Shapes/WorldCities.dbf";
sdsLocations.dataBind();
```

```razor
public IgbShapeDataSource AsiaShape;
public IgbShapeDataSource EuropeShape;

protected override void OnInitialized()
{
    this.AsiaShape = new IgbShapeDataSource()
    {
        ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.shp",
        DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.dbf"
    };

    this.EuropeShape = new IgbShapeDataSource()
    {
        ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.shp",
        DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.dbf"
    };
}
```


<!-- Angular, React, WebComponents -->

## Processing Polygons

Process shapes data loaded in `ShapefileConverter` with of countries of the world and assign it to `GeographicShapeSeries` object.

```ts
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrShapeDataSource } from 'igniteui-react-core';
// ...
public onPolygonsLoaded(sds: IgrShapeDataSource, e: any) {
    const geoPolygons: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.NAME,
            gdp: record.fieldValues.GDP,
            population: record.fieldValues.POPULATION
        };
        geoPolygons.push(country);
    };

    const shapeSeries = this.geoMap.series[0] as IgrGeographicShapeSeries;
    shapeSeries.dataSource = geoPolygons;
}
```

```ts
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
// ...
public onPolygonsLoaded(sds: IgxShapeDataSource, e: any) {
    const geoPolygons: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.NAME,
            gdp: record.fieldValues.GDP,
            population: record.fieldValues.POPULATION
        };
        geoPolygons.push(country);
    };

    const shapeSeries = this.geoMap.series[0] as IgxGeographicShapeSeries;
    shapeSeries.dataSource = geoPolygons;
}
```

```ts
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
public onPolygonsLoaded(sds: IgcShapeDataSource, e: any) {
    const geoPolygons: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.NAME,
            gdp: record.fieldValues.GDP,
            population: record.fieldValues.POPULATION
        };
        geoPolygons.push(country);
    };
    let polygonSeries = (document.getElementById("polygonSeries") as IgcGeographicShapeSeriesComponent);
    polygonSeries.dataSource = geoPolygons;
    polygonSeries.renderSeries(false);
}
```

## Processing Polyline

Process shapes data loaded in `ShapefileConverter` with communication routes between major cities and assign it to `GeographicPolylineSeries` object.

```ts
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrShapeDataSource } from 'igniteui-react-core';
// ...
public onPolylinesLoaded(sds: IgrShapeDataSource, e: any) {
    const geoPolylines: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const route = {
            points: record.points,
            name: record.fieldValues.Name,
            capacity: record.fieldValues.CapacityG,
            distance: record.fieldValues.DistanceKM,
            isOverLand: record.fieldValues.OverLand === 0,
            isActive: record.fieldValues.NotLive !== 0,
            service: record.fieldValues.InService
        };
        geoPolylines.push(route);
    }
    const lineSeries = this.geoMap.series[1] as IgrGeographicPolylineSeries;
    lineSeries.dataSource = geoPolylines;
}
```

```ts
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
// ...
public onPolylinesLoaded(sds: IgxShapeDataSource, e: any) {
    const geoPolylines: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const route = {
            points: record.points,
            name: record.fieldValues.Name,
            capacity: record.fieldValues.CapacityG,
            distance: record.fieldValues.DistanceKM,
            isOverLand: record.fieldValues.OverLand === 0,
            isActive: record.fieldValues.NotLive !== 0,
            service: record.fieldValues.InService
        };
        geoPolylines.push(route);
    }
    const lineSeries = this.geoMap.series[1] as IgxGeographicPolylineSeries;
    lineSeries.dataSource = geoPolylines;
}
```

```ts
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
public onPolylinesLoaded(sds: IgcShapeDataSource, e: any) {
    const geoPolylines: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const route = {
            points: record.points,
            name: record.fieldValues.Name,
            capacity: record.fieldValues.CapacityG,
            distance: record.fieldValues.DistanceKM,
            isOverLand: record.fieldValues.OverLand === 0,
            isActive: record.fieldValues.NotLive !== 0,
            service: record.fieldValues.InService
        };
        geoPolylines.push(route);
    }

    let lineSeries = (document.getElementById("lineSeries") as IgcGeographicPolylineSeriesComponent);
    lineSeries.dataSource = geoPolylines;
    lineSeries.renderSeries(false);
}
```

## Processing Points

Process shapes data loaded in `ShapefileConverter` with locations of major cities and assign it to `GeographicSymbolSeries` object.

```ts
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { MarkerType } from 'igniteui-react-charts';
// ...
public onPointsLoaded(sds: IgrShapeDataSource, e: any) {
    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        const pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each shapefile record has just one point
            const location = {
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            };
            geoLocations.push(location);
        }
    }
    const symbolSeries = this.geoMap.series[2] as IgrGeographicSymbolSeries;
    symbolSeries.dataSource = geoLocations;
}
```

```ts
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
// ...
public onPointsLoaded(sds: IgxShapeDataSource, e: any) {
    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        const pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each shapefile record has just one point
            const location = {
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            };
            geoLocations.push(location);
        }
    }
    const symbolSeries = this.geoMap.series[2] as IgxGeographicSymbolSeries;
    symbolSeries.dataSource = geoLocations;
}
```

```ts
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
public onPointsLoaded(sds: IgcShapeDataSource, e: any) {
    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        const pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each shapefile record has just one point
            const location = {
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            };
            geoLocations.push(location);
        }
    }
    let symbolSeries = (document.getElementById("symbolSeries") as IgcGeographicSymbolSeriesComponent);
    symbolSeries.dataSource = geoLocations;
    symbolSeries.renderSeries(false);
}
```

<!-- end: Angular, React, WebComponents -->

## Map Background

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```ts
public geoMap: IgrGeographicMapComponent;
// ...

this.geoMap.backgroundContent = {};
```

```ts
public geoMap: IgxGeographicMapComponent;
// ...

this.geoMap.backgroundContent = {};
```

```ts
public geoMap: IgcGeographicMapComponent;
// ...

this.geoMap.backgroundContent = null;
```

```razor
<IgbGeographicMap Height="100%" Width="100%" BackgroundContent="@null"/>
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicShapeSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-multiple-shapes-files",
  styleUrls: ["./map-binding-multiple-shapes-files.component.scss"],
  templateUrl: "./map-binding-multiple-shapes-files.component.html"
})

export class MapBindingMultipleShapesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild ("shapeSeries")
    public shapeSeries: IgxGeographicShapeSeriesComponent;

    @ViewChild ("polylineSeries")
    public polylineSeries: IgxGeographicPolylineSeriesComponent;

    @ViewChild ("symbolSeries")
    public symbolSeries: IgxGeographicSymbolSeriesComponent;

    @ViewChild("polylineTooltipTemplate")
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("shapeTooltipTemplate")
    public shapeTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate")
    public pointTooltipTemplate: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        // loading a shapefile with geographic polygons
        const sdsPolygons = new IgxShapeDataSource();
        sdsPolygons.importCompleted.subscribe(() => this.onPolygonsLoaded(sdsPolygons, ""));
        sdsPolygons.shapefileSource = "assets/Shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = "assets/Shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();
        // loading a shapefile with geographic polylines at runtime.
        const sdsPolylines = new IgxShapeDataSource();
        sdsPolylines.shapefileSource = "assets/Shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = "assets/Shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();
        sdsPolylines.importCompleted.subscribe(() => this.onPolylinesLoaded(sdsPolylines, ""));

        // loading a shapefile with geographic points
        const sdsPoints = new IgxShapeDataSource();
        sdsPoints.importCompleted.subscribe(() => this.onPointsLoaded(sdsPoints, ""));
        sdsPoints.shapefileSource = "assets/Shapes/WorldCities.shp";
        sdsPoints.databaseSource  = "assets/Shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgxShapeDataSource, e: any) {
        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        for (const record of sds.getPointData()) {
            const pop = record.fieldValues["POPULATION"];
            if (pop > 0) {
                // each shapefile record has just one point
                const location = {
                    city: record.fieldValues["NAME"],
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    population: pop
                };
                geoLocations.push(location);
            }
        }
        this.symbolSeries.dataSource = geoLocations;
        this.symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
    }

    public onPolylinesLoaded(sds: IgxShapeDataSource, e: any) {
        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of sds.getPointData()) {
            // using field/column names from .DBF file
            const route = {
                capacity: record.fieldValues["CapacityG"],
                distance: record.fieldValues["DistanceKM"],
                isActive: record.fieldValues["NotLive"] !== 0,
                isOverLand: record.fieldValues["OverLand"] === 0,
                name: record.fieldValues["Name"],
                points: record.points,
                service: record.fieldValues["InService"]
            };
            geoPolylines.push(route);
        }
        this.polylineSeries.dataSource = geoPolylines;
        this.polylineSeries.shapeMemberPath = "points";
        this.polylineSeries.shapeFilterResolution = 2.0;
        this.polylineSeries.shapeStrokeThickness = 2;
        this.polylineSeries.shapeStroke = "rgba(252, 32, 32, 0.9)";
        this.polylineSeries.tooltipTemplate = this.polylineTooltipTemplate;
    }

    public onPolygonsLoaded(sds: IgxShapeDataSource, e: any) {
        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach((record) => {
            // using field/column names from .DBF file
            const country = {
                gdp: record.fieldValues["GDP"],
                name: record.fieldValues["NAME"],
                points: record.points,
                population: record.fieldValues["POPULATION"]
            };
            geoPolygons.push(country);
        });
        this.shapeSeries.dataSource = geoPolygons;
        this.shapeSeries.tooltipTemplate = this.shapeTooltipTemplate;
    }
}
```

```ts
import * as React from "react";
import "../styles.css";
import "./GeoMapStyles.css";
import DataUtils from "../../utilities/DataUtils"
import WorldUtils from "../../utilities/WorldUtils"

import { IgrGeographicMapImagery } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingMultipleShapes extends React.Component<any,any> {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.onPointsLoaded = this.onPointsLoaded.bind(this);
        this.onPolylinesLoaded = this.onPolylinesLoaded.bind(this);
        this.onPolygonsLoaded = this.onPolygonsLoaded.bind(this);

        this.state = { locations: [], polylines: [], polygons: []}
    }

    public render() {
        const mapStyle = { background: "rgb(212, 212, 212)" } as React.CSSProperties;

        return (
            <div className="sampleRoot">
                <div className="map" style={mapStyle} >
                    <IgrGeographicMap
                        ref={this.onMapReferenced}
                        width="100%"
                        height="100%"
                        zoomable="true" >
                        <IgrGeographicShapeSeries
                            name="polygonSeries"
                            dataSource={this.state.polygons}
                            shapeMemberPath="points"
                            shapeFill="rgb(150, 150, 150)"
                            shapeStroke="Black"
                            shapeStrokeThickness={1.0} />
                        <IgrGeographicPolylineSeries
                              name="lineSeries"
                             dataSource={this.state.polylines}
                             shapeMemberPath="points"
                             shapeStroke="rgba(147, 15, 180, 0.5)"
                             thickness={3.0}  />
                        <IgrGeographicSymbolSeries
                            name="symbolSeries"
                            dataSource={this.state.locations}
                            longitudeMemberPath="longitude"
                            latitudeMemberPath="latitude"
                            markerType="Circle"
                            markerOutline="rgb(2, 102, 196)"
                            markerBrush="White" />
                   </IgrGeographicMap>
                </div>
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        this.geoMap.backgroundContent = undefined;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        console.log("series.count " + this.geoMap.series.count);
        console.log("actualSeries.length " + this.geoMap.actualSeries.length);

        this.geoMap.actualSeries[0].tooltipTemplate = this.getPolygonsTooltip;
        this.geoMap.actualSeries[1].tooltipTemplate = this.getPolylinesTooltip;
        this.geoMap.actualSeries[2].tooltipTemplate = this.getPointTooltip;

        const url = DataUtils.getPublicURL();
        // loading a shapefile with geographic polygons
        const sdsPolygons = new IgrShapeDataSource();
        sdsPolygons.importCompleted = this.onPolygonsLoaded;
        sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();

        const sdsPolylines = new IgrShapeDataSource();
        sdsPolylines.importCompleted = this.onPolylinesLoaded;
        sdsPolylines.shapefileSource = url + "/shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = url + "/shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();

        // loading a shapefile with geographic points
        const sdsPoints = new IgrShapeDataSource();
        sdsPoints.importCompleted = this.onPointsLoaded;
        sdsPoints.shapefileSource = url + "/Shapes/WorldCities.shp";
        sdsPoints.databaseSource  = url + "/Shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgrShapeDataSource, e: any) {

        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        for (const record of sds.getPointData()) {
            const pop = record.fieldValues.POPULATION;
            if (pop > 0) {
                // each shapefile record has just one point
                const location = {
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    city: record.fieldValues.NAME,
                    population: pop
                };
                geoLocations.push(location);
            }
        }
        this.setState({ locations: geoLocations });
    }

    public onPolylinesLoaded(sds: IgrShapeDataSource, e: any) {
        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach(record => {
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM,
                isOverLand: record.fieldValues.OverLand === 0,
                isActive: record.fieldValues.NotLive !== 0,
                service: record.fieldValues.InService
            };
            geoPolylines.push(route);
        });

        this.setState({ polylines: geoPolylines });
    }

    public onPolygonsLoaded(sds: IgrShapeDataSource, e: any) {
        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach(record => {
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            };
            geoPolygons.push(country);
        });

        this.setState({ polygons: geoPolygons });
    }
}
```

```ts
import { SampleBase } from "../../sample-base";
import { AssetsUtils } from "../../../utilities/AssetsUtils";

import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcGeographicMapModule
);

let templateHTML = `
<div class="sample-container" style="background: #aad3df;">
    <igc-geographic-map id="geoMap" width="100%" height="100%" >
        <igc-geographic-shape-series
            id="polygonSeries"
            shape-memberPath="points"
            shape-fill="rgb(150, 150, 150)"
            shape-stroke="Black"
            shape-stroke-thickness="1.0">
        </igc-geographic-shape-series>
        <igc-geographic-polyline-series
            id="lineSeries"
            shape-member-path="points"
            shape-stroke="rgba(147, 15, 180, 0.5)"
            thickness="3.0" >
        </igc-geographic-polyline-series>
        <igc-geographic-symbol-series
            id="symbolSeries"
            longitude-member-path="longitude"
            latitude-member-path="latitude"
            marker-type="Circle"
            marker-outline="rgb(2, 102, 196)"
            marker-brush="White">
        </igc-geographic-symbol-series>
    </igc-geographic-map>
</div>
`;

export class MapBindingMultipleShapes extends SampleBase {

    public static htmlTagName: string = SampleBase.tag("MapBindingMultipleShapes");
    public static register(): any {
        window.customElements.define(this.htmlTagName, MapBindingMultipleShapes); return this;
    }

    private geoMap: IgcGeographicMapComponent;

    constructor() {
        super();
        this.onPointsLoaded = this.onPointsLoaded.bind(this);
        this.onPolylinesLoaded = this.onPolylinesLoaded.bind(this);
        this.onPolygonsLoaded = this.onPolygonsLoaded.bind(this);
    }

    connectedCallback() {
        this.innerHTML = templateHTML;

        this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
        this.geoMap.backgroundContent = null;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        const url = AssetsUtils.getAssetsPath();

        const sdsPolygons = new IgcShapeDataSource();
        sdsPolygons.importCompleted = this.onPolygonsLoaded;
        sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();

        const sdsPolylines = new IgcShapeDataSource();
        sdsPolylines.importCompleted = this.onPolylinesLoaded;
        sdsPolylines.shapefileSource = url + "/shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = url + "/shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();

        // // loading a shapefile with geographic points
        const sdsPoints = new IgcShapeDataSource();
        sdsPoints.importCompleted = this.onPointsLoaded;
        sdsPoints.shapefileSource = url + "/shapes/WorldCities.shp";
        sdsPoints.databaseSource  = url + "/shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgcShapeDataSource, e: any) {
        console.log("onPoints");

        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        let pointData = sds.getPointData();
        for ( let i = 0; i < pointData.length; i++ ) {
            let record = pointData[i];
            const pop = record.fieldValues.POPULATION;
            if (pop > 0) {
                // each shapefile record has just one point
                const location = {
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    city: record.fieldValues.NAME,
                    population: pop
                };
                geoLocations.push(location);
            }
        }
        let symbolSeries = (document.getElementById("symbolSeries") as IgcGeographicSymbolSeriesComponent);
        symbolSeries.dataSource = geoLocations;
        symbolSeries.renderSeries(false);
    }

    public onPolylinesLoaded(sds: IgcShapeDataSource, e: any) {
        console.log("onPolylines");

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        let pointData = sds.getPointData();
        for ( let i = 0; i < pointData.length; i++ ) {
            let record = pointData[i];
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM,
                isOverLand: record.fieldValues.OverLand === 0,
                isActive: record.fieldValues.NotLive !== 0,
                service: record.fieldValues.InService
            };
            geoPolylines.push(route);
        }

        let lineSeries = (document.getElementById("lineSeries") as IgcGeographicPolylineSeriesComponent);
        lineSeries.dataSource = geoPolylines;
        lineSeries.renderSeries(false);
    }

    public onPolygonsLoaded(sds: IgcShapeDataSource, e: any) {
        console.log("onPolygons ");

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        let pointData = sds.getPointData();
        for ( let i = 0; i < pointData.length; i++ ) {
            let record = pointData[i];
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            };
            geoPolygons.push(country);
        };

        let polygonSeries = (document.getElementById("polygonSeries") as IgcGeographicShapeSeriesComponent);
        polygonSeries.dataSource = geoPolygons;
        polygonSeries.renderSeries(false);
    }
}
```

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicShapeSeries ShapefileDataSource="AsiaShape" Outline="Black" Thickness="1" Brush="Red" />
    <IgbGeographicShapeSeries ShapefileDataSource="EuropeShape" Outline="Black" Thickness="1" Brush="Purple" />
</IgbGeographicMap>

@code {

    public IgbShapeDataSource AsiaShape;
    public IgbShapeDataSource EuropeShape;

    protected override void OnInitialized()
    {
        this.AsiaShape = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_asia.dbf"
        };

        this.EuropeShape = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/world_region_europe.dbf"
        };
    }
}
```

## API References

 - `GeographicPolylineSeries`
 - `GeographicShapeSeries`
 - `GeographicSymbolSeries`
 - `ShapefileConverter`
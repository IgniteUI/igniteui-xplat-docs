---
title: {Platform} Map | Data Visualization Tools | Geographic Data Models | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, {ProductName}, Infragistics
_language: kr
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter']
---

# {Platform} Binding Geographic Data Models

The {ProductName} map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The `ItemsSource` property of geographic series is used for the purpose of binding to data models. This property can be bound an array of custom objects.

## Demo


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-model"  >
</code-view>

<div class="divider--half"></div>

The following table summarized data structures required for each type of geographic series:

| Geographic Series  | Properties   | Description   |
|--------------|---------------| ---------------|
| `GeographicSymbolSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`   | Specifies names of 2 numeric longitude and latitude coordinates |
| `GeographicHighDensityScatterSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`   | Specifies names of 2 numeric longitude and latitude coordinates |
| `GeographicProportionalSymbolSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `RadiusMemberPath`   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for size/radius of symbols |
| `GeographicScatterAreaSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `ColorMemberPath`   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
| `GeographicContourLineSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `ValueMemberPath`   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
|`GeographicShapeSeries`|`ShapeMemberPath`|Specifies the name of data column of `ItemsSource` items that contains the geographic points of shapes. This property must be mapped to an array of arrays of objects with x and y properties. |
|`GeographicPolylineSeries`|`ShapeMemberPath`|Specifies the name of data column of `ItemsSource` items that contains the geographic coordinates of lines. This property must be mapped to an array of arrays of objects with x and y properties. |

## Code Snippet
The following code shows how to bind the `GeographicSymbolSeries` to a custom data model that contains geographic locations of some cities of the world stored using longitude and latitude coordinates. Also, we use the `GeographicPolylineSeries` to plot shortest geographic path between these locations using the [WorldUtility](geo-map-resources-world-util.md)

```html
 TODO - ADD CODE SNIPPET
```

```tsx
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import WorldUtils from "./WorldUtils" ;
// ...

constructor(props: any) {
    super(props);

    const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
    const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name:"Auckland" };
    const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name:"Santiago" };
    const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" }
    const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name:"Singapore" };
    const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow"};

    this.flights = [
        { origin: cityDAL, dest: citySNG, color: "Green" },
        { origin: cityMOS, dest: cityNZL, color: "Red" },
        { origin: cityCHL, dest: cityJAP, color: "Blue" },
    ];

    for (const flight of this.flights) {
        this.createPolylineSeries(flight);
        this.createSymbolSeries(flight);
    }
}

public createSymbolSeries(flight: any)
{
    const geoLocations = [flight.origin, flight.dest ];
    const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
    symbolSeries.dataSource = geoLocations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = flight.color;
    symbolSeries.thickness = 1;
    this.geoMap.series.add(symbolSeries);
}

public createPolylineSeries(flight: any)
{
    const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
    const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);
    const geoRoutes = [ { points: geoPath } ];
    const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
    lineSeries.dataSource = geoRoutes;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeStrokeThickness = 9;
    lineSeries.shapeOpacity = 0.5;
    lineSeries.shapeStroke = flight.color;
    this.geoMap.series.add(lineSeries);
}


```


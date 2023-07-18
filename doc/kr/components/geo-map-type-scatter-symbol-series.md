---
title: {Platform} Map | Data Visualization Tools | Symbol Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, {ProductName}, Infragistics
_language: kr
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter']
---

# {Platform} Using Scatter Symbol Series

Use the map component's `GeographicSymbolSeries` to display geo-spatial data using points or markers in a geographic context. This type of geographic series is often used to render a collection of geographic locations such as cities, airports, earthquakes, or points of interests.

## Demo


`sample="/maps/geo-map/type-scatter-symbol-series", height="400", alt="{Platform} geo map type scatter symbol series"`

<div class="divider--half"></div>

## Data Requirements
Similarly to other types of geographic series in the map component, the `GeographicSymbolSeries` has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have two numeric data columns that store a geographic location (longitude and latitude). These data columns are then mapped to the `LatitudeMemberPath` and `LongitudeMemberPath` properties. The `GeographicSymbolSeries` uses values of these mapped data columns to plot symbol elements in the geographic map component.

## Code Snippet
The following code shows how to bind the `GeographicSymbolSeries` to locations of cities loaded from a shape file using the `ShapeDataSource`.

<!-- React -->
```tsx

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';

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
    this.addSeries(WorldLocations.getCities(), "Gray");
    this.addSeries(WorldLocations.getCapitals(),"rgb(32, 146, 252)");
}

public addSeries(locations: any[], brush: string)
{
    const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = brush;

    this.geoMap.series.add(symbolSeries);
}
```

<!-- Angular -->
```html
TODO - ADD CODE SNIPPET
```

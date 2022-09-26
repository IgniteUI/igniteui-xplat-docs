---
title: {Platform} Map | Data Visualization Tools | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, {ProductName}, Infragistics
_language: kr
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter']
---

# {Platform} Using Scatter High Density Series

Use the map component's `GeographicHighDensityScatterSeries` to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

## Demo


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-density-series"  >
</code-view>

<div class="divider--half"></div>

The demo above shows the `GeographicHighDensityScatterSeries` series in the map component bound to hundreds or even thousands of data points representing Australia’s population density. The map plot area with more densely populated data points represented as coalescences of red pixels and loosely distributed data points by discrete blue pixels.

Because there are so many data points, the series displays the scatter data as tiny dots as opposed to full size markers, and displays areas with the most data using a higher color density representing a cluster of data points.

## Data Requirements
Similar to other types of scatter series in the map control, the `GeographicHighDensityScatterSeries` series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the `LongitudeMemberPath` and `LatitudeMemberPath` properties to map these data columns.

### Data Binding
The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

Property|Type|Description
---|---|---
`ItemsSource`|any|Gets or sets the items source
`LongitudeMemberPath`|string|Uses the ItemsSource property to determine the location of the longitude values on the assigned items
`LatitudeMemberPath`|string|Uses the ItemsSource property to determine the location of the latitude values on the assigned items

## Heat Color Scale
The Heat Color Scale, an optional feature, determines the color pattern within the series. The following table summarizes the properties used for determining the color scale.

Property |Type|Description
---|---|---
`HeatMinimum`|Double|Defines the double value representing the minimum end of the color scale
`HeatMaximum`|Double|Defines the double value representing the maximum end of the color scale
`HeatMinimumColor`|Color|Defines the point density color used at the bottom end of the color scale
`HeatMaximumColor`|Color|Defines the point density color used at the top end of the color scale

## Code Example

The following code demonstrates how set the `HeatMinimumColor` and `HeatMaximumColor` properties of the `GeographicHighDensityScatterSeries`

<!-- React -->
```tsx

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicHighDensityScatterSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

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
}

public componentDidMount() {
    // fetching geographic locations from public folder or URL
    fetch("Data/AusPlaces.json")
        .then((response) => response.json())
        .then(data => this.onDataLoaded(data));
}

public onDataLoaded(geoLocations: any[]) {

    const geoSeries = new IgrGeographicHighDensityScatterSeries( { name: "hdSeries" });
    geoSeries.dataSource = geoLocations;
    geoSeries.longitudeMemberPath = "x";
    geoSeries.latitudeMemberPath = "y";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.mouseOverEnabled = true;

    this.geoMap.series.add(geoSeries);
}
```

<!-- Angular -->
```html
TODO - ADD CODE SNIPPET
```


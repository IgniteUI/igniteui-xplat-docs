---
title: $Platform$ Map | Data Visualization Tools | Geographic JSON Data | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics
_language: kr
---

# $Platform$ Binding JSON Files with Geographic Locations

With `XamGeographicMap`, you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

## Demo


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-json-points"  >
</code-view>

<div class="divider--half"></div>


## Data Example
Here is an example of data from JSON file:

```ts
[
 { "n": "Sydney Island", "y": -16.68972, "x": 139.45917 },
 { "n": "Sydney Creek", "y": -16.3, "x": 128.95 },
 { "n": "Mount Sydney", "y": -21.39864, "x": 121.193 },
 // ...
]
```

## Code Snippet
The following code loads and binds `GeographicHighDensityScatterSeries` in the map component to an array of objects created from loaded JSON file with geographic locations:

```html
 TODO - ADD CODE SNIPPET
```

```tsx
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { MarkerType } from 'igniteui-react-charts';
// ...

public componentDidMount() {
    // fetching JSON data with geographic locations from public folder
    fetch(url + "/Data/WorldCities.json")
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

public onDataLoaded(jsonData: any[]) {

    const geoLocations: any[] = [];
    // parsing JSON data and using only cities that are capitals
    for (const jsonItem of jsonData) {
        if (jsonItem.cap) {
            const location = {
                latitude: jsonItem.lat,
                longitude: jsonItem.lon,
                population: jsonItem.pop,
                city: jsonItem.name,
                country: jsonItem.country
            };
            geoLocations.push(location);
        }
    }
    // creating symbol series with loaded data
    const geoSeries = new IgrGeographicSymbolSeries( { name: "series" });
    geoSeries.dataSource = geoLocations;
    geoSeries.markerType = MarkerType.Circle;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.markerBrush = "LightGray";
    geoSeries.markerOutline = "Black";
    // adding symbol series to the geographic amp
    this.geoMap.series.add(geoSeries);
}
```


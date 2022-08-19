---
title: $Platform$ Map | Data Visualization Tools | Geographic CSV Data | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics
_language: kr
---

# $Platform$ Binding CSV Files with Geographic Locations

With the $ProductName$ map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from a comma separated values (CSV) file.

## Demo


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-csv"  >
</code-view>

<div class="divider--half"></div>


## Data Example
Here is an example of data from CSV file:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## Code Snippet
The following code loads and binds `GeographicHighDensityScatterSeries` in the map component to an array of objects created from loaded CSV file with geographic locations.


```html
 TODO - ADD CODE SNIPPET
```

```tsx
import { IgrGeographicHighDensityScatterSeries } from 'igniteui-react-maps';
// ...

public componentDidMount() {
    // fetching CSV data with geographic locations from public folder
    fetch(url + "/Data/UsaCities.csv")
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

public onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");

    // parsing CSV data and creating geographic locations
    const geoLocations: any[] = [];
    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        // using CSV columns: City,Lat,Lon,State,Code,County,Density,Population
        const location = {
            name:  columns[0],
            latitude:  Number(columns[1]),
            longitude: Number(columns[2]),
            state: columns[3],
            code: columns[4],
            county: columns[5],
            density: Number(columns[6]),
            population: Number(columns[7])
        };
        geoLocations.push(location);
    }

    // creating HD series with loaded data
    const geoSeries = new IgrGeographicHighDensityScatterSeries( { name: "hdSeries" });
    geoSeries.dataSource = geoLocations;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.mouseOverEnabled = true;
    // adding symbol series to the geographic amp
    this.geoMap.series.add(geoSeries);
}

```


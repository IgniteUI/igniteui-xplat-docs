---
title: $PlatformShort$ Map | Data Visualization Tools | Binding JSON Files | Infragistics
_description: Learn how to use Infragistics' $PlatformShort$ map to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View $ProductName$ map demos!
_keywords: $PlatformShort$ map, JSON files, $ProductName$, Infragistics, data binding
mentionedTypes: ['XamGeographicMap']
---
# $PlatformShort$ Binding JSON Files with Geographic Locations

With the $ProductName$ map, you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

## $PlatformShort$ Binding JSON Files with Geographic Locations Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-data-json-points-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-json-points' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Binding JSON Files with Geographic Locations Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-json-points-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<sample-button src="maps/geo-map/binding-data-json-points"></sample-button>

<div class="divider--half"></div>


## Data Example
Here is an example of data from JSON file:

```json
[
   { "name": "Sydney Island", "lat": -16.68972, "lon": 139.45917 },
   { "name": "Sydney Creek",  "lat": -16.3,     "lon": 128.95 },
   { "name": "Mount Sydney",  "lat": -21.39864, "lon": 121.193 },
 // ...
]
```

## Code Snippet
The following code loads and binds `GeographicHighDensityScatterSeries` in the map component to an array of objects created from loaded JSON file with geographic locations:

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
  </div>

<ng-template let-series="series" let-item="item" #template>
        <div>
            <span>{{item.city}}</span>
        </div>
</ng-template>
```

```ts
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

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-geographic-json-files",
  styleUrls: ["./map-binding-geographic-json-files.component.scss"],
  templateUrl: "./map-binding-geographic-json-files.component.html"
})

export class MapBindingDataJsonPointsComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder
        fetch("assets/Data/WorldCities.json")
            .then((response) => response.json())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(jsonData: any[]) {
        const geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (const jsonItem of jsonData) {
            if (jsonItem.cap) {
                const location = {
                    city: jsonItem.name,
                    country: jsonItem.country,
                    latitude: jsonItem.lat,
                    longitude: jsonItem.lon,
                    population: jsonItem.pop
                };
                geoLocations.push(location);
            }
        }

        // creating symbol series with loaded data
        const geoSeries = new IgxGeographicSymbolSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.markerType = MarkerType.Circle;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.markerBrush = "LightGray";
        geoSeries.markerOutline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
connectedCallback() {
    const url = "../data/WorldCities.json";

    fetch(url)
        .then((response) => response.json())
        .then(data => this.onDataLoaded(data));
}

onDataLoaded(jsonData: any[]) {
    const geoLocations: any[] = [];
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

    let geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    let geoSeries : IgcGeographicSymbolSeriesComponent = new IgcGeographicSymbolSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.markerType = MarkerType.Circle;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.markerBrush = "LightGray";
    geoSeries.markerOutline = "Black";

    geoMap.series.add(geoSeries);
}
```

```razor
@using System.Net.Http.Json
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor
@inject HttpClient Http

<GeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicSymbolSeries DataSource="DataSource"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerBrush="LightGray"
        MarkerOutline="Black" />
</GeographicMap>

@code {

    private WorldPlaceJson[] DataSource;

    protected override async Task OnInitializedAsync()
    {
        GeographicMapModule.Register(IgniteUIBlazor);

        var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
        var http = new HttpClient();
        this.DataSource = await http.GetFromJsonAsync<WorldPlaceJson[]>(url);

        await Task.Delay(1);
    }

    public class WorldPlaceJson {

        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public bool Cap { get; set; }
    }
}
```


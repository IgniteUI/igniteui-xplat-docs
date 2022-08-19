---
title: $Platform$ Map | Data Visualization Tools | Scatter High Density Series | Data Binding | Infragistics
_description: Use Infragistics $Platform$ map's scatter high density series to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time. Learn more about $ProductName$ map's series!
_keywords: $Platform$ map, scatter high density series, $ProductName$, Infragistics
mentionedTypes: ['XamGeographicMap', 'Series']
---
# $Platform$ Geographic High Density Map

In $Platform$ map component, you can use the `GeographicHighDensityScatterSeries` to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

## $Platform$ Geographic High Density Map Example


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-density-series"
           alt="$Platform$ Using Scatter High Density Series Example"
           github-src="maps/geo-map/type-scatter-density-series">
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
```

```ts
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
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #template>
    <div>
        <span>
            {{item.n}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicHighDensityScatterSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-geographic-scatter-density-series",
  styleUrls: ["./map-geographic-scatter-density-series.component.scss"],
  templateUrl: ".map-geographic-scatter-density-series.component.html"
})

export class MapTypeScatterDensitySeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public geoLocations;
    constructor() {
    }

    public ngAfterViewInit(): void {
         // fetching geographic locations from public JSON folder
         fetch("assets/Data/AusPlaces.json")
         .then((response) => response.json())
         .then((data) => this.onDataLoaded(data, ""));
      }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        this.geoLocations = sds;
        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = sds;
        geoSeries.longitudeMemberPath = "x";
        geoSeries.latitudeMemberPath = "y";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding HD series to the geographic amp
        this.map.series.add(geoSeries);

        // zooming to bound of all geographic locations
        const geoBounds = WorldUtils.getBounds(this.geoLocations);
        geoBounds.top = 0;
        geoBounds.height = -50;
        this.map.zoomToGeographic(geoBounds);
    }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicHighDensityScatterSeriesComponent } from 'igniteui-webcomponents-maps';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    const url = "../data/Places.csv";

    fetch(url)
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");
    const geoLocations: any[] = [];

    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        const location = {
            latitude:  Number(columns[2]),
            longitude: Number(columns[1]),
            name:  columns[0]
        };
        geoLocations.push(location);
    }

    // creating HD series with loaded data
    const geoSeries = new IgcGeographicHighDensityScatterSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.latitudeMemberPath = "latitude";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    // adding HD series to the geographic amp
    this.geoMap.series.add(geoSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor
@inject HttpClient Http

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicHighDensityScatterSeries DataSource="DataSource"
        LongitudeMemberPath="Lon"
        LatitudeMemberPath="Lat"
        HeatMaximumColor="Red"
        HeatMinimumColor="10"
        HeatMaximum="5"
        HeatMinimum="0"
        PointExtent="1"
        MouseOverEnabled="true" />
</IgbGeographicMap>

@code {

    private List<AusPlaceCsv> DataSource;
    private Rect GeoBounds;

    protected override async Task OnInitializedAsync()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);

        string url = "https://static.infragistics.com/xplatform/data/AusPlaces.csv";

        string csv = await Http.GetStringAsync(url);

        string[] csvLines = csv.Split(Environment.NewLine);

        List<AusPlaceCsv> dataItems = new List<AusPlaceCsv>();

        for (int i = 1; i < csvLines.Length - 1; i++)
        {
            string[] columns = csvLines[i].Split(",");
            AusPlaceCsv location = new AusPlaceCsv()
            {
                Lat = double.Parse(columns[2]),
                Lon = double.Parse(columns[1]),
                Name = columns[0],
            };

            dataItems.Add(location);
        }

        this.DataSource = dataItems;

        await Task.Delay(1);
    }

    public class AusPlaceCsv
    {
        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public bool Cap { get; set; }
    }
}
```


 ## API Members

 - `GeographicHighDensityScatterSeries`
 - `GeographicHighDensityScatterSeries`
 - `HeatMaximumColor`
 - `HeatMinimumColor`
 - `ItemsSource`
 - `LatitudeMemberPath`
 - `LongitudeMemberPath`
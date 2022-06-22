---
title: $Platform$ Map | Data Visualization Tools | Scatter Symbol Series | Data Binding | Infragistics
_description: Use Infragistics $Platform$ map's scatter symbol series to display geo-spatial data using points or markers in a geographic context.. Learn more about $ProductName$ map's series!
_keywords: $Platform$ map, scatter symbol series, $ProductName$, Infragistics
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter', 'Series']
---
# $Platform$ Using Scatter Symbol Series

Use the $Platform$ map component's `GeographicSymbolSeries` to display geo-spatial data using points or markers in a geographic context. This type of geographic series is often used to render a collection of geographic locations such as cities, airports, earthquakes, or points of interests.

## $Platform$ Using Scatter Symbol Series Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-symbol-series"
           alt="$Platform$ Using Scatter Symbol Series Example"
           github-src="maps/geo-map/type-scatter-symbol-series">
</code-view>

<div class="divider--half"></div>

## Data Requirements
Similarly to other types of geographic series in the map component, the `GeographicSymbolSeries` has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have two numeric data columns that store a geographic location (longitude and latitude). These data columns are then mapped to the `LatitudeMemberPath` and `LongitudeMemberPath` properties. The `GeographicSymbolSeries` uses values of these mapped data columns to plot symbol elements in the geographic map component.

## Code Snippet
The following code shows how to bind the `GeographicSymbolSeries` to locations of cities loaded from a shape file using the `ShapefileConverter`.

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
```

```ts
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
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
  </div>

<ng-template let-series="series" let-item="item" #template>
        <div>
            <div *ngIf="item.org;then hasOrg; else notOrg" ></div>
            <span [style.color]="series.brush">
                {{item.name}}
            </span>
            <br/>
            <span>
                Population {{item.pop}} M
            </span>
        </div>
        <ng-template #hasOrg>
            <span>
                Population {{item.pop}} M
            </span>
            <br />
        </ng-template>
         <ng-template #notOrg>
            <span>
            </span>
         </ng-template>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-geographic-scatter-symbol-series",
  styleUrls: ["./map-geographic-scatter-symbol-series.component.scss"],
  templateUrl: "./map-geographic-scatter-symbol-series.component.html"
})

export class MapTypeScatterSymbolSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(symbolSeries);
    }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { MarkerType } from 'igniteui-webcomponents-charts';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    this.addSeriesWith(WorldLocations.getCities(), "Gray");
    this.addSeriesWith(WorldLocations.getCapitals(),"rgb(32, 146, 252)");
}

addSeriesWith(locations: any[], brush: string)
{
    const symbolSeries = new IgcGeographicSymbolSeriesComponent ();
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = brush;

    this.geoMap.series.add(symbolSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicSymbolSeries DataSource="Cities"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerBrush="White"
        MarkerOutline="Gray" />
    <IgbGeographicSymbolSeries DataSource="Capitals"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerBrush="White"
        MarkerOutline="rgb(32, 146, 252)" />
</IgbGeographicMap>

@code {

    private List<WorldCity> Cities;
    private List<WorldCity> Capitals;

    protected override void OnInitialized()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);

        this.Cities = WorldLocations.GetCities();
        this.Capitals = WorldLocations.GetCapitals();
    }
}
```

 ## API Members

 - `GeographicSymbolSeries`
 - `ItemsSource`
 - `LatitudeMemberPath`
 - `LongitudeMemberPath`
 - `ShapefileConverter`
---
title: $PlatformShort$ Map | Data Visualization Tools | Binding Multiple Data Source | Infragistics
_description: Use Infragistics' $PlatformShort$ JavaScript map to add multiple geographic series objects to overlay custom data sources with geo-spacial data. View $ProductName$ map tutorials!
_keywords: $PlatformShort$ map, geographic series, $ProductName$, Infragistics, data binding
mentionedTypes: ['XamGeographicMap']
---
# $PlatformShort$ Binding Multiple Data Sources

In the $ProductName$ map, you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, `GeographicSymbolSeries` for plotting geographic locations of airports, the `GeographicPolylineSeries` for plotting flights between airports, and 2nd `GeographicPolylineSeries` for plotting gridlines of major geographic coordinates.


## $PlatformShort$ Binding Multiple Data Sources Example


<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-sources" alt="$PlatformShort$ Binding Multiple Data Sources Example">
</code-view>

<sample-button src="maps/geo-map/binding-multiple-sources"></sample-button>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

- `GeographicSymbolSeries` – displays locations of major airports
- `GeographicPolylineSeries` – displays flights between airports
- `GeographicPolylineSeries` – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

## Creating Data Sources

Create data sources for all geographic series that you want to display in the $ProductName$ map. For example, you can the use [WorldConnections](geo-map-resources-world-connections.md) script.


```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>
            Arrival: {{item.origin.country}}
            </span>
            <br/>
            <span>
            Destination: {{item.dest.country}}
            </span>
            <br/>
            <span>
            Distance: {{item.distance}} miles
            </span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
            <div>
                <span>
                {{item?.country}}
                </span>
                <br />
                <span>
                {{item?.name}}
                </span>
                <br />
                <span>
                Population: {{item.pop}} M
                </span>
                <br/>
                <span>
                Flights: {{item.flights}}
                </span>
            </div>
        </ng-template>
```

```ts
import WorldConnections from "./WorldConnections";
// ..

public onMapReferenced(map: IgrGeographicMap) {
    this.geoMap = map;

    const worldFlights: any[] = WorldConnections.getFlights();
    const worldAirports: any[] = WorldConnections.getAirports();
    const worldGridlines: any[] = WorldConnections.getGridlines();

    // create and overlay geographic series here
}
```

```razor
@code {

    public List<WorldCity> Airports;
    public List<FlightInfo> Flights;
    public List<CoordinateLine> Coordinates;

    protected override void OnInitialized()
    {
        GeographicMapModule.Register(IgniteUIBlazor);

        Airports = WorldConnections.GetAirports();
        Flights = WorldConnections.GetFlights();
        Coordinates = WorldConnections.GetGridlines();
    }
}
```

## Overlaying Flights

Create first `GeographicPolylineSeries` object with flight connections between major airports and add it to `Series` collection of the $ProductName$ map.

```html
<igx-geographic-polyline-series  #polylineSeries
        [tooltipTemplate]="polylineTooltipTemplate"
                name="polylineSeries"
                shapeMemberPath="points"
                shapeStroke="rgba(147, 15, 180, 0.5)"
                thickness={3.0} >
</igx-geographic-polyline-series>
```

```ts
const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
lineSeries.dataSource = worldFlights;
lineSeries.shapeMemberPath = "points";
lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
lineSeries.shapeStrokeThickness = 4;
this.geoMap.series.add(lineSeries);
```

```razor
<GeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicPolylineSeries DataSource="Flights" ShapeMemberPath="Points"
        ShapeStroke="rgba(196, 14, 14, 0.05)" ShapeStrokeThickness="4" />
</GeographicMap>
```

## Overlaying Gridlines

Create second `GeographicPolylineSeries` object with geographic gridlines and add it to `Series` collection of the $ProductName$ map.

```html
  <igx-geographic-polyline-series  #polylineSeries
            [tooltipTemplate]="polylineTooltipTemplate"
                 datasource = worldFlights
                 name="polylineSeries"
                 shapeMemberPath="points"
                 shapeStroke="rgba(196, 14, 14,0.05)"
                 thickness={3.0} >
    </igx-geographic-polyline-series>
```

```ts
const gridSeries = new IgrGeographicPolylineSeries( { name: "gridSeries" });
gridSeries.dataSource = worldGridlines;
gridSeries.shapeMemberPath = "points";
gridSeries.shapeStroke = "Gray";
gridSeries.shapeStrokeThickness = 1;
this.geoMap.series.add(gridSeries);
```

```razor
<GeographicMap Height="100%" Width="100%" Zoomable="true">    
    <GeographicPolylineSeries DataSource="Coordinates" ShapeMemberPath="Points"
        ShapeStroke="Gray" ShapeStrokeThickness="1" />    
</GeographicMap>
```

## Overlaying Airports

Create `GeographicSymbolSeries` object with airport points and add it to `Series` collection of the geographic $ProductName$ map.

```html
<igx-geographic-symbol-series  #symbolSeries
    name="symbolSeries"
    longitudeMemberPath="longitude"
    latitudeMemberPath="latitude"
    markerType="Circle"
    markerOutline="rgb(73, 73, 73)"
    markerBrush="White" >
</igx-geographic-symbol-series>
```

```ts
const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
symbolSeries.dataSource = worldAirports;
symbolSeries.markerType = MarkerType.Circle;
symbolSeries.latitudeMemberPath = "lat";
symbolSeries.longitudeMemberPath = "lon";
symbolSeries.markerBrush = "#aad3df";
symbolSeries.markerOutline = "rgb(73, 73, 73)";
this.geoMap.series.add(symbolSeries);
```

```razor
<GeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicSymbolSeries DataSource="Airports" LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon" MarkerType="MarkerType.Circle"
        MarkerBrush="#AAD3DF" MarkerOutline="Black" Thickness="1" />
</GeographicMap>
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldConnections } from "../../utilities/WorldConnections";

@Component({
  selector: "app-map-binding-multiple-data-sources",
  styleUrls: ["./map-binding-multiple-data-sources.component.scss"],
  templateUrl: "./map-binding-multiple--data-sources.component.html"
})

export class MapBindingMultipleSourcesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("polylineTooltipTemplate")
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate")
    public pointTooltipTemplate: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.map.windowRect = { left: 0.195, top: 0.1, width: 0.5, height: 0.5 };

      const worldFlights = WorldConnections.getFlights();
      const worldAirports = WorldConnections.getAirports();
      const worldGridlines = WorldConnections.getGridlines();

      this.addPolylineSeriesWith(worldFlights);
      this.addGridlineSeriesWith(worldGridlines);
      this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data: any[]) {
        const gridSeries = new IgxGeographicPolylineSeriesComponent();
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        this.map.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data: any[]) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.polylineTooltipTemplate;
        this.map.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data: any[]) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
        this.map.series.add(symbolSeries);
    }
}

```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<GeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicPolylineSeries DataSource="Flights" ShapeMemberPath="Points"
        ShapeStroke="rgba(196, 14, 14, 0.05)" ShapeStrokeThickness="4" />
    <GeographicPolylineSeries DataSource="Coordinates" ShapeMemberPath="Points"
        ShapeStroke="Gray" ShapeStrokeThickness="1">
    </GeographicPolylineSeries>
    <GeographicSymbolSeries DataSource="Airports" LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon" MarkerType="MarkerType.Circle"
        MarkerBrush="#AAD3DF" MarkerOutline="Black" Thickness="1" />
</GeographicMap>

@code {

    private List<WorldCity> Airports;
    private List<FlightInfo> Flights;
    private List<CoordinateLine> Coordinates;

    protected override void OnInitialized()
    {
        GeographicMapModule.Register(IgniteUIBlazor);

        Airports = WorldConnections.GetAirports();
        Flights = WorldConnections.GetFlights();
        Coordinates = WorldConnections.GetGridlines();
    }
}
```
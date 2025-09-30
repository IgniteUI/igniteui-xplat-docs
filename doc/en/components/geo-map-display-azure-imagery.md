---
title: {Platform} Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' {Platform} to display imagery from Microsoft Azure Maps. View {ProductName} map tutorials!
_keywords: {Platform} map, azure maps, {ProductName}, Infragistics, imagery tile source, map background
mentionedTypes: ["XamGeographicMap", "AzureMapImagery"]
---
# {Platform} Displaying Imagery from Azure Maps

The {Platform} `AzureMapImagery` is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The {ProductName} map component can display geographic imagery from Azure Maps in the map’s background content using the `AzureMapImagery` class.

## {Platform} Displaying Imagery from Azure Maps Example


<img src="../images/general/AzureMapsImagery.png" />


<div class="divider--half"></div>

`sample="/maps/geo-map/display-azure-imagery", height="600", alt="{Platform} Displaying Imagery from Azure Maps Example"`

## Code Snippet
The following code snippet shows how to display geographic imagery tiles from Azure Maps in {Platform} `XamGeographicMap` using `AzureMapImagery` class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxAzureMapImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxAzureMapImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; // or
tileSource.imageryStyle = AzureMapsImageryStyle.DarkGrey; // Traffic, Weather etc.

this.map.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrAzureMapImagery } from 'igniteui-react-maps';
import { AzureMapsImageryStyle } from 'igniteui-react-maps';
// ...
const tileSource = new IgrAzureMapImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; // or
tileSource.imageryStyle = AzureMapsImageryStyle.DarkGrey; // Traffic, Weather etc.

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```ts
const tileSource = new IgcAzureMapImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; // or
tileSource.imageryStyle = AzureMapsImageryStyle.DarkGrey; // Traffic, Weather etc.

map.backgroundContent = tileSource;
```

```razor
@using IgniteUI.Blazor.Controls

<IgbGeographicMap @ref="AzureMap"
    Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="@AzureImagery">
</IgbGeographicMap>

@code {
    
    private IgbGeographicMap AzureMap;
    private IgbAzureMapsImagery AzureImagery { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        //Update Map Background
        AzureImagery = new IgbAzureMapsImagery
        {
            ApiKey = AzureKey,
            ImageryStyle = AzureMapsImageryStyle.Satellite
        };
    }
}
```

## {Platform} Displaying Tile Series Overlays over Imagery from Azure Maps Example

<img src="../images/general/Azure_Traffic_Tile_Series_With_Background.png" />

<div class="divider--half"></div>

`sample="/maps/geo-map/display-azure-imagery", height="600", alt="{Platform} Displaying Imagery from Azure Maps Example"`

## Code Snippet
The following code snippet shows how to display geographic imagery tiles ontop of a background imagery joining eg. traffic with a dark grey map for the {Platform} `XamGeographicMap` using `AzureMapImagery` and `GeographicTileSeries` classes.

```html
<igx-geographic-map #map height="100%" width="100%" zoomable="true">
  <igx-geographic-tile-series #tileSeries></igx-geographic-tile-series>
</igx-geographic-map>
```

```ts
export class AppComponent implements AfterViewInit {
  @ViewChild('map', { static: true }) public map!: IgxGeographicMapComponent;
  @ViewChild('tileSeries', { static: true }) public tileSeries!: IgxGeographicTileSeriesComponent;

  public azureImagery!: IgxAzureMapsImagery;
  public azureKey: string = "<YOUR_KEY_HERE>";

  ngAfterViewInit(): void {
    // Update TileSeries
    const overlay = new IgxAzureMapsImagery();
    overlay.apiKey = this.azureKey;
    overlay.imageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay;
    this.tileSeries.tileImagery = overlay;

    // Update Map Background
    this.azureImagery = new IgxAzureMapsImagery();
    this.azureImagery.apiKey = this.azureKey;
    this.azureImagery.imageryStyle = AzureMapsImageryStyle.DarkGrey;
    this.map.backgroundContent = this.azureImagery;
  }
}
```

```ts
// App.tsx
import React, { useEffect, useRef } from 'react';
import { 
  IgrGeographicMap, 
  IgrGeographicTileSeries, 
  IgrAzureMapsImagery, 
  AzureMapsImageryStyle 
} from 'igniteui-react-maps';

export default function App() {
    const mapRef = useRef<IgrGeographicMap>(null);
    const tileSeriesRef = useRef<IgrGeographicTileSeries>(null);
    const azureKey = "<YOUR_KEY_HERE>";

    // Update TileSeries
    const series = new IgrGeographicTileSeries({
    name: "AzureTileSeries",
    });

    const overlay = new IgrAzureMapsImagery({});
    overlay.apiKey = azureKey;
    overlay.imageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay;
    series.tileImagery = overlay;

    // Update Map Background
    const background = new IgrAzureMapsImagery({});
    background.apiKey = azureKey;
    background.imageryStyle = AzureMapsImageryStyle.DarkGrey;
    this.geoMap.backgroundContent = background;

    this.geoMap.series.add(series);

    return (
        <div style={{ height: "100vh" }}>
        <IgrGeographicMap
            ref={mapRef}
            width="100%" height="100%"
            zoomable={true}>
            <IgrGeographicTileSeries ref={tileSeriesRef} />
        </IgrGeographicMap>
        </div>
    );
}
```

```html
<!-- index.html -->
<html>
  <head>
    <script type="module" src="index.ts"></script>
  </head>
  <body style="margin:0;">
    <igc-geographic-map id="map" width="100%" height="100%" zoomable="true">
      <igc-geographic-tile-series id="tileSeries"></igc-geographic-tile-series>
    </igc-geographic-map>
  </body>
</html>
```

```ts
// index.ts
import { 
  IgcGeographicMapComponent, 
  IgcGeographicTileSeriesComponent, 
  IgcAzureMapsImagery, 
  AzureMapsImageryStyle, 
  IgcGeographicMapModule 
} from 'igniteui-webcomponents-maps';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcGeographicMapModule);

const azureKey = "<YOUR_KEY_HERE>";

window.addEventListener("load", () => {
  const map = document.getElementById("map") as IgcGeographicMapComponent;
  const tileSeries = document.getElementById("tileSeries") as IgcGeographicTileSeriesComponent;

  // Update TileSeries
  const overlay = new IgcAzureMapsImagery();
  overlay.apiKey = azureKey;
  overlay.imageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay;
  tileSeries.tileImagery = overlay;

  // Update Map Background
  const background = new IgcAzureMapsImagery();
  background.apiKey = azureKey;
  background.imageryStyle = AzureMapsImageryStyle.DarkGrey;
  map.backgroundContent = background;
});
```

```razor
@using IgniteUI.Blazor.Controls

<IgbGeographicMap @ref="AzureMap"
                          Height="100%" Width="100%"
                          Zoomable="true"
                          BackgroundContent="@AzureImagery">
        <IgbGeographicTileSeries @ref="ImagerySeries" />
</IgbGeographicMap>

@code {
    
    private IgbGeographicMap AzureMap;
    private IgbAzureMapsImagery AzureImagery { get; set; }
    private IgbGeographicTileSeries ImagerySeries;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);
        
        //Update TileSeries
        var imagery = new IgbAzureMapsImagery
        {
            ApiKey = AzureKey,
            ImageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay
        };

        ImagerySeries.TileImagery = imagery;

        //Update Map Background
        AzureImagery = new IgbAzureMapsImagery
        {
            ApiKey = AzureKey,
            ImageryStyle = AzureMapsImageryStyle.DarkGrey
        };
    }
}
```

## Properties
The following table summarized properties of the `AzureMapImagery` class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|`ApiKey`|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|`ImageryStyle`|`AzureMapsImageryStyle`|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following `AzureMapsImageryStyle` enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> LabelsRoad - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul>|

## API References

 - `AzureMapsImageryStyle`
 - `AzureMapsImagery`
 - `XamGeographicMap`
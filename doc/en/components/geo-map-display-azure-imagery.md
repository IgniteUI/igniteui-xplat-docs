---
title: {Platform} Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' {Platform} to display imagery from Microsoft Azure Maps. View {ProductName} map tutorials!
_keywords: {Platform} map, azure maps, {ProductName}, Infragistics, imagery tile source, map background
mentionedTypes: ["XamGeographicMap", "AzureMapsImagery", "GeographicTileSeries"]
---
# {Platform} Displaying Imagery from Azure Maps <label>PREVIEW</label>

The {Platform} `AzureMapsImagery` is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The {ProductName} map component can display geographic imagery from Azure Maps in the map’s background content using the `AzureMapsImagery` class.

## {Platform} Displaying Imagery from Azure Maps Example


<img src="../images/general/AzureMapsImagery.png" />


<div class="divider--half"></div>

`sample="/maps/geo-map/display-azure-imagery", height="600", alt="{Platform} Displaying Imagery from Azure Maps Example"`

## Code Snippet
The following code snippet shows how to display geographic imagery tiles from Azure Maps in {Platform} `XamGeographicMap` using `AzureMapsImagery` class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxAzureMapsImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxAzureMapsImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.TerraOverlay; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; //or Traffic & Weather etc.

this.map.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrAzureMapsImagery } from 'igniteui-react-maps';
import { AzureMapsImageryStyle } from 'igniteui-react-maps';
// ...
const tileSource = new IgrAzureMapsImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Satellite; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road; // or
tileSource.imageryStyle = AzureMapsImageryStyle.DarkGrey; // Traffic, Weather etc.

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```ts
const tileSource = new IgcAzureMapsImagery();
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

When working with the `GeographicTileSeries`, you can combine **overlays** (traffic, weather, labels) on top of a **base map style** such as eg. **Satellite**, **Road**, or **DarkGrey**. Using **TerraOverlay** with eg. **Satellite** to visualize terrain.

- **Base Styles**: Satellite, Road, Terra, and DarkGrey provide the core background tiles.  
- **Overlay Styles**: Traffic and Weather imagery (e.g., `TrafficRelativeOverlay`, `WeatherRadarOverlay`) are designed to be layered on top of a base style by assigning them to a tile series.  
- **Hybrid Styles**: Variants like `HybridRoadOverlay` and `HybridDarkGreyOverlay` already combine a base style with overlays (labels, roads, etc.), so you don’t need to manage multiple layers manually.  

This design allows you to build richer maps, for example:  
- Displaying **Satellite imagery** with a **TrafficOverlay** to highlight congestion on real-world images.  
- Using **Terra** with **WeatherRadarOverlay** to visualize terrain with precipitation.  
- Applying **DarkGrey** with **LabelsRoadOverlay** for a dashboard-friendly, contrast-heavy view.  

<img src="../images/general/Azure_Traffic_Tile_Series_With_Background.png" />

<div class="divider--half"></div>

## Code Snippet
The following code snippet shows how to display geographic imagery tiles ontop of a background imagery joining eg. traffic with a dark grey map for the {Platform} `XamGeographicMap` using `AzureMapsImagery` and `GeographicTileSeries` classes.

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
The following table summarizes properties of the `AzureMapsImagery` class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|`ApiKey`|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|`ImageryStyle`|`AzureMapsImageryStyle`|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following `AzureMapsImageryStyle` enumeration values: 
<ul>
  <li>Satellite - Specifies the Satellite map style without road or labels overlay</li>
  <li>Road - Specifies the Aerial map style with road and labels overlay</li>
  <li>TerraOverlay - Specifies a terrain map style with shaded relief to highlight elevation and landscape features</li>
  <li>LabelsRoadOverlay - One of several overlays of city labels without an aerial overlay</li>
  <li>DarkGrey - Specifies a dark grey basemap style for contrast and highlighting overlays</li>
  <li>HybridRoadOverlay - Satellite background combined with road and label overlays</li>
  <li>HybridDarkGreyOverlay - Satellite background combined with dark grey label overlays</li>
  <li>LabelsDarkGreyOverlay - One of several overlays of city labels over a dark grey basemap</li>
  <li>TrafficDelayOverlay - Displays traffic delays and congestion areas in real time</li>
  <li>TrafficAbsoluteOverlay - Displays current traffic speeds as absolute values</li>
  <li>TrafficReducedOverlay - Displays reduced traffic flow with light-based visualization</li>
  <li>TrafficRelativeOverlay - Displays traffic speeds relative to normal conditions</li>
  <li>WeatherRadarOverlay - Displays near real-time radar imagery of precipitation</li>
  <li>WeatherInfraredOverlay - Displays infrared satellite imagery of cloud cover</li>
</ul>

## API References

 - `AzureMapsImageryStyle`
 - `AzureMapsImagery`
 - `XamGeographicMap`
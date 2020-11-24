---
title: $PlatformShort$ Map | Data Visualization Tools | Displaying ESRI Imagery |  Infragistics
_description: Use Infragistics' $PlatformShort$ to display imagery from ESRI maps. View $ProductName$ map tutorials!
_keywords: $PlatformShort$ map, ESRI, $ProductName$, Infragistics, imagery tile source, map background
mentionedTypes: ['XamGeographicMap']
---
# $PlatformShort$ Displaying Imagery from Esri Maps

The `ArcGISOnlineMapImagery` is a free geographic imagery mapping service created by <a href="https://www.esri.com/" target="_blank">Esri</a> company. It provides over 40 styles of geographic imagery tiles of the world and some thematic tiles for the USA. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

## $PlatformShort$ Displaying Imagery from Esri Maps Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-esri-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-esri-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<sample-button src="maps/geo-map/display-esri-imagery"></sample-button>

<div class="divider--half"></div>

## Code Snippet
The following code snippet shows how to display $PlatformShort$ geographic imagery tiles from Esri imagery servers in `XamGeographicMap` using `ArcGISOnlineMapImagery` class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxArcGISOnlineMapImagery } from 'igniteui-angular-maps';
// ...
public geoMap: IgxGeographicMapComponent;

const tileSource = new IgxArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

this.geoMap.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
// ...
const tileSource = new IgrArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```ts
import { IgcGeographicMap } from 'igniteui-webcomponents-maps';
import { IgcArcGISOnlineMapImagery } from 'igniteui-webcomponents-maps';
// ...
const tileSource = new IgcArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

const geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent
geoMap.backgroundContent = tileSource;
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<GeographicMap Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="EsriImagery" />

protected override void OnInitialized()
{
    GeographicMapModule.Register(IgniteUIBlazor);
    ArcGISOnlineMapImagery imagery = new ArcGISOnlineMapImagery()
    {
        MapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer"
    };
    
    this.EsriImagery = imagery;    
}
```

## Esri Utility
Alternatively, you can use the [EsriUtility](geo-map-resources-esri.md) which defines all styles provided by Esri imagery servers.

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxArcGISOnlineMapImagery } from 'igniteui-angular-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
public geoMap: IgxGeographicMapComponent;

const tileSource = new IgxArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

this.geoMap.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
const tileSource = new IgrArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```ts
import { IgcGeographicMap } from 'igniteui-webcomponents-maps';
import { IgcArcGISOnlineMapImagery } from 'igniteui-webcomponents-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
const tileSource = new IgcArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

const geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent
geoMap.backgroundContent = tileSource;
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<GeographicMap Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="EsriImagery" />

protected override void OnInitialized()
{
    GeographicMapModule.Register(IgniteUIBlazor);
    ArcGISOnlineMapImagery imagery = new ArcGISOnlineMapImagery()
    {
        MapServerUri = EsriStyle.WorldOceansMap
    };
    
    this.EsriImagery = imagery;    
}
```


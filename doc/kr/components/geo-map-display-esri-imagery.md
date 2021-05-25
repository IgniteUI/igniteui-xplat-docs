---
title: $Platform$ Map | Data Visualization Tools | Esri Maps | Infragistics
_description: The Map allows you to display imagery from Esri Street Maps. View the demo and usage for more
_keywords: map, $ProductName$, Infragistics, imagery tiles, Esri, Arc GIS
mentionedTypes: ['XamGeographicMap']
---
# $Platform$ Displaying Imagery from Esri Maps

The `ArcGISOnlineMapImagery` is a free geographic imagery mapping service created by Esri. It provides over 40 styles of geographic imagery tiles of the world. This geographic imagery service can be accessed directly on <a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> web site.

## Demo


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery"  >
</code-view>

<div class="divider--half"></div>

## Code Snippet
The following code snippet shows how to display geographic imagery from Esri Maps in `XamGeographicMap` using `ArcGISOnlineMapImagery`.

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


---
title: $PlatformShort$ Map | Data Visualization Tools | Displaying Open Street Maps Imagery | Infragistics
_description: Use Infragistics' $PlatformShort$ to display imagery from OSM maps. View $ProductName$ map tutorials!
_keywords: $PlatformShort$ map, OSM, $ProductName$, Infragistics, imagery tile source, map background
mentionedTypes: ['XamGeographicMap']
---
# $PlatformShort$ Displaying Imagery from Open Street Maps

The $PlatformShort$ `OpenStreetMapImagery` is a free geographic imagery mapping service created collaboratively by OpenStreetMap© contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the $ProductName$ map component already displays geographic imagery from the Open Street Maps. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

## $PlatformShort$ Displaying Imagery from Open Street Maps Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-osm-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-osm-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="geo-map-display-osm-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<sample-button src="maps/geo-map/display-osm-imagery"></sample-button>

<div class="divider--half"></div>

## Code Snippet
This code example explicitly sets `BackgroundContent` of the map component to the `OpenStreetMapImagery` object which provides geographic imagery from  OpenStreetMap© contributors.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxOpenStreetMapImagery } from 'igniteui-angular-maps';
// ...
public map: IgxGeographicMapComponent;

const tileSource = new IgxOpenStreetMapImagery();
this.map.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrOpenStreetMapImagery } from 'igniteui-react-maps';
// ...
const tileSource = new IgrOpenStreetMapImagery();

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcOpenStreetMapImagery } from 'igniteui-webcomponents-maps';
// ...

let geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent

const mapImagery = new OpenStreetMapImagery();
this.geoMap.backgroundContent = mapImagery;
```

```razor
<GeographicMap Height="100%" Width="100%" Zoomable="true"
    BackgroundContent="OSMImagery" />

@code {

    public OpenStreetMapImagery OSMImagery;
    
    protected override void OnInitialized()
    {
        GeographicMapModule.Register(IgniteUIBlazor);
        this.OSMImagery = new OpenStreetMapImagery();        
    }
}
```


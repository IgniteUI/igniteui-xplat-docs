---
title: $PlatformShort$ Map | Data Visualization Tools | Bing Maps | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics, imagery tiles, Bing Maps
---
# $PlatformShort$ Binding Imagery from Bing Maps

Bing Maps is Microsoft’s® licensed geographic imagery mapping service. This geographic imagery service is accessible directly on the <a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a>  web site. The $ProductName$ map component displays geographic imagery from Bing Maps in the map’s background content using the `BingMapsMapImagery` class. However, by default the map component displays geographic imagery from the Open Street Maps in the map background content requiring you to configure the control to display Bing Maps’ geographic imagery. Prior to using Bing Maps’ geographic imagery, you must register and obtain a Bing Map API key from <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> You must use the Bing Maps’ API key to set the BingMapsMapImagery object’s ApiKey property.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-bing-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-bing-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-bing-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

## Code Snippet
The following code snippet shows how to display geographic imagery tiles from Bing Maps in `XamGeographicMap` using `BingMapsMapImagery` class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxBingMapsMapImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxBingMapsMapImagery();
tileSource.apiKey = "YOUR_BING_MAPS_API_KEY";
tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels; // or
tileSource.imageryStyle = BingMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = BingMapsImageryStyle.Road;

// resolving BingMaps uri based on HTTP protocol of hosting website
let tileUri = tileSource.actualBingImageryRestUri;
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

this.map.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrBingMapsMapImagery } from 'igniteui-react-maps';
import { BingMapsImageryStyle } from 'igniteui-react-maps';
// ...
const tileSource = new IgrBingMapsMapImagery();
tileSource.apiKey = "YOUR_BING_MAPS_API_KEY";
tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels; // or
tileSource.imageryStyle = BingMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = BingMapsImageryStyle.Road;

// resolving BingMaps uri based on HTTP protocol of hosting website
let tileUri = tileSource.actualBingImageryRestUri;
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

## Properties
The following table summarized data structures required for each type of geographic series :

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`ApiKey`|string|Represents the property for setting an API key required for the Bing Maps imagery service. You must obtain this key from the <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> website.|
|`BingImageryRestUri`|string|Represents the property for setting the Bing Imagery REST URI specifying where the TilePath and SubDomains will come from. This is an optional property, and if not specified it will use the default REST URI.|
|`CultureName`|string|Represents a property for setting the culture name for the tile source.|
|`ImageryStyle`|BingMapsImageryStyle|Represents the property for setting the Bing Maps imagery tiles map style. This property can be set to the following BingMapsImageryStyle enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> AerialWithLabels - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul>|
|`IsDeferredLoad`|Boolean|Represents the property that specifies whether or not the Bing Maps service should auto-initialized upon the assignment of valid property values.|
|`IsInitialized`|Boolean|Represents the property that is set to True occurs when geographic imagery tiles from Bing Maps service have been initialized and they are ready for rendering in the map component.|
|`SubDomains`|ObservableCollection<string>|Represents an image collection of URI sub domains|
|`TilePath`|string|Represents a property that sets the map tile image URI, this is the actual location of the Bing Maps|

## Code Snippet
The following code snippet shows how to display geographic imagery from Bing Maps in the background content of the map component.

```html
 TODO - ADD CODE SNIPPET
```



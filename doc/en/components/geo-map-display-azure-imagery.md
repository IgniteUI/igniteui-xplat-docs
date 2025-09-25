---
title: {Platform} Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' {Platform} to display imagery from Microsoft Azure Maps. View {ProductName} map tutorials!
_keywords: {Platform} map, azure maps, {ProductName}, Infragistics, imagery tile source, map background
mentionedTypes: ["XamGeographicMap", "AzureMapsMapImagery"]
---
# {Platform} Displaying Imagery from Azure Maps

The {Platform} `AzureMapsMapImagery` is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The {ProductName} map component can display geographic imagery from Azure Maps in the map’s background content using the `AzureMapsMapImagery` class.

## {Platform} Displaying Imagery from Azure Maps Example


<img src="../images/general/AzureMapsImagery.png" />


<div class="divider--half"></div>

`sample="/maps/geo-map/display-azure-imagery", height="600", alt="{Platform} Displaying Imagery from Azure Maps Example"`

## Code Snippet
The following code snippet shows how to display geographic imagery tiles from Azure Maps in {Platform} `XamGeographicMap` using `AzureMapsMapImagery` class.

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxAzureMapsMapImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxAzureMapsMapImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.LabelsRoad; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road;

this.map.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrAzureMapsMapImagery } from 'igniteui-react-maps';
import { AzureMapsImageryStyle } from 'igniteui-react-maps';
// ...
const tileSource = new IgrAzureMapsMapImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Imagery; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Terra; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road;

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```ts
const tileSource = new IgcAzureMapsMapImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.Imagery; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Terra; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road;

map.backgroundContent = tileSource;
```

## Properties
The following table summarized properties of the `AzureMapsMapImagery` class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|`ApiKey`|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|`ImageryStyle`|`AzureMapsImageryStyle`|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following `AzureMapsImageryStyle` enumeration values: <ul><li> Aerial - Specifies the Aerial map style without road or labels overlay</li> <li> LabelsRoad - Specifies the Aerial map style with road and labels overlay</li><li> Road - Specifies the Roads map style without Aerial overlay</li></ul>|
|`AzureImageryRestUri`|string|Represents the property for setting the Azure Imagery REST URI specifying where the TilePath and SubDomains will come from. This is an optional property, and if not specified it will use the default REST URI.|
|`CultureName`|string|Represents a property for setting the culture name for the tile source.|
|`IsDeferredLoad`|boolean|Represents the property that specifies whether or not the Azure Maps service should auto-initialized upon the assignment of valid property values.|
|`IsInitialized`|boolean|Represents the property that is set to True occurs when geographic imagery tiles from Azure Maps service have been initialized and they are ready for rendering in the map component.|
|`SubDomains`|`SubDomainsCollection`|Represents an image collection of URI sub domains|
|`TilePath`|string|Represents a property that sets the map tile image URI, this is the actual location of the Azure Maps|

## API References

 - `AzureMapsImageryStyle`
 - `AzureMapsMapImagery`
 - `XamGeographicMap`
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
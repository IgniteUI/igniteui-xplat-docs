---
title: $PlatformShort$ Map | Data Visualization Tools | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics
---
# $PlatformShort$ Map

The $ProductName$ map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

## Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-overview-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's `Series` property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, `GeographicSymbolSeries` can be added for plotting geographic locations such as cities and the `GeographicPolylineSeries` for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

<!-- Angular, React, WebComponents -->
## Dependencies
To use the geographic map component, you need to first install these packages:

- **npm install --save {PackageCore}**
- **npm install --save {PackageCharts}**
- **npm install --save {PackageMaps}**
<!-- end: Angular, React, WebComponents -->

## Required Modules

The `XamGeographicMap` requires the following modules:

```razor
GeographicMapModule
DataChartInteractivityModule
```

```ts
// app.module.ts
import { IgxMapModule } from "igniteui-angular-maps";

@NgModule({
    imports: [
        // ...
        IgxMapModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcGeographicMap } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';

IgcGeographicMapModule.register();
IgcDataChartInteractivityModule.register();
```

```ts
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

```
<div class="divider--half"></div>

## Usage

Now that the map module is imported, next step is to create geographic map. The following code demonstrates how to do this and enable zooming in the map.

```html
 TODO - ADD CODE SNIPPET
```

```tsx
<IgrGeographicMap
    width="600px"
    height="600px"
    zoomable="true" />
```

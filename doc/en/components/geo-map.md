---
title: $Platform$ Map | Data Visualization Tools | Map Overview | Infragistics
_description: Use Infragistics' $Platform$ JavaScript map to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps. View the $ProductName$ map demos!
_keywords: $Platform$ map, geographic map, imagery tiles, $ProductName$, Infragistics
mentionedTypes: ['XamGeographicMap']
---
# $Platform$ Map Overview

The $ProductName$ map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

# $Platform$ Map Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-bubble-series"
           github-src="maps/geo-map/type-scatter-bubble-series">
</code-view>

<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's Series property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, `GeographicSymbolSeries` can be added for plotting geographic locations such as cities and the `GeographicPolylineSeries` for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

<!-- Angular, React, WebComponents -->
## Dependencies

The $Platform$ geographic map component, you need to first install these packages:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
npm install --save {PackageMaps}
</pre>
<!-- end: Angular, React, WebComponents -->

## Required Modules

The `XamGeographicMap` requires the following modules, however the DataChartInteractivityModule is only required for mouse interactions, such as panning and zooming the map content.

```razor
GeographicMapModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
```

```ts
// app.module.ts
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxGeographicMapModule,
		IgxDataChartInteractivityModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-overview",
  styleUrls: ["./map-overview.component.scss"],
  templateUrl: "./map-overview.component.html"
})

export class MapOverviewComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
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

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcGeographicMapModule
);
```

<div class="divider--half"></div>

## Usage

Now that the map module is imported, next step is to create geographic map. The following code demonstrates how to do this and enable zooming in the map.

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>
```

```tsx
<IgrGeographicMap
    width="600px"
    height="600px"
    zoomable="true" />
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```razor
<GeographicMap Height="100%" Width="100%" Zoomable="true" />
```

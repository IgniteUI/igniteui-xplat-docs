---
title: {Platform} Map | Data Visualization Tools | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, {ProductName}, Infragistics
_language: kr
mentionedTypes: ["XamGeographicMap", "ShapefileConverter"]
---

# {Platform} Map

The {ProductName} map component allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.

## Demo


`sample="/maps/geo-map/overview", height="400", alt="{Platform} geo map overview"`

<div class="divider--half"></div>

The map component allows you to render geographic imagery from Bing Maps™, and Open Street Maps. The map provides plotting of tens of thousands of data points, and updates them every few milliseconds so that the control can handle your real-time feeds.

The map's Series property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, `GeographicSymbolSeries` can be added for plotting geographic locations such as cities and the `GeographicPolylineSeries` for plotting connections (e.g. roads) between these geographic locations.

The map provides customizable navigation behaviors for navigating map content using mouse, keyboard, or code-behind.

NOTE: As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.

For more details:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

<!-- Angular, React, WebComponents -->
## Dependencies
To use the geographic map component, you need to first install these packages:

- **npm install --save {PackageCore}**
- **npm install --save {PackageCharts}**
- **npm install --save {PackageMaps}**
<!-- end: Angular, React, WebComponents -->

## Component Modules

The `XamGeographicMap` requires the following modules:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbGeographicMapModule),
    typeof(IgbDataChartInteractivityModule)
);
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

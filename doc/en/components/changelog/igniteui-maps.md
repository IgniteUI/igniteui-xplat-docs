---
title: {Platform} Maps Package | Data Visualization Tools | Infragistics
_description: Learn about new features in the {ProductName} Maps Package.
_keywords: Changelog, What's New, {ProductName}, Infragistics, Maps
mentionedTypes: ["XamGeographicMap"]
namespace: Infragistics.Controls.Charts
---

# {ProductName} Maps Changelog

All notable changes for the {ProductName} Maps package are documented on this page.

<!-- NOTE: Add new version sections below this comment for automated changelog updates -->

## **{PackageVerChanges-25-2-NOV}**

- Azure Map Imagery is now RTM.

## **{PackageVerChanges-25-1-SEP}**

#### <label>PREVIEW</label> Azure Map Imagery Support

The `IgxGeographicMap` now supports Azure-based map imagery, allowing developers to display detailed, dynamic maps across multiple application types. You can combine multiple map layers, visualize geographic data, and create interactive mapping experiences with ease.

Note: Support for Bing Maps imagery is being phased out. Existing enterprise keys can still be used to access Bing Maps, ensuring your current applications continue to function while you transition to Azure maps.

Explore some of the publicly available [Azure maps here](https://azure.microsoft.com/en-us/products/azure-maps).

<!-- Blazor -->

**Breaking Changes**

- `AzureMapsMapImagery` was renamed to `AzureMapsImagery`
- `AzureMapsImageryStyle.Imagery` was renamed to `AzureMapsImageryStyle.Satellite`
- The following `AzureMapsImageryStyle` enum values were renamed to include the Overlay suffix:
  - `TerraOverlay`,
  - `LabelsRoadOverlay`
  - `LabelsDarkGreyOverlay`
  - `HybridRoadOverlay`
  - `HybridDarkGreyOverlay`
  - `WeatherRadarOverlay`
  - `WeatherInfraredOverlay`
  - `TrafficAbsoluteOverlay`
  - `TrafficRelativeOverlay`
  - `TrafficRelativeDarkOverlay`
  - `TrafficDelayOverlay`
  - `TrafficReducedOverlay`

<!-- end: Blazor -->

> [!Note]
> As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.
> For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

<!-- Angular -->

## **{PackageVerChanges-21-2}**

<!-- end: Angular -->

<!-- WebComponents -->

## **{PackageVerChanges-21-1}**

<!-- end: WebComponents -->


> [!Note]
> These features are CTP

- Added support for wrap around display of the map (scroll infinitely horizontally)
- Added support for shifting display of some map series while wrapping around the coordinate origin
- Added support for highlighting of the shape series
- Added support for some annotation layers for the shape series

## **{PackageVerChangedImports}**

- Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> [!Note]
> These breaking changes were introduce in these packages and components only:

| Affected Packages | Affected Components |
| ------------------|---------------------|
| <a href="{PackageWebsite}{PackageMaps}/v/{PackageVerChangedImports}" target="_blank">{PackageMaps}</a> | [Geo Map](geo-map.md), [Treemap](charts/types/treemap-chart.md)  |

<!-- Angular -->

- Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

```ts
// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

- Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
```

<!-- end: Angular -->

<!-- React -->

- Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// maps:
import { IgrGeographicMap } from "igniteui-react-maps";
import { IgrGeographicMapModule } from "igniteui-react-maps";
```

- Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// maps:
import { IgrGeographicMap } from "igniteui-react-maps/ES5/igr-geographic-map";
import { IgrGeographicMapModule } from "igniteui-react-maps/ES5/igr-geographic-map-module";
```

<!-- end: React -->

<!-- WebComponents -->

- Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps";
```

- Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// maps:
import { IgcGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-component";
import { IgcGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igc-geographic-map-module";
```

<!-- end: WebComponents -->

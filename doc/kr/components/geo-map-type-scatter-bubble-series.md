---
title: $PlatformShort$ Map | Data Visualization Tools | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, $ProductName$, Infragistics
---
# $PlatformShort$ Using Scatter Proportional Series

Use the map component's `GeographicProportionalSymbolSeries` to plot markers for the geographic points specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Also you can use this map series in a fleet management system or a GPS system for dynamic vehicle tracking.

## Demo


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-bubble-series" >
</code-view>


<div class="divider--half"></div>

The demo above shows the `GeographicProportionalSymbolSeries` series and how to specify data binding options of the series. Automatic marker selection is configured along with marker collision avoidance logic, and marker outline and fill colors are specified too.

## Configuration Summary
Similar to other types of scatter series in the map control, the `GeographicProportionalSymbolSeries` series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the `LongitudeMemberPath` and `LatitudeMemberPath` properties to map these data columns. The `RadiusScale` and `RadiusMemberPath` will settings configures the radius for the bubbles.

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

Property|Type|Description
---|---|---
`ItemsSource`|any|Gets or sets the items source
`LongitudeMemberPath`|string|Uses the ItemsSource property to determine the location of the longitude values on the assigned items
`LatitudeMemberPath`|string|Uses the ItemsSource property to determine the location of the latitude values on the assigned items
`RadiusMemberPath`|string|Sets the path to use to get the radius values for the series.
`RadiusScale`|`Ig$SizeScale`|Gets or sets the radius scale property for the current bubble series.
`MinimumValue`|any|Configure the minimum value for calculating value sub ranges.
`MaximumValue`|any|Configure the maximum value for calculating value sub ranges.

## Code Snippet

<!--React -->
```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicProportionalSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { MarkerType } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
// ...

public render() {
    return (
    <IgrGeographicMap
        ref={this.onMapReferenced}
        width="600px"
        height="600px"
        zoomable="true" />
    );
}

public onMapReferenced(map: IgrGeographicMap) {
    this.map = map;

    const sizeScale = new IgrSizeScale({});
    sizeScale.minimumValue = 4;
    sizeScale.maximumValue = 60;

    const brushes = [
        "rgba(14, 194, 14, 0.4)",  // semi-transparent green
        "rgba(252, 170, 32, 0.4)", // semi-transparent orange
        "rgba(252, 32, 32, 0.4)",  // semi-transparent red
    ];

    const brushScale = new IgrValueBrushScale({});
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

   const geoSeries = new IgrGeographicProportionalSymbolSeries ( { name: "symbolSeries" });
    geoSeries.dataSource = locations;
    geoSeries.markerType = MarkerType.Circle;
    geoSeries.radiusScale = sizeScale;
    geoSeries.fillScale = brushScale;
    geoSeries.fillMemberPath = "pop";
    geoSeries.radiusMemberPath = "pop";
    geoSeries.latitudeMemberPath = "lat";
    geoSeries.longitudeMemberPath = "lon";
    geoSeries.markerOutline = "rgba(0,0,0,0.3)";

    this.map.series.add(geoSeries);
}
```

<!--Angular -->

```html
TODO - ADD CODE SNIPPET
```

---
title: $Platform$ Map | Data Visualization Tools | Scatter Proportional Series | Data Binding | Infragistics
_description: Use Infragistics $Platform$ map's scatter proportional series to plot markers for the geographic points specified by the data in your application. Learn more about $ProductName$ map's series!
_keywords: $Platform$ map, scatter proportional series, $ProductName$, Infragistics
mentionedTypes: ['XamGeographicMap']
---
# $Platform$ Using Scatter Proportional Series

Use the $Platform$ map component's `GeographicProportionalSymbolSeries` to plot markers for the geographic points specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Also you can use this map series in a fleet management system or a GPS system for dynamic vehicle tracking.

## $Platform$ Using Scatter Proportional Series Example


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-bubble-series"
           alt="$Platform$ Using Scatter Proportional Series Example"
           github-src="maps/geo-map/type-scatter-bubble-series">
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
`RadiusScale`|`SizeScale`|Gets or sets the radius scale property for the current bubble series.
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
```

```ts
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
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #template>
    <div>
        <span>
            {{item.name}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxSizeScaleComponent } from 'igniteui-angular-charts';
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';
import { IgxDataContext } from 'igniteui-angular-core';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicProportionalSymbolSeriesComponent } from 'igniteui-angular-maps';
import { MarkerType } from 'igniteui-angular-charts';
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-geographic-scatter-proportional-series",
  styleUrls: ["./map-geographic-scatter-proportional-series.component.scss"],
  templateUrl: "./map-geographic-scatter-proportional-series.component.html"
})
export class MapTypeScatterBubbleSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
    const sds = new IgxShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "assets/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
}

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
        const temp = record.fieldValues.Contour;
        // using only major contours (every 10th degrees Celsius)
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                 for (let i = 0; i < shapes.length; i++) {
                    if (i % 5 === 0) {
                        const p = shapes[i];
                        const item = { lon: p.x, lat: p.y, value: temp};
                        contourPoints.push(item);
                    }
                 }
            }
        }
    }

    console.log("loaded contour points: " + contourPoints.length);
    this.addSeriesWith(WorldLocations.getAll());
}

    public addSeriesWith(locations: any[]) {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 4;
        sizeScale.maximumValue = 60;

        const brushes = [
            "rgba(14, 194, 14, 0.4)",  // semi-transparent green
            "rgba(252, 170, 32, 0.4)", // semi-transparent orange
            "rgba(252, 32, 32, 0.4)"  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.fillMemberPath = "pop";
        symbolSeries.radiusMemberPath = "pop";
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
        symbolSeries.tooltipTemplate = this.tooltipTemplate;

        this.map.series.add(symbolSeries);
    }

}

```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicProportionalSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcValueBrushScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcSizeScaleComponent } from 'igniteui-webcomponents-charts';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    this.addSeriesWith(WorldLocations.getAll());
}

addSeriesWith(locations: any[])
{
    const sizeScale = new IgcSizeScaleComponent();
    sizeScale.minimumValue = 4;
    sizeScale.maximumValue = 60;

    const brushes = [
        "rgba(14, 194, 14, 0.4)",  // semi-transparent green
        "rgba(252, 170, 32, 0.4)", // semi-transparent orange
        "rgba(252, 32, 32, 0.4)",  // semi-transparent red
    ];

    const brushScale = new IgcValueBrushScaleComponent();
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const symbolSeries = new IgcGeographicProportionalSymbolSeriesComponent ();
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.radiusScale = sizeScale;
    symbolSeries.fillScale = brushScale;
    symbolSeries.fillMemberPath = "pop";
    symbolSeries.radiusMemberPath = "pop";
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerOutline = "rgba(0,0,0,0.3)";

    this.geoMap.series.add(symbolSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicProportionalSymbolSeries DataSource="WorldCities"
        MarkerType="MarkerType.Circle"
        RadiusScale="SeriesSizeScale"
        FillScale="ColorScale"
        FillMemberPath="Pop"
        RadiusMemberPath="Pop"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerOutline="rgba(0,0,0,0.3)" />
</IgbGeographicMap>

@code {

    private List<WorldCity> WorldCities;
    private SizeScale SeriesSizeScale;
    private ValueBrushScale ColorScale;

    protected override void OnInitialized()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);

        this.WorldCities = WorldLocations.GetAll();

        this.SeriesSizeScale = new SizeScale()
        {
            MinimumValue = 4,
            MaximumValue = 60
        };

        this.ColorScale = new ValueBrushScale()
        {
            Brushes = "rgba(14, 194, 14, 0.4), rgba(252, 170, 32, 0.4), rgba(252, 32, 32, 0.4)",
            MinimumValue = 0,
            MaximumValue = 30
        };
    }
}
```

 ## API Members

 - `GeographicProportionalSymbolSeries`
 - `ItemsSource`
 - `LatitudeMemberPath`
 - `LongitudeMemberPath`
 - `RadiusMemberPath`
 - `RadiusScale`
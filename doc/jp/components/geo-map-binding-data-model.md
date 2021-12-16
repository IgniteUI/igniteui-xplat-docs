---
title: $Platform$ マップ | データ可視化ツール | 地理的データ モデルのバインディング | インフラジスティックス
_description: インフラジスティックスの $Platform$ JavaScript マップを使用して、シェイプ ファイルからの地理空間データやデータ モデルからの地理的位置を地理的画像マップに表示します。$ProductName$ マップのサンプルを是非お試しください!
_keywords: $Platform$ map, binding data models, $ProductName$, Infragistics, data binding, $Platform$ マップ, データ モデルのバインディング, データ バインディング, インフラジスティックス
mentionedTypes: ['XamGeographicMap', 'GeographicScatterAreaSeries', 'GeographicHighDensityScatterSeries', 'GeographicProportionalSymbolSeries', GeographicScatterAreaSeries', GeographicContourLineSeries', 'GeographicShapeSeries', 'GeographicPolylineSeries' ]
namespace: Infragistics.Controls.Maps
_language: ja
---
# $Platform$ 地理的データ モデルのバインディング

$ProductName$ マップ コンポーネントは、シェイプ ファイルからの地理空間データやデータ モデルからの地理的位置を地理的画像マップに表示するように設計されています。地理的シリーズの `ItemsSource` プロパティは、データ モデルへのバインディングのために使用されます。このプロパティは、カスタム オブジェクトの配列にバインドできます。

## $Platform$ 地理的データ モデルのバインディングの例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-model"
           alt="$Platform$ 地理的データ モデルのバインディングの例"
           github-src="maps/geo-map/binding-data-model">
</code-view>

<div class="divider--half"></div>

以下の表で、地理的シリーズのタイプごとに必要となるデータ構造を簡単に説明します。

| Geographic シリーズ  | プロパティ   | 概要   |
|--------------|---------------| ---------------|
| `GeographicSymbolSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`   | 2 つの数値の経度と緯度座標の名前を指定します。 |
| `GeographicHighDensityScatterSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`   | 2 つの数値の経度と緯度座標の名前を指定します。 |
| `GeographicProportionalSymbolSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `RadiusMemberPath`   | 2 つの経度座標と緯度座標の名前と、シンボルのサイズ/半径の数字列を 1 列指定します。 |
| `GeographicScatterAreaSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `ColorMemberPath`   | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。 |
| `GeographicContourLineSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `ValueMemberPath`   | 数値の三角測量のために、2 つの経度と緯度座標および数値列を 1 列指定します。 |
|`GeographicShapeSeries`|`ShapeMemberPath`|図形の地理的ポイントを含む `ItemsSource` 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。 |
|`GeographicPolylineSeries`|`ShapeMemberPath`|線の地理的座標を含む `ItemsSource` 項目のデータ列の名前を指定します。このプロパティは、x プロパティと y プロパティを持つオブジェクトの配列の配列にマップする必要があります。 |

## コード スニペット
以下のコードは、`GeographicSymbolSeries` を、経度と緯度の座標を使用して格納された世界の一部の都市の地理的位置を含むカスタム データ モデルにバインドする方法を示します。また、[WorldUtility](geo-map-resources-world-util.md) を使用してこれらの場所間の最短の地理的経路をプロットするために `GeographicPolylineSeries` を使用します。

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #pointSeriesTemplate>
        <div>
            <span [style.color]="series.brush">
                {{item.country}}
            </span>
        </div>
</ng-template>

<ng-template let-series="series" let-item="item" #polylineSeriesTooltipTemplate>
    <div>
        <span [style.color]="series.brush">
            Departure: {{item.origin.country}}
        </span>
        <br/>
        <span [style.color]="series.brush">
            Arrival: {{item.dest.country}}
        </span>
    </div>
</ng-template>
```

```ts
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import WorldUtils from "./WorldUtils" ;
// ...

constructor(props: any) {
    super(props);

    const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
    const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name:"Auckland" };
    const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name:"Santiago" };
    const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" }
    const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name:"Singapore" };
    const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow"};

    this.flights = [
        { origin: cityDAL, dest: citySNG, color: "Green" },
        { origin: cityMOS, dest: cityNZL, color: "Red" },
        { origin: cityCHL, dest: cityJAP, color: "Blue" },
    ];

    for (const flight of this.flights) {
        this.createPolylineSeries(flight);
        this.createSymbolSeries(flight);
    }
}

public createSymbolSeries(flight: any)
{
    const geoLocations = [flight.origin, flight.dest ];
    const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
    symbolSeries.dataSource = geoLocations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = flight.color;
    symbolSeries.thickness = 1;
    this.geoMap.series.add(symbolSeries);
}

public createPolylineSeries(flight: any)
{
    const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
    const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);
    const geoRoutes = [ { points: geoPath } ];
    const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
    lineSeries.dataSource = geoRoutes;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeStrokeThickness = 9;
    lineSeries.shapeOpacity = 0.5;
    lineSeries.shapeStroke = flight.color;
    this.geoMap.series.add(lineSeries);
}


```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-binding-geographic-data-models",
  styleUrls: ["./map-binding-geographic-data-models.component.scss"],
  templateUrl: "./map-binding-geographic-data-models.component.html"
})

export class MapBindingDataModelComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("pointSeriesTemplate")
    public pointSeriesTemplate: TemplateRef<object>;
    @ViewChild("polylineSeriesTooltipTemplate")
    public polylineSeriesTooltipTemplate: TemplateRef<object>;
    public flights: any[];
    constructor() {
    }

    public ngAfterViewInit(): void {
        const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
        const citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
        const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
        const cityQTR = { lat: 25.285, lon:  51.531,  country: "Qatar", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  country: "Panama", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
        const cityALT = { lat: 33.795,  lon: -84.349, country: "US", name: "Atlanta" };
        const cityJOH = { lat: -26.178, lon: 28.004,  country: "South Africa", name: "Johannesburg" };
        const cityNYC = { lat: 40.750, lon: -74.0999, country: "US", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow" };
        const cityROM = { lat:  41.880, lon: 12.520,  country: "Italy", name: "Roma" };
        const cityLAX = { lat: 34.000, lon: -118.25,  country: "US", name: "Los Angeles" };

        this.flights = [
            { origin: cityDAL, dest: citySNG, color: "Green" },
            { origin: cityMOS, dest: cityNZL, color: "Red" },
            { origin: cityCHL, dest: cityJAP, color: "Blue" },
            { origin: cityPAN, dest: cityROM, color: "Orange" },
            { origin: cityALT, dest: cityJOH, color: "Black" },
            { origin: cityNYC, dest: cityQTR, color: "Purple" },
            { origin: cityLAX, dest: citySYD, color: "Gray" }
        ];

        for (const flight of this.flights) {
            this.createPolylineSeries(flight);
            this.createSymbolSeries(flight);
        }
    }

    public createSymbolSeries(flight: any) {
        const geoLocations = [flight.origin, flight.dest ];
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = flight.color;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointSeriesTemplate;

        this.map.series.add(symbolSeries);
    }

    public createPolylineSeries(flight: any) {
        const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
        const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);
        const geoRoutes = [
            {
              dest: flight.dest,
              distance: geoDistance,
              origin: flight.origin,
              points: geoPath,
              time: geoDistance / 850
        }];

        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = geoRoutes;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStrokeThickness = 9;
        lineSeries.shapeOpacity = 0.5;
        lineSeries.shapeStroke = flight.color;
        lineSeries.tooltipTemplate = this.polylineSeriesTooltipTemplate;
        this.map.series.add(lineSeries);
    }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```


```ts
public flights: any[];

constructor() {
    super();

    const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
    const citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
    const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
    const cityQTR = { lat: 25.285, lon:  51.531,  country: "Qatar", name: "Doha" };
    const cityPAN = { lat:  8.949, lon: -79.400,  country: "Panama", name: "Panama" };
    const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
    const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
    const cityALT = { lat: 33.795,  lon: -84.349, country: "US", name: "Atlanta" };
    const cityJOH = { lat: -26.178, lon: 28.004,  country: "South Africa", name: "Johannesburg" };
    const cityNYC = { lat: 40.750, lon: -74.0999, country: "US", name: "New York" };
    const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name: "Singapore" };
    const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow" };
    const cityROM = { lat:  41.880, lon: 12.520,  country: "Italy", name: "Roma" };
    const cityLAX = { lat: 34.000, lon: -118.25,  country: "US", name: "Los Angeles" };

    this.flights = [
        { origin: cityDAL, dest: citySNG, color: "Green" },
        { origin: cityMOS, dest: cityNZL, color: "Red" },
        { origin: cityCHL, dest: cityJAP, color: "Blue" },
        { origin: cityPAN, dest: cityROM, color: "Orange" },
        { origin: cityALT, dest: cityJOH, color: "Black" },
        { origin: cityNYC, dest: cityQTR, color: "Purple" },
        { origin: cityLAX, dest: citySYD, color: "Gray" },
    ];
}

connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    for (const flight of this.flights) {
        this.createPolylineSeries(flight);
        this.createSymbolSeries(flight);
    }
}

createSymbolSeries(flight: any)
{
    const geoLocations = [flight.origin, flight.dest ];
    const symbolSeries = new IgcGeographicSymbolSeriesComponent();
    symbolSeries.dataSource = geoLocations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = flight.color;
    symbolSeries.thickness = 1;
    this.geoMap.series.add(symbolSeries);
}

createPolylineSeries(flight: any)
{
    const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
    const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);

    const geoRoutes = [
        { points: geoPath ,
          origin: flight.origin,
          dest: flight.dest,
          distance: geoDistance,
          time: geoDistance / 850,
    }];

    const lineSeries = new IgcGeographicPolylineSeriesComponent();
    lineSeries.dataSource = geoRoutes;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeStrokeThickness = 9;
    lineSeries.shapeOpacity = 0.5;
    lineSeries.shapeStroke = flight.color;

    this.geoMap.series.add(lineSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    @for (int i = 0; i < this.DataSource.Count; i++)
    {
        FlightInfo info = this.DataSource[i];
        List<WorldCity> symbolData = new List<WorldCity>() { info.Origin, info.Dest };

        GeoLocation geoOrigin = new GeoLocation() { Lat = info.Origin.Lat, Lon = info.Origin.Lon };
        GeoLocation geoDest = new GeoLocation() { Lat = info.Dest.Lat, Lon = info.Dest.Lon };

        List<List<Point>> geoPath = WorldUtils.CalcPaths(geoOrigin, geoDest);
        double geoDistance = WorldUtils.CalcDistance(geoOrigin, geoDest);

        FlightInfo route = new FlightInfo()
        {
            Points =  geoPath,
            Origin = info.Origin,
            Dest = info.Dest,
            Distance = geoDistance,
            Time = geoDistance / 850
        };

        List<FlightInfo> geoRoute = new List<FlightInfo>() { route };

        <IgbGeographicSymbolSeries DataSource="@symbolData" MarkerType="MarkerType.Circle"
                                LatitudeMemberPath="Lat" LongitudeMemberPath="Lon"
                                MarkerBrush="White" MarkerOutline="@info.Color"
                                Thickness="1">
        </IgbGeographicSymbolSeries>
        <IgbGeographicPolylineSeries DataSource="@geoRoute" ShapeMemberPath="Points"
                                  ShapeStrokeThickness="9" ShapeOpacity="0.5"
                                  ShapeStroke="@info.Color">
        </IgbGeographicPolylineSeries>
    }
</IgbGeographicMap>

@code {

    private List<FlightInfo> DataSource;

    protected override void OnInitialized()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);

        WorldCity cityDAL = new WorldCity() { Lat = 32.763, Lon = -96.663, Country = "US", Name = "Dallas" };
        WorldCity citySYD = new WorldCity() { Lat = -33.889, Lon = 151.028, Country = "Australia", Name = "Sydney" };
        WorldCity cityNZL = new WorldCity() { Lat = -36.848, Lon = 174.763, Country = "New Zealand", Name = "Auckland" };
        WorldCity cityQTR = new WorldCity() { Lat = 25.285, Lon = 51.531, Country = "Qatar", Name = "Doha" };
        WorldCity cityPAN = new WorldCity() { Lat = 8.949, Lon = -79.400, Country = "Panama", Name = "Panama" };
        WorldCity cityCHL = new WorldCity() { Lat = -33.475, Lon = -70.647, Country = "Chile", Name = "Santiago" };
        WorldCity cityJAP = new WorldCity() { Lat = 35.683, Lon = 139.809, Country = "Japan", Name = "Tokyo" };
        WorldCity cityALT = new WorldCity() { Lat = 33.795, Lon = -84.349, Country = "US", Name = "Atlanta" };
        WorldCity cityJOH = new WorldCity() { Lat = -26.178, Lon = 28.004, Country = "South Africa", Name = "Johannesburg" };
        WorldCity cityNYC = new WorldCity() { Lat = 40.750, Lon = -74.0999, Country = "US", Name = "New York" };
        WorldCity citySNG = new WorldCity() { Lat = 1.229, Lon = 104.177, Country = "Singapore", Name = "Singapore" };
        WorldCity cityMOS = new WorldCity() { Lat = 55.750, Lon = 37.700, Country = "Russia", Name = "Moscow" };
        WorldCity cityROM = new WorldCity() { Lat = 41.880, Lon = 12.520, Country = "Italy", Name = "Roma" };
        WorldCity cityLAX = new WorldCity() { Lat = 34.000, Lon = -118.25, Country = "US", Name = "Los Angeles" };

        this.DataSource = new List<FlightInfo>() {
            new FlightInfo(){ Origin = cityDAL, Dest = citySNG, Color = "Green" },
            new FlightInfo(){ Origin = cityMOS, Dest = cityNZL, Color = "Red" },
            new FlightInfo(){ Origin = cityCHL, Dest = cityJAP, Color = "Blue" },
            new FlightInfo(){ Origin = cityPAN, Dest = cityROM, Color = "Orange" },
            new FlightInfo(){ Origin = cityALT, Dest = cityJOH, Color = "Black" },
            new FlightInfo(){ Origin = cityNYC, Dest = cityQTR, Color = "Purple" },
            new FlightInfo(){ Origin = cityLAX, Dest = citySYD, Color = "Gray" },
        };
    }

    public class WorldCity
    {
        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public bool Cap { get; set; }
    }

    public class FlightInfo
    {
        public string ID { get; set; }
        public WorldCity Origin { get; set; }
        public WorldCity Dest { get; set; }
        public double Time { get; set; }
        public double Passengers { get; set; }
        public double Distance { get; set; }
        public List<List<Point>> Points { get; set; }
        public string Color { get; set; }
    }
}
```
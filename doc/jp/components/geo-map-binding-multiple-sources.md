---
title: {Platform} マップ | データ可視化ツール | 複数のデータ ソースのバインディング | インフラジスティックス
_description: インフラジスティックスの {Platform} JavaScript マップを使用して、複数の地理的シリーズオブジェクトを追加し、カスタム データ ソースを地理空間データとオーバーレイすることができます。{ProductName} マップ チュートリアルを是非お試しください!
_keywords: {Platform} map, geographic series, {ProductName}, Infragistics, data binding, {Platform} マップ, 地理的シリーズ, データ バインディング, インフラジスティックス
mentionedTypes: ["XamGeographicMap", "SeriesViewer", "Series", "GeographicShapeSeriesBase"]
_language: ja
---
# {Platform} 複数データ ソースのバインド

{ProductName} マップでは、カスタム データ ソースを地理空間データとオーバーレイするために複数の地理的シリーズ オブジェクトを追加できます。たとえば、空港の地理的位置をプロットするための `GeographicSymbolSeries`、空港間のフライトをプロットするための `GeographicPolylineSeries`、主要な地理座標のグリッド線をプロットするための別の `GeographicPolylineSeries` などです。


## {Platform} 複数データ ソースのバインドの例


`sample="/maps/geo-map/binding-multiple-sources", height="500", alt="{Platform} 複数データ ソースのバインドの例"`



<div class="divider--half"></div>

このトピックでは、以下の地理空間データをプロットする複数の地理的シリーズを表示するための手順を説明します。

- `GeographicSymbolSeries` – 主要空港の場所を表示します。
- `GeographicPolylineSeries` – 空港間のフライトを表示します。
- `GeographicPolylineSeries` – 主座標のグリッド線を表示します。

目的のデータをプロットするために、地理的シリーズをこの組み合わせまたは他の組み合わせでも使用できます。

## データ ソースの作成

{ProductName} マップに表示するすべての地理的シリーズのデータ​​ソースを作成します。たとえば、[WorldConnections](geo-map-resources-world-connections.md) スクリプトを使用できます。


```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>
            Arrival: {{item.origin.country}}
            </span>
            <br/>
            <span>
            Destination: {{item.dest.country}}
            </span>
            <br/>
            <span>
            Distance: {{item.distance}} miles
            </span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
            <div>
                <span>
                {{item?.country}}
                </span>
                <br />
                <span>
                {{item?.name}}
                </span>
                <br />
                <span>
                Population: {{item.pop}} M
                </span>
                <br/>
                <span>
                Flights: {{item.flights}}
                </span>
            </div>
        </ng-template>
```

```ts
import WorldConnections from "./WorldConnections";
// ..

public onMapReferenced(map: IgrGeographicMap) {
    this.geoMap = map;

    const worldFlights: any[] = WorldConnections.getFlights();
    const worldAirports: any[] = WorldConnections.getAirports();
    const worldGridlines: any[] = WorldConnections.getGridlines();

    // create and overlay geographic series here
}
```

```razor
@code {

    public List<WorldCity> Airports;
    public List<FlightInfo> Flights;
    public List<CoordinateLine> Coordinates;

    protected override void OnInitialized()
    {
        Airports = WorldConnections.GetAirports();
        Flights = WorldConnections.GetFlights();
        Coordinates = WorldConnections.GetGridlines();
    }
}
```

## フライトのオーバーレイ

主要空港間のフライト接続を持つ最初の `GeographicPolylineSeries` オブジェクトを作成し、{ProductName} マップの Series コレクションに追加します。

```html
<igx-geographic-polyline-series  #polylineSeries
        [tooltipTemplate]="polylineTooltipTemplate"
                name="polylineSeries"
                shapeMemberPath="points"
                shapeStroke="rgba(147, 15, 180, 0.5)"
                thickness={3.0} >
</igx-geographic-polyline-series>
```

```ts
const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
lineSeries.dataSource = worldFlights;
lineSeries.shapeMemberPath = "points";
lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
lineSeries.shapeStrokeThickness = 4;
this.geoMap.series.add(lineSeries);
```

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries DataSource="Flights" ShapeMemberPath="Points"
        ShapeStroke="rgba(196, 14, 14, 0.05)" ShapeStrokeThickness="4" />
</IgbGeographicMap>
```

## グリッド線のオーバーレイ

地理グリッド線を使用して2番目の `GeographicPolylineSeries` オブジェクトを作成し、それを XamGeographicMap の Series コレクションに追加します。

```html
  <igx-geographic-polyline-series  #polylineSeries
            [tooltipTemplate]="polylineTooltipTemplate"
                 datasource = worldFlights
                 name="polylineSeries"
                 shapeMemberPath="points"
                 shapeStroke="rgba(196, 14, 14,0.05)"
                 thickness={3.0} >
    </igx-geographic-polyline-series>
```

```ts
const gridSeries = new IgrGeographicPolylineSeries( { name: "gridSeries" });
gridSeries.dataSource = worldGridlines;
gridSeries.shapeMemberPath = "points";
gridSeries.shapeStroke = "Gray";
gridSeries.shapeStrokeThickness = 1;
this.geoMap.series.add(gridSeries);
```

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries DataSource="Coordinates" ShapeMemberPath="Points"
        ShapeStroke="Gray" ShapeStrokeThickness="1" />
</IgbGeographicMap>
```

## 空港のオーバーレイ

空港ポイントを使用して `GeographicSymbolSeries` オブジェクトを作成し、それを {ProductName} 地理マップの Series コレクションに追加します。

```html
<igx-geographic-symbol-series  #symbolSeries
    name="symbolSeries"
    longitudeMemberPath="longitude"
    latitudeMemberPath="latitude"
    markerType="Circle"
    markerOutline="rgb(73, 73, 73)"
    markerBrush="White" >
</igx-geographic-symbol-series>
```

```ts
const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
symbolSeries.dataSource = worldAirports;
symbolSeries.markerType = MarkerType.Circle;
symbolSeries.latitudeMemberPath = "lat";
symbolSeries.longitudeMemberPath = "lon";
symbolSeries.markerBrush = "#aad3df";
symbolSeries.markerOutline = "rgb(73, 73, 73)";
this.geoMap.series.add(symbolSeries);
```

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicSymbolSeries DataSource="Airports" LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon" MarkerType="MarkerType.Circle"
        MarkerBrush="#AAD3DF" MarkerOutline="Black" Thickness="1" />
</IgbGeographicMap>
```

## まとめ

上記すべてのコード スニペットを以下のコード ブロックにまとめて、プロジェクトに簡単にコピーできます。

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldConnections } from "../../utilities/WorldConnections";

@Component({
  selector: "app-map-binding-multiple-data-sources",
  styleUrls: ["./map-binding-multiple-data-sources.component.scss"],
  templateUrl: "./map-binding-multiple--data-sources.component.html"
})

export class MapBindingMultipleSourcesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("polylineTooltipTemplate")
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate")
    public pointTooltipTemplate: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.map.windowRect = { left: 0.195, top: 0.1, width: 0.5, height: 0.5 };

      const worldFlights = WorldConnections.getFlights();
      const worldAirports = WorldConnections.getAirports();
      const worldGridlines = WorldConnections.getGridlines();

      this.addPolylineSeriesWith(worldFlights);
      this.addGridlineSeriesWith(worldGridlines);
      this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data: any[]) {
        const gridSeries = new IgxGeographicPolylineSeriesComponent();
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        this.map.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data: any[]) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.polylineTooltipTemplate;
        this.map.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data: any[]) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
        this.map.series.add(symbolSeries);
    }
}
```

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries DataSource="Flights" ShapeMemberPath="Points"
        ShapeStroke="rgba(196, 14, 14, 0.05)" ShapeStrokeThickness="4" />
    <IgbGeographicPolylineSeries DataSource="Coordinates" ShapeMemberPath="Points"
        ShapeStroke="Gray" ShapeStrokeThickness="1">
    </IgbGeographicPolylineSeries>
    <IgbGeographicSymbolSeries DataSource="Airports" LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon" MarkerType="MarkerType.Circle"
        MarkerBrush="#AAD3DF" MarkerOutline="Black" Thickness="1" />
</IgbGeographicMap>

@code {

    private List<WorldCity> Airports;
    private List<FlightInfo> Flights;
    private List<CoordinateLine> Coordinates;

    protected override void OnInitialized()
    {
        Airports = WorldConnections.GetAirports();
        Flights = WorldConnections.GetFlights();
        Coordinates = WorldConnections.GetGridlines();
    }
}
```

## API リファレンス

 - `GeographicPolylineSeries`
 - `GeographicSymbolSeries`
---
title: {Platform} マップ | データ可視化ツール | 地理的シェープ ファイルのバインディング | インフラジスティックス
_description: インフラジスティックスの {Platform} JavaScript マップを使用して、シェイプ ファイルから地理空間データを読み込みます。{ProductName} マップのサンプルを是非お試しください!
_keywords: {Platform} map, shapefiles, {ProductName}, Infragistics, data binding, {Platform} マップ, シェープファイル, データ バインディング, インフラジスティックス
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_language: ja
---
# {Platform} シェープ ファイルを地理的データにバインディング

{ProductName} Map コンポーネントの `ShapefileConverter` クラスは、形状ファイルから地理空間データ (ポイント/位置、ポリライン、ポリゴン) を読み込み、それを `ShapefileRecord` オブジェクトのコレクションに変換します。


## {Platform} シェープ ファイルを地理的データにバインディングの例


`sample="/maps/geo-map/binding-shp-polylines", height="500", alt="{Platform} シェープ ファイルを地理的データにバインディングの例"`



<div class="divider--half"></div>

以下の表は、シェイプ ファイルを読み込むための `ShapefileConverter` クラスのプロパティを説明します。


| プロパティ | 型 | 概要   |
|----------|------|---------------|
| `ShapefileSource` | string |シェイプ ファイル(.shp) から読み込まれた 1 つの地理空間シェープにすべてのポイントが含まれます。|
|`DatabaseSource` | string |たとえば、シェープファイルで日本は、以下でポイント オブジェクト リストのリストとして表されます。|

<!-- TODO add for WPF only: -->
<!-- Both of the source properties for shape files are of Uri type. This means that shape files can be embedded resources in the application assembly and on the internet (via http). Refer to the previous section for more information on this process. The rules for resolving Uri objects are equivalent to any standard Uri property, for example the BitmapImage.UriSource property. -->

両方のソース プロパティが null 以外の値に設定されると、`ShapefileConverter` オブジェクトの ImportAsync メソッドが起動し、シェイプ ファイルを取得して読み込み、最終的に変換を実行します。この操作が完了すると、`ShapefileConverter` は `ShapefileRecord` オブジェクトで生成され、シェイプ ファイルから地理空間データを読み込んで変換するプロセスが完了したことを通知するために、`ImportCompleted` イベントが起動されます。

## シェープファイルの読み込み
以下のコードは、世界の主要都市の場所を含むシェイプ ファイルを読み込むための `ShapefileConverter` オブジェクトのインスタンスを作成します。また、xamGeographicMap コントロールにデータをバインドするための前提条件として `ImportCompleted` イベントを処理する方法も示します。

```html
 TODO - ADD CODE SNIPPET
```

```ts
import { IgrShapeDataSource } from 'igniteui-react-core';
// ...

const sds = new IgrShapeDataSource();
sds.importCompleted = this.onShapePolylinesLoaded;
sds.shapefileSource = url + "/shapes/WorldCableRoutes.shp";
sds.databaseSource  = url + "/shapes/WorldCableRoutes.dbf";
sds.dataBind();
```

## シェープファイルをバインド
Map コンポーネントでは、Geographic Series は、シェイプ ファイルから読み込まれる地理的データを表示するために使用されます。すべてのタイプの地理的シリーズには、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。`ShapefileConverter` は `ShapefileRecord` オブジェクトのリストを含むため、このような配列の例です。

`ShapefileRecord` クラスは、以下の表にリストする地理的データを保存するためのプロパティを提供します。

| プロパティ     | 概要   |
|--------------|---------------|
|`Points`|シェイプ ファイル(.shp) から読み込まれた 1 つの地理空間シェープにすべてのポイントが含まれます。たとえば、シェープファイルで日本は、以下でポイント オブジェクト リストのリストとして表されます。<ul><li>ポイントの最初のリストは北海道のシェイプを表します。</li><li>ポイントの 2 番目のリストは本州のシェイプを表します。</li><li>ポイントの 3 番目のリストは九州のシェイプを表します。</li><li>ポイントの 4 番目のリストは四国のシェイプを表します。
</li></ul>|
| `Fields` |列名でキーが付けられたシェイプ データベース ファイル (.dbf) からのデータ行を含みます。たとえば、日本についてのデータには、人口、地域、首都名などが含まれます。|

このデータ構造は、適切なデータ列がマップされている限り、ほとんどの地理的シリーズでの使用に適しています。

## コード スニペット
このコード例は、シェープ ファイルが `ShapefileConverter` を使用して読み込まれたことを前提としています。
以下のコードは、マップ コンポーネント内の `GeographicPolylineSeries` を `ShapefileConverter` にバインドし、すべての `ShapefileRecord` オブジェクトの `Points` プロパティをマップします。

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
                Airline: {{item.name}}
                </span>
                <br />
                <span>
                Length: {{item.distance}} miles
                </span>
            </div>
</ng-template>
```

```ts
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
// ...

public onShapePolylinesLoaded(sds: IgrShapeDataSource, e: any) {
    const geoPolylines: any[] = [];
    for (const record of sds.getPointData()) {
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues["Name"],
                capacity: record.fieldValues["CapacityG"],
                distance: record.fieldValues["DistanceKM"],
                isOverLand: record.fieldValues["OverLand"] === 0,
                isActive: record.fieldValues["NotLive"] !== 0,
                service: record.fieldValues["InService"]
            };
            geoPolylines.push(route);
        }

    const geoSeries = new IgrGeographicPolylineSeries( { name: "series" });
    geoSeries.dataSource = geoPolylines;
    geoSeries.shapeMemberPath = "points";
    geoSeries.shapeFilterResolution = 0.0;
    geoSeries.shapeStrokeThickness = 3;
    geoSeries.shapeStroke = "rgb(82, 82, 82, 0.4)";
    geoSeries.tooltipTemplate = this.createTooltip;
    this.geoMap.series.add(symbolSeries);
}
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-shape-files",
  styleUrls: ["./map-binding-shape-files.component.scss"],
  templateUrl: "./map-binding-shape-files.component.html"
})
export class MapBindingShapefilePolylinesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() { }

    public ngAfterViewInit() {
    // loading a shapefile with geographic polygons
    const sds = new IgxShapeDataSource();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    sds.shapefileSource = "assets/Shapes/WorldCableRoutes.shp";
    sds.databaseSource  = "assets/Shapes/WorldCableRoutes.dbf";
    sds.dataBind();
    }
    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const route = {
                capacity: record.fieldValues["CapacityG"],
                distance: record.fieldValues["DistanceKM"],
                isActive: record.fieldValues["NotLive"] !== 0,
                isOverLand: record.fieldValues["OverLand"] === 0,
                name: record.fieldValues["Name"],
                points: record.points,
                service: record.fieldValues["InService"]
            };
            geoPolylines.push(route);
        }

        const geoSeries = new IgxGeographicPolylineSeriesComponent();
        geoSeries.dataSource = geoPolylines;
        geoSeries.shapeMemberPath = "points";
        geoSeries.shapeFilterResolution = 0.0;
        geoSeries.shapeStrokeThickness = 3;
        geoSeries.shapeStroke = "rgb(82, 82, 82, 0.4)";
        geoSeries.tooltipTemplate = this.tooltipTemplate;

        this.map.series.add(geoSeries);
        }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    const sds = new IgcShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "../shapes/WorldCities.shp";
    sds.databaseSource  = "../shapes/WorldCities.dbf";
    sds.dataBind();
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded WorldCities.shp " + shapeRecords.length);
    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    for (const record of shapeRecords) {
        const pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each shapefile record has just one point
            const location = {
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            };
            geoLocations.push(location);
        }
    }

    const geoSeries = new IgcGeographicSymbolSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.markerType = MarkerType.Circle;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.markerBrush = "LightGray";
    geoSeries.markerOutline = "Black";
    geoSeries.tooltipTemplate = this.createTooltip;

    this.geoMap.series.add(geoSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries ShapefileDataSource="@DataSource"
        ShapeFilterResolution="0.0"
        ShapeStrokeThickness="3"
        ShapeStroke="rgb(82, 82, 82, 0.4)"/>
</IgbGeographicMap>

@code {

    private ShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        this.DataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf"
        };
    }
}
```

## API リファレンス

 - `Fields`
 - `GeographicPolylineSeries`
 - `ImportCompleted`
 - `ItemsSource`
 - `Points`
 - `ShapefileConverter`
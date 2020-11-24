---
title: $PlatformShort$ マップ | データ可視化ツール | シェイプ ポリライン シリーズ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ マップのシェイプ ポリライン シリーズを使用して、都市または空港などの地理的位置間の道路または接続を描画します。$ProductName$ マップ シーリズについての詳細を表示します。
_keywords: $PlatformShort$ map, $ProductName$, shape polyline series, Infragistics, $PlatformShort$ マップ, シェイプ ポリライン シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# $PlatformShort$ シェイプ ポリライン シリーズの使用

地理的コンテキストでポリラインを使用して地理空間データを表示するには、$PlatformShort$ マップ コンポーネントの `GeographicPolylineSeries` を使用します。地理的シリーズのこのタイプは、都市または空港などの地理的位置間の道路または接続を描画するためにしばしば使用されます。

## $PlatformShort$ シェイプ ポリライン シリーズの使用の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-type-shape-polyline-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polyline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ シェイプ ポリライン シリーズの使用の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-shape-polyline-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="maps/geo-map/type-shape-polyline-series"></sample-button>

<div class="divider--half"></div>

`GeographicPolylineSeries` は、`GeographicShapeSeries` とよく似ていますが、地理空間データがポリゴンではなくポリラインでレンダリングされる点が異なります。

## データ要件
コントロール内の他の種類の地理的シリーズと同様に、`GeographicPolylineSeries`  には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、このオブジェクトの各データ項目には、地理的位置を表す x 値と y 値を持つオブジェクトの配列の配列を使用して単一または複数の形状を格納する 1 つのデータ列が必要です。このデータ列は、ShapeMemberPath プロパティにマップされます。`GeographicPolylineSeries` は、コントロールで多角形をプロットするために、このマップされたデータ列のポイントを使用します。

## コード スニペット
以下のコードは、`ShapeDataSource` を使用してシェイプ ファイルからロードした都市の場所に `GeographicPolylineSeries` をバインドする方法を示します。

<!-- React -->
```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';

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
    this.geoMap = map;

    const sds = new IgrShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "/Shapes/AmericanRoads.shp";
    sds.databaseSource  = "/Shapes/AmericanRoads.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {

    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];
    // filtering records of loaded shapefile
    for (const record of sds.getPointData()) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road",
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }
    // creating polyline series for roads of each country
    this.addSeries(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeries(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeries(roadsMEX, "rgba(14, 194, 14, 0.9)");
}

public addSeries(shapeData: any[], shapeBrush: string)
{
    const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
    lineSeries.dataSource = shapeData;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeFilterResolution = 2.0;
    lineSeries.shapeStrokeThickness = 2;
    lineSeries.shapeStroke = shapeBrush;

    this.geoMap.series.add(lineSeries);
}
```

<!-- Angular -->
```html
<div className="sampleRoot" >

        <igx-geographic-map #map
            width="700px"
            height="500px"
            zoomable="true"
            >
        </igx-geographic-map>
</div>
<ng-template let-series="series" let-item="item" #template>
<div>
    <span>
    {{item.country}} {{item.type}}
    </span>
    <br />
    <span>
    Length: {{item.length}} miles
    </span>
</div>
</ng-template>
```

```ts
import { AfterViewInit, Component, EmbeddedViewRef, TemplateRef, ViewChild} from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-shape-polyline-series",
  styleUrls: ["./map-geographic-shape-polyline-series.component.scss"],
  templateUrl: "./map-geographic-shape-polyline-series.component.html"
})

export class MapTypeShapePolylineSeriesComponent implements AfterViewInit {

  @ViewChild ("map")
  public map: IgxGeographicMapComponent;

  @ViewChild("template")
  public tooltip: TemplateRef<object>;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.map.windowRect = { left: 0.195, top: 0.325, width: 0.2, height: 0.1 };

    const sds = new IgxShapeDataSource();
    sds.shapefileSource = "/assets/Shapes/AmericanRoads.shp";
    sds.databaseSource  = "/assets/Shapes/AmericanRoads.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
  }

  public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded /Shapes/AmericanRoads.shp " + shapeRecords.length);

    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];

    // filtering records of loaded shapefile
    for (const record of shapeRecords) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road"
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }

    // creating polyline series for roads of each country
    this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");
}

  public addSeriesWith(shapeData: any[], shapeBrush: string) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = shapeData;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeFilterResolution = 2.0;
        lineSeries.shapeStrokeThickness = 2;
        lineSeries.shapeStroke = shapeBrush;
        lineSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(lineSeries);
    }
}

```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    // loading a shapefile with geographic shapes
    const sds = new IgcShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "../shapes/AmericanRoads.shp";
    sds.databaseSource = "../shapes/AmericanRoads.dbf";
    sds.dataBind();
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded AmericanRoads.shp " + shapeRecords.length);
    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];
    // filtering records of loaded shapefile
    for (const record of shapeRecords) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road",
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }
    // creating polyline series for roads of each country
    this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");
}
public addSeriesWith(shapeData: any[], shapeBrush: string) {
    const lineSeries = new IgcGeographicPolylineSeriesComponent();
    lineSeries.dataSource = shapeData;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeFilterResolution = 2.0;
    lineSeries.shapeStrokeThickness = 2;
    lineSeries.shapeStroke = shapeBrush;

    this.geoMap.series.add(lineSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<GeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicPolylineSeries Outline="Red" ShapefileDataSource="DataSource" />
</GeographicMap>

@code {

    public ShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        GeographicMapModule.Register(IgniteUIBlazor);

        this.DataSource = new ShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf"
        };        
    }
}
```

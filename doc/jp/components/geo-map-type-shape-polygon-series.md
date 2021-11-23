---
title: $Platform$ マップ | データ可視化ツール | シェイプ ポリゴン シリーズ | インフラジスティックス
_description: インフラジスティックスの $Platform$ マップのシェイプ ポリゴン シリーズを使用して、地理的位置によって定義される国または地域の図形を描画します。$ProductName$ マップ シーリズについての詳細を表示します。
_keywords: $Platform$ map, shape polygon series, $ProductName$, Infragistics, $Platform$ マップ, シェイプ ポリゴン シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

# $Platform$ シェイプ ポリゴン シリーズの使用

地理的コンテキストで形状ポリゴンを使用して地理空間データを表示するには、$Platform$ マップ コンポーネントの `GeographicShapeSeries` を使用します。地理的シリーズのこのタイプは、地理的位置で定義される国々または領域の図形を描画するためにしばしば使用されます。

## $Platform$ シェイプ ポリゴン シリーズの使用の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polygon-series"
           alt="$Platform$ シェイプ ポリゴン シリーズの使用の例"
           github-src="maps/geo-map/type-shape-polygon-series">
</code-view>

<div class="divider--half"></div>

`GeographicShapeSeries` は、地理空間データがポリラインではなくポリゴンでレンダリングされる以外、`GeographicPolylineSeries` とほとんど同じです。

## データ要件
マップコントロールの他の種類の地理的シリーズと同様に、`GeographicShapeSeries` には、オブジェクトの配列にバインドできる `DataSource` プロパティがあります。さらに、このオブジェクトの各データ項目には、地理的位置を表す x 値と y 値を持つオブジェクトの配列の配列を使用して単一または複数の形状を格納する 1 つのデータ列が必要です。このデータ列は、`ShapeMemberPath` プロパティにマップされます。`GeographicShapeSeries` は、マップされたデータ列の点を使用してマップコントロールにポリゴンをプロットします。

## コード スニペット
以下のコードは、`ShapeDataSource` を使用してシェイプ ファイルからロードした世界の国々の図形に `GeographicShapeSeries` をバインドする方法を示します。

<!-- React -->
```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
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
    sds.shapefileSource = "/shapes/WorldCountries.shp";
    sds.databaseSource  = "/shapes/WorldCountries.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {
    const countriesNATO: any[] = [];
    const countriesSCO: any[] = [];
    const countriesARAB: any[] = [];
    const countriesOther: any[] = [];

    for (const record of sds.getPointData()) {
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.Name,
            org: record.fieldValues.Alliance,
            pop: record.fieldValues.Population
        };
        const group = record.fieldValues.Alliance;
        if (group === "NATO") {
            countriesNATO.push(country);
        } else if (group === "SCO") {
            countriesSCO.push(country);
        } else if (group === "ARAB LEAGUE") {
            countriesARAB.push(country);
        } else {
            countriesOther.push(country);
        }
    }
    this.createSeries(countriesNATO, "rgb(32, 146, 252)", "NATO");
    this.createSeries(countriesSCO, "rgb(252, 32, 32)", "SCO");
    this.createSeries(countriesARAB, "rgb(14, 194, 14)", "AL");
    this.createSeries(countriesOther, "rgb(146, 146, 146)", "Other");
}

public createSeries(shapeData: any[], shapeBrush: string, shapeTitle: string)
{
    const seriesName = shapeTitle + "series";
    const geoSeries = new IgrGeographicShapeSeries( { name: seriesName });
    geoSeries.dataSource = shapeData;
    geoSeries.shapeMemberPath = "points";
    geoSeries.brush = shapeBrush;
    geoSeries.outline = "Black";
    geoSeries.thickness = 1;
    geoSeries.title = shapeTitle;
    this.geoMap.series.add(geoSeries);
}
```

<!-- Angular -->
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
        <div *ngIf="item.org;then hasOrg; else notOrg" ></div>
        <span [style.color]="series.brush">
            {{item.name}}
        </span>
        <br/>
        <span>
            Population {{item.pop}} M
        </span>
    </div>
    <ng-template #hasOrg>
        <span>
            Population {{item.pop}} M
        </span>
        <br />
    </ng-template>
        <ng-template #notOrg>
        <span>
        </span>
        </ng-template>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicShapeSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-shape-polygon-series",
  styleUrls: ["./map-geographic-shape-polygon-series.component.scss"],
  templateUrl: "./map-geographic-shape-polygon-series.component.html"
})
export class MapTypeShapePolygonSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      const sds = new IgxShapeDataSource();
      sds.shapefileSource = "assets/Shapes/WorldCountries.shp";
      sds.databaseSource  = "assets/Shapes/WorldCountries.dbf";
      sds.dataBind();
      sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded /Shapes/WorldCountries.shp " + shapeRecords.length);

        const countriesNATO: any[] = [];
        const countriesSCO: any[] = [];
        const countriesARAB: any[] = [];
        const countriesOther: any[] = [];

        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                name: record.fieldValues.NAME,
                org: record.fieldValues.ALLIANCE,
                points: record.points,
                pop: record.fieldValues.POPULATION
            };

            const group = record.fieldValues.ALLIANCE;
            if (group === "NATO") {
                countriesNATO.push(country);
            } else if (group === "SCO") {
                countriesSCO.push(country);
            } else if (group === "ARAB LEAGUE") {
                countriesARAB.push(country);
            } else {
                countriesOther.push(country);
            }
        }

        this.addSeriesWith(countriesNATO, "rgb(32, 146, 252)", "NATO");
        this.addSeriesWith(countriesSCO, "rgb(252, 32, 32)", "SCO");
        this.addSeriesWith(countriesARAB, "rgb(14, 194, 14)", "AL");
        this.addSeriesWith(countriesOther, "rgb(146, 146, 146)", "Other");
  }

    public addSeriesWith(shapeData: any[], shapeBrush: string, shapeTitle: string) {
        const seriesName = shapeTitle + "series";
        const geoSeries = new IgxGeographicShapeSeriesComponent();
        geoSeries.dataSource = shapeData;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = shapeBrush;
        geoSeries.outline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.thickness = 1;
        geoSeries.title = shapeTitle;

        this.map.series.add(geoSeries);
  }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    // loading a shapefile with geographic shapes
    const sds = new IgcShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "../shapes/WorldCountries.shp";
    sds.databaseSource  = "../shapes/WorldCountries.dbf";
    sds.dataBind();
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    const countriesNATO: any[] = [];
    const countriesSCO: any[] = [];
    const countriesARAB: any[] = [];
    const countriesOther: any[] = [];
    for (const record of shapeRecords) {
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.NAME,
            org: record.fieldValues.ALLIANCE,
            pop: record.fieldValues.POPULATION
        };
        const group = record.fieldValues.ALLIANCE;
        if (group === "NATO") {
            countriesNATO.push(country);
        } else if (group === "SCO") {
            countriesSCO.push(country);
        } else if (group === "ARAB LEAGUE") {
            countriesARAB.push(country);
        } else {
            countriesOther.push(country);
        }
    }
    this.createSeries(countriesNATO, "rgb(32, 146, 252)", "NATO");
    this.createSeries(countriesSCO, "rgb(252, 32, 32)", "SCO");
    this.createSeries(countriesARAB, "rgb(14, 194, 14)", "AL");
    this.createSeries(countriesOther, "rgb(146, 146, 146)", "Other");
}

createSeries(shapeData: any[], shapeBrush: string, shapeTitle: string)
{
    const seriesName = shapeTitle + "series";
    const geoSeries = new IgcGeographicShapeSeriesComponent();
    geoSeries.dataSource = shapeData;
    geoSeries.shapeMemberPath = "points";
    geoSeries.brush = shapeBrush;
    geoSeries.outline = "Black";
    geoSeries.thickness = 1;
    geoSeries.title = shapeTitle;

    this.geoMap.series.add(geoSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicShapeSeries ShapefileDataSource="DataSource"/>
</IgbGeographicMap>

@code {

    public IgbShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);

        this.DataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf"
        };
    }
}
```

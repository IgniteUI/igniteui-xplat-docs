---
title: $Platform$ マップ | データ可視化ツール | 散布等高線シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $Platform$ マップの散布等高線シリーズを使用して、各点に数値が割り当てられた経度および緯度データの三角測量に基づいて、地理的なコンテキストで色付きの等高線を描画します。$ProductName$ マップ シーリズについての詳細を表示します。
_keywords: $Platform$ map, scatter contour series, $ProductName$, Infragistics, $Platform$ マップ, 散布等高線シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap','GeographicContourLineSeries','CustomPaletteColorScale']
_language: ja
---
# $Platform$ 散布等高線シリーズの使用

$Platform$ マップ コンポーネントの `GeographicContourLineSeries` を使用して、各点に数値が割り当てられた経度および緯度データの三角測量に基づいて、地理的なコンテキストで色付きの等高線を描画します。このタイプの地理的シリーズは、天気の気温、気圧、降水量、人口分布、地形データなどの地理的位置によって定義される散在データをレンダリングするのに役立ちます。

## $Platform$ 散布等高線シリーズの使用の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-contour-series"
           alt="$Platform$ 散布等高線シリーズの使用の例"
           github-src="maps/geo-map/type-scatter-contour-series">
</code-view>

<div class="divider--half"></div>

`GeographicContourLineSeries` は `GeographicScatterAreaSeries` とよく似ていますが、塗りつぶしスケールを使用して色付けされた等高線としてデータを表し、地理散布エリア シリーズはカラースケールを使用して補間された面としてデータを表します。

## データ要件
マップコンポーネントの他の種類の地理的シリーズと同様に、`GeographicContourLineSeries` には、オブジェクトの配列にバインドできる `DataSource` プロパティがあります。さらに、項目ソースの各項目にはデータ列が 3 つあり、2 つは地理的位置 (経度および緯度座標) を保管し、1 つのデータ列は地理的位置に関連した値を保管します。これらのデータ列は、地理的シリーズの `LongitudeMemberPath`、`LatitudeMemberPath` および `ValueMemberPath` プロパティによって識別されます。
`GeographicContourLineSeries` は、三角測量が `TrianglesSource` プロパティに設定されていない場合、ItemsSource の項目で定義済みのデータ三角測量を自動的に実行します。ただし、三角測量の計算は非常に時間のかかるプロセスであるため、このプロパティのために `TriangulationSource` を指定すると、ランタイム パフォーマンスがよくなります。特にデータ項目が多数ある場合には顕著です。

## データ バインディング
以下の表は、データ バインドに使用される `GeographicContourLineSeries` プロパティの概要です。

| プロパティ名  | プロパティ型   | 概要   |
|--------------|---------------| ---------------|
|`DataSource`|任意|`TrianglesSource` プロパティが三角測量データを提供しない場合に三角測量を実行するデータ項目のソースです。|
|`LongitudeMemberPath`|文字列|`DataSource` にバインドされているすべての項目の経度を含むプロパティの名前。|
|`LatitudeMemberPath`|文字列|`DataSource` にバインドされているすべての項目の Latitude を含むプロパティの名前。|
|`ValueMemberPath`|文字列|各データ項目の緯度および経度座標の値を含むプロパティの名前。`FillScale` プロパティが設定されている場合、この数値は色に変換されます。|
|`TrianglesSource`|任意|三角測量データのソースを取得または設定します。TriangulationSource オブジェクトの Triangles をこのプロパティに設定すると、ランタイムパフォーマンスと地理的シリーズレンダリングの両方が向上します。|
|`TriangleVertexMemberPath1`|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|
|`TriangleVertexMemberPath2`|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|
|`TriangleVertexMemberPath3`|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、TrianglesSource 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|

## 等高線の塗りつぶしスケール
`GeographicContourLineSeries` の `FillScale` を使用して地理的シリーズの等高線の塗りブラシを解決します。
ValueBrushScale クラスは、ユーザーの色分けのニーズもほとんどを満たすはずですが、カスタムの色分けロジックのアプリケーションで ValueBrushScale クラスを継承できます。
以下の表は、GeographicContourLineSeries のサーフェス カラーリングに影響を与える CustomPaletteColorScale のプロパティの一覧です。

| プロパティ名  | プロパティ型   | 概要   |
|--------------|---------------| ---------------|
|`Brushes`|BrushCollection|`GeographicContourLineSeries` の輪郭を塗りつぶすためのブラシのコレクションを取得または設定します。|
|`MaximumValue`|double|塗りつぶしスケールでブラシを割り当てるための最高値。|
|`MinimumValue`|double|塗りつぶしスケールでブラシを割り当てるための最低値。|

## コード スニペット

以下のコードは、`GeographicContourLineSeries` を世界の表面温度を表す三角測量データにバインドする方法を示しています。

<!-- React -->
```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicContourLineSeries } from 'igniteui-react-maps';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
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
    this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };
    const sds = new IgrShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {
    const contourPoints: any[] = [];
    for (const record of sds.getPointData()) {
        const temp = record.fieldValues.Contour;
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

    this.createContourSeries(contourPoints);
}

public createContourSeries(data: any[])
{
    const brushes = [
        "rgba(32, 146, 252, 0.5)",
        "rgba(14, 194, 14, 0.5)",
        "rgba(252, 120, 32, 0.5)",
        "rgba(252, 32, 32, 0.5)",
    ];

    const brushScale = new IgrValueBrushScale({});
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const contourSeries = new IgrGeographicContourLineSeries( { name: "contourSeries" });
    contourSeries.dataSource = data;
    contourSeries.longitudeMemberPath = "lon";
    contourSeries.latitudeMemberPath = "lat";
    contourSeries.valueMemberPath = "value";
    contourSeries.fillScale = brushScale;
    contourSeries.thickness = 4;

    this.geoMap.series.add(contourSeries);
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
    <span [style.color]="series.brush">
        {{item | number: 2}} "°C"
    </span>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicContourLineSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-scatter-contour-series",
  styleUrls: ["./map-geographic-scatter-contour-series.component.scss"],
  templateUrl: "./map-geographic-scatter-contour-series.component.html"
})

export class MapTypeScatterContourSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild ("template")
    public tooltip: TemplateRef<object>;
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

        this.createContourSeries(contourPoints);
    }

    public createContourSeries(data: any[]) {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)"  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const contourSeries = new IgxGeographicContourLineSeriesComponent();
        contourSeries.dataSource = data;
        contourSeries.longitudeMemberPath = "lon";
        contourSeries.latitudeMemberPath = "lat";
        contourSeries.valueMemberPath = "value";
        contourSeries.fillScale = brushScale;
        contourSeries.tooltipTemplate = this.tooltip;
        contourSeries.thickness = 4;

        this.map.series.add(contourSeries);
    }
}

```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicContourLineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcValueBrushScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    const sfc = new IgcShapeDataSource();
    sfc.importCompleted = this.onDataLoaded;
    sfc.shapefileSource = "../shapes/WorldTemperatures.shp");
    sfc.databaseSource = "../shapes/WorldTemperatures.dbf");
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
        const temp = record.fieldValues.Contour;
        // using only major contours (every 10th degrees Celsius)
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                for (let i = 0; i < shapes.count; i++) {
                    if (i % 5 === 0) {
                        const point = shapes[i];
                        const item = { lon: point.x, lat: point.y, value: temp };
                        contourPoints.push(item);
                    }
                }
            }
        }
    }
    this.createContourSeries(contourPoints);
}

createContourSeries(data: any[])
{
    const brushes = [
        "rgba(32, 146, 252, 0.5)", // semi-transparent blue
        "rgba(14, 194, 14, 0.5)",  // semi-transparent green
        "rgba(252, 120, 32, 0.5)", // semi-transparent orange
        "rgba(252, 32, 32, 0.5)",  // semi-transparent red
    ];

    const brushScale = new IgcValueBrushScaleComponent();
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const contourSeries = new IgcGeographicContourLineSeriesComponent();
    contourSeries.dataSource = data;
    contourSeries.longitudeMemberPath = "lon";
    contourSeries.latitudeMemberPath = "lat";
    contourSeries.valueMemberPath = "value";
    contourSeries.fillScale = brushScale;
    contourSeries.thickness = 4;

    this.geoMap.series.add(contourSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicContourLineSeries LongitudeMemberPath="Lon"
        LatitudeMemberPath="Lat"
        ValueMemberPath="Value"
        FillScale="@BrushScale"
        DataSource="@Data"
        Thickness="2">
    </IgbGeographicContourLineSeries>
</IgbGeographicMap>

@code {
    private List<Location> Data;
    private ValueBrushScale BrushScale;

    protected override void OnInitialized()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);

        var brushes = "";
        brushes += "rgba(32, 146, 252, 0.5) "; // semi-transparent blue
        brushes += "rgba(14, 194, 14, 0.5) ";  // semi-transparent green
        brushes += "rgba(252, 120, 32, 0.5) "; // semi-transparent orange
        brushes += "rgba(252, 32, 32, 0.5) ";  // semi-transparent red

        this.BrushScale = new ValueBrushScale();
        this.BrushScale.Brushes = brushes;
        this.BrushScale.MinimumValue = 0;
        this.BrushScale.MaximumValue = 30;

        this.Data = WorldTemperatures.Load();
    }
}
```

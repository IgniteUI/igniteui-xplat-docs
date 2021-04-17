---
title: $Platform$ マップ | データ可視化ツール | 散布エリア シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $Platform$ 散布エリア シリーズを使用して、各ポイントに割り当てられた数値を使い、経度および緯度データの三角測量に基づいて、色付きのエリア サーフェスを描画します。$ProductName$ マップ シーリズについての詳細を表示します。
_keywords: $Platform$ map, scatter area series, $ProductName$, Infragistics, $Platform$ マップ, 散布エリア シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap','GeographicScatterAreaSeries','CustomPaletteColorScale']
_language: ja
---
# $Platform$ 散布エリア シリーズの使用

$Platform$ マップ コンポーネントの `GeographicScatterAreaSeries` を使用して、各ポイントに割り当てられた数値を持つ経度と緯度のデータの三角形分割に基づいて、地理的背景で色付きの表面を描画します。このタイプの地理的シリーズは、気象温度、降水量、人口分布、大気汚染などの地理的位置によって定義される散乱データのレンダリングに使用できます。

## $Platform$ 散布エリア シリーズの使用の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-area-series"
           alt="$Platform$ 散布エリア シリーズの使用の例"
           github-src="maps/geo-map/type-scatter-area-series">
</code-view>

<div class="divider--half"></div>

`GeographicScatterAreaSeries` は `GeographicContourLineSeries` と同様ですが、同じ値を持つデータポイントを接続する等線の置換に補完で色つきサーフェス エリアとしてデータを表します。

## データ要件
マップコンポーネントの他の種類の地理的シリーズと同様に、`GeographicScatterAreaSeries` には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、項目ソースの各項目にはデータ列が 3 つあり、2 つは地理的な経度および緯度座標を保管し、1 つのデータ列は地理的位置に関連した値を保管します。地理的シリーズの `LongitudeMemberPath`、`LatitudeMemberPath` および `ColorMemberPath` プロパティはこれらのデータ列を識別します。
`GeographicScatterAreaSeries` は、三角測量が `TrianglesSource` プロパティに設定されていない場合、ItemsSource の項目で組み込みのデータ三角測量を自動的に実行します。ただし、三角測量の計算は非常に時間のかかるプロセスであるため、このプロパティのために TriangulationSource を指定すると、ランタイム パフォーマンスがよくなります。特にデータ項目が多数ある場合には顕著です。

## データ バインディング
以下の表に、データ バインドに使用される GeographicScatterAreaSeries のプロパティをまとめています。

| プロパティ名  | プロパティ型   | 説明   |
|--------------|---------------| ---------------|
|`ItemsSource`|任意|`TrianglesSource` プロパティが三角測量データを提供しない場合に三角測量を実行するデータ項目のソースです。|
|`LongitudeMemberPath`|文字列|`ItemsSource` にバインドされているすべての項目の経度を含むプロパティの名前。|
|`LatitudeMemberPath`|文字列|`ItemsSource` にバインドされているすべての項目の Latitude を含むプロパティの名前。|
|`ColorMemberPath`|文字列|各データ項目の緯度および経度座標の値を含むプロパティの名前。`ColorScale` プロパティが設定されている場合、この数値は色に変換されます。|
|`TrianglesSource`|任意|三角測量データのソース。`TriangulationSource` オブジェクトの Triangles をこのプロパティに設定すると、ランタイム パフォーマンスと地理的シリーズの描画の両方が改善します。|
|`TriangleVertexMemberPath1`|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、`TrianglesSource` 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|
|`TriangleVertexMemberPath2`|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、`TrianglesSource` 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|
|`TriangleVertexMemberPath3`|文字列|各三角形に対して ItemsSource の最初の頂点のインデックスを含む、`TrianglesSource` 項目のプロパティ名。このプロパティを設定することは義務ではありません。カスタムの三角測量ロジックが提供されない場合はデフォルトで取得されます。|

## カラー スケール
`GeographicScatterAreaSeries` の ColorScale プロパティを使用して、ポイントの色の値を解決し、地理的シリーズの面を塗りつぶします。色は、ピクセル単位の三角ラスタライザーを三角測量データに適用することによって、サーフェスの図形の周りをなめらかに補間します。サーフェスの描画がピクセル単位であるため、カラー スケールはブラシではなく色を使用します。
提供される `CustomPaletteColorScale` クラスはほとんどのカラーリングのニーズを満たすはずですが、ColorScale ベースのクラスはカスタムのカラリング ロジックのアプリケーションによって継承できます。

以下の表は GeographicScatterAreaSeries の面のカラリングに影響する `CustomPaletteColorScale` プロパティをリストします。

| プロパティ名  | プロパティ型   | 説明   |
|--------------|---------------| ---------------|
|`Palette`|ObservableCollection<Color>|補間するために選択する色のコレクションを取得または設定します。|
|`InterpolationMode`|`ColorScaleInterpolationMode`|Palette から色を取得するメソッドを取得または設定します。|
|`MaximumValue`|double|色を割り当てるための最大値。指定した値がこの値より大きい場合は透明になります。|
|`MinimumValue`|double|色を割り当てるための最小値。指定した値がこの値より小さい場合は透明になります。|

## コード スニペット
以下のコードは、`GeographicScatterAreaSeries` を世界の表面温度を表す三角測量データにバインドする方法を示しています。

<!-- React -->
```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicScatterAreaSeries } from 'igniteui-react-maps';
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
                        const point = shapes[i];
                        const item = { lon: point.x, lat: point.y, value: temp};
                        contourPoints.push(item);
                    }
                 }
            }
        }
    }

    this.createAreaSeries(contourPoints);
}

public createAreaSeries(data: any[])
{
    const brushes = [
        "rgba(32, 146, 252, 0.5)",
        "rgba(14, 194, 14, 0.5)",
        "rgba(252, 120, 32, 0.5)",
        "rgba(252, 32, 32, 0.5)",
    ];

    const colorScale = new IgrCustomPaletteColorScale({});
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgrGeographicScatterAreaSeries( { name: "areaSeries" });
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;

    this.geoMap.series.add(areaSeries);
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
        <span>
            Degrees: {{item.value}} "°F"
        </span>
        <br/>
        <span>
                Longitude: {{item.lon}}
        </span>
        <br/>
        <span>
                Latitude: {{item.lat}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxCustomPaletteColorScaleComponent } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicScatterAreaSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-scatter-area-series",
  styleUrls: ["./map-geographic-scatter-area-series.component.scss"],
  templateUrl: "./map-geographic-scatter-area-series.component.html"
})
export class MapTypeScatterAreaSeriesComponent implements AfterViewInit {

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

    const colorScale = new IgxCustomPaletteColorScaleComponent();
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgxGeographicScatterAreaSeriesComponent();
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;
    areaSeries.tooltipTemplate = this.tooltipTemplate;
    areaSeries.thickness = 4;

    this.map.series.add(areaSeries);
}
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcCustomPaletteColorScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcGeographicScatterAreaSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    const sds = new IgcShapeDataSource();
    sfc.importCompleted = this.onDataLoaded;
    sfc.shapefileSource = "../shapes/WorldTemperatures.shp";
    sfc.databaseSource = "../shapes/WorldTemperatures.dbf";
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

    this.createAreaSeries(contourPoints);
}

createAreaSeries(data: any[]) {
    const brushes = [
        "rgba(32, 146, 252, 0.5)", // semi-transparent blue
        "rgba(14, 194, 14, 0.5)",  // semi-transparent green
        "rgba(252, 120, 32, 0.5)", // semi-transparent orange
        "rgba(252, 32, 32, 0.5)",  // semi-transparent red
    ];

    const colorScale = new IgcCustomPaletteColorScaleComponent();
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgcGeographicScatterAreaSeriesComponent();
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;

    this.geoMap.series.add(areaSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<GeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicScatterAreaSeries LongitudeMemberPath="Lon"
        LatitudeMemberPath="Lat"
        ColorMemberPath="Value"
        ColorScale="ColorScale"
        DataSource="Data">
    </GeographicScatterAreaSeries>
</GeographicMap>

@code {

    private List<Location> Data;
    private CustomPaletteColorScale ColorScale;

    protected override void OnInitialized()
    {
        GeographicMapModule.Register(IgniteUIBlazor);

        var brushes = "";
        brushes += "rgba(32, 146, 252, 0.5) "; // semi-transparent blue
        brushes += "rgba(14, 194, 14, 0.5) ";  // semi-transparent green
        brushes += "rgba(252, 120, 32, 0.5) "; // semi-transparent orange
        brushes += "rgba(252, 32, 32, 0.5) ";  // semi-transparent red

        this.ColorScale = new CustomPaletteColorScale();
        this.ColorScale.Palette = brushes;
        this.ColorScale.MinimumValue = 0;
        this.ColorScale.MaximumValue = 30;

        this.Data = WorldTemperatures.Load();
    }
}
```
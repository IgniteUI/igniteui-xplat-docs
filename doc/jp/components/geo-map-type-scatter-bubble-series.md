---
title: $Platform$ マップ | データ可視化ツール | 散布図比例シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $Platform$ マップの散布図比例シリーズを使用して、アプリケーション内のデータで指定された地理的な地点のマーカーをプロットします。$ProductName$ マップ シーリズについての詳細を表示します。
_keywords: $Platform$ map, scatter proportional series, $ProductName$, Infragistics, $Platform$ マップ, 散布図比例シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# $Platform$ 散布図比例シリーズの使用

アプリケーション内のデータで指定された地理的な地点のマーカーをプロットするには、$Platform$ マップコンポーネントの `GeographicProportionalSymbolSeries` を使用します。このマップ シリーズは、百貨店、倉庫、オフィスなど、特定のビジネス ケースに応じたポイントを強調表示する場合に役立ちます。また、動的な車両追跡のためにフリート管理システムまたは GPS システムでこの地図シリーズを使用することができます。

## $Platform$ 散布図比例シリーズの使用の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-bubble-series"
           alt="$Platform$ マップ | データ可視化ツール | 散布図比例"
           github-src="maps/geo-map/type-scatter-bubble-series">
</code-view>

<div class="divider--half"></div>

上記のデモは、`GeographicProportionalSymbolSeries` シリーズと、シリーズのデータ​​バインディングオプションを指定する方法を示しています。予定表連動マーカー選択は、マーカー競合回避ロジックと合わせて構成され、マーカー アウトラインと塗りつぶしの色も指定されます。

## 構成の概要
 マップコントロールの他のタイプの散布シリーズと同様に、`GeographicProportionalSymbolSeries` シリーズには、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。また、項目ソースの各項目は、地理経度および緯度を表す 2 つのデータ列があります。`LongitudeMemberPath` と `LatitudeMemberPath` プロパティを使用してこのデータ列をマップします。`RadiusScale` と `RadiusMemberPath` は、バブルの半径を設定します。

以下の表に、データ バインドに使用される GeographicHighDensityScatterSeries シリーズのプロパティをまとめています。

プロパティ|タイプ|概要
---|---|---
`ItemsSource`|any|項目のソースを取得または設定します
`LongitudeMemberPath`|string|ItemsSource プロパティを使用して、割り当てられた商品の経度の値の場所を特定します。
`LatitudeMemberPath`|string|ItemsSource プロパティを使用して、割り当てられた商品の緯度値の場所を決定します。
`RadiusMemberPath`|string|シリーズの半径値を取得するために使用するパスを設定します。
`RadiusScale`|`SizeScale`|現在のバブル シリーズの半径スケール プロパティを取得または設定します。
`MinimumValue`|any|値のサブ範囲を計算するための最小値を設定します。
`MaximumValue`|any|値のサブ範囲を計算するための最大値を設定します。

## コード スニペット

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
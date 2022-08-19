---
title: $Platform$ マップ | データ可視化ツール | 散布図記号シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $Platform$ マップの散布図記号シリーズを使用して、地理的コンテキストでポイントまたはマーカーを使用し、地理空間データを表示します。$ProductName$ マップ シーリズについての詳細を表示します。
_keywords: $Platform$ map, scatter symbol series, $ProductName$, Infragistics, $Platform$ マップ, 散布図記号シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter', 'Series']
_language: ja
---
# $Platform$ 地理記号マップ

$Platform$ マップ コンポーネントでは、`GeographicSymbolSeries` を使用して、地理的コンテキストでポイントまたはマーカーを使用して地理空間データを表示できます。地理的シリーズのこのタイプは、都市、空港、地震または興味のあるポイントなどの地理的位置のコレクションを描画するためにしばしば使用されます。

## $Platform$ 地理記号マップの例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-symbol-series"
           alt="$Platform$ 散布図記号シリーズの使用の例"
           github-src="maps/geo-map/type-scatter-symbol-series">
</code-view>

<div class="divider--half"></div>

## データ要件
マップコンポーネントの他の種類の地理的シリーズと同様に、`GeographicSymbolSeries` には、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。さらに、このオブジェクトの各データ項目は、地理的位置 (経度と緯度) を保存する 2 つの数値データ列を持つ必要があります。これらのデータ列は、`LatitudeMemberPath` および `LongitudeMemberPath` プロパティにマップされます。`GeographicSymbolSeries` は、これらのマップされたデータ列の値を使用して、地理マップコンポーネントにシンボル要素をプロットします。

## コード スニペット
以下のコードは、`ShapefileConverter` を使用してシェイプ ファイルからロードした都市の場所に `GeographicSymbolSeries` をバインドする方法を示します。

<!-- React -->
```tsx

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
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
    this.geoMap = map;
    this.addSeries(WorldLocations.getCities(), "Gray");
    this.addSeries(WorldLocations.getCapitals(),"rgb(32, 146, 252)");
}

public addSeries(locations: any[], brush: string)
{
    const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = brush;

    this.geoMap.series.add(symbolSeries);
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
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-geographic-scatter-symbol-series",
  styleUrls: ["./map-geographic-scatter-symbol-series.component.scss"],
  templateUrl: "./map-geographic-scatter-symbol-series.component.html"
})

export class MapTypeScatterSymbolSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(symbolSeries);
    }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { MarkerType } from 'igniteui-webcomponents-charts';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    this.addSeriesWith(WorldLocations.getCities(), "Gray");
    this.addSeriesWith(WorldLocations.getCapitals(),"rgb(32, 146, 252)");
}

addSeriesWith(locations: any[], brush: string)
{
    const symbolSeries = new IgcGeographicSymbolSeriesComponent ();
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush  = "White";
    symbolSeries.markerOutline = brush;

    this.geoMap.series.add(symbolSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicSymbolSeries DataSource="Cities"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerBrush="White"
        MarkerOutline="Gray" />
    <IgbGeographicSymbolSeries DataSource="Capitals"
        MarkerType="MarkerType.Circle"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        MarkerBrush="White"
        MarkerOutline="rgb(32, 146, 252)" />
</IgbGeographicMap>

@code {

    private List<WorldCity> Cities;
    private List<WorldCity> Capitals;

    protected override void OnInitialized()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);

        this.Cities = WorldLocations.GetCities();
        this.Capitals = WorldLocations.GetCapitals();
    }
}
```

## API メンバー

 - `GeographicSymbolSeries`
 - `ItemsSource`
 - `LatitudeMemberPath`
 - `LongitudeMemberPath`
 - `ShapefileConverter`
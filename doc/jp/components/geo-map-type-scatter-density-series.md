---
title: {Platform} マップ | データ可視化ツール | 散布高密度シリーズ | データ バインディング | インフラジスティックス
_description: インフラジスティックスの {Platform} マップの散布高密度シリーズを使用して、数百から数百万のデータ ポイントから構成される散布図データを最短のロード時間でバインドして表示できます。{ProductName} マップ シーリズについての詳細を表示します。
_keywords: {Platform} map, scatter high density series, {ProductName}, Infragistics, {Platform} マップ, 散布高密度シリーズ, インフラジスティックス
mentionedTypes: ['XamGeographicMap', 'Series']
_language: ja
---
# {Platform} 地理高密度マップ

{Platform} マップ コンポーネントでは、`GeographicHighDensityScatterSeries` を使用して、非常に少ないロード時間で、数百から数百万のデータ ポイントを持つ散布図データをバインドして表示できます。

## {Platform} 地理高密度マップの例


<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-density-series"
           alt="{Platform} 散布高密度シリーズの使用の例"
           github-src="maps/geo-map/type-scatter-density-series">
</code-view>

<div class="divider--half"></div>

上記のサンプルは、オーストラリアの人口密度を表す何百、何千ものデータ ポイントにバインドされた `GeographicHighDensityScatterSeries` シリーズをマップ コンポーネントで示しています。大量のデータ ポイントを含むマップのプロット領域は凝縮された赤色のピクセルによって表します。少量のデータ ポイントを含む領域は青色のピクセルによって表します。

相当数のデータ ポイントがあるため、シリーズではフルサイズのマーカーに対して散布データを小さな点として表示し、領域にはデータ ポイントの集合を表す高い色密度を使用した大半のデータを表示します。

## データ要件
マップ コントロールの他のタイプの散布図シリーズと同様に、`GeographicHighDensityScatterSeries` シリーズには、オブジェクトの配列にバインドできる `ItemsSource` プロパティがあります。また、項目ソースの各項目は、地理経度および緯度を表す 2 つのデータ列があります。`LongitudeMemberPath` と `LatitudeMemberPath` プロパティを使用してこのデータ列をマップします。

### データ バインディング
以下の表に、データ バインドに使用される GeographicHighDensityScatterSeries シリーズのプロパティをまとめています。

プロパティ|タイプ|概要
---|---|---
`ItemsSource`|any|項目ソースを取得または設定します。
`LongitudeMemberPath`|経度値が割り当てられた項目上の位置を決定するには ItemsSource プロパティを使用します。
`LatitudeMemberPath`|string|緯度値が割り当てられた項目上の位置を決定するには ItemsSource プロパティを使用します。

## 熱色スケール
熱色スケールは、シリーズ内のカラー パターンを決定するオプションの機能です。以下の表は、カラー スケールを決定するために使用するプロパティをまとめたものです。

プロパティ|タイプ|概要
---|---|---
`HeatMinimum`|カラー スケールの最小端を表す double 値を定義します。
`HeatMaximum`|カラー スケールの最大端を表す double 値を定義します。
`HeatMinimumColor`|Color|カラー スケールの下端で使用するポイント密度カラーを定義します。
`HeatMaximumColor`|Color|カラー スケールの上端で使用するポイント密度カラーを定義します。

## コード例

以下のコードは、`GeographicHighDensityScatterSeries` の `HeatMinimumColor` と `HeatMaximumColor` プロパティを設定する方法を示します。

<!-- React -->
```tsx

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicHighDensityScatterSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

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
}

public componentDidMount() {
    // fetching geographic locations from public folder or URL
    fetch("Data/AusPlaces.json")
        .then((response) => response.json())
        .then(data => this.onDataLoaded(data));
}

public onDataLoaded(geoLocations: any[]) {

    const geoSeries = new IgrGeographicHighDensityScatterSeries( { name: "hdSeries" });
    geoSeries.dataSource = geoLocations;
    geoSeries.longitudeMemberPath = "x";
    geoSeries.latitudeMemberPath = "y";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.mouseOverEnabled = true;

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
        <span>
            {{item.n}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicHighDensityScatterSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-geographic-scatter-density-series",
  styleUrls: ["./map-geographic-scatter-density-series.component.scss"],
  templateUrl: ".map-geographic-scatter-density-series.component.html"
})

export class MapTypeScatterDensitySeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public geoLocations;
    constructor() {
    }

    public ngAfterViewInit(): void {
         // fetching geographic locations from public JSON folder
         fetch("assets/Data/AusPlaces.json")
         .then((response) => response.json())
         .then((data) => this.onDataLoaded(data, ""));
      }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        this.geoLocations = sds;
        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = sds;
        geoSeries.longitudeMemberPath = "x";
        geoSeries.latitudeMemberPath = "y";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding HD series to the geographic amp
        this.map.series.add(geoSeries);

        // zooming to bound of all geographic locations
        const geoBounds = WorldUtils.getBounds(this.geoLocations);
        geoBounds.top = 0;
        geoBounds.height = -50;
        this.map.zoomToGeographic(geoBounds);
    }
}
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicHighDensityScatterSeriesComponent } from 'igniteui-webcomponents-maps';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    const url = "../data/Places.csv";

    fetch(url)
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");
    const geoLocations: any[] = [];

    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        const location = {
            latitude:  Number(columns[2]),
            longitude: Number(columns[1]),
            name:  columns[0]
        };
        geoLocations.push(location);
    }

    // creating HD series with loaded data
    const geoSeries = new IgcGeographicHighDensityScatterSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.latitudeMemberPath = "latitude";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    // adding HD series to the geographic amp
    this.geoMap.series.add(geoSeries);
}
```

```razor
@using IgniteUI.Blazor.Controls

@inject HttpClient Http

<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicHighDensityScatterSeries DataSource="DataSource"
        LongitudeMemberPath="Lon"
        LatitudeMemberPath="Lat"
        HeatMaximumColor="Red"
        HeatMinimumColor="10"
        HeatMaximum="5"
        HeatMinimum="0"
        PointExtent="1"
        MouseOverEnabled="true" />
</IgbGeographicMap>

@code {

    private List<AusPlaceCsv> DataSource;
    private Rect GeoBounds;

    protected override async Task OnInitializedAsync()
    {
        string url = "https://static.infragistics.com/xplatform/data/AusPlaces.csv";

        string csv = await Http.GetStringAsync(url);

        string[] csvLines = csv.Split(Environment.NewLine);

        List<AusPlaceCsv> dataItems = new List<AusPlaceCsv>();

        for (int i = 1; i < csvLines.Length - 1; i++)
        {
            string[] columns = csvLines[i].Split(",");
            AusPlaceCsv location = new AusPlaceCsv()
            {
                Lat = double.Parse(columns[2]),
                Lon = double.Parse(columns[1]),
                Name = columns[0],
            };

            dataItems.Add(location);
        }

        this.DataSource = dataItems;

        await Task.Delay(1);
    }

    public class AusPlaceCsv
    {
        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public bool Cap { get; set; }
    }
}
```


## API リファレンス

 - `GeographicHighDensityScatterSeries`
 - `GeographicHighDensityScatterSeries`
 - `HeatMaximumColor`
 - `HeatMinimumColor`
 - `ItemsSource`
 - `LatitudeMemberPath`
 - `LongitudeMemberPath`
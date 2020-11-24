---
title: $PlatformShort$ マップ | データ可視化ツール | CSV データのバインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ マップを使用して、ビュー モデルの地理的位置や CSV ファイルからロードされた地理的位置を含むデータの表示方法について説明します。$ProductName$ マップのサンプルを是非お試しください!
_keywords: $PlatformShort$ map, plot data, $ProductName$, Infragistics, data binding, $PlatformShort$ マップ, プロット データ, データ バインディング, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# $PlatformShort$ CSV ファイルを地理的な場所にバインド

$ProductName$ Map コンポーネントを使用すると、さまざまな種類のファイルからロードされた地理データをプロットできます。たとえば、カンマ区切り値 (CSV) ファイルから地理的な場所を読み込むことができます。

## $PlatformShort$ CSV ファイルを地理的な場所にバインド例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-data-csv-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-csv' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-csv-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="maps/geo-map/binding-data-csv"></sample-button>

<div class="divider--half"></div>


## データ例
CSVファイルからのデータの例:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

```razor
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## コード スニペット
以下のコードは、マップコンポーネント内の `GeographicHighDensityScatterSeries` を、ロードされた CSV ファイルから作成された地理的位置を含むオブジェクトの配列にバインドします。


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
            County: {{item.county}}
        </span>
    <br/>
        <span>
            Population: {{item.density}} K
        </span>
    </div>
</ng-template>
```

```ts
import { IgrGeographicHighDensityScatterSeries } from 'igniteui-react-maps';
// ...

public componentDidMount() {
    // fetching CSV data with geographic locations from public folder
    fetch(url + "/Data/UsaCities.csv")
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

public onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");

    // parsing CSV data and creating geographic locations
    const geoLocations: any[] = [];
    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        // using CSV columns: City,Lat,Lon,State,Code,County,Density,Population
        const location = {
            name:  columns[0],
            latitude:  Number(columns[1]),
            longitude: Number(columns[2]),
            state: columns[3],
            code: columns[4],
            county: columns[5],
            density: Number(columns[6]),
            population: Number(columns[7])
        };
        geoLocations.push(location);
    }

    // creating HD series with loaded data
    const geoSeries = new IgrGeographicHighDensityScatterSeries( { name: "hdSeries" });
    geoSeries.dataSource = geoLocations;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.mouseOverEnabled = true;
    // adding symbol series to the geographic amp
    this.geoMap.series.add(geoSeries);
}

```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-geographic-csv_files",
  styleUrls: ["./map-binding-geographic-csv_files.component.scss"],
  templateUrl: "./map-binding-geographic-csv_files.component.html"
})

export class MapBindingDataCsvComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder
        fetch("assets/Data/UsaCities.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");

        // parsing CSV data and creating geographic locations
        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                code: columns[4],
                county: columns[5],
                density: Number(columns[6]),
                latitude:  Number(columns[1]),
                longitude: Number(columns[2]),
                name:  columns[0],
                population: Number(columns[7]),
                state: columns[3]
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding symbol series to the geographic amp
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

    const url = "/data/UsaCitiesPopulation.csv";

    fetch(url)
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");
    // parsing CSV data and creating geographic locations
    const geoLocations: any[] = [];

    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        const location = {
            latitude:  Number(columns[1]),
            longitude: Number(columns[2]),
            name:  columns[0],
            population: Number(columns[3])
        };
        geoLocations.push(location);
    }

    // creating HD series with loaded data
    const geoSeries = new IgcGeographicHighDensityScatterSeriesComponent();
    geoSeries.name = "hdSeries";
    geoSeries.dataSource = geoLocations;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.heatMaximumColor = "Red";
    geoSeries.heatMinimumColor = "Black";
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.mouseOverEnabled = true;
    // adding symbol series to the geographic amp
    this.geoMap.series.add(geoSeries);
    // zooming to bound of lower 48-states
    const geoBounds = {
        left: -130,
        top: 15,
        width: Math.abs(-130 + 65),
        height: Math.abs(50 - 15)
    };

    this.geoMap.zoomToGeographic(geoBounds);
}
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor
@inject HttpClient Http

<GeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicHighDensityScatterSeries DataSource="DataSource"
        LatitudeMemberPath="Lat"
        LongitudeMemberPath="Lon"
        HeatMaximumColor="Red"
        HeatMinimumColor="Black"
        HeatMinimum="0"
        HeatMaximum="5"
        PointExtent="1"
        MouseOverEnabled="true" />
</GeographicMap>

@code {
    private List<WorldPlaceCsv> DataSource;

    protected override async Task OnInitializedAsync()
    {
        GeographicMapModule.Register(IgniteUIBlazor);

        string url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        string csv = await Http.GetStringAsync(url);

        string[] csvLines = csv.Split(Environment.NewLine);

        List<WorldPlaceCsv> dataItems = new List<WorldPlaceCsv>();

        for (int i = 1; i < csvLines.Length - 1; i++)
        {
            string[] columns = csvLines[i].Split(",");

            WorldPlaceCsv location = new WorldPlaceCsv() {
                Lat=  double.Parse(columns[1]),
                Lon= double.Parse(columns[2]),
                Name= columns[0],
                Pop= double.Parse(columns[3])
            };

            dataItems.Add(location);
        }

        this.DataSource = dataItems;

        await Task.Delay(1);
    }

    public class WorldPlaceCsv {

        public string Name { get; set; }

        public double Lat { get; set; }

        public double Lon { get; set; }

        public double Pop { get; set; }

        public string Country { get; set; }
        public bool Cap { get; set; }
    }
}
```

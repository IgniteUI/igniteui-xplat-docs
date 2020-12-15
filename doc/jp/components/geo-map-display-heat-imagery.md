---
title: $PlatformShort$ マップ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ JavaScript マップを使用してヒートマップ画像を表示します。$ProductName$ マップのサンプルを是非お試しください!
_keywords: $PlatformShort$ map, heat map imagery, $ProductName$, Infragistics, $PlatformShort$ マップ, ヒートマップ画像, インフラジスティックス
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter']
_language: ja
---
# $PlatformShort$ ヒート画像の表示

$ProductName$ マップ コントロールには、Shape ファイルをタイル シリーズにロードして地理空間データをロードすることにより、`ShapeDataSource` によって生成される `ShapeFileRecords` を使用して、ヒートマップ画像を表示する機能があります。

このトピックを読み進めるための前提条件として、[シェープ ファイルを地理的データにバインディング](geo-map-binding-shp-file.md)をお読みください。

## $PlatformShort$ ヒート画像の表示の例

<!-- Angular, React -->
```ts
//WebComponents sample not working in CodeSandbox. Remove build flag once this is fixed.
```
<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-heat-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-heat-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ヒート画像の表示の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-heat-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="maps/geo-map/display-heat-imagery"></sample-button>

<div class="divider--half"></div>

<!-- end: Angular, React -->

`ShapeDataSource` がそのシェイプ ファイルを読み込むと、そのデータを ShapeFileRecord オブジェクトに変換します。これらのオブジェクトは、`ShapeDataSource` の `GetPointData()` メソッドから取得でき、`TileGenerator` プロパティに割り当てられた `HeatTileGenerator` で `TileGeneratorMapImagery` オブジェクトを使用してヒートマップを作成するために使用できます。この `TileGeneratorMapImagery` は、`TileImagery` ソースとして地理タイルシリーズで使用できます。

`HeatTileGenerator` オブジェクトは、`XValues`、`YValues`、`Values` の 3 つの値パスを持つように機能します。これらの使用方法の例として、人口に関する情報を持つ形状ファイルの場合、`XValues` を経度、`YValues` を緯度、`Values` を人口データとみなすことができます。これらの各プロパティは、`number[]` を取得します。

ヒートマップ機能を使用する際の地理的タイルシリーズの表示は、`MinimumColor` プロパティと `MaximumColor` プロパティを `HeatTileGenerator` の `Values` プロパティに割り当てるコレクションの最小値と最大値に対応する色を記述する「rgba」文字列に設定することでカスタマイズできます。これをさらにカスタマイズするには、ジェネレーターの `ScaleColors` プロパティを設定して、色を説明する文字列のコレクションを含めます。これにより、`HeatTileGenerator` に、マップに表示される値に使用する色がわかります。`BlurRadius`、`MaxBlurRadius`、`UseBlurRadiusAdjustedForZoom` プロパティを使用して、`ScaleColors` コレクション内の色が一緒にぼやける方法をカスタマイズすることもできます。

`HeatTileGenerator` は対数スケールも使用できます。これを使用する場合は、`UseLogarithmicScale` プロパティを `true` に設定できます。


## Web Worker

また、`HeatTileGenerator` は、Web Worker が、別のスレッドでシェイプ ファイルからタイル イメージをロードする際の重いリフティングをサポートしています。これにより、ヒートマップ機能を使用する際に地理マップのパフォーマンスが大幅に向上します。ジェネレーターでWebワーカーを使用するには、`UseWebWorkers` プロパティを `true` に設定し、`WebWorkerInstance` プロパティを Web Worker のインスタンスに設定できます。

<!-- Angular -->
```ts
// heatworker.worker.ts
import { HeatTileGeneratorWebWorker } from 'igniteui-angular-core';

const worker: Worker = self as any;
worker.onmessage = HeatTileGeneratorWebWorker.onmessage;
HeatTileGeneratorWebWorker.postmessage = heatWorkerPostMessage;
function heatWorkerPostMessage() {
  (self as any).postMessage.apply(self, Array.prototype.slice.call(arguments));
}
HeatTileGeneratorWebWorker.start();
export default {} as typeof Worker & (new () => Worker);
```

<!-- React -->
```ts
// heatworker.worker.ts
import { HeatTileGeneratorWebWorker } from 'igniteui-react-core';

let worker: Worker = self as any;
worker.onmessage = HeatTileGeneratorWebWorker.onmessage;
HeatTileGeneratorWebWorker.postmessage = postMessageFunction;
HeatTileGeneratorWebWorker.start();
function postMessageFunction(){
    self.postMessage.apply(self, Array.prototype.slice.call(arguments));
}
export default {} as typeof Worker & (new () => Worker);
```

<!-- WebComponents -->
```ts
// heatworker.worker.ts
import { HeatTileGeneratorWebWorker } from 'igniteui-webcomponents-core';

let worker: Worker = self as any;
worker.onmessage = HeatTileGeneratorWebWorker.onmessage;
HeatTileGeneratorWebWorker.postmessage = postMessageFunction;
HeatTileGeneratorWebWorker.start();
function postMessageFunction(){
    self.postMessage.apply(self, Array.prototype.slice.call(arguments));
}
export default {} as typeof Worker & (new () => Worker);
```

## 依存関係


<!-- React -->
```ts
import Worker from "./heatworker.worker"

import { IgrGeographicMapImagery } from 'igniteui-react-maps';
import { IgrHeatTileGenerator } from 'igniteui-react-core';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicTileSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrTileGeneratorMapImagery } from 'igniteui-react-maps';
import { IgrShapeDataSource } from 'igniteui-react-core';
...

IgrDataChartInteractivityModule.register();
IgrGeographicMapModule.register();
```

<!-- Angular -->
```ts
import { IgxHeatTileGenerator } from 'igniteui-angular-core';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxTileGeneratorMapImagery } from 'igniteui-angular-maps';
```

<!-- WebComponents -->
```ts
import Worker from "./heatworker.worker"

import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicTileSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcHeatTileGenerator } from 'igniteui-webcomponents-core';
import { IgcTileGeneratorMapImagery } from 'igniteui-webcomponents-maps';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcGeographicMapModule
);
```

## ヒートマップの作成

以下のコード スニペットは、人口ベースのヒートマップを $ProductName$ マップ コンポーネントに表示する方法を示しています。

<!-- Angular -->
```html
<igx-geographic-map #map width="100%" height="calc(100% - 60px)">
    <igx-geographic-tile-series name="heatTiles" [tileImagery]="tileImagery"></igx-geographic-tile-series>
</igx-geographic-map>
```

```ts
@ViewChild("map", { static: true })
public map: IgxGeographicMapComponent;
public data: any[];
public tileImagery: IgxTileGeneratorMapImagery;
// ...
constructor() {
    this.data = this.initData();

    this.tileImagery = new IgxTileGeneratorMapImagery();

    const con: IgxShapeDataSource = new IgxShapeDataSource();
    con.importCompleted.subscribe((s, e) => {
        const data = con.getPointData();
        const lat: number[] = [];
        const lon: number[] = [];
        const val: number[] = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            for (let j = 0; j < item.points.length; j++) {
                const pointsList = item.points[j];
                for (let k = 0; k < pointsList.length; k++) {
                    lat.push(pointsList[k].y);
                    lon.push(pointsList[k].x);
                }
            }
            const value = item.fieldValues["POP_2010"];
            if (value >= 0) {
                val.push(value);
            } else {
                val.push(0);
            }
        }

        const gen = new IgxHeatTileGenerator();
        gen.xValues = lon;
        gen.yValues = lat;
        gen.values = val;
        gen.blurRadius = 6;
        gen.maxBlurRadius = 20;
        gen.useBlurRadiusAdjustedForZoom = true;
        gen.minimumColor = "rgba(100,255, 0, 0.3922)";
        gen.maximumColor = "rgba(255, 255, 0, 0.9412)";
        gen.useGlobalMinMax = true;
        gen.useGlobalMinMaxAdjustedForZoom = true;
        gen.useLogarithmicScale = true;
        gen.useWebWorkers = true;
        gen.webWorkerInstance = new Worker("../heatworker.worker", { type: "module" });
        gen.scaleColors = [
            "rgba(0, 0, 255, 64)",
            "rgba(0, 255, 255, 96)",
            "rgba(0, 255, 0, 160)",
            "rgba(255, 255, 0, 180)",
            "rgba(255, 0, 0, 200)"
        ];

        this.tileImagery.tileGenerator = gen;
    });
    con.shapefileSource = "assets/Shapes/AmericanCities.shp";
    con.databaseSource  = "assets/Shapes/AmericanCities.dbf";
    con.dataBind();
}
```


<!-- React -->
```ts
public map: IgrGeographicMap;
public tileImagery: IgrTileGeneratorMapImagery = null;
// ...
constructor(props: any) {
    super(props);
    this.onMapReferenced = this.onMapReferenced.bind(this);
    this.onDataLoaded = this.onDataLoaded.bind(this);
    this.tileImagery = new IgrTileGeneratorMapImagery();
    this.state = { tileImagery: null }
}

public onMapReferenced(map: IgrGeographicMap) {
    this.map = map;

    const url = process.env.PUBLIC_URL;
    const sds: IgrShapeDataSource = new IgrShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = url + "/Shapes/AmericanCities.shp";
    sds.databaseSource  = url + "/Shapes/AmericanCities.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {
    let records = sds.getPointData();
    let latArray: number[] = [];
    let lonArray: number[] = [];
    let popArray: number[] = [];

    for (let r = 0; r < records.length; r++) {
      let record = records[r];
        for (let j = 0; j < record.points.length; j++) {
            let points = record.points[j];
            for (let k = 0; k < points.length; k++) {
                latArray.push(points[k].y);
                lonArray.push(points[k].x);
            }
        }
        let value = parseInt(record.fieldValues["POP2010"], 10);
        if (value >= 0) {
            popArray.push(value);
        } else {
            popArray.push(0);
      }
    }

    const gen = new IgrHeatTileGenerator();
    gen.xValues = lonArray;
    gen.yValues = latArray;
    gen.values = popArray;
    gen.blurRadius = 6;
    gen.maxBlurRadius = 20;
    gen.useBlurRadiusAdjustedForZoom = true;
    gen.minimumColor = "rgba(100, 255, 0, 0.4)";
    gen.maximumColor = "rgba(255, 255, 0, 0.95)";
    gen.scaleColors = ["rgba(0, 0, 255, 64)", "rgba(0, 255, 255, 96)", "rgba(0, 255, 0, 160)", "rgba(255, 255, 0, 180)", "rgba(255, 0, 0, 200)"];
    gen.useGlobalMinMax = true;
    gen.useGlobalMinMaxAdjustedForZoom = true;
    gen.useLogarithmicScale = true;
    gen.useWebWorkers = true;
    gen.webWorkerInstance = new Worker();

    this.tileImagery.tileGenerator = gen;
    this.setState({ tileImagery: this.tileImagery });
}
```

```tsx
<IgrGeographicMap
    ref={this.onMapReferenced}
    height="100%"
    width="100%" >
    <IgrGeographicTileSeries
        name="heatTiles"
        tileImagery={this.state.tileImagery} />
</IgrGeographicMap>

```

```ts
private geoMap: IgcGeographicMapComponent;
public tileImagery: IgcTileGeneratorMapImagery;

constructor() {
    super();
    this.tileImagery = new IgcTileGeneratorMapImagery();
    this.onDataLoaded = this.onDataLoaded.bind(this);
}

connectedCallback() {
    this.innerHTML = templateHTML;
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    this.geoMap.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });

    const url = AssetsUtils.getAssetsPath() + "/data/UsaCitiesPopulation.csv";
    console.log("SB loading " + url);
    fetch(url)
        .then((response) => response.text())
        .then(data => this.onDataLoaded(data));
}

public onDataLoaded(csvData: string) {
    const csvLines = csvData.split("\n");
    console.log("loaded UsaCitiesPopulation.csv " + csvLines.length);
    const latitudes: number[] = [];
    const longitudes: number[] = [];
    const populations: number[] = [];
    // parsing CSV data and creating geographic locations
    for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(",");
        latitudes.push(Number(columns[1]));
        longitudes.push(Number(columns[2]));
        populations.push(Number(columns[3]));
    }
    // generating heat map imagery tiles
    const gen = new IgcHeatTileGenerator();
    gen.xValues = longitudes;
    gen.yValues = latitudes;
    gen.values = populations;
    gen.blurRadius = 6;
    gen.maxBlurRadius = 20;
    gen.useBlurRadiusAdjustedForZoom = true;
    gen.minimumColor = "rgba(100, 255, 0, 0.5)";
    gen.maximumColor = "rgba(255, 255, 0, 0.5)";
    gen.useGlobalMinMax = true;
    gen.useGlobalMinMaxAdjustedForZoom = true;
    gen.useLogarithmicScale = true;
    gen.useWebWorkers = true;
    gen.webWorkerInstance = new Worker();
    gen.scaleColors = [
        "rgba(0, 0, 255, .251)", "rgba(0, 255, 255, .3765)",
        "rgba(50,205,50, .2675)", "rgba(255, 255, 0, .7059)",
        "rgba(255, 0, 0, .7843)"
    ];
    this.tileImagery.tileGenerator = gen;
    // generating heat map series
    const series = new IgcGeographicTileSeriesComponent();
    series.tileImagery = this.tileImagery;
    // add heat map series to the map
    this.geoMap.series.add(series);
}
```
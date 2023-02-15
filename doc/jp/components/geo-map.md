---
title: {Platform} マップ | データ可視化ツール | マップ概要 | インフラジスティックス
_description: インフラジスティックスの {Platform} JavaScript マップ コンポーネントを使用して、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルからロードされた地理空間データを地理的画像マップに表示します。{ProductName} マップのサンプルを是非お試しください!
_keywords: {Platform} map, geographic map, imagery tiles, {ProductName}, Infragistics, {Platform} マップ, 地理マップ, 画像タイル, インフラジスティックス
mentionedTypes: ['XamGeographicMap', 'Series']
_language: ja
---
# {Platform} マップの概要

{ProductName} Map コンポーネントを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープ ファイルからロードされた地理空間データを地理的画像マップに表示できます。

# {Platform} マップの例

以下のサンプルは、Bubble Series (バブル シリーズ) とも呼ばれる `GeographicProportionalSymbolSeries` を使用して `XamGeographicMap` にデータを表示する方法を示しています。

`sample="/maps/geo-map/type-scatter-bubble-series", height="500", alt="{Platform} geo map type scatter bubble series"`


<div class="divider--half"></div>

{Platform} 地図コンポーネントを使用すると、Bing Maps™ および Open Street Maps から地理的画像をレンダリングできます。マップは何万ものデータポイントをプロットし、コントロールがリアルタイム フィードを処理できるように数ミリ秒ごとにそれらを更新します。

マップの Series プロパティは、無制限の地理的シリーズのレンダリングをサポートするために使用されます。このプロパティは、地理的シリーズ オブジェクトのコレクションで、任意のタイプの地理的シリーズをそれに追加できます。たとえば、都市などの地理的位置をプロットするために `GeographicSymbolSeries`、またこれらの地理的位置の間の接続 (道路など) をプロットするために `GeographicPolylineSeries` を追加できます。

Map は、マウス、キーボード、またはコードビハインドを使用して、マップ コンテンツをナビゲーションするためのカスタマイズ可能なナビゲーション動作を提供します。

<!-- Angular, React, WebComponents -->
## 依存関係

地理マップコンポーネントを使用するには、はじめにこれらのパッケージをインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
npm install --save {PackageMaps}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件

`XamGeographicMap` には以下のモジュールが必要ですが、DataChartInteractivityModule は、マップ コンテンツのパンやズームなどのマウス操作にのみ必要です。


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbGeographicMapModule),
  typeof(IgbDataChartInteractivityModule)
);
```

```ts
// app.module.ts
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxGeographicMapModule,
		IgxDataChartInteractivityModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-overview",
  styleUrls: ["./map-overview.component.scss"],
  templateUrl: "./map-overview.component.html"
})

export class MapOverviewComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
```

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcGeographicMap } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';

IgcGeographicMapModule.register();
IgcDataChartInteractivityModule.register();
```

```ts
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
```

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcGeographicMapModule
);
```

<div class="divider--half"></div>

## 使用方法

マップ モジュールがインポートされたので、以下のステップは地理的地図を作成することです。以下のコードは、これを実行して地図内でズームを有効にする方法を示しています。

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>
```

```tsx
<IgrGeographicMap
    width="600px"
    height="600px"
    zoomable="true" />
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true" />
```

<div class="divider--half"></div>

## その他のリソース

関連する {Platform} マップ機能の詳細については、以下のトピックを参照してください。

- [地理マップのナビゲーション](geo-map-navigation.md)
<!-- - [地理マップ画像](geo-map-display-imagery-types.md) -->
- [散布図記号シリーズの使用](geo-map-type-scatter-symbol-series.md)
- [散布図比例シリーズの使用](geo-map-type-scatter-bubble-series.md)
- [散布等高線シリーズの使用](geo-map-type-scatter-contour-series.md)
- [散布図密度シリーズの使用](geo-map-type-scatter-density-series.md)
- [散布エリア シリーズの使用](geo-map-type-scatter-area-series.md)
- [シェイプ ポリゴン シリーズの使用](geo-map-type-shape-polygon-series.md)
- [シェイプ ポリライン シリーズの使用](geo-map-type-shape-polyline-series.md)

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

- `XamGeographicMap`
- `GeographicContourLineSeries`
- `GeographicHighDensityScatterSeries`
- `GeographicPolylineSeries`
- `GeographicShapeSeries`
- `GeographicProportionalSymbolSeries`
- `GeographicSymbolSeries`
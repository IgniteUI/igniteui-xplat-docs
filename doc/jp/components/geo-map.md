---
title: $PlatformShort$ マップ | データ可視化ツール | マップ概要 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ JavaScript マップ コンポーネントを使用して、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルからロードされた地理空間データを地理的画像マップに表示します。$ProductName$ マップのサンプルを是非お試しください!
_keywords: $PlatformShort$ map, geographic map, imagery tiles, $ProductName$, Infragistics, $PlatformShort$ マップ, 地理マップ, 画像タイル, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# $PlatformShort$ マップの概要

$ProductName$ Map コンポーネントを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープ ファイルからロードされた地理空間データを地理的画像マップに表示できます。

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-type-scatter-bubble-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-bubble-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-bubble-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="maps/geo-map/type-scatter-bubble-series"></sample-button>

<div class="divider--half"></div>


$PlatformShort$ 地図コンポーネントを使用すると、Bing Maps™ および Open Street Maps から地理的画像をレンダリングできます。マップは何万ものデータポイントをプロットし、コントロールがリアルタイム フィードを処理できるように数ミリ秒ごとにそれらを更新します。

マップの `Series` プロパティは、無制限の地理的シリーズのレンダリングをサポートするために使用されます。このプロパティは、地理的シリーズ オブジェクトのコレクションで、任意のタイプの地理的シリーズをそれに追加できます。たとえば、都市などの地理的位置をプロットするために `GeographicSymbolSeries`、またこれらの地理的位置の間の接続 (道路など) をプロットするために `GeographicPolylineSeries` を追加できます。

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

<!-- Angular, React, WebComponents -->
`XamGeographicMap` には以下のモジュールが必要ですが、Ig$DataChartInteractivityModule は、マップ コンテンツのパンやズームなどのマウス操作にのみ必要です。
<!-- end: Angular, React, WebComponents -->

<!-- Blazor -->
`XamGeographicMap` には以下のモジュールが必要ですが、DataChartInteractivityModule は、マップ コンテンツのパンやズームなどのマウス操作にのみ必要です。

GeographicMapModule.Register(IgniteUIBlazor);
DataChartInteractivityModule.Register(IgniteUIBlazor);
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
<GeographicMap Height="100%" Width="100%" Zoomable="true" />
```
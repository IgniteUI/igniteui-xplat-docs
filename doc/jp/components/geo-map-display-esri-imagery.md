---
title: $Platform$ マップ | データ可視化ツール | ESRI 画像の表示 | インフラジスティックス
_description: インフラジスティックスの $Platform$ を使用して ESRI Maps からの画像を表示します。$ProductName$ マップ チュートリアルを是非お試しください!
_keywords: $Platform$ map, ESRI, $ProductName$, Infragistics, imagery tile source, map background, $Platform$ マップ, ESRI, インフラジスティックス, 画像タイル ソース, マップ背景
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# $Platform$ Esri Maps から地理的画像を表示

`ArcGISOnlineMapImagery` は、<a href="https://www.esri.com/" target="_blank">Esri</a> によって作成された無料の地理的画像マッピング サービスです。世界の地理的画像タイルの 40 スタイル以上を提供します。この地理的画像サービスは、<a href="https://services.arcgisonline.com/ArcGIS/rest/services" target="_blank">www.arcgisonline.com</a> に直接アクセスして利用できます。

## $Platform$ Esri Maps から地理的画像を表示の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-esri-imagery"
           alt="$Platform$ Esri Maps から地理的画像を表示の例"
           github-src="maps/geo-map/display-esri-imagery">
</code-view>

<div class="divider--half"></div>

## コード スニペット
以下のコード スニペットは、`ArcGISOnlineMapImagery` クラスを使用して `XamGeographicMap` で Esri 画像サーバーからの $Platform$ 地理的画像タイルを表示する方法を示します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxArcGISOnlineMapImagery } from 'igniteui-angular-maps';
// ...
public geoMap: IgxGeographicMapComponent;

const tileSource = new IgxArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

this.geoMap.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
// ...
const tileSource = new IgrArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```ts
import { IgcGeographicMap } from 'igniteui-webcomponents-maps';
import { IgcArcGISOnlineMapImagery } from 'igniteui-webcomponents-maps';
// ...
const tileSource = new IgcArcGISOnlineMapImagery();
tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";

const geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent
geoMap.backgroundContent = tileSource;
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="EsriImagery" />

protected override void OnInitialized()
{
    IgbGeographicMapModule.Register(IgniteUIBlazor);
    IgbArcGISOnlineMapImagery imagery = new IgbArcGISOnlineMapImagery()
    {
        MapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer"
    };

    this.EsriImagery = imagery;
}
```

## Esri ユーティリティ
また、Esri 画像サーバーのすべてのスタイルを定義する [EsriUtility](geo-map-resources-esri.md) を使用することもできます。

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxArcGISOnlineMapImagery } from 'igniteui-angular-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
public geoMap: IgxGeographicMapComponent;

const tileSource = new IgxArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

this.geoMap.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
const tileSource = new IgrArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```ts
import { IgcGeographicMap } from 'igniteui-webcomponents-maps';
import { IgcArcGISOnlineMapImagery } from 'igniteui-webcomponents-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
// ...
const tileSource = new IgcArcGISOnlineMapImagery();
tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);

const geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent
geoMap.backgroundContent = tileSource;
```

```razor
@using IgniteUI.Blazor.Controls
@inject IIgniteUIBlazor IgniteUIBlazor

<IgbGeographicMap Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="EsriImagery" />

protected override void OnInitialized()
{
    IgbGeographicMapModule.Register(IgniteUIBlazor);
    IgbArcGISOnlineMapImagery imagery = new IgbArcGISOnlineMapImagery()
    {
        MapServerUri = EsriStyle.WorldOceansMap
    };

    this.EsriImagery = imagery;
}
```

## API メンバー

 - `ArcGISOnlineMapImagery`
 - `XamGeographicMap`
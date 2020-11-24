---
title: $PlatformShort$ マップ | データ可視化ツール | Bing 画像の表示 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ を使用して Microsoft Bing Maps からの画像を表示します。$ProductName$ マップ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ map, bing maps, $ProductName$, Infragistics, imagery tile source, map background, $PlatformShort$ マップ, bing マップ, インフラジスティックス, 画像タイル ソース, マップ背景
mentionedTypes: ['XamGeographicMap', 'BingMapsMapImagery']
_language: ja
---
# $PlatformShort$ Bing Maps 画像の表示

`BingMapsMapImagery` は、Microsoft® 社が提供する地理的画像マッピング サービスです。 世界の地理的画像タイルを 3 以上提供します。この地理的画像サービスは、<a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a> に直接アクセスして利用できます。$ProductName$ map コンポーネントは、`BingMapsMapImagery` クラスを使用して、地図の背景コンテンツに Bing Maps の地理的画像を表示します。

## $PlatformShort$ Bing Maps 画像の表示例

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-bing-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-bing-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Bing Maps 画像の表示例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-bing-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
<sample-button src="maps/geo-map/display-bing-imagery"></sample-button>

<div class="divider--half"></div>

## コード スニペット
以下のコード スニペットは、`BingMapsMapImagery` を使用して $PlatformShort$ `XamGeographicMap` で Bing Maps からの地理的画像を表示する方法を示します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxBingMapsMapImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxBingMapsMapImagery();
tileSource.apiKey = "YOUR_BING_MAPS_API_KEY";
tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels; // or
tileSource.imageryStyle = BingMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = BingMapsImageryStyle.Road;

// resolving BingMaps uri based on HTTP protocol of hosting website
let tileUri = tileSource.actualBingImageryRestUri;
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

this.map.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrBingMapsMapImagery } from 'igniteui-react-maps';
import { BingMapsImageryStyle } from 'igniteui-react-maps';
// ...
const tileSource = new IgrBingMapsMapImagery();
tileSource.apiKey = "YOUR_BING_MAPS_API_KEY";
tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels; // or
tileSource.imageryStyle = BingMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = BingMapsImageryStyle.Road;

// resolving BingMaps uri based on HTTP protocol of hosting website
let tileUri = tileSource.actualBingImageryRestUri;
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

## プロパティ
以下の表で、`BingMapsMapImagery` クラスのプロパティを説明します。

| プロパティ名  | プロパティ型   | 概要   |
|----------------|-----------------|---------------|
|`ApiKey`|string|Bing Maps 画像サービスで必要となる API キーを設定するためのプロパティを表します。このキーは <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> ウェブサイトから取得してください。|
|`ImageryStyle`|`BingMapsImageryStyle`|Bing Maps 画像タイルのマップ スタイルを設定するプロパティを表します。このプロパティは、以下の `BingMapsImageryStyle` 列挙値に設定できます。Aerial - 道路またはラベルオーバーレイなしの Aerial マップ スタイルを指定します。<ul><li> Aerial - 道路およびラベル付きの衛星地図スタイルを指定します。</li> <li> AerialWithLabels - 道路およびラベル付きの衛星地図スタイルを指定します。</li><li> Road - 衛星オーバーレイなしの道路地図スタイルを指定します。</li></ul>|
|`BingImageryRestUri`|string|TilePath と SubDomain の位置を指定する Bing Imagery REST URI を設定するためのプロパティを表します。これはオプションのプロパティです。指定されていない場合、デフォルトの REST URI を使用します。|
|`CultureName`|string|タイル ソースのカルチャ名を設定するためのプロパティを表します。|
|`IsDeferredLoad`|boolean|Bing Maps サービスが有効なプロパティ値の割り当てで自動初期化するかどうかを指定するプロパティを表します。|
|`IsInitialized`|boolean|True に設定されているプロパティは、Bing Maps サービスからの地理的画像タイルが初期化され、マップ コンポーネントでのレンダリングの準備ができたときに発生することを表します。|
|`SubDomains`|`SubDomainsCollection`|URI サブ ドメインの画像コレクションを表します。|
|`TilePath`|string|マップ タイル画像 URI を設定するプロパティを表します。これは Bing Maps の実際の位置です。|

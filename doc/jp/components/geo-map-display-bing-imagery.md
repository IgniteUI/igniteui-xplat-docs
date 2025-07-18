---
title: {Platform} マップ | データ可視化ツール | Bing 画像の表示 | インフラジスティックス
_description: インフラジスティックスの {Platform} を使用して Microsoft Bing Maps からの画像を表示します。{ProductName} マップ チュートリアルを是非お試しください!
_keywords: {Platform} map, bing maps, {ProductName}, Infragistics, imagery tile source, map background, {Platform} マップ, bing マップ, インフラジスティックス, 画像タイル ソース, マップ背景
mentionedTypes: ["XamGeographicMap", "BingMapsMapImagery"]
_language: ja
---
# {Platform} Bing Maps 画像の表示

NOTE: As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.

For more details:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

`BingMapsMapImagery` は、Microsoft® 社が提供する地理的画像マッピング サービスです。世界の地理的画像タイルを 3 以上提供します。この地理的画像サービスは、<a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a> に直接アクセスして利用できます。{ProductName} マップ コンポーネントは、`BingMapsMapImagery` クラスを使用して、地図の背景コンテンツに Bing Maps の地理的画像を表示します。

## {Platform} Bing Maps 画像の表示の例


<!-- `sample="/maps/geo-map/display-bing-imagery", height="500", alt="{Platform} Bing Maps 画像の表示の例"` -->

<img src="../images/general/BingMapsImagery.png" />

<div class="divider--half"></div>

## コード スニペット
以下のコード スニペットは、`BingMapsMapImagery` を使用して {Platform} `XamGeographicMap` で Bing Maps からの地理的画像を表示する方法を示します。

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
|`ApiKey`|文字列|Bing Maps 画像サービスで必要となる API キーを設定するためのプロパティを表します。このキーは <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> ウェブサイトから取得してください。|
|`ImageryStyle`|`BingMapsImageryStyle`|Bing Maps 画像タイルのマップ スタイルを設定するプロパティを表します。このプロパティは、以下の `BingMapsImageryStyle` 列挙値に設定できます。Aerial - 道路またはラベルオーバーレイなしの Aerial マップ スタイルを指定します。<ul><li> Aerial - 道路およびラベル付きの衛星地図スタイルを指定します。</li> <li> AerialWithLabels - 道路およびラベル付きの衛星地図スタイルを指定します。</li><li> Road - 衛星オーバーレイなしの道路地図スタイルを指定します。</li></ul>|
|`BingImageryRestUri`|文字列|TilePath と SubDomain の位置を指定する Bing Imagery REST URI を設定するためのプロパティを表します。これはオプションのプロパティです。指定されていない場合、デフォルトの REST URI を使用します。|
|`CultureName`|文字列|タイル ソースのカルチャ名を設定するためのプロパティを表します。|
|`IsDeferredLoad`|ブール値|Bing Maps サービスが有効なプロパティ値の割り当てで自動初期化するかどうかを指定するプロパティを表します。|
|`IsInitialized`|ブール値|True に設定されているプロパティは、Bing Maps サービスからの地理的画像タイルが初期化され、マップ コンポーネントでのレンダリングの準備ができたときに発生することを表します。|
|`SubDomains`|`SubDomainsCollection`|URI サブ ドメインの画像コレクションを表します。|
|`TilePath`|文字列|マップ タイル画像 URI を設定するプロパティを表します。これは Bing Maps の実際の位置です。|

## API リファレンス

 - `BingMapsImageryStyle`
 - `BingMapsMapImagery`
 - `XamGeographicMap`
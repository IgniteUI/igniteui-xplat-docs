---
title: $Platform$ マップ | データ可視化ツール | Open Street Maps 画像の表示 | インフラジスティックス
_description: インフラジスティックスの $Platform$ を使用して OSM Maps からの画像を表示します。$ProductName$ マップ チュートリアルを是非お試しください!
_keywords: $Platform$ map, OSM, $ProductName$, Infragistics, imagery tile source, map background, $Platform$ マップ, インフラジスティックス, 画像タイル ソース, マップ背景
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# $Platform$ オープン ストリート マップ画像の表示

$Platform$ `OpenStreetMapImagery` は、世界中の OpenStreetMap© のコントリビューターが共同で作成した無料の地理的画像マッピングサービスです。これは、構成オプションなしで、道路地図スタイル限定で世界の地理的画像を提供します。この地理的画像サービスは、<a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> に直接アクセスして利用できます。
デフォルトでは、$ProductName$ マップ コンポーネントには、Open Street Maps の地理的画像が既に表示されています。したがって、Open Street Maps から地理的画像を表示するように、コントロールを構成する必要はありません。

## $Platform$ オープン ストリート マップ画像の表示の例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-osm-imagery"
           alt="$Platform$ オープン ストリート マップ画像の表示の例"
           github-src="maps/geo-map/display-osm-imagery">
</code-view>

<div class="divider--half"></div>

## コード スニペット
このコード例では、マップ コンポーネントの `BackgroundContent` を OpenStreetMap© コントリビューターの地理画像を提供する `OpenStreetMapImagery` オブジェクトに明示的に設定します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxOpenStreetMapImagery } from 'igniteui-angular-maps';
// ...
public map: IgxGeographicMapComponent;

const tileSource = new IgxOpenStreetMapImagery();
this.map.backgroundContent = tileSource;
```

```ts
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrOpenStreetMapImagery } from 'igniteui-react-maps';
// ...
const tileSource = new IgrOpenStreetMapImagery();

const geoMap = new IgrGeographicMap({ name: "geoMap" });
geoMap.backgroundContent = tileSource;
```

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcOpenStreetMapImagery } from 'igniteui-webcomponents-maps';
// ...

let geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent

const mapImagery = new OpenStreetMapImagery();
this.geoMap.backgroundContent = mapImagery;
```

```razor
<IgbGeographicMap Height="100%" Width="100%" Zoomable="true"
    BackgroundContent="OSMImagery" />

@code {

    public IgbOpenStreetMapImagery OSMImagery;

    protected override void OnInitialized()
    {
        IgbGeographicMapModule.Register(IgniteUIBlazor);
        this.OSMImagery = new IgbOpenStreetMapImagery();
    }
}
```


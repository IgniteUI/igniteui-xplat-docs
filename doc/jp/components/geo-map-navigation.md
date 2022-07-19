---
title: $Platform$ マップ | データ可視化ツール | マップ ナビゲーション | インフラジスティックス
_description: インフラジスティックスの $Platform$ マップをナビゲートするには、マウスまたはタッチを使用して左右にパンニングし、水平および垂直にズームします。$ProductName$ マップのナビゲーション機能について説明します。
_keywords: $Platform$ map, navigation, $ProductName$, Infragistics, $Platform$ マップ, ナビゲーション, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# $Platform$ コンテンツのナビゲーション

`XamGeographicMap` コントロールのナビゲーションは、既定では有効にされており、マップ コンテンツのズームとパンが可能です。ただし、この動作は `Zoomable` プロパティを使用して変更できます。マップでは同期ズームのみが許可されていること、つまり、アスペクト比を維持したままマップコンテンツをスケーリングすることを知っておくことが重要です。結果として、マップコンテンツを水平方向にスケーリングせずに垂直方向にスケーリングすることはできません。

## $Platform$ コンテンツのナビゲーションの例


<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-navigation"
           alt="$Platform$ コンテンツのナビゲーションの例"
           github-src="maps/geo-map/navigation">
</code-view>

<div class="divider--half"></div>

## 地理座標

これらの座標で囲まれた地理的領域内の地図コンテンツをナビゲートします。
- 水平方向に 180°E (マイナス) から 180°W (プラス) の経度
- 垂直方向に 85°S (マイナス) から 85°N (プラス) の緯度

このコード スニペットは、地理座標を使用してマップをナビゲートする方法を示しています。

```ts
const geoMap = new IgrGeographicMap({ name: "geoMap" });

geoMap.zoomToGeographic({ left: -134.5, top: 16.5, width: 70.0, height: 37.0 });
```

```razor
this.GeoMap.ZoomToGeographic(new Rect() { Left = -134.5, Top = 16.5, Width = 70.0, Height = 37.0 });
```

## ウィンドウ座標

また、これらの相対座標で区切られたウィンドウ長方形内でマップ コンテンツをナビゲーションできます。
- 水平方向に 0.0 から 1.0 の値
- 垂直方向に 0.0 から 1.0 の値

このコード スニペットは、相対ウィンドウ座標を使用してマップをナビゲートする方法を示しています。

```ts
const geoMap = new IgrGeographicMap({ name: "geoMap" });

geoMap.windowRect = { left: 0.1, top: 0.1, width: 0.5, height: 0.5 };
// or
geoMap.windowPositionHorizontal = 0.1;
geoMap.windowPositionVertical = 0.1;
geoMap.windowScale = 0.5;
```

```razor
this.GeoMap.ZoomToGeographic(new Rect() { Left = 0.1, Top = 0.1, Width = 0.5, Height = 0.5 });
// or
this.GeoMap.WindowPositionHorizontal = 0.1;
this.GeoMap.WindowPositionVertical = 0.1;
this.GeoMap.WindowScale = 0.5;
```

## プロパティ
以下の表は `XamGeographicMap` コントロールのナビゲーションで使用できるプロパティをまとめたものです。

| プロパティ名  | プロパティ型   | 概要   |
|----------------|-----------------|---------------|
|`WindowRect`| Rect | 地図コンテンツの表示領域にナビゲーション ウィンドウの新しい位置とサイズを設定します。0、0、1、1 の値で長方形を指定すると、ナビゲーション ウィンドウのマップ コンテンツ全体がズームアウトされます。 |
|`WindowScale`| number | マップ コントロールのナビゲーション ウィンドウの新しいサイズを設定します。`WindowRect` プロパティに格納されている Width または Height の最小値です。 |
|`WindowPositionHorizontal`| number | マップ コントロールの左端からのナビゲーション ウィンドウのアンカー ポイントの新しい水平位置を設定します。これは `WindowRect` プロパティの Left に保存された値と等しくなります。 |
|`WindowPositionVertical`| number | ナビゲーション ウィンドウのアンカー ポイントの、地図コントロールの上端からの新しい垂直位置を設定します。これは `WindowRect` プロパティの Top に保存された値と等しくなります。 |
|`ActualWindowRect`| Rect | マップ コンテンツの表示領域内のナビゲーション ウィンドウの現在の位置とサイズを示します。0、0、1、1の値で長方形を指定すると、ナビゲーション ウィンドウにマップ コンテンツ全体が表示されます。  |
|`ActualWindowScale`| number | マップ コントロールのナビゲーション ウィンドウの現在のサイズを示します。`ActualWindowRect` プロパティに格納されている Width または Height の最小値と同じです。 |
|`ActualWindowPositionHorizontal`| number | マップ コントロールの左端からのナビゲーション ウィンドウのアンカー ポイントの現在の水平位置を示します。`ActualWindowRect` プロパティの Left に保存された値と等しくなります。 |
|`ActualWindowPositionVertical`| number | マップコントロールの上端からのナビゲーションウィンドウのアンカーポイントの垂直位置を示します。`ActualWindowRect` プロパティの Top に保存された値と等しくなります。 |

## API メンバー

 - `ActualWindowRect`
 - `WindowRect`
 - `XamGeographicMap`
 - `Zoomable`
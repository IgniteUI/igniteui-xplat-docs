---
title: {Platform} マップ | データ可視化ツール | 地理的シリーズ タイプ | インフラジスティックス
_description: インフラジスティックスの {Platform} マップ シリーズを使用して、地理的なデータをポイント (都市の位置など)、ポリライン (道路の接続など)、またはポリゴン (国の形状) として地理的コンテキストで表示します。{ProductName} マップ シーリズについての詳細を表示します。
_keywords: {Platform} map, geographic series, {ProductName}, Infragistics, {Platform} マップ, 地理的シリーズ, インフラジスティックス
mentionedTypes: ["XamGeographicMap", "Series"]
_language: ja
---

# {Platform} 地理的シリーズの概要

{ProductName} マップ コンポーネントでは、地理的シリーズは、地理的なデータをポイント (都市の位置など)、ポリライン (道路の接続など)、またはポリゴン (国の形状) として地理的コンテキストで表示する地図の視覚的要素です。
マップ コンポーネントの Series プロパティは、地理的なシリーズオブジェクトのコレクションです。このプロパティは、同じプロット領域に無制限の地理的系列を描画するのをサポートするために使用されます。複数の地理的シリーズ オブジェクトが Series プロパティに追加される場合、それぞれの連続するシリーズは、先頭から最後のシリーズに向かって開始する前のシリーズの上にレイヤーされます。したがって、地理的シリーズは、互いの上および地理的画像 (またはそのいずれか) の上に積み重ねることができる地図として理解できます。

地理的シリーズのすべてのタイプは、常に地理的画像タイルの上に描画されます。ただし、場合によっては地理的シリーズ (たとえば、世界の詳細なシェイプ ファイルがある) は、アプリケーションで十分な地理的コンテキストを提供しており、地理的画像は Map コントロールで必要とはされません。


## 地理的シリーズのタイプ

{Platform} 地理マップ コンポーネントは、以下の種類の地理的シリーズをサポートします。

- [散布図記号シリーズの使用](geo-map-type-scatter-symbol-series.md)
- [散布図比例シリーズの使用](geo-map-type-scatter-bubble-series.md)
- [散布等高線シリーズの使用](geo-map-type-scatter-contour-series.md)
- [散布図密度シリーズの使用](geo-map-type-scatter-density-series.md)
- [散布エリア シリーズの使用](geo-map-type-scatter-area-series.md)
- [シェイプ ポリゴン シリーズの使用](geo-map-type-shape-polygon-series.md)
- [シェイプ ポリライン シリーズの使用](geo-map-type-shape-polyline-series.md)

## API リファレンス

 - `XamGeographicMap`
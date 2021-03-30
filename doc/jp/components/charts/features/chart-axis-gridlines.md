---
title: $PlatformShort$ 軸グリッド線 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 軸グリッド線
_keywords: $PlatformShort$ Axis, Gridlines, Infragistics, $PlatformShort$ 軸, グリッド線, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

# $PlatformShort$ 軸グリッド線

すべての $ProductName$ チャートには、軸線の外観、および x 軸と y 軸に描画される主/副グリッド線と目盛りの頻度を変更する機能が組み込まれています。これらの機能は、以下の例で示されています。

## 軸グリッド線の例

軸の主グリッド線は、軸ラベルの位置から水平 (y 軸) または垂直 (x 軸) に伸びる長い線であり、チャートのプロット領域を介して描画されます。軸の副グリッド線は、軸の主グリッド線の間に描画される線です。この例は、軸グリッド線を構成する方法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## 軸グリッド線のプロパティ

次の表に、構成できる軸グリッド線のすべてのプロパティを示します。

軸ビジュアル           | タイプ    | プロパティ名
-----------------------|---------|-----------------------
主ストロークの色     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
副ストロークの色     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
主ストロークの太さ | 数  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness`
副ストロークの太さ | 数  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness`
主間隔         | 数  | `XAxisInterval` <br> `YAxisInterval`
副間隔         | 数  | `XAxisMinorInterval` <br> `YAxisMinorInterval`

> 注: `XAxisInterval` プロパティと `YAxisInterval` プロパティは、軸の主グリッド線と軸の目盛りの頻度を制御します。


## 軸目盛りの例

軸の目盛りは、軸の主グリッド線から軸ラベルに向かって伸びる短い線です。この例は、軸の目盛りを設定する方法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-tickmarks"
           alt="$PlatformShort$ 軸目盛りの例"
           github-src="charts/category-chart/axis-tickmarks">
</code-view>

<div class="divider--half"></div>

## 軸グリッド線のプロパティ

この表に、構成できる軸の目盛りプロパティを示します。次の例は、それらの目盛りプロパティを設定する方法を示しています。 

軸ビジュアル           | タイプ    | プロパティ名
-----------------------|---------|-----------------------
目盛りのストロークの色      | 文字列  | `XAxisTickStroke` <br> `YAxisTickStroke`
目盛りのストロークの太さ  | 数  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness`
目盛りのストロークの長さ     | 数  | `XAxisTickLength` <br> `YAxisTickLength`


## その他のリソース

- [軸レイアウト](chart-axis-layouts.md)
- [軸オプション](chart-axis-options.md)
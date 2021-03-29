---
title: $PlatformShort$ 軸グリッド線 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 軸グリッド線
_keywords: $PlatformShort$ Axis, Gridlines, Infragistics, $PlatformShort$ 軸, グリッド線, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

# $PlatformShort$ 軸グリッド線

すべての $ProductName$ チャートには、軸線の外観、および x 軸と y 軸に描画される主/副グリッド線と目盛りの頻度を変更する機能が組み込まれています。These features are demonstrated in the examples given below.

## 軸グリッド線の例

Axis major gridlines are long lines that extend horizontally (y-axis) or vertically (x-axis) from locations of axis labels and they render through plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines. This example shows how to configure axis gridline.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## 軸グリッド線のプロパティ

The following table lists all properties of axis gridline that you can configure.

軸ビジュアル           | タイプ    | プロパティ名
-----------------------|---------|-----------------------
主ストロークの色     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
副ストロークの色     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
主ストロークの太さ | 数  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness`
副ストロークの太さ | 数  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness`
主間隔         | 数  | `XAxisInterval` <br> `YAxisInterval`
副間隔         | 数  | `XAxisMinorInterval` <br> `YAxisMinorInterval`

> NOTE The `XAxisInterval`and `YAxisInterval` properties control frequency of axis major gridlines as well as frequency of axis tickmarks.


## 軸目盛りの例

Axis tickmarks are short lines that extend from axis major gridlines towards axis labels. This example shows how to configure axis tickmark.

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
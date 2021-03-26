---
title: $PlatformShort$ 軸グリッド線 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 軸グリッド線
_keywords: $PlatformShort$ Axis, Gridlines, Infragistics, $PlatformShort$ 軸, グリッド線, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

# $PlatformShort$ 軸グリッド線

すべての $ProductName$ チャートには、x 軸と y 軸に描画されたグリッド線と目盛りの外観と頻度を変更する機能が組み込まれています。これらの機能は、以下の例で示されています。

## 軸グリッド線の例

この表に、構成できる軸のグリッド線プロパティを示します。次の例は、それらのグリッド線プロパティを設定する方法を示しています。

軸ビジュアル           | タイプ    | プロパティ名
-----------------------|---------|-----------------------
主ストロークの色     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
副ストロークの色     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
主ストロークの太さ | 数  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness`
副ストロークの太さ | 数  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness`
主間隔         | 数  | `XAxisInterval` <br> `YAxisInterval`
副間隔         | 数  | `XAxisMinorInterval` <br> `YAxisMinorInterval`

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## 軸目盛の例

この表に、構成できる軸の目盛りプロパティを示します。次の例は、それらの目盛りプロパティを設定する方法を示しています。 

軸ビジュアル           | タイプ    | プロパティ名
-----------------------|---------|-----------------------
目盛りのストロークの色      | 文字列  | `XAxisTickStroke` <br> `YAxisTickStroke`
目盛りのストロークの太さ  | 数  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness`
目盛りのストロークの長さ     | 数  | `XAxisTickLength` <br> `YAxisTickLength`

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-tickmarks"
           alt="$PlatformShort$ 軸目盛の例"
           github-src="charts/category-chart/axis-tickmarks">
</code-view>

<div class="divider--half"></div>


## その他のリソース

- [軸レイアウト](axis-layout.md)
- [軸オプション](axis-options.md)
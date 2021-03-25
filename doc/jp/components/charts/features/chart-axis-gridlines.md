---
title: $PlatformShort$ 軸グリッド線 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 軸グリッド線
_keywords: $PlatformShort$ Axis, Gridlines, Infragistics, $PlatformShort$ 軸, グリッド線, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

# $PlatformShort$ 軸グリッド線

All $ProductName$ charts include built-in capability to modify appearance and frequency pf gridlines and tickmarks rendered on x-axis and y-axis. These features are demonstrated in the examples given below.

## 軸グリッド線の例

This table lists gridline properties of axes that you can configure and the following example demonstrates how to set those gridline properties.

軸ビジュアル           | タイプ    | プロパティ名
-----------------------|---------|-----------------------
Major Stroke Color     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
Minor Stroke Color     | 文字列  | `XAxisMajorStroke` <br> `YAxisMajorStroke`
Major Stroke Thickness | 数  | `XAxisMajorStrokeThickness` <br> `YAxisMajorStrokeThickness`
Minor Stroke Thickness | 数  | `XAxisMinorStrokeThickness` <br> `YAxisMinorStrokeThickness`
Major Interval         | 数  | `XAxisInterval` <br> `YAxisInterval`
Minor Interval         | 数  | `XAxisMinorInterval` <br> `YAxisMinorInterval`

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="$PlatformShort$ 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## 軸目盛の例

This table lists tickmark properties of axes that you can configure and the following example demonstrates how to set those gridline properties.

軸ビジュアル           | タイプ    | プロパティ名
-----------------------|---------|-----------------------
Tick Stroke Color      | 文字列  | `XAxisTickStroke` <br> `YAxisTickStroke`
Tick Stroke Thickness  | 数  | `XAxisTickStrokeThickness` <br> `YAxisTickStrokeThickness`
Tick Stroke Length     | 数  | `XAxisTickLength` <br> `YAxisTickLength`

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
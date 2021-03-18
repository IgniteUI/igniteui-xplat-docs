---
title: $PlatformShort$ エリア チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ エリア チャート
_keywords: $PlatformShort$ Charts, Area Chart, Infragistics, $PlatformShort$ チャート, エリア チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---
# $PlatformShort$ エリア チャート

The $ProductName$ Area Chart is based on a line or spline series. Therefore, it is often chronological, showing a change of quantity e.g. accumulation of a commodity over time.

An Area Chart is rendered using a collection of points connected by straight line segments with the area below the line filled in. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). Area Charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-with-legend" 
           alt="$PlatformShort$ 凡例付きの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

このサンプルが気に入りましたか? 完全な $PlatformShort$ ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/download">無料でダウンロードできます。</a>

An Area Chart is similar to a Line Chart in that data points are plotted and connected by straight line segments, however they differ because with an Area Chart, the area between the X-Axis and the line is filled in.

The AreaSeries is identical to the SplineAreaSeries in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

There are several use cases for an Area Chart. When you:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.
- Need to compare the trends of your data over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize details time-series data.

Area Chart best practices:

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use transparent colors to ensure that data that is plotted behind another series is not blocked.

Do not use an Area Chart when:

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period). This makes overlapped shaded areas impossible to differentiate.

Data Structure:

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source should contain two or more data items in order to render a line between them.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## 単一シリーズの $PlatformShort$ エリア チャート

以下の例に示すように、$PlatformShort$ エリア チャートは、ヨーロッパで 2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-single-source" 
           alt="単一シリーズの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ エリア チャート

Similarly to how you can show multiple series with Line and Spline Charts, you may also combine multiple series in an Area Chart.


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-multiple-sources" 
           alt="複数シリーズの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ エリア チャートのスタイル設定

Area charts often have semi-transparent fill for their areas, thicker lines and slightly larger markers than usual. Below is an example showing how you can style the Area Chart from earlier accordingly.


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-styling" 
           alt="$PlatformShort$ エリア チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ステップ エリア チャート

ステップ エリア チャートはカテゴリ チャートのグループに属し、連続する垂直線と水平線で接続されたポイントのコレクションを使用して描画され、線の下の領域は塗りつぶされます。値は y 軸に表示され、カテゴリが表示されます x 軸上。ステップ エリア チャートは、一定期間の変化量を強調するか、複数の項目を比較します。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources" 
           alt="$PlatformShort$ ステップ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 範囲エリア チャート

Sometimes instead of showing the area you may want to show the area for a range between two values over time.

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-area-chart" 
           alt="$PlatformShort$ 範囲エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型エリア チャート

積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart" 
           alt="$PlatformShort$ 積層型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100 エリア チャート 

このシリーズは、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表す場合があります。このような場合、積層されたすべての要素を均等に表すことをお勧めします。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart" 
           alt="$PlatformShort$ 積層型 100 エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型スプライン エリア チャート

積層型スプライン エリア チャートは、曲線スプライン セグメントで接続されたポイントのコレクションを使用して描画され、曲線スプラインの下の領域が塗りつぶされ、互いに重ねて表示されます。積層型スプライン エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積み重なっていることです。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-area-chart" 
           alt="$PlatformShort$ 積層型スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ 積層型 100 スプライン エリア チャート

積層型 100 スプライン エリア チャートは、y 軸の値の処理を除いて、すべての点で積層型スプラインエリア チャートと同じです。データを直接表現するのでなく、積層型 100 スプライン エリア チャートは、特定のデータ ポイント内のすべての値の合計の割合でデータを表します。チャートは、時間の経過とともに変化する全体の一部を表す場合があります。たとえば、生産元に関連する国のエネルギー消費量。このような場合、積層されたすべての要素を均等に表すことをお勧めします。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-area-chart" 
           alt="$PlatformShort$ 積層型 100 スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル エリア チャート

ラジアル エリア チャートはラジアル チャートのグループに属し、データ ポイントを接続する直線のコレクションによってバインドされた塗りつぶされたポリゴンの形状を持っています。このグラフ チャートは、エリア チャートと同じデータ プロットの概念を使用しますが、データ ポイントを水平線に沿って伸ばすのではなく、円形の軸の周りにラップします。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart" 
           alt="$PlatformShort$ ラジアル エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 極座標型エリア チャート

極座標エリア チャートは極座標チャートのグループに属し、塗りつぶされたポリゴンの形状を持ちます。頂点または角はデータ ポイントの極座標 (角度/半径) に配置され、直線で接続されてから、接続されたポイントによって表された領域を塗りつぶします。極座標エリア チャートは、散布マーカー チャートと同じデータ プロットの概念を使用しますが、水平線に沿って塗りつぶされたポイントと領域を引き伸ばすのではなく、代わりに円の周りにポイントをラップし、描画された領域を塗りつぶします。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-area-series" 
           alt="$PlatformShort$ 極座標型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 極座標型スプライン エリア チャート

極座標スプライン エリア チャートは極座標チャートのグループに属し、塗りつぶされたポリゴンの形状を持ちます。頂点または角はデータ ポイントの極座標 (角度/半径) に配置され、曲線スプラインで接続されてから接続されたポイントで表された領域を塗りつぶします。極座標スプライン エリア チャートは、散布マーカー チャートと同じデータ プロットの概念を使用しますが、水平線に沿って塗りつぶされたポイントと領域を引き伸ばすのではなく、代わりに円の周りにポイントをラップして、描画された領域を塗りつぶします。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-spline-area-series" 
           alt="$PlatformShort$ 極座標型スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース
- [軸の注釈](data-chart-axis-annotations.md)
- [軸オプション](chart-features-axis-options.md)
- [軸グリッド線](chart-features-axis-gridlines.md)
- [チャート強調表示](chart-features-highlighting.md)

<!-- TODO list API links used in this topic 
## API Members
-->

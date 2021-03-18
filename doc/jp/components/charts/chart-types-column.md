---
title: $PlatformShort$ 縦棒チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 縦棒チャート
_keywords: $PlatformShort$ Charts, Column Chart, Infragistics, $PlatformShort$ チャート, 縦棒チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---
# $PlatformShort$ 縦棒チャート

The $ProductName$ Column Chart is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points. A Column Chart emphasizes the amount of change over a period of time or compares multiple items. Values are represented on the Y-Axis (NumericYAxis) and categories are displayed on the X-Axis (CategoryXAxis).


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-legend" 
           alt="凡例付きの $PlatformShort$ 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

このサンプルが気に入りましたか? 完全な $PlatformShort$ ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。 <a href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/download">無料でダウンロードできます。</a>

A Column Chart uses the same concepts of data plotting as the Bar Chart but data points are stretched along a horizontal line (X-Axis) rather than vertical line (Y-Axis). In other words, the Column Chart is rendered like the Bar Chart but with 90 degrees counter-clockwise rotation.

There are several uses cases for a Column Chart. When you:

- Need to compare data values of related categories.
- Need to compare data over a time period.
- Need to display negative values as well as positive values in the same data set.
- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

Column Chart Best Practices:

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.

Do not Use a Column Chart When:

- You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

Data Structure: 

- The data model must contain at least one numeric property.
- The data model may contain an options string or date-time property for labels.
- The data source should contain at least one data item.

## 単一シリーズの $PlatformShort$ 縦棒チャート

縦棒シリーズは、カテゴリ シリーズのグループに属し、チャートの下から上へデータ ポイント値に向かって延びる四角形のコレクションを使用して描画されます。この例では、縦棒チャートは月平均気温を使用しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-single-source" 
           alt="単一シリーズの $PlatformShort$ 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ 縦棒チャート

縦棒チャートは、比較のためにカテゴリごとに複数の列を描画できます。この例では、縦棒チャートは人気のある映画フランチャイズの興行収入を比較しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources" 
           alt="複数シリーズの $PlatformShort$ 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 縦棒チャートのスタイル設定

$PlatformShort$ 縦棒チャートには、外観のスタイル設定と変更のための多くのオプションがあります。たとえば、以下のサンプルは、X 軸に交差値を使用する方法と、マーカー テンプレートを使用して、対応する列の上 (または下) に項目の値を表示する方法を示しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-column-chart-styling" 
           alt="$PlatformShort$ 縦棒チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ウォーターフォール チャート

ウォーターフォール チャートはカテゴリ チャートのグループに属し、連続するデータポイント間の差を示す垂直列のコレクションを使用して描画されます。値の正/負の変化を区別するため、列は色分けされます。 The Waterfall Chart is similar in appearance to the Range Column Chart, but it requires only one numeric data column rather than two columns for each data point.


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart" 
           alt="$PlatformShort$ ウォーターフォール チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型縦棒チャート

積層型縦棒チャートは、シリーズが横ではなく上に表示されることを除いて、すべての面で縦棒チャートと同じです。積層型縦棒チャートは、シリーズ間の結果の比較を示すために使用されます。Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the Stacked Bar Chart but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

以下の例では、米国、ヨーロッパ、中国の間で生成された再生可能電力を示しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart" 
           alt="$PlatformShort$ 積層型縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100 縦棒チャート

積層型 100 縦棒チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型縦棒チャートと同じです。データを直接表現するのでなく、積層型 100 縦棒は、データ ポイント内のすべての値の合計の割合でデータを表します。

以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart" 
           alt="$PlatformShort$ 積層型 100 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 範囲縦棒チャート

The $ProductName$ Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional Column Chart.このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数の項目を比較します。範囲値は Y 軸に表示され、カテゴリは X 軸に表示されます。

The Range Column chart is identical to the Range Area chart in all aspects except that the ranges are represented as a set of vertical columns rather than filled area.

この範囲縦棒チャートの例では、日付ごとの高温と低温の間の気象データの差異が示されています。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart" 
           alt="$PlatformShort$ 範囲縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル縦棒チャート

ラジアル縦棒チャートは、ラジアル チャートのグループに属し、チャートの中心からデータ ポイントの位置に向かって伸びる長方形のコレクションを使用して描画されます。これは縦棒チャートと同じデータ プロットの概念を使用していますが、データ ポイントを横の線に並べるのではなく、データ ポイントを円でラップします。

In this Radial Column chart sample, player stats are compared against different soccer skills. 

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart" 
           alt="$PlatformShort$ ラジアル縦棒チャート" >
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
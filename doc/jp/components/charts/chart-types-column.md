---
title: $PlatformShort$ 縦棒チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 縦棒チャート
_keywords: $PlatformShort$ Charts, Column Chart, Infragistics, $PlatformShort$ チャート, 縦棒チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---
# $PlatformShort$ 縦棒チャート

$PlatformShort$ 縦棒チャート、縦棒グラフ、または垂直縦棒チャートは、さまざまなカテゴリのデータの頻度、カウント、合計、または平均を縦棒または同じ幅で異なる長さのデータとすばやく比較するために使用される最も一般的なカテゴリ チャート タイプの 1 つです。これらは、時間の経過とともに、項目の価値の変化を示すのに理想的です。データは、チャートの左から右にデータ ポイントの値に向かって伸びる長方形のコレクションを使用して表されます。縦棒チャートは、CategoryXAxis および NumericYAxis とペアになっています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-legend" 
           alt="凡例付きの $PlatformShort$ 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

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

ウォーターフォール チャートはカテゴリ チャートのグループに属し、連続するデータポイント間の差を示す垂直列のコレクションを使用して描画されます。値の正/負の変化を区別するため、列は色分けされます。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart" 
           alt="$PlatformShort$ ウォーターフォール チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型縦棒チャート

積層型縦棒チャートは、シリーズが横ではなく上に表示されることを除いて、すべての面で縦棒チャートと同じです。積層型縦棒チャートは、シリーズ間の結果の比較を示すために使用されます。以下の例では、米国、ヨーロッパ、中国の間で生成された再生可能電力を示しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart" 
           alt="$PlatformShort$ 積層型縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100 縦棒チャート

積層型 100 縦棒チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型縦棒チャートと同じです。データを直接表現するのでなく、積層型 100 縦棒は、データ ポイント内のすべての値の合計の割合でデータを表します。以下の例は、タブレット、携帯電話、およびコンピューターを介した部門によるオンライン ショッピング トラフィックについて行われた調査を示しています。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart" 
           alt="$PlatformShort$ 積層型 100 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 範囲縦棒チャート

$ProductName$ 範囲縦棒チャートは、範囲チャートのグループに属し、線の間の領域が塗りつぶされた 2 本の線を使用してレンダリングされます。このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数の項目を比較します。範囲値は Y 軸に表示され、カテゴリは X 軸に表示されます。

この範囲縦棒チャートの例では、日付ごとの高温と低温の間の気象データの差異が示されています。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart" 
           alt="$PlatformShort$ 範囲縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル縦棒チャート

ラジアル縦棒チャートは、ラジアル チャートのグループに属し、チャートの中心からデータ ポイントの位置に向かって伸びる長方形のコレクションを使用して描画されます。これは縦棒チャートと同じデータ プロットの概念を使用していますが、データ ポイントを横の線に並べるのではなく、データ ポイントを円でラップします。

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
---
title: $PlatformShort$ エリア チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ エリア チャート
_keywords: $PlatformShort$ Charts, Area Chart, Infragistics, $PlatformShort$ チャート, エリア チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---
# $PlatformShort$ エリア チャート

$PlatformShort$ エリア チャート (エリア グラフ) は、線の下のエリアが塗りつぶされた線分で接続されたポイントのコレクションを示すカテゴリ エリア チャートの一種です。Y 軸 (左側のラベル) は数値を示し、X 軸 (下側のラベル) は時系列または比較カテゴリを示します。エリア チャートは時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。比較する 1 つ以上のデータセットを含めることができます。これはチャートで複数のエリアとして描画されます。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-with-legend" 
           alt="凡例付きの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの $PlatformShort$ エリア チャート 

以下の例に示すように、$PlatformShort$ エリア チャートは、ヨーロッパで 2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-single-source" 
           alt="単一シリーズの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ エリア チャート

$PlatformShort$ エリア チャートを使用すると、複数のシリーズを組み合わせて、時間の経過とともにどのように変化するかを比較または確認できます。ヨーロッパ、中国と米国のデータを含むデータ ソースにバインドするだけで、エリア チャートは追加データに合わせて自動的に更新されます。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-multiple-sources" 
           alt="複数ソースの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ エリア チャートのスタイル設定

以下に示すように、マーカー アウトライン、マーカー ブラシ、シリーズ ブラシ、シリーズ アウトラインなど、追加のスタイル設定をエリア チャート シリーズで構成できます。


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

<!-- TODO copy and combine content (code snippets, iframes, description) from these topics:
	data-chart-type-range-area-series.md
-->

## $PlatformShort$ 積層型エリア チャート

積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。以下の例では、米国、ヨーロッパ、中国の間で生成された再生可能電力を示しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart" 
           alt="$PlatformShort$ 積層型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100 エリア シリーズ 

積層型 100 エリア チャートは、Y 軸上の値の取り扱いを除いたすべての面で 積層型エリア シリーズと同じです。データを直接表現するのでなく、積層型 100 エリア シリーズは、データ ポイント内のすべての値の合計の割合でデータを表します。このシリーズは、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表す場合があります。このような場合、積層されたすべての要素を均等に表すことをお勧めします。

<!-- 
<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart" 
           alt="$PlatformShort$ Stacked 100 Area Chart" >
</code-view>

-->

<div class="divider--half"></div>

## $PlatformShort$ 積層型 スプライン エリア シリーズ 

<div class="divider--half"></div>


## $PlatformShort$ 積層型 100 スプライン エリア シリーズ 

<div class="divider--half"></div>

## $PlatformShort$ ラジアル エリア チャート


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart" 
           alt="$PlatformShort$ ラジアル エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 極座標型エリア チャート

<!-- TODO copy and combine content (code snippets, iframes, description) from these topics:
	data-chart-type-polar-area-series.md
	data-chart-type-polar-spline-area-series.md
-->

## $PlatformShort$ 極座標型スプライン エリア チャート

<!-- TODO copy and combine content (code snippets, iframes, description) from these topics:
	data-chart-type-polar-area-series.md
	data-chart-type-polar-spline-area-series.md
-->

<!-- TODO list API links used in this topic 
## API メンバー
-->

---
title: $PlatformShort$ エリア チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ エリア チャート
_keywords: $PlatformShort$ Charts, Area Chart, Infragistics, $PlatformShort$ チャート, エリア チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---
# $PlatformShort$ エリア チャート

$PlatformShort$ エリア チャート (エリア グラフ) は、線の下のエリアが塗りつぶされた直線セグメントで接続されたポイントのコレクションを示すカテゴリ エリア チャートの一種です。Y 軸 (左側のラベル) は数値を示し、X 軸 (下側のラベル) は時系列または比較カテゴリを示します。エリア チャートは時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。比較する 1 つ以上のデータセットを含めることができます。これはチャートで複数のエリアとして描画されます。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-with-legend" 
           alt="$PlatformShort$ 凡例付きの $PlatformShort$ エリア チャート" >
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
           alt="複数シリーズの $PlatformShort$ エリア チャート" >
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

範囲エリア チャートは、範囲チャートのグループに属し、塗りつぶされる線の間の領域で 2 つの線を描画します。このタイプのシリーズは、一定時間にわたる同一データ ポイントにおける安値と高値間の変更量を強調します。これは以下のサンプルで示され、2020 年の特定の月のニュー ヨーク市の最高気温と最低気温を示しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-area-chart" 
           alt="$PlatformShort$ 範囲エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型エリア チャート

積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。以下の例では、米国、ヨーロッパ、中国の間で生成された再生可能電力を示しています。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart" 
           alt="$PlatformShort$ 積層型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100 エリア チャート 

積層型 100 エリア チャートは、Y 軸上の値の取り扱いを除いたすべての面で 積層型エリア シリーズと同じです。データを直接表現するのでなく、積層型 100 エリア シリーズは、データ ポイント内のすべての値の合計の割合でデータを表します。このシリーズは、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表す場合があります。このような場合、積層されたすべての要素を均等に表すことをお勧めします。


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

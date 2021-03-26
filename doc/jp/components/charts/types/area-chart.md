---
title: $PlatformShort$ エリア チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ エリア チャート
_keywords: $PlatformShort$ Charts, Area Chart, Infragistics, $PlatformShort$ チャート, エリア チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---
# $PlatformShort$ エリア チャート

$ProductName$ エリア チャートは、折れ線またはスプライン シリーズに基づいています。したがって、多くの場合、時系列であり、時間の経過に伴う商品の蓄積などの量の変化を示します。

エリア チャートは、線の下の領域が塗りつぶされた直線セグメントで接続されたポイントのコレクションを使用して描画されます。値は y 軸 (左側のラベル) に表示され、カテゴリは x 軸 (下部のラベル) に表示されます。エリア チャートは、プロットされた値の合計を表示することにより、一定期間の変化量を強調したり、複数の項目や全体の一部の関係を比較したりします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-with-legend"
           alt="$PlatformShort$ 凡例付きの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

エリア チャートは、データ ポイントがプロットされ、直線セグメントで接続されているという点で折れ線チャートに似ていますが、エリア チャートでは X 軸と線の間の領域が塗りつぶされているため異なります。

AreaSeries は、接続するデータ ポイントがデータの表示を改善するスプライン補間とスムージング機能をもたないこと以外のすべての面で SplineAreaSeries と同一です。

折れ線チャートにはいくつかのユース ケースがあります。例:

- パン、ズーム、ドリルダウンなどのチャート操作に適した大容量のデータセットを使用する場合。
- データの経時的なトレンドを比較する必要がある場合。
- 2 つ以上のデータ シリーズの違いを表示したい場合。
- 個別のカテゴリの部分対全体の累積比較を表示したい場合。
- 比較解析のために 1 つ以上のカテゴリのデータ トレンドを表示する必要がある場合。
- 時系列データの詳細を視覚化する必要がある場合。

エリア チャートのベスト プラクティス:

- データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する。
- 時系列データを左から右へ並べ替える。
- 透明色を使用して、別の系列の背後にプロットされているデータがブロックされないようにする。

以下の場合にエリア チャートを使用しないでください:

- 多くの (7 または 10 以上) シリーズのデータがある場合。チャートが読みやすいことを確認する必要があります。
- 時系列データの値は類似している場合 (同じ期間のデータ)。これにより、重なり合った網掛け領域を区別できなくなります。

データ構造:

- データ ソースはデータ項目の配列またはリスト (単一シリーズの場合) である必要があります。
- データ ソースは、配列の配列またはリストのリスト (複数シリーズの場合) である必要があります。
- データ ソースはデータ項目間に線を描画するために少なくともデータ項目を 2 つ以上含む必要があります。
- すべてのデータ項目には、少なくとも 1 つのデータ列 (文字列または日時) が含まれている必要があります。
- すべてのデータ項目には少なくとも 1 つの数値データ列が含まれている必要があります。

## 単一シリーズの $PlatformShort$ エリア チャート

以下の例に示すように、$PlatformShort$ エリア チャートは、ヨーロッパで 2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-single-source"
           alt="単一シリーズの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ エリア チャート

折れ線チャートとスプライン チャートを使用して複数のシリーズを表示する方法と同様に、エリア チャートで複数のシリーズを組み合わせることができます。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-multiple-sources"
           alt="複数シリーズの $PlatformShort$ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ エリア チャートのスタイル設定

エリア チャートには、多くの場合、その領域が半透明で塗りつぶされており、通常より太い線とわずかに大きいマーカーがあります。以下は、それに応じて以前のエリア チャートのスタイルを設定する方法を示す例です。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-styling"
           alt="$PlatformShort$ エリア チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ステップ エリア チャート

ステップ エリア チャートはカテゴリ チャートのグループに属し、連続する垂直線と水平線で接続されたポイントのコレクションを使用して描画され、線の下の領域は塗りつぶされます。値は y 軸に表示され、カテゴリが表示されます x 軸上。ステップ エリア チャートは、一定期間の変化量を強調するか、複数の項目を比較します。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources"
           alt="$PlatformShort$ ステップ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 範囲エリア チャート

場合によっては、領域を表示する代わりに、時間の経過とともに 2 つの値の間の範囲の領域を表示したい場合があります。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-area-chart"
           alt="$PlatformShort$ 範囲エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型エリア チャート

積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart"
           alt="$PlatformShort$ 積層型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100 エリア チャート

このシリーズは、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表す場合があります。このような場合、積層されたすべての要素を均等に表すことをお勧めします。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart"
           alt="$PlatformShort$ 積層型 100 エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型スプライン エリア チャート

積層型スプライン エリア チャートは、曲線スプライン セグメントで接続されたポイントのコレクションを使用して描画され、曲線スプラインの下の領域が塗りつぶされ、互いに重ねて表示されます。積層型スプライン エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積み重なっていることです。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-area-chart"
           alt="$PlatformShort$ 積層型スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>


## $PlatformShort$ 積層型 100 スプライン エリア チャート

積層型 100 スプライン エリア チャートは、y 軸の値の処理を除いて、すべての点で積層型スプラインエリア チャートと同じです。データを直接表現するのでなく、積層型 100 スプライン エリア チャートは、特定のデータ ポイント内のすべての値の合計の割合でデータを表します。チャートは、時間の経過とともに変化する全体の一部を表す場合があります。たとえば、生産元に関連する国のエネルギー消費量。このような場合、積層されたすべての要素を均等に表すことをお勧めします。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-area-chart"
           alt="$PlatformShort$ 積層型 100 スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル エリア チャート

ラジアル エリア チャートはラジアル チャートのグループに属し、データ ポイントを接続する直線のコレクションによってバインドされた塗りつぶされたポリゴンの形状を持っています。このグラフ チャートは、エリア チャートと同じデータ プロットの概念を使用しますが、データ ポイントを水平線に沿って伸ばすのではなく、円形の軸の周りにラップします。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart"
           alt="$PlatformShort$ ラジアル エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 極座標型エリア チャート

極座標エリア チャートは極座標チャートのグループに属し、塗りつぶされたポリゴンの形状を持ちます。頂点または角はデータ ポイントの極座標 (角度/半径) に配置され、直線で接続されてから、接続されたポイントによって表された領域を塗りつぶします。極座標エリア チャートは、散布マーカー チャートと同じデータ プロットの概念を使用しますが、水平線に沿って塗りつぶされたポイントと領域を引き伸ばすのではなく、代わりに円の周りにポイントをラップし、描画された領域を塗りつぶします。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-area-series"
           alt="$PlatformShort$ 極座標型エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 極座標型スプライン エリア チャート

極座標スプライン エリア チャートは極座標チャートのグループに属し、塗りつぶされたポリゴンの形状を持ちます。頂点または角はデータ ポイントの極座標 (角度/半径) に配置され、曲線スプラインで接続されてから接続されたポイントで表された領域を塗りつぶします。極座標スプライン エリア チャートは、散布マーカー チャートと同じデータ プロットの概念を使用しますが、水平線に沿って塗りつぶされたポイントと領域を引き伸ばすのではなく、代わりに円の周りにポイントをラップして、描画された領域を塗りつぶします。


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-spline-area-series"
           alt="$PlatformShort$ 極座標型スプライン エリア チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース
- [軸の注釈](../data-chart-axis-annotations.md)
- [軸オプション](../features/chart-axis-options.md)
- [軸グリッド線](../features/chart-axis-gridlines.md)
- [チャート強調表示](../features/chart-highlighting.md)

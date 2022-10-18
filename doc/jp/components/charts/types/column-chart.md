---
title: {Platform} 縦棒チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} 縦棒チャート
_keywords: {Platform} Charts, Column Chart, Column Graph, Vertical Bar Chart, Infragistics, {Platform} チャート, 縦棒チャート, 縦棒グラフ, 垂直棒チャート, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries", "CategoryChartType", 'Series']
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} 縦棒チャート

{ProductName} 縦棒チャート、縦棒グラフ、または垂直棒チャートは、さまざまなカテゴリのデータの頻度、カウント、合計、または平均を、幅は同じで高さが異なる縦棒でエンコードされたデータによってすばやく比較するために使用される最も一般的なカテゴリ チャート タイプの 1 つです。これらの縦棒は、チャートの下から上へデータ ポイント値に向かって伸びています。縦棒チャートは[棒チャート](bar-chart.md)と非常によく似ていますが、縦棒チャートは垂直方向 (上下) で描画され、[棒チャート](bar-chart.md)は水平方向 (左から右) または時計回りに 90 度回転します。

## {Platform} 縦棒チャートの例

次の例に示すように、データをバインドし、`ChartType` を **Column** 列挙型に設定することで、`CategoryChart` コントロールに {Platform} 縦棒チャートを作成できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           github-src="charts/category-chart/column-chart-multiple-sources"
           alt="{Platform} 複数ソースの縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## 縦棒チャートの推奨事項

### 縦棒チャートのユース ケース

縦棒チャートにはいくつかのユース ケースがあります:

- 関連するカテゴリのデータ値を比較する必要がある場合。
- 一定期間のデータを比較する必要がある場合。
- 同じデータ セットに正の値だけでなく負の値も表示する必要がある場合。
- パン、ズーム、ドリルダウンなどのチャート操作に適した大容量のデータセットを使用する場合。

### 縦棒チャートのベスト プラクティス:

- データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する。
- 時系列データを左から右へ並べ替える。

### 以下の場合に縦棒チャートを使用しないでください:

- 多くの (10 または 12 以上) シリーズのデータがある場合。チャートが読みやすいことを確認する必要があります。

### 縦棒チャートのデータ構造:

- データ モデルには少なくとも 1 つの数値プロパティを含む必要があります。
- データ モデルにはラベルのためのオプションの文字列または日時プロパティを含むことができます。
- データ ソースに少なくとも 1 つのデータ項目を含む必要があります。

## 単一シリーズの {Platform} 縦棒チャート

縦棒シリーズは、カテゴリ シリーズのグループに属し、チャートの下から上へデータ ポイント値に向かって延びる四角形のコレクションを使用して描画されます。

`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを **Column** 値に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-single-source"
           github-src="charts/category-chart/column-chart-single-source"
           alt="単一シリーズの {Platform} 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの {Platform} 縦棒チャート

縦棒チャートは、比較のためにカテゴリごとに複数の列を描画できます。`CategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを **Column** 値に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="{Platform} 複数シリーズの {Platform} 縦棒チャート"
           github-src="charts/category-chart/column-chart-multiple-sources" >
</code-view>

<div class="divider--half"></div>


## {Platform} 縦棒チャートのスタイル設定

{Platform} 縦棒チャートには、外観のスタイル設定と変更のための多くのオプションがあります。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ColumnSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-styling"
           alt="{Platform} 縦棒チャートのスタイル設定"
           github-src="charts/category-chart/column-chart-styling">
</code-view>

<div class="divider--half"></div>

## 高度なタイプの縦棒チャート

次のセクションでは、簡略化された API を使用した `CategoryChart` コントロールの代わりに `XamDataChart` コントロールを使用して作成できる、より高度なタイプの {Platform} 縦棒チャートについて説明します。


## {Platform} ウォーターフォール チャート

ウォーターフォール チャートはカテゴリ チャートのグループに属し、連続するデータポイント間の差を示す垂直列のコレクションを使用して描画されます。値の正/負の変化を区別するため、列は色分けされます。ウォーターフォール チャートは、外観が[範囲縦棒チャート](column-chart.md#{Platform}-範囲縦棒チャート)に似ていますが、各データ ポイントに必要な数値データ列は 2 つでなく 1 つのみです。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `WaterfallSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart"
           github-src="charts/data-chart/waterfall-chart"
           alt="{Platform} ウォーターフォール チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 積層型縦棒チャート

積層型縦棒チャートは、シリーズが横ではなく上に表示されることを除いて、すべての面で[カテゴリ縦棒チャート](column-chart.md#{Platform}-縦棒チャートの例)に似ています。積層型縦棒チャートは、シリーズ間の結果の比較を示すために使用されます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも Y 軸の正の側にグループ化され、負の値は Y 軸の負の側にグループ化されます。積層型縦棒チャートは[積層型棒チャート](stacked-chart.md#{Platform}-積層型棒チャート)と同じデータプロットの概念を使用していますが、データ ポイントは横の線 (X 軸) に沿ってではなく、縦の線 (Y 軸) に沿って積層されます。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedBarSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           github-src="charts/data-chart/stacked-column-chart"
           alt="{Platform} 積層型縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 積層型 100% 縦棒チャート

積層型 100% 縦棒チャートは、Y 軸上の値の取り扱いを除いたすべての面で[積層型縦棒チャート](stacked-chart.md#{Platform}-積層型縦棒チャート)と同じです。データを直接表現するのでなく、積層型 100 縦棒は、データ ポイント内のすべての値の合計の割合でデータを表します。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100BarSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           github-src="charts/data-chart/stacked-100-column-chart"
           alt="{Platform} 積層型 100% 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} 範囲縦棒チャート

{ProductName} 範囲縦棒チャートは、範囲チャートのグループに属し、従来の[カテゴリ縦棒チャート](column-chart.md#{Platform}-縦棒チャートの例)のように下から伸びるのではなく、チャートのプロット領域の中央に表示できる垂直の長方形を使用して描画されます。このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数の項目を比較します。範囲値は Y 軸に表示され、カテゴリは X 軸に表示されます。

範囲縦棒チャートは、範囲が塗りつぶされた領域ではなく垂直柱の集まりで表されること以外は[範囲エリア チャート](area-chart.md#{Platform}-範囲エリア-チャート)と同じです。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RangeColumnSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart"
           github-src="charts/data-chart/range-column-chart"
           alt="{Platform} 範囲縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## {Platform} ラジアル縦棒チャート

ラジアル縦棒チャートは、[ラジアル チャート](radial-chart.md)のグループに属し、チャートの中心からデータ ポイントの位置に向かって伸びる長方形のコレクションを使用して描画されます。これは[カテゴリ縦棒チャート](column-chart.md#{Platform}-縦棒チャートの例)と同じデータ プロットの概念を使用していますが、データ ポイントを横の線に並べるのではなく、データ ポイントを円でラップします。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RadialColumnSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           github-src="charts/data-chart/radial-column-chart"
           alt="{Platform} ラジアル縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [棒チャート](bar-chart.md)
- [複合チャート](Composite-chart.md)
- [ラジアル チャート](radial-chart.md)
- [積層型チャート](stacked-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ          | コントロール名       | API メンバー
--------------------|--------------------|------------------------
縦棒              | `CategoryChart` | `ChartType` = **Column**
ラジアル縦棒       | `XamDataChart`     | `RadialColumnSeries`
範囲縦棒        | `XamDataChart`     | `RangeColumnSeries`
積層型縦棒      | `XamDataChart`     | `StackedColumnSeries`
積層型 100% 縦棒 | `XamDataChart`     | `Stacked100ColumnSeries`
ウォーターフォール           | `XamDataChart`     | `WaterfallSeries`

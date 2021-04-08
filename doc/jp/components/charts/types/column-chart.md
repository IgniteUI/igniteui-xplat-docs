---
title: $PlatformShort$ 縦棒チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ 縦棒チャート
_keywords: $PlatformShort$ Charts, Column Chart, Infragistics, $PlatformShort$ チャート, 縦棒チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries"]    
_language: ja
---
# $PlatformShort$ 縦棒チャート

$ProductName$ 縦棒チャートは、チャートの下から上に、データ ポイントの値に向かって伸びる長方形のコレクションを使用してチャート描画されます。縦棒チャートは、ある一定の期間に対する量の変化を強調したり、複数のデータを比較したりします。値は Y 軸 (NumericYAxis) に表され、カテゴリは X 軸 (CategoryXAxis) に表示されます。

## $PlatformShort$ 縦棒チャートの例

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="凡例付きの $PlatformShort$ 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

縦棒チャートは、[棒チャート](bar-chart.md)と同じデータ プロットの概念を採用していますが、データ ポイントは、垂直線 (Y 軸) でなく水平線 (X 軸) に沿って延びます。つまり、縦棒チャートは[棒チャート](bar-chart.md)のように描画されますが、反時計回りに 90 度回転されます。

縦棒チャートにはいくつかのユース ケースがあります。例:

- 関連するカテゴリのデータ値を比較する必要がある場合。
- 一定期間のデータを比較する必要がある場合。
- 同じデータ セットに正の値だけでなく負の値も表示する必要がある場合。
- パン、ズーム、ドリルダウンなどのチャート操作に適した大容量のデータセットを使用する場合。

縦棒チャートのベスト プラクティス:

- データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する。
- 時系列データを左から右へ並べ替える。

以下の場合に縦棒チャートを使用しないでください:

- 多くの (10 または 12 以上) シリーズのデータがある場合。チャートが読みやすいことを確認する必要があります。

データ構造: 

- データ モデルには少なくとも 1 つの数値プロパティを含む必要があります。
- データ モデルにはラベルのためのオプションの文字列または日時プロパティを含むことができます。
- データ ソースに少なくとも 1 つのデータ項目を含む必要があります。

## 単一シリーズの $PlatformShort$ 縦棒チャート

縦棒シリーズは、カテゴリ シリーズのグループに属し、チャートの下から上へデータ ポイント値に向かって延びる四角形のコレクションを使用して描画されます。

`XamCategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `Column` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-single-source"
           alt="単一シリーズの $PlatformShort$ 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ 縦棒チャート

縦棒チャートは、比較のためにカテゴリごとに複数の列を描画できます。`XamCategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `Column` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="複数シリーズの $PlatformShort$ 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 縦棒チャートの高度なシナリオ

高度なタイプの縦棒チャートの場合、以下のセクションで説明するように `XamDataChart` コントロールを使用して他のタイプの縦棒チャートを作成します。

## $PlatformShort$ 縦棒チャートのスタイル設定

$PlatformShort$ 縦棒チャートには、外観のスタイル設定と変更のための多くのオプションがあります。たとえば、以下のサンプルは、X 軸に[交差値](../features/axis-layouts.md)を使用する方法と、[マーカー テンプレート](../features/chart-markers.md)を使用して、対応する列の上 (または下) に項目の値を表示する方法を示しています。

`XamCategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `ColumnSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-column-chart-styling"
           alt="$PlatformShort$ 縦棒チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ウォーターフォール チャート

ウォーターフォール チャートはカテゴリ チャートのグループに属し、連続するデータポイント間の差を示す垂直列のコレクションを使用して描画されます。値の正/負の変化を区別するため、列は色分けされます。ウォーターフォール チャートは、外観が範囲縦棒チャートに似ていますが、各データ ポイントに必要な数値データ列は 2 つでなく 1 つのみです。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `WaterfallSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart"
           alt="$PlatformShort$ ウォーターフォール チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型縦棒チャート

積層型縦棒チャートは、シリーズが横ではなく上に表示されることを除いて、すべての面で縦棒チャートと同じです。積層型縦棒チャートは、シリーズ間の結果の比較を示すために使用されます。コレクションのそれぞれの積層フラグメントは各積層の視覚的な要素を表します。各積層は正の値と負の値の両方を含みます。正の値はいずれも Y 軸の正の側にグループ化され、負の値は Y 軸の負の側にグループ化されます。積層型縦棒チャートは[積層型棒チャート](bar-chart.md)と同じデータプロットの概念を使用していますが、データ ポイントは横の線 (X 軸) に沿ってではなく、縦の線 (Y 軸) に沿って積層されます。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `StackedBarSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="$PlatformShort$ 積層型縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 積層型 100% 縦棒チャート

積層型 100% 縦棒チャートは、Y 軸上の値の取り扱いを除いたすべての面で積層型縦棒チャートと同じです。データを直接表現するのでなく、積層型 100 縦棒は、データ ポイント内のすべての値の合計の割合でデータを表します。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `Stacked100BarSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="$PlatformShort$ 積層型 100% 縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 範囲縦棒チャート

$ProductName$ 範囲縦棒チャートは、範囲チャートのグループに属し、従来の縦棒チャートのように下から伸びるのではなく、チャートのプロット領域の中央に表示できる垂直の長方形を使用して描画されます。このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数の項目を比較します。範囲値は Y 軸に表示され、カテゴリは X 軸に表示されます。

範囲縦棒チャートは、範囲が塗りつぶされた領域ではなく垂直柱の集まりで表されること以外は[範囲エリア チャート](area-chart.md)と同じです。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RangeColumnSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart"
           alt="$PlatformShort$ 範囲縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ラジアル縦棒チャート

ラジアル縦棒チャートは、ラジアル チャートのグループに属し、チャートの中心からデータ ポイントの位置に向かって伸びる長方形のコレクションを使用して描画されます。これは縦棒チャートと同じデータ プロットの概念を使用していますが、データ ポイントを横の線に並べるのではなく、データ ポイントを円でラップします。

`XamDataChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データを `RadialColumnSeries` にバインドします:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="$PlatformShort$ ラジアル縦棒チャート" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [棒チャート](bar-chart.md)
- [ラジアル チャート](radial-chart.md)
- [積層型チャート](stacked-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ          | コントロール名       | API メンバー
--------------------|--------------------|------------------------
縦棒              | `XamCategoryChart` | `ChartType` = `Column`
ラジアル縦棒       | `XamDataChart`     | `RadialColumnSeries`
範囲縦棒        | `XamDataChart`     | `RangeColumnSeries`
積層型縦棒      | `XamDataChart`     | `StackedColumnSeries`
積層型 100% 縦棒 | `XamDataChart`     | `Stacked100ColumnSeries`
ウォーターフォール           | `XamDataChart`     | `WaterfallSeries`

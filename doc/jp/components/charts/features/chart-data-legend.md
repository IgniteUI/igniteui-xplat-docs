---
title: $Platform$ チャート データの凡例 | データ視覚化ツール | インフラジスティックス
_description: インフラジスティックス $ProductName$ チャートでデータ凡例を使用する
_keywords: $Platform$ charts, chart legend, legend, legend types, $ProductName$, Infragistics, $Platform$ チャート、チャート凡例、凡例、凡例タイプ、インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# $Platform$ データ凡例

$ProductName$ では、`XamDataLegend` は `Legend` のように機能するコンポーネントですが、シリーズの値の表示や、シリーズの行と値の列のフィルタリング、値のスタイルと書式を設定するための多くの構成プロパティを提供します。この凡例は、`XamDataChart` のプロット領域内でマウスを移動すると更新され、ユーザーのマウス ポインターがプロット領域を離れたときに最後にホバーされたポイントを記憶する永続的な状態になります。このコンテンツは、3 種類の行と 4 種類の列のセットを使用して表示されます。

## $Platform$ データ凡例の行

`XamDataLegend` の行には、ヘッダー行、シリーズ行、および集計行が含まれます。

ヘッダー行には、ホバーされたポイントの軸ラベルが表示され、`HeaderText` プロパティを使用して変更できます。

シリーズ行は、実際には、チャートにプロットされた各シリーズに対応する行のセットにすることができます。これらの行には、凡例バッジ、シリーズ タイトル、シリーズの実際の値 / 省略値、および指定されている場合は省略記号と単位が表示されます。

最後に、すべてのシリーズ値の合計を表示する集計行があります。デフォルトの集計タイトルは、凡例の `SummaryTitleText` プロパティを使用して変更できます。また、`SummaryType` プロパティを使用して、シリーズ値の合計、最小、最大、または平均を集計行に表示するかどうかをカスタマイズできます。

The following example demonstrates the `XamDataLegend` with a summary applied:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend"
           alt="$Platform$ Category Chart Data Legend Example"
           github-src="charts/category-chart/data-legend">
</code-view>

## $Platform$ データ凡例の列

`XamDataLegend` の列には、タイトル、ラベル、値、および単位の列が含まれます。チャートの各シリーズには、凡例の `IncludedColumns` または `ExcludedColumns` コレクションに応じて、ラベル、値、および単位の複数の列を含めることができます。

タイトル列には、チャートにプロットされたさまざまな `Series` の `Title` プロパティに由来する凡例バッジとシリーズ タイトルが表示されます。

ラベル列には、凡例の `IncludedColumns` または `ExcludedColumns` コレクション内のさまざまなプロパティパスの名前または省略形が表示されます。

値の列には、一連の値が省略形のテキストとして表示されます。この省略形は、`ValueFormatAbbreviation` プロパティを使用して書式設定でき、このプロパティを `Auto` または `Shared` に設定することですべての数値に同じ省略形を適用できます。または、ユーザーは `Independent`、`Kilo`、`Million` などの他の省略形を選択できます。省略値の精度は、最小桁数と最大桁数にそれぞれ `ValueFormatMinFractions` と `ValueFormatMaxFractions` を使用して制御されます。

単位列には、省略記号や単位テキストが表示されます。これらは、すべての列に `UnitText` を設定するか、チャートの各シリーズで次のプロパティを使用して、`XamDataLegend` で設定できます:

- カテゴリ シリーズ (例: ColumnSeries)
    - ValueMemberAsLegendUnit="K"
- 財務物価シリーズ:
    - OpenMemberAsLegendUnit="K"
    - LowMemberAsLegendUnit="K"
    - HighMemberAsLegendUnit="K"
    - CloseMemberAsLegendUnit="K"
- 範囲シリーズ:
    - LowMemberAsLegendUnit="K"
    - HighMemberAsLegendUnit="K"
- ラジアル シリーズ:
    - ValueMemberAsLegendUnit="K
- 極座標シリーズ:
    - RadiusMemberAsLegendUnit="K"
    - AngleMemberAsLegendUnit="K"

上記の各プロパティには、前述のラベル列のテキストを判別するための対応する `MemberAsLegendLabel` プロパティもあります。

`IncludedColumns` および `ExcludedColumns` コレクションに含まれる列は、通常、基になるデータ項目の値パスに対応しますが、ファイナンシャル シリーズには、正しくプロットするために必要な `High`、`Low`、`Open`、`Close` パス、および、いくつかの特別なパスを含めるオプションがあります 。凡例内に `TypicalPrice`、`Change`、および `Volume` オプションを表示することができます。

The following example demonstrates a `XamDataLegend` with added columns of Open, High, Low, Close, and Change:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend"
           alt="$Platform$ Financial Chart Data Legend Example"
           github-src="charts/financial-chart/data-legend">
</code-view>

## $Platform$ データ凡例のスタイル設定

`XamDataLegend` は、各タイプの列をスタイル設定するためのプロパティを提供します。これらの各プロパティ名は、Title、Label、Value、Units で始まり、テキストの色、フォント、およびマージンのスタイルを設定できます。たとえば、これらのそれぞれのテキストの色を設定する場合は、`TitleTextColor`、`LabelTextColor`、`ValueTextColor`、および `UnitsTextColor` プロパティを設定します。

The following example demonstrates a utilization of the styling properties mentioned above:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-styling-props"
           alt="$Platform$ Data Legend Styling Example"
           github-src="charts/financial-chart/data-legend-styling-props">
</code-view>

## $Platform$ データ凡例値の書式設定

`XamDataLegend` は、`ValueFormatAbbreviation` プロパティを使用して、大きな数値の自動省略形を提供します。これにより、単位の列に kilo、million、billion などの乗数が追加されます。

`ValueFormatMinFractions` および `ValueFormatMaxFractions` を設定することにより、表示される小数桁数をカスタマイズできます。これにより、小数点以下に表示される最小桁数と最大桁数をそれぞれ決定できます。

The following example demonstrates a `XamDataLegend` with the `ValueFormatMinFractions` and `ValueFormatMaxFractions` set:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend-formatting-decimals"
           alt="$Platform$ Data Legend Formatting Decimals Example"
           github-src="charts/category-chart/data-legend-formatting-decimals">
</code-view>

## $Platform$ データ凡例の値モード

コントロールの `ValueFormatMode` プロパティを変更することにより、`XamDataLegend` 内の値のデフォルトの 10 進表示を通貨に変更することができます。`XamDataLegend` は、その `ValueFormatCulture` プロパティに対応するカルチャ タグを設定することにより、表示されている通貨記号のカルチャを変更する機能も公開します。

たとえば、次の例は、`ValueFormatCulture` が「en-GB」に設定されたチャートを示しています:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-formatting-currency"
           alt="$Platform$ Formatting Currency Example"
           github-src="charts/financial-chart/data-legend-formatting-currency">
</code-view>

## $Platform$ データ凡例のスタイル設定イベント

`XamDataLegend` には、対応する行を描画するときに発生する 3 つのイベントがあります。それらのイベントを、その使用目的とあわせて以下に示します:

- `StyleHeaderRow`: このイベントは、ヘッダー行を描画するときに 1 回発生します。
- `StyleSeriesRow`: このイベントは、シリーズの行ごとに 1 回発生し、シリーズの値の条件付きスタイル設定を可能にします。
- `StyleSeriesColumn`: このイベントは、シリーズの列ごとに 1 回発生し、シリーズの値の条件付きスタイル設定を可能にします。
- `StyleSummaryRow`: このイベントは、集計行を描画するときに 1 回発生します。
- `StyleSummaryColumn`: このイベントは、集計列を描画するときに 1 回発生します。

上記の各イベントは、引数として `DataLegendStylingRowEventArgs` パラメーターを公開します。これにより、各項目のテキスト、テキストの色、および行の全体的な可視性をカスタマイズできます。イベント引数は、イベント固有のプロパティも公開します。たとえば、`StyleSeriesRow` イベントはシリーズごとに発生するため、イベント引数は、シリーズを表す行の、シリーズ インデックスとシリーズ タイトルを返します。

---
title: {Platform} チャート データ ツールチップ | データ視覚化ツール | インフラジスティックス
_description: データ ツールチップ レイヤーで Infragistics {ProductName} チャートを使用してください!
_keywords: {Platform} charts, chart legend, legend, legend types, {ProductName}, Infragistics, {Platform} チャート, チャート凡例, 凡例, 凡例タイプ, インフラジスティックス
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート データ ツールチップ

{ProductName} では、**DataToolTip** は、シリーズの値とタイトル、およびシリーズの凡例バッジをツールチップに表示します。さらに、シリーズの行と値の列をフィルタリングし、値をスタイル設定し、書式を設定するための `XamDataLegend` の多くの構成プロパティを提供します。このツールチップ タイプは、`CategoryChart`、`FinancialChart`、および `XamDataChart` コンポーネントのプロット領域内でマウスを動かすと更新されます。

## {Platform} データ ツールチップのプロパティ

`DataToolTipLayer` のすべてのプロパティには **DataToolTip** のプレフィックスが付けられ、`CategoryChart` および `FinancialChart` コンポーネントの API で公開されます。ただし、ラジアル チャート、極座標チャート、散布図で使用する場合は、`DataToolTipLayer` のインスタンスを作成し、それを `XamDataChart` コンポーネントのシリーズ コレクションに追加する必要があります。

## {Platform} データ ツールチップの要素

**DataToolTip** は、3 種類の行と 4 種類の列のセットを使用してコンテンツを表示します。

### {Platform} データ ツールチップの行

**DataToolTip** の行には、ヘッダー行、シリーズ行、および集計行が含まれます。

ヘッダー行には、ホバーされたポイントの軸ラベルが表示され、`DataToolTipHeaderText` プロパティを使用して変更できます。

シリーズ行は、実際には、チャートにプロットされた各シリーズに対応する行のセットにすることができます。これらの行には、凡例バッジ、シリーズ タイトル、シリーズの実際の値 / 省略値、および指定されている場合は省略記号と単位が表示されます。

最後に、すべてのシリーズ値の合計を表示する集計行があります。デフォルトの集計タイトルは、凡例の `DataToolTipSummaryTitleText` プロパティを使用して変更できます。また、`DataToolTipSummaryType` プロパティを使用して、シリーズ値の合計、最小、最大、または平均を集計行に表示するかどうかをカスタマイズできます。

次の例は、集計が適用されたデータ ツールチップを示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-tooltip"
           alt="{Platform} カテゴリ チャート データ ツールチップの例"
           github-src="charts/category-chart/data-tooltip">
</code-view>

### {Platform} データ ツールチップの列

`DataToolTipLayer` の列には、タイトル、ラベル、値、および単位の列が含まれます。チャートの各シリーズには、凡例の `DataToolTipIncludedColumns` または `DataToolTipExcludedColumns` コレクションに応じて、ラベル、値、および単位の複数の列を含めることができます。

タイトル列には、チャートにプロットされた各 `Series` の `Title` プロパティに由来する凡例バッジとシリーズ タイトルが表示されます。

ラベル列には、ツールチップの `DataToolTipIncludedColumns` または `DataToolTipExcludedColumns` コレクション内のさまざまなプロパティパスの名前または省略形が表示されます。

値の列には、一連の値が省略形のテキストとして表示されます。この省略形は、`DataToolTipValueFormatAbbreviation` プロパティを使用して書式設定でき、このプロパティを `Auto` または `Shared` に設定することですべての数値に同じ省略形を適用できます。または、ユーザーは `Independent`、`Kilo`、`Million` などの他の省略形を選択できます。省略値の精度は、最小桁数と最大桁数にそれぞれ `DataToolTipValueFormatMinFractions` と `DataToolTipValueFormatMaxFractions` を使用して制御されます。

単位の列には、省略記号や単位のテキストが表示されます。これらは、すべての列に `DataToolTipUnitsText` を設定するか、チャートの各系列で次のプロパティを使用して、**DataToolTip** で設定できます:

- カテゴリ シリーズ (例: ColumnSeries):
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
    - ValueMemberAsLegendUnit="km"
- 極座標シリーズ:
    - RadiusMemberAsLegendUnit="km"
    - AngleMemberAsLegendUnit="degrees"

上記のプロパティには、前述のラベル列のテキストを決定するための **MemberAsLegendLabel** で終わる対応するプロパティがあります。

`DataToolTipIncludedColumns` および `DataToolTipExcludedColumns` コレクションに含まれる列は、通常、基になるデータ項目の値パスに対応しますが、ファイナンシャル シリーズには、正しくプロットするために必要な `High`、`Low`、`Open`、`Close` パス、および、いくつかの特別なパスを含めるオプションがあります 。ツールチップ内に `TypicalPrice`、`Change`、および `Volume` オプションを表示することができます。

次の例は、Open、High、Low、Close、および Change の列が追加されたデータ ツールチップを示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-tooltip"
           alt="{Platform} ファイナンシャル チャート データ ツールチップの例"
           github-src="charts/financial-chart/data-tooltip">
</code-view>

## {Platform} データ ツールチップのスタイル設定

**DataToolTip** は、各タイプの列をスタイル設定するためのプロパティを提供します。これらの各プロパティ名は、Title、Label、Value、Units で始まり、テキストの色、フォント、およびマージンのスタイルを設定できます。たとえば、これらのそれぞれのテキストの色を設定する場合は、`DataToolTipTitleTextColor`、`DataToolTipLabelTextColor`、`DataToolTipValueTextColor`、および `DataToolTipUnitsTextColor` プロパティを設定します。

次の例は、上記のスタイル設定プロパティの使用法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-tooltip-styling-props"
           alt="{Platform} ファイナンシャル チャート データ ツールチップのスタイル設定"
           github-src="charts/financial-chart/data-tooltip-styling-props">
</code-view>

## {Platform} データ ツールチップのグループ化と配置

`DataToolTipGroupingMode` プロパティを` Grouped` または `Individual` に設定して、複数のシリーズのコンテンツを 1 つのツールチップにグループ化するか、各シリーズのコンテンツを複数のツールチップに分割することができます。`Grouped` モードでは、`DataToolTipGroupedPositionModeX` プロパティと `DataToolTipGroupedPositionModeY` プロパティを設定することにより、ツールチップが表示される場所をカスタマイズできます。これにより、ツールチップの水平方向と垂直方向の配置を、マウス位置に最も近いシリーズ ポイントに追従させるか、プロット領域の端に固定するかをカスタマイズできます。

次の例は、チャートの右上に配置されたデータ ツールチップを示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-tooltip-positioning"
           alt="{Platform} カテゴリ チャート データツールチップの配置の例"
           github-src="charts/category-chart/data-tooltip-positioning">
</code-view>

## {Platform} データ ツールチップ値の書式設定

**DataToolTip** は、その `DataToolTipValueFormatAbbreviation` プロパティを使用して、大きな数の自動省略形を提供します。これにより、単位の列に kilo、million、billion などの乗数が追加されます。`DataToolTipValueFormatMinFractions` および `DataToolTipValueFormatMaxFractions` を設定することにより、表示される小数桁数をカスタマイズできます。これにより、小数点以下に表示される最小桁数と最大桁数をそれぞれ決定できます。

次の例は、最小分数と最大分数が設定された **DataToolTip** を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-tooltip-formatting-decimals"
           alt="{Platform} カテゴリ チャート データ ツールチップの小数の書式設定"
           github-src="charts/category-chart/data-tooltip-formatting-decimals">
</code-view>

## {Platform} データ ツールチップの値モード

レイヤーの `DataToolTipValueFormatMode` プロパティを変更することにより、**DataToolTip** 内の値のデフォルトの 10 進表示を通貨表示に変更できます。**DataToolTip** は、`DataToolTipValueFormatCulture` プロパティを使用し、対応するカルチャ タグに設定することにより、表示されている通貨記号のカルチャを変更する機能も公開します。たとえば、次のサンプルは、`DataToolTipValueFormatCulture` が「en-GB」に設定されたチャートを示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-tooltip-formatting-currency"
           alt="{Platform} ファイナンシャル チャート データ ツールチップの通貨の書式設定"
           github-src="charts/financial-chart/data-tooltip-formatting-currency">
</code-view>

## API リファレンス

 - `DataToolTipExcludedColumns`
 - `DataToolTipGroupedPositionModeX`
 - `DataToolTipGroupedPositionModeY`
 - `DataToolTipGroupingMode`
 - `DataToolTipHeaderText`
 - `DataToolTipIncludedColumns`
 - `DataToolTipLabelTextColor`
 - `DataToolTipLayer`
 - `DataToolTipSummaryTitleText`
 - `DataToolTipSummaryType`
 - `DataToolTipTitleTextColor`
 - `DataToolTipUnitsTextColor`
 - `DataToolTipUnitsText`
 - `DataToolTipValueFormatAbbreviation`
 - `DataToolTipValueFormatCulture`
 - `DataToolTipValueFormatMaxFractions`
 - `DataToolTipValueFormatMaxFractions`
 - `DataToolTipValueFormatMinFractions`
 - `DataToolTipValueFormatMode`
 - `DataToolTipValueTextColor`
 - `MemberAsLegendLabel`
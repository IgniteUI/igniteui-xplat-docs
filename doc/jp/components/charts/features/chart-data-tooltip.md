---
title: $Platform$ チャート データ ツールチップ | データ視覚化ツール | インフラジスティックス
_description: データ ツールチップ レイヤーで Infragistics $ProductName$ チャートを使用してください!
_keywords: $Platform$ charts, chart legend, legend, legend types, $ProductName$, Infragistics, $Platform$ チャート, チャート凡例, 凡例, 凡例タイプ, インフラジスティックス
mentionedTypes: ["XamDataChart", "Legend", "XamCategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# $Platform$ チャート データ ツールチップ

$ProductName$ では、**DataToolTip** は、シリーズの値とタイトル、およびシリーズの凡例バッジをツールチップに表示します。さらに、シリーズの行と値の列をフィルタリングし、値をスタイル設定し、書式を設定するための `DataLegend` の多くの構成プロパティを提供します。このツールチップ タイプは、`XamCategoryChart`、`XamFinancialChart`、および `XamDataChart` コンポーネントのプロット領域内でマウスを動かすと更新されます。

<!-- TODO add a code viewer with basic DataToolTip with CategoryChart  -->

## $Platform$ データ ツールチップのプロパティ
`DataToolTipLayer` のすべてのプロパティには **DataToolTip** のプレフィックスが付けられ、`XamCategoryChart` および `XamFinancialChart` コンポーネントの API で公開されます。ただし、ラジアル チャート、極座標チャート、散布図で使用する場合は、 `DataToolTipLayer` のインスタンスを作成し、それを `XamDataChart` コンポーネントのシリーズ コレクションに追加する必要があります。

## $Platform$ データ ツールチップの要素
**DataToolTip** は、3 種類の行と 4 種類の列のセットを使用してコンテンツを表示します。 

### $Platform$ データ ツールチップの行

**DataToolTip** の行には、ヘッダー行、シリーズ行、および集計行が含まれます。

ヘッダー行には、ホバーされたポイントの軸ラベルが表示され、`DataToolTipHeaderText` プロパティを使用して変更できます。

シリーズ行は、実際には、チャートにプロットされた各シリーズに対応する行のセットにすることができます。これらの行には、凡例バッジ、シリーズ タイトル、シリーズの実際の値 / 省略値、および指定されている場合は省略記号と単位が表示されます。

最後に、すべてのシリーズ値の合計を表示する集計行があります。デフォルトの集計タイトルは、凡例の `DataToolTipSummaryText` プロパティを使用して変更できます。また、`DataToolTipSummaryType` プロパティを使用して、シリーズ値の合計、最小、最大、または平均を集計行に表示するかどうかをカスタマイズできます。

### $Platform$ データ ツールチップの列

The columns of the `DataToolTip` include the title, label, value, and units columns. Each series in the chart can have multiple columns for label, value, and units depending on the `IncludedColumns` or `ExcludedColumns` collections of the legend.

タイトル列には、チャートにプロットされた各 `Series` の `Title` プロパティに由来する凡例バッジとシリーズ タイトルが表示されます。 

The label column displays the name or abbreviation of the different property paths in the `IncludedColumns` or `ExcludedColumns` collections of the tooltip.

The value column displays series values as abbreviated text which can be formatted using the `DataToolTipValueFormatAbbreviation` property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the `DataToolTipValueFormatMinFractions` and `DataToolTipValueFormatMaxFractions` for minimum and maximum digits, respectively.

単位の列には、省略記号や単位のテキストが表示されます。これらは、すべての列に `DataToolTipUnitText` を設定するか、チャートの各系列で次のプロパティを使用して、**DataToolTip** で設定できます:

* カテゴリ シリーズ (例: ColumnSeries):
    * ValueMemberAsLegendUnit="K"

* 財務物価シリーズ:
    * OpenMemberAsLegendUnit="K"
    * LowMemberAsLegendUnit="K"
    * HighMemberAsLegendUnit="K"
    * CloseMemberAsLegendUnit="K"
    
* 範囲シリーズ:
    * LowMemberAsLegendUnit="K"
    * HighMemberAsLegendUnit="K"
        
* ラジアル シリーズ:
    * ValueMemberAsLegendUnit="km" 

* 極座標シリーズ:
    * RadiusMemberAsLegendUnit="km"
    * AngleMemberAsLegendUnit="degrees"

For each of the above-listed properties, there is a corresponding `MemberAsLegendLabel` property as well to determine the text in the label columns mentioned previously.

The columns included in the `IncludedColumns` and `ExcludedColumns` collections generally correspond to the value paths of your underlying data items, but the financial series has the option to include some special ones in addition to the `High`, `Low`, `Open`, and `Close` paths that are required for the financial series to plot correctly. You have the ability to show `TypicalPrice`, `Change`, and `Volume` options within the tooltip. 

## $Platform$ データ ツールチップのスタイル設定

**DataToolTip** は、各タイプの列をスタイル設定するためのプロパティを提供します。これらの各プロパティ名は、Title、Label、Value、Units で始まり、テキストの色、フォント、およびマージンのスタイルを設定できます。たとえば、これらのそれぞれのテキストの色を設定する場合は、 `DataToolTipTitleTextColor`、`DataToolTipLabelTextColor`、 `DataToolTipValueTextColor`、および `DataToolTipUnitsTextColor` プロパティを設定します。

## $Platform$ データ ツールチップのグループ化と配置

`DataToolTipGroupingMode` プロパティを` Grouped` または `Individual` に設定して、複数のシリーズのコンテンツを 1 つのツールチップにグループ化するか、各シリーズのコンテンツを複数のツールチップに分割することができます。`Grouped` モードでは、`DataToolTipGroupedPositionModeX` プロパティと `DataToolTipGroupedPositionModeY` プロパティを設定することにより、ツールチップが表示される場所をカスタマイズできます。これにより、ツールチップの水平方向と垂直方向の配置を、マウス位置に最も近いシリーズ ポイントに追従させるか、プロット領域の端に固定するかをカスタマイズできます。

## $Platform$ データ ツールチップ値の書式設定

**DataToolTip** は、その `DataToolTipValueFormatAbbreviation` プロパティを使用して、大きな数の自動省略形を提供します。これにより、単位の列に kilo、million、billion などの乗数が追加されます。`DataToolTipValueFormatMinFractions` および `DataToolTipValueFormatMaxFractions` を設定することにより、表示される小数桁数をカスタマイズできます。これにより、小数点以下に表示される最小桁数と最大桁数をそれぞれ決定できます。

## $Platform$ データ ツールチップの値モード

レイヤーの `DataToolTipValueFormatMode` プロパティを変更することにより、**DataToolTip** 内の値のデフォルトの 10 進表示を通貨表示に変更できます。**DataToolTip** は、`DataToolTipValueFormatCulture` プロパティを使用し、対応するカルチャ タグに設定することにより、表示されている通貨記号のカルチャを変更する機能も公開します。たとえば、次のサンプルは、`DataToolTipValueFormatCulture` が 「en-GB」 に設定されたチャートを示しています。

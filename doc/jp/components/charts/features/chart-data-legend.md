---
title: {Platform} チャート データの凡例 | データ視覚化ツール | インフラジスティックス
_description: インフラジスティックス {ProductName} チャートでデータ凡例を使用する
_keywords: {Platform} charts, chart legend, legend, legend types, {ProductName}, Infragistics, {Platform} チャート、チャート凡例、凡例、凡例タイプ、インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series", "DataLegendSummaryType", "DataAbbreviationMode" ]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} データ凡例

{ProductName} では、`XamDataLegend` は `Legend` の高度にカスタマイズ可能なバージョンであり、シリーズの値を表示するほか、シリーズの行や値の列のフィルタリング、値のスタイルと書式設定を行うための多くの構成プロパティを提供します。この凡例は、`CategoryChart`、`FinancialChart`、および `XamDataChart` のプロット領域内でマウスを動かすと更新されます。また、ユーザーのマウス ポインターがプロット領域を出ると、最後にホバーされたポイントが維持されます。このコンテンツは、3 種類の行 (ヘッダー、シリーズ、要約) と 4 種類の列 (タイトル、ラベル、値、単位) のセットを使用して表示されます。

## {Platform} データ凡例の行

`XamDataLegend` の行には、ヘッダー行、シリーズ行、および集計行が含まれます。ヘッダー行には、ホバーされたポイントの軸ラベルが表示され、`HeaderText` プロパティを使用して変更できます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend"
           alt="{Platform} カテゴリ チャート データ凡例の例"
           github-src="charts/category-chart/data-legend">
</code-view>

### ヘッダー行

ヘッダー行には、カテゴリ シリーズとファイナンシャル シリーズにマウスを合わせると、x 軸の現在のラベルが表示されます。x 軸に日付が表示されている場合は、`HeaderFormatDate` プロパティと `HeaderFormatTime` プロパティを使用して、`XamDataLegend` の日付と時刻を書式設定できます。他のタイプのシリーズの場合、`XamDataLegend` はヘッダー行を描画しません。

### シリーズ列

シリーズ行は、チャートにプロットされた各シリーズを表します。これらの行には、凡例バッジ、シリーズ タイトル、シリーズの実際の値 / 省略値、および指定されている場合は省略記号と測定単位が表示されます。`IncludedSeries` または `ExcludedSeries` プロパティをシリーズのインデックス (1、2、3) またはシリーズのタイトル (Tesla、Microsoft) のコレクションに設定することにより、シリーズの行をフィルタできます。

### 集計行

最後に、すべてのシリーズ値の合計を表示する集計行があります。デフォルトの集計タイトルは、凡例の `SummaryTitleText` プロパティを使用して変更できます。また、`SummaryType` プロパティを使用して、集計行にシリーズの値の `Total`、`Min`、`Max`、または `Average` を表示するかどうかをカスタマイズできます。

## {Platform} データ凡例の列

`XamDataLegend` の列には、シリーズのタイトル、ラベル、データ列の値、および値に関連付けられたオプションの単位が含まれます。チャートの一部のシリーズには、ラベル、値、および単位の複数の列を含めることができます。たとえば、財務価格シリーズには、**High**、**Low**、**Open**、および **Close** のデータ列があります。これらは、`IncludedColumns` または `ExcludedColumns` プロパティを使用して `XamDataLegend` でフィルタリングできます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend"
           alt="{Platform} ファイナンシャル チャート データ凡例の例"
           github-src="charts/financial-chart/data-legend">
</code-view>

`IncludedColumns` プロパティと `ExcludedColumns` プロパティの値の設定は、シリーズのタイプとそれらがサポートするデータ列の数によって異なります。たとえば、`IncludedColumns` プロパティに **Open** および **Close** の文字列コレクションを設定すると、チャートがファイナンシャル シリーズをプロットしているときに、株価の始値と終値のみが表示されます。次の表に、データ シリーズの列をフィルタリングするために使用できるすべての列名を示します。

 シリーズのタイプ  | 列名
-----------------|--------------
カテゴリ シリーズ  | Value
ラジアル シリーズ    | Value
極座標シリーズ     | Radius, Angle
バブル シリーズ    | X、Y、Radius
散布シリーズ   | X、Y
範囲シリーズ     | High、Low
ファイナンシャル シリーズ | High、Low、Open、Close、Change、TypicalPrice、Volume

OHLC 価格の **TypicalPrice** (標準価格) とパーセンテージの **Change** (変更) は、ファイナンシャル シリーズによって自動的に計算されるため、データ ソースに含める必要はありません。

### タイトル列

タイトル列には、チャートにプロットされた各 `Series` の `Title` プロパティに由来する凡例バッジとシリーズ タイトルが表示されます。

### ラベル列

ラベル列には、値列の左側に短い名前が表示されます。たとえば、**Open** 株価の場合は「O」です。`LabelDisplayMode` プロパティを使用して、この列の表示・非表示を切り替えることができます。

### 値列

値の列には、シリーズの値が省略形のテキストとして表示されます。このテキストは、`ValueFormatAbbreviation` プロパティを使用して書式設定でき、このプロパティを `Shared` に設定することですべての数値に同じ省略形を適用できます。または、ユーザーは `Independent`、`Kilo`、`Million` などの他の省略形を選択できます。省略値の精度は、最小桁数と最大桁数にそれぞれ `ValueFormatMinFractions` と `ValueFormatMaxFractions` を使用して制御されます。


### 単位列

単位列には、値列の右側に省略記号が表示されます。単位記号は、`ValueFormatAbbreviation` プロパティに依存します。「M」は「Million」の略語です。

### 列のカスタマイズ

プロパティ名が **MemberAsLegendLabel** および **MemberAsLegendUnit** で終わる、各シリーズのプロパティを使用して、**Label** および **Unit** 列に表示されるテキストをカスタマイズできます。次の表は、**Label** 列と **Unit** 列で可能なカスタマイズをいくつか示しています。

 シリーズのタイプ | シリーズのプロパティ
------|----
カテゴリ シリーズ | ValueMemberAsLegendLabel="$" <br> ValueMemberAsLegendUnit="M"
ラジアル シリーズ | ValueMemberAsLegendLabel="Distance:" <br> ValueMemberAsLegendUnit="KM"
極座標シリーズ | RadiusMemberAsLegendLabel="Radius:" <br> RadiusMemberAsLegendUnit="KM" <br> AngleMemberAsLegendLabel="Angle:" <br> AngleMemberAsLegendUnit="°"
範囲シリーズ | HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K"
ファイナンシャル シリーズ | OpenMemberAsLegendLabel="O:" <br> OpenMemberAsLegendUnit="K" <br> HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" <br> CloseMemberAsLegendLabel="C:" <br> CloseMemberAsLegendUnit="K" <br>

また、`XamDataLegend` の `UnitText` プロパティを使用して、すべての Unit 列に表示されるテキストを変更できます。

## {Platform} データ凡例のスタイル設定

`XamDataLegend` は、各タイプの列をスタイル設定するためのプロパティを提供します。これらの各プロパティの名前は、**Title**、**Label**、**Value**、または **Units** で始まります。テキストの色、フォント、余白のスタイルを設定できます。たとえば、すべての列のテキストの色を設定する場合は、`TitleTextColor`、`LabelTextColor`、`ValueTextColor`、および `UnitsTextColor` プロパティを設定します。次の例は、上記のスタイル設定プロパティの使用法を示しています:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-styling-props"
           alt="{Platform} データ凡例のスタイル設定"
           github-src="charts/financial-chart/data-legend-styling-props">
</code-view>

## {Platform} データ凡例値の書式設定

`XamDataLegend` は、`ValueFormatAbbreviation` プロパティを使用して、大きな数値の自動省略形を提供します。これにより、単位の列に kilo、million、billion などの乗数が追加されます。`ValueFormatMinFractions` および `ValueFormatMaxFractions` を設定することにより、表示される小数桁数をカスタマイズできます。これにより、小数点以下に表示される最小桁数と最大桁数をそれぞれ決定できます。次の例は、これらのプロパティの使用方法を示しています:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend-formatting-decimals"
           alt="{Platform} データ凡例の小数の書式設定"
           github-src="charts/category-chart/data-legend-formatting-decimals">
</code-view>

## {Platform} データ凡例値モード

`ValueFormatMode` プロパティを変更することにより、`XamDataLegend` 内の値のデフォルトの 10 進表示を通貨表示に変更することができます。また、`ValueFormatCulture` プロパティにカルチャ タグを設定することで、表示される通貨記号のカルチャを変更できます。たとえば、次のデータ凡例の例では、`ValueFormatCulture` が「en-GB」に設定されており、英国ポンド (£) の記号が表示されています:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-formatting-currency"
           alt="{Platform} 通貨の書式設定"
           github-src="charts/financial-chart/data-legend-formatting-currency">
</code-view>

## {Platform} データ凡例のスタイル設定イベント

`XamDataLegend` には、対応する行を描画するときに発生する 5 つのイベントがあります。それらのイベントを、その使用目的とあわせて以下に示します:

- `StyleHeaderRow`: このイベントは、ヘッダー行を描画するときに 1 回発生します。
- `StyleSeriesRow`: このイベントは、シリーズの行ごとに 1 回発生し、シリーズの値の条件付きスタイル設定を可能にします。
- `StyleSeriesColumn`: このイベントは、シリーズの列ごとに 1 回発生し、シリーズの値の条件付きスタイル設定を可能にします。
- `StyleSummaryRow`: このイベントは、集計行を描画するときに 1 回発生します。
- `StyleSummaryColumn`: このイベントは、集計列を描画するときに 1 回発生します。

上記の各イベントは、引数として `DataLegendStylingRowEventArgs` パラメーターを公開します。これにより、各項目のテキスト、テキストの色、および行の全体的な可視性をカスタマイズできます。イベント引数は、イベント固有のプロパティも公開します。たとえば、`StyleSeriesRow` イベントはシリーズごとに発生するため、イベント引数は、シリーズを表す行の、シリーズ インデックスとシリーズ タイトルを返します。

## API リファレンス

 - `ExcludedColumns`
 - `ExcludedSeries`
 - `HeaderFormatDate`
 - `HeaderFormatTime`
 - `HeaderText`
 - `IncludedColumns`
 - `IncludedSeries`
 - `LabelDisplayMode`
 - `LabelTextColor`
 - `StyleHeaderRow`:
 - `StyleSeriesColumn`:
 - `StyleSeriesRow`
 - `StyleSeriesRow`:
 - `StyleSummaryColumn`:
 - `StyleSummaryRow`:
 - `SummaryTitleText`
 - `SummaryType`
 - `TitleTextColor`
 - `UnitText`
 - `UnitsTextColor`
 - `ValueFormatAbbreviation`
 - `ValueFormatCulture`
 - `ValueFormatMaxFractions`
 - `ValueFormatMaxFractions`
 - `ValueFormatMinFractions`
 - `ValueFormatMode`
 - `ValueTextColor`
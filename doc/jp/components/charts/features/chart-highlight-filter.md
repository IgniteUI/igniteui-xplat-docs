---
title: {Platform} チャート強調表示フィルター | データ可視化 | インフラジスティックス
_description: Infragistics の {Platform} チャート強調表示フィルター
_keywords: {Platform} Charts, Highlighting, Filtering, Infragistics, {Platform} チャート, 強調表示, フィルターリング, インフラジスティックス
mentionedTypes: ["CategoryChart", "XamDataChart", "Series", "HighlightedValuesDisplayMode"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} Chart 強調表示フィルター

{ProductName} Chart コンポーネントは、プロットされたデータのサブセットを表示できるようにすることで、これらのチャートにプロットされた系列の視覚化を強化できるデータ強調表示オーバーレイをサポートしています。これは、データセットの目標値と実際の値などを視覚化するのに役立ちます。以下の例で、この機能を説明します。

`sample="/charts/data-chart/chart-highlight-filter-multiple-series", height="500", alt="{Platform} 強調表示フィルターの例"`

データ強調表示機能は `XamDataChart` および `CategoryChart` でサポートされていますが、これらのコントロールの動作の性質上、それぞれ異なる方法で構成されることに注意してください。以下では、強調表示フィルター機能のさまざまな API について説明します。

## DataChart での強調表示フィルターの使用

`XamDataChart` では、強調表示フィルター API の多くは主に、表示したいデータのサブセットを示すデータ項目のプロパティ名を `HighlightedValueMemberPath` プロパティに設定することによって、シリーズ自体が生成されます。これにより、列シリーズおよびエリア シリーズ タイプの場合は不透明度を下げて全体セットが表示され、線シリーズ タイプの場合は破線が表示されることで、データのサブセットが強調表示されます。

以下のサンプルは、`HighlightedValueMemberPath` を使用して強調表示を表示する方法を示しています。

列およびエリア シリーズ の場合の不透明度の低減は、シリーズの `HighlightedValuesFadeOpacity` プロパティを設定することで構成できます。オーバーレイをまったく表示したくない場合は、`HighlightedValuesDisplayMode` プロパティを `Hidden` に設定することもできます。

デフォルトでは、`HighlightedValueMemberPath` に使用されるデータ ソースは、シリーズまたはチャートの `ItemsSource` に設定したものになりますが、シリーズの `HighlightedItemsSource` プロパティを使用して独自のデータ ソースを提供することもできます。カテゴリ シリーズを使用している場合は、`HighlightedItemsSource` のスキーマがそのシリーズの `ItemsSource` プロパティのスキーマと一致する必要があることに注意してください。

強調表示フィルターによって表示されるシリーズの部分は、チャートの凡例レイヤーとツールチップ レイヤーに個別に表示されます。`HighlightedTitleSuffix` を設定することで、ツールチップと凡例に表示されるタイトルを構成できます。これにより、指定した値がシリーズの `Title` の末尾に追加されます。

次の例は、`XamDataChart` コントロール内のデータ強調表示オーバーレイ機能の使用法を示しています。

`sample="/charts/data-chart/chart-highlight-filter", height="500", alt="{Platform} 強調表示フィルターの例"`

## CategoryChart での強調表示フィルターの使用

`CategoryChart` 強調表示フィルターは、`InitialHighlightFilter` プロパティを設定することによってチャート上で発生します。`CategoryChart` は、デフォルトで、基になるデータ項目のすべてのプロパティを考慮します。そのため、データのサブセットをフィルタリングできるようにデータをグループ化および集計できるように、チャート上でも `InitialGroups` を定義する必要があります。`InitialGroups` を基になるデータ項目の値パスに設定して、重複した値を持つパスでグループ化することができます。 

<!-- Unsure of this part. Need to review -->
<!-- ????? The `InitialHighlightFilter` is done using OData filter query syntax. The syntax for this is an abbreviation of the filter operator. For example, if you wanted to have an InitialHighlightFilter of "Month not equals January" it would be represented as "Month ne 'January'"-->

`XamDataChart` と同様に、`HighlightedValuesDisplayMode` プロパティも `CategoryChart` で公開されます。オーバーレイを表示したくない場合は、このプロパティを `Hidden` に設定できます。

以下の例は、`CategoryChart` コントロール内でのデータ強調表示オーバーレイ機能の使用法を示しています。

`sample="/charts/category-chart/chart-highlight-filter", height="500", alt="{Platform} 強調表示フィルターの例"`

<!-- TODO add new section that talks about how this feature also applies to Range, Financial series and the HighlightedValueMemberPath property corresponds to:
HighlightedHighMemberPath and HighlightedLowMemberPath in Range Series
HighlightedHighMemberPath, HighlightedLowMemberPath, HighlightedOpenMemberPath, HighlightedCloseMemberPath in Financial Series-->

## その他のリソース

関連するチャート機能の詳細については、次のトピックを参照してください。

- [チャートの強調表示](chart-highlighting.md)
- [チャートのデータ ツールチップ](chart-data-tooltip.md)
- [チャートのデータ集計](chart-data-aggregations.md)

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。


| `CategoryChart` プロパティ                    | `XamDataChart` プロパティ | 
| ----------------------------------------------|---------------------------|
| `CategoryChart.HighlightedItemsSource`        | `Series.HighlightedItemsSource`  |
| `CategoryChart.HighlightedTitleSuffix`        | `Series.HighlightedTitleSuffix`  | 
| `CategoryChart.HighlightedValueMemberPath`    | `Series.HighlightedValueMemberPath`     | 
| `CategoryChart.HighlightedValuesDisplayMode`  | `Series.HighlightedValuesDisplayMode`   | 
| `CategoryChart.HighlightedValuesFadeOpacity`  | `Series.HighlightedValuesFadeOpacity`   | 
| `CategoryChart.HighlightedValuesDisplayMode`  | `Series.HighlightedValuesDisplayMode`   | 
| `CategoryChart.InitialHighlightFilter`        |  |
| `CategoryChart.InitialGroups`                 |  |

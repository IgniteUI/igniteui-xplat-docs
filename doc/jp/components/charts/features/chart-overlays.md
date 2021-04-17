---
title: $PlatformShort$ チャート オーバーレイ | データ可視化ツール | 値オーバーレイ | インフラジスティックス
_description: $ProductName$ チャート コントロールの値オーバーレイ機能を使用して、単一の数値に水平線または垂直線を配置します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, value overlay, $ProductName$, Infragistics, $PlatformShort$ チャート, データ チャート, 値オーバーレイ, インフラジスティックス
mentionedTypes: ["XamDataChart", "ValueOverlay"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# $PlatformShort$ チャートのオーバーレイ

$ProductName$ データ チャートを使用すると、`ValueOverlay` を使用して定義した単一の数値で水平線または垂直線を配置できます。特定のシリーズの平均値や中央値などのデータを視覚化するのに役立ちます。

## $PlatformShort$ 値オーバーレイの例

次の例は、いくつかの水平値オーバーレイがプロットされた[縦棒チャート](../types/column-chart.md)を示しています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay"
           alt="$PlatformShort$ 値オーバーレイの例"
           github-src="charts/data-chart/series-value-overlay">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 値オーバーレイのプロパティ

データバインディングに `ItemsSource` を使用する他のシリーズ タイプとは異なり、値オーバーレイは `ValueMemberPath` プロパティを使用して単一の数値をバインドします。さらに、値オーバーレイでは、使用する単一の `Axis` を定義する必要があります。X 軸を使用する場合、値のオーバーレイは垂直線になり、Y 軸を使用する場合は、水平線になります。

数値の X 軸または Y 軸を使用する場合、`ValueMemberPath` プロパティは、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。カテゴリ X または Y 軸を使用する場合、`ValueMemberPath` は、値オーバーレイを表示するカテゴリのインデックスを反映する必要があります。

数値オーバーレイを角度角軸で使用すると、チャートの中心からの線として表示され、半径半径軸を使用すると、円として表示されます。

`ValueOverlay` 外観プロパティは、`Series` から継承されているため、例えば `Brush` と `Thickness` を使用でき、他のタイプのシリーズと同じように機能します。

`ValueOverlay` に軸注釈を表示して、所有する軸にオーバーレイの値を表示することもできます。これを示すために、`IsAxisAnnotationEnabled` プロパティを true に設定できます。

## $PlatformShort$ ファイナンシャル オーバーレイ

$ProductName$ [株価チャート](../types/stock-chart.md)に組み込みのファイナンシャル オーバーレイとインジケーターをプロットすることもできます。

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [縦棒チ株価チャートャート](../types/area-chart.md)
- [折れ線チャート](../types/line-chart.md)
- [株価チャート](../types/stock-chart.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `XamDataChart`
- `ItemsSource`
- `ValueOverlay`
- `Axis`
- `Brush`
- `IsAxisAnnotationsEnabled`
- `Series`
- `Thickness`

---
title: {Platform} バブル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} バブル チャート
_keywords: {Platform} Charts, Bubble Chart, Infragistics, {Platform} チャート, バブル チャート, インフラジスティックス
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries", "MarkerType"]
namespace: Infragistics.Controls.Charts
_language: ja
---
# {Platform} バブル チャート

{ProductName} バブル チャートは[散布図](scatter-chart.md)の一種で、可変スケーリングのマーカーを表示して、いくつかの異なる一連のデータ内の項目間の関係を表したり、x 座標と y 座標を使用してデータ項目をプロットしたりします。データ ポイントのこれらの座標は、2 つの数値データ列によって決定されます。バブル チャートは、データの不均一な間隔またはクラスターに注意を向けます。このチャートは、科学データのプロットによく用いられ、予測結果からの収集データの偏差をハイライト表示できます。バブル チャートには、[散布図チャート](scatter-chart.md#{PlatformLower}-散布マーカー-チャート)の多くの特性がありますが、さまざまな半径スケール サイズを持つオプションがあります。

## {Platform} バブル チャートの例

次の例に示すように、`BubbleSeries` と 2 つの数値軸を使用して、`XamDataChart` コントロールで {ProductName} バブル チャートを作成できます。

`sample="/charts/data-chart/scatter-bubble-chart-multiple-sources", height="600", alt="{Platform} バブル チャートの例"`



<div class="divider--half"></div>

## 単一シリーズの {Platform} バブル チャート

以下の例に示すように、データを `BubbleSeries` の `ItemsSource` プロパティにバインドし、その `XMemberPath`、`YMemberPath`、`RadiusMemberPath` プロパティを使用してデータ列をマップできます。

`sample="/charts/data-chart/scatter-bubble-chart-single-source", height="600", alt="単一シリーズの {Platform} バブル チャート"`



<div class="divider--half"></div>

## 複数シリーズの {Platform} バブル チャート

{Platform} バブル チャートでは、次の例に示すように、複数のデータ ソースのバインドは、新しい各データ ソースを追加の `BubbleSeries` の `ItemsSource` プロパティに設定することで機能します。

`sample="/charts/data-chart/scatter-bubble-chart-multiple-sources", height="600", alt="複数シリーズの {Platform} バブル チャート"`



<div class="divider--half"></div>

## {Platform} バブル チャートのスタイル設定

{Platform} バブル チャートでは、`MarkerType` プロパティを使用してバブル マーカーの形状をカスタマイズし、`RadiusScale` プロパティを使用してサイズをカスタマイズし、`MarkerBrush`、`MarkerOutline`、`MarkerThickness` プロパティを使用して外観をカスタマイズできます。さらに、`FillMemberPath` プロパティと `FillScale` プロパティを使用して、データ列に基づいてバブル マーカーにカラーを付けることもできます。この例では、上記のプロパティの使用法を示しています。

`sample="/charts/data-chart/scatter-bubble-chart-styling", height="600", alt="{Platform} バブル チャートのスタイル設定"`



<div class="divider--half"></div>

## その他のリソース

- [散布図](scatter-chart.md)
- [シェープ チャート](shape-chart.md)


## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `XamDataChart`
- `BubbleSeries`
- `ScatterSeries`
- `ItemsSource`
- `FillMemberPath`
- `FillScale`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`
- `MarkerThickness`
- `RadiusScale`
- `RadiusMemberPath`
- `XMemberPath`
- `YMemberPath`
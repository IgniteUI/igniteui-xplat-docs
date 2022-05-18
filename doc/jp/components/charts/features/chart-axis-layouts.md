---
title: $Platform$ 軸レイアウト | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $Platform$ 軸レイアウト
_keywords: $Platform$ Axis, Layouts, Location, Position, Share, Multiple, Crossing, Infragistics, $Platform$ 軸, レイアウト, 位置, 配置, 共有, 複数, 交差, インフラジスティックス
mentionedTypes: [ "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "Axis", "AxisLabelSettings", "ScatterSplineSeries", "TimeXAxis" ]
_language: ja
---

# $Platform$ 軸レイアウト

すべての $ProductName$ チャートには、位置などの多くの軸レイアウト オプションを構成するオプションが含まれているほか、シリーズ間で軸を共有したり、同じチャートに複数の軸を含めることができます。これらの機能は、以下の例で示されています。

> 注: 次の例は、`CategoryChart` および `FinancialChart` コントロールに適用されます。

## 軸位置の例

すべての軸に対して、チャートのプロット領域に関連して軸の位置を指定できます。$Platform$ チャートの `XAxisLabelLocation` プロパティを使用すると、x 軸の線とそのラベルをプロット領域の上または下に配置できます。同様に、`YAxisLabelLocation` プロパティを使用して、プロット領域の左側または右側に y 軸を配置できます。

以下の例は、2009 年以降に生成された再生可能電力量を[折れ線チャート](../types/line-chart.md)で示しています。チャートのプロット領域の内側または外側の左側または右側にラベルを配置したときに軸がどのように見えるかを視覚化できるように、`YAxisLabelLocation` を構成できるドロップダウンがあります。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-locations"
           alt="$Platform$ 軸位置の例"
           github-src="charts/category-chart/axis-locations">
</code-view>

<!-- ## 軸方向の例

TODO add info/example of 4 charts with all possible combinations of XAxisInverted and YAxisInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## 軸の高度なシナリオ

より高度な軸レイアウト シナリオでは、$Platform$ データ チャートを使用して軸を共有したり、同じプロット領域に複数の y 軸や x 軸を追加したり、特定の値で軸を交差させたりすることができます。次の例は、`XamDataChart` のこれらの機能の使用方法を示しています。

### 軸共有の例

$Platform$ `XamDataChart` の同じプロット領域に複数の軸を共有して追加できます。`TimeXAxis` を共有し、複数の `NumericYAxis` を追加して、さまざまな値 (株価や株取引量など) を持つ多くのデータ ソースをプロットするのが一般的なシナリオです。

以下の例は、[株価チャート](../types/stock-chart.md)と[縦棒チャート](../types/column-chart.md)をプロットした株価および株取引量チャートを示しています。この場合、左側の Y 軸は[縦棒チャート](../types/column-chart.md)で使用され、右側の Y 軸は[株価チャート](../types/stock-chart.md)、X 軸は 2 つの間で共有されます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing"
           alt="$Platform$ 軸共有の例"
           github-src="charts/data-chart/axis-sharing">
</code-view>

<div class="divider--half"></div>

### 軸交差の例

軸をプロット領域の外側に配置することに加えて、$Platform$  `XamDataChart` は、軸をプロット領域の内側に配置し、特定の値で交差させるオプションも提供します。たとえば、x 軸と y 軸の両方で `CrossingAxis` プロパティと `CrossingValue` プロパティを設定して、原点が (0, 0) で 交差するように軸線と軸ラベルを描画することにより、三角関数チャートを作成できます。

以下の例は、[散布スプライン チャート](../types/scatter-chart.md)で表される Sin と Cos 波を示します。X 軸と Y 軸は (0、0) 原点で交差します。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-crossing"
           alt="$Platform$ 軸交差の例"
           github-src="charts/data-chart/axis-crossing">
</code-view>

<div class="divider--half"></div>

<!-- Blazor -->
### 軸タイムラインの例

次の例は、`TimeXAxis` をタイムラインとして使用してデータ チャートのスタイルを設定する方法を示しています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-timeline-axis-type"
           alt="コールアウト レイヤーを使用した $Platform$ タイムライン"
           github-src="charts/data-chart/timeline-axis-type">
</code-view>

<div class="divider--half"></div>
<!-- end: Blazor -->

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [軸グリッド線](chart-axis-gridlines.md)
- [軸オプション](chart-axis-options.md)


## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。


| `XamDataChart`                                         | `CategoryChart`                 |
| ------------------------------------------------------ | ------------------------------- |
| `Axes` -> `NumericYAxis` -> `CrossingAxis`             | None                            |
| `Axes` -> `NumericYAxis` -> `CrossingValue`            | None                            |
| `Axes` -> `NumericXAxis` -> `IsInverted`               | `XAxisInverted`                 |
| `Axes` -> `NumericYAxis` -> `IsInverted`               | `YAxisInverted`                 |
| `Axes` -> `NumericYAxis` -> `LabelLocation`            | `YAxisLabelLocation`            |
| `Axes` -> `NumericXAxis` -> `LabelLocation`            | `XAxisLabelLocation`            |
| `Axes` -> `NumericYAxis` -> `LabelHorizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` -> `NumericXAxis` -> `LabelVerticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` -> `NumericYAxis` -> `LabelVisibility`          | `YAxisLabelVisibility`          |
| `Axes` -> `NumericXAxis` -> `LabelVisibility`          | `XAxisLabelVisibility`          |

<!-- TODO correct links in Transformer -->
<!--
| `Axes` -> `NumericYAxis` -> `labelSettings.location`            | `YAxisLabelLocation`            |
| `Axes` -> `NumericXAxis` -> `labelSettings.location`            | `XAxisLabelLocation`            |
| `Axes` -> `NumericYAxis` -> `labelSettings.horizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` -> `NumericXAxis` -> `labelSettings.verticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` -> `NumericYAxis` -> `labelSettings.visibility`          | `YAxisLabelVisibility`          |
| `Axes` -> `NumericXAxis` -> `labelSettings.visibility`          | `XAxisLabelVisibility`          | -->


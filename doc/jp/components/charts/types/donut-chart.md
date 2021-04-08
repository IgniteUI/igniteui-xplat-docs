---
title: $PlatformShort$ ドーナツ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ドーナツ チャート
_keywords: $PlatformShort$ Charts, Donut Chart, Infragistics, $PlatformShort$ チャート, ドーナツ チャート, インフラジスティックス
mentionedTypes: ["XamDoughnutChart", "DoughnutChart"]
_language: ja
---
# $PlatformShort$ ドーナツ チャート

The $ProductName$ ドーナツ チャートは[円チャート](pie-chart.md)と同様、変数の発生を比例的に表示します。ドーナツ型チャートは、複数の変数をコンセントリック リングで表示でき、階層データの可視化を組み込みでサポートします。リングは、異なるデータ項目にバインドすることも、共通のデータ ソースを共有することもできます。

## $PlatformShort$ ドーナツ チャートの例

`XamDoughnutChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドします。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-legend"
           alt="$PlatformShort$ ドーナツ チャートの凡例" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ドーナツ チャートの推奨事項

### $PlatformShort$ ドーナツ チャートはプロジェクトに適していますか?

Donut Charts are appropriate for small data sets and are easy to read at a glance. Donut charts are just one type of part-to-whole visualization. Others include: 

- [Pie](pie-chart.md)
- Funnel 
- [Stacked Area](area-chart.md)
- [Stacked 100% Area (Stacked Percentage Area)](area-chart.md)
- [Stacked Bar](bar-chart.md)
- [Stacked 100% Bar (Stacked Percentage Bar)](bar-chart.md)
- [Treemap](treemap-chart.md)
- [Waterfall](column-chart.md)

The $PlatformShort$ Donut Chart includes interactive features that give the viewer tools to analyze data, like: 

- Legends 
- Slice Explosion 
- Slice Selection 
- Chart Animations 

### ドーナツ チャートのベスト プラクティス:

- Using multiple data sets to display your data in a ring display. 
- Placing the information such as values or labels, within the hole of the donut for quick explanation of data.
- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Ensuring data segments add up to 100%.
- Ensuring the color palette is distinguishable for segments/slices of the parts.

### 以下の場合にドーナツ チャートを使用しないでください:

- Comparing change over time —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart. 
- Requiring precise data comparison —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart. 
- You have more than 6 or 8 segments (high data volume) — consider a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart if it works for your data story. 
- It would be easier for the viewer to perceive the value difference in a [Bar](bar-chart.md) chart. 
- You have negative data, as this can not be represented in a donut chart. 

##  ドーナツ チャート - スライスの選択

The $PlatformShort$ Donut Chart has the ability to select slices on click. Optionally, you may apply a single custom visual style to the selected slices. The `SliceClick` event is raised when the user clicks on a slice. Enabling slice selection allows you to modify the slice's selection upon click. The following sample demonstrates how to enable slice selection and set the selected slice color to gray. 

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-selection"
           alt="$PlatformShort$ ドーナツ スライスの選択" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ドーナツ チャート - 複数のリング

$PlatformShort$ ドーナツ チャートに複数の輪を表示して、各輪を異なるデータ 項目にバインドしたり、共通のデータ ソースを共有したりすることができます。これは、以下の季節ごとのデータ表示など、基礎となる共通のカテゴリを持つ層としてデータを表示する必要がある場合に役立ちます:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-rings"
           alt="$PlatformShort$ ドーナツ チャート複数のリング" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [円チャート](pie-chart.md)
- [極座標チャート](polar-chart.md)
- [ラジアル チャート](radial-chart.md)

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ       | コントロール名   | API メンバー
-----------------|----------------|------------
ドーナツ チャート      | `XamDoughnutChart`     | `DoughnutChart`

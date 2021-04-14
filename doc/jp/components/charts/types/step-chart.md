---
title: $PlatformShort$ ステップ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ステップ チャート
_keywords: $PlatformShort$ Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics, $PlatformShort$ チャート, ステップ チャート, ステップ エリア チャート, ステップ折れ線チャート, インフラジスティックス
mentionedTypes: ["CategoryChart", "ChartType"]
_language: ja
---
# $PlatformShort$ ステップ チャート

$ProductName$ ステップ チャートは連続する垂直線と水平線で接続されたポイントのコレクションとして描画されるカテゴリ チャートのグループに属しています。ステップ エリア チャートの場合、線の下の領域が塗りつぶされます。値は y 軸に表示され、カテゴリは x 軸に表示されます。ステップ チャートは、一定期間の変化量を強調したり、複数の項目を比較したりします。

## $PlatformShort$ ステップ エリア チャート

`CategoryChart` コントロールでステップ エリア チャートを作成するには、以下の例のように、`ChartType` プロパティを `StepArea` 値に設定します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources"
           alt="複数ソースの $PlatformShort$ ステップ エリア チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ステップ折れ線チャート

$PlatformShort$ ステップ折れ線チャートは、線の下の領域が塗りつぶされていないことを除いて、ステップ エリア チャートと非常によく似ています。

次の例に示すように、データをバインドし、`ChartType` プロパティを `StepLine` 値に設定することで、`CategoryChart` コントロールでステップ折れ線チャートを作成できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="複数ソースの $PlatformShort$ ステップ折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ステップ チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたステップ チャートが必要な場合は、以下に示すように、`CategoryChart` コントロールの `MarkerTypes`、 `MarkerBrushes`、`MarkerOutlines`、折れ線の `Brushes`、および折れ線の `Outlines` プロパティを構成できます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-styling"
           alt="$PlatformShort$ ステップ折れ線チャートのスタイル設定" >
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [折れ線チャート](line-chart.md)
- [チャート マーカー](../features/chart-markers.md)

## API メンバー

以下は、上記のセクションで説明されている API メンバーのリストです。

- `CategoryChart`
- `ChartType`
- `StepArea`
- `StepLine`
- `Brushes`
- `Outlines`
- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerTypes`


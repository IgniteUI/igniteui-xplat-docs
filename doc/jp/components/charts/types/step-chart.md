---
title: $PlatformShort$ ステップ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ステップ チャート
_keywords: $PlatformShort$ Charts, Step Chart, Infragistics, $PlatformShort$ チャート, ステップ チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ChartType"]
_language: ja
---
# $PlatformShort$ ステップ チャート

In the following example, the step chart is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019. The Y-Axis, or labels on the left of the chart, are displaying the terawatt hour (TWh) values of renewed electricity and the X-Axis, or labels on the bottom of the chart, are displaying the year.

$PlatformShort$ ステップ チャートはカテゴリ シリーズのグループに属し、連続した垂直線と水平線で接続されたポイントのコレクションを使用して描画されます。ステップ エリア チャートの場合、線の下のエリアが塗りつぶされます。値は y 軸に表示され、カテゴリは x 軸に表示されます。これは、一定期間の変化量を強調したり、複数の項目を比較したりします。

## $PlatformShort$ ステップ チャートの例

`XamCategoryChart` コントロールでステップ チャートを作成するには、以下の例のように、データを `ItemsSource` プロパティにバインドし、`ChartType` プロパティを `StepLine` 値に設定します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="凡例付きの $PlatformShort$ ステップ折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## 単一シリーズの $PlatformShort$ ステップ チャート

この例では、ステップ チャートは、ヨーロッパで数年間生産された再生可能電力の量の経時的な価値の変化を示しています。

`XamCategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `StepLine` に設定します:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-single-source"
           alt="単一シリーズの $PlatformShort$ ステップ折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## 複数シリーズの $PlatformShort$ ステップ チャート

以下の例に示すように、ステップ チャートは、地域間で数年間に生成された再生可能電力の量など、時間の経過に伴う価値の変化を示すためによく使用されます。

`XamCategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `StepLine` に設定します:


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="複数シリーズの $PlatformShort$ ステップ折れ線チャート" >
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ ステップ チャートのスタイル設定

他のシリーズの複合などのより多くの機能を備えたステップ チャートが必要な場合は、以下に示すように、マーカー、マーカー ブラシ、マーカー アウトライン、シリーズ ブラシ、シリーズ アウトラインを構成できます。

`XamCategoryChart` コントロールでこのチャート タイプを作成するには、以下の例のように、データをバインドし、`ChartType` プロパティを `StepLine` に設定します:

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

## API メンバー

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

チャート タイプ | コントロール名       | API メンバー
-----------|--------------------|------------------------
ステップ       | `XamCategoryChart` | `ChartType` = `StepLine`

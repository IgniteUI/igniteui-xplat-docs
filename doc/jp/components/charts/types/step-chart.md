---
title: $PlatformShort$ ステップ チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ステップ チャート
_keywords: $PlatformShort$ Charts, Step Chart, Infragistics, $PlatformShort$ チャート, ステップ チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ChartType"]
_language: ja
---
# $PlatformShort$ ステップ チャート

$PlatformShort$ Step Chart belongs to a group of Category Series and it is rendered using a collection of points connected by continuous vertical and horizontal lines. For Step Area Chart, the area below lines are filled in. Values are represented on the y-axis and categories are displayed on the x-axis. This emphasizes the amount of change over a period of time or compares multiple items.

## $PlatformShort$ ステップ チャートの例

次の例では、 ステップ チャートは、2009 年 から 2019 年までのヨーロッパ、中国、および米国の国々の再生可能エネルギーの発電量を比較しています。Y 軸 (チャートの左側のラベル) には、更新された電力のテラワット時 (Twh) 値が表示され、X 軸 (チャートの下部のラベル) には、年が表示されます。

`XamCategoryChart` コントロールでステップ チャートを作成するには、以下の例のように、データを `ItemsSource` プロパティにバインドし、`ChartType` プロパティを `StepLine` 値に設定します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="$PlatformShort$ 複数ソースのステップ折れ線チャート" >
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

---
title: $PlatformShort$ チャート ツールチップ | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート ツールチップ
_keywords: $PlatformShort$ Charts, Tooltips, Infragistics, $PlatformShort$ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "ToolTipType"]
_language: ja
---

# $PlatformShort$ チャート ツールチップ

$PlatformShort$ チャートでは、ツールチップはバインドされたデータに関する詳細を提供し、エンドユーザーがデータ ポイントにカーソルを合わせるとポップアップで表示されます。ツールチップは、`XamCategoryChart`、`XamFinancialChart`、および `XamDataChart` コントロールでサポートされています。

## $PlatformShort$ チャート ツールチップのタイプ

次の例は、開始時に `ToolTipType` プロパティを "Default" に設定することでツールチップが有効にした[縦棒チャート](../types/column-chart.md)を示しています。このプロパティはサンプルで構成可能であり、次のいずれかのオプションに設定できます。

プロパティの値     | 説明
-------------------|----------------
`Default` | ツールチップは、ポインタがその上に位置されると、単一の項目のツールチップを表示します。
`Item` | ツールチップは、ポインタが位置されているカテゴリの各データ項目のツールチップを表示します。
`Category` | ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="$PlatformShort$ ツールチップ タイプの例"
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of $PlatformShort$ charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in $PlatformShort$ Category Chart control.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template"
           alt="$PlatformShort$ Tooltip Template"
           github-src="charts/category-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>


## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in $PlatformShort$ Data Chart control.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-tooltip-template"
           alt="$PlatformShort$ Tooltip Template"
           github-src="charts/data-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャート マーカー](chart-markers.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `ToolTipType`
- `XamCategoryChart`
- `XamDataChart`

---
title: $PlatformShort$ チャート ツールチップ | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート ツールチップ
_keywords: $PlatformShort$ Charts, Tooltips, Infragistics, $PlatformShort$ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "ToolTipType"]
_language: ja
---

# $PlatformShort$ チャート ツールチップ

$PlatformShort$ チャートでは、ツールチップはバインドされたデータに関する詳細を提供し、エンドユーザーがデータ ポイントにカーソルを合わせるとポップアップで表示されます。ツールチップは、`XamCategoryChart`、`XamFinancialChart`、および `XamDataChart` コンポーネントでサポートされています。

## $PlatformShort$ チャート ツールチップの例

The following example shows the [Column Chart](../types/column-chart.md) is comparing movie series total world box office revenue versus the highest grossing movie in that series with tooltips enabled by setting the `ToolTipType` property to "Default" at the start. This property is configurable in the sample and can be set to one of the following options:

- `Default` ツールチップは、ポインタがその上に位置されると、単一の項目のツールチップを表示します。
- `Item` ツールチップは、ポインタが位置されているカテゴリの各データ項目のツールチップを表示します。
- `Category` ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="$PlatformShort$ ツールチップ タイプの例"
           github-src="charts/category-chart/column-chart-with-tooltips">
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

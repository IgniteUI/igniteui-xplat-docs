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

次の例は、[縦棒チャート](../types/column-chart.md)が、映画シリーズの世界の興行収入の合計と、そのシリーズで最も収益の高い映画を比較していることを示しています。開始時に `ToolTipType` プロパティを "Default" に設定することで、ツールチップが有効になります。このプロパティはサンプルで構成可能であり、次のいずれかのオプションに設定できます。

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

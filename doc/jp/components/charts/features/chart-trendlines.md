---
title: {Platform} チャート トレンドライン | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} チャート トレンドライン
_keywords: {Platform} Charts, Trendlines, Infragistics, {Platform} チャート, トレンドライン, インフラジスティックス
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート トレンドライン

{ProductName} チャートでは、トレンドラインはトレンドの識別やデータ内のパターンの検索に役立ちます。トレンドラインは、常にチャートにバインドされたデータ ポイントの前に描画されます。積層シリーズ、シェイプ シリーズ、および範囲シリーズを除き、これらは `CategoryChart`、`FinancialChart`、および `XamDataChart` (積層型シリーズ、シェイプ シリーズ、範囲シリーズを除く) でサポートされています。

トレンドラインはデフォルトでオフになっていますが、`TrendLineType` プロパティを設定することで有効にできます。また、ブラシ、期間、太さなど、トレンドラインの複数の外観プロパティを変更できます。

# {Platform} チャート トレンドラインの例

次のサンプルは、`QuinticFit` トレンドラインが最初に適用された、2013 年から 2017 年までの Microsoft の株価トレンドを示す `FinancialChart` を示しています。適用されるトレンドラインのタイプを変更できるドロップダウンがあり、可能なすべてのトレンドライン タイプがそのドロップダウン内に一覧表示されます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines"
           alt="{Platform} トレンドラインの例"
           github-src="charts/financial-chart/trendlines">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャート強調表示](chart-highlighting.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `CategoryChart`
- `XamDataChart`
- `FinancialChart`
- `TrendlineType`

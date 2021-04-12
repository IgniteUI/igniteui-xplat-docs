---
title: $PlatformShort$ チャート トレンドライン | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート トレンドライン
_keywords: $PlatformShort$ Charts, Trendlines, Infragistics, $PlatformShort$ チャート, トレンドライン, インフラジスティックス
mentionedTypes: ["XamFinancialChart", "XamCategoryChart", "XamDataChart", "TrendLineType"]
_language: ja
---

# $PlatformShort$ チャート トレンドライン

$ProductName$ チャートでは、トレンドラインはトレンドの識別やデータ内のパターンの検索に役立ちます。トレンドラインは、常にチャートにバインドされたデータ ポイントの前に描画されます。積層シリーズ、シェイプ シリーズ、および範囲シリーズを除き、これらは `XamCategoryChart`、`XamFinancialChart`、および `XamDataChart` (積層型シリーズ、シェイプ シリーズ、範囲シリーズを除く) でサポートされています。

トレンドラインはデフォルトでオフになっていますが、 `TrendLineType` プロパティを設定することで有効にできます。また、ブラシ、期間、太さなど、トレンドラインの複数の外観プロパティを変更できます。

# $PlatformShort$ チャート トレンドラインの例

次のサンプルは、`QuinticFit` トレンドラインが最初に適用された、2013 年から 2017 年までの Microsoft の株価トレンドを示す `XamFinancialChart` を示しています。適用されるトレンドラインのタイプを変更できるドロップダウンがあり、可能なすべてのトレンドライン タイプがそのドロップダウン内に一覧表示されます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines"
           alt="$PlatformShort$ トレンドラインの例"
           github-src="charts/financial-chart/trendlines">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャート強調表示](chart-highlighting.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `XamCategoryChart`
- `XamDataChart`
- `XamFinancialChart`
- `TrendlineType`

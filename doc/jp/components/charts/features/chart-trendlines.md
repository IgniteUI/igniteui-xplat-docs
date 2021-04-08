---
title: $PlatformShort$ チャート トレンドライン | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート トレンドライン
_keywords: $PlatformShort$ Charts, Trendlines, Infragistics, $PlatformShort$ チャート, トレンドライン, インフラジスティックス
mentionedTypes: ["XamFinancialChart", "XamCategoryChart", "XamDataChart", "TrendLineType"]
_language: ja
---

# $PlatformShort$ チャート トレンドライン

$ProductName$ チャートでは、トレンドラインはトレンドの識別やデータ内のパターンの検索に役立ちます。トレンドラインは、常にチャートにバインドされたデータ ポイントの前に描画されます。積層シリーズ、シェイプ シリーズ、および範囲シリーズを除き、これらは `XamCategoryChart`、`XamFinancialChart`、および `XamDataChart` (積層型シリーズ、シェイプ シリーズ、範囲シリーズを除く) でサポートされています。

Trendlines are off by default, but you can enable them by setting the `TrendLineType` property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness. 

# $PlatformShort$ チャート トレンドラインの例

The following sample depicts a `XamFinancialChart` showing the stock trend of Microsoft between 2013 and 2017 with a `QuinticFit` trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

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

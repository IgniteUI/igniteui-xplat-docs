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

トレンドラインを有効にすると、ダッシュ配列を適用することもできます。これを行うには、`TrendLineDashArray` プロパティを数値の配列に設定します。数値配列は、トレンドラインの破線の長さを表します。

# {Platform} チャート トレンドラインの例

次のサンプルは、**QuinticFit** トレンドラインが最初に適用された、2013 年から 2017 年までの Microsoft の株価トレンドを示す `FinancialChart` を示しています。適用されるトレンドラインのタイプを変更できるドロップダウンがあり、可能なすべてのトレンドライン タイプがそのドロップダウン内に一覧表示されます。

`sample="/charts/financial-chart/trendlines", height="500", alt="{Platform} トレンドラインの例"`


<div class="divider--half"></div>

# {Platform} チャート トレンドラインのダッシュ配列の例

次のサンプルは、`TrendLineDashArray` プロパティを介して適用された **QuarticFit** 破線トレンドラインを持つ `FinancialPriceSeries` を示す `XamDataChart` を示しています。

`sample="/charts/data-chart/dash-array-trendline", height="500", alt="{Platform} トレンドラインの例"`


<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャートのハイライト表示](chart-highlighting.md)

## API リファレンス

`CategoryChart` コンポーネントと `FinancialChart` コンポーネントは、次の API プロパティを共有します:

- `DomainChart.TrendLineBrushes`
- `DomainChart.TrendLinePeriod`
- `DomainChart.TrendLineThickness`
- `DomainChart.TrendLineType`

`XamDataChart` コンポーネントでは、シリーズのほとんどのタイプに次の API プロパティがあります:

- `ScatterBase.TrendLineBrush`
- `ScatterBase.TrendLineDashArray`
- `ScatterBase.TrendLinePeriod`
- `ScatterBase.TrendLineThickness`
- `ScatterBase.TrendLineType`

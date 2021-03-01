---
title: $PlatformShort$ ファイナンシャル チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ファイナンシャル チャート
_keywords: $PlatformShort$ Charts, Financial Chart, Infragistics, $PlatformShort$ チャート, ファイナンシャル チャート, インフラジスティックス
mentionedTypes: ["XamFinancialChart"]
_language: ja
---
# $PlatformShort$ ファイナンシャル チャート

$PlatformShort$ ファイナンシャル チャートを使用すると、シンプルで直感的な API を使用して、ファイナンシャル データと株価データを簡単に視覚化できます。その目的は、高パフォーマンスで大量のファイナンシャル サービス、および資本市場データ アプリケーションを構築することです。

価格および出来高のための複数の表示モード、そして多数の財務指標があります。ファイナンシャル チャートはデータ列を解析して選択します。日/時列を X 軸で使用し、Open、High、Low、Close、Volume 列、または最初の 5 つの数値列を Y 軸で使用します。ユーザーがチャート タイプを棒、ローソク足、柱状、または折れ線に設定できます。主要なビジュアル要素にツールバー、価格ペイン、ボリューム ペイン、インジケーター ペイン、およびナビゲーション ペインがあります。

chartType プロパティを以下のオプションの 1 つに設定してチャート タイプを明示的に指定することもできます:

- Bar (棒)
- Candle (ローソク足)
- Column (縦棒)
- Line (折れ線)
- Auto (自動) - データ アダプターに基づいてチャート タイプの自動選択を指定します。これは、データの名前および数値列の数に基づいて上記の値を選択します。たとえば、Open、High、Low、および Close 列があるデータ項目のために棒を使用します。

## 複数シリーズの $PlatformShort$ 株価チャート

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 株価指数チャート"></iframe>
</div>

<div class="divider--half"></div>

## $PlatformShort$ 株価チャートの例

この例では、ファイナンシャル チャートは 1 年間の S&P 500を表しています。

<!-- TODO use this iframe which will point to a new sample:
<iframe src='{environment:dvDemosBaseUrl}/charts/category-chart-type-Line' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ファイナンシャル チャートの例"></iframe> -->

## $PlatformShort$ シンプルな株価チャート
<!-- TODO show code for FinancialChart with:
- the dataSource set to multiple data sources
- the chartType property set to Candlestick
- the zoomSliderType property set to Candlestick
-->

## 複合の $PlatformShort$ 株価チャート

この例では、ファイナンシャル チャートは米国の収益をプロットしています。

<!-- TODO show code for FinancialChart with:
- the dataSource set to multiple data sources
- the volumeType="Column"
- the overlayType="BollingerBands"
- the indicatorTypes="AverageTrueRange"
-->

## $PlatformShort$ 株価チャートのスタイル設定

この例では、ファイナンシャル チャートは Amazon、Microsoft、Tesla の収益を比較しています。

<!-- TODO show code for FinancialChart with:
- the brushes and outlines properties set
- the thickness property set
-->

## $PlatformShort$ 高度な株価チャート

他のシリーズの複合などのより多くの機能を備えたファイナンシャル チャートが必要な場合は、以下に示すように、厚さ、アウトライン、ブラシ、負のアウトライン、負のブラシを構成できます。

<!-- TODO copy and combine content (code snippets, description) from these topics:
	data-chart-type-financial-candlestick-series.md
	data-chart-type-financial-ohlc-series.md
	data-chart-type-financial-line-indicators.md
	data-chart-type-financial-overlays.md
-->

## その他のリソース
<!-- TODO list topic links related to this topic -->

## API メンバー
<!-- TODO list API links used in this topic -->
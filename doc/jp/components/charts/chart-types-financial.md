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
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 株価指数チャート"></iframe>
</div>

<div class="divider--half"></div>

<div class="divider--half"></div>

## $PlatformShort$ 株価チャート

この例では、ファイナンシャル チャートは 1 年間の S&P 500を表しています。useful for investors and conducting technical analysis and forecasting future pricing/reports.

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-stock-index-chart" src='{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 株価指数チャート"></iframe>
</div>

<div class="divider--half"></div>

## $PlatformShort$ 株価チャートのスタイル設定

If you need a Financial Chart with more features such as composite other series, you can configure the thickness, outlines, brushes, negative outlines, negative brushes as demonstrated below. In this example, the financial chart is comparing revenue between Amazon, Microsoft and Tesla.

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-styling-chart" src='{environment:dvDemosBaseUrl}/charts/financial-chart-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 株価指数チャート"></iframe>
</div>

<div class="divider--half"></div>

<!-- TODO use this iframe which will point to a new sample:
<iframe src='{environment:dvDemosBaseUrl}/charts/category-chart-type-Line' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Financial Chart Example"></iframe> -->

## $PlatformShort$ チャートの注釈

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-annotations" src='{environment:dvDemosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ チャートの注釈"></iframe>
</div>

<div class="divider--half"></div>

## $PlatformShort$ チャートのペイン

In this example, the financial chart is plotting revenue for United States.

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-panes" src='{environment:dvDemosBaseUrl}/charts/financial-chart-panes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Chart Panes"></iframe>
</div>

<div class="divider--half"></div>

<!-- TODO list API links used in this topic 
## API メンバー
-->
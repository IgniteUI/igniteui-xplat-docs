---
title: $PlatformShort$ ファイナンシャル チャート | ツールチップ テンプレート | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ファイナンシャル チャートのツールチップを使用して重要なデータを表示します。$ProductName$ グラフ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ charts, financial chart, stock chart, tooltip templates, $ProductName$, Infragistics, $PlatformShort$ チャート, ファイナンシャル チャート, 株価チャート, ツールチップ テンプレート, インフラジスティックス
mentionedTypes: ['XamFinancialChart']
_language: ja
---
# $PlatformShort$ ツールチップ テンプレート

$PlatformShort$ Financial Chart コンポーネントは、シリーズの種類ごとに既定のツールチップを提供します。デフォルト ツールチップは特定のシリーズ項目に関連するすべての情報を表示します。これはシリーズ タイトル、データ値、および軸値を含みます。シリーズのスタイルと一致します。デフォルトのツールチップが適切でない場合、ツールチップのコンテンツおよびルック アンド フィールをカスタマイズできます。

## $PlatformShort$ ツールチップ テンプレート例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-tooltip-template-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ツールチップ テンプレート例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-template-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/financial-chart/tooltip-template"></sample-button>

</div>

<div class="divider--half"></div>

以下のコードのようにツールチップ コンテンツは、ツールチップ用のテンプレートを作成してカスタマイズできます。

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
    <div>
        <span [style.color]="series.actualBrush">{{series.title}}</span>
        <span> stock opened on {{item.time | date}} with a value of ${{item.open | number}} and closed with a value of ${{item.close | number}}.</span>
    </div>
</ng-template>

<igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    [tooltipTemplate]="valueTooltip" >
</igx-financial-chart>

```

```html
  <igc-financial-chart id="chart"
    height="500px"
    width="90%">
  </igc-financial-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcFinancialChartComponent);
chart.dataSource = data;
chart.tooltipTemplate = (context) => {
    return html `<div>
        <span style="color: ${context.series.actualBrush};">${context.series.title}</span>
        <span>stock opened on ${context.item.time.toLocaleDateString()} with a value of ${context.item.open} and closed with a value of ${context.item.close}.</span>
        </div>` }
```

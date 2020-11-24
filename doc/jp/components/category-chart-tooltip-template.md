---
title: $PlatformShort$ チャートおよびグラフ | データ可視化ツール | ツールチップ テンプレート | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャートのツールチップを使用して、重要なデータを表示します。インフラジスティックスの $ProductName$ グラフ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ charts, category chart, tooltip template, $ProductName$, Infragistics, $PlatformShort$ チャート, カテゴリ チャート, ツールチップ テンプレート, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---
# $PlatformShort$ ツールチップ テンプレート

$PlatformShort$ カテゴリ チャート コンポネントは、各シリーズ タイプにデフォルト ツールチップを提供します。デフォルト ツールチップは特定のシリーズ項目に関連するすべての情報を表示します。これはシリーズ タイトル、データ値、および軸値を含みます。シリーズのスタイルと一致します。デフォルトのツールチップが適切でない場合、 ツールチップのコンテンツおよびルック アンド フィールをカスタマイズできます。

## $PlatformShort$ ツールチップ テンプレートの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-template-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ツールチップ テンプレートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-template-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/category-chart/tooltip-template"></sample-button>

</div>

<div class="divider--half"></div>

以下のコードのようにツールチップ コンテンツは、ツールチップ用のテンプレートを作成してカスタマイズできます。

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
   <div>
      <span> {{item.Country}} energy use: <br/></span>
      <span> Coal :{{item.Coal | number}}<br/></span>
      <span> Oil :{{item.Oil | number}}<br/></span>
      <span> Gas :{{item.Gas | number}}<br/></span>
      <span> Nuclear :{{item.Nuclear | number}}<br/></span>
      <span> Hydro :{{item.Hydro | number}}<br/></span>
    </div>
</ng-template>

<div class="chart">
    <igx-category-chart height="100%" width="100%"
        [dataSource]="data" chartTitle="Energy Production"
        subtitle="by Country"
        [tooltipTemplate]="valueTooltip"
        [chartType]="chartType">
    </igx-category-chart>
</div>
```

```tsx
 <IgrCategoryChart height="100%" width="100%"
        dataSource={this.state.data}
        chartTitle="Energy Production"
        subtitle="by Country"
        tooltipTemplate={this.valueTooltip}
        chartType={this.state.chartType} />
```
```html
<igc-category-chart
    id="chart"
    width="800px"
    height="700px"
    chart-title="Energy Production"
    subtitle="by Country"
    chart-type="Column">
  </igc-category-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcCategoryChartComponent);
chart.dataSource = categoryData;

let template: TemplateFunction;
chart.tooltipTemplate = template;
```
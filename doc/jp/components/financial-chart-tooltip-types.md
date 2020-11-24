---
title: $PlatformShort$ ファイナンシャル チャート | ツールチップ タイプ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ファイナンシャル チャートのツールチップを使用して重要なデータを表示します。$ProductName$ グラフ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ charts, financial chart, stock chart, tooltips, $ProductName$, Infragistics, $PlatformShort$ チャート, ファイナンシャル チャート, 株価チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['XamFinancialChart']
_language: ja
---
# $PlatformShort$ ツールチップ タイプ

このトピックでは、$PlatformShort$ Financial Chart コンポーネントのツールチップ タイプについて説明します。

## $PlatformShort$ ツールチップ タイプの例
<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ ツールチップ タイプの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
<sample-button src="charts/financial-chart/tooltip-types"></sample-button>

</div>
<div class="divider--half"></div>

## ツールチップ タイプ

$PlatformShort$ Financial Chart コンポーネントは以下の方法でツールチップの表示を設定できます。

1. `Default` ツールチップはポインターが項目上に配置されたときに単一の項目に対してツールチップを表示できます。
1. `Item` ツールチップはポインターが項目上に配置されたときに各データ項目に対してツールチップを表示できます。
1. `Category` ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。
1. `None` はツールチップが非表示になります。

```html
<igx-financial-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.data}
    toolTipType="Category" />
```

```html
<igc-financial-chart id="chart"
    tool-tip-type="Category">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"                
    DataSource="DataSource"
    ToolTipType="ToolTipType.Category"/>
```
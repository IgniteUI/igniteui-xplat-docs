---
title: $PlatformShort$ ファイナンシャル チャート | ツールチップ タイプ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ファイナンシャル チャートのツールチップを使用して重要なデータを表示します。$ProductName$ グラフ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ charts, financial chart, stock chart, tooltips, $ProductName$, Infragistics, $PlatformShort$ チャート, ファイナンシャル チャート, 株価チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---
# $PlatformShort$ ツールチップ タイプ

このトピックでは、$PlatformShort$ Financial Chart コンポーネントのツールチップ タイプについて説明します。

## $PlatformShort$ ツールチップ タイプの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-types"
           alt="$PlatformShort$ ツールチップ タイプの例"
           github-src="charts/financial-chart/tooltip-types">
</code-view>

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
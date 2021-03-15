---
title: $PlatformShort$ チャートおよびグラフ | データ可視化ツール | ツールチップ タイプ | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャートのツールチップを使用して、重要なデータを表示します。インフラジスティックスの $ProductName$ グラフ チュートリアルを是非お試しください!
_keywords: $PlatformShort$ charts, category chart, tooltip, $ProductName$, Infragistics, $PlatformShort$ チャート, カテゴリ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ['CategoryChart', 'ToolTipType']
_language: ja
---
# $PlatformShort$ ツールチップ タイプ

$ProductName$ カテゴリ チャート コンポネントには、さまざまなツールチップ タイプがあります。

## $PlatformShort$ ツールチップ タイプの例

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-types" 
           alt="$PlatformShort$ ツールチップ タイプの例" 
           github-src="charts/category-chart/tooltip-types">
</code-view>

<div class="divider--half"></div>

## ツールチップ タイプ

カテゴリ チャート コンポネントは以下の方法でツールチップの表示を設定できます。

1. `Default` ツールチップはポインターが項目上に配置されたときに単一の項目に対してツールチップを表示できます。
1. `Item` ツールチップはポインターが項目上に配置されたときに各データ項目に対してツールチップを表示できます。
1. `Category` ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。
1. `None` はツールチップが非表示になります。

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    ToolTipType="ToolTipType.Category"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    toolTipType="Category" />
```

```html
<igc-category-chart
    id="chart"
    tool-tip-type="Category">
</igc-category-chart>
```

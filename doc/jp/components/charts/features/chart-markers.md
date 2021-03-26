---
title: $PlatformShort$ チャート マーカー | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート マーカー
_keywords: $PlatformShort$ Charts, Markers, Infragistics, $PlatformShort$ チャート, マーカー, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

# $PlatformShort$ チャート マーカー

$ProductName$ カテゴリのチャートには、マーカー、チャートのタイトルとサブタイトル、チャートの種類など、カスタマイズできる多くの領域があります。

# $PlatformShort$ チャート マーカーの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-options"
           alt="$PlatformShort$ 構成オプションの例"
           github-src="charts/category-chart/marker-options">
</code-view>

<div class="divider--half"></div>

## チャート マーカーの構成

マーカーは、カテゴリ チャートのプロット領域にデータ ポイントの値を表示する視覚要素です。値が主グリッド線と副グリッド線の間にある場合も指定したデータ ポイントの値をただちに識別できるようユーザーをサポートします。

チャート マーカーの外観は、次のコード例に示すように、カテゴリ チャートの `MarkerType`、`MarkerBrushes`、`MarkerOutlines` プロパティを介して管理されます。

```razor
 <CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    MarkerType="MarkerType.Diamond"
    MarkerBrushes="red"
    MarkerOutlines="yellow"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    markerType="Diamond"
    markerBrushes="red"
    markerOutlines="yellow">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    width="700px"
    height="500px"
    markerType="Diamond"
    markerBrushes="red"
    markerOutlines="yellow" />
```
```html
<igc-category-chart
    id="chart"
    width="700px"
    height="700px"
    marker-type="Diamond"
    marker-brushes="red"
    marker-outlines="yellow">
</igc-category-chart>
```


## API メンバー
- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerType`
- `XamCategoryChart`

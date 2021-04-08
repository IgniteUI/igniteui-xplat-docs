---
title: $PlatformShort$ チャートおよびグラフ | データ可視化ツール | 強調表示 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用すると、グラフの領域を強調表示できます。$ProductName$ 強調表示機能について説明します。
_keywords: $PlatformShort$ charts, category chart, Highlight Layers, Highlighting, $ProductName$, Infragistics, $PlatformShort$ チャート, カテゴリ チャート, 強調表示レイヤー, 強調表示, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---
# $PlatformShort$ ハイライト

$ProductName$ カテゴリ チャート コンポネントには、ハイライト機能があります。

## $PlatformShort$ ハイライトの例

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-highlighting" 
           alt="$PlatformShort$ ハイライトの例" 
           github-src="charts/category-chart/highlighting">
</code-view>

<div class="divider--half"></div>


## $ProductName$ レイヤーのハイライト

カテゴリ チャート コンポネントは、項目のホバー オーバー時に 3 種類のハイライト タイプを使用できます。

1. シリーズ ハイライトは、ポインターがデータ ポイント上にある場合にそのポイントをハイライトします。

1. 項目ハイライトは、バンド図形をその位置で描画またはマーカーをその位置で描画のいずれかでカテゴリ軸を使用するシリーズの項目をハイライトするシリーズ。

1. カテゴリ ハイライトはすべてのカテゴリ軸を対象にします。カーソル位置に最も近い軸領域を照らす図形を描画します。

```razor
<CategoryChart Height="500px" Width="700px"
    DataSource="@DataSource"
    IsSeriesHighlightingEnabled="true"
    IsCategoryHighlightingEnabled="true"
    IsItemHighlightingEnabled="true">
</CategoryChart>
```

```html
<igx-category-chart
    [dataSource]="data"
    isSeriesHighlightingEnabled="true"
    isCategoryHighlightingEnabled="true"
    isItemHighlightingEnabled="true">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    isSeriesHighlightingEnabled={true}
    isCategoryHighlightingEnabled={true}
    isItemHighlightingEnabled={true} />
```

```html
<igc-category-chart
    id="chart"
    width="800px"
    height="500px"
    is-series-highlighting-enabled="true"
    is-category-highlighting-enabled="true"
    is-item-highlighting-enabled="true" >
</igc-category-chart>
```

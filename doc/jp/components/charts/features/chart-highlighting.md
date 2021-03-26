---
title: $PlatformShort$ チャート強調表示 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート強調表示
_keywords: $PlatformShort$ Charts, Highlighting, Infragistics, $PlatformShort$ チャート, 強調表示, インフラジスティックス
mentionedTypes: ['XamCategoryChart']
_language: ja
---

# $PlatformShort$ チャート強調表示

すべての $PlatformShort$ チャートは、エンド ユーザーがプロット領域に描画されたデータ項目の上にマウス カーソルを置いたときに、線、列、マーカーなどのビジュアルの強調表示をサポートします。強調表示は、`XamCategoryChart`、`XamFinancialChart`、および `XamDataChart` コンポーネントによってサポートされており、強調表示機能を使用するための同じ API を備えています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-highlighting"
           alt="$PlatformShort$ チャート強調表示の例"
           github-src="charts/category-chart/category-chart-column-chart-with-highlighting">
</code-view>

<div class="divider--half"></div>


## 強調表示レイヤー

$ProductName$ `XamCategoryChart` は、データ項目にカーソルを合わせると 3 種類の強調表示を有効にできます。

1. シリーズ ハイライトは、ポインターがデータ ポイント上ある場合に、マーカーまたは列で表される単一のデータ ポイントをハイライトします。これは、`IsSeriesHighlightingEnabled` プロパティを true に設定することで有効になります。

2. 項目ハイライトは、その位置に縞模様の図形を描画したりマーカーを描画したりすることでシリーズの項目を強調表示します。これは、`IsItemHighlightingEnabled` プロパティを true に設定することで有効になります。

3. カテゴリ ハイライトはすべてのカテゴリ軸を対象にします。カーソル位置に最も近い軸領域を照らす図形を描画します。これは、`IsCategoryHighlightingEnabled` プロパティを true に設定することで有効になります。

```razor
<CategoryChart Height="500px" Width="700px" DataSource="@DataSource"
    IsSeriesHighlightingEnabled="true"
    IsCategoryHighlightingEnabled="false"
    IsItemHighlightingEnabled="false">
</CategoryChart>
```

```html
<igx-category-chart [dataSource]="data" width="800px" height="500px"
    isSeriesHighlightingEnabled="true"
    isCategoryHighlightingEnabled="false"
    isItemHighlightingEnabled="false">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart dataSource={this.state.data}
    isSeriesHighlightingEnabled={true}
    isCategoryHighlightingEnabled={false}
    isItemHighlightingEnabled={false} />
```

```html
<igc-category-chart id="chart" width="800px" height="500px"
    is-series-highlighting-enabled="true"
    is-category-highlighting-enabled="false"
    is-item-highlighting-enabled="false" >
</igc-category-chart>
```

## API メンバー
- `IsCategoryHighlightingEnabled`
- `IsItemHighlightingEnabled`
- `IsSeriesHighlightingEnabled`
- `XamCategoryChart`


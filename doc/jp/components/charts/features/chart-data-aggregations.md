---
title: {Platform} データ集計 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} データ集計
_keywords: {Platform} Charts, Markers, Infragistics, {Platform} チャート, マーカー, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} データ集計

{ProductName} `CategoryChart` コントロールのデータ集計機能を使用すると、チャート内のデータを `XAxis` の一意の値でグループ化し、それらのグループを並べ替えることができます。次に、`YAxis` の範囲に反映され、シリーズにカーソルを合わせるとツールチップに表示される集計を適用できます。 

# {Platform} データ集計の例

次の例は、`XAxis` の Country メンバーでグループ化し、Sales Sum に基づいて集計と並べ替えを適用する[縦棒チャート](../types/column-chart.md)を示しています。 

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-aggregations"
           alt="{Platform} データ集計の例"
           github-src="charts/category-chart/data-aggregations">
</code-view>

```html
<igx-category-chart
    [dataSource]="salesData"
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.salesData}
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc"/>
```
```html
<igc-category-chart
     id="chart"
     initial-groups="country"
     initial-summaries="Sum(sales) as Sales"
     group-sorts="Sales Desc">
</igc-category-chart>
```

## API メンバー

以下は上記のセクションで説明した API メンバーのリストです。

- `InitialSortDescriptions`
- `InitialSorts`
- `SortDescriptions`
- `InitialGroups`
- `InitialGroupDescriptions`
- `GroupDescriptions`
- `InitialSummaries`
- `InitialSummaryDescriptions`
- `SummaryDescriptions`
- `InitialGroupSortDescriptions`
- `GroupSorts`
- `GroupSortDescriptions`

> 注: `IncludedProperties` を使用する場合、チャート集計は機能しません | `ExcludedProperties`チャートのこれらのプロパティは非集計データ用です。データを集計しようとすると、これらのプロパティは使用できなくなります。うまくいかない理由は、描画のためにチャートに渡されたコレクションを集計により置き換えるためです。  include/exclude プロパティは、そのデータの in/out プロパティをフィルターするように設計されており、それらのプロパティは新しい集計されたコレクションには存在しません。


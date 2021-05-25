---
title: $Platform$ チャートおよびグラフ | データ可視化ツール | 注釈 | インフラジスティックス
_description: インフラジスティックスの $Platform$ チャート コントロールを使用すると、チャートに注釈を追加できます。$ProductName$ を使用してグラフと視覚化を改善します。
_keywords: $Platform$ charts, category chart, annotations, $ProductName$, Infragistics, $Platform$ チャート, カテゴリ チャート, 注釈, インフラジスティックス
mentionedTypes: ['CategoryChart']
_language: ja
---
# $Platform$ 注釈

このトピックでは、$Platform$ カテゴリ チャート コンポーネントの注釈やインタラクションについて説明します。

## $Platform$ 注釈の例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-annotations"
           alt="$Platform$ 注釈例"
           github-src="charts/category-chart/annotations">
</code-view>

<div class="divider--half"></div>

## 十字線レイヤー

カテゴリ チャートの十字線レイヤーは、各ターゲット シリーズの実際の値に一致する十字線を提供します。十字線タイプは、Horizontal、Vertical、Both があります。`CrosshairsSnapToData` プロパティを true に設定してデータに十字線のスナップできます。十字線がデータ ポイント間で補完されます。注釈を有効にして軸に沿って十字線の値を表示できます。

```razor
<CategoryChart Height="100%" Width="100%"
    DataSource="@DataSource"
    CrosshairsDisplayMode="CrosshairsDisplayMode.Horizontal"
    CrosshairsAnnotationEnabled="true"
    CrosshairsSnapToData="true"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData={true}
    crosshairsAnnotationEnabled={true} />
```

```html
<igc-category-chart
    id="chart"
    width="400px"
    height="400px"
    crosshairs-display-mode="Horizontal"
    crosshairs-snap-to-data="true"
    crosshairs-annotation-enabled="true">
</igc-category-chart>
```

## 最終値レイヤー
カテゴリ チャート コンポーネントの最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```razor
<CategoryChart Height="100%" Width="100%"
    DataSource="@DataSource"
    FinalValueAnnotationsVisible="true"
    YAxisLabelLocation=AxisLabelsLocation.OutsideRight/>
```

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    finalValueAnnotationsVisible={true} />
```
```html
<igc-category-chart
     id="chart"
     final-value-annotations-visible="true">
</igc-category-chart>
```


## コールアウト レイヤー
カテゴリ チャート コンポーネントのコールアウト レイヤーは、データで指定された X/Y 位置にテキスト コールアウトを表示します。

```razor
<CategoryChart Height="100%" Width="100%"
    DataSource="@DataSource"
    CalloutsVisible="true"
    CalloutsXMemberPath="index"
    CalloutsYMemberPath="yValue"
    CalloutsLabelMemberPath="title"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    calloutsVisible={true}
    calloutsDataSource={this.state.calloutData}
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title" />
```

```html
<igc-category-chart
     id="chart"
     width="800px"
     height="400px"
     callouts-visible="true">
</igc-category-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcCategoryChartComponent);

chart.dataSource = data;
chart.calloutsDataSource = categoryData;
chart.calloutsXMemberPath = "index";
chart.calloutsYMemberPath = "value";
chart.calloutsLabelMemberPath = "info";
```
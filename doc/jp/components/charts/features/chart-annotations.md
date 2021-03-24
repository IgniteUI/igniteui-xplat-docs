---
title: $PlatformShort$ チャート注釈 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート注釈
_keywords: $PlatformShort$ Charts, Annotations, Infragistics, $PlatformShort$ チャート, 注釈, インフラジスティックス
mentionedTypes: []
_language: ja
---

# $PlatformShort$ チャート注釈

このトピックでは、$ProductName$ カテゴリ チャート コンポーネントで使用できる注釈とオーバーレイの操作に関する概念情報を提供します。

## $PlatformShort$ 注釈の例

<code-view style="height: 600px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-annotations"
           alt="$PlatformShort$ 注釈の例"
           github-src="charts/category-chart/line-chart-with-annotations">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 十字線レイヤー

カテゴリ チャートの十字線レイヤーは、各ターゲット シリーズの実際の値に一致する十字線機能を提供します。十字線タイプは、Horizontal、Vertical、Both があります。`CrosshairsSnapToData` プロパティを true に設定してデータに十字線のスナップできます。十字線がデータ ポイント間で補完されます。注釈を有効にして軸に沿って十字線の値を表示できます。

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

## $PlatformShort$ 最終値レイヤー
カテゴリ チャート コンポーネントの最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイック ビューをサポートします。

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


## $PlatformShort$ コールアウト レイヤー
カテゴリ チャート コンポーネントのコールアウト レイヤーは、データで指定された X/Y 位置にテキスト コールアウトを表示します。

```razor
<CategoryChart Height="100%" Width="100%"
    DataSource="@DataSource"
    CalloutsVisible="true"
    CalloutsXMemberPath="index"
    CalloutsYMemberPath="value"
    CalloutsLabelMemberPath="info"/>
```

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info">
</igx-category-chart>
```

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    calloutsVisible={true}
    calloutsDataSource={this.state.calloutData}
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info" />
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
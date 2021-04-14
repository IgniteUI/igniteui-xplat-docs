---
title: $PlatformShort$ チャート注釈 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート注釈
_keywords: $PlatformShort$ Charts, Annotations, Infragistics, $PlatformShort$ チャート, 注釈, インフラジスティックス
mentionedTypes: ["CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
_language: ja
---

# $PlatformShort$ チャート注釈

$PlatformShort$ チャートのホバー操作と注釈は、シリーズ コレクションに追加されるシリーズであるホバー操作レイヤーを介して実装されます。これらのレイヤーはカーソルの位置に依存します。これらの注釈レイヤーはそれぞれ、個別に使用することも、他のレイヤーと組み合わせて強力なホバー操作を提供することもできる、異なるホバー操作を提供します。

## $PlatformShort$ 注釈の例

次の例は、$PlatformShort$ チャートで使用できる注釈レイヤーを示しています。チェックボックスをクリックして、各レイヤーのオンとオフを切り替えます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-annotations"
           alt="$PlatformShort$ 注釈の例"
           github-src="charts/category-chart/line-chart-with-annotations">
</code-view>

<div class="divider--half"></div>

## $PlatformShort$ 十字線レイヤー

`CrosshairLayer` は、対象にするために構成される各シリーズの実際値で、異なるセットの線を描画する各シリーズと交差する十字線として描画されます。

十字線のタイプは次のとおりです:
- Horizontal
- Vertical
- Both

チャートの十字線は、`CrosshairsSnapToData` プロパティを true に設定することでデータ ポイントにスナップするように構成することもできます。そうしないと、十字線がデータ ポイント間で補完されます。注釈を有効にして軸に沿って十字線の値を表示できます。

デフォルトではチャート コンポーネントのすべてのシリーズをターゲットにするため、特定のシリーズを 1 つだけ表示するように十字線レイヤーを構成できます。これには、`TargetSeries` プロパティを設定します。

デフォルトでは、十字線の色は交差するシリーズよりも軽い色になります。しかし、このデフォルト値は、十字線に使用される色を選択できるようにオーバーライドできます。これは、十字線レイヤーの `Brush` プロパティを設定することによって行われます。

次の例は、単一のシリーズをターゲットにして、タイプを垂直に設定し、ブラシの色をスタイリングすることによって、十字線レイヤーを構成する方法を示しています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-crosshair-layer-styling"
           alt="$PlatformShort$ 十字線レイヤーのスタイル設定"
           github-src="charts/data-chart/crosshair-layer-styling">
</code-view>

<div class="divider--half"></div>

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

カテゴリ チャート コンポーネントの `FinalValueLayer` は、シリーズに表示された最終値の軸に沿ったクイック ビューをサポートします。

複数の最終値レイヤーを異なる設定で使用したい場合は、この注釈を設定して特定のシリーズをターゲットにすることができます。これには `TargetSeries` プロパティを設定します。

次のプロパティを設定して、この注釈をカスタマイズすることもできます:

- `AxisAnnotationBackground`: このプロパティは注釈の背景色を選択するために使用されます。デフォルトはシリーズのブラシを使用します。
- `AxisAnnotationTextColor`: このプロパティは注釈のテキストの色のブラシを選択するために使用されます。
- `AxisAnnotationOutline`: このプロパティは注釈のアウトライン色を選択するために使用されます。

次の例は、上記のプロパティを設定して、最終的な値レイヤーの注釈のスタイルを設定する方法を示しています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-final-value-layer-styling"
           alt="$PlatformShort$ 最終値レイヤーのスタイル設定"
           github-src="charts/data-chart/final-value-layer-styling">
</code-view>

<div class="divider--half"></div>

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

`CalloutLayer` はチャート コントロール既存または新しいデータの注釈を表示します。注釈は、データ ソース内の指定されたデータ値の横に表示されます。

コールアウト注釈を使用して、メモやデータ ポイントに関する特定の詳細など、ユーザーに追加情報を表示します。

複数のコールアウト レイヤーを異なる設定で使用する場合は、コールアウトを設定して特定のシリーズをターゲットにできます。これには `TargetSeries` プロパティを設定します。

次のプロパティを設定して、この注釈をカスタマイズすることもできます:

- `CalloutLeaderBrush`: このプロパティは、レイヤーのコールアウトのリーダー線のブラシを選択するために使用されます。
- `CalloutOutline`: このプロパティは注釈のアウトライン色を選択するために使用されます。
- `CalloutBackground`: このプロパティは注釈の背景色を選択するために使用されます。デフォルトはシリーズのブラシを使用します。
- `CalloutTextColor`: このプロパティは注釈のテキストの色のブラシを選択するために使用されます。
- `CalloutStrokeThickness`: このプロパティは、コールアウト バッキングの厚さを選択するために使用されます。

次の例は、上記のプロパティを設定して、コールアウト レイヤーの注釈のスタイルを設定する方法を示しています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-callout-layer-styling"
           alt="$PlatformShort$ コールアウト レイヤーのスタイル設定"
           github-src="charts/data-chart/callout-layer-styling">
</code-view>

<div class="divider--half"></div>

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

## API メンバー
- `CrosshairsSnapToData`
- `CategoryChart`


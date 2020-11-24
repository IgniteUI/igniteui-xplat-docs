---
title: $PlatformShort$ ファイナンシャル チャート | 注釈 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ファイナンシャル チャート コントロールを使用して、十字線レイヤー、最終値レイヤー、コールアウト レイヤーなどの注釈をチャート軸に追加できます。$ProductName$ でチャートと可視化を向上させます。
_keywords: $PlatformShort$ charts, financial chart, stock chart, callout layer, final value, crosshair, $ProductName$, Infragistics, $PlatformShort$ チャート, ファイナンシャル チャート, 株価チャート, コールアウト レイヤー, 最終値, 十字線, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---
# $PlatformShort$ 注釈

このトピックでは、$PlatformShort$ Financial Chart コンポーネントの注釈について説明します。

## $PlatformShort$ 注釈例
<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ 注釈例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">stackblitz で表示
    </button>
<sample-button src="charts/financial-chart/annotations"></sample-button>

</div>
<div class="divider--half"></div>

## 十字線レイヤー

Crosshair Layer は、各ターゲット シリーズの実際の値に一致する十字線を提供します。Crosshair タイプは、Horizontal、Vertical、Both があります。`CrosshairsSnapToData` プロパティを true に設定してデータに十字線のスナップできます。十字線がデータ ポイント間で補完されます。  注釈を有効にして軸に沿って十字線の値を表示できます。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.state.data}
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData={true}
    crosshairsAnnotationEnabled={true} />
```

```html
<igc-financial-chart id="chart"
    width="850px"
    height="600px"
    crosshairs-display-mode="Horizontal"
    crosshairs-snap-to-data="true"
    crosshairs-annotation-enabled="true">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    CrosshairsSnapToData="true"
    CrosshairsDisplayMode="CrosshairsDisplayMode.Horizontal"
    CrosshairsAnnotationEnabled="true" />
```

## 最終値レイヤー

最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    finalValueAnnotationsVisible="true">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.state.data}
    finalValueAnnotationsVisible={true} />
```

```html
<igc-financial-chart id="chart"
    width="850px"
    height="600px"
    final-value-annotations-visible="true">
</igc-financial-chart>
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    FinalValueAnnotationsVisible="true" />
```

## コールアウト レイヤー

コールアウト レイヤーは、X/Y 位置にコールアウトを表示します。

> 注: X 軸モードを使用する際に `CalloutsXMemberPath` は数値インデックスをポイントする必要があります。あるいは、`CalloutsXMemberPath` を時間値にポイントしてください。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title"
    calloutsContentMemberPath="content">
</igx-financial-chart>
```

```tsx
 <IgrFinancialChart
    dataSource={this.state.data}
    calloutsVisible={true}
    calloutsDataSource={this.state.calloutData}
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title" />
```

```html
<igc-financial-chart
    width="850px"
    height="600px"
    callouts-visible="true"
    callouts-x-member-path="index"
    callouts-y-member-path="yValue"
    callouts-label-member-path="title"
    callouts-content-member-path="content">
</igc-financial-chart>
```

```ts
let chart = (document.getElementById("chart") as IgcFinancialChartComponent);
chart.dataSource = stocksData;
chart.calloutsDataSource = calloutData;
```

```razor
<FinancialChart Width="100%"
    Height="100%"
    DataSource="DataSource"
    CalloutsVisible="true"
    CalloutsXMemberPath="Index"
    CalloutsYMemberPath="Value"
    CalloutsLabelMemberPath="Info"
    CalloutsContentMemberPath="Info" />
```
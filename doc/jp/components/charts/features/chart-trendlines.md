---
title: $PlatformShort$ チャート トレンドライン | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート トレンドライン
_keywords: $PlatformShort$ Charts, Trendlines, Infragistics, $PlatformShort$ チャート, トレンドライン, インフラジスティックス
mentionedTypes: ["FinancialChart", "TrendLineType"]
_language: ja
---

# $PlatformShort$ チャート トレンドライン

$PlatformShort$ チャートでは、トレンドラインはトレンドの識別やデータ内のパターンの検索に役立ちます。トレンドラインは、常にチャートにバインドされたデータ ポイントの前に描画されます。積層シリーズ、シェイプ シリーズ、および範囲シリーズを除き、これらは `CategoryChart`、`FinancialChart`、および `XamDataChart` でサポートされています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines"
           alt="$PlatformShort$ トレンドラインの例"
           github-src="charts/financial-chart/trendlines">
</code-view>

<div class="divider--half"></div>

すべての $PlatformShort$ チャートには、デフォルトでトレンドラインがオンになっているわけではありません。それらを有効にするために、トレンドラインを表示する `TrendLineType` プロパティを設定できます。また、ブラシ、期間、太さなど、トレンドラインの複数の外観プロパティを変更できます。以下は、一連のデータ チャートで使用できるトレンドラインのリストです。

- `None`
- `CubicFit`
- `CumulativeAverage`
- `ExponentialAverage`
- `ExponentialFit`
- `LinearFit`
- `LogarithmicFit`
- `ModifiedAverage`
- `PowerLawFit`
- `QuadraticFit`
- `QuarticFit`
- `QuinticFit`
- `SimpleAverage`
- `WeightedAverage`

次のコード スニペットは、$PlatformShort$ データ チャートの系列にトレンドラインを追加する方法を示しています。

```razor
<FinancialChart Width="100%" Height="100%" DataSource="DataSource"
    TrendLineType="QuinticFit"
    TrendLineThickness=2
    TrendLinePeriod=10
    TrendLineBrushes="rgba(0, 101, 209, 1)"/>
```

```html
<igx-financial-chart width="100%" height="100%" dataSource="[DataSource]"
    trendLineType="QuinticFit"
    trendLineThickness="2"
    trendLinePeriod="10"
    trendLineBrushes="Blue">
</igx-financial-chart>
```

```tsx
<IgrFinancialChart Width="100%" Height="100%" DataSource="{this.DataSource}"
    TrendLineType="QuinticFit"
    TrendLineThickness={2}
    TrendLinePeriod={10}
    TrendLineBrushes="rgba(0, 101, 209, 1)"/>
```

```html
<igc-financial-chart  width="100%" height="100%" datasource="{this.DataSource}"
    trend-line-type="QuinticFit"
    trend-line-thickness="2"
    trend-line-period="10"
    trend-line-brushes="rgba(0, 101, 209, 1)">
</igc-financial-chart>
```

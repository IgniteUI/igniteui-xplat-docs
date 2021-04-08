---
title: $PlatformShort$ スパークライン | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ スパークライン チャート コントロールを使用して、グリッド セルやスタンドアロンなどのコンパクトなレイアウトで描画します。$ProductName$ スパークライン チャートの設定可能な要素について説明します。
_keywords: Sparkline, $ProductName$, Infragistics, WinLoss, Area, Column, スパークライン, インフラジスティックス, エリア, 列
mentionedTypes: ["XamSparkline", "SparklineDisplayType", "TrendLineType"]
_language: ja
---

# $PlatformShort$ スパークライン

$ProductName$ スパークライン コンポーネントは、軽量なチャート コントロールです。グリッド セル内などのコンパクトなレイアウト内でのレンダリングを目的としていますが、単独でレンダリングすることもできます。

スパークライン コントロールには、チャートの種類、マーカー、範囲、トレンドライン、不明な値のプロット、ツールチップなど、構成およびカスタマイズが可能ないくつかの視覚的要素とそれに対応する機能があります。

## $PlatformShort$ スパークラインの例

The following example shows all the different sparkline types available. The type is defined by setting the `DisplayType` property. If the `DisplayType` property is not specified, then by default, the `Line` type is displayed.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-display-types"
           alt="$PlatformShort$ スパークラインの例"
           github-src="charts/sparkline/display-types">
</code-view>

<div class="divider--half"></div>

このサンプルが気に入りましたか? 完全な $PlatformShort$ ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/$ProductSpinal$/download">無料でダウンロードできます。</a>

## スパークラインの推奨事項

### Is the Sparkline chart right for your project?

The primary benefit of the Sparkline control compared to other charting controls is that it can render in a limited space such as a grid cell with all its visual elements shown.  

The Sparkline component has the ability to mark the data points with elliptical icons to indicate the highest, lowest, first, last, and negative values. The markers can be customized with a desired shape, color, or image.

### Sparkline Use Cases

- You have a compact space to display a chart in.
- You want to show trends in a series of values, such as weekly revenue.

### Sparkline Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Sparkline

- You need to analyze the data in detail.
- You need to display every label of the data points. It only allows showing high and low values on the Y-Axis, and first and last values on the X-Axis.

### Sparkline Data Structure

- It requires one-dimensional data.
- The data set must contain at least two numeric fields.
- The text in the data source fields can be used to display the first and last label on the X-Axis.

## スパークラインのタイプ

$ProductName$ スパークライン コンポーネントは、それに応じて  `DisplayType` プロパティを設定することにより、以下のスパークライン タイプをサポートしています。

- `Line`:  Displays the line chart type of Sparkline with numeric data, connecting the data points with line segments. At least two data points must be supplied to visualize the data in Sparkline.
- `Area`: Displays the Area chart type of Sparkline with numeric data. This is like line type with additional steps of closing the area after each line is drawn. At least two data points must be supplied to visualize the data in Sparkline.
- `Column`: Displays the Column chart type of Sparkline with numeric data. Some may refer to it as vertical bars. This type can render a single data point, but it would require specifying the minimum value range property (minimum) in Sparkline so the supplied single data point can be visible, otherwise the value will be treated as the minimum value and will not be visible. 
- `WinLoss`: This type is similar in its visual appearance to Column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative value) of the data set. The idea is to indicate a win or loss scenario. For the Win/Loss chart to display properly, the data set must have both positive and negative values. If the WinLoss sparkline is bound to the same data as the other types such as the Line type, which can be bound to a collection of numeric values, then the sparkline component will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-display-types"  >
</code-view>

<div class="divider--half"></div>

## マーカー

$ProductName$ スパークライン コンポーネントを使用すると、マーカーをシリーズ上の円形のアイコンとして表示して、X/Y 座標に基づいて個々のデータポイントを示すことができます。マーカーは、表示タイプが `Line`、`Area`、および `Column` のスパークラインに設定できます。``WinLoss`` 型のスパークラインは、現在マーカーを設定できません。By default, markers are not displayed, but they can be enabled by setting the corresponding marker visibility property.

スパークライン内のマーカーは、以下の場所を任意に組み合わせて配置できます。

- `すべて`: スパークライン内のすべてのデータ ポイントにマーカーを表示します。
- `低値`: 最低値のデータ ポイントにマーカーを表示します。最小値に複数の点がある場合は、その値を持つ各点に表示されます。
- `高値`: 最低値のデータ ポイントにマーカーを表示します。最高値に複数のポイントがある場合は、その値を持つ各ポイントに表示されます。
- `始値`: スパークラインの最初のデータポイントにマーカーを表示します。
- `終値`: スパークラインの最後のデータ ポイントにマーカーを表示します。
- `負数`: スパークラインにプロットされた負のデータ点にマーカーを表示します。

上記のすべてのマーカーは、色、可視性、およびサイズの観点で関連マーカー タイプのプロパティを使用してカスタマイズできます。たとえば、上記の `Low` マーカーは、`LowMarkerBrush`、`LowMarkerVisibility`、`LowMarkerSize` の各プロパティを持ちます。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-markers"  >
</code-view>

<div class="divider--half"></div>

## 標準範囲

$ProductName$ スパークライン コンポーネントの通常の範囲機能は、データが視覚化されているときに定義済みの意味のある範囲を表す水平方向の縞模様です。標準範囲は、指定した色のアウトラインで網掛けエリアとして設定できます。

通常の範囲は、最大データ ポイントよりも広い場合もあれば、それを超える場合もあります。また、しきい値インジケータとして機能するように、スパークラインの `Line` 表示タイプと同じ幅にすることもできます。正常範囲の幅は、正常範囲を表示するために最低限必要な以下の 3 つのプロパティによって決まります。

- `NormalRangeVisibility`: 標準範囲が表示されるかどうか。
- `NormalRangeMaximum`: 範囲の下境界線。
- `NormalRangeMinimum`: 範囲の上境界線。

既定では、標準範囲は表示されません。有効にすると、標準範囲は薄い灰色の外観で表示されますが、`NormalRangeFill` プロパティを使用して構成することもできます。

DisplayNormalRangeInFront プロパティを設定することで、スパークライン コンポーネントのプロットされたシリーズの前または後ろに標準範囲を表示するかどうかを設定することもできます。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-normal-range"  >
</code-view>

<div class="divider--half"></div>

## トレンドライン

$ProductName$ スパークライン コンポーネントは、実際のスパークライン レイヤーの上に別のレイヤーとして表示される一連のトレンドラインをサポートしています。近似曲線を表示するには、`TrendLineType` プロパティを使用します。

近似曲線は、チャートがバインドされているデータの値を使用して、`TrendLineType` プロパティで指定されたアルゴリズムに従って計算されます。

近似曲線は一度に 1 つだけ表示でき、デフォルトでは近似曲線は表示されません。

以下のサンプルは、ドロップダウンを介して利用可能なすべてのトレンドラインを示しています:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-trendlines"  >
</code-view>

<div class="divider--half"></div>

## 不明な値の補間

$ProductName$ スパークライン コンポーネントは、不明な値を検出し、指定された補間アルゴリズムを介して不明な値のためのスペースを描画することができます。データに null 値が含まれていて、この機能を使用しない場合、つまり補間が指定されていない場合、不明な値はプロットされません。

未知の値をプロットするために、スパークライン コンポーネントの `UnknownValuePlotting` プロパティを設定することができます。The sample below shows the differences between the values of the `UnknownValuePlotting` property, allowing you to toggle it on or off using a checkbox:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-unknown-values"  >
</code-view>

<div class="divider--half"></div>


## データ グリッドのスパークライン

$ProductName$ スパークライン コンポーネントは、データ グリッドのテンプレート列またはテンプレートをサポートする他のコンポーネントに埋め込むことができます。以下のコード例ではその方法を示します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-grid"  >
</code-view>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [エリア チャート](area-chart.md)
- [縦棒チャート](column-chart.md)
- [折れ線チャート](line-chart.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `DisplayNormalRangeInFront`
- `DisplayType`
- `LowMarkerBrush`
- `LowMarkerSize`
- `LowMarkerVisibility`
- `NormalRangeFill`
- `UnknownValuePlotting`
- `XamSparkline`

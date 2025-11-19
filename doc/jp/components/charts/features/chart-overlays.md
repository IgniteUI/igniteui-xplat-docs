---
title: {Platform} チャート オーバーレイ | データ可視化ツール | 値オーバーレイ | インフラジスティックス
_description: {ProductName} チャート コントロールの値オーバーレイ機能を使用して、単一の数値に水平線または垂直線を配置します。{ProductName} グラフ タイプについて説明します。
_keywords: {Platform} charts, data chart, value overlay, {ProductName}, Infragistics, {Platform} チャート, データ チャート, 値オーバーレイ, インフラジスティックス
_license: commercial
mentionedTypes: ["XamDataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャートのオーバーレイ

{Platform} `XamDataChart` を使用すると、`ValueOverlay` を使用して定義した単一の数値で水平線または垂直線を配置できます。特定のシリーズの平均値や中央値などのデータを視覚化するのに役立ちます。

## {Platform} 値オーバーレイの例

次の例は、いくつかの水平値オーバーレイがプロットされた[縦棒チャート](../types/column-chart.md)を示しています。

`sample="/charts/data-chart/series-value-overlay", height="600", alt="{Platform} 値オーバーレイの例"`


<div class="divider--half"></div>

## {Platform} 値オーバーレイのプロパティ

データバインディングに `DataSource` を使用する他のシリーズ タイプとは異なり、値オーバーレイは `ValueMemberPath` プロパティを使用して単一の数値をバインドします。さらに、値オーバーレイでは、使用する単一の `Axis` を定義する必要があります。X 軸を使用する場合、値のオーバーレイは垂直線になり、Y 軸を使用する場合は、水平線になります。

数値の X 軸または Y 軸を使用する場合、`ValueMemberPath` プロパティは、値のオーバーレイを描画する軸上の実際の数値を反映する必要があります。カテゴリ X または Y 軸を使用する場合、`ValueMemberPath` は、値オーバーレイを表示するカテゴリのインデックスを反映する必要があります。

数値オーバーレイを角度角軸で使用すると、チャートの中心からの線として表示され、半径半径軸を使用すると、円として表示されます。

`ValueOverlay` 外観プロパティは、`Series` から継承されているため、例えば `Brush` と `Thickness` を使用でき、他のタイプのシリーズと同じように機能します。

`ValueOverlay` に軸注釈を表示して、所有する軸にオーバーレイの値を表示することもできます。これを示すために、`IsAxisAnnotationEnabled` プロパティを true に設定できます。

## {Platform} 値レイヤー

{Platform} チャート コンポーネントは、値の線を使用して、最小値、最大値、平均値などのデータのさまざまな焦点を示す機能も公開します。

`CategoryChart` および `FinancialChart` コンポーネントに `ValueLayer` を適用するには、チャート上で `ValueLines` プロパティを設定します。このプロパティは、`ValueLayerValueMode` 列挙体のコレクションを受け取ります。複数の `ValueLayerValueMode` 列挙をチャートの `ValueLines` コレクションに追加することで、同じチャート内で複数の値レイヤーを組み合わせたりできます。

`XamDataChart` では、これは、チャートの `Series` コレクションに `ValueLayer` を追加し、次に `ValueMode` プロパティを `ValueLayerValueMode` 列挙の 1 つに設定することによって行われます。これらの各列挙とその意味を以下に示します。

- `Auto`: `ValueLayerValueMode` 列挙体のデフォルト値モード。
- `Average`: 複数の値の線を適用して、チャートにプロットされた各系列の平均値を呼び出します。
- `GlobalAverage`: 単一の値線を適用して、チャート内のすべての系列値の平均を呼び出します。
- `GlobalMaximum`: 単一の値線を適用して、チャート内のすべての系列値の絶対最大値を呼び出します。
- `GlobalMinimum`: 単一の値線を適用して、チャート内のすべての系列値の絶対最小値を呼び出します。
- `Maximum`: チャートにプロットされた各系列の最大値を示すために、複数の値線を適用する可能性があります。
- `Minimum`: チャートにプロットされた各系列の最小値を示すために、複数の値線を適用する可能性があります。

`ValueLayer` 要素を使用するときに特定のシリーズが考慮されないようにする場合は、レイヤーに `TargetSeries` プロパティを設定できます。これにより、レイヤーは定義したシリーズを強制的にターゲットにするようになります。単一の `XamDataChart` 内に必要な数の `ValueLayer` 要素を含めることができます。

次のサンプルは、`CategoryChart` 内のさまざまな `ValueLines` の使用法を示しています。

`sample="/charts/category-chart/value-lines", height="600", alt="{Platform} 値線の例"`

<div class="divider--half"></div>

## {Platform} ファイナンシャル オーバーレイ

{Platform} [株価チャート](../types/stock-chart.md)に組み込みのファイナンシャル オーバーレイとインジケーターをプロットすることもできます。

## チャート オーバーレイ テキスト <label>PREVIEW</label>

{Platform} `ValueOverlay`、`ValueLayer`、およびすべてのデータ注釈レイヤーは、XamDataChart コンポーネントのプロット領域内にカスタム オーバーレイ テキストを描画できます。このオーバーレイ テキストを使用すると、レイヤーとの関係において、x 軸上の重要なイベント (例: 企業の四半期決算) または y 軸上の重要な値に注釈を付けることができます。

たとえば、`DataAnnotationSliceLayer`、`ValueOverlay`、`ValueLayer` を使用してオーバーレイ テキストを表示できます。

`sample="/charts/data-chart/data-annotation-multiple-with-overlay-text", height="600", alt="{Platform} 複数のオーバーレイ テキスト"`

### オーバーレイ テキストのスタイル設定

このコード例は、`DataAnnotationSliceLayer`、`ValueOverlay`、および `ValueLayer` 上のオーバーレイ テキストのスタイルを設定およびカスタマイズする方法を示しています。

<div class="divider--half"></div>

```razor
public Series StylingOverlayText()
{
    var annoLayer = new IgbDataAnnotationSliceLayer();

    // styling optional overlay text 
    annoLayer.OverlayTextColor = Brushes.White;
    annoLayer.OverlayTextBackground = Brushes.Green;
    annoLayer.OverlayTextBorderColor = Brushes.Black;
    annoLayer.OverlayTextBorderThickness = 1;
    annoLayer.OverlayTextBorderRadius = 4;
    annoLayer.OverlayTextHorizontalMargin = 5;
    annoLayer.OverlayTextHorizontalPadding = 2;
    annoLayer.OverlayTextVerticalMargin = 5;
    annoLayer.OverlayTextVerticalPadding = 2;

    return annoLayer;
}
```

```html
<igc-data-annotation-slice-layer
    name="AnnoLayer"
    id="AnnoLayer"
    brush="green"
    annotation-text-color="white"
    annotation-label-member-path="label"
    annotation-value-member-path="value"
    overlay-text-color="red"
    overlay-text-background="green"
    overlay-text-border-color="black"
    overlay-text-member-path="label"
    overlay-text-vertical-margin="20"
    overlay-text-horizontal-margin="0"
    overlay-text-location="OutsideBottomCenter"
    overlay-text="OverlayText on DataAnnotationSliceLayer"
    thickness="2">
    </igc-data-annotation-slice-layer>
```

## その他のリソース

関連するチャート タイプの詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [縦棒チ株価チャートャート](../types/area-chart.md)
- [折れ線チャート](../types/line-chart.md)
- [株価チャート](../types/stock-chart.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `XamDataChart`
- `ItemsSource`
- `ValueOverlay`
- `Axis`
- `Brush`
- `IsAxisAnnotationsEnabled`
- `Series`
- `Thickness`
- `ValueLayer`
- `ValueLayerValueMode`
- `ValueLines`
- `OverlayText`
- `TargetAxis`
- `OverlayTextMemberPath`
- `OverlayTextColor`
- `OverlayTextBackground`
- `OverlayTextBorderColor`
- `OverlayTextLocation`

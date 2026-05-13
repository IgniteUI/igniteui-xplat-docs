---
title: {Platform} チャート マーカー | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} チャート マーカー
_keywords: {Platform} Charts, Markers, Marker Size, Infragistics, {Platform} チャート, マーカー, マーカー サイズ, インフラジスティックス
_license: commercial
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType", "MarkerSeries", "ScatterLineSeries", "ScatterSplineSeries", "ScatterSeries", "LineSeries", "SplineSeries"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート マーカー

{ProductName} マーカーは、カテゴリ チャートのプロット領域にデータ ポイントの値を表示する視覚要素です。値が主グリッド線と副グリッド線の間にある場合も指定したデータ ポイントの値をただちに識別できるようユーザーをサポートします。

## {Platform} チャート マーカーの例

次の例では、[折れチャート](../types/line-chart.md)は、2009 年から 2019 年までのヨーロッパ、中国、および米国の国々の再生可能エネルギーの発電量を比較しています。マーカーが `MarkerType` プロパティを `Circle` 列挙値に設定して有効になっています。

マーカーのカラーは、以下のサンプルの `MarkerBrushes`プロパティと `MarkerOutlines` プロパティを設定することによっても管理されます。このサンプルでは、ドロップダウンを使用してマーカーと `CategoryChart.ChartType` を構成できます。

`sample="/charts/category-chart/marker-options", height="500", alt="{Platform} 構成オプションの例"`



<div class="divider--half"></div>

## {Platform} チャート マーカー サイズ

`MarkerSize` プロパティをマーカーをサポートするシリーズに設定することで、データ ポイント マーカーのピクセル寸法を正確に制御できます。これにより、マーカー テンプレートやスタイルに関係なく、マーカーが画面上に表示される大きさを正確に制御できます。

デフォルトでは、マーカーのサイズはシリーズのマーカー テンプレートによって決まります。`MarkerSize` に特定の数値を設定すると、そのシリーズのすべてのマーカーがその正確なピクセルの幅と高さでレンダリングされます。`MarkerSize` を `NaN` に戻すと、デフォルトのテンプレート駆動のサイズ設定が復元されます。

`MarkerSize` プロパティは、`MarkerSeries` から派生するすべてのシリーズ タイプ (`LineSeries`、`SplineSeries`、`AreaSeries`、`ColumnSeries`、`ScatterSeries`、`ScatterLineSeries`、`ScatterSplineSeries`、極座標/放射状シリーズ タイプなど) で使用できます。

次のコード例は、`XamDataChart` コントロールの `ScatterLineSeries` で `MarkerSize` を 30 ピクセルに設定する方法を示しています。

```razor
<IgbDataChart>
    <IgbScatterLineSeries
        MarkerSize="30"
        MarkerType="Circle"
        XMemberPath="X"
        YMemberPath="Y"
        XAxisName="xAxis"
        YAxisName="yAxis" />
</IgbDataChart>
```

```tsx
<IgrDataChart>
    <IgrScatterLineSeries
        markerSize={30}
        markerType="Circle"
        xMemberPath="X"
        yMemberPath="Y"
        xAxisName="xAxis"
        yAxisName="yAxis" />
</IgrDataChart>
```

```html
<igc-data-chart>
    <igc-scatter-line-series
        marker-size="30"
        marker-type="Circle"
        x-member-path="X"
        y-member-path="Y"
        x-axis-name="xAxis"
        y-axis-name="yAxis">
    </igc-scatter-line-series>
</igc-data-chart>
```

マーカーをデフォルトのテンプレート駆動サイズにリセットするには、`MarkerSize` を `NaN` に設定します (またはマークアップで属性を削除します)。

```razor
<IgbLineSeries MarkerSize="NaN" MarkerType="Circle" ... />
```

```tsx
<IgrLineSeries markerSize={NaN} markerType="Circle" ... />
```

> [!NOTE]
> `BubbleSeries` の場合、`MarkerSize` プロパティはバブルの半径をオーバーライドしません。バブルの半径は、半径データ列と `RadiusScale` によって制御されます。バブルのサイズは、データとスケールの構成によって完全に決まります。

<div class="divider--half"></div>

## {Platform} チャート マーカー テンプレート

以下の例に示すように、マーカー プロパティに加えて、`XamCategoryChart` コントロールで描画されたシリーズの `MarkerTemplate` プロパティに関数を設定することで、独自のマーカーを実装できます。

`sample="/charts/category-chart/marker-templates", height="600", alt="{Platform} チャート マーカーのテンプレート"`



<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャートのハイライト表示](chart-highlighting.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `MarkerBrushes`
- `MarkerOutlines`
- `MarkerSize`
- `MarkerType`
- `UseLightweightMarkers`
- `CategoryChart`
- `XamDataChart`

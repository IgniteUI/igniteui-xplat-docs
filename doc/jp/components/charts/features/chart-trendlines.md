---
title: {Platform} チャート トレンドライン | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} チャート トレンドライン
_keywords: {Platform} Charts, Trendlines, Infragistics, {Platform} チャート, トレンドライン, インフラジスティックス
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート トレンドライン

{ProductName} チャートでは、トレンドラインはトレンドの識別やデータ内のパターンの検索に役立ちます。トレンドラインは、常にチャートにバインドされたデータ ポイントの前に描画されます。積層シリーズ、シェイプ シリーズ、および範囲シリーズを除き、これらは `CategoryChart`、`FinancialChart`、および `XamDataChart` (積層型シリーズ、シェイプ シリーズ、範囲シリーズを除く) でサポートされています。

トレンドラインはデフォルトでオフになっていますが、`TrendLineType` プロパティを設定することで有効にできます。また、ブラシ、期間、太さなど、トレンドラインの複数の外観プロパティを変更できます。

トレンドラインを有効にすると、ダッシュ配列を適用することもできます。これを行うには、`TrendLineDashArray` プロパティを数値の配列に設定します。数値配列は、トレンドラインの破線の長さを表します。

# {Platform} チャート トレンドラインの例

次のサンプルは、**QuinticFit** トレンドラインが最初に適用された、2013 年から 2017 年までの Microsoft の株価トレンドを示す `FinancialChart` を示しています。適用されるトレンドラインのタイプを変更できるドロップダウンがあり、可能なすべてのトレンドライン タイプがそのドロップダウン内に一覧表示されます。

`sample="/charts/financial-chart/trendlines", height="500", alt="{Platform} トレンドラインの例"`


<div class="divider--half"></div>

# {Platform} チャート トレンドラインのダッシュ配列の例

次のサンプルは、`TrendLineDashArray` プロパティを介して適用された **QuarticFit** 破線トレンドラインを持つ `FinancialPriceSeries` を示す `XamDataChart` を示しています。

`sample="/charts/data-chart/dash-array-trendline", height="500", alt="{Platform} トレンドラインの例"`


<div class="divider--half"></div>

# {Platform} チャートト レンドライン レイヤー

`TrendLineLayer` は、ターゲット シリーズに対して単一のトレンドライン タイプを表示するように設計されたシリーズ タイプです。これと既存のシリーズ タイプの既存のトレンド ライン機能との違いは、`TrendLineLayer` はシリーズ タイプであるため、チャートの `Series` コレクションに複数のトレンド ラインを追加して、同じシリーズに複数のトレンド ラインを添付できることです。また、これまでできなかったトレンドラインを凡例に表示する ことも可能です。

### トレンドライン レイヤーの使用

`TrendLineLayer` が正しく動作するには、`TargetSeries` と `TrendLineType` を指定する必要があります。利用可能なさまざまなトレンドラインのタイプは、シリーズで利用可能なトレンドラインと同じです。

凡例に `TrendLineLayer` を表示する場合は、`UseLegend` プロパティを `true` に設定します。

### トレンドライン レイヤーのスタイル設定

デフォルトでは、`TrendLineLayer` は `TargetSeries` と同じ色の破線で描画されます。これは、`TrendLineLayer` のさまざまなスタイル設定プロパティを使用して構成できます。

描画されるトレンドラインの色を変更するには、`Brush` プロパティを設定します。あるいは、`UseIndex` プロパティを `true` に設定することもできます。これにより、`TrendLineLayer` がチャートの `Series` コレクションに配置されているインデックスに基づいて、チャートの `Brushes` パレットからブラシが取得されます。

`TrendLineLayer` の表示方法は、`AppearanceMode` プロパティと `ShiftAmount` プロパティを使用して変更することもできます。`ShiftAmount` は、-1.0 から 1.0 の範囲の値を受け取り、「Shift」 で終わるオプションに適用する 「シフト」 の量を決定します。

`AppearanceMode` プロパティのオプションは次のとおりです。

- `Auto`: デフォルトでは DashPattern 列挙体になります。
- `BrightnessShift`: トレンドラインは `TargetSeries` ブラシを取得し、指定された `ShiftAmount` に基づいて明るさを変更します。
- `DashPattern`: トレンドラインは破線として表示されます。ダッシュの頻度は、`TrendLineLayer` の `DashArray` プロパティを使用して変更できます。
- `OpacityShift`: トレンドラインは `TargetSeries` ブラシを取得し、指定された `ShiftAmount` に基づいて不透明度を変更します。
- `SaturationShift`: トレンドラインは `TargetSeries` ブラシを取得し、指定された `ShiftAmount` に基づいてその彩度を変更します。

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャートのハイライト表示](chart-highlighting.md)

## API リファレンス

`CategoryChart` コンポーネントと `FinancialChart` コンポーネントは、次の API プロパティを共有します:

- `DomainChart.TrendLineBrushes`
- `DomainChart.TrendLinePeriod`
- `DomainChart.TrendLineThickness`
- `DomainChart.TrendLineType`

`XamDataChart` コンポーネントでは、シリーズのほとんどのタイプに次の API プロパティがあります:

- `ScatterBase.TrendLineBrush`
- `ScatterBase.TrendLineDashArray`
- `ScatterBase.TrendLinePeriod`
- `ScatterBase.TrendLineThickness`
- `ScatterBase.TrendLineType`

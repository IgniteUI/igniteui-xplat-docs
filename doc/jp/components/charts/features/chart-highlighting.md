---
title: {Platform} チャートのハイライト表示 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} チャートのハイライト表示
_keywords: {Platform} Charts, Highlighting, Infragistics, {Platform} チャート, ハイライト表示, インフラジスティックス
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

## {Platform} チャートのハイライト表示の例

以下の例は、{Platform} チャートで使用できるさまざまなハイライト表示オプションを示しています。

`sample="/charts/category-chart/annotations-highlighting", height="500", alt="{Platform} チャートのハイライト表示の例"`

<div class="divider--half"></div>

# {Platform} チャートのハイライト表示モードと動作

すべての {Platform} チャートは、さまざまなハイライト表示オプションをサポートしています。`HighlightingMode` は、プロット領域に描画されたシリーズ/データ項目にマウスを合わせたときに明るくまたはフェードするように設定できます。`HighlightingBehavior` は、ハイライト表示の効果をトリガーするために、直接または最も近いデータ項目に設定できます。ハイライト表示のモードと動作は、`CategoryChart`、`FinancialChart`、および `XamDataChart` コントロールでサポートされており、ハイライト表示機能を使用するための同じ API を備えています。

以下の例は、`HighlightingMode` {Platform} チャートを示しています。

`sample="/charts/category-chart/highlighting-mode", height="500", alt="{Platform} ハイライト表示モードの例"`

以下の例は、`HighlightingBehavior` {Platform} チャートを示しています。

`sample="/charts/category-chart/highlighting-behavior", height="500", alt="{Platform} ハイライト表示モードの例"`

# {Platform} チャート凡例のハイライト表示

すべての {Platform} チャートは、凡例のハイライト表示をサポートしています。`LegendHighlightingMode` を有効にすると、マウスが凡例マーカー項目にカーソルを合わせると、描画されたシリーズがプロット領域でハイライト表示されます。凡例のハイライト表示は、`CategoryChart`、`FinancialChart`、および `XamDataChart` コントロールでサポートされており、ハイライト表示機能を使用するための同じ API を備えています。

以下の例は、凡例シリーズハイライト表示の {Platform} チャートを示しています。

`sample="/charts/category-chart/legend-highlighting", height="500", alt="{Platform} ハイライト表示モードの例"`

## ハイライト表示レイヤー

{ProductName} `CategoryChart` は、データ項目にカーソルを合わせると 3 種類のハイライト表示を有効にできます。

1. シリーズ ハイライトは、ポインターがデータ ポイント上ある場合に、マーカーまたは列で表される単一のデータ ポイントをハイライトします。これは、`IsSeriesHighlightingEnabled` プロパティを true に設定することで有効になります。

2. 項目ハイライトは、その位置に縞模様の図形を描画したりマーカーを描画したりすることでシリーズの項目をハイライト表示します。これは、`IsItemHighlightingEnabled` プロパティを true に設定することで有効になります。

3. カテゴリ ハイライトはすべてのカテゴリ軸を対象にします。カーソル位置に最も近い軸領域を照らす図形を描画します。これは、`IsCategoryHighlightingEnabled` プロパティを true に設定することで有効になります。

以下の例は、{Platform} チャートで使用できるさまざまなハイライト表示レイヤーを示しています。

`sample="/charts/category-chart/column-chart-with-highlighting", height="500", alt="{Platform} ハイライト表示の例"`


## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [チャート アニメーション](chart-animations.md)
- [チャート注釈](chart-annotations.md)
- [チャート ツールチップ](chart-tooltips.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

- `HighlightingMode`
- `HighlightingBehavior`
- `LegendHighlightingBehavior`
- `IsCategoryHighlightingEnabled`
- `IsItemHighlightingEnabled`
- `IsSeriesHighlightingEnabled`
- `CategoryChart`
- `XamDataChart`
- `FinancialChart`


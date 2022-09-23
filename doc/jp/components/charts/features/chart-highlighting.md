---
title: {Platform} チャート強調表示 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} チャート強調表示
_keywords: {Platform} Charts, Highlighting, Infragistics, {Platform} チャート, 強調表示, インフラジスティックス
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャート強調表示

すべての {Platform} チャートは、エンド ユーザーがプロット領域に描画されたデータ項目の上にマウス カーソルを置いたときに、線、列、マーカーなどのビジュアルの強調表示をサポートします。強調表示は、`CategoryChart`、`FinancialChart`、および `XamDataChart` コントロールによってサポートされており、強調表示機能を使用するための同じ API を備えています。

## {Platform} チャート強調表示の例

以下の例は、{Platform} チャートで使用できるさまざまな強調表示オプションを示しています。チェックボックスをクリックして強調表示タイプを有効にします。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-highlighting"
           alt="{Platform} チャート強調表示の例"
           github-src="charts/category-chart/column-chart-with-highlighting">
</code-view>

<div class="divider--half"></div>

# {Platform} チャートの強調表示モードと動作

すべての {Platform} チャートは、さまざまな強調表示オプションをサポートしています。`HighlightingMode` は、プロット領域に描画されたシリーズ/データ項目にマウスを合わせたときに明るくまたはフェードするように設定できます。`HighlightingBehavior` は、強調表示の効果をトリガーするために、直接または最も近いデータ項目に設定できます。強調表示のモードと動作は、`CategoryChart`、`FinancialChart`、および `XamDataChart` コントロールでサポートされており、強調表示機能を使用するための同じ API を備えています。

# {Platform} チャート凡例の強調表示

すべての {Platform} チャートは、凡例の強調表示をサポートしています。`LegendHighlightingMode` を有効にすると、マウスが凡例マーカー項目にカーソルを合わせると、描画されたシリーズがプロット領域で強調表示されます。凡例の強調表示は、`CategoryChart`、`FinancialChart`、および `XamDataChart` コントロールでサポートされており、強調表示機能を使用するための同じ API を備えています。

## 強調表示レイヤー

{ProductName} `CategoryChart` は、データ項目にカーソルを合わせると 3 種類の強調表示を有効にできます。

1. シリーズ ハイライトは、ポインターがデータ ポイント上ある場合に、マーカーまたは列で表される単一のデータ ポイントをハイライトします。これは、`IsSeriesHighlightingEnabled` プロパティを true に設定することで有効になります。

2. 項目ハイライトは、その位置に縞模様の図形を描画したりマーカーを描画したりすることでシリーズの項目を強調表示します。これは、`IsItemHighlightingEnabled` プロパティを true に設定することで有効になります。

3. カテゴリ ハイライトはすべてのカテゴリ軸を対象にします。カーソル位置に最も近い軸領域を照らす図形を描画します。これは、`IsCategoryHighlightingEnabled` プロパティを true に設定することで有効になります。

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

- [チャート アニメーション](chart-animations.md)
- [チャート注釈](chart-annotations.md)
- [チャート ツールチップ](chart-tooltips.md)

## API メンバー

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


---
title: $Platform$ チャート ツールチップ | データ可視化 | インフラジスティックス
_description: インフラジスティックスの $Platform$ チャート ツールチップ
_keywords: $Platform$ Charts, Tooltips, Infragistics, $Platform$ チャート, ツールチップ, インフラジスティックス
mentionedTypes: ["CategoryChart", "ToolTipType"]
_language: ja
---

# $Platform$ チャート ツールチップ

$Platform$ チャートでは、ツールチップはバインドされたデータに関する詳細を提供し、エンドユーザーがデータ ポイントにカーソルを合わせるとポップアップで表示されます。ツールチップは、`CategoryChart`、`FinancialChart`、および `XamDataChart` コンポーネントでサポートされています。

## $Platform$ チャート ツールチップのタイプ

次の例は、開始時に `ToolTipType` プロパティを "Default" に設定することでツールチップが有効にした[縦棒チャート](../types/column-chart.md)を示しています。このプロパティはサンプルで構成可能であり、次のいずれかのオプションに設定できます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="$Platform$ ツールチップ タイプの例"
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

<div class="divider--half"></div>

`ToolTipType` プロパティは構成可能であり、次のいずれかのオプションに設定できます。

プロパティの値     | 説明
-------------------|----------------
`Default` ツールチップ | ツールチップは、ポインタがその上に位置されると、単一の項目のツールチップを表示します。
`Item` ツールチップ | ツールチップは、ポインタが位置されているカテゴリの各データ項目のツールチップを表示します。
`Category` ツールチップ | ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。

<div class="divider--half"></div>

## $PlatformShort$ チャート ツールチップ テンプレート

組み込みタイプのツールチップがいずれも要件に一致しない場合は、独自のツールチップを作成して、シリーズ タイトル、データ値、および軸値を表示およびスタイル設定できます。次のセクションでは、さまざまなタイプの $Platform$ チャートでこれを行う方法を示します。

## カテゴリ チャートのカスタム ツールチップ

この例は、$Platform$ `CategoryChart` コントロールですべてのシリーズのカスタム ツールチップを作成する方法を示しています。$Platform$ `FinancialChart` コントロールのカスタム ツールチップにも同じロジックを適用できることに注意してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template"
           alt="$Platform$ ツールチップ テンプレート"
           github-src="charts/category-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>


## データ チャートのカスタム ツールチップ

この例は、$Platform$ データ チャート コントロールで各シリーズのカスタム ツールチップを作成する方法を示しています。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-tooltip-template"
           alt="$Platform$ ツールチップ テンプレート"
           github-src="charts/data-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

- [チャート注釈](chart-annotations.md)
- [チャート マーカー](chart-markers.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

- `ToolTipType`
- `CategoryChart`
- `XamDataChart`

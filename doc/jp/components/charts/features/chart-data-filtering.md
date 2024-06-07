---
title: {Platform} チャートのデータ フィルタリング | データ可視化 | インフラジスティックス
_description: Infragistics の {Platform} チャートのデータ フィルタリング
_keywords: {Platform} Charts, Filtering, Infragistics, {Platform} チャート, フィルタリング, インフラジスティックス
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャートのデータ フィルタリング

データ フィルタリングを使用すると、チャートにバインド表示されたデータ ソースを手動で変更することなく、大規模なデータをクエリし、フィルター式を使用してデータ エントリの小さなサブセットを分析およびプロットすることができます。

クエリ文字列を形成する有効な式とキーワードの完全なリストは、以下で見つけられます:

[フィルター式 (英語)](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris)

> 注: 不適切なフィルターを適用すると、空のチャートが表示されます。

## {Platform} チャート データ フィルターの例

次の例は、数十年間の年間出生率の[縦棒チャート](../types/column-chart.md)を示しています。ドロップダウンで年代を選択すると `InitialFilter` プロパティによって式が挿入され、チャートのビジュアルが更新されます。

`sample="/charts/category-chart/data-filter", height="500", alt="{Platform} チャート データ フィルターの例"`

<div class="divider--half"></div>

`InitialFilter` プロパティは、適切にフィルター処理するために次の構文を必要とする文字列です。値には、フィルターするレコードに関連付したフィルター式の定義、列と値の両方を含む括弧のセットが必要です。 

例: 文字 B で始まる国をすべて表示する:

"(startswith(Country, 'B'))"

例: 複数の式を連結する:

"(startswith(Country, 'B') and endswith(Country, 'L') and contains(Product, 'Royal Oak') and contains(Date, '3/1/20'))"


## その他のリソース

関連するチャート機能の詳細については、次のトピックを参照してください。

- [チャートの注釈](chart-annotations.md)
- [チャートのハイライト表示](chart-highlighting.md)
- [チャートのツールチップ](chart-tooltips.md)

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

- `CategoryChart`
- `IsTransitionInEnabled`
- `TransitionInDuration`
- `TransitionInMode`
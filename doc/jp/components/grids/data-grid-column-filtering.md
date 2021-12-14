---
title: $Platform$ データ グリッド | フィルタリング | インフラジスティックス
_description: インフラジスティックスの $ProductName$ グリッド コンポーネントを使用して表現的なソート条件を実行し、データを簡単に返します。詳細については、$ProductName$ テーブルのサンプルを参照してください。
_keywords: $Platform$ Table, Data Grid, column, filtering, filter expressions, filter operands, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, 列, フィルタリング, フィルター式, フィルター オペランド, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $Platform$ グリッド フィルターの概要

$ProductName$ Data Table / Data Grid には、フィルター行と API の両方を使用した列フィルタリングが含まれており、フィルター処理される列のデータ型に基づいてソート条件を実行できます。

## $Platform$ グリッド フィルターの例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-filtering"
           alt="$Platform$ グリッド フィルターの例"
           github-src="grids/data-grid/column-filtering">
</code-view>

<div class="divider--half"></div>

上記のように、`FilterUIType` プロパティを FilterRow に設定すると、ユーザー インターフェイスでレコードをフィルタリングできるようになり、ユーザーはレコードをフィルタリングするためのフィルター基準を指定できます。指定されたフィルター基準に一致しないレコードは非表示になります。

フィールドにカーソルを合わせて垂直の省略記号をクリックすると、列オプション UI にもフィルタリングが表示されます。これは、`FilterUIType` を ColumnOptions に設定するときに実現されます。以下のサンプルを参照してください。

## フィルター式

以下の例では、データ グリッドの FilterExpressions コレクションが更新され、カスタムの `FilterExpression` が組み込まれています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-filter-expressions"
           alt="$Platform$ グリッド フィルター式の例"
           github-src="grids/data-grid/column-filter-expressions">
</code-view>

<div class="divider--half"></div>

<!-- Blazor -->
## フィルター演算子

列には、filter-row オペランド ドロップダウンに表示されるカスタムの  `FilterOperand` を指定できます。重要な要件は、オペランドに `DisplayName` が指定されていることを確認し、オペランドで `FilterRequested` イベントを利用して、`FilterFactory` を適用できるようにすることです。これにより、列をフィルタリングする演算子と値を割り当てることができます。例えば、「A」の値で開始します。

オペランドは列に適用されるため、インライン、コード内、または別のクラスに追加できます。各アプローチは、以下の例で示されています。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-filter-operands"
           alt="$Platform$ グリッド フィルターの例"
           github-src="grids/data-grid/column-filter-operands">
</code-view>

<div class="divider--half"></div>
<!-- end:Blazor -->
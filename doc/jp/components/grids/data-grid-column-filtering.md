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

フィールドにカーソルを合わせて垂直の省略記号をクリックすると、列オプション UI にもフィルタリングが表示されます。This is achieved when setting the `FilterUIType` to ColumnOptions. Please refer to the sample below.

## Filter Expressions

In the example below, the data grid's FilterExpressions collection is updated to incorporate custom `FilterExpression`.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-filter-expressions"
           alt="$Platform$ Grid Filter Expressions Example"
           github-src="grids/data-grid/column-filter-expressions">
</code-view>

<div class="divider--half"></div>

<!-- Blazor -->
## Filter Operators

Columns can be given a custom `FilterOperand` that will appear in the filter-row operand dropdown. The key requirements is to ensure the operand is given a `DisplayName` and to utilize the `FilterRequested` event on the operand so you can apply a `FilterFactory`, which is responsible for assigning the operator and value you wish to the filter the column by. Eg. StartsWith with value of "A".

Since the operands are applied to the column they can be added inline, in-code, or in a separate class. Each approach is demonstrated in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-filter-operands"
           alt="$Platform$ Grid Filtering Example"
           github-src="grids/data-grid/column-filter-operands">
</code-view>

<div class="divider--half"></div>
<!-- end:Blazor -->
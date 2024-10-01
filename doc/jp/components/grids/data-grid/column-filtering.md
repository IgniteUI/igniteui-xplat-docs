---
title: {Platform} データ グリッド | フィルタリング | インフラジスティックス
_description: インフラジスティックスの {ProductName} グリッド コンポーネントを使用して表現的なソート条件を実行し、データを簡単に返します。詳細については、{ProductName} テーブルのサンプルを参照してください。
_keywords: {Platform} Table, Data Grid, column, filtering, filter expressions, filter operands, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 列, フィルタリング, フィルター式, フィルター オペランド, インフラジスティックス
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid", "Infragistics.Controls.Grid.Implementation.FilterExpressions"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridFiltering}
_language: ja
---

<!-- Blazor, WebComponents -->

> [!Note]
このコントロールは非推奨であり、[Grid](../data-grid.md) に置き換えられていることに注意してください。そのため、そのコントロールに移行することをお勧めします。これは新しい機能を受け取ることはなく、バグ修正は優先されません。コードベースをデータ グリッドに移行する際のヘルプや質問については、サポートにお問い合わせください。

<!-- end: Blazor, WebComponents -->

# {Platform} グリッド フィルターの概要

{ProductName} Data Table / Data Grid には、フィルター行と API の両方を使用した列フィルタリングが含まれており、フィルター処理される列のデータ型に基づいてソート条件を実行できます。

## {Platform} グリッド フィルターの例


`sample="/grids/data-grid/column-filtering", height="600", alt="{Platform} グリッド フィルターの例"`



<div class="divider--half"></div>

上記のように、`FilterUIType` プロパティを FilterRow に設定すると、ユーザー インターフェイスでレコードをフィルタリングできるようになり、ユーザーはレコードをフィルタリングするためのフィルター基準を指定できます。指定されたフィルター基準に一致しないレコードは非表示になります。

フィールドにカーソルを合わせて垂直の省略記号をクリックすると、列オプション UI にもフィルタリングが表示されます。これは、`FilterUIType` を ColumnOptions に設定するときに実現されます。以下のサンプルを参照してください。

## フィルター式

以下の例では、データ グリッドの FilterExpressions コレクションが更新され、カスタムの `FilterExpressions` が組み込まれています。

`sample="/grids/data-grid/column-filter-expressions", height="600", alt="{Platform} グリッド フィルター式の例"`



<div class="divider--half"></div>


## フィルター演算子

列には、filter-row オペランド ドロップダウンに表示されるカスタムの `FilterOperand` を指定できます。重要な要件は、オペランドに `DisplayName` が指定されていることを確認し、オペランドで `FilterRequested` イベントを利用して、`FilterFactory` を適用できるようにすることです。これにより、列をフィルタリングする演算子と値を割り当てることができます。例えば、「A」の値で開始します。

さらに、グリッドの `FilterLogicalOperator` プロパティは、フィールド間のフィルターがどのように組み合わされるかを示す役割を果たします。

- `And` 論理演算子。正しく一致させるためには、すべての条件をパスする必要があります。
- `Or` 論理演算子。正しく一致させるためには、少なくとも 1 つの条件をパスする必要があります。

<!-- Blazor -->
オペランドは列に適用されるため、インライン、コード内、または別のクラスなど、いくつかの方法で追加できます。各アプローチは、以下の例で示されています。
<!-- end:Blazor -->

`sample="/grids/data-grid/column-filter-operands", height="600", alt="{Platform} グリッド フィルターの例"`



<div class="divider--half"></div>

## API リファレンス

 - `DisplayName`
 - `FilterExpressions`
 - `FilterFactory`
 - `FilterLogicalOperator`
 - `FilterOperand`
 - `FilterRequested`
 - `FilterUIType`
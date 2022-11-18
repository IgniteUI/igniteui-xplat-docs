---
title: {Platform} グリッド/テーブルのページネーション – {ProductName}
_description: データの配列を取り込み、そのデータの一部を １ ページとして出力するように設計されたインフラジスティックスの {Platform} グリッド コンポーネントの Pager を是非お試しください。
_keywords: {Platform} Table, Data Grid, row, paging, {ProductName}, Infragistics, {Platform} テーブル, データ グリッド, 行のページング, インフラジスティックス
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.Column']
namespace: Infragistics.Controls
_language: ja
---

# {Platform} グリッド / テーブルのページネーション

表形式のテーブル UI は、多くの Web 製品で一般的に使用されています。表形式のテーブル UI を最初から作成するのは簡単ではありませんが、{ProductName} グリッドを使用すると、テーブル UI の作成が簡単になり、大量のローカル データまたはリモート データを {Platform} グリッドにバインドするのも簡単です。グリッドはデフォルトで仮想化されているため、大きなデータ セットを表示するためにテーブルのページネーションを含める必要はありません。これは主に、UI で複雑なデータを整理する最も効率的な方法のために使用されます。テーブルのページネーションを使用すると、データを設定された行数で表示できるため、ユーザーは実際にスクロールバーを必要とせずに、データをスクロールできます。テーブルのページネーション UI には通常、現在のページ、合計ページ、クリック可能な [前へ] と [次へ] の矢印/ボタンなどが含まれ、ユーザーは次のようにページをめくることができます:

行のページングは、`IsPagerVisible` プロパティを設定することにより、{ProductName} データ テーブル / データ グリッド内で有効になります。さらに、`PageSize` を設定することで、表示される行の最大数を制限できます。

## {Platform} 行のページングの例

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-pager"
           alt="{Platform} 行のページングの例"
           github-src="grids/data-grid/pager">
</code-view>

<div class="divider--half"></div>

## 概要

UX の観点から、テーブルのページネーションには長所と短所があります。UX Matters の[最近の記事](https://www.uxmatters.com/mt/archives/2018/11/paging-scrolling-and-infinite-scroll.php)による、テーブルのページネーションの良い面と悪い面の分類です:

テーブルのページネーションの利点:

- ユーザーの選択を制限します。
- クリック数は測定可能です。

テーブルのページネーションの欠点:

- ユーザーはまだスクロールする必要があります。
- ページャーの作業と動作はサイトごとに異なります。
- UI コントロールが多すぎると、混乱する可能性があります。
- ユーザーは、ページネーションが遅くて面倒だと考えています。
- ユーザーはページネーション コントロールに気付かない場合があります。
- ページの読み込みが遅い場合があります。
- アクションがページに適用されるのか、データ セット全体に適用されるのか、ユーザーは混乱します。

Ignite UI {Platform} グリッドを使用すると、開発者はページングを追加できますが、グリッドにはデフォルトで無限スクロールが組み込まれているため、グリッドにページャーを追加するのではなく、無限 (または仮想) スクロールをお勧めします。デフォルトのユーザー エクスペリエンスとして仮想化された無限スクロールを使用すると、次のことが可能になります:

- スクロール操作によってページングされるデータの量を制御しながら、最高のパフォーマンスを実現。
- すべてのコンテンツをスクロールするための自然なアプローチ。
- すべてのインタラクションはエンド ユーザーに明確です。
- モバイル UX での自然なインタラクションにマップします。

## {Platform} グリッド/ページの同期

ユーザーがソートやグループ化などのグリッドを操作し、グリッドで {Platform} Pager を有効にした場合、次の関数を使用して、{Platform} ページネーション データが {Platform} テーブル表示と同期されるようにする必要があります。

- applySorts
- applyGroups
- applyFilters

## API メンバー

 - `Grid`
 - `IsPagerVisible`
 - `PageSize`
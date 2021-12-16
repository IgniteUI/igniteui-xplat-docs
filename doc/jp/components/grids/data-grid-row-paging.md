---
title: $Platform$ グリッド/テーブルのページネーション – $ProductName$
_description: データの配列を取り込み、そのデータの一部を１ページとして出力するように設計されたインフラジスティックスの $Platform$ グリッド コンポーネントのカスタム Pager コンポーネントを是非お試しください。
_keywords: $Platform$ Table, Data Grid, row, paging, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, 行のページング, インフラジスティックス
mentionedTypes: ['Grid']
namespace: Infragistics.Controls
_language: ja
---

# $Platform$ グリッド/テーブルのページネーション

表形式のテーブル UI は、多くの Web 製品で一般的に使用されています。表形式のテーブル UI を最初から作成するのは簡単ではありませんが、Ignite UI for $Platform$ グリッドを使用すると、テーブル UI の作成が簡単になり、大量のローカル データまたはリモート データを $Platform$ グリッドにバインドするのも簡単です。グリッドはデフォルトで仮想化されているため、大きなデータ セットを表示するためにテーブルのページネーションを含める必要はありません。これは主に、UI で複雑なデータを整理する最も効率的な方法のために使用されます。テーブルのページネーションを使用すると、データを設定された行数で表示できるため、ユーザーは実際にスクロールバーを必要とせずに、データをスクロールできます。テーブルのページネーション UI には通常、現在のページ、合計ページ、クリック可能な [前へ] と [次へ] の矢印/ボタンなどが含まれ、ユーザーは次のようにページをめくることができます:

行のページングは​​現在 $ProductName$ Data Table / Data Grid 自体には実装されていませんが、データ ソースを動的に切り替えることで同様の結果を得ることができます。

```md
> [!NOTE]
> WebComponents:
> 行ページング機能は開発中であり、近日公開予定です。
```

## $Platform$ 行のページングの例


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-row-paging"
           alt="$Platform$ 行のページングの例"
           github-src="grids/data-grid/row-paging">
</code-view>

<div class="divider--half"></div>

## 概要

上記のサンプルでは、ページングは​​ $ProductName$ Data Grid に組み込まれていないため、データの配列を取り込み、そのデータの一部をページとして出力するように設計されたカスタム Pager コンポーネントを作成しました。このページデータは $ProductName$ Data Grid に提供され、自動的にその新しいデータが表示されます。

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

Ignite UI $Platform$ グリッドを使用すると、開発者はページングを追加できますが、グリッドにはデフォルトで無限スクロールが組み込まれているため、グリッドにページャーを追加するのではなく、無限 (または仮想) スクロールをお勧めします。デフォルトのユーザー エクスペリエンスとして仮想化された無限スクロールを使用すると、次のことが可能になります:

- スクロール操作によってページングされるデータの量を制御しながら、最高のパフォーマンスを実現。
- すべてのコンテンツをスクロールするための自然なアプローチ。
- すべてのインタラクションはエンド ユーザーに明確です。
- モバイル UX での自然なインタラクションにマップします。

## $Platform$ グリッド/テーブル コンポーネントでのページング

ページングには、グリッド データをページ セグメントの形式で表示するオプションがあります。$Platform$ テーブルで従来のページング UI を有効にするには、Pager コンポーネントを使用し、Pager コンポーネントをページの $Platform$ グリッドにアタッチする必要があります。データは $Platform$ ページャー コンポーネントにバインドされ、表示されているページ セグメントに基づいてデータがグリッドに渡されます。

Pager コンポーネントの列のソート、行のグループ化、列のフィルターなどをサポートするために、独自のバージョンのデータ ソースを保持しています。ソート、グループ、またはフィルターが $Platform$ データ グリッドに追加されると、Pager 内のデータ ソースの内部バージョンが、一致するソート、グループ、またはフィルターで更新されます。このデータ ソースは、これらに基づいてデータのビューを変更し、変更を反映するデータを提供します。

> [!NOTE]
>
> Pager コンポーネントのソース コードは、$ProductName$ ダウンロードで利用できます。

## コード スニペット

上記のサンプルが Pager コンポーネントを使用する方法:

```tsx
<div>
    <IgrDataGrid
        ref={this.onGridRef}
        sortDescriptionsChanged={this.onSortChanged}
        groupDescriptionsChanged={this.onGroupChanged}
        filterExpressionsChanged={this.onFilterChanged} />
    <Pager
        ref={this.onPagerRef}
        dataSource={this.data}
        pageSize={20}
        pagedChanged={this.onPageChanged}/>
</div>
```

```ts
private data: any[];

constructor(props: any) {
    super(props);

    this.onGridRef = this.onGridRef.bind(this);
    this.onPagerRef = this.onPagerRef.bind(this);
    this.data = SharedData.getEmployees();
}

public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
}

public onPageRef(pager: Pager) {
    this.pager = pager;
}

private onSortChanged = () => {
    if (this.pager) {
        this.pager.applySorts(this.grid.sortDescriptions);
    }
}

private onGroupChanged = () => {
    if (this.pager) {
        this.pager.applyGroups(this.grid.groupDescriptions);
    }
}

private onFilterChanged = () => {
    if (this.pager) {
        this.pager.applyFilters(this.grid.filterExpressions);
    }
}

private onPageChanged = (pageNumber: number, data: any[]) => {
    this.grid.dataSource = data;
    this.grid.flush();
    this.grid.scrollToRowByIndex(0);
};
```

## $Platform$ グリッド/ページの同期

ユーザーがソートやグループ化などのグリッドを操作し、グリッドで $Platform$ Pager コンポーネントを有効にした場合、次の関数を使用して、$Platform$ ページネーション データが $Platform$ テーブル表示と同期されるようにする必要があります。

- applySorts
- applyGroups
- applyFilters

Pager コンポーネントの <b>pageChanged</b> イベントは、ページが変更されたときにそれを通知し、新しいページのデータを提供します。サンプルはこのデータを受け取り、表示用に $Platform$ データ グリッドに渡します。

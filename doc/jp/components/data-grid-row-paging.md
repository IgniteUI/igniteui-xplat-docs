---
title: $Platform$ データ グリッド | 行のページング | インフラジスティックス
_description: データの配列を取り込み、そのデータの一部を１ページとして出力するように設計されたインフラジスティックスの $Platform$ グリッド コンポーネントのカスタム Pager コンポーネントを是非お試しください。$ProductName$ テーブルのサンプルを是非お試しください!
_keywords: $Platform$ Table, Data Grid, row, paging, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, 行のページング, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $Platform$ 行のページング

行のページングは​​現在 $ProductName$ Data Table / Data Grid 自体には実装されていませんが、データソースを動的に切り替えることで同様の結果を得ることができます。

```md
> [!NOTE]
> WebComponents:
> 行ページング機能は開発中であり、近日公開予定です。
```

## $Platform$ 行のページングの例


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-paging"
           alt="$Platform$ 行のページングの例"
           github-src="grids/data-grid/row-paging">
</code-view>

<div class="divider--half"></div>

## 概要

上記のサンプルでは、ページングは​​ $ProductName$ Data Grid に組み込まれていないため、データの配列を取り込み、そのデータの一部をページとして出力するように設計されたカスタム Pager コンポーネントを作成しました。このページデータは $ProductName$ Data Grid に提供され、自動的にその新しいデータが表示されます。

> [!NOTE]
>
> Pager コンポーネントのソース コードは、$ProductName$ ダウンロードで利用できます。

Pager コンポーネントの列のソート、行のグループ化、列のフィルターなどをサポートするために、独自のバージョンのデータ ソースを保持しています。ソート、グループ、またはフィルターが $ProductName$ データ グリッドに追加されると、Pager 内のデータ ソースの内部バージョンが、一致するソート、グループ、またはフィルターで更新されます。このデータソースは、これらに基づいてデータのビューを変更し、変更を反映するデータを提供します。

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

Pager コンポーネントの <b>pageChanged</b> イベントは、ページが変更されたときにそれを通知し、新しいページのデータを提供します。サンプルはこのデータを受け取り、表示用に $Platform$ データ グリッドに渡します。
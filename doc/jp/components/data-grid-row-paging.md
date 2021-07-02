---
title: $Platform$ データ グリッド | 行のページング | インフラジスティックス
_description: データの配列を取り込み、そのデータの一部を１ページとして出力するように設計されたインフラジスティックスの $Platform$ グリッド コンポーネントのカスタム Pager コンポーネントを是非お試しください。
_keywords: $Platform$ Table, Data Grid, row, paging, $ProductName$, Infragistics, $Platform$ テーブル, データ グリッド, 行のページング, インフラジスティックス
mentionedTypes: ['Grid']
_language: ja
---

# $Platform$ Grid/Table Pagination 

Tabular table UIs are used commonly in many web products. Building a tabular table UI from scratch isn't easy, however, Ignite UI for $Platform$ grid, creating a Table UI is simple, and binding large amounts of local or remote data to the $Platform$ grid is easy.  Since the grid is virtualized by default, you are not required to include table pagination to show large data sets.  It is mainly used due to its most efficient ways of organizing complex data in the UI. With table pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without actually needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows / buttons that let users flip through pages, as demonstrated here:

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

From a UX perspective, table pagination has pros and cons.  According to a [recent article](https://www.uxmatters.com/mt/archives/2018/11/paging-scrolling-and-infinite-scroll.php) on UX Matters, here is a breakdown of the good and the bad when it comes to table pagination. 

Table Pagination Benefits: 

- Limits user choice 
- Clicks are measurable 

Table Pagination Negatives: 

- Users still have to scrolls 
- Pagers work and behave differently from site to site 
- Too many UI controls can be confusing 
- Users perceive paging and slow and cumbersome 
- Users may not notice pagination controls 
- Page loading may be slow 
- Users are confused whether actions apply to Page or entire set of data 

With the Ignite UI $Platform$ grid, we allow the developer to add paging, however, as the grid has infinite scrolling built in by default, we recommend infinite (or virtual) scrolling vs. adding a pager to the grid.  With virtualized, infinite scrolling as the default user experience, you get: 

- Best performance while still having control or how much data is ‘paged’ via the scrolling interaction 
- Natural approach to scrolling all content 
- All interactions are clear to the end user 
- Maps to the natural interactions on a mobile UX 

## Paging in $Platform$ Grid/Table Component 

Paging offers an option to display Grid data in the form of page segments. In order to enable a traditional paging UI in your $Platform$ table, you need to use the Pager component, and attach the Pager component to a $Platform$ grid on your page.  Data is bound to the $Platform$ pager component, and then data is passed to the Grid based on the page segment being displayed.  

Pager コンポーネントの列のソート、行のグループ化、列のフィルターなどをサポートするために、独自のバージョンのデータ ソースを保持しています。ソート、グループ、またはフィルターが $ProductName$ データ グリッドに追加されると、Pager 内のデータ ソースの内部バージョンが、一致するソート、グループ、またはフィルターで更新されます。このデータソースは、これらに基づいてデータのビューを変更し、変更を反映するデータを提供します。

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

## $Platform$ Grid/Page Synchronization 

When users interact with the Grid like sorting and grouping, and you have enabled the $Platform$ Pager component on the grid, you need to use the following functions to ensure that the $Platform$ Pagination data is synchronized with the $Platform$ table display. 

- applySorts 
- applyGroups 
- applyFilters 

Pager コンポーネントの <b>pageChanged</b> イベントは、ページが変更されたときにそれを通知し、新しいページのデータを提供します。サンプルはこのデータを受け取り、表示用に $Platform$ データ グリッドに渡します。

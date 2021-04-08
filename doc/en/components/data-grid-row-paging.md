---
title: $PlatformShort$ Data Grid | Row Paging | Infragistics
_description: View Infragistics' $PlatformShort$ grid component's custom Pager component which was designed to take in an array of data and output portions of that data as a page. View the $ProductName$ table demos!
_keywords: $PlatformShort$ Table, Data Grid, row, paging, $ProductName$, Infragistics
mentionedTypes: ['Grid']
---

# $PlatformShort$ Row Paging

Row Paging is not currently implemented within the $ProductName$ Data Table / Data Grid itself however by switching the data source dynamically you can achieve similar results.

```md
> [!NOTE]
> For WebComponents:
> The Row Paging feature is in development and is coming soon.
```

## $PlatformShort$ Row Paging Example


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-paging" 
           alt="$PlatformShort$ Row Paging Example" 
           github-src="grids/data-grid/row-paging">
</code-view>

<div class="divider--half"></div>

## Overview

For the above demo, since paging is not built into the $ProductName$ Data Grid, we created a custom Pager component which was designed to take in an array of data and output portions of that data as a page.  This paged data can then be provided to the $ProductName$ Data Grid which will automatically display that new data.

> [!NOTE]
>
> The source code for the Pager component is available in the $ProductName$ download.

In order to support things like column sorting,Row grouping and column filtering the Pager component keeps its own version of the data source.  When a sort, group or filter is added to the $ProductName$ Data Grid the internal version of the data source inside the Pager is updated with the matching sort, group or filter.  This data source then mutates its view of the data based on these and provides updated data to reflect this.

## Code Snippet

Here is how the above demo uses this Pager component:

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

The <b>pageChanged</b> event on the Pager component will notify us when it changes the page and will provide the data for the new page.  The sample takes this data and passes it to the $PlatformShort$ data grid for display.
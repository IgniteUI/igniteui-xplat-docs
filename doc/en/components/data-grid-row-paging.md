---
title: $Platform$ Data Grid | Row Paging | Infragistics
_description: View Infragistics' React grid component's custom Pager component which was designed to take in an array of data and output portions of that data as a page.
_keywords: $Platform$ Table, Data Grid, row, paging, $ProductName$, Infragistics
mentionedTypes: ['Grid']
---

# $Platform$ Grid/Table Pagination 

Tabular table UIs are used commonly in many web products. Building a tabular table UI from scratch isn't easy, however, Ignite UI for React grid, creating a Table UI is simple, and binding large amounts of local or remote data to the React grid is easy.  Since the grid is virtualized by default, you are not required to include table pagination to show large data sets.  It is mainly used due to its most efficient ways of organizing complex data in the UI. With table pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without actually needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows / buttons that let users flip through pages, as demonstrated here: 

Row Paging is not currently implemented within the $ProductName$ Data Table / Data Grid itself however by switching the data source dynamically you can achieve similar results.

```md
> [!NOTE]
> For WebComponents:
> The Row Paging feature is in development and is coming soon.
```

## $Platform$ Row Paging Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-row-paging"
           alt="$Platform$ Row Paging Example"
           github-src="grids/data-grid/row-paging">
</code-view>

<div class="divider--half"></div>

## Overview

For the above demo, since paging is not built into the $ProductName$ Data Grid, we created a custom Pager component which was designed to take in an array of data and output portions of that data as a page.  This paged data can then be provided to the $ProductName$ Data Grid which will automatically display that new data.

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

With the Ignite UI React grid, we allow the developer to add paging, however, as the grid has infinite scrolling built in by default, we recommend infinite (or virtual) scrolling vs. adding a pager to the grid.  With virtualized, infinite scrolling as the default user experience, you get: 

- Best performance while still having control or how much data is ‘paged’ via the scrolling interaction 
- Natural approach to scrolling all content 
- All interactions are clear to the end user 
- Maps to the natural interactions on a mobile UX 

## Paging in $Platform$ Grid/Table Component 

Paging offers an option to display Grid data in the form of page segments. In order to enable a traditional paging UI in your React table, you need to use the Pager component, and attach the Pager component to a React grid on your page.  Data is bound to the React pager component, and then data is passed to the Grid based on the page segment being displayed.  

In order to support things like column sorting,Row grouping and column filtering the Pager component keeps its own version of the data source.  When a sort, group or filter is added to the $ProductName$ Data Grid the internal version of the data source inside the Pager is updated with the matching sort, group or filter.  This data source then mutates its view of the data based on these and provides updated data to reflect this.

> [!NOTE]
>
> The source code for the Pager component is available in the $ProductName$ download.

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

## $Platform$ Pagination and Grid Interactions 

When users interact with the Grid like sorting and grouping, and you have enabled the $Platform$ Pager component on the grid, you need to use the following functions to ensure that the $Platform$ Pagination data is synchronized with the $Platform$ table display. 

- applySorts 
- applyGroups 
- applyFilters 

The <b>pageChanged</b> event on the Pager component will notify us when it changes the page and will provide the data for the new page.  The sample takes this data and passes it to the $Platform$ data grid for display.
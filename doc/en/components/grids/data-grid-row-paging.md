---
title: $Platform$ grid/table pagination – $ProductName$ 
_description: View Infragistics' $Platform$ grid component's Pager, which was designed to take in an array of data and output portions of that data as a page.
_keywords: $Platform$ Table, Data Grid, row, paging, $ProductName$, Infragistics
mentionedTypes: ['Grid']
namespace: Infragistics.Controls
---

# $Platform$ Grid/Table Pagination

Tabular table UIs are used commonly in many web products. Building a tabular table UI from scratch isn't easy, however, Ignite UI for $Platform$ grid, creating a Table UI is simple, and binding large amounts of local or remote data to the $Platform$ grid is easy.  Since the grid is virtualized by default, you are not required to include table pagination to show large data sets.  It is mainly used due to its most efficient ways of organizing complex data in the UI. With table pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without actually needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows / buttons that let users flip through pages, as demonstrated here:

Row Paging is enabled within the $ProductName$ Data Table / Data Grid by setting the `IsPagerVisible` property. In addition, you can limit the maximum number of visible rows by setting `PageSize`.

## $Platform$ Row Paging Example

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-pager"
           alt="$Platform$ Row Paging Example"
           github-src="grids/data-grid/pager">
</code-view>

<div class="divider--half"></div>

## Overview

From a UX perspective, table pagination has pros and cons. According to a [recent article](https://www.uxmatters.com/mt/archives/2018/11/paging-scrolling-and-infinite-scroll.php) on UX Matters, here is a breakdown of the good and the bad when it comes to table pagination.

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

## $Platform$ Grid/Page Synchronization

When users interact with the Grid like sorting and grouping, and you have enabled the $Platform$ Pager on the grid, you need to use the following functions to ensure that the $Platform$ Pagination data is synchronized with the $Platform$ table display.

- applySorts
- applyGroups
- applyFilters

 ## API Members

 - `Grid`
 - `IsPagerVisible`
 - `PageSize`
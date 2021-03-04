---
title: $PlatformShort$ Data Grid | Column Options | Infragistics
_description: See how Infragistics' $ProductName$ Data Grid supports the ability to pin, move, filter, and sort columns individually through a drop down UI from each column header. Check out $ProductName$ table's column option!
_keywords: $PlatformShort$ Table, Data Grid, column options, $ProductName$, Infragistics
mentionedTypes: ['Grid', 'HeaderClickAction', 'IsColumnOptionsEnabled', 'IsFilteringEnabled', 'Column']
---

# $PlatformShort$ Grid Column Options Overview

The $ProductName$ Data Grid supports the ability to group, hide, sort, move, pin, filter, and sort columns directly from a UI exposed on each column header.

To enable the column options ui you can set the grid's `IsColumnOptionsEnabled` property to true.

## $PlatformShort$ Grid Column Options Overview Example


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-column-options" alt="$PlatformShort$ Grid Column Options Overview Example">
</code-view>
<sample-button src="grids/data-grid/column-options"></sample-button>

<div class="divider--half"></div>

## Column Options Configurations

Filtering can be toggled per column by setting the column's `IsFilteringEnabled` property. Setting true or false will show or hide the filtering section in the column's options ui.

Sorting can be toggled for the entire grid if the `HeaderClickAction` property is applied. Setting this to `None` for example will completely remove sorting from grid and reflect in the options ui for each column. And setting `SortByOneColumnOnly` for example will continue to allow one column to be sorted at a time.

## Code Snippet

The following code demonstrates how to programmatically enable the column options ui adjust filtering and sorting in the column options ui by adjusting the grid and column.

```tsx
<IgrDataGrid
height="1-00%"
width="100%"
headerClickAction="SortByOneColumnOnly"
isColumnOptionsEnabled="true">
    <IgrTextColumn field="ID" isFilteringEnabled="false"/>
</IgrDataGrid>
```

<!--React-->
```ts
import { HeaderClickAction } from 'igniteui-react-grids';

//enable column options
this.grid.isColumnOptionsEnabled="true";

//adjust filtering for column
let idColumn = this.grid.actualColumns.item(0);
idColumn.isFilteringEnabled="false";

//adjust sorting
this.grid.headerClickAction = HeaderClickAction.SortByOneColumnOnly;
```

<!--WebComponents-->
```ts
import { HeaderClickAction } from 'igniteui-webcomponents-grids';

//enable column options
this.grid.isColumnOptionsEnabled="true";

//adjust filtering for column
let idColumn = this.grid.actualColumns.item(0);
idColumn.isFilteringEnabled="false";

//adjust sorting
this.grid.headerClickAction = HeaderClickAction.SortByOneColumnOnly;
```

```html
<igc-data-grid
     id="grid"
     height="calc(100% - 40px)"
     width="100%"
     header-click-action="SortByOneColumnOnly"
     is-column-options-enabled="true">
    <igc-text-column field="ID" is-filtering-enabled="false"></igc-text-column>
</igc-data-grid>
```

```razor
<DataGrid Height="100%" Width="100%"    
    DataSource="DataSource"
    HeaderClickAction="HeaderClickAction.SortByOneColumnOnly"
    IsColumnOptionsEnabled="true">
    <TextColumn Field="ID" IsFilteringEnabled="false" />
</DataGrid>
```

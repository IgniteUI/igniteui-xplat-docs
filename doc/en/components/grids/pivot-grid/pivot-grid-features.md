---
title: {Platform} {PivotGridTitle} Features | Pivot Tables | Infragistics
_description: Create fast, responsive {Platform} {PivotGridTitle}s and tables with {ProductName}. Perform complex data analysis via pivot data.
_keywords: {Platform} {PivotGridTitle}, {Platform} material pivot table, {ProductName}, {PivotGridTitle} features, pivot features
---

# {Platform} {PivotGridTitle} Features

The pivot and flat grid component classes inherit from a common base and thus share some functionality and features.

>[!NOTE]
>Some features do not have meaningful behavior in the context of a pivot table and therefore cannot be enabled for `{PivotGridName}`. These include:
> - CRUD operations
> - Grouping
> - Row/Column Pinning
> - Summaries
> - Paging

The {PivotGridTitle} component has additional features and functionalities related to its dimensions as described below.

<code-view style="height: 870px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/pivot-grid/pivot-grid-features" alt="{Platform} {PivotGridTitle} with Pivot Selector Example">
</code-view>

## Dimensions Filtering

All dimensions (filters, rows, columns) can be filtered via the chip UI or the API. This functionality is embedded and enabled by default.

>[!NOTE]
>You can use the filtering dimension to filter out data values which are not a part of the pivot view.

The filtering UI can be opened via the dimension chips filter icon and allows excel-style filtering of the unique dimension values.

>[!NOTE]
>If there is not enough space for all of the filtering chips, the {PivotGridTitle} will show the ones that were cut off into a dropdown. End-users can access and manipulate them there.

Dimensions can also be filtered initially via the dimension configuration in `pivotConfiguration` with the dimension's `filter` property.
It can be set to a new `FilteringExpressionsTree` with the related filter condition, for example:

<!-- Angular, WebComponents  -->

```typescript
public filterExpTree = new FilteringExpressionsTree(FilteringLogic.And);

constructor() {
    this.filterExpTree.filteringOperands = [
        {
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            fieldName: 'SellerName',
            searchVal: 'Stanley'
        }
    ];
}

public pivotConfigHierarchy: IPivotConfiguration = {
    filters: [
        {
            memberName: 'SellerName',
            enabled: true,
            filter: this.filterExpTree
        }
    ]
}

```
<!-- end: Angular, WebComponents -->

## Dimensions Sorting

Dimension values in the `rows` or `columns` can be sorted via the related chip or the API. This functionality is embedded and enabled by default.

The dimension is sorted on click of the related chip and as a result the dimension values are sorted in ascending/descending order.

Sorting can also be applied initially via the `sortDirection` property of the dimension definition.

<!-- Angular, WebComponents  -->

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'SellerName',
            enabled: true,
            sortDirection: SortingDirection.Asc
        }
    ]
}
```
<!-- end: Angular, WebComponents -->
## Dimensions Resizing

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized by double clicking the resize indicator, or by using the related API - `autoSizeRowDimension`.

A different size can also be set initially with the `width` property available in the dimension definition:

<!-- Angular, WebComponents  -->

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'Country',
            enabled: true,
            width: '400px'
        }
    ]
}
```
<!-- end: Angular, WebComponents -->
## Dimensions Selection

The {PivotGridTitle} supports single selection which is enabled just like in the base grid. For example:

```html
<{PivotGridSelector} #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</{PivotGridSelector}>
```

In case there are multiple row or column dimensions which would create groups that span multiple rows/columns, selection is applied to all cells that belong to the selected group.

## Super Compact Mode
The `{PivotGridName}` component provides a `superCompactMode` `@Input`. It is suitable for cases that require a lot of cells to be present on the screen at once. If enabled the option ignores the `displayDensity` option for the {PivotGridTitle}. Enabling `superCompactMode` also sets the `displayDensity` input to `compact` for each child component(like `IgxChip`) that does not have the `superCompactMode` option.

```html
<{PivotGridSelector} [superCompactMode]="true"></{PivotGridSelector}>
```

## Additional Summary Column

When a `column` dimension defines a hierarchy, the {PivotGridTitle} will render additional summary/total column, which accumulates the aggregations of all of the columns inside the group. When the group is collapsed only the summary column will remain. And when the group is expanded the additional summary column appears at the end of the group.

## Interactions

### Keyboard Navigation

Keyboard navigation in `{PivotGridName}` works similarly to the one in `IgxGrid`. The {PivotGridTitle} is split into three areas - `rows`, `columns`, `values`. The areas for `rows` and `columns` are considered headers for the purposes of navigation while the area for `values` is the body.
The keyboard arrows allow navigating the active element within the current area only.

### Dimensions Drag & Drop
The dimensions are represented by chips, which can be dragged & dropped.
All chips can change their order within their area by drag & drop.
The chips from `rows`, `column`, `filter`(dimension chips) can be moved from any of those areas to any other and at any place.
Chips from these areas can not be moved to the `values` area and chips from the `values` area can not be moved to any of the dimension areas.

>[!NOTE]
>The chips from the {PivotGridTitle} can not be moved to the Pivot Data Selector and items from the Pivot Data Selector can not be moved to the {PivotGridTitle}.

## API References
* [{PivotGridName}Component](overview.md)
* `IgxPivotDataSelectorComponent`


## Additional Resources
<div class="divider--half"></div>
* [{Platform} {PivotGridTitle} Overview](pivot-grid.md)
* [{Platform} {PivotGridTitle} Custom Aggregations](pivot-grid-custom.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

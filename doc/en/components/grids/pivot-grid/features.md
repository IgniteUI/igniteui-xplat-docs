---
title: {Platform} {PivotGridTitle} Features | Pivot Tables | Infragistics
_description: Create fast, responsive {Platform} {PivotGridTitle} and tables with {ProductName} and perform complex data analysis via pivot data.
_keywords: {Platform}, {PivotGridTitle}, material pivot table, {ProductName}, grid features, pivot features
mentionedTypes: ['Infragistics.Controls.Grid']
---

# {Platform} {PivotGridTitle} Features

The pivot and flat grid components inherit from a common base and thus share some functionality and features.

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
           iframe-src="{environment:dvDemosBaseUrl}/pivot-grid/features"
           alt="{Platform} {PivotGridTitle} with Pivot Selector Example">
</code-view>

<!-- Angular -->
## Dimensions Filtering

All dimensions (filters, rows, columns) can be filtered via the chip UI or the API. This functionality is embedded and enabled by default.

>[!NOTE]
>You can use the filtering dimension to filter out data values which are not a part of the pivot view.

The filtering UI can be opened via the dimension chips filter icon and allows excel-style filtering of the unique dimension values.

>[!NOTE]
>If there is not enough space for all of the filtering chips, the {PivotGridTitle} will show the ones that were cut off into a dropdown. End-users can access and manipulate them there.

Dimensions can also be filtered initially via the dimension configuration in `PivotConfiguration` with the dimension's `filter` property.
It can be set to a new `FilteringExpressionsTree` with the related filter condition, for example:

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
<!-- end: Angular -->

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

<!-- Blazor -->
```razor
    var pivotConfiguration = new IgbPivotConfiguration();
    var rowDimension = new IgbPivotDimension() {
        MemberName = "SellerName",
        Enabled = true,
        SortDirection = SortingDirection.Asc
    };
    pivotConfiguration.Rows.Add(rowDimension);
```

<!-- end:Blazor -->
## Dimensions Resizing

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized by double clicking the resize indicator, or by using the related API - `AutoSizeRowDimension`.

A different size can also be set initially with the `Width` property available in the dimension definition:

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

<!-- Blazor -->
```razor
    var pivotConfiguration = new IgbPivotConfiguration();
    var rowDimension = new IgbPivotDimension() {
        MemberName = "SellerName",
        Enabled = true,
        Width = "400px"
    };
    pivotConfiguration.Rows.Add(rowDimension);
```

<!-- end:Blazor -->
## Dimensions Selection

The {PivotGridTitle} supports single selection which is enabled just like in the base grid. For example:

<!-- Angular -->
```html
<{PivotGridSelector} #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</{PivotGridSelector}>
```
<!-- end: Angular -->

<!-- WebComponents  -->
```html
<{PivotGridSelector} id="grid" row-selection="single">
</{PivotGridSelector}>
```
<!-- end: WebComponents -->

```razor
<{PivotGridSelector} PivotConfiguration="PivotConfiguration"
        Data="PivotSalesData"
        Name="grid"
        RowSelection=GridSelectionMode.Single
        @ref="grid">
</{PivotGridSelector}>
```

In case there are multiple row or column dimensions which would create groups that span multiple rows/columns, selection is applied to all cells that belong to the selected group.

## Super Compact Mode
The `{PivotGridName}` component provides a `SuperCompactMode` input. It is suitable for cases that require a lot of cells to be present on the screen at once. If enabled the option ignores the `DisplayDensity` option for the {PivotGridTitle}. Enabling `SuperCompactMode` also sets the `DisplayDensity` input to `Compact` for each child component(like `Chip`) that does not have the `SuperCompactMode` option.



<!-- Angular -->
```html
<{PivotGridSelector} [superCompactMode]="true"></{PivotGridSelector}>
```
<!-- end: Angular -->

<!-- WebComponents  -->
```html
<{PivotGridSelector} super-compact-mode="true"></{PivotGridSelector}>
```
<!-- end: WebComponents -->

```razor
<{PivotGridSelector} SuperCompactMode=true></{PivotGridSelector}>
```

## Additional Summary Column

When a `column` dimension defines a hierarchy, the {PivotGridTitle} will render additional summary/total column, which accumulates the aggregations of all of the columns inside the group. When the group is collapsed only the summary column will remain. And when the group is expanded the additional summary column appears at the end of the group.

## Interactions

### Keyboard Navigation

Keyboard navigation in `{PivotGridSelector}` works similarly to the one in `{GridSelector}`. The {PivotGridTitle} is split into three areas - `rows`, `columns`, `values`. The areas for `rows` and `columns` are considered headers for the purposes of navigation while the area for `values` is the body.
The keyboard arrows allow navigating the active element within the current area only.

### Dimensions Drag & Drop
The dimensions are represented by chips, which can be dragged & dropped.
All chips can change their order within their area by drag & drop.
The chips from `rows`, `column`, `filter`(dimension chips) can be moved from any of those areas to any other and at any place.
Chips from these areas can not be moved to the `values` area and chips from the `values` area can not be moved to any of the dimension areas.

>[!NOTE]
>The chips from the {PivotGridTitle} can not be moved to the Pivot Data Selector and items from the Pivot Data Selector can not be moved to the {PivotGridTitle}.

## API References
* `PivotGrid`
* `PivotDataSelector`


## Additional Resources
* [{Platform} {PivotGridTitle} Overview](overview.md)
* [{Platform} {PivotGridTitle} Custom Aggregations](pivot-grid-custom.md)

Our community is active and always welcoming to new ideas.

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{Platform})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{Platform})

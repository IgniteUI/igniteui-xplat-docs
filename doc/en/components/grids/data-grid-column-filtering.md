---
title: {Platform} Data Grid | Filtering | Infragistics
_description: Use Infragistics' {ProductName} grid component to perform expressive sort conditions and return data easily. View {ProductName} table's demo for more information!
_keywords: {Platform} Table, Data Grid, column, filtering, filter expressions, filter operands, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Grid.Implementation.Grid', 'Infragistics.Controls.Grid.Implementation.FilterExpressions']
namespace: Infragistics.Controls
---

<!-- Blazor, WebComponents -->

> [!Note]
Please note that this control has been deprecated and replaced with the [Grid](grid/overview.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support. 

<!-- end: Blazor, WebComponents -->

# {Platform} Grid Filtering Overview

The {ProductName} Data Table / Data Grid includes column filtering with both a filter row and API that gives you the ability to perform expressive sort conditions based on the data type of the column being filtered.

## {Platform} Grid Filtering Example


<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-filtering"
           alt="{Platform} Grid Filtering Example"
           github-src="grids/data-grid/column-filtering">
</code-view>

<div class="divider--half"></div>

As seen above, setting the `FilterUIType` property to FilterRow will enables the record filtering record to the user interface where the user can specify filter criteria to filter records. Records that do not match the specified filter criteria will be hidden.

Filtering is also exposed in the column options UI by hovering a field and clicking the vertical ellipsis. This is achieved when setting the `FilterUIType` to ColumnOptions. Please refer to the sample below.

## Filter Expressions

In the example below, the data grid's FilterExpressions collection is updated to incorporate custom `FilterExpressions`.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-filter-expressions"
           alt="{Platform} Grid Filter Expressions Example"
           github-src="grids/data-grid/column-filter-expressions">
</code-view>

<div class="divider--half"></div>


## Filter Operators

Columns can be given a custom `FilterOperand` that will appear in the filter-row operand dropdown. The key requirements is to ensure the operand is given a `DisplayName` and to utilize the `FilterRequested` event on the operand so you can apply a `FilterFactory`, which is responsible for assigning the operator and value you wish to the filter the column by, e.g. StartsWith with value of "A".

In addition, the grid's `FilterLogicalOperator` property is responsible for indicating how filters across fields are combined:

- `And` logical operator. In order for a successful match, all conditions have to pass.
- `Or` logical operator. In order for a successful match, at least one of the conditions have to pass.

<!-- Blazor -->
Since the operands are applied to the column they can be added in several ways, such as inline, in-code, or in a separate class. Each approach is demonstrated in the example below.
<!-- end:Blazor -->

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/data-grid-column-filter-operands"
           alt="{Platform} Grid Filtering Example"
           github-src="grids/data-grid/column-filter-operands">
</code-view>

<div class="divider--half"></div>

## API References

 - `DisplayName`
 - `FilterExpressions`
 - `FilterFactory`
 - `FilterLogicalOperator`
 - `FilterOperand`
 - `FilterRequested`
 - `FilterUIType`
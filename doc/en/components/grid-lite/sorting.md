---
title: {Platform} {GridLiteTitle} Sorting  | {ProductName} | MIT license
_description: Try {GridLiteTitle} with sort operations, sort customization, and remote sorting for {Platform} {GridLiteTitle}. See demos and examples and build your next app.
_keywords: sorting, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Sort Operations

The {GridLiteTitle} supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the **`sort`** property of the column configuration object.

<!-- React, WebComponents -->

```typescript
{
  key: 'price',
  sort: true
}
```

<!-- End: React, WebComponents -->

The **`sort`** property can be either a simple boolean or a **`ColumnSortConfiguration`** object which exposes additional configuration options:

<!-- React, WebComponents -->

```typescript
{
  key: 'name',
  sort: {
    /**
     * For string data types controls whether the sort operations for this column will be case sensitive.
     * By default, sort operations for string types are case insensitive.
     */
    caseSensitive: true,
    /**
     * Custom comparer function which will be used for sort operations for this column.
     *
     * In the following sample, we compare the `name` values based on their length.
     */
    comparer: (a, b) => a.length - b.length
  }
}
```

<!-- End: React, WebComponents -->

`sample="/{GridLiteSample}/sort-config-sample", height="600", alt="{Platform} {GridLiteTitle} Sorting Config"`

## Single and Multi-Sorting

The {GridLiteTitle} supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the **`sortConfiguration`** property of the grid.

<!-- React, WebComponents -->

```typescript
grid.sortConfiguration = { multiple: false, triState: true };
```

<!-- End: React, WebComponents -->

>[!NOTE]
>The single/multi-column sorting behavior controls how end-users interact with the {GridLiteTitle}. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-State Sorting

Additionally, the {GridLiteTitle} supports tri-state sorting and it is enabled by default. Depending on the configured **`triState`**
value for the grid **`sortConfiguration`** property, end-users will cycle through the following states,

- **Tri-State Enabled**

  - ```typescript
    ascending -> descending -> none -> ascending
    ```

- **Tri-State Disabled**

  - ```typescript
    ascending -> descending -> ascending
    ```

where **`none`** is the initial state of the data, that is to say with no sorting applied by the grid.

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

The following sample shows the grid **`sortConfiguration`** combinations and how they reflect in the grid.

`sample="/{GridLiteSample}/sort-config-grid", height="600", alt="{Platform} {GridLiteTitle} Sorting Config Grid"`

## Sort Model

The building block for sort operations in the {GridLiteTitle} is the **`SortExpression`** which has the following properties:

<!-- React, WebComponents -->

```typescript
type SortExpression<T> = {
  /**
   * The `key` of the target column for the sort operation.
   */
  key: keyof T;
  /**
   * The sort direction for the operation.
   */
  direction: 'ascending' | 'descending' | 'none';
  /**
   * Should the operation be case sensitive. Applies to the default string type.
   * If not explicitly passed, it will use the value from the target column sort configuration if applicable.
   */
  caseSensitive?: boolean;
  /**
   * Specifies a custom comparer function for the operation.
   * Will use the value from the target column sort configuration if applicable.
   */
  comparer?: SortComparer<T, T[keyof T]>;
};
```

<!-- End: React, WebComponents -->

The grid consumes these expressions for its sort API methods and configuration and produces them for events and its sorting state when
an end-user interacts with the component. See below for additional information.

## Sort API

The {GridLiteTitle} exposes two main approaches for applying sort operations from its API. Either through the **`GridLite.sort()`**/**`GridLite.clearSort()`** methods or through the **`Grid.Lite.sortExpressions`** property.

The **`sort()`** method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.

<!-- React, WebComponents -->

```typescript
// Single
grid.sort({ key: 'price', direction: 'descending' });

// Multiple
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```

<!-- End: React, WebComponents -->

The **`clearSort()`** method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.

<!-- React, WebComponents -->

```typescript
// Clear the sort state for the `price` column.
grid.clearSort('price');

// Clear the sort state of the grid.
grid.clearSort();
```

<!-- End: React, WebComponents -->

### Initial Sorting State

The **`sortExpressions`** property is very similar in behavior to the **`sort()`** method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the {GridLiteTitle} is first rendered.

<!-- React, WebComponents -->

For example here is a Lit-based sample:

```typescript
{
  sortState: SortExpression<Products>[] = [
    { key: 'price', direction: 'descending' },
    { key: 'name', direction: 'ascending', caseSensitive: true },
  ];

  render() {
    return html`<igc-grid-lite .sortExpressions=${sortState}></igc-grid-lite>`
  }
}
```

<!-- End: React, WebComponents -->

It can be used to get the current sort state of the component and do additional processing depending on another state in your application.

<!-- React, WebComponents -->

```typescript
const state = grid.sortExpressions;
// Save the current sort state
saveUserSortState(state);
```

<!-- End: React, WebComponents -->

## Events

When a sorting operation is performed through the UI, the component emits a custom **`sorting`** event. The **`detail`** property is the sort expression which will be applied by the {GridLiteTitle}. The event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a **`sorted`** event is emitted. It contains the expression which was used in the last sort operation and it is not cancellable.

<!-- React, WebComponents -->

```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortExpression<T>>) => { ... });
```

<!-- End: React, WebComponents -->

In the following sample, when you try to sort the **Name** and **Rating** columns, the operation will be cancelled. Watch the event log below to see it in action.

`sample="/{GridLiteSample}/sort-config-events", height="600", alt="{Platform} {GridLiteTitle} Sorting Config Events"`

## Remote Sort Operations

In cases where sorting must be done remotely or you want to save the current state/data to a server somewhere, the {GridLiteTitle} exposes a hook where you can implement and customize this behavior.

Using the **`dataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a sort operation is about to run. The callback is passed a **`DataPipelineParams`** object.

<!-- React, WebComponents -->

```typescript
export type DataPipelineParams<T extends object> = {
  /**
   * The current data state of the grid.
   */
  data: T[];
  /**
   * The grid component itself.
   */
  grid: IgcGridLite<T>;
  /**
   * The type of data operation being performed.
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

<!-- End: React, WebComponents -->

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote sorting operation, reflecting the REST endpoint generated based on the sort state of the component.

`sample="/{GridLiteSample}/sort-config-pipeline", height="600", alt="{Platform} {GridLiteTitle} Sorting Config Pipeline"`

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

* [Column Configuration](column-configuration.md)
* [Filtering](filtering.md)

Our community is active and always welcoming to new ideas.

* [{GridLiteTitle}  **GitHub**]({GithubLinkLite})

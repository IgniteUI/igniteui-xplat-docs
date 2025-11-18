---
title: {Platform} {GridLiteTitle} Filtering - {ProductName}
_description: Filter operations, filter customization and remote filtering for {GridLiteTitle}. See demos & examples!
_keywords: filtering, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# {Platform} {GridLiteTitle} Filter operations

The {GridLiteTitle} supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the **`filter`** property of the column configuration object.

```typescript
{
  key: 'price',
  filter: true
}
```

The **`filter`** property can be either a simple boolean or a
**`ColumnFilterConfiguration`** object which exposes additional configuration options:

```typescript
{
  key: 'price',
  filter: {
    /**
     * For string data types controls whether the filter operations for this column will be case sensitive.
     * By default, filter operations for string types are case insensitive.
     */
    caseSensitive: true;
  }
}
```

`sample="/{GridLiteSample}/filtering-config", height="600", alt="{Platform} {GridLiteTitle} Filtering Config"`

## Filter model

The building blocks for filter operations in the grid is the **`FilterExpression`** which has the following structure:

```typescript
export interface FilterExpression<T, K extends Keys<T> = Keys<T>> {
  /**
   * The target column for the filter operation.
   */
  key: K;
  /**
   * The filter function which will be executed against the data records.
   */
  condition: FilterOperation<T[K]> | OperandKeys<T[K]>;

  /**
   * The filtering value used in the filter condition function.
   *
   * @remarks
   * Optional for unary conditions.
   */
  searchTerm?: T[K];
  /**
   * Dictates how this expression should resolve in the filter operation in relation to
   * other expressions.
   */
  criteria?: FilterCriteria;
  /**
   * Whether the sort operation should be case sensitive.
   *
   * @remarks
   * If not provided, the value is resolved based on the column filter configuration (if any).
   */
  caseSensitive?: boolean;
}
```

## Filter API

The {GridLiteTitle} exposes two main approaches for applying filter operations from its API. Either through the **`GridLite.filter()`**/**`GridLite.clearFilter()`** methods or through the **`Grid.Lite.filterExpressions`** property.

The **`filter()`** method accepts either a single expression or an array of filter expression and then filters the grid data
based on those expressions.

```typescript
// Single
grid.filter({ key: 'firstName', condition: 'contains', searchTerm: 'George' });

// Multiple
grid.filter([
  { key: 'firstName', condition: 'startsWith', searchTerm: 'a' },
  { key: 'firstName', condition: 'startsWith' searchTerm: 'g', criteria: 'or' },
]);
```

The **`clearFilter()`** method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.

```typescript
// Clear the filter state for the `age` column.
grid.clearFilter('age');

// Clear the filter state of the grid.
grid.clearFilter();
```

## Initial filter state

The **`filterExpressions`** property is very similar in behavior to the **`filter()`** method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the {GridLiteTitle} component is first rendered.

<!-- React, WebComponents -->

For example here is a Lit-based sample:

```typescript
{
  filterState: FilterExpression<User>[] = [
    { key: 'age', condition: 'greaterThan', searchTerm: 21 },
    /** unary condition so `searchTerm` is not required */
    { key: 'active', condition: 'true' },
  ];

  render() {
    return html`<igc-grid-lite .filterExpressions=${filterState}></igc-grid-lite>`
  }
}
```

<!-- End: React, WebComponents -->

It can be used to get the current filter state of the component and do additional processing depending on another state in your application.

<!-- React, WebComponents -->

```typescript
const state = grid.filterExpressions;
// Save the current filter state
saveUserFilterState(state);
```

<!-- End: React, WebComponents -->

## Events

When a filter operation is performed through the UI, the component emits a custom **`filtering`** event. The **`detail`** property is the sort expression which will be applied by the {GridLiteTitle}. The event is cancellable and if cancelled will prevent the current filter operation.

After the grid applies the new filter state, a **`filtered`** event is emitted. It contains the filter state for the column which was the target of the operation and it is not cancellable.

<!-- React, WebComponents -->
```typescript
grid.addEventListener('filtering', (event: CustomEvent<GridLiteFilteringEvent<T>>) => { ... });
grid.addEventListener('filtered', (event: CustomEvent<GridLiteFilteredEvent<T>>) => { ... });
```
<!-- End: React, WebComponents -->

`sample="/{GridLiteSample}/filtering-config-events", height="600", alt="{Platform} {GridLiteTitle} Filtering Config Events"`

## Remote filter operations

In cases where filtering must be done remotely or you want to save the current state/data to a server somewhere,
the {GridLiteTitle} exposes a hook where you can implement and customize this behavior.

Using the **`dataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a filter operation is about to run. The callback is passed a **`DataPipelineParams`** object.

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
  grid: GridLite<T>;
  /**
   * The type of data operation being performed.
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { filter: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

<!-- End: React, WebComponents -->

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote filter operation, reflecting the REST endpoint generated based on the filter state of the component.

`sample="/{GridLiteSample}/filtering-config-remote", height="600", alt="{Platform} {GridLiteTitle} Filtering Config Remote"`


<!-- TODO ## API References
## API References

* `{ComponentName}`
* `Column`
-->

## Additional Resources

* [Column Configuration](column-configuration.md)
* [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

* [{GridLiteTitle}  **GitHub**]({GithubLinkLite})

---
title: {Platform} {GridLiteTitle} Filtering - {ProductName}
_description: Filter operations, filter customization and remote filtering for {GridLiteTitle}. See demos & examples!
_keywords: filtering, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: mit
---

# {Platform} {GridLiteTitle} Filter operations

<!-- React, WebComponents -->
The {GridLiteTitle} supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the **`filter`** property of the column configuration object.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The {GridLiteTitle} supports filtering operations on its data source. Data filtering is controlled on per-column level, allowing you to have filterable and non-filterable columns. By default, filtering on a column is disabled unless explicitly configured with the **`Filter`** property of the column configuration object.
<!-- end: Blazor -->

```typescript
{
  key: 'price',
  filter: true
}
```

```razor
new IgbColumnConfiguration
{
    Key = "LastName",
    Filter = true
}
```

<!-- React, WebComponents -->
The **`filter`** property can be either a simple boolean or a
**`ColumnFilterConfiguration`** object which exposes additional configuration options:
<!-- end: React, WebComponents -->
<!-- Blazor -->
The **`Filter`** property can be either a simple boolean or a
**`IgbColumnFilterConfiguration`** object which exposes additional configuration options:
<!-- end: Blazor -->

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

```razor
new IgbColumnConfiguration
{
    Key = "FirstName",
    Filter = new IgbColumnFilterConfiguration
    {
        /**
        * For string data types controls whether the filter operations for this column will be case sensitive.
        * By default, filter operations for string types are case insensitive.
        */
        CaseSensitive = true
    }
},
```

`sample="/{GridLiteSample}/filtering-config", height="600", alt="{Platform} {GridLiteTitle} Filtering Config"`

## Filter model

<!-- React, WebComponents -->
The building blocks for filter operations in the grid is the **`FilterExpression`** which has the following structure:
<!-- end: React, WebComponents -->
<!-- Blazor -->
The building blocks for filter operations in the grid is the **`IgbGridLiteFilterExpression`** which has the following structure:
<!-- end: Blazor -->

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

```razor
public class IgbGridLiteFilterExpression
{
    /// <summary>
    /// The target column for the filter operation.
    /// </summary>
    [JsonPropertyName("key")]
    public string Key { get; set; }

    /// <summary>
    /// The filter condition to apply. Can be a condition name (string) or a FilterOperation // TODO
    /// </summary>
    [JsonPropertyName("condition")]
    public object Condition { get; set; }

    /// <summary>
    /// The filtering value used in the filter condition function.
    /// Optional for unary conditions.
    /// </summary>
    [JsonPropertyName("searchTerm")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public object SearchTerm { get; set; }

    /// <summary>
    /// Dictates how this expression should resolve in the filter operation.
    /// 'and' - the record must pass all the conditions.
    /// 'or' - the record must pass at least one condition.
    /// </summary>
    [JsonPropertyName("criteria")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string Criteria { get; set; } // "and" or "or"

    /// <summary>
    /// Whether the filter operation should be case sensitive.
    /// If not provided, the value is resolved based on the column filter configuration.
    /// </summary>
    [JsonPropertyName("caseSensitive")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? CaseSensitive { get; set; }
}
```

## Filter API

<!-- React, WebComponents -->
The {GridLiteTitle} exposes two main approaches for applying filter operations from its API. Either through the **`GridLite.filter()`**/**`GridLite.clearFilter()`** methods or through the **`Grid.Lite.filterExpressions`** property.

The **`filter()`** method accepts either a single expression or an array of filter expression and then filters the grid data
based on those expressions.
<!-- end: React, WebComponents -->
<!-- Blazor -->
The {GridLiteTitle} exposes two main approaches for applying filter operations from its API. Either through the **`GridLite.Filter()`**/**`GridLite.ClearFilter()`** methods or through the **`Grid.Lite.FilterExpressions`** property.

The **`Filter()`** method accepts either a single expression or an array of filter expression and then filters the grid data
based on those expressions.
<!-- end: Blazor -->

```typescript
// Single
grid.filter({ key: 'firstName', condition: 'contains', searchTerm: 'George' });

// Multiple
grid.filter([
  { key: 'firstName', condition: 'startsWith', searchTerm: 'a' },
  { key: 'firstName', condition: 'startsWith' searchTerm: 'g', criteria: 'or' },
]);
```

```razor
// Single
await grid.Filter(new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "contains", SearchTerm = "George" });

// Multiple
await grid.Filter(new IgbGridLiteFilterExpression[]
{
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "a" },
    new IgbGridLiteFilterExpression { Key = "FirstName", Condition = "startsWith", SearchTerm = "g", Criteria = "or" }
});
```
<!-- React, WebComponents -->
The **`clearFilter()`** method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.
<!-- end: React, WebComponents -->
<!-- Blazor -->
The **`ClearFilter()`** method, as the name implies, clears the filter state of a single column or the whole grid component, depending on the passed arguments.
<!-- end: Blazor -->

```typescript
// Clear the filter state for the `age` column.
grid.clearFilter('age');

// Clear the filter state of the grid.
grid.clearFilter();
```

```razor
// Clear the filter state for the `Age` column.
grid.ClearFilter("Age");

// Clear the filter state of the grid.
grid.ClearFilter();
```

## Initial filter state

<!-- Blazor -->
The **`FilterExpressions`** property is very similar in behavior to the **`Filter()`** method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the {GridLiteTitle} component is first rendered.

For example: 
```razor
private IgbGridLiteFilterExpression[] filterState = new[]
{
    new IgbGridLiteFilterExpression { Key = "Age", Condition = "greaterThan", SearchTerm = 21 },
    // unary condition so `SearchTerm` is not required
    new IgbGridLiteFilterExpression { Key = "Active", Condition = "true" }
};

<IgbGridLite FilterExpressions="filterState" />
```
<!-- end: Blazor -->

<!-- React, WebComponents -->
The **`filterExpressions`** property is very similar in behavior to the **`filter()`** method call. It exposes a declarative way to control filter state in the grid, but the most useful property is the ability to set initial filter state when the {GridLiteTitle} component is first rendered.


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

```typescript
const state = grid.filterExpressions;
// Save the current filter state
saveUserFilterState(state);
```

```razor
var state = grid.FilterExpressions;
// Save the current filter state
SaveUserFilterState(state);
```

## Events
<!-- React, WebComponents -->
When a filter operation is performed through the UI, the component emits a custom **`filtering`** event. The **`detail`** property is the sort expression which will be applied by the {GridLiteTitle}. The event is cancellable and if cancelled will prevent the current filter operation.

After the grid applies the new filter state, a **`filtered`** event is emitted. It contains the filter state for the column which was the target of the operation and it is not cancellable.
<!-- end: React, WebComponents -->

<!-- Blazor -->
When a filter operation is performed through the UI, the component raises **`Filtering`** and **`Filtered`** events. The **`Filtering`** event is cancellable and if cancelled will prevent the current filter operation.

After the grid applies the new filter state, a **`Filtered`** event is raised. It contains the filter state for the column which was the target of the operation and it is not cancellable.

<!-- end: Blazor -->

```typescript
grid.addEventListener('filtering', (event: CustomEvent<GridLiteFilteringEvent<T>>) => { ... });
grid.addEventListener('filtered', (event: CustomEvent<GridLiteFilteredEvent<T>>) => { ... });
```

```razor
<IgbGridLite Filtering="OnFiltering" Filtered="OnFiltered" />

@code {
    private void OnFiltering(IgbGridLiteFilteringEventArgs args)
    {
        // Handle filtering event
    }

    private void OnFiltered(IgbGridLiteFilteredEventArgs args)
    {
        // Handle filtered event
    }
}
```

`sample="/{GridLiteSample}/filtering-config-events", height="600", alt="{Platform} {GridLiteTitle} Filtering Config Events"`

<!-- React, WebComponents -->
## Remote filter operations

In cases where filtering must be done remotely or you want to save the current state/data to a server somewhere,
the {GridLiteTitle} exposes a hook where you can implement and customize this behavior.
<!-- React, WebComponents -->
Using the **`dataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a filter operation is about to run. The callback is passed a **`DataPipelineParams`** object.

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

<!-- Blazor -->
Using the **`DataPipelineConfiguration`** property, you can provide a custom hook which will be called each time a filter operation is about to run. The callback is passed a **`DataPipelineParams`** object.

```razor
public class DataPipelineParams
{
    /// <summary>
    /// The current data state of the grid.
    /// </summary>
    [JsonPropertyName("data")]
    public object[] Data { get; set; }

    /// <summary>
    /// The type of data operation being performed.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; set; } // "sort" or "filter"
}
```

```razor
grid.DataPipelineConfiguration = new DataPipelineConfiguration
{
    Filter = async (params) => 
    {
        // Custom filter logic
        return await Task.FromResult(params.Data);
    }
};
```
<!-- end: Blazor -->


The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote filter operation, reflecting the REST endpoint generated based on the filter state of the component.

`sample="/{GridLiteSample}/filtering-config-remote", height="600", alt="{Platform} {GridLiteTitle} Filtering Config Remote"`

<!-- end: React, WebComponents -->

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

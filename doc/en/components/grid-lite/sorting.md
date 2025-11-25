---
title: {Platform} {GridLiteTitle} Sorting  | {ProductName} | MIT license
_description: Try {GridLiteTitle} with sort operations, sort customization, and remote sorting for {Platform} {GridLiteTitle}. See demos and examples and build your next app.
_keywords: sorting, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Sort operations
<!-- React, WebComponents -->
The {GridLiteTitle} supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the `sort` property of the column configuration object.
<!-- end: React, WebComponents -->
<!-- Blazor -->
The {GridLiteTitle} supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the `Sort` property of the column configuration object.
<!-- end: Blazor -->

```typescript
{
  key: 'price',
  sort: true
}
```

```razor
new IgbColumnConfiguration
{
    Key = "Price",
    Sort = true
}
```

<!-- React, WebComponents -->
The `sort` property can be either a simple boolean or a `ColumnSortConfiguration` object which exposes additional configuration options:
<!-- end: React, WebComponents -->
<!-- Blazor -->
The `Sort` property can be either a simple boolean or a `IgbColumnSortConfiguration` object which exposes additional configuration options:
<!-- end: Blazor -->

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

```razor
new IgbColumnConfiguration
{
    Key = "Name",
    Sort = new IgbColumnSortConfiguration
    {
        /**
        * For string data types controls whether the sort operations for this column will be case sensitive.
        * By default, sort operations for string types are case insensitive.
        */
        CaseSensitive = true,
        /**
        * Custom comparer function which will be used for sort operations for this column.
        *
        * In the following sample, we compare the `Name` values based on their length.
        */
        Comparer = (a, b) => ((string)a).Length - ((string)b).Length
    }
}
```


`sample="/{GridLiteSample}/sort-config-sample", height="600", alt="{Platform} {GridLiteTitle} Sorting Config"`

## Single and multi-sorting
<!-- React, WebComponents -->
The {GridLiteTitle} supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the `sortConfiguration` property of the grid.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The {GridLiteTitle} supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the `SortConfiguration` property of the grid.
<!-- end: Blazor -->

```typescript
grid.sortConfiguration = { multiple: false, triState: true };
```

```razor
grid.SortConfiguration = new IgbGridLiteSortConfiguration { Multiple = false, TriState = true };
```


>[!NOTE]
>The single/multi-column sorting behavior controls how end-users interact with the {GridLiteTitle}. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-state sorting
<!-- React, WebComponents -->
Additionally, the {GridLiteTitle} supports tri-state sorting and it is enabled by default. Depending on the configured `triState`
value for the grid `sortConfiguration` property, end-users will cycle through the following states,
<!-- end: React, WebComponents -->
<!-- Blazor -->
Additionally, the {GridLiteTitle} supports tri-state sorting and it is enabled by default. Depending on the configured `TriState`
value for the grid `SortConfiguration` property, end-users will cycle through the following states,
<!-- end: Blazor -->


- **Tri-State Enabled**

  - ```typescript
    ascending -> descending -> none -> ascending
    ```

- **Tri-State Disabled**

  - ```typescript
    ascending -> descending -> ascending
    ```

<!-- React, WebComponents -->
where `none` is the initial state of the data, that is to say with no sorting applied by the grid.
<!-- end: React, WebComponents -->
<!-- Blazor -->
where `None` is the initial state of the data, that is to say with no sorting applied by the grid.
<!-- end: Blazor -->

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

<!-- React, WebComponents -->
The following sample shows the grid `sortConfiguration` combinations and how they reflect in the grid.
<!-- end: React, WebComponents -->
<!-- Blazor -->
The following sample shows the grid `SortConfiguration` combinations and how they reflect in the grid.
<!-- end: Blazor -->

`sample="/{GridLiteSample}/sorting-config-grid", height="600", alt="{Platform} {GridLiteTitle} Sorting Config Grid"`

## Sort Model

<!-- React, WebComponents -->
The building block for sort operations in the {GridLiteTitle} is the `SortExpression` which has the following properties:
<!-- end: React, WebComponents -->
<!-- Blazor -->
The building block for sort operations in the {GridLiteTitle} is the `SortExpression` which has the following properties:
<!-- end: Blazor -->


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

```razor
public class IgbGridLiteSortExpression
{
    /// <summary>
    /// The target column.
    /// </summary>
    [JsonPropertyName("key")]
    public string Key { get; set; }

    /// <summary>
    /// Sort direction for this operation.
    /// </summary>
    [JsonPropertyName("direction")]
    public GridLiteSortingDirection Direction { get; set; }

    /// <summary>
    /// Whether the sort operation should be case sensitive.
    /// If not provided, the value is resolved based on the column sort configuration.
    /// </summary>
    [JsonPropertyName("caseSensitive")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? CaseSensitive { get; set; }

    /// <summary>
    /// Custom comparer function for this operation.
    /// Note: This is not directly supported in Blazor and would need JavaScript interop.
    /// </summary>
    [JsonIgnore]
    internal Func<object, object, int> Comparer { get; set; }
}
```

The grid consumes these expressions for its sort API methods and configuration and produces them for events and its sorting state when
an end-user interacts with the component. See below for additional information.

## Sort API

<!-- React, WebComponents -->
The {GridLiteTitle} exposes two main approaches for applying sort operations from its API. Either through the `GridLite.sort()`/`GridLite.clearSort()` methods or through the `GridLite.sortExpressions` property.

The `sort()` method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The {GridLiteTitle} exposes two main approaches for applying sort operations from its API. Either through the `GridLite.Sort()`/`GridLite.ClearSort()` methods or through the `GridLite.SortExpressions` property.

The `Sort()` method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.
<!-- end: Blazor -->

```typescript
// Single
grid.sort({ key: 'price', direction: 'descending' });

// Multiple
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```

```razor
// Single
await grid.Sort(new IgbGridLiteSortExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending });

// Multiple
await grid.Sort(new IgbGridLiteSortExpression[]
{
    new IgbGridLiteSortExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortExpression { Key = "Name", Direction = GridLiteSortingDirection.Descending }
});
```

<!-- React, WebComponents -->
The `clearSort()` method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.
<!-- end: React, WebComponents -->
<!-- Blazor -->
The `ClearSort()` method, as the name implies, clears the sort state of a single column or the whole grid component, depending
on the passed arguments.
<!-- end: Blazor -->

```typescript
// Clear the sort state for the `price` column.
grid.clearSort('price');

// Clear the sort state of the grid.
grid.clearSort();
```

```razor
// Clear the sort state for the `Price` column.
await grid.ClearSort("Price");

// Clear the sort state of the grid.
await grid.ClearSort();
```

### Initial Sorting State

<!-- React, WebComponents -->
The `sortExpressions` property is very similar in behavior to the `sort()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the {GridLiteTitle} is first rendered.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The `SortExpressions` property is very similar in behavior to the `Sort()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the {GridLiteTitle} is first rendered.
<!-- end: Blazor -->

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
<!-- end: React, WebComponents -->

<!-- Blazor -->
For example:

```razor
private IgbGridLiteSortExpression[] sortState = new[]
{
    new IgbGridLiteSortExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortExpression { Key = "Name", Direction = GridLiteSortingDirection.Ascending, CaseSensitive = true }
};

<IgbGridLite SortExpressions="sortState" />
```
<!-- end: Blazor -->

It can be used to get the current sort state of the component and do additional processing depending on another state in your application.

```typescript
const state = grid.sortExpressions;
// Save the current sort state
saveUserSortState(state);
```

```razor
var state = grid.SortExpressions;
// Save the current sort state
SaveUserSortState(state);
```

## Events

<!-- React, WebComponents -->
When a sorting operation is performed through the UI, the component emits a custom `sorting` event. The `detail` property is the sort expression which will be applied by the {GridLiteTitle}. The event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a `sorted` event is emitted. It contains the expression which was used in the last sort operation and it is not cancellable.

```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortExpression<T>>) => { ... });
```
<!-- end: React, WebComponents -->

<!-- Blazor -->
When a sorting operation is performed through the UI, the component raises `Sorting` and `Sorted` events. The `Sorting` event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a `Sorted` event is raised. It contains the expression which was used in the last sort operation and it is not cancellable.

```razor
<IgbGridLite Sorting="OnSorting" Sorted="OnSorted" />

@code {
    private void OnSorting(IgbGridLiteSortingEventArgs args)
    {
        // Handle sorting event
    }

    private void OnSorted(IgbGridLiteSortedEventArgs args)
    {
        // Handle sorted event
    }
}
```
<!-- end: Blazor -->

In the following sample, when you try to sort the **Name** and **Rating** columns, the operation will be cancelled. Watch the event log below to see it in action.

`sample="/{GridLiteSample}/sort-config-events", height="600", alt="{Platform} {GridLiteTitle} Sorting Config Events"`

<!-- React, WebComponents -->
## Remote sort operations

In cases where sorting must be done remotely or you want to save the current state/data to a server somewhere, the {GridLiteTitle} exposes a hook where you can implement and customize this behavior.

<!-- React, WebComponents -->
Using the `dataPipelineConfiguration` property, you can provide a custom hook which will be called each time a sort operation is about to run. The callback is passed a `DataPipelineParams` object.

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

<!-- Blazor -->
Using the `DataPipelineConfiguration` property, you can provide a custom hook which will be called each time a sort operation is about to run. The callback is passed a `DataPipelineParams` object.

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
grid.DataPipelineConfiguration = new DataPipelineParams
{
    Sort = async (params) =>
    {
        // Custom sort logic
        return await Task.FromResult(params.Data);
    }
};
```
<!-- end: Blazor -->

The custom callback can be async as the grid will wait for it until it resolves.

The following example mocks remote sorting operation, reflecting the REST endpoint generated based on the sort state of the component.

`sample="/{GridLiteSample}/sort-config-pipeline", height="600", alt="{Platform} {GridLiteTitle} Sorting Config Pipeline"`

<!-- end: React, WebComponents -->

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)

Our community is active and always welcoming to new ideas.

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})

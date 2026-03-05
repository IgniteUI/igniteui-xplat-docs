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
The {GridLiteTitle} supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the `sortable` property of the column.
<!-- end: React, WebComponents -->
<!-- Blazor -->
The {GridLiteTitle} supports sorting operations on its data source. Data sorting is controlled on per-column level, allowing you to have sortable and non-sortable columns, while the grid itself controls certain sort behaviors. By default, sorting on a column is disabled unless explicitly configured with the `Sortable` property of the column.
<!-- end: Blazor -->

<!-- WebComponents -->
```html
<igc-grid-lite .data=${data}>
  <igc-grid-lite-column field="price" sortable></igc-grid-lite-column>
</igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn field="price" sortable></IgrGridLiteColumn>
  </IgrGridLite>
);
```

```razor
<IgbGridLite Data="@data">
    <IgbGridLiteColumn Field="Price" Sortable="true" />
</IgbGridLite>
```

<!-- WebComponents -->
You can also control whether the sort operations for string columns should be case sensitive by using the `sortingCaseSensitive` property or `sorting-case-sensitive` attribute.
<!-- end: WebComponents -->
<!-- React -->
You can also control whether the sort operations for string columns should be case sensitive by using the `sortingCaseSensitive` property.
<!-- end: React -->

<!-- WebComponents -->
```html
<igc-grid-lite-column 
  field="name" 
  sortable
  sorting-case-sensitive
></igc-grid-lite-column>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn 
      field="name" 
      sortable
      sortingCaseSensitive
    ></IgrGridLiteColumn>
  </IgrGridLite>
);
```

<!-- WebComponents -->
For custom comparison logic, set the `sortConfiguration` property with a `comparer` function:

```typescript
const column = document.querySelector('igc-grid-lite-column[field="name"]');
column.sortConfiguration = {
  /**
   * Custom comparer function which will be used for sort operations for this column.
   * In the following sample, we compare the `name` values based on their length.
   */
  comparer: (a, b) => a.length - b.length
};
```
<!-- end: WebComponents -->
<!-- React -->
For custom comparison logic, set the `sortConfiguration` property with a `comparer` function:

```tsx
/**
 * Custom comparer function which will be used for sort operations for this column.
 * In the following sample, we compare the `name` values based on their length.
 */
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn 
      field="name" 
      sortable
      sortConfiguration={{
        comparer: (a: string, b: string) => a.length - b.length
      }}
    ></IgrGridLiteColumn>
  </IgrGridLite>
);
```
<!-- end: React -->

<!-- Blazor -->
You can also control whether the sort operations for string columns should be case sensitive by using the `SortingCaseSensitive` parameter:

```razor
<IgbGridLiteColumn 
    Field="Name" 
    Sortable="true"
    SortingCaseSensitive="true" />
```
<!-- end: Blazor -->


`sample="/{GridLiteSample}/sort-config-sample", height="600", alt="{Platform} {GridLiteTitle} Sorting Config"`

## Single and multi-sorting
<!-- React, WebComponents -->
The {GridLiteTitle} supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the `sortingOptions` property of the grid. The `mode` property accepts `'single'` or `'multiple'` as values.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The {GridLiteTitle} supports both single and multi-column sorting. Multi-column is enabled by default and can be configured through the `SortingOptions` property of the grid. The `Mode` property accepts `GridLiteSortingMode.Single` or `GridLiteSortingMode.Multiple` as values.
<!-- end: Blazor -->

<!-- WebComponents -->
```typescript
// Enable single-column sorting
grid.sortingOptions = { mode: 'single' };
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
// Enable single-column sorting
gridRef.current.sortingOptions = { mode: 'single' };

// or directly in the JSX
<IgrGridLite sortingOptions={{ mode: 'single' }}/>
```
<!-- end: React -->


```razor
// Enable single-column sorting
grid.SortingOptions = new IgbGridLiteSortingOptions { Mode = GridLiteSortingMode.Single };
```


>[!NOTE]
>The single/multi-column sorting behavior controls how end-users interact with the {GridLiteTitle}. Sorting through the API with multiple expression will still work when single sorting is enabled.

### Tri-state sorting
The {GridLiteTitle} supports tri-state sorting and it is always enabled. End-users will cycle through the following direction states when clicking on sortable column headers:


<!-- React, WebComponents -->
```
ascending -> descending -> none -> ascending
```
where `none` is the initial state of the data, that is to say with no sorting applied by the grid.
<!-- end: React, WebComponents -->
<!-- Blazor -->
```
Ascending -> Descending -> None -> Ascending
```
where `None` is the initial state of the data, that is to say with no sorting applied by the grid.
<!-- end: Blazor -->

### Sorting Indicators

When multi-column sort is enabled, the column headers will display a sorting indicator, which is a number representing the order in which the sorting operations were applied.

<!-- React, WebComponents -->
The following sample shows the grid `sortingOptions` property and how it controls the grid sorting behavior.
<!-- end: React, WebComponents -->
<!-- Blazor -->
The following sample shows the grid `SortingOptions` property and how it controls the grid sorting behavior.
<!-- end: Blazor -->

`sample="/{GridLiteSample}/sort-config-grid", height="600", alt="{Platform} {GridLiteTitle} Sorting Config Grid"`

## Sort Model

<!-- React, WebComponents -->
The building block for sort operations in the {GridLiteTitle} is the `SortingExpression<T>` which has the following properties:
<!-- end: React, WebComponents -->
<!-- Blazor -->
The building block for sort operations in the {GridLiteTitle} is the `IgbGridLiteSortingExpression` which has the following properties:
<!-- end: Blazor -->


```typescript
type SortingExpression<T> = {
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
public class IgbGridLiteSortingExpression
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
}
```

The grid consumes these expressions for its sort API methods and configuration and produces them for events and its sorting state when
an end-user interacts with the component. See below for additional information.

## Sort API

<!-- React, WebComponents -->
The {GridLiteTitle} exposes two main approaches for applying sort operations from its API. Either through the `sort()`/`clearSort()` methods or through the `sortingExpressions` property.

The `sort()` method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The {GridLiteTitle} exposes two main approaches for applying sort operations from its API. Either through the `Sort()`/`ClearSort()` methods or through the `SortingExpressions` property.

The `Sort()` method accepts either a single expression or an array of sort expression and then sorts the grid data based on those expressions.
<!-- end: Blazor -->

<!-- WebComponents -->
```typescript
// Single
grid.sort({ key: 'price', direction: 'descending' });

// Multiple
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```
<!-- end: WebComponents -->
<!-- React -->
```typescript
// Single
gridRef.current.sort({ key: 'price', direction: 'descending' });

// Multiple
gridRef.current.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```
<!-- end: React -->


```razor
// Single
await grid.Sort(new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending });

// Multiple
await grid.Sort(new IgbGridLiteSortingExpression[]
{
    new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortingExpression { Key = "Name", Direction = GridLiteSortingDirection.Descending }
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

<!-- WebComponents -->
```typescript
// Clear the sort state for the `price` column.
grid.clearSort('price');

// Clear the sort state of the grid.
grid.clearSort();
```
<!-- end: WebComponents -->
<!-- React -->
```typescript
// Clear the sort state for the `price` column.
gridRef.current.clearSort('price');

// Clear the sort state of the grid.
gridRef.current.clearSort();
```
<!-- end: React -->

```razor
// Clear the sort state for the `Price` column.
await grid.ClearSort("Price");

// Clear the sort state of the grid.
await grid.ClearSort();
```

### Initial Sorting State

<!-- React, WebComponents -->
The `sortingExpressions` property is very similar in behavior to the `sort()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the {GridLiteTitle} is first rendered.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The `SortingExpressions` property is very similar in behavior to the `Sort()` method call. It exposes a declarative way to control
sort state in the grid, but the most useful property is the ability to set initial sort state when the {GridLiteTitle} is first rendered.
<!-- end: Blazor -->

<!-- WebComponents -->
For example here is a Lit-based sample:

```typescript
{
  sortState: SortingExpression<Products>[] = [
    { key: 'price', direction: 'descending' },
    { key: 'name', direction: 'ascending', caseSensitive: true },
  ];

  render() {
    return html`<igc-grid-lite .sortingExpressions=${sortState}></igc-grid-lite>`
  }
}
```
<!-- end: WebComponents -->
<!-- React -->
Here is an example:

```tsx
const sortState: SortingExpression<Products>[] = [
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'ascending', caseSensitive: true },
];

return (
  <IgrGridLite sortingExpressions={sortState} />
);
```
<!-- end: React -->

<!-- Blazor -->
For example:

```razor
private IgbGridLiteSortingExpression[] sortState = new[]
{
    new IgbGridLiteSortingExpression { Key = "Price", Direction = GridLiteSortingDirection.Descending },
    new IgbGridLiteSortingExpression { Key = "Name", Direction = GridLiteSortingDirection.Ascending, CaseSensitive = true }
};

<IgbGridLite SortingExpressions="sortState" />
```
<!-- end: Blazor -->

It can be used to get the current sort state of the component and do additional processing depending on another state in your application.

<!-- WebComponents -->
```typescript
const state = grid.sortingExpressions;
// Save the current sort state
saveUserSortState(state);
```
<!-- end: WebComponents -->
<!-- React -->
```typescript
const state = gridRef.current.sortingExpressions;
// Save the current sort state
saveUserSortState(state);
```
<!-- end: React -->

```razor
var state = grid.SortingExpressions;
// Save the current sort state
SaveUserSortState(state);
```

## Events

<!-- React, WebComponents -->
When a sorting operation is performed through the UI, the component emits a custom `sorting` event. The `detail` property is the sort expression which will be applied by the {GridLiteTitle}. The event is cancellable and if cancelled will stop the current sort operation.

After the grid applies the new sorting state, a `sorted` event is emitted. It contains the expression which was used in the last sort operation and it is not cancellable.

<!-- WebComponents -->
```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortingExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortingExpression<T>>) => { ... });
```
<!-- end: WebComponents -->
<!-- React -->
```typescript
gridRef.current.addEventListener('sorting', (event: CustomEvent<SortingExpression<T>>) => { ... });
gridRef.current.addEventListener('sorted', (event: CustomEvent<SortingExpression<T>>) => { ... });
```
<!-- end: React -->

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
<!-- WebComponents -->
```typescript
grid.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```
<!-- end: WebComponents -->
<!-- React -->
```typescript
gridRef.current.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```
<!-- end: React -->
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

---
title: {Platform} {GridLiteTitle} Data Binding - {ProductName} | MIT license
_description: Data binding for {GridLiteTitle}. Create apps with our open-source {Platform} {GridLiteTitle}. It’s lightweight and packed with essential features. Try now.
_keywords: data binding, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# {Platform} {GridLiteTitle} Data Binding

<!-- React, WebComponents -->
The {GridLiteTitle} accepts an array of plain objects as a data source. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.
<!-- end: React, WebComponents -->

<!-- Blazor -->
The {GridLiteTitle} accepts a `List<T>` as its data source, where `T` is representing your model. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.
<!-- end: Blazor -->

When applying data transformations, such as sorting and filtering, the grid does not modify the original data reference. That is to say, data transformations will not be reflected in the original source. The grid does not track changes to the objects inside the data array, so direct modification of the data objects will not be reflected.

## Change the Data Source at Runtime

The component supports changing its data source at runtime. If the new source has a different "shape" than the previous one make sure to update your column configuration as well.

<!-- WebComponents -->
```typescript
grid.data = [...{
  /** records follow */
}];
```

```html
<igc-grid-lite>
    <!-- Update column configuration, add or remove columns as needed to represent the new data. -->
    <igc-grid-lite-column field="id"></igc-grid-lite-column>
</igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
this.gridRef.current.data = [...{
  /** records follow */
}];

return (
    <igc-grid-lite data={data}>
        {/* Update column configuration, add or remove columns as needed to represent the new data. */}
        <igc-grid-lite-column field="id"></igc-grid-lite-column>
    </igc-grid-lite>
);
```

```razor
<IgbGridLite Data="data">
    <!-- Update column configuration, add or remove columns as needed to represent the new data. -->
    <IgbGridLiteColumn Field="Id" />
</IgbGridLite>

@code {
    this.data = new List<T>
    {
        // records follow
    };
}
```

<!-- React, WebComponents -->
If the grid has `autoGenerate` enabled, it will "_infer_" the new column configuration automatically when the data changes.
<!-- end: React, WebComponents -->

<!-- Blazor -->
If the grid has `AutoGenerate` enabled, it will "_infer_" the new column configuration automatically when the data changes.
<!-- end: Blazor -->

<!-- React, WebComponents -->
```typescript
grid.autoGenerate = true;

/** After the new binding the grid will infer the column collection from the bound data. */
grid.data = [];
```
<!-- end: React, WebComponents -->

<!-- Blazor -->
```razor
<IgbGridLite Data="data" AutoGenerate="true" />

@code {
    // After the new binding the grid will infer the column collection from the bound data.
    this.data = new List<T>();
}
```
<!-- end: Blazor -->
<!-- React, WebComponents -->
>[!NOTE]
>The sort/filter states of the {GridLiteTitle} are kept when changing the data source in this manner.
Usually you will want to reset them by calling either `clearSort()` and/or `clearFilter()`.
<!-- end: React, WebComponents -->

<!-- Blazor -->
>[!NOTE]
>The sort/filter states of the {GridLiteTitle} are kept when changing the data source in this manner.
Usually you will want to reset them by calling either `ClearSort()` and/or `ClearFilter()`.
<!-- end: Blazor -->

In the sample below, the grid has column auto-generation enabled. When you click on the switch data button,
the column collection is reset, and a new data source is bound to the grid.

`sample="/{GridLiteSample}/data-binding", height="600", alt="{Platform} {GridLiteTitle} Data Binding"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})

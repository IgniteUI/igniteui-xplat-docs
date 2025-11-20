---
title: {Platform} {GridLiteTitle} Data Binding - {ProductName}
_description: Data binding for {GridLiteTitle}. See demos & examples!
_keywords: data binding, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: mit
---

# {Platform} {GridLiteTitle} Data Binding

The {GridLiteTitle} accepts and array of plain objects as a data source. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.

When applying data transformations, such as sorting and filtering, the grid does not modify the original data reference. That is to say, data transformations will not be reflected in the original source. The grid does not track changes to the objects inside the data array, so direct modification of the data objects will not be reflected.

## Change the data source at runtime

The component supports changing its data source at runtime. If the new source has a different "shape" than the previous one make sure to update your column configuration as well.

```typescript
grid.data = [...{
  /** records follow */
}];

// Update the column configuration to represent the new data.
grid.columns = [...];
```

If the grid has **`autoGenerate`** enabled, it will "_infer_" the new column configuration only if the old one is reset.

```typescript
grid.autoGenerate = true;

/** Reset the previous column collection */
grid.columns = [];

/** After the new binding the grid will infer the column collection from the bound data. */
grid.data = [];
```

>[!NOTE]
>The sort/filter states of the {GridLiteTitle} are kept when changing the data source in this manner.
Usually you will want to reset them by calling either **`clearSort()`** and/or **`clearFilter()`**.

In the sample below, the grid has column auto-generation enabled. When you click on the switch data button,
the column collection is reset, and a new data source is bound to the grid.

`sample="/{GridLiteSample}/data-binding", height="600", alt="{Platform} {GridLiteTitle} Data Binding"`

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

* [Column Configuration](column-configuration.md)
* [Sorting](sorting.md)
* [Filtering](filtering.md)
* [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

* [{GridLiteTitle}  **GitHub**]({GithubLinkLite})

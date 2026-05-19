---
title: {Platform} {GridLiteTitle} Cell Template | {ProductName} | MIT license
_description: Grid Lite column configuration and column properties. Try our open-source {Platform} {GridLiteTitle} - lightweight and packed with essential features.
_keywords: column configuration, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Column Configuration
<!-- React, WebComponents -->

Columns are defined declaratively using column child components within the grid. The `field` property is the only required for a column, as it serves as the column identifier. It is also the property that is used to map and render the relevant data in the grid rows.

<!-- end: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite .data=${data}>
  <igc-grid-lite-column
    field="account"
    header="Account Number"
    ...
  ></igc-grid-lite-column>
  <!-- Additional columns follow -->
</igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn
      field="account"
      header="Account Number"
      ...
    ></IgrGridLiteColumn>
    {/* Additional columns follow */}
  </IgrGridLite>
);
```

<!-- Blazor -->

Columns are defined declaratively using `<IgbGridLiteColumn>` child elements within the grid. The `Field` property is the only required for a column, as it serves as the column identifier. It is also the property that is used to map and render the relevant data in the grid rows.

```razor
<IgbGridLite Data="@products">
    <IgbGridLiteColumn 
        Field="Name"
        Header="Product Name"
        DataType="GridLiteColumnDataType.String" />
    <!-- Additional columns follow -->
</IgbGridLite>
```

## Configuration Based on the Data Source

The grid supports inferring the column configuration based on the provided data source when `AutoGenerate` is set to true. It tries to infer the appropriate `Field` and `DataType` properties based on records in the data.

```razor
<IgbGridLite AutoGenerate=true Data="@products"/>
@code {
    private List<ProductInfo> products;

    protected override void OnInitialized()
    {
        products = new List<ProductInfo>
        {
            new ProductInfo { Id = "1", Name = "example", Price = 10 },
            ...
        };
    }

    public class ProductInfo
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
    }
}
```

<!-- end: Blazor -->

<!-- React, WebComponents -->

## Configuration Based on the Data Source

The grid supports inferring the column configuration based on the provided data source when `autoGenerate` is set to true. It tries to infer the appropriate `field` and `dataType` based on records in the data.

```typescript
const data: Record[] = [
  { entryId: "1234", source: "https://example.com", ts: 1373521917579 },
  ...
];
```
<!-- end: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite auto-generate .data=${data}></igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite data={data} autoGenerate={true}></IgrGridLite>
);
```

The previous snippet will result in the grid automatically creating columns equivalent to:

<!-- WebComponents -->
```html
<igc-grid-lite .data=${data}>
  <igc-grid-lite-column field="entryId" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="source" data-type="string"></igc-grid-lite-column>
  <igc-grid-lite-column field="ts" data-type="number"></igc-grid-lite-column>
</igc-grid-lite>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite data={data}>
    <IgrGridLiteColumn field="entryId" dataType="string"></IgrGridLiteColumn>
    <IgrGridLiteColumn field="source" dataType="string"></IgrGridLiteColumn>
    <IgrGridLiteColumn field="ts" dataType="number"></IgrGridLiteColumn>
  </IgrGridLite>
);
```

```razor
<IgbGridLite Data="@products">
    <IgbGridLiteColumn Field="Id" DataType="GridLiteColumnDataType.String" />
    <IgbGridLiteColumn Field="Name" DataType="GridLiteColumnDataType.String" />
    <IgbGridLiteColumn Field="Price" DataType="GridLiteColumnDataType.Number" />
</IgbGridLite>
```

Useful for a quick render of some data without any additional customizations.


## Additional Column Configuration

The column exposes several more properties for customization:

### Column Width

By default, the columns have a width of **minmax(136px, 1fr)** which translates to a minimum width of 136px and maximum of
1 part of the available space in the {GridLiteTitle}. This way the columns are fluid and responsive accommodating for changes
in the grid width.

<!-- React, WebComponents -->
To change the width of column, use the `width` property of the column.
<!-- end: React, WebComponents -->


<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" width="250px"></igc-grid-lite-column>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite>
    <IgrGridLiteColumn field="price" width="250px"></IgrGridLiteColumn>
  </IgrGridLite>
);
```

<!-- Blazor -->
To change the width of column, use the `Width` parameter of the `IgbGridLiteColumn` component.

```razor
<IgbGridLiteColumn Field="Price" Width="250px" />
```

<!-- end: Blazor -->

The property accepts <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages" target="_blank">valid CSS length units</a>.

### Hiding columns
<!-- React, WebComponents -->
Columns can be hidden/shown by setting the `hidden` property of the column.
<!-- end: React, WebComponents -->


<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" hidden></igc-grid-lite-column>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite>
    <IgrGridLiteColumn field="price" hidden></IgrGridLiteColumn>
  </IgrGridLite>
);
```

<!-- Blazor -->
Columns can be hidden/shown by setting the `Hidden` parameter on the `IgbGridLiteColumn` component.

```razor
<IgbGridLiteColumn Field="Price" Hidden="true" />
```

<!-- end: Blazor -->

### Column resize

<!-- React, WebComponents -->
Each column of the {GridLiteTitle} can be configured to be resizable by setting the `resizable` property of the column element.
<!-- end: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" resizable></igc-grid-lite-column>
```
<!-- end: WebComponents -->

```tsx
return (
  <IgrGridLite>
    <IgrGridLiteColumn field="price" resizable></IgrGridLiteColumn>
  </IgrGridLite>
);
```

<!-- Blazor -->
Each column of the {GridLiteTitle} can be configured to be resizable by setting the `Resizable` parameter on the `IgbGridLiteColumn` component.

```razor
<IgbGridLiteColumn Field="Price" Resizable="true" />
```

<!-- end: Blazor -->

If a column is set to be resizable, you can drag the right size of the column header to either increase/decrease  the column width. Double-clicking on the resize area will trigger auto-sizing of the column where it will try set its width according to the largest content of its cells/header.

>[!NOTE]
>Columns with "fluid" widths (fr, %, etc.) can behave erratically when resizing in the grid is performed as they try to accommodate for the new dimensions. Depending on the application scenario, it may be better to use "hard" units so users don't experience layout shifts.

In the sample below you can try out the different column properties and how they reflect in the rendered grid.

`sample="/{GridLiteSample}/column-config-dynamic", height="600", alt="{Platform} {GridLiteTitle} Column Config Dynamic"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Data Binding](binding.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})
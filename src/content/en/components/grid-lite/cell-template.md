---
title: {Platform} {GridLiteTitle} Cell Template | {ProductName} | MIT license
_description: Configure and customize custom Grid Lite cell renderers. Create apps with our open-source {Platform} {GridLiteTitle}. Try now.
_keywords: cell template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Column Cell Template

By default, the grid uses the field of the column to render the value as a string inside the cell. This is fine for basic scenarios, but if you want to customize the rendered output or the final output is a combination of different data fields, you can customize the cell template.

To achieve that, set the `cellTemplate` property of the column.

<!-- WebComponents -->

```typescript
// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column[field="price"]');

// Set the cellTemplate property
column.cellTemplate = (params: IgcCellContext<T, K>) => { return html`<!-- template content -->`};
```

<!-- End: WebComponents -->
<!-- React -->

```tsx
// Define cellTemplate function
const currencyCellTemplate = (ctx: IgrCellContext) => (
  {/* Template contents */}
);

// Set the cellTemplate property
return (
  <IgrGridLite data={data} id="grid-lite">
    <IgrGridLiteColumn
      field="price"
      header="Price"
      dataType="number"
      cellTemplate={currencyCellTemplate}
    ></IgrGridLiteColumn>
  </IgrGridLite>
);
```
<!-- End: React -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Price"></IgbGridLiteColumn>
```

<!-- End: Blazor -->

## Use as a Formatter Function

For the simple scenario where some formatting is required, one can just return the formatted value. Here is an example for displaying a number value to a locale currency format:

<!-- WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column');

// Return the custom currency formatted value
column.cellTemplate = (params) => asCurrency(params.value); // => "€123,456.79"
```

<!-- End: WebComponents -->
<!-- React -->

```tsx
const formatCurrency = new Intl.NumberFormat("en-150", {
  style: "currency",
  currency: "EUR",
});

// Return the custom currency formatted value
const currencyCellTemplate = (ctx: IgrCellContext) => (
  <span>{formatCurrency(ctx.value)}</span>
);
```
<!-- End: React -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Price"></IgbGridLiteColumn>
```

<!-- End: Blazor -->

You can combine values of different fields from the data source as well.
<!-- TODO:
Refer to the API documentation for `GridLiteCellContext` for more information. -->

<!-- WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column');

// Return the custom currency formatted value
column.cellTemplate = ({value, row}) => asCurrency(value * row.data.count);
```
<!-- End: WebComponents -->
<!-- React -->

```tsx
const { format: asCurrency } = new Intl.NumberFormat("en-150", {
  style: "currency",
  currency: "EUR",
});

// Return the custom currency formatted value
const totalCellTemplate = (ctx: IgrCellContext) => (
  <span>{asCurrency(ctx.value * ctx.row.data.count)}</span>
);
```
<!-- End: React -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Price"></IgbGridLiteColumn>
```
<!-- End: Blazor -->

## Custom DOM Templates

Aside from using the `cellTemplate` property as a value formatter, you can also create your own DOM template, which
will be rendered inside the cell container.

<!-- WebComponents -->
We've decided to re-use the functionality provided by <a href="https://lit.dev/" target="_blank">Lit</a> and its
<a href="https://lit.dev/docs/templates/expressions/" target="_blank">tagged template syntax</a> for building declarative
DOM fragments.
<!-- end: WebComponents -->

You can template any standard DOM elements as well as web components from other libraries.

<!-- WebComponents -->

```typescript
// Import the `html` tag function from the Lit package.
import { html } from "lit";

// Get a reference to the column element
const column = document.querySelector('igc-grid-lite-column[field="rating"]');

// Use another web component to represent the `rating` value in the grid
column.cellTemplate = ({ value }) => html`<igc-rating readonly value=${value}></igc-rating>`;
```

<!-- End: WebComponents -->
<!-- React -->

```tsx
// Import defineComponents and an igniteui-webcomponents component such as the rating component.
import { defineComponents, IgcRatingComponent } from "igniteui-webcomponents";

defineComponents(IgcRatingComponent);

// Use the web component as you would normally inside the react cell template
const satisfactionCellTemplate = (ctx: IgrCellContext) => (
  <span>
    <igc-rating readonly value={ctx.value}></igc-rating>
  </span>
);
```
<!-- End: React -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Rating"></IgbGridLiteColumn>
```

<!-- End: Blazor -->

>[!NOTE]
>Keep in mind the more complex and involved the template is, the greater the performance cost. Avoid complex DOM structures if performance is important.

## Cell Context Object

The custom cell renderer is passed an `GridLiteCellContext` object as a parameter with the following props:

<!-- React, WebComponents -->
```typescript
/**
 * Context object for the row cell template callback.
 */
export interface GridLiteCellContext<
  T extends object,
  K extends Keys<T> = Keys<T>
> {
  /**
   * The cell element parent of the template.
   */
  parent: GridLiteCell<T>;
  /**
   * The row element containing the cell.
   */
  row: GridLiteRow<T>;
  /**
   * The current configuration for the column.
   */
  column: ColumnConfiguration<T, K>;
  /**
   * The value from the data source for this cell.
   */
  value: PropertyType<T, K>;
}
```
<!-- End: React, WebComponents -->

`sample="/{GridLiteSample}/column-config-basic", height="600", alt="{Platform} {GridLiteTitle} Column Config Basic"`

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

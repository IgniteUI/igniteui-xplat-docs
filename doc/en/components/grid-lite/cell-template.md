---
title: {Platform} {ComponentTitle} Cell Template - {ProductName}
_description: Configure and customize custom {GridLiteTitle} cell renderers. See demos & examples!
_keywords: cell template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Column cell template

By default, the grid uses the key of the column to render the value as a string inside the cell. This is fine for basic scenarios, but if you want to customize the rendered output or the final output is a combination of different data fields, you should use a cell template renderer.

To achieve that, set the **`cellTemplate`** property of the column.

<!-- React, WebComponents -->

```typescript
{
  cellTemplate?: (params: GridLiteCellContext<T, K>) => TemplateResult;
}
```

<!-- End: React, WebComponents -->

## Use as a formatter function

For the simple scenario where some formatting is required, one can just return the formatted value. Here is an example for displaying a number value to a locale currency format:

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

{
  ...
  /** Return the custom currency format for a value `value = 123456.789` */
  cellTemplate: (params) => asCurrency(params.value) // => "€123,456.79"
  ...
}
```

<!-- End: React, WebComponents -->

You can combine values different fields from the data source as well.
<!-- TODO: 
Refer to the API documentation for **`ApexCellContext`** for more information. -->

<!-- React, WebComponents -->

```typescript
const { format: asCurrency } = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' });

{
  ...
  /** Return the custom currency format for an order of 10 items where the price is 99.99 */
  cellTemplate: ({value, row}) => asCurrency(value * row.data.count) // => "€999.90"
  ...
}
```
<!-- End: React, WebComponents -->

## Custom DOM templates

Aside from using the **`cellTemplate`** property as a value formatter, you can also create your own DOM template, which
will be rendered inside the cell container.

We've decided to re-use the functionality provided by <a href="https://lit.dev/" target="_blank">Lit</a> and its
<a href="https://lit.dev/docs/templates/expressions/" target="_blank">tagged template syntax</a> for building declarative
DOM fragments.

You can template any standard DOM elements as well as web components from other libraries.

<!-- React, WebComponents -->

```typescript
// Import the `html` tag function from the Lit package.
import { html } from "lit";

{
  key: 'rating',
  // Use another web component to represent the `rating` value in the grid
  cellTemplate: ({ value }) => html`<igc-rating readonly value=${value}></igc-rating>`
  ...
}
```

<!-- End: React, WebComponents -->

>[!NOTE]
>Keep in mind the more complex and involved the template is, the greater the performance cost. Avoid complex DOM structures if performance is important.

## Cell context object

The custom cell renderer is passed an **`GridLiteCellContext`** object as a parameter with the following props:

<!-- React, WebComponents -->
```typescript
/**
 * Context object for the row cell template callback.
 */
export interface ApexCellContext<
  T extends object,
  K extends Keys<T> = Keys<T>
> {
  /**
   * The cell element parent of the template.
   */
  parent: ApexGridCell<T>;
  /**
   * The row element containing the cell.
   */
  row: ApexGridRow<T>;
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

`sample="/{ComponentSample}/column-config-basic", height="600", alt="{Platform} {ComponentTitle} Column Config Basic"`

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

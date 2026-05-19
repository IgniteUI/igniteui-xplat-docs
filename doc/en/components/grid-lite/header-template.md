---
title: {Platform} {GridLiteTitle} Header Template | {ProductName} | MIT license
_description: Configure and customize custom {GridLiteTitle} column header renderers. See demos and examples! Build applications with open-source {Platform} {GridLiteTitle}. Try it now.
_keywords: header template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
---

# Customizing the Column Header

Similar to the cell templates, column headers can also be customized to better fit the desired use case. You can pass a text label through the `header` property, or provide a full-blown custom template.

## Customization via Header Text

<!-- React, WebComponents -->
By default the column uses the `field` property for label text. To customize the label, set the `header` property to a more human readable format.
<!-- End: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" header="Price per item"></igc-grid-lite-column>
```
<!-- End: WebComponents -->

```tsx
return (
  <IgrGridLite>
    <IgrGridLiteColumn field="price" header="Price per item"></IgrGridLiteColumn>
  </IgrGridLite>
);
```

<!-- Blazor -->
By default the column uses the `Field` property for label text. To customize the label, set the `Header` property to a more human readable format.

```razor
<IgbGridLiteColumn Field="Price" Header="Price per item" />
```

<!-- End: Blazor -->

>[!NOTE]
>When `headerTemplate` is provided, `header` is ignored.

## Customization via Header Template

Similar to the cell template, you can also pass a custom template renderer and create your own DOM inside the column header.

<!-- WebComponents -->

```typescript
import { html } from 'lit';


const column = document.querySelector('igc-grid-lite-column');
column.headerTemplate = () => html`<h3>⭐ Rating ⭐</h3>`;
```
<!-- End: WebComponents -->
<!-- React -->

```tsx
const ratingHeaderTemplate = (ctx: IgrHeaderContext) => (
  <h3>{"⭐ Rating ⭐"}</h3>
);


return (
  <IgrGridLite>
    <IgrGridLiteColumn field="rating" headerTemplate={ratingHeaderTemplate}></IgrGridLiteColumn>
  </IgrGridLite>
);
```
<!-- End: React -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Rating"></IgbGridLiteColumn>
```
<!-- End: Blazor -->

`sample="/{GridLiteSample}/column-config-headers", height="600", alt="{Platform} {GridLiteTitle} Column Config Headers"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Cell Template](cell-template.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})

---
title: {Platform} {GridLiteTitle} Header Template - {ProductName}
_description: Configure and customize custom {GridLiteTitle} column header renderers. See demos & examples!
_keywords: header template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: mit
---

# Customizing the column header

Similar to the cell templates, column headers can also be customized to better fit the desired use case. You can pass a text label through the **`headerText`** property, or provide a full-blown custom template.

## Customization via header text

By default the column uses the **`key`** configuration property for label text. To customize the label, set the **`headerText`** property to a more human readable format.

<!-- React, WebComponents -->

```typescript
{
  key: 'price',
  headerText: 'Price per item'
}
```

<!-- End: React, WebComponents -->

>[!NOTE]
>When **`headerTemplate`** is provided, **`headerText`** is ignored.

## Customization via header template

Similar to the cell template, you can also pass a custom template renderer and create your own DOM inside the column header.

<!-- React, WebComponents -->

```typescript
import { html } from 'lit';


{
  key: 'rating',
  headerTemplate: () => html`<h3>⭐ Rating ⭐</h3>`,
}
```
<!-- End: React, WebComponents -->

`sample="/{GridLiteSample}/column-config-headers", height="600", alt="{Platform} {GridLiteTitle} Column Config Headers"`

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## Additional Resources

* [Column Configuration](column-configuration.md)
* [Cell Template](cell-template.md)
* [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

* [{GridLiteTitle}  **GitHub**]({GithubLinkLite})

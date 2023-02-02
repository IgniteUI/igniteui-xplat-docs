---
title: {Platform} ComboBox Component Templates – {ProductName}
_description: {ProductName} ComboBox component templates
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} ComboBox Component Templates
mentionedTypes: ['Combo']
---

# {Platform} ComboBox Templates

The {ProductName} ComboBox component allows defining custom templates for different areas such as items, group headers, empty list, and icons.

## ComboBox Templates Example

<code-view style="height:400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/combo-templates"
           alt="{Platform} Combo Templates"
           github-src="grids/combo/templates">
</code-view>

## Template Types

### Item Template

The `itemTemplate` is a custom template that if defined should be used when rendering items in the list of options.

```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const itemTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`
      <span><b>${item.name}</b> [${item.id}]</span>
  `;
};

combo.itemTempate = itemTemplate;
```

### Group Header Template

The `groupHeaderTemplate` is a custom template that if defined should be used when rendering group headers in the list of options.

```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const groupHeaderTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`<div>Country of ${item.country}</div>`;
};

combo.groupHeaderTemplate = groupHeaderTemplate;
```

## Slots
Other than custom templates, the {ProductName} ComboBox component exposes several slots that allow users to pass custom content to different combo parts.

### Header Slot
To render a custom header above the list of options pass content to the `header` slot:

```html
<igc-combo>
  <div slot="header">Custom header content</div>
</igc-combo>
```

### Footer Slot
To render a custom footer below the list of options pass content to the `footer` slot:

```html
<igc-combo>
  <div slot="footer">Custom footer content</div>
</igc-combo>
```

### Empty List Slot
To render a custom content when the filtering operation returns no result, use the `empty` slot:

```html
<igc-combo>
  <div slot="empty">¯\_(ツ)_/¯</div>
</igc-combo>
```

### Toggle Icon Slot
The toggle icon in the combo input can also be modified via the `toggle-icon` slot:

```html
<igc-combo>
  <igc-icon name="down" slot="toggle-icon"></igc-icon>
</igc-combo>
```

### Clear Icon Slot
The clear icon can be changed via the `clear-icon` slot:

```html
<igc-combo>
  <igc-icon name="clear" slot="clear-icon"></igc-icon>
</igc-combo>
```

<!-- WebComponents -->
## API Reference

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

<!-- end: WebComponents -->

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

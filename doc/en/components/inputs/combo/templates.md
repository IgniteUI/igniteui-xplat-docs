---
title: {Platform} ComboBox Component Templates – {ProductName}
_description: {ProductName} ComboBox component templates
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} ComboBox Component Templates
mentionedTypes: ['Combo']
---

# {Platform} ComboBox Templates

The {ProductName} ComboBox component allows defining custom templates for different areas such as items, group headers, empty list, and icons.

## ComboBox Templates Example

`sample="/inputs/combo/templates", height="400", alt="{Platform} Combo Templates"`



## Template Types

### Item Template

The `itemTemplate` is a custom template that if defined should be used when rendering items in the list of options.

<!-- WebComponents -->
```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const itemTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`
      <span><b>${item.name}</b> [${item.id}]</span>
  `;
};

combo.itemTempate = itemTemplate;
```
<!-- end: WebComponents -->

<!-- Blazor -->
To template your items in a Blazor app, you need to define a template in a separate JavaScript file. Let's create a new file under the `wwwroot` directory called `templates.js`.

In this file we can declare a new item template like so:

```js
const html = window.igTemplating.html;

const itemTemplate = ({ item }) => {
    return html`<span><b>${item.Name}</b> [${item.Id}]</span>`;
}

igRegisterScript("ComboItemTemplate", itemTemplate, false);
```

Make sure to include the `templates.js` file in the `index.html` under `wwwroot`.

```html
<body>
    <!-- importing JS used in the razor pages -->
    <script src="templates.js"></script>
</body>
```

Then in our application we can refer to the template we declared via the `ItemTemplateScript` property.

```razor
<IgbCombo ItemTemplateScript="ComboItemTemplate"></IgbCombo>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
<IgrCombo
    valueKey="id"
    displayKey="name"
    groupKey="country"
    data={cities}
    itemTemplate={renderItemTemplate}
></IgrCombo>

function renderItemTemplate(props: { dataContext: any}): any {
    return (
      <span><b>{props.dataContext.name}</b> [{props.dataContext.id}]</span>
    );
}
```
<!-- end: React -->

### Group Header Template

The `groupHeaderTemplate` is a custom template that if defined should be used when rendering group headers in the list of options.

<!-- WebComponents -->
```ts
import { ComboItemTemplate } from 'igniteui-webcomponents';

const groupHeaderTemplate: ComboItemTemplate<City> = ({ item }) => {
  return html`<div>Country of ${item.country}</div>`;
};

combo.groupHeaderTemplate = groupHeaderTemplate;
```
<!-- end: WebComponents -->

<!-- Blazor -->
First define the group header template:

```js
const html = window.igTemplating.html;

const groupHeaderTemplate = ({ item }) => {
    return html`<span>Country of ${item.Country}</span>`;
}

igRegisterScript('ComboGroupHeaderTemplate', groupHeaderTemplate, false)
```

Then in our application we can refer to the template we declared via the `GroupHeaderTemplateScript` property.

```razor
<IgbCombo GroupHeaderTemplateScript="ComboGroupHeaderTemplate"></IgbCombo>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
<IgrCombo
    valueKey="id"
    displayKey="name"
    groupKey="country"
    data={cities}
    groupHeaderTemplate={renderGroupHeaderTemplate}
></IgrCombo>

function renderGroupHeaderTemplate(props: { dataContext: any}): any {
    return (
    <span>Country of {props.dataContext.country}</span>
    );
}
```
<!-- end: React -->

## Slots
Other than custom templates, the {ProductName} ComboBox component exposes several slots that allow users to pass custom content to different combo parts.

### Header Slot
To render a custom header above the list of options pass content to the `header` slot:

```html
<igc-combo>
  <div slot="header">Custom header content</div>
</igc-combo>
```

```razor
<IgbCombo> 
    <header slot="header">
        Header content goes here
    </header>
</IgbCombo>
```

```tsx
<IgrCombo>
  <header slot="header">
        Header content goes here
  </header>
</IgrCombo>
```

### Footer Slot
To render a custom footer below the list of options pass content to the `footer` slot:

```html
<igc-combo>
  <div slot="footer">Custom footer content</div>
</igc-combo>
```

```razor
<IgbCombo> 
    <footer slot="footer">
        Footer content goes here
    </footer>
</IgbCombo>
```

```tsx
<IgrCombo>
  <footer slot="footer">
        Footer content goes here
  </footer>
</IgrCombo>
```

### Empty List Slot
To render a custom content when the filtering operation returns no result, use the `empty` slot:

```html
<igc-combo>
  <div slot="empty">¯\_(ツ)_/¯</div>
</igc-combo>
```

```razor
<IgbCombo> 
    <div slot="empty">¯\_(ツ)_/¯</div>
</IgbCombo>
```

```tsx
<IgrCombo>
  <div slot="empty">¯\_(ツ)_/¯</div>
</IgrCombo>
```

### Toggle Icon Slot
The toggle icon in the combo input can also be modified via the `toggle-icon` slot:

```html
<igc-combo>
  <igc-icon name="down" slot="toggle-icon"></igc-icon>
</igc-combo>
```

```razor
<IgbCombo> 
    <IgbIcon name="down" slot="toggle-icon"></IgbIcon>
</IgbCombo>
```

```tsx
<IgrCombo>
  <span slot="toggle-icon">
    <IgbIcon name="down"></IgbIcon>
  </span>
</IgrCombo>
```

### Clear Icon Slot
The clear icon can be changed via the `clear-icon` slot:

```html
<igc-combo>
  <igc-icon name="clear" slot="clear-icon"></igc-icon>
</igc-combo>
```

```razor
<IgbCombo> 
    <IgbIcon name="clear" slot="clear-icon"></IgbIcon>
</IgbCombo>
```

```tsx
<IgrCombo>
  <span slot="clear-icon">
    <IgbIcon name="clear"></IgbIcon>
  </span>
</IgrCombo>
```

<!-- WebComponents -->
## API Reference

* `Combo`

<!-- end: WebComponents -->

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

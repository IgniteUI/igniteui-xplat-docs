---
title: {Platform} Combo Component Templates – {ProductName}
_description: {ProductName} Combo component templates
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Combo Component Templates
mentionedTypes: ['Combo']
---

# {Platform} Combo Templates

The {ProductName} Combo component allows defining custom templates for different areas such as items, header items, empty list and icons.

## Combo Templates Example

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
protected itemTemplate = (item: City) => {
    return html`
        <div>
            <b>${item.name}</b>, <span>${item.country}</span>
        </div>
    `;
};
```

### Group Header Template 

The `groupHeaderTemplate` is a custom template that if defined should be used when rendering group headers in the list of options.

```ts
protected groupHeaderTemplate = (item: City) => {
    return html`
        <div>
            <span>Custom Header for ${item.country}</span>
        </div>
    `;
}
```

## Slots

Except for custom templates, the {ProductName} Combo component exposes several slots that allow users to pass custom content to different combo parts.

### Header

You can modify the header part using the `header` slot:

```html
<header style="text-align: center" slot="header">This is a custom header</header>
```

### Footer

You can modify the footer part using the `footer` slot:

```html
<footer style="text-align: center" slot="footer">This is a custom footer</footer>
```

### Empty List 

To change the empty list content, you can use the `empty` slot:

```html
<span slot="empty">This is a custom empty list</span>
```

### Toggle Icon 

The toggle icon in the combo input can also be modified via the `toggle-icon` slot:

```html
<igc-icon name="down" slot="toggle-icon"></igc-icon>
```

### Clear Icon 

The clear icon can be changed via the `clear-icon` slot:

```html
<igc-icon name="clear" slot="clear-icon"></igc-icon>
```

<!-- WebComponents -->
## API Reference

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

<!-- end: WebComponents -->

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

---
title: {Platform} Badge | Infragistics
_description: Infragistics' {Platform} Button provides different variants and styles which are easily configurable to match the appearance and functionality that we want to achieve.
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Button Components, Infragistics
_language: kr
mentionedTypes: ["Button", "ButtonBase"]
---

# {Platform} Icon Button Overview

The {ProductName} Icon Button component allows developers to use registered icons as buttons in their application. It carries all features of the [icon](../layouts/icon.md) component but adds features from the [button](button.md) component as well.

## Usage

To get started with the Icon Button Web Component we need to import the `IconButton` in our typescript file and register it by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcIconButtonComponent } from "igniteui-webcomponents";

defineComponents(IgcIconButtonComponent);
```

After we import the icon button component we are ready to start using it, so let's add our first button.

```html
<igc-icon-button name="thumb-up" collection="material"></igc-icon-button>
```

## Examples

### Variant

Similar to the regular button components, the icon button supports several variants - `flat`(default), `contained`, and `outlined`; To change the icon button type set the `variant` attribute of the icon button.

`sample="/inputs/icon-button/variant", height="100", alt="{Platform} Icon Button Example"`


```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

### Size

The size of the button can be changed by setting the `size` attribute to any of the three supported sizes - `small`, `medium`, `large`(default).

`sample="/inputs/icon-button/size", height="100", alt="{Platform} Icon Button Example"`


```html
<igc-icon-button name="thumb-up" size="medium"></igc-icon-button>
```

### Type

The icon button component will change its internal structure from `<button>` to an `<a>` type element when the `href` attribute is set. In that case the icon button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the `rel`, `target`, and `download` attributes of the icon button.

```html
<igc-icon-button
  name="thumb-up"
  collection="material"
  href="https://duckduckgo.com"
  target="_blank"
>
</igc-icon-button>
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon button horizontally.

```html
<igc-icon-button name="thumb-up" mirrored></igc-icon-button>
```

## Styling

The icon button component exposes two CSS parts - `base` and `icon` that allow you to style the wrapping element (`<button>` or `<a>`) and the wrapped `<igc-icon>` element;

```css
igc-icon-button::part(base) {
  padding: 12px;
  color: olive;
}

igc-icon-button::part(icon) {
  --size: 32px;
}
```

`sample="/inputs/icon-button/styling", height="100", alt="{Platform} Icon Button Example"`


## API Reference

* `IconButton`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
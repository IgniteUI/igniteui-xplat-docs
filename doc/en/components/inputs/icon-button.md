---
title: {Platform} Icon Button Component
_description: Developers can utilize and use various icons interchangeably as buttons with custom colors and more with {ProductName} Icon Button component.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Icon Button components, {Platform} Icon Button controls
mentionedTypes: ['IconButton', 'ButtonBase', 'Button', 'Icon']
---

# {Platform} Icon Button Overview

The {ProductName} Icon Button component allows developers to use registered icons as buttons in their application. It carries all features of the [icon](../layouts/icon.md) component but adds features from the [button](button.md) component as well.

# {Platform} Icon Button Example

`sample="/inputs/icon-button/size", height="100", alt="{Platform} Icon Button Example"`


<div class="divider"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `IconButton`, you need to register it as follows:

```ts
import { defineComponents, IgcIconButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcIconButtonComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `IconButton`, its necessary CSS, and register its module, like so:

```tsx
import { IgrIconButtonModule, IgrIconButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrIconButtonModule.register();
```
<!-- end: React -->

<!-- Blazor -->
Before using the `IconButton`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbIconButtonModule));
```

You will also need to link an additional CSS file to apply the styling to the `IconButton` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->
The simplest way to start using the `IconButton` is as follows:

```tsx
<IgrIconButton name="thumb-up" collection="material"></IgrIconButton>
```

```html
<igc-icon-button name="thumb-up" collection="material"></igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" />
```

## Examples

### Variant

Similar to the regular button components, the icon button supports several variants - `flat` (default), `contained`, and `outlined`; To change the icon button type set the `variant` attribute of the icon button.

`sample="/inputs/icon-button/variant", height="100", alt="{Platform} Icon Button Example"`


```tsx
<IgrIconButton name="search" collection="contained"></IgrIconButton>
```

```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

```razor
<IgbIconButton IconName="search" Variant="@IconButtonVariant.Contained" Collection="material" />
```

### Size

The size of the button can be changed by setting the `size` attribute to any of the three supported sizes - `small`, `medium`, `large`(default).

`sample="/inputs/icon-button/size", height="100", alt="{Platform} Icon Button Example"`


```tsx
<IgrIconButton name="thumb-up" size="medium"></IgrIconButton>
```

```html
<igc-icon-button name="thumb-up" size="medium"></igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Size="@SizableComponentSize.Medium" />
```

### Type

The icon button component will change its internal structure from `<button>` to an `<a>` type element when the `href` attribute is set. In that case the icon button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the `rel`, `target`, and `download` attributes of the icon button.

```html
<igc-icon-button
  name="thumb-up"
  collection="material"
  href="https://duckduckgo.com"
  target="_blank">
</igc-icon-button>
```

```tsx
<IgrIconButton name="thumb-up" collection="material" href="https://duckduckgo.com" target="_blank">
</IgrIconButton>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Href="https://duckduckgo.com" Target="_blank" />
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon button horizontally.

```tsx
<IgrIconButton name="thumb-up" mirrored="true"></IgrIconButton>
```

```html
<igc-icon-button name="thumb-up" mirrored></igc-icon-button>
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Mirrored="true" />
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


## API References

 - `ButtonBase`
 - `Button`
 - `IconButton`
 - `Icon`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
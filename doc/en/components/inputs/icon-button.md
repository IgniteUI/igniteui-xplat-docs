---
title: $Platform$ Icon Button Component
_description: Developers can utilize and use various icons interchangeably as buttons with custom colors and more with $ProductName$ Icon Button component.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Icon Button components, $Platform$ Icon Button controls
mentionedTypes: ['IconButton', 'ButtonBase', 'Button', 'Icon']
---

# $Platform$ Icon Button Overview

The $ProductName$ Icon Button component allows developers to use registered icons as buttons in their application. It carries all features of the [icon](../layouts/icon.md) component but adds features from the [button](button.md) component as well.


<div class="divider"></div>

# $Platform$ Icon Button Example

<code-view style="height: 120px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-size" alt="$Platform$ Icon Button Example"
           github-src="inputs/icon-button/size">
</code-view>

<div class="divider"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `IconButton`, you need and register it as follows:

```razor
IgbIconButtonModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcIconButtonComponent } from "igniteui-webcomponents";

defineComponents(IgcIconButtonComponent);
```

The simplest way to start using the `IconButton` is as follows:

```html
<igc-icon-button name="thumb-up" collection="material"></igc-icon-button>
```

```razor
<IgbIconButton Collection="material" />
```

## Examples

### Variant

Similar to the regular button components, the icon button supports several variants - `flat` (default), `contained`, and `outlined`; To change the icon button type set the `variant` attribute of the icon button.

<code-view style="height: 120px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-variant" alt="$Platform$ Icon Button Example"
           github-src="inputs/icon-button/variant">
</code-view>

```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

```razor
<IgbIconButton Variant="@IconButtonVariant.Contained" />
```

### Size

The size of the button can be changed by setting the `size` attribute to any of the three supported sizes - `small`, `medium`, `large`(default).

<code-view style="height: 120px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-size" alt="$Platform$ Icon Button Example"
           github-src="inputs/icon-button/size">
</code-view>

```html
<igc-icon-button name="thumb-up" size="medium"></igc-icon-button>
```

```razor
<IgbIconButton Size="@SizableComponentSize.Medium" />
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

```razor
<IgbIconButton Collection="material" Href="https://duckduckgo.com" Target="_blank" />
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon button horizontally.

```html
<igc-icon-button name="thumb-up" mirrored></igc-icon-button>
```

```razor
<IgbIconButton Mirrored="true" />
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

<code-view style="height: 120px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-styling" alt="$Platform$ Icon Button Example"
           github-src="inputs/icon-button/styling">
</code-view>

<!-- WebComponents -->

## API Reference

* `IconButton`

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

<!-- --- -->
<!-- title: $Platform$ Icon Button Component -->
<!-- _description: Developers can utilize and use various icons interchangeably as buttons with custom colors and more with $ProductName$ Icon Button component. -->
<!-- _keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Icon Button components, $Platform$ Icon Button controls -->
<!-- --- -->

# $Platform$ Icon Button Overview

<p class="highlight">The $ProductName$ Icon Button component allows developers to use registered icons as buttons in their application. It carries all features of the [icon](../components/icon.md) component but adds features from the [button](../components/button.md) component as well.</p>

## Usage

To get started with the Icon Button Web Component we need to import the [`IgcIconButtonComponent`]({environment:wcApiUrl}/classes/IgcIconButtonComponent.html) in our typescript file and register it by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

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

Similar to the regular button components, the icon button supports several variants - `flat`(default), `contained`, and `outlined`; To change the icon button type set the [`variant`]({environment:wcApiUrl}/classes/IgcIconButtonComponent.html#variant) attribute of the icon button.

<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-variant" alt="$Platform$ Icon Button Example">
</code-view>

```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

### Size

The size of the button can be changed by setting the [`size`]({environment:wcApiUrl}/classes/IgcIconButtonComponent.html#size) attribute to any of the three supported sizes - `small`, `medium`, `large`(default).

<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-size" alt="$Platform$ Icon Button Example">
</code-view>

```html
<igc-icon-button name="thumb-up" size="medium"></igc-icon-button>
```

### Type

The icon button component will change it's internal structure from `<button>` to an `<a>` type element when the `href` attribute is set. In that case the icon button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the `rel`, `target`, and `download` attributes of the icon button.

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

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attirbute that, when set, flips the icon button horizontally.

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

<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/inputs/icon-button-styling" alt="$Platform$ Icon Button Example">
</code-view>

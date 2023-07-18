---
title: {Platform} Ripple
_description: With {ProductName} Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Ripple components, {Platform} Ripple controls
_language: kr
mentionedTypes: ['Ripple']
---

# {Platform} Ripple Overview

The {ProductName} Ripple component creates an animation in response to a touch or a mouse click.

<div class="divider"></div>

## {Platform} Ripple Example

`sample="/inputs/ripple/button", height="80", alt="{Platform} Ripple Example"`


## Usage

To get started with the Ripple Web Component we need to import the `Ripple` in our typescript file and register it by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcRippleComponent } from "igniteui-webcomponents";

defineComponents(IgcRippleComponent);
```

After we import the ripple component we are ready to start using it, so let's add the ripple to an existing component from our library.

```html
<igc-button>
  <igc-ripple></igc-ripple>
  Ripple Button
</igc-button>
```

You can add a ripple to any web element as long as its CSS `position` property is set to any other value than `static`;

## Examples

### Color

You can change the color of the ripple by setting the `--color` CSS property to any valid CSS color:

```css
igc-ripple {
  --color: olive;
}
```

`sample="/inputs/ripple/color", height="80", alt="{Platform} Ripple Example"`


## API Reference

* `Ripple`
* `Button`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
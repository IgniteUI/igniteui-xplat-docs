---
title: $Platform$ Ripple
_description: With $ProductName$ Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Ripple components, $Platform$ Ripple controls
---

# $Platform$ Ripple Overview

<p class="highlight">The $ProductName$ Ripple component creates an animation in response to a touch or a mouse click.</p>

## Usage

To get started with the Ripple Web Component we need to import the `IgcRippleComponent` in our typescript file:

```ts
import { IgcRippleComponent } from "igniteui-webcomponents/src/components/ripple/ripple";
```

After we import the ripple component we are ready to start using it, so let's add the ripple to an existing component from our library.

```html
<igc-button>
  <igc-ripple></igc-ripple>
  Ripple Button
</igc-button>
```

<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/ripple-button" alt="$Platform$ Ripple Example">
</code-view>

You can add a ripple to any web element as long as its CSS `position` property is set to any other value than `static`;

## Examples

### Color

You can change the color of the ripple by setting the `--color` CSS property to any valid CSS color:

```css
igc-ripple {
  --color: olive;
}
```

<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/ripple-color" alt="$Platform$ Ripple Example">
</code-view>

## Additional Resources

<div class="divider--half"></div>

- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

---
title: $Platform$ Ripple
_description: With $ProductName$ Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Ripple components, $Platform$ Ripple controls
mentionedTypes: ['Ripple', 'Button']
---

# $Platform$ Ripple Overview

The $ProductName$ Ripple component creates an animation in response to a touch or a mouse click.

<div class="divider"></div>

## $Platform$ Ripple Example

<code-view style="height: 80px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/ripple-button" alt="$Platform$ Ripple Example"
           github-src="inputs/ripple/button">
</code-view>

## Usage

<!-- Blazor -->

To get started with the `Ripple` component, we first need to import its module, like so:

```razor
IgbRippleModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

To get started with the `Ripple` Web Component we need to import the `Ripple` in our typescript file and register it by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcRippleComponent } from "igniteui-webcomponents";

defineComponents(IgcRippleComponent);
```

<!-- end: WebComponents -->

After we import the ripple component we are ready to start using it, so let's add the ripple to an existing component from our library.

```html
<igc-button>
  <igc-ripple></igc-ripple>
  Ripple Button
</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    Ripple Button
    <IgbRipple></IgbRipple>
</IgbButton>
```

You can add the `Ripple` component to any web element as long as its CSS `position` property is set to any other value than `static`;

## Examples

### Color

You can change the color of the ripple by setting the `--color` CSS property to any valid CSS color:

```css
igc-ripple {
  --color: olive;
}
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/ripple-color" alt="$Platform$ Ripple Example"
           github-src="inputs/ripple/color">
</code-view>

<!-- WebComponents -->

## API Reference

* `Ripple`

Additional Web Components that were used:

* `Button`

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

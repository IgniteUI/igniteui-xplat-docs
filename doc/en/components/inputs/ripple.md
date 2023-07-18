---
title: {Platform} Ripple
_description: With {ProductName} Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Ripple components, {Platform} Ripple controls
mentionedTypes: ['Ripple', 'Button']
---

# {Platform} Ripple Overview

The {ProductName} Ripple component creates an animation in response to a touch or a mouse click.

## {Platform} Ripple Example

`sample="/inputs/ripple/button", height="80", alt="{Platform} Ripple Example"`


## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Ripple`, you need to register it as follows:

```ts
import { defineComponents, IgcRippleComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRippleComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Ripple`, its necessary CSS, and register its module, like so:

```tsx
import { IgrRippleModule, IgrRipple } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrRippleModule.register();
```
<!-- end: React -->

<!-- Blazor -->

Before using the `Ripple`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRippleModule));
```

You will also need to link an additional CSS file to apply the styling to the `Ripple` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The simplest way to start using the `Ripple` is as follows:

```tsx
<IgrButton>
  <IgrRipple></IgrRipple>
  <span>Ripple Button</span>
</IgrButton>
```

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

`sample="/inputs/ripple/color", height="80", alt="{Platform} Ripple Example"`

## API References

 - `Button`
 - `Ripple`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
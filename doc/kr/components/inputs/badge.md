---
title: {Platform} Badge | Infragistics
_description: Infragistics' {Platform} Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: {Platform}, UI controls, web widgets, UI widgets, Web Components, {Platform} Badge Components, Infragistics
_language: kr
mentionedTypes: ["Badge"]
---

# {Platform} Badge

The {ProductName} Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

<div class="divider"></div>

## {Platform} Badge Example

`sample="/inputs/badge/outlined", height="60", alt="{Platform} Badge Example"`



<div class="divider"></div>

## Usage

<!-- Blazor -->

To get started with the `IgbBadge` component, you first need to register the `IgbBadgeModule`.


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBadgeModule));
```

<!-- end: Blazor -->

<!-- WebComponents -->

To get started with the badge web component, first you need to install {ProductName} by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the `Badge` in the typescript file where you want to use it and register it by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcBadgeComponent } from 'igniteui-webcomponents';

defineComponents(IgcBadgeComponent);
```

<!-- end: WebComponents -->

The simplest way to start using the badge is as follows:

```html
<igc-badge></igc-badge>
```

```razor
<IgbBadge />
```

To display a subtle border around the badge set the `outlined` attribute of the badge.

```html
<igc-badge outlined></igc-badge>
```

```razor
<IgbBadge Outlined="true" />
```

## Examples

### Variants

The {ProductName} badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the `variant` attribute.

```html
<igc-badge variant="success"></igc-badge>
```

```razor
<IgbBadge Variant="@BadgeVariant.Success" />
```

`sample="/inputs/badge/variants", height="60", alt="{Platform} Badge Example"`



### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the `shape` attribute.

```html
<igc-badge shape="square"></igc-badge>
```

```razor
<IgbBadge Shape="@BadgeShape.Square" />
```

`sample="/inputs/badge/shape", height="60", alt="{Platform} Badge Example"`



## Styling

The badge component exposes a `base` part that can be used to change all of its style properties.

```css
igc-badge::part(base) {
  color: olive;
  background: beige;
  border-radius: 2px;
}
```

## API Reference

* `Badge`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
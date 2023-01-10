---
title: {Platform} Badge | Infragistics
_description: Infragistics' {Platform} Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: {Platform}, UI controls, web widgets, UI widgets, Web Components, {Platform} Badge Components, Infragistics
mentionedTypes: ['Badge']
---

# {Platform} Badge Overview

The {ProductName} Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## {Platform} Badge Example

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-outlined"
           alt="{Platform} Badge Example"
           github-src="inputs/badge/outlined">
</code-view>

<div class="divider"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

You will then need to import the `Badge`, its necessary CSS, and register its module, like so:

```cmd
npm install {PackageWebComponents}
```

```ts
import { defineComponents, IgcBadgeComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBadgeComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Badge`, its necessary CSS, and register its module, like so:

```tsx
import { IgrBadgeModule, IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrBadgeModule.register();
```
<!-- end: React -->

<!-- Blazor -->

Before using the `Badge`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBadgeModule));
```

You will also need to link an additional CSS file to apply the styling to the `Badge` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The simplest way to start using the `Badge` is as follows:

```tsx
<IgrBadge />
```

```html
<igc-badge></igc-badge>
```

```razor
<IgbBadge />
```

To display a subtle border around the badge, you can set the `outlined` attribute of the badge.

```tsx
<IgrBadge outlined="true" ></IgrBadge>
```

```html
<igc-badge outlined></igc-badge>
```

```razor
<IgbBadge Outlined="true" />
```

## Examples

### Variants

The {ProductName} badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the `variant` attribute.

```tsx
<IgrBadge variant="success" ></IgrBadge>
```

```html
<igc-badge variant="success"></igc-badge>
```

```razor
<IgbBadge Variant="@BadgeVariant.Success" />
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-variants"
           alt="{Platform} Badge Example"
           github-src="inputs/badge/variants">
</code-view>

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the `shape` attribute.

```tsx
<IgrBadge shape="square" ></IgrBadge>
```

```html
<igc-badge shape="square"></igc-badge>
```

```razor
<IgbBadge Shape="@BadgeShape.Square" />
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-shape"
           alt="{Platform} Badge Example"
           github-src="inputs/badge/shape">
</code-view>

## Styling

The badge component exposes a `base` part that can be used to change all of its style properties.

```css
igc-badge::part(base) {
  color: olive;
  background: beige;
  border-radius: 2px;
}
```


<div class="divider--half"></div>

## API References

 - `Badge`

## Additional Resources

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})

---
title: $Platform$ Badge | Infragistics
_description: Infragistics' $Platform$ Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: $Platform$, UI controls, web widgets, UI widgets, Web Components, $Platform$ Badge Components, Infragistics
mentionedTypes: ['Badge']
---

# $Platform$ Badge Overview

The $ProductName$ Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## $Platform$ Badge Example

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-outlined"
           alt="$Platform$ Badge Example"
           github-src="inputs/badge/outlined">
</code-view>

<div class="divider"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Badge`, you need to register it as follows:

```razor
IgbBadgeModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Badge` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcBadgeComponent } from "igniteui-webcomponents";

defineComponents(IgcBadgeComponent);
```

The simplest way to start using the `Badge` is as follows:

```html
<igc-badge></igc-badge>
```

```razor
<IgbBadge />
```

To display a subtle border around the badge, you can set the `outlined` attribute of the badge.

```html
<igc-badge outlined></igc-badge>
```

```razor
<IgbBadge Outlined="true" />
```

## Examples

### Variants

The $ProductName$ badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the `variant` attribute.

```html
<igc-badge variant="success"></igc-badge>
```

```razor
<IgbBadge Variant="@BadgeVariant.Success" />
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-variants"
           alt="$Platform$ Badge Example"
           github-src="inputs/badge/variants">
</code-view>

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the `shape` attribute.

```html
<igc-badge shape="square"></igc-badge>
```

```razor
<IgbBadge Shape="@BadgeShape.Square" />
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/badge-shape"
           alt="$Platform$ Badge Example"
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

<!-- WebComponents -->

## API Reference

* `Badge`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

 ## API Members

 - `Badge`
---
title: $Platform$ Badge | Infragistics
_description: Infragistics' $Platform$ Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: $Platform$, UI controls, web widgets, UI widgets, Web Components, $Platform$ Badge Components, Infragistics
---

# $Platform$ Badge

The $ProductName$ Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined style to communicate information, success, warnings, or errors.

## Usage

To get started with the badge web component, first you need to install $ProductName$ by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the IgcBadgeComponent in the typescript file where you want to use it:

```ts
import { IgcBadgeComponent } from 'igniteui-webcomponents/src/components/badge';
```

The simplest way to start using the badge is as follows:

```html
<igc-badge></igc-badge>
```

## Examples

### Variants

The $ProductName$ badge supports several pre-defined stylistic variants. You can change the variant by assinging one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the `variant` attribute.

```html
<igc-badge variant="success"></igc-badge>
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/badge-variants"
           alt="$Platform$ Badge Example"
           github-src="layouts/badge-variants">
</code-view>

### Shape

The badge components supports `rounded`(default) and `square` shapes. These values can be assigned to the `shape` attribute.

```html
<igc-badge shape="square"></igc-badge>
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/badge-shape"
           alt="$Platform$ Badge Example"
           github-src="layouts/badge-shape">
</code-view>

### Outline

To display a subtle border around the badge set the `outlined` attribute of the badge.

```html
<igc-badge outlined></igc-badge>
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/badge-outlined"
           alt="$Platform$ Badge Example"
           github-src="layouts/badge-outlined">
</code-view>


## Styling

The badge component exposes a `base` part that can be used to change all of its style properties.

```css
igc-avatar::part(base) {
  color: olive;
  background: beige;
  border-radius: 2px;
}
```

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

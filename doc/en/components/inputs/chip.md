---
title: $Platform$ Chip | Infragistics
_description: Infragistics' $Platform$ Chip component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: $Platform$, UI controls, web widgets, UI widgets, Web Components, $Platform$ Chip Components, Infragistics
mentionedTypes: ['Chip']
---

# $Platform$ Chip Overview

$ProductName$ Chips help people enter information, make selections, filter content, or trigger actions.

## $Platform$ Chip Example

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-overview"
           alt="$Platform$ Chip Example"
           github-src="inputs/chip/overview">
</code-view>

<div class="divider"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Chip`, you need to register it as follows:

```razor
IgbChipModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Chip` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcChipComponent } from "igniteui-webcomponents";

defineComponents(IgcChipComponent);
```

The simplest way to start using the `Chip` is as follows:

```html
<igc-chip></igc-chip>
```

```razor
<IgbChip>Chip</IgbChip>
```

To display a selectable chip, you can set the `selectable` attribute of the chip.

```html
<igc-chip selectable></igc-chip>
```

```razor
<IgbChip Selectable="true">Chip</IgbChip>
```

To display a removable chip, you can set the `removable` attribute of the chip.

```html
<igc-chip removable></igc-chip>
```

```razor
<IgbChip Removable="true">Chip</IgbChip>
```

## Examples

### Variants

The $ProductName$ chip supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`, `info`, `success`, `warning`, or `danger` to the `variant` attribute.

```html
<igc-chip variant="success"></igc-chip>
```

```razor
<IgbChip Variant="@ChipVariant.Success"></IgbChip>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-variants"
           alt="$Platform$ Chip Variants Example"
           github-src="inputs/chip/variants">
</code-view>

### Disabled

The $ProductName$ chip can be disabled by using the `disabled` attribute.

```html
<igc-chip disabled></igc-chip>
```

```razor
<IgbChip Disabled="true"></IgbChip>
```

### Prefix / Suffix

With `prefix` and `suffix` parts of the `Chip` component and their slots, we can add different content before and after the main content of the chip. We provide default select and remove icons but you can customize them using the `select` and `remove` slots. You can add additional content before or after the main content, using the `start` and `end` slots

```html
<igc-chip selectable removable>
  <span slot="select"><igc-icon name="verified-account"></igc-icon></span>
  <span slot="start"><igc-icon name="brush"></igc-icon></span>
    Chip
  <span slot="end"><igc-icon name="blood"></igc-icon></span>
  <span slot="remove"><igc-icon name="pacifier"></igc-icon></span>
</igc-chip>
```

```razor
<IgbChip Selectable="true" Removable="true">
  <span slot="select"><igc-icon name="verified-account"></igc-icon></span>
  <span slot="start"><igc-icon name="brush"></igc-icon></span>
    Chip
  <span slot="end"><igc-icon name="blood"></igc-icon></span>
  <span slot="remove"><igc-icon name="pacifier"></igc-icon></span>
</IgbChip>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-multiple"
           alt="$Platform$ Chip Multiple Example"
           github-src="inputs/chip/multiple">
</code-view>

## Size

We can allow the user to choose the size of the `chip` by using its `size` property.

```html
<igc-chip size="small" selectable removable>Chip</igc-chip>
<igc-chip size="medium" selectable removable>Chip</igc-chip>
<igc-chip size="large" selectable removable>Chip</igc-chip>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-size"
           alt="$Platform$ Chip Size Example"
           github-src="inputs/chip/size">
</code-view>

## Styling

The chip component exposes a `base`, `prefix` and `sufix` parts and several slots that can be used to change all of its style properties.

```css
igc-chip::part(base) {
    background: #011627;
    color: #ECAA53;
}

igc-chip::part(suffix) {
    color: #B7B6C2;
}
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-styling"
           alt="$Platform$ Chip Styling Example"
           github-src="inputs/chip/styling">
</code-view>

<!-- WebComponents -->

## API Reference

* `Chip`

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

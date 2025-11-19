---
title: {Platform} Chip | Infragistics
_description: Infragistics' {Platform} Chip component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: {Platform}, UI controls, web widgets, UI widgets, Web Components, {Platform} Chip Components, Infragistics
_license: MIT
mentionedTypes: ["Chip"]
---

# {Platform} Chip Overview

{ProductName} Chips help people enter information, make selections, filter content, or trigger actions.

## {Platform} Chip Example

`sample="/inputs/chip/overview", height="80", alt="{Platform} Chip Example"`

<div class="divider"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `Chip`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcChipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChipComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Chip` and its necessary CSS, like so:

```tsx
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->

Before using the `Chip`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbChipModule));
```

You will also need to link an additional CSS file to apply the styling to the `Chip` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The simplest way to start using the `Chip` is as follows:

```html
<igc-chip></igc-chip>
```

```razor
<div class="container sample vertical">
    <IgbChip>Chip</IgbChip>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override void OnInitialized()
    {
    }
}
```

```tsx
<IgrChip></IgrChip>
```

To display a selectable chip, you can use the `Selectable` property of the chip.

```tsx
<IgrChip selectable={true}></IgrChip>
```

```html
<igc-chip selectable></igc-chip>
```

```razor
<IgbChip Selectable="true"></IgbChip>
```

To display a removable chip, you can use the `Removable` property of the chip.

```tsx
<IgrChip removable={true}></IgrChip>
```

```html
<igc-chip removable></igc-chip>
```

```razor
<IgbChip Removable="true"></IgbChip>
```

## Examples

### Variants

The {ProductName} chip supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `Primary`, `Info`, `Success`, `Warning`, or `Danger` to the `Variant` property.

```tsx
<IgrChip variant="success"></IgrChip>
```

```html
<igc-chip variant="success"></igc-chip>
```

```razor
<IgbChip Variant="ChipVariant.Success"></IgbChip>
```

`sample="/inputs/chip/variants", height="80", alt="{Platform} Chip Variants Example"`



### Disabled

The {ProductName} chip can be disabled by using the `Disabled` property.

```tsx
<IgrChip disabled={true}></IgrChip>
```

```html
<igc-chip disabled></igc-chip>
```

### Prefix / Suffix

With the `Prefix` and `Suffix` parts of the `Chip` component and their slots, we can add different content before and after the main content of the chip. We provide default select and remove icons but you can customize them using the `Select` and `Remove` slots. You can add additional content before or after the main content, using the `Start` and `End` slots.

```html
<igc-chip selectable removable>
  <span slot="select"><igc-icon name="verified-account"></igc-icon></span>
  <span slot="start"><igc-icon name="brush"></igc-icon></span>
    Chip
  <span slot="end"><igc-icon name="blood"></igc-icon></span>
  <span slot="remove"><igc-icon name="pacifier"></igc-icon></span>
</igc-chip>
```

`sample="/inputs/chip/multiple", height="80", alt="{Platform} Chip Multiple Example"`



## Size

We allow the user to choose the size of the `Chip` by utilizing the `--ig-size` CSS variable:

```tsx
<IgrChip className="size-small" selectable={true} removable={true}>
    <span>Chip</span>
</IgrChip>
<IgrChip className="size-medium" selectable={true} removable={true}>
    <span>Chip</span>
</IgrChip>
<IgrChip className="size-large" selectable={true} removable={true}>
    <span>Chip</span>
</IgrChip>
```

```css
.size-small {
  --ig-size: var(--ig-size-small);
}

.size-medium {
  --ig-size: var(--ig-size-medium);
}

.size-large {
  --ig-size: var(--ig-size-large);
}
```

`sample="/inputs/chip/size", height="80", alt="{Platform} Chip Size Example"`


## Styling

The `Chip` component exposes a `base`, `prefix`, `suffix` CSS parts that can be used to change all of its style properties.

```css
igc-chip::part(base) {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```

`sample="/inputs/chip/styling", height="80", alt="{Platform} Chip Styling Example"`

## API References

 - `Chip`
 - [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

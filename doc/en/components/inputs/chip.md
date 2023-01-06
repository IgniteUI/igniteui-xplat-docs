---
title: {Platform} Chip | Infragistics
_description: Infragistics' {Platform} Chip component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: {Platform}, UI controls, web widgets, UI widgets, Web Components, {Platform} Chip Components, Infragistics
mentionedTypes: ['Chip']
---

# {Platform} Chip Overview

{ProductName} Chips help people enter information, make selections, filter content, or trigger actions.

## {Platform} Chip Example

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-overview"
           alt="{Platform} Chip Example"
           github-src="inputs/chip/overview">
</code-view>

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
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Chip`, its necessary CSS, and register its module, like so:

```tsx
import { IgrChipModule, IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrChipModule.register();
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

```html
<igc-chip></igc-chip>
```

To display a selectable chip, you can use the `Selectable` property of the chip.

```tsx
<IgrChip selectable="true"></IgrChip>
```

```html
<igc-chip selectable></igc-chip>
```

```razor
<IgbChip Selectable="true"></IgbChip>
```

To display a removable chip, you can use the `Removable` property of the chip.

```tsx
<IgrChip removable="true"></IgrChip>
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

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-variants"
           alt="{Platform} Chip Variants Example"
           github-src="inputs/chip/variants">
</code-view>

### Disabled

The {ProductName} chip can be disabled by using the `Disabled` property.

```tsx
<IgrChip disabled="true"></IgrChip>
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

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-multiple"
           alt="{Platform} Chip Multiple Example"
           github-src="inputs/chip/multiple">
</code-view>

## Size

We allow the user to choose the size of the `Chip` by using its `Size` property.

```tsx
<IgrChip size="small" selectable="true" removable="true">
    <span>Chip</span>
</IgrChip>
<IgrChip size="medium" selectable="true" removable="true">
    <span>Chip</span>
</IgrChip>
<IgrChip size="large" selectable="true" removable="true">
    <span>Chip</span>
</IgrChip>
```

```html
<igc-chip size="small" selectable removable>Chip</igc-chip>
<igc-chip size="medium" selectable removable>Chip</igc-chip>
<igc-chip size="large" selectable removable>Chip</igc-chip>
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-size"
           alt="{Platform} Chip Size Example"
           github-src="inputs/chip/size">
</code-view>

## Styling

The chip component exposes a `Base`, `Prefix`, `Sufix` parts and several slots that can be used to change all of its style properties.

```css
igc-chip::part(base) {
    background: #011627;
    color: #ECAA53;
}

igc-chip::part(suffix) {
    color: #B7B6C2;
}
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/chip-styling"
           alt="{Platform} Chip Styling Example"
           github-src="inputs/chip/styling">
</code-view>


## API Reference

* `Chip`

<div class="divider--half"></div>

## API References

 - `Chip`


## Additional Resources

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})

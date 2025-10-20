---
title: {Platform} MaskInput | Infragistics
_description: Infragistics' {Platform} MaskInput allows the user to control input and format the visible value based on configurable mask rules
_keywords: {Platform} input, {ProductName}, Infragistics
mentionedTypes: ["MaskInput"]
---

## {Platform} Mask Input Overview

The {ProductName} Mask Input is an input field that allows the developer to control user input and format the visible value, based on configurable rules. It provides different input options and ease in use and configuration.

### {Platform} Mask Input Example

`sample="/inputs/mask-input/overview", height="150", alt="{Platform} Mask Input Overview Example"`

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```
Before using the `MaskInput`, you need to register it as follows:
<!-- end: WebComponents -->

```ts
import { defineComponents, IgcMaskInputComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcMaskInputComponent);
```

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `MaskInput`, its necessary CSS, and register its module, like so:
```tsx
import { IgrMaskInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

```tsx
<IgrMaskInput mask="00000">
    <span slot="prefix">
        <IgrIcon ref={iconLocationRef} name="location" collection="material"></IgrIcon>
    </span>
    <span slot="helper-text">ZIP Code</span>
</IgrMaskInput>
```

<!-- Blazor -->
Before using the `MaskInput`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbMaskInputModule));
```

You will also need to link an additional CSS file to apply the styling to the `MaskInput` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

### Mask Rules
The table bellow shows the supported built-in mask rules:

| Mask Character | Description |
| :--- | :--- |
| 0 | Digit character [0-9]. Entry is required. |
| 9 | Digit character [0-9]. Entry is optional. |
| # | Digit character [0-9], plus (+), or minus (-) sign. Entry is required. |
| L | Letter character. Entry is required. |
| ? | Letter character. Entry is optional. |
| A | Alphanumeric (letter or digit) character. Entry is required. |
| a | Alphanumeric (letter or digit) character. Entry is optional. |
| & | Any keyboard character. Entry is required. |
| C | Any keyboard character. Entry is optional. |
| \ | Escapes a mask flag and turns it into a literal. |

These flags also participate in the component validation - i.e., the input becomes invalid if some but not all required positions are filled (no positions filled/empty value is still a responsibility of `required`). This applies to both stand-alone inputs and when included in a form.

### Applying Mask

Applying the mask is pretty straightforward. All you need to do is provide a predetermined pattern to the `Mask` property of the input.

In the example below, we will apply a mask for a phone number with an extension code.

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999">
    <igc-icon name="phone" slot="prefix"></igc-icon>
    <span slot="helper-text">Phone number</span>
</igc-mask-input>
```

```tsx
<IgrMaskInput mask="(####) 00-00-00 Ext. 9999">
    <span slot="prefix">
        <IgrIcon ref={iconPhoneRef} name="phone" collection="material"></IgrIcon>
    </span>
    <span slot="helper-text">Phone number</span>
</IgrMaskInput>
```

```razor
<IgbMaskInput @ref="MaskInputRef" Mask="(####) 00-00-00 Ext. 9999">
    <IgbIcon IconName="phone" Collection="material" slot="prefix"></IgbIcon>
    <span slot="helper-text">Phone number</span>
</IgbMaskInput>
```

After that you should see the following in your browser:

`sample="/inputs/mask-input/applying-mask", height="150", alt="{Platform} Mask Input Applying Mask Example"`



### Prompt Character

Developers can customize the prompt symbol used for unfilled parts of the mask. To do this, simply provide any character to the `Prompt` property:

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999" prompt="-"></igc-mask-input>
```

```tsx
<IgrMaskInput mask="(####) 00-00-00 Ext. 9999" prompt="-"></IgrMaskInput>
```

```razor
<IgbMaskInput @ref="MaskInputRef" Mask="(####) 00-00-00 Ext. 9999" Prompt="-"></IgbMaskInput>
```

By default, the `prompt` character is *underscore*.

### Placeholder

Developers can also take advantage of the `Placeholder` property, which serves the purpose of the native input placeholder attribute. If no value is provided for the placeholder, the value of the mask is used as such.

```html
<igc-mask-input id="mask-input" mask="00/00/0000" placeholder="dd/MM/yyyy"></igc-mask-input>
```

```tsx
<IgrMaskInput mask="00/00/0000" placeholder="dd/MM/yyyy"></IgrMaskInput>
```

```razor
<IgbMaskInput @ref="MaskInputRef" Mask="00/00/0000" Placeholder="dd/MM/yyyy"></IgbMaskInput>
```

### Value Modes

The `MaskInput` exposes a `ValueMode` property that lets you choose between `raw` and `withFormatting` options to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, `ValueMode` is set to *raw*. Try it for yourself in the example below:

`sample="/inputs/mask-input/value-modes", height="150", alt="{Platform} Mask Input Value Modes Example"`

## Styling

The `MaskInput` component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-mask-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-mask-input::part(input)::placeholder {
  color: var(--ig-primary-100-contrast);
}
```

`sample="/inputs/mask-input/styling", height="150", alt="{Platform} Mask Input Styling Example"`

## Assumptions and limitations

- The masked input does not expose a _type_ attribute since it is always an input of type **text**.
- Undo/redo behavior is currently unsupported.


## API References

- `Input`
- `MaskInput`
- `Icon`
- `Radio`
- `RadioGroup`
- [`Styling & Themes`](../themes/overview.md)


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
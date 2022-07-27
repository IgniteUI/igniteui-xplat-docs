---
title: $Platform$ MaskInput | Infragistics
_description: Infragistics' $Platform$ MaskInput allows the user to control input and format the visible value based on configurable mask rules
_keywords: $Platform$ input, $ProductName$, Infragistics
mentionedTypes: ['MaskInput']
---

## $Platform$ Mask Input Overview

The $ProductName$ Mask Input is an input field that allows the developer to control user input and format the visible value, based on configurable rules. It provides different input options and ease in use and configuration.

### $Platform$ Mask Input Example

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/mask-input-overview"
           alt="$Platform$ Mask Input Overview Example"
           github-src="inputs/mask-input/overview">
</code-view>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `IgcMaskInput`, you need to register it as follows:

```ts
import { defineComponents, IgcMaskInputComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcMaskInputComponent);
```

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

Applying the mask is pretty straightforward. All you need to do is provide a predetermined pattern to the `mask` property of the input.

In the example below, we will apply a mask for a phone number with an extension code.

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999">
    <igc-icon name="phone" slot="prefix"></igc-icon>
    <span slot="helper-text">Phone number</span>
</igc-mask-input>
```

After that you should see the following in your browser:

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/mask-input-applying-mask"
           alt="$Platform$ Mask Input Applying Mask Example"
           github-src="inputs/mask-input/applying-mask">
</code-view>

### Prompt Character

Developers can customize the prompt symbol used for unfilled parts of the mask. To do this, simply provide any character to the `prompt` property:

```html
<igc-mask-input id="mask-input" mask="(####) 00-00-00 Ext. 9999" prompt="-"></igc-mask-input>
```

By default, the `prompt` character is *underscore*.

### Placeholder

Developers can also take advantage of the `placeholder` property, which serves the purpose of the native input placeholder attribute. If no value is provided for the placeholder, the value of the mask is used as such.

```html
<igc-mask-input id="mask-input" mask="00/00/0000" placeholder="dd/MM/yyyy"></igc-mask-input>
```

### Value Modes

The `IgcMaskInput` exposes a `valueMode` property that lets you choose between `raw` and `withFormatting` options to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, `valueMode` is set to *raw*. Try it for yourself in the example below:

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/mask-input-value-modes"
           alt="$Platform$ Mask Input Value Modes Example"
           github-src="inputs/mask-input/value-modes">
</code-view>

## Styling

The `IgcMaskInput` component derives from the `IgcInput` component, so it exposes all available CSS parts. See [Input Styling](input.md#styling) for reference.

## Assumptions and limitations

- The masked input does not expose a _type_ attribute since it is always an input of type **text**.
- Undo/redo behavior is currently unsupported.

<!-- WebComponents -->

## API References

* `Input`
* `MaskInput`

Additional Web Components that were used:

* `Icon`
* `Radio`
* `RadioGroup`

<!-- end: WebComponents -->

### Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->
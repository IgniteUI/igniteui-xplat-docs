---
title: $Platform$ Switch Component – $ProductName$
_description: $ProductName$ Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Switch components, $Platform$ Switch controls
mentionedTypes: ['Switch']
---

# $Platform$ Switch

$ProductName$ Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

<div class="divider"></div>

## Switch Example

<code-view style="height:200px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/switch-sample-1" alt="$Platform$ Switch Example"
           github-src="inputs/switch/sample-1">
</code-view>

<div class="divider--half"></div>

## Usage

At its core the `Switch` component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

<!-- Blazor -->

To get started with the `Switch` component, we first need to import its module, like so:

```razor
IgbSwitchModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

To get started with the `Switch` web component, first you need to install the $ProductName$ by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the `Switch` in the typescript file where you want to use it and register it by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcSwitchComponent } from "igniteui-webcomponents";

defineComponents(IgcSwitchComponent);
```

<!-- end: WebComponents -->

The simplest way to start using the `Switch` is as follows:

```html
<igc-switch></igc-switch>
```

```razor
<IgbSwitch />
```

>[!WARNING]
> The `Switch` component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```html
<igc-switch>Label</igc-switch>
```

```razor
<IgbSwitch>Label</IgbSwitch>
```

You can specify if the label should be positioned before or after the switch toggle by setting the `label-position` attribute of the switch. Allowed values are `before` and `after`(default):


```html
<igc-switch label-position="before">Label</igc-switch>
```

```razor
<IgbSwitch LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbSwitch>
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="switch-label">Label</span>
<igc-switch aria-labelledby="switch-label"></igc-switch>
```

```razor
<span id="switch-label>Label</span>
<IgbSwitch AriaLabelledBy="switch-label" />
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switch-label"
           alt="$Platform$ Avatar Example"
           github-src="inputs/switch/label">
</code-view>

### Checked

Use the `checked` attribute to toggle on the switch.

```html
<igc-switch checked></igc-switch>
```

```razor
<IgbSwitch Checked="true" />
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switch-checked"
           alt="$Platform$ Avatar Example"
           github-src="inputs/switch/checked">
</code-view>

### Required

Use the `required` attribute to mark the switch as required.

```html
<igc-switch required></igc-switch>
```

```razor
<IgbSwitch Required="true" />
```

### Invalid

Use the `invalid` attribute to mark the switch as invalid.

```html
<igc-switch invalid></igc-switch>
```

```razor
<IgbSwitch Invalid="true" />
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html
<igc-switch disabled></igc-switch>
```

```razor
<IgbSwitch Disabled="true" />
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switch-disabled"
           alt="$Platform$ Avatar Example"
           github-src="inputs/switch/disabled">
</code-view>

### Forms

Use the `name` and `value` attributes when using the switch with `Form`.

```html
<igc-switch name="wifi" value="enabled"></igc-switch>
```

```razor
<IgbSwitch Value="enabled" />
```

## Styling

The switch component exposes several CSS parts (`base`, `control`, `thumb`, and `label`) to give you full control over its styling.

```css
igc-switch::part(control) {
  background: beige;
  border-radius: 0;
}

igc-switch::part(thumb) {
  background: olive;
  border-radius: 2px;
  box-shadow: none;
}
```

<!-- WebComponents -->

## API Reference

* `Switch`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## Additional Resources

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

---
title: {Platform} Switch Component – {ProductName}
_description: {ProductName} Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Switch components, {Platform} Switch controls
_language: kr
mentionedTypes: ["Switch"]
---

# {Platform} Switch

{ProductName} Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

<div class="divider"></div>

## Switch Example

`sample="/inputs/switches/overview", height="200", alt="{Platform} Switch Example"`


<div class="divider--half"></div>

## Usage

At its core the switch component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

To get started with the switch web component, first you need to install the {ProductName} by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the `Switch` in the typescript file where you want to use it and register it by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcSwitchComponent } from "igniteui-webcomponents";

defineComponents(IgcSwitchComponent);
```

The simplest way to start using the switch is as follows:

```html
<igc-switch></igc-switch>
```

>[!WARNING]
> The switch component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```html
<igc-switch>Label</igc-switch>
```

You can specify if the label should be positioned before or after the switch toggle by setting the `label-position` attribute of the switch. Allowed values are `before` and `after`(default):


```html
<igc-switch label-position="before">Label</igc-switch>
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="switch-label">Label</span>
<igc-switch aria-labelledby="switch-label"></igc-switch>
```
`sample="/inputs/switches/label", height="150", alt="{Platform} Avatar Example"`



### Checked

Use the `checked` attribute to toggle on the switch.

```html
<igc-switch checked></igc-switch>
```
`sample="/inputs/switches/checking", height="150", alt="{Platform} Avatar Example"`



### Required

Use the `required` attribute to mark the switch as required.

```html
<igc-switch required></igc-switch>
```

### Invalid

Use the `invalid` attribute to mark the switch as invalid.

```html
<igc-switch invalid></igc-switch>
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html
<igc-switch disabled></igc-switch>
```
`sample="/inputs/switches/disabled", height="150", alt="{Platform} Avatar Example"`



### Forms

Use the `name` and `value` attributes when using the switch with `Form`.

```html
<igc-switch name="wifi" value="enabled"></igc-switch>
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

## API Reference

* `Switch`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

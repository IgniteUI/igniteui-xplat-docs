---
title: Radio and Radio Group
_description: With {ProductName} Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Radio Button components, {Platform} Radio Button controls, {Platform} Radio Group component, {Platform} Radio Group control
_language: kr
mentionedTypes: ["Radio"]
---

# {Platform} Radio & Radio Group

The {ProductName} Radio Button component allows the user to select a single option from an available set of options that are listed side by side.

## {ProductName} Radio Example

`sample="/inputs/radio/group", height="205", alt="{Platform} Radio & Radio Group Example"`


<div class="divider--half"></div>

### Usage

To get started with the radio web component, first you need to install the {ProductName} by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the `Radio` and `RadioGroup` in the typescript file and register them by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';

defineComponents(IgcRadioComponent, IgcRadioGroupComponent);
```

The simplest way to start using the radio is as follows:

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

> [!WARNING]
> The radio component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the radio, simply place some text between the opening and closing tags:

```html
<igc-radio>Apple</igc-radio>
```

You can specify if the label should be positioned before or after the radio button by setting the `label-position` attribute. Allowed values are `before` and `after`(default):


```html
<igc-radio label-position="before">Apple</igc-radio>
```

The radio can also be labelled by elements external to it. In this case the user is given full control to position and style the label in accordance to their needs.

```html
<span id="radio-label">Label</span>
<igc-radio aria-labelledby="switch-label"></igc-radio>
```

`sample="/inputs/radio/label", height="100", alt="{Platform} Radio Example"`



### Checked

Use the `checked` attribute to toggle on the radio.

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio checked>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

`sample="/inputs/radio/group", height="205", alt="{Platform} Radio Example"`



### Invalid

Use the `invalid` attribute to mark the radio as invalid.

```html
<igc-radio invalid></igc-radio>
```

`sample="/inputs/radio/invalid", height="205", alt="{Platform} Radio Example"`



### Disabled

Use the `disabled` attribute to disable the radio.

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio disabled>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

`sample="/inputs/radio/disabled", height="205", alt="{Platform} Radio Example"`



### Group Alignment

The radio group allows you to easily change the placement directionality of the radio buttons it contains using the `alignment` attribute. Allowed values are `vertical`(default) and `horizontal`.

```html
<igc-radio-group alignment="horizontal">
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

`sample="/inputs/radio/alignment", height="60", alt="{Platform} Radio Example"`



### Forms

Use the `name` and `value` attributes when using the radio with `Form`.

```html
<igc-radio-group>
  <igc-radio name="option1" value="apple">Apple</igc-radio>
  <igc-radio name="option2" value="banana">Banana</igc-radio>
  <igc-radio name="option4" value="mango">Mango</igc-radio>
  <igc-radio name="option3" value="banana">Orange</igc-radio>
</igc-radio-group>
```

## Styling

The radio component exposes several CSS parts (`base`, `control`, and `label`) to give you full control over its styling.

```scss
igc-radio::part(control checked) {
  &::before {
    background: olive;
  }

  &::after {
    border-color: olive;
  }
}
```

`sample="/inputs/radio/styling", height="205", alt="{Platform} Radio Styling"`

## API Reference

* `Radio`
* `RadioGroup`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

---
title: Radio and Radio Group
_description: With $ProductName$ Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Radio Button components, $Platform$ Radio Button controls, $Platform$ Radio Group component, $Platform$ Radio Group control
---

# $Platform$ Radio & Radio Group

<p class="highlight">The $ProductName$ Radio Button component allows the user to select a single option from an available set of options that are listed side by side.</p>

## $ProductName$ Radio Example

<code-view style="height: 205px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/inputs/radio-group" alt="$Platform$ Radio & Radio Group Example"
           github-src="inputs/radio/group">
</code-view>

<div class="divider--half"></div>

### Usage

To get started with the radio web component, first you need to install the $ProductName$ by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the [IgcRadioComponent]({environment:wcApiUrl}/classes/IgcRadioComponent.html) and [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/IgcRadioGroupComponent.html) in the typescript file and register them by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

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
> The radio component doesn't work with the standard `<form>` element. Use `<igc-form>` instead.

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

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-label"
           alt="$Platform$ Radio Example"
           github-src="inputs/radio/label">
</code-view>

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

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-group"
           alt="$Platform$ Radio Example"
           github-src="inputs/radio/group">
</code-view>

### Invalid

Use the `invalid` attribute to mark the radio as invalid.

```html
<igc-radio invalid></igc-radio>
```

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-invalid"
           alt="$Platform$ Radio Example"
           github-src="inputs/radio/invalid">
</code-view>

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

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-disabled"
           alt="$Platform$ Radio Example"
           github-src="inputs/radio/disabled">
</code-view>

### Group Alignment

The radio group allows you to easily change the placement directionality of the radio buttons it contains using the [`alignment`]({environment:wcApiUrl}/classes/IgcRadioGroupComponent.html#alignment) attribute. Allowed values are `vertical`(default) and `horizontal`.

```html
<igc-radio-group alignment="horizontal">
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-alignment"
           alt="$Platform$ Radio Example"
           github-src="inputs/radio/alignment">
</code-view>

### Forms

Use the `name` and `value` attributes when using the radio with `<igc-form>`.

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

<code-view style="height: 205px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/radio-styling"
           alt="$Platform$ Radio Styling"
           github-src="inputs/radio/styling">
</code-view>

## Additional Resources

<div class="divider--half"></div>

- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## API Reference

* [IgcRadioComponent]({environment:wcApiUrl}/classes/IgcRadioComponent.html)
* [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/IgcRadioGroupComponent.html)

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

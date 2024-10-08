---
title: {Platform} Badge | Infragistics
_description: Infragistics' {Platform} Button provides different variants and styles which are easily configurable to match the appearance and functionality that we want to achieve.
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Button Components, Infragistics
_language: kr
mentionedTypes: ["Button", "ButtonBase"]
---

# {Platform} Button Overview

The Ignite UI for Web Components Button provides different variants and styles which are easily configurable to match the appearance and functionality that we want to achieve.

## {Platform} Button Example

`sample="/inputs/button/overview", height="100", alt="{Platform} Button Example"`



## Usage

To get started we need to import the `Button` in our typescript file and register the component by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcButtonComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent);
```

After we import the button component we are ready to start using it, so let's add our first button.

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">+</span>
    Click me
    <span slot="suffix">-</span>
</igc-button>
```

With `prefix` and `suffix` slots we can add different content before and after the main content of the button.

## Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the `href` attribute is set. In that case the button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the `rel`, `target` and `download` attributes.
In the case when the button component uses an actual `button` element internally, we can specify its `Type` by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

## Button Variants

### Contained Button

Use `variant` attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```html
<igc-button variant="contained">Contained</igc-button>
```

`sample="/inputs/button/contained", height="70", alt="{Platform} button contained"`

### Outlined Button

All you have to do to create an `outlined` button is to change the value of the `variant` property:

```html
<igc-button variant="outlined">Outlined</igc-button>
```

`sample="/inputs/button/outlined", height="80", alt="{Platform} button outlined"`

### Flat Button

Analogically, we can switch to `flat` variant.

```html
<igc-button variant="flat">Flat</igc-button>
```

`sample="/inputs/button/flat", height="70", alt="{Platform} button flat"`

### Floating Action Button

We can create a floating action button by setting the `variant` property to `fab`:

```html
<igc-button variant="fab">Fab</igc-button>
```

`sample="/inputs/button/fab", height="70", alt="{Platform} button fab"`

## Button Sizing

We can allow the user to choose the size of the `button` by using its `size` property. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size property of the button.

```ts
import { defineComponents, IgcButtonComponent, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';
defineComponents(IgcButtonComponent, IgcRadioComponent, IgcRadioGroupComponent);
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after" checked>Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after">Large</igc-radio>
</igc-radio-group>
```

```ts
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;
this.outlinedButton = document.getElementById('outlined-btn') as IgcButtonComponent;
this.flatButton = document.getElementById('flat-btn') as IgcButtonComponent;
this.containedButton = document.getElementById('contained-btn') as IgcButtonComponent;
this.fabButton = document.getElementById('fab-btn') as IgcButtonComponent;

this.radioGroup.addEventListener('click', (radio: any) => {
    this.outlinedButton.size = radio.target.value;
    this.flatButton.size = radio.target.value;
    this.containedButton.size = radio.target.value;
    this.fabButton.size = radio.target.value;
});
```

And here's the result of all that work:

`sample="/inputs/button/size", height="200", alt="{Platform} Button Sizing Example"`



### Download

Setting the `download` property will prompt the user to save the linked URL instead of navigating to it.

```html
<igc-button
    href=""
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-button>
```

`sample="/inputs/button/download", height="70", alt="{Platform} button download"`

## Styling

The button component exposes `base` CSS part that allows us to style the wrapped element (`<button>` or `<a>`).

```css
igc-button::part(base) {
    background-color: #e99221;
    color: #011627;
    padding: 18px;
}
```

`sample="/inputs/button/styling", height="100", alt="{Platform} Button Styling Example"`



## API Reference

* `Button`
* `RadioGroup`
* `Radio`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
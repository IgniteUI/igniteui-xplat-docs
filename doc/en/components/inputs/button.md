# $Platform$ Button Overview

The Ignite UI for Web Components Button provides different variants and styles which are easily configurable to match the appearance and functionality that we want to achieve.

## $Platform$ Button Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-overview"
           alt="$Platform$ Button Example"
           github-src="inputs/button/overview">
</code-view>

## Usage

To get started we need to import the [`Ig$ButtonComponent`]({environment:wcApiUrl}/classes/IgcButtonComponent.html) in our typescript file and register the component by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

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

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`href`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#href) attribute is set. In that case the button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the [`rel`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#rel), [`target`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#target) and [`download`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#download) attributes.
In the case when the button component uses an actual `button` element internally, we can specify its [`type`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#type) by setting the property to any of the following values:

- `submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

## Button Variants

### Contained Button

Use [`variant`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```html
<igc-button variant="contained">Contained</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-contained">
</iframe></div>

### Outlined Button

All you have to do to create an `outlined` button is to change the value of the `variant` property:

```html
<igc-button variant="outlined">Outlined</igc-button>
```

<div class="sample-container loading" style="height: 80px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-outlined">
</iframe></div>

### Flat Button

Analogically, we can switch to `flat` variant.

```html
<igc-button variant="flat">Flat</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-flat">
</iframe></div>

### Floating Action Button

We can create a floating action button by setting the `variant` property to `fab`:

```html
<igc-button variant="fab">Fab</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-fab">
</iframe></div>

## Button Sizing

We can allow the user to choose the size of the `Ig$ButtonComponent` by using its [`size`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#size) property. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size property of the button.

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

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-size"
           alt="$Platform$ Button Sizing Example"
           github-src="inputs/button/size">
</code-view>

### Download

Setting the [`download`]({environment:wcApiUrl}/classes/IgcButtonComponent.html#download) property will prompt the user to save the linked URL instead of navigating to it.

```html
<igc-button
    href=""
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-download">
</iframe></div>

## Styling

The button component exposes `base` CSS part that allows us to style the wrapped element (`<button>` or `<a>`).

```css
igc-button::part(base) {
    background-color: #e99221;
    color: #011627;
    padding: 18px;
}
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-styling"
           alt="$Platform$ Button Styling Example"
           github-src="inputs/button/styling">
</code-view>

## API Reference

* [IgcButtonComponent]({environment:wcApiUrl}/classes/IgcButtonComponent.html)

Additional Web Components that were used:

* [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/IgcRadioGroupComponent.html)
* [IgcRadioComponent]({environment:wcApiUrl}/classes/IgcRadioComponent.html)

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

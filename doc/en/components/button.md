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

To get started with the Button Web Component we need to import the `IgcButtonComponent` in our typescript file:

```ts
import { IgcButtonComponent } from 'igniteui-webcomponents'; 
```

After we import the button component we are ready to start using it, so let's add our first button.

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">+</span>
    Click me
    <span slot="suffix">-</span>
</igc-button>
```

With `prefix` and `suffix` slots we can add a different content before and after the main content of the button.

We can also specify button [`type`]() by setting some of the following values:

- `submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage


## Button Variants

### Flat Button

Use `variant` attribute to add a simple flat button in your component template. Note that if you do not set variant, by default it will be set to flat.

```html
<igc-button variant="flat">Flat</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-flat">
</iframe></div>

### Outlined Button

All you have to do to create an `outlined` button is to change the value of the `variant` property:

```html
<igc-button variant="outlined">Outlined</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-outlined">
</iframe></div>

### Contained Button

Analogically, we can switch to `contained` variant:

```html
<igc-button variant="contained">Contained</igc-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-contained">
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

We can allow the user to choose the size of the `igc-button` by using its `size` property. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size property of the button.

```ts
import { IgcRadioGroupComponent, IgcRadioComponent } from 'igniteui-webcomponents';
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after">Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after" checked="true">Large</igc-radio>
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
           alt="$Platform$ List Example"
           github-src="/inputs/button/size">
</code-view>

## Styling

The button component exposes `base` CSS part that allow us to style the wrapping element (`<button>`).

```css
igc-button::part(base) {
    background-color: #0099ff;
    color: #3f51b5;
    padding: 12px;
}
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-styling"
           alt="$Platform$ List Example"
           github-src="/inputs/button/styling">
</code-view>

## API Reference

* [IgcButtonComponent]()

Additional Web Components that were used:

* [IgcRadioGroupComponent]()
* [IgcRadioComponent]()

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
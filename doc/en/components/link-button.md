# $Platform$ Link Button Overview

The $Platform$ Link Button provides different variants and styles, which are easily configurable to match the appearance and functionality, that we want to achieve.

## $Platform$ Link Button Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/data/link-button-overview"
           alt="$Platform$ Button Example"
           github-src="data/link-button/overview">
</code-view>

## Usage

To get started with the Link Button Web Component we need to import the `IgcLinkButtonComponent` in our typescript file:

```ts
import { IgcLinkButtonComponent } from 'igniteui-webcomponents'; 
```

After we import the link button component, we are ready to start using it, so let's add our first link button.

```html
<igc-link-button
    variant="contained"
    href="https://www.infragistics.com/products/ignite-ui-web-components"
    rel="external"
    target="_blank">
    <span slot="prefix">+</span>
     Click Me
    <span slot="suffix">-</span>
</igc-link-button>
```

With `prefix` and `suffix` slots we can add different content before and after the main content of the button.

The internal structure of the `igc-link-button` is an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element, which is why we can
set the `href`, `rel`, `target` and `download` attributes of the link button.

## Link Button Variants

### Flat Button

Use `flat` variant to add a simple flat button in your component template. Note that if you do not set variant, by default it will be set to flat.

```html
<igc-link-button
    variant="flat"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Flat
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/data/link-button-flat">
</iframe></div>

### Outlined Button

All you have to do to create an `outlined` button is to change button variant property:

```html
<igc-link-button
    variant="outlined"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Outlined
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/data/link-button-outlined">
</iframe></div>

### Contained Button

Analogically, we can switch to `contained` variant:

```html
<igc-link-button
    variant="contained"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Contained
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/data/link-button-contained">
</iframe></div>

### Floating Action Button

And for a floating action button, we can switch to `fab` variant: 

```html
<igc-link-button
    variant="fab"
    href="https://www.infragistics.com/webcomponentssite/components/general-getting-started.html">
    Fab
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/data/link-button-fab">
</iframe></div>

### Disable Link Button

The `disabled` property can be used to make a button unclickable:

```html
<igc-link-button variant="contained" disabled="true">Disabled</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/data/link-button-disabled">
</iframe></div>

### Download

By setting a URL to `download` property, we can make the link button to download file when is clicked.

```html
<igc-link-button
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-link-button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/data/link-button-download">
</iframe></div>

## Link Button Sizing

We can allow the user to choose the size of the `igc-link-button` by using its [`size`]() property. То demonstrate this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size property of the button.

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
this.outlinedButton = document.getElementById('outlined-btn') as IgcLinkButtonComponent;
this.flatButton = document.getElementById('flat-btn') as IgcLinkButtonComponent;
this.containedButton = document.getElementById('contained-btn') as IgcLinkButtonComponent;
this.fabButton = document.getElementById('fab-btn') as IgcLinkButtonComponent;

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
           iframe-src="{environment:dvDemosBaseUrl}/data/link-button-size"
           alt="$Platform$ List Example"
           github-src="/data/link-button/size">
</code-view>

## Styling

The link button component exposes `base` CSS part that allows us to style the wrapping `<a>` element.

```css
igc-link-button::part(base) {
    background-color: #0099ff;
    color: #3f51b5;
    padding: 12px;
}
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/data/link-button-styling"
           alt="$Platform$ List Example"
           github-src="/data/link-button/styling">
</code-view>

## API Reference

* [IgcLinkButtonComponent]()

Additional Web Components that were used:

* [IgcRadioGroupComponent]()
* [IgcRadioComponent]()

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
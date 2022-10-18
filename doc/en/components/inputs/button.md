---
title: {Platform} Button Component | {ProductName}
_description: Get started with the {Platform} Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the {Platform} Button OnClick event.
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Button Components, Infragistics
mentionedTypes: ['Button', 'ButtonBase']
---

# {Platform} Button Overview

The {Platform} Button Component lets you enable clickable elements that trigger actions in your {Platform} app. You get full control over how you set button variants, configure styles for the wrapped element, and define sizes. The Button Component also gives flexibility through the {Platform} Button OnClick event, toggle the {Platform} button, disable the {Platform} button, and more.

## {Platform} Button Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-overview"
           alt="{Platform} Button Example"
           github-src="inputs/button/overview">
</code-view>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `Button`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Button`, its necessary CSS, and register its module, like so:

```tsx
import { IgrButtonModule, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrButtonModule.register();
```
<!-- end: React -->

<!-- Blazor -->

Before using the `Button`, you need to register it as follows:

```razor
IgbButtonModule.Register(IgniteUIBlazor);
```

You will also need to link an additional CSS file to apply the styling to the `Button` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The simplest way to start using the `Button` is as follows:

```tsx
<IgrButton />
```

```html
<igc-button>Click me</igc-button>
```

```razor
<IgbButton />
```

## Prefix / Suffix

With `prefix` and `suffix` slots of the `Button` component, we can add different content before and after the main content of the button.

```tsx
<IgrButton type="button" variant="contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</IgrButton>
```

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</IgbButton>
```

## Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the `Href` attribute is set. In that case the button can be thought of as a regular link. Setting the `Href` attribute will allow you to also set the `Rel`, `Target` and `Download` attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its `DisplayType` by setting the property to any of the following values:

- `submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

## Button Variants

### Contained Button

Use the `variant` attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```tsx
<IgrButton variant="contained"><span>Contained</span></IgrButton>
```

```html
<igc-button variant="contained">Contained</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained" />
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-contained">
</iframe></div>

### Outlined Button

All you have to do to create an `outlined` button is to change the value of the `variant` property:

```tsx
<IgrButton variant="outlined"><span>Outlined</span></IgrButton>
```

```html
<igc-button variant="outlined">Outlined</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Outlined" />
```

<div class="sample-container loading" style="height: 80px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-outlined">
</iframe></div>

### Flat Button

Analogically, we can switch to `flat` variant.

```tsx
<IgrButton variant="flat"><span>Flat</span></IgrButton>
```

```html
<igc-button variant="flat">Flat</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Flat" />
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-flat">
</iframe></div>

### Floating Action Button

We can create a floating action button by setting the `variant` property to `fab`:

```tsx
<IgrButton variant="fab"><span>Fab</span></IgrButton>
```

```html
<igc-button variant="fab">Fab</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Fab" />
```

<div class="sample-container loading" style="height: 75px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/button-fab">
</iframe></div>

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

```tsx
import { IgrButton, IgrRadio, IgrRadioGroup, IgrButtonModule, IgrRadioModule, IgrRadioGroupModule } from 'igniteui-react';

<IgrRadioGroup alignment="horizontal" style={{display: 'flex', margin: '0 auto', width: '15%'}}>
    <IgrRadio name="size" value="small" labelPosition="after" checked={true} change={this.onRadioChange}>
        <span>Small</span>
    </IgrRadio>
    <IgrRadio name="size" value="medium" labelPosition="after" change={this.onRadioChange}>
        <span>Medium</span>
    </IgrRadio>
    <IgrRadio name="size" value="large" labelPosition="after" change={this.onRadioChange}>
        <span>Large</span>
    </IgrRadio>
</IgrRadioGroup>

<div>
    <IgrButton ref={this.flatButtonRef}  className="flat-btn" variant="flat"><span>Flat</span></IgrButton>
    <IgrButton ref={this.containedButtonRef}  className="contained-btn" variant="contained"><span>Contained</span></IgrButton>
    <IgrButton ref={this.outlinedButtonRef}  className="outlined-btn" variant="outlined"><span>Outlined</span></IgrButton>
    <IgrButton ref={this.fabButtonRef}  className="fab-btn" variant="fab"><span>Like</span></IgrButton>
</div>


public onRadioChange(e: any) {
    this.flatButton.size = e.value;
    this.containedButton.size = e.value;
    this.outlinedButton.size = e.value;
    this.fabButton.size = e.value;
}
```

```razor
<IgbRadioGroup id="radioGroup" Alignment="RadioGroupAlignment.Horizontal" >
    <IgbRadio Value="small" LabelPosition="RadioLabelPosition.After" @onclick="OnSmallClick">Small</IgbRadio>
    <IgbRadio Value="medium" LabelPosition="RadioLabelPosition.After" @onclick="OnMediumClick">Medium</IgbRadio>
    <IgbRadio Value="large" LabelPosition="RadioLabelPosition.After" Checked="true" @onclick="OnLargeClick">Large</IgbRadio>
</IgbRadioGroup>

@code {
    private SizableComponentSize SizableComponentSize = SizableComponentSize.Large;

    protected override void OnInitialized()
    {
        IgbButtonModule.Register(IgniteUIBlazor);
        IgbRadioModule.Register(IgniteUIBlazor);
        IgbRadioGroupModule.Register(IgniteUIBlazor);
    }

    public void OnSmallClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Small;
    }

    public void OnMediumClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Medium;
    }

    public void OnLargeClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Large;
    }
}
```

The result of implementing the above code should look like the following:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/button-size"
           alt="{Platform} Button Sizing Example"
           github-src="inputs/button/size">
</code-view>

### Download

Setting the `download` property will prompt the user to save the linked URL instead of navigating to it.

```tsx
<IgrButton
    href=""
    variant="contained"
    download="url"
    target="_blank" >
    <span>Download</span>
</IgrButton>
```

```html
<igc-button
    href=""
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-button>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained" Download="Url" Href="https://www.infragistics.com/" Target="@ButtonBaseTarget._blank">
    Download
</IgbButton>
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
           alt="{Platform} Button Styling Example"
           github-src="inputs/button/styling">
</code-view>

<!-- WebComponents -->

## API Reference

* `Button`

Additional Web Components that were used:

* `RadioGroup`
* `Radio`

<!-- end: WebComponents -->

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

<!-- React -->
* [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
<!-- end: React -->

## API Members

 - `ButtonBase`
 - `Button`
 - `DisplayType`
 - `Download`
 - `Href`
 - `RadioGroup`
 - `Radio`
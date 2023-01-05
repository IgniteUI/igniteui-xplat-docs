---
title: {Platform} Form Component | {ProductName}
_description: Using the {Platform} Form Component you can quickly and easily create new contact form or a registration page for your next app. Learn more here.
_keywords: {Platform} form, {ProductName}, Infragistics
mentionedTypes: ['Form', 'Checkbox', 'Input', 'Radio', 'Switch']
---

# {Platform} Form Overview

The Form Component in {Platform} is used for setting up a contact form and/or a registration page that fit in any application's requirements. You can easily provide {Platform} form validation, define form orientation, and configure or customize your desired layout as well. The {Platform} form component also exposes events that give you the opportunity to respond to user actions.

## {Platform} Form Example

The following example represents `Form` that has some inputs, buttons and a checkbox inside.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="{Platform} Form Example"
           github-src="inputs/form/overview">
</code-view>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Form`, you need to register it as follows:

```ts
import {defineComponents, IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Form`, its necessary CSS, and register its module, like so:

```tsx
import { IgrFormModule, IgrForm } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrFormModule.register();
```
<!-- end: React -->

<!-- Blazor -->
Before using the `Form`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbFormModule));
```

You will also need to link an additional CSS file to apply the styling to the `Form` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

The simplest way to start using the `Form` is as follows:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="{Platform} Form Example"
           github-src="inputs/form/overview">
</code-view>

Form data is collected for the following components:
- `Checkbox`
- `Input`
- `Radio`
- `Switch`

When a form control is invalid, the form will not be submitted and an error message will be shown. If you want to specify that the form elements should not be validated when the form is submitted you can add the `novalidate` attribute to the `Form` element:

```tsx
<IgrForm novalidate="true"></IgrForm>
```

```html
  <igc-form novalidate>
    <!-- Form content -->
  </igc-form>
```

```razor
<IgbForm NoValidate="true" />
```

### Events

The Form component raises the following events:
- Submit - Raised when the form is submitted
- Reset - Raised when the form is reset

Here is an example showing how to add an event listener for the `Submit` event:

```ts
document.addEventListener('igcSubmit', function (event) {
  const customEvent = event as CustomEvent<FormData>;
  console.log(customEvent.detail);
});
```

### Methods

The Form component exposes the following methods:

| Method			| Description     			|
| ------------- 	|:-------------:			|
|`submit`|Submits the form data.|
|`reset`|Resets the form data.|
|`getFormData`|Collects the form data and returns a single FormData object.|
|`reportValidity`|Returns whether the element's child controls satisfy their validation constraints.|

<div class="divider"></div>


## API References

 - `Button`
 - `Checkbox`
 - `Form`
 - `Input`
 - `Radio`
 - `Submit`


## Additional Resources

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})
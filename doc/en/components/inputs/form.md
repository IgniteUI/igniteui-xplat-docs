---
title: $Platform$ Form | Data Visualization Tools | Infragistics
_description: Infragistics' $Platform$ form is a component used to collect user input from interactive controls. Improve your application with Ignite UI for  $Platform$!
_keywords: $Platform$ form, $ProductName$, Infragistics
mentionedTypes: ['Form']
---

# $Platform$ Form Overview

The `Form` collects data from Ignite UI Webcomponents form controls and native form controls. The resulting form data is exposed into a single FormData object.

## $Platform$ Form Example

The following example represents a form that has some inputs, buttons and a checkbox inside.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="$Platform$ Form Example"
           github-src="inputs/form/overview">
</code-view>

## Usage

<!-- Blazor -->

To get started with the `Form` component, you first need to register the `IgbFormModule`.

```razor
IgbFormModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

In order to use the Form component, the web components package must be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageWebComponents}
</pre>

<!-- end: WebComponents -->

Once the Form component is imported, you can add it on the page and add your content.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="$Platform$ Form Example"
           github-src="inputs/form/overview">
</code-view>

```ts
import {defineComponents, IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent } from 'igniteui-webcomponents';

defineComponents(IgcFormComponent, IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent);
```

Form data is collected for the following components:
- `Checkbox`
- `Input`
- `Radio`
- `Switch`

When a form control is invalid, the form will not be submitted and an error message will be shown. If you want to specify that the form elements should not be validated when the form is submitted you can add the `novalidate` attribute to the `Form` element:


```html
  <igc-form novalidate>
    <!-- Form content -->
  </igc-form>
```

### Events

The Form component raises the following events:
- igcSubmit - Raised when the form is submitted
- igcReset - Raised when the form is reset

Here is an example showing how to add an event listener for the `Submit`] event:

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

## API References

For more detailed information regarding the form's API, refer to the following links:
* `Form`

Additional components and/or directives that were used:
- `Button`
- `Checkbox`]
* `Input`
* `Radio`
* `Switch`

<div class="divider"></div>
## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [$Platform$ **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
---
title: {Platform} Form | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} form is a component used to collect user input from interactive controls. Improve your application with Ignite UI for  {Platform}!
_keywords: {Platform} form, {ProductName}, Infragistics
_language: kr
mentionedTypes: ["Form"]
---

# {Platform} Form Overview

The `Form` collects data from Ignite UI Webcomponents form controls and native form controls. The resulting form data is exposed into a single FormData object.

## {Platform} Form Example

The following example represents a form that has some inputs, buttons and a checkbox inside.

`sample="/inputs/form/overview", height="300", alt="{Platform} Form Example"`



## Dependencies

In order to use the Form component, the web components package must be installed.

```cmd
npm install {PackageWebComponents}
```

## Usage

Once the Form component is imported, you can add it on the page and add your content.

```html
<igc-form>
  <div>Subscribe</div>
  <igc-input required name="name" type="text" label="Your Name"></igc-input>
  <igc-input required name="email" type="email" label="Your E-mail"></igc-input>
  <igc-checkbox name="agreement">I accept the license agreement</igc-checkbox>
  <br />
  <igc-button type="reset">Reset</igc-button>
  <igc-button type="submit">Submit</igc-button>
</igc-form>
```

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
- `Submit` - Raised when the form is submitted
- `Reset` - Raised when the form is reset

Here is an example showing how to add an event listener for the `Submit` event:

```ts
document.addEventListener('igcSubmit', function (event) {
  const customEvent = event as CustomEvent<FormData>;
  console.log(customEvent.detail);
});
```

### Methods

The Form component exposes the following methods:

| Method           | Description   |
| -----------------|:-------------:|
| `Submit`         | Submits the form data. |
| `Reset`          | Resets the form data. |
| `GetFormData`    | Collects the form data and returns a single FormData object. |
| `ReportValidity` | Returns whether the element's child controls satisfy their validation constraints. |

## API References

* `Form`
- `Button`
- `Checkbox`
* `Input`
* `Radio`
* `Switch`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
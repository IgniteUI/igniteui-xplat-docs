---
title: {Platform} Checkbox Component | {ProductName}
_description: Learn how to use the {Platform} Checkbox Component to add checkboxes and enable checked, unchecked or indeterminate state for end-users.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Checkbox components, {Platform} Checkbox controls
mentionedTypes: ['Checkbox', 'Form']
---

# {Platform} Checkbox Overview

The {Platform} Checkbox is a component that lets you add checkboxes to your {Platform} apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the {Platform} checkbox component and ability to use it with forms.

## Checkbox Example

`sample="/inputs/checkbox/overview", height="100", alt="{Platform} Checkbox Example"`

<div class="divider--half"></div>

## Usage

At its core, the `Checkbox` allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `Checkbox`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCheckboxComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Checkbox`, its necessary CSS, and register its module, like so:

```tsx
import { IgrCheckboxModule, IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrCheckboxModule.register();
```
<!-- end: React -->

<!-- Blazor -->

Before using the `Checkbox`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCheckboxModule));
```

You will also need to link an additional CSS file to apply the styling to the `Checkbox` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<div class="divider--half"></div>

The simplest way to start using the `Checkbox` is as follows:

```tsx
<IgrCheckbox></IgrCheckbox>
```

```html
<igc-checkbox></igc-checkbox>
```

```razor
<IgbCheckbox />
```

>[!WARNING]
> The `Checkbox` component doesn't work with the standard `<form>` element. Use `Form` instead.


## Examples

### Label

To provide a meaningful label for the checkbox, simply place some text between the opening and closing tags:

```tsx
<IgrCheckbox><span>Label</span></IgrCheckbox>
```

```html
<igc-checkbox>Label</igc-checkbox>
```

```razor
<IgbCheckbox>Label</IgbCheckbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the `label-position` attribute of the checkbox. Allowed values are `before` and `after` (default):

```tsx
<IgrCheckbox labelPosition="before"></IgrCheckbox>
```

```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

```razor
<IgbCheckbox LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbCheckbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```tsx
<span id="checkbox-label">Label</span>
<IgrCheckbox ariaLabelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
```

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```

```razor
<span id="checkbox-label">Label</span>
<IgbCheckbox AriaLabelledby="checkbox-label" />
```

`sample="/inputs/checkbox/label", height="100", alt="{Platform} Checkbox Example"`



### Checked

You can use the `Checked` attribute of the component to determine whether the checkbox should be toggled on or off by default.

```tsx
<IgrCheckbox checked="true"></IgrCheckbox>
```

```html
<igc-checkbox checked></igc-checkbox>
```

```razor
<IgbCheckbox Checked="true" />
```

`sample="/inputs/checkbox/checking", height="100", alt="{Platform} Checkbox Example"`



### Indeterminate

You can use the `Indeterminate` property of the component to set the checkbox's value to neither **true** nor **false**.

```tsx
<IgrCheckbox indeterminate="true"></IgrCheckbox>
```

```html
<igc-checkbox indeterminate></igc-checkbox>
```

```razor
<IgbCheckbox Indeterminate="true" />
```

`sample="/inputs/checkbox/indeterminate", height="100", alt="{Platform} Checkbox Example"`



### Required

You can use the `Required` property to mark the checkbox as required.

```tsx
<IgrCheckbox required="true"></IgrCheckbox>
```

```html
<igc-checkbox required></igc-checkbox>
```

```razor
<IgbCheckbox Required="true" />
```

### Invalid

You can use the `Invalid` attribute to mark the checkbox as invalid.

```tsx
<IgrCheckbox invalid="true"></IgrCheckbox>
```

```html
<igc-checkbox invalid></igc-checkbox>
```

```razor
<IgbCheckbox Invalid="true" />
```

### Disabled

You can use the `Disabled` attribute to disable the checkbox.

```tsx
<IgrCheckbox disabled="true"></IgrCheckbox>
```

```html
<igc-checkbox disabled></igc-checkbox>
```

```razor
<IgbCheckbox Disabled="true" />
```

`sample="/inputs/checkbox/disabled", height="100", alt="{Platform} Checkbox Example"`



### Forms

You can use the `name` and `value` attributes when using the checkbox with `Form`.

```tsx
<IgrCheckbox name="wifi" value="enabled"></IgrCheckbox>
```

```html
<igc-checkbox name="wifi" value="enabled"></igc-checkbox>
```

```razor
<IgbCheckbox Name="wifi" Value="enabled" />
```

## Styling

The checkbox component exposes several CSS parts (`base`, `control`, `indicator`, and `label`) to give you full control over its styling.

```css
igc-checkbox::part(indicator) {
  &::after {
    padding: 12px;
    border-radius: 14px;
  }
}

igc-checkbox::part(indicator checked) {
  border-radius: 0;

  &::after {
    background: olive;
    border-color: olive;
    stroke: beige;
  }
}
```
## API References

 - `Checkbox`
 - `Checked`
 - `Disabled`
 - `Form`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

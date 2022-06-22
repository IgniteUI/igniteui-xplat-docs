---
title: $Platform$ Checkbox Component | $ProductName$
_description: Learn how to use the $Platform$ Checkbox Component to add checkboxes and enable checked, unchecked or indeterminate state for end-users.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Checkbox components, $Platform$ Checkbox controls
mentionedTypes: ['Checkbox', 'Form']
---

# $Platform$ Checkbox Overview

The $Platform$ Checkbox is a component that lets you add checkboxes to your $Platform$ apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the $Platform$ checkbox component and ability to use it with forms.

## Checkbox Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/checkbox-overview" alt="$Platform$ Checkbox Example"
           github-src="inputs/checkbox/overview">
</code-view>

<div class="divider--half"></div>

## Usage

At its core, the `Checkbox` allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Checkbox`, you need to register it as follows:

```razor
IgbCheckboxModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Checkbox` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";

defineComponents(IgcCheckboxComponent);
```

<div class="divider--half"></div>


The simplest way to start using the `Checkbox` is as follows:

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

```html
<igc-checkbox>Label</igc-checkbox>
```

```razor
<IgbCheckbox>Label</IgbCheckbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the `label-position` attribute of the checkbox. Allowed values are `before` and `after` (default):


```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

```razor
<IgbCheckbox LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbCheckbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```

```razor
<span id="checkbox-label">Label</span>
<IgbCheckbox AriaLabelledby="checkbox-label" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-label"
           alt="$Platform$ Checkbox Example"
           github-src="inputs/checkbox/label">
</code-view>

### Checked

You can use the `Checked` attribute of the component to determine whether the checkbox should be toggled on or off by default.

```html
<igc-checkbox checked></igc-checkbox>
```

```razor
<IgbCheckbox Checked="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-checking"
           alt="$Platform$ Checkbox Example"
           github-src="inputs/checkbox/checking">
</code-view>

### Indeterminate

You can use the `Indeterminate` property of the component to set the checkbox's value to neither **true** nor **false**.

```html
<igc-checkbox indeterminate></igc-checkbox>
```

```razor
<IgbCheckbox Indeterminate="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-indeterminate"
           alt="$Platform$ Checkbox Example"
           github-src="inputs/checkbox/indeterminate">
</code-view>

### Required

You can use the `Required` property to mark the checkbox as required.

```html
<igc-checkbox required></igc-checkbox>
```

```razor
<IgbCheckbox Required="true" />
```

### Invalid

You can use the `Invalid` attribute to mark the checkbox as invalid.

```html
<igc-checkbox invalid></igc-checkbox>
```

```razor
<IgbCheckbox Invalid="true" />
```

### Disabled

You can use the `Disabled` attribute to disable the checkbox.

```html
<igc-checkbox disabled></igc-checkbox>
```

```razor
<IgbCheckbox Disabled="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-disabled"
           alt="$Platform$ Checkbox Example"
           github-src="inputs/checkbox/disabled">
</code-view>

### Forms

You can use the `name` and `value` attributes when using the checkbox with `Form`.

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

<!-- WebComponents -->

## API Reference

* `Checkbox`

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

## API Members

 - `Checkbox`
 - `Checked`
 - `Disabled`
 - `Form`
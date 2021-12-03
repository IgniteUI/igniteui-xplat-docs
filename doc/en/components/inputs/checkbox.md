---
title: $Platform$ Checkbox Component
_description: $ProductName$ Checkbox component is a selection control that allows users to make a binary choice for a certain condition.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Checkbox components, $Platform$ Checkbox controls
mentionedTypes: ['Checkbox', 'Form']
---

# $Platform$ Checkbox Overview

The $ProductName$ Checkbox component is a selection control that allows users to make a binary choice for a certain condition. It behaves similarly to the native browser checkbox.

<div class="divider"></div>

## Checkbox Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/checkbox-sample-1" alt="$Platform$ Checkbox Example"
           github-src="inputs/checkbox/sample-1">
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

Before using the `Checkbox`, you need and register it as follows:

```razor
IgbCheckboxModule.Register(IgniteUIBlazor);
```

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

<!-- Blazor -->

Use the `Checked` property of the component in order to determine whether the checkbox should be toggled on or off by default.

<!-- end: Blazor -->

<!-- WebComponents -->

Use the `checked` attribute to toggle on the checkbox.

<!-- end: WebComponents -->

```html
<igc-checkbox checked></igc-checkbox>
```

```razor
<IgbCheckbox Checked="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/checkbox-checked"
           alt="$Platform$ Checkbox Example"
           github-src="inputs/checkbox/checked">
</code-view>

### Indeterminate

<!-- Blazor -->

Use the `Indeterminate` property of the component to set the checkbox's value to neither `true` nor `false`.

<!-- end: Blazor -->

<!-- WebComponents -->

Use the `indeterminate` attribute to set the value of the checkbox to neither `true` nor `false`.

<!-- end: WebComponents -->

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

<!-- Blazor -->

Use the `Required` property to mark the checkbox as required.

<!-- end: Blazor -->

<!-- WebComponents -->

Use the `required` attribute to mark the checkbox as required.

<!-- end: WebComponents -->

```html
<igc-checkbox required></igc-checkbox>
```

```razor
<IgbCheckbox Required="true" />
```

### Invalid

<!-- Blazor -->

Use the `Invalid` property to mark the checkbox as invalid.

<!-- end: Blazor -->

<!-- WebComponents -->

Use the `invalid` attribute to mark the checkbox as invalid.

<!-- end: WebComponents -->

```html
<igc-checkbox invalid></igc-checkbox>
```

```razor
<IgbCheckbox Invalid="true" />
```

### Disabled

<!-- Blazor -->

Use the `Disabled` property to disable the checkbox.

<!-- end: Blazor -->

<!-- WebComponents -->

Use the `disabled` attribute to disable the checkbox.

<!-- end: WebComponents -->

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

Use the `name` and `value` attributes when using the checkbox with `Form`.

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

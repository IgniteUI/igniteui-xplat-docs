---
title: $Platform$ Checkbox Component
_description: $ProductName$ Checkbox component is a selection control that allows users to make a binary choice for a certain condition.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Checkbox components, $Platform$ Checkbox controls
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

At its core, the checkbox component allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

<!-- Blazor -->

To get started with the checkbox component, you will need to include its module, like so:

```razor
IgbCheckboxModule.Register(IgniteUIBlazor);
```

<!-- end:Blazor>

<!-- WebComponents -->

To get started with the checkbox web component, first you need to install the $ProductName$ by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the [IgcCheckboxComponent]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html) in the typescript file where you want to use it and register it by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";

defineComponents(IgcCheckboxComponent);
```

<!-- end: WebComponents -->

The simplest way to start using the checkbox is as follows:

```html
<igc-checkbox></igc-checkbox>
```

```razor
<IgbCheckbox />
```

>[!WARN]
> The checkbox component doesn't work with the standard `<form>` element. Use `<igc-form>` instead.

## Examples

### Label

To provide a meaningful label for the checkbox, simply place some text between the opening and closing tags:

```html
<igc-checkbox>Label</igc-checkbox>
```

```razor
<IgbCheckbox>Label</IgbCheckbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the [`label-position`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#label-position) attribute of the checkbox. Allowed values are `before` and `after`(default):


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

Use the [`checked`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#checked) attribute to toggle on the checkbox.

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

Use the [`indeterminate`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#indeterminate) attribute to set the value of the checkbox to neither `true` nor `false`.

<!-- end: WebComponents -->

```html
<igc-checkbox indeterminate></igc-checkbox>
```

```razor
IgbCheckbox Indeterminate="true" />
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

Use the [`required`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#required) attribute to mark the checkbox as required.

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

Use the [`invalid`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#invalid) attribute to mark the checkbox as invalid.

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

Use the [`disabled`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#disabled) attribute to disable the checkbox.

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

Use the [`name`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#name) and [`value`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html#value) attributes when using the checkbox with `<igc-form>`.

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

## API Reference

* [IgcCheckboxComponent]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html)

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

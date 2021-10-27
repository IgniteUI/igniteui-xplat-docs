---
title: $Platform$ Checkbox Component
_description: $ProductName$ Checkbox component is a selection control that allows users to make a binary choice for a certain condition.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Checkbox components, $Platform$ Checkbox controls
---


# $Platform$ Checkbox Overview
<p class="highlight">The $ProductName$ Checkbox component is a selection control that allows users to make a binary choice for a certain condition. It behaves similarly to the native browser checkbox.</p>
<div class="divider"></div>

## Checkbox Example

<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/checkbox-sample-1" alt="$Platform$ Checkbox Example">
</code-view>

<div class="divider--half"></div>

## Usage
At its core, the checkbox component allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

To get started with the checkbox web component, first you need to install the $ProductName$ by typing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import the IgcSwitchComponent in the typescript file where you want to use it:

```ts
import { IgcSwitchComponent } from "igniteui-webcomponents/src/components/checkbox/checkbox";
```

The simplest way to start using the checkbox is as follows:

```html
<igc-checkbox></igc-checkbox>
```

>[!WARN]
> The checkbox component doesn't work with the standart `<form>` element. Use `<igc-form>` instead.

## Examples

### Label

To provide a meaningful label for the checkbox, simply place some text between the opening and closing tags:

```html
<igc-checkbox>Label</igc-checkbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the `label-position` attribute of the checkbox. Allowed values are `before` and `after`(default):


```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/checkbox-label"
           alt="$Platform$ Avatar Example"
           github-src="layouts/checkbox-label">
</code-view>

### Checked

Use the `checked` attribute to toggle on the checkbox.

```html
<igc-checkbox checked></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/checkbox-checked"
           alt="$Platform$ Avatar Example"
           github-src="layouts/checkbox-checked">
</code-view>

### Indeterminate

Use the `indeterminate` attribute to set the value of the checkbox to neither `true` nor `false`.

```html
<igc-checkbox checked></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/checkbox-indeterminate"
           alt="$Platform$ Avatar Example"
           github-src="layouts/checkbox-indeterminate">
</code-view>

### Required

Use the `required` attribute to mark the checkbox as required.

```html
<igc-checkbox required></igc-checkbox>
```

### Ivalid

Use the `invalid` attribute to mark the checkbox as invalid.

```html
<igc-checkbox invalid></igc-checkbox>
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html
<igc-checkbox disabled></igc-checkbox>
```
<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/checkbox-disabled"
           alt="$Platform$ Avatar Example"
           github-src="layouts/checkbox-disabled">
</code-view>

### Forms

Use the `name` and `value` attributes when using the checkbox with `<igc-form>`.

```html
<igc-checkbox name="wifi" value="enabled"></igc-checkbox>
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

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

---
title: $Platform$ Switch Component – $ProductName$
_description: $ProductName$ Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Switch components, $Platform$ Switch controls
mentionedTypes: ['Switch']
---

# $Platform$ Switch

The $ProductName$ Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## $Platform$ Switch Example

<code-view style="height:100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/switches-overview" alt="$Platform$ Switch Example"
           github-src="inputs/switches/overview">
</code-view>

<div class="divider--half"></div>

## Usage

At its core, the `Switch` component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Switch`, you need to register it as follows:

```razor
IgbSwitchModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Switch` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcSwitchComponent } from "igniteui-webcomponents";

defineComponents(IgcSwitchComponent);
```

The simplest way to start using the `Switch` is as follows:

```html
<igc-switch></igc-switch>
```

```razor
<IgbSwitch />
```

>[!WARNING]
> The `Switch` component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```html
<igc-switch>Label</igc-switch>
```

```razor
<IgbSwitch>Label</IgbSwitch>
```

You can specify if the label should be positioned before or after the switch toggle by setting the `LabelPosition` attribute of the switch. Allowed values are `before` and `after`(default):

```html
<igc-switch label-position="before">Label</igc-switch>
```

```razor
<IgbSwitch LabelPosition="@CheckboxBaseLabelPosition.Before">Label</IgbSwitch>
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="switch-label">Label</span>
<igc-switch aria-labelledby="switch-label"></igc-switch>
```

```razor
<span id="switch-label>Label</span>
<IgbSwitch AriaLabelledBy="switch-label" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switches-label"
           alt="$Platform$ Avatar Example"
           github-src="inputs/switches/label">
</code-view>

### Checked

You can use the `checked` attribute to toggle on the switch.

```html
<igc-switch checked></igc-switch>
```

```razor
<IgbSwitch Checked="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switches-checking"
           alt="$Platform$ Avatar Example"
           github-src="inputs/switches/checking">
</code-view>

### Required

You can use the `required` attribute to mark the switch as required.

```html
<igc-switch required></igc-switch>
```

```razor
<IgbSwitch Required="true" />
```

### Invalid

You can use the `invalid` attribute to mark the switch as invalid.

```html
<igc-switch invalid></igc-switch>
```

```razor
<IgbSwitch Invalid="true" />
```

### Disabled

You can use the `disabled` attribute to disable the switch.

```html
<igc-switch disabled></igc-switch>
```

```razor
<IgbSwitch Disabled="true" />
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/switches-disabled"
           alt="$Platform$ Avatar Example"
           github-src="inputs/switches/disabled">
</code-view>

### Forms

You can use the `name` and `value` attributes when using the switch with `Form`.

```html
<igc-switch name="wifi" value="enabled"></igc-switch>
```

```razor
<IgbSwitch Name="wifi" Value="enabled" />
```

## Styling

The switch component exposes several CSS parts (`base`, `control`, `thumb`, and `label`) to give you full control over its styling.

```css
igc-switch::part(control) {
  background: beige;
  border-radius: 0;
}

igc-switch::part(thumb) {
  background: olive;
  border-radius: 2px;
  box-shadow: none;
}
```

<!-- WebComponents -->

## API Reference

* `Switch`

<!-- end: WebComponents -->

<div class="divider--half"></div>

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

 - `Form`
 - `LabelPosition`
 - `Switch`
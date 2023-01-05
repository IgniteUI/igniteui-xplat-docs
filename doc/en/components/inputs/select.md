---
title: {Platform} Select Component – {ProductName}
_description: {ProductName} Select component
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Select components, {Platform} Select controls
mentionedTypes: ['Select']
---

# {Platform} Select

The {ProductName} Select component allows a single selection from a list of items, placed in a dropdown. This form control offers a quick items list navigation, including selection, based on a single or multiple characters match.

## {Platform} Select Example

<code-view style="height:220px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/select-overview" alt="{Platform} Select Example"
           github-src="inputs/select/overview">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Select` component, you need to register it together with its additional components:

```ts
import {
    defineComponents,
    IgcSelectComponent
}
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSelectComponent);
```

<!-- end: WebComponents -->

<!-- Blazor -->

Before using the `Select` component, you need to register it together with its additional components:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSelectModule));
```

You will also need to link an additional CSS file to apply the styling to the `Select` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

> [!NOTE]
> Please note that the select header and group components are not mandatory unless you want to use them.

To start using the component add the `Select` along with a list of `SelectItem`'s to choose from:

```html
<igc-select>
    <igc-select-item value="orange">Orange</igc-select-item>
    <igc-select-item value="apple">Apple</igc-select-item>
    <igc-select-item value="banana">Banana</igc-select-item>
    <igc-select-item value="mango">Mango</igc-select-item>
</igc-select>
```

### Select

The `Select` component can be used inside an `Form` thus it exposes a `Name` property to be registered with. It also has a `Label`, `Placeholder`, and `Size` properties. The `Outlined` property is used for styling purposes only when it comes to the Material theme. Except for the default slot, the component provides a few other slots including `header`, `footer`, `helper-text`, `prefix`, `suffix`, and `toggle-icon`.

### Item

The `SelectItem` component allows the users to declaratively specify a list of options to be used by the `Select` control. Each item provides a `Value` property that represents the data it carries upon selection. The `SelectItem` has a default slot which allows you to specify the text content of the item. This text content will be used as value in case the `Value` property is not present on the `SelectItem`. You could also provide custom content to be rendered before or after the `SelectItem` content using the `prefix` and `suffix` slots. You could predefine a selected item by setting the `Selected` property. You could also disable some or all items via the `Disabled` property.

<code-view style="height: 220px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-item"
           alt="{Platform} Select Item Example"
           github-src="inputs/select/item">
</code-view>

### Header

You can use the `SelectHeader` to provide a header for a group of items.

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-header"
           alt="{Platform} Select Header Example"
           github-src="inputs/select/header">
</code-view>

### Group

Multiple `SelectItem`s can be placed between the opening and closing brackets of an `SelectGroup` component so that users can visually group them together. The `SelectGroup` can be labelled via its `label` slot and disabled via its `Disabled` property.

> [!NOTE]
> Keep in mind that if a select group is disabled, you cannot enable separate items of it.

<code-view style="height: 480px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-group"
           alt="{Platform} Select Group Example"
           github-src="inputs/select/group">
</code-view>

## Validation

In addition, the `Select` supports most of the `Input` properties, such as `Required`, `Disabled`, `Autofocus`, etc. The component also exposes a method bound to its validation:

- reportValidity() - checks for validity and focuses the component if invalid.

## Keyboard Navigation

When the select is focused and the list of options is **not visible**:

- Open the `Select` using the <kbd>ALT + Up/Down Arrow</kbd> combination or by clicking on the <kbd>Space</kbd> or the <kbd>Enter</kbd> key.
- Close the `Select` using the <kbd>ALT + Up/Down Arrow</kbd> combination or any of the <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Esc</kbd> or `Tab` keys.
- Using the <kbd>Up/Left Arrow</kbd> keys will select the previous item in the list.
- Using the <kbd>Down/Right Arrow</kbd> keys will select the next item in the list.
- Using the <kbd>Home</kbd> or <kbd>End</kbd> keys will select the first or last item in the list.
- Typing characters will query the list of items and select the one that most closely matches the current user input.

When the select is focused and the list of options is **visible**:

- Using the <kbd>Enter</kbd> or <kbd>Space</kbd> keys will select an item and close the list.
- Using the <kbd>Up/Left Arrow</kbd> keys will activate the previous item in the list.
- Using the <kbd>Down/Right Arrow</kbd> keys will activate the next item in the list.
- Using the <kbd>Home</kbd> or <kbd>End</kbd> keys will activate the first or last item in the list.

> [!NOTE]
> The `Select` component supports only **single** selection of items.

<!-- WebComponents -->

## Styling

You can change the appearance of the {ProductName} `Select` component and its items, by using the exposed CSS parts listed below:

### CSS Parts

**Select Component**

Part name | Description
---------|------------
`input` | The encapsulated igc-input.
`label` | The encapsulated text label.
`list` | A wrapper that holds the list of options.
`prefix`  | A prefix wrapper that renders content before the input.
`suffix` | A suffix wrapper that renders content after the input.
`toggle-icon` | A toggle-icon wrapper that renders content inside the suffix wrapper.
`helper-text` | A helper-text wrapper that renders content below the input.

**Select Item Component**

Part name | Description
---------|------------
`content` | The main wrapper that holds the text content of an item.
`prefix`  | A prefix wrapper that renders content before the main wrapper.
`suffix` | A suffix wrapper that renders content after the main wrapper.

**Select Group Component**

Part name | Description
---------|------------
`Label` | A label wrapper that renders content above the select group items.

<code-view style="height: 380px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/select-styling"
           alt="{Platform} Select Styling Example"
           github-src="inputs/select/styling">
</code-view>

<!-- end: WebComponents -->


## API Reference

* `Select`
* `SelectItem`
* `SelectHeader`
* `SelectGroup`


## Additional Resources

* [{ProductName} **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})
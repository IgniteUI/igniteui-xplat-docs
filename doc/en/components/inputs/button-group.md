---
title: {Platform} Button Group Component | {ProductName}
_description: Get started with the {Platform} Button Group Component - series of {Platform} Toggle Buttons, exposing features such as layout and selection.
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Button Group Components, Infragistics
mentionedTypes: ['ToggleButton', 'ButtonGroup']
---

# {Platform} Button Group Overview

The {Platform} Button Group component is used to organize `ToggleButton`s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## {Platform} Button Example

`sample="/inputs/button-group/overview", height="85", alt="{Platform} Button Group Example"`

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `ButtonGroup`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcButtonGroupComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonGroupComponent);
```
<!-- end: WebComponents -->

Now that you have the {ProductName} Button Group imported, you can start with a basic configuration of the `ButtonGroup` and its buttons.

Use the `ButtonGroup` selector to wrap your `ToggleButton`s and display them into a button group. If you want a button to be selected by default, use the `selected` attribute:

```html
 <igc-button-group>
    <igc-toggle-button value="left">
        <igc-icon name="format_align_left" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="center">
        <igc-icon name="format_align_center" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="right">
        <igc-icon name="format_align_right" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="justify" selected>
        <igc-icon name="format_align_justify" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

## Examples

### Alignment
Use the `alignment` property to set the orientation of the buttons in the button group.

`sample="/inputs/button-group/alignment", height="220", alt="{Platform} Button Group Alignment Example"`

### Selection
In order to configure the {ProductName} `ButtonGroup` selection, you could use its `selection` property. This property accepts the following three modes: 
- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed `ButtonGroup` selection modes:

`sample="/inputs/button-group/selection", height="170", alt="{Platform} Button Group Selection Example"`

A `ToggleButton` could be marked as selected via its `selected` attribute or through the `ButtonGroup` `selectedItems` attribute:

```html
<igc-button-group selected-items='["bold"]'>
    <igc-toggle-button value="bold">
        <igc-icon name="bold" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="italic">
        <igc-icon name="italic" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="underline">
        <igc-icon name="underline" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

> [!Note]
> Setting `ToggleButton` value attribute is mandatory for using the `selectedItems` property of the `ButtonGroup`.
### Size
The `--ig-size` CSS custom property can be used to control the size of the button group.

`sample="/inputs/button-group/size", height="80", alt="{Platform} Button Group Size Example"`

## Styling

The `ButtonGroup` component exposes `group` CSS part that allows us to style the button group container. 
Also, the `ToggleButton`s provide `toggle` CSS part that could be used to style the button element.

`sample="/inputs/button-group/styling", height="200", alt="{Platform} Button Group Styling Example"`

## API Reference

- `ButtonGroup`
- `ToggleButton`
- `Ripple`
- `Icon`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

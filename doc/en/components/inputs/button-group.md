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

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `ButtonGroup`, its necessary CSS, and register its module, like so:

```tsx
import { IgrButtonGroupModule, IgrButtonGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();
```
<!-- end: React -->

<!-- Blazor -->
Before using the `ButtonGroup`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonGroupModule));
```

You will also need to link an additional CSS file to apply the styling to the `ButtonGroup` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

Now that you have the {ProductName} Button Group imported, you can start with a basic configuration of the `ButtonGroup` and its buttons.

Use the `ButtonGroup` selector to wrap your `ToggleButton`s and display them into a button group. If you want a button to be selected by default, use the `Selected` attribute:

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

```tsx
<IgrButtonGroup>
    <IgrToggleButton value="left" key="button-left">
        <IgrIcon name="format_align_left" collection="material" key="icon-left" />
        <IgrRipple key="ripple-left" />
    </IgrToggleButton>
    <IgrToggleButton value="center" key="button-center">
        <IgrIcon name="format_align_center" collection="material" key="icon-center" />
        <IgrRipple key="ripple-center" />
    </IgrToggleButton>
    <IgrToggleButton value="right" key="button-right">
        <IgrIcon name="format_align_right" collection="material" key="icon-right" />
        <IgrRipple key="ripple-right" />
    </IgrToggleButton>
    <IgrToggleButton value="justify" selected={true} key="button-justify">
        <IgrIcon name="format_align_justify" collection="material" key="icon-justify" />
        <IgrRipple key="ripple-justify" />
    </IgrToggleButton>
</IgrButtonGroup>
```

```razor
<IgbButtonGroup>
    <IgbToggleButton Value="left">
        <IgbIcon @ref="iconRef" IconName="format_align_left" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="center">
        <IgbIcon IconName="format_align_center" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="right">
        <IgbIcon IconName="format_align_right" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="justify" Selected="true">
        <IgbIcon IconName="format_align_justify" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
</IgbButtonGroup>
```

## Examples

### Alignment
Use the `Alignment` property to set the orientation of the buttons in the button group.

`sample="/inputs/button-group/alignment", height="220", alt="{Platform} Button Group Alignment Example"`

### Selection
In order to configure the {ProductName} `ButtonGroup` selection, you could use its `Selection` property. This property accepts the following three modes: 
- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed `ButtonGroup` selection modes:

`sample="/inputs/button-group/selection", height="170", alt="{Platform} Button Group Selection Example"`

A `ToggleButton` could be marked as selected via its `Selected` attribute or through the `ButtonGroup` `SelectedItems` attribute:

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

    <igc-toggle-button value="underlined">
        <igc-icon name="underlined" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

```tsx
<IgrButtonGroup selectedItems={['bold']}>
    <IgrToggleButton value="bold" key="button-bold">
        <IgrIcon name="bold" collection="material" key="icon-bold" />
        <IgrRipple key="ripple-bold" />
    </IgrToggleButton>
    <IgrToggleButton value="italic" key="button-italic">
        <IgrIcon name="italic" collection="material" key="icon-italic" />
        <IgrRipple key="ripple-italic" />
    </IgrToggleButton>
    <IgrToggleButton value="underlined" key="button-underlined">
        <IgrIcon name="underlined" collection="material" key="icon-underlined" />
        <IgrRipple key="ripple-underlined" />
    </IgrToggleButton>
</IgrButtonGroup>
```

```razor
<IgbButtonGroup SelectedItems='["bold"]'>
    <IgbToggleButton Value="bold">
        <IgbIcon @ref="iconRef" IconName="bold" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="italic">
        <IgbIcon IconName="italic" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="underlined">
        <IgbIcon IconName="underlined" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
</IgbButtonGroup>
```

> [!Note]
> Setting `ToggleButton` `Value` attribute is mandatory for using the `SelectedItems` property of the `ButtonGroup`.

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

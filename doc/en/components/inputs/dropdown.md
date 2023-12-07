---
title: {Platform} Dropdown List Component | {ProductName}
_description: With {Platform} Dropdown List component you can add interactivity and see styling options to a scrollable list of items in your app. Try it now.  {Platform} now.
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Dropdown Component, Infragistics
mentionedTypes: ['Dropdown', 'DropdownItem', 'DropdownHeader', 'DropdownGroup']
---

# {Platform} Dropdown List Component - Overview

Feature-rich, the {Platform} Dropdown list offers out-of-the-box filtering, accessibility, preselected values, flexible data binding, grouping, UI customization, and more. What this component practically does is to effectively and easily replace HTML select tags, enabling users to quickly choose a non-editable value from a predefined set of several options. 

The Ignite UI for {Platform} Dropdown component displays an toggle list of predefined values and allows users to easily select a single option item with a click. It can be quickly configured to act as a {Platform} dropdown menu or you can simply use it to deliver more useful visual information by grouping data. Also, with grouping you can use both flat and hierarchical data. 

With our component, you get all the functions and customization options you need for your project – styling customizations, {Platform} Dropdown placement options, templates and ability to change what and how is displayed in the header, footer, body, list, etc. 

## {Platform} Dropdown Example

The following {Platform} Dropdown List example demonstrates the use of simple interactive {Platform} Dropdown menu in action with three basic options to choose from. See how it works.

`sample="/inputs/dropdown/overview", height="220", alt="{Platform} Dropdown Example"`



## How to use the Dropdown List with {ProductName}

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

```ts
import {
    defineComponents,
    IgcDropdownComponent
} from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDropdownComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Dropdown`, its necessary CSS, and register its module, like so:

```tsx
import { IgrDropdownModule, IgrDropdown } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrDropdownModule.register();
```
<!-- end: React -->

<!-- Blazor -->

Before using the `Dropdown`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDropdownModule));
```

<!-- end: Blazor -->

The simplest way to start using the `Dropdown` is as follows:

```html
<igc-dropdown>
    <igc-button slot="target">Options</igc-button>
    <igc-dropdown-item>Option 1</igc-dropdown-item>
    <igc-dropdown-item>Option 2</igc-dropdown-item>
    <igc-dropdown-item>Option 3</igc-dropdown-item>
</igc-dropdown>
```

### Target

The {Platform} Dropdown list is positioned relatively to its target. The `target` slot allows you to provide a built-in component which toggles the `open` property on click. In some cases you would want to use an external target or use another event to toggle the opening of the Dropdown. You can achieve this using the `Show`, `Hide` and `Toggle` methods which allow you to provide the target as a parameter. By default, the Dropdown list uses `absolute` CSS position. You will need to set the `PositionStrategy` of the {Platform} Dropdown to `fixed` when the target element is inside a fixed container, but the Dropdown is not. The Dropdown list is automatically sized based on its content, if you want the list to have the same width as the target, you should set the `SameWidth` property to `true`.

`sample="/inputs/dropdown/target", height="200", alt="{Platform} Dropdown Target Example"`



### Position

The preferred placement of the {Platform} Dropdown can be set using the `Placement` property. The default placement of the Dropdown is `bottom-start`. The `Flip` property determines whether the placement should be flipped if there is not enough space to display the Dropdown at the specified placement. The distance from the {Platform} Dropdown list to its target can be specified using the `Distance` property.

`sample="/inputs/dropdown/position", height="520", alt="{Platform} Dropdown Position Example"`



### Selection

The `Dropdown` emits the `Change` event when the user selects an item. The `Select` method of the Dropdown allows you to select an item by its index or value.

### Item

The `DropdownItem` represents a selectable item in the Dropdown list. You could predefine a selected item by setting the `Selected` property. You could also disable an item so that it can't be selected using the `Disabled` property. The `DropdownItem` has a default slot which allows you to specify the content of the item. You could also provide custom content to be rendered before or after the content using the `prefix` and `suffix` slots. The `Value` property allows you to provide a custom value to an item. If the `Value` is not set, it resolves to the text content of the item.

`sample="/inputs/dropdown/item", height="220", alt="{Platform} Dropdown Item Example"`



### Header

You could use the `DropdownHeader` to provide a header for a group of items.

`sample="/inputs/dropdown/header", height="250", alt="{Platform} Dropdown Header Example"`



### Group

The {Platform} Dropdown's items can also be grouped using the `DropdownGroup`, making it easier for users to differentiate separate categories. See it in action in this {Platform} Dropdown List example:

`sample="/inputs/dropdown/group", height="420", alt="{Platform} Dropdown Group Example"`



### Scroll Strategy

The `ScrollStrategy` property determines the behavior of the component during scrolling the container of the target element. The default value is `scroll` which means that the Dropdown will be scrolled with its target. Setting the property to `block` will block the scrolling if the Dropdown is opened. You could also set the property to `close` which means that the Dropdown will be closed automatically on scroll.

### Keep Open

By default, the Dropdown is closed automatically when the user clicks outside of it or selects an item. You could prevent this behavior using the `KeepOpenOnOutsideClick` and `KeepOpenOnSelect` properties.

## Styling

You can change the appearance of the Dropdown and its items, by using the exposed CSS parts. The `Dropdown` exposes `base` and `list` parts, the `DropdownItem` exposes `prefix`, `content` and `suffix` parts and the `DropdownGroup` exposes `label` part.

`sample="/inputs/dropdown/styling", height="320", alt="{Platform} Dropdown Styling Example"`



## API Reference

* `Dropdown`
* `DropdownItem`
* `DropdownHeader`
* `DropdownGroup`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
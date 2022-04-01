---
title: $Platform$ Drop Down Component | $ProductName$
_description: Add interactivity and see styling options to a scrollable list of items in your app. Get started using the Drop Down Component in $ProductName$ now.
_keywords: $Platform$, UI controls, web widgets, UI widgets, $Platform$ Drop Down Component, Infragistics
mentionedTypes: ['DropDown', 'DropDownItem', 'DropDownHeader', 'DropDownGroup']
_language: ja
---

# $Platform$ Drop Down Overview


The $Platform$ Drop Down is a component, which displays a toggleable list of predefined values and allows users to easily select a single option item with a click. It can be quickly configured to act as a drop down menu or you can simply use it to deliver more useful visual information by grouping data. With grouping you can use both flat and hierarchical data.

## $Platform$ Drop Down Example

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-overview"
           alt="$Platform$ Drop Down Example"
           github-src="inputs/dropdown/overview">
</code-view>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `DropDown`, you need to register it as follows:

```razor
IgbDropDownModule.Register(IgniteUIBlazor);
```

```ts
import { 
    defineComponents,
    IgcDropDownComponent,
    IgcDropDownItemComponent,
    IgcDropDownHeaderComponent,
    IgcDropDownGroupComponent 
} from "igniteui-webcomponents";

defineComponents(IgcDropDownComponent, IgcDropDownItemComponent, IgcDropDownHeaderComponent, IgcDropDownGroupComponent);
```

The simplest way to start using the `DropDown` is as follows:

```html
<igc-dropdown>
    <igc-button slot="target">Options</igc-button>
    <igc-dropdown-item>Option 1</igc-dropdown-item>
    <igc-dropdown-item>Option 2</igc-dropdown-item>
    <igc-dropdown-item>Option 3</igc-dropdown-item>
</igc-dropdown>
```

### Target

The Drop Down list is positioned relatively to its target. The `target` slot allows you to provide a built-in component which toggles the `open` property on click. In some cases you would want to use an external target or use another event to toggle the opening of the Drop Down. You can achieve this using the `Show`, `Hide` and `Toggle` methods which allow you to provide the target as a parameter. By default, the Drop Down list uses `absolute` CSS position. You will need to set the `PositionStrategy` of the Drop Down to `fixed` when the target element is inside a fixed container, but the Drop Down is not. The Drop Down list is automatically sized based on its content, if you want the list to have the same width as the target, you should set the `SameWidth` property to `true`.

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-target"
           alt="$Platform$ Drop Down Target Example"
           github-src="inputs/dropdown/target">
</code-view>

### Position

The preferred placement of the Drop Down can be set using the `Placement` property. The default placement of the Drop Down is `bottom-start`. The `Flip` property determines whether the placement should be flipped if there is not enough space to display the Drop Down at the specified placement. The distance from the Drop Down list to its target can be specified using the `Distance` property.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-position"
           alt="$Platform$ Drop Down Position Example"
           github-src="inputs/dropdown/position">
</code-view>

### Selection

The `DropDown` emits the `igcChange` event when the user selects an item. The `Select` method of the Drop Down allows you to select an item by its index or value.

### Item

The `DropDownItem` represents a selectable item in the Drop Down list. You could predefine a selected item by setting the `Selected` property. You could also disable an item so that it can't be selected using the `Disabled` property. The `DropDownItem` has a default slot which allows you to specify the content of the item. You could also provide custom content to be rendered before or after the content using the `prefix` and `suffix` slots. The `Value` property allows you to provide a custom value to an item. If the `Value` is not set, it resolves to the text content of the item.

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-item"
           alt="$Platform$ Drop Down Item Example"
           github-src="inputs/dropdown/item">
</code-view>

### Header

You could use the `DropDownHeader` to provide a header for a group of items.

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-header"
           alt="$Platform$ Drop Down Header Example"
           github-src="inputs/dropdown/header">
</code-view>

### Group

The Drop Down items can also be grouped using the `DropDownGroup`, making it easier for users to differentiate separate categories.

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-group"
           alt="$Platform$ Drop Down Group Example"
           github-src="inputs/dropdown/group">
</code-view>

### Scroll Strategy

The `ScrollStrategy` property determines the behavior of the component during scrolling the container of the target element. The default value is `scroll` which means that the Drop Down will be scrolled with its target. Setting the property to `block` will block the scrolling if the Drop Down is opened. You could also set the property to `close` which means that the Drop Down will be closed automatically on scroll.

### Keep Open

By default, the Drop Down is closed automatically when the user clicks outside of it or selects an item. You could prevent this behavior using the `KeepOpenOnOutsideClick` and `KeepOpenOnSelect` properties.

## Styling

You can change the appearance of the Drop Down and its items, by using the exposed CSS parts. The `DropDown` exposes `base` and `list` parts, the `DropDownItem` exposes `prefix`, `content` and `suffix` parts and the `DropDownGroup` exposes `label` part.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/dropdown-styling"
           alt="$Platform$ Drop Down Styling Example"
           github-src="inputs/dropdown/styling">
</code-view>

<!-- WebComponents -->

## API Reference

* `DropDown`
* `DropDownItem`
* `DropDownHeader`
* `DropDownGroup`

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
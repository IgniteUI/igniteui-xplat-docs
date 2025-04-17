---
title: {Platform} Tooltip | Infragistics
_description: The {ProductName} Tooltip component provides us with the ability to easily create a tooltip and attach it into an element.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Tooltip components
mentionedTypes: ["Tooltip"]
---

# {Platform} Tooltip

The {ProductName} Tooltip component provides a way to display a tooltip for a specific element. A tooltip is a popup that displays information related to an element, usually when the element receives keyboard focus or when the mouse hovers over it. 

## {ProductName} Tooltip Example

`sample="/inputs/tooltip/overview", height="230", alt="{Platform} Tooltip Example"`

### Getting Started

<!-- WebComponents -->

To start using the Tooltip, first, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install {PackageWebComponents}
```

After that, you need to import the Tooltip as follows:

```ts
import {defineComponents, IgcTooltipComponent} from 'igniteui-webcomponents';

defineComponents(IgcTooltipComponent);
```

Now you can start with a basic configuration of the {Platform} Tooltip.

```html
<igc-tooltip anchor="hover-button">
  Congrats you've hovered the button!
</igc-tooltip>

<igc-button id="hover-button">Hover me</igc-button>
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

## Usage

### Tooltip target

There are several ways to attach a tooltip to a desired element. The most common approach is using the `anchor` property on the `<igc-tooltip>` element. This property accepts either an element ID or a direct reference to an element. When using an ID reference, simply set the `anchor` property to the ID of the target element.

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button">
  Congrats you've hovered the button!
</igc-tooltip>
```

You can also specify the target by passing the element instance directly: 

```html
<igc-tooltip id="tooltip">
  Congrats you've hovered the button!
</igc-tooltip>
<igc-button id="hover-button">Hover me</igc-button>
```

```ts
constructor() {
  const anchor = document.querySelector('#hover-button') as IgcButtonComponent;
  const tooltip = document.querySelector('#tooltip') as IgcTooltipComponent;
  tooltip.anchor = anchor;
}
```

If you don't use the `anchor` property, the Tooltip will default to using the first preceding sibling element as its target.

```html
<igc-button>Hover me</igc-button>
<igc-tooltip>
  Congrats you've hovered the button!
</igc-tooltip>
```

In this case, the Tooltip targets the `<igc-button>`.

```html
<p>
  Here is some text with a
  <strong>element</strong>
  <igc-tooltip>😎</igc-tooltip>
  that has a tooltip.
</p>
```

Here, the Tooltip targets the `<strong>` element.

### Tooltip content

The Tooltip content is defined by placing custom content between the opening and closing tags of the `<igc-tooltip>` element.

```html
<igc-tooltip>
  This is my custom content here.
</igc-tooltip>
```

Alternatively, to set simple text, you can use the `message` property.

```html
<igc-tooltip message="This is my custom content here."></igc-tooltip>
```

If you use both approaches (slotted content and the `message` property), the slotted content will take priority and the `message` value will be ignored.

```html
<igc-button>Hover me</igc-button>
<igc-tooltip message="I will be hidden.">
  I will be shown!
</igc-tooltip>
```

In this example, the slotted content (“I will be shown!”) will be displayed instead of the `message` property value.

The Tooltip content can be more than just simple text. Since the Tooltip is a regular element in the markup, you can enhance its content by adding any elements you need and styling them accordingly.

`sample="/inputs/tooltip/rich", height="230", alt="{Platform} Rich Tooltip Example"`

### Show/Hide delay settings

If you want to control the delay before showing and hiding the Tooltip, you can use the `show-delay` and `hide-delay` properties. Both properties accept a number value representing time in milliseconds.

```html
<igc-tooltip show-delay="600" hide-delay="800">
  Her name is Madelyn James.
</igc-tooltip>
```

> [!NOTE]
> It's important to note that the Tooltip API methods — `show()`, `hide()`, and `toggle()` — DO NOT take the showDelay and hideDelay properties into account. They act immediately when invoked.

### Placement

The Tooltip can also be positioned relative to its target element with ease. All you need to do is use the `placement` property along with one of the following position options: `top` ,`top-start` ,`top-end` ,`bottom` ,`bottom-start` ,`bottom-end ` ,`right` ,`right-start` ,`right-end` ,`left` ,`left-start` ,`left-end`.

If the `placement` property is not set, the default value is `"top"`, which places the Tooltip above the target element.

Additionally, you can make the Tooltip "sticky" using the `sticky` property, which adds a close button and keeps the Tooltip visible until the user closes it manually - either by clicking the close button or pressing the `Esc` key. This behavior overrides the default hover behavior, preventing the Tooltip from disappearing when the user stops hovering over the target element.

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button" placement="top-left" sticky="true">
  Congrats you've hovered the button!
</igc-tooltip>
```

In the following example, you can see a demonstration of all position options and the `sticky` property in action:

`sample="/inputs/tooltip/styling", height="230", alt="{Platform} Tooltip Styling Example"`


### Triggers

By default, the Tooltip is triggered only while hovering over the target element. However, you can change this behavior using the `show-triggers` and `hide-triggers` properties, which allow you to control when the Tooltip appears and disappears. These properties accept event names as values—such as `click`, `focus`, `keypress`, etc.—letting you trigger the Tooltip in different scenarios.

`sample="/inputs/tooltip/triggers", height="230", alt="{Platform} Tooltip Trigger Example"`

### Additional Properties

Apart from the properties we've already covered, the Tooltip component offers a variety of additional properties that allow you to further configure its behavior, position, and appearance.

|Name|Type|Description|
|--|--|--|
| `open` | boolean | Determines whether the tooltip is visible. |
| `disable-arrow` | boolean | If set to `true`, disables the arrow indicator on the tooltip. |
| `inline` | boolean | Improves positioning for inline elements, such as links. |
| `offset` | number | Sets the pixel distance between the tooltip and its anchor. |

### Methods

In addition to its configurable properties, the Tooltip also exposes three methods that you can use:

|Name|Description|
|--|--|
| `show()` | Displays the tooltip if it’s not already shown. If a target is provided, it sets the target as a transient anchor. |
| `hide()` | Hides the tooltip if it’s not already hidden. |
| `toggle()` | 	Toggles the tooltip between the shown and hidden states. |

## Accessibility & ARIA Support

The Tooltip is built with accessibility in mind and includes the following ARIA attributes:

* `role` - When the tooltip is in its default behavior, `role="tooltip"` is applied. If the `sticky` property is enabled, the role changes to `status`.
* `inert` - Dynamically toggled based on visibility. When the tooltip is hidden, it becomes inert.
* `aria-atomic` - Set to true, ensuring that the entire tooltip content is announced when it changes.
* `aria-live` - Set to polite, indicating to screen readers that updates should be announced only when the user is idle.

## Styling

The `Tooltip` component exposes two CSS parts that you can use for styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the tooltip component. |
| `bottom` | The area containing the tooltip arrow. |

```css
igc-tooltip::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-tooltip::part(bottom) {
  border-bottom-color: var(--ig-primary-500);
}
```

`sample="/inputs/tooltip/styling", height="230", alt="{Platform} Tooltip Styling Example"`

<div class="divider--half"></div>


## API References

 - [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
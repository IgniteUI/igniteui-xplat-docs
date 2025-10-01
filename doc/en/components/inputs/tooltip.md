---
title: {Platform} Tooltip | Infragistics
_description: The {ProductName} Tooltip component provides us with the ability to easily create a tooltip and attach it into an element.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Tooltip components
mentionedTypes: ["Tooltip"]
---

# {Platform} Tooltip

The {ProductName} Tooltip component provides a way to display a tooltip for a specific element. A tooltip is a popup that displays information related to an element, usually when the element receives keyboard focus or when the mouse hovers over it. 

## {ProductName} Tooltip Example

`sample="/inputs/tooltip/overview", height="140", alt="{Platform} Tooltip Example"`

### Getting Started

<!-- WebComponents -->

To start using the `Tooltip`, first, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install {PackageWebComponents}
```

After that, you need to import the `Tooltip`, its necessary CSS, and register its module, as follows:

```ts
import { defineComponents, IgcTooltipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcTooltipComponent);
```

<!-- end: WebComponents -->

<!-- React -->

To start using the `Tooltip`, first, you need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react
```

After that, you need to import the `Tooltip` component and its necessary CSS as follows:

```tsx
import { IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

<!-- Blazor -->

Before using the `Tooltip`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTooltipModule));
```

You will also need to link an additional CSS file to apply the styling to the `Tooltip` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

Now you can start with a basic configuration of the {Platform} `Tooltip`.

```html
<igc-tooltip anchor="hover-button">
  Congrats you've hovered the button!
</igc-tooltip>

<igc-button id="hover-button">Hover me</igc-button>
```

```tsx
<IgrTooltip anchor="hover-button">
  Congrats you have hovered the button!
</IgrTooltip>

<IgrButton id="hover-button">Hover me</IgrButton>
```

```razor
<IgbTooltip Anchor="hover-button">
  Congrats you have hovered the button!
</IgbTooltip>

<IgbButton id="hover-button">Hover me</IgbButton>
```

## Usage

### Tooltip target

To attach a tooltip to the desired element, use the `Anchor` property of the `Tooltip` and set it to the ID of the target element.

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button">
  Congrats you've hovered the button!
</igc-tooltip>
```

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button">
  Congrats you have hovered the button!
</IgrTooltip>
```

```razor
<IgbButton id="target-button">Hover me</IgbButton>
<IgbTooltip Anchor="target-button">
  Congrats you have hovered the button!
</IgbTooltip>
```

<!-- WebComponents, React -->
You can also specify the target by passing the element instance directly: 
<!-- end: WebComponents, React -->

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

```tsx
const anchor = document.querySelector('#hover-button') as IgrButton;
const tooltip = document.querySelector('#tooltip') as IgrTooltip;
tooltip.anchor = anchor;
```

```tsx
<IgrTooltip id="tooltip">
  Congrats you have hovered the button!
</IgrTooltip>
<IgrButton id="hover-button">Hover me</IgrButton>
```

### Tooltip content

The tooltip content is defined by placing custom content between the opening and closing tags of the `Tooltip`.

```html
<igc-tooltip>
  This is my custom content here.
</igc-tooltip>
```

```tsx
<IgrTooltip>
  Congrats you have hovered the button!
</IgrTooltip>
```

```razor
<IgbTooltip>
  Congrats you have hovered the button!
</IgbTooltip>
```

<!-- WebComponents, React -->
Alternatively, to set simple text, you can use the `Message` property.
<!-- end: WebComponents, React -->

```html
<igc-tooltip message="This is my custom content here."></igc-tooltip>
```

```tsx
<IgrTooltip message="This is my custom content here."></IgrTooltip>
```

<!-- WebComponents, React -->
If you use both approaches (slotted content and the `Message` property), the slotted content will take priority and the `Message` value will be ignored.
<!-- end: WebComponents, React -->

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button" message="I will be hidden.">
  I will be shown!
</igc-tooltip>
```

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button" message="I will be hidden.">
  I will be shown!
</IgrTooltip>
```

<!-- WebComponents, React -->
In this example, the slotted content (“I will be shown!”) will be displayed instead of the `Message` property value.
<!-- end: WebComponents, React -->

The `Tooltip` content can be more than just simple text. Since the `Tooltip` is a regular element in the markup, you can enhance its content by adding any elements you need and styling them accordingly.

`sample="/inputs/tooltip/rich", height="230", alt="{Platform} Rich Tooltip Example"`

### Show/Hide delay settings

If you want to control the delay before showing and hiding the `Tooltip`, you can use the `ShowDelay` and `HideDelay` properties. Both properties accept a number value representing time in milliseconds.

```html
<igc-tooltip show-delay="600" hide-delay="800">
  Her name is Madelyn James.
</igc-tooltip>
```

```tsx
<IgrTooltip showDelay="600" hideDelay="800">
  Her name is Madelyn James.
</IgrTooltip>
```

```razor
<IgbTooltip ShowDelay="600" HideDelay="800">
  Her name is Madelyn James.
</IgbTooltip>
```

> [!NOTE]
> It's important to note that the Tooltip API methods — `Show`, `Hide`, and `Toggle` — DO NOT take the `ShowDelay` and `HideDelay` properties into account. They act immediately when invoked.

### Placement

The `Tooltip` can also be positioned relative to its target element with ease. All you need to do is use the `Placement` property along with one of the following position options: `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end `, `right`, `right-start`, `right-end`, `left`, `left-start`, `left-end`.

If the `Placement` property is not set, the default value is `bottom`, which places the `Tooltip` below the target element.

Additionally, you can make the `Tooltip` "sticky" using the `Sticky` property, which adds a close button and keeps the `Tooltip` visible until the user closes it manually - either by clicking the close button or pressing the `Esc` key. This behavior overrides the default hover behavior, preventing the `Tooltip` from disappearing when the user stops hovering over the target element.

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button" placement="top-start" sticky>
  Congrats you've hovered the button!
</igc-tooltip>
```

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button" placement="top-start" sticky>
  Congrats you have hovered the button!
</IgrTooltip>
```

```razor
<IgbButton id="target-button">Hover me</IgbButton>
<IgbTooltip Anchor="target-button" Placement="PopoverPlacement.TopStart" Sticky="true">
  Congrats you have hovered the button!
</IgbTooltip>
```

In the following example, you can see a demonstration of all position options and the `Sticky` property in action:

`sample="/inputs/tooltip/placement", height="220", alt="{Platform} Tooltip Placement Example"`

### Triggers

By default, the `Tooltip` is triggered only while hovering over the target element. However, you can change this behavior using the `ShowTriggers` and `HideTriggers` properties, which allow you to control when the `Tooltip` appears and disappears. These properties accept event names as values—such as `click`, `focus`, or `keypress`—letting you trigger the `Tooltip` in different scenarios.

`sample="/inputs/tooltip/triggers", height="600", alt="{Platform} Tooltip Triggers Example"`

### Advanced Example

The `Tooltip` integrates seamlessly with other components, allowing you to create advanced tooltips that contain components within them.
In the following example, you can see how we create descriptive tooltips by using the `List`, `Avatar`, `Icon`, `Badge`, `Button`, `Card` and `CategoryChart` components.

`sample="/inputs/tooltip/advanced", height="640", alt="{Platform} Tooltip Advanced Example"`

### Additional Properties

Apart from the properties we've already covered, the `Tooltip` component offers a variety of additional properties that allow you to further configure its behavior, position, and appearance.

|Name|Type|Description|
|--|--|--|
| `Open` | boolean | Determines whether the tooltip is visible. |
| `WithArrow` | boolean | Determines whether to render an arrow indicator for the tooltip. |
| `Offset` | number | Sets the pixel distance between the tooltip and its `Anchor`. |

### Methods

In addition to its configurable properties, the `Tooltip` also exposes three methods that you can use:

|Name|Description|
|--|--|
| `Show` | Displays the tooltip if it’s not already shown. If a target is provided, it sets the target as a transient `Anchor`. |
| `Hide` | Hides the tooltip if it’s not already hidden. |
| `Toggle` |  Toggles the tooltip between the shown and hidden states. |

## Accessibility & ARIA Support

The `Tooltip` is built with accessibility in mind and includes the following ARIA attributes:

* `role` - When the tooltip is in its default behavior, `role="tooltip"` is applied. If the `Sticky` property is enabled, the role changes to `status`.
* `inert` - Dynamically toggled based on visibility. When the tooltip is hidden, it becomes inert.
* `aria-atomic` - Set to true, ensuring that the entire tooltip content is announced when it changes.
* `aria-live` - Set to polite, indicating to screen readers that updates should be announced only when the user is idle.

## Styling

The `Tooltip` component exposes two CSS parts that you can use for styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the tooltip component. |
| `top, right, bottom, left ...` | The area containing the tooltip arrow. The part name matches the value of the tooltip placement property. |

```css
igc-tooltip::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-tooltip::part(bottom) {
  border-bottom-color: var(--ig-primary-500);
}
```

`sample="/inputs/tooltip/styling", height="140", alt="{Platform} Tooltip Styling Example"`

<div class="divider--half"></div>


## API References

- `Tooltip`
- `Avatar`
- `Button`
- `Icon`
- `Card`
- `Input`
- `Badge`
- `List`
- `CategoryChart`
 - [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
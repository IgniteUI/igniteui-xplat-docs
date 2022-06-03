---
title: $Platform$ Expansion Panel | Expansion Panel | Infragistics
_description: Expansion Panel component provides an easily configurable expandable component with two states - collapsed and expanded.
_keywords: $Platform$ Expansion Panel, $ProductName$, Infragistics
mentionedTypes: ['ExpansionPanel']
---

# $Platform$ Expansion Panel Overview
The $ProductName$ Expansion Panel is a lightweight accordion component which can be rendered in two states - collapsed or expanded. The expansion panel can be toggled using mouse click, or keyboard interactions.

## $Platform$ Expansion Panel Example

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-usage"
           alt="$Platform$ Expansion Panel Example"
           github-src="layouts/expansion-panel/usage">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `ExpansionPanel`, you need to register it as follows:

```ts
import {defineComponents, IgcExpansionPanelComponent} from 'igniteui-webcomponents';

defineComponents(IgcExpansionPanelComponent);
```

The simplest way to start using the `ExpansionPanel` is as follows:

```html
<igc-expansion-panel>
    <div slot="title">Golden Retriever</div>
    <div slot="subTitle">Medium-large gun dog</div>
    <div>
        <p>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
        and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability
        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
        are easy to train to basic or advanced obedience standards.</p>
    </div>
</igc-expansion-panel>
```

## Binding to events

The Expansion Panel component raises the following events:
- igcClosed - Raised when the expansion panel is collapsed
- igcOpeneded - Raised when the expansion panel is expanded
- igcClosing - Raised when the expansion panel starts collapsing
- igcOpening - Raised when the expansion panel starts expanding

The following sample demonstrates how we can add some logic to our component to make it show/hide the `subtitle` depending on the current state of the panel.

We can do this by binding to the `igcOpened` and `igcClosed` event emitters:

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-properties-and-events"
           alt="$Platform$ Expansion Panel Events"
           github-src="layouts/expansion-panel/properties-and-events">
</code-view>

<div class="divider--half"></div>

## Component Customization
The `IgcExpansionPanel` control allows all sorts of content to be added inside of its body. It can render [`input`](../inputs/input.md), charts and even other expansion panels!

The `IgcExpansionPanel` allows for easy customization of the header throught the eposed *title*, *subTitle* and *indicator* slots.

Configuring the position of the expansion indicator can be done through the `indicatorAlignment` property of the Expansion Panel. The possible options are **start**, **end** or **none**. 

The next code sample demonstrates how to configure the component's button to go on the *right* side.

<code-view style="height: 460px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-component-customization"
           alt="$Platform$ Expansion Panel Customization"
           github-src="layouts/expansion-panel/component-customization">
</code-view>

<div class="divider--half"></div>

## Keyboard Navigation

The $ProductName$ Expansion Panel keyboard navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

 - <kbd>Alt + Arrow Down</kbd> - expands the focused panel
 - <kbd>Alt + Arrow Up</kbd> - collapses the focused panel
 - <kbd>Space</kbd>/<kbd>Enter</kbd> - toggle the expansion state of the focused panel
 

## Styling

The $ProductName$ Expansion Panel component exposes several CSS parts (`header`, `indicator`, `title`, `subtitle` and `content`) to give you full control over its styling.

<code-view style="height: 480px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-panel-styling"
           alt="$Platform$ Expansion Panel Styling"
           github-src="layouts/expansion-panel/styling">
</code-view>

<div class="divider--half"></div>

<!-- WebComponents -->

## API References

For more detailed information regarding the Expansion Panel's API, refer to the following links:
* `ExpansionPanel`


<!-- end: WebComponents -->

<div class="divider"></div>

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

---
title: {Platform} Expansion Panel | Expansion Panel | Infragistics
_description: Expansion Panel component provides an easily configurable expandable component with two states - collapsed and expanded.
_keywords: {Platform} Expansion Panel, {ProductName}, Infragistics
mentionedTypes: ['Infragistics.Controls.Layouts.Implementation.ExpansionPanel']
namespace: Infragistics.Controls
---

# {Platform} Expansion Panel Overview
The {ProductName} Expansion Panel is a lightweight accordion component which can be rendered in two states - collapsed or expanded. The expansion panel can be toggled using mouse click, or keyboard interactions.

## {Platform} Expansion Panel Example

`sample="/layouts/expansion-panel/usage", height="320", alt="{Platform} Expansion Panel Example"`

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `ExpansionPanel`, you need to register it as follows:

```ts
import {defineComponents, IgcExpansionPanelComponent} from 'igniteui-webcomponents';

defineComponents(IgcExpansionPanelComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `ExpansionPanel`, its necessary CSS, and register its module, like so:

```tsx
import { IgrExpansionPanel, IgrExpansionPanelModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrExpansionPanelModule.register();
```

<!-- end: React -->

The simplest way to start using the `ExpansionPanel` is as follows:

<!-- WebComponents -->
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
<!-- end: WebComponents -->

```tsx
<IgrExpansionPanel>
    <h1 slot="title">Golden Retriever</h1>
    <h3 slot="subtitle">Medium-large gun dog</h3>
    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
        are easy to train to basic or advanced obedience standards.</span>
</IgrExpansionPanel>
```

## Binding to events

The Expansion Panel component raises the following events:

<!-- WebComponents -->

- igcClosed - Raised when the expansion panel is collapsed
- igcOpened - Raised when the expansion panel is expanded
- igcClosing - Raised when the expansion panel starts collapsing
- igcOpening - Raised when the expansion panel starts expanding

<!-- end: WebComponents -->

<!-- React -->

- Closed - Raised when the expansion panel is collapsed
- Opened - Raised when the expansion panel is expanded
- Closing - Raised when the expansion panel starts collapsing
- Opening - Raised when the expansion panel starts expanding

<!-- end: React -->

The following sample demonstrates how we can add some logic to our component to make it show/hide the `subtitle` depending on the current state of the panel.

<!-- WebComponents -->

We can do this by binding to the `igcOpened` and `igcClosed` event emitters:

<!-- end: WebComponents -->

<!-- React -->

We can do this by binding to the `Opened` and `Closed` events:

<!-- end: React -->

`sample="/layouts/expansion-panel/properties-and-events", height="320", alt="{Platform} Expansion Panel Events"`



<div class="divider--half"></div>

## Component Customization
The `ExpansionPanel` control allows all sorts of content to be added inside of its body. It can render [input](../inputs/input.md), charts and even other expansion panels!

The `ExpansionPanel` allows for easy customization of the header through the exposed *title*, *subTitle* and *indicator* slots.

Configuring the position of the expansion indicator can be done through the `indicatorAlignment` property of the Expansion Panel. The possible options are **start**, **end** or **none**.

The next code sample demonstrates how to configure the component's button to go on the *right* side.

`sample="/layouts/expansion-panel/component-customization", height="460", alt="{Platform} Expansion Panel Customization"`



<div class="divider--half"></div>

## Keyboard Navigation

The {ProductName} Expansion Panel keyboard navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

 - <kbd>Alt + ↓</kbd> - expands the focused panel
 - <kbd>Alt + ↑</kbd> - collapses the focused panel
 - <kbd>Space</kbd>/<kbd>Enter</kbd> - toggle the expansion state of the focused panel


## Styling

The {ProductName} Expansion Panel component exposes several CSS parts (`header`, `indicator`, `title`, `subtitle` and `content`) to give you full control over its styling.

`sample="/layouts/expansion-panel/styling", height="480", alt="{Platform} Expansion Panel Styling"`

<div class="divider"></div>


## API References

 - `ExpansionPanel`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
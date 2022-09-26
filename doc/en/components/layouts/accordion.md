---
title: {Platform} Accordion | Accordion | Infragistics
_description: Accordion is used to build vertical expandable panels in accordion menu.
_keywords: {Platform} Accordion, {ProductName}, Infragistics
mentionedTypes: ['Accordion', 'ExpansionPanel']
---

# {Platform} Accordion Overview
The {ProductName} Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page. It offers keyboard navigation and API to control the underlying panels' expansion state.

Users are enabled to interact and navigate among a list of items, such as thumbnails or labels. Each one of those items can be toggled (expanded or collapsed) in order to reveal the containing information. Depending on the configuration, there can be a single or multiple expanded items at a time.

## {Platform} Accordion Example
The following is a basic {ProductName} Accordion example of a FAQ section. It operates as an accordion, with individually working sections. You can toggle each text block with a single click, while expanding multiple panels at the same time. This way you can read information more easily, without having to go back and forth between an automatically expanding and collapsing panel, which conceals the previously opened section every time.

In it, you can see how to define an accordion and its expansion panels. The sample also demonstrates the two types of expansion behavior. The switch button sets the `singleExpand` property to toggle between single and multiple branches to be expanded at a time.

<code-view style="height: 460px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-overview"
           alt="{Platform} Accordion Example"
           github-src="layouts/accordion/overview">
</code-view>

<div class="divider--half"></div>

## Getting Started with {Platform} Accordion

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Accordion`, you need to register it as follows:

```ts
import { defineComponents, IgcAccordionComponent } from 'igniteui-webcomponents';

defineComponents(IgcAccordionComponent);
```

<!-- end: WebComponents -->
Now you can start with a basic configuration of the `Accordion` and its panels.

## Usage

Each section in the {Platform} Accordion Component is defined using an {Platform} Expansion Panel.
Panels provide `disabled` and `open` properties, which give you the ability to configure the states of the panel as per your requirement.

### Declaring an accordion

The accordion wraps all expansion panel`s declared inside it.

```html
<igc-accordion id="accordion" single-expand="true">
    <igc-expansion-panel>
        <div slot="title">Title Panel 1</div>
        <div>
            Content Panel 1
        </div>
    </igc-expansion-panel>
    <igc-expansion-panel>
        <div slot="title">Title Panel 2</div>
        <div>
            Content Panel 2
        </div>
    </igc-expansion-panel>
</igx-accordion>
```

Using the `panels` accessor you can get a reference to the collection containing all expansion panels children of the `Accordion`.

```typescript
private accordion: IgcAccordionComponent;
private panels: IgcExpansionPanelComponent[];

constructor() {
	this.accordion = document.getElementById("accordion") as IgcAccordionComponent;
	this.panels = this.accordion.panels;
}
```

As demonstrated above, the `singleExpand`property gives you the ability to set whether single or multiple panels can be expanded at a time.

By using the `hideAll` and `showAll` methods you can respectively collapse and expand all `ExpansionPanel`s of the `Accordion` programmatically.

> Note: If `singleExpand` property is set to *true* calling `showAll` method would expand only the focused panel.

### {Platform} Accordion Customization Example
With the {Platform} Accordion, you can customize the header and content panel's appearance.
The sample below demonstrates how elaborate filtering options can be implemented using the built-in slots of the `ExpansionPanel`.

<code-view style="height: 550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-customization"
           alt="{Platform} Accordion Customization Example"
           github-src="layouts/accordion/customization">
</code-view>

<div class="divider--half"></div>

### Nested {Platform} Accordions Scenario
In the following {Platform} Accordion example is created a complex FAQ section in order to illustrate how you can go about this common application scenario. In the sample nested `Accordion` is achieved by adding an accordion inside an expansion panel.

<code-view style="height: 550px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-nested-scenario"
           alt="{Platform} Accordion Nested Example"
           github-src="layouts/accordion/nested-scenario">
</code-view>

<div class="divider--half"></div>

## Keyboard Navigation

Keyboard navigation in the {Platform} Accordion provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the panels.
The Accordion navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**
 - <kbd>Arrow Down</kbd> - moves the focus to the panel below
 - <kbd>Arrow Up</kbd> - moves the focus to the panel above
 - <kbd>Alt + Arrow Down</kbd> - opens the focused panel in the accordion
 - <kbd>Alt + Arrow Up</kbd> - closes the focused panel in the accordion
 - <kbd>Shift + Alt + Arrow Down</kbd> - opens all enabled panels (if singleExpand is set to true opens the focused panel)
 - <kbd>Shift + Alt + Arrow Up</kbd> - closes all enabled panels
 - <kbd>Home</kbd> - navigates to the FIRST enabled panel in the accordion
 - <kbd>End</kbd> - navigates to the LAST enabled panel in the accordion

<!-- WebComponents -->

## API References

For more detailed information regarding the Accordion's API, refer to the following links:
* `Accordion`
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

 ## API Members
 - `Accordion`
 - `ExpansionPanel`
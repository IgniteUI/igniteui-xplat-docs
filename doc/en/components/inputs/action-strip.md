---
title: {Platform} Action Strip | Infragistics
_description: Infragistics' {Platform} Action Strip component represents a template area for one or more actions. The Action Strip requires to be inside a relative container, as it is going to overlay it.
_keywords: {Platform}, UI controls, web widgets, UI widgets, Web Components, {Platform} Action Strip Components, {Platform} Action Strip control, Infragistics
mentionedTypes: ['Action Strip']
---

# {Platform} Action Strip Overview

The Ignite UI {Platform} Action Strip component provides an overlay area containing one or more actions allowing additional UI and functionality to be shown on top of a specific target container upon user interaction e.g. hover. The container should be positioned relatively as the Action Strip attempts to overlay it and is itself positioned absolutely. Despite overlapped by an Action Strip, the main interactions and user access to the target container remain available.

<div class="divider--half"></div>

## {Platform} Action Strip Example

`sample="/inputs/action-strip/action-strip-paragraph", height="400", alt="{Platform} Action Strip Example"`

<div class="divider--half"></div>

## Getting Started with {Platform} Action Strip

<!-- WebComponents -->

First, you need to install the `igniteui-webcomponents` and `igniteui-webcomponents-grids` by running the following command:

```cmd
npm install igniteui-webcomponents
npm install igniteui-webcomponents-grids
```

For a complete introduction to the {ProductName}, read the [_Getting Started_](../general-getting-started.md) topic.

You will then need to import the `Action Strip` and its necessary CSS like so:

```ts
import { IgcActionStripComponent } from "igniteui-webcomponents-grids/grids";
import "igniteui-webcomponents/themes/light/bootstrap.css";
```

Now that you have the {Platform} Action Strip imported, you can start with a basic configuration of the `igc-action-strip` component.

<!-- end: WebComponents -->

## Using the {Platform} Action Strip

To initialize and position the Action Strip correctly, it needs to be inside a relatively positioned container:

<!-- WebComponents -->

```html
<div style="position:relative; width:100px; height:100px;">
  <igc-action-strip>
    <igc-button variant="contained" slot="button">
      <igc-icon name="bold" collection="material"></igc-icon>
    </igc-button>
  </igc-action-strip>
  <div></div>
</div>
```

<!-- end: WebComponents -->

By default, the Action Strip will be visible, but this can be configured via the `hidden` property.

### Menu look and feel

<!-- WebComponents -->

For scenarios where more than three action items will be shown, it is best to use the button `slot` of the {Platform} Action Strip.

```html
<div style="position:relative; width:100px; height:100px;">
  <igc-action-strip hidden="true">
    <igc-button class="menu-button left" slot="button">
      <igc-icon name="left" collection="material"></igc-icon>
      <span>Left</span>
      <igc-ripple></igc-ripple>
    </igc-button>
    <igc-button id="center" class="menu-button" slot="button">
      <igc-icon name="center" collection="material"></igc-icon>
      <span>Center</span>
      <igc-ripple></igc-ripple>
    </igc-button>
    <igc-button class="menu-button right" slot="button">
      <igc-icon name="right" collection="material"></igc-icon>
      <span>Right</span>
      <igc-ripple></igc-ripple>
    </igc-button>
  </igc-action-strip>
</div>
```

<!-- end: WebComponents -->

`sample="/inputs/action-strip/action-strip-paragraph-menu", height="400", alt="{Platform} Action Strip Example"`

### Reusing the Action Strip

The same Action Strip instance can be used in multiple places in the document as long as the actions need not be visible simultaneously for them.

The Action Strip can change its parent container, which is possible by changing the `context`. The best way to do so is via the `show` API method and passing the `context` as an argument.

> [!NOTE]
> The `show` API method uses `context` to append the Action Strip to that `element`.

## Usage in Grids

<!-- WebComponents -->

The Action Strip provides additional functionality and UI for the `igc-grid`.

<!-- end: WebComponents -->

This can be utilized via grid action components and we are providing two default ones:

<!-- WebComponents -->

- `IgcGridPinningActions` - includes functionality and UI related to grid row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.
- `IgcGridEditingActions` - includes functionality and UI related to grid editing. It allows you to quickly toggle edit mode for cells or rows, depending on the value of the `rowEditable` option of the grid and whether deleting rows is allowed.
<!-- end: WebComponents -->

```html
<igc-grid
  auto-generate="false"
  name="grid"
  id="grid"
  row-editable="true"
  primary-key="ProductID"
>
  <igc-action-strip name="actionStrip" id="actionStrip">
    <igc-grid-pinning-actions> </igc-grid-pinning-actions>
    <igc-grid-editing-actions edit-row="true" delete-row="true" add-row="true">
    </igc-grid-editing-actions>
  </igc-action-strip>
</igc-grid>
```

<!-- WebComponents -->

> [!NOTE]
> When `IgcActionStrip` is a child component of the grid, hovering a row will automatically show the UI.

<!-- end: WebComponents -->

`sample="/inputs/action-strip/grid-action-strip", height="600", alt="{Platform} Action Strip Example"`

> [!NOTE]
> More information about how to use ActionStrip in the grid component could be found [here](/components/grid/row-actions.html).

## Styling

The `Action Strip` component exposes `action-strip` CSS part that allows us to style the action strip container.

```css
igc-action-strip {
  --ig-action-strip-background: #005eec;
}
```

Also, the `Action Strip Actions's` provide `action-strip-actions` CSS part that could be used to style the buttons in the action strip.

```css
igc-action-strip {
  --ig-action-strip-actions-background: #005eec;
}
```

We can even style each button with `base` exposed CSS part of the button component that allows us to style the wrapped element (`<button>` or `<a>`). 
See [Button Styling](../inputs/button.md#styling) for reference.

```css
igc-button::part(base) {
  background-color: rgb(233, 233, 233);
  color: #005eec;
}
```

`sample="/inputs/action-strip/action-strip-styling", height="400", alt="{Platform} Action Strip Example"`

## API Reference

- `ActionStrip`
- `Grid`
- `Button`
- `ButtonGroup`
- `Icon`
- `Ripple`

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})

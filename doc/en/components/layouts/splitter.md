---
title: {Platform} Splitter Component | Layout Controls | Infragistics
_description: Use the {ProductName} Splitter component to create two resizable panes with horizontal or vertical layouts, collapse and expand behavior, keyboard support, and nested split views.
_keywords: splitter, split panes, resizable panes, web components splitter, {Platform} splitter, {ProductName}
_license: MIT
mentionedTypes: ["Splitter", "SplitterResizeEventArgs"]
---

# {Platform} Splitter Overview

The {ProductName} Splitter provides a resizable split-pane layout that divides content into two areas: `start` and `end`. Users can drag the splitter bar, use keyboard shortcuts, or collapse and expand panes with built-in controls. You can also nest splitters to build complex dashboard-style layouts.

## {Platform} Splitter Example

`sample="/layouts/splitter/base", height="520", alt="{Platform} Splitter Example"`

<div class="divider--half"></div>

## Getting Started with {Platform} Splitter

<!-- WebComponents -->

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Splitter`, you need to register it as follows:

```ts
import { defineComponents, IgcSplitterComponent } from 'igniteui-webcomponents';

defineComponents(IgcSplitterComponent);
```

For a complete introduction to the {ProductName}, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->

First, you need to install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Splitter` and its necessary CSS, like so:

```tsx
import { IgrSplitter } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

## Using {Platform} Splitter

Use the `start` and `end` slots to place pane content:

<!-- WebComponents -->

```html
<igc-splitter style="height: 400px;">
  <div slot="start">Start pane content</div>
  <div slot="end">End pane content</div>
</igc-splitter>
```

<!-- end: WebComponents -->

<!-- React -->

```tsx
<IgrSplitter>
  <div slot="start">Start pane content</div>
  <div slot="end">End pane content</div>
</IgrSplitter>
```

<!-- end: React -->

### Orientation

Set the `Orientation` property to control pane direction:

- `horizontal` (default): start and end panes are rendered left and right.
- `vertical`: start and end panes are rendered top and bottom.

<!-- WebComponents -->

```html
<igc-splitter orientation="vertical" style="height: 400px;">
  <div slot="start">Top pane</div>
  <div slot="end">Bottom pane</div>
</igc-splitter>
```

<!-- end: WebComponents -->

<!-- React -->

```tsx
<IgrSplitter orientation="vertical">
  <div slot="start">Top pane</div>
  <div slot="end">Bottom pane</div>
</IgrSplitter>
```

<!-- end: React -->

### Pane Size and Constraints

Use size properties to set initial and constrained pane sizes:

- `StartSize`, `EndSize`
- `StartMinSize`, `EndMinSize`
- `StartMaxSize`, `EndMaxSize`

Values accept CSS length values such as `px` and `%`.

<!-- WebComponents -->

```html
<igc-splitter
  start-size="35%"
  end-size="65%"
  start-min-size="200px"
  end-min-size="180px"
  style="height: 420px;"
>
  <div slot="start">Navigation</div>
  <div slot="end">Main content</div>
</igc-splitter>
```

<!-- end: WebComponents -->

<!-- React -->

```tsx
<IgrSplitter
  startSize="35%"
  endSize="65%"
  startMinSize="200px"
  endMinSize="180px"
>
  <div slot="start">Navigation</div>
  <div slot="end">Main content</div>
</IgrSplitter>
```

<!-- end: React -->

### Collapsing and Resizing

Use these properties to control interactions:

- `DisableResize`: disables pane resizing.
- `DisableCollapse`: disables pane collapsing.
- `HideDragHandle`: hides the drag handle.
- `HideCollapseButtons`: hides collapse and expand buttons.

You can also collapse or expand panes programmatically:

<!-- WebComponents -->

```ts
const splitter = document.querySelector('igc-splitter') as IgcSplitterComponent;

splitter.toggle('start'); // collapse start pane
splitter.toggle('start'); // expand start pane
```

<!-- end: WebComponents -->

<!-- React -->

```tsx
import { useRef } from 'react';

const splitterRef = useRef<IgrSplitterComponent>(null);

const toggleStartPane = () => {
  splitterRef.current?.toggle('start');
};
```

<!-- end: React -->

### Nested Splitters

Splitters can be nested to create multi-region layouts.

`sample="/layouts/splitter/nested", height="520", alt="{Platform} Nested Splitter Example"`

## Events

The Splitter emits the following events during resize operations:

<!-- WebComponents -->

- `igcResizeStart`: fired once when resizing starts.
- `igcResizing`: fired continuously while resizing.
- `igcResizeEnd`: fired once when resizing ends.

The event detail includes current `startPanelSize`, `endPanelSize`, and `delta` for ongoing and end events.

<!-- end: WebComponents -->

<!-- React -->

- `ResizeStart`: fired once when resizing starts.
- `Resizing`: fired continuously while resizing.
- `ResizeEnd`: fired once when resizing ends.

The event detail includes current `StartPanelSize`, `EndPanelSize`, and `Delta` for ongoing and end events.

<!-- end: React -->

<!-- WebComponents -->

```ts
const splitter = document.querySelector('igc-splitter');

splitter?.addEventListener('igcResizeEnd', (event: CustomEvent) => {
  console.log(event.detail.startPanelSize, event.detail.endPanelSize, event.detail.delta);
});
```

<!-- end: WebComponents -->

<!-- React -->

```tsx
const handleResizeEnd = (event: CustomEvent<IgcSplitterResizeEventArgs>) => {
  console.log(event.detail.startPanelSize, event.detail.endPanelSize, event.detail.delta);
};

<IgrSplitter onResizeEnd={handleResizeEnd}>
  <div slot="start">Start pane</div>
  <div slot="end">End pane</div>
</IgrSplitter>
```

<!-- end: React -->

## Keyboard Navigation

When the splitter bar is focused:

| Keys | Description |
| ---- | ----------- |
| <kbd>Arrow Left</kbd> / <kbd>Arrow Right</kbd> | Resize panes in horizontal orientation |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Resize panes in vertical orientation |
| <kbd>Home</kbd> | Snap start pane to its minimum size |
| <kbd>End</kbd> | Snap start pane to its maximum size |
| <kbd>Ctrl</kbd> + <kbd>Arrow Left</kbd> / <kbd>Arrow Up</kbd> | Collapse or expand the start pane |
| <kbd>Ctrl</kbd> + <kbd>Arrow Right</kbd> / <kbd>Arrow Down</kbd> | Collapse or expand the end pane |

## Styling

The `Splitter` component exposes CSS parts for styling:

| Name | Description |
| ---- | ----------- |
| `splitter-bar` | The draggable separator between panes |
| `drag-handle` | The drag handle element in the splitter bar |
| `start-pane` | The start pane container |
| `end-pane` | The end pane container |
| `start-collapse-btn` | Button that collapses the start pane |
| `end-collapse-btn` | Button that collapses the end pane |
| `start-expand-btn` | Button that expands the start pane |
| `end-expand-btn` | Button that expands the end pane |

It also supports theme CSS variables, including:

- `--bar-color`
- `--handle-color`
- `--expander-color`
- `--bar-color-active`
- `--handle-color-active`
- `--expander-color-active`
- `--focus-color`
- `--size`

```css
igc-splitter {
  --bar-color: #011627;
  --handle-color: #ecaa53;
  --expander-color: #ecaa53;
  --bar-color-active: #011627;
  --handle-color-active: #ecaa53;
  --expander-color-active: #ecaa53;
  --focus-color: #ecaa53;
}
```

`sample="/layouts/splitter/styling", height="520", alt="{Platform} Splitter Styling Example"`

## API References

- `Splitter`
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})

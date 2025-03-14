---
title: {Platform} Tabs Control | Layout Controls | {ProductName}
_description: {Platform} Tabs component allows users to place tabs at the top and switch between similar data sets. Try it Now
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Tabs Component, Infragistics
mentionedTypes: ["Tabs", "Tab", "TabPanel", "Icon", "IconButton", "RadioGroup"]
---

# {Platform} Tabs Overview

The {Platform} Tabs is a lightweight and user-friendly component that organizes corresponding content in a tab format or a collection of tabs typically placed horizontally. The {Platform} Tab enables end-users to easily click through and display different views. There are several features and customization options like tab orientation, templating, built-in header styles, animation, scroll buttons, and more. 

The {ProductName} Tabs organizes and switches between similar data sets. The tabs are placed at the top of the data content. When a tab is selected the panel with the corresponding id is displayed. The component could be used with only tabs defined (without any panels).

## {Platform} Tabs Example

The {Platform} Tabs example below displays three different tabs aligned in a single line so you can navigate across each in a fast and easy way.

`sample="/layouts/tabs/overview", height="150", alt="{Platform} Tabs Example"`

## How to use Tabs with {ProductName}

<!-- WebComponents -->

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

<!-- end: React -->

Before using the `Tabs`, you need to register it as follows:

```tsx
import { IgrTabsModule, IgrTabs, IgrTab,  IgrTabPanel} from "igniteui-react";

IgrTabsModule.register();
```


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTabsModule));
```

```ts
import { defineComponents, IgcTabsComponent } from 'igniteui-webcomponents';

defineComponents(IgcTabsComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

Simple `Tabs` declaration is done as follows:

```html
<igc-tabs>
    <igc-tab panel="first">Tab 1</igc-tab>
    <igc-tab panel="second">Tab 2</igc-tab>
    <igc-tab panel="third">Tab 3</igc-tab>
    <igc-tab-panel id="first">Panel 1</igc-tab-panel>
    <igc-tab-panel id="second">Panel 2</igc-tab-panel>
    <igc-tab-panel id="third">Panel 3</igc-tab-panel>
</igc-tabs>
```

```razor
<IgbTabs>
    <IgbTab Panel="first">Tab 1</IgbTab>
    <IgbTab Panel="second">Tab 2</IgbTab>
    <IgbTab Panel="third">Tab 3</IgbTab>
    <IgbTabPanel Id="first">Panel 1</IgbTabPanel>
    <IgbTabPanel Id="second">Panel 2</IgbTabPanel>
    <IgbTabPanel Id="third">Panel 3</IgbTabPanel>
</IgbTabs>
```

```tsx
<IgrTabs>
    <IgrTab panel="first">Tab 1</IgrTab>
    <IgrTab panel="second">Tab 2</IgrTab>
    <IgrTab panel="third">Tab 3</IgrTab>
    <IgrTabPanel id="first">Panel 1</IgrTabPanel>
    <IgrTabPanel id="second">Panel 2</IgrTabPanel>
    <IgrTabPanel id="third">Panel 3</IgrTabPanel>
</IgrTabs>
```

### Selection

The `Tabs` emits `Change` event when the user selects an item either by key press or click. The `Select` method allows you to select a tab by specifying its panel as string value.

If the selected tab is not specified on initial load, the first tab that is not disabled will be selected.

The default behavior, which selects a tab when the user is navigating with the arrow keys, could be modified by the `Activation` property. Setting it to `Manual` will focus the next/previous tab on arrow key press, but the tab will be selected only after pressing <kbd>Space</kbd> or <kbd>Enter</kbd>

### Disabled Tab

A tab is disabled by setting the `Disabled` attribute:

```html
<igc-tab panel="first" disabled>Tab 1</igc-tab>
```

```razor
<IgbTab Panel="first" Disabled>Tab 1</IgbTab>
```

```tsx
<IgrTab panel="first" disabled={true}>Tab 1</IgrTab>
```

### Alignment

The `Alignment` property controls how {Platform} tabs are positioned. It accepts the following values:

- `Start` (default): the width of the tab depends on the content (label, icon, both) and all tabs have equal padding. First tab is aligned to the tabs container's left side.
- `Center`: the width of the tab depends on the content and occupies the tabs container's center.
- `End`: the width of the tab depends on the content and all tabs have equal padding. Last tab is aligned to the tabs container's right side.
- `Justify`: all tabs are equal in width and fully fit the tabs container.

If the space is not enough to fit all tabs, scroll buttons are displayed.

`sample="/layouts/tabs/alignment", height="200", alt="{Platform} Tabs Example"`



### Scrolling

Scroll buttons are shown when the available space is not enough to render all {Platform} tabs. The start scroll button is disabled if the first tab is in view. Respectively, when last tab is in view the end scroll button is disabled. By pressing one of the scroll buttons the tabs are scrolled so the tab in that direction is fully visible, or if it is already visible the previous/next tab in that direction is displayed.

`sample="/layouts/tabs/scrolling", height="150", alt="{Platform} Tabs Example"`



### Keyboard Navigation

|Keys|Description|
|----|-----------|
| <kbd>&larr;</kbd> | Selects previous (next in Right-to-Left mode) tab. If `Activation` is set to `Manual` only focuses the tab. Scrolls to end if on first tab.  |
| <kbd>&rarr;</kbd> | Selects next (previous in Right-to-Left mode) tab. If `Activation` is set to `Manual` only focuses the tab. Scrolls to start if on last tab. |
| <kbd>Home</kbd> | Selects the first tab. |
| <kbd>End</kbd> | Selects the last tab. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the focused tab when `Activation` is `Manual` |

### Prefix / Suffix

Each tab has default slot to display information - icon, text or both and `prefix` and `suffix` slots to show additional content in the beginning and/or in the end.

`sample="/layouts/tabs/prefix-suffix", height="150", alt="{Platform} Tabs Example"`



## Styling

The `Tabs` component exposes several CSS parts, giving you full control over its style:

| Name | Description |
|--|--|
| `headers` | The wrapper which includes the tabs and the scroll buttons. |
| `headers-content` | The container for the tabs which represents the available space for rendering of the tabs. |
| `headers-wrapper` | The wrapper for the tabs and the selected indicator. |
| `headers-scroll` | The container for the tabs. |
| `selected-indicator` | The selected indicator. |
| `start-scroll-button` | The start scroll button displayed when the tabs overflow. |
| `end-scroll-button` | The end scroll button displayed when the tabs overflow. |
| `content` | The container for the content where the data is displayed. |

The `Tab` component exposes the following CSS parts:

|Name|Description|
|--|--|
| `content` | The content wrapper. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |

```css
igc-tabs::part(headers-content) {
  background-color: var(--ig-gray-200);
}

igc-tab::part(content) {
  color: var(--ig-success-500);
}
```

`sample="/layouts/tabs/styling", height="150", alt="Tabs Styling Example"`

## API Reference

- `Tabs`
- `Tab`
- `TabPanel`
- `Icon`
- `IconButton`
- `RadioGroup`
- [`Styling & Themes`](../themes/overview.md)


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
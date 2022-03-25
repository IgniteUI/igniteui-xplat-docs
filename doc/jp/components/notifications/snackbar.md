---
title: $Platform$ Snackbar | Infragistics
_description: With $ProductName$ Snackbar component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Snackbar components
mentionedTypes: ['Snackbar']
_language: ja
---

# $Platform$ Snackbar

The $ProductName$ Snackbar component is used to provide feedback about an operation by showing a brief message at the bottom of the screen. 

## $ProductName$ Snackbar Example

<code-view style="height: 230px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-overview" alt="$Platform$ Snackbar Example"
           github-src="notifications/snackbar/overview">
</code-view>

<div class="divider--half"></div>

### Usage

First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Snackbar`, you need to register it as follows:

```ts
import { defineComponents, IgcSnackbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcSnackbarComponent);
```

The simplest way to display the snackbar component is to use its `Show` method and call it on a button click.

```html
<igc-button onclick="snackbar.show()" variant="contained">Show Snackbar</igc-button>
<igc-snackbar id="snackbar">Snackbar Message</igc-snackbar>
```

## Examples

### Display Time

Use the `DisplayTime` property to configure how long the snackbar component is visible. By default, it's set to 4000 miliseconds.

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/snackbar-display-time"
           alt="$Platform$ Snackbar Display Time Example"
           github-src="notifications/snackbar/display-time">
</code-view>

### Action Text

By default, the snackbar component is hidden automatically after a period specified by the `DisplayTime`. You can use `KeepOpen` property to change this behavior. In this way, the snackbar will remain visible. Using the snackbar `ActionText` you can display an action button inside the component.

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/snackbar-action-text"
           alt="$Platform$ Sanckbar Action Text Example"
           github-src="notifications/snackbar/action-text">
</code-view>

## Styling

The snackbar component exposes several CSS parts (`base`, `message`, and `action`) to give you full control over its styling.

```css
igc-snackbar::part(base) {
    background: #0d6efd;
    border-color: #0d6efd;
    color: white;
}
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/snackbar-styling"
           alt="$Platform$ Sanckbar Styling Example"
           github-src="notifications/snackbar/styling">
</code-view>

## API Reference

* `Snackbar`

<div class="divider--half"></div>

## Additional Resources

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

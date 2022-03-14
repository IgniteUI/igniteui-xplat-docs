---
title: $Platform$ Snackbar | Infragistics
_description: With $ProductName$ Snackbar component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Snackbar components
mentionedTypes: ['Snackbar']
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

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Snackbar`, you need to register it as follows:

```razor
IgbSnackbarModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Snackbar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcSnackbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcSnackbarComponent);
```

The simplest way to display the snackbar component is to use its `show()` method and call it on a button click.

```html
<igc-button onclick="snackbar.show()" variant="contained">Show Snackbar</igc-button>
<igc-snackbar id="snackbar">Snackbar Message</igc-snackbar>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained">Show Snackbar</IgbButton>
<IgbSnackbar id="snackbar">Sanckbar Message</IgbSnackbar>
```

## Examples

### Display Time

Use the `display-time` attribute to configure how long the snackbar component is visible. By default, it's set to 4000 miliseconds.

```html
<igc-button onclick="snackbar.show()" variant="contained">Show Snackbar</igc-button>
<igc-snackbar id="snackbar" display-time="6000">Snackbar with different display time</igc-snackbar>
```

```razor
<IgbSnackbar id="snackbar" DisplayTime="6000">Snackbar with different display time</IgbSnackbar>
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/snackbar-display-time"
           alt="$Platform$ Snackbar Display Time Example"
           github-src="notifications/snackbar/display-time">
</code-view>

### Action Text

By default, the snackbar component is hidden automatically after a period specified by the `display-time` input. You can use `keep-open` attribute to change this behavior. In this way, the snackbar will remain visible. Using the snackbar `action-text` you can display an action button inside the component.


```html
<igc-button onclick="snackbar.show()" variant="contained">Show Snackbar</igc-button>
<igc-snackbar id="snackbar" keep-open action-text="Close">Snackbar with enabled keep-open option</igc-snackbar>
```

```razor
<IgbSnackbar id="snackbar" KeepOpen="true" ActionText="Close">Snackbar with enabled keep-open option</IgbSnackbar>
```

```ts
const snackbar = document.querySelector('igc-snackbar') as IgcSnackbarComponent

document.addEventListener('igcAction', () => {
    snackbar.hide();
});
```

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

<!-- WebComponents -->

## API Reference

* `Snackbar`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

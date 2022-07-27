---
title: $Platform$ Snackbar | Infragistics
_description: With $ProductName$ Snackbar component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Snackbar components
mentionedTypes: ['Snackbar']
---

# $Platform$ Snackbar

The $ProductName$ Snackbar component is used to provide feedback about an operation by showing a brief message at the bottom of the screen.

## $ProductName$ Snackbar Example

This sample demonstrates how to create `Snackbar` component.

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

<!-- React -->

First, you need to the install the corresponding $ProductName$ npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Snackbar`, its necessary CSS, and register its module, like so:

```tsx
import { IgrSnackbarModule, IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrSnackbarModule.register();
```

<!-- end: React -->

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

The simplest way to display the snackbar component is to use its `Show` method and call it on a button click.

```html
<igc-button onclick="snackbar.show()" variant="contained">Show Snackbar</igc-button>
<igc-snackbar id="snackbar">Snackbar Message</igc-snackbar>
```

```razor
<div class="container vertical">
    <IgbButton onclick="snackbar.show()">Show Snackbar</IgbButton>
    <IgbSnackbar id="snackbar"> Snackbar Message </IgbSnackbar>
</div>

@code {

    protected override void OnInitialized()
    {
        IgbSnackbarModule.Register(IgniteUIBlazor);
        IgbButtonModule.Register(IgniteUIBlazor);
    }
}
```

```tsx
<IgrButton variant="contained" clicked={this.onShowButtonClicked}>
    <span>Show Snackbar</span>
</IgrButton>
<IgrSnackbar ref={this.onSnackbarRef}>
    <span>Snackbar Message</span>
</IgrSnackbar>

public onSnackbarRef(snackbar: IgrSnackbar){
    if (!snackbar) { return; }
    this.snackbarRef = snackbar;
}
public onShowButtonClicked() {
    if(this.snackbarRef){
        this.snackbarRef.show();
    }
}
```

## Examples

### Display Time

Use the `DisplayTime` property to configure how long the snackbar component is visible. By default, it's set to 4000 milliseconds.

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

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- React -->

* [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [Ignite UI for React Examples on **GitHub**](https://github.com/IgniteUI/igniteui-react-examples)

<!-- end: React -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

 ## API Members

 - `ActionText`
 - `DisplayTime`
 - `KeepOpen`
 - `Show`
 - `Snackbar`
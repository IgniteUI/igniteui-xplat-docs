---
title: $Platform$ Toast | Infragistics
_description: With $ProductName$ Toast component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Toast components
mentionedTypes: ['Toast']
---

# $Platform$ Toast

The $ProductName$ Toast component is primarily used for system messaging, push notifications, warning messages, and information. It cannot be dismissed by the user.

## $ProductName$ Toast Example

<code-view style="height: 230px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/toast-overview" alt="$Platform$ Toast Example"
           github-src="notifications/toast/overview">
</code-view>

<div class="divider--half"></div>

### Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Toast`, you need to register it as follows:

```razor
IgbToastModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Toast` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcToastComponent } from 'igniteui-webcomponents';

defineComponents(IgcToastComponent);
```

The simplest way to display the toast component is to use its `show()` method and call it on a button click.

```html
<igc-button onclick="toast.show()" variant="contained">Show Toast</igc-button>
<igc-toast id="toast">Toast Message</igc-toast>
```

```razor
<IgbButton Variant="@ButtonVariant.Contained">Show Toast</IgbButton>
<IgbToast id="toast">Toast Message</IgbToast>
```

## Examples

### Properties

Use the `display-time` attribute to configure how long the toast component is visible. By default, it's set to 4000 miliseconds.

By default, the toast component is hidden automatically after a period specified by the `display-time` input. You can use `keep-open` attribute to change this behavior. In this way, the toast will remain visible.

```html
<igc-button onclick="toast.toggle()" variant="contained">Toggle Toast</igc-button>
<igc-button onclick="toast.keepOpen = !toast.keepOpen" variant="contained">Toggle keepOpen property</igc-button>
<igc-button onclick="toast.displayTime = 8000" variant="contained">Set DisplayTime to 8000</igc-button>
</div>
<igc-toast id="toast">Toast Message</igc-toast>
```

```razor
<IgbToast id="toast" DisplayTime="8000">Toast with different display time</IgbToast>
```

```razor
<IgbToast id="toast" KeepOpen="true">Toast with different display time</IgbToast>
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/toast-properties"
           alt="$Platform$ Toast Properties Example"
           github-src="notifications/toast/properties">
</code-view>

## Styling

You can style the toast using it's directly its tag selector:

```css
igc-toast {
    background: #011627;
    color: #ECAA53;
    outline-color: #ECAA53;
}
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/toast-styling"
           alt="$Platform$ Toast Styling Example"
           github-src="notifications/toast/styling">
</code-view>

<!-- WebComponents -->

## API Reference

* `Toast`

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

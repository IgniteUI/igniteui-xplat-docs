---
title: {Platform} Navbar | Infragistics
_description: Infragistics' {Platform} navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  {Platform}!
_keywords: {Platform} navbar, {ProductName}, Infragistics
mentionedTypes: ["Navbar"]
---

# {Platform} Navbar Overview

The {ProductName} Navbar informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.


## {Platform} Navbar Example

The following example represents a `Navbar` with icons and text header:

`sample="/menus/nav-bar/overview", height="100", alt="{Platform} Navbar Overview Example"`

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Navbar`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbNavbarModule));
```

```ts
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Navbar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Navbar` and its necessary CSS like so:

```tsx
import { IgrNavbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

Then in the template of `Navbar`, you can add the following code to show a basic `Navbar` with a title only:

<!-- WebComponents -->

```html
<igc-navbar>Navigation Title</igc-navbar>
```

<!-- end: WebComponents -->

```razor
<IgbNavbar>Navigation Title</IgbNavbar>
```

```tsx
<IgrNavbar>
    <span>Navigation Title</span>
</IgrNavbar>
```

## Content

You can added some `Icon` elements using the `Start` and `End` slots to the`Navbar` as it is shown in the following sample:

`sample="/menus/nav-bar/overview", height="100", alt="{Platform} Navbar Styling Example"`

## Styling

The `NavBar` component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the navigation bar. |
| `start` | The left aligned icon container. |
| `middle` | The navigation bar title container. |
| `end` | The right aligned action icons container. |

```css
igc-icon {
  color: var(--ig-primary-500);
}

igc-navbar {
  background-color: var(--ig-secondary-200);
}

igc-navbar::part(middle) {
  font-family: Titillium Web, sans-serif;
  color: var(--ig-primary-500);;
}
```

If all went well, you should see the following in your browser:

`sample="/menus/nav-bar/styling", height="100", alt="{Platform} Navbar Styling Example"`

<div class="divider"></div>


## API References

 - `Icon`
 - `Navbar`
 - [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
---
title: $Platform$ Navbar | Infragistics
_description: Infragistics' $Platform$ navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  $Platform$!
_keywords: $Platform$ navbar, $ProductName$, Infragistics
mentionedTypes: ['Navbar']
---

# $Platform$ Navbar Overview

 $Platform$ `Navbar` informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## $Platform$ Navbar Example

The following example represents a `Navbar` with icons and text header:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-bar-overview"
           alt="$Platform$ Navbar Overview Example"
           github-src="menus/nav-bar/overview">
</code-view>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Navbar`, you need and register it as follows:

```razor
IgbNavbarModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent);
```


Then in the template of `Navbar`, you can add the following code to show a basic `Navbar` with a title only:

```html
<igc-navbar>Navigation Title</igc-navbar>
```

## Content

You can added some `Icon` icons using the `Start` and `End` slots to the`Navbar` as it is shown in the following sample:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-bar-content"
           alt="$Platform$ Navbar Styling Example"
           github-src="menus/nav-bar/content">
</code-view>


## Styling

The Navigation Bar component exposes several CSS parts (`base`, `start`, `middle` and `end`) to give you full control over its styling.

```css
igc-icon {
    color: currentColor;
}

igc-navbar {
    background-color: #232121
}

igc-navbar::part(start) {
    color: #f23269;
}

igc-navbar::part(middle) {
    font-family: Titillium Web,sans-serif;
    color: #e9e8ea
}

igc-navbar::part(end) {
    color: #e9e8ea
}
```

If all went well, you should see the following in your browser:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-bar-styling"
           alt="$Platform$ Navbar Styling Example"
           github-src="menus/nav-bar/styling">
</code-view>

## API References

For more detailed information regarding the navbar's API, refer to the following links:
* `Navbar`

Additional components and/or directives that were used:
* `Icon`

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [$Platform$ **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
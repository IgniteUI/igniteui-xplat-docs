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

<!-- Blazor -->

To get started with the `Navbar` component, you first need to register the `IgbNavbarModule`.

```razor
IgbNavbarModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

In order to use the Navigation Bar component, the web components package must be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageWebComponents}
</pre>

To get started with the `Navbar` component, first you need to import the component in our typescript file and register it by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

<!-- end: WebComponents -->

<div class="divider--half"></div>

```ts
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';
defineComponents(IgcNavbarComponent);
```

Then in the template of our component we can add the following code to show a basic `Navbar` with a title only:

```html
<igc-navbar>Ignite UI for Web Components</igc-navbar>
```

## Content

<!-- Blazor -->

In the following sample of our `Navbar` we have added some `Icon` icons using the `start` and `end` slots:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-bar-content"
           alt="$Platform$ Navbar Styling Example"
           github-src="menus/nav-bar/content">
</code-view>

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

In the sample of our `Navbar` we have added some `Icon` icons using the `start` and `end` slots:

```html
<igc-navbar style="height:65px">
    <igc-icon name="home" slot="start" size="large"></igc-icon>
    <h2>Sample App</h2>
    <igc-icon name="search" slot="end" size="large"></igc-icon>
    <igc-icon name="favorite" slot="end" size="large"></igc-icon>
    <igc-icon name="more_vert" slot="end" size="large"></igc-icon>
</igc-navbar>
```

<!-- end: WebComponents -->

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
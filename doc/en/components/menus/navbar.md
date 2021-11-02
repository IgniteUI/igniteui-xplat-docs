---
title: $Platform$ Navbar | Infragistics
_description: Infragistics' $Platform$ navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  $Platform$!
_keywords: $Platform$ navbar, $ProductName$, Infragistics
mentionedTypes: ['Navbar']
---
# $Platform$ Navbar Overview

 $Platform$ Navigation Bar component informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## $Platform$ Navbar Example

The following example represents a `Navbar` with title:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/navbar-overview"
           alt="$Platform$ Navbar Overview Example"
           github-src="menus/navbar/overview">
</code-view>

## Dependencies

In order to use the Navigation Bar component, the web components package must be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageWebComponents}
</pre>

## Usage

To get started with the `Navbar` component, first you need to import the `igniteui-webcomponents` in TypeScript file:

```typescript
import 'igniteui-webcomponents';
```

Then in the template of our component we can add the following code to show a basic `Navbar` with a title only:

```html
<igc-navbar>Ignite UI for Web Components</igc-navbar>
```

## Customize Content

In order to customize the content of our `Navbar` we can add some icons using the `start` and `end` slots:

```html
<igc-navbar style="height:40px">
    <igc-icon name="home" slot="start" size="large"></igc-icon>
    <h2>Sample App</h2>
    <igc-icon name="search" slot="end" size="large"></igc-icon>
    <igc-icon name="favorite" slot="end" size="large"></igc-icon>
    <igc-icon name="more_vert" slot="end" size="large"></igc-icon>
</igc-navbar>
```

If all went well, you should see the following in your browser:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/navbar-content"
           alt="$Platform$ Navbar Content Example"
           github-src="menus/navbar/content">
</code-view>

## Styling

The radio component exposes several CSS parts (`base`, `start`, `middle` and `end`) to give you full control over its styling.

```css
igc-icon {
    color: currentColor;
}

igc-navbar {
    background-color: gainsboro;
}

igc-navbar::part(start) {
    color: darkolivegreen;
}

igc-navbar::part(middle) {
    font-family: Titillium Web,sans-serif;
}

igc-navbar::part(end) {
    color: darkgray;
}
```

If all went well, you should see the following in your browser:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/navbar-styling"
           alt="$Platform$ Navbar Styling Example"
           github-src="menus/navbar/styling">
</code-view>

## Additional Resources

<div class="divider--half"></div>

- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
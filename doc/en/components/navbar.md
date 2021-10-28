---
title: $Platform$ Navbar | Infragistics
_description: Infragistics' $Platform$ navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  $Platform$!
_keywords: $Platform$ form, $ProductName$, Infragistics
mentionedTypes: ['Navbar']
---
# $Platform$ Navbar Overview

<p class="highlight">The $Platform$ navbar component informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.</p>

## $Platform$ Navbar Example

The following example represents a navbar with title:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/navbar-overview"
           alt="$Platform$ Navbar Overview Example"
           github-src="menus/navbar/overview">
</code-view>

## Dependencies

In order to use the Form component, the web components package must be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install {PackageWebComponents}
</pre>

## Usage

To get started with the Navbar component, first you need to import the `igniteui-webcomponents` in our **index.ts** file:

```typescript
import 'igniteui-webcomponents';
```

Then in the template of our component we can add the following code to show a basic navbar with a title only:

```html
<igc-navbar>Ignite UI for Web Components</igc-navbar>
```

## Customize Content

In order to customize the content of our navbar we can add some icons using the `start` and `end` slots:

```html
<igc-navbar>
  <span slot="start" class="material-icons">home</span>
  <h2>Sample App</h2>
  <span slot="end" class="material-icons">search</span>
  <span slot="end" class="material-icons">favorite</span>
  <span slot="end" class="material-icons">more_vert</span>
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
igc-navbar {
    background-color: gainsboro;
}

igc-navbar::part(start) {
    color: dimgrey;
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
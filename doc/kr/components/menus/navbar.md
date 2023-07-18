---
title: {Platform} Navbar | Infragistics
_description: Infragistics' {Platform} navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  {Platform}!
_keywords: {Platform} navbar, {ProductName}, Infragistics
_language: kr
mentionedTypes: ['Navbar']
---

# {Platform} Navbar Overview

 {Platform} `Navbar` informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## {Platform} Navbar Example

The following example represents a `Navbar` with icons and text header:

`sample="/menus/nav-bar/overview", height="300", alt="{Platform} Navbar Overview Example"`



## Dependencies

In order to use the Navigation Bar component, the web components package must be installed.

```cmd
npm install {PackageWebComponents}
```

## Usage

To get started with the `Navbar` component, first you need to import the component in our typescript file and register it by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```typescript
import { defineComponents, IgcNavbarComponent } from 'igniteui-webcomponents';
defineComponents(IgcNavbarComponent);
```

Then in the template of our component we can add the following code to show a basic `Navbar` with a title only:

```html
<igc-navbar>Ignite UI for Web Components</igc-navbar>
```

## Content

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

`sample="/menus/nav-bar/styling", height="300", alt="{Platform} Navbar Styling Example"`



## API References

* `Navbar`
* `Icon`

<div class="divider"></div>


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
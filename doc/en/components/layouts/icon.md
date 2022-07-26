---
title: $Platform$ Icon Component | $ProductName$
_description: See how you can easily get started with $Platform$ Icon Component. Choose icons and select from different styling options to customize them further.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Icon components, $Platform$ Icon controls
mentionedTypes: ['Icon']
---

# $Platform$ Icon Overview

The $Platform$ Icon component allows you to easily display font or choose from a large set of predefined SVG icons, but it also gives you the ability to create custom font icons for your project. Benefiting from a number of attributes, you can define or change the size of the icon in use or apply different styles to it.

## $Platform$ Icon Example

<code-view style="height: 60px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/icon-sizing" alt="$Platform$ Icon Example"
           github-src="layouts/icon/sizing">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```

```ts
import { defineComponents, IgcIconComponent } from "igniteui-webcomponents";

defineComponents(IgcIconComponent);
```

<!-- end: WebComponents -->

Before using the `Icon`, you need to register it as follows:

```razor
IgbIconModule.Register(IgniteUIBlazor);
```

<!-- React -->

First, you need to the install the corresponding $ProductName$ npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Icon`, its necessary CSS, and register its module, like so:

```tsx
import { IgrIcon, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrIconModule.register();
```

<!-- end: React -->

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Icon` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The `Icon` doesn't contain any icons on its own. It's a conduit for displaying any _registered_ SVG images.

### Adding Icons

<!-- WebComponents -->

To register an image as an icon, all you have to do is import one of the 2 utility functions from the icons registry service that allows you to add icons to an icon collection.

```ts
import {
  registerIcon,
  registerIconFromText,
} from "igniteui-webcomponents";
```

The `registerIcon` function allows you to register an SVG image as an icon from an external file:

```ts
registerIcon(
  "search",
  "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg",
  "material"
);
```

<!-- end: WebComponents -->

<!-- Blazor -->

To register an image as an icon, all you need to do is call one of the 2 "register" methods on a single `Icon` element that allow you to add icons to an icon collection on your page.

The `RegisterIcon` method allows you to register an SVG image as an icon from an external file:

```razor
<IgbIcon @ref="@IconRef" />

@code {
  private IgbIcon IconRef { get; set; }

  protected override void OnAfterRender(bool firstRender)
  {
     base.OnAfterRender(firstRender);
     if (this.IconRef != null && firstRender)
     {
       this.IconRef.RegisterIcon("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
     }
  }
}
```

<!-- end: Blazor -->

<!-- React -->

To register an image as an icon, all you need to do is call one of the 2 "register" methods on a single `Icon` element that allow you to add icons to an icon collection on your page.

The `RegisterIcon` method allows you to register an SVG image as an icon from an external file:

```tsx

<IgrIcon ref={this.iconRef} iconName="search" collection="material" />

public iconRef(icon: IgrIcon){
    if(!icon){
        return;
    }
              
    icon.registerIcon("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
}
```

<!-- end: React -->

The method above will add an icon named `search` to a cached collection named `material`.

In order to use the newly registered icon, all you have to do is to pass the name and collection to the `Icon` element:

```html
<igc-icon name="search" collection="material"></igc-icon>
```

```razor
IgbIcon IconName="search" Collection="material" />
```

```tsx
<IgrIcon iconName="search" collection="material" />
```

The second method for registering icons is by passing an SVG string to the `RegisterIconFromText` method:

```ts
const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

registerIconFromText("search", searchIcon, "material");
```

```razor
<IgbIcon @ref="@IconRef" />

@code {
  private IgbIcon IconRef { get; set; }

  protected override void OnAfterRender(bool firstRender)
  {
     base.OnAfterRender(firstRender);
     if (this.IconRef != null && firstRender)
     {
       const string searchIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
       this.IconRef.RegisterIconFromText("search", searchIcon, "material");
     }
  }
}
```

```tsx

<IgrIcon ref={this.iconRef} iconName="search" collection="material" />

public iconRef(icon: IgrIcon){
    if(!icon){
        return;
    }

    const searchIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
              
    icon.registerIconFromText("search", searchIcon, "material");
}
```

Then you'd use it in the same way as described in the component sample above.

### Size

The icon component supports three icon sizes - `small`, `medium`(default), and `large`. In order to change the size of the icon, you can set the `size` attribute to any of the aforementioned sizes.

```html
<igc-icon size="large"></igc-icon>
```

```razor
<IgbIcon Size="@SizableComponentSize.Large">
```

```tsx
<IgrIcon size="large" />
```

<code-view style="height: 60px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/icon-sizing" alt="$Platform$ Icon Sizing"
           github-src="layouts/icon/sizing">
</code-view>

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon horizontally.

```html
<igc-icon name="search" mirrored></igc-icon>
```

```razor
IgbIcon IconName="search" Collection="material" Mirrored="true" />
```

```tsx
<IgrIcon iconName="search" collection="material" mirrored={true} />
```

## Styling

The icon component can be styled by applying styles directly to the `Icon` element;

```css
igc-icon {
  --size: 48px;
  color: olive;
}
```

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/icon-styling" alt="$Platform$ Icon Sizing"
           github-src="layouts/icon/styling">
</code-view>

<!-- WebComponents -->

## API Reference

* `Icon`

<!-- end: WebComponents -->

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

 - `Icon`
 - `RegisterIcon`
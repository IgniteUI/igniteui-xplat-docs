---
title: {Platform} Icon Component | {ProductName}
_description: See how you can easily get started with {Platform} Icon Component. Choose icons and select from different styling options to customize them further.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Icon components, {Platform} Icon controls
mentionedTypes: ["Icon"]
---

# {Platform} Icon Overview

The {Platform} Icon component allows you to easily display font or choose from a large set of predefined SVG icons, but it also gives you the ability to create custom font icons for your project. Benefiting from a number of attributes, you can define or change the size of the icon in use or apply different styles to it.

## {Platform} Icon Example

`sample="/layouts/icon/sizing", height="60", alt="{Platform} Icon Example"`


<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

```ts
import { defineComponents, IgcIconComponent } from "igniteui-webcomponents";

defineComponents(IgcIconComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

Before using the `Icon`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbIconModule));
```

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Icon`, its necessary CSS, and register its module, like so:

```tsx
import { IgrIcon } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
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
constructor() {
    registerIconFromText("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
}

<IgrIcon name="search" collection="material" />
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
<IgrIcon name="search" collection="material" />
```

The second method for registering icons is by passing an SVG string to the `RegisterIconFromText` method:

<!-- Blazor, WebComponents -->
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
<!--end: Blazor, WebComponents -->
```tsx
const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

constructor() {
    registerIconFromText("search", searchIcon, "material");
}

<IgrIcon name="search" collection="material" />
```

Then you'd use it in the same way as described in the component sample above.

### Size
The icon component supports three icon sizes - `small`, `medium`(default), and `large`. In order to change the size of the icon, you can utilize the `--ig-size` CSS variable as follows:

<!-- Blazor, WebComponents -->
```css
igc-icon {
  --ig-size: var(--ig-size-large);
}
```

```razor
<IgbIcon Size="@SizableComponentSize.Large">
```
<!-- end: Blazor, WebComponents -->
<!-- React -->
```tsx
<IgrIcon className="size-small" />
<IgrIcon className="size-medium" />
<IgrIcon className="size-large" />
```

```css
.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```
<!-- end: React -->

`sample="/layouts/icon/sizing", height="60", alt="{Platform} Icon Sizing"`


### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon horizontally.

```html
<igc-icon name="search" mirrored></igc-icon>
```

```razor
IgbIcon IconName="search" Collection="material" Mirrored="true" />
```

```tsx
<IgrIcon name="search" collection="material" mirrored={true} />
```

## Styling

The icon component can be styled by applying styles directly to the `Icon` element;

```css
igc-icon {
  --size: 28px;
  color: var(--ig-primary-500);
}
```

`sample="/layouts/icon/styling", height="70", alt="{Platform} Icon Sizing"`

## API References

 - `Icon`
 - `RegisterIcon`
 - [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
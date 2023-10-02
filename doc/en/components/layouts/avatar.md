---
title: {Platform} Avatar | Layout Controls | Infragistics
_description: Use Infragistics' {Platform} avatar component to display an image, icon, or initials.
_keywords: avatar, layout, {ProductName}, Infragistics
mentionedTypes: ['Avatar']
---

# {Platform} Avatar

The {ProductName} Avatar helps to display initials, images, or icons in your application.

## {Platform} Icon Avatar Example

`sample="/layouts/avatar/icon", height="80", alt="{Platform} Avatar Example"`



<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} npm package by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Avatar`, its necessary CSS, and register its module, like so:

```tsx
import { IgrAvatarModule, IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAvatarModule.register();
```

<!-- end: React -->

Before using the `Avatar`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbAvatarModule));
```
<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Avatar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);
```

The `Avatar` is capable of displaying images, initials, or any other content, including icons. Declaring an `Avatar` is as simple as:

```html
<igc-avatar></igc-avatar>
```

```tsx
<IgrAvatar />
```

```razor
<IgbAvatar />
```

The avatar has several attributes that allow rendering different content based on the context. The most basic way to display content in the boundaries of the avatar is to provide content between the opening and closing tags.

```html
<igc-avatar>
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```tsx
<IgrAvatar>
    <IgrIcon iconName="home" />
</IgrAvatar>
```

```razor
<IgbAvatar>
  <IgbIcon Name="home" />
</IgbAvatar>
```

### Initials

If the `initials` attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.

```html
<!-- Initials("AZ") will be displayed instead of the icon. -->

<igc-avatar initials="AZ">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```tsx
<IgrAvatar initials="AZ">
    <IgrIcon iconName="home" />
</IgrAvatar>
```

```razor
<!-- Initials("AZ") will be displayed instead of the icon. -->

<IgbAvatar Initials="AZ">
  <IgbIcon Name="home" />
</IgbAvatar>
```

`sample="/layouts/avatar/initials", height="80", alt="{Platform} Avatar Example"`



### Image

The avatar can also display an image when the `src` attribute is assigned a valid URL to a static asset. In that case the `initials` value will be ignored and children elements will not be rendered.

```html
<igc-avatar
  initials="AZ"
  src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
  alt="A photo of a man.">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```tsx
<IgrAvatar initials="AZ"
           src="https://static.infragistics.com/xplatform/images/people/men/1.jpg"
           alt="A photo of a man.">
    <IgrIcon iconName="home" />
</IgrAvatar>
```


```razor
<IgbAvatar Initials="AZ"
           Src="https://static.infragistics.com/xplatform/images/people/GUY01.png"
           Alt="A photo of a man.">
  <IgbIcon Name="home" />
</IgbAvatar>
```

`sample="/layouts/avatar/image", height="80", alt="{Platform} Avatar Example"`


### Shape

The avatar supports three shapes - `circle`, `rounded`, and `square`. The default shape of the avatar is `square` and it can be changed via the `shape` attribute.

`sample="/layouts/avatar/shape", height="80", alt="{Platform} Avatar Example"`



### Size

Apart from the shape, the size of the avatar can also be changed by utilizing the `--ig-size` CSS variable. The supported sizes are `small` (default), `medium`, and `large`. The following code snippet shows how to use a different component size: 

```css
igc-avatar {
    --ig-size: var(--ig-size-large);
}
```

`sample="/layouts/avatar/size", height="130", alt="{Platform} Avatar Example"`



### Styling

The avatar component exposes a `base` part that can be used to change all of its style properties.

```css
igc-avatar::part(base) {
  --size: 72px;
  color: olive;
  background: beige;
  border-radius: 20px;
}
```


<div class="divider--half"></div>


## API References

 - `Avatar`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
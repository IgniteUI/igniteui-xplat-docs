---
title: $Platform$ Avatar | Layout Controls | Infragistics
_description: Use Infragistics' $Platform$ avatar component to display an image, icon, or initials.
_keywords: avatar, layout, $ProductName$, Infragistics
mentionedTypes: ['Avatar']
---

# $Platform$ Avatar

The $ProductName$ Avatar helps to display initials, images, or icons in your application.

## $Platform$ Icon Avatar Example

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-icon"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/icon">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Avatar`, you need to register it as follows:

```razor
IgbAvatarModule.Register(IgniteUIBlazor);
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

```razor
<IgbAvatar />
```

The avatar has several attributes that allow rendering different content based on the context. The most basic way to display content in the boundaries of the avatar is to provide content between the opening and closing tags.

```html
<igc-avatar>
  <igc-icon name="home"></igc-icon>
</igc-avatar>
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

```razor
<!-- Initials("AZ") will be displayed instead of the icon. -->

<IgbAvatar Initials="AZ">
  <IgbIcon Name="home" />
</IgbAvatar>
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-initials"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/initials">
</code-view>

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

```razor
<IgbAvatar Initials="AZ"
           Src="https://static.infragistics.com/xplatform/images/people/GUY01.png"
           Alt="A photo of a man.">
  <IgbIcon Name="home" />
</IgbAvatar>
```

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-image"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/image">
</code-view>

The avatar supports three shapes - `circle`, `rounded`, and `square`. The shape of the avatar can be changed via the `shape` attribute.

### Shape

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-shape"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/shape">
</code-view>

### Size

Apart from the shape, the size of the avatar can also be changed by setting the `size` attribute. The supported sizes are `small`, `medium`, and `large`.

<code-view style="height: 130px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-size"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/size">
</code-view>

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

<!-- WebComponents -->

## API Reference

* `Avatar`

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

 ## API Members

 - `Avatar`
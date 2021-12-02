---
title: $Platform$ Avatar | Layout Controls | Infragistics
_description: Use Infragistics' $Platform$ avatar component to display an image, icon, or initials.
_keywords: avatar, layout, $ProductName$, Infragistics
mentionedTypes: ['Avatar']
---

# $Platform$ Avatar

The $ProductName$ Avatar helps to display initials, images, or icons in your application.

<div class="divider"></div>

## $Platform$ Icon Avatar Example

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-icon"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/icon">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- Blazor -->

To get started with the `Avatar`, we first need to register its module, like so:

```razor
IgbAvatarModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<!-- WebComponents -->

To get started we need to import the `Avatar` in our typescript file and register the component by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);
```

<!-- end: WebComponents -->

After we import the `Avatar` component we are ready to start using it, so let's add our first avatar.

The avatar component is capable of displaying images, initials, or any other content, including icons.
Declaring an `Avatar` is as simple as:

```html
<igc-avatar></igc-avatar>
```

```razor
<IgbAvatar />
```

The avatar has several attributes that allow rendering different content based on the context; The most basic way to display content in the boundaries of the avatar is to provide content between the opening and closing tags.

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

The avatar supports three shapes - `circle`, `rounded`, and `square`. The shape of the avatar can be changed via the `shape` attribute.

Apart from the shape, the size of the avatar can also be changed by setting the `size` attribute. The supported sizes are `small`, `medium`, and `large`.

## Examples

### Initials

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-initials"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/initials">
</code-view>

### Image

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-image"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/image">
</code-view>

### Shape

<code-view style="height: 80px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-shape"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/shape">
</code-view>

### Size

<code-view style="height: 130px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/avatar-size"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/size">
</code-view>

## Styling

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

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

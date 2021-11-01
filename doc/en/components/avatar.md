---
title: $Platform$ Avatar | Layout Controls | Infragistics
_description: Use Infragistics' $Platform$ avatar component to display an image, icon, or initials.
_keywords: dock manager, layout, $ProductName$, Infragistics
---

# $Platform$ Avatar

<p class="highlight">The $ProductName$ Avatar helps to display initials, images, or icons in your application.</p>
<div class="divider"></div>

## Usage

The avatar component is capable of displaying and image, initials, or any other content, including icons.
Declaring an avatar is as simple as:

```html
<igc-avatar></igc-avatar>
```

The avatar has several attributes that allow rendering different content based on the context; The most basic way to display content in the boundaries of the avatar is to provide content between the opening and closing tags.

```html
<igc-avatar>
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

If the `initials` attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.


```html
<!-- Initials("AZ") will be displayed instead of the icon. -->

<igc-avatar initials="AZ">
  <igc-icon name="home"></igc-icon>
</igc-avatar>
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

The avatar supports three shapes - `circle`, `rounded`, and `square`. The shape of the avatar can be changed via the `shape` attribute. 

Apart from the shape, the size of the avatar can also be changed by setting the `size` attribute. The supported sizes are `small`, `medium`, and `large`.

## $Platform$ Avatar Examples

### Icon

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/avatar-icon"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/icon">
</code-view>

### Initials

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/avatar-initials"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/initials">
</code-view>

### Image

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/avatar-image"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/image">
</code-view>

### Shape

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/avatar-shape"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar/shape">
</code-view>

### Size

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/avatar-size"
           alt="$Platform$ Avatar Example"
           github-src="layouts/avatar-size">
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
## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

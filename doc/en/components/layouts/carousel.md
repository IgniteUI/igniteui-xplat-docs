---
title: {Platform} Carousel | Infragistics
_description: Use {ProductName} Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features. Try it now
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Carousel component, {Platform} Carousel control
_license: MIT
mentionedTypes: ["Carousel"]
---

# {Platform} Carousel Overview
The {ProductName} Carousel is a responsive, lightweight component that provides the most flexible way to create slideshow-like web experience for users who navigate back and forth through a collection of images with text slides, links, and other html elements.

The {Platform} Carousel component allows you to use animations, slide transitions, and customization so you can easily tweak the interface and build {Platform} custom carousel.

## {Platform} Carousel Example
The {Platform} Carousel demo you see below shows slides containing only images.

`sample="/layouts/carousel/overview", height="500", alt="{Platform} Carousel Overview Example"`

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `Carousel`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcCarouselComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCarouselComponent);
```
<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Carousel`, its necessary CSS, and register its module, like so:

```tsx
import { IgrCarousel, IgrCarouselSlide } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->
Before using the `Carousel`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCarouselModule));
```

You will also need to link an additional CSS file to apply the styling to the `Carousel` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

Now that you have the {ProductName} Carousel imported, you can start with a basic configuration of the `Carousel` and its slides.

Use the `Carousel` selector to wrap your slides. The slides may feature any valid html content inside, including other components.

```html
<igc-carousel>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-indigo-design.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/slider-image-chart.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-charts.png"/>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png"/>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png"/>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png"/>
    </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png" />
    </IgbCarouselSlide>
</IgbCarousel>
```

If you want a slide to be active by default, use the `Active` attribute:

```html
<igc-carousel>
    ...
    <igc-carousel-slide>
        ...
    </igc-carousel-slide>
    <igc-carousel-slide active>
        ...
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
    ...
    <IgrCarouselSlide>
        ...
    </IgrCarouselSlide>
    <IgrCarouselSlide active={true}>
        ...
    </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    ...
    <IgbCarouselSlide>
        ...
    </IgbCarouselSlide>
    <IgbCarouselSlide Active="true">
        ...
    </IgbCarouselSlide>
</IgbCarousel>
```

>[!NOTE]
>If no active slide is set, the first one will be set by default. If there are multiple active slides on initial rendering or subsequent updates, only the last one will be taken into account.

## Examples

### Carousel Configuration

By default, the `Carousel` has its `DisableLoop` property set to **false** (*looping occurs when the first slide comes after the last by navigating using the Next action, or when the last slide comes after the first by using the Previous action*). The looping behavior can be disabled by setting the value of the `DisableLoop` property to **true**.

```html
<igc-carousel disable-loop="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel disableLoop={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel DisableLoop="true">
    ...
</IgbCarousel>
```

To keep track of each slide index, the carousel has indicators that are positioned at the `end` of the carousel by default. In order to change this behavior, use the `IndicatorsOrientation` property and assign it to `start`.

```html
<igc-carousel indicators-orientation="start">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel indicatorsOrientation={CarouselIndicatorsOrientation.Start}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel IndicatorsOrientation="@CarouselIndicatorsOrientation.Start">
    ...
</IgbCarousel>
```

By default, the `Carousel` displays its navigation buttons and indicators. Use the `HideIndicators` property to hide the indicators and the `HideNavigation` property to hide the navigation buttons.

```html
<igc-carousel hide-navigation="true" hide-indicators="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel hideNavigation={true} hideIndicators={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel HideNavigation="true" HideIndicators="true">
    ...
</IgbCarousel>
```

The `Carousel` supports vertical mode. Use the `Vertical` property to enable it.

```html
<igc-carousel vertical="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel vertical={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel Vertical="true">
    ...
</IgbCarousel>
```

### Custom indicators

To add {Platform} custom carousel indicators, use the `CarouselIndicator`:

```html
<igc-carousel>
    <igc-carousel-indicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </igc-carousel-indicator>

    <igc-carousel-slide>
        <img src="assets/images/card/media/the_red_ice_forest.jpg"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/card/media/yosemite.jpg"/>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
  <IgrCarouselIndicator>
    <span key="empty">🤍</span>
    <span slot="active">
      ❤️
    </span>
  </IgrCarouselIndicator>
  <IgrCarouselIndicator>
    <span key="empty">🤍</span>
    <span slot="active">
      ❤️
    </span>
  </IgrCarouselIndicator
  <IgrCarouselSlide>
    <img
      src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png"
    />
  </IgrCarouselSlide>
  <IgrCarouselSlide key="second">
    <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png"/>
  </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbCarouselIndicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </IgbCarouselIndicator>

    <IgbCarouselSlide>
        <img src="assets/images/card/media/the_red_ice_forest.jpg"/>
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/card/media/yosemite.jpg"/>
    </IgbCarouselSlide>
</IgbCarousel>
```

The {ProductName} Carousel component allows users to use different elements for the active and inactive state of a single indicator. It is mandatory to provide two elements for each slot (empty and active) when declaring an indicator, even if they are the same.


### Custom navigation buttons

To achieve this, use the `previous-button` and `next-button` slots:

```html
<igc-carousel>
    <igc-icon slot="previous-button" name="previous" collection="material"></igc-icon>
    <igc-icon slot="next-button" name="next" collection="material"></igc-icon>
    ...
</igc-carousel>
```

```tsx
<IgrCarousel>
    <IgrIcon slot="previous-button" name="previous" collection="material"></IgrIcon>
    <IgrIcon slot="next-button" name="next" collection="material"></IgrIcon>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbIcon slot="previous-button" IconName="previous" Collection="material"></IgbIcon>
    <IgbIcon slot="next-button" IconName="next" Collection="material"></IgbIcon>
    ...
</IgbCarousel>
```

### Slide containing other components

This carousel is going to contain slides with forms and images:

```html
<igc-carousel>
    <igc-carousel-slide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg"/>
            <form>
                <igc-input type="text" placeholder="Username">
                    <igc-icon slot="prefix" name="person"></igc-icon>
                </igc-input>
                <igc-input type="password" placeholder="Password">
                    <igc-icon slot="prefix" name="password"></igc-icon>
                </igc-input>
                <igc-button type="reset">Sign In</igc-button>
            </form>
        </div>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <div>
            <img src="assets/images/svg/carousel/Route.svg"/>
            <form>
                <igc-input type="text" placeholder="Search">
                    <igc-icon slot="prefix" name="search"></igc-icon>
                </igc-input>
                <igc-button type="reset">Search</igc-button>
            </form>
        </div>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
      <div>
        <img src="assets/images/svg/carousel/SignUp.svg" />
        <form>
          <IgrInput type="text" placeholder="Username">
            <IgrIcon slot="prefix" name="person"></IgrIcon>
          </IgrInput>
          <IgrInput type="password" placeholder="Password">
            <IgrIcon slot="prefix" name="password"></IgrIcon>
          </IgrInput>
          <IgrButton type="reset">
            <span>Sign In</span>
          </IgrButton>
        </form>
      </div>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
      <div>
        <img src="assets/images/svg/carousel/Route.svg" />
        <form>
          <IgrInput type="text" placeholder="Search">
            <IgrIcon slot="prefix" name="search"></IgrIcon>
          </IgrInput>
          <IgrButton type="reset">
            <span>Search</span>
          </IgrButton>
        </form>
      </div>
    </IgrCarouselSlide>
</IgrCarousel>
```

```razor
<IgbCarousel>
    <IgbCarouselSlide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg">
            <form>
                <IgbInput DisplayType="@InputType.Text" Placeholder="Username">
                    <IgbIcon slot="prefix" IconName="person" Collection="material" @ref="iconRef"></IgbIcon>
                </IgbInput>
                <IgbInput DisplayType="@InputType.Password" Placeholder="Password">
                    <IgbIcon slot="prefix" IconName="password" Collection="material"></IgbIcon>
                </IgbInput>
                <IgbButton DisplayType="@ButtonBaseType.Reset">Sign In</IgbButton>
            </form>
        </div>
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <div>
            <img src="assets/images/svg/carousel/Route.svg">
            <form>
                <IgbInput DisplayType="@InputType.Text" Placeholder="Search">
                    <IgbIcon slot="prefix" IconName="search" Collection="material"></IgbIcon>
                </IgbInput>
                <IgbButton DisplayType="@ButtonBaseType.Reset">Search</IgbButton>
            </form>
        </div>
    </IgbCarouselSlide>
</IgbCarousel>
```

#### Demo

`sample="/layouts/carousel/components", height="600", alt="{Platform} Carousel With Components Example"`


## Animations

Animated slide transitions provide the end-users a nice experience when interacting with the carousel.

The carousel is configured to use the `slide` animation by default, but it also supports `fade` as an alternative animation.

Use the `AnimationType` property to change the animation.

```html
<igc-carousel animation-type="fade">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel animationType="fade">
    ...
</IgrCarousel>
```

```razor
<IgbCarousel AnimationType="@CarouselAnimationType.Fade">
    ...
</IgbCarousel>
```

Setting `none` to the `AnimationType` property disables the animations.

### Demo

The demo below demonstrates the different types of animations, which the carousel supports.

`sample="/layouts/carousel/animations", height="700", alt="{Platform} Carousel Animations Example"`


## Navigation

Transition and navigation are the most important carousel features.

The navigation in the carousel can be handled by the user through navigation buttons, indicators, keyboard navigation and touch interaction on mobile devices.

### Touch gestures

By default, the carousel can be used on any touch-enabled device.

The carousel [animations](carousel.md#animations) are fully supported on touch devices, which makes the carousel consistent with any platform and great when used in progressive web applications ([PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)).

### Keyboard navigation

- Navigation buttons
  - <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key - navigates to the next/previous slide.
- Indicators
  - <kbd>🡐</kbd> key - navigates to the previous (next in Right-to-Left mode) slide.
  - <kbd>🡒</kbd> key - navigates to the next (previous in Right-to-Left mode) slide.
  - <kbd>HOME</kbd> key - navigates to the first (last in Right-to-Left mode) slide.
  - <kbd>END</kbd> key - navigates to the last (first in Right-to-Left mode) slide.

### Automatic transitioning

The `Carousel` can be easily configured to change the slides automatically, without any user interaction. This way you can create your own slideshow by only setting a transition interval to the `Interval` property, which determines the amount of time in milliseconds between slides transition.

>[!NOTE]
>Hovering the mouse over any carousel content or moving keyboard focus to any of the carousel content pauses automatic transitioning. Automatic transitioning resumes when the mouse moves away from the carousel or when keyboard focus moves out of the carousel content.
This can be prevented by setting `DisablePauseOnInteraction` property to **true**.

```html
<igc-carousel interval="2000" disable-pause-on-interaction="true">
    ...
</igc-carousel>
```

```tsx
<IgrCarousel interval={2000} disablePauseOnInteraction={true}>
    ...
</IgrCarousel>
```

```razor
<IgbCarousel Interval="2000" DisablePauseOnInteraction="true">
    ...
</IgbCarousel>
```

## Advanced Example

Let's create a fully automated carousel with looping enabled. We will configure the indicators to be a thumbnail representation of each slide.


To achieve this goal, we have to do the following configurations to the carousel:
- enable the `DisablePauseOnInteraction` property
- enable the `HideNavigation` property
- enable the `Vertical` property
- add transition `Interval`
- add custom `CarouselIndicator` for each slide

Our carousel will look like this in the template:

```html
<igc-carousel
    disable-pause-on-interaction="true"
    hide-navigation="true"
    vertical="true"
    interval="2000"
    animation-type="fade"
>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
       
    <igc-carousel-slide>
        <img src="assets/images/carousel/WonderfulCoast.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/CulturalDip.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/GoldenBeaches.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/IslandOfHistory.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/AmazingBridge.png"/>
    </igc-carousel-slide>
</igc-carousel>
```

```tsx
const images = [
    {
        src: "assets/images/carousel/WonderfulCoast.png",
        alt: "Wonderful Coast",
    },
    {
        src: "assets/images/carousel/CulturalDip.png",
        alt: "Cultural Dip",
    },
    {
        src: "assets/images/carousel/GoldenBeaches.png",
        alt: "Golden Beaches",
    },
    {
        src: "assets/images/carousel/IslandOfHistory.png",
        alt: "Island Of History",
    },
    {
        src: "assets/images/carousel/AmazingBridge.png",
        alt: "Amazing Bridge",
    },
];

<IgrCarousel
  disablePauseOnInteraction={true}
  hideNavigation={true}
  interval={2000}
  vertical={true}
  animationType="fade"
>
  {images.map((image, index) => {
    return (
      <React.Fragment key={index}>
        <IgrCarouselSlide>
          <img src={image.src} alt={image.alt} />
        </IgrCarouselSlide>
        <IgrCarouselIndicator>
          <img
            className="blurred"
            src={image.src.replace(".png", "Thumb.png")}
            alt={`${image.alt} Thumb`}
            width="50"
            height="60"
          />
          <img
            slot="active"
            src={image.src.replace(".png", "Thumb.png")}
            alt={`${image.alt} Thumb Active`}
            width="50"
            height="60"
          />
        </IgrCarouselIndicator>
      </React.Fragment>
    );
  })}
</IgrCarousel>
```

```razor
<IgbCarousel DisablePauseOnInteraction="true"
             HideNavigation="true"
             Interval="2000"
             Vertical="true"
             AnimationType="@CarouselAnimationType.Fade">
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>

    <IgbCarouselSlide>
        <img src="assets/images/carousel/WonderfulCoast.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/CulturalDip.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/GoldenBeaches.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/IslandOfHistory.png" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/AmazingBridge.png" />
    </IgbCarouselSlide>
</IgbCarousel>
```

These configurations will have the following result:

`sample="/layouts/carousel/thumbnail", height="600", alt="{Platform} Carousel Thumbnail Example"`


## Accessibility

### WAI-ARIA Roles, States, and Properties
 * The Carousel base element role is [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) - section containing content that is relevant to specific purpose and users will likely want to be able to navigate easily.
 * Carousel indicators are with role [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab) - grouping label providing a mechanism for selecting the tab content that is to be rendered to the user
 * The element that serves as the container for the set of tabs (carousel indicators) is with role [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist).
 * Each slide element is set with role [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel).

### ARIA support
#### Carousel component
- **Attributes**
  - [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) set to "carousel".
  - [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) - used to set the priority with which screen reader should treat updates to live regions - the possible settings are: **off** and **polite**. The default setting is **polite** and is set to the element that serves as the container for the set of slides. When the `Interval` option is set and the carousel is in playing state, the **aria-live** attribute would be set to **off**.
  - [aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label) (navigation buttons) - "Previous slide"/"Next slide".

#### Slide component
- **Attributes**
  - id - follows the pattern "igc-carousel-slide-${incremented_number}".
  - [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) set to "slide".
  - [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) follows the pattern "${index + 1} of ${total}".

#### Indicator component
- **Attributes**
  - [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) follows the pattern "Slide ${index + 1}"
  - [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) set to **true** or **false** based on the active slide.


## API References

- `Carousel`
- `CarouselSlide`
- `CarouselIndicator`
- `Icon`
- `Input`
- `Button`

## Additional Resources

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})

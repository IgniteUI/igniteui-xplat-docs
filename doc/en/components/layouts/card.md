---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Web Card component.
_keywords: $ProductName$, UI controls, Web widgets, web widgets, UI widgets, Native Web Components Suite, Native Web Controls, Native Web Components Library, Web Card component, Web Card controls
---

# Card
<p class="highlight">The $ProductName$ `Card Component` displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard.</p>

## Card Example

<code-view style="height: 580px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-overview"
           alt="$Platform$ Card Example"
           github-src="layouts/card/overview">
</code-view>

<div class="divider--half"></div>

## Usage

Cards allow you to easily display content composed of different types of objects or similar objects whose size and supported actions can vary.

### Getting Started

To get started we need to import the [`IgcCardComponent`]({environment:wcApiUrl}/classes/IgcCardComponent.html) along with its building blocks in our typescript file and register them by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```typescript
// index.ts
...
import { defineComponents, IgcCardComponent, IgcCardHeaderComponent, IgcCardContentComponent, IgcCardMediaComponent, IgcCardActionsComponent } from 'igniteui-webcomponents';
defineComponents(IgcCardComponent, IgcCardHeaderComponent, IgcCardContentComponent, IgcCardMediaComponent, IgcCardActionsComponent);
```

Then, to represent the demo card template, we can add the following code to our html file.

```html
<igc-card>
    <igc-card-media>
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </igc-card-media>

    <igc-card-header>
        <h3 slot="title">New York</h3>
        <h5 slot="subtitle">City in New York</h5>
    </igc-card-header>

    <igc-card-content>
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
    </igc-card-content>

    <igc-card-actions>
        <igc-button slot="start">
            <igc-ripple></igc-ripple>
            Read more
        </igc-button>
        <div slot="end">
            <igc-icon-button name="twitter">
                <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button name="facebook">
                <igc-ripple></igc-ripple>
            </igc-icon-button>
        </div>
    </igc-card-actions>
</igc-card>
```

You will notice a few things above. First, when we want to _tag_ an element as a header title, like the `h3` heading, we place it between the [`igc-card-header`]({environment:wcApiUrl}/classes/IgcCardHeaderComponent.html) tags and set its slot name to `title`. Conversely, if we wanted to make another heading element a `subtitle` we would name its slot `subtitle`.

Any image or video we want to show in the card, we wrap inside the [`igc-card-media`]({environment:wcApiUrl}/classes/IgcCardMediaComponent.html) tags. The `igc-card-media` allows us to size the content placed inside so that it maintains its aspect ratio while filling the element’s entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.

You can place anything inside the [`igc-card-content`]({environment:wcApiUrl}/classes/IgcCardContentComponent.html) tags. Usually text goes there.

Finally, the [`igc-card-actions`]({environment:wcApiUrl}/classes/IgcCardActionsComponent.html) is where you'd place any actionable items, like buttons.

### Media, Thumbs, and Avatars
If you want to show an image or icon in the card header next to the title and subtitle, you can do it by assigning the element's slot property to `thumbnail`.

Taking the card above as an example, we can edit the contents of the `igc-card-header` and add an avatar with `slot="thumbnail"`:

```html
<igc-card-header>
    <igc-avatar slot="thumbnail" src="path/to/image" initials="TS"></igc-avatar>
    
    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</igc-card-header>
```

The above example will show the avatar alongside the title and subtitle in the card header.

### Outlined cards
The card has an `outlined` attribute which, if set, removes any shadows from the card, replacing them with a thin border to separate the card from the background.

### Horizontal Layout

By default all sections of the card (header, content, media, actions) are layed out vertically. This is nice when we have a lot of vertical space. Say we wanted to lay out the sections in the card horizontally. We can achieve such a layout with some simple CSS.

Here's an example of an outlined horizontal card:

```html
<igc-card outlined>
    <div class=".card-horizontal">
        <div>
            <igc-card-header>
                <img src="ROZES-Under-the-Grave.jpg" slot="thumbnail">
                <h5 slot="title">Rozes</h5>
                <h5 slot="subtitle">Under the Grave (2016)</h5>
            </igc-card-header>
            <igc-card-content>
                <p>As I have always said: I write what’s real and what’s true,
                    even if it means throwing myself under the bus.</p>
            </igc-card-content>
        </div>
        <div class="divider"></div>
        <igc-card-actions>
            <igc-icon-button name="previous"></igc-icon-button>
            <igc-icon-button name="play"></igc-icon-button>
            <igc-icon-button name="next"></igc-icon-button>
        </igc-card-actions>
    </div>
</igc-card>
```

We are using an additional `div` element to bundle the `igc-card-header` and `igc-card-content` together, keeping them aligned vertically, and applying the `.card-horizontal` class to the wrapping `div` element to align the two sections of the card horizontally. 

The styles that `.card-horizontal` class applies are:

```css
.card-horizontal {
    display: flex;
    flex-direction: row;
    flex: 1 1 0%;
}

.card-horizontal img {
    width: 64px;
    height: 64px;
}

.card-horizontal igc-card-actions {
    justify-content: center;
}
```

If everything went well, our card should look like this:

<code-view style="height: 220px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-horizontal"
           alt="$Platform$ Card Example"
           github-src="layouts/card/horizontal">
</code-view>

### Alternative layouts

You can get even more creative with the layout of the `igc-card`.

Below is an example showing how you can create a semi-horizontal card, where we have every section of the card layed out vertically, while the `igc-card-media` appears alongside the vertical sections.

```html
<igc-card>
    <div class="semi-horizontal">
        <div>
            <igc-card-header>
                <igc-avatar src="mellow_d.jpg" slot="thumbnail">MD</igc-avatar>
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
            </igc-card-header>
            <igc-card-content>
                <p>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
            </igc-card-content>
            <igc-card-actions>
                <igc-button>play album</igc-button>
            </igc-card-actions>
        </div>
        <igc-card-media class="card-media">
            <img src="here_media.jpg">
        </igc-card-media>
    </div>
</igc-card>
```

```css
.semi-horizontal {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}

.card-media {
    width: 96px;
    min-width: 96px;
}
```

<code-view style="height: 295px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-semi-horizontal"
           alt="$Platform$ Semi Horizontal Card Example"
           github-src="layouts/card/semi-horizontal">
</code-view>


### Card Actions

The card actions area allows additional configuration to what we have already mentioned.

You can reverse the order of the flat button and the icon buttons by switching their slot names.

```html
<igc-card-actions>
    <igc-button slot="end">
        <igc-ripple></igc-ripple>
        Read more
    </igc-button>
    <div slot="start">
        <igc-icon-button name="twitter">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button name="facebook">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
    </div>
</igc-card-actions>
```

Now the icon buttons will appear before the flat-style text button.

You can also add more content in-between by simply omitting the slot property and let the elements go to the default slot. 

## Styling

Since the card is a container that wraps different elements, styling it is done by styling its building blocks - the header, content, media and actions sub-components. In addition, the `header` component (`igc-card-header`) exposes three CSS parts - `header`, `title` and `subtitle` that allow you to style the wrapping element as well as the two title elements.

```css
igc-card {
    background-color: #011627;
}

igc-card-content,
igc-card-header::part(title) { 
    color: #FEFEFE;
}

igc-card-header::part(subtitle) {
    color: #ECAA53;
    opacity: 0.9;
}

igc-icon-button::part(icon) {
    fill: #352511;
}
```

<code-view style="height: 580px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/card-styling"
           alt="$Platform$ Card Styling Example"
           github-src="layouts/card/styling">
</code-view>


### Summary
In this article we covered a lot of ground with the card component. We created a simple card and added some images to make it a bit more appealing. We used some additional $Platform$ inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's appearance by changing the major colors of the building blocks.

## API References

For more detailed information regarding the card's API, refer to the following links:
* [`IgcCardComponent API`]({environment:wcApiUrl}/classes/IgcCardComponent.html)
* [`IgcCardHeaderComponent API`]({environment:wcApiUrl}/classes/IgcCardHeaderComponent.html)
* [`IgcCardContentComponent API`]({environment:wcApiUrl}/classes/IgcCardContentComponent.html)
* [`IgcCardMediaComponent API`]({environment:wcApiUrl}/classes/IgcCardMediaComponent.html)
* [`IgcCardActionsComponent API`]({environment:wcApiUrl}/classes/IgcCardActionsComponent.html)


Additional components and/or directives that were used:

* [`IgcAvatarComponent`]({environment:wcApiUrl}/classes/IgcAvatarComponent.html)
* [`IgcIconComponent`]({environment:wcApiUrl}/classes/IgcIconComponent.html)
* [`IgcButtonComponent`]({environment:wcApiUrl}/classes/IgcButtonComponent.html)
* [`IgcIconButtonComponent`]({environment:wcApiUrl}/classes/IgcIconButtonComponent.html)
* [`IgcRippleComponent`]({environment:wcApiUrl}/classes/IgcRippleComponent.html)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [$Platform$ **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

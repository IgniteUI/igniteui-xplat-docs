---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Web Card component.
_keywords: Ignite UI for Web Components, UI controls, Web widgets, web widgets, UI widgets, Native Web Components Suite, Native Web Controls, Native Web Components Library, Web Card component, Web Card controls
---

# Card
<p class="highlight">The Ignite UI for Web Components [`IgcCardComponent`]({environment:angularApiUrl}/classes/IgcCardComponent.html) displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard.</p>

## Card Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-0" alt="Card Example">
</code-view>

<div class="divider--half"></div>

## Usage

Cards allow you to easily display content composed of different types of objects or similar objects whose size and supported actions can vary.

### Getting Started

Import the `IgcCardComponent` inside our **app.module.ts** file:

```typescript
// app.module.ts
...
import { IgcCardComponent } from 'igniteui-webcomponents';

@NgModule({
    ...
    imports: [..., IgxCardModule],
    ...
})
export class AppModule {}
```

Then to represent the demo card template we can add the following code.

```html
<igc-card>
    <igc-card-media height="196px">
        <img [src]="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </igc-card-media>

    <igc-card-header>
        <h3 slot="title">New York</h3>
        <h5 slot="subtitle">City in New York</h5>
    </igc-card-header>

    <igc-card-content>
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
    </igc-card-content>

    <igc-card-actions>
        <igc-button>
            <igc-ripple></igc-ripple>
            Read More
        </igc-button>
        <igc-icon-button name="favorite" igxRippleCentered="true">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button name="share" igxRippleCentered="true">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
    </igc-card-actions>
</igc-card>
```

You will notice a few things above. First when we want to _tag_ an element as a header title, like the `h3` heading, we place it between the `igc-card-header` tags and set its slot name to `title`. Conversely, if we wanted to make another heading element a `subtitle` we would name its slot `subtitle`.

Any image or video we want to show in the card, we wrap inside the `igc-card-media` tags. The `igc-card-media` allows us to size the content placed inside via the `width` and `height` attributes. In the example above we provided just `height`, which would leave the width to `auto`, thus allowing the image to stretch across the entire card surface, while maintaining the set height.

You can place anything inside the `igc-card-content` tags. Usually text goes there.

Finally, the `igc-card-actions` is where you'd place any actionable items, like buttons. If you use the `IgcButtonComponent`, it will automatically be placed correctly according to the material design spec inside the area.

### Media, Thumbs, and Avatars
If you want to show an image or icon in the card header next to the title and subtitle, you can do it by assigning the element's slot property to `thumbnail`.

Taking the card above as an example, we can edit the contents of the `igc-card-header` and add `slot="thumbnail"` to the icon:

```html
<igc-card-header>
    <igc-icon slot="thumbnail">place</igc-icon>
    
    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</igc-card-header>
```

The above example will show the icon alongside the title and subtitle in the card header.

We also automatically detect the presence of `igc-avatar` or `igc-card-media` placed in the card header. They will appear as if they were card thumbnails. So you can do:

```html
<igc-card-header>
    <igc-avatar>
        <igc-icon name="place"></igc-icon>
    </igc-avatar>

    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</igc-card-header>
```

or, even this:

```html
<igc-card-header>
    <igc-card-media width="40px" height="40px">
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=50">
    </igc-card-media>

    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</igc-card-header>
```

### Outlined cards
The card has an `outlined` attribute which if set removes any shadows from the card, replacing them with a thin border to separate the card from the background.

### Horizontal Layout

By default all sections of the card (header, content, media, actions) are layed out vertically. This is nice when we have a lot of vertical space. Say we wanted to lay out all the sections in the card horizontally. We can use the `horizontal` attribute of the card to set its layout.

Here's an example of an outlined horizonal card:

```html
<igc-card outlined [horizontal]="horizontal">
    <div class="h-sample-column">
        <igc-card-header>
            <h5 slot="title">{{card.title}}</h5>
            <h5 slot="subtitle">{{card.subtitle}}</h5>
            <igc-card-media width="64px" height="64px">
                <img [src]="card.imageUrl">
            </igc-card-media>
        </igc-card-header>

        <igc-card-content>
            <p>{{card.content}}</p>
        </igc-card-content>
    </div>

    <igc-card-actions layout="justify">
        <igc-icon-button .name="${item.icon}">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
    </igc-card-actions>
</igc-card>
```

We are using the `.h-sample-column` class to bundle the `igc-card-header` and `igc-card-content` together, keeping them aligned vertically, while other sections in the card align horizontally. 

The styles that `.h-sample-column` class applies are:

```scss
.h-sample-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 0%;

    igc-card-header {
        padding-bottom: 0;
    }
}
```

Notice how the buttons in the `igc-card-actions` have now switched to a `vertical` layout. The `igc-card-actions` has an `inverse` layout relationship with its parent. So whenever the card's `horizontal` attribute is set to `true` the actions `vertical` property will be set to `true` and vice versa.

You can set the `vertical` attribute of he actions area explicitly, thus overriding this default behavior. 

```html
<igc-card-actions layout="justify" [vertical]="false">
    <button *ngFor="let icon of card.icons;" igxButton="icon" igxRipple igxRippleCentered="true">
        <igc-icon>{{icon}}</igc-icon>
    </button>
</igc-card-actions>
```
If everything went well, our card should look like this:


<code-view style="height: 220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-2" >
</code-view>


### Alternative layouts

You can get even more creative with the layout of the `igc-card`.

Below is an example showing how you can create a semi-horizontal card, where we have every section of the card layed out vertically, while the `igc-card-media` appears alongside the vertical sections of the card.

```html
<igc-card [horizontal]="horizontal">
    <div igxLayout igxLayoutDir="column" igxFlex igxFlexGrow="1">
        <igc-card-header>
            <igx-avatar [src]="card.avatarUrl"></igx-avatar>
            <h5 slot="title">{{card.title}}</h5>
            <h5 slot="subtitle">{{card.subtitle}}</h5>
        </igc-card-header>

        <igc-card-content>
            <p>{{card.content}}</p>
        </igc-card-content>

        <igc-card-actions [vertical]="false">
            <igc-button *ngFor="let button of card.buttons;" igxButton="flat" igxRipple>
                <igc-ripple></igc-ripple>
                {{button}}
            </igc-button>
        </igc-card-actions>
    </div>

    <igc-card-media width="96px">
        <img [src]="card.imageUrl">
    </igc-card-media>
</igc-card>
```


<code-view style="height: 270px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-3" >
</code-view>


### Card Actions

The card actions area allows additional configuration to what we have already mentioned.

You can reverse order of the flat buttons and the button icons using the `reverse` attribute.

```html
<igc-card-actions [reverse]="true">
    <button igxButton>Button</button>

    <button igxButton="icon">
        <igc-icon>star</igc-icon>
    </button>
</igc-card-actions>
```

Now the icon buttons will appear before the flat-style text buttons.

You can also justify the buttons so that they are layed out across the entire axis, not at the opposite ends. To do that, use the `layout` attribute an set its value to `justify`, like below:

```html
<igc-card-actions layout="justify">
    <button igxButton>Button</button>

    <button igxButton="icon">
        <igc-icon>star</igc-icon>
    </button>
</igc-card-actions>
```

## Styling
To get started with styling the card, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-webcomponents/lib/core/styles/themes/index';
``` 
Following the simplest approach, we create a new theme that extends the [`igc-card-theme`]({environment:sassApiUrl}/index.html#function-igc-card-theme) and accepts some parameters that style the card's items:

```scss
$colorful-card: igc-card-theme(
    $background: #011627,
    $header-text-color: #FEFEFE,
    $subtitle-text-color: #ECAA53,
    $content-text-color: #FEFEFE
);
```
As seen, the `igc-card-theme` exposes some useful parameters for basic styling of its items. 

### Including themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igc-card($colorful-card);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igc-card($colorful-card);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($colorful-card);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($colorful-card);
}
```

### Demo


<code-view style="height: 486px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-styling-sample" >
</code-view>


### Summary
In this article we covered a lot of ground with the card component. First, we created a very simple card with text content only. Then added some images to make the card a bit more appealing. We used some additional Ignite UI Web components inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's theme by setting some exposed theme colors. 
The card component is capable of displaying more different layouts worth exploring in the Card Demo in the beginning of this article.

## API and Style References

For more detailed information regarding the card's API, refer to the following links:
* [`IgcCardComponent API`]({environment:angularApiUrl}/classes/IgcCardComponent.html)

The following built-in CSS styles helped us achieve this card layout:

* [`IgcCardComponent Styles`]({environment:sassApiUrl}/index.html#function-igc-card-theme)

Additional components and/or directives that were used:

* [`IgcAvatarComponent`]({environment:angularApiUrl}/classes/igcavatarcomponent.html)
* [`IgcIconComponent`]({environment:angularApiUrl}/classes/igciconcomponent.html)
* [`IgcButtonComponent`]({environment:angularApiUrl}/classes/igcbuttoncomponent.html)
* [`IgcIconButtonComponent`]({environment:angularApiUrl}/classes/igciconbuttoncomponent.html)
* [`IgcRippleComponent`]({environment:angularApiUrl}/classes/igcripplecomponent.html)

Styles:

* [`IgcAvatarComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [`IgcIconComponent Styles`]({environment:sassApiUrl}/index.html#function-igc-icon-theme)
* [`IgcButtonComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-button-theme)

<div class="divider"></div>

## Theming Dependencies
* [IgcButton Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgcAvatar Theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [IgcIcon Theme]({environment:sassApiUrl}/index.html#function-igc-icon-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-webcomponents)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

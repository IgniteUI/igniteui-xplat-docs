# $Platform$ List Overview

The List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements. The List component displays rows of items and supports one or more headers as well. Each list item is completely templatable and will support any valid HTML or other components.

## $Platform$ List Example

The following example represents a list populated with contacts with a name and a phone number properties. The [`IgcList`]({environment:wcApiUrl}/classes/IgcListComponent.html) component uses [`IgcAvatar`]({environment:wcApiUrl}/classes/IgcAvatarComponent.html) and [`IgcButton`]({environment:wcApiUrl}/classes/IgcButtonComponent.html) to enrich the user experience and expose the capabilities of setting avatar picture and buttons for text and call actions.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="$Platform$ List Example"
           github-src="layouts/grids/list/overview">
</code-view>

<div class="divider--half"></div>

## Usage

At its core the list web component allows you to easily display a vertical list of items.

To get started with the list Web component, first you need to install Ignite UI for Web Components by typing the following command:
```cmd
npm install igniteui-webcomponents
```

The next step is to import `igniteui-webcomponents` inside our **index.ts** file:

```typescript
// index.ts
...
import 'igniteui-webcomponents';
```

### Add List Items

After the import of the `igniteui-webcomponents`, we can add the following code to get a simple list of items:

```html
    <igc-list>
        <igc-list-header>Header</igc-list-header>
        <igc-list-item>
            <h2 slot="title">Item 1</h2>
        </igc-list-item>
        <igc-list-item>
            <h2 slot="title">Item 2</h2>
        </igc-list-item>
        <igc-list-item>
            <h2 slot="title">Item 3</h2>
        </igc-list-item>
    </igc-list>
```

If all went well, you should see the following in your browser:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-add-list-items"
           alt="$Platform$ Add list items Example"
           github-src="grids/list/add-list-items">
</code-view>

Let's up our game a bit and enhance our list items. Say we want to create a list of contacts with a name and a phone number displayed under the name. To achieve that we can use some of the slots that come with the list items as demonstrated in the next example:

```html
<igc-list>
    <igc-list-header>
        <h1>Contacts</h1>
    </igc-list-header>
    <igc-list-item>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </igc-list-item>
    <igc-list-item>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </igc-list-item>
    <igc-list-item>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </igc-list-item>
</igc-list>
```

Both slots `title` and `subtitle` give our [`list items`]({environment:wcApiUrl}/classes/IgcListItemComponent.html) some default look.

After all that our list component should now look like that:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-list-item-content"
           alt="$Platform$ List Example"
           github-src="grids/list/list-item-content">
</code-view>

### Adding Avatar and Buttons

We can use some of our other components in conjunction with the [IgcList]({environment:wcApiUrl}/classes/IgcListComponent.html) component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add some buttons to the right of them to allow the user to text and call contacts, so let's update our contacts list component to show the avatar and the buttons. Again, we can do that by using some of the list item's slots.

```html
    <igc-list>
        <igc-list-header>
            <h1>Job Positions</h1>
        </igc-list-header>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/27.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Terrance Orta</h2>
            <span slot="subtitle">770-504-2217</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/1.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Richard Mahoney</h2>
            <span slot="subtitle">423-676-2869</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/women/50.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Donna Price</h2>
            <span slot="subtitle">859-496-2817</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
    </igc-list>
```

The `start` slot is meant to be used for adding some kind of media before all other content of our list items. The target element, in our case igc-avatar, will also be provided with a default position and spacing.

The `end` slot is meant to be used for list items that have some kind of action or metadata, represented, for example, by a switch, a button, a checkbox, etc. We will use igc-buttons.

Let's also allow the user to choose the size of the list by using its [`size`]({environment:wcApiUrl}/classes/IgcListComponent.html#size) property. We will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size property of the list.

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after">Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after" checked="true">Large</igc-radio>
</igc-radio-group>
```

```ts
this.list = document.getElementById('list') as IgcListComponent;
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;

this.radioGroup.addEventListener('click', (radio: any) => {
    this.list.size = radio.target.value;
});
```

And here's the result of all that work:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="$Platform$ List Example"
           github-src="layouts/grids/list/overview">
</code-view>

## Styling

Let's see how we can change the appearance of our list, by using some of the exposed CSS parts - `title`, `subtitle` and `end`.

```css
igc-list-header {
    font-size: 20px;
    font-weight: 700;
    color: #3f51b5;
}

igc-list-item::part(title) {
    font-size: 18px;
    color: #3f51b5;
}

igc-list-item::part(subtitle) {
    color: #0099ff;
}

igc-list-item::part(end) {
    --igc-secondary-500: 230,48%,47%;
}
```

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-styling"
           alt="$Platform$ List Example"
           github-src="layouts/grids/list/styling">
</code-view>

## API References

In this article we covered a lot of ground with the list web component. First, we created a simple list with text items. Then, we created a list of contact items and added functionality to them by using some additional Ignite UI Web Components, like avatars and buttons. Finally, we changed the component's appearance through the exposed CSS parts.

* [IgcListComponent]({environment:wcApiUrl}/classes/IgcListComponent.html)
* [IgcListHeaderComponent]({environment:wcApiUrl}/classes/IgcListHeaderComponent.html)
* [IgcListItemComponent]({environment:wcApiUrl}/classes/IgcListItemComponent.html)

Additional Web Components that were used:

* [IgcAvatarComponent]({environment:wcApiUrl}/classes/IgcAvatarComponent.html)
* [IgcButtonComponent]({environment:wcApiUrl}/classes/IgcButtonComponent.html)
* [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/IgcRadioGroupComponent.html)
* [IgcRadioComponent]({environment:wcApiUrl}/classes/IgcRadioComponent.html)

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

---
title: {Platform} List Component | Infragistics
_description: Infragistics' {Platform} List component helps you with presenting a group of items. Learn how {ProductName} can help you better display your data!
_keywords: {Platform} List, Item List, overview, {ProductName}, data binding, Infragistics
mentionedTypes: ["List", "ListHeader", "ListItem", "Avatar", "Button", "RadioGroup", "Radio"]
---

# {Platform} List Overview

The {ProductName} List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements. The `List` component displays rows of items and supports one or more headers as well. Each list item is completely templatable and will support any valid HTML or other components.

## {Platform} List Example

The following example represents a list populated with contacts with a name and a phone number properties. The `List` component demonstrated below uses the `Avatar` and `Button` elements to enrich the user experience and expose the capabilities of setting avatar picture and buttons for text and call actions.

`sample="/grids/list/overview", height="300", alt="{Platform} List Example"`



<div class="divider--half"></div>

## Usage

At its core the list web component allows you to easily display a vertical list of items.

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `List` and its necessary CSS, like so:

```tsx
import { IgrList, IgrListHeader, IgrListItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

Before using the `List`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbListModule));
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `List` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcListComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

### Add List Items

Now, we can add the following code to get a simple list of items:

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

```razor
<IgbList>
    <IgbListHeader>Header</IgbListHeader>
    <IgbListItem>
        <h2 slot="title">Item 1</h2>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Item 2</h2>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Item 3</h2>
    </IgbListItem>
</IgbList>
```

```tsx
<IgrList>
    <IgrListHeader>
        <span>Header</span>
    </IgrListHeader>
    <IgrListItem>
        <h2 slot="title">Item 1</h2>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Item 2</h2>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Item 3</h2>
    </IgrListItem>
</IgrList>
```

If all went well, you should see the following in your browser:

`sample="/grids/list/add-list-items", height="300", alt="{Platform} Add list items Example"`



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

```razor
<IgbList>
    <IgbListHeader>
        <h1>Contacts</h1>
    </IgbListHeader>
    <IgbListItem>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </IgbListItem>
</IgbList>
```

```tsx
<IgrList>
    <IgrListHeader>
        <span>Contacts</span>
    </IgrListHeader>
    <IgrListItem>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </IgrListItem>
</IgrList>
```

After implementing the above code, our list component should now look like the following:

`sample="/grids/list/list-item-content", height="300", alt="{Platform} List Example"`



### Adding Avatar and Buttons

We can use some of our other components in conjunction with the `List` component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add some buttons to the right of them to allow the user to text and call contacts, so let's update our contacts list component to show the avatar and the buttons. We can do that by using some of the list item's slots.

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

```razor
<IgbList>
    <IgbListHeader>
        <h1>Contacts</h1>
    </IgbListHeader>
    <IgbListItem>
        <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/8.jpg" Shape="@AvatarShape.Circle"/>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
    </IgbListItem>
    <IgbListItem>
        <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/17.jpg" Shape="@AvatarShape.Circle"/>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
    </IgbListItem>
    <IgbListItem>
        <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/9.jpg" Shape="@AvatarShape.Circle"/>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
    </IgbListItem>
</IgbList>
```

```tsx
<IgrList>
    <IgrListHeader>
        <span>Contacts</span>
    </IgrListHeader>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/8.jpg" shape="circle" />
        </div>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/17.jpg" shape="circle" />
        </div>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/9.jpg" shape="circle" />
        </div>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
</IgrList>
```

The `start` slot is meant to be used for adding some kind of media before all other content of our list items. The target element, in our case the `Avatar` component, will also be provided with a default position and spacing.

The `end` slot is meant to be used for list items that have some kind of action or metadata, represented, for example, by a switch, a button, a checkbox, etc. We will use `Button` components.

Let's also allow the user to change the size of the list using the `--ig-size` CSS variable. We will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the list.

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after">Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after" checked>Large</igc-radio>
</igc-radio-group>
```

```ts
this.list = document.getElementById('list') as IgcListComponent;
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;

this.radioGroup.addEventListener('click', (radio: any) => {
    this.list.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
});
```

```razor
<IgbRadioGroup Alignment="@ContentOrientation.Horizontal">
    <IgbRadio Value="Small" label-position="after" Change="OnRadioOptionClick">Small</IgbRadio>
    <IgbRadio Value="Medium" label-position="after" Change="OnRadioOptionClick">Medium</IgbRadio>
    <IgbRadio Value="Large" label-position="after" Checked="true" Change="OnRadioOptionClick">Large</IgbRadio>
</IgbRadioGroup>

<IgbList style="margin-top: 10px;" Size="@ListSize" />

@code {
    public SizableComponentSize ListSize { get; set; }

    public void OnRadioOptionClick(IgbComponentBoolValueChangedEventArgs e)
    {
        IgbRadio radio = e.Parent as IgbRadio;
        switch (radio.Value)
        {
            case "Small":
                {
                    this.ListSize = SizableComponentSize.Small;
                    break;
                }
            case "Medium":
                {
                    this.ListSize = SizableComponentSize.Medium;
                    break;
                }
            case "Large":
                {
                    this.ListSize = SizableComponentSize.Large;
                    break;
                }
        }
    }
}
```

```tsx
<IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}}>
    <IgrRadio name="size" value="small" labelPosition="after" checked={this.state.listSize === "small" } onChange={this.onRadioChange}>
        <span>Small</span>
    </IgrRadio>
    <IgrRadio name="size" value="medium" labelPosition="after" checked={this.state.listSize === "medium" } onChange={this.onRadioChange}>
        <span>Medium</span>
    </IgrRadio>
    <IgrRadio name="size" value="large" labelPosition="after" checked={ this.state.listSize === "large" } onChange={this.onRadioChange}>
        <span>Large</span>
    </IgrRadio>
</IgrRadioGroup>

<IgrList size={this.state.listSize} />

public onRadioChange(e: any) {
    if (e.detail.checked == true) {
        this.setState({ listSize: e.detail.value });
    }
}
```

The result of implementing the above code should look like the following:

`sample="/grids/list/overview", height="300", alt="{Platform} List Example"`

## Styling

The `List` exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `start` | The start container. |
| `end` | The end container. |
| `content` | The header and custom content container. |
| `header` | The title and subtitle container. |
| `title` | The title container. |
| `subtitle` | The subtitle container. |

```css
igc-list-header {
  font-size: 20px;
  font-weight: 700;
  color: var(--ig-primary-700);
}

igc-list-item::part(title) {
  font-size: 18px;
  color: var(--ig-primary-600);
}

igc-list-item::part(subtitle) {
  color: var(--ig-primary-300);
}
```

`sample="/grids/list/styling", height="300", alt="{Platform} List Example"`

In this article we covered a lot of ground with the `List` component. First, we created a simple list with text items. Then, we created a list of contact items and added functionality to them by using some additional {ProductName} components, like the `Avatar` and `Button`. Finally, we changed the component's appearance through the exposed CSS parts.

<div class="divider--half"></div>

## API References

 - `Avatar`
 - `Button`
 - `RadioGroup`
 - `Radio`
 - `ListHeader`
 - `ListItem`
 - `List`
 - [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

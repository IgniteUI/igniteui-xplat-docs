---
title: {Platform} NavDrawer | Infragistics
_description: Infragistics' {Platform} NavDrawer provides side navigation that can be expanded or collapsed within the content
_keywords: {Platform} navbar, {ProductName}, Infragistics
mentionedTypes: ['NavDrawer']
---

# {Platform} Navigation Drawer Overview

The {ProductName} Navigation Drawer provides side navigation that can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.


## {Platform} Navigation Drawer Example

This sample demonstrates how to create `NavDrawer` component.

`sample="/menus/nav-drawer/add-drawer-items", height="300", alt="{Platform} Navigation Drawer Items Example"`

## Usage

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

You will then need to import the `NavDrawer`, its necessary CSS, and register its module, like so:

```tsx
import { IgrNavDrawerModule, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrNavDrawerModule.register();
```

<!-- end: React -->

Before using the `NavDrawer`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbNavDrawerModule),
  typeof(IgbNavDrawerHeaderItemModule)
);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `NavDrawer` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcNavDrawerComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

## Adding Navigation Drawer Items

The simplest way to start using the `NavDrawer` is as follows:

```html
<igc-nav-drawer open="true">
    <igc-nav-drawer-header-item>
        Sample Drawer
    </igc-nav-drawer-header-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="home"></igc-icon>
        <span slot="content">Home</span>
    </igc-nav-drawer-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="search"></igc-icon>
        <span slot="content">Search</span>
    </igc-nav-drawer-item>
</igc-nav-drawer>
```

```razor
<IgbNavDrawer Open="true">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@HomeIcon" slot="icon" IconName="home" Collection="material"></IgbIcon>
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@SearchIcon" slot="icon" IconName="search" Collection="material"></IgbIcon>
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>
```

```tsx
<IgrNavDrawer open={true}>
    <IgrNavDrawerHeaderItem>
        <span>Sample Drawer</span>
    </IgrNavDrawerHeaderItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="home" collection="material" />
        </div>
        <span slot="content">Home</span>
    </IgrNavDrawerItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="search" collection="material" />
        </div>
        <span slot="content">Search</span>
    </IgrNavDrawerItem>
</IgrNavDrawer>
```

If all went well, you should see the following in your browser:

`sample="/menus/nav-drawer/add-drawer-items", height="300", alt="{Platform} Navigation Drawer Items Example"`



## Navbar Integration

While any content can be provided in the drawer, the `NavDrawerItem` is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the `Navbar`. This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

```html
<igc-navbar>
  <igc-icon slot="start" name="menu" id="menu"></igc-icon>
  <h2>Home</h2>
</igc-navbar>

<igc-nav-drawer id="navDrawer">
    <igc-nav-drawer-header-item>
        Sample Drawer
    </igc-nav-drawer-header-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="home"></igc-icon>
        <span slot="content">Home</span>
    </igc-nav-drawer-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="search"></igc-icon>
        <span slot="content">Search</span>
    </igc-nav-drawer-item>
</igc-nav-drawer>
```

```razor
<IgbNavbar>
    <IgbIcon slot="start" IconName="menu" Collection="material" />
    <h2>Home</h2>
</IgbNavbar>

<IgbNavDrawer @ref="NavDrawerRef">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon slot="icon" IconName="home" Collection="material" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon slot="icon" IconName="search" Collection="material" @onclick="OnMenuIconClick" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>
```

```tsx
<IgrNavbar>
    <div slot="start">
        <IgrIcon name="menu" collection="material"/>
    </div>
    <h2>Home</h2>
</IgrNavbar>

<IgrNavDrawer>
    <IgrNavDrawerHeaderItem>
        <span>Sample Drawer</span>
    </IgrNavDrawerHeaderItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="home" collection="material" />
        </div>
        <span slot="content">Home</span>
    </IgrNavDrawerItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="search" collection="material" />
        </div>
        <span slot="content">Search</span>
    </IgrNavDrawerItem>
</IgrNavDrawer>
```

Let's also add some radio buttons to display all `position` values. This way whenever one gets selected, we will change the position of the drawer.

```ts
// ...
import { defineComponents, IgcNavDrawerComponent, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent, IgcRadioComponent, IgcRadioGroupComponent);
this.navDrawer = document.getElementById('navDrawer') as IgcNavDrawerComponent;
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;
this.radioGroup.addEventListener('click', (radio: any) => {
    this.navDrawer.position = radio.target.value;
});
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="position" value="start" label-position="after" checked>Start</igc-radio>
    <igc-radio name="position" value="end" label-position="after">End</igc-radio>
    <igc-radio name="position" value="top" label-position="after">Top</igc-radio>
    <igc-radio name="position" value="bottom" label-position="after">Bottom</igc-radio>
</igc-radio-group>
```

```razor
<IgbRadioGroup id="radio-group" Alignment="RadioGroupAlignment.Horizontal">
    <IgbRadio Value="Start" LabelPosition="RadioLabelPosition.After" Checked="true" Change="OnRadioOptionClick">Start</IgbRadio>
    <IgbRadio Value="End" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">End</IgbRadio>
    <IgbRadio Value="Top" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">Top</IgbRadio>
    <IgbRadio Value="Bottom" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">Bottom</IgbRadio>
</IgbRadioGroup>

@code {

    public IgbNavDrawer NavDrawerRef { get; set; }

    public void OnRadioOptionClick(IgbComponentBoolValueChangedEventArgs args)
    {
        IgbRadio radio = args.Parent as IgbRadio;

        if (this.NavDrawerRef != null)
        {
            switch (radio.Value)
            {
                case "Start":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Start;
                        break;
                    }
                case "End":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.End;
                        break;
                    }
                case "Top":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Top;
                        break;
                    }
                case "Bottom":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Bottom;
                        break;
                    }
            }
        }
    }
}
```

```tsx
<IgrRadioGroup alignment="horizontal">
    <IgrRadio value="start" labelPosition="after" checked={true} change={this.onRadioChange}>
        <span>Start</span>
    </IgrRadio>
    <IgrRadio value="end" labelPosition="after" change={this.onRadioChange}>
        <span>End</span>
    </IgrRadio>
    <IgrRadio value="top" labelPosition="after" change={this.onRadioChange}>
        <span>Top</span>
    </IgrRadio>
    <IgrRadio value="bottom" labelPosition="after" change={this.onRadioChange}>
        <span>Bottom</span>
    </IgrRadio>
</IgrRadioGroup>

<IgrNavDrawer position={this.state.drawerPosition} />

public onRadioChange(e: any) {
    if (e.checked == true) {
        this.setState({ drawerPosition: e.value });
    }
}
```

And finally, we need a way to open and close our navigation drawer. There are a couple of ways to achieve this, but for the sake of this example we will do the following:

```ts
// ...
const menu = document.getElementById('menu');
const navDrawer = document.querySelector('igc-nav-drawer') as IgcNavDrawerComponent;

menu!.addEventListener('click', () => {
    navDrawer.show();
})

document.getElementById('root')!.onclick = (e) => {
    if (e.target != document.getElementById('navDrawer')) {
        navDrawer.hide();
    }
}
```

```razor
public void OnMenuIconClick()
{
    if (this.NavDrawerRef != null)
    {
        this.NavDrawerRef.Show();
    }
}
```

```tsx
public onMenuIconClick() {
    if (this.navDrawerRef) {
        this.navDrawerRef.show();
    }
}
```

If all goes well, your component should now look like this:

`sample="/menus/nav-drawer/add-positions-navbar", height="300", alt="{Platform} Navigation Drawer Navbar Example"`



## Mini Variant

With the mini variant, the Navigation Drawer changes its width instead of closing. It is used to maintain quick navigation, available at all times, leaving just the icons. To achieve that, you only need to set up the `mini` slot of the drawer.

```html
<igc-nav-drawer position="start">
    <igc-nav-drawer-header-item>Sample Drawer</igc-nav-drawer-header-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="home"></igc-icon>
        <span slot="content">Home</span>
    </igc-nav-drawer-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="search"></igc-icon>
        <span slot="content">Search</span>
    </igc-nav-drawer-item>
    <div slot="mini">
        <igc-nav-drawer-item>
            <igc-icon slot="icon" name="home"></igc-icon>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
            <igc-icon slot="icon" name="search"></igc-icon>
        </igc-nav-drawer-item>
    </div>
</igc-nav-drawer>
```

```razor
<IgbNavDrawer @ref="@NavDrawerRef" Open="true" style="position: relative">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@HomeIcon" slot="icon" Collection="material" IconName="home" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@SearchIcon" slot="icon" Collection="material" IconName="search" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
    <div slot="mini">
        <IgbNavDrawerItem>
            <IgbIcon slot="icon" Collection="material" IconName="home" />
        </IgbNavDrawerItem>
        <IgbNavDrawerItem>
            <IgbIcon slot="icon" Collection="material" IconName="search" />
        </IgbNavDrawerItem>
    </div>
</IgbNavDrawer>
```

```tsx
<IgrNavDrawer>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="home" collection="material" />
        </div>
        <span slot="content">Home</span>
    </IgrNavDrawerItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="search" collection="material"/>
        </div>
        <span slot="content">Search</span>
    </IgrNavDrawerItem>
    <div slot="mini">
        <IgrNavDrawerItem>
            <div slot="icon">
                <IgrIcon name="home" collection="material"/>
            </div>
        </IgrNavDrawerItem>
        <IgrNavDrawerItem>
            <div slot="icon">
                <IgrIcon name="search" collection="material" />
            </div>
        </IgrNavDrawerItem>
    </div>
</IgrNavDrawer>
```

And here's the result:

`sample="/menus/nav-drawer/add-mini", height="300", alt="{Platform} Navigation Drawer Mini Example"`



## Styling the Navigation Drawer

The navigation drawer component exposes several CSS parts - `base`, `main`, and `mini`. The navigation drawer item component exposes three CSS parts as well - `base`, `icon` and `content`, giving you full control over their styling.

```scss
igc-nav-drawer::part(base) {
    background: #2d313a;
}

igc-nav-drawer-item::part(base) {
    color: #fff;
}

igc-nav-drawer-item::part(base):hover {
    background-color: #3D4149;
}

igc-nav-drawer-item[active]::part(base) {
    background: #f3c03e;
    color: #2c2c2c
}

igc-nav-drawer-header-item {
    color: #f3c03e
}
```

`sample="/menus/nav-drawer/styling", height="300", alt="{Platform} Navigation Drawer Styling Example"`

## API References

 - `Button`
 - `Icon`
 - `NavDrawerHeaderItem`
 - `NavDrawerItem`
 - `NavDrawer`
 - `Navbar`
 - `RadioGroup`
 - `Radio`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
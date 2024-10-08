---
title: {Platform} NavDrawer | Infragistics
_description: Infragistics' {Platform} NavDrawer provides side navigation that can be expanded or collapsed within the content
_keywords: {Platform} navbar, {ProductName}, Infragistics
_language: kr
mentionedTypes: ["NavDrawer"]
---

# {Platform} Navigation Drawer Overview

The Infragistics {Platform} Navigation Drawer is a WebComponent that provides side navigation. It can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.

## {Platform} Navigation Drawer Example

`sample="/menus/nav-drawer/add-drawer-items", height="300", alt="{Platform} Navigation Drawer Items Example"`



## Usage

To get started with the `NavDrawer`, first you need to install {ProductName} by executing the following command:

```cmd
npm install {PackageComponents}
```

Next, you need to import the `NavDrawer`, along with the `NavDrawerHeaderItem` and `NavDrawerItem` in your typescript file and register them by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcNavDrawerComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent);
```

## Adding Navigation Drawer Items

After the Navigation Drawer component is imported, we are ready to start using it! We can add the following code that displays a simple Navigation Drawer with some items:

```html
    <div style="display: flex;">
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
    </div>
```

If all went well, you should see the following in your browser:

`sample="/menus/nav-drawer/add-drawer-items", height="300", alt="{Platform} Navigation Drawer Items Example"`



While any content can be provided in the drawer, the `NavDrawerItem` is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the `Navbar`. This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

```html
    <igc-navbar>
      <igc-icon slot="start" name="menu" id="menu"></igc-icon>
      <h2>Home</h2>
    </igc-navbar>

    <div id="root" style="display: flex;">
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
    </div>
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


If all goes well, your component should now look like this:

`sample="/menus/nav-drawer/add-positions-navbar", height="500", alt="{Platform} Navigation Drawer Navbar Example"`



## Mini Variant

With the mini variant, the Navigation Drawer changes its width instead of closing. It is used to maintain quick navigation, available at all times, leaving just the icons. To achieve that, you only need to set up the `mini` slot of the drawer.

```html
    <div style="display: flex;">
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
    </div>
```

And here's the result:

`sample="/menus/nav-drawer/add-mini", height="500", alt="{Platform} Navigation Drawer Mini Example"`



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

`sample="/menus/nav-drawer/styling", height="500", alt="{Platform} Navigation Drawer Styling Example"`



## API References

* `NavDrawer`
* `NavDrawerItem`
* `NavDrawerHeaderItem`
* `Icon`
* `Button`
* `Radio`
* `RadioGroup`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
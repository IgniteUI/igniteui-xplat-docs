# $Platform$ Navigation Drawer Overview

The Infragistics $Platform$ Navigation Drawer is a WebComponent that provides side navigation. It can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.

> [!NOTE]
> Since the Navigation Drawer component uses ShadowDOM and slots, it is not supported on older browsers like Internet Explorer 11 and Edge 18 and below (non-Chromium versions).

## $Platform$ Navigation Drawer Example

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="$Platform$ Navigation Drawer Items Example"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

## Usage

To get started with the Navigation Drawer Web component, first you need to install Ignite UI for Web Components by executing the following command:

```cmd
npm install igniteui-webcomponents
```

The next step is to import IgniteUI WebComponents package in your typescript file where you want to use it:

```ts
import 'igniteui-webcomponents';
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

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="$Platform$ Navigation Drawer Items Example"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

While any content can be provided in the drawer, the `igc-nav-drawer-item` is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the `IgcNavbarComponent`. This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

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
import 'igniteui-webcomponents';
import { IgcNavDrawerComponent } from 'igniteui-webcomponents/src/components/nav-drawer/nav-drawer';
import { IgcRadioGroupComponent } from 'igniteui-webcomponents/src/components/radio-group/radio-group';

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
    if(e.target != document.getElementById('navDrawer')) {
        navDrawer.hide();
    }
}
```


If all goes well, your component should now look like this:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-positions-navbar"
           alt="$Platform$ Navigation Drawer Navbar Example"
           github-src="menus/nav-drawer/add-positions-navbar">
</code-view>

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

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-mini"
           alt="$Platform$ Navigation Drawer Mini Example"
           github-src="menus/nav-drawer/add-mini">
</code-view>

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

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-styling"
           alt="$Platform$ Navigation Drawer Styling Example"
           github-src="menus/nav-drawer/styling">
</code-view>

## API References

* [IgcNavDrawerComponent]()
* [IgcNavDrawerItemComponent]()
* [IgcNavDrawerHeaderItemComponent]()

Additional Web Components that were used:

* [IgcIconComponent]()
* [IgcButtonComponent]()
* [IgcRadioComponent]()
* [IgcRadioGroupComponent]()

## Additional Resources

<div class="divider--half"></div>

* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
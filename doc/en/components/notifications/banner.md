---
title: {Platform} Banner | Infragistics
_description: With {ProductName} Banner component, developers can easily integrate a short, non-intrusive message (along with optional actions) within mobile and desktop applications.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Banner components
mentionedTypes: ['Banner']
---

# {Platform} Banner Overview

The {ProductName} Banner component provides a way to easily display a prominent message to your application's users in a way that is less transient than a snackbar and less obtrusive than a dialog. It can also indicate actions to take based on the context of the message.

## {ProductName} Banner Example

`sample="/notifications/banner/banner-sample-1", height="530", alt="{Platform} Banner Example"`

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `Banner`, its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcBannerComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBannerComponent);
```
<!-- end: WebComponents -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

### Show Banner

In order to display the banner component, use its `Show` method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```html
<igc-button onclick="banner.show()">Show Banner</igc-button>

<igc-banner id="banner">
    You are currently offline.
</igc-banner>
```

> [!NOTE]
> The `Banner` includes a default action button `OK`, which closes the banner.


## Examples

The `Banner` component allows templating of its content while still sticking as closely as possible to the material design banner guidelines.

### Changing the banner message

Configuring the message displayed in the banner is easy - just change the content you are passing to the `igc-banner` tag. The text will show up in the specified banner area and the banner will use its default template when displaying it. Below, we will change the content of our sample banner to be a bit more descriptive:

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

### Adding an icon

An [`igc-icon`](../layouts/icon.md) can be displayed in the banner by using the banner's `prefix` slot. The icon will always be positioned at the beginning of the banner message.

> [!NOTE]
> If several `igc-icon` elements are inserted, the banner will try to position all of them at the beginning. It is strongly advised to pass only one `igc-icon` directly to the banner.

To pass an `igc-icon` to your banner, use the `prefix` slot:

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

If you want to use an `igc-icon` in your banner message, simply insert it in the banner's content:

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
    <igc-icon name="signal_wifi_off"></igc-icon>
</igc-banner>
```

### Changing the banner button

The `Banner` exposes the `actions` slot for templating the banner buttons. This allows you to override the default banner button (`OK`) and add user-defined custom actions.

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <igc-button onclick="banner.toggle()">
            <igc-ripple></igc-ripple>
            Toggle Banner
        </igc-button>
    </div>
</igc-banner>
```

`sample="/notifications/banner/banner-sample-2", height="530", alt="{Platform} Banner Example"`

### Binding to events

The banner component emits the `igcClosing` and `igcClosed` events when being closed. The `igcClosing` event is cancelable - it uses the [`CustomEvent`](https://developer.mozilla.org/docs/Web/API/CustomEvent) interface and the emitted object has its `cancelable` property set to **true**. If we cancel the `igcClosing` event, the corresponding end action and event will not be triggered - the banner will not be closed and the `igcClosed` event will not be emitted.

To cancel the closing event, call the [`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method.

```html
<igc-banner id="banner">
    ...
</igc-banner>
```
```ts
const banner = document.getElementById('banner') as IgcBannerComponent;

banner.addEventListener('igcClosing', (event) => {
  event.preventDefault();
});
```

> [!NOTE]
> If the changes above are applied, the banner will never close, as the closing event is always cancelled.

## Advanced Example

Let's create a banner with two custom buttons - one for dismissing the notification and one for turning on the connection. We can pass custom action handlers using the `actions` slot:

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <igc-button onclick="banner.hide()">
            <igc-ripple></igc-ripple>
            Continue Offline
        </igc-button>
        <igc-button id="button">
            <igc-ripple></igc-ripple>
            Turn On Wifi
        </igc-button>
    </div>
</igc-banner>
```



> According to Google's [Material Design](https://material.io/design/components/banners.html#anatomy) guidelines, a banner should have a maximum of 2 buttons present. The `Banner` does not explicitly limit the number of elements under the `actions` slot, but it is strongly recommended to use up to 2 if you want to adhere to the material design guidelines.


The dismiss option (`'Continue Offline'`) doesn't need any further logic, so it can just call the `hide()` method. The confirm action (`'Turn On Wifi'`), however, requires some additional logic, so we have to define it in the component. Then, we will add an event listener for the `click` event. The last step is to call the `refreshBanner()` method on each change, which will toggle the banner depending on the `wifiState`.

The navbar will have a Wifi icon and we will add an event listener for its `click` event as well. As the `refreshBanner()` method is called on each change, the icon will not only toggle the banner, but change according to the state of the connection:

```html
<igc-navbar>
  <h1>Gallery</h1>
  <igc-icon id="icon" slot="end" name="signal_wifi_off"></igc-icon>
</igc-navbar>

<igc-banner id="banner">
    ...
    <div slot="actions">
        ...
        <igc-button id="button">
            <igc-ripple></igc-ripple>
            Turn On Wifi
        </igc-button>
    </div>
</igc-banner>
```

```ts
private banner: IgcBannerComponent;
private icon: IgcIconComponent;
private button: IgcButtonComponent;

private wifiState: boolean = false;

constructor() {
    this.banner = document.getElementById('banner') as IgcBannerComponent;
    this.icon = document.getElementById('icon') as IgcIconComponent;
    this.button = document.getElementById('button') as IgcButtonComponent;

    this.icon.addEventListener('click', () => this.refreshBanner());
    this.button.addEventListener('click', () => this.refreshBanner());
}

public refreshBanner() {
    if (!this.wifiState) {
        this.icon.name = 'signal_wifi_4_bar';
        this.banner.hide();
    } else {
        this.icon.name = 'signal_wifi_off';
        this.banner.show();
    }
    this.wifiState = !this.wifiState;
}
```

Finally, we will add a `toast`, displaying a message about the WiFi state. The results of the templated banner can be seen in the demo below:

`sample="/notifications/banner/banner-advanced-sample", height="530", alt="{Platform} Banner Example"`

## Styling

The banner component exposes several CSS parts (`base`, `prefix`, and `actions`) to give you full control over its style.

```css
igc-banner::part(base) {
    background: #dedede;
}
```

`sample="/notifications/banner/banner-styling", height="530", alt="{Platform} Banner Example"`


## API References

- `Banner`
- `Card`
- `Icon`
- `Navbar`
- `Toast`
- `Ripple`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
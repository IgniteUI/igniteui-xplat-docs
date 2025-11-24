---
title: {Platform} Banner | Infragistics
_description: With {ProductName} Banner component, developers can easily integrate a short, non-intrusive message (along with optional actions) within mobile and desktop applications.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Banner components
_license: MIT
mentionedTypes: ["Banner"]
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

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Banner` and its necessary CSS, like so:

```tsx
import { IgrBanner } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

<!-- Blazor -->
Before using the `Banner`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBannerModule));
```

You will also need to link an additional CSS file to apply the styling to the `Banner` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

### Show Banner

In order to display the banner component, use its `Show` method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```html
<igc-button onclick="banner.show()">Show Banner</igc-button>

<igc-banner id="banner">
    You are currently offline.
</igc-banner>
```

```tsx
<IgrButton onClick={() => bannerRef.current.show()}>
    <span>Show Banner</span>
</IgrButton>

<IgrBanner ref={bannerRef}>
    <span>You are currently offline.</span>
</IgrBanner>
```

```razor
<IgbButton @onclick="ShowBanner">Show Banner</IgbButton>

<IgbBanner @ref="bannerRef">
    You are currently offline.
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void ShowBanner()
    {
        this.bannerRef.ShowAsync();
    }
}
```

> [!NOTE]
> The `Banner` includes a default action button `OK`, which closes the banner.


## Examples

The `Banner` component allows templating of its content while still sticking as closely as possible to the material design banner guidelines.

### Changing the banner message

Configuring the message displayed in the banner is easy - just change the content you are passing to the `{BannerSelector}` tag. The text will show up in the specified banner area and the banner will use its default template when displaying it. Below, we will change the content of our sample banner to be a bit more descriptive:

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <span>You have lost connection to the internet. This app is offline.</span>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    You have lost connection to the internet. This app is offline.
</IgbBanner>
```

### Adding an icon

An `Icon` can be displayed in the banner by using the banner's `prefix` slot. The icon will always be positioned at the beginning of the banner message.

> [!NOTE]
> If several `Icon` elements are inserted, the banner will try to position all of them at the beginning. It is strongly advised to pass only one `Icon` directly to the banner.

To pass an `Icon` to your banner, use the `prefix` slot:

```html
<igc-banner id="banner">
    <igc-icon slot="prefix" name="signal_wifi_off"></igc-icon>
    You have lost connection to the internet. This app is offline.
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon slot="prefix" IconName="signal_wifi_off" Collection="material"></IgbIcon>
    You have lost connection to the internet. This app is offline.
</IgbBanner>
```

If you want to use an `Icon` in your banner message, simply insert it in the banner's content:

```html
<igc-banner id="banner">
    You have lost connection to the internet. This app is offline.
    <igc-icon name="signal_wifi_off"></igc-icon>
</igc-banner>
```

```tsx
<IgrBanner ref={bannerRef}>
    <span>You have lost connection to the internet. This app is offline.</span>
    <IgrIcon name="signal_wifi_off"></IgrIcon>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    You have lost connection to the internet. This app is offline.
    <IgbIcon IconName="signal_wifi_off" Collection="material"></IgbIcon>
</IgbBanner>
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

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
    <div slot="actions">
        <IgrButton variant="flat" onClick={() => bannerRef.current.toggle()}>
            <IgrRipple />
            <span>Toggle Banner</span>
        </IgrButton>
    </div>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon slot="prefix" IconName="signal_wifi_off" Collection="material"></IgbIcon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <IgbButton Variant="ButtonVariant.Flat" @onclick="OnButtonClick">
            Toggle Banner
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void OnButtonClick()
    {
        this.bannerRef.ToggleAsync();
    }
}
```

`sample="/notifications/banner/banner-sample-2", height="530", alt="{Platform} Banner Example"`

### Binding to events

The banner component emits the `Closing` and `Closed` events when being closed. The `Closing` event is cancelable - it uses the [`CustomEvent`](https://developer.mozilla.org/docs/Web/API/CustomEvent) interface and the emitted object has its `cancelable` property set to **true**. If we cancel the `Closing` event, the corresponding end action and event will not be triggered - the banner will not be closed and the `Closed` event will not be emitted.

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

```tsx
<IgrBanner onClosing={(event) => event.preventDefault()}>
    ...
</IgrBanner>
```

```razor
<IgbBanner id="banner">
    ...
</IgbBanner>

@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JS.InvokeVoidAsync("handleClosing");
        }
    }
}
```
```razor
//In JavaScript:
function handleClosing() {
    const banner = document.getElementById('banner');

    banner.addEventListener('igcClosing', (event) => {
        event.preventDefault();
    });
}
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

```tsx
<IgrBanner ref={bannerRef}>
    <IgrIcon slot="prefix" name="signal_wifi_off"></IgrIcon>
    <span>You have lost connection to the internet. This app is offline.</span>
    <div slot="actions">
        <IgrButton variant="flat" onClick={() => bannerRef.current.hide()}>
            <IgrRipple />
            <span>Continue Offline</span>
        </IgrButton>
        <IgrButton variant="flat" onClick={refreshBanner}>
            <IgrRipple />
            <span>Turn On Wifi</span>
        </IgrButton>
    </div>
</IgrBanner>
```

```razor
<IgbBanner @ref="bannerRef">
    <IgbIcon IconName="signal_wifi_off" Collection="material" slot="prefix"></IgbIcon>
    You have lost connection to the internet. This app is offline.
    <div slot="actions">
        <IgbButton Variant="ButtonVariant.Flat" @onclick="HideBanner">
            Continue Offline
            <IgbRipple />
        </IgbButton>
        <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
            Turn On Wifi
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;

    private void HideBanner()
    {
        this.bannerRef.HideAsync();
    }
}
```

> According to Google's [Material Design](https://material.io/design/components/banners.html#anatomy) guidelines, a banner should have a maximum of 2 buttons present. The `Banner` does not explicitly limit the number of elements under the `actions` slot, but it is strongly recommended to use up to 2 if you want to adhere to the material design guidelines.


The dismiss option (**Continue Offline**) doesn't need any further logic, so it can just call the `Hide` method. The confirm action (**Turn On Wifi**), however, requires some additional logic, so we have to define it in the component. Then, we will add an event listener for the `click` event. The last step is to call the `refreshBanner()` method on each change, which will toggle the banner depending on the `wifiState`.

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

```tsx
const bannerRef = useRef<IgrBanner>(null);
const iconRef = useRef<IgrIcon>(null);

const [wifiState, setWifiState] = useState(false);
const [iconName, setIconName] = useState("signal_wifi_off");

const refreshBanner = () => {
    const nextWifiState = !wifiState;
    setWifiState(nextWifiState);
    setIconName(nextWifiState ? "signal_wifi_4_bar" : "signal_wifi_off");

    if (nextWifiState) {
        bannerRef.current.hide();
    } else {
        bannerRef.current.show();
    }
}

return(
    <>
        <IgrNavbar>
            <h1>Gallery</h1>
            <IgrIcon ref={iconRef} name={iconName} slot="end" onClick={refreshBanner}></IgrIcon>
        </IgrNavbar>

        <IgrBanner ref={bannerRef}>
            ...
            <div slot="actions">
                ...
                <IgrButton variant="flat" onClick={refreshBanner}>
                    <IgrRipple />
                    <span>Turn On Wifi</span>
                </IgrButton>
            </div>
        </IgrBanner>
    </>
);
```

```razor
<IgbNavbar>
    <h1>Gallery</h1>
    <IgbIcon @ref="iconRef" IconName="@iconName" Collection="material" slot="end" @onclick="RefreshBanner"></IgbIcon>
</IgbNavbar>

<IgbBanner @ref="bannerRef">
    ...
    <div slot="actions">
        ...
        <IgbButton Variant="ButtonVariant.Flat" @onclick="RefreshBanner">
            Turn On Wifi
            <IgbRipple />
        </IgbButton>
    </div>
</IgbBanner>

@code {
    private IgbBanner bannerRef;
    private string iconName = "signal_wifi_off";
    private bool wifiState = false;
   
    private void RefreshBanner()
    {
        if (!this.wifiState)
        {
            this.iconName = "signal_wifi_4_bar";
            this.bannerRef.HideAsync();
        }
        else
        {
            this.iconName = "signal_wifi_off";
            this.bannerRef.ShowAsync();
        }
        this.wifiState = !this.wifiState;
    }
}
```

Finally, we will add a `Toast`, displaying a message about the WiFi state. The results of the templated banner can be seen in the demo below:

`sample="/notifications/banner/banner-advanced-sample", height="530", alt="{Platform} Banner Example"`

## Styling

The `Banner` component exposes several CSS parts which give you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the banner component. |
| `spacer` | The inner wrapper that sets the space around the banner. |
| `message` | The part that holds the text and the illustration. |
| `illustration` | The part that holds the banner icon/illustration. |
| `content` | The part that holds the banner text content. |
| `actions` | The part that holds the banner action buttons. |

```css
igc-banner::part(spacer) {
  background: var(--ig-surface-600);
}

igc-banner::part(illustration) {
  color: var(--ig-surface-600-contrast);
}

igc-banner::part(content) {
  color: var(--ig-gray-900);
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
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
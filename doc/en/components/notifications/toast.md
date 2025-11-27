---
title: {Platform} Toast Notifications | {ProductName}
_description: With {ProductName} Toast component, developers can easily integrate a brief, single-line message within mobile and desktop applications. Try it Now
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Toast components
_license: MIT
mentionedTypes: ["Toast"]
---

# {Platform} Toast Overview

The {Platform} Toast is a super lightweight and small pop-up component that is used for displaying a message content, notifying end-users about the status of a changed record. You can easily position and show {Platform} toast notifications at the bottom or at any other specified area of the screen. Or you can also dismiss them in a simple and easy way.

The {Platform} Toast component is primarily used for system messaging, push notifications, warning messages, and information. It cannot be dismissed by the user. This control has different features like animation effects, display time property to configure how long the toast component is visible, styling, and others.

## {Platform} Toast Example

Take a look at the simple Ignite UI for {Platform} Toast example below. The animated notification message pops up after clicking on the button.

`sample="/notifications/toast/overview", height="230", alt="{Platform} Toast Example"`


<div class="divider--half"></div>

### How To Use {ProductName} Toast Notification

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

You will then need to import the {Platform} `Toast` and its necessary CSS, like so:

```tsx
import { IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

Before using the {Platform} `Toast`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbToastModule));
```

```ts
import { defineComponents, IgcToastComponent } from 'igniteui-webcomponents';

defineComponents(IgcToastComponent);
```

For a complete introduction to the {ProductName}, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the `Calendar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The simplest way to display the toast component is to use its `Show` method and call it on a button click.

```html
<igc-button onclick="toast.show()" variant="contained">Show Toast</igc-button>
<igc-toast id="toast">Toast Message</igc-toast>
```

```razor
<IgbButton @onclick=@OnToastButtonClick Variant=@ButtonVariant.Contained>Show Toast</IgbButton>
<IgbToast @ref="ToastRef">Toast Message</IgbToast>

@code {
    public IgbToast ToastRef { get; set; }

    protected override void OnInitialized()
    {
    }

    public void OnToastButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.Show();
        }
    }
}
```

```tsx
<IgrButton variant="contained" onClick={onShowButtonClicked}>
    <span>Show Toast</span>
</IgrButton>

<IgrToast ref={toastRef}>
    <span>Toast Message</span>
</IgrToast>

const toastRef = useRef<IgrToast>(null);

const onShowButtonClicked = () => {
        toastRef.current?.show();
    };
```

## Examples

### Properties

Use the `DisplayTime` property to configure how long the toast component is visible. By default, it's set to 4000 milliseconds.

By default, the toast component is hidden automatically after a period specified by the `DisplayTime`. You can use `KeepOpen` property to change this behavior. In this way, the toast will remain visible.

```html
<igc-button onclick="toast.toggle()" variant="contained">Toggle Toast</igc-button>
<igc-button onclick="toast.keepOpen = !toast.keepOpen" variant="contained">Toggle keepOpen property</igc-button>
<igc-button onclick="toast.displayTime = 8000" variant="contained">Set DisplayTime to 8000</igc-button>

<igc-toast id="toast">Toast Message</igc-toast>
```

```razor
<IgbButton @onclick=@OnToggleToastButtonClick Variant="ButtonVariant.Contained">Toggle Toast</IgbButton>
<IgbButton @onclick=@OnToggleKeepOpenButtonClick Variant="ButtonVariant.Contained">Toggle KeepOpen Property</IgbButton>
<IgbButton @onclick=@OnDisplayTimeButtonClick Variant="ButtonVariant.Contained">Set DisplayTime to 8000</IgbButton>

<IgbToast @ref=ToastRef>Toast Message</IgbToast>

@code {
    public IgbToast ToastRef{  get;  set; }

    protected override void OnInitialized()
    {
    }

    public void OnToggleToastButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.Toggle();
        }
    }

    public void OnToggleKeepOpenButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.KeepOpen = !this.ToastRef.KeepOpen;
        }
    }

    public void OnDisplayTimeButtonClick(MouseEventArgs args)
    {
        if (this.ToastRef != null)
        {
            this.ToastRef.DisplayTime = 8000;
        }
    }
}
```

```tsx
<div>
    <IgrButton variant="contained" onClick={onToggleButtonClicked}>
        <span>Toggle Toast</span>
    </IgrButton>
    <IgrButton variant="contained" onClick={onKeepOpenButtonClicked}>
        <span>Toggle keepOpen Property</span>
    </IgrButton>
    <IgrButton variant="contained" onClick={onDisplayTimeButtonClicked}>
        <span>Set DisplayTime to 8000</span>
    </IgrButton>
</div>

<IgrToast ref={toastRef}>
    <span>Toast Message</span>
</IgrToast>

const toastRef = useRef<IgrToast>(null);

const onToggleButtonClicked = () => {
    toastRef.current?.toggle();
};

const onKeepOpenButtonClicked = () => {
    if (toastRef.current) {
        toastRef.current.keepOpen = !toastRef.current.keepOpen;
    }
};

const onDisplayTimeButtonClicked = () => {
    if (toastRef.current) {
        toastRef.current.displayTime = 8000;
    }
};
```

`sample="/notifications/toast/properties", height="230", alt="{Platform} Toast Properties Example"`



## Styling

You can style the {Platform} `Toast` notifications directly using its tag selector:

```css
igc-toast {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
```

`sample="/notifications/toast/styling", height="230", alt="{Platform} Toast Styling Example"`

<div class="divider--half"></div>


## API References

- `Calendar`
- `DisplayTime`
- `KeepOpen`
- `Show`
- `Toast`
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
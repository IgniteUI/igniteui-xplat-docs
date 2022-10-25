---
title: {Platform} Toast | Infragistics
_description: With {ProductName} Toast component, developers can easily integrate a brief, single-line message within mobile and desktop applications.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Toast components
mentionedTypes: ['Toast']
---

# {Platform} Toast

The {ProductName} Toast component is primarily used for system messaging, push notifications, warning messages, and information. It cannot be dismissed by the user.

## {ProductName} Toast Example

This sample demonstrates how to create `Toast` component.

<code-view style="height: 230px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/toast-overview" alt="{Platform} Toast Example"
           github-src="notifications/toast/overview">
</code-view>

<div class="divider--half"></div>

### Usage

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

You will then need to import the `Toast`, its necessary CSS, and register its module, like so:

```tsx
import { IgrToastModule, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrToastModule.register();
```

<!-- end: React -->

Before using the `Toast`, you need to register it as follows:

Open the Program.cs
```razor
builder.Services.AddIgniteUIBlazor(typeof(IgbToastModule));
```

```ts
import { defineComponents, IgcToastComponent } from 'igniteui-webcomponents';

defineComponents(IgcToastComponent);
```

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
        if(this.ToastRef != null)
        {
            this.ToastRef.Show();
        }
    }
}
```

```tsx
<IgrButton variant="contained" clicked={this.onShowButtonClicked}>
    <span>Show Toast</span>
</IgrButton>

<IgrToast ref={this.onToastRef}>
    <span>Toast Message</span>
</IgrToast>

public onToastRef(toast: IgrToast){
    if (!toast) { return; }
    this.toastRef = toast;
}

public onShowButtonClicked() {
    if(this.toastRef){
        this.toastRef.show();
    }
}
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
        if(this.ToastRef != null)
        {
            this.ToastRef.Toggle();
        }
    }

    public void OnToggleKeepOpenButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.KeepOpen = !this.ToastRef.KeepOpen;
        }
    }

    public void OnDisplayTimeButtonClick(MouseEventArgs args)
    {
        if(this.ToastRef != null)
        {
            this.ToastRef.DisplayTime = 8000;
        }
    }
}
```

```tsx
<div>
    <IgrButton variant="contained" clicked={this.onToggleButtonClicked}>
        <span>Toggle Toast</span>
    </IgrButton>
    <IgrButton variant="contained" clicked={this.onKeepOpenButtonClicked}>
        <span>Toggle keepOpen Property</span>
    </IgrButton>
    <IgrButton variant="contained" clicked={this.onDisplayTimeButtonClicked}>
        <span>Set DisplayTime to 8000</span>
    </IgrButton>
</div>

<IgrToast ref={this.onToastRef}>
    <span>Toast Message</span>
</IgrToast>

public onToastRef(toast: IgrToast){
    if (!toast) { return; }
    this.toastRef = toast;
}

public onToggleButtonClicked() {
    if(this.toastRef){
        this.toastRef.toggle();
    }
}

public onKeepOpenButtonClicked() {
    if(this.toastRef){
        this.toastRef.keepOpen = !this.toastRef.keepOpen;
    }
}

public onDisplayTimeButtonClicked() {
    if(this.toastRef){
        this.toastRef.displayTime = 8000;
    }
}
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/toast-properties"
           alt="{Platform} Toast Properties Example"
           github-src="notifications/toast/properties">
</code-view>

## Styling

You can style the toast using it's directly its tag selector:

```css
igc-toast {
    background: #011627;
    color: #ECAA53;
    outline-color: #ECAA53;
}
```

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/notifications/toast-styling"
           alt="{Platform} Toast Styling Example"
           github-src="notifications/toast/styling">
</code-view>

## API Reference

* `Toast`

<div class="divider--half"></div>

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- React -->

* [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [Ignite UI for React Examples on **GitHub**](https://github.com/IgniteUI/igniteui-react-examples)

<!-- end: React -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

 ## API Members

 - `Calendar`
 - `DisplayTime`
 - `KeepOpen`
 - `Show`
 - `Toast`
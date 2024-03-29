---
title: {Platform} Dialog | Infragistics
_description: With {ProductName} Dialog component, developers can easily integrate a dialog window centered on top of app content.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Dialog components
mentionedTypes: ['Dialog']
---

# {Platform} Dialog Overview

The {ProductName} Dialog component is used to display some information or prompt the user for an action or confirmation. It is shown in a modal window, which means that the user is not allowed to interact with the main app until a certain action is performed that closes the dialog.

## {ProductName} Dialog Example

This sample demonstrates how to create a Dialog component in {Platform}.

`sample="/notifications/dialog/overview", height="400", alt="{Platform} Dialog Example"`


<div class="divider--half"></div>

### Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

```ts
import { defineComponents, IgcDialogComponent } from 'igniteui-webcomponents';

defineComponents(IgcDialogComponent);
```

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the {Platform} `Dialog`, its necessary CSS, and register its module, like so:

```tsx
import { IgrDialogModule, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDialogModule.register();
```

<!-- end: React -->

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- Blazor -->
Before using the {Platform} `Dialog`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDialogModule));
```
<!-- end: Blazor -->

The simplest way to display the dialog component is to use its `Show` method and call it on a button click.

```razor
<div class="container vertical">
    <IgbButton @onclick="OnDialogShow" Variant=@ButtonVariant.Contained>Show Dialog</IgbButton>
    <IgbDialog @ref="DialogRef" Title="Confirmation">
        <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>Cancel</IgbButton>
        <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>OK</IgbButton>
    </IgbDialog>
</div>

@code {
    public IgbDialog DialogRef;
    public async Task OnDialogShow()
    {
        if (this.DialogRef != null)
            await this.DialogRef.ShowAsync();
    }
    public async Task OnDialogHide()
    {
        if (this.DialogRef != null)
            await this.DialogRef.HideAsync();
    }
}
```

```html
<igc-button onclick="dialog.show()" variant="contained">Show Dialog</igc-button>

<igc-dialog id="dialog" title="Confirmation">
    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">Cancel</igc-button>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">OK</igc-button>
</igc-dialog>
```

```tsx
<IgrButton variant="contained" clicked={this.onDialogShow}>
    <span>Show Dialog</span>
</IgrButton>

<IgrDialog ref={this.onDialogRef}>
    <span>Dialog Message</span>
</IgrDialog>

public onDialogRef(dialog: IgrDialog) {
    if (!dialog) { return; }
    this.dialogRef = dialog;
}

public onDialogShow() {
    if (this.dialogRef) {
        this.dialogRef.show();
    }
}
```

The Dialog component provides an `Open` property, which gives you the ability to configure its state as per your application scenario.

Use the `Title` property to set the title of the dialog. However, if any content is provided in the `title` slot, it will take precedence over the property.

Action buttons or additional information can be placed in the bottom part of the dialog via the `footer` slot. If no content is added there, a default `OK` button will be shown that closes the Dialog when clicked. In case you do not want this button to be shown you can set the `HideDefaultAction` property to **true**. The default value is **false**.

### Closing

By default, the Dialog is closed automatically when the user presses `ESC`. You could prevent this behavior using the `KeepOpenOnEscape` property. The default value is **false**. If there is an open dropdown (or any other element that should handle `ESC` internally) in the dialog, pressing `ESC` once will close the dropdown and pressing it again will close the dialog.

Use the `CloseOnOutsideClick` property to configure if the dialog should be closed when clicking outside of it. The default value is **false**.

<!-- Angular, WebComponents, React -->

`sample="/notifications/dialog/closing-variations", height="400", alt="{Platform} Dialog Closing Variations"`

<!-- end: Angular, WebComponents, React -->

### Form

Form elements can close a Dialog if they have the attribute `method="dialog"`. Submitting the form will trigger the closing of the dialog.

`sample="/notifications/dialog/form", height="500", alt="{Platform} Dialog Form Example"`


## Styling

The dialog component exposes several CSS parts (`base`, `title`, `content` and `footer`) to give you full control over its style.

```css
igc-dialog::part(content) {
    background: #011627;
    color: white;
}

igc-dialog::part(title),
igc-dialog::part(footer) {
    background: #011627;
    color: #ECAA53;
}
```

`sample="/notifications/dialog/styling", height="400", alt="{Platform} Dialog Styling Example"`


<div class="divider--half"></div>

## API References

- `KeepOpenOnEscape`
- `CloseOnOutsideClick`
- `Hide`
- `HideDefaultAction`
- `Open`
- `Title`
- `Dialog`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

---
title: $Platform$ Dialog | Infragistics
_description: With $ProductName$ Dialog component, developers can easily integrate a dialog window centered on top of app content.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Dialog components
mentionedTypes: ['Dialog']
---

# $Platform$ Dialog

The $ProductName$ Dialog component is used to display some information or prompt the user for an action or confirmation. It is shown in a modal window, which means that the user can't interact with the main app and user action is required before returning to the main window. 

## $ProductName$ Dialog Example

This sample demonstrates how to create `Dialog` component.

<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-overview" alt="$Platform$ Dialog Example"
           github-src="notifications/dialog/overview">
</code-view>

<div class="divider--half"></div>

### Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

```ts
import { defineComponents, IgcDialogComponent } from 'igniteui-webcomponents';

defineComponents(IgcDialogComponent);
```

The simplest way to display the dialog component is to use its `Show` method and call it on a button click.

```html
<igc-button onclick="dialog.show()" variant="contained">Show Dialog</igc-button>

<igc-dialog id="dialog" title="Confirmation">
    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">Cancel</igc-button>
    <igc-button slot="footer" onclick="dialog.close()" variant="flat">OK</igc-button>
</igc-dialog>
```

The Dialog provides `open` property, which give you the ability to configure the state of the Dialog as per your requirement.

Use the `title` property to set the title of the dialog. However, if any content is provided in the `title` slot, it will take precedence over the property. Action buttons or additional information can be placed in the bottom part of the Dialog via the `footer` slot.

### Closing

By default, the Dialog is closed automatically when the user presses `ESC`. You could prevent this behavior using the `closeOnEscape` property. The default value is **true**. If there is an opened dropdown (or any other element that should handle `ESC` internally) in the dialog, pressing `ESC` once will close the dropdown and pressing it again will close the dialog.

Use the `closeOnOutsideClick` property to configure if the Dialog should be closed when clicking outside of it. The default value is **false**.

<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-closing-variations" alt="$Platform$ Dialog Closing Variations"
           github-src="notifications/dialog/closing-variations">
</code-view>

### Form

Form elements can close a Dialog if they have the attribute `method="dialog"`. Submitting the form will trigger the closing of the Dialog.

<code-view style="height: 500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-form" alt="$Platform$ Dialog Form Example"
           github-src="notifications/dialog/form">
</code-view>

## Styling

The dialog component exposes several CSS parts (`base`, `title`, `content` and `footer`) to give you full control over its styling.

```css
igc-dialog::part(content) {
    background: #011627;
    color:white;
}

igc-dialog::part(title),
igc-dialog::part(footer) {
    background: #011627;
    color:#ECAA53;
}
```

<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-styling" alt="$Platform$ Dialog Styling Example"
           github-src="notifications/dialog/styling">
</code-view>

## API Reference

* `Dialog`

<div class="divider--half"></div>

## Additional Resources

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## API Members

- `title`
- `open`
- `hide`
- `closeOnEscape`
- `closeOnOutsideClick`
- `Dialog`
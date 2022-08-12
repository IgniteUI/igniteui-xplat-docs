---
title: $Platform$ Dialog | Infragistics
_description: With $ProductName$ Dialog component, developers can easily integrate a dialog window centered on top of app content.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Dialog components
mentionedTypes: ['Dialog']
---

# $Platform$ Dialog

The $ProductName$ Dialog component informs users about a task. They can contain important information and require decisions to be taken. A Dialog is a type of modal window that appears on top of all the content to provide valuable information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

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

<igc-dialog id="dialog" title="Title Content">
    Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?

    <igc-button slot="footer">OK</igc-button>
    <igc-button slot="footer" variant="outlined">Cancel</igc-button>
</igc-dialog>
```

## Examples

### Close on Outside Click & Close on Escape

Use the `closeOnOutsideClick` and `closeOnEscape` properties to configure how the dialog can be closed. By default `closeOnOutsideClick` is set to **true** and `closeOnEscape` - to **false**.

Try it for yourself in the example below:

<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/dialog-closing-variations" alt="$Platform$ Dialog Closing Variations"
           github-src="notifications/dialog/closing-variations">
</code-view>

> NOTE
> If there is an opened dropdown (or any other element that should handle `ESC` internally) in the dialog, pressing `ESC` once will close the dropdown and pressing it again will close the dialog.

### Title

Use the `title` property to set the title of the dialog. If any content is provided in the `title` slot however, it will take precedence over the property.

### Form

<!-- TODO -->

<!-- <code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/dialog/dialog-form" alt="$Platform$ Dialog Form Example"
           github-src="notifications/dialog/form">
</code-view> -->

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

## Accessibility

The $Platform$ Dialog component exposes several aria attributes as properties so that they can be assigned to the actual `<dialog>` element and removed from the `<igc-dialog>` element:

- `role` defaults to `dialog`.
- `aria-label` attribute is not assigned by default
- `aria-describedby` attribute is not assigned by default
- `aria-labelledby` attribute defaults to the dialog title's id.

## API Reference

* `Dialog`

<div class="divider--half"></div>

## Additional Resources

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## API Members

- `role`
- `title`
- `toggle`
- `aria-label`
- `closeOnEscape`
- `aria-labelledby`
- `aria-describedby`
- `closeOnOutsideClick`
- `Dialog`
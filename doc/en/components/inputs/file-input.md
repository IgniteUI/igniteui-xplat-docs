---
title: {Platform} File Input | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} File input is a component where the user can select and upload files. Improve your application with {ProductName}!
_keywords: {Platform} File input, {ProductName}, Infragistics
mentionedTypes: ["Input", "Icon", "Button"]
---
# {Platform} File Input Overview

The {ProductName} File Input component provides an interactive way for users to select and upload files. It extends the base `Input` functionality by adding file-specific features such as file selection, displaying selected file names, and supporting multiple file uploads.

## {Platform} File Input Example

<div class="divider--half"></div>

`sample="/inputs/file-input/overview", height="120", alt="{Platform} File Input Overview Example"`

## Usage

The File Input component allows users to select files from their device and upload them to a web application. It displays the names of selected files and offers customization options for the browse button and the "No file chosen" text. The component also provides properties, methods, and slots that can be used to further configure its behavior to suit your needs.

### Getting Started

<!-- WebComponents -->

To start using the File Input, first, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install {PackageWebComponents}
```

After that, you need to import the File Input as follows:

```ts
import { defineComponents, IgcFileInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcFileInputComponent);
```

<!-- end: WebComponents -->

Now you can start with a basic configuration of the {Platform} File Input.

```html
  <igc-file-input label="File Input" required=true></igc-file-input>
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

## Configuration

### Properties

The File Input component offers a variety of properties that allow you to configure its behavior based on specific requirements. These properties give you control over the input’s functionality, appearance, and validation.

* `value` - Sets the current value of the file input field.
* `disabled` - Disables the file input, preventing user interaction.
* `required` - Marks the input as mandatory. Form submission will be blocked unless a file is selected.
* `invalid` - Indicates that the input value is invalid, used to trigger visual error states.
* `multiple` - Allows the selection of multiple files.
* `accept` - Defines the types of files that can be selected. The value for this property needs to be a comma-separated list of file formats (e.g., .jpg, .png, .gif).
* `autofocus` - Automatically focuses the file input field when the page loads.
* `label` - Sets the label text associated with the file input element.
* `placeholder` - Provides placeholder text displayed when no file is selected.

```html
  <igc-file-input 
    label="Files Input" 
    accept=".jpg, .png, .gif"
    placeholder="Files missing"
    required
    multiple>
  </igc-file-input>
```

### Methods 

In addition to its configurable properties, the File Input component also inherits four useful methods from the `Input` component that you can use: 

* `focus()` - Sets the focus on the file input element.
* `blur()` - Removes the focus from the file input element.
* `reportValidity()` - Checks the validity of the input and displays a validation message if the input is invalid.
* `setCustomValidity()` - Sets a custom validation message. If the provided message is not empty, the input will be marked as invalid.

### Slots

The File Input component also exposes several slots that can be used to customize its appearance and behavior.

* `prefix` & `suffix` - Allow you to insert content before or after the main input area. 
* `helper-text` - Displays a hint or instructional message below the input. Useful for providing additional guidance, such as formatting tips or field requirements.
* `file-selector-text` - Allow you to customizes the text displayed on the file selection button.
* `file-missing-text` - Sets the text shown in the input field when no file has been selected.
* `value-missing` -  Renders custom content when the required field validation fails. (i.e., when a file is required but not provided).
* `invalid` – Allows you to render custom content when the input is in an invalid state.
* `custom-error` - Displays content when a custom validation message is set using the `setCustomValidity()` method.

`sample="/inputs/file-input/preffix-suffix", height="120", alt="{Platform} File Input Slots Example"`

## Integration

The File Input component integrates seamlessly with the HTML Form element. Using the methods and properties described above, you can effectively manage its behavior and validation within the standard HTML Forms.

`sample="/inputs/file-input/form", height="120", alt="{Platform} File Input Form Example"`

## Limitations

The File Input component currently has the following limitations:
- The default strings for the "Browse" button and the "No file chosen" message is not automatically localized. These strings remain the same across all locales but can be manually customized using the appropriate slots or placeholder binding.
- Files cannot be set manually through the `value` property. File selection can be done only via the file picker. You can however pass an empty string `''` to reset the field.

## Accessibility & ARIA Support

The File Input component is both focusable and interactive, ensuring full keyboard and screen reader accessibility. The component can be labeled using the `label` attribute, which leverages the native `<label>` element to provide a semantically correct and accessible label.

To support accessibility best practices, the component also applies relevant ARIA attributes:

* `aria-invalid` - Set to "true" when the input is in an invalid state.
* `aria-describedby` - Automatically linked to the helper text element when present, allowing assistive technologies to announce the additional information.

## Styling

The `File Input` component exposes CSS parts which we can use for styling. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `file-names` | The file names wrapper. |
| `file-selector-button` | The browse button. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |


```scss
igc-file-input::part(file-names) {
  background-color: var(--ig-primary-50);
  color: var(--ig-gray-400);
}

igc-file-input::part(suffix) {
  color: var(--ig-primary-700-contrast);
  background-color: var(--ig-primary-700);
}

igc-file-input::part(label) {
  color: var(--ig-gray-600);
}
```

`sample="/inputs/input/styling", height="150", alt="{Platform} Input Styling"`

<div class="divider"></div>


## API References

 - `Icon`
 - `Input`
 - `Button`
 - [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
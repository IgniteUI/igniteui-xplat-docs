---
title: {Platform} File Input | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} File input is a component where the user can select and upload files. Improve your application with {ProductName}!
_keywords: {Platform} File input, {ProductName}, Infragistics
_license: MIT
mentionedTypes: ["Input", "Icon", "Button"]
---
# {Platform} File Input Overview

The {ProductName} File Input component provides an interactive way for users to select and upload files. It extends the base `Input` functionality by adding file-specific features such as file selection, displaying selected file names, and supporting multiple file uploads.

## {Platform} File Input Example

<div class="divider--half"></div>

`sample="/inputs/file-input/overview", height="120", alt="{Platform} File Input Overview Example"`

## Usage

The `FileInput` component allows users to select files from their device and upload them to a web application. It displays the names of selected files and offers customization options for the browse button and the "No file chosen" text. The component also provides properties, methods, and slots that can be used to further configure its behavior to suit your needs.

### Getting Started

<!-- WebComponents -->

To start using the `FileInput`, first, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install {PackageWebComponents}
```

After that, you need to import the `FileInput` as follows:

```ts
import { defineComponents, IgcFileInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcFileInputComponent);
```

<!-- end: WebComponents -->

Now you can start with a basic configuration of the {Platform} `FileInput`.

```html
<igc-file-input label="File Input" required=true></igc-file-input>
```

For a complete introduction to the {ProductName}, read the [**Getting Started**](../general-getting-started.md) topic.

## Configuration

### Properties

The `FileInput` component offers a variety of properties that allow you to configure its behavior based on specific requirements. These properties give you control over the input’s functionality, appearance, and validation.

- `Value` - Sets the current value of the file input field.
- `Disabled` - Disables the file input, preventing user interaction.
- `Required` - Marks the input as mandatory. Form submission will be blocked unless a file is selected.
- `Invalid` - Indicates that the input value is invalid, used to trigger visual error states.
- `Multiple` - Allows the selection of multiple files.
- `Accept` - Defines the types of files that can be selected. The value for this property needs to be a comma-separated list of file formats (e.g., .jpg, .png, .gif).
- `Autofocus` - Automatically focuses the file input field when the page loads.
- `Label` - Sets the label text associated with the file input element.
- `Placeholder` - Provides placeholder text displayed when no file is selected.

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

In addition to its configurable properties, there are four useful methods inherited from the `Input` component that you can use in the `FileInput` component:

- `Focus` - Sets the focus on the file input element.
- `Blur` - Removes the focus from the file input element.
- `ReportValidity` - Checks the validity of the input and displays a validation message if the input is invalid.
- `SetCustomValidity` - Sets a custom validation message. If the provided message is not empty, the input will be marked as invalid.

### Slots

The `FileInput` component also exposes several slots that can be used to customize its appearance and behavior.

- `prefix` & `suffix` - Allow you to insert content before or after the main input area.
- `helper-text` - Displays a hint or instructional message below the input. Useful for providing additional guidance, such as formatting tips or field requirements.
- `file-selector-text` - Allow you to customizes the text displayed on the file selection button.
- `file-missing-text` - Sets the text shown in the input field when no file has been selected.
- `value-missing` - Renders custom content when the required field validation fails. (i.e., when a file is required but not provided).
- `invalid` – Allows you to render custom content when the input is in an invalid state.
- `custom-error` - Displays content when a custom validation message is set using the `setCustomValidity()` method.

`sample="/inputs/file-input/prefix-suffix", height="120", alt="{Platform} File Input Slots Example"`

## Integration

The `FileInput` component integrates seamlessly with the HTML Form element. Using the methods and properties described above, you can effectively manage its behavior and validation within the standard HTML Forms.

`sample="/inputs/file-input/form", height="190", alt="{Platform} File Input Form Example"`

## Limitations

The `FileInput` component currently has the following limitations:
- The default strings for the "Browse" button and the "No file chosen" message is not automatically localized. These strings remain the same across all locales but can be manually customized using the appropriate slots or placeholder binding.
- Files cannot be set manually through the `value` property. File selection can be done only via the file picker. You can however pass an empty string `''` to reset the field.

## Accessibility & ARIA Support

The `FileInput` component is both focusable and interactive, ensuring full keyboard and screen reader accessibility. The component can be labeled using the `Label` attribute, which leverages the native `<label>` element to provide a semantically correct and accessible label.

To support accessibility best practices, the component also applies relevant ARIA attributes:

- `aria-invalid` - Set to "true" when the input is in an invalid state.
- `aria-describedby` - Automatically linked to the helper text element when present, allowing assistive technologies to announce the additional information.

## Styling

The `FileInput` component exposes CSS parts which we can use for styling. The following table lists all of the exposed CSS parts:

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

`sample="/inputs/file-input/styling", height="120", alt="{Platform} File Input Styling"`

<div class="divider"></div>


## API References

- `FileInput`
- `Icon`
- `Input`
- `Button`
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
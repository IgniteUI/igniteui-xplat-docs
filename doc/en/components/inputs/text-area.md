---
title: {Platform} Text Area | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} Text Area is a component where the user can enter a sizable amount of free-form text.
_keywords: {ProductName}, UI controls, {Platform} widgets, Web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Input, {Platform} Textarea components, {Platform} Textarea controls
mentionedTypes: ["Input", "Icon", "Textarea", "Toast"]
_license: MIT
---
# {Platform} Text Area Overview

The {ProductName} Text Area represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text, for example a comment on a review or feedback form.

## {Platform} Text Area Example

<div class="divider--half"></div>

<!-- React, WebComponents, Blazor -->

`sample="/inputs/textarea/overview", height="150", alt="{Platform} Text Area Example"`

<!-- end:React, WebComponents, Blazor -->

## Dependencies

<!-- Blazor -->

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTextareaModule));
```

You will also need to link an additional CSS file to apply the styling to the `Textarea` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->
<!-- WebComponents -->

To get started we need to import the `Textarea` in our typescript file and register the component by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcTextareaComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcTextareaComponent);
```

For a complete introduction to the {ProductName}, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Textarea` and its necessary CSS like so:

```tsx
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

After we import the `Textarea` component we are ready to start using it, so let's add our first Text Area.

```html
<igc-textarea rows="5" label="Tell us your story:">It was a dark and stormy night...</igc-textarea>
```

```tsx
<IgrTextarea rows="5" label="Tell us your story:"><span>It was a dark and stormy night...</span></IgrTextarea>
```

```razor
<IgbTextarea Rows="5" Label="Tell us your story:">It was a dark and stormy night...</IgbTextarea>
```

## Prefix, Suffix &  Helper Text

With `prefix` and `suffix` slots we can add different content before and after the main content of the Text Area. The `helper-text` slot provides a hint placed below the Text Area. In the following sample we will create a new Text Area field with a text prefix, an icon suffix and a helper text as a hint:

`sample="/inputs/textarea/slots", height="160", alt="{Platform} Textarea Prefix & Suffix Example"`

## Text Area Resizing

There are three different resize options of the `Textarea`. When set to `none`, the text area does not resize and uses a scroll bar to show overflow text. When set to `vertical` (the default option), the text area lets the user resize it vertically. When set to `auto`, the text area shows all the user input at once. Overflow text wraps onto a new line and expands the text area automatically.

`sample="/inputs/textarea/resize", height="450", alt="{Platform} Textarea Resizing Example"`

<!-- WebComponents -->

The full list of attributes of the text area can be found in `Textarea` API.

<!-- end: WebComponents -->

## Form Integration

The sample below shows how a `Textarea` could be integrated into a form.

`sample="/inputs/textarea/form-integration", height="320", alt="{Platform} Textarea Form Integration Example"`

## Styling

The `Textarea` component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-textarea::part(input) {
  background-color: var(--ig-info-100);
  border-color: var(--ig-primary-400);
}

igc-textarea::part(label) {
  color: var(--ig-gray-800);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
  color: var(--ig-primary-500-contrast);
  border-color: var(--ig-primary-500);
  background-color: var(--ig-primary-500);
}
```

`sample="/inputs/textarea/styling", height="160", alt="{Platform} Text Area Styling"`

<div class="divider"></div>

## API References

- `Icon`
- `Textarea`
- `Toast`
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
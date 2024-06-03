---
title: {Platform} Text Area | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} Text Area is a component where the user can enter a sizeable amount of free-form text. Improve your application with {ProductName}!
_keywords: {Platform} input, {ProductName}, Infragistics
mentionedTypes: ['Input', 'Icon', 'Textarea', 'Toast']
---
# {Platform} Text Area Overview

The {ProductName} Text Area represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

## {Platform} Text Area Example

<div class="divider--half"></div>

<!-- React, WebComponents, Blazor -->

`sample="/inputs/textarea/overview", height="120", alt="{Platform} Text Area Example"`

<!-- end:React, WebComponents, Blazor -->


## Dependencies

To get started with the Text Area component, you first need to register its module.

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

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Textarea`, its necessary CSS, and register its module, like so:

```tsx
import { IgrTextareaModule, IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrTextareaModule.register();
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

`sample="/inputs/textarea/slots", height="120", alt="{Platform} Textarea Prefix & Suffix Example"`

## Text Area Resizing

There are three different resize options of the `Textarea`. When set to `none`, the text area does not resize and uses a scroll bar to show overflow text. When set to `vertical` (the default option), the text area lets the user resize it vertically. When set to `auto`, the textarea shows all the user input at once. Overflow text wraps onto a new line and expands the text area automatically.

`sample="/inputs/textarea/resize", height="320", alt="{Platform} Textarea Resizing Example"`

<!-- WebComponents -->

The full list of attributes of the text area can be found in `Textarea` API.

<!-- end: WebComponents -->

## Form Integration

The sample below shows how a `Textarea` could be integrated into a form.

`sample="/inputs/textarea/form-integration", height="320", alt="{Platform} Textarea Form Integration Example"`

## Styling

The Text Area component exposes CSS parts for almost all of its inner elements. The following table lists all CSS parts exposed by the Input:

|Name|Description|
|--|--|
| container | The main wrapper that holds all main input elements. |
| input | The native input element. |
| label | The native label element. |
| prefix | The prefix wrapper. |
| suffix | The suffix wrapper. |
| helper-text | The helper text wrapper. |

```scss
igc-textarea::part(input) {
    background-color: rgb(169, 214, 229);
    border-color: rgb(42, 111, 151);
}

igc-textarea::part(label) {
    color: rgb(1, 42, 74);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
    color: white;
    border-color: rgb(42, 111, 151);
    background-color: rgb(70, 143, 175);
}
```

`sample="/inputs/textarea/styling", height="150", alt="{Platform} Text Area Styling"`



<div class="divider"></div>


## API References

 - `Icon`
 - `Textarea`
- `Toast`


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
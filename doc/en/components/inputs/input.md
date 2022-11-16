---
title: {Platform} Input | Data Visualization Tools | Infragistics
_description: Infragistics' {Platform} input is a component where the user can enter data. Improve your application with Ignite UI for {Platform}!
_keywords: {Platform} input, {ProductName}, Infragistics
mentionedTypes: ['Input', 'Icon', 'Radio']
---
# {Platform} Input Overview

The {ProductName} Input is a component where the user can enter data.

## {Platform} Input Example

<div class="divider--half"></div>

<!-- React, WebComponents -->

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-overview"
           alt="{Platform} Input Example"
           github-src="inputs/input/overview">
</code-view>

<!-- end:React, WebComponents -->

<!-- Blazor -->

<code-view style="height: 225px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-binding"
           alt="{Platform} Input Example"
           github-src="inputs/input/binding">
</code-view>

## Dependencies

To get started with the Input component, you first need to register its module.

<!-- Blazor -->


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbInputModule));
```

You will also need to link an additional CSS file to apply the styling to the `Input` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

<!-- WebComponents -->

To get started we need to import the `Input` in our typescript file and register the component by calling the [defineComponents()]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcInputComponent);
```

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Input`, its necessary CSS, and register its module, like so:

```tsx
import { IgrInputModule, IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrInputModule.register();
```
<!-- end: React -->

After we import the `Input` component we are ready to start using it, so let's add our first Input.

```tsx
<IgrInput type="email" label="Subscribe"></IgrInput>
```

```html
<igc-input type="email" label="Subscribe" placeholder="john.doe@mail.com"></igc-input>
```

```razor
<IgbInput DisplayType="@InputType.Email" Label="Subscribe" Placeholder="john.doe@mail.com" />
```

## Prefix & Suffix

With `prefix` and `suffix` slots we can add different content before and after the main content of the Input. In the following sample we will create a new Input field with a text prefix and an icon suffix:

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-prefix-suffix"
           alt="{Platform} Input Prefix & Suffix Example"
           github-src="inputs/input/prefix-suffix">
</code-view>

## Helper Text

The `helper-text` slot provides a hint placed below the Input. Let's add some helper text to our phone Input:

<code-view style="height: 140px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-helper-text"
           alt="{Platform} Input Helper Text Example"
           github-src="inputs/input/helper-text">
</code-view>

## Input Sizing

We can allow the user to choose the size of the `Input` by using its `Size` property. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the Input:

<code-view style="height: 320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-size"
           alt="{Platform} Input Sizing Example"
           github-src="inputs/input/size">
</code-view>

In the sample above we have demonstrated the use of the following attributes:
- `required` - Used to mark the input as required
- `disabled` - Used to disable the input
- `readonly` - Used to mark the input as readonly

<!-- WebComponents -->

The full list of attributes can be found in `Input` API.

<!-- end: WebComponents -->

## Styling

The Input component exposes CSS parts for almost all of its inner elements. The following table lists all CSS parts exposed by the Input:

|Name|Description|
|--|--|
| container | The main wrapper that holds all main input elements. |
| input | The native input element. |
| label | The native label element. |
| prefix | The prefix wrapper. |
| suffix | The suffix wrapper. |
| helper-text | The helper text wrapper. |

```scss
igc-input::part(input){
    background-color: rgb(169, 214, 229);
    border-color: rgb(42, 111, 151);
}

igc-input::part(label){
    color: rgb(1, 42, 74);
}

igc-input::part(prefix),
igc-input::part(suffix){
    color: white;
    border-color: rgb(42, 111, 151);
    background-color: rgb(70, 143, 175);
}
```

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-styling"
           alt="{Platform} Input Styling"
           github-src="inputs/input/styling">
</code-view>

<!-- WebComponents -->

## API References

For more detailed information regarding the Input's API, refer to the following links:
* `Input`

Additional components and/or directives that were used:
* `Icon`
* `Radio`

<!-- end: WebComponents -->

<div class="divider"></div>

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

<!-- React -->
* [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
<!-- end: React -->

## API Members

 - `Icon`
 - `Input`
 - `Radio`
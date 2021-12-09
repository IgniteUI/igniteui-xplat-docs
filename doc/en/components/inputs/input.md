---
title: $Platform$ Input | Data Visualization Tools | Infragistics
_description: Infragistics' $Platform$ input is a component where the user can enter data. Improve your application with Ignite UI for $Platform$!
_keywords: $Platform$ input, $ProductName$, Infragistics
mentionedTypes: ['Input']
---
# $Platform$ Input Overview

The $ProductName$ Input is a component where the user can enter data.

## $Platform$ Input Example

<div class="divider--half"></div>

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-overview"
           alt="$Platform$ Input Example"
           github-src="inputs/input/overview">
</code-view>

## Dependencies

<!-- Blazor -->

To get started with the Input component, you first need to register its module.

```razor
IgbInputModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<div class="divider--half"></div>

<!-- WebComponents -->

To get started we need to import the `Input` in our typescript file and register the component by calling the [`defineComponents()`]({environment:wcApiUrl}/index.html#defineComponents) function as follows:

```ts
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);
```

<!-- end: WebComponents -->

After we import the `Input` component we are ready to start using it, so let's add our first Input.

```html
<igc-input type="email" label="Subscribe" placeholder="john.doe@mail.com"></igc-input>
```

## Prefix & Suffix

With `prefix` and `suffix` slots we can add different content before and after the main content of the Input. In the following sample we will create a new Input field with a text prefix and an icon suffix:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-prefix-suffix"
           alt="$Platform$ Input Prefix & Suffix Example"
           github-src="inputs/input/prefix-suffix">
</code-view>

## Helper Text

The `helper-text` slot provides a hint placed below the Input. Let's add a helper text to our phone Input:

<code-view style="height: 140px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-helper-text"
           alt="$Platform$ Input Helper Text Example"
           github-src="inputs/input/helper-text">
</code-view>

## Input Sizing

We can allow the user to choose the size of the `Input` by using its `Size` property. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the Input:

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/input-size"
           alt="$Platform$ Input Sizing Example"
           github-src="inputs/input/size">
</code-view>

In the sample above we have demonstrated the use of the following attributes:
- `required` - Used to mark the input as required
- `disabled` - Used to disable the input
- `readonly` - Used to mark the input as readonly

The full list of attributes can be found in `Input` API.

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
           alt="$Platform$ Input Styling"
           github-src="inputs/input/styling">
</code-view>

## API References

For more detailed information regarding the Input's API, refer to the following links:
* `Input`

Additional components and/or directives that were used:
* `Icon`
* `Radio`

<div class="divider"></div>
## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [$Platform$ **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
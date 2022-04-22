---
title: $Platform$ Linear Progress | Linear Progress | Infragistics
_description: Display a progress bar and customize its appearance with endless color and striping options with Linear Progress Indicator component.
_keywords: $Platform$ Linear Progress, $ProductName$, Infragistics
mentionedTypes: ['LinearProgress']
---

# $Platform$ Linear Progress Overview
The $ProductName$ Linear Progress Indicator component provides a visual indicator of an application’s process as it changes. The `LinearProgress` indicator updates its appearance as its state changes. Also, you can style this component with a choice of colors in stripes or solids.

## $Platform$ Linear Progress Example

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-simple"
           alt="$Platform$  Linear Progress Example"
           github-src="inputs/linear-progress-indicator/simple">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `LinearProgress`, you need to register it as follows:

```razor
IgbLinearProgressModule.Register(IgniteUIBlazor);
```

```ts
import {defineComponents, IgcLinearProgressComponent} from 'igniteui-webcomponents';

defineComponents(IgcLinearProgressComponent);
```

<!-- Blazor -->
You will also need to link an additional CSS file to apply the styling to the `Calendar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->


The simplest way to start using the `LinearProgress` is as follows:

```html
<igc-linear-progress value="100"></igc-linear-progress>
```

```razor
<IgbLinearProgress Value=100 />
```

### Progress Types

You can set the type of your indicator, using  the `variant` attribute. There are five types of linear progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```html
<igc-linear-progress value="100" variant="success"></igc-linear-progress>
```

```razor
<IgbLinearProgress Value=100 Variant=@ProgressBaseVariant.Success />
```

### Striped Progress

You can make the indicator striped, using the `striped` property:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-types"
           alt="$Platform$  Linear Progress Striped Example"
           github-src="inputs/linear-progress-indicator/types">
</code-view>

<div class="divider--half"></div>

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the `indeterminate` property.

### Animation Duration

The `animationDuration` property is used to specify how long the animation cycle should take. It takes as value a number which represents the animation duration in milliseconds.

```html
<igc-linear-progress animation-duration="5000" indeterminate></igc-linear-progress>
```

```razor
<IgbLinearProgress AnimationDuration=5000 Indeterminate=true />
```

### Text Properties

You can align the default value, using the `labelAlign` property. Permitted values are **top**, **bottom**, **top-start**, **top-end**, **bottom-start** and **bottom-end**. 

To hide the default label of the progress indicator, use the `hideLabel` attribute.

The `labelFormat` property can be used to customize the `LinearProgress` default label.

The following sample demonstrates the above configuration:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-striped"
           alt="$Platform$ Linear Progress Text Example"
           github-src="inputs/linear-progress-indicator/striped">
</code-view>

<div class="divider--half"></div>

### Dynamic Progress

You can dynamically change the value of the progress indicator by using external controls like buttons. To achieve this, we can bind the value to a class property:

<code-view style="height:200px" 
            data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-dynamic"
           alt="$Platform$ Linear Progress Dynamic Example"
           github-src="inputs/linear-progress-indicator/dynamic">
</code-view>

<div class="divider--half"></div>

## Styling

The Linear Procress Indicator component exposes CSS parts for almost all of its inner elements.

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/linear-progress-indicator-styling"
           alt="$Platform$ Linear Progress Styling"
           github-src="inputs/linear-progress-indicator/styling">
</code-view>

The following table lists all CSS parts exposed by the Linear Progress:

|Name|Description|
|--|--|
| track         | The progress ring's track area. |
| fill          | The progress indicator area. |
| striped       | The progress striped indicator. |
| label         | The progress indicator label. |
| value         | The progress label value. |
| indeterminate | The progress indeterminate state. |
| primary       | The progress indicator primary state. |
| danger        | The progress indicator error state. |
| warning       | The progress indicator warning state. |
| info          | The progress indicator info state. |
| success       | The progress indicator success state. |
| top           | The progress label position. |
| top-start     | The progress label position. |
| top-end       | The progress label position. |
| bottom        | The progress label position. |
| bottom-start  | The progress label position. |
| bottom-end    | The progress label position. |

<!-- WebComponents -->

## API References

For more detailed information regarding the Linear Progress Indicator's API, refer to the following links:
* `LinearProgress`

Additional components and/or directives that were used:
* `Button`

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

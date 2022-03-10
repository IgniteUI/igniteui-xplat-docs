---
title: $Platform$ Linear Progress | Linear Progress | Infragistics
_description: Display a progress bar and customize its appearance with endless color and striping options with Linear Progress Indicator component.
_keywords: $Platform$ Linear Progress, $ProductName$, Infragistics
mentionedTypes: ['LinearProgress']
---

# $Platform$ Linear Progress Overview
The $ProductName$ Linear Progress Indicator component provides a visual indicator of an application’s process as it changes. The indicator updates its appearance as its state changes. The indicator can be styled with a choice of colors in stripes or solids.

## $Platform$ Linear Progress Example

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/linear-progress-overview"
           alt="$Platform$  Linear Progress Example"
           github-src="linear-progress/overview">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `LinearProgress`, you need to register it as follows:


```ts
import {defineComponents, IgcLinearProgressComponent} from 'igniteui-webcomponents';

defineComponents(IgcLinearProgressComponent);
```
<!-- end: WebComponents -->

The simplest way to start using the `LinearProgress` is as follows:

```html
<igc-linear-progress value="100"></igc-linear-progress>
```

### Progress Types

You can set the type of your indicator, using  `variant` attribute. There are five types of linear progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

### Striped Progress

You can make the indicator striped, using the `striped` property and setting it to `true`:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/linear-progressbar-sample-1"
           alt="$Platform$  Linear Progress Striped Example"
           github-src="linear-progress/linear-progressbar-sample-1">
</code-view>

<div class="divider--half"></div>

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the `indeterminate` property to `true`.

### Animation Duration

The `animationDuration` property is used to specify how long the animation cycle should take. It takes as value a number which represents the animation duration in milliseconds.

### Text Properties

You can align the value, using the `labelAlign` property. Permitted values are **top**, **bottom**, **top-start**, **top-end**, **bottom-start** and **bottom-end**. 

To hide the value of the progress indicator, use the `hideLabel` property and set its value to `true`.

The `labelFormat` property can be used to customize the $ProductName$ `LinearProgress` default label.

The following sample demonstrates the above configuration:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/linear-progressbar-sample-2"
           alt="$Platform$ Linear Progress Text Example"
           github-src="linear-progress/linear-progressbar-sample-2">
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> By design the progress update is **1% of the `max` value**. 

### Dynamic Progress

You can dynamically change the value of the progress indicator by using external controls like buttons. To achieve this, we can bind the value to a class property:

<code-view style="height:200px" 
            data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/linear-progressbar-sample-3"
           alt="$Platform$ Linear Progress Dynamic Example"
           github-src="linear-progress/linear-progressbar-sample-3">
</code-view>

<div class="divider--half"></div>

## Styling

The Linear Procress Indicator component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| track | The progress ring's track area. |
| fill | The progress indicator area. |
| striped | The progress striped indicator. |
| label | The progress indicator label. |
| value | The progress label value. |
| indeterminate | The progress indeterminate state. |
| primary | The progress indicator primary state. |
| danger | The progress indicator error state. |
| warning | The progress indicator warning state. |
| info | The progress indicator info state. |
| success | The progress indicator success state. |
| top | The progress label position. |
| top-start | The progress label position. |
| top-end | The progress label position. |
| bottom | The progress label position. |
| bottom-start | The progress label position. |
| bottom-end | The progress label position. |

Using these CSS parts we can customize thе appearance of the Linear Progress Indicator component like this:

```scss
igc-linear-progress::part(track){
    background-color: #D3D3D3;
}

igc-linear-progress::part(fill){
    background-color: #ECAA53;
}

igc-linear-progress::part(label){
    color: #ECAA53;
}
```

<code-view style="height: 50px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/linear-progress-styling"
           alt="$Platform$ Linear Progress Styling"
           github-src="linear-progress/linear-progress-styling">
</code-view>

<!-- WebComponents -->

## API References

For more detailed information regarding the Linear Progress Indicator's API, refer to the following links:
* `LinearProgress`

Additional components and/or directives that were used:
* `Button`

<!-- end: WebComponents -->

<div class="divider"></div>

## Additional Resources

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->
---
title: $Platform$ Circular Progress | Circular Progress | Infragistics
_description: Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: $Platform$ Circular Progress, $ProductName$, Infragistics
mentionedTypes: ['CircularProgress', 'CircularGradient']
---

# $Platform$ Circular Progress Overview
The $ProductName$ Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.

## $Platform$ Circular Progress Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/circular-progress-indicator-simple"
           alt="$Platform$ Circular Progress Example"
           github-src="inputs/circular-progress-indicator/simple">
</code-view>

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `CircularProgress`, you need to register it as follows:


```ts
import {defineComponents, IgcCircularProgressComponent} from 'igniteui-webcomponents';

defineComponents(IgcCircularProgressComponent);
```

The simplest way to start using the `CircularProgress` is as follows:

```html
<igc-circular-progress value="100"></igc-circular-progress>
```

### Progress Types

You can set the type of your indicator, using the  `variant` attribute. There are five types of circular progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.


```html
<igc-circular-progress value="100" variant="success"></igc-circular-progress>
```

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the `indeterminate` property. Also, you can hide the default label of the $ProductName$ `CircularProgress` by setting the `hideLabel` property and customize the progress indicator default label via the exposed `labelFormat` property.

The following sample demonstrates the above configuration:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/circular-progress-indicator-indeterminate"
           alt="$Platform$ Circular Progress Indeterminate Example"
           github-src="inputs/circular-progress-indicator/indeterminate">
</code-view>

<div class="divider--half"></div>

### Animation Duration

You can use the `animationDuration` property on the `CircularProgress` component to specify how long the animation cycle should take in milliseconds.


```html
<igc-circular-progress animation-duration="5000" indeterminate></igc-circular-progress>
```

### Gradient Progress

Customizing the progress bar in order to use a color gradient instead of a solid color could be done via the exposed `gradient` slot and `CircularGradient` which defines the gradient stops. 

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/circular-progress-indicator-dynamic"
           alt="$Platform$ Circular Progress Dynamic Example"
           github-src="inputs/circular-progress-indicator/dynamic">
</code-view>

>[!NOTE]
>For each `CircularGradient` defined as gradient slot of $ProductName$ `CircularProgress` a [SVG stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) element would be created. The values passed as `color`, `offset` and `opacity` would be set as stop-color, offset and stop-opacity of the SVG element without further validations.

<!-- WebComponents -->
```html
<igc-circular-progress> 
    <igc-circular-gradient slot="gradient" offset="0%" color="#ff9a40"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="50%" color="#1eccd4"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="100%" color="#ff0079"></igc-circular-gradient>
</igc-circular-progress>
```
<!-- end: WebComponents -->

<div class="divider--half"></div>

## Styling

The $ProductName$ Circular Procress Indicator component exposes CSS parts for almost all of its inner elements.

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/circular-progress-indicator-styling"
           alt="$Platform$ Circular Progress Styling"
           github-src="inputs/circular-progress-indicator/styling">
</code-view>

The following table lists all CSS parts exposed by the Circular Progress:

|Name|Description|
|--|--|
| svg                | The progress SVG element.                 |
| gradient_start     | The progress linear-gradient start color. |
| gradient_end       | The progress linear-gradient end color.   |
| track              | The progress ring's track area.           |
| fill               | The progress indicator area.              |
| label              | The progress label.                       |
| value              | The progress label value.                 |
| indeterminate      | The progress indeterminate state.         |
| primary            | The progress indicator primary state.     |
| danger             | The progress indicator error state.       |
| warning            | The progress indicator warning state.     |
| info               | The progress indicator info state.        |
| success            | The progress indicator success state.     |

<!-- WebComponents -->

## API References

For more detailed information regarding the Circular Progress Indicator's API, refer to the following links:
* `CircularProgress`

Additional components and/or directives that were used:
* `CircularGradient`
* `Button`

<!-- end: WebComponents -->

<div class="divider"></div>

## Additional Resources

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

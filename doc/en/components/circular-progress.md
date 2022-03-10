---
title: $Platform$ Circular Progress | Circular Progress | Infragistics
_description: Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: $Platform$ Circular Progress, $ProductName$, Infragistics
mentionedTypes: ['CircularProgress']
---

# $Platform$ Circular Progress Overview
The $ProductName$ Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.

## $Platform$ Circular Progress Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/circular-progress-overview"
           alt="$Platform$ Circular Progress Example"
           github-src="circular-progress/overview">
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

> [!NOTE]
> The default progress increments by **1% of the `max` value** per update cycle.

### Progress Types

You can set the type of your indicator, using  `variant` attribute. There are five types of circular progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can enable the `indeterminate`.

>[!NOTE]
>You can hide the label of the $ProductName$ `CircularProgress` by setting the `hideLabel` property value to `true` and customize the progress indicator default label via the exposed `labelFormat` property.

The following sample demonstrates the above configuration:

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/circular-indeterminate-progressbar"
           alt="$Platform$ Circular Progress Indeterminate Example"
           github-src="circular-progress/circular-indeterminate-progressbar">
</code-view>

<div class="divider--half"></div>

### Animation Duration

The `animationDuration` property is used to specify how long the animation cycle should take. It takes as value a number which represents the animation duration in milliseconds.

### Dynamic Progress

You can dynamically change the value of the progress by using external controls like buttons.


### Gradient Progress

Customizing the progress bar in order to use a color gradient instead of a solid color could be done via the exposed `gradient` slot and `CircularGradient` which define gradient stops. 

>[!NOTE]
>For each `CircularGradient` defined as gradient slot of $ProductName$ `CircularProgress` element a [SVG stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) element would be created. The values passed as `color`, `offset` and `opacity` would be set as stop-color, offset and stop-opacity of the SVG element without further validations.

<!-- WebComponents -->
```html
<igc-circular-progress> 
    <igc-circular-gradient slot="gradient" offset="0%" color="#ff9a40"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="50%" color="#1eccd4"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="100%" color="#ff0079"></igc-circular-gradient>
</igc-circular-progress>
```
<!-- end: WebComponents -->

After reproducing the steps above, you should get this as a result:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/circular-dynamic-sample"
           alt="$Platform$ Circular Progress Dynamic Example"
           github-src="circular-progress/circular-dynamic-sampler">
</code-view>

<div class="divider--half"></div>

## Styling

The $ProductName$ Circular Procress Indicator component exposes CSS parts for almost all of its inner elements:

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

Using these CSS parts we can customize thе appearance of the Circular Progress Indicator component like this:

```scss

```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/circular-progress-styling"
           alt="$Platform$ Circular Progress Styling"
           github-src="circular-progress/circular-progress-styling">
</code-view>

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

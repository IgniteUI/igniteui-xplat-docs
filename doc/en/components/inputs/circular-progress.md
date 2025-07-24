---
title: {Platform} Circular Progress | Circular Progress | Infragistics
_description: Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: {Platform} Circular Progress, {ProductName}, Infragistics
mentionedTypes: ["CircularProgress", "CircularGradient"]
namespace: Infragistics.Controls
---

# {Platform} Circular Progress Overview
The {ProductName} Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.

## {Platform} Circular Progress Example

`sample="/inputs/circular-progress-indicator/simple", height="150", alt="{Platform} Circular Progress Example"`

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

You will then need to import the `CircularProgress`, its necessary CSS, and register its module, like so:

```ts
import {defineComponents, IgcCircularProgressComponent} from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCircularProgressComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `CircularProgress`, its necessary CSS, and register its module, like so:

```tsx
import { IgrCircularProgressModule, IgrCircularProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrCircularProgressModule.register();
```
<!-- end: React -->

<!-- Blazor -->

Before using the `CircularProgress`, you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCircularProgressModule));
```

You will also need to link an additional CSS file to apply the styling to the `Calendar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

The simplest way to start using the `CircularProgress` is as follows:

```html
<igc-circular-progress value="100"></igc-circular-progress>
```

```tsx
<IgrCircularProgress value="100"></IgrCircularProgress>
```

```razor
<IgbCircularProgress Value=100/>
```

### Progress Types

You can set the type of your indicator, using the `Variant` attribute. There are five types of circular progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```tsx
<IgrCircularProgress value="100" variant="success"></IgrCircularProgress>
```

```html
<igc-circular-progress value="100" variant="success"></igc-circular-progress>
```

```razor
<IgbCircularProgress Value=100 Variant=@ProgressBaseVariant.Success  />
 ```

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the `Indeterminate` property. Also, you can hide the default label of the {ProductName} `CircularProgress` by setting the `HideLabel` property and customize the progress indicator default label via the exposed `LabelFormat` property.

```tsx
<IgrCircularProgress value="100" indeterminate="true"></IgrCircularProgress>
```

```html
<igc-circular-progress value="100" indeterminate="true"></igc-circular-progress>
```

```razor
<IgbCircularProgress Value=100 Indeterminate=true/>
```

The following sample demonstrates the above configuration:

`sample="/inputs/circular-progress-indicator/indeterminate", height="150", alt="{Platform} Circular Progress Indeterminate Example"`



<div class="divider--half"></div>

### Animation Duration

You can use the `AnimationDuration` property on the `CircularProgress` component to specify how long the animation cycle should take in milliseconds.

```tsx
<IgrCircularProgress animationDuration="5000" indeterminate="true"></IgrCircularProgress>
```

```html
<igc-circular-progress animation-duration="5000" indeterminate></igc-circular-progress>
```

```razor
<IgbCircularProgress AnimationDuration=5000 Indeterminate=true />
```

### Gradient Progress

Customizing the progress bar in order to use a color gradient instead of a solid color could be done via the exposed `gradient` slot and `CircularGradient` which defines the gradient stops.

`sample="/inputs/circular-progress-indicator/dynamic", height="200", alt="{Platform} Circular Progress Dynamic Example"`



> [!Note]
>For each `CircularGradient` defined as gradient slot of {ProductName} `CircularProgress` a [SVG stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) element would be created. The values passed as `color`, `offset` and `opacity` would be set as stop-color, offset and stop-opacity of the SVG element without further validations.

```tsx
<IgrCircularProgress >
    <IgrCircularGradient slot="gradient" offset="0%" color="#ff9a40">
    </IgrCircularGradient>
    <IgrCircularGradient slot="gradient" offset="50%" color="#1eccd4">
    </IgrCircularGradient>
    <IgrCircularGradient slot="gradient" offset="100%" color="#ff0079">
    </IgrCircularGradient>
</IgrCircularProgress>
```

```html
<igc-circular-progress>
    <igc-circular-gradient slot="gradient" offset="0%" color="#ff9a40"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="50%" color="#1eccd4"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="100%" color="#ff0079"></igc-circular-gradient>
</igc-circular-progress>
```

```razor
<IgbCircularProgress>
    <IgbCircularGradient slot="gradient" Offset="0%"   Color="#ff9a40"/>
    <IgbCircularGradient slot="gradient" Offset="50%"  Color="#1eccd4"/>
    <IgbCircularGradient slot="gradient" Offset="100%" Color="#ff0079"/>
</IgbCircularProgress>
```

<div class="divider--half"></div>

## Styling

The `CircularProgress` component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `svg`               | The progress SVG element.                 |
| `gradient_start`     | The progress linear-gradient start color. |
| `gradient_end`       | The progress linear-gradient end color.   |
| `track`              | The progress ring's track area.           |
| `fill`               | The progress indicator area.              |
| `label`              | The progress label.                       |
| `value`              | The progress label value.                 |
| `indeterminate`      | The progress indeterminate state.         |
| `primary`            | The progress indicator primary state.     |
| `danger`             | The progress indicator error state.       |
| `warning`            | The progress indicator warning state.     |
| `info`               | The progress indicator info state.        |
| `success`            | The progress indicator success state.     |

Using this CSS parts we have almost full control over the Circular Progress styling.

```css

igc-circular-progress {
  margin: 20px;
  --diameter: 50px;
}

igc-circular-progress::part(gradient_end),
igc-circular-progress::part(gradient_start) {
  stop-color: var(--ig-success-200);
}

igc-circular-progress::part(track) {
  stroke: var(--ig-gray-400);
}

```

`sample="/inputs/circular-progress-indicator/styling", height="150", alt="{Platform} Circular Progress Styling"`


## API References

 - `Button`
 - `Calendar`
 - `CircularGradient`
 - `CircularProgress`
 - [`Styling & Themes`](../themes/overview.md)


## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

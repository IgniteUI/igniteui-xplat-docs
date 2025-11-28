---
title: {Platform} Linear Progress | Linear Progress | Infragistics
_description: Display a progress bar and customize its appearance with endless color and striping options with Linear Progress Indicator component.
_keywords: {Platform} Linear Progress, {ProductName}, Infragistics
_license: MIT
mentionedTypes: ["LinearProgress"]
---

# {Platform} Linear Progress Overview

The {ProductName} Linear Progress Indicator component provides a visual indicator of an application’s process as it changes. The `LinearProgress` indicator updates its appearance as its state changes. Also, you can style this component with a choice of colors in stripes or solids.

## {Platform} Linear Progress Example

`sample="/inputs/linear-progress-indicator/simple", height="80", alt="{Platform} Linear Progress Example"`

<div class="divider--half"></div>

## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `LinearProgress`, you need to register it as follows:

```ts
import {defineComponents, IgcLinearProgressComponent} from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcLinearProgressComponent);
```

For a complete introduction to the {ProductName}, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `LinearProgress`, its necessary CSS, and register its module, like so:

```tsx
import { IgrLinearProgressModule, IgrLinearProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrLinearProgressModule.register();
```
<!-- end: React -->

<!-- Blazor -->
Before using the `LinearProgress`, you need to register it as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbLinearProgressModule));
```

You will also need to link an additional CSS file to apply the styling to the `Calendar` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->


The simplest way to start using the `LinearProgress` is as follows:

```html
<igc-linear-progress value="100"></igc-linear-progress>
```

```tsx
<IgrLinearProgress value="100"></IgrLinearProgress>
```

```razor
<IgbLinearProgress Value=100 />
```

### Progress Types

You can set the type of your indicator, using  the `Variant` attribute. There are five types of linear progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```tsx
<IgrLinearProgress value="100" variant="success"></IgrLinearProgress>
```

```html
<igc-linear-progress value="100" variant="success"></igc-linear-progress>
```

```razor
<IgbLinearProgress Value=100 Variant=@ProgressBaseVariant.Success />
```

### Striped Progress

You can make the indicator striped, using the `Striped` property:

`sample="/inputs/linear-progress-indicator/types", height="250", alt="{Platform} Linear Progress Striped Example"`



<div class="divider--half"></div>

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the `Indeterminate` property.

### Animation Duration

The `AnimationDuration` property is used to specify how long the animation cycle should take. It takes as value a number which represents the animation duration in milliseconds.

```tsx
<IgrLinearProgress animationDuration="5000" indeterminate="true"></IgrLinearProgress>
```

```html
<igc-linear-progress animation-duration="5000" indeterminate></igc-linear-progress>
```

```razor
<IgbLinearProgress AnimationDuration=5000 Indeterminate=true />
```

### Text Properties

You can align the default value, using the `LabelAlign` property. Permitted values are **top**, **bottom**, **top-start**, **top-end**, **bottom-start** and **bottom-end**.

To hide the default label of the progress indicator, use the `HideLabel` attribute.

The `LabelFormat` property can be used to customize the `LinearProgress` default label.

The following sample demonstrates the above configuration:

`sample="/inputs/linear-progress-indicator/striped", height="200", alt="{Platform} Linear Progress Text Example"`



<div class="divider--half"></div>

### Dynamic Progress

You can dynamically change the value of the progress indicator by using external controls like buttons. To achieve this, we can bind the value to a class property:

`sample="/inputs/linear-progress-indicator/dynamic", height="200", alt="{Platform} Linear Progress Dynamic Example"`



<div class="divider--half"></div>

## Styling

The `LinearProgress` component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `track`         | The progress ring's track area. |
| `fill`          | The progress indicator area. |
| `striped`       | The progress striped indicator. |
| `label`         | The progress indicator label. |
| `value`         | The progress label value. |
| `indeterminate` | The progress indeterminate state. |
| `primary`       | The progress indicator primary state. |
| `danger`        | The progress indicator error state. |
| `warning`       | The progress indicator warning state. |
| `info`          | The progress indicator info state. |
| `success`       | The progress indicator success state. |

Using this CSS parts we have almost full control of the Linear Progress styling.

`sample="/inputs/linear-progress-indicator/styling", height="80", alt="{Platform} Linear Progress Styling"`

```css
igc-linear-progress::part(track){
  background-color: var(--ig-gray-300)
}

igc-linear-progress::part(fill){
  background-color: var(--ig-primary-300)
}

igc-linear-progress::part(label){
  color: var(--ig-primary-300)
}
```

## API References

- `Button`
- `Calendar`
- `LinearProgress`
- [`Styling & Themes`](../themes/overview.md)


## Additional Resources

- [{ProductName} **Forums**]({ForumsLink})
- [{ProductName} **GitHub**]({GithubLink})
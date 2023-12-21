---
title: {Platform} Slider & Range Slider Components | {ProductName}
_description: Learn how to configure a selection in a given range by using the thumb track with {Platform} Slider & Range Slider part of {ProductName}. Choose between single and range slider.
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Slider Components, Infragistics
mentionedTypes: ['Slider', 'SliderLabel', 'RangeSlider']
---

# {Platform} Slider & Range Slider Overview

The {Platform} Slider & Range Slider components allow selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider.

## {Platform} Slider & Range Slider Example

`sample="/inputs/slider/overview", height="200", alt="{Platform} Slider Example"`



## Usage

<!-- WebComponents -->
First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Slider` and `RangeSlider`, you need to register them as follows:

```ts
import { defineComponents, IgcSliderComponent, IgcRangeSliderComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSliderComponent, IgcRangeSliderComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the `Slider` and `RangeSlider`, its necessary CSS, and register its module, like so:

```tsx
import { IgrSliderModule, IgrSlider, IgrRangeSlider, IgrRangeSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
IgrSliderModule.register();
IgrRangeSliderModule.register();
```
<!-- end: React -->

<!-- Blazor -->
Before using the `Slider` and `RangeSlider`, you need to register them as follows:


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbSliderModule),
  typeof(IgbRangeSliderModule)
);
```

<!-- end: Blazor -->

The simplest way to start using the `Slider` and `RangeSlider` is as follows:

```html
<igc-slider value="40"></igc-slider>
<igc-range-slider lower="20" upper="70"></igc-range-slider>
```

```tsx
 <IgrSlider value="40" />
    <span className="slider-label"></span>
<IgrRangeSlider lower="20" upper="70"></IgrRangeSlider>
```

```razor
<IgbSlider Value="40" />
<IgbRangeSlider Lower="20" Upper="70" />
```

### Value

The main difference between the Slider and Range Slider components is that the Slider component has a single thumb, while the Range Slider component has two thumbs. The single thumb of the Slider component displays its `Value` property. The two thumbs of the Range Slider component display its `Lower` and `Upper` value properties.

Both sliders emit two events when any of the values is changed. The `Input` event is emitted whenever a value is changed using keyboard or drag interaction while the `igcChange` event is emitted when the value change is committed on drag end or keyboard interaction.

`sample="/inputs/slider/value", height="250", alt="{Platform} Slider Value Example"`



While dragging a slider thumb, it displays its value in a tooltip. You could hide this tooltip using the `HideTooltip` property.

### Disabled

You can use the `Disabled` property of the sliders to disable their user interactions.

`sample="/inputs/slider/disabled", height="120", alt="{Platform} Slider Disabled Example"`



### Constraints

The track of the sliders has a minimum and maximum values which are configured using the `Min` and `Max` properties. Additionally, you can restrict the thumb dragging using the `LowerBound` and `UpperBound` properties.

`sample="/inputs/slider/constraints", height="120", alt="{Platform} Slider Constraints Example"`



### Step

The `Step` property specifies the granularity of the slider that the value must adhere to. By default, the slider track looks continuous. Setting the `DiscreteTrack` property of the slider to **true** will make it to display the steps on the track.

`sample="/inputs/slider/discrete", height="120", alt="{Platform} Slider Discrete Track Example"`



If the `Step` property is set to `0`, no stepping is implied and any value in the slider range is allowed. In this case, the slider will look continuous even if `DiscreteTrack` is set to **true**.

### Tick Marks

The slider components could display tick marks and labels. The slider components support two types of tick marks: primary and secondary. In order to display the primary tick marks, you should set the `PrimaryTicks` property to a value greater than `1`. The number of primary ticks will be evenly distributed on the track. In order to display the secondary tick marks, you should set the `SecondaryTicks` property to a value greater than `0`. The value of `SecondaryTicks` specifies the number of secondary ticks between every two primary ticks.

`sample="/inputs/slider/ticks", height="150", alt="{Platform} Slider Tick Marks Example"`



Additionally, you could configure the orientation of the tick marks using the `TickOrientation` property. By default, the `TickOrientation` value is `end` which displays the ticks below the slider track. You could set it to `start` which displays them above the track and `mirror` which mirrors the ticks above and below the track.

By default, the tick marks display labels with their values. You could modify the rotation of the tick labels using the `TickLabelRotation` property. Additionally, you could hide the labels of the primary and secondary ticks using the `HidePrimaryLabels` and `HideSecondaryLabels` properties.

`sample="/inputs/slider/tick-labels", height="150", alt="{Platform} Slider Tick Mark Labels Example"`



### Value Format

If you want to format the thumb and tick label values, the slider provides `ValueFormat`, `ValueFormatOptions` and `Locale` properties. Тhe `ValueFormatOptions` allows you to specify the number of fraction and significant digits, style (decimal, currency, percent, unit), notation and others taking into account the specified `Locale`. The `ValueFormat` is a string which may contain the `{0}` identifier which will be replaced by the value with applied format options.

`sample="/inputs/slider/value-format", height="230", alt="{Platform} Slider Value Format Example"`



### Labels

In some cases you would want to format the values of the slider as string values i.e. map the values **[0, 1, 2]** to **['Low', 'Medium', 'High']**. For this scenario the slider allows you to define `SliderLabel` elements inside it. The text content of the slider labels is going to be used for thumb and tick labels. Please note that when slider labels are provided, the `Min`, `Max` and `Step` properties are automatically calculated so that they do not allow values that do not map to the provided labels. In the case of 'Low', 'Medium' and 'High' labels, `Min` is set to `0`, `Max` is set to `2` and `Step` is set to `1`.

`sample="/inputs/slider/labels", height="150", alt="{Platform} Slider Labels Example"`



## Styling

The slider components expose CSS parts for their inner elements. The following table lists all CSS parts:

|Name|Description|
|--|--|
| base | The base wrapper of the slider. |
| ticks | The ticks container. |
| tick-group | The tick group container. |
| tick | The tick element. |
| tick-label | The tick label element. |
| tick-label-inner | The inner element of the tick label. |
| thumbs | The thumbs container. |
| thumb | The thumb element. |
| thumb-label | The label container of the thumb tooltip. |
| thumb-label-inner | The label element of the thumb tooltip. |
| track | The track container. |
| steps | The track steps element. |
| inactive | The inactive element of the track. |
| fill | The filled part of the track. |

The following sample demonstrates how to style the track fill and thumb parts:

`sample="/inputs/slider/styling", height="120", alt="{Platform} Slider Styling Example"`



## API References

 - `HidePrimaryLabels`
 - `HideSecondaryLabels`
 - `HideTooltip`
 - `PrimaryTicks`
 - `RangeSlider`
 - `SecondaryTicks`
 - `SliderLabel`
 - `Slider`
 - `TickLabelRotation`
 - `TickOrientation`
 - `UpperBound`
 - `ValueFormatOptions`
 - `ValueFormat`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})
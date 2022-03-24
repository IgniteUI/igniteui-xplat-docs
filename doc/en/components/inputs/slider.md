---
title: $Platform$ Slider & Range Slider Components | $ProductName$
_description: Learn how to configure a selection in a given range by using the thumb track with $Platform$ Slider & Range Slider part of $ProductName$. Choose between single and range slider.
_keywords: $Platform$, UI controls, web widgets, UI widgets, $Platform$ Slider Components, Infragistics
mentionedTypes: ['Slider', 'SliderLabel', 'RangeSlider']
---

# $Platform$ Slider & Range Slider Overview

The $Platform$ Slider & Range Slider components allow selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider.

## $Platform$ Slider & Range Slider Example

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-overview"
           alt="$Platform$ Slider Example"
           github-src="inputs/slider/overview">
</code-view>

## Usage

<!-- WebComponents -->
First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

Before using the `Slider` and `RangeSlider`, you need to register them as follows:

```razor
IgbSliderModule.Register(IgniteUIBlazor);
IgbRangeSliderModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcSliderComponent, IgcRangeSliderComponent } from "igniteui-webcomponents";

defineComponents(IgcSliderComponent, IgcRangeSliderComponent);
```

The simplest way to start using the `Slider` and `RangeSlider` is as follows:

```html
<igc-slider value="40"></igc-slider>
<igc-range-slider lower="20" upper="70"></igc-range-slider>
```

```razor
<IgbSlider Value="40" />
<IgbRangeSlider Lower="20" Upper="70" />
```

### Value

The main difference between the Slider and Range Slider components is that the Slider component has a single thumb, while the Range Slider component has two thumbs. The single thumb of the Slider component displays its `Value` property. The two thumbs of the Range Slider component display its `Lower` and `Upper` value properties.

Both sliders emit two events when any of the values is changed. The `igcInput` event is emitted whenever a value is changed using keyboard or drag interaction while the `igcChange` event is emitted when the value change is committed on drag end or keyboard interaction.

<code-view style="height: 250px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-value"
           alt="$Platform$ Slider Value Example"
           github-src="inputs/slider/value">
</code-view>

While dragging a slider thumb, it displays its value in a tooltip. You could hide this tooltip using the `HideTooltip` property.

### Disabled

You can use the `Disabled` property of the sliders to disable their user interactions.

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-disabled"
           alt="$Platform$ Slider Disabled Example"
           github-src="inputs/slider/disabled">
</code-view>

### Constraints

The track of the sliders has a minimum and maximum values which are configured using the `Min` and `Max` properties. Additionally, you can restrict the thumb dragging using the `LowerBound` and `UpperBound` properties.

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-constraints"
           alt="$Platform$ Slider Constraints Example"
           github-src="inputs/slider/constraints">
</code-view>

### Step

The `Step` property specifies the granularity of the slider that the value must adhere to. By default, the slider track looks continuous. Setting the `DiscreteTrack` property of the slider to **true** will make it to display the steps on the track.

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-discrete"
           alt="$Platform$ Slider Discrete Track Example"
           github-src="inputs/slider/discrete">
</code-view>

If the `Step` property is set to `0`, no stepping is implied and any value in the slider range is allowed. In this case, the slider will look continuous even if `DiscreteTrack` is set to **true**.

### Tick Marks

The slider components could display tick marks and labels. The slider components support two types of tick marks: primary and secondary. In order to display the primary tick marks, you should set the `PrimaryTicks` property to a value greater than `1`. The number of primary ticks will be evenly distributed on the track. In order to display the secondary tick marks, you should set the `SecondaryTicks` property to a value greater than `0`. The value of `SecondaryTicks` specifies the number of secondary ticks between every two primary ticks.

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-ticks"
           alt="$Platform$ Slider Tick Marks Example"
           github-src="inputs/slider/ticks">
</code-view>

Additionally, you could configure the orientation of the tick marks using the `TickOrientation` property. By default, the `TickOrientation` value is `end` which displays the ticks below the slider track. You could set it to `start` which displays them above the track and `mirror` which mirrors the ticks above and below the track.

By default, the tick marks display labels with their values. You could modify the rotation of the tick labels using the `TickLabelRotation` property. Additionally, you could hide the labels of the primary and secondary ticks using the `HidePrimaryLabels` and `HideSecondaryLabels` properties.

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-tick-labels"
           alt="$Platform$ Slider Tick Mark Labels Example"
           github-src="inputs/slider/tick-labels">
</code-view>

### Value Format

If you want to format the thumb and tick label values, the slider provides `ValueFormat`, `ValueFormatOptions` and `Locale` properties. Тhe `ValueFormatOptions` allows you to specify the number of fraction and significant digits, style (decimal, currency, percent, unit), notation and others taking into account the specified `Locale`. The `ValueFormat` is a string which may contain the `{0}` identifier which will be replaced by the value with applied format options.

<code-view style="height: 230px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-value-format"
           alt="$Platform$ Slider Value Format Example"
           github-src="inputs/slider/value-format">
</code-view>

### Labels

In some cases you would want to format the values of the slider as string values i.e. map the values `[0, 1, 2]` to `['Low', 'Medium', 'High']`. For this scenario the slider allows you to define `SliderLabel` elements inside it. The text content of the slider labels is going to be used for thumb and tick labels. Please note that when slider labels are provided, the `Min`, `Max` and `Step` properties are automatically calculated so that they do not allow values that do not map to the provided labels. In the case of 'Low', 'Medium' and 'High' labels, `Min` is set to `0`, `Max` is set to `2` and `Step` is set to `1`.

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-labels"
           alt="$Platform$ Slider Labels Example"
           github-src="inputs/slider/labels">
</code-view>

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

<code-view style="height: 120px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/slider-styling"
           alt="$Platform$ Slider Styling Example"
           github-src="inputs/slider/styling">
</code-view>

<!-- WebComponents -->

## API Reference

* `Slider`
* `RangeSlider`

<!-- end: WebComponents -->

## Additional Resources

<!-- Blazor -->

* [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub**](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

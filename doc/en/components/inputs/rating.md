---
title: $Platform$ Rating
_description: With $ProductName$ Rating, allows users to view and provide feedback using unicode symbols, svg, or icons.
_keywords: $ProductName$, UI controls, $Platform$ widgets, web widgets, UI widgets, $Platform$, Native $Platform$ Components Suite, Native $Platform$ Controls, Native $Platform$ Components Library, $Platform$ Rating components, $Platform$ Rating controls
mentionedTypes: ["Rating"]
---

# $Platform$ Rating Overview

The $ProductName$ Rating component allows users to view and provide feedback.

<code-view style="height: 80px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/rating-basic" alt="$Platform$ Rating Basic Example"
           github-src="inputs/rating/basic">
</code-view>

<!-- WebComponents -->

First, you need to install the $ProductName$ by running the following command:

```cmd
npm install {PackageWebComponents}
```

<!-- end: WebComponents -->

Before using the `Rating`, you need to register it as follows:

<!-- WebComponents -->

```ts
import { defineComponents, IgcRatingComponent, IgcRatingSymbolComponent } from "igniteui-webcomponents";

defineComponents(IgcRatingComponent, IgcRatingSymbolComponent);
```

<!-- end: WebComponents -->

The simplest way to start using the `Rating` is as follows:

```html
<igc-rating></igc-rating>
```

This will create a five-star rating component that can be used to input and read data from.

## Using Custom Symbols

The `Rating` component allows you to use custom symbols in place of the default star symbol. If you want to use a different unicode symbol, use the `symbol` attribute.

```html
<igc-rating symbol="🍒"></igc-rating>
```

If you want to use anything other than unicode symbols, like SVG(s) or icons, then you should place the `RatingSymbol` between the opening and closing brackets of the `Rating`:

```html
<igc-rating>
  <igc-rating-symbol>💙</igc-rating-symbol>
  <igc-rating-symbol>💙</igc-rating-symbol>
  <igc-rating-symbol>💙</igc-rating-symbol>
  <igc-rating-symbol>💙</igc-rating-symbol>
  <igc-rating-symbol>💙</igc-rating-symbol>
</igc-rating>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/rating-custom" alt="$Platform$ Rating Custom Symbols Example"
           github-src="inputs/rating/custom">
</code-view>

> [!NOTE] Placing rating symbols between the opening and closing brackets of the rating component determines the max value to be used.

## Single Selection
The $ProductName$ Rating component has a single selection mode that allows users to provide different icons/elements for the different rating values. In this case, only one of the icons/elements can be selected and reflect the feedback given by the user. 

```html
<igc-rating single>
  <igc-rating-symbol>😣</igc-rating-symbol>
  <igc-rating-symbol>😔</igc-rating-symbol>
  <igc-rating-symbol>😐</igc-rating-symbol>
  <igc-rating-symbol>🙂</igc-rating-symbol>
  <igc-rating-symbol>😆</igc-rating-symbol>
</igc-rating>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/rating-custom" alt="$Platform$ Rating with Signle Selection"
           github-src="inputs/rating/custom">
</code-view>

> [!NOTE] Keep in mind that the `step` attribute doesn't work with single selection mode.

## Empty & Selected 
The $ProductName$ Rating component allows users to use different icons/elements for the empty and the selected state of a single rating value. To use this feature, you should provide a pair of icons for each rating symbol. For instance:

```html
<igc-rating-symbol>
  <igc-icon collection="default" name="bandage"></igc-icon>
  <igc-icon collection="default" name="bacteria" empty></igc-icon>
</igc-rating-symbol>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/rating-empty" alt="$Platform$ Rating with Empty and Selected state"
           github-src="inputs/rating/empty">
</code-view>

## Configuration

#### Symbol

The `symbol` attribute sets the unicode symbol to be used.

#### Value

The `value` attribute sets the current value of the component.

#### Label

The `label` attribute allows setting the label value of the rating component.

#### Value Format
A format string which sets [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). All instances of it will be replaced with the current value of the control. Important for screen-readers and useful for localization.

#### Max Value

The `max` attribute sets the maximum allowed value of the rating component.

#### Step

The `step` attribute sets the allowed fraction of steps between two symbols. Useful when splitting the rating symbols in halves.

#### Hover Preview

The `hover-preview` attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.

#### Read-Only

The `read-only` attribute allows the users to set the `Rating` in read-only mode. This attribute is useful when you want to use the component for information purposes only.

#### Disabled

The `disabled` attribute disables the component, making it impossible to select a value using the mouse or keyboard.

## Methods

#### Step Up

The `stepUp` method increments the value of the component by `n` steps. Determined by the `step` factor.

#### Step Down

The `stepDown` method decrements the value of the component by `n` steps. Determined by the `step` factor.

## Events

The `Rating` component emits two separate events - `igcHover` and `igcChange`.

#### Hover Event

The `igcHover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.

#### Change Event

The `igcChange` event is fired when the selected value changes.

## Styling

The `Rating` component provides base, label, symbol-Wrapper, and symbol that allow you to style the component symbols and its encompassing label.

<code-view style="height: 80px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/inputs/rating-styling" alt="$Platform$ Rating Styling Example"
           github-src="inputs/rating/styling">
</code-view>

<!-- WebComponents -->

## API Reference

- `Rating`

<!-- end: WebComponents -->

## Additional Resources

<!-- WebComponents -->

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->

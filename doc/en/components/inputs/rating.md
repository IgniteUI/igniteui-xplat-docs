---
title: {Platform} Rating
_description: With {ProductName} Rating, allows users to view and provide feedback using unicode symbols, svg, or icons.
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Rating components, {Platform} Rating controls
mentionedTypes: ["Rating"]
---

# {Platform} Rating Overview

The {ProductName} Rating component allows users to view and provide feedback.

`sample="/inputs/rating/basic", height="150", alt="{Platform} Rating Basic Example"`


<!-- WebComponents -->

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

<!-- end: WebComponents -->

<!-- React -->

First, you need to the install the corresponding {ProductName} npm package by running the following command:

```cmd
npm install igniteui-react
```

<!-- end: React -->

Before using the `Rating`, you need to register it as follows:

<!-- Blazor -->
```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRatingModule));
```

You will also need to link an additional CSS file to apply the styling to the `Rating` component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```
<!-- end: Blazor -->

<!-- WebComponents -->
```ts
import { defineComponents, IgcRatingComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRatingComponent);
```

For a complete introduction to the {ProductName}, read the [*Getting Started*](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<!-- React -->
```tsx
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->

The simplest way to start using the `Rating` is as follows:

<!-- WebComponents -->
```html
<igc-rating></igc-rating>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRating></IgbRating>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
  <IgrRating></IgrRating>
```
<!-- end: React -->

This will create a five-star rating component that can be used to input and read data from.

## Using Custom Symbols

The `Rating` component allows you to use custom symbols in place of the default star symbols. If you want to use a different symbol, like SVG, icon or another unicode symbol, you should place `RatingSymbol` components between the opening and closing brackets of the `Rating`:

<!-- WebComponents -->
```html
<igc-rating>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
</igc-rating>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRating>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
</IgbRating>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
  <IgrRating className="size-large" label="Rate Experience" step={.5} hoverPreview={true}>
    <IgrRatingSymbol>
        <IgrIcon name='heart' collection="material"></IgrIcon>
    </IgrRatingSymbol>
    <IgrRatingSymbol>
        <IgrIcon  name='heart' collection="material"></IgrIcon>                           
    </IgrRatingSymbol>
    <IgrRatingSymbol>
      	<IgrIcon  name='heart' collection="material"></IgrIcon>                           
    </IgrRatingSymbol>
    <IgrRatingSymbol>
       	<IgrIcon  name='heart' collection="material"></IgrIcon>                           
    </IgrRatingSymbol>
    <IgrRatingSymbol>
       	<IgrIcon  name='heart' collection="material"></IgrIcon>                           
    </IgrRatingSymbol>                        
</IgrRating> 
```
<!-- end: React -->

`sample="/inputs/rating/custom", height="150", alt="{Platform} Rating Custom Symbols Example"`


> The number of rating symbols between the opening and closing brackets of the rating component determines the max value.

## Single Selection
The {ProductName} Rating component has a single selection mode that allows users to provide different icons/elements for the different rating values. In this case, only one of the icons/elements can be selected and reflect the feedback given by the user.

<!-- WebComponents -->
```html
<igc-rating single>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
</igc-rating>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRating>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
</IgbRating>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
<IgrRating single={true}>
  <IgrRatingSymbol>                           
      <div>😣</div>	
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>                           
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>                           
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>                           
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>                           
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>                         
</IgrRating>
```
<!-- end: React -->

`sample="/inputs/rating/single-selection", height="150", alt="{Platform} Rating with Single Selection"`


> Keep in mind that the `step` attribute doesn't work with single selection mode.

## Empty & Selected
The {ProductName} Rating component allows users to use different icons/elements for the empty and the selected state of a single rating value. It is mandatory to provide 2 icons for each slot (empty and full) when declaring a symbol, even if they are the same. For instance:

<!-- WebComponents -->
```html
<igc-rating-symbol>
  <igc-icon collection="default" name="bandage"></igc-icon>
  <igc-icon collection="default" name="bacteria" slot="empty"></igc-icon>
</igc-rating-symbol>
```
<!-- end: WebComponents -->

<!-- Blazor -->
```razor
<IgbRatingSymbol>
  <IgbIcon Collection="material" IconName="bandage"></IgbIcon>
  <IgbIcon Collection="material" IconName="bacteria" slot="empty"></IgbIcon>
</IgbRatingSymbol>
```
<!-- end: Blazor -->

<!-- React -->
```tsx
<IgrRatingSymbol>
    <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
    <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div> 
</IgrRatingSymbol> 
```
<!-- end: React -->

`sample="/inputs/rating/empty", height="150", alt="{Platform} Rating with Empty and Selected state"`


## Configuration

#### Single

Turns on the `Single` visual mode for the rating. Useful when using symbols that communicate unique values, like feedback emoji faces.

#### Value

The `Value` attribute sets the current value of the component.

#### Label

The `Label` attribute allows setting the label value of the rating component.

#### Value Format
A format string which sets [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). All instances of it will be replaced with the current value of the control. Important for screen-readers and useful for localization.

#### Max Value

The `Max` attribute sets the maximum allowed value of the rating component.

#### Step

The `Step` attribute sets the allowed fraction of steps between two symbols. Useful when splitting the rating symbols in halves.

#### Hover Preview

<!-- WebComponents -->
The `hover-preview` attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.
<!-- end: WebComponents -->

<!-- Blazor -->
The `HoverPreview` attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.
<!-- end: Blazor -->

<!-- React -->
The `hoverPreview` attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.
<!-- end: React -->

#### Read-Only

The `ReadOnly` attribute allows the users to set the `Rating` in read-only mode. This attribute is useful when you want to use the component for information purposes only.

#### Disabled

The `Disabled` attribute disables the component, making it impossible to select a value using the mouse or keyboard.

## Methods

#### Step Up

The `StepUp` method increments the value of the component by `n` steps. Determined by the `step` factor.

#### Step Down

The `StepDown` method decrements the value of the component by `n` steps. Determined by the `step` factor.

## Events

<!-- WebComponents -->
The `Rating` component emits two separate events - `igcHover` and `igcChange`.
<!-- end: WebComponents -->

<!-- Blazor -->
The `Rating` component emits two separate events - `Hover` and `Change`.
<!-- end: Blazor -->

<!-- React -->
The `Rating` component emits two separate events - `hover` and `change`.
<!-- end: React -->

#### Hover Event

<!-- WebComponents -->
The `igcHover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.
<!-- end: WebComponents -->

<!-- Blazor -->
The `Hover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.
<!-- end: Blazor -->

<!-- React -->
The `hover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.
<!-- end: React -->

#### Change Event

<!-- WebComponents -->
The `igcChange` event is fired when the selected value changes.
<!-- end: WebComponents -->

<!-- Blazor -->
The `Change` event is fired when the selected value changes.
<!-- end: Blazor -->

<!-- React -->
The `change` event is fired when the selected value changes.
<!-- end: React -->

## Styling

The `Rating` component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `base` | The main wrapper which holds all of the rating elements. |
| `label` | The label part. |
| `value-label` | The value label part. |
| `symbols` | A wrapper for all rating symbols. |
| `symbol` | The part of the encapsulated default symbol. |
| `full` | The part of the encapsulated full symbols. |
| `empty` | The part of the encapsulated empty symbols. |

```css
igc-rating::part(full) {
  color: var(--ig-primary-500)
}

igc-rating::part(empty) {
  color: var(--ig-secondary-200);
}
```

`sample="/inputs/rating/styling", height="150", alt="{Platform} Rating Styling Example"`

## API Reference

- `Rating`
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

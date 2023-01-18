---
title: {Platform} ComboBox Component – {ProductName}
_description: {Platform} Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} ComboBox component
mentionedTypes: ['Combo', 'ComboItem', 'ComboHeader', 'ComboList']
---

# {Platform} Single Selection ComboBox

The {Platform} `ComboBox` supports single-selection mode and quick filtering of the list of items via the main input prompt. Users can quickly type in the item they are looking for and be presented with a list of options. Upon pressing the enter key, the first highlighted match will be selected.

## {Platform} Single Selectoin Example

To enable single-selection and quick filtering, set the `simplified` property on the `ComboBox` component. The user experience and keyboard navigation will mostly stay the same, but instead of having to type in your search query into a special filtering box above the list of options, the main input box will be used.

```html
<igc-combo simplified></igc-combo>
```

<code-view style="height:320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/combo-simplified"
           alt="{Platform} Simplified Combo Example"
           github-src="grids/combo/simplified">
</code-view>

<div class="divider--half"></div>

## Selection API

The selection API for a ComboBox with the `simplified` property applied mostly remains the same, however, there are some important differences compared to ComboBoxes that don't have this property set.

The main difference is that only one item can be selected at any time. For example, if you have specified a `ValueKey` for your combo component, passing more than one keys in the array of items to be selected/deselected will have no effect. Only the item matching the first key in the list will get selected. This also has means that any previously selected items will automatically get deselected upon making a new selection.

Calling the `Select` method with no arguments will selectt the first item in the list of options.
Calling the `Deselect` method with no arguments will clear any selected items.

Here's how to select/deselect an item programatically in a simplified combo.

#### Selecting items:

```ts
combo.select(); // will select the first item in the list of options
combo.select(['BG02']); // will clear the previous selection and select the item matching `BG02`
```

To deselect an item without making a new selection, call the `deselect` method.

#### Deselecting items:

```ts
combo.deselect(); // will deselect any previously selected item
combo.deselect(['BG02']); // will deselect the item matching `BG02`
```

## Disabled features

Naturally, some configuration options will have no effect in a simplfied ComboBox.

### Placeholder

Assigning a value to the `placeholder-search` property will yield no result since the filtering input that usually is placed above the list of options will not be present in a simplified ComboBox.

### Autofocusing the list of options

Setting the `autofocus-list` option on a simplified ComboBox will also have no effect.

## Keyboard Navigation

The keyboard navigation should behave the same as with a non-simplified ComboBox, except for the fact that now the main input plays the role of a filtering prompt and so all keyboard actions that apply to the filtering/search input are moved to the main input prompt.

## Other Features

All other features will behave the same as in a non-simplified ComboBox component.

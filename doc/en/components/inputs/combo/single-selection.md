---
title: {Platform} ComboBox Component – {ProductName}
_description: {Platform} Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} ComboBox component
mentionedTypes: ['Combo', 'Single Selection Combo', 'ComboItem', 'ComboHeader', 'ComboList']
---

# {Platform} Single Selection ComboBox

The {Platform} `ComboBox` supports single-selection mode and quick filtering of the list of items via the main input prompt. Users can quickly type in the item they are looking for and be presented with a list of options. Upon pressing the enter key, the first highlighted match will be selected.

## {Platform} Single Selection Example

To enable single-selection and quick filtering, set the `SingleSelect` property on the `ComboBox` component. The user experience and keyboard navigation will mostly stay the same, but instead of having to type in your search query into a special filtering box above the list of options, the main input box will be used.

```html
<igc-combo single-select></igc-combo>
```

```razor
<IgbCombo SingleSelect></IgbCombo>
```

`sample="/inputs/combo/simplified", height="400", alt="{Platform} Single Selection Combo Example"`

<div class="divider--half"></div>

## Selection API

The selection API for a ComboBox with the `SingleSelect` property applied mostly remains the same, however, there are some important differences compared to ComboBoxes that don't have this property set.

The main difference is that only one item can be selected at any time. For example, if you have specified a `ValueKey` for your combo component, passing more than one item to the `Select`/`Deselect` methods will have no effect. This also means that any previously selected items will automatically get deselected upon making a new selection.

Here's how to select/deselect an item programmatically in a single selection combo.

#### Selecting items:

```ts
// select the item matching the 'BG01' value of the value key field.
combo.select('BG01');
```

```razor
<IgbCombo SingleSelect @ref="Combo"></IgbCombo>

@code {
    private IgbCombo Combo;

    this.Combo.Select(new object[] { "UK01" });
}
```

To deselect an item without making a new selection, call the `deselect` method.

#### Deselecting items:

```ts
// deselect the item matching the 'BG01' value of the value key field.
combo.deselect('BG01');
```

```razor
<IgbCombo SingleSelect @ref="Combo"></IgbCombo>

@code {
    private IgbCombo Combo;

    this.Combo.Deselect(new object[] { "UK01" });
}
```

## Disabled features

Naturally, some configuration options will have no effect in a single selection ComboBox.

### Placeholder

Assigning a value to the `PlaceholderSearch` property will yield no result since the filtering input that usually is placed above the list of options will not be present in a single selection ComboBox.

### Autofocusing the list of options

Setting the `AutofocusList` option on a single selection ComboBox will also have no effect.

## Keyboard Navigation

The keyboard navigation should behave the same as with a non-single selection ComboBox, except for the fact that now the main input plays the role of a filtering prompt and so all keyboard actions that apply to the filtering/search input are moved to the main input prompt.

## Other Features

All other features will behave the same as in a non-single selection ComboBox component.

## API Reference

* `Combo`

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

---
title: {Platform} Combo Component – {ProductName}
_description: {ProductName} Combo component
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Combo component
mentionedTypes: ['Combo']
---

# {Platform} Combo Overview

The {ProductName} Combo component provides a list of options from which users can make a selection. It displays all options in a virtualized list of items, meaning the combo box can simultaneously show thousands of records, where one or more options can be selected. Additionally, the component features case-sensitive filtering, grouping, complex data binding, custom templates and more.

## {Platform} Combo Example

<code-view style="height:320px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/combo-overview"
           alt="{Platform} Combo Example"
           github-src="grids/combo/overview">
</code-view>

<div class="divider--half"></div>

## Usage

First, you need to install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Before using the `Combo` component, you need to register it together with its additional components:

```ts
import {
    defineComponents,
    IgcComboComponent,
    IgcComboItemComponent, 
    IgcInputComponent, 
    IgcIconComponent
}
from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcComboComponent, IgcComboItemComponent, IgcInputComponent, IgcIconComponent);
```

Then, we will bound an array of objects to the combo data source used for building the list of options:

```ts
private combo: IgcComboComponent<object>;

constructor() {
    this.combo = document.getElementById('combo') as IgcComboComponent<object>;
    this.combo.data = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01'}, { name: 'New York', id: 'NY01'}];
}
```

```html
<igc-combo id="combo" display-key="name" value-key="id"></igc-combo>
```

### Data value and display properties

Since the combobox is bound to an array of complex data (i.e. objects), we need to specify a property that the control will use to handle the selected items. The component exposes the following properties:

 - `displayKey` - *Optional,* ***required*** *for object arrays* - Determines which column in the data source is used as the display value. If no value is specified for `displayKey`, the combobox will use the specified `valueKey` (if any).

 - `valueKey` - *Optional,* ***recommended*** *for object arrays* - Determines which column in the data source is used as the value. If `valueKey` is omitted, the combobox value will use references to the data entries.

In our case, we want the combobox to display the `name` of each city and the combobox value to store the `id` of each city. Therefore, we are providing these properties to the combobox's `displayKey` and `valueKey`.

> [!Note]
> When the data source is comprised of a simple type (e.g. `string[]`, `number[]`), **do not** specify a `valueKey` and `displayKey`.

### Selection API

The combobox component exposes API that allows getting and manipulating the current selection state of the control.

Except for selecting combo items from the list options manually, users can select items programmatically. One way to do this is via the combo `select` method. You can pass an array of items that should be selected or an empty array if you want to select all of the options in the combobox list.

The reversed action is also available using the combo `deselect` method. In this case, if an empty array is passed, all of the options in the combobox list will be deselected.

### Validation

In addition, the {ProductName} Combo component supports most of the `Input` properties, such as `required`, `disabled`, `autofocus`, `invalid`, etc. The component also exposes two methods bound to its validation:

- checkValidity() - checks for validity and focuses the component if it doesn't satisfy the validation constraints.
- reportValidity() - checks for validity and returns true if the component satisfies the validation constraints.

## Keyboard Navigation

When the combo component is focused and the list of options is **not visible**:

- Open the list of options using <kbd>Down/Alt + Down</kbd> keys.

When the combo component is focused and the list of options is **visible**:

- Using the <kbd>Down</kbd> key will activate the next item in the list.
- Using the <kbd>Up</kbd> key will activate the previous item in the list. If the first item is already active it will focus the input.
- Using the <kbd>Home</kbd> or <kbd>End</kbd> keys will activate the first or the last item in the list.
- Using the <kbd>Space</kbd> key will select the active item.
- Using the <kbd>Enter</kbd> key will select the active item and close the list of options.
- Using the <kbd>Esc</kbd> or <kbd>Tab/Shift + Tab</kbd> keys will close the list of options.

## Combo Styling

You can change the appearance of the {ProductName} `Combo` component and its items, by using the exposed CSS parts listed below:

### CSS Parts

Part name | Description
---------|------------
`target` | The encapsulated igc-input that holds the list of selected options.
`clear-icon` | A clear-icon wrapper that renders content inside the suffix wrapper.
`toggle-icon` | A toggle-icon wrapper that renders content inside the suffix wrapper.
`helper-text` | A helper-text wrapper that renders content below the target input.
`list-wrapper` | A list- wrapper that holds the filter-input and the `ComboList` component.
`filter-input` | A wrapper that holds the igc-input used for filtering.
`search-input` | The encapsulated igc-input that holds the filter value.
`case-icon`   | A case-icon wrapper that renders content inside the suffix of the filter-input.
`empty` | A wrapper that holds the content of the empty list.
`group-header` | A wrapper that holds the text content of the group headers.
`list` | A wrapper that holds the list of combo options.
`item` | An item-wrapper that holds the content of the combo items.
`selected` | A wrapper that holds the content of the combo selected items.
`active` | A wrapper that holds the content of the combo active items.

<code-view style="height: 380px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/combo-styling"
           alt="{Platform} Combo Styling Example"
           github-src="grids/combo/styling">
</code-view>

## API Reference

* `Combo`
* `ComboItem`
* `ComboHeader`
* `ComboList`

## Additional Resources

* [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
